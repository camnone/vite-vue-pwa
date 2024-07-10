export const fullScreenApp = () => {
    try {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    } catch (e) {
        console.log(e);
    }
};