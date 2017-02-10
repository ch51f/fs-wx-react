'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Shield = require('../svg/Shield');

var _Shield2 = _interopRequireDefault(_Shield);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 没有权限页面
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params txt  	提示内容 默认 "您没有权限访问该页面，请与管理员联系"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params mobile 	显示电话 默认 ""
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Authority = function (_Component) {
	_inherits(Authority, _Component);

	function Authority() {
		_classCallCheck(this, Authority);

		return _possibleConstructorReturn(this, (Authority.__proto__ || Object.getPrototypeOf(Authority)).apply(this, arguments));
	}

	_createClass(Authority, [{
		key: 'render',
		value: function render() {
			var txt = this.props.txt;

			return _react2.default.createElement(
				'section',
				{ className: 'authority' },
				_react2.default.createElement(
					'div',
					{ className: 'con' },
					_react2.default.createElement(
						'i',
						{ className: 'img' },
						_react2.default.createElement(_Shield2.default, { size: '80', color: '#ff5a5e' })
					),
					_react2.default.createElement(
						'p',
						{ className: 'txt' },
						txt
					)
				)
			);
		}
	}]);

	return Authority;
}(_react.Component);

Authority.propTypes = {
	txt: _react.PropTypes.string
};

Authority.defaultProps = {
	txt: '您没有权限访问该页面，请与管理员联系'
};

exports.default = Authority;