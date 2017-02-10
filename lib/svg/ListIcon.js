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

var ListIcon = function (_React$Component) {
	_inherits(ListIcon, _React$Component);

	function ListIcon() {
		_classCallCheck(this, ListIcon);

		return _possibleConstructorReturn(this, (ListIcon.__proto__ || Object.getPrototypeOf(ListIcon)).apply(this, arguments));
	}

	_createClass(ListIcon, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#22A7FB",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ version: "1.1", width: size, height: size, viewBox: "-197 320.9 200 200", fill: color },
				_react2.default.createElement(
					"g",
					null,
					_react2.default.createElement("path", { d: "M-3.6,421.3l-74.6,17.6L-96.9,514l-17.6-74.7l-75.2-18.5l74.7-17.6l18.5-75.3l17.6,74.8L-3.6,421.3z M-101.6,420.6l-13.2-13l-57.3,13H-101.6z M-97.3,495.7v-70.5l-13,13.2L-97.3,495.7z M-82.9,403.6l-12.9-57.3v70.5L-82.9,403.6z M-21.2,421.5h-70.4l13.1,13L-21.2,421.5z" }),
					" "
				)
			);
		}
	}]);

	return ListIcon;
}(_react2.default.Component);

exports.default = ListIcon;