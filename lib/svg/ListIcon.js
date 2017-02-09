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

var ListIcon = function (_React$Component) {
	_inherits(ListIcon, _React$Component);

	function ListIcon() {
		_classCallCheck(this, ListIcon);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	ListIcon.prototype.render = function render() {
		var color = this.props.color || "#22A7FB",
		    size = (this.props.size || 30) + "px";
		return _react2["default"].createElement(
			"svg",
			{ version: "1.1", width: size, height: size, viewBox: "-197 320.9 200 200", fill: color },
			_react2["default"].createElement(
				"g",
				null,
				_react2["default"].createElement("path", { d: "M-3.6,421.3l-74.6,17.6L-96.9,514l-17.6-74.7l-75.2-18.5l74.7-17.6l18.5-75.3l17.6,74.8L-3.6,421.3z M-101.6,420.6l-13.2-13l-57.3,13H-101.6z M-97.3,495.7v-70.5l-13,13.2L-97.3,495.7z M-82.9,403.6l-12.9-57.3v70.5L-82.9,403.6z M-21.2,421.5h-70.4l13.1,13L-21.2,421.5z" }),
				" "
			)
		);
	};

	return ListIcon;
}(_react2["default"].Component);

exports["default"] = ListIcon;
module.exports = exports['default'];