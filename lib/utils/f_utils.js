"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _moment = require("moment");

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	isIdCart: function isIdCart(val) {
		var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外 " };
		var valUpperCase = val.toUpperCase(),
		    code = void 0;
		if (this.trim(val) !== val) return false;
		if (!valUpperCase || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(valUpperCase)) {
			if (!/^\d{6}\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}$/i.test(valUpperCase)) {
				return false;
			}
		}
		if (!city[valUpperCase.substr(0, 2)]) {
			return false;
		}
		if (valUpperCase.length == 18) {
			code = valUpperCase.split('');
			var factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
			var parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2];
			var sum = 0;
			var ai = 0;
			var wi = 0;
			for (var i = 0; i < 17; i++) {
				ai = code[i];
				wi = factor[i];
				sum += ai * wi;
			}
			var last = parity[sum % 11];
			if (parity[sum % 11] != code[17]) {
				return false;
			}
		}
		return true;
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

		return (0, _moment2.default)(str).format(type);
	}
};

exports.default = utils;
//# sourceMappingURL=f_utils.js.map