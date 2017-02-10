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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description Alert
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 需要改进
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Alert = function (_Component) {
	_inherits(Alert, _Component);

	function Alert() {
		_classCallCheck(this, Alert);

		return _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).apply(this, arguments));
	}

	_createClass(Alert, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    title = _props.title,
			    message = _props.message,
			    isShow = _props.isShow,
			    handle = _props.handle,
			    btnTxt = _props.btnTxt;

			return _react2.default.createElement(
				"div",
				{ className: "alert-wrap", style: { display: isShow ? "block" : "none" } },
				_react2.default.createElement(
					"div",
					{ className: "head" },
					title
				),
				_react2.default.createElement(
					"div",
					{ className: "con" },
					message
				),
				_react2.default.createElement(
					"div",
					{ className: "foot" },
					_react2.default.createElement(
						"button",
						{ onClick: handle },
						btnTxt
					)
				)
			);
		}
	}]);

	return Alert;
}(_react.Component);

Alert.propTypes = {
	title: _react.PropTypes.string,
	message: _react.PropTypes.string,
	isShow: _react.PropTypes.bool,
	btnTxt: _react.PropTypes.string,
	handle: _react.PropTypes.func.isRequired
};

Alert.defaultProps = {
	title: "系统提示",
	message: "系统提示",
	isShow: true,
	btnTxt: "确定"
};

exports.default = Alert;
//# sourceMappingURL=Alert.js.map