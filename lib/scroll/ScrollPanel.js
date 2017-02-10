'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassCore = require('../utils/ClassCore');

var _ClassCore2 = _interopRequireDefault(_ClassCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Scroll = function (_Component) {
	_inherits(Scroll, _Component);

	function Scroll(props, context) {
		_classCallCheck(this, Scroll);

		var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props, context));

		_this.coord = {
			startX: 0,
			startY: 0,
			endX: 0,
			endY: 0,
			angle: 0,
			translateX: 0,
			translateY: 0,
			maxX: 0,
			maxY: 0
		};
		return _this;
	}

	// 获取scrollpanel 最大偏移量X,Y


	_createClass(Scroll, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var scroll = this.refs.scroll;

			this.coord.maxY = scroll.scrollHeight - scroll.offsetHeight;
			this.coord.maxX = scroll.scrollWidth - scroll.offsetWidth;
		}

		/*
   * touchstart
   * 获取touchstart X,Y
   * 获取toushstart time
   * scroll element removeclass ease
  */

	}, {
		key: '_touchStart',
		value: function _touchStart(e) {
			var touch = e.targetTouches[0];
			var el = this.refs.el;


			this.coord.startX = touch.pageX;
			this.coord.startY = touch.pageY;

			this.touchStartTime = new Date();

			_ClassCore2.default.removeClass(el, 'ease');
		}

		/*
   * touchmove
   * 获取touchend X,Y
   * 现在 endY
   * scroll
  */

	}, {
		key: '_touchMove',
		value: function _touchMove(e) {
			e.preventDefault();

			var touch = e.targetTouches[0];
			var el = this.refs.el;


			this.coord.endX = touch.pageX - this.coord.startX + this.coord.translateX;
			this.coord.endY = touch.pageY - this.coord.startY + this.coord.translateY;

			// this.coord.angle = Math.atan2(Math.abs(touch.pageY - this.coord.startY), Math.abs(touch.pageX - this.coord.startX)) * 180 / Math.PI;

			if (this.coord.endY > 0) {
				this.coord.endY = 0;
			}
			if (this.coord.endY < -this.coord.maxY) {
				this.coord.endY = -this.coord.maxY;
			}

			el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
			el.style.webkitTransform = "translate3d(0," + this.coord.endY + "px,0)";
		}
	}, {
		key: '_touchEnd',
		value: function _touchEnd(e) {
			this.touchEndTime = new Date();
			var timeDif = this.touchEndTime - this.touchStartTime;
			if (timeDif < 300) {
				var more = (300 - timeDif) / 50 * (this.coord.endY - this.coord.translateY);
				this.coord.endY = this.coord.endY + more;
				if (this.coord.endY > 0) {
					this.coord.endY = 0;
				}
				if (this.coord.endY < -this.coord.maxY) {
					this.coord.endY = -this.coord.maxY;
				}
			}
			var el = this.refs.el;

			_ClassCore2.default.addClass(el, 'ease');
			el.style.transform = "translate3d(0," + this.coord.endY + "px,0)";
			el.style.webkitTransform = "translate3d(0," + this.coord.endY + "px,0)";
			this.coord.translateY = this.coord.endY;
		}

		//计算scrollpanel 高宽，最大为screen高宽 

	}, {
		key: '_getStyle',
		value: function _getStyle() {
			var _props = this.props,
			    height = _props.height,
			    width = _props.width;

			if (!height) {
				height = window.screen.height;
			} else if (height > window.screen.height) {
				height = window.screen.height;
			}
			if (!width) {
				width = window.screen.width;
			} else if (height > window.screen.width) {
				width = window.screen.width;
			}
			return { height: height, width: width };
		}
	}, {
		key: 'render',
		value: function render() {
			var children = this.props.children;

			var style = this._getStyle();
			return _react2.default.createElement(
				'div',
				{ ref: 'scroll', style: style, className: 'scroll-panel', onTouchStart: this._touchStart.bind(this), onTouchMove: this._touchMove.bind(this), onTouchEnd: this._touchEnd.bind(this) },
				_react2.default.createElement(
					'div',
					{ ref: 'el', className: 'con' },
					children
				)
			);
		}
	}]);

	return Scroll;
}(_react.Component);

exports.default = Scroll;
//# sourceMappingURL=ScrollPanel.js.map