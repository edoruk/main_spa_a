"use strict";
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 2505:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Welcome(props) {
    const { scrollY  } = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useScroll)();
    const opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollY, [
        0,
        500
    ], [
        "100%",
        "0%"
    ]);
    const y = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useTransform)(scrollY, [
        0,
        500
    ], [
        "0%",
        "30%"
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: props.contents[0],
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.section, {
            className: "bg-white w-screen h-screen flex flex-col justify-center items-center bg-opacity-0 ",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 2,
                delay: 0.5
            },
            style: {
                opacity,
                y
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: " 2xl:text-[45px] xl:text-[40px] md:text-[35px] sm:text-[30px] text-[28px] font-[100]",
                    children: props.welcome[0]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: " text-center 2xl:text-[70px] xl:text-[65px] md:text-[60px] sm:text-[45px] text-[43px] font-[700]",
                    children: props.welcome[1]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "  flex items-end justify-end pt-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__.Link, {
                        to: props.contents[2],
                        spy: true,
                        smooth: true,
                        offset: -62,
                        duration: 2500,
                        className: "text-[.6rem] 2xl:text-[1.2rem] xl:text-[1rem] md:text-[.8rem]  rounded-[10px] border-[1px] px-[1rem] py-[0.3rem] border-white font-[100] cursor-pointer hover:opacity-[0.8]",
                        children: props.descriptions[0]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Welcome);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;