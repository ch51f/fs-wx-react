"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var utils = {
	max_price: 99999999.99,
	isPrice: function isPrice(price) {
		if (isNaN(price)) return false;
		if (parseFloat(price) > this.max_price) return false;
		var re = /^\d+(?:\.\d{1,2})?$|^\d*[.]$/;
		return re.test(price);
	},
	isMobile: function isMobile(num) {
		var re = /^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])(\d{1,8})?$|^1(3|4|5|7|8)$|^1$/;
		return re.test(num);
	},
	isFullMobile: function isFullMobile(num) {
		if (isNaN(num)) return false;
		if (num.toString().length != 11) return false;
		return this.isMobile(num);
	},
	isFullCard: function isFullCard(str) {
		var re = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
		return re.test(str);
	},
	isPercent: function isPercent(percent) {
		if (isNaN(percent)) return false;
		if (parseFloat(percent) > 100) return false;
		var re = /^\d+(?:\.\d{1,2})?$|^\d*[.]$/;
		return re.test(percent);
	},
	trim: function trim(str) {
		return str.replace(/(^\s*)|(\s*$)/g, "");
	},
	turn_date: function turn_date(str) {
		var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "YYYY-MM-DD HH:mm:ss";

		return (0, _moment2["default"])(str).format(type);
	}
};

exports["default"] = utils;
module.exports = exports['default'];