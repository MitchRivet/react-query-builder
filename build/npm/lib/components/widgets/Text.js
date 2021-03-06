"use strict";

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _interopRequireDefault = require("babel-runtime/helpers/interop-require-default")["default"];

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var Text = (function (_Component) {
  function Text() {
    _classCallCheck(this, Text);

    _Component.apply(this, arguments);
  }

  _inherits(Text, _Component);

  Text.prototype.handleChange = function handleChange() {
    var node = _react2["default"].findDOMNode(this.refs.text);
    this.props.setValue(node.value);
  };

  Text.prototype.render = function render() {
    return _react2["default"].createElement("input", { type: "text", ref: "text", value: this.props.value, onChange: this.handleChange.bind(this) });
  };

  _createClass(Text, null, [{
    key: "propTypes",
    value: {
      setValue: _react.PropTypes.func.isRequired
    },
    enumerable: true
  }]);

  return Text;
})(_react.Component);

exports["default"] = Text;
module.exports = exports["default"];