(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{274:function(module,exports,__webpack_require__){var content=__webpack_require__(607);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(609)(content,options);content.locals&&(module.exports=content.locals)},275:function(module,exports,__webpack_require__){__webpack_require__(276),__webpack_require__(419),module.exports=__webpack_require__(420)},337:function(module,exports){},420:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(68);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(603),module)}.call(this,__webpack_require__(143)(module))},603:function(module,exports,__webpack_require__){var map={"./1_no_virtualization.stories.js":604,"./2_callback_api.stories.js":611};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=603},604:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(19),__webpack_require__(23),__webpack_require__(24),__webpack_require__(272),__webpack_require__(37),__webpack_require__(20),__webpack_require__(61),__webpack_require__(104),__webpack_require__(38),__webpack_require__(65),__webpack_require__(16),__webpack_require__(273),__webpack_require__(39),__webpack_require__(25),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__),_storybook_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(68);__webpack_require__(274);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var _ref=react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label",{htmlFor:"count-input"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_16__.storiesOf)("VirtualizedList",module).add("1: no virtualization",(function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)(1e3),2),count=_useState2[0],setCount=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)([]),2),items=_useState4[0],setItems=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_15__.useEffect)((function(){setItems(Array(count).fill(null).map((function(_,i){return{index:i,name:"Item ".concat(i),checked:!1}})))}),[count]);return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"page"},_ref,react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input",{id:"count-input",value:count,onChange:function onChange(e){setCount(parseInt(e.currentTarget.value))}}),react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"scroll"},react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"inner"},items.map((function(i){return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{key:i.name,className:"item"},react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input",{type:"checkbox",value:i.checked,onChange:function onChange(){return function(i){var newItems=items.slice();newItems[i].checked=!newItems[i].checked,setItems(newItems)}(i.index)}}),i.name))})))))}))}.call(this,__webpack_require__(143)(module))},607:function(module,exports,__webpack_require__){(exports=__webpack_require__(608)(!1)).push([module.i,".page {\r\n  margin: 20px;\r\n}\r\n\r\n.page > input {\r\n  margin-bottom: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.scroll {\r\n  height: 400px;\r\n  width: 300px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.item {\r\n  height: 40px;\r\n  box-sizing: border-box;\r\n  padding: 5px;\r\n}\r\n\r\n.item:nth-child(even) {\r\n  background-color: lightgreen;\r\n}\r\n\r\n.item:nth-child(odd) {\r\n  background-color: lightblue;\r\n}\r\n",""]),module.exports=exports},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(19),__webpack_require__(23),__webpack_require__(24),__webpack_require__(272),__webpack_require__(37),__webpack_require__(20),__webpack_require__(61),__webpack_require__(104),__webpack_require__(38),__webpack_require__(65),__webpack_require__(16),__webpack_require__(273),__webpack_require__(39),__webpack_require__(25),__webpack_require__(26);var react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_15___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__),_storybook_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__(68);__webpack_require__(274);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if(Symbol.iterator in Object(arr)||"[object Arguments]"===Object.prototype.toString.call(arr)){var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var VirtualizedList=function(props){for(var numItems=props.numItems,renderItem=props.renderItem,items=[],i=0;i<numItems;i++)items.push(renderItem({index:i}));return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"scroll"},react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"inner"},items))};VirtualizedList.displayName="VirtualizedList";var _ref=react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label",{htmlFor:"count-input"});Object(_storybook_react__WEBPACK_IMPORTED_MODULE_16__.storiesOf)("VirtualizedList",module).add("2: callback api",(function(){var _useState2=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)(1e3),2),count=_useState2[0],setCount=_useState2[1],_useState4=_slicedToArray(Object(react__WEBPACK_IMPORTED_MODULE_15__.useState)([]),2),items=_useState4[0],setItems=_useState4[1];Object(react__WEBPACK_IMPORTED_MODULE_15__.useEffect)((function(){setItems(Array(count).fill(null).map((function(_,i){return{index:i,name:"Item ".concat(i),checked:!1}})))}),[count]);return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{className:"page"},_ref,react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input",{id:"count-input",value:count,onChange:function onChange(e){setCount(parseInt(e.currentTarget.value))}}),react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement(VirtualizedList,{numItems:items.length,renderItem:function renderItem(_ref2){var index=_ref2.index,i=items[index];return react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("div",{key:i.name,className:"item"},react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("label",null,react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement("input",{type:"checkbox",value:i.checked,onChange:function onChange(){return function(i){var newItems=items.slice();newItems[i].checked=!newItems[i].checked,setItems(newItems)}(i.index)}}),i.name))}}))}))}.call(this,__webpack_require__(143)(module))}},[[275,1,2]]]);
//# sourceMappingURL=main.b244ef3c050fa096f081.bundle.js.map