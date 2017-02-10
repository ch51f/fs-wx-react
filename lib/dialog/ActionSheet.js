"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Action = exports.ActionSheet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description ActionSheet
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params isShow 是否显示
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params children [...Action]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @params cancelHandle 取消事件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ActionSheet = function (_Component) {
	_inherits(ActionSheet, _Component);

	function ActionSheet() {
		_classCallCheck(this, ActionSheet);

		return _possibleConstructorReturn(this, (ActionSheet.__proto__ || Object.getPrototypeOf(ActionSheet)).apply(this, arguments));
	}

	_createClass(ActionSheet, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    isShow = _props.isShow,
			    cancelHandel = _props.cancelHandel,
			    children = _props.children;

			if (!isShow) return null;
			return _react2.default.createElement(
				"section",
				{ className: "actionsheet" },
				_react2.default.createElement(
					"div",
					{ className: "content" },
					children
				),
				_react2.default.createElement(
					"div",
					{ className: "foot" },
					_react2.default.createElement(
						"button",
						{ className: "cancel", onClick: cancelHandel },
						"\u53D6\u6D88"
					)
				)
			);
		}
	}]);

	return ActionSheet;
}(_react.Component);

ActionSheet.propTypes = {
	isShow: _react.PropTypes.bool,
	cancelHandel: _react.PropTypes.func.isRequired
};

ActionSheet.defaultProps = {
	isShow: false
};

/**
 * @description Action
 * @params ttitle action显示之
 * @params handle action点击事件
 * 
 */

var Action = function (_Component2) {
	_inherits(Action, _Component2);

	function Action() {
		_classCallCheck(this, Action);

		return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
	}

	_createClass(Action, [{
		key: "render",
		value: function render() {
			var _props2 = this.props,
			    title = _props2.title,
			    handle = _props2.handle;

			return _react2.default.createElement(
				"div",
				{ className: "action", onClick: handle },
				title
			);
		}
	}]);

	return Action;
}(_react.Component);

Action.propTypes = {
	title: _react.PropTypes.string.isRequired,
	handle: _react.PropTypes.func.isRequired
};

exports.ActionSheet = ActionSheet;
exports.Action = Action;
//# sourceMappingURL=ActionSheet.js.map