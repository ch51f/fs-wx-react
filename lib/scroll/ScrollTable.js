'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Column = exports.ScrollTable = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ClassCore = require('../utils/ClassCore');

var _ClassCore2 = _interopRequireDefault(_ClassCore);

var _quickSort = require('../utils/quickSort');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 滑动table
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * ScrollTable title 头部左侧名称 fixed [] 头部左侧显示列 fixedWidth 左侧宽度  height 内容区高度 data [] 数据数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Column title 列名 value 数据key width 列宽
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ScrollTable = function (_Component) {
	_inherits(ScrollTable, _Component);

	function ScrollTable(props) {
		_classCallCheck(this, ScrollTable);

		// this.cW = 0; 				//内容区宽度
		// this.cH = 0; 				//内容区高度
		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.startX = 0; //touchstart X值
		_this.startY = 0; //touchstart Y值
		_this.endX = 0; //touchend X值
		_this.endY = 0; //touchend Y值
		_this.transformX = 0; //内容区X偏移量
		_this.transformY = 0; //内容区Y偏移量
		_this.vertical = 0; //是否垂直 默认0 垂直1 水平2
		_this.isTouch = false; //是否touch
		_this.state = {
			top_height: 0, //头部高度
			con_height: 0, //内容区高度
			con_width: 0, //内容区宽度
			con_heights: [], //内容区每行高度
			con_widths: [], //内容区每列宽度
			data: []
		};
		return _this;
	}

	// 初始化前获取内容区总高宽


	ScrollTable.prototype.componentWillMount = function componentWillMount() {
		var self = this;
		var _props = this.props,
		    children = _props.children,
		    data = _props.data,
		    autoWidth = _props.autoWidth,
		    defaultWidth = _props.defaultWidth;


		this.setState({ data: data });
		if (!autoWidth) {
			var con_width = 0;

			children.map(function (item, i) {
				var width = item.props.width;

				con_width += width ? parseFloat(width) : parseFloat(defaultWidth);
			});

			this.setState({ con_width: con_width });
		}
	};

	// 渲染完成后校准高宽


	ScrollTable.prototype.componentDidMount = function componentDidMount() {
		var _refs = this.refs,
		    headT = _refs.headT,
		    headC = _refs.headC,
		    conT = _refs.conT,
		    conC = _refs.conC;


		var top_height = 0,
		    con_height = 0,
		    con_width = 0,
		    con_heights = [],
		    con_widths = [];

		top_height = Math.max(headT.offsetHeight, headC.offsetHeight);

		var conT_trs = conT.getElementsByTagName("tr"),
		    conC_trs = conC.getElementsByTagName("tr"),
		    conC_tds = conC_trs[0].getElementsByTagName("td"),
		    headC_trs = headC.getElementsByTagName("tr"),
		    headC_tds = headC_trs[0].getElementsByTagName("th");

		for (var i = 0; i < conT_trs.length; i++) {
			var temp = Math.max(conT_trs[i].offsetHeight, conC_trs[i].offsetHeight);
			con_heights.push(temp);
			con_height += temp;
		}

		for (var _i = 0; _i < conC_tds.length; _i++) {
			var _temp = Math.max(conC_tds[_i].offsetWidth, headC_tds[_i].offsetWidth);
			con_widths.push(_temp);
			con_width += _temp;
		}

		this.setState({ top_height: top_height, con_height: con_height, con_width: con_width, con_heights: con_heights, con_widths: con_widths });
	};

	// touchstart
	// 获取 touchstart X,Y值，记录touchstarttime, 删除delay Class, 重置vertical


	ScrollTable.prototype._touchStart = function _touchStart(e) {
		e = e ? e : window.event;
		var touch = e.targetTouches[0];
		this.startX = touch.pageX;
		this.startY = touch.pageY;

		this.touchStartTime = new Date();

		this._setTransition("");

		// const {headC, conT, conC} = this.refs;
		// ClassCore.removeClass(headC, 'scroll-delay');
		// ClassCore.removeClass(conT, 'scroll-delay');
		// ClassCore.removeClass(conC, 'scroll-delay');

		this.vertical = 0;
	};

	// touchmove
	// 阻止默认事件，记录touchend X,Y值， 计算角度，获取是否是垂直scroll, 内容区scroll


	ScrollTable.prototype._touchMove = function _touchMove(e) {
		e = e ? e : window.event;
		e.preventDefault();
		var touch = e.targetTouches[0];

		this.endY = touch.pageY - this.startY + this.transformY;
		this.endX = touch.pageX - this.startX + this.transformX;

		if (this.vertical == 0) {
			var angle = Math.atan2(Math.abs(touch.pageY - this.startY), Math.abs(touch.pageX - this.startX)) * 180 / Math.PI;
			this.vertical = angle > 45 ? 1 : 2;
		} else {
			var max = 0;
			if (this.vertical == 1) {
				var height = this.props.height;
				var _state = this.state,
				    con_height = _state.con_height,
				    top_height = _state.top_height;

				height = parseFloat(height) - top_height;
				var con = this.refs.con;

				if (con.offsetHeight < height) return false;
				max = -con_height + parseInt(height);
				this.endX = this.transformX;
				if (this.endY > 0) {
					this.endY = 0;
				} else if (this.endY < max) {
					this.endY = max;
				}
				this._transformY(this.endY);
			} else if (this.vertical == 2) {
				var con_width = this.state.con_width;
				var fixedWidth = this.props.fixedWidth;

				max = -con_width + document.documentElement.offsetWidth - fixedWidth;
				this.endY = this.transformY;
				if (this.endX > 0) {
					this.endX = 0;
				} else if (this.endX < max) {
					this.endX = max;
				}
				this._transformX(this.endX);
			}
		}
	};

	// touchend
	// 获取touchengtime, 添加 delay class，判断时候有delay偏移，计算偏移X,Y


	ScrollTable.prototype._touchEnd = function _touchEnd(e) {
		this.touchEndTime = new Date();
		var timeDif = this.touchEndTime - this.touchStartTime;
		var more = 0;

		// const {headC, conT, conC} = this.refs;
		// ClassCore.addClass(headC, 'scroll-delay');
		// ClassCore.addClass(conT, 'scroll-delay');
		// ClassCore.addClass(conC, 'scroll-delay');

		if (timeDif < 300 && this.vertical != 0) {
			if (this.vertical == 1) {
				var _state2 = this.state,
				    con_height = _state2.con_height,
				    top_height = _state2.top_height;
				var height = this.props.height;

				height = parseFloat(height) - top_height;
				var con = this.refs.con;

				if (con.offsetHeight < height) return false;
				more = (300 - timeDif) / 50 * (this.endY - this.transformY);
				this.endY = this.endY + more;
				if (this.endY > 0) {
					this.endY = 0;
				}
				if (this.endY < -con_height + parseInt(height)) {
					this.endY = -con_height + parseInt(height);
				}
				if (Math.abs(more) > 500) {
					this._setTransition("transform 0.5s ease-out 0s");
				} else {
					this._setTransition("transform 0.2s ease-out 0s");
				}
			} else {
				var con_width = this.state.con_width;
				var fixedWidth = this.props.fixedWidth;

				more = (300 - timeDif) / 50 * (this.endX - this.transformX);
				this.endX = this.endX + more;
				if (this.endX > 0) {
					this.endX = 0;
				}
				if (this.endX < -con_width + document.documentElement.offsetWidth - fixedWidth) {
					this.endX = -con_width + document.documentElement.offsetWidth - fixedWidth;
				}
				if (Math.abs(more) > 500) {
					this._setTransition("transform 0.5s ease-out 0s");
				} else {
					this._setTransition("transform 0.2s ease-out 0s");
				}
			}
		} else {
			if (this.vertical == 1) {
				var _top_height = this.state.top_height;
				var _height = this.props.height;

				_height = parseFloat(_height) - _top_height;
				var _con = this.refs.con;

				if (_con.offsetHeight < _height) return false;
			}
		}
		if (this.vertical == 1) {
			this.transformY = this.endY;
			this._transformY(this.endY);
		} else {
			this.transformX = this.endX;
			this._transformX(this.endX);
		}
	};

	// X 偏移


	ScrollTable.prototype._transformX = function _transformX(x) {
		var _refs2 = this.refs,
		    headC = _refs2.headC,
		    conT = _refs2.conT,
		    conC = _refs2.conC;

		headC.style.transform = "translate3d(" + x + "px," + 0 + "px,0)";
		conT.style.transform = "translate3d(0," + this.transformY + "px,0)";
		conC.style.transform = "translate3d(" + x + "px," + this.transformY + "px,0)";
		headC.style.webkitTransform = "translate3d(" + x + "px," + 0 + "px,0)";
		conT.style.webkitTransform = "translate3d(0," + this.transformY + "px,0)";
		conC.style.webkitTransform = "translate3d(" + x + "px," + this.transformY + "px,0)";
	};

	// Y 偏移


	ScrollTable.prototype._transformY = function _transformY(y) {
		var _refs3 = this.refs,
		    headC = _refs3.headC,
		    conT = _refs3.conT,
		    conC = _refs3.conC;

		headC.style.transform = "translate3d(" + this.transformX + "px,0,0)";
		conT.style.transform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.transform = "translate3d(" + this.transformX + "px," + y + "px,0)";
		headC.style.webkitTransform = "translate3d(" + this.transformX + "px,0,0)";
		conT.style.webkitTransform = "translate3d(" + 0 + "px," + y + "px,0)";
		conC.style.webkitTransform = "translate3d(" + this.transformX + "px," + y + "px,0)";
	};

	ScrollTable.prototype._setTransition = function _setTransition(val) {
		var _refs4 = this.refs,
		    headC = _refs4.headC,
		    conT = _refs4.conT,
		    conC = _refs4.conC;

		headC.style.transition = val;
		conT.style.transition = val;
		conC.style.transition = val;
		headC.style.webkitTransition = "-webkit-" + val;
		conT.style.webkitTransition = "-webkit-" + val;
		conC.style.webkitTransition = "-webkit-" + val;
	};

	// headT


	ScrollTable.prototype._renderHeadTh = function _renderHeadTh(col, i) {
		var _props2 = this.props,
		    autoWidth = _props2.autoWidth,
		    defaultWidth = _props2.defaultWidth,
		    sort = _props2.sort;
		var _col$props = col.props,
		    title = _col$props.title,
		    value = _col$props.value,
		    width = _col$props.width,
		    children = _col$props.children,
		    colspan = _col$props.colspan,
		    colName = _col$props.colName;
		var _state3 = this.state,
		    top_height = _state3.top_height,
		    con_widths = _state3.con_widths;

		var cls = "column";
		var cols_width = con_widths[i];
		var sort_flag = sort;
		if (colspan && colspan > 1) {
			for (var j = 1; j < colspan; j++) {
				cols_width += con_widths[i + j];
			}
		}
		if (autoWidth) {
			return _react2["default"].createElement(
				'th',
				{ key: i, className: cls, style: { height: top_height, width: con_widths[i] }, onClick: sort_flag ? this._sort.bind(this, value, i) : null },
				colName ? _react2["default"].createElement(
					'p',
					{ className: 'cols', style: { width: cols_width } },
					colName
				) : null,
				children ? children : title
			);
		} else {
			return _react2["default"].createElement(
				'th',
				{ key: i, className: cls, style: { height: top_height, width: width ? width : defaultWidth }, onClick: sort_flag ? this._sort.bind(this, value, i) : null },
				colName ? _react2["default"].createElement(
					'p',
					{ className: 'cols', style: { width: cols_width } },
					colName
				) : null,
				children ? children : title
			);
		}
	};

	ScrollTable.prototype._sort = function _sort(key, index) {
		// let {sortHandle} = this.props;
		var _refs5 = this.refs,
		    headC = _refs5.headC,
		    conC = _refs5.conC;
		var _state4 = this.state,
		    data = _state4.data,
		    con_heights = _state4.con_heights;

		var conC_trs = conC.getElementsByTagName("tr"),
		    headC_trs = headC.getElementsByTagName("tr"),
		    headC_tds = headC_trs[0].getElementsByTagName("th");
		if (_ClassCore2["default"].hasClass(headC_tds[index], 'active')) return false;
		for (var i = 0; i < headC_tds.length; i++) {
			if (index == i) {
				_ClassCore2["default"].addClass(headC_tds[i], 'active');
			} else {
				_ClassCore2["default"].removeClass(headC_tds[i], 'active');
			}
		}
		for (var _i2 = 0; _i2 < conC_trs.length; _i2++) {
			var conC_tds = conC_trs[_i2].getElementsByTagName("td");
			for (var j = 0; j < conC_tds.length; j++) {
				if (index == j) {
					_ClassCore2["default"].addClass(conC_tds[j], 'active');
				} else {
					_ClassCore2["default"].removeClass(conC_tds[j], 'active');
				}
			}
		}
		for (var _i3 = 0; _i3 < con_heights.length; _i3++) {
			data[_i3].height = con_heights[_i3];
		}
		data = (0, _quickSort.quickSortObj)(data, key);
		for (var _i4 = 0; _i4 < con_heights.length; _i4++) {
			con_heights[_i4] = data[_i4].height;
		}
		this.setState({ data: data, con_heights: con_heights });
	};

	// conT


	ScrollTable.prototype._renderFixedTitle = function _renderFixedTitle(row, i) {
		var _this2 = this;

		var values = this.props.values;

		var data = [];
		values.map(function (item) {
			data.push(row[item]);
		});
		return _react2["default"].createElement(
			'tr',
			{ key: i },
			data.map(function (col) {
				return _this2._renderFixedTitleCol(col, i, row);
			})
		);
	};
	// conT内容


	ScrollTable.prototype._renderFixedTitleCol = function _renderFixedTitleCol(col, i, row) {
		var con_heights = this.state.con_heights;

		return _react2["default"].createElement(
			'td',
			{ key: i, className: 'break-wrap', onClick: this._cb.bind(this, row), style: { height: con_heights[i] } },
			col
		);
	};

	ScrollTable.prototype._cb = function _cb(record, e) {
		this.props.cb(record);
	};

	// conC


	ScrollTable.prototype._renderCon = function _renderCon(row, i) {
		var _this3 = this;

		var _props3 = this.props,
		    children = _props3.children,
		    autoWidth = _props3.autoWidth,
		    defaultWidth = _props3.defaultWidth;

		var data = [];
		children.map(function (item) {
			var temp = { value: "" };
			temp.width = item.props.width ? parseInt(item.props.width) : defaultWidth;
			if (row.hasOwnProperty(item.props.value)) {
				temp.value = row[item.props.value];
			}
			data.push(temp);
		});
		return _react2["default"].createElement(
			'tr',
			{ key: i },
			data.map(function (col, j) {
				return _this3._renderConCol(col, j, i);
			})
		);
	};
	// conC内容


	ScrollTable.prototype._renderConCol = function _renderConCol(col, i, j) {
		var autoWidth = this.props.autoWidth;
		var _state5 = this.state,
		    con_heights = _state5.con_heights,
		    con_widths = _state5.con_widths;

		if (autoWidth) {
			return _react2["default"].createElement(
				'td',
				{ key: i, style: { height: con_heights[j], width: con_widths[i] } },
				col.value
			);
		} else {
			return _react2["default"].createElement(
				'td',
				{ key: i, style: { height: con_heights[j], width: col.width } },
				col.value
			);
		}
	};

	ScrollTable.prototype.render = function render() {
		var _this4 = this;

		var _props4 = this.props,
		    title = _props4.title,
		    children = _props4.children,
		    fixedWidth = _props4.fixedWidth,
		    height = _props4.height,
		    autoWidth = _props4.autoWidth;
		var _state6 = this.state,
		    top_height = _state6.top_height,
		    con_height = _state6.con_height,
		    con_width = _state6.con_width,
		    data = _state6.data;

		height = parseFloat(height) - top_height;
		var headTStyle = {
			width: fixedWidth
		};
		if (top_height > 0) {
			headTStyle.height = top_height;
			headTStyle.lineHeight = top_height + "px";
		}
		var cls = autoWidth ? "scroll-table no-wrap" : "scroll-table";
		return _react2["default"].createElement(
			'div',
			{ className: cls, ref: 'scroll', onTouchStart: this._touchStart.bind(this), onTouchMove: this._touchMove.bind(this), onTouchEnd: this._touchEnd.bind(this) },
			_react2["default"].createElement(
				'div',
				{ className: 'head' },
				_react2["default"].createElement(
					'div',
					{ className: 'fixed-name', ref: 'headT', style: headTStyle },
					title
				),
				_react2["default"].createElement(
					'div',
					{ className: 'panel', style: { paddingLeft: fixedWidth } },
					_react2["default"].createElement(
						'table',
						{ className: 'columns', ref: 'headC', style: { width: con_width } },
						_react2["default"].createElement(
							'tbody',
							null,
							_react2["default"].createElement(
								'tr',
								null,
								children.map(function (col, i) {
									return _this4._renderHeadTh(col, i);
								})
							)
						)
					)
				)
			),
			_react2["default"].createElement(
				'div',
				{ className: 'content', ref: 'con', style: { maxHeight: height } },
				_react2["default"].createElement(
					'table',
					{ className: 'fixed-title', ref: 'conT', style: { width: fixedWidth } },
					_react2["default"].createElement(
						'tbody',
						null,
						data.map(function (row, i) {
							return _this4._renderFixedTitle(row, i);
						})
					)
				),
				_react2["default"].createElement(
					'div',
					{ className: 'panel', style: { paddingLeft: fixedWidth } },
					_react2["default"].createElement(
						'table',
						{ className: 'con', ref: 'conC', style: { width: con_width } },
						_react2["default"].createElement(
							'tbody',
							null,
							data.map(function (row, i) {
								return _this4._renderCon(row, i);
							})
						)
					)
				)
			)
		);
	};

	return ScrollTable;
}(_react.Component);

var Column = function (_Component2) {
	_inherits(Column, _Component2);

	function Column() {
		_classCallCheck(this, Column);

		return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
	}

	return Column;
}(_react.Component);

exports.ScrollTable = ScrollTable;
exports.Column = Column;