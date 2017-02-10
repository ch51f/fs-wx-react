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

var ArrowRight = function (_React$Component) {
	_inherits(ArrowRight, _React$Component);

	function ArrowRight() {
		_classCallCheck(this, ArrowRight);

		return _possibleConstructorReturn(this, (ArrowRight.__proto__ || Object.getPrototypeOf(ArrowRight)).apply(this, arguments));
	}

	_createClass(ArrowRight, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#272636",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ viewBox: "0 0 200 200", version: "1.1", width: size, height: size, fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M344.376817 863.278505c-7.953136 0.001023-15.900132-3.070942-21.911032-9.195429-11.876492-12.099572-11.695367-31.53625 0.405229-43.412742l309.435515-303.706023-312.709071-312.710095c-11.989055-11.988032-11.989055-31.425733 0-43.414789 11.988032-11.989055 31.426757-11.989055 43.414789 0l334.621127 334.621127c5.792936 5.791913 9.029654 13.660114 8.991792 21.851681-0.038886 8.191566-3.348258 16.028045-9.195429 21.766746l-331.551208 325.410348C359.903441 860.353896 352.136547 863.278505 344.376817 863.278505z" })
				)
			);
		}
	}]);

	return ArrowRight;
}(_react2.default.Component);

exports.default = ArrowRight;