"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _f_browser = require("./f_browser");

var _f_browser2 = _interopRequireDefault(_f_browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fixedTitle = function fixedTitle(title) {
    document.title = title;
    if (_f_browser2.default.versions.ios) {
        var iframe = document.createElement("iframe");
        iframe.src = "favicon.ico";
        iframe.addEventListener("load", function () {
            setTimeout(function () {
                iframe.removeEventListener("load", function () {});
                iframe.parentNode.removeChild(iframe);
            }, 0);
        });
        document.body.appendChild(iframe);
    }
};

exports.default = fixedTitle;
//# sourceMappingURL=f_title.js.map