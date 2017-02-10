"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pen = function (_React$Component) {
	_inherits(Pen, _React$Component);

	function Pen() {
		_classCallCheck(this, Pen);

		return _possibleConstructorReturn(this, (Pen.__proto__ || Object.getPrototypeOf(Pen)).apply(this, arguments));
	}

	_createClass(Pen, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#272636",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ version: "1.1", width: size, height: size, viewBox: "0 0 200 200", fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M791.419897 274.942933l-73.163323-73.163323c-12.672624-12.672624-32.258705-12.672624-44.934398 0l-57.607022 57.610092 121.55445 121.55445 54.150294-61.066821C804.095591 307.201637 804.095591 287.618627 791.419897 274.942933zM225.12634 646.518716l0 121.55445 121.55752 0 351.986633-355.447455L577.116043 291.072285 225.12634 646.518716zM482.364029 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351 17.759479 0 32.155351-14.395872 32.155351-32.155351C514.51938 721.181183 500.123508 706.785312 482.364029 706.785312zM610.985432 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351s32.155351-14.395872 32.155351-32.155351C643.141806 721.181183 628.744911 706.785312 610.985432 706.785312zM739.607858 706.785312c-17.759479 0-32.155351 14.395872-32.155351 32.155351 0 17.759479 14.395872 32.155351 32.155351 32.155351 17.759479 0 32.155351-14.395872 32.155351-32.155351C771.763209 721.181183 757.367337 706.785312 739.607858 706.785312z" })
				)
			);
		}
	}]);

	return Pen;
}(_react2.default.Component);

exports.default = Pen;
//# sourceMappingURL=Pen.js.map