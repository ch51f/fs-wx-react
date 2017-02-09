"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Location = function (_React$Component) {
	_inherits(Location, _React$Component);

	function Location() {
		_classCallCheck(this, Location);

		return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	}

	Location.prototype.render = function render() {
		var color = this.props.color || "#22A7FB",
		    size = (this.props.size || 30) + "px";
		return _react2["default"].createElement(
			"svg",
			{ width: size, height: size, viewBox: "0 0 200 200", fill: color },
			_react2["default"].createElement(
				"g",
				{ transform: "scale(0.1953125, 0.1953125)" },
				_react2["default"].createElement("path", { d: "M333.719552 132.09088c-1.27488-0.428032-8.702976-11.056128-8.702976-14.84288 0-4.799488 3.904512-8.704 8.704-8.704 4.799488 0 8.704 3.904512 8.704 8.704C342.4256 120.999936 334.99648 131.64544 333.719552 132.09088zM333.7216 117.248m-3.84 0a3.75 3.75 0 1 0 7.68 0 3.75 3.75 0 1 0-7.68 0ZM518.679552 1001.199616 512.079872 1003.52l-6.639616-2.240512C445.519872 981.180416 143.36 549.199872 143.36 388.759552 143.36 185.719808 308.719616 20.48 512 20.48s368.64 165.239808 368.64 368.279552C880.64 547.680256 578.56 980.339712 518.679552 1001.199616zM512 61.400064c-180.67968 0-327.68 146.860032-327.68 327.360512 0 136.659968 266.640384 519.860224 327.560192 569.280512C572.879872 908.220416 839.68 524.82048 839.68 388.759552 839.68 208.260096 692.67968 61.400064 512 61.400064zM512 562.679808c-96 0-174.08-78.019584-174.08-173.920256 0-95.859712 78.08-173.899776 174.08-173.899776s174.08 78.040064 174.08 173.899776C686.08 484.660224 608 562.679808 512 562.679808zM512 255.77984c-73.40032 0-133.12 59.660288-133.12 132.979712s59.71968 133.000192 133.12 133.000192 133.12-59.679744 133.12-133.000192S585.40032 255.77984 512 255.77984z" })
			)
		);
	};

	return Location;
}(_react2["default"].Component);

exports["default"] = Location;
module.exports = exports['default'];