"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Register_tsx"],{

/***/ "./resources/js/components/Register.tsx":
/*!**********************************************!*\
  !*** ./resources/js/components/Register.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/*
 * Produced: Sun Dec 18 2022
 * Author: Alec M.
 * GitHub: https://amattu.com/links/github
 * Copyright: (C) 2022 Alec M.
 * License: License GNU Affero General Public License v3.0
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var actions_1 = __importDefault(__webpack_require__(/*! ../redux/Authenticate/actions */ "./resources/js/redux/Authenticate/actions.tsx"));
;
function Register() {
  var _ref = (0, react_redux_1.useSelector)(function (state) {
      return state.authenticateReducer;
    }),
    registerLoader = _ref.registerLoader;
  var dispatch = (0, react_redux_1.useDispatch)();
  var _antd_1$Form$useForm = antd_1.Form.useForm(),
    _antd_1$Form$useForm2 = _slicedToArray(_antd_1$Form$useForm, 1),
    form = _antd_1$Form$useForm2[0];
  var onFinish = function onFinish(values) {
    dispatch({
      type: actions_1["default"].REGISTER,
      payload: values
    });
  };
  return react_1["default"].createElement(antd_1.Layout, {
    className: "layout",
    style: {
      height: '100%'
    }
  }, react_1["default"].createElement(antd_1.Row, {
    justify: "center",
    align: "middle",
    style: {
      height: '100%'
    }
  }, react_1["default"].createElement(antd_1.Col, {
    span: 6
  }, react_1["default"].createElement(antd_1.Card, {
    title: "Register",
    bordered: false
  }, react_1["default"].createElement(antd_1.Form, {
    form: form,
    name: "register",
    onFinish: onFinish,
    scrollToFirstError: true,
    layout: "vertical",
    size: "large",
    className: "register-form"
  }, react_1["default"].createElement(antd_1.Form.Item, {
    name: "name",
    label: "Name",
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: 'Please input your name!',
      whitespace: true
    }]
  }, react_1["default"].createElement(antd_1.Input, null)), react_1["default"].createElement(antd_1.Form.Item, {
    name: "email",
    label: "E-mail",
    validateTrigger: "onSubmit",
    rules: [{
      type: 'email',
      message: 'The input is not valid E-mail!'
    }, {
      required: true,
      message: 'Please input your E-mail!'
    }]
  }, react_1["default"].createElement(antd_1.Input, null)), react_1["default"].createElement(antd_1.Form.Item, {
    name: "password",
    label: "Password",
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: 'Please input your password!'
    }],
    hasFeedback: true
  }, react_1["default"].createElement(antd_1.Input.Password, null)), react_1["default"].createElement(antd_1.Form.Item, {
    name: "password_confirmation",
    label: "Confirm Password",
    dependencies: ['password'],
    hasFeedback: true,
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: 'Please confirm your password!'
    }, function (_ref2) {
      var getFieldValue = _ref2.getFieldValue;
      return {
        validator: function validator(_, value) {
          if (!value || getFieldValue('password') === value) {
            return Promise.resolve();
          }
          return Promise.reject('The two passwords that you entered do not match!');
        }
      };
    }]
  }, react_1["default"].createElement(antd_1.Input.Password, null)), react_1["default"].createElement(antd_1.Form.Item, null, react_1["default"].createElement(antd_1.Button, {
    type: "primary",
    htmlType: "submit",
    size: "large",
    block: true,
    loading: registerLoader
  }, "Register"), "Already have an account? ", react_1["default"].createElement(react_router_dom_1.NavLink, {
    to: "/login"
  }, "Login.")))))));
}
exports["default"] = Register;
;

/***/ })

}]);