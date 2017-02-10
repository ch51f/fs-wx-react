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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 二维列表封装
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params data [{id:'', name:'', data: [{id:'', name: ''}]}] 显示数据 默认 []
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params isLink 是否是链接 默认 flase
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params isOutLink 是否是内部路由 默认 false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params hideBar 是否显示快速导航 默认 false
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DoubleList = function (_Component) {
	_inherits(DoubleList, _Component);

	function DoubleList() {
		_classCallCheck(this, DoubleList);

		return _possibleConstructorReturn(this, (DoubleList.__proto__ || Object.getPrototypeOf(DoubleList)).apply(this, arguments));
	}

	_createClass(DoubleList, [{
		key: '_renderCell',
		value: function _renderCell(item, key) {
			var _this2 = this;

			return _react2.default.createElement(
				'div',
				{ key: key, className: 'item', ref: item.name },
				_react2.default.createElement(
					'div',
					{ className: 'first' },
					item.name
				),
				item.data.length > 0 ? item.data.map(function (item, key) {
					return _this2._renderSubCell(item, key);
				}) : null
			);
		}
	}, {
		key: '_renderSubCell',
		value: function _renderSubCell(item, key) {
			var isLink = this.props.isLink,
			    url = item.url,
			    isOutLink = this.props.isOutLink;
			return _react2.default.createElement(
				'span',
				{ key: key },
				isLink ? isOutLink ? _react2.default.createElement(
					'a',
					{ className: 'second', href: url },
					item.name
				) : _react2.default.createElement(
					_reactRouter.Link,
					{ className: 'second', to: url },
					item.name
				) : _react2.default.createElement(
					'span',
					{ className: 'second' },
					item.name
				)
			);
		}
	}, {
		key: '_readerShortcut',
		value: function _readerShortcut(item, key) {
			return _react2.default.createElement(
				'a',
				{ key: key, onClick: this._shortcutTo.bind(this, item.name) },
				item.name
			);
		}
	}, {
		key: '_shortcutTo',
		value: function _shortcutTo(name) {
			window.scrollTo(0, this.refs[name].offsetTop);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var data = this.props.data,
			    hideBar = this.props.hideBar;
			return _react2.default.createElement(
				'section',
				{ className: 'double-list' },
				data.map(function (item, key) {
					return _this3._renderCell(item, key);
				}),
				!hideBar ? _react2.default.createElement(
					'div',
					{ className: 'bar' },
					_react2.default.createElement(
						'div',
						null,
						data.map(function (item, key) {
							return _this3._readerShortcut(item, key);
						})
					)
				) : null
			);
		}
	}]);

	return DoubleList;
}(_react.Component);

exports.default = DoubleList;