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

var Shield = function (_React$Component) {
	_inherits(Shield, _React$Component);

	function Shield() {
		_classCallCheck(this, Shield);

		return _possibleConstructorReturn(this, (Shield.__proto__ || Object.getPrototypeOf(Shield)).apply(this, arguments));
	}

	_createClass(Shield, [{
		key: "render",
		value: function render() {
			var color = this.props.color || "#272636",
			    size = (this.props.size || 30) + "px";
			return _react2.default.createElement(
				"svg",
				{ viewBox: "0 0 200 200", version: "1.1", width: size, height: size, fill: color },
				_react2.default.createElement(
					"g",
					{ transform: "scale(0.1953125, 0.1953125)" },
					_react2.default.createElement("path", { d: "M945.192631 197.457164c0 0-89.717348-5.776563-136.621611-48.527227-49.027623-44.780903-55.337329-126.598326-55.337329-126.598326S631.320061 0.346901 507.28307 0.346901c-121.882931 0-245.950621 21.983687-245.950621 21.983687s-8.275477 82.285075-54.80521 124.786051c-49.340755 45.061288-137.152706 50.339502-137.152706 50.339502s-9.399067 160.448272 4.027733 299.756061c13.240559 137.123031 47.15395 272.652773 172.97047 375.35997 102.864786 84.003206 256.818133 151.080927 256.818133 151.080927s120.883161-52.712549 208.446449-110.046349c96.212272-63.206554 186.710402-149.488663 214.410278-313.77945C955.341782 426.045349 945.192631 197.457164 945.192631 197.457164zM676.351674 844.468091c-58.142212 38.027082-134.037762 73.674976-161.792896 86.294388L514.558777 508.581134 148.865981 508.581134c-0.309038-2.944052-0.605797-5.89015-0.890276-8.837272-11.147898-115.386984-3.342118-248.137427-3.342118-248.137427s72.668043-4.371564 113.545032-41.751916c38.502919-35.161824 45.373397-103.394858 45.373397-103.394858s102.709243-18.079774 203.606211-18.079774c2.480494 0 4.957919 0.013303 7.433296 0.033769l0 420.168502 348.966856 0.601704c-2.430352 25.684986-5.588275 51.206242-9.674337 75.438133C830.96096 720.586642 756.012991 792.159748 676.351674 844.468091z" })
				)
			);
		}
	}]);

	return Shield;
}(_react2.default.Component);

exports.default = Shield;
//# sourceMappingURL=Shield.js.map