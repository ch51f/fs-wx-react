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

		return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	}

	DoubleList.prototype._renderCell = function _renderCell(item, key) {
		var _this2 = this;

		return _react2["default"].createElement(
			'div',
			{ key: key, className: 'item', ref: item.name },
			_react2["default"].createElement(
				'div',
				{ className: 'first' },
				item.name
			),
			item.data.length > 0 ? item.data.map(function (item, key) {
				return _this2._renderSubCell(item, key);
			}) : null
		);
	};

	DoubleList.prototype._renderSubCell = function _renderSubCell(item, key) {
		var isLink = this.props.isLink,
		    url = item.url,
		    isOutLink = this.props.isOutLink;
		return _react2["default"].createElement(
			'span',
			{ key: key },
			isLink ? isOutLink ? _react2["default"].createElement(
				'a',
				{ className: 'second', href: url },
				item.name
			) : _react2["default"].createElement(
				_reactRouter.Link,
				{ className: 'second', to: url },
				item.name
			) : _react2["default"].createElement(
				'span',
				{ className: 'second' },
				item.name
			)
		);
	};

	DoubleList.prototype._readerShortcut = function _readerShortcut(item, key) {
		return _react2["default"].createElement(
			'a',
			{ key: key, onClick: this._shortcutTo.bind(this, item.name) },
			item.name
		);
	};

	DoubleList.prototype._shortcutTo = function _shortcutTo(name) {
		window.scrollTo(0, this.refs[name].offsetTop);
	};

	DoubleList.prototype.render = function render() {
		var _this3 = this;

		var data = this.props.data,
		    hideBar = this.props.hideBar;
		return _react2["default"].createElement(
			'section',
			{ className: 'double-list' },
			data.map(function (item, key) {
				return _this3._renderCell(item, key);
			}),
			!hideBar ? _react2["default"].createElement(
				'div',
				{ className: 'bar' },
				_react2["default"].createElement(
					'div',
					null,
					data.map(function (item, key) {
						return _this3._readerShortcut(item, key);
					})
				)
			) : null
		);
	};

	return DoubleList;
}(_react.Component);

exports["default"] = DoubleList;
module.exports = exports['default'];