(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["react"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Finally = exports.Reject = exports.Resolve = exports.Pending = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PENDING = 'pending';
var RESOLVE = 'resolve';
var REJECT = 'reject';
var FINALLY = 'finally';

function isPromise(obj) {
  return obj && typeof obj.then === 'function';
}

var Async = function (_Component) {
  _inherits(Async, _Component);

  function Async() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Async);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Async.__proto__ || Object.getPrototypeOf(Async)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      status: PENDING
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Async, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var promise = this.props.await;
      this.handlePromise(promise);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var promise = nextProps.await;
      this.handlePromise(promise);
    }
  }, {
    key: 'handlePromise',
    value: function handlePromise(promise) {
      var _this2 = this;

      if (!isPromise(promise)) return;
      this.setState({ status: 'pending' });
      promise.then(function () {
        _this2.setState({ status: RESOLVE });
      }).catch(function () {
        _this2.setState({ status: REJECT });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var promise = this.props.await;
      if (!isPromise(promise)) return _react2.default.createElement('div', null);

      return _react2.default.createElement(
        'div',
        {
          className: 'react-async' + (this.props.className ? ' ' + this.props.className : ''),
          style: this.props.style,
          key: Math.random()
        },
        children.filter(function (child) {
          if (typeof child === 'function') return true;
          if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') return true;
          if (typeof child.type === 'string') return true;
          if (!child.type) return true;
          var status = _this3.state.status;

          var childName = child.type.name.toLowerCase();
          var isMatchStatus = childName === status;
          var isAsyncDone = [REJECT, RESOLVE].findIndex(function (v) {
            return status === v;
          }) >= 0 && childName === FINALLY;
          return isMatchStatus || isAsyncDone;
        }).map(function (child) {
          if (typeof child === 'function') {
            return _react2.default.createElement(
              'div',
              { className: 'react-async-function', key: Math.random() },
              child.call(_this3, _this3)
            );
          } else {
            return child;
          }
        })
      );
    }
  }]);

  return Async;
}(_react.Component);

Async.PropTypes = {
  value: _react.PropTypes.string,
  onSuccess: _react.PropTypes.func,
  onError: _react.PropTypes.func
};
exports.default = Async;

var Pending = exports.Pending = function (_Component2) {
  _inherits(Pending, _Component2);

  function Pending() {
    _classCallCheck(this, Pending);

    return _possibleConstructorReturn(this, (Pending.__proto__ || Object.getPrototypeOf(Pending)).apply(this, arguments));
  }

  _createClass(Pending, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({ className: 'react-async-pending' }, this.props),
        this.props.children
      );
    }
  }]);

  return Pending;
}(_react.Component);

var Resolve = exports.Resolve = function (_Component3) {
  _inherits(Resolve, _Component3);

  function Resolve() {
    _classCallCheck(this, Resolve);

    return _possibleConstructorReturn(this, (Resolve.__proto__ || Object.getPrototypeOf(Resolve)).apply(this, arguments));
  }

  _createClass(Resolve, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({ className: 'react-async-resolve' }, this.props),
        this.props.children
      );
    }
  }]);

  return Resolve;
}(_react.Component);

var Reject = exports.Reject = function (_Component4) {
  _inherits(Reject, _Component4);

  function Reject() {
    _classCallCheck(this, Reject);

    return _possibleConstructorReturn(this, (Reject.__proto__ || Object.getPrototypeOf(Reject)).apply(this, arguments));
  }

  _createClass(Reject, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({ className: 'react-async-reject' }, this.props),
        this.props.children
      );
    }
  }]);

  return Reject;
}(_react.Component);

var Finally = exports.Finally = function (_Component5) {
  _inherits(Finally, _Component5);

  function Finally() {
    _classCallCheck(this, Finally);

    return _possibleConstructorReturn(this, (Finally.__proto__ || Object.getPrototypeOf(Finally)).apply(this, arguments));
  }

  _createClass(Finally, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({ className: 'react-async-finally' }, this.props),
        this.props.children
      );
    }
  }]);

  return Finally;
}(_react.Component);

/***/ })
/******/ ]);
});