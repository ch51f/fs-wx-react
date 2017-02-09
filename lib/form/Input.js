'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 输入框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Input = function (_Component) {
	_inherits(Input, _Component);

	function Input(props, context) {
		_classCallCheck(this, Input);

		return _possibleConstructorReturn(this, _Component.call(this, props, context));
	}

	Input.prototype.render = function render() {
		var _props = this.props,
		    type = _props.type,
		    label = _props.label,
		    placeholder = _props.placeholder,
		    cls = _props.cls,
		    name = _props.name;

		return _react2["default"].createElement(
			'div',
			{ className: cls },
			label ? _react2["default"].createElement(
				'label',
				{ className: 'label' },
				label
			) : null,
			_react2["default"].createElement('input', { className: 'input', type: type ? type : null, name: name, placeholder: placeholder ? placeholder : null })
		);
	};

	return Input;
}(_react.Component);

Input.propTypes = {
	type: _react.PropTypes.string,
	label: _react.PropTypes.string,
	placeholder: _react.PropTypes.string,
	cls: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired
};

Input.defaultProps = {
	cls: 'input-inner'
};

exports["default"] = Input;
module.exports = exports['default'];