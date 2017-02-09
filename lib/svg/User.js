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

var User = function (_React$Component) {
	_inherits(User, _React$Component);

	function User() {
		_classCallCheck(this, User);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	User.prototype.render = function render() {
		var color = this.props.color || "#272636",
		    size = (this.props.size || 30) + "px";
		return _react2["default"].createElement(
			"svg",
			{ version: "1.1", width: size, height: size, viewBox: "0 0 200 200", fill: color },
			_react2["default"].createElement(
				"g",
				{ transform: "scale(0.1953125, 0.1953125)" },
				_react2["default"].createElement("path", { d: "M116.799258 7.937984 116.799258 7.937984 116.799258 7.937984ZM915.138235 804.578233q0 68.044403-41.388651 107.448558t-110.004589 39.404155l-495.552496 0q-68.600062 0-110.004589-39.404155t-41.388651-107.448558q0-30.053209 1.984496-58.677581t7.937984-61.805147 15.018667-61.51938 24.385488-55.280124 35.149395-45.929178 48.485209-30.338977 63.218109-11.335442q5.096186 0 23.813953 12.192744t42.245953 27.211411 61.233612 27.211411 75.69662 12.192744 75.69662-12.192744 61.233612-27.211411 42.245953-27.211411 23.813953-12.192744q34.593736 0 63.218109 11.335442t48.485209 30.338977 35.149395 45.929178 24.385488 55.280124 15.018667 61.51938 7.937984 61.805147 1.984496 58.677581zM733.691785 298.245953q0 90.159628-63.789643 153.933395t-153.933395 63.789643-153.933395-63.789643-63.789643-153.933395 63.789643-153.933395 153.933395-63.789643 153.933395 63.789643 63.789643 153.933395z" })
			)
		);
	};

	return User;
}(_react2["default"].Component);

exports["default"] = User;
module.exports = exports['default'];