'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description checkbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Checkbox = function (_Component) {
	_inherits(Checkbox, _Component);

	function Checkbox(props, context) {
		_classCallCheck(this, Checkbox);

		return _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this, props, context));
	}

	_createClass(Checkbox, [{
		key: '_renderCheckbox',
		value: function _renderCheckbox(item, i) {
			var name = this.props.name;

			return _react2.default.createElement(
				'label',
				{ key: i, className: 'checkbox' },
				_react2.default.createElement('input', { type: 'checkbox', name: name, value: item.key }),
				_react2.default.createElement(
					'span',
					{ className: 'checkbox-icon' },
					_react2.default.createElement('i', null)
				),
				_react2.default.createElement(
					'span',
					{ className: 'checkbox-txt' },
					item.val
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    label = _props.label,
			    cls = _props.cls,
			    data = _props.data;

			return _react2.default.createElement(
				'div',
				{ className: cls },
				label ? _react2.default.createElement(
					'label',
					{ className: 'label' },
					label
				) : null,
				_react2.default.createElement(
					'div',
					{ className: 'content' },
					data.map(function (item, index) {
						return _this2._renderCheckbox(item, index);
					})
				)
			);
		}
	}]);

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

exports.default = Checkbox;
//# sourceMappingURL=Checkbox.js.map