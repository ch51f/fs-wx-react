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

var Point = function (_React$Component) {
	_inherits(Point, _React$Component);

	function Point() {
		_classCallCheck(this, Point);

		return _possibleConstructorReturn(this, (Point.__proto__ || Object.getPrototypeOf(Point)).apply(this, arguments));
	}

	_createClass(Point, [{
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
					_react2.default.createElement("path", { d: "M460.357486 873.892571C436.357486 876.286171 410.964114 877.714286 384 877.714286c-189.750857 0-310.857143-64.963657-310.857143-109.714286 0-0.749714-0.393143-1.393371-0.427886-2.143086 0.036571-0.749714 0.427886-1.393371 0.427886-2.143086L73.142857 695.606857C147.536457 743.107657 268.000914 768 384 768c24.356571 0 48.8576-1.3568 73.142857-3.499886l0-73.106286c-23.071086 2.177829-47.429486 3.465143-73.142857 3.465143-189.750857 0-310.857143-64.963657-310.857143-109.714286l0-72.393143C147.536457 560.250514 268.000914 585.142857 384 585.142857c24.356571 0 48.8576-1.3568 73.142857-3.499886l0-42.821486c0-10.642286 1.892571-20.928 5.357714-30.857143C437.856914 510.464 411.7504 512 384 512c-189.750857 0-310.857143-64.963657-310.857143-109.714286l0-72.393143C147.536457 377.393371 268.000914 402.285714 384 402.285714s236.463543-24.892343 310.857143-72.393143l0 55.535543c17.7152-1.678629 35.964343-2.642286 54.857143-2.642286 6.213486 0 12.214857 0.285257 18.285714 0.464457 0-90.678857 0-162.071771 0-163.821714 0-118.785829-197.856914-182.857143-384-182.857143S0 100.642743 0 219.428571c0 2.8928 0 547.821714 0 548.571429 0 118.785829 197.856914 182.857143 384 182.857143 41.642057 0 83.785143-3.392 124.2496-9.713371C483.322514 921.786514 466.786743 899.000686 460.357486 873.892571zM384 109.714286c189.750857 0 310.857143 64.963657 310.857143 109.714286s-121.106286 109.714286-310.857143 109.714286S73.142857 264.1792 73.142857 219.428571 194.250971 109.714286 384 109.714286zM749.714286 402.285714c-156.357486 0-274.285714 62.893714-274.285714 146.285714l0 292.571429c0 83.392 117.928229 146.285714 274.285714 146.285714s274.285714-62.893714 274.285714-146.285714L1024 548.571429C1024 465.179429 906.071771 402.285714 749.714286 402.285714zM950.857143 841.142857c0 29.1072-80.213943 73.142857-201.142857 73.142857s-201.142857-44.035657-201.142857-73.142857l0-45.035886C597.928229 824.071314 668.536686 841.142857 749.714286 841.142857s151.786057-17.071543 201.142857-45.035886L950.857143 841.142857zM950.857143 694.857143c0 29.1072-80.213943 73.142857-201.142857 73.142857s-201.142857-44.035657-201.142857-73.142857l0-45.035886C597.928229 677.7856 668.536686 694.857143 749.714286 694.857143s151.786057-17.071543 201.142857-45.035886L950.857143 694.857143zM749.714286 621.714286c-120.928914 0-201.142857-44.035657-201.142857-73.142857s80.213943-73.142857 201.142857-73.142857 201.142857 44.035657 201.142857 73.142857S870.6432 621.714286 749.714286 621.714286z" })
				)
			);
		}
	}]);

	return Point;
}(_react2.default.Component);

exports.default = Point;
//# sourceMappingURL=Point.js.map