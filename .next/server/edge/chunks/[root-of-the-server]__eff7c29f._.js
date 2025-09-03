(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__eff7c29f._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/mobilin/src/i18n-config.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "i18n",
    ()=>i18n
]);
const i18n = {
    defaultLocale: 'id',
    locales: [
        'id',
        'en'
    ]
};
}),
"[project]/mobilin/src/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mobilin/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobilin/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/mobilin/node_modules/@formatjs/intl-localematcher/lib/index.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobilin/node_modules/negotiator/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/mobilin/src/i18n-config.ts [middleware-edge] (ecmascript)");
;
;
;
;
function getLocale(request) {
    const negotiatorHeaders = {};
    request.headers.forEach((value, key)=>negotiatorHeaders[key] = value);
    // @ts-ignore locales are readonly
    const locales = __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales;
    let languages = new __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f$negotiator$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"]({
        headers: negotiatorHeaders
    }).languages(locales);
    const locale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f40$formatjs$2f$intl$2d$localematcher$2f$lib$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__["match"])(languages, locales, __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].defaultLocale);
    return locale;
}
function middleware(request) {
    const pathname = request.nextUrl.pathname;
    const pathnameIsMissingLocale = __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$src$2f$i18n$2d$config$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["i18n"].locales.every((locale)=>!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return __TURBOPACK__imported__module__$5b$project$5d2f$mobilin$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
    }
}
const config = {
    // Matcher ignoring `/_next/` and `/api/`
    matcher: [
        '/((?!api|_next/static|_next/image|images|favicon.ico|.*\\.png$).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__eff7c29f._.js.map