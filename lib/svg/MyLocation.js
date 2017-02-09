"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var MyLocation = function (_React$Component) {
	_inherits(MyLocation, _React$Component);

	function MyLocation() {
		_classCallCheck(this, MyLocation);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	MyLocation.prototype.render = function render() {
		var color = this.props.color || "#b8b8b8",
		    size = (this.props.size || 30) + "px";
		return _react2["default"].createElement(
			"svg",
			{ width: size, height: size, viewBox: "0 0 200 200", fill: color },
			_react2["default"].createElement(
				"g",
				{ transform: "scale(0.1953125, 0.1953125)" },
				_react2["default"].createElement("path", { d: "M511.997442 348.823594c-89.74293 0-163.173336 73.431429-163.173336 163.17436 0 89.748047 73.430406 163.179476 163.173336 163.179476 89.747024 0 163.17743-73.431429 163.17743-163.179476C675.174871 422.254 601.744465 348.823594 511.997442 348.823594L511.997442 348.823594zM877.106953 471.203852C858.749864 301.909098 722.089367 165.248601 552.794613 146.891512L552.794613 63.264882l-81.591273 0 0 83.626629C301.910633 165.248601 165.24809 301.909098 146.892023 471.203852L63.265394 471.203852l0 81.591273 83.627652 0c18.356067 169.293731 155.017586 305.95525 324.311317 324.31234l0 83.627652 81.591273 0 0-83.627652C722.089367 858.751399 858.749864 722.089879 877.106953 552.795125l83.626629 0 0-81.591273L877.106953 471.203852 877.106953 471.203852zM511.997442 797.556665c-157.052942 0-285.553595-128.500653-285.553595-285.559735 0-157.053965 128.500653-285.553595 285.553595-285.553595 157.057035 0 285.558711 128.499629 285.558711 285.553595C797.556153 669.056012 669.054477 797.556665 511.997442 797.556665L511.997442 797.556665zM511.997442 797.556665" })
			)
		);
	};

	return MyLocation;
}(_react2["default"].Component);

exports["default"] = MyLocation;
module.exports = exports['default'];