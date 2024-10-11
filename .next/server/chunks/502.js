"use strict";
exports.id = 502;
exports.ids = [502];
exports.modules = {

/***/ 3502:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function HomeContentCard(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `w-full ${props.i % 2 === 0 ? " md:pl-[10%] lg:pl-[15%] xl:pl-[20%] " : "md:pr-[10%] lg:pr-[15%] xl:pr-[30%]"}`,
        children: props.i === 5 ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
            id: props.content,
            className: `w-full flex flex-col shadow-fade  ${props.i % 2 === 0 ? "md:rounded-l-[20rem] lg:pl-8 bg-gradient-to-r from-slate-500 to-slate-300  text-black " : "md:rounded-r-[20rem] lg:pr-8 bg-gradient-to-l from-slate-500 to-slate-300 text-black"}   items-center p-8 md:pb-16 lg:pb-10 xl:pb-12 2xl:pb-16`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: `w-[50%]  text-center text-[35px] md:text-[40px] xl:text-[45px] `,
                    children: props.content
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-full ",
                    children: props.i !== 5 ? props.i === 0 ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `w-full flex flex-col ${props.i === 3 ? "md:flex-row md:pr-12 xl:pr-[5rem]" : "md:flex-row-reverse md:pl-12 xl:pl-[5rem] "} gap-8 justify-between items-center `,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                id: "home-desc",
                                className: `${props.i % 2 === 0 ? props.i === 4 ? "w-full md:ml-16 lg:px-4 xl:px-18 2xl:pl-10" : "xl:max-w-[45rem]" : null} bg-transparent p-8 w-[100%] text-justify text-sm  md:text-sm  xl:text-base  whitespace-pre-line`,
                                children: props.descriptions[props.i]
                            }),
                            props.i === 4 ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                id: "home-image",
                                className: "w-[20rem] md:w-[15rem] xl:w-[18rem] h-[10rem]   md:h-[15rem] xl:h-[18rem] rounded-[10px] md:rounded-full bg-cover bg-no-repeat",
                                style: {
                                    backgroundImage: `url(/home/content-${props.i}.webp)`
                                }
                            })
                        ]
                    }) : null
                })
            ]
        }, props.i)
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeContentCard);


/***/ })

};
;