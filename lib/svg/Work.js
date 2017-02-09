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

var Work = function (_React$Component) {
	_inherits(Work, _React$Component);

	function Work() {
		_classCallCheck(this, Work);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Work.prototype.render = function render() {
		var color = this.props.color || "#22A7FB",
		    size = (this.props.size || 30) + "px";
		return _react2["default"].createElement(
			"svg",
			{ version: "1.1", width: size, height: size, viewBox: "0 0 212.5 200", fill: color },
			_react2["default"].createElement(
				"g",
				{ transform: "scale(0.1953125, 0.1953125)" },
				_react2["default"].createElement("path", { d: "M960 384l-64 0L896 369.088c0-168.512-131.392-305.152-293.376-305.152L549.312 63.936C387.328 63.936 256 200.576 256 369.088L256 384 192 384C121.28 384 64 441.28 64 511.936L64 896c0 70.656 57.28 127.936 128 127.936l768 0c70.656 0 128-57.344 128-127.936L1088 511.936C1088 441.28 1030.656 384 960 384zM789.312 384 362.688 384 362.688 369.088c0-107.264 83.584-194.176 186.688-194.176l53.312 0c103.104 0 186.688 86.912 186.688 194.176L789.376 384z" })
			)
		);
	};

	return Work;
}(_react2["default"].Component);

exports["default"] = Work;
module.exports = exports['default'];