webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-7-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-7-2!(webpack)/resolve-url-loader??ref--5-oneOf-7-3!(webpack)/sass-loader/cjs.js??ref--5-oneOf-7-4!./styles/globals.scss ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  color: #333333;\\n  font-family: Roboto, sans-serif;\\n  font-size: 18px;\\n  line-height: 1.5;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 1rem;\\n}\\n\\na {\\n  color: #333333;\\n  text-decoration: underline;\\n  -moz-text-decoration-style: dotted;\\n       text-decoration-style: dotted;\\n}\\n\\nnav {\\n  font-weight: 600;\\n}\\n\\nnav a {\\n  color: #aa9922;\\n  text-decoration: none;\\n  letter-spacing: -0.02em;\\n}\\n\\nnav svg {\\n  background-color: #921;\\n}\\n\\n.page-wrapper {\\n  max-width: 60rem;\\n  margin: 0 auto;\\n}\\n\\np,\\nol,\\nul {\\n  margin: 0 0 1rem 0;\\n  max-width: 36em;\\n  line-height: 1.5;\\n}\\n\\n.p--large {\\n  font-size: 1.25rem;\\n}\\n\\nsection {\\n  margin: 3rem 0;\\n}\\n\\narticle {\\n  max-width: 36rem;\\n}\\n\\n.content-wrapper {\\n  max-width: 40rem;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-weight: bold;\\n  margin: 2rem 0 1rem;\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n  line-height: 1.1;\\n  margin: 2rem 0;\\n}\\n\\nh2 {\\n  font-size: 1.5rem;\\n  line-height: 1.2;\\n}\\n\\nh3 {\\n  font-size: 1.25rem;\\n  line-height: 1.3;\\n}\\n\\nh4 {\\n  font-size: 1rem;\\n  text-transform: uppercase;\\n  line-height: 1.4;\\n}\\n\\nblockquote {\\n  margin: 2rem 0 2rem 0;\\n  padding: 0 0 0 1rem;\\n  border: #444 dotted;\\n  border-width: 0 0 0 1px;\\n}\\n\\n.video-wrapper {\\n  position: relative;\\n  margin-left: -1rem;\\n  margin-right: -1rem;\\n  padding-bottom: 56.25%;\\n  /* 16:9 */\\n  height: 0;\\n}\\n\\n.video-wrapper iframe {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://globals.scss\",\"webpack://config.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,cCFW;EDGX,+BAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,SAAA;EACA,aAAA;AADF;;AAIA;EACE,cCdW;EDeX,0BAAA;EACA,kCAAA;OAAA,6BAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,cCzBY;ED0BZ,qBAAA;EACA,uBAAA;AADF;;AAIA;EACE,sBAAA;AADF;;AAIA;EACE,gBAAA;EACA,cAAA;AADF;;AAIA;;;EAGE,kBAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;AADF;;AAIA;EACE,cAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;;;;EAIE,iBAAA;EACA,mBAAA;AADF;;AAIA;EACE,iBAAA;EACA,gBAAA;EACA,cAAA;AADF;;AAIA;EACE,iBAAA;EACA,gBAAA;AADF;;AAIA;EACE,kBAAA;EACA,gBAAA;AADF;;AAIA;EACE,eAAA;EACA,yBAAA;EACA,gBAAA;AADF;;AAIA;EACE,qBAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;AADF;;AAIA;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,sBAAA;EAAwB,SAAA;EACxB,SAAA;AAAF;;AAGA;EACE,kBAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAAF\",\"sourcesContent\":[\"@import 'config';\\n\\nhtml {\\n  color: $text-color;\\n  font-family: Roboto, sans-serif;\\n  font-size: 18px;\\n  line-height: 1.5;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 1rem; \\n}\\n\\na {\\n  color: $text-color;\\n  text-decoration: underline;\\n  text-decoration-style: dotted;\\n}\\n\\nnav {\\n  font-weight: 600; \\n}\\n\\nnav a {\\n  color: $brand-color;\\n  text-decoration: none;\\n  letter-spacing: -0.02em;\\n}\\n\\nnav svg {\\n  background-color: #921;\\n}\\n\\n.page-wrapper {\\n  max-width: 60rem;\\n  margin: 0 auto;\\n}\\n\\np,\\nol,\\nul{\\n  margin: 0 0 1rem 0;\\n  max-width: 36em;\\n  line-height: 1.5;\\n}\\n\\n.p--large {\\n  font-size: 1.25rem; \\n}\\n\\nsection {\\n  margin: 3rem 0;\\n}\\n\\narticle {\\n  max-width: 36rem;\\n}\\n\\n.content-wrapper {\\n  max-width: 40rem;\\n}\\n\\nh1,\\nh2,\\nh3,\\nh4 {\\n  font-weight: bold;\\n  margin: 2rem 0 1rem;\\n}\\n\\nh1 {\\n  font-size: 2.5rem;\\n  line-height: 1.1;\\n  margin: 2rem 0;\\n}\\n\\nh2 {\\n  font-size: 1.5rem;\\n  line-height: 1.2;\\n}\\n\\nh3 {\\n  font-size: 1.25rem;\\n  line-height: 1.3;\\n}\\n\\nh4 {\\n  font-size: 1rem;\\n  text-transform: uppercase;\\n  line-height: 1.4;\\n}\\n\\nblockquote {\\n  margin: 2rem 0 2rem 0;\\n  padding: 0 0 0 1rem;\\n  border: #444 dotted;\\n  border-width: 0 0 0 1px;\\n}\\n\\n.video-wrapper {\\n  position: relative;\\n  margin-left: -1rem;\\n  margin-right: -1rem;\\n  padding-bottom: 56.25%; /* 16:9 */\\n  height: 0;\\n}\\n\\n.video-wrapper iframe {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n\",\"$brand-color: #aa9922; //#ff3322;\\n$text-color: #333333;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuc2Nzcz8zMGY2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQytGO0FBQy9GLDhCQUE4Qix5RkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxTQUFTLG1CQUFtQixvQ0FBb0Msb0JBQW9CLHFCQUFxQixHQUFHLFVBQVUsY0FBYyxrQkFBa0IsR0FBRyxPQUFPLG1CQUFtQiwrQkFBK0IsdUNBQXVDLHVDQUF1QyxHQUFHLFNBQVMscUJBQXFCLEdBQUcsV0FBVyxtQkFBbUIsMEJBQTBCLDRCQUE0QixHQUFHLGFBQWEsMkJBQTJCLEdBQUcsbUJBQW1CLHFCQUFxQixtQkFBbUIsR0FBRyxpQkFBaUIsdUJBQXVCLG9CQUFvQixxQkFBcUIsR0FBRyxlQUFlLHVCQUF1QixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsYUFBYSxxQkFBcUIsR0FBRyxzQkFBc0IscUJBQXFCLEdBQUcsdUJBQXVCLHNCQUFzQix3QkFBd0IsR0FBRyxRQUFRLHNCQUFzQixxQkFBcUIsbUJBQW1CLEdBQUcsUUFBUSxzQkFBc0IscUJBQXFCLEdBQUcsUUFBUSx1QkFBdUIscUJBQXFCLEdBQUcsUUFBUSxvQkFBb0IsOEJBQThCLHFCQUFxQixHQUFHLGdCQUFnQiwwQkFBMEIsd0JBQXdCLHdCQUF3Qiw0QkFBNEIsR0FBRyxvQkFBb0IsdUJBQXVCLHVCQUF1Qix3QkFBd0IsMkJBQTJCLDRCQUE0QixHQUFHLDJCQUEyQix1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsR0FBRyxPQUFPLHFHQUFxRyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxPQUFPLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sUUFBUSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsMENBQTBDLFVBQVUsdUJBQXVCLG9DQUFvQyxvQkFBb0IscUJBQXFCLEdBQUcsVUFBVSxjQUFjLGtCQUFrQixJQUFJLE9BQU8sdUJBQXVCLCtCQUErQixrQ0FBa0MsR0FBRyxTQUFTLHFCQUFxQixJQUFJLFdBQVcsd0JBQXdCLDBCQUEwQiw0QkFBNEIsR0FBRyxhQUFhLDJCQUEyQixHQUFHLG1CQUFtQixxQkFBcUIsbUJBQW1CLEdBQUcsZ0JBQWdCLHVCQUF1QixvQkFBb0IscUJBQXFCLEdBQUcsZUFBZSx1QkFBdUIsSUFBSSxhQUFhLG1CQUFtQixHQUFHLGFBQWEscUJBQXFCLEdBQUcsc0JBQXNCLHFCQUFxQixHQUFHLHVCQUF1QixzQkFBc0Isd0JBQXdCLEdBQUcsUUFBUSxzQkFBc0IscUJBQXFCLG1CQUFtQixHQUFHLFFBQVEsc0JBQXNCLHFCQUFxQixHQUFHLFFBQVEsdUJBQXVCLHFCQUFxQixHQUFHLFFBQVEsb0JBQW9CLDhCQUE4QixxQkFBcUIsR0FBRyxnQkFBZ0IsMEJBQTBCLHdCQUF3Qix3QkFBd0IsNEJBQTRCLEdBQUcsb0JBQW9CLHVCQUF1Qix1QkFBdUIsd0JBQXdCLDJCQUEyQix5QkFBeUIsR0FBRywyQkFBMkIsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLEdBQUcsMkJBQTJCLFdBQVcsdUJBQXVCLHFCQUFxQjtBQUM1Mkg7QUFDZSxzRkFBdUIsRUFBQyIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/IS4vc3R5bGVzL2dsb2JhbHMuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5hIHtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAtbW96LXRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xcbiAgICAgICB0ZXh0LWRlY29yYXRpb24tc3R5bGU6IGRvdHRlZDtcXG59XFxuXFxubmF2IHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbm5hdiBhIHtcXG4gIGNvbG9yOiAjYWE5OTIyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XFxufVxcblxcbm5hdiBzdmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzkyMTtcXG59XFxuXFxuLnBhZ2Utd3JhcHBlciB7XFxuICBtYXgtd2lkdGg6IDYwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbnAsXFxub2wsXFxudWwge1xcbiAgbWFyZ2luOiAwIDAgMXJlbSAwO1xcbiAgbWF4LXdpZHRoOiAzNmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLnAtLWxhcmdlIHtcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICBtYXJnaW46IDNyZW0gMDtcXG59XFxuXFxuYXJ0aWNsZSB7XFxuICBtYXgtd2lkdGg6IDM2cmVtO1xcbn1cXG5cXG4uY29udGVudC13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogNDByZW07XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbWFyZ2luOiAycmVtIDAgMXJlbTtcXG59XFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4xO1xcbiAgbWFyZ2luOiAycmVtIDA7XFxufVxcblxcbmgyIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMjtcXG59XFxuXFxuaDMge1xcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuMztcXG59XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxufVxcblxcbmJsb2NrcXVvdGUge1xcbiAgbWFyZ2luOiAycmVtIDAgMnJlbSAwO1xcbiAgcGFkZGluZzogMCAwIDAgMXJlbTtcXG4gIGJvcmRlcjogIzQ0NCBkb3R0ZWQ7XFxuICBib3JkZXItd2lkdGg6IDAgMCAwIDFweDtcXG59XFxuXFxuLnZpZGVvLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxuICAvKiAxNjo5ICovXFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi52aWRlby13cmFwcGVyIGlmcmFtZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9nbG9iYWxzLnNjc3NcIixcIndlYnBhY2s6Ly9jb25maWcuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLGNDRlc7RURHWCwrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7QUFERjs7QUFJQTtFQUNFLGNDZFc7RURlWCwwQkFBQTtFQUNBLGtDQUFBO09BQUEsNkJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxjQ3pCWTtFRDBCWixxQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7OztFQUdFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0FBREY7O0FBSUE7Ozs7RUFJRSxpQkFBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUF3QixTQUFBO0VBQ3hCLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ2NvbmZpZyc7XFxuXFxuaHRtbCB7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAxcmVtOyBcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogJHRleHQtY29sb3I7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1zdHlsZTogZG90dGVkO1xcbn1cXG5cXG5uYXYge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgXFxufVxcblxcbm5hdiBhIHtcXG4gIGNvbG9yOiAkYnJhbmQtY29sb3I7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcXG59XFxuXFxubmF2IHN2ZyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTIxO1xcbn1cXG5cXG4ucGFnZS13cmFwcGVyIHtcXG4gIG1heC13aWR0aDogNjByZW07XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxucCxcXG5vbCxcXG51bHtcXG4gIG1hcmdpbjogMCAwIDFyZW0gMDtcXG4gIG1heC13aWR0aDogMzZlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxufVxcblxcbi5wLS1sYXJnZSB7XFxuICBmb250LXNpemU6IDEuMjVyZW07IFxcbn1cXG5cXG5zZWN0aW9uIHtcXG4gIG1hcmdpbjogM3JlbSAwO1xcbn1cXG5cXG5hcnRpY2xlIHtcXG4gIG1heC13aWR0aDogMzZyZW07XFxufVxcblxcbi5jb250ZW50LXdyYXBwZXIge1xcbiAgbWF4LXdpZHRoOiA0MHJlbTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46IDJyZW0gMCAxcmVtO1xcbn1cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICBtYXJnaW46IDJyZW0gMDtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4yO1xcbn1cXG5cXG5oMyB7XFxuICBmb250LXNpemU6IDEuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMS4zO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXG59XFxuXFxuYmxvY2txdW90ZSB7XFxuICBtYXJnaW46IDJyZW0gMCAycmVtIDA7XFxuICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xcbiAgYm9yZGVyOiAjNDQ0IGRvdHRlZDtcXG4gIGJvcmRlci13aWR0aDogMCAwIDAgMXB4O1xcbn1cXG5cXG4udmlkZW8td3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tbGVmdDogLTFyZW07XFxuICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDU2LjI1JTsgLyogMTY6OSAqL1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4udmlkZW8td3JhcHBlciBpZnJhbWUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIixcIiRicmFuZC1jb2xvcjogI2FhOTkyMjsgLy8jZmYzMzIyO1xcbiR0ZXh0LWNvbG9yOiAjMzMzMzMzO1xcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./node_modules/next/dist/compiled/resolve-url-loader/index.js?!./node_modules/next/dist/compiled/sass-loader/cjs.js?!./styles/globals.scss\n");

/***/ })

})