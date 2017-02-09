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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description checkbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox(props, context) {
		_classCallCheck(this, Checkbox);

		return _possibleConstructorReturn(this, _Component.call(this, props, context));
	}

	Checkbox.prototype._renderCheckbox = function _renderCheckbox(item, i) {
		var name = this.props.name;

		return _react2["default"].createElement(
			'label',
			{ key: i, className: 'checkbox' },
			_react2["default"].createElement('input', { type: 'checkbox', name: name, value: item.key }),
			_react2["default"].createElement(
				'span',
				{ className: 'checkbox-icon' },
				_react2["default"].createElement('i', null)
			),
			_react2["default"].createElement(
				'span',
				{ className: 'checkbox-txt' },
				item.val
			)
		);
	};

	Checkbox.prototype.render = function render() {
		var _this2 = this;

		var _props = this.props,
		    label = _props.label,
		    cls = _props.cls,
		    data = _props.data;

		return _react2["default"].createElement(
			'div',
			{ className: cls },
			label ? _react2["default"].createElement(
				'label',
				{ className: 'label' },
				label
			) : null,
			_react2["default"].createElement(
				'div',
				{ className: 'content' },
				data.map(function (item, index) {
					return _this2._renderCheckbox(item, index);
				})
			)
		);
	};

	return Checkbox;
}(_react.Component);

Checkbox.propTypes = {
	label: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	cls: _react.PropTypes.string,
	data: _react.PropTypes.arrayOf(_react.PropTypes.object.isRequired).isRequired
};

Checkbox.defaultProps = {
	cls: 'checkbox-box'
};

exports["default"] = Checkbox;
module.exports = exports['default'];