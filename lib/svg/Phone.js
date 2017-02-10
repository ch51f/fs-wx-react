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

var Phone = function (_React$Component) {
	_inherits(Phone, _React$Component);

	function Phone() {
		_classCallCheck(this, Phone);

		return _possibleConstructorReturn(this, (Phone.__proto__ || Object.getPrototypeOf(Phone)).apply(this, arguments));
	}

	_createClass(Phone, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#272636",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ viewBox: "-197 320.9 200 200", version: "1.1", width: size, height: size, fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M-729.6,2602.2c-70.7,0-148.2-83.1-165.9-139.2c-11.3-35.7,3-51.9,11.2-57.3 c56.8-47.9,156.9-112.4,195.9-120.6l2.8-0.6l2.8,0.4c22.2,3.2,35.6,18,47.5,31c15.6,17.1,25.8,26.6,47.4,23.5 c6.6-0.9,34.9-12.3,124.6-118.3l38.3-46.2c89.5-110.3,95.2-140.3,94.8-146.8c-1.4-21.7-12.9-29.2-33.2-40.7 c-15.4-8.7-32.9-18.6-40.7-39.2l-1-2.6l0-2.8c0.2-39.2,44-148.5,79.3-211.4c3.9-9.1,15-24.5,45.8-24.5 c62.5,0,171.9,62.1,183.6,135.6c16.6,104.3-54.5,264.4-190.1,428.4l-50.1,60.5c-135.7,163.9-280.8,265.1-388.3,270.6 L-729.6,2602.2L-729.6,2602.2L-729.6,2602.2z" })
				)
			);
		}
	}]);

	return Phone;
}(_react2.default.Component);

exports.default = Phone;