const APP_NAME = "Litflix";

function closeCookiesBar() {
    console.log("hi");
    window.dispatchEvent(new Event("close-cookies-bar"));
}
