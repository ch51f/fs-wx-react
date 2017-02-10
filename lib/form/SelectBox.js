'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _ActionSheet = require('../dialog/ActionSheet');

var _svg = require('../svg');

var _Mask = require('../mask/Mask');

var _Mask2 = _interopRequireDefault(_Mask);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description selectbox
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var SelectBox = function (_Component) {
  _inherits(SelectBox, _Component);

  function SelectBox(props, context) {
    _classCallCheck(this, SelectBox);

    var _this = _possibleConstructorReturn(this, (SelectBox.__proto__ || Object.getPrototypeOf(SelectBox)).call(this, props, context));

    _this.state = {
      action: false,
      val: "",
      key: -1
    };
    return _this;
  }

  _createClass(SelectBox, [{
    key: '_openSheet',
    value: function _openSheet() {
      this.setState({ action: true });
    }
  }, {
    key: '_cancelSheet',
    value: function _cancelSheet() {
      this.setState({ action: false });
    }
  }, {
    key: '_actionHandel',
    value: function _actionHandel(str) {
      var data = this.props.data;

      for (var i = 0; i < data.length; i++) {
        if (data[i].key == str) {
          this.setState({ val: data[i].val, key: data[i].key, action: false });
          break;
        }
      }
    }
  }, {
    key: '_renderAction',
    value: function _renderAction(item, index) {
      return _react2.default.createElement(_ActionSheet.Action, { key: index, title: item.val, handle: this._actionHandel.bind(this, item.key) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          show = _state.action,
          val = _state.val,
          key = _state.key;
      var _props = this.props,
          label = _props.label,
          cls = _props.cls,
          data = _props.data,
          name = _props.name;

      return _react2.default.createElement(
        'div',
        { className: cls },
        label ? _react2.default.createElement(
          'label',
          { className: 'label' },
          label
        ) : null,
        _react2.default.createElement(
          'div',
          { className: 'select', onClick: this._openSheet.bind(this) },
          _react2.default.createElement('input', { ref: name, name: name, type: 'hidden', value: key }),
          _react2.default.createElement('input', { type: 'text', disabled: 'disabled', value: val }),
          _react2.default.createElement(
            'i',
            { className: 'select-icon' },
            _react2.default.createElement(_svg.ArrowRight, { size: '20', color: '#ddd' })
          )
        ),
        _react2.default.createElement(
          _ActionSheet.ActionSheet,
          { isShow: show, cancelHandel: this._cancelSheet.bind(this) },
          data.map(function (item, index) {
            return _this2._renderAction(item, index);
          })
        ),
        _react2.default.createElement(_Mask2.default, { isShow: show })
      );
    }
  }]);

  return SelectBox;
}(_react.Component);

SelectBox.propTypes = {
  label: _react.PropTypes.string,
  name: _react.PropTypes.string.isRequired,
  cls: _react.PropTypes.string,
  data: _react.PropTypes.arrayOf(_react.PropTypes.object.isRequired).isRequired
};

SelectBox.defaultProps = {
  cls: 'select-inner'
};

exports.default = SelectBox;