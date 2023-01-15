"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Login_tsx"],{

/***/ "./resources/js/components/Login.tsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Login.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
var react_redux_1 = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var react_router_dom_1 = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var actions_1 = __importDefault(__webpack_require__(/*! ../redux/Authenticate/actions */ "./resources/js/redux/Authenticate/actions.tsx"));
;
function Login() {
  var _ref = (0, react_router_dom_1.useLocation)(),
    state = _ref.state;
  var _ref2 = state !== null && state !== void 0 ? state : {},
    error = _ref2.error;
  if (error && error === 'unauthenticated') {
    antd_1.notification.error({
      message: 'Oops!',
      description: 'Please login to continue.',
      placement: 'topRight',
      key: 'unauthenticated'
    });
  }
  var _ref3 = (0, react_redux_1.useSelector)(function (state) {
      return state.authenticateReducer;
    }),
    loader = _ref3.loader;
  var dispatch = (0, react_redux_1.useDispatch)();
  var onFinish = function onFinish(values) {
    dispatch({
      type: actions_1["default"].LOGIN,
      payload: {
        email: values.email,
        password: values.password,
        remember: values.remember
      }
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
    title: "Login",
    bordered: false
  }, react_1["default"].createElement(antd_1.Form, {
    name: "normal_login",
    onFinish: onFinish
  }, react_1["default"].createElement(antd_1.Form.Item, {
    name: "email",
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: 'Please input your Email!'
    }]
  }, react_1["default"].createElement(antd_1.Input, {
    size: "large",
    prefix: react_1["default"].createElement(icons_1.UserOutlined, {
      className: "site-form-item-icon"
    }),
    placeholder: "Email"
  })), react_1["default"].createElement(antd_1.Form.Item, {
    name: "password",
    validateTrigger: "onSubmit",
    rules: [{
      required: true,
      message: 'Please input your Password!'
    }]
  }, react_1["default"].createElement(antd_1.Input, {
    size: "large",
    prefix: react_1["default"].createElement(icons_1.LockOutlined, {
      className: "site-form-item-icon"
    }),
    type: "password",
    placeholder: "Password"
  })), react_1["default"].createElement(antd_1.Form.Item, null, react_1["default"].createElement(antd_1.Form.Item, {
    name: "remember",
    valuePropName: "checked",
    noStyle: true
  }, react_1["default"].createElement(antd_1.Checkbox, null, "Remember me")), react_1["default"].createElement("a", {
    className: "login-form-forgot"
  }, "Forgot password")), react_1["default"].createElement(antd_1.Form.Item, null, react_1["default"].createElement(antd_1.Button, {
    loading: loader,
    type: "primary",
    htmlType: "submit",
    className: "login-form-button",
    size: "large"
  }, "Log in"), "Or ", react_1["default"].createElement(react_router_dom_1.NavLink, {
    to: "/register"
  }, "register now!")))))));
}
exports["default"] = Login;
;

/***/ })

}]);