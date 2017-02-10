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

var Addition = function (_React$Component) {
	_inherits(Addition, _React$Component);

	function Addition() {
		_classCallCheck(this, Addition);

		return _possibleConstructorReturn(this, (Addition.__proto__ || Object.getPrototypeOf(Addition)).apply(this, arguments));
	}

	_createClass(Addition, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#22A7FB",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ width: size, height: size, viewBox: "0 0 200 200", fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M772.256 549.343h-226.31v226.31c0 20.863-16.898 37.722-37.722 37.722-20.858 0-37.716-16.857-37.716-37.722v-226.31h-226.31c-20.862 0-37.722-16.898-37.722-37.722 0-20.817 16.857-37.715 37.722-37.715h226.31v-226.31c0-20.823 16.857-37.722 37.716-37.722 20.823 0 37.722 16.898 37.722 37.722v226.31h226.31c20.823 0 37.722 16.898 37.722 37.715 0 20.823-16.898 37.723-37.722 37.723z" })
				)
			);
		}
	}]);

	return Addition;
}(_react2.default.Component);

exports.default = Addition;
//# sourceMappingURL=Addition.js.map