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

var Card = function (_React$Component) {
	_inherits(Card, _React$Component);

	function Card() {
		_classCallCheck(this, Card);

		return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
	}

	_createClass(Card, [{
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
					_react2.default.createElement("path", { d: "M844.62 212.276h-665.241c-73.103 0-131.586 58.483-131.586 131.586v332.62c0 73.103 58.483 131.586 131.586 131.586h665.241c73.103 0 131.586-58.483 131.586-131.586v-332.62c3.655-73.103-58.483-131.586-131.586-131.586zM139.173 683.793c7.311-65.793 54.828-116.964 113.31-138.896-32.897-18.276-54.828-54.828-54.828-95.034 0-62.138 47.517-109.655 109.655-109.655 62.138 0 109.655 51.172 109.655 109.655 0 40.207-21.932 76.758-54.828 95.034 58.483 21.932 106 73.103 113.31 138.896h-336.275zM870.207 636.276h-259.517c-7.311 0-14.621-7.311-14.621-14.621 0-7.311 7.311-14.621 14.621-14.621h259.517c7.311 0 14.621 7.311 14.621 14.621 0 7.311-7.311 14.621-14.621 14.621zM625.31 515.655c0-7.311 7.311-14.621 14.621-14.621h193.725c7.311 0 14.621 7.311 14.621 14.621 0 7.311-7.311 14.621-14.621 14.621h-193.725c-7.311 0-14.621-7.311-14.621-14.621zM870.207 424.276h-259.517c-7.311 0-14.621-7.311-14.621-14.621 0-7.311 7.311-14.621 14.621-14.621h259.517c7.311 0 14.621 7.311 14.621 14.621s-7.311 14.621-14.621 14.621z" })
				)
			);
		}
	}]);

	return Card;
}(_react2.default.Component);

exports.default = Card;