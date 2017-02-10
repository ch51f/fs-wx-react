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

var Grow = function (_React$Component) {
	_inherits(Grow, _React$Component);

	function Grow() {
		_classCallCheck(this, Grow);

		return _possibleConstructorReturn(this, (Grow.__proto__ || Object.getPrototypeOf(Grow)).apply(this, arguments));
	}

	_createClass(Grow, [{
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
					_react2.default.createElement("path", { d: "M932.09687 142.745075c-60.369949-46.442752-197.050911 18.016329-305.284985 143.975089-2.728134 3.175319-5.214768 6.388501-7.853875 9.580193l0-64.48671c0-43.575448-41.869596-78.904071-93.516884-78.904071-51.64831 0-93.516884 35.328623-93.516884 78.904071l0 100.018971c-10.813277-15.112186-22.563902-30.210046-35.369555-45.112454C288.322661 160.761404 151.641699 96.302323 91.270726 142.745075c-60.371996 46.442752-21.571295 186.201819 86.662779 312.161602 83.881432 97.619318 184.701652 158.016897 253.991762 158.76084l0 208.468962c0 43.577494 41.86755 78.904071 93.516884 78.904071 51.646264 0 93.516884-35.326577 93.516884-78.904071L618.959034 610.709139c66.86078-13.532201 153.162332-70.482261 226.476081-155.802462C953.668165 328.946894 992.468866 189.18885 932.09687 142.745075z" })
				)
			);
		}
	}]);

	return Grow;
}(_react2.default.Component);

exports.default = Grow;
//# sourceMappingURL=Grow.js.map