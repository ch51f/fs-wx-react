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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 输入框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Textarea = function (_Component) {
	_inherits(Textarea, _Component);

	function Textarea(props, context) {
		_classCallCheck(this, Textarea);

		return _possibleConstructorReturn(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props, context));
	}

	_createClass(Textarea, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    label = _props.label,
			    placeholder = _props.placeholder,
			    cls = _props.cls,
			    height = _props.height,
			    name = _props.name;

			return _react2.default.createElement(
				'div',
				{ className: cls },
				label ? _react2.default.createElement(
					'label',
					{ className: 'label' },
					label
				) : null,
				_react2.default.createElement('textarea', { className: 'textarea', name: name, placeholder: placeholder ? placeholder : null, style: { height: height } })
			);
		}
	}]);

	return Textarea;
}(_react.Component);

Textarea.propTypes = {
	label: _react.PropTypes.string,
	name: _react.PropTypes.string.isRequired,
	placeholder: _react.PropTypes.string,
	cls: _react.PropTypes.string,
	height: _react.PropTypes.number
};

Textarea.defaultProps = {
	cls: 'textarea-inner',
	height: 100
};

exports.default = Textarea;
//# sourceMappingURL=Textarea.js.map