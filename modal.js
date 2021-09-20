"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//import "./modal.css"
const Modal = _ref => {
  let {
    content,
    back,
    number,
    children,
    setshow,
    show,
    bgcolor
  } = _ref;
  // const[show,setshow]=useState(false)
  const [page, setpage] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const [pagefirst, setpagefirst] = (0, _react.useState)({
    x: 0,
    y: 0
  });
  const [active, setactive] = (0, _react.useState)(false);
  const [once, setonce] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    if (show) {
      if (bgcolor) document.querySelector("body").style.background = bgcolor;else document.querySelector("body").style.background = "rgba(0,0,0,0.1)";
    } else document.querySelector("body").style.backgroundColor = "#ffffff";
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "center ".concat(show ? null : "modal_closing")
  }, !children ? /*#__PURE__*/_react.default.createElement("div", {
    id: "move",
    className: show ? "modal_opening" : "modal_closing",
    onTouchStart: e => {
      if (once) setpagefirst({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      setonce(false);
    },
    onMouseDown: e => {
      e.preventDefault();
      console.log(e.clientX, e.clientY);
      if (once) setpagefirst({
        x: e.clientX,
        y: e.clientY
      });
      setactive(true);
      setonce(false);
    },
    onTouchMove: e => {
      console.log("move");
      document.getElementById("move").style.transform = "translate3d(" + (e.touches[0].clientX - pagefirst.x) + "px," + (e.touches[0].clientY - pagefirst.y) + "px,0)";
      setpage({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    },
    onMouseMove: e => {
      if (active) {
        e.preventDefault();
        console.log(e.clientX, pagefirst.x, e.clientY, pagefirst.y);
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
        setpage({
          x: e.clientX,
          y: e.clientY
        });
      }
    },
    onTouchEnd: e => {
      if (!back) {
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
      } else {
        console.log("end");

        if (number) {
          if (page.x - pagefirst.x > number || page.x - pagefirst.x < -number || page.y - pagefirst.y > number || page.y - pagefirst.y < -number) setshow(false);
        }

        document.getElementById("move").style.transform = "translate3d(0,0,0)";
      }
    },
    onMouseUp: e => {
      if (!back) {
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
        setactive(false);
      } else {
        console.log("end");

        if (number) {
          if (page.x - pagefirst.x > number || page.x - pagefirst.x < -number || page.y - pagefirst.y > number || page.y - pagefirst.y < -number) setshow(false);
        }

        document.getElementById("move").style.transform = "translate3d(0,0,0)";
        setactive(false);
      }
    }
  }, /*#__PURE__*/_react.default.createElement("nav", null), /*#__PURE__*/_react.default.createElement("h3", null, content)) : /*#__PURE__*/_react.default.cloneElement(children, {
    onTouchStart: e => {
      if (once) setpagefirst({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
      setonce(false);
    },
    onMouseDown: e => {
      e.preventDefault();
      console.log(e.clientX, e.clientY);
      if (once) setpagefirst({
        x: e.clientX,
        y: e.clientY
      });
      setactive(true);
      setonce(false);
    },
    onTouchMove: e => {
      console.log("move");
      document.getElementById("move").style.transform = "translate3d(" + (e.touches[0].clientX - pagefirst.x) + "px," + (e.touches[0].clientY - pagefirst.y) + "px,0)";
      setpage({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    },
    onMouseMove: e => {
      if (active) {
        e.preventDefault();
        console.log(e.clientX, pagefirst.x, e.clientY, pagefirst.y);
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
        setpage({
          x: e.clientX,
          y: e.clientY
        });
      }
    },
    onTouchEnd: e => {
      if (!back) {
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
      } else {
        console.log("end");

        if (number) {
          if (page.x - pagefirst.x > number || page.x - pagefirst.x < -number || page.y - pagefirst.y > number || page.y - pagefirst.y < -number) setshow(false);
        }

        document.getElementById("move").style.transform = "translate3d(0,0,0)";
      }
    },
    onMouseUp: e => {
      if (!back) {
        document.getElementById("move").style.transform = "translate3d(" + (e.clientX - pagefirst.x) + "px," + (e.clientY - pagefirst.y) + "px,0)";
        setactive(false);
      } else {
        console.log("end");

        if (number) {
          if (page.x - pagefirst.x > number || page.x - pagefirst.x < -number || page.y - pagefirst.y > number || page.y - pagefirst.y < -number) setshow(false);
        }

        document.getElementById("move").style.transform = "translate3d(0,0,0)";
        setactive(false);
      }
    },
    id: "move"
  })));
};

var _default = Modal;
exports.default = _default;