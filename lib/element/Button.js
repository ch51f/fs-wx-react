'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params children 按钮内部结构
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params type button type=""
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params cls_type 按钮颜色样式
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params disaabled 是否禁用
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params block 是否是块按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params handler 按钮事件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params url 按钮内部链接
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params out_link 按耐外部链接
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Button = function (_Component) {
	_inherits(Button, _Component);

	function Button(props, context) {
		_classCallCheck(this, Button);

		return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props, context));
	}

	_createClass(Button, [{
		key: '_renderButton',
		value: function _renderButton() {
			var _props = this.props,
			    type = _props.type,
			    cls_type = _props.cls_type,
			    disabled = _props.disabled,
			    block = _props.block,
			    children = _props.children,
			    handler = _props.handler,
			    url = _props.url,
			    out_link = _props.out_link,
			    fixed = _props.fixed;

			var btnClass = (0, _classnames2.default)({
				'btn-default': true,
				'btn-primary': cls_type === 'primary',
				'btn-info': cls_type === 'info',
				'btn-warning': cls_type === 'warning',
				'btn-success': cls_type === 'success',
				'btn-emphasize': cls_type === 'emphasize',
				'btn-block': block,
				'btn-disabled': disabled,
				'btn-fixed': fixed
			});

			if (url) {
				if (out_link) {
					return _react2.default.createElement(
						'a',
						{ href: url, className: btnClass },
						children
					);
				} else {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ to: url, className: btnClass },
						children
					);
				}
			} else if (handler) {
				return _react2.default.createElement(
					'button',
					{ type: type, className: btnClass, onClick: handler },
					children
				);
			} else {
				return _react2.default.createElement(
					'button',
					{ type: type, className: btnClass },
					children
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return this._renderButton();
		}
	}]);

	return Button;
}(_react.Component);

Button.propTypes = {
	children: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string,
	cls_type: _react.PropTypes.string.isRequired,
	disabled: _react.PropTypes.bool.isRequired,
	block: _react.PropTypes.bool.isRequired,
	handler: _react.PropTypes.func,
	url: _react.PropTypes.string,
	out_link: _react.PropTypes.bool,
	fixed: _react.PropTypes.bool
};

Button.defaultProps = {
	children: '按钮',
	type: "button",
	cls_type: "",
	disabled: false,
	block: false,
	fixed: false
};

exports.default = Button;
//# sourceMappingURL=Button.js.map