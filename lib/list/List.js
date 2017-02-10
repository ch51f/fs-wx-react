'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ArrowRight = require('../svg/ArrowRight');

var _ArrowRight2 = _interopRequireDefault(_ArrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 列表封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params data [{id:'id', name:'标题', sub:"副标题", url:"链接地址（选填）"}] 显示数据 默认 []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params isLink 是否是链接 默认 flase
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params isOutLink 是否是内部路由 默认 false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var List = function (_Component) {
	_inherits(List, _Component);

	function List() {
		_classCallCheck(this, List);

		return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
	}

	_createClass(List, [{
		key: '_renderItem',
		value: function _renderItem(item) {
			var _props = this.props,
			    isLink = _props.isLink,
			    isOutLink = _props.isOutLink;

			var color = "#ddd";
			if (isLink) {
				if (isOutLink) {
					return _react2.default.createElement(
						'a',
						{ key: item.id, href: item.url, className: 'item link' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							item.name
						),
						_react2.default.createElement(
							'span',
							{ className: 'sub-title' },
							item.sub
						),
						_react2.default.createElement(
							'i',
							{ className: 'icon' },
							_react2.default.createElement(_ArrowRight2.default, { size: '20', color: color })
						)
					);
				} else {
					return _react2.default.createElement(
						_reactRouter.Link,
						{ key: item.id, to: item.url, className: 'item link' },
						_react2.default.createElement(
							'span',
							{ className: 'title' },
							item.name
						),
						_react2.default.createElement(
							'span',
							{ className: 'sub-title' },
							item.sub
						),
						_react2.default.createElement(
							'i',
							{ className: 'icon' },
							_react2.default.createElement(_ArrowRight2.default, { size: '20', color: color })
						)
					);
				}
			} else {
				return _react2.default.createElement(
					'div',
					{ key: item.id, className: 'item' },
					_react2.default.createElement(
						'span',
						{ className: 'title' },
						item.name
					),
					_react2.default.createElement(
						'span',
						{ className: 'sub-title' },
						item.sub
					)
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var data = this.props.data;

			return _react2.default.createElement(
				'section',
				{ className: 'list' },
				data.map(function (item) {
					return _this2._renderItem(item);
				})
			);
		}
	}]);

	return List;
}(_react.Component);

exports.default = List;