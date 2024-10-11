exports.id = 831;
exports.ids = [831];
exports.modules = {

/***/ 831:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3126);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6197);
/* harmony import */ var react_flag_kit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8031);
/* harmony import */ var react_flag_kit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_flag_kit__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4563);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5800);
/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_6__, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__, _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_11__.config.autoAddCss = false;
/* eslint-disable import/first */ function Navbar() {
    const { locales  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const intl = (0,react_intl__WEBPACK_IMPORTED_MODULE_3__.useIntl)();
    const navContents = intl.messages["page.home.contents"];
    const logo = intl.formatMessage({
        id: "page.home.title"
    });
    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let previousScrollPosition = 0;
        let currentScrollPosition = 0;
        window.addEventListener("scroll", (e)=>{
            // Get the new Value
            currentScrollPosition = window.pageYOffset;
            //Subtract the two and conclude
            if (previousScrollPosition - currentScrollPosition < 0) {
                setShow(false);
            } else if (previousScrollPosition - currentScrollPosition > 0) {
                setShow(true);
            }
            // Update the previous value
            previousScrollPosition = currentScrollPosition;
        });
        window.removeEventListener("scroll", (e)=>{});
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: show ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            transition: {
                ease: "linear",
                duration: 0.3
            },
            className: "w-screen h-[4rem] flex flex-row items-center justify-between px-6 fixed top-0 bg-black text-white bg-opacity-90 z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: " w-[15%]",
                    children: logo
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: " flex flex-row } w-[85%]  h-full text-center ",
                    children: navContents.map((navContent, key)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "w-[35%] h-[100%] ",
                            children: [
                                (navContent == "About" || navContent == "Hakkımızda") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/About",
                                    className: "px-[0.5rem] h-[100%] w-full justify-center flex items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[2000] duration-500 bg-gradient-to-r from-black to-slate-500/50 bg-no-repeat ",
                                    children: navContent
                                }),
                                (navContent == "\xdcr\xfcnler" || navContent == "Products") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/Products",
                                    className: "h-[100%] w-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1000] duration-500 bg-gradient-to-r from-black to-slate-500/50 bg-no-repeat",
                                    children: navContent
                                }),
                                (navContent == "Ana Sayfa" || navContent == "Homepage") && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                    to: navContent,
                                    spy: true,
                                    smooth: true,
                                    offset: -62,
                                    duration: 1500,
                                    className: "h-full cursor-pointer w-full flex justify-center items-center bg-[length:0%_100%]  bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-black to-slate-500/50 bg-no-repeat",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__.FontAwesomeIcon, {
                                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__.faHouseChimney,
                                        size: "lg"
                                    })
                                }),
                                navContent == "\xdcr\xfcnler" || navContent == "Products" || navContent == "About" || navContent == "Hakkımızda" || navContent == "Ana Sayfa" || navContent == "Homepage" ? null : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_2__.Link, {
                                    to: navContent,
                                    spy: true,
                                    smooth: true,
                                    offset: -62,
                                    duration: 1500,
                                    className: "px-[0.5rem] h-[100%] w-full flex justify-center items-center bg-[length:0%_100%] hover:cursor-pointer bg-[0%] hover:bg-[length:100%_100%] transition-[1100] duration-500 bg-gradient-to-r from-black to-slate-500/50 bg-no-repeat",
                                    children: navContent
                                })
                            ]
                        }, key);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex flex-col gap-2",
                    children: [
                        ...locales
                    ].sort().map((locale)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                            href: "/",
                            locale: locale,
                            children: locale === "en" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                initial: {
                                    x: 75
                                },
                                animate: {
                                    x: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.5
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_flag_kit__WEBPACK_IMPORTED_MODULE_7__.FlagIcon, {
                                    className: "hover:scale-125 rounded-[4px]",
                                    code: "GB",
                                    size: 27
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
                                initial: {
                                    x: 50
                                },
                                animate: {
                                    x: 0
                                },
                                transition: {
                                    duration: 0.7,
                                    delay: 0.3
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_flag_kit__WEBPACK_IMPORTED_MODULE_7__.FlagIcon, {
                                    code: locale.toUpperCase(),
                                    size: 27,
                                    className: "hover:scale-125 rounded-[4px]"
                                })
                            })
                        }, locale);
                    })
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {
            animate: {
                y: -60,
                opacity: 0
            },
            transition: {
                ease: "linear",
                duration: 0.3
            },
            className: "w-screen h-[4rem] bg-black flex flex-row items-center justify-between pl-4 pr-4 fixed top-0",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: "LOGO"
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5800:
/***/ (() => {



/***/ })

};
;