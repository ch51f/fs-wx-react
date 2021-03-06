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

var Contact = function (_React$Component) {
	_inherits(Contact, _React$Component);

	function Contact() {
		_classCallCheck(this, Contact);

		return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
	}

	_createClass(Contact, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#22A7FB",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ version: "1.1", width: size, height: size, viewBox: "0 0 60 60", fill: color },
				_react2.default.createElement("path", { d: "M8.4,25.9h5c1.2,0,1.7-1,1.7-1.7c0-0.7-0.5-1.7-1.7-1.7h-5c-1,0-1.7,0.9-1.7,1.7C6.7,25,7.1,25.9,8.4,25.9 L8.4,25.9L8.4,25.9z M8.4,37.4h5c1.2,0,1.7-1,1.7-1.7c0-0.7-0.5-1.7-1.7-1.7h-5c-1,0-1.7,0.9-1.7,1.7S7.1,37.4,8.4,37.4L8.4,37.4 L8.4,37.4z M50.8,6H13.4c-1.2,0-2.5,1.2-2.5,2.5v0.8h2.5c1.9,0,3.3,1.3,3.3,3.3c0,2-1.4,3.3-3.3,3.3h-2.5v5h2.5 c1.9,0,3.3,1.3,3.3,3.3c0,2-1.4,3.3-3.3,3.3h-2.5v5h2.5c1.9,0,3.3,1.3,3.3,3.3c0,2-1.4,3.3-3.3,3.3h-2.5v5h2.5 c1.9,0,3.3,1.3,3.3,3.3c0,2-1.4,3.3-3.3,3.3h-2.5v0.8c0,1.2,1.2,2.5,2.5,2.5h37.4c1.2,0,2.5-1.2,2.5-2.5v-43C53.3,7.2,52,6,50.8,6 L50.8,6L50.8,6z M44.7,39.5c-0.6,1.2-2.6,3.7-4.6,3.7c-2.2,0-7.4-2.9-11.9-9c-4.1-5.7-6.1-9.9-6.1-12.7c0-2.2,1.5-3.2,2.2-3.8 l0.2-0.2c0.9-0.7,2.2-0.8,2.7-0.8c0.9,0,1.3,0.6,1.6,1c0.2,0.4,1.8,4.1,2,4.5c0.2,0.7,0.2,1.7-0.6,2.3l-0.2,0.1 c-0.4,0.2-1.2,0.8-1.2,1.4c-0.1,0.3,0.1,0.7,0.3,1c1.2,1.7,5.3,7,6,7.6c0.6,0.6,1.3,0.7,1.8,0.2c0.5-0.4,0.7-0.7,0.7-0.7l0.1-0.1 c0.1,0,0.4-0.3,1.1-0.3c0.5,0,0.9,0.2,1.4,0.5c1.2,0.8,4,2.7,4,2.7h0.1C44.8,37.4,45.3,38.4,44.7,39.5L44.7,39.5L44.7,39.5z M8.4,14.3h5c1.2,0,1.7-1,1.7-1.7c0-0.7-0.5-1.7-1.7-1.7h-5c-1,0-1.7,0.9-1.7,1.7C6.7,13.4,7.1,14.3,8.4,14.3L8.4,14.3L8.4,14.3z M15,47.4c0-0.7-0.5-1.7-1.7-1.7h-5c-1,0-1.7,0.9-1.7,1.7S7.1,49,8.4,49h5C14.6,49,15,48,15,47.4L15,47.4L15,47.4z M15,47.4" })
			);
		}
	}]);

	return Contact;
}(_react2.default.Component);

exports.default = Contact;