"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_Board_tsx"],{

/***/ "./resources/js/components/Board.tsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Board.tsx ***!
  \*******************************************/
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
var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
var CustomCard_1 = __importDefault(__webpack_require__(/*! ./partials/CustomCard */ "./resources/js/components/partials/CustomCard.tsx"));
var icons_1 = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
var Board = function Board() {
  var _antd_1$Typography = antd_1.Typography,
    Title = _antd_1$Typography.Title,
    Text = _antd_1$Typography.Text,
    Link = _antd_1$Typography.Link;
  var Content = antd_1.Layout.Content;
  var _antd_1$Form$useForm = antd_1.Form.useForm(),
    _antd_1$Form$useForm2 = _slicedToArray(_antd_1$Form$useForm, 1),
    form = _antd_1$Form$useForm2[0];
  return react_1["default"].createElement(antd_1.Layout, {
    className: "layout"
  }, react_1["default"].createElement(antd_1.Card, {
    style: {
      background: "#fff",
      borderRadius: "3px",
      border: "0.1px solid rgba(0,0,0,0.1)",
      margin: "15px 15px 0"
    }
  }, react_1["default"].createElement(antd_1.Form, {
    form: form,
    name: "horizontal_login",
    layout: "inline",
    size: "large",
    style: {
      justifyContent: "center"
    }
  }, react_1["default"].createElement(antd_1.Form.Item, {
    name: "keywords"
  }, react_1["default"].createElement(antd_1.Input, {
    prefix: react_1["default"].createElement(icons_1.SearchOutlined, null),
    placeholder: "Job title, keywords, or company"
  })), react_1["default"].createElement(antd_1.Form.Item, {
    name: "location"
  }, react_1["default"].createElement(antd_1.Input, {
    prefix: react_1["default"].createElement(icons_1.CompassOutlined, null),
    placeholder: "City, state, or zip code"
  })), react_1["default"].createElement(antd_1.Form.Item, {
    shouldUpdate: true
  }, function () {
    return react_1["default"].createElement(antd_1.Button, {
      type: "primary",
      htmlType: "submit"
    }, "Search");
  }))), react_1["default"].createElement(antd_1.Divider, null), react_1["default"].createElement(Content, {
    style: {
      padding: "0 15px"
    }
  }, react_1["default"].createElement(antd_1.Row, null, react_1["default"].createElement(antd_1.Col, {
    span: 8,
    style: {
      padding: "15px",
      paddingLeft: 0
    }
  }, react_1["default"].createElement(antd_1.Row, {
    style: {
      marginBottom: "8px"
    }
  }, react_1["default"].createElement(antd_1.Col, {
    span: 12
  }, react_1["default"].createElement("span", {
    style: {
      marginRight: 8
    }
  }, "Sort by:"), react_1["default"].createElement(antd_1.Segmented, {
    options: [{
      label: "Date",
      value: "date",
      icon: react_1["default"].createElement(icons_1.CalendarOutlined, {
        style: {
          marginRight: "5px"
        }
      })
    }, {
      label: "Relevance",
      value: "relevance",
      icon: react_1["default"].createElement(icons_1.CompassOutlined, {
        style: {
          marginRight: "5px"
        }
      })
    }],
    onResize: undefined,
    onResizeCapture: undefined
  })), react_1["default"].createElement(antd_1.Col, {
    span: 12,
    style: {
      textAlign: "right"
    }
  }, react_1["default"].createElement(antd_1.Tag, null, "2 jobs"))), react_1["default"].createElement(antd_1.Row, {
    style: {
      overflowY: "auto",
      marginBottom: "8px"
    }
  }, react_1["default"].createElement(antd_1.Space, {
    direction: "vertical",
    style: {
      width: "100%"
    }
  }, react_1["default"].createElement(CustomCard_1["default"], {
    title: "Job 1"
  }), react_1["default"].createElement(CustomCard_1["default"], {
    title: "Job 2"
  }))), react_1["default"].createElement(antd_1.Row, {
    style: {
      textAlign: "center",
      marginBottom: "8px"
    }
  }, react_1["default"].createElement(antd_1.Pagination, {
    current: 1,
    total: 3,
    style: {
      width: "100%"
    }
  }))), react_1["default"].createElement(antd_1.Col, {
    span: 16,
    style: {
      padding: "15px",
      paddingRight: 0
    }
  }, react_1["default"].createElement(CustomCard_1["default"], null, react_1["default"].createElement(antd_1.Row, null, react_1["default"].createElement(antd_1.Space.Compact, {
    direction: "vertical"
  }, react_1["default"].createElement(Title, {
    level: 4,
    style: {
      margin: "0"
    }
  }, "Frontend Software Engineer"), react_1["default"].createElement(Link, {
    href: "https://ant.design",
    target: "_blank"
  }, "Ant Design"), react_1["default"].createElement(Text, null, "Raleigh, NC 27604"), react_1["default"].createElement(antd_1.Space.Compact, {
    direction: "horizontal",
    style: {
      marginTop: "8px"
    }
  }, react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "remote"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "401k"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "flex-hours")))), react_1["default"].createElement(antd_1.Divider, null), react_1["default"].createElement(antd_1.Row, null, react_1["default"].createElement(antd_1.Col, {
    span: 12,
    style: {
      paddingRight: "32px"
    }
  }, react_1["default"].createElement(antd_1.Descriptions, {
    title: "Job Overview",
    bordered: true,
    column: {
      xxl: 1
    }
  }, react_1["default"].createElement(antd_1.Descriptions.Item, {
    label: "Salary"
  }, "$100,000 - $120,000"), react_1["default"].createElement(antd_1.Descriptions.Item, {
    label: "Type"
  }, react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "full time"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "contract")), react_1["default"].createElement(antd_1.Descriptions.Item, {
    label: "Schedule"
  }, react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "8am - 5pm"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "Monday - Thursday")))), react_1["default"].createElement(antd_1.Col, {
    span: 12
  }, react_1["default"].createElement(Title, {
    level: 5,
    style: {
      margin: 0
    }
  }, "Benefits"), react_1["default"].createElement(Text, {
    italic: true
  }, "Derived from the full job listing content."), react_1["default"].createElement(antd_1.Space, {
    direction: "horizontal",
    style: {
      marginTop: "8px"
    }
  }, react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "401k"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "flex-hours"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "remote"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "paid-time-off"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "health-insurance"), react_1["default"].createElement(antd_1.Tag, {
    color: "default"
  }, "vision-insurance")))), react_1["default"].createElement(antd_1.Divider, null), react_1["default"].createElement(antd_1.Row, null, "..."))))));
};
exports["default"] = Board;

/***/ }),

/***/ "./resources/js/components/partials/CustomCard.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/components/partials/CustomCard.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {



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
var antd_1 = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/**
 * Render a antd card
 *
 * @param {Props} {title, content}
 * @returns JSX.Element
 */
var CustomCard = function CustomCard(_ref) {
  var title = _ref.title,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? react_1["default"].createElement(antd_1.Skeleton, {
      active: true
    }) : _ref$children,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style;
  return react_1["default"].createElement(antd_1.Card, {
    title: title,
    bordered: false,
    style: Object.assign({
      background: "#fff",
      borderRadius: "3px",
      border: "0.1px solid rgba(0,0,0,0.1)",
      width: "100%"
    }, style)
  }, children);
};
exports["default"] = CustomCard;

/***/ })

}]);