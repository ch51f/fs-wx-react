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

var Edit = function (_React$Component) {
	_inherits(Edit, _React$Component);

	function Edit() {
		_classCallCheck(this, Edit);

		return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
	}

	_createClass(Edit, [{
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
					_react2.default.createElement("path", { d: "M760.24123 899.53936 122.251214 899.53936 122.251214 206.062146l389.726784 0 56.103014-54.039777-1.451108-1.442862-444.378691 0c-30.642113 0-55.476725 24.837688-55.476725 55.482639l0 693.477214c0 30.638811 24.834612 55.481615 55.476725 55.481615l637.990016 0c30.646206 0 55.476725-24.841781 55.476725-55.481615L815.717956 493.287823l-55.476725 52.962236L760.24123 899.53936zM955.518567 189.812043c-0.516791-30.324656-15.283704-59.539025-43.678545-86.775342-25.039282-24.00574-52.673775-36.164664-82.140061-36.164664-46.130487 0-79.784313 29.797653-88.941232 38.914288C727.793931 118.596072 360.068109 485.777779 360.068109 485.777779c-2.870491 2.939959-4.983705 6.52767-6.055151 10.524704-9.957177 36.814464-59.880192 200.227254-60.38061 201.852264-2.56144 8.372691-0.258907 17.502629 5.905742 23.599488 4.414724 4.437056 10.323536 6.794753 16.39506 6.794753 2.382354 0 4.766756-0.354064 7.123526-1.083681 1.694664-0.568958 170.336296-55.096852 198.09666-63.386656 3.65847-1.084705 6.988444-3.061732 9.725901-5.745864 17.50437-17.285688 355.489649-350.030072 382.859095-378.282532C942.010371 250.875794 956.058894 220.530672 955.518567 189.812043zM873.879946 241.460354c-15.44437 15.930831-136.316111 135.362944-359.259664 355.00334l-17.07047 16.824177c-25.550956 7.90504-86.760478 27.574009-133.03628 42.496883 14.900972-49.187259 32.782957-108.61986 40.748699-136.729058 47.648112-47.584762 362.673553-362.14397 374.650819-373.95804 2.328117-2.321882 23.600455-22.75219 49.78691-22.75219 14.861062 0 29.194075 6.788613 43.745062 20.742417 17.396918 16.681938 26.363494 32.723286 26.609098 47.698349C900.323262 206.203362 891.516328 223.239364 873.879946 241.460354z" })
				)
			);
		}
	}]);

	return Edit;
}(_react2.default.Component);

exports.default = Edit;