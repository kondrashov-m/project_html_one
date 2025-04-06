window.tbConfig = {
    "inFrame": false,
    "enableLazyLoading": false,
    "enableJsLazyLoading": false,
    "enableDynamicGoods": true,
    "isPreviewMode": false,
    "hasPromocodes": false,
    "posScriptUrl": "https://forma.tinkoff.ru/static/onlineScript.js",
    "enableMessengerLazyLoading": true,
    "enableCssScrollSnapSlider": true,
    "usePublicSitesOrdersApi": false,
    "enableHolidayDecoration": true,
    "yandexMapsApiKey": "a9eba83c-b342-4dfe-ab11-2c7cbd6839cb",
    "messengerLink": "https://w.tb.ru/open-messenger/widget?wId=W-E40765B09E444A55A145713F9F5DFD44",
    "cartHash": "U2FsdGVkX1/IbYUm6SEkUixjyt9AJRKXJwoj+bBFm447b+JmG1zvyBgQ4WxptkTCi0npzM9UEB8dfIejSkli0ESb98hrTMzOzlKJAyElbrKOARQYmYMblD+nKTCJRSXq",
    "enableSitesCheckoutIntegration": false,
    "staticPath": "https://e26f86a1-a349-40e0-9864-90f0278f7cc5.selcdn.net/tb/0.1.707"
};
window.tbConfig.isExported = true;
window.tbConfig.exportedApiUrl = 'https://a.tb.ru';
window.tbConfig.apiUrl = !window.tbConfig.isExported ? '' : window.tbConfig.exportedApiUrl;
window.tbConfig.isModern = 'noModule' in HTMLScriptElement.prototype;

(function () {
    var n, o = "chrome" in window, e = "InstallTrigger" in window;

    function t(n) {
        var o = document.createElement("script");
        return o.src = "".concat(window.tbConfig.staticPath, "/js/").concat(n),
            window.tbConfig.isModern && (o.type = "module", o.src = o.src.replace(".js", ".modern.js")),
            o.defer = !0,
            o
    }

    function d(n) {
        var o = t(n);
        document.head.appendChild(o)
    }

    window.tbConfig.enableLazyLoading && d("lazy-load.js"),
        "attachShadow" in Element.prototype || d("lit-polyfill-support.js"),
        d("webcomponents-loader.js"),
        o || e || d("smoothscroll.js"),
        n = t("front.js"),
        document.addEventListener("DOMContentLoaded", (function () {
            document.head.appendChild(n)
        }));
})();