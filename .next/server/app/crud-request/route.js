/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/crud-request/route";
exports.ids = ["app/crud-request/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fcrud-request%2Froute&page=%2Fcrud-request%2Froute&appPaths=&pagePath=private-next-app-dir%2Fcrud-request%2Froute.ts&appDir=%2Fworkspaces%2Fnextmastery%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fnextmastery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fcrud-request%2Froute&page=%2Fcrud-request%2Froute&appPaths=&pagePath=private-next-app-dir%2Fcrud-request%2Froute.ts&appDir=%2Fworkspaces%2Fnextmastery%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fnextmastery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_nextmastery_src_app_crud_request_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/crud-request/route.ts */ \"(rsc)/./src/app/crud-request/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/crud-request/route\",\n        pathname: \"/crud-request\",\n        filename: \"route\",\n        bundlePath: \"app/crud-request/route\"\n    },\n    resolvedPagePath: \"/workspaces/nextmastery/src/app/crud-request/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_nextmastery_src_app_crud_request_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZjcnVkLXJlcXVlc3QlMkZyb3V0ZSZwYWdlPSUyRmNydWQtcmVxdWVzdCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmNydWQtcmVxdWVzdCUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGbmV4dG1hc3RlcnklMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRndvcmtzcGFjZXMlMkZuZXh0bWFzdGVyeSZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDSztBQUNsRjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvbmV4dG1hc3Rlcnkvc3JjL2FwcC9jcnVkLXJlcXVlc3Qvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvY3J1ZC1yZXF1ZXN0L3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9jcnVkLXJlcXVlc3RcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvY3J1ZC1yZXF1ZXN0L3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL3dvcmtzcGFjZXMvbmV4dG1hc3Rlcnkvc3JjL2FwcC9jcnVkLXJlcXVlc3Qvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fcrud-request%2Froute&page=%2Fcrud-request%2Froute&appPaths=&pagePath=private-next-app-dir%2Fcrud-request%2Froute.ts&appDir=%2Fworkspaces%2Fnextmastery%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fnextmastery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/crud-request/route.ts":
/*!***************************************!*\
  !*** ./src/app/crud-request/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\nconst data = [\n    {\n        id: 1,\n        message: \"Message no.1\"\n    },\n    {\n        id: 2,\n        message: \"Message no.2\"\n    },\n    {\n        id: 3,\n        message: \"Message no.3\"\n    },\n    {\n        id: 4,\n        message: \"Message no.4\"\n    },\n    {\n        id: 5,\n        message: \"Message no.5\"\n    }\n];\n// Normal get function \n// export async function GET() {\n//     return new Response(JSON.stringify(data), {\n//       status: 201,\n//       headers: {\n//         \"Content-Type\": \"application/json\",\n//       },\n//     });\n//   }\n// dynamic parameter\nasync function GET(request, { params }) {\n    const { id } = params;\n    const message = data.find((mess)=>mess.id === parseInt(id));\n    return new Response(JSON.stringify(message), {\n        status: 201,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n// Post Function Request\nasync function POST(request) {\n    const message = await request.json();\n    const newMessage = {\n        id: message.id,\n        message: message.text\n    };\n    data.push(newMessage);\n    return new Response(JSON.stringify(data), {\n        status: 201,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n// Put Function request\nasync function PUT(request, { params }) {\n    const { id } = params;\n    const body = await request.json();\n    const { text } = body;\n    const update = data.findIndex((d)=>d.id === parseInt(id));\n    data[update].message = text;\n    return new Response(JSON.stringify(data[update]), {\n        status: 201,\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2NydWQtcmVxdWVzdC9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxPQUFPO0lBQ1Q7UUFDSUMsSUFBRztRQUNIQyxTQUFRO0lBQ1o7SUFDQTtRQUNJRCxJQUFHO1FBQ0hDLFNBQVE7SUFDWjtJQUNBO1FBQ0lELElBQUc7UUFDSEMsU0FBUTtJQUNaO0lBQ0E7UUFDSUQsSUFBRztRQUNIQyxTQUFRO0lBQ1o7SUFDQTtRQUNJRCxJQUFHO1FBQ0hDLFNBQVE7SUFDWjtDQUNIO0FBRUQsdUJBQXVCO0FBQ3ZCLGdDQUFnQztBQUNoQyxrREFBa0Q7QUFDbEQscUJBQXFCO0FBQ3JCLG1CQUFtQjtBQUNuQiw4Q0FBOEM7QUFDOUMsV0FBVztBQUNYLFVBQVU7QUFDVixNQUFNO0FBR04sb0JBQW9CO0FBQ2IsZUFBZUMsSUFBSUMsT0FBZSxFQUFFLEVBQUNDLE1BQU0sRUFBc0I7SUFDcEUsTUFBTSxFQUFDSixFQUFFLEVBQUMsR0FBSUk7SUFDZCxNQUFNSCxVQUFVRixLQUFLTSxJQUFJLENBQUMsQ0FBQ0MsT0FBT0EsS0FBS04sRUFBRSxLQUFLTyxTQUFTUDtJQUN2RCxPQUFPLElBQUlRLFNBQVNDLEtBQUtDLFNBQVMsQ0FBQ1QsVUFBUztRQUN4Q1UsUUFBTztRQUNQQyxTQUFTO1lBQ0wsZ0JBQWdCO1FBQ3BCO0lBQ0o7QUFDSjtBQUdBLHdCQUF3QjtBQUNqQixlQUFlQyxLQUFLVixPQUFnQjtJQUN2QyxNQUFNRixVQUFVLE1BQU1FLFFBQVFXLElBQUk7SUFDbEMsTUFBTUMsYUFBYTtRQUNoQmYsSUFBR0MsUUFBUUQsRUFBRTtRQUNiQyxTQUFTQSxRQUFRZSxJQUFJO0lBQ3hCO0lBQ0FqQixLQUFLa0IsSUFBSSxDQUFDRjtJQUNWLE9BQU8sSUFBSVAsU0FBU0MsS0FBS0MsU0FBUyxDQUFDWCxPQUFNO1FBQ3RDWSxRQUFPO1FBQ1BDLFNBQVM7WUFDTCxnQkFBZ0I7UUFDbEI7SUFDTDtBQUNEO0FBR0gsdUJBQXVCO0FBQ2IsZUFBZU0sSUFBSWYsT0FBZ0IsRUFBRSxFQUFDQyxNQUFNLEVBQXNCO0lBQ3hFLE1BQU0sRUFBQ0osRUFBRSxFQUFDLEdBQUlJO0lBQ2QsTUFBTWUsT0FBTyxNQUFNaEIsUUFBUVcsSUFBSTtJQUMvQixNQUFNLEVBQUNFLElBQUksRUFBQyxHQUFHRztJQUNmLE1BQU1DLFNBQVNyQixLQUFLc0IsU0FBUyxDQUFDLENBQUNDLElBQUlBLEVBQUV0QixFQUFFLEtBQUtPLFNBQVNQO0lBQ3JERCxJQUFJLENBQUNxQixPQUFPLENBQUNuQixPQUFPLEdBQUdlO0lBQ3ZCLE9BQU8sSUFBSVIsU0FBU0MsS0FBS0MsU0FBUyxDQUFDWCxJQUFJLENBQUNxQixPQUFPLEdBQUU7UUFDOUNULFFBQU87UUFDUEMsU0FBUztZQUNMLGdCQUFnQjtRQUNuQjtJQUNKO0FBQ0QiLCJzb3VyY2VzIjpbIi93b3Jrc3BhY2VzL25leHRtYXN0ZXJ5L3NyYy9hcHAvY3J1ZC1yZXF1ZXN0L3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICBpZDoxLFxuICAgICAgICBtZXNzYWdlOlwiTWVzc2FnZSBuby4xXCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6MixcbiAgICAgICAgbWVzc2FnZTpcIk1lc3NhZ2Ugbm8uMlwiXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOjMsXG4gICAgICAgIG1lc3NhZ2U6XCJNZXNzYWdlIG5vLjNcIlxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDo0LFxuICAgICAgICBtZXNzYWdlOlwiTWVzc2FnZSBuby40XCJcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6NSxcbiAgICAgICAgbWVzc2FnZTpcIk1lc3NhZ2Ugbm8uNVwiXG4gICAgfSxcbl1cblxuLy8gTm9ybWFsIGdldCBmdW5jdGlvbiBcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4vLyAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeShkYXRhKSwge1xuLy8gICAgICAgc3RhdHVzOiAyMDEsXG4vLyAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgICAgfSxcbi8vICAgICB9KTtcbi8vICAgfVxuXG4gIFxuLy8gZHluYW1pYyBwYXJhbWV0ZXJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDpSZXF1ZXN0LCB7cGFyYW1zfTp7cGFyYW1zOntpZDpzdHJpbmd9fSl7XG4gICAgY29uc3Qge2lkfSA9ICBwYXJhbXNcbiAgICBjb25zdCBtZXNzYWdlID0gZGF0YS5maW5kKChtZXNzKT0+bWVzcy5pZCA9PT0gcGFyc2VJbnQoaWQpKVxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkse1xuICAgICAgICBzdGF0dXM6MjAxLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICB9KVxufVxuXG5cbi8vIFBvc3QgRnVuY3Rpb24gUmVxdWVzdFxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxdWVzdDogUmVxdWVzdCl7XG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgICBpZDptZXNzYWdlLmlkLFxuICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UudGV4dFxuICAgIH1cbiAgICBkYXRhLnB1c2gobmV3TWVzc2FnZSlcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KGRhdGEpLHtcbiAgICAgICBzdGF0dXM6MjAxLFxuICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICB9LFxuICAgIH0pXG4gICB9XG5cbiAgIFxuLy8gUHV0IEZ1bmN0aW9uIHJlcXVlc3RcbiAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBQVVQocmVxdWVzdDogUmVxdWVzdCwge3BhcmFtc306e3BhcmFtczp7aWQ6c3RyaW5nfX0pe1xuICAgIGNvbnN0IHtpZH0gPSAgcGFyYW1zXG4gICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG4gICAgY29uc3Qge3RleHR9ID0gYm9keVxuICAgIGNvbnN0IHVwZGF0ZSA9IGRhdGEuZmluZEluZGV4KChkKT0+ZC5pZCA9PT0gcGFyc2VJbnQoaWQpKVxuICAgIGRhdGFbdXBkYXRlXS5tZXNzYWdlID0gdGV4dFxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoSlNPTi5zdHJpbmdpZnkoZGF0YVt1cGRhdGVdKSx7XG4gICAgICAgc3RhdHVzOjIwMSxcbiAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgIH0pXG4gICB9XG4gICAiXSwibmFtZXMiOlsiZGF0YSIsImlkIiwibWVzc2FnZSIsIkdFVCIsInJlcXVlc3QiLCJwYXJhbXMiLCJmaW5kIiwibWVzcyIsInBhcnNlSW50IiwiUmVzcG9uc2UiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwiaGVhZGVycyIsIlBPU1QiLCJqc29uIiwibmV3TWVzc2FnZSIsInRleHQiLCJwdXNoIiwiUFVUIiwiYm9keSIsInVwZGF0ZSIsImZpbmRJbmRleCIsImQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/crud-request/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fcrud-request%2Froute&page=%2Fcrud-request%2Froute&appPaths=&pagePath=private-next-app-dir%2Fcrud-request%2Froute.ts&appDir=%2Fworkspaces%2Fnextmastery%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fnextmastery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();