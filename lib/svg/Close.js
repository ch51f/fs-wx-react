"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Close = function (_React$Component) {
	_inherits(Close, _React$Component);

	function Close() {
		_classCallCheck(this, Close);

		return _possibleConstructorReturn(this, (Close.__proto__ || Object.getPrototypeOf(Close)).apply(this, arguments));
	}

	_createClass(Close, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#22A7FB",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ version: "1.1", width: size, height: size, viewBox: "0 0 200 200", fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M512 976.135627c-255.931947 0-464.135627-208.20368-464.135627-464.135627S256.068053 47.864373 512 47.864373 976.135627 256.068053 976.135627 512 767.931947 976.135627 512 976.135627zM512 76.581769c-240.080173 0-435.418231 195.338057-435.418231 435.418231 0 240.137481 195.338057 435.418231 435.418231 435.418231 240.137481 0 435.418231-195.280749 435.418231-435.418231C947.418231 271.919827 752.137481 76.581769 512 76.581769zM703.43191 647.490193 567.884409 512l135.490193-135.490193c15.450618-15.392287 15.450618-40.434814 0-55.884409-15.450618-15.392287-40.434814-15.392287-55.884409 0L512 456.115591l-135.490193-135.490193c-15.392287-15.450618-40.434814-15.450618-55.884409 0-15.392287 15.392287-15.392287 40.434814 0 55.884409L456.115591 512l-135.490193 135.490193c-15.450618 15.450618-15.392287 40.492122 0 55.884409 15.507926 15.450618 40.434814 15.450618 55.941717 0L512.057308 567.827101l135.490193 135.490193c15.392287 15.450618 40.377506 15.392287 55.827101 0C718.767912 687.925007 718.767912 662.940811 703.43191 647.490193L703.43191 647.490193z" })
				)
			);
		}
	}]);

	return Close;
}(_react2.default.Component);

exports.default = Close;
//# sourceMappingURL=Close.js.map