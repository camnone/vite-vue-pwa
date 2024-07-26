import fs from "node:fs/promises";
import express from "express";
import path from "path";
import geoip from "geoip-lite";
// Constants
const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Cached production assets
const templateHtml = isProduction
  ? await fs.readFile("./dist/client/index.html", "utf-8")
  : "";
const ssrManifest = isProduction
  ? await fs.readFile("./dist/client/.vite/ssr-manifest.json", "utf-8")
  : undefined;

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });
  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client", { extensions: [] }));
}

app.get("/api/", async (req, res) => {
  const newBody = req.query;

  let _filePath = "./public/manifest.webmanifest.json";

  if (isProduction) {
    _filePath = "./dist/client/manifest.webmanifest.json";
  }
  const template = await fs.readFile(_filePath, "utf-8");
  const data = JSON.parse(newBody["manifest"]);
  const body = JSON.parse(template);
  const filePath = path.resolve(_filePath);
  body["name"] = data["name"];
  body["short_name"] = data["short_name"];
  body["url"] = data["url"];
  body["descriptions"] = data["descriptions"];
  body["url_handlers"][0]["origin"] = data["url"];
  body["icons"][0]["src"] = data["icons"]["192"];
  body["icons"][1]["src"] = data["icons"]["256"];
  body["icons"][2]["src"] = data["icons"]["384"];
  body["icons"][3]["src"] = data["icons"]["512"];

  fs.writeFile(filePath, JSON.stringify(body, null, 2));
  return res.json(body).status(200);
});
app.set("trust proxy", true);
app.get("/api/ip", async (req, res) => {
  try {
    console.log(123);
    return res
      .json({
        ip: req?.headers["cf-connecting-ip"] ?? "",
        language: req?.headers["cf-ipcountry"].toLowerCase() ?? "",
        userAgent: req?.headers["user-agent"] ?? "",
      })
      .status(200);
  } catch (e) {
    console.log(e);
    return res.status(400).send(e);
  }
});

// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;
    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);

      render = (await vite.ssrLoadModule("/src/entry-server.ts")).render;
    } else {
      template = templateHtml;
      render = (await import("./dist/server/entry-server.js")).render;
    }

    const rendered = await render(url, ssrManifest);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
