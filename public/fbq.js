/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
fbq.version = "2.9.174";
fbq._releaseSegment = "stable";
fbq.pendingConfigs = ["global_config"];
fbq.__openBridgeRollout = 1.0;
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    var g = (function () {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g =
                  a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ](),
                a;
              !(d = (a = g.next()).done);
              d = !0
            ) {
              c.push(a.value);
              if (b && c.length === b) break;
            }
          } catch (a) {
            (e = !0), (f = a);
          } finally {
            try {
              !d && g["return"] && g["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function (b, c) {
          if (Array.isArray(b)) return b;
          else if (
            (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
            Object(b)
          )
            return a(b, c);
          else
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
        };
      })(),
      h = (function () {
        function a(a, b) {
          for (var c = 0; c < b.length; c++) {
            var d = b[c];
            d.enumerable = d.enumerable || !1;
            d.configurable = !0;
            "value" in d && (d.writable = !0);
            Object.defineProperty(a, d.key, d);
          }
        }
        return function (b, c, d) {
          c && a(b.prototype, c);
          d && a(b, d);
          return b;
        };
      })(),
      i =
        typeof Symbol === "function" &&
        typeof (typeof Symbol === "function"
          ? Symbol.iterator
          : "@@iterator") === "symbol"
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                typeof Symbol === "function" &&
                a.constructor === Symbol &&
                a !==
                  (typeof Symbol === "function"
                    ? Symbol.prototype
                    : "@@prototype")
                ? "symbol"
                : typeof a;
            };
    function j(a, b) {
      if (!a)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return b && (typeof b === "object" || typeof b === "function") ? b : a;
    }
    function k(a, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof b
        );
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      });
      b &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, b)
          : (a.__proto__ = b));
    }
    function l(a, b, c) {
      b in a
        ? Object.defineProperty(a, b, {
            value: c,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (a[b] = c);
      return a;
    }
    function m(a) {
      if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
      } else return Array.from(a);
    }
    function n(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("generateUUID", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          function a() {
            var a = new Date().getTime(),
              b = "xxxxxxxsx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                /[xy]/g,
                function (b) {
                  var c = (a + Math.random() * 16) % 16 | 0;
                  a = Math.floor(a / 16);
                  return (b == "x" ? c : (c & 3) | 8).toString(16);
                }
              );
            return b;
          }
          j.exports = a;
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsConvertNodeToHTMLElement", function () {
      return (function (f, g, h, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          function a(a) {
            if (
              (typeof HTMLElement === "undefined"
                ? "undefined"
                : i(HTMLElement)) === "object"
            )
              return a instanceof HTMLElement;
            else
              return (
                a !== null &&
                (typeof a === "undefined" ? "undefined" : i(a)) === "object" &&
                a.nodeType === Node.ELEMENT_NODE &&
                typeof a.nodeName === "string"
              );
          }
          function b(b) {
            return !a(b) ? null : b;
          }
          k.exports = b;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsEventValidation", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logUserError,
            c = /^[+-]?\d+(\.\d+)?$/,
            d = "number",
            e = "currency_code",
            g = {
              AED: 1,
              ARS: 1,
              AUD: 1,
              BOB: 1,
              BRL: 1,
              CAD: 1,
              CHF: 1,
              CLP: 1,
              CNY: 1,
              COP: 1,
              CRC: 1,
              CZK: 1,
              DKK: 1,
              EUR: 1,
              GBP: 1,
              GTQ: 1,
              HKD: 1,
              HNL: 1,
              HUF: 1,
              IDR: 1,
              ILS: 1,
              INR: 1,
              ISK: 1,
              JPY: 1,
              KRW: 1,
              MOP: 1,
              MXN: 1,
              MYR: 1,
              NIO: 1,
              NOK: 1,
              NZD: 1,
              PEN: 1,
              PHP: 1,
              PLN: 1,
              PYG: 1,
              QAR: 1,
              RON: 1,
              RUB: 1,
              SAR: 1,
              SEK: 1,
              SGD: 1,
              THB: 1,
              TRY: 1,
              TWD: 1,
              USD: 1,
              UYU: 1,
              VEF: 1,
              VND: 1,
              ZAR: 1,
            };
          a = {
            value: { isRequired: !0, type: d },
            currency: { isRequired: !0, type: e },
          };
          var h = {
              AddPaymentInfo: {},
              AddToCart: {},
              AddToWishlist: {},
              CompleteRegistration: {},
              Contact: {},
              CustomEvent: { validationSchema: { event: { isRequired: !0 } } },
              CustomizeProduct: {},
              Donate: {},
              FindLocation: {},
              InitiateCheckout: {},
              Lead: {},
              PageView: {},
              PixelInitialized: {},
              Purchase: { validationSchema: a },
              Schedule: {},
              Search: {},
              StartTrial: {},
              SubmitApplication: {},
              Subscribe: {},
              ViewContent: {},
            },
            i = {
              agent: !0,
              automaticmatchingconfig: !0,
              codeless: !0,
              tracksingleonly: !0,
              "cbdata.onetrustid": !0,
            },
            j = Object.prototype.hasOwnProperty;
          function l() {
            return { error: null, warnings: [] };
          }
          function m(a) {
            return { error: a, warnings: [] };
          }
          function n(a) {
            return { error: null, warnings: a };
          }
          function o(a) {
            if (a) {
              a = a.toLowerCase();
              var b = i[a];
              if (b !== !0)
                return m({
                  metadata: a,
                  type: "UNSUPPORTED_METADATA_ARGUMENT",
                });
            }
            return l();
          }
          function p(a) {
            var b =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {};
            if (!a) return m({ type: "NO_EVENT_NAME" });
            var c = h[a];
            return !c
              ? n([{ eventName: a, type: "NONSTANDARD_EVENT" }])
              : q(a, b, c);
          }
          function q(a, b, f) {
            f = f.validationSchema;
            var h = [];
            for (var i in f)
              if (j.call(f, i)) {
                var k = f[i],
                  l = b[i];
                if (k) {
                  if (k.isRequired != null && !j.call(b, i))
                    return m({
                      eventName: a,
                      param: i,
                      type: "REQUIRED_PARAM_MISSING",
                    });
                  if (k.type != null && typeof k.type === "string") {
                    var o = !0;
                    switch (k.type) {
                      case d:
                        k =
                          (typeof l === "string" || typeof l === "number") &&
                          c.test("" + l);
                        k &&
                          Number(l) < 0 &&
                          h.push({
                            eventName: a ? a : "null",
                            param: i,
                            type: "NEGATIVE_EVENT_PARAM",
                          });
                        o = k;
                        break;
                      case e:
                        o = typeof l === "string" && !!g[l.toUpperCase()];
                        break;
                    }
                    if (!o)
                      return m({
                        eventName: a,
                        param: i,
                        type: "INVALID_PARAM",
                      });
                  }
                }
              }
            return n(h);
          }
          function r(a, c) {
            a = p(a, c);
            a.error && b(a.error);
            if (a.warnings)
              for (c = 0; c < a.warnings.length; c++) b(a.warnings[c]);
            return a;
          }
          k.exports = {
            validateEvent: p,
            validateEventAndLog: r,
            validateMetadata: o,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsActionIDConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a.coerce;
            a = a.Typed;
            a = a.objectWithFields({
              portNumber: a.withValidation({
                def: a.number(),
                validators: [
                  function (a) {
                    return a > 0;
                  },
                ],
              }),
              ttlInHour: a.withValidation({
                def: a.number(),
                validators: [
                  function (a) {
                    return a > 0;
                  },
                ],
              }),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsBaseEvent", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.map,
            c = a.keys;
          a = (function () {
            function a(b) {
              n(this, a),
                (this._regKey = 0),
                (this._subscriptions = {}),
                (this._coerceArgs = b || null);
            }
            h(a, [
              {
                key: "listen",
                value: function (a) {
                  var b = this,
                    c = "" + this._regKey++;
                  this._subscriptions[c] = a;
                  return function () {
                    delete b._subscriptions[c];
                  };
                },
              },
              {
                key: "listenOnce",
                value: function (a) {
                  var b = null,
                    c = function () {
                      b && b();
                      b = null;
                      return a.apply(void 0, arguments);
                    };
                  b = this.listen(c);
                  return b;
                },
              },
              {
                key: "trigger",
                value: function () {
                  var a = this;
                  for (
                    var d = arguments.length, e = Array(d), f = 0;
                    f < d;
                    f++
                  )
                    e[f] = arguments[f];
                  return b(c(this._subscriptions), function (b) {
                    if (b in a._subscriptions && a._subscriptions[b] != null) {
                      var c;
                      return (c = a._subscriptions)[b].apply(c, e);
                    } else return null;
                  });
                },
              },
              {
                key: "triggerWeakly",
                value: function () {
                  var a =
                    this._coerceArgs != null
                      ? this._coerceArgs.apply(this, arguments)
                      : null;
                  return a == null ? [] : this.trigger.apply(this, m(a));
                },
              },
            ]);
            return a;
          })();
          l.exports = a;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsBatcher", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsConfigStore"),
            b = 1e3,
            c = 10;
          function d() {
            var b = a.get(null, "batching");
            return b != null ? b.maxBatchSize : c;
          }
          function e() {
            var c = a.get(null, "batching");
            return c != null ? c.batchWaitTimeMs : b;
          }
          var i = (function () {
            function a(b) {
              n(this, a),
                (this._waitHandle = null),
                (this._data = []),
                (this._cb = b);
            }
            h(a, [
              {
                key: "addToBatch",
                value: function (a) {
                  var b = this;
                  this._waitHandle == null &&
                    (this._waitHandle = g.setTimeout(function () {
                      (b._waitHandle = null), b.forceEndBatch();
                    }, e()));
                  this._data.push(a);
                  this._data.length >= d() && this.forceEndBatch();
                },
              },
              {
                key: "forceEndBatch",
                value: function () {
                  this._waitHandle != null &&
                    (g.clearTimeout(this._waitHandle),
                    (this._waitHandle = null)),
                    this._data.length > 0 && this._cb(this._data),
                    (this._data = []);
                },
              },
            ]);
            return a;
          })();
          l.exports = i;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsBrowserPropertiesConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              delayInMs: b.allowNull(b.number()),
              enableEventSuppression: b.allowNull(b["boolean"]()),
              enableBackupTimeout: b.allowNull(b["boolean"]()),
              experiment: b.allowNull(b.string()),
              fbcParamsConfig: b.allowNull(
                b.objectWithFields({
                  params: b.arrayOf(
                    b.objectWithFields({
                      ebp_path: b.string(),
                      prefix: b.string(),
                      query: b.string(),
                    })
                  ),
                })
              ),
              enableFbcParamSplit: b.allowNull(b["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsBufferConfigTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.Typed;
          a.coerce;
          a = b.objectWithFields({
            delayInMs: b.number(),
            experimentName: b.allowNull(b.string()),
            enableMultiEid: b.allowNull(b["boolean"]()),
          });
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsCCRuleEvaluatorConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              ccRules: b.allowNull(
                b.arrayOf(
                  b.allowNull(
                    b.objectWithFields({
                      id: b.allowNull(b.stringOrNumber()),
                      rule: b.allowNull(b.objectOrString()),
                    })
                  )
                )
              ),
              wcaRules: b.allowNull(
                b.arrayOf(
                  b.allowNull(
                    b.objectWithFields({
                      id: b.allowNull(b.stringOrNumber()),
                      rule: b.allowNull(b.objectOrString()),
                    })
                  )
                )
              ),
              valueRules: b.allowNull(
                b.arrayOf(
                  b.allowNull(
                    b.objectWithFields({
                      id: b.allowNull(b.string()),
                      rule: b.allowNull(b.object()),
                    })
                  )
                )
              ),
              blacklistedIframeReferrers: b.allowNull(b.mapOf(b["boolean"]())),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsClientHintConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              delayInMs: b.allowNull(b.number()),
              disableBackupTimeout: b.allowNull(b["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsClientSidePixelForkingConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a.coerce;
            a = a.Typed;
            a = a.objectWithFields({
              forkedPixelIds: a.allowNull(a.arrayOf(a.string())),
              forkedPixelIdsInBrowserChannel: a.allowNull(
                a.arrayOf(a.string())
              ),
              forkedPixelIdsInServerChannel: a.allowNull(a.arrayOf(a.string())),
              forkedPixelsInBrowserChannel: a.arrayOf(
                a.objectWithFields({
                  destination_pixel_id: a.string(),
                  domains: a.allowNull(a.arrayOf(a.string())),
                })
              ),
              forkedPixelsInServerChannel: a.arrayOf(
                a.objectWithFields({
                  destination_pixel_id: a.string(),
                  domains: a.allowNull(a.arrayOf(a.string())),
                })
              ),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "signalsFBEventsCoerceAutomaticMatchingConfig",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.coerce;
            a = a.Typed;
            var c = a.objectWithFields({
              selectedMatchKeys: a.arrayOf(a.string()),
            });
            k.exports = function (a) {
              return b(a, c);
            };
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "signalsFBEventsCoerceBatchingConfig",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed,
              c = a.coerce,
              d = a.enforce,
              e = function (a) {
                var e = c(
                  a,
                  b.objectWithFields({
                    max_batch_size: b.number(),
                    wait_time_ms: b.number(),
                  })
                );
                return e != null
                  ? {
                      batchWaitTimeMs: e.wait_time_ms,
                      maxBatchSize: e.max_batch_size,
                    }
                  : d(
                      a,
                      b.objectWithFields({
                        batchWaitTimeMs: b.number(),
                        maxBatchSize: b.number(),
                      })
                    );
              };
            k.exports = function (a) {
              return c(a, e);
            };
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "signalsFBEventsCoerceInferedEventsConfig",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.coerce;
            a = a.Typed;
            var c = a.objectWithFields({
              buttonSelector: a.allowNull(a.string()),
              disableRestrictedData: a.allowNull(a["boolean"]()),
            });
            k.exports = function (a) {
              return b(a, c);
            };
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "signalsFBEventsCoerceParameterExtractors",
      function () {
        return (function (g, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsUtils"),
              b = a.filter,
              c = a.map,
              d = f.getFbeventsModules(
                "signalsFBEventsCoerceStandardParameter"
              );
            function e(a) {
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              var b = a.domain_uri,
                c = a.event_type,
                d = a.extractor_type;
              a = a.id;
              b = typeof b === "string" ? b : null;
              c = c != null && typeof c === "string" && c !== "" ? c : null;
              a = a != null && typeof a === "string" && a !== "" ? a : null;
              d =
                d === "CONSTANT_VALUE" ||
                d === "CSS" ||
                d === "GLOBAL_VARIABLE" ||
                d === "GTM" ||
                d === "JSON_LD" ||
                d === "META_TAG" ||
                d === "OPEN_GRAPH" ||
                d === "RDFA" ||
                d === "SCHEMA_DOT_ORG" ||
                d === "URI"
                  ? d
                  : null;
              return b != null && c != null && a != null && d != null
                ? { domain_uri: b, event_type: c, extractor_type: d, id: a }
                : null;
            }
            function g(a) {
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              a = a.extractor_config;
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              var b = a.parameter_type;
              a = a.value;
              b = d(b);
              a = a != null && typeof a === "string" && a !== "" ? a : null;
              return b != null && a != null
                ? { parameter_type: b, value: a }
                : null;
            }
            function h(a) {
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              var b = a.parameter_type;
              a = a.selector;
              b = d(b);
              a = a != null && typeof a === "string" && a !== "" ? a : null;
              return b != null && a != null
                ? { parameter_type: b, selector: a }
                : null;
            }
            function j(a) {
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              a = a.extractor_config;
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              a = a.parameter_selectors;
              if (Array.isArray(a)) {
                a = c(a, h);
                var d = b(a, Boolean);
                if (a.length === d.length) return { parameter_selectors: d };
              }
              return null;
            }
            function k(a) {
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              a = a.extractor_config;
              if (
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              var b = a.context,
                c = a.parameter_type;
              a = a.value;
              b = b != null && typeof b === "string" && b !== "" ? b : null;
              c = d(c);
              a = a != null && typeof a === "string" && a !== "" ? a : null;
              return b != null && c != null && a != null
                ? { context: b, parameter_type: c, value: a }
                : null;
            }
            function m(a) {
              var b = e(a);
              if (
                b == null ||
                a == null ||
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object"
              )
                return null;
              var c = b.domain_uri,
                d = b.event_type,
                f = b.extractor_type;
              b = b.id;
              if (f === "CSS") {
                var h = j(a);
                if (h != null)
                  return {
                    domain_uri: c,
                    event_type: d,
                    extractor_config: h,
                    extractor_type: "CSS",
                    id: b,
                  };
              }
              if (f === "CONSTANT_VALUE") {
                h = g(a);
                if (h != null)
                  return {
                    domain_uri: c,
                    event_type: d,
                    extractor_config: h,
                    extractor_type: "CONSTANT_VALUE",
                    id: b,
                  };
              }
              if (f === "GLOBAL_VARIABLE")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "GLOBAL_VARIABLE",
                  id: b,
                };
              if (f === "GTM")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "GTM",
                  id: b,
                };
              if (f === "JSON_LD")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "JSON_LD",
                  id: b,
                };
              if (f === "META_TAG")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "META_TAG",
                  id: b,
                };
              if (f === "OPEN_GRAPH")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "OPEN_GRAPH",
                  id: b,
                };
              if (f === "RDFA")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "RDFA",
                  id: b,
                };
              if (f === "SCHEMA_DOT_ORG")
                return {
                  domain_uri: c,
                  event_type: d,
                  extractor_type: "SCHEMA_DOT_ORG",
                  id: b,
                };
              if (f === "URI") {
                h = k(a);
                if (h != null)
                  return {
                    domain_uri: c,
                    event_type: d,
                    extractor_config: h,
                    extractor_type: "URI",
                    id: b,
                  };
              }
              return null;
            }
            l.exports = m;
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsCoercePixelID", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logUserError;
          a = f.getFbeventsModules("SignalsFBEventsTyped");
          var c = a.Typed,
            d = a.coerce;
          function e(a) {
            a = d(a, c.fbid());
            if (a == null) {
              var e = JSON.stringify(a);
              b({
                pixelID: e != null ? e : "undefined",
                type: "INVALID_PIXEL_ID",
              });
              return null;
            }
            return a;
          }
          k.exports = e;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsCoercePrimitives", function () {
      return (function (g, h, j, k) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsUtils"),
            c = b.filter,
            d = b.map,
            e = b.reduce;
          function g(a) {
            return Object.values(a);
          }
          function h(a) {
            return typeof a === "boolean" ? a : null;
          }
          function j(a) {
            return typeof a === "number" ? a : null;
          }
          function k(a) {
            return typeof a === "string" ? a : null;
          }
          function n(a) {
            return (typeof a === "undefined" ? "undefined" : i(a)) ===
              "object" &&
              !Array.isArray(a) &&
              a != null
              ? a
              : null;
          }
          function o(a) {
            return Array.isArray(a) ? a : null;
          }
          function p(a, b) {
            return g(a).includes(b) ? b : null;
          }
          function q(a, b) {
            a = o(a);
            return a == null
              ? null
              : c(d(a, b), function (a) {
                  return a != null;
                });
          }
          function r(a, b) {
            var c = o(a);
            if (c == null) return null;
            a = q(a, b);
            return a == null ? null : a.length === c.length ? a : null;
          }
          function s(b, c) {
            var d = n(b);
            if (d == null) return null;
            b = e(
              Object.keys(d),
              function (b, e) {
                var f = c(d[e]);
                return f == null ? b : a({}, b, l({}, e, f));
              },
              {}
            );
            return Object.keys(d).length === Object.keys(b).length ? b : null;
          }
          function t(a) {
            var b = function (b) {
              return a(b);
            };
            b.nullable = !0;
            return b;
          }
          function u(b, c) {
            var d = n(b);
            if (d == null) return null;
            b = Object.keys(c).reduce(function (b, e) {
              if (b == null) return null;
              var f = c[e],
                g = d[e];
              if (f.nullable === !0 && g == null)
                return a({}, b, l({}, e, null));
              f = f(g);
              return f == null ? null : a({}, b, l({}, e, f));
            }, {});
            return b != null ? Object.freeze(b) : null;
          }
          m.exports = {
            coerceArray: o,
            coerceArrayFilteringNulls: q,
            coerceArrayOf: r,
            coerceBoolean: h,
            coerceEnum: p,
            coerceMapOf: s,
            coerceNullableField: t,
            coerceNumber: j,
            coerceObject: n,
            coerceObjectWithFields: u,
            coerceString: k,
          };
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "signalsFBEventsCoerceStandardParameter",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsUtils");
            a = a.FBSet;
            var b = new a([
              "content_category",
              "content_ids",
              "content_name",
              "content_type",
              "currency",
              "contents",
              "num_items",
              "order_id",
              "predicted_ltv",
              "search_string",
              "status",
              "subscription_id",
              "value",
              "id",
              "item_price",
              "quantity",
              "ct",
              "db",
              "em",
              "external_id",
              "fn",
              "ge",
              "ln",
              "namespace",
              "ph",
              "st",
              "zp",
            ]);
            function c(a) {
              return typeof a === "string" && b.has(a) ? a : null;
            }
            k.exports = c;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsConfigLoadedEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("signalsFBEventsCoercePixelID");
          function c(a) {
            a = b(a);
            return a != null ? [a] : null;
          }
          a = new a(c);
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsConfigStore", function () {
      return (function (g, i, j, k) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules(
              "signalsFBEventsCoerceAutomaticMatchingConfig"
            ),
            b = f.getFbeventsModules("signalsFBEventsCoerceBatchingConfig"),
            c = f.getFbeventsModules(
              "signalsFBEventsCoerceInferedEventsConfig"
            ),
            d = f.getFbeventsModules("signalsFBEventsCoercePixelID"),
            e = f.getFbeventsModules("SignalsFBEventsLogging"),
            g = e.logError,
            i = f.getFbeventsModules("SignalsFBEventsQE");
          e = f.getFbeventsModules(
            "SignalsFBEventsBrowserPropertiesConfigTypedef"
          );
          var j = f.getFbeventsModules("SignalsFBEventsBufferConfigTypedef"),
            k = f.getFbeventsModules(
              "SignalsFBEventsESTRuleEngineConfigTypedef"
            ),
            o = f.getFbeventsModules(
              "SignalsFBEventsDataProcessingOptionsConfigTypedef"
            ),
            p = f.getFbeventsModules(
              "SignalsFBEventsDefaultCustomDataConfigTypedef"
            ),
            q = f.getFbeventsModules("SignalsFBEventsMicrodataConfigTypedef"),
            r = f.getFbeventsModules("SignalsFBEventsOpenBridgeConfigTypedef"),
            s = f.getFbeventsModules(
              "SignalsFBEventsParallelFireConfigTypedef"
            ),
            t = f.getFbeventsModules("SignalsFBEventsProhibitedSourcesTypedef"),
            u = f.getFbeventsModules("SignalsFBEventsTyped"),
            v = u.Typed,
            w = u.coerce;
          u = f.getFbeventsModules("SignalsFBEventsUnwantedDataTypedef");
          var x = f.getFbeventsModules(
              "SignalsFBEventsEventValidationConfigTypedef"
            ),
            y = f.getFbeventsModules(
              "SignalsFBEventsProtectedDataModeConfigTypedef"
            ),
            z = f.getFbeventsModules("SignalsFBEventsClientHintConfigTypedef"),
            A = f.getFbeventsModules(
              "SignalsFBEventsCCRuleEvaluatorConfigTypedef"
            ),
            B = f.getFbeventsModules(
              "SignalsFBEventsRestrictedDomainsConfigTypedef"
            ),
            C = f.getFbeventsModules(
              "SignalsFBEventsIABPCMAEBridgeConfigTypedef"
            ),
            D = f.getFbeventsModules(
              "SignalsFBEventsCookieDeprecationLabelConfigTypedef"
            ),
            E = f.getFbeventsModules(
              "SignalsFBEventsUnwantedEventsConfigTypedef"
            ),
            F = f.getFbeventsModules(
              "SignalsFBEventsUnwantedEventNamesConfigTypedef"
            ),
            G = f.getFbeventsModules(
              "SignalsFBEventsUnwantedParamsConfigTypedef"
            ),
            H = f.getFbeventsModules(
              "SignalsFBEventsStandardParamChecksConfigTypedef"
            ),
            I = f.getFbeventsModules(
              "SignalsFBEventsClientSidePixelForkingConfigTypedef"
            ),
            J = f.getFbeventsModules("SignalsFBEventsCookieConfigTypedef"),
            K = f.getFbeventsModules("SignalsFBEventsActionIDConfigTypedef"),
            L = f.getFbeventsModules("SignalsFBEventsGatingConfigTypedef"),
            M = f.getFbeventsModules(
              "SignalsFBEventsProhibitedPixelConfigTypedef"
            ),
            N = "global",
            O = {
              automaticMatching: a,
              openbridge: r,
              batching: b,
              inferredEvents: c,
              microdata: q,
              prohibitedSources: t,
              unwantedData: u,
              dataProcessingOptions: o,
              parallelfire: s,
              buffer: j,
              browserProperties: e,
              defaultCustomData: p,
              estRuleEngine: k,
              eventValidation: x,
              protectedDataMode: y,
              clientHint: z,
              ccRuleEvaluator: A,
              restrictedDomains: B,
              IABPCMAEBridge: C,
              cookieDeprecationLabel: D,
              unwantedEvents: E,
              unwantedEventNames: F,
              unwantedParams: G,
              standardParamChecks: H,
              clientSidePixelForking: I,
              cookie: J,
              actionID: K,
              gating: L,
              prohibitedPixels: M,
            };
          a = (function () {
            function a() {
              var b;
              n(this, a);
              this._configStore =
                ((b = {
                  automaticMatching: {},
                  batching: {},
                  inferredEvents: {},
                  microdata: {},
                  prohibitedSources: {},
                  unwantedData: {},
                  dataProcessingOptions: {},
                  openbridge: {},
                  parallelfire: {},
                  buffer: {},
                  defaultCustomData: {},
                  estRuleEngine: {},
                }),
                l(b, "defaultCustomData", {}),
                l(b, "browserProperties", {}),
                l(b, "eventValidation", {}),
                l(b, "protectedDataMode", {}),
                l(b, "clientHint", {}),
                l(b, "ccRuleEvaluator", {}),
                l(b, "restrictedDomains", {}),
                l(b, "IABPCMAEBridge", {}),
                l(b, "cookieDeprecationLabel", {}),
                l(b, "unwantedEvents", {}),
                l(b, "unwantedParams", {}),
                l(b, "standardParamChecks", {}),
                l(b, "unwantedEventNames", {}),
                l(b, "clientSidePixelForking", {}),
                l(b, "cookie", {}),
                l(b, "actionID", {}),
                l(b, "gating", {}),
                l(b, "prohibitedPixels", {}),
                b);
            }
            h(a, [
              {
                key: "set",
                value: function (a, b, c) {
                  a = a == null ? N : d(a);
                  if (a == null) return;
                  b = w(b, v.string());
                  if (b == null) return;
                  if (this._configStore[b] == null) return;
                  this._configStore[b][a] = O[b] != null ? O[b](c) : c;
                },
              },
              {
                key: "setExperimental",
                value: function (a) {
                  a = w(
                    a,
                    v.objectWithFields({
                      config: v.object(),
                      experimentName: v.string(),
                      pixelID: d,
                      pluginName: v.string(),
                    })
                  );
                  if (a == null) return;
                  var b = a.config,
                    c = a.experimentName,
                    e = a.pixelID;
                  a = a.pluginName;
                  i.isInTest(c) && this.set(e, a, b);
                },
              },
              {
                key: "get",
                value: function (a, b) {
                  return this._configStore[b][a != null ? a : N];
                },
              },
              {
                key: "getWithGlobalFallback",
                value: function (a, b) {
                  var c = N;
                  b = this._configStore[b];
                  a != null &&
                    Object.prototype.hasOwnProperty.call(b, a) &&
                    (c = a);
                  return b[c];
                },
              },
              {
                key: "getAutomaticMatchingConfig",
                value: function (a) {
                  g(new Error("Calling legacy api getAutomaticMatchingConfig"));
                  return this.get(a, "automaticMatching");
                },
              },
              {
                key: "getInferredEventsConfig",
                value: function (a) {
                  g(new Error("Calling legacy api getInferredEventsConfig"));
                  return this.get(a, "inferredEvents");
                },
              },
            ]);
            return a;
          })();
          m.exports = new a();
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsCookieConfigTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.Typed;
          a.coerce;
          a = b.objectWithFields({
            fbcParamsConfig: b.allowNull(
              b.objectWithFields({
                params: b.arrayOf(
                  b.objectWithFields({
                    ebp_path: b.string(),
                    prefix: b.string(),
                    query: b.string(),
                  })
                ),
              })
            ),
            enableFbcParamSplit: b.allowNull(b["boolean"]()),
          });
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsCookieDeprecationLabelConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              delayInMs: b.allowNull(b.number()),
              disableBackupTimeout: b.allowNull(b["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsDataProcessingOptionsConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              dataProcessingOptions: a.withValidation({
                def: a.arrayOf(a.string()),
                validators: [
                  function (a) {
                    return a.reduce(function (a, b) {
                      return a === !0 && b === "LDU";
                    }, !0);
                  },
                ],
              }),
              dataProcessingCountry: a.withValidation({
                def: a.allowNull(a.number()),
                validators: [
                  function (a) {
                    return a === null || a === 0 || a === 1;
                  },
                ],
              }),
              dataProcessingState: a.withValidation({
                def: a.allowNull(a.number()),
                validators: [
                  function (a) {
                    return a === null || a === 0 || a === 1e3;
                  },
                ],
              }),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsDefaultCustomDataConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              enable_order_id: b["boolean"](),
              enable_value: b["boolean"](),
              enable_currency: b["boolean"](),
              enable_contents: b["boolean"](),
              enable_content_ids: b["boolean"](),
              enable_content_type: b["boolean"](),
              experiment: b.allowNull(b.string()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsDoAutomaticMatching", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.keys,
            c = f.getFbeventsModules("SignalsFBEventsConfigStore");
          a = f.getFbeventsModules("SignalsFBEventsEvents");
          var d = a.piiAutomatched;
          function e(a, e, f, g) {
            a = g != null ? g : c.get(e.id, "automaticMatching");
            if (b(f).length > 0 && a != null) {
              g = a.selectedMatchKeys;
              for (a in f)
                g.indexOf(a) >= 0 && (e.userDataFormFields[a] = f[a]);
              d.trigger(e);
            }
          }
          k.exports = e;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsESTRuleEngineConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({ experimentName: b.allowNull(b.string()) });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsEvents", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsConfigLoadedEvent"),
            c = f.getFbeventsModules("SignalsFBEventsFiredEvent"),
            d = f.getFbeventsModules("SignalsFBEventsGetCustomParametersEvent"),
            e = f.getFbeventsModules("SignalsFBEventsGetIWLParametersEvent"),
            g = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
            h = f.getFbeventsModules("SignalsFBEventsPIIAutomatchedEvent"),
            i = f.getFbeventsModules("SignalsFBEventsPIIConflictingEvent"),
            j = f.getFbeventsModules("SignalsFBEventsPIIInvalidatedEvent"),
            l = f.getFbeventsModules("SignalsFBEventsPluginLoadedEvent"),
            m = f.getFbeventsModules("SignalsFBEventsSetEventIDEvent"),
            n = f.getFbeventsModules("SignalsFBEventsSetIWLExtractorsEvent"),
            o = f.getFbeventsModules("SignalsFBEventsSetESTRules"),
            p = f.getFbeventsModules("SignalsFBEventsSetCCRules"),
            q = f.getFbeventsModules(
              "SignalsFBEventsValidateCustomParametersEvent"
            ),
            r = f.getFbeventsModules(
              "SignalsFBEventsLateValidateCustomParametersEvent"
            ),
            s = f.getFbeventsModules(
              "SignalsFBEventsValidateUrlParametersEvent"
            ),
            t = f.getFbeventsModules("SignalsFBEventsGetAemResultEvent"),
            u = f.getFbeventsModules(
              "SignalsFBEventsValidateGetClickIDFromBrowserProperties"
            ),
            v = f.getFbeventsModules("SignalsFBEventsExtractPII"),
            w = f.getFbeventsModules("SignalsFBEventsSetFBPEvent");
          b = {
            configLoaded: b,
            execEnd: new a(),
            fired: c,
            getCustomParameters: d,
            getIWLParameters: e,
            iwlBootstrap: g,
            piiAutomatched: h,
            piiConflicting: i,
            piiInvalidated: j,
            pluginLoaded: l,
            setEventId: m,
            setIWLExtractors: n,
            setESTRules: o,
            setCCRules: p,
            validateCustomParameters: q,
            lateValidateCustomParameters: r,
            validateUrlParameters: s,
            getAemResult: t,
            getClickIDFromBrowserProperties: u,
            extractPii: v,
            setFBP: w,
          };
          k.exports = b;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsEventValidationConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              unverifiedEventNames: b.allowNull(b.arrayOf(b.string())),
              enableEventSanitization: b.allowNull(b["boolean"]()),
              restrictedEventNames: b.allowNull(b.arrayOf(b.string())),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsExperimentNames", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          j.exports = {
            BATCHING_EXPERIMENT: "batching",
            SEND_XHR_EXPERIMENT: "send_xhr",
            USE_FBC_AS_CACHE_KEY_EXPERIMENT: "use_fbc_as_cache_key",
            NETWORK_RETRY_EXPERIMENT: "network_retry_when_not_success",
            BUFFER_EVENTS_EXPERIMENT: "buffer_events",
            NO_OP_EXPERIMENT: "no_op_exp",
            NO_CD_FILTERED_PARAMS: "no_cd_filtered_params",
            LOWER_MICRODATA_DELAY: "lower_microdata_delay",
          };
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsExperimentsTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.Typed;
          a.coerce;
          a.enforce;
          a = b.arrayOf(
            b.objectWithFields({
              allocation: b.number(),
              code: b.string(),
              name: b.string(),
              passRate: b.number(),
            })
          );
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsExtractPII", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
            c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.Typed,
            e = c.coerce;
          function g(a, c, f) {
            c = e(a, b);
            f = d.allowNull(d.object());
            a = d.allowNull(d.object());
            return c != null ? [{ pixel: c, form: f, button: a }] : null;
          }
          c = new a(g);
          k.exports = c;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsFBQ", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsEventValidation"),
            c = f.getFbeventsModules("SignalsFBEventsConfigStore"),
            d = f.getFbeventsModules("SignalsFBEventsEvents"),
            e = d.configLoaded,
            k = f.getFbeventsModules("SignalsFBEventsFireLock"),
            o = f.getFbeventsModules("SignalsFBEventsJSLoader");
          d = f.getFbeventsModules("SignalsFBEventsLogging");
          var p = f.getFbeventsModules("SignalsFBEventsOptIn"),
            q = f.getFbeventsModules("SignalsFBEventsUtils"),
            r = f.getFbeventsModules("signalsFBEventsGetIsIosInAppBrowser"),
            s = f.getFbeventsModules("SignalsFBEventsURLUtil"),
            t = s.getURLParameter,
            u = f.getFbeventsModules("SignalsFBEventsGetValidUrl"),
            v = f.getFbeventsModules("SignalsFBEventsResolveLink");
          s = f.getFbeventsModules("SignalsPixelCookieUtils");
          var w = s.CLICK_ID_PARAMETER,
            x = s.readPackedCookie,
            y = s.CLICKTHROUGH_COOKIE_NAME;
          s = f.getFbeventsModules("SignalsFBEventsExperimentNames");
          var z = s.USE_FBC_AS_CACHE_KEY_EXPERIMENT,
            A = f.getFbeventsModules("SignalsFBEventsQE"),
            B = f.getFbeventsModules("SignalsFBEventsModuleEncodings"),
            C = f.getFbeventsModules("SignalsParamList"),
            D = f.getFbeventsModules("signalsFBEventsSendEvent"),
            E = q.each,
            F = q.keys,
            G = q.map,
            H = q.some,
            I = d.logError,
            J = d.logUserError,
            K = {
              AutomaticMatching: !0,
              AutomaticMatchingForPartnerIntegrations: !0,
              DefaultCustomData: !0,
              Buffer: !0,
              CommonIncludes: !0,
              FirstPartyCookies: !0,
              IWLBootstrapper: !0,
              IWLParameters: !0,
              IdentifyIntegration: !0,
              InferredEvents: !0,
              Microdata: !0,
              MicrodataJsonLd: !0,
              OpenBridge: !0,
              ParallelFire: !0,
              ProhibitedSources: !0,
              Timespent: !0,
              UnwantedData: !0,
              LocalComputation: !0,
              IABPCMAEBridge: !0,
              AEM: !0,
              BrowserProperties: !0,
              ESTRuleEngine: !0,
              EventValidation: !0,
              ProtectedDataMode: !0,
              PrivacySandbox: !0,
              ClientHint: !0,
              CCRuleEvaluator: !0,
              ProhibitedPixels: !0,
              LastExternalReferrer: !0,
              CookieDeprecationLabel: !0,
              UnwantedEvents: !0,
              UnwantedEventNames: !0,
              UnwantedParams: !0,
              StandardParamChecks: !0,
              ShopifyAppIntegratedPixel: !0,
              clientSidePixelForking: !0,
              ShadowTest: !0,
              ActionID: !0,
              TopicsAPI: !0,
              Gating: !0,
            },
            L = {
              Track: 0,
              TrackCustom: 4,
              TrackSingle: 1,
              TrackSingleCustom: 2,
              TrackSingleSystem: 3,
              TrackSystem: 5,
            };
          s = ["InferredEvents", "Microdata"];
          var M = { AutomaticSetup: s },
            N = {
              AutomaticMatching: ["inferredevents", "identity"],
              AutomaticMatchingForPartnerIntegrations: [
                "automaticmatchingforpartnerintegrations",
              ],
              CommonIncludes: ["commonincludes"],
              DefaultCustomData: ["defaultcustomdata"],
              FirstPartyCookies: ["cookie"],
              IWLBootstrapper: ["iwlbootstrapper"],
              IWLParameters: ["iwlparameters"],
              ESTRuleEngine: ["estruleengine"],
              IdentifyIntegration: ["identifyintegration"],
              Buffer: ["buffer"],
              InferredEvents: ["inferredevents", "identity"],
              Microdata: ["microdata", "identity"],
              MicrodataJsonLd: ["jsonld_microdata"],
              ParallelFire: ["parallelfire"],
              ProhibitedSources: ["prohibitedsources"],
              Timespent: ["timespent"],
              UnwantedData: ["unwanteddata"],
              LocalComputation: ["localcomputation"],
              IABPCMAEBridge: ["iabpcmaebridge"],
              AEM: ["aem"],
              BrowserProperties: ["browserproperties"],
              EventValidation: ["eventvalidation"],
              ProtectedDataMode: ["protecteddatamode"],
              PrivacySandbox: ["privacysandbox"],
              ClientHint: ["clienthint"],
              CCRuleEvaluator: ["ccruleevaluator"],
              ProhibitedPixels: ["prohibitedpixels"],
              LastExternalReferrer: ["lastexternalreferrer"],
              CookieDeprecationLabel: ["cookiedeprecationlabel"],
              UnwantedEvents: ["unwantedevents"],
              UnwantedEventNames: ["unwantedeventnames"],
              UnwantedParams: ["unwantedparams"],
              ShopifyAppIntegratedPixel: ["shopifyappintegratedpixel"],
              clientSidePixelForking: ["clientsidepixelforking"],
              actionID: ["actionid"],
              TopicsAPI: ["topicsapi"],
              Gating: ["gating"],
            };
          function O(a) {
            return !!(K[a] || M[a]);
          }
          var P = function (a, b, c, d, e, f) {
            var g = new C(function (a) {
              return a;
            });
            g.append("v", b);
            g.append("r", c);
            d === !0 && g.append("no_min", !0);
            e != null && e != "" && g.append("domain", e);
            f != null && r() && e != "" && g.append("fbc", f);
            B.addEncodings(g);
            return (
              o.CONFIG.CDN_BASE_URL +
              "signals/config/" +
              a +
              "?" +
              g.toQueryString()
            );
          };
          function Q(a, b, c, d, e, f) {
            o.loadJSFile(P(a, b, c, e, d, f));
          }
          q = (function () {
            function d(a, b) {
              var e = this;
              n(this, d);
              this.VALID_FEATURES = K;
              this.optIns = new p(M);
              this.configsLoaded = {};
              this.locks = k.global;
              this.pluginConfig = c;
              this.disableFirstPartyCookies = !1;
              this.disableAutoConfig = !1;
              this.disableErrorLogging = !1;
              this.VERSION = a.version;
              this.RELEASE_SEGMENT = a._releaseSegment;
              this.pixelsByID = b;
              this.fbq = a;
              E(a.pendingConfigs || [], function (a) {
                return e.locks.lockConfig(a);
              });
            }
            h(d, [
              {
                key: "optIn",
                value: function (a, b) {
                  var c = this,
                    d =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1;
                  if (typeof b !== "string" || !O(b))
                    throw new Error(
                      'Invalid Argument: "' +
                        b +
                        '" is not a valid opt-in feature'
                    );
                  O(b) &&
                    (this.optIns.optIn(a, b, d),
                    E([b].concat(m(M[b] || [])), function (a) {
                      N[a] &&
                        E(N[a], function (a) {
                          return c.fbq.loadPlugin(a);
                        });
                    }));
                  return this;
                },
              },
              {
                key: "optOut",
                value: function (a, b) {
                  this.optIns.optOut(a, b);
                  return this;
                },
              },
              {
                key: "consent",
                value: function (a) {
                  a === "revoke"
                    ? this.locks.lockConsent()
                    : a === "grant"
                    ? this.locks.unlockConsent()
                    : J({ action: a, type: "INVALID_CONSENT_ACTION" });
                  return this;
                },
              },
              {
                key: "setUserProperties",
                value: function (b, c) {
                  var d = this.pluginConfig.get(null, "dataProcessingOptions");
                  if (d != null && d.dataProcessingOptions.includes("LDU"))
                    return;
                  if (
                    !Object.prototype.hasOwnProperty.call(this.pixelsByID, b)
                  ) {
                    J({ pixelID: b, type: "PIXEL_NOT_INITIALIZED" });
                    return;
                  }
                  this.trackSingleSystem(
                    "user_properties",
                    b,
                    "UserProperties",
                    a({}, c)
                  );
                },
              },
              {
                key: "trackSingle",
                value: function (a, c, d, e) {
                  b.validateEventAndLog(c, d);
                  return this.trackSingleGeneric(a, c, d, L.TrackSingle, e);
                },
              },
              {
                key: "trackSingleCustom",
                value: function (a, b, c, d) {
                  return this.trackSingleGeneric(
                    a,
                    b,
                    c,
                    L.TrackSingleCustom,
                    d
                  );
                },
              },
              {
                key: "trackSingleSystem",
                value: function (a, b, c, d, e) {
                  return this.trackSingleGeneric(
                    b,
                    c,
                    d,
                    L.TrackSingleSystem,
                    e || null,
                    a
                  );
                },
              },
              {
                key: "trackSingleGeneric",
                value: function (b, c, d, e, f, g) {
                  b = typeof b === "string" ? b : b.id;
                  if (
                    !Object.prototype.hasOwnProperty.call(this.pixelsByID, b)
                  ) {
                    var h = { pixelID: b, type: "PIXEL_NOT_INITIALIZED" };
                    g == null ? J(h) : I(new Error(h.type + " " + h.pixelID));
                    return this;
                  }
                  h = this.getDefaultSendData(b, c, f);
                  h.customData = d;
                  g != null && (h.customParameters = { es: g });
                  h.customParameters = a({}, h.customParameters, {
                    tm: "" + e,
                  });
                  this.fire(h, !1);
                  return this;
                },
              },
              {
                key: "_validateSend",
                value: function (a, c) {
                  if (!a.eventName || !a.eventName.length)
                    throw new Error("Event name not specified");
                  if (!a.pixelId || !a.pixelId.length)
                    throw new Error("PixelId not specified");
                  a.set &&
                    E(
                      G(F(a.set), function (a) {
                        return b.validateMetadata(a);
                      }),
                      function (a) {
                        if (a.error) throw new Error(a.error);
                        a.warnings.length && E(a.warnings, J);
                      }
                    );
                  if (c) {
                    c = b.validateEvent(a.eventName, a.customData || {});
                    if (c.error) throw new Error(c.error);
                    c.warnings && c.warnings.length && E(c.warnings, J);
                  }
                  return this;
                },
              },
              {
                key: "_argsHasAnyUserData",
                value: function (a) {
                  var b = a.userData != null && F(a.userData).length > 0;
                  a =
                    a.userDataFormFields != null &&
                    F(a.userDataFormFields).length > 0;
                  return b || a;
                },
              },
              {
                key: "fire",
                value: function (a) {
                  var b =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1;
                  this._validateSend(a, b);
                  if (
                    (this._argsHasAnyUserData(a) &&
                      !this.fbq.loadPlugin("identity")) ||
                    this.locks.isLocked()
                  ) {
                    g.fbq("fire", a);
                    return this;
                  }
                  var c = a.customParameters,
                    d = "";
                  c && c.es && typeof c.es === "string" && (d = c.es);
                  a.customData = a.customData || {};
                  var e = this.fbq.getEventCustomParameters(
                      this.getPixel(a.pixelId),
                      a.eventName,
                      a.customData,
                      d,
                      a.eventData
                    ),
                    f = a.eventData.eventID;
                  e.append("eid", f);
                  c &&
                    E(F(c), function (a) {
                      if (e.containsKey(a))
                        throw new Error(
                          "Custom parameter " + a + " already specified."
                        );
                      e.append(a, c[a]);
                    });
                  D({
                    customData: a.customData,
                    customParams: e,
                    eventName: a.eventName,
                    id: a.pixelId,
                    piiTranslator: null,
                  });
                  return this;
                },
              },
              {
                key: "callMethod",
                value: function (a) {
                  var b = a[0];
                  a = Array.prototype.slice.call(a, 1);
                  if (typeof b !== "string") {
                    J({ type: "FBQ_NO_METHOD_NAME" });
                    return;
                  }
                  if (typeof this[b] === "function")
                    try {
                      this[b].apply(this, a);
                    } catch (a) {
                      I(a);
                    }
                  else J({ method: b, type: "INVALID_FBQ_METHOD" });
                },
              },
              {
                key: "getDefaultSendData",
                value: function (a, b, c) {
                  var d = this.getPixel(a);
                  c = { eventData: c || {}, eventName: b, pixelId: a };
                  d &&
                    (d.userData && (c.userData = d.userData),
                    d.agent != null && d.agent !== ""
                      ? (c.set = { agent: d.agent })
                      : this.fbq.agent != null &&
                        this.fbq.agent !== "" &&
                        (c.set = { agent: this.fbq.agent }));
                  return c;
                },
              },
              {
                key: "getOptedInPixels",
                value: function (a) {
                  var b = this;
                  return this.optIns.listPixelIds(a).map(function (a) {
                    return b.pixelsByID[a];
                  });
                },
              },
              {
                key: "getPixel",
                value: function (a) {
                  return this.pixelsByID[a];
                },
              },
              {
                key: "getFBCWithAEMPayload",
                value: function () {
                  if (!A.isInTest(z) || r() === !1) return "";
                  var a = t(g.location.href, w);
                  (a == null || a.trim() == "") && (a = t(i.referrer, w));
                  if (a != null && a.includes("_aem_")) {
                    a = a.split("_aem_");
                    if (a.length === 2) return a[1];
                  }
                  a = x(y);
                  if (a == null) return "";
                  a = a.payload;
                  if (a == null) return "";
                  a = a.split("_aem_");
                  return a.length !== 2 ? "" : a[1];
                },
              },
              {
                key: "loadConfig",
                value: function (a) {
                  if (
                    this.fbq.disableConfigLoading === !0 ||
                    Object.prototype.hasOwnProperty.call(this.configsLoaded, a)
                  )
                    return;
                  this.locks.lockConfig(a);
                  if (
                    !this.fbq.pendingConfigs ||
                    H(this.fbq.pendingConfigs, function (b) {
                      return b === a;
                    }) === !1
                  ) {
                    var b = j.href,
                      c = i.referrer;
                    b = v(b, c, { google: !0 });
                    c = u(b);
                    b = "";
                    c != null && (b = c.hostname);
                    Q(
                      a,
                      this.VERSION,
                      this.RELEASE_SEGMENT != null
                        ? this.RELEASE_SEGMENT
                        : "stable",
                      b,
                      this.fbq._no_min,
                      this.getFBCWithAEMPayload()
                    );
                  }
                },
              },
              {
                key: "configLoaded",
                value: function (a) {
                  (this.configsLoaded[a] = !0),
                    e.trigger(a),
                    this.locks.releaseConfig(a);
                },
              },
            ]);
            return d;
          })();
          l.exports = q;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsFillParamList", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsParamList"),
            c = f.getFbeventsModules("SignalsFBEventsQE"),
            d = g.top !== g;
          function e(e) {
            var f = e.customData,
              j = e.customParams,
              k = e.eventName,
              l = e.id,
              m = e.piiTranslator,
              n = e.documentLink,
              o = e.referrerLink,
              p = e.timestamp;
            f = f != null ? a({}, f) : null;
            var q = i.href;
            Object.prototype.hasOwnProperty.call(e, "documentLink")
              ? (q = n)
              : (e.documentLink = q);
            n = h.referrer;
            Object.prototype.hasOwnProperty.call(e, "referrerLink")
              ? (n = o)
              : (e.referrerLink = n);
            o = new b(m);
            o.append("id", l);
            o.append("ev", k);
            o.append("dl", q);
            o.append("rl", n);
            o.append("if", d);
            o.append("ts", p);
            o.append("cd", f);
            o.append("sw", g.screen.width);
            o.append("sh", g.screen.height);
            j && o.addRange(j);
            e = c.get();
            e != null && o.append("exp", c.getCode());
            return o;
          }
          k.exports = e;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsFilterProtectedModeEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");
            f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            var b = f.getFbeventsModules("SignalsFBEventsTyped");
            b = b.Typed;
            var c = f.getFbeventsModules("SignalsFBEventsMessageParamsTypedef");
            a = new a(b.tuple([c]));
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsFiredEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsParamList");
          function c(a, c) {
            var d = null;
            (a === "GET" || a === "POST" || a === "BEACON") && (d = a);
            a = c instanceof b ? c : null;
            return d != null && a != null ? [d, a] : null;
          }
          a = new a(c);
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsFireEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsEvents"),
            b = a.fired;
          a.setEventId;
          var c = f.getFbeventsModules("SignalsFBEventsQE");
          a = f.getFbeventsModules("SignalsFBEventsExperimentNames");
          var d = a.NO_OP_EXPERIMENT,
            e = f.getFbeventsModules("signalsFBEventsSendBeacon"),
            g = f.getFbeventsModules(
              "signalsFBEventsSendBeaconWithParamsInURL"
            ),
            h = f.getFbeventsModules("signalsFBEventsSendGET"),
            i = f.getFbeventsModules("signalsFBEventsSendFormPOST"),
            j = f.getFbeventsModules("signalsFBEventsSendFetch"),
            l = f.getFbeventsModules("SignalsFBEventsForkEvent"),
            m = f.getFbeventsModules("signalsFBEventsSendBatch"),
            n = f.getFbeventsModules("SignalsFBEventsGetTimingsEvent"),
            o = f.getFbeventsModules("signalsFBEventsGetIsChrome"),
            p = f.getFbeventsModules("signalsFBEventsFillParamList"),
            q = "SubscribedButtonClick";
          function r(a) {
            l.trigger(a);
            var f = a.eventName;
            a = p(a);
            n.trigger(a);
            var k = !o();
            c.isInTest(d);
            if (c.isInTest("send_events_in_batch")) {
              m(a);
              return;
            }
            if (c.isInTest("prioritize_send_beacon_in_url") && g(a)) {
              b.trigger("BEACON_URL", a);
              return;
            }
            if (j(a)) {
              b.trigger("FETCH", a);
              return;
            }
            if (k && f === q && e(a)) {
              b.trigger("BEACON", a);
              return;
            }
            if (h(a)) {
              b.trigger("GET", a);
              return;
            }
            if (k && e(a)) {
              b.trigger("BEACON", a);
              return;
            }
            i(a);
            b.trigger("POST", a);
          }
          k.exports = r;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsFireLock", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.each,
            c = a.keys;
          a = (function () {
            function a() {
              n(this, a), (this._locks = {}), (this._callbacks = []);
            }
            h(a, [
              {
                key: "lock",
                value: function (a) {
                  this._locks[a] = !0;
                },
              },
              {
                key: "release",
                value: function (a) {
                  Object.prototype.hasOwnProperty.call(this._locks, a) &&
                    (delete this._locks[a],
                    c(this._locks).length === 0 &&
                      b(this._callbacks, function (b) {
                        return b(a);
                      }));
                },
              },
              {
                key: "onUnlocked",
                value: function (a) {
                  this._callbacks.push(a);
                },
              },
              {
                key: "isLocked",
                value: function () {
                  return c(this._locks).length > 0;
                },
              },
              {
                key: "lockPlugin",
                value: function (a) {
                  this.lock("plugin:" + a);
                },
              },
              {
                key: "releasePlugin",
                value: function (a) {
                  this.release("plugin:" + a);
                },
              },
              {
                key: "lockConfig",
                value: function (a) {
                  this.lock("config:" + a);
                },
              },
              {
                key: "releaseConfig",
                value: function (a) {
                  this.release("config:" + a);
                },
              },
              {
                key: "lockConsent",
                value: function () {
                  this.lock("consent");
                },
              },
              {
                key: "unlockConsent",
                value: function () {
                  this.release("consent");
                },
              },
            ]);
            return a;
          })();
          a.global = new a();
          l.exports = a;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsForkEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsParamList");
          f.getFbeventsModules("SignalsFBEventsPixelTypedef");
          var c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.Typed;
          c.coerce;
          c = d.objectWithFields({
            customData: d.allowNull(d.object()),
            customParams: function (a) {
              return a instanceof b ? a : void 0;
            },
            eventName: d.string(),
            id: d.string(),
            piiTranslator: function (a) {
              return typeof a === "function" ? a : void 0;
            },
            documentLink: d.allowNull(d.string()),
            referrerLink: d.allowNull(d.string()),
          });
          a = new a(d.tuple([c]));
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGatingConfigTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped");
          a.coerce;
          a = a.Typed;
          a = a.objectWithFields({
            gatings: a.arrayOf(
              a.allowNull(
                a.objectWithFields({
                  name: a.allowNull(a.string()),
                  passed: a.allowNull(a["boolean"]()),
                })
              )
            ),
          });
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGetAemResultEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");
          function b(a, b, c) {
            a = a != null && typeof a === "number" && a !== -1 ? a : null;
            b = b != null && typeof b === "number" && b !== -1 ? b : null;
            c = c != null && typeof c === "string" && c !== "" ? c : null;
            return a !== null && b !== null && c !== null ? [a, b, c] : null;
          }
          a = new a(b);
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsGetCustomParametersEvent",
      function () {
        return (function (g, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
              c = f.getFbeventsModules("SignalsFBEventsTyped"),
              d = c.Typed,
              e = c.coerce;
            function g(a, c, f, g, h) {
              a = e(a, b);
              c = e(c, d.string());
              var j = {};
              f != null &&
                (typeof f === "undefined" ? "undefined" : i(f)) === "object" &&
                (j = f);
              f = g != null && typeof g === "string" ? g : null;
              g = {};
              h != null &&
                (typeof h === "undefined" ? "undefined" : i(h)) === "object" &&
                (g = h);
              return a != null && c != null ? [a, c, j, f, g] : null;
            }
            c = new a(g);
            l.exports = c;
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsGetIsChrome", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          function a() {
            var a = f.chrome,
              b = f.navigator,
              c = b.vendor,
              d = f.opr !== void 0,
              e = b.userAgent.indexOf("Edg") > -1;
            b = b.userAgent.match("CriOS");
            return (
              !b &&
              a !== null &&
              a !== void 0 &&
              c === "Google Inc." &&
              d === !1 &&
              e === !1
            );
          }
          j.exports = a;
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "signalsFBEventsGetIsIosInAppBrowser",
      function () {
        return (function (f, g, h, i) {
          var j = { exports: {} };
          j.exports;
          (function () {
            "use strict";
            function a() {
              var a = f.navigator,
                b = a.userAgent.indexOf("AppleWebKit"),
                c = a.userAgent.indexOf("FBIOS"),
                d = a.userAgent.indexOf("Instagram");
              a = a.userAgent.indexOf("MessengerLiteForiOS");
              return b !== null && (c != -1 || d != -1 || a != -1);
            }
            function b(b) {
              return a();
            }
            j.exports = b;
          })();
          return j.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsGetIWLParametersEvent",
      function () {
        return (function (g, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsConvertNodeToHTMLElement"),
              c = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
              d = f.getFbeventsModules("SignalsFBEventsTyped"),
              e = d.coerce;
            function g() {
              for (var a = arguments.length, d = Array(a), f = 0; f < a; f++)
                d[f] = arguments[f];
              var g = d[0];
              if (
                g == null ||
                (typeof g === "undefined" ? "undefined" : i(g)) !== "object"
              )
                return null;
              var h = g.unsafePixel,
                j = g.unsafeTarget,
                k = e(h, c),
                l = j instanceof Node ? b(j) : null;
              return k != null && l != null ? [{ pixel: k, target: l }] : null;
            }
            l.exports = new a(g);
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsGetTimingsEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsParamList");
          function c(a) {
            a = a instanceof b ? a : null;
            return a != null ? [a] : null;
          }
          a = new a(c);
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGetValidUrl", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          j.exports = function (a) {
            if (a == null) return null;
            try {
              a = new URL(a);
              return a;
            } catch (a) {
              return null;
            }
          };
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGuardrail", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsGuardrailTypedef");
          f.getFbeventsModules("SignalsFBEventsExperimentsTypedef");
          f.getFbeventsModules("SignalsFBEventsLegacyExperimentGroupsTypedef");
          f.getFbeventsModules("SignalsFBEventsTypeVersioning");
          var c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.coerce;
          c = f.getFbeventsModules("SignalsFBEventsUtils");
          c.reduce;
          var e = function () {
              return Math.random();
            },
            g = {};
          function i(a) {
            var b = a.passRate;
            a.name;
            b != null && (a.passed = e() < b);
          }
          c = (function () {
            function c() {
              n(this, c);
            }
            h(c, [
              {
                key: "setGuardrails",
                value: function (c) {
                  c = d(c, b);
                  if (c != null) {
                    this._guardrails = c;
                    c = !0;
                    var e = !1,
                      f = void 0;
                    try {
                      for (
                        var h =
                            this._guardrails[
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ](),
                          i;
                        !(c = (i = h.next()).done);
                        c = !0
                      ) {
                        i = i.value;
                        if (i.name != null) {
                          var j = i.name,
                            k = { passed: null };
                          k = a({}, k, i);
                          g[j] = k;
                        }
                      }
                    } catch (a) {
                      (e = !0), (f = a);
                    } finally {
                      try {
                        !c && h["return"] && h["return"]();
                      } finally {
                        if (e) throw f;
                      }
                    }
                  }
                },
              },
              {
                key: "eval",
                value: function (a, b) {
                  a = g[a];
                  if (!a) return !1;
                  if (a.enableForPixels && a.enableForPixels.includes(b))
                    return !0;
                  if (a.passed != null) return a.passed;
                  i(a);
                  return a.passed != null ? a.passed : !1;
                },
              },
              {
                key: "enable",
                value: function (a) {
                  var b = g[a];
                  if (b != null) b.passed = !0;
                  else {
                    b = { passed: !0 };
                    g[a] = b;
                  }
                },
              },
              {
                key: "disable",
                value: function (a) {
                  var b = g[a];
                  if (b != null) b.passed = !1;
                  else {
                    b = { passed: !1 };
                    g[a] = b;
                  }
                },
              },
            ]);
            return c;
          })();
          l.exports = new c();
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsGuardrailTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.Typed;
          a.coerce;
          a.enforce;
          a = b.arrayOf(
            b.objectWithFields({
              name: b.allowNull(b.string()),
              passRate: b.allowNull(b.number()),
              enableForPixels: b.allowNull(b.arrayOf(b.string())),
              code: b.allowNull(b.string()),
              passed: b.allowNull(b["boolean"]()),
            })
          );
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsIABPCMAEBridgeConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              enableAutoEventId: b.allowNull(b["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsInjectMethod", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("signalsFBEventsMakeSafe");
          function b(b, c, d) {
            var e = b[c],
              f = a(d);
            b[c] = function () {
              for (var a = arguments.length, b = Array(a), c = 0; c < a; c++)
                b[c] = arguments[c];
              var d = e.apply(this, b);
              f.apply(this, b);
              return d;
            };
          }
          k.exports = b;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsIWLBootStrapEvent", function () {
      return (function (g, h, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("signalsFBEventsCoercePixelID");
          function c() {
            for (var a = arguments.length, c = Array(a), d = 0; d < a; d++)
              c[d] = arguments[d];
            var e = c[0];
            if (
              e == null ||
              (typeof e === "undefined" ? "undefined" : i(e)) !== "object"
            )
              return null;
            var f = e.graphToken,
              g = e.pixelID,
              h = b(g);
            return f != null && typeof f === "string" && h != null
              ? [{ graphToken: f, pixelID: h }]
              : null;
          }
          a = new a(c);
          l.exports = a;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsJSLoader", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          var a = { CDN_BASE_URL: "https://connect.facebook.net/" };
          function b() {
            var b = g.getElementsByTagName("script");
            for (var c = 0; c < b.length; c++) {
              var d = b[c];
              if (d && d.src && d.src.indexOf(a.CDN_BASE_URL) !== -1) return d;
            }
            return null;
          }
          var c = d();
          function d() {
            try {
              if (f.trustedTypes && f.trustedTypes.createPolicy) {
                var b = f.trustedTypes;
                return b.createPolicy("connect.facebook.net/fbevents", {
                  createScriptURL: function (b) {
                    if (!b.startsWith(a.CDN_BASE_URL))
                      throw new Error("Disallowed script URL");
                    return b;
                  },
                });
              }
            } catch (a) {}
            return null;
          }
          function e(a) {
            var d = g.createElement("script");
            c != null ? (d.src = c.createScriptURL(a)) : (d.src = a);
            d.async = !0;
            a = b();
            a && a.parentNode
              ? a.parentNode.insertBefore(d, a)
              : g.head && g.head.firstChild && g.head.appendChild(d);
          }
          j.exports = { CONFIG: a, loadJSFile: e };
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsLateValidateCustomParametersEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsFBEventsTyped"),
              c = b.coerce,
              d = b.Typed;
            f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            b = f.getFbeventsModules("SignalsFBEventsCoercePrimitives");
            b.coerceString;
            function e() {
              for (var a = arguments.length, b = Array(a), e = 0; e < a; e++)
                b[e] = arguments[e];
              return c(b, d.tuple([d.string(), d.object(), d.string()]));
            }
            b = new a(e);
            k.exports = b;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsLegacyExperimentGroupsTypedef",
      function () {
        return (function (g, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            var c = a.enforce;
            a = f.getFbeventsModules("SignalsFBEventsTypeVersioning");
            a = a.upgrade;
            function d(a) {
              return a != null &&
                (typeof a === "undefined" ? "undefined" : i(a)) === "object"
                ? Object.values(a)
                : null;
            }
            var e = function (a) {
              a = Array.isArray(a) ? a : d(a);
              return c(
                a,
                b.arrayOf(
                  b.objectWithFields({
                    code: b.string(),
                    name: b.string(),
                    passRate: b.number(),
                    range: b.tuple([b.number(), b.number()]),
                  })
                )
              );
            };
            function g(a) {
              var b = a.name,
                c = a.code,
                d = a.range;
              a = a.passRate;
              return { allocation: d[1] - d[0], code: c, name: b, passRate: a };
            }
            l.exports = a(e, function (a) {
              return a.map(g);
            });
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsLogging", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.isArray,
            c = a.isInstanceOf,
            d = a.map,
            e = f.getFbeventsModules("SignalsParamList"),
            h = f.getFbeventsModules("signalsFBEventsSendGET"),
            i = f.getFbeventsModules("SignalsFBEventsJSLoader"),
            j = !1;
          function l() {
            j = !0;
          }
          var m = !0;
          function n() {
            m = !1;
          }
          var o = !1;
          function p() {
            o = !0;
          }
          var q = "console",
            r = "warn",
            s = [];
          function t(a) {
            g[q] && g[q][r] && (g[q][r](a), o && s.push(a));
          }
          var u = !1;
          function v() {
            u = !0;
          }
          function w(a) {
            if (u) return;
            t("[Meta Pixel] - " + a);
          }
          var x = "Meta Pixel Error",
            y = function () {
              g.postMessage != null && g.postMessage.apply(g, arguments);
            },
            z = {};
          function A(a) {
            switch (a.type) {
              case "FBQ_NO_METHOD_NAME":
                return "You must provide an argument to fbq().";
              case "INVALID_FBQ_METHOD":
                var b = a.method;
                return "\"fbq('" + b + "', ...);\" is not a valid fbq command.";
              case "INVALID_FBQ_METHOD_PARAMETER":
                b = a.invalidParamName;
                var c = a.invalidParamValue,
                  d = a.method,
                  e = a.params;
                return (
                  "Call to \"fbq('" +
                  d +
                  "', " +
                  C(e) +
                  ');" with parameter "' +
                  b +
                  '" has an invalid value of "' +
                  B(c) +
                  '"'
                );
              case "INVALID_PIXEL_ID":
                d = a.pixelID;
                return "Invalid PixelID: " + d + ".";
              case "DUPLICATE_PIXEL_ID":
                e = a.pixelID;
                return "Duplicate Pixel ID: " + e + ".";
              case "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID":
                b = a.metadataValue;
                c = a.pixelID;
                return (
                  "Trying to set argument " +
                  b +
                  " for uninitialized Pixel ID " +
                  c +
                  "."
                );
              case "CONFLICTING_VERSIONS":
                return "Multiple pixels with conflicting versions were detected on this page.";
              case "MULTIPLE_PIXELS":
                return "Multiple pixels were detected on this page.";
              case "UNSUPPORTED_METADATA_ARGUMENT":
                d = a.metadata;
                return "Unsupported metadata argument: " + d + ".";
              case "REQUIRED_PARAM_MISSING":
                e = a.param;
                b = a.eventName;
                return (
                  "Required parameter '" +
                  e +
                  "' is missing for event '" +
                  b +
                  "'."
                );
              case "INVALID_PARAM":
                c = a.param;
                d = a.eventName;
                return (
                  "Parameter '" + c + "' is invalid for event '" + d + "'."
                );
              case "NO_EVENT_NAME":
                return 'Missing event name. Track events must be logged with an event name fbq("track", eventName)';
              case "NONSTANDARD_EVENT":
                e = a.eventName;
                return (
                  "You are sending a non-standard event '" +
                  e +
                  "'. The preferred way to send these events is using trackCustom. See 'https://developers.facebook.com/docs/ads-for-websites/pixel-events/#events' for more information."
                );
              case "NEGATIVE_EVENT_PARAM":
                b = a.param;
                c = a.eventName;
                return (
                  "Parameter '" + b + "' is negative for event '" + c + "'."
                );
              case "PII_INVALID_TYPE":
                d = a.key_type;
                e = a.key_val;
                return (
                  "An invalid " +
                  d +
                  " was specified for '" +
                  e +
                  "'. This data will not be sent with any events for this Pixel."
                );
              case "PII_UNHASHED_PII":
                b = a.key;
                return (
                  "The value for the '" +
                  b +
                  "' key appeared to be PII. This data will not be sent with any events for this Pixel."
                );
              case "INVALID_CONSENT_ACTION":
                c = a.action;
                return (
                  "\"fbq('" +
                  c +
                  "', ...);\" is not a valid fbq('consent', ...) action. Valid actions are 'revoke' and 'grant'."
                );
              case "INVALID_JSON_LD":
                d = a.jsonLd;
                return (
                  "Unable to parse JSON-LD tag. Malformed JSON found: '" +
                  d +
                  "'."
                );
              case "SITE_CODELESS_OPT_OUT":
                e = a.pixelID;
                return (
                  "Unable to open Codeless events interface for pixel as the site has opted out. Pixel ID: " +
                  e +
                  "."
                );
              case "PIXEL_NOT_INITIALIZED":
                b = a.pixelID;
                return "Pixel " + b + " not found";
              case "UNWANTED_CUSTOM_DATA":
                return "Removed parameters from custom data due to potential violations. Go to Events Manager to learn more.";
              case "UNWANTED_URL_DATA":
                return "Removed URL query parameters due to potential violations.";
              case "UNWANTED_EVENT_NAME":
                return "Blocked Event due to potential violations.";
              case "UNVERIFIED_EVENT":
                return "You are attempting to send an unverified event. The event was suppressed. Go to Events Manager to learn more.";
              case "RESTRICTED_EVENT":
                return "You are attempting to send a restricted event. The event was suppressed. Go to Events Manager to learn more.";
              case "INVALID_PARAM_FORMAT":
                c = a.invalidParamName;
                return (
                  "Invalid parameter format for " +
                  c +
                  ". Please refer https://developers.facebook.com/docs/meta-pixel/reference/ for valid parameter specifications."
                );
              default:
                F(
                  new Error(
                    "INVALID_USER_ERROR - " + a.type + " - " + JSON.stringify(a)
                  )
                );
                return "Invalid User Error.";
            }
          }
          var B = function (a) {
              if (typeof a === "string") return "'" + a + "'";
              else if (typeof a == "undefined") return "undefined";
              else if (a === null) return "null";
              else if (
                !b(a) &&
                a.constructor != null &&
                a.constructor.name != null
              )
                return a.constructor.name;
              try {
                return JSON.stringify(a) || "undefined";
              } catch (a) {
                return "undefined";
              }
            },
            C = function (a) {
              return d(a, B).join(", ");
            };
          function D(a, b) {
            try {
              var d = g.fbq.instance.pluginConfig.get(
                null,
                "dataProcessingOptions"
              );
              if (d != null && d.dataPrivacyOptions.includes("LDU")) return;
              d = Math.random();
              var f =
                g.fbq && g.fbq._releaseSegment
                  ? g.fbq._releaseSegment
                  : "unknown";
              if (
                (!g.fbq || !g.fbq.disableErrorLogging) &&
                ((m && d < 0.01) || f === "canary")
              ) {
                d = new e(null);
                d.append("p", "pixel");
                d.append(
                  "v",
                  g.fbq && g.fbq.version ? g.fbq.version : "unknown"
                );
                d.append("e", a.toString());
                c(a, Error) &&
                  (d.append("f", a.fileName),
                  d.append("s", a.stackTrace || a.stack));
                d.append("ue", b ? "1" : "0");
                d.append("rs", f);
                h(d, {
                  url: i.CONFIG.CDN_BASE_URL + "/log/error",
                  ignoreRequestLengthCheck: !0,
                });
              }
            } catch (a) {}
          }
          function E(a) {
            var b = JSON.stringify(a);
            if (!Object.prototype.hasOwnProperty.call(z, b)) z[b] = !0;
            else return;
            b = A(a);
            w(b);
            y({ action: "FB_LOG", logMessage: b, logType: x }, "*");
            D(new Error(b), !0);
          }
          function F(a) {
            D(a, !1), j && w(a.toString());
          }
          a = {
            consoleWarn: t,
            disableAllLogging: v,
            disableSampling: n,
            enableVerboseDebugLogging: l,
            logError: F,
            logUserError: E,
            enableBufferedLoggedWarnings: p,
            bufferedLoggedWarnings: s,
          };
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsMakeSafe", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logError;
          function c(a) {
            return function () {
              try {
                for (var c = arguments.length, d = Array(c), e = 0; e < c; e++)
                  d[e] = arguments[e];
                a.apply(this, d);
              } catch (a) {
                b(a);
              }
              return;
            };
          }
          k.exports = c;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsMessageParamsTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            var b = f.getFbeventsModules("SignalsParamList");
            a = a.objectWithFields({
              customData: a.allowNull(a.object()),
              customParams: function (a) {
                return a instanceof b ? a : void 0;
              },
              eventName: a.string(),
              id: a.string(),
              piiTranslator: function (a) {
                return typeof a === "function" ? a : void 0;
              },
              documentLink: a.allowNull(a.string()),
              referrerLink: a.allowNull(a.string()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsMicrodataConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              waitTimeMs: a.allowNull(
                a.withValidation({
                  def: a.number(),
                  validators: [
                    function (a) {
                      return a > 0 && a < 1e4;
                    },
                  ],
                })
              ),
              disableMicrodataEvent: a.allowNull(a["boolean"]()),
              enablePageHash: a.allowNull(a["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsMobileAppBridge", function () {
      return (function (g, h, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTelemetry"),
            b = f.getFbeventsModules("SignalsFBEventsUtils"),
            c = b.each,
            d = "fbmq-0.1",
            e = {
              AddPaymentInfo: "fb_mobile_add_payment_info",
              AddToCart: "fb_mobile_add_to_cart",
              AddToWishlist: "fb_mobile_add_to_wishlist",
              CompleteRegistration: "fb_mobile_complete_registration",
              InitiateCheckout: "fb_mobile_initiated_checkout",
              Other: "other",
              Purchase: "fb_mobile_purchase",
              Search: "fb_mobile_search",
              ViewContent: "fb_mobile_content_view",
            },
            h = {
              content_ids: "fb_content_id",
              content_type: "fb_content_type",
              currency: "fb_currency",
              num_items: "fb_num_items",
              search_string: "fb_search_string",
              value: "_valueToSum",
              contents: "fb_content",
            },
            j = {};
          function k(a) {
            return "fbmq_" + a[1];
          }
          function m(a) {
            if (
              Object.prototype.hasOwnProperty.call(j, [0]) &&
              Object.prototype.hasOwnProperty.call(j[a[0]], a[1])
            )
              return !0;
            var b = g[k(a)];
            b = b && b.getProtocol.call && b.getProtocol() === d ? b : null;
            b !== null && ((j[a[0]] = j[a[0]] || {}), (j[a[0]][a[1]] = b));
            return b !== null;
          }
          function n(a) {
            var b = [];
            a = j[a.id] || {};
            for (var c in a)
              Object.prototype.hasOwnProperty.call(a, c) && b.push(a[c]);
            return b;
          }
          function o(a) {
            return n(a).length > 0;
          }
          function p(a) {
            return Object.prototype.hasOwnProperty.call(e, a) ? e[a] : a;
          }
          function q(a) {
            return Object.prototype.hasOwnProperty.call(h, a) ? h[a] : a;
          }
          function r(a) {
            if (typeof a === "string") return a;
            if (typeof a === "number") return isNaN(a) ? void 0 : a;
            try {
              return JSON.stringify(a);
            } catch (a) {}
            return a.toString && a.toString.call ? a.toString() : void 0;
          }
          function s(a) {
            var b = {};
            if (
              a != null &&
              (typeof a === "undefined" ? "undefined" : i(a)) === "object"
            )
              for (var c in a)
                if (Object.prototype.hasOwnProperty.call(a, c)) {
                  var d = r(a[c]);
                  d != null && (b[q(c)] = d);
                }
            return b;
          }
          var t = 0;
          function u() {
            var b = t;
            t = 0;
            a.logMobileNativeForwarding(b);
          }
          function v(a, b, d) {
            c(n(a), function (c) {
              return c.sendEvent(a.id, p(b), JSON.stringify(s(d)));
            }),
              t++,
              setTimeout(u, 0);
          }
          l.exports = {
            pixelHasActiveBridge: o,
            registerBridge: m,
            sendEvent: v,
          };
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsModuleEncodings", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.coerce,
            c = f.getFbeventsModules("SignalsFBEventsModuleEncodingsTypedef");
          f.getFbeventsModules("SignalsParamList");
          a = f.getFbeventsModules("SignalsFBEventsTyped");
          var d = a.Typed;
          a = f.getFbeventsModules("SignalsFBEventsUtils");
          var i = a.map,
            j = a.keys,
            k = a.filter;
          f.getFbeventsModules("SignalsFBEventsQE");
          f.getFbeventsModules("SignalsFBEventsGuardrail");
          a = (function () {
            function a() {
              n(this, a);
            }
            h(a, [
              {
                key: "setModuleEncodings",
                value: function (a) {
                  a = b(a, c);
                  a != null && (this.moduleEncodings = a);
                },
              },
              {
                key: "addEncodings",
                value: function (a) {
                  var c = this;
                  if (g.fbq == null || g.fbq.__fbeventsResolvedModules == null)
                    return;
                  if (this.moduleEncodings == null) return;
                  var f = b(g.fbq.__fbeventsResolvedModules, d.object());
                  if (f == null) return;
                  f = k(
                    i(j(f), function (a) {
                      return c.moduleEncodings.map != null &&
                        a in c.moduleEncodings.map
                        ? c.moduleEncodings.map[a]
                        : null;
                    }),
                    function (a) {
                      return a != null;
                    }
                  );
                  f.length > 0 &&
                    (this.moduleEncodings.hash != null &&
                      a.append("hme", this.moduleEncodings.hash),
                    a.append("ex_m", f.join(",")));
                },
              },
            ]);
            return a;
          })();
          l.exports = new a();
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsModuleEncodingsTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              map: a.allowNull(a.object()),
              hash: a.allowNull(a.string()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsNetworkConfig", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          var a = {
            ENDPOINT: "https://www.facebook.com/tr/",
            INSTAGRAM_TRIGGER_ATTRIBUTION: "https://www.instagram.com/tr/",
            AEM_ENDPOINT:
              "https://www.facebook.com/.well-known/aggregated-event-measurement/",
            GPS_ENDPOINT:
              "https://www.facebook.com/privacy_sandbox/pixel/register/trigger/",
            TOPICS_API_ENDPOINT:
              "https://www.facebook.com/privacy_sandbox/topics/registration/",
          };
          j.exports = a;
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsOpenBridgeConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              endpoints: b.arrayOf(
                b.objectWithFields({
                  targetDomain: b.allowNull(b.string()),
                  endpoint: b.allowNull(b.string()),
                  usePathCookie: b.allowNull(b["boolean"]()),
                  fallbackDomain: b.allowNull(b.string()),
                })
              ),
              eventsFilter: b.allowNull(
                b.objectWithFields({
                  filteringMode: b.allowNull(b.string()),
                  eventNames: b.allowNull(b.arrayOf(b.string())),
                })
              ),
              additionalUserData: b.allowNull(
                b.objectWithFields({
                  sendFBLoginID: b.allowNull(b["boolean"]()),
                })
              ),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsOptIn", function () {
      return (function (g, i, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.each,
            c = a.filter,
            d = a.keys,
            e = a.some;
          function g(a) {
            b(d(a), function (b) {
              if (
                e(a[b], function (b) {
                  return Object.prototype.hasOwnProperty.call(a, b);
                })
              )
                throw new Error(
                  "Circular subOpts are not allowed. " +
                    b +
                    " depends on another subOpt"
                );
            });
          }
          a = (function () {
            function a() {
              var b =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {};
              n(this, a);
              this._opts = {};
              this._subOpts = b;
              g(this._subOpts);
            }
            h(a, [
              {
                key: "_getOpts",
                value: function (a) {
                  return [].concat(
                    m(
                      Object.prototype.hasOwnProperty.call(this._subOpts, a)
                        ? this._subOpts[a]
                        : []
                    ),
                    [a]
                  );
                },
              },
              {
                key: "_setOpt",
                value: function (a, b, c) {
                  b = this._opts[b] || (this._opts[b] = {});
                  b[a] = c;
                },
              },
              {
                key: "optIn",
                value: function (a, c) {
                  var d = this,
                    e =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1;
                  b(this._getOpts(c), function (b) {
                    var f = e == !0 && d.isOptedOut(a, c);
                    f || d._setOpt(a, b, !0);
                  });
                  return this;
                },
              },
              {
                key: "optOut",
                value: function (a, c) {
                  var d = this;
                  b(this._getOpts(c), function (b) {
                    return d._setOpt(a, b, !1);
                  });
                  return this;
                },
              },
              {
                key: "isOptedIn",
                value: function (a, b) {
                  return this._opts[b] != null && this._opts[b][a] === !0;
                },
              },
              {
                key: "isOptedOut",
                value: function (a, b) {
                  return this._opts[b] != null && this._opts[b][a] === !1;
                },
              },
              {
                key: "listPixelIds",
                value: function (a) {
                  var b = this._opts[a];
                  return b != null
                    ? c(d(b), function (a) {
                        return b[a] === !0;
                      })
                    : [];
                },
              },
            ]);
            return a;
          })();
          l.exports = a;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsParallelFireConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({ target: a.string() });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsPIIAutomatchedEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
            c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.coerce;
          function e(a) {
            a = d(a, b);
            return a != null ? [a] : null;
          }
          c = new a(e);
          k.exports = c;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPIIConflictingEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
            c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.coerce;
          function e(a) {
            a = d(a, b);
            return a != null ? [a] : null;
          }
          c = new a(e);
          k.exports = c;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPIIInvalidatedEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsPixelTypedef"),
            c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.coerce;
          function e(a) {
            a = d(a, b);
            return a != null ? [a] : null;
          }
          k.exports = new a(e);
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPixelCookie", function () {
      return (function (i, j, k, l) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logError,
            c = "fb",
            d = 4;
          a = (function () {
            function a(b) {
              n(this, a),
                typeof b === "string"
                  ? this.maybeUpdatePayload(b)
                  : ((this.subdomainIndex = b.subdomainIndex),
                    (this.creationTime = b.creationTime),
                    (this.payload = b.payload));
            }
            h(
              a,
              [
                {
                  key: "pack",
                  value: function () {
                    return [
                      c,
                      this.subdomainIndex,
                      this.creationTime,
                      this.payload,
                    ].join(".");
                  },
                },
                {
                  key: "maybeUpdatePayload",
                  value: function (a) {
                    if (this.payload === null || this.payload !== a) {
                      this.payload = a;
                      a = Date.now();
                      this.creationTime =
                        typeof a === "number" ? a : new Date().getTime();
                    }
                  },
                },
              ],
              [
                {
                  key: "unpack",
                  value: function (e) {
                    try {
                      e = e.split(".");
                      if (e.length !== d) return null;
                      var f = g(e, 4),
                        h = f[0],
                        i = f[1],
                        j = f[2];
                      f = f[3];
                      if (h !== c)
                        throw new Error(
                          "Unexpected version number '" + e[0] + "'"
                        );
                      h = parseInt(i, 10);
                      if (isNaN(h))
                        throw new Error(
                          "Illegal subdomain index '" + e[1] + "'"
                        );
                      i = parseInt(j, 10);
                      if (isNaN(i))
                        throw new Error("Illegal creation time '" + e[2] + "'");
                      if (f == null || f === "")
                        throw new Error("Empty cookie payload");
                      return new a({
                        creationTime: i,
                        payload: f,
                        subdomainIndex: h,
                      });
                    } catch (a) {
                      b(a);
                      return null;
                    }
                  },
                },
              ]
            );
            return a;
          })();
          m.exports = a;
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPixelTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped");
          a = a.Typed;
          a = a.objectWithFields({
            eventCount: a.number(),
            id: a.fbid(),
            userData: a.mapOf(a.string()),
            userDataFormFields: a.mapOf(a.string()),
          });
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPlugin", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          var a = function a(b) {
            n(this, a),
              (this.__fbEventsPlugin = 1),
              (this.plugin = b),
              (this.__fbEventsPlugin = 1);
          };
          j.exports = a;
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPluginLoadedEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");
          function b(a) {
            a = a != null && typeof a === "string" ? a : null;
            return a != null ? [a] : null;
          }
          k.exports = new a(b);
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPluginManager", function () {
      return (function (g, j, k, l) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsConfigStore"),
            b = f.getFbeventsModules("SignalsFBEventsEvents"),
            c = b.pluginLoaded,
            d = f.getFbeventsModules("SignalsFBEventsJSLoader");
          b = f.getFbeventsModules("SignalsFBEventsLogging");
          var e = b.logError,
            g = f.getFbeventsModules("SignalsFBEventsPlugin");
          function j(a) {
            return "fbevents.plugins." + a;
          }
          function k(a, b) {
            if (a === "fbevents") return new g(function () {});
            if (b instanceof g) return b;
            if (
              b == null ||
              (typeof b === "undefined" ? "undefined" : i(b)) !== "object"
            ) {
              e(new Error("Invalid plugin registered " + a));
              return new g(function () {});
            }
            var c = b.__fbEventsPlugin;
            b = b.plugin;
            if (c !== 1 || typeof b !== "function") {
              e(new Error("Invalid plugin registered " + a));
              return new g(function () {});
            }
            return new g(b);
          }
          b = (function () {
            function b(a, c) {
              n(this, b),
                (this._loadedPlugins = {}),
                (this._instance = a),
                (this._lock = c);
            }
            h(b, [
              {
                key: "registerPlugin",
                value: function (b, d) {
                  if (
                    Object.prototype.hasOwnProperty.call(this._loadedPlugins, b)
                  )
                    return;
                  this._loadedPlugins[b] = k(b, d);
                  this._loadedPlugins[b].plugin(f, this._instance, a);
                  c.trigger(b);
                  this._lock.releasePlugin(b);
                },
              },
              {
                key: "loadPlugin",
                value: function (a) {
                  if (/^[a-zA-Z]\w+$/.test(a) === !1)
                    throw new Error("Invalid plugin name: " + a);
                  var b = j(a);
                  if (this._loadedPlugins[b]) return !0;
                  if (f.fbIsModuleLoaded(b)) {
                    this.registerPlugin(b, f.getFbeventsModules(b));
                    return !0;
                  }
                  a =
                    d.CONFIG.CDN_BASE_URL +
                    "signals/plugins/" +
                    a +
                    ".js?v=" +
                    f.version;
                  if (!this._loadedPlugins[b]) {
                    this._lock.lockPlugin(b);
                    d.loadJSFile(a);
                    return !0;
                  }
                  return !1;
                },
              },
            ]);
            return b;
          })();
          m.exports = b;
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsProcessCCRulesEvent", function () {
      return (function (g, h, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            c = f.getFbeventsModules("SignalsParamList");
          function d(b, d) {
            b = b instanceof c ? b : null;
            d =
              (typeof d === "undefined" ? "undefined" : i(d)) === "object"
                ? a({}, d)
                : null;
            return b != null ? [b, d] : null;
          }
          b = new b(d);
          l.exports = b;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsProhibitedPixelConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a.coerce;
            a = a.Typed;
            a = a.objectWithFields({
              lockWebpage: a.allowNull(a["boolean"]()),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsProhibitedSourcesTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              prohibitedSources: b.arrayOf(
                b.objectWithFields({ domain: b.allowNull(b.string()) })
              ),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsProtectedDataModeConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({ standardParams: b.mapOf(b["boolean"]()) });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsQE", function () {
      return (function (i, j, k, l) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsExperimentsTypedef"),
            b = f.getFbeventsModules(
              "SignalsFBEventsLegacyExperimentGroupsTypedef"
            ),
            c = f.getFbeventsModules("SignalsFBEventsTypeVersioning"),
            d = f.getFbeventsModules("SignalsFBEventsTyped"),
            e = d.coerce;
          d = f.getFbeventsModules("SignalsFBEventsUtils");
          var i = d.reduce,
            j = function () {
              return Math.random();
            };
          function k(a) {
            var b = i(
                a,
                function (b, c, a) {
                  if (a === 0) {
                    b.push([0, c.allocation]);
                    return b;
                  }
                  a = g(b[a - 1], 2);
                  a[0];
                  a = a[1];
                  b.push([a, a + c.allocation]);
                  return b;
                },
                []
              ),
              c = j();
            for (var d = 0; d < a.length; d++) {
              var e = a[d],
                f = e.passRate,
                h = e.code;
              e = e.name;
              var k = g(b[d], 2),
                l = k[0];
              k = k[1];
              if (c >= l && c < k) {
                l = j() < f;
                return { code: h, isInExperimentGroup: l, name: e };
              }
            }
            return null;
          }
          d = (function () {
            function d() {
              n(this, d),
                (this._result = null),
                (this._hasRolled = !1),
                (this._isExposed = !1),
                (this.CONTROL = "CONTROL"),
                (this.TEST = "TEST"),
                (this.UNASSIGNED = "UNASSIGNED");
            }
            h(d, [
              {
                key: "setExperiments",
                value: function (d) {
                  d = e(d, c.waterfall([b, a]));
                  d != null &&
                    ((this._experiments = d),
                    (this._hasRolled = !1),
                    (this._result = null),
                    (this._isExposed = !1));
                },
              },
              {
                key: "get",
                value: function (a) {
                  if (!this._hasRolled) {
                    var b = this._experiments;
                    if (b == null) return null;
                    b = k(b);
                    b != null && (this._result = b);
                    this._hasRolled = !0;
                  }
                  if (a == null || a === "") return this._result;
                  return this._result != null && this._result.name === a
                    ? this._result
                    : null;
                },
              },
              {
                key: "getCode",
                value: function () {
                  var a = this.get();
                  if (a == null) return "";
                  var b = 0;
                  a.isInExperimentGroup && (b |= 1);
                  this._isExposed && (b |= 2);
                  return a.code + b.toString();
                },
              },
              {
                key: "getAssignmentFor",
                value: function (a) {
                  var b = this.get();
                  if (b != null && b.name === a) {
                    this._isExposed = !0;
                    return b.isInExperimentGroup ? this.TEST : this.CONTROL;
                  }
                  return this.UNASSIGNED;
                },
              },
              {
                key: "isInTest",
                value: function (a) {
                  var b = this.get();
                  if (b != null && b.name === a) {
                    this._isExposed = !0;
                    return b.isInExperimentGroup;
                  }
                  return !1;
                },
              },
            ]);
            return d;
          })();
          m.exports = new d();
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "signalsFBEventsResolveLegacyArguments",
      function () {
        return (function (f, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = "report";
            function b(a) {
              var b = g(a, 1);
              b = b[0];
              return a.length === 1 && Array.isArray(b)
                ? { args: b, isLegacySyntax: !0 }
                : { args: a, isLegacySyntax: !1 };
            }
            function c(b) {
              var c = g(b, 2),
                d = c[0];
              c = c[1];
              if (typeof d === "string" && d.slice(0, a.length) === a) {
                d = d.slice(a.length);
                if (d === "CustomEvent") {
                  c != null &&
                    (typeof c === "undefined" ? "undefined" : i(c)) ===
                      "object" &&
                    typeof c.event === "string" &&
                    (d = c.event);
                  return ["trackCustom", d].concat(b.slice(1));
                }
                return ["track", d].concat(b.slice(1));
              }
              return b;
            }
            function d(a) {
              a = b(a);
              var d = a.args;
              a = a.isLegacySyntax;
              d = c(d);
              return { args: d, isLegacySyntax: a };
            }
            l.exports = d;
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsResolveLink", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsGetValidUrl"),
            b = f.getFbeventsModules("SignalsFBEventsUtils"),
            c = b.each,
            d = b.keys;
          k.exports = function (b, e, f) {
            var h = g.top !== g;
            if (h && e != null && e.length > 0) {
              if (f != null) {
                h = !1;
                var i = a(e);
                if (i != null) {
                  var j = i.origin;
                  c(d(f), function (a) {
                    a != null && j.indexOf(a) >= 0 && (h = !0);
                  });
                }
                if (i == null || h) return b;
              }
              return e;
            } else return b != null && b.length > 0 ? b : e;
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsRestrictedDomainsConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              restrictedDomains: b.allowNull(
                b.arrayOf(b.allowNull(b.string()))
              ),
              blacklistedIframeReferrers: b.allowNull(b.mapOf(b["boolean"]())),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsSendBatch", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBatcher"),
            b = f.getFbeventsModules("SignalsFBEventsLogging"),
            c = b.logError;
          b = f.getFbeventsModules("SignalsFBEventsUtils");
          var d = b.map,
            e = f.getFbeventsModules("SignalsParamList"),
            h = f.getFbeventsModules("signalsFBEventsSendBeacon"),
            i = f.getFbeventsModules("signalsFBEventsSendGET"),
            j = f.getFbeventsModules("signalsFBEventsSendXHR");
          b = f.getFbeventsModules("SignalsFBEventsEvents");
          var l = b.fired;
          function m(a, b) {
            var c = !0,
              d = !1,
              e = void 0;
            try {
              for (
                var f =
                    b[
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    ](),
                  b;
                !(c = (b = f.next()).done);
                c = !0
              ) {
                b = b.value;
                l.trigger(a, b);
              }
            } catch (a) {
              (d = !0), (e = a);
            } finally {
              try {
                !c && f["return"] && f["return"]();
              } finally {
                if (d) throw e;
              }
            }
          }
          function n(a) {
            var b = d(a, function (a) {
              return a.toQueryString();
            });
            b = new e().appendHash({ batch: 1, events: b });
            if (i(b)) {
              m("GET", a);
              return;
            }
            if (h(b)) {
              m("BEACON", a);
              return;
            }
            if (j(b)) {
              m("POST", a);
              return;
            }
            if (i(b, { ignoreRequestLengthCheck: !0 })) {
              m("GET", a);
              return;
            }
            c(new Error("could not send batch"));
          }
          var o = new a(n);
          function p(a) {
            o.addToBatch(a);
          }
          g.addEventListener(
            "onpagehide" in g ? "pagehide" : "unload",
            function () {
              return o.forceEndBatch();
            }
          );
          k.exports = p;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsSendBeacon", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          f.getFbeventsModules("SignalsFBEventsQE");
          var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            b = f.getFbeventsModules("SignalsFBEventsLogging"),
            c = b.logError;
          function d(b, d) {
            try {
              if (!g.navigator || !g.navigator.sendBeacon) return !1;
              d = d || {};
              d = d.url;
              d = d === void 0 ? a.ENDPOINT : d;
              b.replaceEntry("rqm", "SB");
              return g.navigator.sendBeacon(d, b.toFormData());
            } catch (a) {
              a instanceof Error && c(new Error("[SendBeacon]:" + a.message));
              return !1;
            }
          }
          k.exports = d;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "signalsFBEventsSendBeaconWithParamsInURL",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
              b = f.getFbeventsModules("SignalsFBEventsLogging"),
              c = b.logError,
              d = 2048;
            function e(b, e) {
              try {
                if (!g.navigator || !g.navigator.sendBeacon) return !1;
                e = e || {};
                e = e.url;
                e = e === void 0 ? a.ENDPOINT : e;
                b.replaceEntry("rqm", "SB");
                b = b.toQueryString();
                e = e + "?" + b;
                return e.length > d ? !1 : g.navigator.sendBeacon(e);
              } catch (a) {
                a instanceof Error &&
                  c(new Error("[SendBeaconWithParamsInURL]:" + a.message));
                return !1;
              }
            }
            k.exports = e;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsSendCloudbridgeEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");
            f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            var b = f.getFbeventsModules("SignalsFBEventsTyped");
            b = b.Typed;
            var c = f.getFbeventsModules("SignalsFBEventsMessageParamsTypedef");
            a = new a(b.tuple([c]));
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("signalsFBEventsSendEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsEvents");
          b.fired;
          var c = b.setEventId,
            d = f.getFbeventsModules("SignalsParamList"),
            e = f.getFbeventsModules("SignalsFBEventsSendEventEvent"),
            h = f.getFbeventsModules("SignalsFBEventsSendCloudbridgeEvent"),
            i = f.getFbeventsModules("SignalsFBEventsFilterProtectedModeEvent"),
            j = f.getFbeventsModules("SignalsFBEventsProcessCCRulesEvent"),
            l = f.getFbeventsModules(
              "SignalsFBEventsLateValidateCustomParametersEvent"
            );
          b = f.getFbeventsModules("SignalsFBEventsUtils");
          var m = b.some,
            n = b.each,
            o = b.keys;
          f.getFbeventsModules("SignalsFBEventsNetworkConfig");
          f.getFbeventsModules("generateUUID");
          var p = f.getFbeventsModules("SignalsFBEventsSetFilteredEventName"),
            q = f.getFbeventsModules("signalsFBEventsFillParamList"),
            r = f.getFbeventsModules("signalsFBEventsFireEvent");
          b = f.getFbeventsModules("SignalsFBEventsExperimentNames");
          b.BATCHING_EXPERIMENT;
          b.SEND_XHR_EXPERIMENT;
          g.top !== g;
          function s(b) {
            b.customData = a({}, b.customData);
            b.timestamp = new Date().valueOf();
            var f = null;
            b.customParams != null && (f = b.customParams.get("eid"));
            if (f == null || f === "") {
              b.customParams = b.customParams || new d();
              f = b.customParams;
              b.id != null && c.trigger(String(b.id), f);
            }
            f = j.trigger(q(b), b.customData);
            f != null &&
              n(f, function (a) {
                a != null &&
                  n(o(a), function (c) {
                    (b.customParams = b.customParams || new d()),
                      b.customParams.append(c, a[c]);
                  });
              });
            l.trigger(String(b.id), b.customData || {}, b.eventName);
            f = p.trigger(q(b));
            f != null &&
              n(f, function (a) {
                a != null &&
                  n(o(a), function (c) {
                    (b.customParams = b.customParams || new d()),
                      b.customParams.append(c, a[c]);
                  });
              });
            i.trigger(b);
            f = e.trigger(b);
            if (
              m(f, function (a) {
                return a;
              })
            )
              return;
            f = h.trigger(b);
            if (
              m(f, function (a) {
                return a;
              })
            )
              return;
            f =
              Object.prototype.hasOwnProperty.call(b, "customData") &&
              typeof b.customData !== "undefined" &&
              b.customData !== null;
            f || (b.customData = {});
            r(b);
          }
          k.exports = s;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsSendEventEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsParamList");
          f.getFbeventsModules("SignalsFBEventsPixelTypedef");
          var c = f.getFbeventsModules("SignalsFBEventsTyped"),
            d = c.Typed;
          c.coerce;
          c = d.objectWithFields({
            customData: d.allowNull(d.object()),
            customParams: function (a) {
              return a instanceof b ? a : void 0;
            },
            eventName: d.string(),
            id: d.string(),
            piiTranslator: function (a) {
              return typeof a === "function" ? a : void 0;
            },
            documentLink: d.allowNull(d.string()),
            referrerLink: d.allowNull(d.string()),
          });
          a = new a(d.tuple([c]));
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsSendFetch", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          var a = f.getFbeventsModules("SignalsFBEventsQE"),
            b = f.getFbeventsModules("SignalsFBEventsGuardrail"),
            c = f.getFbeventsModules("SignalsFBEventsNetworkConfig");
          function d(d, e, f) {
            if (!("fetch" in g && typeof g.fetch === "function")) return !1;
            if (!a.isInTest("use_keepalive") && !b.eval("use_keepalive_on"))
              return !1;
            f = e || {};
            e = f.url;
            f = e === void 0 ? c.ENDPOINT : e;
            d.replaceEntry("rqm", "fetch");
            e = { method: "POST", body: d.toFormData(), keepalive: !0 };
            g.fetch(f, e);
            return !0;
          }
          k.exports = d;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsSendFormPOST", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            b = f.getFbeventsModules("SignalsFBEventsUtils"),
            c = b.listenOnce;
          b = f.getFbeventsModules("SignalsFBEventsLogging");
          var d = b.logError;
          function e(b, e) {
            try {
              b.replaceEntry("rqm", "formPOST");
              var f = "fb" + Math.random().toString().replace(".", ""),
                i = h.createElement("form");
              i.method = "post";
              i.action = e != null ? e : a.ENDPOINT;
              i.target = f;
              i.acceptCharset = "utf-8";
              i.style.display = "none";
              e = !!(g.attachEvent && !g.addEventListener);
              var j = h.createElement("iframe");
              e && (j.name = f);
              j.src = "about:blank";
              j.id = f;
              j.name = f;
              i.appendChild(j);
              c(j, "load", function () {
                b.each(function (a, b) {
                  var c = h.createElement("input");
                  c.name = decodeURIComponent(a);
                  c.value = b;
                  i.appendChild(c);
                }),
                  c(j, "load", function () {
                    i.parentNode && i.parentNode.removeChild(i);
                  }),
                  i.submit();
              });
              h.body != null && h.body.appendChild(i);
              return !0;
            } catch (a) {
              a instanceof Error && d(new Error("[POST]:" + a.message));
              return !0;
            }
          }
          k.exports = e;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsSendGET", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            b = f.getFbeventsModules(
              "SignalsFBEventsShouldRestrictReferrerEvent"
            ),
            c = f.getFbeventsModules("SignalsFBEventsUtils"),
            d = c.some,
            e = 2048;
          function g(c, f) {
            try {
              var g = f || {},
                h = g.ignoreRequestLengthCheck;
              h = h === void 0 ? !1 : h;
              var i = g.url;
              i = i === void 0 ? a.ENDPOINT : i;
              g = g.attributionReporting;
              g = g === void 0 ? !1 : g;
              c.replaceEntry("rqm", h ? "FGET" : "GET");
              var j = c.toQueryString();
              i = i + "?" + j;
              if (h || i.length < e) {
                j = new Image();
                f != null &&
                  f.errorHandler != null &&
                  (j.onerror = f.errorHandler);
                h = b.trigger(c);
                d(h, function (a) {
                  return a;
                }) && (j.referrerPolicy = "origin");
                g && j.setAttribute("attributionsrc", "");
                j.src = i;
                return !0;
              }
              return !1;
            } catch (a) {
              return !1;
            }
          }
          k.exports = g;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsSendXHR", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            b = f.getFbeventsModules("SignalsParamList"),
            c = f.getFbeventsModules("SignalsFBEventsLogging"),
            d = c.logError,
            e = {
              UNSENT: 0,
              OPENED: 1,
              HEADERS_RECEIVED: 2,
              LOADING: 3,
              DONE: 4,
            },
            g =
              typeof XMLHttpRequest !== "undefined" &&
              "withCredentials" in new XMLHttpRequest();
          function h(a, b, c) {
            var f = new XMLHttpRequest();
            f.withCredentials = !0;
            f.open("POST", b);
            f.onreadystatechange = function () {
              if (f.readyState !== e.DONE) return;
              f.status !== 200 &&
                (c != null
                  ? c()
                  : d(
                      new Error(
                        "Error sending XHR " + f.status + " - " + f.statusText
                      )
                    ));
            };
            f.send(a);
          }
          function i(c) {
            var d =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : a.ENDPOINT,
              e = arguments[2];
            if (!g) return !1;
            c instanceof b && c.replaceEntry("rqm", "xhr");
            var f = c instanceof b ? c.toFormData() : c;
            h(f, d, e);
            return !0;
          }
          k.exports = i;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsSetCCRules", function () {
      return (function (g, h, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsUtils");
          b.filter;
          b.map;
          b = f.getFbeventsModules("SignalsFBEventsTyped");
          var c = b.coerce;
          b = b.Typed;
          f.getFbeventsModules("signalsFBEventsCoerceParameterExtractors");
          var d = f.getFbeventsModules("signalsFBEventsCoercePixelID"),
            e = b.arrayOf(
              b.objectWithFields({ id: b.number(), rule: b.string() })
            );
          function g() {
            for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
              b[f] = arguments[f];
            var g = b[0];
            if (
              g == null ||
              (typeof g === "undefined" ? "undefined" : i(g)) !== "object"
            )
              return null;
            var h = g.pixelID,
              j = g.rules,
              k = d(h);
            if (k == null) return null;
            var l = c(j, e);
            return [{ rules: l, pixelID: k }];
          }
          b = new a(g);
          l.exports = b;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsSetESTRules", function () {
      return (function (g, h, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsFBEventsUtils");
          b.filter;
          b.map;
          b = f.getFbeventsModules("SignalsFBEventsTyped");
          var c = b.coerce;
          b = b.Typed;
          f.getFbeventsModules("signalsFBEventsCoerceParameterExtractors");
          var d = f.getFbeventsModules("signalsFBEventsCoercePixelID"),
            e = b.arrayOf(
              b.objectWithFields({
                condition: b.objectOrString(),
                derived_event_name: b.string(),
                rule_status: b.allowNull(b.string()),
                transformations: b.allowNull(b.array()),
                rule_id: b.allowNull(b.string()),
              })
            );
          function g() {
            for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
              b[f] = arguments[f];
            var g = b[0];
            if (
              g == null ||
              (typeof g === "undefined" ? "undefined" : i(g)) !== "object"
            )
              return null;
            var h = g.pixelID,
              j = g.rules,
              k = d(h);
            if (k == null) return null;
            var l = c(j, e);
            return [{ rules: l, pixelID: k }];
          }
          b = new a(g);
          l.exports = b;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsSetEventIDEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("SignalsParamList");
          f.getFbeventsModules("SignalsFBEventsPixelTypedef");
          var c = f.getFbeventsModules("SignalsFBEventsTyped");
          c.coerce;
          var d = f.getFbeventsModules("signalsFBEventsCoercePixelID");
          function e(a, c) {
            a = d(a);
            c = c instanceof b ? c : null;
            return a != null && c != null ? [a, c] : null;
          }
          c = new a(e);
          k.exports = c;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsSetFBPEvent", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
            b = f.getFbeventsModules("signalsFBEventsCoercePixelID");
          function c(a, c) {
            a = b(a);
            c = c != null && typeof c === "string" && c !== "" ? c : null;
            return [a, c];
          }
          a = new a(c);
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsSetFilteredEventName",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsParamList");
            f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            var c = f.getFbeventsModules("SignalsFBEventsTyped");
            c.Typed;
            c.coerce;
            function d(a) {
              a = a instanceof b ? a : null;
              return a != null ? [a] : null;
            }
            c = new a(d);
            k.exports = c;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsSetIWLExtractorsEvent",
      function () {
        return (function (g, h, j, k) {
          var l = { exports: {} };
          l.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsFBEventsUtils"),
              c = b.filter,
              d = b.map,
              e = f.getFbeventsModules(
                "signalsFBEventsCoerceParameterExtractors"
              ),
              g = f.getFbeventsModules("signalsFBEventsCoercePixelID");
            function h() {
              for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
                b[f] = arguments[f];
              var h = b[0];
              if (
                h == null ||
                (typeof h === "undefined" ? "undefined" : i(h)) !== "object"
              )
                return null;
              var j = h.pixelID,
                k = h.extractors,
                l = g(j),
                m = Array.isArray(k) ? d(k, e) : null,
                n = m != null ? c(m, Boolean) : null;
              return n != null &&
                m != null &&
                n.length === m.length &&
                l != null
                ? [{ extractors: n, pixelID: l }]
                : null;
            }
            b = new a(h);
            l.exports = b;
          })();
          return l.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsShouldRestrictReferrerEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsParamList"),
              b = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              c = f.getFbeventsModules("SignalsFBEventsTyped");
            c.coerce;
            c.Typed;
            f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            c = f.getFbeventsModules("SignalsFBEventsCoercePrimitives");
            c.coerceString;
            function d(b) {
              b = b instanceof a ? b : null;
              return b != null ? [b] : null;
            }
            c = new b(d);
            k.exports = c;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsStandardParamChecksConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped"),
              b = a.Typed;
            a.coerce;
            a = b.objectWithFields({
              standardParamChecks: b.allowNull(
                b.mapOf(
                  b.allowNull(
                    b.arrayOf(
                      b.allowNull(
                        b.objectWithFields({
                          require_exact_match: b["boolean"](),
                          potential_matches: b.allowNull(b.arrayOf(b.string())),
                        })
                      )
                    )
                  )
                )
              ),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsTelemetry", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = f.getFbeventsModules("SignalsParamList");
          f.getFbeventsModules("SignalsFBEventsQE");
          var c = f.getFbeventsModules("signalsFBEventsSendGET");
          f.getFbeventsModules("signalsFBEventsSendXHR");
          f.getFbeventsModules("signalsFBEventsSendBeacon");
          var d = 0.01,
            e = Math.random(),
            h =
              g.fbq && g.fbq._releaseSegment
                ? g.fbq._releaseSegment
                : "unknown",
            i = e < d || h === "canary",
            j = "https://connect.facebook.net/log/fbevents_telemetry/";
          function l(d) {
            var e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : 0,
              f =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : !1;
            if (!f && !i) return;
            try {
              var k = new b(null);
              k.append("v", g.fbq && g.fbq.version ? g.fbq.version : "unknown");
              k.append("rs", h);
              k.append("e", d);
              k.append("p", e);
              c(k, { ignoreRequestLengthCheck: !0, url: j });
            } catch (b) {
              a.logError(b);
            }
          }
          function m(a) {
            l("FBMQ_FORWARDED", a, !0);
          }
          k.exports = { logMobileNativeForwarding: m };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsTyped", function () {
      return (function (g, h, m, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsUtils");
          b.filter;
          b.map;
          var c = b.reduce;
          b = f.getFbeventsModules("SignalsFBEventsUtils");
          var d = b.isSafeInteger,
            g = (function (b) {
              k(a, b);
              function a() {
                var b =
                  arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : "";
                n(this, a);
                var c = j(
                  this,
                  (a.__proto__ || Object.getPrototypeOf(a)).call(this, b)
                );
                c.name = "FBEventsCoercionError";
                return c;
              }
              return a;
            })(Error);
          function h(a) {
            return Object.values(a);
          }
          function m() {
            return function (a) {
              if (typeof a !== "boolean") throw new g();
              return a;
            };
          }
          function o() {
            return function (a) {
              if (typeof a !== "number") throw new g();
              return a;
            };
          }
          function p() {
            return function (a) {
              if (typeof a !== "string") throw new g();
              return a;
            };
          }
          function q() {
            return function (a) {
              if (typeof a !== "string" && typeof a !== "number") throw new g();
              return a;
            };
          }
          function r() {
            return function (a) {
              if (
                (typeof a === "undefined" ? "undefined" : i(a)) !== "object" ||
                Array.isArray(a) ||
                a == null
              )
                throw new g();
              return a;
            };
          }
          function s() {
            return function (a) {
              if (
                ((typeof a === "undefined" ? "undefined" : i(a)) !== "object" &&
                  typeof a !== "string") ||
                Array.isArray(a) ||
                a == null
              )
                throw new g();
              return a;
            };
          }
          function t() {
            return function (a) {
              if (typeof a !== "function" || a == null) throw new g();
              return a;
            };
          }
          function u() {
            return function (a) {
              if (a == null || !Array.isArray(a)) throw new g();
              return a;
            };
          }
          function v(a) {
            return function (b) {
              if (h(a).includes(b)) return b;
              throw new g();
            };
          }
          function w(a) {
            return function (b) {
              return B(b, I.array()).map(a);
            };
          }
          function x(b) {
            return function (e) {
              var d = B(e, I.object());
              return c(
                Object.keys(d),
                function (c, e) {
                  return a({}, c, l({}, e, b(d[e])));
                },
                {}
              );
            };
          }
          function y(a) {
            return function (b) {
              return b == null ? null : a(b);
            };
          }
          function z(b) {
            return function (e) {
              var d = B(e, I.object());
              e = c(
                Object.keys(b),
                function (c, e) {
                  if (c == null) return null;
                  var f = b[e],
                    g = d[e];
                  f = f(g);
                  return a({}, c, l({}, e, f));
                },
                {}
              );
              return e;
            };
          }
          function A(a, b) {
            try {
              return b(a);
            } catch (a) {
              if (a.name === "FBEventsCoercionError") return null;
              throw a;
            }
          }
          function B(a, b) {
            return b(a);
          }
          function C(a) {
            return function (b) {
              b = B(b, I.string());
              if (a.test(b)) return b;
              throw new g();
            };
          }
          function D(a) {
            if (!a) throw new g();
          }
          function E(a) {
            return function (b) {
              b = B(b, u());
              D(b.length === a.length);
              return b.map(function (b, c) {
                return B(b, a[c]);
              });
            };
          }
          function F(a) {
            var b = a.def,
              c = a.validators;
            return function (a) {
              var d = B(a, b);
              c.forEach(function (a) {
                if (!a(d)) throw new g();
              });
              return d;
            };
          }
          var G = /^[1-9][0-9]{0,25}$/;
          function H() {
            return F({
              def: function (a) {
                var b = A(a, I.number());
                if (b != null) {
                  I.assert(d(b));
                  return "" + b;
                }
                return B(a, I.string());
              },
              validators: [
                function (a) {
                  return G.test(a);
                },
              ],
            });
          }
          var I = {
            allowNull: y,
            array: u,
            arrayOf: w,
            assert: D,
            boolean: m,
            enumeration: v,
            fbid: H,
            mapOf: x,
            matches: C,
            number: o,
            object: r,
            objectOrString: s,
            objectWithFields: z,
            string: p,
            stringOrNumber: q,
            tuple: E,
            withValidation: F,
            func: t,
          };
          e.exports = {
            Typed: I,
            coerce: A,
            enforce: B,
            FBEventsCoercionError: g,
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsTypeVersioning", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          var a = f.getFbeventsModules("SignalsFBEventsTyped");
          a.coerce;
          var b = a.enforce,
            c = a.FBEventsCoercionError;
          function d(a) {
            return function (d) {
              for (var e = 0; e < a.length; e++) {
                var f = a[e];
                try {
                  return b(d, f);
                } catch (a) {
                  if (a.name === "FBEventsCoercionError") continue;
                  throw a;
                }
              }
              throw new c();
            };
          }
          function e(a, c) {
            return function (d) {
              return c(b(d, a));
            };
          }
          a = { waterfall: d, upgrade: e };
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsUnwantedDataTypedef", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsTyped"),
            b = a.Typed;
          a.coerce;
          a = b.objectWithFields({
            blacklisted_keys: b.allowNull(
              b.mapOf(b.mapOf(b.arrayOf(b.string())))
            ),
            sensitive_keys: b.allowNull(
              b.mapOf(b.mapOf(b.arrayOf(b.string())))
            ),
          });
          k.exports = a;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsUnwantedEventNamesConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              unwantedEventNames: a.allowNull(a.mapOf(a.allowNull(a.number()))),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsUnwantedEventsConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              restrictedEventNames: a.allowNull(
                a.mapOf(a.allowNull(a.number()))
              ),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsUnwantedParamsConfigTypedef",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsTyped");
            a = a.Typed;
            a = a.objectWithFields({
              unwantedParams: a.allowNull(a.arrayOf(a.string())),
            });
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsFBEventsURLUtil", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          function a(a, b) {
            b = new RegExp(
              "[?#&]" + b.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)"
            );
            b = b.exec(a);
            if (!b) return null;
            return !b[2] ? "" : decodeURIComponent(b[2].replace(/\+/g, " "));
          }
          function b(b) {
            var c;
            c = a(f.location.href, b);
            if (c != null) return c;
            c = a(g.referrer, b);
            return c;
          }
          j.exports = { getURLParameter: a, maybeGetParamFromUrlForEbp: b };
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsUtils", function () {
      return (function (f, g, j, k) {
        var l = { exports: {} };
        l.exports;
        (function () {
          "use strict";
          var a = Object.prototype.toString,
            b = !("addEventListener" in g);
          function c(a, b) {
            return b != null && a instanceof b;
          }
          function d(b) {
            return Array.isArray
              ? Array.isArray(b)
              : a.call(b) === "[object Array]";
          }
          function e(a) {
            return (
              typeof a === "number" ||
              (typeof a === "string" && /^\d+$/.test(a))
            );
          }
          function f(a) {
            return (
              a != null &&
              (typeof a === "undefined" ? "undefined" : i(a)) === "object" &&
              d(a) === !1
            );
          }
          function j(a) {
            return (
              f(a) === !0 &&
              Object.prototype.toString.call(a) === "[object Object]"
            );
          }
          function k(a) {
            if (j(a) === !1) return !1;
            a = a.constructor;
            if (typeof a !== "function") return !1;
            a = a.prototype;
            if (j(a) === !1) return !1;
            return Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") ===
              !1
              ? !1
              : !0;
          }
          var m =
            Number.isInteger ||
            function (a) {
              return (
                typeof a === "number" && isFinite(a) && Math.floor(a) === a
              );
            };
          function o(a) {
            return m(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER;
          }
          function p(a, c, d) {
            var e = b ? "on" + c : c;
            c = b ? a.attachEvent : a.addEventListener;
            var f = b ? a.detachEvent : a.removeEventListener,
              g = function b() {
                f && f.call(a, e, b, !1), d();
              };
            c && c.call(a, e, g, !1);
          }
          var q = Object.prototype.hasOwnProperty,
            r = !{ toString: null }.propertyIsEnumerable("toString"),
            s = [
              "toString",
              "toLocaleString",
              "valueOf",
              "hasOwnProperty",
              "isPrototypeOf",
              "propertyIsEnumerable",
              "constructor",
            ],
            t = s.length;
          function u(a) {
            if (
              (typeof a === "undefined" ? "undefined" : i(a)) !== "object" &&
              (typeof a !== "function" || a === null)
            )
              throw new TypeError("Object.keys called on non-object");
            var b = [];
            for (var c in a) q.call(a, c) && b.push(c);
            if (r) for (c = 0; c < t; c++) q.call(a, s[c]) && b.push(s[c]);
            return b;
          }
          function v(a, b) {
            if (a == null) throw new TypeError(" array is null or not defined");
            a = Object(a);
            var c = a.length >>> 0;
            if (typeof b !== "function")
              throw new TypeError(b + " is not a function");
            var d = new Array(c),
              e = 0;
            while (e < c) {
              var f;
              e in a && ((f = a[e]), (f = b(f, e, a)), (d[e] = f));
              e++;
            }
            return d;
          }
          function w(a, b, c, d) {
            if (a == null) throw new TypeError(" array is null or not defined");
            if (typeof b !== "function")
              throw new TypeError(b + " is not a function");
            var e = Object(a),
              f = e.length >>> 0,
              g = 0;
            if (c != null || d === !0) d = c;
            else {
              while (g < f && !(g in e)) g++;
              if (g >= f)
                throw new TypeError(
                  "Reduce of empty array with no initial value"
                );
              d = e[g++];
            }
            while (g < f) g in e && (d = b(d, e[g], g, a)), g++;
            return d;
          }
          function x(a) {
            if (typeof a !== "function") throw new TypeError();
            var b = Object(this),
              c = b.length >>> 0,
              d = arguments.length >= 2 ? arguments[1] : void 0;
            for (var e = 0; e < c; e++)
              if (e in b && a.call(d, b[e], e, b)) return !0;
            return !1;
          }
          function y(a) {
            return u(a).length === 0;
          }
          function z(a) {
            if (this === void 0 || this === null) throw new TypeError();
            var b = Object(this),
              c = b.length >>> 0;
            if (typeof a !== "function") throw new TypeError();
            var d = [],
              e = arguments.length >= 2 ? arguments[1] : void 0;
            for (var f = 0; f < c; f++)
              if (f in b) {
                var g = b[f];
                a.call(e, g, f, b) && d.push(g);
              }
            return d;
          }
          function A(a, b) {
            try {
              return b(a);
            } catch (a) {
              if (a instanceof TypeError)
                if (B.test(a)) return null;
                else if (C.test(a)) return void 0;
              throw a;
            }
          }
          var B = /^null | null$|^[^(]* null /i,
            C = /^undefined | undefined$|^[^(]* undefined /i;
          A["default"] = A;
          var D = (function () {
            function a(b) {
              n(this, a), (this.items = b || []);
            }
            h(a, [
              {
                key: "has",
                value: function (a) {
                  return x.call(this.items, function (b) {
                    return b === a;
                  });
                },
              },
              {
                key: "add",
                value: function (a) {
                  this.items.push(a);
                },
              },
            ]);
            return a;
          })();
          function E(a) {
            return a;
          }
          function F(a, b) {
            return a == null || b == null ? !1 : a.indexOf(b) >= 0;
          }
          function G(a, b) {
            return a == null || b == null ? !1 : a.indexOf(b) === 0;
          }
          D = {
            FBSet: D,
            castTo: E,
            each: function (a, b) {
              v.call(this, a, b);
            },
            filter: function (a, b) {
              return z.call(a, b);
            },
            idx: A,
            isArray: d,
            isEmptyObject: y,
            isInstanceOf: c,
            isInteger: m,
            isNumber: e,
            isObject: f,
            isPlainObject: k,
            isSafeInteger: o,
            keys: u,
            listenOnce: p,
            map: v,
            reduce: w,
            some: function (a, b) {
              return x.call(a, b);
            },
            stringIncludes: F,
            stringStartsWith: G,
          };
          l.exports = D;
        })();
        return l.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEventsValidateCustomParametersEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsFBEventsTyped"),
              c = b.coerce,
              d = b.Typed,
              e = f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            b = f.getFbeventsModules("SignalsFBEventsCoercePrimitives");
            b.coerceString;
            function g() {
              for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
                b[f] = arguments[f];
              return c(b, d.tuple([e, d.object(), d.string()]));
            }
            b = new a(g);
            k.exports = b;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsValidateGetClickIDFromBrowserProperties",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent");
            function b(a) {
              return a != null && typeof a === "string" && a !== "" ? a : null;
            }
            a = new a(b);
            k.exports = a;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "SignalsFBEventsValidateUrlParametersEvent",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsBaseEvent"),
              b = f.getFbeventsModules("SignalsFBEventsTyped"),
              c = b.coerce,
              d = b.Typed,
              e = f.getFbeventsModules("SignalsFBEventsPixelTypedef");
            b = f.getFbeventsModules("SignalsFBEventsCoercePrimitives");
            b.coerceString;
            f.getFbeventsModules("SignalsParamList");
            function g() {
              for (var a = arguments.length, b = Array(a), f = 0; f < a; f++)
                b[f] = arguments[f];
              return c(
                b,
                d.tuple([e, d.mapOf(d.string()), d.string(), d.object()])
              );
            }
            b = new a(g);
            k.exports = b;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("SignalsParamList", function () {
      return (function (f, j, k, l) {
        var m = { exports: {} };
        m.exports;
        (function () {
          "use strict";
          var a = "deep",
            b = "shallow",
            c = ["eid"];
          function d(a) {
            return JSON === void 0 || JSON === null || !JSON.stringify
              ? Object.prototype.toString.call(a)
              : JSON.stringify(a);
          }
          function e(a) {
            if (a === null || a === void 0) return !0;
            a = typeof a === "undefined" ? "undefined" : i(a);
            return a === "number" || a === "boolean" || a === "string";
          }
          var f = (function () {
            function f(a) {
              n(this, f), (this._params = new Map()), (this._piiTranslator = a);
            }
            h(
              f,
              [
                {
                  key: "containsKey",
                  value: function (a) {
                    return this._params.has(a);
                  },
                },
                {
                  key: "get",
                  value: function (a) {
                    a = this._params.get(a);
                    return a == null || a.length === 0 ? null : a[a.length - 1];
                  },
                },
                {
                  key: "getAllParams",
                  value: function () {
                    var a = [],
                      b = !0,
                      c = !1,
                      d = void 0;
                    try {
                      for (
                        var e = this._params
                            .entries()
                            [
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ](),
                          f;
                        !(b = (f = e.next()).done);
                        b = !0
                      ) {
                        f = f.value;
                        f = g(f, 2);
                        var h = f[0];
                        f = f[1];
                        var i = !0,
                          j = !1,
                          k = void 0;
                        try {
                          for (
                            var l =
                                f[
                                  typeof Symbol === "function"
                                    ? Symbol.iterator
                                    : "@@iterator"
                                ](),
                              f;
                            !(i = (f = l.next()).done);
                            i = !0
                          ) {
                            f = f.value;
                            a.push({ name: h, value: f });
                          }
                        } catch (a) {
                          (j = !0), (k = a);
                        } finally {
                          try {
                            !i && l["return"] && l["return"]();
                          } finally {
                            if (j) throw k;
                          }
                        }
                      }
                    } catch (a) {
                      (c = !0), (d = a);
                    } finally {
                      try {
                        !b && e["return"] && e["return"]();
                      } finally {
                        if (c) throw d;
                      }
                    }
                    return a;
                  },
                },
                {
                  key: "replaceEntry",
                  value: function (a, b) {
                    this._removeKey(a), this.append(a, b);
                  },
                },
                {
                  key: "replaceObjectEntry",
                  value: function (a, b) {
                    this._removeObjectKey(a, b), this.append(a, b);
                  },
                },
                {
                  key: "addRange",
                  value: function (a) {
                    this.addParams(a.getAllParams());
                  },
                },
                {
                  key: "addParams",
                  value: function (a) {
                    for (var c = 0; c < a.length; c++) {
                      var d = a[c];
                      this._append({ name: d.name, value: d.value }, b, !1);
                    }
                    return this;
                  },
                },
                {
                  key: "append",
                  value: function (b, c) {
                    var d =
                      arguments.length > 2 && arguments[2] !== void 0
                        ? arguments[2]
                        : !1;
                    this._append(
                      { name: encodeURIComponent(b), value: c },
                      a,
                      d
                    );
                    return this;
                  },
                },
                {
                  key: "appendHash",
                  value: function (b) {
                    var c =
                      arguments.length > 1 && arguments[1] !== void 0
                        ? arguments[1]
                        : !1;
                    for (var d in b)
                      Object.prototype.hasOwnProperty.call(b, d) &&
                        this._append(
                          { name: encodeURIComponent(d), value: b[d] },
                          a,
                          c
                        );
                    return this;
                  },
                },
                {
                  key: "_removeKey",
                  value: function (a) {
                    this._params["delete"](a);
                  },
                },
                {
                  key: "_removeObjectKey",
                  value: function (a, b) {
                    for (var c in b)
                      if (Object.prototype.hasOwnProperty.call(b, c)) {
                        var d = a + "[" + encodeURIComponent(c) + "]";
                        this._removeKey(d);
                      }
                  },
                },
                {
                  key: "_append",
                  value: function (b, f, g) {
                    var h = b.name;
                    b = b.value;
                    if (b != null)
                      for (var i = 0; i < c.length; i++) {
                        var j = c[i];
                        j === h && this._removeKey(h);
                      }
                    e(b)
                      ? this._appendPrimitive(h, b, g)
                      : f === a
                      ? this._appendObject(h, b, g)
                      : this._appendPrimitive(h, d(b), g);
                  },
                },
                {
                  key: "_translateValue",
                  value: function (a, b, c) {
                    if (typeof b === "boolean") return b ? "true" : "false";
                    if (!c) return "" + b;
                    if (!this._piiTranslator) throw new Error();
                    return this._piiTranslator(a, "" + b);
                  },
                },
                {
                  key: "_appendPrimitive",
                  value: function (a, b, c) {
                    if (b != null) {
                      b = this._translateValue(a, b, c);
                      if (b != null) {
                        c = this._params.get(a);
                        c != null
                          ? (c.push(b), this._params.set(a, c))
                          : this._params.set(a, [b]);
                      }
                    }
                  },
                },
                {
                  key: "_appendObject",
                  value: function (a, c, d) {
                    var e = null;
                    for (var f in c)
                      if (Object.prototype.hasOwnProperty.call(c, f)) {
                        var g = a + "[" + encodeURIComponent(f) + "]";
                        try {
                          this._append({ name: g, value: c[f] }, b, d);
                        } catch (a) {
                          e == null && (e = a);
                        }
                      }
                    if (e != null) throw e;
                  },
                },
                {
                  key: "each",
                  value: function (a) {
                    var b = !0,
                      c = !1,
                      d = void 0;
                    try {
                      for (
                        var e = this._params
                            .entries()
                            [
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ](),
                          f;
                        !(b = (f = e.next()).done);
                        b = !0
                      ) {
                        f = f.value;
                        f = g(f, 2);
                        var h = f[0];
                        f = f[1];
                        var i = !0,
                          j = !1,
                          k = void 0;
                        try {
                          for (
                            var l =
                                f[
                                  typeof Symbol === "function"
                                    ? Symbol.iterator
                                    : "@@iterator"
                                ](),
                              f;
                            !(i = (f = l.next()).done);
                            i = !0
                          ) {
                            f = f.value;
                            a(h, f);
                          }
                        } catch (a) {
                          (j = !0), (k = a);
                        } finally {
                          try {
                            !i && l["return"] && l["return"]();
                          } finally {
                            if (j) throw k;
                          }
                        }
                      }
                    } catch (a) {
                      (c = !0), (d = a);
                    } finally {
                      try {
                        !b && e["return"] && e["return"]();
                      } finally {
                        if (c) throw d;
                      }
                    }
                  },
                },
                {
                  key: "toQueryString",
                  value: function () {
                    var a = [];
                    this.each(function (b, c) {
                      a.push(b + "=" + encodeURIComponent(c));
                    });
                    return a.join("&");
                  },
                },
                {
                  key: "toFormData",
                  value: function () {
                    var a = new FormData();
                    this.each(function (b, c) {
                      a.append(b, c);
                    });
                    return a;
                  },
                },
              ],
              [
                {
                  key: "fromHash",
                  value: function (a, b) {
                    return new f(b).appendHash(a);
                  },
                },
              ]
            );
            return f;
          })();
          m.exports = f;
        })();
        return m.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsPixelCookieUtils", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsPixelCookie"),
            b = f.getFbeventsModules("signalsFBEventsGetIsChrome"),
            c = f.getFbeventsModules("SignalsFBEventsLogging"),
            d = c.logError,
            e = 90 * 24 * 60 * 60 * 1e3;
          c = "_fbc";
          var i = "fbc",
            j = "_fbp",
            l = "fbp",
            m = "fbclid",
            n = [{ prefix: "", query: "fbclid", ebp_path: "clickID" }],
            o = { params: n },
            p = !1;
          function q(a) {
            return new Date(Date.now() + Math.round(a)).toUTCString();
          }
          function r(a) {
            var b = [];
            try {
              var c = h.cookie.split(";");
              a = "^\\s*" + a + "=\\s*(.*?)\\s*$";
              a = new RegExp(a);
              for (var e = 0; e < c.length; e++) {
                var f = c[e].match(a);
                f && b.push(f[1]);
              }
              return b &&
                Object.prototype.hasOwnProperty.call(b, 0) &&
                typeof b[0] === "string"
                ? b[0]
                : "";
            } catch (a) {
              d("Fail to read from cookie: " + a.message);
              return "";
            }
          }
          function s(b) {
            b = r(b);
            return typeof b !== "string" || b === "" ? null : a.unpack(b);
          }
          function t(a, b) {
            return a.slice(a.length - 1 - b).join(".");
          }
          function u(a, c, f) {
            var g = q(e);
            try {
              c = encodeURIComponent(c);
              h.cookie =
                a +
                "=" +
                c +
                ";" +
                ("expires=" + g + ";") +
                ("domain=." + f + ";") +
                ("" + (b() ? "SameSite=Lax;" : "")) +
                "path=/";
            } catch (a) {
              d("Fail to write cookie: " + a.message);
            }
          }
          function v(a, b) {
            var c = g.location.hostname;
            c = c.split(".");
            if (b.subdomainIndex == null)
              throw new Error("Subdomain index not set on cookie.");
            c = t(c, b.subdomainIndex);
            u(a, b.pack(), c);
            return b;
          }
          function w(b, c) {
            var d = g.location.hostname;
            d = d.split(".");
            c = new a(c);
            for (var e = 0; e < d.length; e++) {
              var f = t(d, e);
              c.subdomainIndex = e;
              u(b, c.pack(), f);
              if (r(b) !== "") return c;
            }
            return c;
          }
          k.exports = {
            readPackedCookie: s,
            writeNewCookie: w,
            writeExistingCookie: v,
            CLICK_ID_PARAMETER: m,
            CLICKTHROUGH_COOKIE_NAME: c,
            CLICKTHROUGH_COOKIE_PARAM: i,
            DOMAIN_SCOPED_BROWSER_ID_COOKIE_NAME: j,
            DOMAIN_SCOPED_BROWSER_ID_COOKIE_PARAM: l,
            DEFAULT_FBC_PARAMS: n,
            DEFAULT_FBC_PARAM_CONFIG: o,
            DEFAULT_ENABLE_FBC_PARAM_SPLIT: p,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEvents.plugins.commonincludes",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsPlugin");
            k.exports = new a(function (a, b) {});
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.commonincludes");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.commonincludes", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.commonincludes", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    var g = (function () {
        function a(a, b) {
          var c = [],
            d = !0,
            e = !1,
            f = void 0;
          try {
            for (
              var g =
                  a[
                    typeof Symbol === "function"
                      ? Symbol.iterator
                      : "@@iterator"
                  ](),
                a;
              !(d = (a = g.next()).done);
              d = !0
            ) {
              c.push(a.value);
              if (b && c.length === b) break;
            }
          } catch (a) {
            (e = !0), (f = a);
          } finally {
            try {
              !d && g["return"] && g["return"]();
            } finally {
              if (e) throw f;
            }
          }
          return c;
        }
        return function (b, c) {
          if (Array.isArray(b)) return b;
          else if (
            (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
            Object(b)
          )
            return a(b, c);
          else
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance"
            );
        };
      })(),
      h =
        typeof Symbol === "function" &&
        typeof (typeof Symbol === "function"
          ? Symbol.iterator
          : "@@iterator") === "symbol"
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                typeof Symbol === "function" &&
                a.constructor === Symbol &&
                a !==
                  (typeof Symbol === "function"
                    ? Symbol.prototype
                    : "@@prototype")
                ? "symbol"
                : typeof a;
            };
    function i(a, b) {
      if (!(a instanceof b))
        throw new TypeError("Cannot call a class as a function");
    }
    function j(a, b) {
      if (!a)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return b && (typeof b === "object" || typeof b === "function") ? b : a;
    }
    function k(a, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof b
        );
      a.prototype = Object.create(b && b.prototype, {
        constructor: {
          value: a,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      });
      b &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(a, b)
          : (a.__proto__ = b));
    }
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("normalizeSignalsFBEventsEmailType", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsValidationUtils"),
            b = a.looksLikeHashed,
            c = a.trim,
            d =
              /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
          function e(a) {
            return d.test(a);
          }
          function g(a) {
            var d = null;
            if (a != null)
              if (b(a)) d = a;
              else {
                a = c(a.toLowerCase());
                d = e(a) ? a : null;
              }
            return d;
          }
          k.exports = g;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("normalizeSignalsFBEventsEnumType", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsShared"),
            b = a.unicodeSafeTruncate;
          a = f.getFbeventsModules("SignalsFBEventsValidationUtils");
          var c = a.looksLikeHashed,
            d = a.trim;
          function e(a) {
            var e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              f = null,
              g = e.caseInsensitive,
              h = e.lowercase,
              i = e.options,
              j = e.truncate,
              k = e.uppercase;
            if (a != null && i != null && Array.isArray(i) && i.length)
              if (typeof a === "string" && c(a)) f = a;
              else {
                var l = d(a);
                h === !0 && (l = l.toLowerCase());
                k === !0 && (l = l.toUpperCase());
                j != null && j !== 0 && (l = b(l, j));
                if (g === !0) {
                  var m = l.toLowerCase();
                  for (var n = 0; n < i.length; ++n)
                    if (m === i[n].toLowerCase()) {
                      l = i[n];
                      break;
                    }
                }
                f = i.indexOf(l) > -1 ? l : null;
              }
            return f;
          }
          k.exports = e;
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "normalizeSignalsFBEventsPhoneNumberType",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsValidationUtils"),
              b = f.getFbeventsModules("SignalsFBEventsUtils");
            b = b.stringStartsWith;
            var c = a.looksLikeHashed;
            f.getFbeventsModules("SignalsFBEventsQE");
            var d = /^0*/,
              e = /[\-@#<>\'\",; ]|\(|\)|\+|[a-z]/gi;
            b = /^1\(?\d{3}\)?\d{7}$/;
            a = /^47\d{8}$/;
            b = /^\d{1,4}\(?\d{2,3}\)?\d{4,}$/;
            function g(a) {
              var b = null;
              if (a != null)
                if (c(a)) b = a;
                else {
                  a = String(a);
                  b = a.replace(e, "").replace(d, "");
                }
              return b;
            }
            k.exports = g;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered(
      "normalizeSignalsFBEventsPostalCodeType",
      function () {
        return (function (g, h, i, j) {
          var k = { exports: {} };
          k.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("SignalsFBEventsValidationUtils"),
              b = a.looksLikeHashed,
              c = a.trim;
            function d(a) {
              var d = null;
              if (a != null && typeof a === "string")
                if (b(a)) d = a;
                else {
                  a = c(String(a).toLowerCase().split("-", 1)[0]);
                  a.length >= 2 && (d = a);
                }
              return d;
            }
            k.exports = d;
          })();
          return k.exports;
        })(a, b, c, d);
      }
    );
    f.ensureModuleRegistered("normalizeSignalsFBEventsStringType", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsShared"),
            b = a.unicodeSafeTruncate;
          a = f.getFbeventsModules("SignalsFBEventsValidationUtils");
          var c = a.looksLikeHashed,
            d = a.strip;
          function e(a) {
            var e =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : {},
              f = null;
            if (a != null)
              if (c(a) && typeof a === "string")
                e.rejectHashed !== !0 && (f = a);
              else {
                var g = String(a);
                e.strip != null && (g = d(g, e.strip));
                e.lowercase === !0
                  ? (g = g.toLowerCase())
                  : e.uppercase === !0 && (g = g.toUpperCase());
                e.truncate != null &&
                  e.truncate !== 0 &&
                  (g = b(g, e.truncate));
                e.test != null && e.test !== ""
                  ? (f = new RegExp(e.test).test(g) ? g : null)
                  : (f = g);
              }
            return f;
          }
          function g(a) {
            return e(a, { strip: "whitespace_and_punctuation" });
          }
          function h(a) {
            return e(a, {
              truncate: 2,
              strip: "all_non_latin_alpha_numeric",
              test: "^[a-z]+",
            });
          }
          function i(a) {
            return e(a, {
              strip: "all_non_latin_alpha_numeric",
              test: "^[a-z]+",
            });
          }
          k.exports = {
            normalize: e,
            normalizeName: g,
            normalizeCity: i,
            normalizeState: h,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("sha256_with_dependencies_new", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          function a(a) {
            var b = "",
              c = void 0,
              d;
            for (var e = 0; e < a.length; e++)
              (c = a.charCodeAt(e)),
                (d = e + 1 < a.length ? a.charCodeAt(e + 1) : 0),
                c >= 55296 &&
                  c <= 56319 &&
                  d >= 56320 &&
                  d <= 57343 &&
                  ((c = 65536 + ((c & 1023) << 10) + (d & 1023)), e++),
                c <= 127
                  ? (b += String.fromCharCode(c))
                  : c <= 2047
                  ? (b += String.fromCharCode(
                      192 | ((c >>> 6) & 31),
                      128 | (c & 63)
                    ))
                  : c <= 65535
                  ? (b += String.fromCharCode(
                      224 | ((c >>> 12) & 15),
                      128 | ((c >>> 6) & 63),
                      128 | (c & 63)
                    ))
                  : c <= 2097151 &&
                    (b += String.fromCharCode(
                      240 | ((c >>> 18) & 7),
                      128 | ((c >>> 12) & 63),
                      128 | ((c >>> 6) & 63),
                      128 | (c & 63)
                    ));
            return b;
          }
          function b(a, b) {
            return (b >>> a) | (b << (32 - a));
          }
          function c(a, b, c) {
            return (a & b) ^ (~a & c);
          }
          function d(a, b, c) {
            return (a & b) ^ (a & c) ^ (b & c);
          }
          function e(a) {
            return b(2, a) ^ b(13, a) ^ b(22, a);
          }
          function f(a) {
            return b(6, a) ^ b(11, a) ^ b(25, a);
          }
          function g(a) {
            return b(7, a) ^ b(18, a) ^ (a >>> 3);
          }
          function h(a) {
            return b(17, a) ^ b(19, a) ^ (a >>> 10);
          }
          function i(a, b) {
            return (a[b & 15] +=
              h(a[(b + 14) & 15]) + a[(b + 9) & 15] + g(a[(b + 1) & 15]));
          }
          var k = [
              1116352408, 1899447441, 3049323471, 3921009573, 961987163,
              1508970993, 2453635748, 2870763221, 3624381080, 310598401,
              607225278, 1426881987, 1925078388, 2162078206, 2614888103,
              3248222580, 3835390401, 4022224774, 264347078, 604807628,
              770255983, 1249150122, 1555081692, 1996064986, 2554220882,
              2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
              113926993, 338241895, 666307205, 773529912, 1294757372,
              1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
              2730485921, 2820302411, 3259730800, 3345764771, 3516065817,
              3600352804, 4094571909, 275423344, 430227734, 506948616,
              659060556, 883997877, 958139571, 1322822218, 1537002063,
              1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
              2428436474, 2756734187, 3204031479, 3329325298,
            ],
            l = new Array(8),
            m = new Array(2),
            n = new Array(64),
            o = new Array(16),
            p = "0123456789abcdef";
          function q(a, b) {
            var c = (a & 65535) + (b & 65535);
            a = (a >> 16) + (b >> 16) + (c >> 16);
            return (a << 16) | (c & 65535);
          }
          function r() {
            (m[0] = m[1] = 0),
              (l[0] = 1779033703),
              (l[1] = 3144134277),
              (l[2] = 1013904242),
              (l[3] = 2773480762),
              (l[4] = 1359893119),
              (l[5] = 2600822924),
              (l[6] = 528734635),
              (l[7] = 1541459225);
          }
          function s() {
            var a = void 0,
              b = void 0,
              g = void 0,
              h = void 0,
              j = void 0,
              m = void 0,
              p = void 0,
              r = void 0,
              s = void 0,
              t = void 0;
            g = l[0];
            h = l[1];
            j = l[2];
            m = l[3];
            p = l[4];
            r = l[5];
            s = l[6];
            t = l[7];
            for (var u = 0; u < 16; u++)
              o[u] =
                n[(u << 2) + 3] |
                (n[(u << 2) + 2] << 8) |
                (n[(u << 2) + 1] << 16) |
                (n[u << 2] << 24);
            for (u = 0; u < 64; u++)
              (a = t + f(p) + c(p, r, s) + k[u]),
                u < 16 ? (a += o[u]) : (a += i(o, u)),
                (b = e(g) + d(g, h, j)),
                (t = s),
                (s = r),
                (r = p),
                (p = q(m, a)),
                (m = j),
                (j = h),
                (h = g),
                (g = q(a, b));
            l[0] += g;
            l[1] += h;
            l[2] += j;
            l[3] += m;
            l[4] += p;
            l[5] += r;
            l[6] += s;
            l[7] += t;
          }
          function t(a, b) {
            var c = void 0,
              d,
              e = 0;
            d = (m[0] >> 3) & 63;
            var f = b & 63;
            (m[0] += b << 3) < b << 3 && m[1]++;
            m[1] += b >> 29;
            for (c = 0; c + 63 < b; c += 64) {
              for (var g = d; g < 64; g++) n[g] = a.charCodeAt(e++);
              s();
              d = 0;
            }
            for (g = 0; g < f; g++) n[g] = a.charCodeAt(e++);
          }
          function u() {
            var a = (m[0] >> 3) & 63;
            n[a++] = 128;
            if (a <= 56) for (var b = a; b < 56; b++) n[b] = 0;
            else {
              for (b = a; b < 64; b++) n[b] = 0;
              s();
              for (a = 0; a < 56; a++) n[a] = 0;
            }
            n[56] = (m[1] >>> 24) & 255;
            n[57] = (m[1] >>> 16) & 255;
            n[58] = (m[1] >>> 8) & 255;
            n[59] = m[1] & 255;
            n[60] = (m[0] >>> 24) & 255;
            n[61] = (m[0] >>> 16) & 255;
            n[62] = (m[0] >>> 8) & 255;
            n[63] = m[0] & 255;
            s();
          }
          function v() {
            var a = "";
            for (var b = 0; b < 8; b++)
              for (var c = 28; c >= 0; c -= 4) a += p.charAt((l[b] >>> c) & 15);
            return a;
          }
          function w(a) {
            var b = 0;
            for (var c = 0; c < 8; c++)
              for (var d = 28; d >= 0; d -= 4)
                a[b++] = p.charCodeAt((l[c] >>> d) & 15);
          }
          function x(a, b) {
            r();
            t(a, a.length);
            u();
            if (b) w(b);
            else return v();
          }
          function y(b) {
            var c =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !0,
              d = arguments[2];
            if (b === null || b === void 0) return null;
            var e = b;
            c && (e = a(b));
            return x(e, d);
          }
          j.exports = y;
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsNormalizers", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("normalizeSignalsFBEventsStringType");
          a = a.normalize;
          k.exports = {
            email: f.getFbeventsModules("normalizeSignalsFBEventsEmailType"),
            enum: f.getFbeventsModules("normalizeSignalsFBEventsEnumType"),
            postal_code: f.getFbeventsModules(
              "normalizeSignalsFBEventsPostalCodeType"
            ),
            phone_number: f.getFbeventsModules(
              "normalizeSignalsFBEventsPhoneNumberType"
            ),
            string: a,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsPixelPIISchema", function () {
      return (function (f, g, h, i) {
        var j = { exports: {} };
        j.exports;
        (function () {
          "use strict";
          j.exports = {
            default: {
              type: "string",
              typeParams: { lowercase: !0, strip: "whitespace_only" },
            },
            ph: { type: "phone_number" },
            em: { type: "email" },
            fn: {
              type: "string",
              typeParams: {
                lowercase: !0,
                strip: "whitespace_and_punctuation",
              },
            },
            ln: {
              type: "string",
              typeParams: {
                lowercase: !0,
                strip: "whitespace_and_punctuation",
              },
            },
            zp: { type: "postal_code" },
            ct: {
              type: "string",
              typeParams: {
                lowercase: !0,
                strip: "all_non_latin_alpha_numeric",
                test: "^[a-z]+",
              },
            },
            st: {
              type: "string",
              typeParams: {
                lowercase: !0,
                truncate: 2,
                strip: "all_non_latin_alpha_numeric",
                test: "^[a-z]+",
              },
            },
            dob: { type: "date" },
            doby: { type: "string", typeParams: { test: "^[0-9]{4,4}$" } },
            ge: {
              type: "enum",
              typeParams: { lowercase: !0, options: ["f", "m"] },
            },
            dobm: {
              type: "string",
              typeParams: {
                test: "^(0?[1-9]|1[012])$|^jan|^feb|^mar|^apr|^may|^jun|^jul|^aug|^sep|^oct|^nov|^dec",
              },
            },
            dobd: {
              type: "string",
              typeParams: { test: "^(([0]?[1-9])|([1-2][0-9])|(3[01]))$" },
            },
          };
        })();
        return j.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsShared", function () {
      return (function (f, g, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          k.exports = (function (a) {
            var b = {};
            function c(d) {
              if (b[d]) return b[d].exports;
              var e = (b[d] = { i: d, l: !1, exports: {} });
              return (
                a[d].call(e.exports, e, e.exports, c), (e.l = !0), e.exports
              );
            }
            return (
              (c.m = a),
              (c.c = b),
              (c.d = function (a, b, d) {
                c.o(a, b) ||
                  Object.defineProperty(a, b, { enumerable: !0, get: d });
              }),
              (c.r = function (a) {
                "undefined" != typeof Symbol &&
                  (typeof Symbol === "function"
                    ? Symbol.toStringTag
                    : "@@toStringTag") &&
                  Object.defineProperty(
                    a,
                    typeof Symbol === "function"
                      ? Symbol.toStringTag
                      : "@@toStringTag",
                    { value: "Module" }
                  ),
                  Object.defineProperty(a, "__esModule", { value: !0 });
              }),
              (c.t = function (a, b) {
                if ((1 & b && (a = c(a)), 8 & b)) return a;
                if (
                  4 & b &&
                  "object" == (typeof a === "undefined" ? "undefined" : h(a)) &&
                  a &&
                  a.__esModule
                )
                  return a;
                var d = Object.create(null);
                if (
                  (c.r(d),
                  Object.defineProperty(d, "default", {
                    enumerable: !0,
                    value: a,
                  }),
                  2 & b && "string" != typeof a)
                )
                  for (b in a)
                    c.d(
                      d,
                      b,
                      function (b) {
                        return a[b];
                      }.bind(null, b)
                    );
                return d;
              }),
              (c.n = function (a) {
                var b =
                  a && a.__esModule
                    ? function () {
                        return a["default"];
                      }
                    : function () {
                        return a;
                      };
                return c.d(b, "a", b), b;
              }),
              (c.o = function (a, b) {
                return Object.prototype.hasOwnProperty.call(a, b);
              }),
              (c.p = ""),
              c((c.s = 52))
            );
          })([
            function (a, b, c) {
              a.exports = c(93);
            },
            function (a, b, c) {
              "use strict";
              a.exports = function (a) {
                if (null != a) return a;
                throw new Error("Got unexpected null or undefined");
              };
            },
            function (a, b, c) {
              a.exports = c(55);
            },
            function (a, b, c) {
              a.exports = c(65);
            },
            function (a, b, c) {
              var d = c(31)("wks"),
                e = c(43),
                f = c(6).Symbol,
                g = c(60);
              a.exports = function (a) {
                return (
                  d[a] || (d[a] = (g && f[a]) || (g ? f : e)("Symbol." + a))
                );
              };
            },
            function (a, b, c) {
              a.exports = c(95);
            },
            function (a, b) {
              a.exports =
                "object" == (typeof f === "undefined" ? "undefined" : h(f)) &&
                f &&
                f.Math == Math
                  ? f
                  : "object" ==
                      (typeof self === "undefined" ? "undefined" : h(self)) &&
                    self &&
                    self.Math == Math
                  ? self
                  : Function("return this")();
            },
            function (a, b, c) {
              "use strict";
              var d = c(6),
                e = c(61).f,
                f = c(63),
                g = c(35),
                i = c(28),
                j = c(12),
                k = c(13),
                l = function (a) {
                  var b = function (d, b, c) {
                    if (this instanceof a) {
                      switch (arguments.length) {
                        case 0:
                          return new a();
                        case 1:
                          return new a(d);
                        case 2:
                          return new a(d, b);
                      }
                      return new a(d, b, c);
                    }
                    return a.apply(this, arguments);
                  };
                  return (b.prototype = a.prototype), b;
                };
              a.exports = function (a, b) {
                var c,
                  m,
                  n,
                  o,
                  p,
                  q = a.target,
                  r = a.global,
                  s = a.stat,
                  t = a.proto,
                  u = r ? d : s ? d[q] : (d[q] || {}).prototype,
                  v = r ? g : g[q] || (g[q] = {}),
                  w = v.prototype;
                for (m in b)
                  (c =
                    !f(r ? m : q + (s ? "." : "#") + m, a.forced) &&
                    u &&
                    k(u, m)),
                    (n = v[m]),
                    c && (o = a.noTargetGet ? (p = e(u, m)) && p.value : u[m]),
                    (p = c && o ? o : b[m]),
                    (c &&
                      (typeof n === "undefined" ? "undefined" : h(n)) ==
                        (typeof p === "undefined" ? "undefined" : h(p))) ||
                      ((c =
                        a.bind && c
                          ? i(p, d)
                          : a.wrap && c
                          ? l(p)
                          : t && "function" == typeof p
                          ? i(Function.call, p)
                          : p),
                      (a.sham || (p && p.sham) || (n && n.sham)) &&
                        j(c, "sham", !0),
                      (v[m] = c),
                      t &&
                        (k(g, (n = q + "Prototype")) || j(g, n, {}),
                        (g[n][m] = p),
                        a.real && w && !w[m] && j(w, m, p)));
              };
            },
            function (a, b, c) {
              "use strict";
              var d = c(53);
              a.exports = function a(b, c) {
                return (
                  !(!b || !c) &&
                  (b === c ||
                    (!d(b) &&
                      (d(c)
                        ? a(b, c.parentNode)
                        : "contains" in b
                        ? b.contains(c)
                        : !!b.compareDocumentPosition &&
                          !!(16 & b.compareDocumentPosition(c)))))
                );
              };
            },
            function (a, b, c) {
              a.exports = c(91);
            },
            function (a, b) {
              a.exports = function (a) {
                try {
                  return !!a();
                } catch (a) {
                  return !0;
                }
              };
            },
            function (a, b) {
              a.exports = function (a) {
                return "object" ==
                  (typeof a === "undefined" ? "undefined" : h(a))
                  ? null !== a
                  : "function" == typeof a;
              };
            },
            function (a, b, c) {
              var d = c(23),
                e = c(24);
              a.exports = c(17)
                ? function (a, b, c) {
                    return d.f(a, b, e(1, c));
                  }
                : function (a, b, c) {
                    return (a[b] = c), a;
                  };
            },
            function (a, b) {
              var c = {}.hasOwnProperty;
              a.exports = function (a, b) {
                return c.call(a, b);
              };
            },
            function (a, b, c) {
              a.exports = c(64);
            },
            function (a, b, c) {
              a.exports = c(98);
            },
            function (a, b, c) {
              var d = c(30),
                e = Math.min;
              a.exports = function (a) {
                return a > 0 ? e(d(a), 9007199254740991) : 0;
              };
            },
            function (a, b, c) {
              a.exports = !c(10)(function () {
                return (
                  7 !=
                  Object.defineProperty({}, "a", {
                    get: function () {
                      return 7;
                    },
                  }).a
                );
              });
            },
            function (a, b, c) {
              var d = c(11);
              a.exports = function (a) {
                if (!d(a)) throw TypeError(String(a) + " is not an object");
                return a;
              };
            },
            function (a, b, c) {
              a.exports = c(102);
            },
            function (a, b) {
              var c = {}.toString;
              a.exports = function (a) {
                return c.call(a).slice(8, -1);
              };
            },
            function (a, b, c) {
              var d = c(22);
              a.exports = function (a) {
                return Object(d(a));
              };
            },
            function (a, b) {
              a.exports = function (a) {
                if (null == a) throw TypeError("Can't call method on " + a);
                return a;
              };
            },
            function (a, b, c) {
              a = c(17);
              var d = c(41),
                e = c(18),
                f = c(32),
                g = Object.defineProperty;
              b.f = a
                ? g
                : function (a, b, c) {
                    if ((e(a), (b = f(b, !0)), e(c), d))
                      try {
                        return g(a, b, c);
                      } catch (a) {}
                    if ("get" in c || "set" in c)
                      throw TypeError("Accessors not supported");
                    return "value" in c && (a[b] = c.value), a;
                  };
            },
            function (a, b) {
              a.exports = function (a, b) {
                return {
                  enumerable: !(1 & a),
                  configurable: !(2 & a),
                  writable: !(4 & a),
                  value: b,
                };
              };
            },
            function (a, b) {
              a.exports = {};
            },
            function (a, b, c) {
              "use strict";
              a.exports = function (a) {
                var b = [];
                return (
                  (function a(b, c) {
                    var d = b.length,
                      e = 0;
                    for (; d--; ) {
                      var f = b[e++];
                      Array.isArray(f) ? a(f, c) : c.push(f);
                    }
                  })(a, b),
                  b
                );
              };
            },
            function (a, b, c) {
              var d = c(28),
                e = c(29),
                f = c(21),
                g = c(16),
                h = c(57);
              a.exports = function (a, b) {
                var c = 1 == a,
                  i = 2 == a,
                  j = 3 == a,
                  k = 4 == a,
                  l = 6 == a,
                  m = 5 == a || l,
                  n = b || h;
                return function (b, h, o) {
                  for (
                    var p,
                      q,
                      r = f(b),
                      s = e(r),
                      h = d(h, o, 3),
                      o = g(s.length),
                      t = 0,
                      b = c ? n(b, o) : i ? n(b, 0) : void 0;
                    o > t;
                    t++
                  )
                    if ((m || t in s) && ((q = h((p = s[t]), t, r)), a))
                      if (c) b[t] = q;
                      else if (q)
                        switch (a) {
                          case 3:
                            return !0;
                          case 5:
                            return p;
                          case 6:
                            return t;
                          case 2:
                            b.push(p);
                        }
                      else if (k) return !1;
                  return l ? -1 : j || k ? k : b;
                };
              };
            },
            function (a, b, c) {
              var d = c(40);
              a.exports = function (a, b, c) {
                if ((d(a), void 0 === b)) return a;
                switch (c) {
                  case 0:
                    return function () {
                      return a.call(b);
                    };
                  case 1:
                    return function (c) {
                      return a.call(b, c);
                    };
                  case 2:
                    return function (c, d) {
                      return a.call(b, c, d);
                    };
                  case 3:
                    return function (c, d, e) {
                      return a.call(b, c, d, e);
                    };
                }
                return function () {
                  return a.apply(b, arguments);
                };
              };
            },
            function (a, b, c) {
              b = c(10);
              var d = c(20),
                e = "".split;
              a.exports = b(function () {
                return !Object("z").propertyIsEnumerable(0);
              })
                ? function (a) {
                    return "String" == d(a) ? e.call(a, "") : Object(a);
                  }
                : Object;
            },
            function (a, b) {
              var c = Math.ceil,
                d = Math.floor;
              a.exports = function (a) {
                return isNaN((a = +a)) ? 0 : (a > 0 ? d : c)(a);
              };
            },
            function (a, b, c) {
              b = c(6);
              var d = c(59),
                e = b["__core-js_shared__"] || d("__core-js_shared__", {});
              (a.exports = function (a, b) {
                return e[a] || (e[a] = void 0 !== b ? b : {});
              })("versions", []).push({
                version: "3.0.0",
                mode: c(33) ? "pure" : "global",
                copyright: "\xa9 2019 Denis Pushkarev (zloirock.ru)",
              });
            },
            function (a, b, c) {
              var d = c(11);
              a.exports = function (a, b) {
                if (!d(a)) return a;
                var c, e;
                if (
                  b &&
                  "function" == typeof (c = a.toString) &&
                  !d((e = c.call(a)))
                )
                  return e;
                if ("function" == typeof (c = a.valueOf) && !d((e = c.call(a))))
                  return e;
                if (
                  !b &&
                  "function" == typeof (c = a.toString) &&
                  !d((e = c.call(a)))
                )
                  return e;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            function (a, b) {
              a.exports = !0;
            },
            function (a, b, c) {
              var d = c(29),
                e = c(22);
              a.exports = function (a) {
                return d(e(a));
              };
            },
            function (a, b) {
              a.exports = {};
            },
            function (a, b, c) {
              var d = c(31)("keys"),
                e = c(43);
              a.exports = function (a) {
                return d[a] || (d[a] = e(a));
              };
            },
            function (a, b) {
              a.exports = {};
            },
            function (a, b, c) {
              var d = c(34),
                e = c(16),
                f = c(78);
              a.exports = function (a) {
                return function (b, c, g) {
                  var h;
                  b = d(b);
                  var i = e(b.length);
                  g = f(g, i);
                  if (a && c != c) {
                    for (; i > g; ) if ((h = b[g++]) != h) return !0;
                  } else
                    for (; i > g; g++)
                      if ((a || g in b) && b[g] === c) return a || g || 0;
                  return !a && -1;
                };
              };
            },
            function (a, b, c) {
              a.exports = c(100);
            },
            function (a, b) {
              a.exports = function (a) {
                if ("function" != typeof a)
                  throw TypeError(String(a) + " is not a function");
                return a;
              };
            },
            function (a, b, c) {
              a.exports =
                !c(17) &&
                !c(10)(function () {
                  return (
                    7 !=
                    Object.defineProperty(c(42)("div"), "a", {
                      get: function () {
                        return 7;
                      },
                    }).a
                  );
                });
            },
            function (a, b, c) {
              b = c(11);
              var d = c(6).document,
                e = b(d) && b(d.createElement);
              a.exports = function (a) {
                return e ? d.createElement(a) : {};
              };
            },
            function (a, b) {
              var c = 0,
                d = Math.random();
              a.exports = function (a) {
                return "Symbol(".concat(
                  void 0 === a ? "" : a,
                  ")_",
                  (++c + d).toString(36)
                );
              };
            },
            function (a, b, c) {
              var d = c(10),
                e = c(4)("species");
              a.exports = function (a) {
                return !d(function () {
                  var b = [];
                  return (
                    ((b.constructor = {})[e] = function () {
                      return { foo: 1 };
                    }),
                    1 !== b[a](Boolean).foo
                  );
                });
              };
            },
            function (a, b, c) {
              "use strict";
              var d, e;
              b = c(46);
              var f = c(12),
                g = c(13),
                h = c(33);
              c = c(4)("iterator");
              var i = !1;
              [].keys &&
                ("next" in (e = [].keys())
                  ? (b = b(b(e))) !== Object.prototype && (d = b)
                  : (i = !0)),
                null == d && (d = {}),
                h ||
                  g(d, c) ||
                  f(d, c, function () {
                    return this;
                  }),
                (a.exports = {
                  IteratorPrototype: d,
                  BUGGY_SAFARI_ITERATORS: i,
                });
            },
            function (a, b, c) {
              var d = c(13),
                e = c(21),
                f = c(36)("IE_PROTO");
              b = c(73);
              var g = Object.prototype;
              a.exports = b
                ? Object.getPrototypeOf
                : function (a) {
                    return (
                      (a = e(a)),
                      d(a, f)
                        ? a[f]
                        : "function" == typeof a.constructor &&
                          a instanceof a.constructor
                        ? a.constructor.prototype
                        : a instanceof Object
                        ? g
                        : null
                    );
                  };
            },
            function (a, b) {
              a.exports = [
                "constructor",
                "hasOwnProperty",
                "isPrototypeOf",
                "propertyIsEnumerable",
                "toLocaleString",
                "toString",
                "valueOf",
              ];
            },
            function (a, b, c) {
              var d = c(23).f,
                e = c(12),
                f = c(13),
                g = c(4)("toStringTag"),
                h = c(80),
                i = h !== {}.toString;
              a.exports = function (a, b, c, j) {
                if (a) {
                  c = c ? a : a.prototype;
                  f(c, g) || d(c, g, { configurable: !0, value: b }),
                    j && i && e(c, "toString", h);
                }
              };
            },
            function (a, b, c) {
              var d = c(20),
                e = c(4)("toStringTag"),
                f =
                  "Arguments" ==
                  d(
                    (function () {
                      return arguments;
                    })()
                  );
              a.exports = function (a) {
                var b;
                return void 0 === a
                  ? "Undefined"
                  : null === a
                  ? "Null"
                  : "string" ==
                    typeof (b = (function (a, b) {
                      try {
                        return a[b];
                      } catch (a) {}
                    })((a = Object(a)), e))
                  ? b
                  : f
                  ? d(a)
                  : "Object" == (b = d(a)) && "function" == typeof a.callee
                  ? "Arguments"
                  : b;
              };
            },
            function (a, b) {
              a.exports = function () {};
            },
            function (a, b, c) {
              "use strict";
              var d = c(10);
              a.exports = function (a, b) {
                var c = [][a];
                return (
                  !c ||
                  !d(function () {
                    c.call(
                      null,
                      b ||
                        function () {
                          throw Error();
                        },
                      1
                    );
                  })
                );
              };
            },
            function (a, b, c) {
              a.exports = c(107);
            },
            function (a, b, c) {
              "use strict";
              var d = c(54);
              a.exports = function (a) {
                return d(a) && 3 == a.nodeType;
              };
            },
            function (a, b, c) {
              "use strict";
              a.exports = function (a) {
                var b = (a ? a.ownerDocument || a : g).defaultView || f;
                return !(
                  !a ||
                  !("function" == typeof b.Node
                    ? a instanceof b.Node
                    : "object" ==
                        (typeof a === "undefined" ? "undefined" : h(a)) &&
                      "number" == typeof a.nodeType &&
                      "string" == typeof a.nodeName)
                );
              };
            },
            function (a, b, c) {
              c(56), (a.exports = c(14)("Array", "filter"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(27)(2);
              a = c(44)("filter");
              c(7)(
                { target: "Array", proto: !0, forced: !a },
                {
                  filter: function (a) {
                    return d(this, a, arguments[1]);
                  },
                }
              );
            },
            function (a, b, c) {
              var d = c(11),
                e = c(58),
                f = c(4)("species");
              a.exports = function (a, b) {
                var c;
                return (
                  e(a) &&
                    ("function" != typeof (c = a.constructor) ||
                    (c !== Array && !e(c.prototype))
                      ? d(c) && null === (c = c[f]) && (c = void 0)
                      : (c = void 0)),
                  new (void 0 === c ? Array : c)(0 === b ? 0 : b)
                );
              };
            },
            function (a, b, c) {
              var d = c(20);
              a.exports =
                Array.isArray ||
                function (a) {
                  return "Array" == d(a);
                };
            },
            function (a, b, c) {
              var d = c(6),
                e = c(12);
              a.exports = function (a, b) {
                try {
                  e(d, a, b);
                } catch (c) {
                  d[a] = b;
                }
                return b;
              };
            },
            function (a, b, c) {
              a.exports = !c(10)(function () {
                String(Symbol());
              });
            },
            function (a, b, c) {
              a = c(17);
              var d = c(62),
                e = c(24),
                f = c(34),
                g = c(32),
                h = c(13),
                i = c(41),
                j = Object.getOwnPropertyDescriptor;
              b.f = a
                ? j
                : function (a, b) {
                    if (((a = f(a)), (b = g(b, !0)), i))
                      try {
                        return j(a, b);
                      } catch (a) {}
                    if (h(a, b)) return e(!d.f.call(a, b), a[b]);
                  };
            },
            function (a, b, c) {
              "use strict";
              a = {}.propertyIsEnumerable;
              var d = Object.getOwnPropertyDescriptor;
              c = d && !a.call({ 1: 2 }, 1);
              b.f = c
                ? function (a) {
                    a = d(this, a);
                    return !!a && a.enumerable;
                  }
                : a;
            },
            function (a, b, c) {
              var d = c(10),
                e = /#|\.prototype\./;
              b = function (a, b) {
                a = g[f(a)];
                return (
                  a == i || (a != h && ("function" == typeof b ? d(b) : !!b))
                );
              };
              var f = (b.normalize = function (a) {
                  return String(a).replace(e, ".").toLowerCase();
                }),
                g = (b.data = {}),
                h = (b.NATIVE = "N"),
                i = (b.POLYFILL = "P");
              a.exports = b;
            },
            function (a, b, c) {
              var d = c(35),
                e = c(6),
                f = function (a) {
                  return "function" == typeof a ? a : void 0;
                };
              a.exports = function (a, b) {
                return arguments.length < 2
                  ? f(d[a]) || f(e[a])
                  : (d[a] && d[a][b]) || (e[a] && e[a][b]);
              };
            },
            function (a, b, c) {
              c(66), c(84), (a.exports = c(35).Array.from);
            },
            function (a, b, c) {
              "use strict";
              var d = c(67);
              a = c(68);
              b = c(71);
              var e = a.set,
                f = a.getterFor("String Iterator");
              b(
                String,
                "String",
                function (a) {
                  e(this, {
                    type: "String Iterator",
                    string: String(a),
                    index: 0,
                  });
                },
                function () {
                  var a = f(this),
                    b = a.string,
                    c = a.index;
                  return c >= b.length
                    ? { value: void 0, done: !0 }
                    : ((b = d(b, c, !0)),
                      (a.index += b.length),
                      { value: b, done: !1 });
                }
              );
            },
            function (a, b, c) {
              var d = c(30),
                e = c(22);
              a.exports = function (a, b, c) {
                var f, g;
                a = String(e(a));
                b = d(b);
                var h = a.length;
                return b < 0 || b >= h
                  ? c
                    ? ""
                    : void 0
                  : (f = a.charCodeAt(b)) < 55296 ||
                    f > 56319 ||
                    b + 1 === h ||
                    (g = a.charCodeAt(b + 1)) < 56320 ||
                    g > 57343
                  ? c
                    ? a.charAt(b)
                    : f
                  : c
                  ? a.slice(b, b + 2)
                  : g - 56320 + ((f - 55296) << 10) + 65536;
              };
            },
            function (a, b, c) {
              var d, e, f;
              b = c(69);
              var g = c(11),
                h = c(12),
                i = c(13),
                j = c(36),
                k = c(37);
              c = c(6).WeakMap;
              if (b) {
                var l = new c(),
                  m = l.get,
                  n = l.has,
                  o = l.set;
                (d = function (a, b) {
                  return o.call(l, a, b), b;
                }),
                  (e = function (a) {
                    return m.call(l, a) || {};
                  }),
                  (f = function (a) {
                    return n.call(l, a);
                  });
              } else {
                var p = j("state");
                (k[p] = !0),
                  (d = function (a, b) {
                    return h(a, p, b), b;
                  }),
                  (e = function (a) {
                    return i(a, p) ? a[p] : {};
                  }),
                  (f = function (a) {
                    return i(a, p);
                  });
              }
              a.exports = {
                set: d,
                get: e,
                has: f,
                enforce: function (a) {
                  return f(a) ? e(a) : d(a, {});
                },
                getterFor: function (a) {
                  return function (b) {
                    var c;
                    if (!g(b) || (c = e(b)).type !== a)
                      throw TypeError(
                        "Incompatible receiver, " + a + " required"
                      );
                    return c;
                  };
                },
              };
            },
            function (a, b, c) {
              b = c(70);
              c = c(6).WeakMap;
              a.exports =
                "function" == typeof c && /native code/.test(b.call(c));
            },
            function (a, b, c) {
              a.exports = c(31)("native-function-to-string", Function.toString);
            },
            function (a, b, c) {
              "use strict";
              var d = c(7),
                e = c(72),
                f = c(46),
                g = c(81),
                h = c(48),
                i = c(12),
                j = c(83),
                k = c(33),
                l = c(4)("iterator"),
                m = c(25);
              b = c(45);
              var n = b.IteratorPrototype,
                o = b.BUGGY_SAFARI_ITERATORS,
                p = function () {
                  return this;
                };
              a.exports = function (a, b, c, q, r, s, t) {
                e(c, b, q);
                var u;
                q = function (a) {
                  if (a === r && z) return z;
                  if (!o && a in x) return x[a];
                  switch (a) {
                    case "keys":
                    case "values":
                    case "entries":
                      return function () {
                        return new c(this, a);
                      };
                  }
                  return function () {
                    return new c(this);
                  };
                };
                var v = b + " Iterator",
                  w = !1,
                  x = a.prototype,
                  y = x[l] || x["@@iterator"] || (r && x[r]),
                  z = (!o && y) || q(r),
                  A = ("Array" == b && x.entries) || y;
                if (
                  (A &&
                    ((A = f(A.call(new a()))),
                    n !== Object.prototype &&
                      A.next &&
                      (k ||
                        f(A) === n ||
                        (g ? g(A, n) : "function" != typeof A[l] && i(A, l, p)),
                      h(A, v, !0, !0),
                      k && (m[v] = p))),
                  "values" == r &&
                    y &&
                    "values" !== y.name &&
                    ((w = !0),
                    (z = function () {
                      return y.call(this);
                    })),
                  (k && !t) || x[l] === z || i(x, l, z),
                  (m[b] = z),
                  r)
                )
                  if (
                    ((u = {
                      values: q("values"),
                      keys: s ? z : q("keys"),
                      entries: q("entries"),
                    }),
                    t)
                  )
                    for (a in u) (o || w || !(a in x)) && j(x, a, u[a]);
                  else d({ target: b, proto: !0, forced: o || w }, u);
                return u;
              };
            },
            function (a, b, c) {
              "use strict";
              var d = c(45).IteratorPrototype,
                e = c(74),
                f = c(24),
                g = c(48),
                h = c(25),
                i = function () {
                  return this;
                };
              a.exports = function (a, b, c) {
                b = b + " Iterator";
                return (
                  (a.prototype = e(d, { next: f(1, c) })),
                  g(a, b, !1, !0),
                  (h[b] = i),
                  a
                );
              };
            },
            function (a, b, c) {
              a.exports = !c(10)(function () {
                function a() {}
                return (
                  (a.prototype.constructor = null),
                  Object.getPrototypeOf(new a()) !== a.prototype
                );
              });
            },
            function (a, b, c) {
              var d = c(18),
                e = c(75),
                f = c(47),
                g = c(79),
                h = c(42),
                i = c(36)("IE_PROTO"),
                j = function () {},
                k = function () {
                  var a = h("iframe"),
                    b = f.length;
                  for (
                    a.style.display = "none",
                      g.appendChild(a),
                      a.src = String("javascript:"),
                      (a = a.contentWindow.document).open(),
                      a.write("<script>document.F=Object</script>"),
                      a.close(),
                      k = a.F;
                    b--;

                  )
                    delete k.prototype[f[b]];
                  return k();
                };
              (a.exports =
                Object.create ||
                function (a, b) {
                  var c;
                  return (
                    null !== a
                      ? ((j.prototype = d(a)),
                        (c = new j()),
                        (j.prototype = null),
                        (c[i] = a))
                      : (c = k()),
                    void 0 === b ? c : e(c, b)
                  );
                }),
                (c(37)[i] = !0);
            },
            function (a, b, c) {
              b = c(17);
              var d = c(23),
                e = c(18),
                f = c(76);
              a.exports = b
                ? Object.defineProperties
                : function (a, b) {
                    e(a);
                    for (var c, g = f(b), h = g.length, i = 0; h > i; )
                      d.f(a, (c = g[i++]), b[c]);
                    return a;
                  };
            },
            function (a, b, c) {
              var d = c(77),
                e = c(47);
              a.exports =
                Object.keys ||
                function (a) {
                  return d(a, e);
                };
            },
            function (a, b, c) {
              var d = c(13),
                e = c(34),
                f = c(38)(!1),
                g = c(37);
              a.exports = function (a, b) {
                var c;
                a = e(a);
                var h = 0,
                  i = [];
                for (c in a) !d(g, c) && d(a, c) && i.push(c);
                for (; b.length > h; )
                  d(a, (c = b[h++])) && (~f(i, c) || i.push(c));
                return i;
              };
            },
            function (a, b, c) {
              var d = c(30),
                e = Math.max,
                f = Math.min;
              a.exports = function (a, b) {
                a = d(a);
                return a < 0 ? e(a + b, 0) : f(a, b);
              };
            },
            function (a, b, c) {
              b = c(6).document;
              a.exports = b && b.documentElement;
            },
            function (a, b, c) {
              "use strict";
              var d = c(49);
              b = {};
              (b[c(4)("toStringTag")] = "z"),
                (a.exports =
                  "[object z]" !== String(b)
                    ? function () {
                        return "[object " + d(this) + "]";
                      }
                    : b.toString);
            },
            function (a, b, c) {
              var d = c(82);
              a.exports =
                Object.setPrototypeOf ||
                ("__proto__" in {}
                  ? (function () {
                      var a,
                        b = !1,
                        c = {};
                      try {
                        (a = Object.getOwnPropertyDescriptor(
                          Object.prototype,
                          "__proto__"
                        ).set).call(c, []),
                          (b = c instanceof Array);
                      } catch (a) {}
                      return function (c, e) {
                        return d(c, e), b ? a.call(c, e) : (c.__proto__ = e), c;
                      };
                    })()
                  : void 0);
            },
            function (a, b, c) {
              var d = c(11),
                e = c(18);
              a.exports = function (a, b) {
                if ((e(a), !d(b) && null !== b))
                  throw TypeError("Can't set " + String(b) + " as a prototype");
              };
            },
            function (a, b, c) {
              var d = c(12);
              a.exports = function (a, b, c, e) {
                e && e.enumerable ? (a[b] = c) : d(a, b, c);
              };
            },
            function (a, b, c) {
              a = !c(85)(function (a) {
                Array.from(a);
              });
              c(7)({ target: "Array", stat: !0, forced: a }, { from: c(86) });
            },
            function (a, b, c) {
              var d = c(4)("iterator"),
                e = !1;
              try {
                var f = 0;
                b = {
                  next: function () {
                    return { done: !!f++ };
                  },
                  return: function () {
                    e = !0;
                  },
                };
                (b[d] = function () {
                  return this;
                }),
                  Array.from(b, function () {
                    throw 2;
                  });
              } catch (a) {}
              a.exports = function (a, b) {
                if (!b && !e) return !1;
                b = !1;
                try {
                  var c = {};
                  (c[d] = function () {
                    return {
                      next: function () {
                        return { done: (b = !0) };
                      },
                    };
                  }),
                    a(c);
                } catch (a) {}
                return b;
              };
            },
            function (a, b, c) {
              "use strict";
              var d = c(28),
                e = c(21),
                f = c(87),
                g = c(88),
                h = c(16),
                i = c(89),
                j = c(90);
              a.exports = function (a) {
                var b,
                  c,
                  k,
                  l,
                  m = e(a),
                  n = "function" == typeof this ? this : Array,
                  o = arguments.length,
                  p = o > 1 ? arguments[1] : void 0,
                  q = void 0 !== p,
                  r = 0,
                  s = j(m);
                if (
                  (q && (p = d(p, o > 2 ? arguments[2] : void 0, 2)),
                  null == s || (n == Array && g(s)))
                )
                  for (c = new n((b = h(m.length))); b > r; r++)
                    i(c, r, q ? p(m[r], r) : m[r]);
                else
                  for (l = s.call(m), c = new n(); !(k = l.next()).done; r++)
                    i(c, r, q ? f(l, p, [k.value, r], !0) : k.value);
                return (c.length = r), c;
              };
            },
            function (a, b, c) {
              var d = c(18);
              a.exports = function (a, b, c, e) {
                try {
                  return e ? b(d(c)[0], c[1]) : b(c);
                } catch (b) {
                  e = a["return"];
                  throw (void 0 !== e && d(e.call(a)), b);
                }
              };
            },
            function (a, b, c) {
              var d = c(25),
                e = c(4)("iterator"),
                f = Array.prototype;
              a.exports = function (a) {
                return void 0 !== a && (d.Array === a || f[e] === a);
              };
            },
            function (a, b, c) {
              "use strict";
              var d = c(32),
                e = c(23),
                f = c(24);
              a.exports = function (a, b, c) {
                b = d(b);
                b in a ? e.f(a, b, f(0, c)) : (a[b] = c);
              };
            },
            function (a, b, c) {
              var d = c(49),
                e = c(4)("iterator"),
                f = c(25);
              a.exports = function (a) {
                if (null != a) return a[e] || a["@@iterator"] || f[d(a)];
              };
            },
            function (a, b, c) {
              c(92), (a.exports = c(14)("Array", "includes"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(38)(!0);
              c(7)(
                { target: "Array", proto: !0 },
                {
                  includes: function (a) {
                    return d(
                      this,
                      a,
                      arguments.length > 1 ? arguments[1] : void 0
                    );
                  },
                }
              ),
                c(50)("includes");
            },
            function (a, b, c) {
              c(94), (a.exports = c(14)("Array", "map"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(27)(1);
              a = c(44)("map");
              c(7)(
                { target: "Array", proto: !0, forced: !a },
                {
                  map: function (a) {
                    return d(this, a, arguments[1]);
                  },
                }
              );
            },
            function (a, b, c) {
              c(96), (a.exports = c(14)("Array", "reduce"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(97);
              a = c(51)("reduce");
              c(7)(
                { target: "Array", proto: !0, forced: a },
                {
                  reduce: function (a) {
                    return d(this, a, arguments.length, arguments[1], !1);
                  },
                }
              );
            },
            function (a, b, c) {
              var d = c(40),
                e = c(21),
                f = c(29),
                g = c(16);
              a.exports = function (a, b, c, h, i) {
                d(b);
                a = e(a);
                var j = f(a),
                  k = g(a.length),
                  l = i ? k - 1 : 0,
                  m = i ? -1 : 1;
                if (c < 2)
                  for (;;) {
                    if (l in j) {
                      (h = j[l]), (l += m);
                      break;
                    }
                    if (((l += m), i ? l < 0 : k <= l))
                      throw TypeError(
                        "Reduce of empty array with no initial value"
                      );
                  }
                for (; i ? l >= 0 : k > l; l += m)
                  l in j && (h = b(h, j[l], l, a));
                return h;
              };
            },
            function (a, b, c) {
              c(99), (a.exports = c(14)("Array", "find"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(27)(5);
              a = !0;
              "find" in [] &&
                Array(1).find(function () {
                  a = !1;
                }),
                c(7)(
                  { target: "Array", proto: !0, forced: a },
                  {
                    find: function (a) {
                      return d(
                        this,
                        a,
                        arguments.length > 1 ? arguments[1] : void 0
                      );
                    },
                  }
                ),
                c(50)("find");
            },
            function (a, b, c) {
              c(101), (a.exports = c(14)("Array", "indexOf"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(38)(!1),
                e = [].indexOf,
                f = !!e && 1 / [1].indexOf(1, -0) < 0;
              a = c(51)("indexOf");
              c(7)(
                { target: "Array", proto: !0, forced: f || a },
                {
                  indexOf: function (a) {
                    return f
                      ? e.apply(this, arguments) || 0
                      : d(this, a, arguments[1]);
                  },
                }
              );
            },
            function (a, b, c) {
              c(103), (a.exports = c(14)("String", "startsWith"));
            },
            function (a, b, c) {
              "use strict";
              var d = c(16),
                e = c(104);
              a = c(106)("startsWith");
              var f = "".startsWith;
              c(7)(
                { target: "String", proto: !0, forced: !a },
                {
                  startsWith: function (a) {
                    var b = e(this, a, "startsWith"),
                      c = d(
                        Math.min(
                          arguments.length > 1 ? arguments[1] : void 0,
                          b.length
                        )
                      ),
                      g = String(a);

                    
                    return f ? f.call(b, g, c) : b.slice(c, c + g.length) === g;
                  },
                }
              );
            },
            function (a, b, c) {
              var d = c(105),
                e = c(22);
              a.exports = function (a, b, c) {
                if (d(b))
                  throw TypeError(
                    "String.prototype." + c + " doesn't accept regex"
                  );

                  
                return String(e(a));
              };
            },
            function (a, b, c) {
              var d = c(11),
                e = c(20),
                f = c(4)("match");
              a.exports = function (a) {
                var b;
                return d(a) && (void 0 !== (b = a[f]) ? !!b : "RegExp" == e(a));
              };
            },
            function (a, b, c) {
              var d = c(4)("match");
              a.exports = function (a) {
                var b = /./;
                try {
                  "/./"[a](b);
                } catch (c) {
                  try {
                    return (b[d] = !1), "/./"[a](b);
                  } catch (a) {}
                }
                return !1;
              };
            },
            function (a, b, c) {
              "use strict";
              c.r(b);
              var d = {};
              function e(a) {
                if (null == a) return null;
                if (null != a.innerText && 0 !== a.innerText.length)
                  return a.innerText;
                var b = a.text;
                return null != b && "string" == typeof b && 0 !== b.length
                  ? b
                  : null != a.textContent && a.textContent.length > 0
                  ? a.textContent
                  : null;
              }
              c.r(d),
                c.d(d, "BUTTON_SELECTOR_SEPARATOR", function () {
                  return Q;
                }),
                c.d(d, "BUTTON_SELECTORS", function () {
                  return R;
                }),
                c.d(d, "BUTTON_SELECTOR_FORM_BLACKLIST", function () {
                  return La;
                }),
                c.d(d, "EXTENDED_BUTTON_SELECTORS", function () {
                  return Ma;
                }),
                c.d(d, "EXPLICIT_BUTTON_SELECTORS", function () {
                  return Na;
                });
              function i(a) {
                var b = void 0;
                switch (a.tagName.toLowerCase()) {
                  case "meta":
                    b = a.getAttribute("content");
                    break;
                  case "audio":
                  case "embed":
                  case "iframe":
                  case "img":
                  case "source":
                  case "track":
                  case "video":
                    b = a.getAttribute("src");
                    break;
                  case "a":
                  case "area":
                  case "link":
                    b = a.getAttribute("href");
                    break;
                  case "object":
                    b = a.getAttribute("data");
                    break;
                  case "data":
                  case "meter":
                    b = a.getAttribute("value");
                    break;
                  case "time":
                    b = a.getAttribute("datetime");
                    break;
                  default:
                    b = e(a) || "";
                }
                return "string" == typeof b ? b.substr(0, 500) : "";
              }
              var j = [
                  "Order",
                  "AggregateOffer",
                  "CreativeWork",
                  "Event",
                  "MenuItem",
                  "Product",
                  "Service",
                  "Trip",
                  "ActionAccessSpecification",
                  "ConsumeAction",
                  "MediaSubscription",
                  "Organization",
                  "Person",
                ],
                k = c(8),
                l = c.n(k);
              k = c(1);
              var m = c.n(k);
              k = c(2);
              var n = c.n(k);
              k = c(3);
              var o = c.n(k);
              k = c(9);
              var p = c.n(k);
              k = c(0);
              var q = c.n(k),
                r = function (a) {
                  for (
                    var b = q()(j, function (a) {
                        return '[vocab$="'
                          .concat("http://schema.org/", '"][typeof$="')
                          .concat(a, '"]');
                      }).join(", "),
                      c = [],
                      b = o()(g.querySelectorAll(b)),
                      d = [];
                    b.length > 0;

                  ) {
                    var e = b.pop();
                    if (!p()(c, e)) {
                      var s = { "@context": "http://schema.org" };
                      d.push({ htmlElement: e, jsonLD: s });
                      for (e = [{ element: e, workingNode: s }]; e.length; ) {
                        s = e.pop();
                        var v = s.element;
                        s = s.workingNode;
                        var f = m()(v.getAttribute("typeof"));
                        s["@type"] = f;
                        for (
                          f = o()(v.querySelectorAll("[property]")).reverse();
                          f.length;

                        ) {
                          var h = f.pop();
                          if (!p()(c, h)) {
                            c.push(h);
                            var w = m()(h.getAttribute("property"));
                            if (h.hasAttribute("typeof")) {
                              var k = {};
                              (s[w] = k),
                                e.push({ element: v, workingNode: s }),
                                e.push({ element: h, workingNode: k });
                              break;
                            }
                            s[w] = i(h);
                          }
                        }
                      }
                    }
                  }
                  return n()(d, function (b) {
                    return l()(b.htmlElement, a);
                  });
                };
              function s(a) {
                return (s =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              function t(a) {
                return (
                  "object" ===
                  ("undefined" == typeof HTMLElement
                    ? "undefined"
                    : s(HTMLElement))
                    ? a instanceof HTMLElement
                    : null != a &&
                      "object" === s(a) &&
                      null !== a &&
                      1 === a.nodeType &&
                      "string" == typeof a.nodeName
                )
                  ? a
                  : null;
              }
              k = c(5);
              var u = c.n(k);
              function v(a) {
                return (v =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              function w(a, b) {
                var c = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                  var d = Object.getOwnPropertySymbols(a);
                  b &&
                    (d = d.filter(function (b) {
                      return Object.getOwnPropertyDescriptor(a, b).enumerable;
                    })),
                    c.push.apply(c, d);
                }
                return c;
              }
              function x(a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = null != arguments[b] ? arguments[b] : {};
                  b % 2
                    ? w(Object(c), !0).forEach(function (b) {
                        z(a, b, c[b]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : w(Object(c)).forEach(function (b) {
                        Object.defineProperty(
                          a,
                          b,
                          Object.getOwnPropertyDescriptor(c, b)
                        );
                      });
                }
                return a;
              }
              function y(a, b) {
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    "value" in d && (d.writable = !0),
                    Object.defineProperty(a, A(d.key), d);
                }
              }
              function z(a, b, c) {
                return (
                  (b = A(b)) in a
                    ? Object.defineProperty(a, b, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[b] = c),
                  a
                );
              }
              function A(a) {
                a = (function (a, b) {
                  if ("object" !== v(a) || null === a) return a;
                  var c =
                    a[
                      typeof Symbol === "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (void 0 !== c) {
                    c = c.call(a, b || "default");
                    if ("object" !== v(c)) return c;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === b ? String : Number)(a);
                })(a, "string");
                return "symbol" === v(a) ? a : String(a);
              }
              var B = (function () {
                  function a(b) {
                    !(function (a, b) {
                      if (!(a instanceof b))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, a),
                      z(this, "_anchorElement", void 0),
                      z(this, "_parsedQuery", void 0),
                      (this._anchorElement = g.createElement("a")),
                      (this._anchorElement.href = b);
                  }
                  var b, c, d;
                  return (
                    (b = a),
                    (c = [
                      {
                        key: "hash",
                        get: function () {
                          return this._anchorElement.hash;
                        },
                      },
                      {
                        key: "host",
                        get: function () {
                          return this._anchorElement.host;
                        },
                      },
                      {
                        key: "hostname",
                        get: function () {
                          return this._anchorElement.hostname;
                        },
                      },
                      {
                        key: "pathname",
                        get: function () {
                          return this._anchorElement.pathname.replace(
                            /(^\/?)/,
                            "/"
                          );
                        },
                      },
                      {
                        key: "port",
                        get: function () {
                          return this._anchorElement.port;
                        },
                      },
                      {
                        key: "protocol",
                        get: function () {
                          return this._anchorElement.protocol;
                        },
                      },
                      {
                        key: "searchParams",
                        get: function () {
                          var a = this;
                          return {
                            get: function (b) {
                              if (null != a._parsedQuery)
                                return a._parsedQuery[b] || null;
                              var c = a._anchorElement.search;
                              if ("" === c || null == c)
                                return (a._parsedQuery = {}), null;
                              c = "?" === c[0] ? c.substring(1) : c;
                              return (
                                (a._parsedQuery = u()(
                                  c.split("&"),
                                  function (a, b) {
                                    b = b.split("=");
                                    return null == b || 2 !== b.length
                                      ? a
                                      : x(
                                          x({}, a),
                                          {},
                                          z(
                                            {},
                                            decodeURIComponent(b[0]),
                                            decodeURIComponent(b[1])
                                          )
                                        );
                                  },
                                  {}
                                )),
                                a._parsedQuery[b] || null
                              );
                            },
                          };
                        },
                      },
                      {
                        key: "toString",
                        value: function () {
                          return this._anchorElement.href;
                        },
                      },
                      {
                        key: "toJSON",
                        value: function () {
                          return this._anchorElement.href;
                        },
                      },
                    ]) && y(b.prototype, c),
                    d && y(b, d),
                    Object.defineProperty(b, "prototype", { writable: !1 }),
                    a
                  );
                })(),
                C = /^\s*:scope/gi;
              k = function a(b, c) {
                if (">" === c[c.length - 1]) return [];
                var d = ">" === c[0];
                if ((a.CAN_USE_SCOPE || !c.match(C)) && !d)
                  return b.querySelectorAll(c);
                var e = c;
                d && (e = ":scope ".concat(c));
                d = !1;
                b.id ||
                  ((b.id = "__fb_scoped_query_selector_" + Date.now()),
                  (d = !0));
                c = b.querySelectorAll(e.replace(C, "#" + b.id));
                return d && (b.id = ""), c;
              };
              k.CAN_USE_SCOPE = !0;
              var D = g.createElement("div");
              try {
                D.querySelectorAll(":scope *");
              } catch (a) {
                k.CAN_USE_SCOPE = !1;
              }
              var aa = k;
              D = c(26);
              var E = c.n(D);
              k = c(15);
              var F = c.n(k);
              D = (c(39), c(19));
              var G = c.n(D);
              function H(a) {
                return (
                  (function (a) {
                    if (Array.isArray(a)) return K(a);
                  })(a) ||
                  (function (a) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null !=
                          a[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]) ||
                      null != a["@@iterator"]
                    )
                      return Array.from(a);
                  })(a) ||
                  J(a) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function I(a, b) {
                return (
                  (function (a) {
                    if (Array.isArray(a)) return a;
                  })(a) ||
                  (function (a, b) {
                    var c =
                      null == a
                        ? null
                        : ("undefined" != typeof Symbol &&
                            a[
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ]) ||
                          a["@@iterator"];
                    if (null != c) {
                      var d,
                        e,
                        f = [],
                        g = !0,
                        h = !1;
                      try {
                        if (((a = (c = c.call(a)).next), 0 === b)) {
                          if (Object(c) !== c) return;
                          g = !1;
                        } else
                          for (
                            ;
                            !(g = (d = a.call(c)).done) &&
                            (f.push(d.value), f.length !== b);
                            g = !0
                          );
                      } catch (a) {
                        (h = !0), (e = a);
                      } finally {
                        try {
                          if (
                            !g &&
                            null != c["return"] &&
                            ((d = c["return"]()), Object(d) !== d)
                          )
                            return;
                        } finally {
                          if (h) throw e;
                        }
                      }
                      return f;
                    }
                  })(a, b) ||
                  J(a, b) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function J(a, b) {
                if (a) {
                  if ("string" == typeof a) return K(a, b);
                  var c = Object.prototype.toString.call(a).slice(8, -1);
                  return (
                    "Object" === c && a.constructor && (c = a.constructor.name),
                    "Map" === c || "Set" === c
                      ? Array.from(a)
                      : "Arguments" === c ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                      ? K(a, b)
                      : void 0
                  );
                }
              }
              function K(a, b) {
                (null == b || b > a.length) && (b = a.length);
                for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
                return d;
              }
              function ba(a, b) {
                return ca(
                  a,
                  n()(
                    q()(
                      b.split(/((?:closest|children)\([^)]+\))/),
                      function (a) {
                        return a.trim();
                      }
                    ),
                    Boolean
                  )
                );
              }
              function ca(a, b) {
                var c = function (a, b) {
                  return b.substring(a.length, b.length - 1).trim();
                };
                b = q()(b, function (a) {
                  return G()(a, "closest(")
                    ? { selector: c("closest(", a), type: "closest" }
                    : G()(a, "children(")
                    ? { selector: c("children(", a), type: "children" }
                    : { selector: a, type: "standard" };
                });
                b = u()(
                  b,
                  function (a, b) {
                    if ("standard" !== b.type) return [].concat(H(a), [b]);
                    var c = a[a.length - 1];
                    return c && "standard" === c.type
                      ? ((c.selector += " " + b.selector), a)
                      : [].concat(H(a), [b]);
                  },
                  []
                );
                return u()(
                  b,
                  function (a, b) {
                    return n()(
                      E()(
                        q()(a, function (a) {
                          return da(a, b);
                        })
                      ),
                      Boolean
                    );
                  },
                  [a]
                );
              }
              var da = function (a, b) {
                var c = b.selector;
                switch (b.type) {
                  case "children":
                    if (null == a) return [];
                    b = I(c.split(","), 2);
                    var d = b[0],
                      e = b[1];
                    return [
                      o()(
                        n()(o()(a.childNodes), function (a) {
                          return null != t(a) && a.matches(e);
                        })
                      )[parseInt(d, 0)],
                    ];
                  case "closest":
                    return a.parentNode ? [a.parentNode.closest(c)] : [];
                  default:
                    return o()(aa(a, c));
                }
              };
              if (
                (Element.prototype.matches ||
                  (Element.prototype.matches =
                    Element.prototype.msMatchesSelector ||
                    Element.prototype.webkitMatchesSelector),
                !Element.prototype.closest)
              ) {
                var ea = g.documentElement;
                Element.prototype.closest = function (a) {
                  var b = this;
                  if (!ea.contains(b)) return null;
                  do {
                    if (b.matches(a)) return b;
                    b = b.parentElement || b.parentNode;
                  } while (null !== b && 1 === b.nodeType);
                  return null;
                };
              }
              var fa = [
                "og",
                "product",
                "music",
                "video",
                "article",
                "book",
                "profile",
                "website",
                "twitter",
              ];
              function L(a) {
                return (L =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              function ga(a, b) {
                var c = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                  var d = Object.getOwnPropertySymbols(a);
                  b &&
                    (d = d.filter(function (b) {
                      return Object.getOwnPropertyDescriptor(a, b).enumerable;
                    })),
                    c.push.apply(c, d);
                }
                return c;
              }
              function ha(a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = null != arguments[b] ? arguments[b] : {};
                  b % 2
                    ? ga(Object(c), !0).forEach(function (b) {
                        ia(a, b, c[b]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : ga(Object(c)).forEach(function (b) {
                        Object.defineProperty(
                          a,
                          b,
                          Object.getOwnPropertyDescriptor(c, b)
                        );
                      });
                }
                return a;
              }
              function ia(a, b, c) {
                return (
                  (b = (function (a) {
                    a = (function (a, b) {
                      if ("object" !== L(a) || null === a) return a;
                      var c =
                        a[
                          typeof Symbol === "function"
                            ? Symbol.toPrimitive
                            : "@@toPrimitive"
                        ];
                      if (void 0 !== c) {
                        c = c.call(a, b || "default");
                        if ("object" !== L(c)) return c;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === b ? String : Number)(a);
                    })(a, "string");
                    return "symbol" === L(a) ? a : String(a);
                  })(b)) in a
                    ? Object.defineProperty(a, b, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[b] = c),
                  a
                );
              }
              var ja = function () {
                  var a = u()(
                    n()(
                      q()(
                        o()(g.querySelectorAll("meta[property]")),
                        function (a) {
                          var b = a.getAttribute("property");
                          a = a.getAttribute("content");
                          return "string" == typeof b &&
                            -1 !== b.indexOf(":") &&
                            "string" == typeof a &&
                            p()(fa, b.split(":")[0])
                            ? { key: b, value: a.substr(0, 500) }
                            : null;
                        }
                      ),
                      Boolean
                    ),
                    function (a, b) {
                      return ha(
                        ha({}, a),
                        {},
                        ia({}, b.key, a[b.key] || b.value)
                      );
                    },
                    {}
                  );
                  return "product.item" !== a["og:type"]
                    ? null
                    : {
                        "@context": "http://schema.org",
                        "@type": "Product",
                        offers: {
                          price: a["product:price:amount"],
                          priceCurrency: a["product:price:currency"],
                        },
                        productID: a["product:retailer_item_id"],
                      };
                },
                ka = "PATH",
                la = "QUERY_STRING";
              function ma(a) {
                return (
                  (function (a) {
                    if (Array.isArray(a)) return oa(a);
                  })(a) ||
                  (function (a) {
                    if (
                      ("undefined" != typeof Symbol &&
                        null !=
                          a[
                            typeof Symbol === "function"
                              ? Symbol.iterator
                              : "@@iterator"
                          ]) ||
                      null != a["@@iterator"]
                    )
                      return Array.from(a);
                  })(a) ||
                  na(a) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function na(a, b) {
                if (a) {
                  if ("string" == typeof a) return oa(a, b);
                  var c = Object.prototype.toString.call(a).slice(8, -1);
                  return (
                    "Object" === c && a.constructor && (c = a.constructor.name),
                    "Map" === c || "Set" === c
                      ? Array.from(a)
                      : "Arguments" === c ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                      ? oa(a, b)
                      : void 0
                  );
                }
              }
              function oa(a, b) {
                (null == b || b > a.length) && (b = a.length);
                for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
                return d;
              }
              function pa(a, b) {
                a = m()(t(a)).className;
                b = m()(t(b)).className;
                a = a.split(" ");
                var c = b.split(" ");
                return a
                  .filter(function (a) {
                    return c.includes(a);
                  })
                  .toString();
              }
              var M = 0,
                qa = 1,
                ra = 2;
              function sa(a, b) {
                if (
                  (a && !b) ||
                  (!a && b) ||
                  void 0 === a ||
                  void 0 === b ||
                  a.nodeType !== b.nodeType ||
                  a.nodeName !== b.nodeName
                )
                  return M;
                a = t(a);
                b = t(b);
                if ((a && !b) || (!a && b)) return M;
                if (a && b) {
                  if (a.tagName !== b.tagName) return M;
                  if (a.className === b.className) return qa;
                }
                return ra;
              }
              function ta(a, b, c, d) {
                var e = sa(a, d.node);
                return e === M
                  ? e
                  : c > 0 && b !== d.index
                  ? M
                  : 1 === e
                  ? qa
                  : 0 === d.relativeClass.length
                  ? M
                  : (pa(a, d.node), d.relativeClass, qa);
              }
              function ua(a, b, c, d) {
                if (d === c.length - 1) {
                  if (!ta(a, b, d, c[d])) return null;
                  var e = t(a);
                  if (e) return [e];
                }
                if (!a || !ta(a, b, d, c[d])) return null;
                for (e = [], b = a.firstChild, a = 0; b; ) {
                  var f = ua(b, a, c, d + 1);
                  f && e.push.apply(e, ma(f)), (b = b.nextSibling), (a += 1);
                }
                return e;
              }
              function va(a, b) {
                var c = [],
                  d = (function (a, b) {
                    var c =
                      ("undefined" != typeof Symbol &&
                        a[
                          typeof Symbol === "function"
                            ? Symbol.iterator
                            : "@@iterator"
                        ]) ||
                      a["@@iterator"];
                    if (!c) {
                      if (
                        Array.isArray(a) ||
                        (c = na(a)) ||
                        (b && a && "number" == typeof a.length)
                      ) {
                        c && (a = c);
                        var g = 0;
                        b = function () {};
                        return {
                          s: b,
                          n: function () {
                            return g >= a.length
                              ? { done: !0 }
                              : { done: !1, value: a[g++] };
                          },
                          e: function (a) {
                            throw a;
                          },
                          f: b,
                        };
                      }
                      throw new TypeError(
                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                      );
                    }
                    var d,
                      e = !0,
                      f = !1;
                    return {
                      s: function () {
                        c = c.call(a);
                      },
                      n: function () {
                        var a = c.next();
                        return (e = a.done), a;
                      },
                      e: function (a) {
                        (f = !0), (d = a);
                      },
                      f: function () {
                        try {
                          e || null == c["return"] || c["return"]();
                        } finally {
                          if (f) throw d;
                        }
                      },
                    };
                  })(a);
                try {
                  for (d.s(); !(a = d.n()).done; ) {
                    a = ua(a.value, 0, b, 0);
                    a && c.push.apply(c, ma(a));
                  }
                } catch (a) {
                  d.e(a);
                } finally {
                  d.f();
                }
                return c;
              }
              function wa(a, b) {
                a = (function (a, b) {
                  for (
                    var c = function (a) {
                        var b = a.parentNode;
                        if (!b) return -1;
                        for (var b = b.firstChild, c = 0; b && b !== a; )
                          (b = b.nextSibling), (c += 1);
                        return b === a ? c : -1;
                      },
                      a = a,
                      b = b,
                      d = [],
                      e = [];
                    !a.isSameNode(b);

                  ) {
                    var f = sa(a, b);
                    if (f === M) return null;
                    var g = "";
                    if (f === ra && 0 === (g = pa(a, b)).length) return null;
                    if (
                      (d.push({ node: a, relativeClass: g, index: c(a) }),
                      e.push(b),
                      (a = a.parentNode),
                      (b = b.parentNode),
                      !a || !b)
                    )
                      return null;
                  }
                  return a && b && a.isSameNode(b) && d.length > 0
                    ? {
                        parentNode: a,
                        node1Tree: d.reverse(),
                        node2Tree: e.reverse(),
                      }
                    : null;
                })(a, b);
                if (!a) return null;
                b = (function (a, b, c) {
                  for (var d = [], a = a.firstChild; a; )
                    a.isSameNode(b.node) ||
                      a.isSameNode(c) ||
                      !sa(b.node, a) ||
                      d.push(a),
                      (a = a.nextSibling);
                  return d;
                })(a.parentNode, a.node1Tree[0], a.node2Tree[0]);
                return b && 0 !== b.length ? va(b, a.node1Tree) : null;
              }
              function N(a) {
                return (N =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              function xa(a, b) {
                return (
                  (function (a) {
                    if (Array.isArray(a)) return a;
                  })(a) ||
                  (function (a, b) {
                    var c =
                      null == a
                        ? null
                        : ("undefined" != typeof Symbol &&
                            a[
                              typeof Symbol === "function"
                                ? Symbol.iterator
                                : "@@iterator"
                            ]) ||
                          a["@@iterator"];
                    if (null != c) {
                      var d,
                        e,
                        f = [],
                        g = !0,
                        h = !1;
                      try {
                        if (((a = (c = c.call(a)).next), 0 === b)) {
                          if (Object(c) !== c) return;
                          g = !1;
                        } else
                          for (
                            ;
                            !(g = (d = a.call(c)).done) &&
                            (f.push(d.value), f.length !== b);
                            g = !0
                          );
                      } catch (a) {
                        (h = !0), (e = a);
                      } finally {
                        try {
                          if (
                            !g &&
                            null != c["return"] &&
                            ((d = c["return"]()), Object(d) !== d)
                          )
                            return;
                        } finally {
                          if (h) throw e;
                        }
                      }
                      return f;
                    }
                  })(a, b) ||
                  (function (a, b) {
                    if (!a) return;
                    if ("string" == typeof a) return ya(a, b);
                    var c = Object.prototype.toString.call(a).slice(8, -1);
                    "Object" === c && a.constructor && (c = a.constructor.name);
                    if ("Map" === c || "Set" === c) return Array.from(a);
                    if (
                      "Arguments" === c ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)
                    )
                      return ya(a, b);
                  })(a, b) ||
                  (function () {
                    throw new TypeError(
                      "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                    );
                  })()
                );
              }
              function ya(a, b) {
                (null == b || b > a.length) && (b = a.length);
                for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
                return d;
              }
              function za(a, b) {
                var c = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                  var d = Object.getOwnPropertySymbols(a);
                  b &&
                    (d = d.filter(function (b) {
                      return Object.getOwnPropertyDescriptor(a, b).enumerable;
                    })),
                    c.push.apply(c, d);
                }
                return c;
              }
              function Aa(a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = null != arguments[b] ? arguments[b] : {};
                  b % 2
                    ? za(Object(c), !0).forEach(function (b) {
                        Ba(a, b, c[b]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : za(Object(c)).forEach(function (b) {
                        Object.defineProperty(
                          a,
                          b,
                          Object.getOwnPropertyDescriptor(c, b)
                        );
                      });
                }
                return a;
              }
              function Ba(a, b, c) {
                return (
                  (b = (function (a) {
                    a = (function (a, b) {
                      if ("object" !== N(a) || null === a) return a;
                      var c =
                        a[
                          typeof Symbol === "function"
                            ? Symbol.toPrimitive
                            : "@@toPrimitive"
                        ];
                      if (void 0 !== c) {
                        c = c.call(a, b || "default");
                        if ("object" !== N(c)) return c;
                        throw new TypeError(
                          "@@toPrimitive must return a primitive value."
                        );
                      }
                      return ("string" === b ? String : Number)(a);
                    })(a, "string");
                    return "symbol" === N(a) ? a : String(a);
                  })(b)) in a
                    ? Object.defineProperty(a, b, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[b] = c),
                  a
                );
              }
              var O = u()(
                  [
                    "CONSTANT_VALUE",
                    "CSS",
                    "URI",
                    "SCHEMA_DOT_ORG",
                    "JSON_LD",
                    "RDFA",
                    "OPEN_GRAPH",
                    "GTM",
                    "META_TAG",
                    "GLOBAL_VARIABLE",
                  ],
                  function (a, b, c) {
                    return Aa(Aa({}, a), {}, Ba({}, b, c));
                  },
                  {}
                ),
                Ca = {
                  "@context": "http://schema.org",
                  "@type": "Product",
                  additionalType: void 0,
                  offers: { price: void 0, priceCurrency: void 0 },
                  productID: void 0,
                },
                Da = function (a, b, c) {
                  if (null == c) return a;
                  var d = m()(a.offers);
                  return {
                    "@context": "http://schema.org",
                    "@type": "Product",
                    additionalType:
                      null != a.additionalType
                        ? a.additionalType
                        : "content_type" === b
                        ? c
                        : void 0,
                    offers: {
                      price:
                        null != d.price ? d.price : "value" === b ? c : void 0,
                      priceCurrency:
                        null != d.priceCurrency
                          ? d.priceCurrency
                          : "currency" === b
                          ? c
                          : void 0,
                    },
                    productID:
                      null != a.productID
                        ? a.productID
                        : "content_ids" === b
                        ? c
                        : void 0,
                  };
                };
              function a(a, b) {
                b = b.sort(function (a, b) {
                  return O[a.extractorType] > O[b.extractorType] ? 1 : -1;
                });
                return n()(
                  E()(
                    q()(b, function (b) {
                      switch (b.extractorType) {
                        case "SCHEMA_DOT_ORG":
                          return q()(
                            (function (a) {
                              for (
                                var b = q()(j, function (a) {
                                    return '[itemtype$="'
                                      .concat("schema.org/")
                                      .concat(a, '"]');
                                  }).join(", "),
                                  c = [],
                                  b = o()(g.querySelectorAll(b)),
                                  d = [];
                                b.length > 0;

                              ) {
                                var e = b.pop();
                                if (!p()(c, e)) {
                                  var s = { "@context": "http://schema.org" };
                                  d.push({ htmlElement: e, jsonLD: s });
                                  for (
                                    e = [{ element: e, workingNode: s }];
                                    e.length;

                                  ) {
                                    s = e.pop();
                                    var v = s.element;
                                    s = s.workingNode;
                                    var f = m()(v.getAttribute("itemtype"));
                                    s["@type"] = f.substr(
                                      f.indexOf("schema.org/") +
                                        "schema.org/".length
                                    );
                                    for (
                                      f = o()(
                                        v.querySelectorAll("[itemprop]")
                                      ).reverse();
                                      f.length;

                                    ) {
                                      var h = f.pop();
                                      if (!p()(c, h)) {
                                        c.push(h);
                                        var w = m()(h.getAttribute("itemprop"));
                                        if (h.hasAttribute("itemscope")) {
                                          var k = {};
                                          (s[w] = k),
                                            e.push({
                                              element: v,
                                              workingNode: s,
                                            }),
                                            e.push({
                                              element: h,
                                              workingNode: k,
                                            });
                                          break;
                                        }
                                        s[w] = i(h);
                                      }
                                    }
                                  }
                                }
                              }
                              return n()(d, function (b) {
                                return l()(b.htmlElement, a);
                              });
                            })(a),
                            function (a) {
                              return { extractorID: b.id, jsonLD: a.jsonLD };
                            }
                          );
                        case "RDFA":
                          return q()(r(a), function (a) {
                            return { extractorID: b.id, jsonLD: a.jsonLD };
                          });
                        case "OPEN_GRAPH":
                          return { extractorID: b.id, jsonLD: ja() };
                        case "CSS":
                          var c = q()(
                            b.extractorConfig.parameterSelectors,
                            function (b) {
                              return null != (b = ba(a, b.selector)) ? b[0] : b;
                            }
                          );
                          if (null == c) return null;
                          if (2 === c.length) {
                            var d = c[0],
                              e = c[1];
                            if (null != d && null != e) {
                              d = wa(d, e);
                              d && c.push.apply(c, d);
                            }
                          }
                          var h =
                            b.extractorConfig.parameterSelectors[0]
                              .parameterType;
                          e = q()(c, function (a) {
                            var b;
                            a =
                              (null != (b = a) ? b.innerText : b) ||
                              (null != (b = a) ? b.textContent : b);
                            return [h, a];
                          });
                          d = q()(
                            n()(e, function (a) {
                              return "totalPrice" !== xa(a, 1)[0];
                            }),
                            function (a) {
                              a = xa(a, 2);
                              var b = a[0];
                              a = a[1];
                              return Da(Ca, b, a);
                            }
                          );
                          if (
                            "InitiateCheckout" === b.eventType ||
                            "Purchase" === b.eventType
                          ) {
                            c = F()(e, function (a) {
                              return "totalPrice" === xa(a, 1)[0];
                            });
                            c &&
                              (d = [
                                {
                                  "@context": "http://schema.org",
                                  "@type": "ItemList",
                                  itemListElement: q()(d, function (a, b) {
                                    return {
                                      "@type": "ListItem",
                                      item: a,
                                      position: b + 1,
                                    };
                                  }),
                                  totalPrice: null != c[1] ? c[1] : void 0,
                                },
                              ]);
                          }
                          return q()(d, function (a) {
                            return { extractorID: b.id, jsonLD: a };
                          });
                        case "CONSTANT_VALUE":
                          e = b.extractorConfig;
                          c = e.parameterType;
                          d = e.value;
                          return { extractorID: b.id, jsonLD: Da(Ca, c, d) };
                        case "URI":
                          e = b.extractorConfig.parameterType;
                          c = (function (a, b, c) {
                            a = new B(a);
                            switch (b) {
                              case ka:
                                b = n()(
                                  q()(a.pathname.split("/"), function (a) {
                                    return a.trim();
                                  }),
                                  Boolean
                                );
                                var d = parseInt(c, 10);
                                return d < b.length ? b[d] : null;
                              case la:
                                return a.searchParams.get(c);
                            }
                            return null;
                          })(
                            f.location.href,
                            b.extractorConfig.context,
                            b.extractorConfig.value
                          );
                          return { extractorID: b.id, jsonLD: Da(Ca, e, c) };
                        default:
                          throw new Error(
                            "Extractor ".concat(b.extractorType, " not mapped")
                          );
                      }
                    })
                  ),
                  function (a) {
                    a = a.jsonLD;
                    return Boolean(a);
                  }
                );
              }
              a.EXTRACTOR_PRECEDENCE = O;
              var Ea = a;
              function Fa(a) {
                switch (a.extractor_type) {
                  case "CSS":
                    if (null == a.extractor_config)
                      throw new Error("extractor_config must be set");
                    var b = a.extractor_config;
                    if (b.parameter_type)
                      throw new Error("extractor_config must be set");
                    return {
                      domainURI: new B(a.domain_uri),
                      eventType: a.event_type,
                      extractorConfig:
                        ((b = b),
                        {
                          parameterSelectors: q()(
                            b.parameter_selectors,
                            function (a) {
                              return {
                                parameterType: a.parameter_type,
                                selector: a.selector,
                              };
                            }
                          ),
                        }),
                      extractorType: "CSS",
                      id: m()(a.id),
                      ruleId: null != (b = a.event_rule) ? b.id : b,
                    };
                  case "CONSTANT_VALUE":
                    if (null == a.extractor_config)
                      throw new Error("extractor_config must be set");
                    b = a.extractor_config;
                    if (b.parameter_selectors)
                      throw new Error("extractor_config must be set");
                    return {
                      domainURI: new B(a.domain_uri),
                      eventType: a.event_type,
                      extractorConfig: Ga(b),
                      extractorType: "CONSTANT_VALUE",
                      id: m()(a.id),
                      ruleId: null != (b = a.event_rule) ? b.id : b,
                    };
                  case "URI":
                    if (null == a.extractor_config)
                      throw new Error("extractor_config must be set");
                    b = a.extractor_config;
                    if (b.parameter_selectors)
                      throw new Error("extractor_config must be set");
                    return {
                      domainURI: new B(a.domain_uri),
                      eventType: a.event_type,
                      extractorConfig: Ha(b),
                      extractorType: "URI",
                      id: m()(a.id),
                      ruleId: null != (b = a.event_rule) ? b.id : b,
                    };
                  default:
                    return {
                      domainURI: new B(a.domain_uri),
                      eventType: a.event_type,
                      extractorType: a.extractor_type,
                      id: m()(a.id),
                      ruleId: null != (b = a.event_rule) ? b.id : b,
                    };
                }
              }
              function Ga(a) {
                return { parameterType: a.parameter_type, value: a.value };
              }
              function Ha(a) {
                return {
                  context: a.context,
                  parameterType: a.parameter_type,
                  value: a.value,
                };
              }
              a.EXTRACTOR_PRECEDENCE = O;
              var Ia = function (a, b, c) {
                  return "string" != typeof a
                    ? ""
                    : a.length < c && 0 === b
                    ? a
                    : []
                        .concat(o()(a))
                        .slice(b, b + c)
                        .join("");
                },
                P = function (a, b) {
                  return Ia(a, 0, b);
                },
                Ja = [
                  "button",
                  "submit",
                  "input",
                  "li",
                  "option",
                  "progress",
                  "param",
                ];
              function Ka(a) {
                var b = e(a);
                if (null != b && "" !== b) return P(b, 120);
                b = a.type;
                a = a.value;
                return null != b && p()(Ja, b) && null != a && "" !== a
                  ? P(a, 120)
                  : P("", 120);
              }
              var Q = ", ",
                R = [
                  "input[type='button']",
                  "input[type='image']",
                  "input[type='submit']",
                  "button",
                  "[class*=btn]",
                  "[class*=Btn]",
                  "[class*=button]",
                  "[class*=Button]",
                  "[role*=button]",
                  "[href^='tel:']",
                  "[href^='callto:']",
                  "[href^='mailto:']",
                  "[href^='sms:']",
                  "[href^='skype:']",
                  "[href^='whatsapp:']",
                  "[id*=btn]",
                  "[id*=Btn]",
                  "[id*=button]",
                  "[id*=Button]",
                  "a",
                ].join(Q),
                La = [
                  "[href^='tel:']",
                  "[href^='callto:']",
                  "[href^='sms:']",
                  "[href^='skype:']",
                  "[href^='whatsapp:']",
                ].join(Q),
                Ma = R,
                Na = [
                  "input[type='button']",
                  "input[type='submit']",
                  "button",
                  "a",
                ].join(Q);
              function Oa(a) {
                var b = "";
                if ("IMG" === a.tagName) return a.getAttribute("src") || "";
                if (f.getComputedStyle) {
                  var c = f
                    .getComputedStyle(a)
                    .getPropertyValue("background-image");
                  if (null != c && "none" !== c && c.length > 0) return c;
                }
                if (
                  "INPUT" === a.tagName &&
                  "image" === a.getAttribute("type")
                ) {
                  c = a.getAttribute("src");
                  if (null != c) return c;
                }
                c = a.getElementsByTagName("img");
                if (0 !== c.length) {
                  a = c.item(0);
                  b = (a ? a.getAttribute("src") : null) || "";
                }
                return b;
              }
              var Pa = [
                  "sms:",
                  "mailto:",
                  "tel:",
                  "whatsapp:",
                  "https://wa.me/",
                  "skype:",
                  "callto:",
                ],
                Qa = /[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g,
                Ra = /((([a-z])(?=[A-Z]))|(([A-Z])(?=[A-Z][a-z])))/g,
                Sa = /(^\S{1}(?!\S))|((\s)\S{1}(?!\S))/g,
                Ta = /\s+/g;
              function Ua(a) {
                return (
                  !!(function (a) {
                    var b = Pa;
                    if (!a.hasAttribute("href")) return !1;
                    var c = a.getAttribute("href");
                    return (
                      null != c &&
                      !!F()(b, function (a) {
                        return G()(c, a);
                      })
                    );
                  })(a) ||
                  !!Ka(a)
                    .replace(Qa, " ")
                    .replace(Ra, function (a) {
                      return a + " ";
                    })
                    .replace(Sa, function (a) {
                      return P(a, a.length - 1) + " ";
                    })
                    .replace(Ta, " ")
                    .trim()
                    .toLowerCase() ||
                  !!Oa(a)
                );
              }
              function Va(a) {
                if (null == a || a === g.body || !Ua(a)) return !1;
                a =
                  ("function" == typeof a.getBoundingClientRect &&
                    a.getBoundingClientRect().height) ||
                  a.offsetHeight;
                return !isNaN(a) && a < 600 && a > 10;
              }
              function Wa(a, b) {
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    "value" in d && (d.writable = !0),
                    Object.defineProperty(a, Xa(d.key), d);
                }
              }
              function Xa(a) {
                a = (function (a, b) {
                  if ("object" !== S(a) || null === a) return a;
                  var c =
                    a[
                      typeof Symbol === "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (void 0 !== c) {
                    c = c.call(a, b || "default");
                    if ("object" !== S(c)) return c;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === b ? String : Number)(a);
                })(a, "string");
                return "symbol" === S(a) ? a : String(a);
              }
              function S(a) {
                return (S =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              var Ya = Object.prototype.toString,
                Za = !("addEventListener" in g);
              function $a(a) {
                return Array.isArray
                  ? Array.isArray(a)
                  : "[object Array]" === Ya.call(a);
              }
              function ab(a) {
                return null != a && "object" === S(a) && !1 === $a(a);
              }
              function bb(a) {
                return (
                  !0 === ab(a) &&
                  "[object Object]" === Object.prototype.toString.call(a)
                );
              }
              var cb =
                  Number.isInteger ||
                  function (a) {
                    return (
                      "number" == typeof a && isFinite(a) && Math.floor(a) === a
                    );
                  },
                db = Object.prototype.hasOwnProperty,
                eb = !{ toString: null }.propertyIsEnumerable("toString"),
                fb = [
                  "toString",
                  "toLocaleString",
                  "valueOf",
                  "hasOwnProperty",
                  "isPrototypeOf",
                  "propertyIsEnumerable",
                  "constructor",
                ],
                gb = fb.length;
              function hb(a) {
                if ("object" !== S(a) && ("function" != typeof a || null === a))
                  throw new TypeError("Object.keys called on non-object");
                var b = [];
                for (var c in a) db.call(a, c) && b.push(c);
                if (eb)
                  for (c = 0; c < gb; c++) db.call(a, fb[c]) && b.push(fb[c]);
                return b;
              }
              function ib(a, b) {
                if (null == a)
                  throw new TypeError(" array is null or not defined");
                a = Object(a);
                var c = a.length >>> 0;
                if ("function" != typeof b)
                  throw new TypeError(b + " is not a function");
                for (var d = new Array(c), e = 0; e < c; ) {
                  var f;
                  e in a && ((f = b(a[e], e, a)), (d[e] = f)), e++;
                }
                return d;
              }
              function jb(a) {
                if ("function" != typeof a) throw new TypeError();
                for (
                  var b = Object(this),
                    c = b.length >>> 0,
                    d = arguments.length >= 2 ? arguments[1] : void 0,
                    e = 0;
                  e < c;
                  e++
                )
                  if (e in b && a.call(d, b[e], e, b)) return !0;
                return !1;
              }
              function kb(a) {
                if (null == this) throw new TypeError();
                var b = Object(this),
                  c = b.length >>> 0;
                if ("function" != typeof a) throw new TypeError();
                for (
                  var d = [],
                    e = arguments.length >= 2 ? arguments[1] : void 0,
                    f = 0;
                  f < c;
                  f++
                )
                  if (f in b) {
                    var g = b[f];
                    a.call(e, g, f, b) && d.push(g);
                  }
                return d;
              }
              function T(a, b) {
                try {
                  return b(a);
                } catch (a) {
                  if (a instanceof TypeError) {
                    if (lb.test(a)) return null;
                    if (mb.test(a)) return;
                  }
                  throw a;
                }
              }
              var lb = /^null | null$|^[^(]* null /i,
                mb = /^undefined | undefined$|^[^(]* undefined /i;
              T["default"] = T;
              k = {
                FBSet: (function () {
                  function a(b) {
                    var c, d, e;
                    !(function (a, b) {
                      if (!(a instanceof b))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, a),
                      (c = this),
                      (e = void 0),
                      (d = Xa("items")) in c
                        ? Object.defineProperty(c, d, {
                            value: e,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (c[d] = e),
                      (this.items = b || []);
                  }
                  var b, c, d;
                  return (
                    (b = a),
                    (c = [
                      {
                        key: "has",
                        value: function (a) {
                          return jb.call(this.items, function (b) {
                            return b === a;
                          });
                        },
                      },
                      {
                        key: "add",
                        value: function (a) {
                          this.items.push(a);
                        },
                      },
                    ]) && Wa(b.prototype, c),
                    d && Wa(b, d),
                    Object.defineProperty(b, "prototype", { writable: !1 }),
                    a
                  );
                })(),
                castTo: function (a) {
                  return a;
                },
                each: function (a, b) {
                  ib.call(this, a, b);
                },
                filter: function (a, b) {
                  return kb.call(a, b);
                },
                idx: T,
                isArray: $a,
                isEmptyObject: function (a) {
                  return 0 === hb(a).length;
                },
                isInstanceOf: function (a, b) {
                  return null != b && a instanceof b;
                },
                isInteger: cb,
                isNumber: function (a) {
                  return (
                    "number" == typeof a ||
                    ("string" == typeof a && /^\d+$/.test(a))
                  );
                },
                isObject: ab,
                isPlainObject: function (a) {
                  if (!1 === bb(a)) return !1;
                  a = a.constructor;
                  if ("function" != typeof a) return !1;
                  a = a.prototype;
                  return (
                    !1 !== bb(a) &&
                    !1 !==
                      Object.prototype.hasOwnProperty.call(a, "isPrototypeOf")
                  );
                },
                isSafeInteger: function (a) {
                  return cb(a) && a >= 0 && a <= Number.MAX_SAFE_INTEGER;
                },
                keys: hb,
                listenOnce: function (a, b, c) {
                  var d = Za ? "on" + b : b;
                  b = Za ? a.attachEvent : a.addEventListener;
                  var e = Za ? a.detachEvent : a.removeEventListener;
                  b &&
                    b.call(
                      a,
                      d,
                      function b() {
                        e && e.call(a, d, b, !1), c();
                      },
                      !1
                    );
                },
                map: ib,
                reduce: function (a, b, c, d) {
                  if (null == a)
                    throw new TypeError(" array is null or not defined");
                  if ("function" != typeof b)
                    throw new TypeError(b + " is not a function");
                  var e = Object(a),
                    f = e.length >>> 0,
                    g = 0;
                  if (null != c || !0 === d) d = c;
                  else {
                    for (; g < f && !(g in e); ) g++;
                    if (g >= f)
                      throw new TypeError(
                        "Reduce of empty array with no initial value"
                      );
                    d = e[g++];
                  }
                  for (; g < f; ) g in e && (d = b(d, e[g], g, a)), g++;
                  return d;
                },
                some: function (a, b) {
                  return jb.call(a, b);
                },
                stringIncludes: function (a, b) {
                  return null != a && null != b && a.indexOf(b) >= 0;
                },
                stringStartsWith: function (a, b) {
                  return null != a && null != b && 0 === a.indexOf(b);
                },
              };
              function nb(a, b) {
                var c = Object.keys(a);
                if (Object.getOwnPropertySymbols) {
                  var d = Object.getOwnPropertySymbols(a);
                  b &&
                    (d = d.filter(function (b) {
                      return Object.getOwnPropertyDescriptor(a, b).enumerable;
                    })),
                    c.push.apply(c, d);
                }
                return c;
              }
              function U(a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = null != arguments[b] ? arguments[b] : {};
                  b % 2
                    ? nb(Object(c), !0).forEach(function (b) {
                        ob(a, b, c[b]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        a,
                        Object.getOwnPropertyDescriptors(c)
                      )
                    : nb(Object(c)).forEach(function (b) {
                        Object.defineProperty(
                          a,
                          b,
                          Object.getOwnPropertyDescriptor(c, b)
                        );
                      });
                }
                return a;
              }
              function ob(a, b, c) {
                return (
                  (b = qb(b)) in a
                    ? Object.defineProperty(a, b, {
                        value: c,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                      })
                    : (a[b] = c),
                  a
                );
              }
              function V(a) {
                return (V =
                  "function" == typeof Symbol &&
                  "symbol" ==
                    h(
                      typeof Symbol === "function"
                        ? Symbol.iterator
                        : "@@iterator"
                    )
                    ? function (a) {
                        return typeof a === "undefined" ? "undefined" : h(a);
                      }
                    : function (a) {
                        return a &&
                          "function" == typeof Symbol &&
                          a.constructor === Symbol &&
                          a !==
                            (typeof Symbol === "function"
                              ? Symbol.prototype
                              : "@@prototype")
                          ? "symbol"
                          : typeof a === "undefined"
                          ? "undefined"
                          : h(a);
                      })(a);
              }
              function pb(a, b) {
                for (var c = 0; c < b.length; c++) {
                  var d = b[c];
                  (d.enumerable = d.enumerable || !1),
                    (d.configurable = !0),
                    "value" in d && (d.writable = !0),
                    Object.defineProperty(a, qb(d.key), d);
                }
              }
              function qb(a) {
                a = (function (a, b) {
                  if ("object" !== V(a) || null === a) return a;
                  var c =
                    a[
                      typeof Symbol === "function"
                        ? Symbol.toPrimitive
                        : "@@toPrimitive"
                    ];
                  if (void 0 !== c) {
                    c = c.call(a, b || "default");
                    if ("object" !== V(c)) return c;
                    throw new TypeError(
                      "@@toPrimitive must return a primitive value."
                    );
                  }
                  return ("string" === b ? String : Number)(a);
                })(a, "string");
                return "symbol" === V(a) ? a : String(a);
              }
              function rb(a, b) {
                if (!(a instanceof b))
                  throw new TypeError("Cannot call a class as a function");
              }
              function sb(a, b) {
                if (b && ("object" === V(b) || "function" == typeof b))
                  return b;
                if (void 0 !== b)
                  throw new TypeError(
                    "Derived constructors may only return object or undefined"
                  );
                return (function (a) {
                  if (void 0 === a)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return a;
                })(a);
              }
              function tb(a) {
                var b = "function" == typeof Map ? new Map() : void 0;
                return (tb = function (a) {
                  if (
                    null === a ||
                    ((c = a),
                    -1 === Function.toString.call(c).indexOf("[native code]"))
                  )
                    return a;
                  var c;
                  if ("function" != typeof a)
                    throw new TypeError(
                      "Super expression must either be null or a function"
                    );
                  if (void 0 !== b) {
                    if (b.has(a)) return b.get(a);
                    b.set(a, d);
                  }
                  function d() {
                    return ub(a, arguments, xb(this).constructor);
                  }
                  return (
                    (d.prototype = Object.create(a.prototype, {
                      constructor: {
                        value: d,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                    wb(d, a)
                  );
                })(a);
              }
              function ub(a, b, c) {
                return (ub = vb()
                  ? Reflect.construct.bind()
                  : function (a, b, c) {
                      var d = [null];
                      d.push.apply(d, b);
                      b = new (Function.bind.apply(a, d))();
                      return c && wb(b, c.prototype), b;
                    }).apply(null, arguments);
              }
              function vb() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (a) {
                  return !1;
                }
              }
              function wb(a, b) {
                return (wb = Object.setPrototypeOf
                  ? Object.setPrototypeOf.bind()
                  : function (a, b) {
                      return (a.__proto__ = b), a;
                    })(a, b);
              }
              function xb(a) {
                return (xb = Object.setPrototypeOf
                  ? Object.getPrototypeOf.bind()
                  : function (a) {
                      return a.__proto__ || Object.getPrototypeOf(a);
                    })(a);
              }
              var yb = k.isSafeInteger,
                zb = k.reduce,
                W = (function (a) {
                  !(function (a, b) {
                    if ("function" != typeof b && null !== b)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (a.prototype = Object.create(b && b.prototype, {
                      constructor: { value: a, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(a, "prototype", { writable: !1 }),
                      b && wb(a, b);
                  })(g, a);
                  var b,
                    c,
                    d,
                    e,
                    f =
                      ((b = g),
                      (c = vb()),
                      function () {
                        var a,
                          d = xb(b);
                        if (c) {
                          var e = xb(this).constructor;
                          a = Reflect.construct(d, arguments, e);
                        } else a = d.apply(this, arguments);
                        return sb(this, a);
                      });
                  function g() {
                    var a,
                      b =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : "";
                    return (
                      rb(this, g),
                      ((a = f.call(this, b)).name = "PixelCoercionError"),
                      a
                    );
                  }
                  return (
                    (a = g),
                    d && pb(a.prototype, d),
                    e && pb(a, e),
                    Object.defineProperty(a, "prototype", { writable: !1 }),
                    a
                  );
                })(tb(Error));
              function Ab() {
                return function (a) {
                  if (null == a || !Array.isArray(a)) throw new W();
                  return a;
                };
              }
              function Bb(a, b) {
                try {
                  return b(a);
                } catch (a) {
                  if ("PixelCoercionError" === a.name) return null;
                  throw a;
                }
              }
              function X(a, b) {
                return b(a);
              }
              function Cb(a) {
                if (!a) throw new W();
              }
              function Db(a) {
                var b = a.def,
                  c = a.validators;
                return function (a) {
                  var d = X(a, b);
                  return (
                    c.forEach(function (a) {
                      if (!a(d)) throw new W();
                    }),
                    d
                  );
                };
              }
              var Eb = /^[1-9][0-9]{0,25}$/,
                Y = {
                  allowNull: function (a) {
                    return function (b) {
                      return null == b ? null : a(b);
                    };
                  },
                  array: Ab,
                  arrayOf: function (a) {
                    return function (b) {
                      return X(b, Y.array()).map(a);
                    };
                  },
                  assert: Cb,
                  boolean: function () {
                    return function (a) {
                      if ("boolean" != typeof a) throw new W();
                      return a;
                    };
                  },
                  enumeration: function (a) {
                    return function (b) {
                      if (((c = a), Object.values(c)).includes(b)) return b;
                      var c;
                      throw new W();
                    };
                  },
                  fbid: function () {
                    return Db({
                      def: function (a) {
                        var b = Bb(a, Y.number());
                        return null != b
                          ? (Y.assert(yb(b)), "".concat(b))
                          : X(a, Y.string());
                      },
                      validators: [
                        function (a) {
                          return Eb.test(a);
                        },
                      ],
                    });
                  },
                  mapOf: function (a) {
                    return function (b) {
                      var c = X(b, Y.object());
                      return zb(
                        Object.keys(c),
                        function (b, d) {
                          return U(U({}, b), {}, ob({}, d, a(c[d])));
                        },
                        {}
                      );
                    };
                  },
                  matches: function (a) {
                    return function (b) {
                      b = X(b, Y.string());
                      if (a.test(b)) return b;
                      throw new W();
                    };
                  },
                  number: function () {
                    return function (a) {
                      if ("number" != typeof a) throw new W();
                      return a;
                    };
                  },
                  object: function () {
                    return function (a) {
                      if ("object" !== V(a) || Array.isArray(a) || null == a)
                        throw new W();
                      return a;
                    };
                  },
                  objectOrString: function () {
                    return function (a) {
                      if (
                        ("object" !== V(a) && "string" != typeof a) ||
                        Array.isArray(a) ||
                        null == a
                      )
                        throw new W();
                      return a;
                    };
                  },
                  objectWithFields: function (a) {
                    return function (b) {
                      var c = X(b, Y.object());
                      return zb(
                        Object.keys(a),
                        function (b, d) {
                          if (null == b) return null;
                          var e = a[d](c[d]);
                          return U(U({}, b), {}, ob({}, d, e));
                        },
                        {}
                      );
                    };
                  },
                  string: function () {
                    return function (a) {
                      if ("string" != typeof a) throw new W();
                      return a;
                    };
                  },
                  stringOrNumber: function () {
                    return function (a) {
                      if ("string" != typeof a && "number" != typeof a)
                        throw new W();
                      return a;
                    };
                  },
                  tuple: function (a) {
                    return function (b) {
                      b = X(b, Ab());
                      return (
                        Cb(b.length === a.length),
                        b.map(function (b, c) {
                          return X(b, a[c]);
                        })
                      );
                    };
                  },
                  withValidation: Db,
                  func: function () {
                    return function (a) {
                      if ("function" != typeof a || null == a) throw new W();
                      return a;
                    };
                  },
                };
              D = { Typed: Y, coerce: Bb, enforce: X, PixelCoercionError: W };
              a = D.Typed;
              var Fb = a.objectWithFields({
                type: a.withValidation({
                  def: a.number(),
                  validators: [
                    function (a) {
                      return a >= 1 && a <= 3;
                    },
                  ],
                }),
                conditions: a.arrayOf(
                  a.objectWithFields({
                    targetType: a.withValidation({
                      def: a.number(),
                      validators: [
                        function (a) {
                          return a >= 1 && a <= 6;
                        },
                      ],
                    }),
                    extractor: a.allowNull(
                      a.withValidation({
                        def: a.number(),
                        validators: [
                          function (a) {
                            return a >= 1 && a <= 11;
                          },
                        ],
                      })
                    ),
                    operator: a.withValidation({
                      def: a.number(),
                      validators: [
                        function (a) {
                          return a >= 1 && a <= 4;
                        },
                      ],
                    }),
                    action: a.withValidation({
                      def: a.number(),
                      validators: [
                        function (a) {
                          return a >= 1 && a <= 4;
                        },
                      ],
                    }),
                    value: a.allowNull(a.string()),
                  })
                ),
              });
              function Gb(a) {
                var b = [];
                a = a;
                do {
                  var c = a.indexOf("*");
                  c < 0
                    ? (b.push(a), (a = ""))
                    : 0 === c
                    ? (b.push("*"), (a = a.slice(1)))
                    : (b.push(a.slice(0, c)), (a = a.slice(c)));
                } while (a.length > 0);
                return b;
              }
              T = function (a, b) {
                for (var a = Gb(a), b = b, c = 0; c < a.length; c++) {
                  var d = a[c];
                  if ("*" !== d) {
                    if (0 !== b.indexOf(d)) return !1;
                    b = b.slice(d.length);
                  } else {
                    if (c === a.length - 1) return !0;
                    d = a[c + 1];
                    if ("*" === d) continue;
                    d = b.indexOf(d);
                    if (d < 0) return !1;
                    b = b.slice(d);
                  }
                }
                return "" === b;
              };
              var Hb = D.enforce,
                Ib = T,
                Jb = Object.freeze({
                  CLICK: 1,
                  LOAD: 2,
                  BECOME_VISIBLE: 3,
                  TRACK: 4,
                }),
                Kb = Object.freeze({
                  BUTTON: 1,
                  PAGE: 2,
                  JS_VARIABLE: 3,
                  EVENT: 4,
                  ELEMENT: 6,
                }),
                Lb = Object.freeze({
                  CONTAINS: 1,
                  EQUALS: 2,
                  DOMAIN_MATCHES: 3,
                  STRING_MATCHES: 4,
                }),
                Z = Object.freeze({
                  URL: 1,
                  TOKENIZED_TEXT_V1: 2,
                  TOKENIZED_TEXT_V2: 3,
                  TEXT: 4,
                  CLASS_NAME: 5,
                  ELEMENT_ID: 6,
                  EVENT_NAME: 7,
                  DESTINATION_URL: 8,
                  DOMAIN: 9,
                  PAGE_TITLE: 10,
                  IMAGE_URL: 11,
                }),
                Mb = Object.freeze({ ALL: 1, ANY: 2, NONE: 3 });
              function Nb(a, b, c) {
                if (null == b) return null;
                switch (a) {
                  case Kb.PAGE:
                    return (function (a, b) {
                      switch (a) {
                        case Z.URL:
                          return b.resolvedLink;
                        case Z.DOMAIN:
                          return new URL(b.resolvedLink).hostname;
                        case Z.PAGE_TITLE:
                          if (null != b.pageFeatures)
                            return JSON.parse(
                              b.pageFeatures
                            ).title.toLowerCase();
                        default:
                          return null;
                      }
                    })(b, c);
                  case Kb.BUTTON:
                    return (function (a, b) {
                      var c;
                      null != b.buttonText && (c = b.buttonText.toLowerCase());
                      var d = {};
                      switch (
                        (null != b.buttonFeatures &&
                          (d = JSON.parse(b.buttonFeatures)),
                        a)
                      ) {
                        case Z.DESTINATION_URL:
                          return d.destination;
                        case Z.TEXT:
                          return c;
                        case Z.TOKENIZED_TEXT_V1:
                          return null == c ? null : Qb(c);
                        case Z.TOKENIZED_TEXT_V2:
                          return null == c ? null : Rb(c);
                        case Z.ELEMENT_ID:
                          return d.id;
                        case Z.CLASS_NAME:
                          return d.classList;
                        case Z.IMAGE_URL:
                          return d.imageUrl;
                        default:
                          return null;
                      }
                    })(b, c);
                  case Kb.EVENT:
                    return (function (a, b) {
                      switch (a) {
                        case Z.EVENT_NAME:
                          return b.event;
                        default:
                          return null;
                      }
                    })(b, c);
                  default:
                    return null;
                }
              }
              function Ob(a) {
                return null != a ? a.split("#")[0] : a;
              }
              function Pb(a, b) {
                var c;
                a = a.replace(
                  /[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g,
                  " "
                );
                var d = a.replace(/([A-Z])/g, " $1").split(" ");
                if (null == d || 0 == d.length) return "";
                for (a = d[0], c = 1; c < d.length; c++)
                  null != d[c - 1] &&
                  null != d[c] &&
                  1 === d[c - 1].length &&
                  1 === d[c].length &&
                  d[c - 1] === d[c - 1].toUpperCase() &&
                  d[c] === d[c].toUpperCase()
                    ? (a += d[c])
                    : (a += " " + d[c]);
                d = a.split(" ");
                if (null == d || 0 == d.length) return a;
                a = "";
                b = b ? 1 : 2;
                for (c = 0; c < d.length; c++)
                  null != d[c] && d[c].length > b && (a += d[c] + " ");
                return a.replace(/\s+/g, " ");
              }
              function Qb(a) {
                var b = Pb(a, !0).toLowerCase().split(" ");
                return b
                  .filter(function (a, c) {
                    return b.indexOf(a) === c;
                  })
                  .join(" ")
                  .trim();
              }
              function Rb(a) {
                return Pb(a, !1).toLowerCase().trim();
              }
              function Sb(a, b) {
                if (b.startsWith("*.")) {
                  var c = b.slice(2).split(".").reverse(),
                    d = a.split(".").reverse();
                  if (c.length !== d.length) return !1;
                  for (var e = 0; e < c.length; e++)
                    if (c[e] !== d[e]) return !1;
                  return !0;
                }
                return a === b;
              }
              function Tb(a, b) {
                if (
                  !(function (a, b) {
                    switch (a) {
                      case Jb.LOAD:
                        return "PageView" === b.event;
                      case Jb.CLICK:
                        return "SubscribedButtonClick" === b.event;
                      case Jb.TRACK:
                        return !0;
                      case Jb.BECOME_VISIBLE:
                      default:
                        return !1;
                    }
                  })(a.action, b)
                )
                  return !1;
                b = Nb(a.targetType, a.extractor, b);
                if (null == b) return !1;
                var c = a.value;
                return (
                  null != c &&
                  ((a.extractor !== Z.TOKENIZED_TEXT_V1 &&
                    a.extractor !== Z.TOKENIZED_TEXT_V2) ||
                    (c = c.toLowerCase()),
                  (function (a, b, c) {
                    switch (a) {
                      case Lb.EQUALS:
                        return (
                          b === c ||
                          b.toLowerCase() ===
                            unescape(encodeURIComponent(c)).toLowerCase() ||
                          Qb(b) === c ||
                          Ob(b) === Ob(c)
                        );
                      case Lb.CONTAINS:
                        return null != c && c.includes(b);
                      case Lb.DOMAIN_MATCHES:
                        return Sb(c, b);
                      case Lb.STRING_MATCHES:
                        return null != c && Ib(b, c);
                      default:
                        return !1;
                    }
                  })(a.operator, c, b))
                );
              }
              var Ub = {
                  isMatchESTRule: function (a, b) {
                    var c = a;
                    "string" == typeof a && (c = JSON.parse(a));
                    for (
                      var a = Hb(c, Fb), c = [], d = 0;
                      d < a.conditions.length;
                      d++
                    )
                      c.push(Tb(a.conditions[d], b));
                    switch (a.type) {
                      case Mb.ALL:
                        return !c.includes(!1);
                      case Mb.ANY:
                        return c.includes(!0);
                      case Mb.NONE:
                        return !c.includes(!0);
                    }
                    return !1;
                  },
                  getKeywordsStringFromTextV1: Qb,
                  getKeywordsStringFromTextV2: Rb,
                  domainMatches: Sb,
                },
                Vb = D.coerce;
              a = D.Typed;
              var $ = k.each,
                Wb = k.filter,
                Xb = k.reduce,
                Yb = [
                  "product",
                  "product_group",
                  "vehicle",
                  "automotive_model",
                ],
                Zb = a.objectWithFields({
                  "@context": a.string(),
                  additionalType: a.allowNull(a.string()),
                  offers: a.allowNull(
                    a.objectWithFields({
                      priceCurrency: a.allowNull(a.string()),
                      price: a.allowNull(a.string()),
                    })
                  ),
                  productID: a.allowNull(a.string()),
                  sku: a.allowNull(a.string()),
                  "@type": a.string(),
                }),
                $b = a.objectWithFields({
                  "@context": a.string(),
                  "@type": a.string(),
                  item: Zb,
                }),
                ac = a.objectWithFields({
                  "@context": a.string(),
                  "@type": a.string(),
                  itemListElement: a.array(),
                  totalPrice: a.allowNull(a.string()),
                });
              function bc(a) {
                a = Vb(a, Zb);
                if (null == a) return null;
                var b = "string" == typeof a.productID ? a.productID : null,
                  c = "string" == typeof a.sku ? a.sku : null,
                  d = a.offers,
                  e = null,
                  f = null;
                null != d && ((e = fc(d.price)), (f = d.priceCurrency));
                d =
                  "string" == typeof a.additionalType &&
                  Yb.includes(a.additionalType)
                    ? a.additionalType
                    : null;
                a = [b, c];
                b = {};
                return (
                  (a = Wb(a, function (a) {
                    return null != a;
                  })).length && (b.content_ids = a),
                  null != f && (b.currency = f),
                  null != e && (b.value = e),
                  null != d && (b.content_type = d),
                  [b]
                );
              }
              function cc(a) {
                a = Vb(a, $b);
                return null == a ? null : ec([a.item]);
              }
              function dc(a) {
                a = Vb(a, ac);
                if (null == a) return null;
                var b = "string" == typeof a.totalPrice ? a.totalPrice : null;
                b = fc(b);
                a = ec(a.itemListElement);
                var c = null;
                return (
                  null != a &&
                    a.length > 0 &&
                    (c = Xb(
                      a,
                      function (a, b) {
                        b = b.value;
                        if (null == b) return a;
                        try {
                          b = parseFloat(b);
                          return null == a ? b : a + b;
                        } catch (b) {
                          return a;
                        }
                      },
                      null,
                      !0
                    )),
                  (a = [
                    { value: b },
                    { value: null != c ? c.toString() : null },
                  ].concat(a))
                );
              }
              function ec(a) {
                var b = [];
                return (
                  $(a, function (c) {
                    if (null != a) {
                      var d = "string" == typeof c["@type"] ? c["@type"] : null;
                      if (null !== d) {
                        var e = null;
                        switch (d) {
                          case "Product":
                            e = bc(c);
                            break;
                          case "ItemList":
                            e = dc(c);
                            break;
                          case "ListItem":
                            e = cc(c);
                        }
                        null != e && (b = b.concat(e));
                      }
                    }
                  }),
                  (b = Wb(b, function (a) {
                    return null != a;
                  })),
                  $(b, function (a) {
                    $(Object.keys(a), function (b) {
                      var c = a[b];
                      (Array.isArray(c) && c.length > 0) ||
                        ("string" == typeof c && "" !== c) ||
                        delete a[b];
                    });
                  }),
                  (b = Wb(b, function (a) {
                    return Object.keys(a).length > 0;
                  }))
                );
              }
              function fc(a) {
                if (null == a) return null;
                a = a.replace(/\\u[\dA-F]{4}/gi, function (a) {
                  a = a.replace(/\\u/g, "");
                  a = parseInt(a, 16);
                  return String.fromCharCode(a);
                });
                if (
                  !gc(
                    (a = (function (a) {
                      a = a;
                      if (a.length >= 3) {
                        var b = a.substring(a.length - 3);
                        if (/((\.)(\d)(0)|(\,)(0)(0))/.test(b)) {
                          var c = b.charAt(0),
                            d = b.charAt(1);
                          b = b.charAt(2);
                          "0" !== d && (c += d),
                            "0" !== b && (c += b),
                            1 === c.length && (c = ""),
                            (a = a.substring(0, a.length - 3) + c);
                        }
                      }
                      return a;
                    })(
                      (a = (a = (a = a.replace(/[^\d,\.]/g, "")).replace(
                        /(\.){2,}/g,
                        ""
                      )).replace(/(\,){2,}/g, ""))
                    ))
                  )
                )
                  return null;
                var b = (function (a) {
                  a = a;
                  if (null == a) return null;
                  var b = (function (a) {
                    a = a.replace(/\,/g, "");
                    return ic(hc(a), !1);
                  })(a);
                  a = (function (a) {
                    a = a.replace(/\./g, "");
                    return ic(hc(a.replace(/\,/g, ".")), !0);
                  })(a);
                  if (null == b || null == a)
                    return null != b ? b : null != a ? a : null;
                  var c = a.length;
                  c > 0 && "0" !== a.charAt(c - 1) && (c -= 1);
                  return b.length >= c ? b : a;
                })(a);
                return null == b ? null : gc((a = b)) ? a : null;
              }
              function gc(a) {
                return /\d/.test(a);
              }
              function hc(a) {
                a = a;
                var b = a.indexOf(".");
                return b < 0
                  ? a
                  : (a =
                      a.substring(0, b + 1) +
                      a.substring(b + 1).replace(/\./g, ""));
              }
              function ic(a, b) {
                try {
                  a = parseFloat(a);
                  if ("number" != typeof (c = a) || Number.isNaN(c))
                    return null;
                  c = b ? 3 : 2;
                  return parseFloat(a.toFixed(c)).toString();
                } catch (a) {
                  return null;
                }
                var c;
              }
              var jc = {
                  genCustomData: ec,
                  reduceCustomData: function (a) {
                    if (0 === a.length) return {};
                    var b = Xb(
                      a,
                      function (a, b) {
                        return (
                          $(Object.keys(b), function (c) {
                            var d = b[c],
                              e = a[c];
                            if (null == e) a[c] = d;
                            else if (Array.isArray(e)) {
                              d = Array.isArray(d) ? d : [d];
                              a[c] = e.concat(d);
                            }
                          }),
                          a
                        );
                      },
                      {}
                    );
                    return (
                      $(Object.keys(b), function (a) {
                        b[a], null == b[a] && delete b[a];
                      }),
                      b
                    );
                  },
                  getProductData: bc,
                  getItemListData: dc,
                  getListItemData: cc,
                  genNormalizePrice: fc,
                },
                kc = function (a, b) {
                  var c = a.id,
                    d = a.tagName,
                    f = e(a);
                  d = d.toLowerCase();
                  var g = a.className,
                    h = a.querySelectorAll(R).length,
                    i = null;
                  "A" === a.tagName && a instanceof HTMLAnchorElement && a.href
                    ? (i = a.href)
                    : null != b &&
                      b instanceof HTMLFormElement &&
                      b.action &&
                      (i = b.action),
                    "string" != typeof i && (i = "");
                  b = {
                    classList: g,
                    destination: i,
                    id: c,
                    imageUrl: Oa(a),
                    innerText: f || "",
                    numChildButtons: h,
                    tag: d,
                    type: a.getAttribute("type"),
                  };
                  return (
                    (a instanceof HTMLInputElement ||
                      a instanceof HTMLSelectElement ||
                      a instanceof HTMLTextAreaElement ||
                      a instanceof HTMLButtonElement) &&
                      ((b.name = a.name), (b.value = a.value)),
                    a instanceof HTMLAnchorElement && (b.name = a.name),
                    b
                  );
                },
                lc = function () {
                  var a = g.querySelector("title");
                  return { title: P(a && a.text, 500) };
                },
                mc = function (a, b) {
                  var c = a;
                  c =
                    a.matches ||
                    c.matchesSelector ||
                    c.mozMatchesSelector ||
                    c.msMatchesSelector ||
                    c.oMatchesSelector ||
                    c.webkitMatchesSelector ||
                    null;
                  return null !== c && c.bind(a)(b);
                },
                nc = function (a) {
                  if (a instanceof HTMLInputElement) return a.form;
                  if (mc(a, La)) return null;
                  for (a = t(a); "FORM" !== a.nodeName; ) {
                    var b = t(a.parentElement);
                    if (null == b) return null;
                    a = b;
                  }
                  return a;
                },
                oc = function (a) {
                  return Ka(a).substring(0, 200);
                },
                pc = function (a) {
                  if (
                    null != f.FacebookIWL &&
                    null != f.FacebookIWL.getIWLRoot &&
                    "function" == typeof f.FacebookIWL.getIWLRoot
                  ) {
                    var b = f.FacebookIWL.getIWLRoot();
                    return b && b.contains(a);
                  }
                  return !1;
                },
                qc = k
                  .filter(R.split(Q), function (a) {
                    return "a" !== a;
                  })
                  .join(Q),
                rc = function a(b, c) {
                  if (null == b || !Va(b)) return null;
                  if (mc(b, c ? R : qc)) return b;
                  b = t(b.parentNode);
                  return null != b ? a(b, c) : null;
                };
              c.d(b, "inferredEventsSharedUtils", function () {
                return sc;
              }),
                c.d(b, "getJsonLDForExtractors", function () {
                  return Ea;
                }),
                c.d(b, "getParameterExtractorFromGraphPayload", function () {
                  return Fa;
                }),
                c.d(b, "unicodeSafeTruncate", function () {
                  return P;
                }),
                c.d(b, "signalsGetTextFromElement", function () {
                  return e;
                }),
                c.d(b, "signalsGetTextOrValueFromElement", function () {
                  return Ka;
                }),
                c.d(b, "signalsGetValueFromHTMLElement", function () {
                  return i;
                }),
                c.d(b, "signalsGetButtonImageUrl", function () {
                  return Oa;
                }),
                c.d(b, "signalsIsSaneButton", function () {
                  return Va;
                }),
                c.d(b, "signalsConvertNodeToHTMLElement", function () {
                  return t;
                }),
                c.d(b, "SignalsESTRuleEngine", function () {
                  return Ub;
                }),
                c.d(b, "SignalsESTCustomData", function () {
                  return jc;
                }),
                c.d(b, "signalsExtractButtonFeatures", function () {
                  return kc;
                }),
                c.d(b, "signalsExtractPageFeatures", function () {
                  return lc;
                }),
                c.d(b, "signalsExtractForm", function () {
                  return nc;
                }),
                c.d(b, "signalsGetTruncatedButtonText", function () {
                  return oc;
                }),
                c.d(b, "signalsIsIWLElement", function () {
                  return pc;
                }),
                c.d(b, "signalsGetWrappingButton", function () {
                  return rc;
                });
              var sc = d;
            },
          ]);
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsValidationUtils", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.stringStartsWith,
            c = /^[a-f0-9]{64}$/i,
            d = /^\s+|\s+$/g,
            e = /\s+/g,
            g = /[!\"#\$%&\'\(\)\*\+,\-\.\/:;<=>\?@ \[\\\]\^_`\{\|\}~\s]+/g,
            h = /\W+/g,
            i = /^1\(?\d{3}\)?\d{7}$/,
            j = /^47\d{8}$/,
            l = /^\d{1,4}\(?\d{2,3}\)?\d{4,}$/;
          function m(a) {
            return typeof a === "string" ? a.replace(d, "") : "";
          }
          function n(a) {
            var b =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : "whitespace_only",
              c = "";
            if (typeof a === "string")
              switch (b) {
                case "whitespace_only":
                  c = a.replace(e, "");
                  break;
                case "whitespace_and_punctuation":
                  c = a.replace(g, "");
                  break;
                case "all_non_latin_alpha_numeric":
                  c = a.replace(h, "");
                  break;
              }
            return c;
          }
          function o(a) {
            return typeof a === "string" && c.test(a);
          }
          function p(a) {
            a = String(a)
              .replace(/[\-\s]+/g, "")
              .replace(/^\+?0{0,2}/, "");
            if (b(a, "0")) return !1;
            if (b(a, "1")) return i.test(a);
            return b(a, "47") ? j.test(a) : l.test(a);
          }
          k.exports = {
            isInternationalPhoneNumber: p,
            looksLikeHashed: o,
            strip: n,
            trim: m,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsPixelPIIConstants", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsUtils"),
            b = a.keys;
          a = a.map;
          var c = {
              ct: "ct",
              city: "ct",
              dob: "db",
              dobd: "dobd",
              dobm: "dobm",
              doby: "doby",
              email: "em",
              fn: "fn",
              f_name: "fn",
              gen: "ge",
              ln: "ln",
              l_name: "ln",
              phone: "ph",
              st: "st",
              state: "st",
              zip: "zp",
              zip_code: "zp",
            },
            d = {
              CITY: ["city"],
              DATE: ["date", "dt", "day", "dobd"],
              DOB: ["birth", "bday", "bdate", "bmonth", "byear", "dob"],
              FEMALE: ["female", "girl", "woman"],
              FIRST_NAME: ["firstname", "fn", "fname", "givenname", "forename"],
              GENDER_FIELDS: ["gender", "gen", "sex"],
              GENDER_VALUES: ["male", "boy", "man", "female", "girl", "woman"],
              LAST_NAME: [
                "lastname",
                "ln",
                "lname",
                "surname",
                "sname",
                "familyname",
              ],
              MALE: ["male", "boy", "man"],
              MONTH: ["month", "mo", "mnth", "dobm"],
              NAME: ["name", "fullname"],
              PHONE_NUMBER: ["phone", "mobile", "contact"],
              RESTRICTED: [
                "ssn",
                "unique",
                "cc",
                "card",
                "cvv",
                "cvc",
                "cvn",
                "creditcard",
                "billing",
                "security",
                "social",
                "pass",
              ],
              STATE: ["state", "province"],
              USERNAME: ["username"],
              YEAR: ["year", "yr", "doby"],
              ZIP_CODE: [
                "zip",
                "zcode",
                "pincode",
                "pcode",
                "postalcode",
                "postcode",
              ],
            },
            e =
              /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i,
            g = Object.freeze({ US: "^\\d{5}$" });
          a = a(b(g), function (a) {
            return g[a];
          });
          b = {};
          b["^\\d{1,2}/\\d{1,2}/\\d{4}$"] = ["DD/MM/YYYY", "MM/DD/YYYY"];
          b["^\\d{1,2}-\\d{1,2}-\\d{4}$"] = ["DD-MM-YYYY", "MM-DD-YYYY"];
          b["^\\d{4}/\\d{1,2}/\\d{1,2}$"] = ["YYYY/MM/DD"];
          b["^\\d{4}-\\d{1,2}-\\d{1,2}$"] = ["YYYY-MM-DD"];
          b["^\\d{1,2}/\\d{1,2}/\\d{2}$"] = ["DD/MM/YY", "MM/DD/YY"];
          b["^\\d{1,2}-\\d{1,2}-\\d{2}$"] = ["DD-MM-YY", "MM-DD-YY"];
          b["^\\d{2}/\\d{1,2}/\\d{1,2}$"] = ["YY/MM/DD"];
          b["^\\d{2}-\\d{1,2}-\\d{1,2}$"] = ["YY-MM-DD"];
          var h = [
            "MM-DD-YYYY",
            "MM/DD/YYYY",
            "DD-MM-YYYY",
            "DD/MM/YYYY",
            "YYYY-MM-DD",
            "YYYY/MM/DD",
            "MM-DD-YY",
            "MM/DD/YY",
            "DD-MM-YY",
            "DD/MM/YY",
            "YY-MM-DD",
            "YY/MM/DD",
          ];
          k.exports = {
            EMAIL_REGEX: e,
            POSSIBLE_FEATURE_FIELDS: d,
            PII_KEY_ALIAS_TO_SHORT_CODE: c,
            SIGNALS_FBEVENTS_DATE_FORMATS: h,
            VALID_DATE_REGEX_FORMATS: b,
            ZIP_REGEX_VALUES: a,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsPixelPIIUtils", function () {
      return (function (g, h, i, j) {
        var k = { exports: {} };
        k.exports;
        (function () {
          "use strict";
          var a =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            b = f.getFbeventsModules("SignalsFBEventsNormalizers"),
            c = f.getFbeventsModules("SignalsFBEventsPixelPIISchema"),
            d = f.getFbeventsModules("SignalsFBEventsUtils"),
            e = f.getFbeventsModules("normalizeSignalsFBEventsEmailType"),
            g = f.getFbeventsModules("normalizeSignalsFBEventsPostalCodeType"),
            h = f.getFbeventsModules("normalizeSignalsFBEventsPhoneNumberType"),
            i = f.getFbeventsModules("normalizeSignalsFBEventsStringType"),
            j = i.normalizeName,
            l = i.normalizeCity,
            m = i.normalizeState;
          i = f.getFbeventsModules("SignalsPixelPIIConstants");
          var n = i.EMAIL_REGEX,
            o = i.POSSIBLE_FEATURE_FIELDS,
            p = i.PII_KEY_ALIAS_TO_SHORT_CODE,
            q = i.ZIP_REGEX_VALUES,
            r = d.some,
            s = d.stringIncludes;
          function t(a) {
            var b = a.id,
              c = a.keyword,
              d = a.name,
              e = a.placeholder;
            a = a.value;
            return c.length > 2
              ? s(d, c) || s(b, c) || s(e, c) || s(a, c)
              : d === c || b === c || e === c || a === c;
          }
          function u(a) {
            var b = a.id,
              c = a.keywords,
              d = a.name,
              e = a.placeholder,
              f = a.value;
            return r(c, function (a) {
              return t({
                id: b,
                keyword: a,
                name: d,
                placeholder: e,
                value: f,
              });
            });
          }
          function v(a) {
            return a != null && typeof a === "string" && n.test(a);
          }
          function w(a) {
            var b = a.value,
              c = a.parentElement;
            a = a.previousElementSibling;
            var d = null;
            a instanceof HTMLInputElement
              ? (d = a.value)
              : a instanceof HTMLTextAreaElement && (d = a.value);
            if (d == null || typeof d !== "string") return null;
            if (c == null) return null;
            a = c.innerText != null ? c.innerText : c.textContent;
            if (a == null || a.indexOf("@") < 0) return null;
            c = d + "@" + b;
            return !n.test(c) ? null : c;
          }
          function x(a, b) {
            var c = a.name,
              d = a.id,
              e = a.placeholder;
            a = a.value;
            return (
              (b === "tel" && !(a.length <= 6 && o.ZIP_CODE.includes(d))) ||
              u({ id: d, keywords: o.PHONE_NUMBER, name: c, placeholder: e })
            );
          }
          function y(a) {
            var b = a.name,
              c = a.id;
            a = a.placeholder;
            return u({
              id: c,
              keywords: o.FIRST_NAME,
              name: b,
              placeholder: a,
            });
          }
          function z(a) {
            var b = a.name,
              c = a.id;
            a = a.placeholder;
            return u({ id: c, keywords: o.LAST_NAME, name: b, placeholder: a });
          }
          function A(a) {
            var b = a.name,
              c = a.id;
            a = a.placeholder;
            return (
              u({ id: c, keywords: o.NAME, name: b, placeholder: a }) &&
              !u({ id: c, keywords: o.USERNAME, name: b, placeholder: a })
            );
          }
          function B(a) {
            var b = a.name,
              c = a.id;
            a = a.placeholder;
            return u({ id: c, keywords: o.CITY, name: b, placeholder: a });
          }
          function C(a) {
            var b = a.name,
              c = a.id;
            a = a.placeholder;
            return u({ id: c, keywords: o.STATE, name: b, placeholder: a });
          }
          function D(a, b, c) {
            var d = a.name,
              e = a.id,
              f = a.placeholder;
            a = a.value;
            if ((b === "checkbox" || b === "radio") && c === !0)
              return u({
                id: e,
                keywords: o.GENDER_VALUES,
                name: d,
                placeholder: f,
                value: a,
              });
            else if (b === "text")
              return u({
                id: e,
                keywords: o.GENDER_FIELDS,
                name: d,
                placeholder: f,
              });
            return !1;
          }
          function aa(a, b) {
            var c = a.name;
            a = a.id;
            return (
              (b !== "" &&
                r(q, function (a) {
                  a = b.match(String(a));
                  return a != null && a[0] === b;
                })) ||
              u({ id: a, keywords: o.ZIP_CODE, name: c })
            );
          }
          function E(a) {
            var b = a.name;
            a = a.id;
            return u({ id: a, keywords: o.RESTRICTED, name: b });
          }
          function F(a) {
            return a.trim().toLowerCase().replace(/[_-]/g, "");
          }
          function G(a) {
            return a.trim().toLowerCase();
          }
          function H(a) {
            if (
              r(o.MALE, function (b) {
                return b === a;
              })
            )
              return "m";
            else if (
              r(o.FEMALE, function (b) {
                return b === a;
              })
            )
              return "f";
            return "";
          }
          function I(a) {
            return p[a] !== void 0 ? p[a] : a;
          }
          function J(a, d) {
            a = I(a);
            a = c[a];
            (a == null || a.length === 0) && (a = c["default"]);
            var e = b[a.type];
            if (e == null) return null;
            e = e(d, a.typeParams);
            return e != null && e !== "" ? e : null;
          }
          function K(b, c) {
            var d = c.value,
              f = c instanceof HTMLInputElement && c.checked === !0,
              i = b.name,
              k = b.id,
              n = b.inputType;
            b = b.placeholder;
            i = {
              id: F(i),
              name: F(k),
              placeholder: (b != null && F(b)) || "",
              value: G(d),
            };
            if (E(i) || n === "password" || d === "" || d == null) return null;
            else if (v(i.value)) return { em: e(i.value) };
            else if (w(c) != null) return { em: e(w(c)) };
            else if (y(i)) return { fn: j(i.value) };
            else if (z(i)) return { ln: j(i.value) };
            else if (x(i, n)) return { ph: h(i.value) };
            else if (A(i)) {
              k = i.value.split(" ");
              b = { fn: j(k[0]) };
              k.shift();
              c = { ln: j(k.join(" ")) };
              return a({}, b, c);
            } else if (B(i)) return { ct: l(i.value) };
            else if (C(i)) return { st: m(i.value) };
            else if (n != null && D(i, n, f)) return { ge: H(i.value) };
            else if (aa(i, d)) return { zp: g(i.value) };
            return null;
          }
          k.exports = {
            extractPIIFields: K,
            getNormalizedPIIKey: I,
            getNormalizedPIIValue: J,
          };
        })();
        return k.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEvents.plugins.identity", function () {
      return (function (h, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = f.getFbeventsModules("SignalsFBEventsLogging"),
            b = a.logUserError;
          a = f.getFbeventsModules("SignalsFBEventsPlugin");
          var c = f.getFbeventsModules("SignalsFBEventsUtils");
          c = c.FBSet;
          var d = f.getFbeventsModules("SignalsPixelPIIUtils"),
            h = d.getNormalizedPIIKey,
            l = d.getNormalizedPIIValue,
            m = f.getFbeventsModules("sha256_with_dependencies_new"),
            n = /^[A-Fa-f0-9]{64}$|^[A-Fa-f0-9]{32}$/,
            o =
              /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;
          d = /^\s+|\s+$/g;
          Object.prototype.hasOwnProperty;
          var p = new c(["uid"]);
          function q(a) {
            return !!a && o.test(a);
          }
          function r(a, c) {
            var d = h(a);
            if (c == null || c === "") return null;
            var e = l(d, c);
            if (d === "em" && !q(e)) {
              b({
                key_type: "email address",
                key_val: a,
                type: "PII_INVALID_TYPE",
              });
              throw new Error();
            }
            return e != null && e != "" ? e : c;
          }
          function s(a, c) {
            if (c == null) return null;
            var d = /\[(.*)\]/.exec(a);
            if (d == null) throw new Error();
            d = g(d, 2);
            d = d[1];
            if (p.has(d)) {
              if (q(c)) {
                b({ key: a, type: "PII_UNHASHED_PII" });
                throw new Error();
              }
              return c;
            }
            if (n.test(c)) return c.toLowerCase();
            a = r(d, c);
            return a != null && a != "" ? m(a) : null;
          }
          d = (function (a) {
            k(b, a);
            function b(a) {
              i(this, b);
              var c = j(
                this,
                (b.__proto__ || Object.getPrototypeOf(b)).call(
                  this,
                  function (b) {
                    b.piiTranslator = a;
                  }
                )
              );
              c.piiTranslator = a;
              return c;
            }
            return b;
          })(a);
          c = new d(s);
          e.exports = c;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.identity");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.identity", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.identity", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("signalsFBEventsGetIsAndroid", function () {
      return (function (f, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = f.navigator;
          a = a.userAgent;
          var b = a.indexOf("Android") >= 0;
          function c() {
            return b;
          }
          e.exports = c;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsGetIsAndroidIAW", function () {
      return (function (a, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var b = f.getFbeventsModules("signalsFBEventsGetIsAndroid"),
            c = a.navigator;
          c = c.userAgent;
          var d = c.indexOf("FB_IAB") >= 0,
            g = c.indexOf("Instagram") >= 0,
            h = 0;
          c = c.match(/(FBAV|Instagram)[/\s](\d+)/);
          if (c != null) {
            c = c[0].match(/(\d+)/);
            c != null && (h = parseInt(c[0], 10));
          }
          function i(a, c) {
            var e = b() && (d || g);
            if (!e) return !1;
            if (d && a != null) return a <= h;
            return g && c != null ? c <= h : e;
          }
          e.exports = i;
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEvents.plugins.privacysandbox",
      function () {
        return (function (a, b, c, d) {
          var e = { exports: {} };
          e.exports;
          (function () {
            "use strict";
            var a = f.getFbeventsModules("signalsFBEventsGetIsChrome"),
              c = f.getFbeventsModules("signalsFBEventsGetIsAndroidIAW");
            f.getFbeventsModules("SignalsParamList");
            var d = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
              g = d.GPS_ENDPOINT,
              h = f.getFbeventsModules("signalsFBEventsSendGET"),
              i = f.getFbeventsModules("SignalsFBEventsFiredEvent");
            d = f.getFbeventsModules("SignalsFBEventsPlugin");
            e.exports = new d(function (d, e) {
              if (!a() && !c()) return;
              if (
                b.featurePolicy == null ||
                !b.featurePolicy.allowsFeature("attribution-reporting")
              )
                return;
              i.listen(function (a, b) {
                a = b.get("id");
                if (a == null) return;
                h(b, {
                  ignoreRequestLengthCheck: !0,
                  attributionReporting: !0,
                  url: g,
                });
              });
            });
          })();
          return e.exports;
        })(a, b, c, d);
      }
    );
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.privacysandbox");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.privacysandbox", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.privacysandbox", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("signalsFBEventsGetIwlUrl", function () {
      return (function (a, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var b = f.getFbeventsModules("signalsFBEventsGetTier"),
            c = d();
          function d() {
            try {
              if (a.trustedTypes && a.trustedTypes.createPolicy) {
                var b = a.trustedTypes;
                return b.createPolicy("facebook.com/signals/iwl", {
                  createScriptURL: function (a) {
                    var b = new URL(a);
                    b =
                      b.hostname.endsWith(".facebook.com") &&
                      b.pathname == "/signals/iwl.js";
                    if (!b) throw new Error("Disallowed script URL");
                    return a;
                  },
                });
              }
            } catch (a) {}
            return null;
          }
          e.exports = function (a, d) {
            d = b(d);
            d = d == null ? "www.facebook.com" : "www." + d + ".facebook.com";
            d = "https://" + d + "/signals/iwl.js?pixel_id=" + a;
            if (c != null) return c.createScriptURL(d);
            else return d;
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("signalsFBEventsGetTier", function () {
      return (function (f, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = /^https:\/\/www\.([A-Za-z0-9\.]+)\.facebook\.com\/tr\/?$/,
            b = ["https://www.facebook.com/tr", "https://www.facebook.com/tr/"];
          e.exports = function (c) {
            if (b.indexOf(c) !== -1) return null;
            var d = a.exec(c);
            if (d == null) throw new Error("Malformed tier: " + c);
            return d[1];
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEvents.plugins.iwlbootstrapper",
      function () {
        return (function (a, b, c, d) {
          var e = { exports: {} };
          e.exports;
          (function () {
            "use strict";
            var c = f.getFbeventsModules("SignalsFBEventsIWLBootStrapEvent"),
              d = f.getFbeventsModules("SignalsFBEventsLogging"),
              g = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
              h = f.getFbeventsModules("SignalsFBEventsPlugin"),
              i = f.getFbeventsModules("signalsFBEventsGetIwlUrl"),
              j = f.getFbeventsModules("signalsFBEventsGetTier"),
              k = d.logUserError,
              l = /^https:\/\/.*\.facebook\.com$/i,
              m = "FACEBOOK_IWL_CONFIG_STORAGE_KEY",
              n = null;
            e.exports = new h(function (d, e) {
              try {
                n = a.sessionStorage
                  ? a.sessionStorage
                  : {
                      getItem: function (a) {
                        return null;
                      },
                      removeItem: function (a) {},
                      setItem: function (a, b) {},
                    };
              } catch (a) {
                return;
              }
              function h(c, d) {
                var e = b.createElement("script");
                e.async = !0;
                e.onload = function () {
                  if (!a.FacebookIWL || !a.FacebookIWL.init) return;
                  var b = j(g.ENDPOINT);
                  b != null &&
                    a.FacebookIWL.set &&
                    a.FacebookIWL.set("tier", b);
                  d();
                };
                a.FacebookIWLSessionEnd = function () {
                  n.removeItem(m), a.close();
                };
                e.src = i(c, g.ENDPOINT);
                b.body && b.body.appendChild(e);
              }
              var o = !1,
                p = function (a) {
                  return !!(
                    e &&
                    e.pixelsByID &&
                    Object.prototype.hasOwnProperty.call(e.pixelsByID, a)
                  );
                };
              function q() {
                if (o) return;
                var b = n.getItem(m);
                if (!b) return;
                b = JSON.parse(b);
                var c = b.pixelID,
                  d = b.graphToken,
                  e = b.sessionStartTime;
                o = !0;
                h(c, function () {
                  var b = p(c) ? c.toString() : null;
                  a.FacebookIWL.init(b, d, e);
                });
              }
              function r(b) {
                if (o) return;
                h(b, function () {
                  return a.FacebookIWL.showConfirmModal(b);
                });
              }
              function s(a, b, c) {
                n.setItem(
                  m,
                  JSON.stringify({
                    graphToken: a,
                    pixelID: b,
                    sessionStartTime: c,
                  })
                ),
                  q();
              }
              c.listen(function (b) {
                var c = b.graphToken;
                b = b.pixelID;
                s(c, b);
                a.FacebookIWLSessionEnd = function () {
                  return n.removeItem(m);
                };
              });
              function d(a) {
                var b = a.data,
                  c = b.graphToken,
                  d = b.msg_type,
                  f = b.pixelID;
                b = b.sessionStartTime;
                if (
                  e &&
                  e.pixelsByID &&
                  e.pixelsByID[f] &&
                  e.pixelsByID[f].codeless === "false"
                ) {
                  k({ pixelID: f, type: "SITE_CODELESS_OPT_OUT" });
                  return;
                }
                if (
                  n.getItem(m) ||
                  !l.test(a.origin) ||
                  !(
                    a.data &&
                    (d === "FACEBOOK_IWL_BOOTSTRAP" ||
                      d === "FACEBOOK_IWL_CONFIRM_DOMAIN")
                  )
                )
                  return;
                if (!Object.prototype.hasOwnProperty.call(e.pixelsByID, f)) {
                  a.source.postMessage(
                    "FACEBOOK_IWL_ERROR_PIXEL_DOES_NOT_MATCH",
                    a.origin
                  );
                  return;
                }
                switch (d) {
                  case "FACEBOOK_IWL_BOOTSTRAP":
                    a.source.postMessage(
                      "FACEBOOK_IWL_BOOTSTRAP_ACK",
                      a.origin
                    );
                    s(c, f, b);
                    break;
                  case "FACEBOOK_IWL_CONFIRM_DOMAIN":
                    a.source.postMessage(
                      "FACEBOOK_IWL_CONFIRM_DOMAIN_ACK",
                      a.origin
                    );
                    r(f);
                    break;
                }
              }
              if (n.getItem(m)) {
                q();
                return;
              }
              a.opener && a.addEventListener("message", d);
            });
          })();
          return e.exports;
        })(a, b, c, d);
      }
    );
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.iwlbootstrapper");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.iwlbootstrapper", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.iwlbootstrapper", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("SignalsFBEventsOptTrackingOptions", function () {
      return (function (f, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          e.exports = {
            AUTO_CONFIG_OPT_OUT: 1 << 0,
            AUTO_CONFIG: 1 << 1,
            CONFIG_LOADING: 1 << 2,
            SUPPORTS_DEFINE_PROPERTY: 1 << 3,
            SUPPORTS_SEND_BEACON: 1 << 4,
            HAS_INVALIDATED_PII: 1 << 5,
            SHOULD_PROXY: 1 << 6,
            IS_HEADLESS: 1 << 7,
            IS_SELENIUM: 1 << 8,
            HAS_DETECTION_FAILED: 1 << 9,
            HAS_CONFLICTING_PII: 1 << 10,
            HAS_AUTOMATCHED_PII: 1 << 11,
            FIRST_PARTY_COOKIES: 1 << 12,
            IS_SHADOW_TEST: 1 << 13,
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered("SignalsFBEventsProxyState", function () {
      return (function (f, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var a = !1;
          e.exports = {
            getShouldProxy: function () {
              return a;
            },
            setShouldProxy: function (b) {
              a = b;
            },
          };
        })();
        return e.exports;
      })(a, b, c, d);
    });
    f.ensureModuleRegistered(
      "SignalsFBEvents.plugins.opttracking",
      function () {
        return (function (a, b, c, d) {
          var e = { exports: {} };
          e.exports;
          (function () {
            "use strict";
            var b = f.getFbeventsModules("SignalsFBEventsEvents"),
              c = b.getCustomParameters,
              d = b.piiAutomatched,
              g = b.piiConflicting,
              h = b.piiInvalidated,
              i = f.getFbeventsModules("SignalsFBEventsOptTrackingOptions");
            b = f.getFbeventsModules("SignalsFBEventsPlugin");
            var j = f.getFbeventsModules("SignalsFBEventsProxyState"),
              k = f.getFbeventsModules("SignalsFBEventsUtils"),
              l = k.some,
              m = !1;
            function n() {
              try {
                Object.defineProperty({}, "test", {});
              } catch (a) {
                return !1;
              }
              return !0;
            }
            function o() {
              return !!(a.navigator && a.navigator.sendBeacon);
            }
            function p(a, b) {
              return a ? b : 0;
            }
            var q = ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"],
              r = [
                "__webdriver_evaluate",
                "__selenium_evaluate",
                "__webdriver_script_function",
                "__webdriver_script_func",
                "__webdriver_script_fn",
                "__fxdriver_evaluate",
                "__driver_unwrapped",
                "__webdriver_unwrapped",
                "__driver_evaluate",
                "__selenium_unwrapped",
                "__fxdriver_unwrapped",
              ];
            function s() {
              if (u(q)) return !0;
              var b = l(r, function (b) {
                return a.document[b] ? !0 : !1;
              });
              if (b) return !0;
              b = a.document;
              for (var c in b)
                if (c.match(/\$[a-z]dc_/) && b[c].cache_) return !0;
              if (
                a.external &&
                a.external.toString &&
                a.external.toString().indexOf("Sequentum") >= 0
              )
                return !0;
              if (b.documentElement && b.documentElement.getAttribute) {
                c = l(["selenium", "webdriver", "driver"], function (b) {
                  return a.document.documentElement.getAttribute(b) ? !0 : !1;
                });
                if (c) return !0;
              }
              return !1;
            }
            function t() {
              if (u(["_phantom", "__nightmare", "callPhantom"])) return !0;
              return /HeadlessChrome/.test(a.navigator.userAgent) ? !0 : !1;
            }
            function u(b) {
              b = l(b, function (b) {
                return a[b] ? !0 : !1;
              });
              return b;
            }
            function v() {
              var a = 0,
                b = 0,
                c = 0;
              try {
                (a = p(s(), i.IS_SELENIUM)), (b = p(t(), i.IS_HEADLESS));
              } catch (a) {
                c = i.HAS_DETECTION_FAILED;
              }
              return { hasDetectionFailed: c, isHeadless: b, isSelenium: a };
            }
            k = new b(function (a, b) {
              if (m) return;
              var e = {};
              h.listen(function (a) {
                a != null && (e[typeof a === "string" ? a : a.id] = !0);
              });
              var k = {};
              g.listen(function (a) {
                a != null && (k[typeof a === "string" ? a : a.id] = !0);
              });
              var l = {};
              d.listen(function (a) {
                a != null && (l[typeof a === "string" ? a : a.id] = !0);
              });
              c.listen(function (c) {
                var d = b.optIns,
                  f = p(
                    c != null &&
                      d.isOptedOut(c.id, "AutomaticSetup") &&
                      d.isOptedOut(c.id, "InferredEvents") &&
                      d.isOptedOut(c.id, "Microdata"),
                    i.AUTO_CONFIG_OPT_OUT
                  ),
                  g = p(
                    c != null &&
                      (d.isOptedIn(c.id, "AutomaticSetup") ||
                        d.isOptedIn(c.id, "InferredEvents") ||
                        d.isOptedIn(c.id, "Microdata")),
                    i.AUTO_CONFIG
                  ),
                  h = p(a.disableConfigLoading !== !0, i.CONFIG_LOADING),
                  m = p(n(), i.SUPPORTS_DEFINE_PROPERTY),
                  q = p(o(), i.SUPPORTS_SEND_BEACON),
                  r = p(c != null && k[c.id], i.HAS_CONFLICTING_PII),
                  s = p(c != null && e[c.id], i.HAS_INVALIDATED_PII),
                  t = p(c != null && l[c.id], i.HAS_AUTOMATCHED_PII),
                  u = p(j.getShouldProxy(), i.SHOULD_PROXY),
                  w = p(
                    c != null && d.isOptedIn(c.id, "FirstPartyCookies"),
                    i.FIRST_PARTY_COOKIES
                  );
                d = p(
                  c != null && d.isOptedIn(c.id, "ShadowTest"),
                  i.IS_SHADOW_TEST
                );
                c = v();
                f =
                  f |
                  g |
                  h |
                  m |
                  q |
                  s |
                  u |
                  c.isHeadless |
                  c.isSelenium |
                  c.hasDetectionFailed |
                  r |
                  t |
                  w |
                  d;
                return { o: f };
              });
              m = !0;
            });
            k.OPTIONS = i;
            e.exports = k;
          })();
          return e.exports;
        })(a, b, c, d);
      }
    );
    e.exports = f.getFbeventsModules("SignalsFBEvents.plugins.opttracking");
    f.registerPlugin &&
      f.registerPlugin("fbevents.plugins.opttracking", e.exports);
    f.ensureModuleRegistered("fbevents.plugins.opttracking", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
(function (a, b, c, d) {
  var e = { exports: {} };
  e.exports;
  (function () {
    var f = a.fbq;
    f.execStart = a.performance && a.performance.now && a.performance.now();
    if (
      !(function () {
        var b = a.postMessage || function () {};
        if (!f) {
          b(
            {
              action: "FB_LOG",
              logType: "Facebook Pixel Error",
              logMessage: "Pixel code is not installed correctly on this page",
            },
            "*"
          );
          "error" in console &&
            console.error(
              "Facebook Pixel Error: Pixel code is not installed correctly on this page"
            );
          return !1;
        }
        return !0;
      })()
    )
      return;
    var g = (function () {
      function a(a, b) {
        var c = [],
          d = !0,
          e = !1,
          f = void 0;
        try {
          for (
            var g =
                a[
                  typeof Symbol === "function" ? Symbol.iterator : "@@iterator"
                ](),
              a;
            !(d = (a = g.next()).done);
            d = !0
          ) {
            c.push(a.value);
            if (b && c.length === b) break;
          }
        } catch (a) {
          (e = !0), (f = a);
        } finally {
          try {
            !d && g["return"] && g["return"]();
          } finally {
            if (e) throw f;
          }
        }
        return c;
      }
      return function (b, c) {
        if (Array.isArray(b)) return b;
        else if (
          (typeof Symbol === "function" ? Symbol.iterator : "@@iterator") in
          Object(b)
        )
          return a(b, c);
        else
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
      };
    })();
    function h(a) {
      return Array.isArray(a) ? a : Array.from(a);
    }
    function i(a) {
      if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++) c[b] = a[b];
        return c;
      } else return Array.from(a);
    }
    f.__fbeventsModules ||
      ((f.__fbeventsModules = {}),
      (f.__fbeventsResolvedModules = {}),
      (f.getFbeventsModules = function (a) {
        f.__fbeventsResolvedModules[a] ||
          (f.__fbeventsResolvedModules[a] = f.__fbeventsModules[a]());
        return f.__fbeventsResolvedModules[a];
      }),
      (f.fbIsModuleLoaded = function (a) {
        return !!f.__fbeventsModules[a];
      }),
      (f.ensureModuleRegistered = function (b, a) {
        f.fbIsModuleLoaded(b) || (f.__fbeventsModules[b] = a);
      }));
    f.ensureModuleRegistered("SignalsFBEvents", function () {
      return (function (a, b, c, d) {
        var e = { exports: {} };
        e.exports;
        (function () {
          "use strict";
          var j =
              Object.assign ||
              function (a) {
                for (var b = 1; b < arguments.length; b++) {
                  var c = arguments[b];
                  for (var d in c)
                    Object.prototype.hasOwnProperty.call(c, d) && (a[d] = c[d]);
                }
                return a;
              },
            f = a.fbq;
          f.execStart =
            a.performance && typeof a.performance.now === "function"
              ? a.performance.now()
              : null;
          f.performanceMark = function (b, c) {
            a.performance != null &&
              typeof a.performance.mark === "function" &&
              (c != null
                ? a.performance.mark(b + "_" + c)
                : a.performance.mark(b));
          };
          var k = f.getFbeventsModules("SignalsFBEventsNetworkConfig"),
            l = f.getFbeventsModules("SignalsFBEventsQE"),
            m = f.getFbeventsModules("SignalsParamList"),
            n = f.getFbeventsModules("signalsFBEventsSendEvent"),
            o = f.getFbeventsModules("SignalsFBEventsUtils"),
            p = f.getFbeventsModules("SignalsFBEventsLogging"),
            q = f.getFbeventsModules("SignalsEventValidation"),
            r = f.getFbeventsModules("SignalsFBEventsFBQ"),
            aa = f.getFbeventsModules("SignalsFBEventsJSLoader"),
            s = f.getFbeventsModules("SignalsFBEventsFireLock"),
            t = f.getFbeventsModules("SignalsFBEventsMobileAppBridge"),
            u = f.getFbeventsModules("signalsFBEventsInjectMethod"),
            v = f.getFbeventsModules("signalsFBEventsMakeSafe"),
            ba = f.getFbeventsModules("signalsFBEventsResolveLegacyArguments"),
            ca = f.getFbeventsModules("SignalsFBEventsPluginManager"),
            da = f.getFbeventsModules("signalsFBEventsCoercePixelID"),
            w = f.getFbeventsModules("SignalsFBEventsEvents"),
            x = f.getFbeventsModules("SignalsFBEventsTyped"),
            ea = x.coerce,
            y = x.Typed,
            fa = f.getFbeventsModules("SignalsFBEventsGuardrail"),
            ga = f.getFbeventsModules("SignalsFBEventsModuleEncodings"),
            ha = f.getFbeventsModules("signalsFBEventsDoAutomaticMatching"),
            z = o.each;
          x = o.FBSet;
          var A = o.isEmptyObject,
            ia = o.isPlainObject,
            ja = o.isNumber,
            B = o.keys;
          o = w.execEnd;
          var C = w.fired,
            D = w.getCustomParameters,
            ka = w.iwlBootstrap,
            E = w.piiInvalidated,
            la = w.setIWLExtractors,
            F = w.validateCustomParameters,
            G = w.validateUrlParameters,
            ma = w.setESTRules,
            na = w.setCCRules,
            H = p.logError,
            I = p.logUserError,
            J = s.global,
            K = -1,
            L =
              "b68919aff001d8366249403a2544fba2d833084f1ad22839b6310aadacb6a138",
            M = Array.prototype.slice,
            N = Object.prototype.hasOwnProperty,
            O = c.href,
            P = !1,
            Q = !1,
            R = [],
            S = {},
            T;
          b.referrer;
          var U = { PageView: new x(), PixelInitialized: new x() },
            V = new r(f, S),
            W = new ca(V, J),
            X = new x(["eid"]);
          function Y(a) {
            for (var b in a) N.call(a, b) && (this[b] = a[b]);
            return this;
          }
          function Z() {
            try {
              var a = M.call(arguments);
              if (J.isLocked() && a[0] !== "consent") {
                f.queue.push(arguments);
                return;
              }
              var b = ba(a),
                c = [].concat(i(b.args)),
                d = b.isLegacySyntax,
                e = c.shift();
              switch (e) {
                case "addPixelId":
                  P = !0;
                  $.apply(this, c);
                  break;
                case "init":
                  Q = !0;
                  console.log(c[0] + "init case");

                  $.apply(this, c[0]);
                  break;
                case "set":
                  oa.apply(this, c);
                  break;
                case "track":
                  if (ja(c[0])) {
                    va.apply(this, c);
                    break;
                  }
                  if (d) {
                    sa.apply(this, c);
                    break;
                  }
                  ra.apply(this, c);
                  break;
                case "trackCustom":
                  sa.apply(this, c);
                  break;
                case "trackShopify":
                  ta.apply(this, c);
                  break;
                case "send":
                  wa.apply(this, c);
                  break;
                case "on":
                  var j = h(c),
                    k = j[0],
                    l = j.slice(1),
                    m = w[k];
                  m && m.triggerWeakly(l);
                  break;
                case "loadPlugin":
                  W.loadPlugin(c[0]);
                  break;
                case "dataProcessingOptions":
                  switch (c.length) {
                    case 1:
                      var n = g(c, 1),
                        o = n[0];
                      V.pluginConfig.set(null, "dataProcessingOptions", {
                        dataProcessingOptions: o,
                        dataProcessingCountry: null,
                        dataProcessingState: null,
                      });
                      break;
                    case 3:
                      var p = g(c, 3),
                        q = p[0],
                        r = p[1],
                        aa = p[2];
                      V.pluginConfig.set(null, "dataProcessingOptions", {
                        dataProcessingOptions: q,
                        dataProcessingCountry: r,
                        dataProcessingState: aa,
                      });
                      break;
                    case 4:
                      var s = g(c, 3),
                        t = s[0],
                        u = s[1],
                        v = s[2];
                      V.pluginConfig.set(null, "dataProcessingOptions", {
                        dataProcessingOptions: t,
                        dataProcessingCountry: u,
                        dataProcessingState: v,
                      });
                      break;
                  }
                  break;
                default:
                  V.callMethod(arguments);
                  break;
              }
            } catch (a) {
              H(a);
            }
          }
          function oa(a) {
            for (
              var b = arguments.length, c = Array(b > 1 ? b - 1 : 0), d = 1;
              d < b;
              d++
            )
              c[d - 1] = arguments[d];
            var e = [a].concat(c);
            switch (a) {
              case "endpoint":
                var g = c[0];
                if (typeof g !== "string")
                  throw new Error("endpoint value must be a string");
                k.ENDPOINT = g;
                break;
              case "cdn":
                var h = c[0];
                if (typeof h !== "string")
                  throw new Error("cdn value must be a string");
                aa.CONFIG.CDN_BASE_URL = h;
                break;
              case "releaseSegment":
                var i = c[0];
                if (typeof i !== "string") {
                  I({
                    invalidParamName: "new_release_segment",
                    invalidParamValue: i,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                f._releaseSegment = i;
                break;
              case "autoConfig":
                var j = c[0],
                  m = c[1],
                  n = j === !0 || j === "true" ? "optIn" : "optOut";
                typeof m === "string"
                  ? V.callMethod([n, m, "AutomaticSetup"])
                  : m === void 0
                  ? (V.disableAutoConfig = n === "optOut")
                  : I({
                      invalidParamName: "pixel_id",
                      invalidParamValue: m,
                      method: "set",
                      params: e,
                      type: "INVALID_FBQ_METHOD_PARAMETER",
                    });
                break;
              case "firstPartyCookies":
                var o = c[0],
                  p = c[1],
                  r = o === !0 || o === "true" ? "optIn" : "optOut";
                typeof p === "string"
                  ? V.callMethod([r, p, "FirstPartyCookies"])
                  : p === void 0
                  ? (V.disableFirstPartyCookies = r === "optOut")
                  : I({
                      invalidParamName: "pixel_id",
                      invalidParamValue: p,
                      method: "set",
                      params: e,
                      type: "INVALID_FBQ_METHOD_PARAMETER",
                    });
                break;
              case "experiments":
                l.setExperiments.apply(l, c);
                break;
              case "guardrails":
                fa.setGuardrails.apply(fa, c);
                break;
              case "moduleEncodings":
                ga.setModuleEncodings.apply(ga, c);
                break;
              case "mobileBridge":
                var s = c[0],
                  u = c[1];
                if (typeof s !== "string") {
                  I({
                    invalidParamName: "pixel_id",
                    invalidParamValue: s,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                if (typeof u !== "string") {
                  I({
                    invalidParamName: "app_id",
                    invalidParamValue: u,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                t.registerBridge([s, u]);
                break;
              case "iwlExtractors":
                var v = c[0],
                  ba = c[1];
                la.triggerWeakly({ extractors: ba, pixelID: v });
                break;
              case "estRules":
                var ca = c[0],
                  da = c[1];
                ma.triggerWeakly({ rules: da, pixelID: ca });
                break;
              case "ccRules":
                var w = c[0],
                  x = c[1];
                na.triggerWeakly({ rules: x, pixelID: w });
                break;
              case "startIWLBootstrap":
                var z = c[0],
                  A = c[1];
                ka.triggerWeakly({ graphToken: z, pixelID: A });
                break;
              case "parallelfire":
                var ja = c[0],
                  B = c[1];
                V.pluginConfig.set(ja, "parallelfire", { target: B });
                break;
              case "openbridge":
                var C = c[0],
                  D = c[1];
                C !== null &&
                  D !== null &&
                  typeof C === "string" &&
                  typeof D === "string" &&
                  (V.callMethod(["optIn", C, "OpenBridge"]),
                  V.pluginConfig.set(C, "openbridge", {
                    endpoints: [{ endpoint: D }],
                  }));
                break;
              case "trackSingleOnly":
                var E = c[0],
                  F = c[1],
                  G = ea(E, y["boolean"]()),
                  H = ea(F, y.fbid());
                if (H == null) {
                  I({
                    invalidParamName: "pixel_id",
                    invalidParamValue: F,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                if (G == null) {
                  I({
                    invalidParamName: "on_or_off",
                    invalidParamValue: E,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                var J = q.validateMetadata(a);
                J.error && I(J.error);
                J.warnings &&
                  J.warnings.forEach(function (a) {
                    I(a);
                  });
                N.call(S, H)
                  ? (S[H].trackSingleOnly = G)
                  : I({
                      metadataValue: a,
                      pixelID: H,
                      type: "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID",
                    });
                break;
              case "userData":
                var K = c[0],
                  L = K == null || ia(K);
                if (!L) {
                  I({
                    invalidParamName: "user_data",
                    invalidParamValue: K,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  return;
                }
                for (var M = 0; M < R.length; M++) {
                  var O = R[M],
                    P = V.optIns.isOptedIn(O.id, "AutomaticMatching"),
                    Q = V.optIns.isOptedIn(O.id, "ShopifyAppIntegratedPixel"),
                    T = l.isInTest("process_pii_from_shopify");
                  P && Q && T
                    ? ha(V, O, K)
                    : I({
                        invalidParamName: "pixel_id",
                        invalidParamValue: O.id,
                        method: "set",
                        params: e,
                        type: "INVALID_FBQ_METHOD_PARAMETER",
                      });
                }
                break;
              default:
                var U = V.pluginConfig.getWithGlobalFallback(
                    null,
                    "dataProcessingOptions"
                  ),
                  W = U != null && U.dataProcessingOptions.includes("LDU"),
                  X = c[0],
                  Y = c[1];
                if (typeof a !== "string")
                  throw new Error(
                    "The metadata setting provided in the 'set' call is invalid."
                  );
                if (typeof X !== "string") {
                  if (W) break;
                  I({
                    invalidParamName: "value",
                    invalidParamValue: X,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                if (typeof Y !== "string") {
                  if (W) break;
                  I({
                    invalidParamName: "pixel_id",
                    invalidParamValue: Y,
                    method: "set",
                    params: e,
                    type: "INVALID_FBQ_METHOD_PARAMETER",
                  });
                  break;
                }
                qa(a, X, Y);
                break;
            }
          }
          f._initHandlers = [];
          f._initsDone = {};
          function $(a, b, c) {
            K = K === -1 ? Date.now() : K;
            var d = da(a);
            if (d == null) return;
            var e = b == null || ia(b);
            e ||
              I({
                invalidParamName: "user_data",
                invalidParamValue: b,
                method: "init",
                params: [a, b],
                type: "INVALID_FBQ_METHOD_PARAMETER",
              });
            if (N.call(S, d)) {
              b != null && A(S[d].userData)
                ? ((S[d].userData = e ? b || {} : {}), W.loadPlugin("identity"))
                : I({ pixelID: d, type: "DUPLICATE_PIXEL_ID" });
              return;
            }
            a = {
              agent: c ? c.agent : null,
              eventCount: 0,
              id: d,
              userData: e ? b || {} : {},
              userDataFormFields: {},
            };
            R.push(a);
            S[d] = a;
            b != null && W.loadPlugin("identity");
            V.optIns.isOptedIn(d, "OpenBridge") && W.loadPlugin("openbridge3");
            pa();
            V.loadConfig(d);
          }
          function pa() {
            for (var a = 0; a < f._initHandlers.length; a++) {
              var b = f._initHandlers[a];
              f._initsDone[a] || (f._initsDone[a] = {});
              for (var c = 0; c < R.length; c++) {
                var d = R[c];
                f._initsDone[a][d.id] || ((f._initsDone[a][d.id] = !0), b(d));
              }
            }
          }
          function qa(a, b, c) {
            var d = q.validateMetadata(a);
            d.error && I(d.error);
            d.warnings &&
              d.warnings.forEach(function (a) {
                I(a);
              });
            if (N.call(S, c)) {
              for (var d = 0, e = R.length; d < e; d++)
                if (R[d].id === c) {
                  R[d][a] = b;
                  break;
                }
            } else I({ metadataValue: b, pixelID: c, type: "SET_METADATA_ON_UNINITIALIZED_PIXEL_ID" });
          }
          function ra(a, b, c) {
            (b = b || {}),
              q.validateEventAndLog(a, b),
              a === "CustomEvent" &&
                typeof b.event === "string" &&
                (a = b.event),
              sa.call(this, a, b, c);
          }
          function sa(a, b, c) {
            for (var d = 0, e = R.length; d < e; d++) {
              var f = R[d];
              if (
                !(a === "PageView" && this.allowDuplicatePageViews) &&
                Object.prototype.hasOwnProperty.call(U, a) &&
                U[a].has(f.id)
              )
                continue;
              if (f.trackSingleOnly) continue;
              za({ customData: b, eventData: c, eventName: a, pixel: f });
              Object.prototype.hasOwnProperty.call(U, a) && U[a].add(f.id);
            }
          }
          function ta(a, b, c, d, e) {
            (c = ua(a, c, e)),
              q.validateEventAndLog(b, c),
              b === "CustomEvent" &&
                typeof c.event === "string" &&
                (b = c.event),
              sa.call(this, b, c, d);
          }
          function ua(b, c, d) {
            c = c || {};
            try {
              if (d == null || Object.keys(d).length === 0) return c;
              var e = V.optIns.isOptedIn(b, "ShopifyAppIntegratedPixel");
              if (!e) return c;
              e = a.fbq.instance.pluginConfig.get(b, "gating");
              b = e.gatings.find(function (a) {
                return a.name === "content_type_opt";
              }).passed;
              if (!b) return c;
              e = ea(
                d,
                y.objectWithFields({
                  product_variant_ids: y.arrayOf(y.number()),
                  content_type_favor_variant: y.string(),
                })
              );
              if (e == null) return c;
              c.content_ids = e.product_variant_ids;
              c.content_type = e.content_type_favor_variant;
              return c;
            } catch (a) {
              H(a);
              return c;
            }
          }
          function va(a, b) {
            za({ customData: b, eventName: a, pixel: null });
          }
          function wa(a, b, c) {
            R.forEach(function (c) {
              return za({ customData: b, eventName: a, pixel: c });
            });
          }
          function xa(a) {
            a = a.toLowerCase().trim();
            var b = a.endsWith("@icloud.com");
            a = a.endsWith("@privaterelay.appleid.com");
            if (b) return 2;
            if (a) return 1;
          }
          function ya(a, b, c, d, e) {
            var g = new m(f.piiTranslator);
            try {
              var h = (a && a.userData) || {},
                i = (a && a.userDataFormFields) || {},
                k = {},
                l = {},
                n = void 0,
                o = h.em;
              o != null && xa(o) && ((n = xa(o)), n === 1 && (k.em = L));
              o = i.em;
              o != null && xa(o) && ((n = xa(o)), n === 1 && (l.em = L));
              n != null && g.append("ped", n);
              g.append("ud", j({}, h, k), !0);
              g.append("udff", j({}, i, l), !0);
            } catch (b) {
              E.trigger(a);
            }
            g.append("v", f.version);
            f._releaseSegment && g.append("r", f._releaseSegment);
            g.append("a", a && a.agent ? a.agent : f.agent);
            a && (g.append("ec", a.eventCount), a.eventCount++);
            o = D.trigger(a, b, c, d, e);
            z(o, function (a) {
              return z(B(a), function (b) {
                if (g.containsKey(b)) {
                  if (!X.has(b))
                    throw new Error(
                      "Custom parameter " + b + " has already been specified."
                    );
                } else g.append(b, a[b]);
              });
            });
            g.append("it", K);
            n = a && a.codeless === "false";
            g.append("coo", n);
            h = V.pluginConfig.getWithGlobalFallback(
              a ? a.id : null,
              "dataProcessingOptions"
            );
            if (h != null) {
              k = h.dataProcessingCountry;
              i = h.dataProcessingOptions;
              l = h.dataProcessingState;
              g.append("dpo", i.join(","));
              g.append("dpoco", k);
              g.append("dpost", l);
            }
            return g;
          }
          function za(a) {
            var d = a.customData,
              e = a.eventData,
              f = a.eventName;
            a = a.pixel;
            d = d || {};
            if (a != null && t.pixelHasActiveBridge(a)) {
              t.sendEvent(a, f, d);
              return;
            }
            var g = ya(a, f, d, void 0, e);
            if (e != null) {
              var h = e.eventID;
              e = e.event_id;
              h = h != null ? h : e;
              h == null &&
                (d.event_id != null || d.eventID != null) &&
                p.consoleWarn(
                  "eventID is being sent in the 3rd parameter, it should be in the 4th parameter."
                );
              g.containsKey("eid")
                ? h == null || h.length == 0
                  ? p.logError(
                      new Error("got null or empty eventID from 4th parameter")
                    )
                  : g.replaceEntry("eid", h)
                : g.append("eid", h);
            }
            e = F.trigger(a, d, f);
            z(e, function (a) {
              a != null &&
                z(B(a), function (b) {
                  b != null && g.append(b, a[b]);
                });
            });
            h = c.href;
            e = b.referrer;
            var i = {};
            h != null && (i.dl = h);
            e != null && (i.rl = e);
            A(i) || G.trigger(a, i, f, g);
            n({
              customData: d,
              customParams: g,
              eventName: f,
              id: a ? a.id : null,
              piiTranslator: null,
              documentLink: i.dl ? i.dl : "",
              referrerLink: i.rl ? i.rl : "",
            });
          }
          function Aa() {
            while (f.queue && f.queue.length && !J.isLocked()) {
              var a = f.queue.shift();
              Z.apply(f, a);
            }
          }
          J.onUnlocked(function () {
            Aa();
          });
          f.pixelId && ((P = !0), $(f.pixelId));
          ((P && Q) || a.fbq !== a._fbq) && I({ type: "CONFLICTING_VERSIONS" });
          R.length > 1 && I({ type: "MULTIPLE_PIXELS" });
          function Ba() {
            if (f.disablePushState === !0) return;
            if (!d.pushState || !d.replaceState) return;
            var b = v(function () {
              T = O;
              O = c.href;
              if (O === T) return;
              var a = new Y({ allowDuplicatePageViews: !0 });
              Z.call(a, "trackCustom", "PageView");
            });
            u(d, "pushState", b);
            u(d, "replaceState", b);
            a.addEventListener("popstate", b, !1);
          }
          function Ca() {
            "onpageshow" in a &&
              a.addEventListener("pageshow", function (a) {
                if (a.persisted) {
                  a = new Y({ allowDuplicatePageViews: !0 });
                  Z.call(a, "trackCustom", "PageView");
                }
              });
          }
          C.listenOnce(function () {
            Ba(), Ca();
          });
          function Da(a) {
            f._initHandlers.push(a), pa();
          }
          function Ea() {
            return { pixelInitializationTime: K, pixels: R };
          }
          function Fa(a) {
            (a.instance = V),
              (a.callMethod = Z),
              (a._initHandlers = []),
              (a._initsDone = {}),
              (a.send = wa),
              (a.getEventCustomParameters = ya),
              (a.addInitHandler = Da),
              (a.getState = Ea),
              (a.init = $),
              (a.set = oa),
              (a.loadPlugin = function (a) {
                return W.loadPlugin(a);
              }),
              (a.registerPlugin = function (a, b) {
                W.registerPlugin(a, b);
              });
          }
          Fa(a.fbq);
          Aa();
          e.exports = { doExport: Fa };
          o.trigger();
        })();
        return e.exports;
      })(a, b, c, d);
    });
    e.exports = f.getFbeventsModules("SignalsFBEvents");
    f.registerPlugin && f.registerPlugin("fbevents", e.exports);
    f.ensureModuleRegistered("fbevents", function () {
      return e.exports;
    });
  })();
})(window, document, location, history);
fbq.registerPlugin("global_config", {
  __fbEventsPlugin: 1,
  plugin: function (fbq, instance, config) {
    fbq.loadPlugin("commonincludes");
    fbq.loadPlugin("identity");
    fbq.loadPlugin("privacysandbox");
    fbq.loadPlugin("opttracking");
    fbq.set("experiments", [
      { allocation: 0, code: "c", name: "no_op_exp", passRate: 0.5 },
      { allocation: 0, code: "d", name: "config_dedupe", passRate: 1 },
      {
        allocation: 0,
        code: "e",
        name: "send_fbc_when_no_cookie",
        passRate: 1,
      },
      { allocation: 0, code: "f", name: "send_events_in_batch", passRate: 0 },
      {
        allocation: 0,
        code: "g",
        name: "process_pii_from_shopify",
        passRate: 0,
      },
      {
        allocation: 0,
        code: "h",
        name: "set_fbc_cookie_after_config_load",
        passRate: 1,
      },
      {
        allocation: 0.2,
        code: "i",
        name: "prioritize_send_beacon_in_url",
        passRate: 0.5,
      },
    ]);
    fbq.set("guardrails", [
      {
        name: "no_op",
        code: "a",
        passRate: 1,
        enableForPixels: ["569835061642423"],
      },
    ]);
    fbq.set("moduleEncodings", {
      map: {
        generateUUID: 0,
        SignalsConvertNodeToHTMLElement: 1,
        SignalsEventValidation: 2,
        SignalsFBEventsActionIDConfigTypedef: 3,
        SignalsFBEventsBaseEvent: 4,
        SignalsFBEventsBatcher: 5,
        SignalsFBEventsBrowserPropertiesConfigTypedef: 6,
        SignalsFBEventsBufferConfigTypedef: 7,
        SignalsFBEventsCCRuleEvaluatorConfigTypedef: 8,
        SignalsFBEventsClientHintConfigTypedef: 9,
        SignalsFBEventsClientSidePixelForkingConfigTypedef: 10,
        signalsFBEventsCoerceAutomaticMatchingConfig: 11,
        signalsFBEventsCoerceBatchingConfig: 12,
        signalsFBEventsCoerceInferedEventsConfig: 13,
        signalsFBEventsCoerceParameterExtractors: 14,
        signalsFBEventsCoercePixelID: 15,
        SignalsFBEventsCoercePrimitives: 16,
        signalsFBEventsCoerceStandardParameter: 17,
        SignalsFBEventsConfigLoadedEvent: 18,
        SignalsFBEventsConfigStore: 19,
        SignalsFBEventsCookieConfigTypedef: 20,
        SignalsFBEventsCookieDeprecationLabelConfigTypedef: 21,
        SignalsFBEventsDataProcessingOptionsConfigTypedef: 22,
        SignalsFBEventsDefaultCustomDataConfigTypedef: 23,
        signalsFBEventsDoAutomaticMatching: 24,
        SignalsFBEventsESTRuleEngineConfigTypedef: 25,
        SignalsFBEventsEvents: 26,
        SignalsFBEventsEventValidationConfigTypedef: 27,
        SignalsFBEventsExperimentNames: 28,
        SignalsFBEventsExperimentsTypedef: 29,
        SignalsFBEventsExtractPII: 30,
        SignalsFBEventsFBQ: 31,
        signalsFBEventsFillParamList: 32,
        SignalsFBEventsFilterProtectedModeEvent: 33,
        SignalsFBEventsFiredEvent: 34,
        signalsFBEventsFireEvent: 35,
        SignalsFBEventsFireLock: 36,
        SignalsFBEventsForkEvent: 37,
        SignalsFBEventsGatingConfigTypedef: 38,
        SignalsFBEventsGetAemResultEvent: 39,
        SignalsFBEventsGetCustomParametersEvent: 40,
        signalsFBEventsGetIsChrome: 41,
        signalsFBEventsGetIsIosInAppBrowser: 42,
        SignalsFBEventsGetIWLParametersEvent: 43,
        SignalsFBEventsGetTimingsEvent: 44,
        SignalsFBEventsGetValidUrl: 45,
        SignalsFBEventsGuardrail: 46,
        SignalsFBEventsGuardrailTypedef: 47,
        SignalsFBEventsIABPCMAEBridgeConfigTypedef: 48,
        signalsFBEventsInjectMethod: 49,
        SignalsFBEventsIWLBootStrapEvent: 50,
        SignalsFBEventsJSLoader: 51,
        SignalsFBEventsLateValidateCustomParametersEvent: 52,
        SignalsFBEventsLegacyExperimentGroupsTypedef: 53,
        SignalsFBEventsLogging: 54,
        signalsFBEventsMakeSafe: 55,
        SignalsFBEventsMessageParamsTypedef: 56,
        SignalsFBEventsMicrodataConfigTypedef: 57,
        SignalsFBEventsMobileAppBridge: 58,
        SignalsFBEventsModuleEncodings: 59,
        SignalsFBEventsModuleEncodingsTypedef: 60,
        SignalsFBEventsNetworkConfig: 61,
        SignalsFBEventsOpenBridgeConfigTypedef: 62,
        SignalsFBEventsOptIn: 63,
        SignalsFBEventsParallelFireConfigTypedef: 64,
        SignalsFBEventsPIIAutomatchedEvent: 65,
        SignalsFBEventsPIIConflictingEvent: 66,
        SignalsFBEventsPIIInvalidatedEvent: 67,
        SignalsFBEventsPixelCookie: 68,
        SignalsFBEventsPixelTypedef: 69,
        SignalsFBEventsPlugin: 70,
        SignalsFBEventsPluginLoadedEvent: 71,
        SignalsFBEventsPluginManager: 72,
        SignalsFBEventsProcessCCRulesEvent: 73,
        SignalsFBEventsProhibitedPixelConfigTypedef: 74,
        SignalsFBEventsProhibitedSourcesTypedef: 75,
        SignalsFBEventsProtectedDataModeConfigTypedef: 76,
        SignalsFBEventsQE: 77,
        signalsFBEventsResolveLegacyArguments: 78,
        SignalsFBEventsResolveLink: 79,
        SignalsFBEventsRestrictedDomainsConfigTypedef: 80,
        signalsFBEventsSendBatch: 81,
        signalsFBEventsSendBeacon: 82,
        signalsFBEventsSendBeaconWithParamsInURL: 83,
        SignalsFBEventsSendCloudbridgeEvent: 84,
        signalsFBEventsSendEvent: 85,
        SignalsFBEventsSendEventEvent: 86,
        signalsFBEventsSendFetch: 87,
        signalsFBEventsSendFormPOST: 88,
        signalsFBEventsSendGET: 89,
        signalsFBEventsSendXHR: 90,
        SignalsFBEventsSetCCRules: 91,
        SignalsFBEventsSetESTRules: 92,
        SignalsFBEventsSetEventIDEvent: 93,
        SignalsFBEventsSetFBPEvent: 94,
        SignalsFBEventsSetFilteredEventName: 95,
        SignalsFBEventsSetIWLExtractorsEvent: 96,
        SignalsFBEventsShouldRestrictReferrerEvent: 97,
        SignalsFBEventsStandardParamChecksConfigTypedef: 98,
        SignalsFBEventsTelemetry: 99,
        SignalsFBEventsTyped: 100,
        SignalsFBEventsTypeVersioning: 101,
        SignalsFBEventsUnwantedDataTypedef: 102,
        SignalsFBEventsUnwantedEventNamesConfigTypedef: 103,
        SignalsFBEventsUnwantedEventsConfigTypedef: 104,
        SignalsFBEventsUnwantedParamsConfigTypedef: 105,
        SignalsFBEventsURLUtil: 106,
        SignalsFBEventsUtils: 107,
        SignalsFBEventsValidateCustomParametersEvent: 108,
        SignalsFBEventsValidateGetClickIDFromBrowserProperties: 109,
        SignalsFBEventsValidateUrlParametersEvent: 110,
        SignalsParamList: 111,
        SignalsPixelCookieUtils: 112,
        SignalsFBEvents: 113,
        "SignalsFBEvents.plugins.actionid": 114,
        "[object Object]": 115,
        "SignalsFBEvents.plugins.browserproperties": 116,
        "SignalsFBEvents.plugins.buffer": 117,
        "SignalsFBEvents.plugins.ccruleevaluator": 118,
        "SignalsFBEvents.plugins.clienthint": 119,
        "SignalsFBEvents.plugins.clientsidepixelforking": 120,
        "SignalsFBEvents.plugins.commonincludes": 121,
        "SignalsFBEvents.plugins.cookie": 122,
        "SignalsFBEvents.plugins.cookiedeprecationlabel": 123,
        "SignalsFBEvents.plugins.debug": 124,
        "SignalsFBEvents.plugins.defaultcustomdata": 125,
        "SignalsFBEvents.plugins.estruleengine": 126,
        "SignalsFBEvents.plugins.eventvalidation": 127,
        "SignalsFBEvents.plugins.gating": 128,
        "SignalsFBEvents.plugins.iabpcmaebridge": 129,
        "SignalsFBEvents.plugins.identifyintegration": 130,
        "SignalsFBEvents.plugins.identity": 131,
        "SignalsFBEvents.plugins.inferredevents": 132,
        "SignalsFBEvents.plugins.iwlbootstrapper": 133,
        "SignalsFBEvents.plugins.iwlparameters": 134,
        "SignalsFBEvents.plugins.jsonld_microdata": 135,
        "SignalsFBEvents.plugins.lastexternalreferrer": 136,
        "SignalsFBEvents.plugins.microdata": 137,
        "SignalsFBEvents.plugins.openbridge3": 138,
        "SignalsFBEvents.plugins.openbridgerollout": 139,
        "SignalsFBEvents.plugins.opttracking": 140,
        "SignalsFBEvents.plugins.parallelfire": 141,
        "SignalsFBEvents.plugins.performance": 142,
        "SignalsFBEvents.plugins.privacysandbox": 143,
        "SignalsFBEvents.plugins.prohibitedpixels": 144,
        "SignalsFBEvents.plugins.prohibitedsources": 145,
        "SignalsFBEvents.plugins.protecteddatamode": 146,
        "SignalsFBEvents.plugins.shopifyappintegratedpixel": 147,
        "SignalsFBEvents.plugins.standardparamchecks": 148,
        "SignalsFBEvents.plugins.timespent": 149,
        "SignalsFBEvents.plugins.topicsapi": 150,
        "SignalsFBEvents.plugins.unwanteddata": 151,
        "SignalsFBEvents.plugins.unwantedeventnames": 152,
        "SignalsFBEvents.plugins.unwantedevents": 153,
        "SignalsFBEvents.plugins.unwantedparams": 154,
        "SignalsFBEventsEvents.plugins.aem": 155,
        SignalsFBEventsTimespentTracking: 156,
        "SignalsFBevents.plugins.automaticmatchingforpartnerintegrations": 157,
        cbsdk_fbevents_embed: 158,
        SignalsFBEventsCCRuleEngine: 159,
        SignalsFBEventsESTCustomData: 160,
        SignalsFBEventsESTRuleEngine: 161,
        SignalsFBEventsEnums: 162,
        SignalsFBEventsFbcCombiner: 163,
        SignalsFBEventsFormFieldFeaturesType: 164,
        SignalsFBEventsGetIsAndroidChrome: 165,
        SignalsFBEventsLocalStorageUtils: 166,
        SignalsFBEventsNormalizers: 167,
        SignalsFBEventsOptTrackingOptions: 168,
        SignalsFBEventsPerformanceTiming: 169,
        SignalsFBEventsPixelPIISchema: 170,
        SignalsFBEventsProxyState: 171,
        SignalsFBEventsShared: 172,
        SignalsFBEventsTransformToCCInput: 173,
        SignalsFBEventsTypes: 174,
        SignalsFBEventsValidationUtils: 175,
        SignalsFBEventsWildcardMatches: 176,
        SignalsInteractionUtil: 177,
        SignalsPageVisibilityUtil: 178,
        SignalsPixelClientSideForkingUtils: 179,
        SignalsPixelPIIConstants: 180,
        SignalsPixelPIIUtils: 181,
        generateEventId: 182,
        normalizeSignalsFBEventsEmailType: 183,
        normalizeSignalsFBEventsEnumType: 184,
        normalizeSignalsFBEventsPhoneNumberType: 185,
        normalizeSignalsFBEventsPostalCodeType: 186,
        normalizeSignalsFBEventsStringType: 187,
        sha256_with_dependencies_new: 188,
        signalsFBEventsGetIsAndroid: 189,
        signalsFBEventsGetIsAndroidIAW: 190,
        signalsFBEventsGetIsChromeInclIOS: 191,
        signalsFBEventsGetIsMobileSafari: 192,
        signalsFBEventsGetIwlUrl: 193,
        signalsFBEventsGetTier: 194,
        signalsFBEventsIsHostFacebook: 195,
        signalsFBEventsMakeSafeString: 196,
        signalsFBEventsShouldNotDropCookie: 197,
        SignalsFBEventsAutomaticEventsTypes: 198,
        SignalsFBEventsFeatureCounter: 199,
        SignalsFBEventsThrottler: 200,
        signalsFBEventsCollapseUserData: 201,
        signalsFBEventsElementDoesMatch: 202,
        signalsFBEventsExtractButtonFeatures: 203,
        signalsFBEventsExtractEventPayload: 204,
        signalsFBEventsExtractForm: 205,
        signalsFBEventsExtractFormFieldFeatures: 206,
        signalsFBEventsExtractFromInputs: 207,
        signalsFBEventsExtractPageFeatures: 208,
        signalsFBEventsGetTruncatedButtonText: 209,
        signalsFBEventsGetWrappingButton: 210,
        signalsFBEventsIsIWLElement: 211,
        signalsFBEventsIsSaneAndNotDisabledButton: 212,
        signalsFBEventsValidateButtonEventExtractUserData: 213,
        "babel.config": 214,
        signalsFBEventsCoerceUserData: 215,
        SignalsFBEventsConfigTypes: 216,
        SignalsFBEventsForkCbsdkEvent: 217,
        getDeepStackTrace: 218,
        getIntegrationCandidates: 219,
        signalsFBEventsSendXHRWithRetry: 220,
        FeatureGate: 221,
        OpenBridgeConnection: 222,
        ResolveLinks: 223,
        openBridgeDomainFilter: 224,
        openBridgeGetUserData: 225,
        analytics_debug: 226,
        analytics_ecommerce: 227,
        analytics_enhanced_ecommerce: 228,
        analytics_enhanced_link_attribution: 229,
        analytics_release: 230,
        proxy_polyfill: 231,
        SignalsFBEventsBrowserPropertiesTypedef: 232,
        SignalsFBEventsClientHintTypedef: 233,
        SignalsFBEventsESTRuleConditionTypedef: 234,
        SignalsFBEventsLocalStorageTypedef: 235,
        fbevents_embed: 236,
      },
      hash: "ead923021ccd3483ef3b9b04703d0a78b943fbdc01e8d7cec21c5059f1f4a5e9",
    });
    config.set(null, "batching", { batchWaitTimeMs: 20, maxBatchSize: 10 });
    config.set(null, "microdata", { waitTimeMs: 500 });
    instance.configLoaded("global_config");
  },
});
