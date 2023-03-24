(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 4);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

function getLocale() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return wx.getSystemInfoSync().language || 'zh-Hans';
}

function setLocale(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale,
  setLocale: setLocale,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"zall-demo-uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var messages = {};

var locale;

{
  locale = wx.getSystemInfoSync().language;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this2 = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this2.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale$1 = i18n.setLocale;
var getLocale$1 = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, wx.getSystemInfoSync().language || 'zh-Hans');

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou'){//百度、快手 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' &&
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    // NOTE 此处将 != 修改为 !==。涉及地方太多恐怕测试不到，如果出现数据对比问题，将其修改回来。
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"zall-demo-uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"zall-demo-uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"zall-demo-uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"zall-demo-uniapp","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }

  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent'])
        .call(this.$scope, event, {
          __args__: toArray(arguments, 1)
        })
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value)
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!**************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/pages.json ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/*!******************************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/utils/uni-app-sdk/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _commonApi = _interopRequireDefault(__webpack_require__(/*! ./common-api */ 23));










var _weixin = _interopRequireDefault(__webpack_require__(/*! ./middle/weixin.js */ 24));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /**
                                                                                                                                                                   * SensorsData uni-app SDK 
                                                                                                                                                                   * APP原生SDK所有API -> JS可用的所有API -> 各端通用的有限的桥API
                                                                                                                                                                   * APP SDK(所有) -> JS 写的 SDK(所有) -> uni-app Bridge SDK(有限)
                                                                                                                                                                   */











var sa = {};

var lib_plugin_track_timer = 0;
var js_uniapp_version = 'js_uniapp:0.0.5';

//检查是否是支持的平台，如果不支持就使用commonAPI
if (typeof _weixin.default === 'undefined') {
  console.error(' uni-app SDK 不支持当前平台,数据不会发送');
  sa = _commonApi.default;
} else {
  sa = _weixin.default;
  /*
                        做一次common-api的遍历
                          如果bridgeAPI都实现了，就结束
                          如果bridgeAPI没有实现，从instance中获取，如果还没有就=common-api
                        */
  Object.keys(_commonApi.default).forEach(function (key) {
    if (!(key in _weixin.default)) {
      if (typeof _weixin.default.instance === 'object' && typeof _weixin.default.instance[key] === 'function') {
        sa[key] = _weixin.default.instance[key].bind(_weixin.default.instance);
      } else {
        sa[key] = _commonApi.default[key].bind(_commonApi.default);
      }
    }
    // 如果是track，先加属性
    if (key === 'track') {
      var oldTrack = sa.track;
      sa.track = function () {
        var arr = [].slice.call(arguments, 0);
        if (++lib_plugin_track_timer === 1) {
          if (typeof arr[1] === 'object' && arr[1] !== null) {
            arr[1]['$lib_plugin_version'] = [js_uniapp_version];
          } else {
            arr[1] = {
              $lib_plugin_version: [js_uniapp_version] };

          }
        }
        return oldTrack.apply(sa, arr);
      };
    }

  });

}var _default =


sa;exports.default = _default;

/***/ }),
/* 23 */
/*!***********************************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/utils/uni-app-sdk/common-api.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * uni-app sdk 公共方法
                                                                                                      * 需要做类型检查，每个方法必须返回 true false，用来作为参数检查的结果
                                                                                                      */

var sa = {
  // 提供扩展性
  instance: null,
  // 提供初始化和配置参数
  init: function init() {
    console.log('common-api,当前平台不支持此方法 init');
  },
  setPara: function setPara() {
    /*
                               server_url:'setServerUrl'   字符串
                               show_log:'enableLog' 布尔
                                
                               app_flush_network_policy:'setFlushNetworkPolicy'数字
                               app_flush_interval:'setFlushInterval'数字
                               app_flush_bulkSize:'setFlushBulkSize'数字
                               app_session_interval_time:'setSessionIntervalTime'数字
                               app_data_collect:'enableDataCollect'布尔
                                
                               mp_auto_track: object
                               */
    console.log('common-api,当前平台不支持此方法 setPara');
  },
  // app专用的方法
  getAppFlushInterval: function getAppFlushInterval() {
    console.log('common-api,当前平台不支持此方法 getAppFlushInterval');
  },
  getAppFlushBulkSize: function getAppFlushBulkSize() {
    console.log('common-api,当前平台不支持此方法 getAppFlushBulkSize');
  },
  getAppSessionIntervalTime: function getAppSessionIntervalTime() {
    console.log('common-api,当前平台不支持此方法 getAppSessionIntervalTime');
  },
  trackAppInstall: function trackAppInstall() {
    console.log('common-api,当前平台不支持此方法 trackAppInstall');
  },
  appFlush: function appFlush() {
    console.log('common-api,当前平台不支持此方法 appFlush');
  },

  removeTimer: function removeTimer() {
    console.log('common-api,当前平台不支持此方法 removeTimer');
  },
  trackTimerStart: function trackTimerStart() {
    console.log('common-api,当前平台不支持此方法 trackTimerStart');
  },
  trackTimerPause: function trackTimerPause() {
    console.log('common-api,当前平台不支持此方法 trackTimerPause');
  },
  trackTimerResume: function trackTimerResume() {
    console.log('common-api,当前平台不支持此方法 trackTimerResume');
  },
  trackTimerEnd: function trackTimerEnd() {
    console.log('common-api,当前平台不支持此方法 trackTimerEnd');
  },
  clearTrackTimer: function clearTrackTimer() {
    console.log('common-api,当前平台不支持此方法 clearTrackTimer');
  },
  trackViewScreen: function trackViewScreen() {
    console.log('common-api,当前平台不支持此方法 trackViewScreen');
  },
  getSuperProperties: function getSuperProperties() {
    console.log('common-api,当前平台不支持此方法 getSuperProperties');
  },
  enableTrackScreenOrientation: function enableTrackScreenOrientation() {
    console.log('common-api,当前平台不支持此方法 enableTrackScreenOrientation');
  },
  resumeTrackScreenOrientation: function resumeTrackScreenOrientation() {
    console.log('common-api,当前平台不支持此方法 resumeTrackScreenOrientation');
  },
  stopTrackScreenOrientation: function stopTrackScreenOrientation() {
    console.log('common-api,当前平台不支持此方法 stopTrackScreenOrientation');
  },
  getScreenOrientation: function getScreenOrientation() {
    console.log('common-api,当前平台不支持此方法 getScreenOrientation');
  },
  profileUnsetPushId: function profileUnsetPushId() {
    console.log('common-api,当前平台不支持此方法 profileUnsetPushId');
  },
  profilePushId: function profilePushId() {
    console.log('common-api,当前平台不支持此方法 profilePushId');
  },
  enableDeepLinkInstallSource: function enableDeepLinkInstallSource() {
    console.log('common-api,当前平台不支持此方法 enableDeepLinkInstallSource');
  },
  trackDeepLinkLaunch: function trackDeepLinkLaunch() {
    console.log('common-api,当前平台不支持此方法 trackDeepLinkLaunch');
  },

  // 各端通用的常用API
  getDistinctID: function getDistinctID() {
    console.log('common-api,当前平台不支持此方法 getDistinctID');
  },
  getAnonymousID: function getAnonymousID() {
    console.log('common-api,当前平台不支持此方法 getAnonymousID');
  },

  register: function register(para) {
    console.log('common-api,当前平台不支持此方法 register');
  },
  unRegister: function unRegister() {
    console.log('common-api,当前平台不支持此方法 unRegister');
  },
  clearRegister: function clearRegister() {
    console.log('common-api,当前平台不支持此方法 clearRegister');
  },

  //各端通用的标准API
  identify: function identify() {
    console.log('common-api,当前平台不支持此方法 identify');
  },
  login: function login() {
    console.log('common-api,当前平台不支持此方法 login');
  },
  logout: function logout() {
    console.log('common-api,当前平台不支持此方法 logout');
  },
  track: function track() {
    console.log('common-api,当前平台不支持此方法 track');
  },
  setProfile: function setProfile() {
    console.log('common-api,当前平台不支持此方法 setProfile');
  },
  setOnceProfile: function setOnceProfile() {
    console.log('common-api,当前平台不支持此方法 setOnceProfile');
  },
  incrementProfile: function incrementProfile() {
    console.log('common-api,当前平台不支持此方法 incrementProfile');
  },
  appendProfile: function appendProfile() {
    console.log('common-api,当前平台不支持此方法 appendProfile');
  },
  unsetProfile: function unsetProfile() {
    console.log('common-api,当前平台不支持此方法 unsetProfile');
  },
  deleteProfile: function deleteProfile() {
    console.log('common-api,当前平台不支持此方法 deleteProfile');
  },

  popupLoadSuccess: function popupLoadSuccess(callback) {
    console.log('common-api,当前平台不支持此方法 popupLoadSuccess');
  },
  popupClose: function popupClose(callback) {
    console.log('common-api,当前平台不支持此方法 popupClose');
  },
  popupClick: function popupClick(callback) {
    console.log('common-api,当前平台不支持此方法 popupClick');
  },
  popupLoadFailed: function popupLoadFailed(callback) {
    console.log('common-api,当前平台不支持此方法 popupLoadFailed');
  },
  enablePopup: function enablePopup() {
    console.log('common-api,当前平台不支持此方法 enablePopup');
  } };var _default =



sa;exports.default = _default;

/***/ }),
/* 24 */
/*!**************************************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/utils/uni-app-sdk/middle/weixin.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;
var _weixin = _interopRequireDefault(__webpack_require__(/*! ../jssdk/weixin.js */ 25));
var _wxPopupEsm = _interopRequireDefault(__webpack_require__(/*! ../plugin/wx-popup.esm.min */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // 原生SDK提供的API

// 提供各端一致的公共API
var sa = {
  // 提供扩展性
  instance: _weixin.default,
  // 提供初始化和配置参数
  init: _weixin.default.init.bind(_weixin.default),
  //弹窗初始化
  popupInit: function popupInit(para) {
    if (typeof para === "object" && para !== null) {
      _weixin.default.usePlugin(_wxPopupEsm.default, para);
    }
  },
  setPara: function setPara(para) {
    para = para || {};
    var defaultValue = {
      autoTrack: false };

    Object.assign(defaultValue, para);
    _weixin.default.setPara.call(_weixin.default, defaultValue);
  },
  // 各端通用的常用API
  getDistinctID: _weixin.default.store.getDistinctId.bind(_weixin.default.store),
  register: _weixin.default.registerApp.bind(_weixin.default),
  // 有这个方法但是效果不同的话，需要覆盖一下
  clearRegister: function clearRegister() {
    console.log('web 中不支持此方法');
  },
  popupLoadSuccess: function popupLoadSuccess(callback) {
    if (_wxPopupEsm.default.CAMPAIGN_ERROR && _wxPopupEsm.default.CAMPAIGN_ERROR['onStart']) {
      delete _wxPopupEsm.default.CAMPAIGN_ERROR['onStart'];
    };
    _wxPopupEsm.default.campaign_listener.onStart = callback;
  },
  popupClose: function popupClose(callback) {
    if (_wxPopupEsm.default.CAMPAIGN_ERROR && _wxPopupEsm.default.CAMPAIGN_ERROR['onEnd']) {
      delete _wxPopupEsm.default.CAMPAIGN_ERROR['onEnd'];
    };
    _wxPopupEsm.default.campaign_listener.onEnd = callback;
  },
  popupClick: function popupClick(callback) {
    _wxPopupEsm.default.info.popup_listener.onClick = callback;
  },
  popupLoadFailed: function popupLoadFailed(callback) {
    if (_wxPopupEsm.default.CAMPAIGN_ERROR && _wxPopupEsm.default.CAMPAIGN_ERROR['onFailed']) {
      delete _wxPopupEsm.default.CAMPAIGN_ERROR['onFailed'];
    };
    _wxPopupEsm.default.campaign_listener.onFailed = callback;
  } };var _default =


sa;exports.default = _default;

/***/ }),
/* 25 */
/*!*************************************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/utils/uni-app-sdk/jssdk/weixin.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _mpHook;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
var _ = {},sa = {
  para: {
    name: "sensors",
    server_url: "",
    send_timeout: 1e3,
    show_log: !1,
    launched: !1,
    allow_amend_share_path: !0,
    max_string_length: 500,
    datasend_timeout: 3e3,
    source_channel: [],
    autoTrack: {
      appLaunch: !0,
      appShow: !0,
      appHide: !0,
      pageShow: !0,
      pageShare: !0,
      mpClick: !1,
      mpFavorite: !0,
      pageLeave: !1 },

    autotrack_exclude_page: { pageShow: [] },
    is_persistent_save: { share: !1, utm: !1 },
    preset_properties: { url_path: !0 },
    preset_events: { moments_page: !1, defer_track: !1, share_info_use_string: !1 },
    batch_send: !0,
    storage_store_key: "sensorsdata2015_wechat",
    storage_prepare_data_key: "sensors_mp_prepare_data" } },

mpHook = (_mpHook = {
  data: 1,
  onLoad: 1,
  onShow: 1,
  onReady: 1,
  onPullDownRefresh: 1,
  onReachBottom: 1,
  onShareAppMessage: 1,
  onShareTimeline: 1 }, _defineProperty(_mpHook, "onPullDownRefresh",
1), _defineProperty(_mpHook, "onReachBottom",
1), _defineProperty(_mpHook, "onPageScroll",
1), _defineProperty(_mpHook, "onResize",
1), _defineProperty(_mpHook, "onTabItemTap",
1), _defineProperty(_mpHook, "onHide",
1), _defineProperty(_mpHook, "onUnload",
1), _mpHook),
logger = "object" == typeof logger ? logger : {};
logger.info = function () {
  if (sa.para.show_log && "object" == typeof console && console.log) try {
    if (3 === arguments.length) return console.log(arguments[0], arguments[1], arguments[2]);
    if (2 === arguments.length) return console.log(arguments[0], arguments[1]);
    if (1 === arguments.length) return console.log(arguments[0]);
  } catch (e) {
    console.log(arguments[0]);
  }
}, sa.setPara = function (e) {
  sa.para = _.extend2Lev(sa.para, e);
  var t = [];
  if (_.isArray(sa.para.source_channel)) for (var a = sa.para.source_channel.length, r = 0; r < a; r++) {-1 === " utm_source utm_medium utm_campaign utm_content utm_term sa_utm ".indexOf(" " + sa.para.source_channel[r] + " ") && t.push(sa.para.source_channel[r]);}
  sa.para.source_channel = t, _.isObject(sa.para.register) && _.extend(_.info.properties, sa.para.register), sa.para.openid_url || (sa.para.openid_url = sa.para.server_url.replace(/([^\/])\/(sa)(\.gif){0,1}/, "$1/mp_login")), "number" != typeof sa.para.send_timeout && (sa.para.send_timeout = 1e3);
  var s = { send_timeout: 6e3, max_length: 6 };
  e && e.datasend_timeout || sa.para.batch_send && (sa.para.datasend_timeout = 1e4), !0 === sa.para.batch_send ? sa.para.batch_send = _.extend({}, s) : _.isObject(sa.para.batch_send) && (sa.para.batch_send = _.extend({}, s, sa.para.batch_send));
  var n = { share: !1, utm: !1 };
  !0 === sa.para.is_persistent_save ? (sa.para.is_persistent_save = _.extend({}, n), sa.para.is_persistent_save.utm = !0) : _.isObject(sa.para.is_persistent_save) && (sa.para.is_persistent_save = _.extend({}, n, sa.para.is_persistent_save)), sa.para.server_url ? sa.para.preset_properties = _.isObject(sa.para.preset_properties) ? sa.para.preset_properties : {} : logger.info("\u8BF7\u4F7F\u7528 setPara() \u65B9\u6CD5\u8BBE\u7F6E server_url \u6570\u636E\u63A5\u6536\u5730\u5740,\u8BE6\u60C5\u53EF\u67E5\u770Bhttps://www.sensorsdata.cn/manual/mp_sdk_new.html#112-%E5%BC%95%E5%85%A5%E5%B9%B6%E9%85%8D%E7%BD%AE%E5%8F%82%E6%95%B0");
}, sa.getServerUrl = function () {
  return sa.para.server_url;
}, sa.status = {};
var ArrayProto = Array.prototype,ObjProto = Object.prototype,slice = ArrayProto.slice,toString = ObjProto.toString,
hasOwnProperty = ObjProto.hasOwnProperty,LIB_VERSION = "1.14.22",LIB_NAME = "MiniProgram",
source_channel_standard = "utm_source utm_medium utm_campaign utm_content utm_term",
latest_source_channel = ["$latest_utm_source", "$latest_utm_medium", "$latest_utm_campaign", "$latest_utm_content", "$latest_utm_term", "$latest_sa_utm"],
latest_share_info = ["$latest_share_distinct_id", "$latest_share_url_path", "$latest_share_depth", "$latest_share_method"],
share_info_key = ["sensors_share_d", "sensors_share_p", "sensors_share_i", "sensors_share_m"],
page_show_time = Date.now(),mpshow_time = null,query_share_depth = 0,share_distinct_id = "",share_method = "",
current_scene = "",is_first_launch = !1,wxSDKVersion = "";
sa.lib_version = LIB_VERSION;
var globalTitle = {},page_route_map = [];
!function () {
  var e = ArrayProto.forEach,t = ArrayProto.indexOf,a = Array.isArray,r = {},s = _.each = function (t, a, s) {
    if (null == t) return !1;
    if (e && t.forEach === e) t.forEach(a, s);else if (t.length === +t.length) {
      for (var n = 0, i = t.length; n < i; n++) {if (n in t && a.call(s, t[n], n, t) === r) return !1;}
    } else for (var o in t) {if (hasOwnProperty.call(t, o) && a.call(s, t[o], o, t) === r) return !1;}
  };
  _.logger = logger, _.extend = function (e) {
    return s(slice.call(arguments, 1), function (t) {
      for (var a in t) {void 0 !== t[a] && (e[a] = t[a]);}
    }), e;
  }, _.extend2Lev = function (e) {
    return s(slice.call(arguments, 1), function (t) {
      for (var a in t) {void 0 !== t[a] && null !== t[a] && (_.isObject(t[a]) && _.isObject(e[a]) ? _.extend(e[a], t[a]) : e[a] = t[a]);}
    }), e;
  }, _.coverExtend = function (e) {
    return s(slice.call(arguments, 1), function (t) {
      for (var a in t) {void 0 !== t[a] && void 0 === e[a] && (e[a] = t[a]);}
    }), e;
  }, _.isArray = a || function (e) {
    return "[object Array]" === toString.call(e);
  }, _.isFunction = function (e) {
    try {
      return /^\s*\bfunction\b/.test(e);
    } catch (e) {
      return !1;
    }
  }, _.isArguments = function (e) {
    return !(!e || !hasOwnProperty.call(e, "callee"));
  }, _.toArray = function (e) {
    return e ? e.toArray ? e.toArray() : _.isArray(e) ? slice.call(e) : _.isArguments(e) ? slice.call(e) : _.values(e) : [];
  }, _.values = function (e) {
    var t = [];
    return null == e ? t : (s(e, function (e) {
      t[t.length] = e;
    }), t);
  }, _.include = function (e, a) {
    var n = !1;
    return null == e ? n : t && e.indexOf === t ? -1 != e.indexOf(a) : (s(e, function (e) {
      if (n || (n = e === a)) return r;
    }), n);
  };
}(), _.trim = function (e) {
  return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
}, _.isObject = function (e) {
  return null != e && "[object Object]" == toString.call(e);
}, _.isEmptyObject = function (e) {
  if (_.isObject(e)) {
    for (var t in e) {if (hasOwnProperty.call(e, t)) return !1;}
    return !0;
  }
  return !1;
}, _.isUndefined = function (e) {
  return void 0 === e;
}, _.isString = function (e) {
  return "[object String]" == toString.call(e);
}, _.isDate = function (e) {
  return "[object Date]" == toString.call(e);
}, _.isBoolean = function (e) {
  return "[object Boolean]" == toString.call(e);
}, _.isNumber = function (e) {
  return "[object Number]" == toString.call(e) && /[\d\.]+/.test(String(e));
}, _.isJSONString = function (e) {
  try {
    JSON.parse(e);
  } catch (e) {
    return !1;
  }
  return !0;
}, _.decodeURIComponent = function (e) {
  var t = "";
  try {
    t = decodeURIComponent(e);
  } catch (a) {
    t = e;
  }
  return t;
}, _.encodeDates = function (e) {
  return _.each(e, function (t, a) {
    _.isDate(t) ? e[a] = _.formatDate(t) : _.isObject(t) && (e[a] = _.encodeDates(t));
  }), e;
}, _.formatDate = function (e) {
  function t(e) {
    return e < 10 ? "0" + e : e;
  }

  return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds());
}, _.searchObjDate = function (e) {
  _.isObject(e) && _.each(e, function (t, a) {
    _.isObject(t) ? _.searchObjDate(e[a]) : _.isDate(t) && (e[a] = _.formatDate(t));
  });
}, _.formatString = function (e) {
  return e.length > sa.para.max_string_length ? (logger.info("\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u9650\u5236\uFF0C\u5DF2\u7ECF\u505A\u622A\u53D6--" + e), e.slice(0, sa.para.max_string_length)) : e;
}, _.searchObjString = function (e) {
  _.isObject(e) && _.each(e, function (t, a) {
    _.isObject(t) ? _.searchObjString(e[a]) : _.isString(t) && (e[a] = _.formatString(t));
  });
}, _.parseSuperProperties = function (e) {
  _.isObject(e) && (_.each(e, function (t, a) {
    if (_.isFunction(t)) try {
      e[a] = t(), _.isFunction(e[a]) && (logger.info("\u60A8\u7684\u5C5E\u6027- " + a + " \u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete e[a]);
    } catch (t) {
      delete e[a], logger.info("\u60A8\u7684\u5C5E\u6027- " + a + " \u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664");
    }
  }), _.strip_sa_properties(e));
}, _.unique = function (e) {
  for (var t, a = [], r = {}, s = 0; s < e.length; s++) {(t = e[s]) in r || (r[t] = !0, a.push(t));}
  return a;
}, _.strip_sa_properties = function (e) {
  return _.isObject(e) ? (_.each(e, function (t, a) {
    if (_.isArray(t)) {
      var r = [];
      _.each(t, function (e) {
        _.isString(e) ? r.push(e) : logger.info("\u60A8\u7684\u6570\u636E-", t, "\u7684\u6570\u7EC4\u91CC\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32,\u5DF2\u7ECF\u5C06\u5176\u5220\u9664");
      }), 0 !== r.length ? e[a] = r : (delete e[a], logger.info("\u5DF2\u7ECF\u5220\u9664\u7A7A\u7684\u6570\u7EC4"));
    }
    _.isString(t) || _.isNumber(t) || _.isDate(t) || _.isBoolean(t) || _.isArray(t) || (logger.info("\u60A8\u7684\u6570\u636E-", t, "-\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete e[a]);
  }), e) : e;
}, _.strip_empty_properties = function (e) {
  var t = {};
  return _.each(e, function (e, a) {
    null != e && (t[a] = e);
  }), t;
}, _.utf8Encode = function (e) {
  var t,a,r,s,n = "";
  for (t = a = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, s = 0; s < r; s++) {
    var i = e.charCodeAt(s),o = null;
    i < 128 ? a++ : o = i > 127 && i < 2048 ? String.fromCharCode(i >> 6 | 192, 63 & i | 128) : String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128), null !== o && (a > t && (n += e.substring(t, a)), n += o, t = a = s + 1);
  }
  return a > t && (n += e.substring(t, e.length)), n;
}, _.base64Encode = function (e) {
  var t,a,r,s,n,i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",o = 0,c = 0,u = "",
  p = [];
  if (!e) return e;
  e = _.utf8Encode(e);
  do {
    t = (n = e.charCodeAt(o++) << 16 | e.charCodeAt(o++) << 8 | e.charCodeAt(o++)) >> 18 & 63, a = n >> 12 & 63, r = n >> 6 & 63, s = 63 & n, p[c++] = i.charAt(t) + i.charAt(a) + i.charAt(r) + i.charAt(s);
  } while (o < e.length);
  switch (u = p.join(""), e.length % 3) {
    case 1:
      u = u.slice(0, -2) + "==";
      break;
    case 2:
      u = u.slice(0, -1) + "=";}

  return u;
}, _.urlSafeBase64 = function () {
  var e = { "+": "-", "/": "_", "=": "." },t = { "-": "+", _: "/", ".": "=" };
  return {
    encode: function encode(t) {
      return t.replace(/[+\/=]/g, function (t) {
        return e[t];
      });
    }, decode: function decode(e) {
      return e.replace(/[-_.]/g, function (e) {
        return t[e];
      });
    }, trim: function trim(e) {
      return e.replace(/[.=]{1,2}$/, "");
    }, isBase64: function isBase64(e) {
      return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e);
    }, isUrlSafeBase64: function isUrlSafeBase64(e) {
      return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e);
    } };

}(), _.btoa = function (e) {
  for (var t, a, r, s, n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", i = "", o = 0, _ = (e = String(e)).length % 3; o < e.length;) {((a = e.charCodeAt(o++)) > 255 || (r = e.charCodeAt(o++)) > 255 || (s = e.charCodeAt(o++)) > 255) && logger.info("Failed to execute 'btoa' : The string to be encoded contains characters outside of the Latin1 range."), i += n.charAt((t = a << 16 | r << 8 | s) >> 18 & 63) + n.charAt(t >> 12 & 63) + n.charAt(t >> 6 & 63) + n.charAt(63 & t);}
  return _ ? i.slice(0, _ - 3) + "===".substring(_) : i;
}, _.urlBase64Encode = function (e) {
  return _.btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
    return String.fromCharCode("0x" + t);
  }));
}, _.rot13obfs = function (e, t) {
  t = "number" == typeof t ? t : 13;
  for (var a = (e = String(e)).split(""), r = 0, s = a.length; r < s; r++) {
    a[r].charCodeAt(0) < 126 && (a[r] = String.fromCharCode((a[r].charCodeAt(0) + t) % 126));
  }
  return a.join("");
}, _.rot13defs = function (e) {
  e = String(e);
  return _.rot13obfs(e, 113);
}, _.getCurrentPage = function () {
  var e = {};
  try {
    var t = getCurrentPages();
    e = t[t.length - 1];
  } catch (e) {
    logger.info(e);
  }
  return e;
}, _.getCurrentPath = function () {
  var e = "\u672A\u53D6\u5230";
  try {
    e = _.getCurrentPage().route;
  } catch (e) {
    logger.info(e);
  }
  return e;
}, _.getIsFirstDay = function () {
  return "object" == typeof sa.store._state && "number" == typeof sa.store._state.first_visit_day_time && sa.store._state.first_visit_day_time > new Date().getTime();
}, _.getCurrentUrl = function (e) {
  var t = _.getCurrentPath(),a = "";
  return _.isObject(e) && e.sensors_mp_encode_url_query && (a = e.sensors_mp_encode_url_query), t ? a ? t + "?" + a : t : "\u672A\u53D6\u5230";
}, _.getPath = function (e) {
  return e = "string" == typeof e ? e.replace(/^\//, "") : "\u53D6\u503C\u5F02\u5E38";
}, _.getMethods = function (e) {
  var t = [];
  for (var a in e) {"function" != typeof e[a] || mpHook[a] || t.push(a);}
  return t;
}, _.isClick = function (e) {
  return !!{ tap: 1, longpress: 1, longtap: 1 }[e];
}, sa.initialState = {
  queue: [],
  isComplete: !1,
  systemIsComplete: !1,
  storeIsComplete: !1,
  checkIsComplete: function checkIsComplete() {
    this.systemIsComplete && this.storeIsComplete && (this.isComplete = !0, this.queue.length > 0 && (_.each(this.queue, function (e) {
      sa[e[0]].apply(sa, slice.call(e[1]));
    }), this.queue = []));
  } },
_.getCustomUtmFromQuery = function (e, t, a, r) {
  if (!_.isObject(e)) return {};
  var s = {};
  if (e.sa_utm) for (var n in e) {"sa_utm" !== n ? _.include(sa.para.source_channel, n) && (s[a + n] = e[n]) : s[r + n] = e[n];} else for (var n in e) {-1 === (" " + source_channel_standard + " ").indexOf(" " + n + " ") ? _.include(sa.para.source_channel, n) && (s[a + n] = e[n]) : s[t + n] = e[n];}
  return s;
}, _.getObjFromQuery = function (e) {
  var t = e.split("?"),a = [],r = {};
  return t && t[1] ? (_.each(t[1].split("&"), function (e) {
    (a = e.split("="))[0] && a[1] && (r[a[0]] = a[1]);
  }), r) : {};
}, _.setStorageSync = function (e, t) {
  var a = function a() {
    wx.setStorageSync(e, t);
  };
  try {
    a();
  } catch (e) {
    logger.info("set Storage fail --", e);
    try {
      a();
    } catch (e) {
      logger.info("set Storage fail again --", e);
    }
  }
}, _.getStorageSync = function (e) {
  var t = "";
  try {
    t = wx.getStorageSync(e);
  } catch (a) {
    try {
      t = wx.getStorageSync(e);
    } catch (e) {
      logger.info("getStorage fail");
    }
  }
  return t;
}, _.getMPScene = function (e) {
  return "number" == typeof e || "string" == typeof e && "" !== e ? e = "wx-" + String(e) : "\u672A\u53D6\u5230\u503C";
}, _.objToParam = function (e, t) {
  if ("[object Object]" !== Object.prototype.toString.call(e)) return logger.info("\u8BF7\u4F20\u5165\u6709\u6548\u5BF9\u8C61"), "";
  var a = [];
  for (var r in e) {if (e.hasOwnProperty(r)) {
      var s = e[r];
      void 0 === s ? a.push(r + "=") : (s = t ? encodeURIComponent(s) : s, a.push(r + "=" + s));
    }}
  return a.join("&");
}, _.delObjectKey = function (e) {
  if ("[object Object]" === Object.prototype.toString.call(e)) for (var t = 0; t < share_info_key.length; t++) {delete e[share_info_key[t]];} else logger.info("\u8BF7\u4F20\u5165\u6709\u6548\u5BF9\u8C61");
}, _.shareInfoData = function (e) {
  var t = {},a = {};
  if (sa.para.preset_events.share_info_use_string) {
    a = e.query;
    for (var r = 0; r < share_info_key.length; r++) {
      if (!a.hasOwnProperty(share_info_key[r])) return {};
      a[share_info_key[r]] = _.decodeURIComponent(a[share_info_key[r]]);
    }
    t = {
      depth: Number(a.sensors_share_d),
      path: a.sensors_share_p || "",
      id: a.sensors_share_i || "",
      method: a.sensors_share_m || "" };

  } else {
    if (!e.query.sampshare) return {};
    if (a = _.decodeURIComponent(e.query.sampshare), !_.isJSONString(a)) return {};
    t = { depth: (a = JSON.parse(a)).d, path: a.p, id: a.i, method: a.m };
  }
  return t;
}, _.setShareInfo = function (e, t) {
  var a = {},r = {},s = sa.store.getDistinctId(),n = sa.store.getFirstId();
  if (e && _.isObject(e.query)) {
    if (a = _.shareInfoData(e), _.isEmptyObject(a)) return {};
    var i = a.depth,o = a.path,c = a.id,u = a.method;
  }
  "string" == typeof c ? (t.$share_distinct_id = c, share_distinct_id = c, r.$latest_share_distinct_id = c) : t.$share_distinct_id = "\u53D6\u503C\u5F02\u5E38", "number" == typeof i ? !share_distinct_id || share_distinct_id !== s && share_distinct_id !== n ? !share_distinct_id || share_distinct_id === s && share_distinct_id === n ? t.$share_depth = "-1" : (t.$share_depth = i + 1, query_share_depth = i + 1, r.$latest_share_depth = i + 1) : (t.$share_depth = i, query_share_depth = i, r.$latest_share_depth = i) : t.$share_depth = "-1", "string" == typeof o ? (t.$share_url_path = o, r.$latest_share_url_path = o) : t.$share_url_path = "\u53D6\u503C\u5F02\u5E38", "string" == typeof u ? (t.$share_method = u, r.$latest_share_method = u) : t.$share_method = "\u53D6\u503C\u5F02\u5E38", _.setLatestShare(r);
}, _.getShareInfo = function () {
  if (sa.para.preset_events.share_info_use_string) {
    var e = {
      sensors_share_i: sa.store.getDistinctId() || "\u53D6\u503C\u5F02\u5E38",
      sensors_share_p: _.getCurrentPath(),
      sensors_share_d: query_share_depth,
      sensors_share_m: share_method };

    return _.objToParam(e, !0);
  }
  var t = JSON.stringify({
    i: sa.store.getDistinctId() || "\u53D6\u503C\u5F02\u5E38",
    p: _.getCurrentPath(),
    d: query_share_depth,
    m: share_method });

  return "sampshare=" + encodeURIComponent(t);
}, _.detectOptionQuery = function (e) {
  if (!e || !_.isObject(e.query)) return {};
  var t,a,r,s,n = {};
  return n.query = _.extend({}, e.query), "string" == typeof n.query.scene && (t = n.query, a = ["utm_source", "utm_content", "utm_medium", "utm_campaign", "utm_term", "sa_utm"].concat(sa.para.source_channel), r = new RegExp("(" + a.join("|") + ")%3D", "i"), 1 === (s = Object.keys(t)).length && "scene" === s[0] && r.test(t.scene)) && (n.scene = n.query.scene, delete n.query.scene), e.query.q && e.query.scancode_time && "101" === String(e.scene).slice(0, 3) && (n.q = String(n.query.q), delete n.query.q, delete n.query.scancode_time), n;
}, _.getMixedQuery = function (e) {
  var t = _.detectOptionQuery(e),a = t.scene,r = t.q,s = t.query;
  for (var n in s) {s[n] = _.decodeURIComponent(s[n]);}
  return a && (a = -1 !== (a = _.decodeURIComponent(a)).indexOf("?") ? "?" + a.replace(/\?/g, "") : "?" + a, _.extend(s, _.getObjFromQuery(a))), r && _.extend(s, _.getObjFromQuery(_.decodeURIComponent(r))), s;
}, _.setUtm = function (e, t) {
  var a = {},r = _.getMixedQuery(e),s = _.getCustomUtmFromQuery(r, "$", "_", "$"),
  n = _.getCustomUtmFromQuery(r, "$latest_", "_latest_", "$latest_");
  return a.pre1 = s, a.pre2 = n, _.extend(t, s), a;
}, _.setSfSource = function (e, t) {
  !_.isEmptyObject(e.query) && e.query._sfs && (t.$sf_source = e.query._sfs, sa.registerApp({ $latest_sf_source: t.$sf_source }));
}, _.setPageSfSource = function (e) {
  try {
    var t = getCurrentPages(),a = JSON.parse(JSON.stringify(t[t.length - 1].options));
    for (var r in a) {a[r] = _.decodeURIComponent(a[r]);}
    !_.isEmptyObject(a) && a._sfs && (e.$sf_source = a._sfs);
  } catch (e) {
    logger.info(e);
  }
};
try {
  var oldSetNavigationBarTitle = wx.setNavigationBarTitle;
  Object.defineProperty(wx, "setNavigationBarTitle", {
    get: function get() {
      return function (e) {
        var t = getCurrentPages(),a = t[t.length - 1].route || "";
        e = _.isObject(e) ? e : {}, globalTitle[a] = e.title, oldSetNavigationBarTitle.call(this, e);
      };
    } });

} catch (e) {
  logger.info(e);
}
_.setRefPage = function () {
  try {
    var e = getCurrentPages();
    if (e && 1 === e.length) {
      var t = e[e.length - 1].route,a = { title: _.getPageTitle(t), route: t };
      page_route_map.length >= 2 ? page_route_map[page_route_map.length - 1].route !== a.route && (page_route_map.push(a), page_route_map.shift()) : page_route_map.push(a);
    }
  } catch (e) {
    logger.info(e);
  }
}, _.getRefPage = function () {
  var e = { route: "\u76F4\u63A5\u6253\u5F00", title: "" };
  try {
    var t = getCurrentPages();
    if (t && t.length >= 2) e.route = t[t.length - 2].route, e.title = _.getPageTitle(e.route);else if (t && t.length >= 1) {
      if (page_route_map.length >= 2) {
        var a = page_route_map;
        e.route = a[a.length - 2].route, e.title = _.getPageTitle(e.route);
      }
      e.route === t[t.length - 1].route && (e = { title: "", route: "\u76F4\u63A5\u6253\u5F00" });
    }
  } catch (e) {
    logger.info(e);
  }
  return e;
}, _.setPageRefData = function (e) {
  var t = _.getRefPage();
  _.isObject(e) && (e.$referrer = t.route, e.$referrer_title = t.title);
}, sa._getPageTitle = _.getPageTitle = function (e) {
  if ("\u672A\u53D6\u5230" === e || !e) return !1;
  var t = "";
  try {
    if (__wxConfig) {
      var a = __wxConfig,r = __wxConfig.page || {},s = r[e] || r[e + ".html"],n = {},i = {};
      if (a.global && a.global.window && a.global.window.navigationBarTitleText && (n.titleVal = a.global.window.navigationBarTitleText), s && s.window && s.window.navigationBarTitleText && (i.titleVal = s.window.navigationBarTitleText), !i.titleVal && __wxAppCode__) {
        var o = __wxAppCode__[e + ".json"];
        o && o.navigationBarTitleText && (i.titleVal = o.navigationBarTitleText);
      }
      if (_.each(globalTitle, function (a, r) {
        if (r === e) return t = a;
      }), 0 === t.length) {
        var c = _.extend(n, i);
        t = c.titleVal;
      }
    }
  } catch (e) {
    logger.info(e);
  }
  return t;
}, _.wxrequest = function (e) {
  if (_.compareSDKVersion(wxSDKVersion, "2.10.0") >= 0) e.timeout = sa.para.datasend_timeout, wx.request(e);else {
    var t = wx.request(e);
    setTimeout(function () {
      _.isObject(t) && _.isFunction(t.abort) && t.abort();
    }, sa.para.datasend_timeout);
  }
}, _.getAppId = function () {
  var e;
  if (wx.getAccountInfoSync && (e = wx.getAccountInfoSync()), _.isObject(e) && _.isObject(e.miniProgram)) return e.miniProgram.appId;
}, _.validId = function (e) {
  return "string" != typeof e && "number" != typeof e || "" === e ? (logger.info("\u8F93\u5165 ID \u7C7B\u578B\u9519\u8BEF"), !1) : "number" != typeof e || (e = String(e), /^\d+$/.test(e)) ? e : (logger.info("\u8F93\u5165 ID \u7C7B\u578B\u9519\u8BEF"), !1);
}, _.compareSDKVersion = function (e, t) {
  e = e.split("."), t = t.split(".");
  for (var a = Math.max(e.length, t.length); e.length < a;) {e.push("0");}
  for (; t.length < a;) {t.push("0");}
  for (var r = 0; r < a; r++) {
    var s = parseInt(e[r]),n = parseInt(t[r]);
    if (s > n) return 1;
    if (s < n) return -1;
  }
  return 0;
}, _.setUpperCase = function (e) {
  return _.isString(e) ? e.toLocaleUpperCase() : e;
}, _.info = {
  currentProps: { $distinctIdType: 0 },
  properties: { $lib: LIB_NAME, $lib_version: String(LIB_VERSION) },
  getSystem: function getSystem() {
    var e = this.properties;

    function t() {
      wx.getSystemInfo({
        success: function success(t) {
          var a, r;
          e.$brand = _.setUpperCase(t.brand), e.$manufacturer = t.brand, e.$model = t.model, e.$screen_width = Number(t.screenWidth), e.$screen_height = Number(t.screenHeight), e.$os = (a = t.platform, "ios" === (r = a.toLowerCase()) ? "iOS" : "android" === r ? "Android" : a), e.$os_version = t.system.indexOf(" ") > -1 ? t.system.split(" ")[1] : t.system, wxSDKVersion = t.SDKVersion;
        }, complete: function complete() {
          var t = new Date().getTimezoneOffset(),a = _.getAppId();
          _.isNumber(t) && (e.$timezone_offset = t), a && (e.$app_id = a), sa.initialState.systemIsComplete = !0, sa.initialState.checkIsComplete();
        } });

    }

    wx.getNetworkType({
      success: function success(t) {
        e.$network_type = _.setUpperCase(t.networkType);
      }, complete: t });

  } },
sa._ = _, _.eventEmitter = function () {
  this.sub = [];
}, _.eventEmitter.prototype = {
  add: function add(e) {
    this.sub.push(e);
  }, emit: function emit(e, t) {
    this.sub.forEach(function (a) {
      a.on(e, t);
    });
  } },
_.eventSub = function (e) {
  sa.events.add(this), this._events = [], this.handle = e, this.ready = !1;
}, _.eventSub.prototype = {
  on: function on(e, t) {
    if (this.ready) {
      if (_.isFunction(this.handle)) try {
        this.handle(e, t);
      } catch (e) {
        logger.info(e);
      }
    } else this._events.push({ event: e, data: t });
  }, isReady: function isReady() {
    var e = this;
    e.ready = !0, e._events.forEach(function (t) {
      if (_.isFunction(e.handle)) try {
        e.handle(t.event, t.data);
      } catch (e) {
        logger.info(e);
      }
    });
  } },
sa.eventSub = _.eventSub, sa.events = new _.eventEmitter(), sa.usePlugin = function (e, t) {
  "function" == typeof e.init && e.init(sa, t);
}, sa.prepareData = function (e, t) {
  if (current_scene && 1154 === current_scene && !sa.para.preset_events.moments_page) return !1;
  var a = {
    distinct_id: this.store.getDistinctId(),
    lib: { $lib: LIB_NAME, $lib_method: "code", $lib_version: String(LIB_VERSION) },
    properties: {} };

  if (_.extend(a, this.store.getUnionId(), e), _.isObject(e.properties) && !_.isEmptyObject(e.properties) && _.extend(a.properties, e.properties), !e.type || "profile" !== e.type.slice(0, 7)) {
    a._track_id = Number(String(Math.random()).slice(2, 5) + String(Math.random()).slice(2, 4) + String(Date.now()).slice(-4)), a.properties = _.extend({}, _.info.properties, sa.store.getProps(), _.info.currentProps, a.properties), "track" === e.type && (a.properties.$is_first_day = _.getIsFirstDay());
    var r = _.getRefPage();
    a.properties.hasOwnProperty("$referrer") || (a.properties.$referrer = r.route), a.properties.hasOwnProperty("$referrer_title") || (a.properties.$referrer_title = r.title);
  }
  a.properties.$time && _.isDate(a.properties.$time) ? (a.time = 1 * a.properties.$time, delete a.properties.$time) : a.time = 1 * new Date(), _.parseSuperProperties(a.properties), _.searchObjDate(a), _.searchObjString(a), logger.info(a), sa.events.emit("send", a), sa.sendStrategy.send(a);
}, sa.store = {
  storageInfo: null, getUUID: function getUUID() {
    return Date.now() + "-" + Math.floor(1e7 * Math.random()) + "-" + Math.random().toString(16).replace(".", "") + "-" + String(31242 * Math.random()).replace(".", "").slice(0, 8);
  }, getStorage: function getStorage() {
    return this.storageInfo ? this.storageInfo : (this.storageInfo = sa._.getStorageSync(sa.para.storage_store_key) || "", this.storageInfo);
  }, _state: {}, mem: {
    mdata: [], getLength: function getLength() {
      return this.mdata.length;
    }, add: function add(e) {
      this.mdata.push(e);
    }, clear: function clear(e) {
      this.mdata.splice(0, e);
    } },
  toState: function toState(e) {
    var t = null;
    _.isJSONString(e) ? (t = JSON.parse(e)).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID()) : _.isObject(e) && (t = e).distinct_id ? this._state = t : this.set("distinct_id", this.getUUID());
  }, getFirstId: function getFirstId() {
    return this._state._first_id || this._state.first_id;
  }, getDistinctId: function getDistinctId() {
    return this._state._distinct_id || this._state.distinct_id;
  }, getUnionId: function getUnionId() {
    var e = {},t = this._state._first_id || this._state.first_id,
    a = this._state._distinct_id || this._state.distinct_id;
    return t && a ? (e.login_id = a, e.anonymous_id = t) : e.anonymous_id = a, e;
  }, getProps: function getProps() {
    return this._state.props || {};
  }, setProps: function setProps(e, t) {
    var a = this._state.props || {};
    t ? this.set("props", e) : (_.extend(a, e), this.set("props", a));
  }, set: function set(e, t) {
    var a = {};
    for (var r in "string" == typeof e ? a[e] = t : "object" == typeof e && (a = e), this._state = this._state || {}, a) {this._state[r] = a[r], "first_id" === r ? delete this._state._first_id : "distinct_id" === r && (delete this._state._distinct_id, sa.events.emit("changeDistinctId"));}
    this.save();
  }, change: function change(e, t) {
    this._state["_" + e] = t;
  }, encryptStorage: function encryptStorage() {
    var e = this.getStorage(),t = "data:enc;";
    _.isObject(e) ? e = t + _.rot13obfs(JSON.stringify(e)) : _.isString(e) && -1 === e.indexOf(t) && (e = t + _.rot13obfs(e)), sa._.setStorageSync(sa.para.storage_store_key, e);
  }, save: function save() {
    var e = JSON.parse(JSON.stringify(this._state));
    if (delete e._first_id, delete e._distinct_id, sa.para.encrypt_storage) {
      e = "data:enc;" + _.rot13obfs(JSON.stringify(e));
    }
    sa._.setStorageSync(sa.para.storage_store_key, e);
  }, init: function init() {
    var e = this.getStorage();
    if (e) _.isString(e) && -1 !== e.indexOf("data:enc;") && (e = e.substring("data:enc;".length), e = JSON.parse(_.rot13defs(e))), this.toState(e);else {
      is_first_launch = !0;
      var t = new Date(),a = t.getTime();
      t.setHours(23), t.setMinutes(59), t.setSeconds(60), sa.setOnceProfile({ $first_visit_time: new Date() }), this.set({
        distinct_id: this.getUUID(),
        first_visit_time: a,
        first_visit_day_time: t.getTime() });

    }
  } },
sa.setProfile = function (e, t) {
  sa.prepareData({ type: "profile_set", properties: e }, t);
}, sa.setOnceProfile = function (e, t) {
  sa.prepareData({ type: "profile_set_once", properties: e }, t);
}, sa.appendProfile = function (e, t) {
  if (!_.isObject(e)) return !1;
  _.each(e, function (t, a) {
    _.isString(t) ? e[a] = [t] : _.isArray(t) || (delete e[a], logger.info("appendProfile\u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4"));
  }), sa.prepareData({ type: "profile_append", properties: e }, t);
}, sa.incrementProfile = function (e, t) {
  if (!_.isObject(e)) return !1;
  var a = e;
  _.isString(e) && ((e = {})[a] = 1), sa.prepareData({ type: "profile_increment", properties: e }, t);
}, sa.track = function (e, t, a) {
  this.prepareData({ type: "track", event: e, properties: t }, a);
}, sa.identify = function (e, t) {
  if (e = _.validId(e)) {
    var a = sa.store.getFirstId();
    !0 === t ? a ? sa.store.set("first_id", e) : sa.store.set("distinct_id", e) : a ? sa.store.change("first_id", e) : sa.store.change("distinct_id", e);
  }
}, sa.trackSignup = function (e, t, a, r) {
  var s = sa.store.getFirstId() || sa.store.getDistinctId();
  sa.store.set("distinct_id", e), sa.prepareData({
    original_id: s,
    distinct_id: e,
    type: "track_signup",
    event: t,
    properties: a },
  r);
}, sa.registerApp = function (e) {
  console.log('111', e);
  _.isObject(e) && !_.isEmptyObject(e) && (_.info.currentProps = _.extend(_.info.currentProps, e));
}, sa.register = function (e) {
  _.isObject(e) && !_.isEmptyObject(e) && sa.store.setProps(e);
}, sa.clearAllRegister = function () {
  sa.store.setProps({}, !0);
}, sa.clearAllProps = function (e) {
  var t = sa.store.getProps(),a = {};
  _.isArray(e) && (_.each(t, function (t, r) {
    _.include(e, r) || (a[r] = t);
  }), sa.store.setProps(a, !0));
}, sa.clearAppRegister = function (e) {
  _.isArray(e) && _.each(_.info.currentProps, function (t, a) {
    _.include(e, a) && delete _.info.currentProps[a];
  });
}, _.setLatestChannel = function (e) {
  _.isEmptyObject(e) || (function (e, t) {
    var a = !1;
    for (var r in t) {e[t[r]] && (a = !0);}
    return a;
  }(e, latest_source_channel) && (sa.clearAppRegister(latest_source_channel), sa.clearAllProps(latest_source_channel)), sa.para.is_persistent_save.utm ? sa.register(e) : sa.registerApp(e));
}, _.setLatestShare = function (e) {
  (e.$latest_share_depth || e.$latest_share_distinct_id || e.$latest_share_url_path || e.$latest_share_method) && (sa.clearAppRegister(latest_share_info), sa.clearAllProps(latest_share_info), sa.para.is_persistent_save.share ? sa.register(e) : sa.registerApp(e));
}, sa.login = function (e, p) {
  if (e = _.validId(e)) {
    var t = sa.store.getFirstId(),a = sa.store.getDistinctId();
    if (_.isObject(p) && !_.isEmptyObject(p)) _.info.currentProps = _.extend(_.info.currentProps, p);
    e !== a && (t ? sa.trackSignup(e, "$SignUp") : (sa.store.set("first_id", a), sa.trackSignup(e, "$SignUp")));
  }
}, sa.getAnonymousID = function () {
  if (!_.isEmptyObject(sa.store._state)) return sa.store._state._first_id || sa.store._state.first_id || sa.store._state._distinct_id || sa.store._state.distinct_id;
  logger.info("\u8BF7\u5148\u521D\u59CB\u5316SDK");
}, sa.logout = function (e) {
  var t = sa.store.getFirstId();
  _.info.currentProps.$distinctIdType = 0;
  t ? (sa.store.set("first_id", ""), !0 === e ? sa.store.set("distinct_id", sa.store.getUUID()) : sa.store.set("distinct_id", t)) : logger.info("\u6CA1\u6709first_id\uFF0Clogout\u5931\u8D25");
}, sa.getLocation = function () {
}, sa.openid = {
  getRequest: function getRequest(e) {
    wx.login({
      success: function success(t) {
        t.code && sa.para.appid && sa.para.openid_url ? _.wxrequest({
          url: sa.para.openid_url + "&code=" + t.code + "&appid=" + sa.para.appid,
          method: "GET",
          complete: function complete(t) {
            _.isObject(t) && _.isObject(t.data) && t.data.openid ? e(t.data.openid) : e();
          } }) :
        e();
      } });

  }, getWXStorage: function getWXStorage() {
    var e = sa.store.getStorage();
    if (e && _.isObject(e)) return e.openid;
  }, getOpenid: function getOpenid(e) {
    if (!sa.para.appid) return e(), !1;
    var t = this.getWXStorage();
    t ? e(t) : this.getRequest(e);
  } },
sa.initial = function () {
  this._.info.getSystem(), this.store.init();
}, sa.init = function (e) {
  if (!0 === this.hasInit) return !1;
  this.hasInit = !0, sa.setPara(e), sa.para.encrypt_storage && this.store.encryptStorage(), sa.para.batch_send && (wx.getStorage({
    key: sa.para.storage_prepare_data_key,
    complete: function complete(e) {
      var t = e.data && _.isArray(e.data) ? e.data : [];
      sa.store.mem.mdata = t.concat(sa.store.mem.mdata), sa.sendStrategy.syncStorage = !0;
    } }),
  sa.sendStrategy.batchInterval()), sa.initialState.storeIsComplete = !0, sa.initialState.checkIsComplete();
}, sa.getPresetProperties = function () {
  if (_.info && _.info.properties && _.info.properties.$lib) {
    var e = {};
    _.each(_.info.currentProps, function (t, a) {
      0 === a.indexOf("$") && (e[a] = t);
    });
    var t = _.extend(e, {
      $url_path: _.getCurrentPath(),
      $is_first_day: _.getIsFirstDay() },
    _.info.properties, sa.store.getProps());
    return delete t.$lib, t;
  }
  return {};
}, sa.setProperties = function (e) {
  var p = sa.getPresetProperties();
  console.log('----------------------', p);
  Object.assign(p, e);
  _.info.properties = p;
}, _.autoExeQueue = function () {
  return {
    items: [], enqueue: function enqueue(e) {
      this.items.push(e), this.start();
    }, dequeue: function dequeue() {
      return this.items.shift();
    }, getCurrentItem: function getCurrentItem() {
      return this.items[0];
    }, isRun: !1, start: function start() {
      this.items.length > 0 && !this.isRun && (this.isRun = !0, this.getCurrentItem().start());
    }, close: function close() {
      this.dequeue(), this.isRun = !1, this.start();
    } };

}, sa.requestQueue = function (e) {
  this.url = e.url;
}, sa.requestQueue.prototype.isEnd = function () {
  this.received || (this.received = !0, this.close());
}, sa.requestQueue.prototype.start = function () {
  var e = this;
  _.wxrequest({
    url: this.url, method: "GET", complete: function complete() {
      e.isEnd();
    } });

}, sa.dataQueue = _.autoExeQueue(), sa.sendStrategy = {
  dataHasSend: !0, dataHasChange: !1, syncStorage: !1, failTime: 0, onAppHide: function onAppHide() {
    sa.para.batch_send && this.batchSend();
  }, send: function send(e) {
    if (!sa.para.server_url) return !1;
    sa.para.batch_send ? (this.dataHasChange = !0, sa.store.mem.getLength() >= 500 && (logger.info("\u6570\u636E\u91CF\u5B58\u50A8\u8FC7\u5927\uFF0C\u6709\u5F02\u5E38"), sa.store.mem.mdata.shift()), sa.store.mem.add(e), sa.store.mem.getLength() >= sa.para.batch_send.max_length && this.batchSend()) : this.queueSend(e);
  }, queueSend: function queueSend(e) {
    e._flush_time = Date.now(), e = JSON.stringify(e), e = -1 !== sa.para.server_url.indexOf("?") ? sa.para.server_url + "&data=" + encodeURIComponent(_.base64Encode(e)) : sa.para.server_url + "?data=" + encodeURIComponent(_.base64Encode(e));
    var t = new sa.requestQueue({ url: e });
    t.close = function () {
      sa.dataQueue.close();
    }, sa.dataQueue.enqueue(t);
  }, wxrequest: function wxrequest(e) {
    if (_.isArray(e.data) && e.data.length > 0) {
      var t = Date.now();
      e.data.forEach(function (e) {
        e._flush_time = t;
      }), e.data = JSON.stringify(e.data), _.wxrequest({
        url: sa.para.server_url,
        method: "POST",
        dataType: "text",
        data: "data_list=" + encodeURIComponent(_.base64Encode(e.data)),
        success: function success() {
          e.success(e.len);
        },
        fail: function fail() {
          e.fail();
        } });

    } else e.success(e.len);
  }, batchSend: function batchSend() {
    if (this.dataHasSend) {
      sa.store.mem.mdata.forEach(function (v) {
        if (v && v.properties && null == v.properties.$distinctIdType) {
          console.log('--request interceptors--', v);
          Object.assign(v.properties, { $distinctIdType: _.info.currentProps.$distinctIdType });
        }
      });
      var e,t,a = sa.store.mem.mdata;
      (t = (e = a.length >= 100 ? a.slice(0, 100) : a).length) > 0 && (this.dataHasSend = !1, this.wxrequest({
        data: e,
        len: t,
        success: this.batchRemove.bind(this),
        fail: this.sendFail.bind(this) }));

    }
  }, sendFail: function sendFail() {
    this.dataHasSend = !0, this.failTime++;
  }, batchRemove: function batchRemove(e) {
    sa.store.mem.clear(e), this.dataHasSend = !0, this.dataHasChange = !0, this.batchWrite(), this.failTime = 0;
  }, is_first_batch_write: !0, batchWrite: function batchWrite() {
    var e = this;
    this.dataHasChange && (this.is_first_batch_write && (this.is_first_batch_write = !1, setTimeout(function () {
      e.batchSend();
    }, 1e3)), this.dataHasChange = !1, this.syncStorage && sa._.setStorageSync(sa.para.storage_prepare_data_key, sa.store.mem.mdata));
  }, batchInterval: function batchInterval() {
    var e = this;
    !function t() {
      setTimeout(function () {
        e.batchWrite(), t();
      }, 500);
    }(), function t() {
      setTimeout(function () {
        e.batchSend(), t();
      }, sa.para.batch_send.send_timeout * Math.pow(2, e.failTime));
    }();
  } },
sa.setOpenid = function (e, t) {
  sa.store.set("openid", e), t ? sa.store.set("distinct_id", e) : sa.identify(e, !0);
}, sa.initWithOpenid = function (e, t) {
  (e = e || {}).appid && (sa.para.appid = e.appid), sa.openid.getOpenid(function (a) {
    a && sa.setOpenid(a, e.isCoverLogin), t && _.isFunction(t) && t(a), sa.init(e);
  });
}, sa.setWebViewUrl = function (e, t) {
  if (!_.isString(e) || "" === e) return logger.info("error:\u8BF7\u4F20\u5165\u6B63\u786E\u7684 URL \u683C\u5F0F"), !1;
  e = decodeURIComponent(e);
  var a,r = /([^?#]+)(\?[^#]*)?(#.*)?/.exec(e),s = r[1] || "",n = r[2] || "",i = r[3] || "",o = "",
  c = sa.store.getDistinctId() || "",u = sa.store.getFirstId() || "";
  _.urlSafeBase64 && _.urlSafeBase64.encode ? c = c ? _.urlSafeBase64.trim(_.urlSafeBase64.encode(_.urlBase64Encode(c))) : "" : this._.rot13obfs && (c = c ? _.rot13obfs(c) : ""), c = encodeURIComponent(c);
  var p = u ? "f" + c : "d" + c;
  t ? (a = i.indexOf("_sasdk"), o = i.indexOf("?") > -1 ? a > -1 ? s + n + "#" + i.substring(1, a) + "_sasdk=" + p : s + n + "#" + i.substring(1) + "&_sasdk=" + p : s + n + "#" + i.substring(1) + "?_sasdk=" + p) : (a = n.indexOf("_sasdk"), o = /^\?(\w)+/.test(n) ? a > -1 ? s + "?" + n.substring(1, a) + "_sasdk=" + p + i : s + "?" + n.substring(1) + "&_sasdk=" + p + i : s + "?" + n.substring(1) + "_sasdk=" + p + i);
  return o;
}, _.each(["setProfile", "setOnceProfile", "track", "quick", "incrementProfile", "appendProfile", "login", "logout", "registerApp", "register", "clearAllRegister", "clearAllProps", "clearAppRegister"], function (e) {
  var t = sa[e];
  sa[e] = function () {
    sa.initialState.isComplete ? t.apply(sa, arguments) : sa.initialState.queue.push([e, arguments]);
  };
}), _.setQuery = function (e, t) {
  if (e && _.isObject(e) && !_.isEmptyObject(e)) {
    var a = [];
    return _.each(e, function (e, r) {
      "q" === r && _.isString(e) && 0 === e.indexOf("http") || (t ? a.push(r + "=" + e) : a.push(r + "=" + _.decodeURIComponent(e)));
    }), a.join("&");
  }
  return "";
}, _.getUtmFromPage = function () {
  var e = {};
  try {
    var t = getCurrentPages(),a = JSON.parse(JSON.stringify(t[t.length - 1].options));
    for (var r in a) {a[r] = _.decodeURIComponent(a[r]);}
    e = _.getCustomUtmFromQuery(a, "$", "_", "$");
  } catch (e) {
    logger.info(e);
  }
  return e;
}, _.sendPageLeave = function () {
  var e = {};
  try {
    var t = getCurrentPages();
    e = t[t.length - 1];
  } catch (e) {
    logger.info(e);
  }
  var a = e.route;
  if (page_show_time >= 0 && "" !== a) {
    var r = {},s = _.getPageTitle(a),n = (Date.now() - page_show_time) / 1e3;
    r.$url_query = e.sensors_mp_url_query ? e.sensors_mp_url_query : "", r.$url_path = a, r.$title = s, r.event_duration = n, sa.track("$MPPageLeave", r), page_show_time = -1;
  }
};
{var












  clickTrack = function clickTrack(e) {
    var t,a = {},r = {},s = e.currentTarget || {},n = e.target || {};
    if (_.isObject(sa.para.framework) && _.isObject(sa.para.framework.taro) && !sa.para.framework.taro.createApp && n.id && s.id && n.id !== s.id) return !1;
    var i = s.dataset || {};
    if (t = e.type, a.$element_id = s.id, a.$element_type = i.type, a.$element_content = i.content, a.$element_name = i.name, _.isObject(e.event_prop) && (r = e.event_prop), t && _.isClick(t)) {
      if (sa.para.preset_events && sa.para.preset_events.collect_element && !1 === sa.para.preset_events.collect_element(arguments[0])) return !1;
      a.$url_path = _.getCurrentPath(), _.setPageRefData(a), a = _.extend(a, r), sa.track("$MPClick", a);
    }
  };var mp_proxy = function mp_proxy(e, t, a) {var r = sa.autoTrackCustom[a];if (e[t]) {var s = e[t];e[t] = function () {"onLaunch" === t && (this[sa.para.name] = sa), !sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && !sa.para.autoTrackIsFirst[a] ? (s.apply(this, arguments), r.apply(this, arguments)) : (!0 === sa.para.autoTrackIsFirst || _.isObject(sa.para.autoTrackIsFirst) && sa.para.autoTrackIsFirst[a]) && (r.apply(this, arguments), s.apply(this, arguments));};} else e[t] = function () {"onLaunch" === t && (this[sa.para.name] = sa), r.apply(this, arguments);};};

  var click_proxy = function click_proxy(e, t) {
    var a = e[t];
    e[t] = function () {
      var e = a.apply(this, arguments),t = arguments[0];
      return _.isObject(t) && (sa.para.preset_events.defer_track ? setTimeout(function () {
        clickTrack(t);
      }, 0) : clickTrack(t)), e;
    };
  },tabProxy = function tabProxy(e) {
    var t = e.onTabItemTap;
    e.onTabItemTap = function (e) {
      t && t.apply(this, arguments);
      var a = {};
      e && (a.$element_content = e.text), a.$element_type = "tabBar", a.$url_path = _.getCurrentPath(), _.setPageRefData(a), sa.track("$MPClick", a);
    };
  },pageLeaveProxy = function pageLeaveProxy(e) {
    var t = e.onHide;
    e.onHide = function () {
      t && t.apply(this, arguments), _.sendPageLeave();
    };
    var a = e.onUnload;
    e.onUnload = function () {
      a && a.apply(this, arguments), _.sendPageLeave();
    };
  };
}
sa.autoTrackCustom = {
  trackCustom: function trackCustom(e, t, a) {
    var r = sa.para.autoTrack[e],s = "";
    sa.para.autoTrack && r && ("function" == typeof r ? (s = r(), _.isObject(s) && _.extend(t, s)) : _.isObject(r) && (_.extend(t, r), sa.para.autoTrack[e] = !0), sa.track(a, t));
  }, appLaunch: function appLaunch(e, t) {
    "object" != typeof this || this.trackCustom || (this[sa.para.name] = sa);
    var a = {};
    e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672A\u53D6\u5230\u503C", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: a.$url_path })), _.setShareInfo(e, a);
    var r = _.setUtm(e, a);
    is_first_launch ? (a.$is_first_time = !0, _.isEmptyObject(r.pre1) || sa.setOnceProfile(r.pre1)) : a.$is_first_time = !1, _.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({ $latest_scene: a.$scene }), a.$url_query = _.setQuery(e.query), _.setPageRefData(a), t ? (a = _.extend(a, t), sa.track("$MPLaunch", a)) : sa.para.autoTrack && sa.para.autoTrack.appLaunch && sa.autoTrackCustom.trackCustom("appLaunch", a, "$MPLaunch");
  }, appShow: function appShow(e, t) {
    var a = {};
    mpshow_time = new Date().getTime(), e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672A\u53D6\u5230\u503C", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: a.$url_path })), !_.isObject(sa.para.preset_properties.location) || "wgs84" !== sa.para.preset_properties.location.type && "gcj02" !== sa.para.preset_properties.location.type || sa.getLocation(), _.setShareInfo(e, a);
    var r = _.setUtm(e, a);
    _.setLatestChannel(r.pre2), _.setSfSource(e, a), _.setPageRefData(a), sa.registerApp({ $latest_scene: a.$scene }), a.$url_query = _.setQuery(e.query), t ? (a = _.extend(a, t), sa.track("$MPShow", a)) : sa.para.autoTrack && sa.para.autoTrack.appShow && sa.autoTrackCustom.trackCustom("appShow", a, "$MPShow");
  }, appHide: function appHide(e) {
    var t = new Date().getTime(),a = {};
    a.$url_path = _.getCurrentPath(), mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (a.event_duration = (t - mpshow_time) / 1e3), _.setPageRefData(a), e ? (a = _.extend(a, e), sa.track("$MPHide", a)) : sa.para.autoTrack && sa.para.autoTrack.appHide && sa.autoTrackCustom.trackCustom("appHide", a, "$MPHide"), sa.sendStrategy.onAppHide();
  }, pageLoad: function pageLoad(e) {
    current_scene && 1010 === current_scene && e && (e.sampshare && delete e.sampshare, _.delObjectKey(e)), e && _.isObject(e) && (this.sensors_mp_url_query = _.setQuery(e), this.sensors_mp_encode_url_query = _.setQuery(e, !0));
  }, pageShow: function pageShow() {
    page_show_time = Date.now();
    var e = {},t = _.getCurrentPath(),a = _.getPageTitle(t);
    _.setRefPage(), e.$url_path = t, e.$url_query = this.sensors_mp_url_query ? this.sensors_mp_url_query : "", e = _.extend(e, _.getUtmFromPage()), _.setPageRefData(e), _.setPageSfSource(e), a && (e.$title = a), sa.para.onshow ? sa.para.onshow(sa, t, this) : _.isObject(sa.para.autotrack_exclude_page) && _.isArray(sa.para.autotrack_exclude_page.pageShow) && -1 !== sa.para.autotrack_exclude_page.pageShow.indexOf(t) || sa.autoTrackCustom.trackCustom("pageShow", e, "$MPViewScreen"), !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: t });
  }, pageShare: function pageShare(e) {
    var t = e.onShareAppMessage;
    e.onShareAppMessage = function () {
      share_method = "\u8F6C\u53D1\u6D88\u606F\u5361\u7247";
      var e = t.apply(this, arguments);
      if (sa.para.autoTrack && sa.para.autoTrack.pageShare) {
        var a = { $url_path: _.getCurrentPath(), $share_depth: query_share_depth, $share_method: share_method };
        _.setPageRefData(a), sa.autoTrackCustom.trackCustom("pageShare", a, "$MPShare");
      }
      return sa.para.allow_amend_share_path && ("object" != typeof e && ((e = {}).path = _.getCurrentUrl(this)), "object" != typeof e || void 0 !== e.path && "" !== e.path || (e.path = _.getCurrentUrl(this)), "object" == typeof e && "string" == typeof e.path && (-1 === e.path.indexOf("?") ? e.path = e.path + "?" : "&" !== e.path.slice(-1) && (e.path = e.path + "&")), e.path = e.path + _.getShareInfo()), e;
    };
  }, pageShareTimeline: function pageShareTimeline(e) {
    var t = e.onShareTimeline;
    e.onShareTimeline = function () {
      share_method = "\u670B\u53CB\u5708\u5206\u4EAB";
      var e = t.apply(this, arguments);
      if (sa.para.autoTrack && sa.para.autoTrack.pageShare) {
        var a = { $url_path: _.getCurrentPath(), $share_depth: query_share_depth, $share_method: share_method };
        _.setPageRefData(a), sa.autoTrackCustom.trackCustom("pageShare", a, "$MPShare");
      }
      return sa.para.allow_amend_share_path && ("object" != typeof e && (e = {}), "object" == typeof e && void 0 === e.query && (e.query = ""), "object" == typeof e && "string" == typeof e.query && "" !== e.query && "&" !== e.query.slice(-1) && (e.query = e.query + "&"), e.query = e.query + _.getShareInfo()), e;
    };
  }, pageAddFavorites: function pageAddFavorites() {
    var e = {};
    e.$url_path = _.getCurrentPath(), sa.para.autoTrack && sa.para.autoTrack.mpFavorite && sa.autoTrackCustom.trackCustom("mpFavorite", e, "$MPAddFavorites");
  } },
sa.quick = function () {
  var e = arguments[0],t = arguments[1],a = arguments[2],r = _.isObject(a) ? a : {};
  if ("getAnonymousID" === e) {
    if (!_.isEmptyObject(sa.store._state)) return sa.store._state._first_id || sa.store._state.first_id || sa.store._state._distinct_id || sa.store._state.distinct_id;
    logger.info("\u8BF7\u5148\u521D\u59CB\u5316SDK");
  } else "appLaunch" === e || "appShow" === e ? t ? sa.autoTrackCustom[e](t, r) : logger.info("App\u7684launch\u548Cshow\uFF0C\u5728sensors.quick\u7B2C\u4E8C\u4E2A\u53C2\u6570\u5FC5\u987B\u4F20\u5165App\u7684options\u53C2\u6570") : "appHide" === e && (r = _.isObject(t) ? t : {}, sa.autoTrackCustom[e](r));
}, sa.appLaunch = function (e, t) {
  var a = {};
  e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672A\u53D6\u5230\u503C", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: a.$url_path })), _.setShareInfo(e, a);
  var r = _.setUtm(e, a);
  is_first_launch ? (a.$is_first_time = !0, _.isEmptyObject(r.pre1) || sa.setOnceProfile(r.pre1)) : a.$is_first_time = !1, _.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({ $latest_scene: a.$scene }), a.$url_query = _.setQuery(e.query), _.setPageRefData(t), _.isObject(t) && (a = _.extend(a, t)), sa.track("$MPLaunch", a);
}, sa.appShow = function (e, t) {
  var a = {};
  mpshow_time = new Date().getTime(), e && e.scene ? (current_scene = e.scene, a.$scene = _.getMPScene(e.scene)) : a.$scene = "\u672A\u53D6\u5230\u503C", e && e.scene && 1010 === e.scene && e.query && (e.query.sampshare && delete e.query.sampshare, _.delObjectKey(e.query)), e && e.path && (a.$url_path = _.getPath(e.path), !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: a.$url_path })), !_.isObject(sa.para.preset_properties.location) || "wgs84" !== sa.para.preset_properties.location.type && "gcj02" !== sa.para.preset_properties.location.type || sa.getLocation(), _.setShareInfo(e, a);
  var r = _.setUtm(e, a);
  _.setLatestChannel(r.pre2), _.setSfSource(e, a), sa.registerApp({ $latest_scene: a.$scene }), a.$url_query = _.setQuery(e.query), _.setPageRefData(a), _.isObject(t) && (a = _.extend(a, t)), sa.track("$MPShow", a);
}, sa.appHide = function (e) {
  var t = new Date().getTime(),a = {};
  a.$url_path = _.getCurrentPath(), mpshow_time && t - mpshow_time > 0 && (t - mpshow_time) / 36e5 < 24 && (a.event_duration = (t - mpshow_time) / 1e3), _.setPageRefData(a), _.isObject(e) && (a = _.extend(a, e)), sa.track("$MPHide", a), sa.sendStrategy.onAppHide();
}, sa.pageShow = function (e) {
  var t = {},a = _.getCurrentPath(),r = _.getPageTitle(a),s = {};
  try {
    var n = getCurrentPages();
    s = n[n.length - 1];
  } catch (e) {
    logger.info(e);
  }
  !0 === sa.para.preset_properties.url_path && sa.registerApp({ $url_path: a }), r && (t.$title = r), t.$url_path = a, t.$url_query = s.sensors_mp_url_query ? s.sensors_mp_url_query : "", t = _.extend(t, _.getUtmFromPage()), _.setPageSfSource(t), _.setPageRefData(t), _.isObject(e) && (t = _.extend(t, e)), sa.track("$MPViewScreen", t);
};
var oldApp = App;
App = function App(e) {
  e[sa.para.name] = sa, oldApp.apply(this, arguments);
}, wx.onAppShow(function (e) {
  if (!sa.para.launched) {
    var t = wx.getLaunchOptionsSync() || {};
    sa.autoTrackCustom.appLaunch(t), sa.para.launched = !0;
  }
  sa.autoTrackCustom.appShow(e);
}), wx.onAppHide(function () {
  sa.autoTrackCustom.appHide();
});
var oldPage = Page;
Page = function Page(e) {
  var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e);
  if (t) for (var a = 0, r = t.length; a < r; a++) {click_proxy(e, t[a]);}
  sa.para.autoTrack && sa.para.autoTrack.mpClick && tabProxy(e), sa.para.autoTrack && sa.para.autoTrack.pageLeave && pageLeaveProxy(e), mp_proxy(e, "onLoad", "pageLoad"), mp_proxy(e, "onShow", "pageShow"), mp_proxy(e, "onAddToFavorites", "pageAddFavorites"), "function" == typeof e.onShareAppMessage && sa.autoTrackCustom.pageShare(e), "function" == typeof e.onShareTimeline && sa.autoTrackCustom.pageShareTimeline(e), oldPage.apply(this, arguments);
};
var oldComponent = Component;
Component = function Component(e) {
  try {
    var t = sa.para.autoTrack && sa.para.autoTrack.mpClick && _.getMethods(e.methods);
    if (t) for (var a = 0, r = t.length; a < r; a++) {click_proxy(e.methods, t[a]);}
    sa.para.autoTrack && sa.para.autoTrack.mpClick && tabProxy(e.methods), sa.para.autoTrack && sa.para.autoTrack.pageLeave && pageLeaveProxy(e.methods), mp_proxy(e.methods, "onLoad", "pageLoad"), mp_proxy(e.methods, "onShow", "pageShow"), mp_proxy(e.methods, "onAddToFavorites", "pageAddFavorites"), "function" == typeof e.methods.onShareAppMessage && sa.autoTrackCustom.pageShare(e.methods), "function" == typeof e.methods.onShareTimeline && sa.autoTrackCustom.pageShareTimeline(e.methods), oldComponent.apply(this, arguments);
  } catch (e) {
    oldComponent.apply(this, arguments);
  }
}, sa.initial(), module.exports = sa;

/***/ }),
/* 26 */
/*!************************************************************************************************************!*\
  !*** C:/Users/PC/Documents/HBuilderProjects/zall-demo-uniapp/utils/uni-app-sdk/plugin/wx-popup.esm.min.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var popup = { sa: {}, info: { app_id: "", show_log: !0 }, campaign_listener: {}, lib_version: "0.4.4", defaultPara: { platform: "MINIPROGRAM", preload_image: !0, defer_render: !1 }, serverData: {}, localData: {}, event_list: [], popuping: !1, convertPlans: [], eventRule: {}, popupTree: {}, log: function log() {if (popup.info.show_log && "object" == typeof console && console.log) try {return console.log.apply(console, arguments);} catch (t) {console.log(arguments[0]);}}, CAMPAIGN_ERROR: {} },_ = { getRgba: function getRgba(t) {return "object" != typeof t ? t : "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";}, getRpx: function getRpx(t) {if (t) {if (/^[0|1]?\.\d+$/.test(t)) return 100 * Number(t) + "%";var e = /^(-?\d+(\.\d+)?)px$/.exec(t);return e ? 2 * Number(e[1]) + "rpx" : t;}}, extend: function extend(t) {var e = Array.prototype.slice;return _.each(e.call(arguments, 1), function (e) {for (var p in e) {void 0 !== e[p] && (t[p] = e[p]);}}), t;}, each: function each(t, e, p) {var n = Array.prototype.forEach,o = {};if (null == t) return !1;if (n && t.forEach === n) t.forEach(e, p);else if (t.length === +t.length) {for (var i = 0, r = t.length; i < r; i++) {if (i in t && e.call(p, t[i], i, t) === o) return !1;}} else for (var a in t) {if (hasOwnProperty.call(t, a) && e.call(p, t[a], a, t) === o) return !1;}}, extend2Lev: function extend2Lev(t) {var e = Array.prototype.slice;return _.each(e.call(arguments, 1), function (e) {for (var p in e) {void 0 !== e[p] && null !== e[p] && (_.isObject(e[p]) && _.isObject(t[p]) ? _.extend(t[p], e[p]) : t[p] = e[p]);}}), t;}, getUuid: function getUuid() {var t = function t() {return Math.random().toString(16).replace(".", "");};return function () {var e = function () {for (var t = 1 * new Date(), e = 0; t == 1 * new Date();) {e++;}return t.toString(16) + e.toString(16);}() + "-" + t() + "-" + t();return e || (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15);};}, trim: function trim(t) {return t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");}, isEmptyObject: function isEmptyObject(t) {var e = Object.prototype.hasOwnProperty;if (_.isObject(t)) {for (var p in t) {if (e.call(t, p)) return !1;}return !0;}return !1;}, filter: function filter(t, e, p) {var n = Object.prototype.hasOwnProperty;if (t.filter) return t.filter(e);for (var o = [], i = 0; i < t.length; i++) {if (n.call(t, i)) {var r = t[i];e.call(p, r, i, t) && o.push(r);}}return o;}, isObject: function isObject(t) {return null != t && "[object Object]" == Object.prototype.toString.call(t);}, isArray: Array.isArray || function (t) {return "[object Array]" === Object.prototype.toString.call(t);}, isString: function isString(t) {return "[object String]" == Object.prototype.toString.call(t);}, isDate: function isDate(t) {return "[object Date]" == Object.prototype.toString.call(t);}, isBoolean: function isBoolean(t) {return "[object Boolean]" == Object.prototype.toString.call(t);}, isNumber: function isNumber(t) {return "[object Number]" == Object.prototype.toString.call(t) && /[\d\.]+/.test(String(t));}, isFunction: function isFunction(t) {if (!t) return !1;var e = Object.prototype.toString.call(t);return "[object Function]" == e || "[object AsyncFunction]" == e;}, getURLSearchParams: function getURLSearchParams(t) {for (var e = function e(t) {return decodeURIComponent(t);}, p = {}, n = (t || "").split("&"), o = 0; o < n.length; o++) {var i = n[o].indexOf("=");if (-1 !== i) {var r = n[o].substring(0, i),a = n[o].substring(i + 1);r = e(r), a = e(a), p[r] = a;}}return p;}, setStorageSync: function setStorageSync(t, e) {var p = function p() {wx.setStorageSync(t, e);};try {p();} catch (t) {logger.info("set Storage fail --", t);try {p();} catch (t) {logger.info("set Storage fail again --", t);}}}, getStorageSync: function getStorageSync(t) {var e = "";try {e = wx.getStorageSync(t);} catch (p) {try {e = wx.getStorageSync(t);} catch (t) {logger.info("getStorage fail");}}return e;}, parseStorageSync: function parseStorageSync(t) {var e = null;try {e = JSON.parse(_.getStorageSync(t)) || null;} catch (t) {}return e;} };_.isArray = Array.isArray || function (t) {return "[object Array]" === toString.call(t);}, _.matchImage = function (t) {for (var e, p, n, o = new RegExp('("(backgroundImage|image)":"(http(s)?://.[^"]*))', "g"), i = new RegExp("http(s)?://.[^S]*"), r = {}, a = t.length, u = [], s = 0; s < a; s++) {if (e = !1, _.isObject(t[s]) && "ACTIVE" === t[s].status.toLocaleUpperCase() && t[s].is_audience && (t[s].hasOwnProperty("strategy_id") ? t[s].is_trigger && (e = !0) : t[s].is_control_group || (e = !0)), e && t[s].popup_window_content && t[s].popup_window_content.content && (p = t[s].popup_window_content.content.match(o))) for (var l = 0, c = p.length; l < c; l++) {(n = p[l].match(i)) && n.length > 0 && (r[n[0]] || (r[n[0]] = 1));}}return _.each(r, function (t, e) {u.push(e);}), u;}, _.getConvertNumberValue = function (t) {return _.isString(t) && (t = Number(t)), Math.floor(1e3 * t) / 1e3;}, _.wxrequest = function (t) {var e = wx.request(t);setTimeout(function () {_.isObject(e) && _.isFunction(e.abort) && e.abort();}, 3e4);}, _.getProject = function (t) {if (t && t.split("?")[1]) {var e = decodeURIComponent(t.split("?")[1]);return _.getURLSearchParams(e).project || "default";}return "default";}, _.getCurrentPage = function () {var t = getCurrentPages(),e = t[t.length - 1];return !!_.isObject(e) && e;}, popup._ = _, popup.handleEvents = function (t, e) {if ("send" === t) {if (popup.popuping) return popup.event_list.push(e), !1;e.event && popup.eventRule[e.event] && popup.eventTriggerProcess(popup.eventRule[e.event], e);}if ("changeDistinctId" === t && popup.updateAndListenPlan.changeId(), "popup_display" === t) {popup.popuping = !0;try {popup.info.popup_listener.onLoadSuccess(e.plan.plan_id);} catch (t) {popup.log("popup_listener.onLoad error", t);}}if ("popup_load_fail" === t) {var p = e.plan_id,n = e.fail_code,o = e.fail_reason;try {popup.info.popup_listener.onLoadFailed(p, n, o);} catch (t) {popup.log("popup_listener.onLoad error", t);}}if ("popup_click" === t && popup.track.popupClick(e), "popup_end" === t) {popup.popuping = !1;var i = { name: e.plan.cname, plan_id: e.plan.plan_id, content: e.plan.popup_window_content ? e.plan.popup_window_content.content : "", type: e.plan.popup_window_content ? e.plan.popup_window_content.popup_type : "" };popup.CAMPAIGN_ERROR.onEnd || popup.campaign_listener.onEnd(i);try {popup.info.popup_listener.onClose(e.plan.plan_id);} catch (t) {popup.log("popup_listener.onLoad error", t);}popup.updateGlobalCount(), popup.updatePlanInterval(e.plan), _.each(popup.event_list, function (t) {t.event && popup.eventRule[t.event] && popup.eventTriggerProcess(popup.eventRule[t.event], t);}), popup.event_list = [];}}, popup.setPara = function (t) {if (_.isObject(t) || (t = {}), popup.info = _.extend(popup.info, popup.defaultPara, t), popup.info.app_id || popup.log("\u521D\u59CB\u5316\u53C2\u6570 appid \u6821\u9A8C\u5931\u8D25\uFF0C\u65E0\u6CD5\u62C9\u53D6\u5F39\u7A97\u8BA1\u5212!"), _.isString(popup.info.api_base_url) && "http" === popup.info.api_base_url.slice(0, 4) || popup.log("popup \u5FC5\u987B\u586B\u5199\u6709\u6548 api_base_url"), popup.info.project || (popup.info.project = _.getProject(popup.sa.para.server_url)), _.isObject(popup.info.popup_listener)) {var e = popup.info.popup_listener;_.isFunction(e.onClick) || (popup.info.popup_listener.onClick = function () {}), _.isFunction(e.onLoadSuccess) || (popup.info.popup_listener.onLoadSuccess = function () {}), _.isFunction(e.onLoadFailed) || (popup.info.popup_listener.onLoadFailed = function () {}), _.isFunction(e.onClose) || (popup.info.popup_listener.onClose = function () {});} else popup.info.popup_listener = { onClick: function onClick() {}, onLoadSuccess: function onLoadSuccess() {}, onLoadFailed: function onLoadFailed() {}, onClose: function onClose() {} };_.isObject(t.campaign_listener) ? (popup.campaign_listener = _.extend({}, t.campaign_listener), popup.campaign_listener.shouldStart && _.isFunction(popup.campaign_listener.shouldStart) || (popup.campaign_listener.shouldStart = function () {return !0;}, popup.CAMPAIGN_ERROR.shouldStart = { error_code: "4001", reeor_txt: "NOT_DEFINED OR DEFINED_ERROR" }), popup.campaign_listener.onStart ? _.isFunction(popup.campaign_listener.onStart) || (popup.CAMPAIGN_ERROR.onStart = { error_code: "4002", reeor_txt: "DEFINED_TYPE_ERROR" }) : popup.CAMPAIGN_ERROR.onStart = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.campaign_listener.onEnd ? _.isFunction(popup.campaign_listener.onEnd) || (popup.CAMPAIGN_ERROR.onEnd = { error_code: "4002", reeor_txt: "DEFINED_TYPE_ERROR" }) : popup.CAMPAIGN_ERROR.onEnd = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.campaign_listener.onFailed ? _.isFunction(popup.campaign_listener.onFailed) || (popup.CAMPAIGN_ERROR.onFailed = { error_code: "4002", reeor_txt: "DEFINED_TYPE_ERROR" }) : popup.CAMPAIGN_ERROR.onFailed = { error_code: "4001", reeor_txt: "NOT_DEFINED" }) : (popup.campaign_listener.shouldStart = function () {return !0;}, popup.CAMPAIGN_ERROR.shouldStart = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.CAMPAIGN_ERROR.onStart = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.CAMPAIGN_ERROR.onEnd = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.CAMPAIGN_ERROR.onFailed = { error_code: "4001", reeor_txt: "NOT_DEFINED" }, popup.CAMPAIGN_ERROR.campaign_listener = { error_code: "4003", errot_txt: "CAMPAIGN_CUSTOMIZED_NULL_LISTENER OR DEFINED ERROR" });}, popup.dataRender = { that: null, queue: [], notify: function notify(t) {_.isFunction(this.handle) ? this.handle(this.that, t) : this.queue.push(t);} }, popup.popupEmitter = { image_list: [], loaded: !1, notify: function notify(t) {var e = _.getCurrentPage(),p = this;e && _.isObject(e) && _.isFunction(e.selectComponent) && (popup.info.defer_render ? setTimeout(function () {p.renderPopup(e, t);}, 0) : p.renderPopup(e, t));}, renderPopup: function renderPopup(t, e) {var p = t.selectComponent("#sensors_popup");_.isObject(p) && _.isFunction(p.handle) ? p.handle(e) : popup.log("\u5F53\u524D\u9875\u9762\u672A\u96C6\u6210\u5F39\u7A97\u7EC4\u4EF6");}, loadImage: function loadImage(t) {if (JSON.stringify(t) !== JSON.stringify(this.image_list) && (this.loaded = !1, this.image_list = t), !this.loaded) {var e = _.getCurrentPage();if (e && _.isObject(e) && _.isFunction(e.selectComponent)) {var p = e.selectComponent("#sensors_popup");_.isObject(p) && _.isFunction(p.loadImage) && (p.loadImage(t), this.loaded = !0);}}}, attached: function attached() {this.loaded || this.loadImage(this.image_list);} }, popup.testPopup = function () {wx.onAppShow(function (t) {popup.updateAndListenPlan.pullPlan(), popup.testSend.start(t);});}, popup.updateGlobalCount = function () {var t = popup.sa.store.getDistinctId(),e = popup.localData.user_list[t],p = new Date().getTime();if (!_.isArray(popup.localData.plan_list[e].global_popup_count)) return popup.localData.plan_list[e].global_popup_count = [], popup.localData.plan_list[e].global_popup_count.unshift(p), !1;popup.localData.plan_list[e].global_popup_count.shift(), popup.localData.plan_list[e].global_popup_count.unshift(p);}, popup.updatePlanInterval = function (t) {var e = new Date().getTime();_.isObject(t) && _.isObject(t.popup_interval) && t.popup_interval.value && (t.is_in_popup_interval_window = popup.ruleTime.getExpire(t.popup_interval, e));}, popup.init = function (t, e) {popup.log("\u5F39\u7A97\u5F00\u59CB\u521D\u59CB\u5316\uFF01"), this.sa = t, this.setPara(e), this.sub = new t.eventSub(this.handleEvents), popup.updateAndListenPlan.initial(), popup.testPopup(), t.popupEmitter = popup.popupEmitter;}, popup.changeCovertStatus = function (t) {var e = JSON.parse(JSON.stringify(popup.convertPlans));_.each(e, function (p, n) {var o = p.is_in_convert_window.step,i = p.is_in_convert_window.uuid;if (popup.convertPlans[n].is_in_convert_window.step = Math.min(2 * o, 6e5), !t || !_.isArray(t) || 0 === t.length) return !1;_.each(t, function (t) {t.popup_display_uuid === i && t.convert_time && (delete popup.convertPlans[n].is_in_convert_window, popup.convertPlans.splice(n, 1), e.splice(n, 1), n--);});}), popup.updateAndListenPlan.updateData();}, popup.asyncConvert = function (t) {var e = popup.info.project,p = !1;if (!t && 0 === popup.convertPlans.length) return !1;t && (_.each(popup.convertPlans, function (e) {e.plan_id === t.plan_id && (p = !0);}), p || popup.convertPlans.push(t)), function t() {if (_.isEmptyObject(popup.localData) || !_.isArray(popup.convertPlans) || 0 === popup.convertPlans.length) return !1;var p = popup.convertPlans,n = p[0].is_in_convert_window && p[0].is_in_convert_window.step || 5e3,o = [],i = Date.now();_.each(p, function (t) {var e = t.is_in_convert_window;if (!e) return !1;e.step || (e.step = 5e3), n > e.step && (n = e.step);}), _.each(p, function (t) {if (!t.is_in_convert_window) return !1;var e = t.is_in_convert_window.expire_time;if (i > e || n > e - i) return delete t.is_in_convert_window, !1;o.push(t.is_in_convert_window.uuid);});var r = _.filter(p, function (t) {return !!t.is_in_convert_window && i < t.is_in_convert_window.expire_time;});if (popup.convertPlans = r, !o.length) return !1;popup.asyncConvert.timer && clearTimeout(popup.asyncConvert.timer), popup.asyncConvert.timer = setTimeout(function () {_.wxrequest({ url: popup.info.api_base_url + "/sfo/popup_displays?project=" + encodeURIComponent(e) + "&popup_display_uuids=" + encodeURIComponent(o) + "&time=" + new Date().getTime(), type: "GET", success: function success(e) {var p = e.data;popup.changeCovertStatus(p), t();}, fail: function fail() {popup.changeCovertStatus(), t();} });}, n);}();}, popup.ruleTime = { getExpire: function getExpire(t, e) {var p = e,n = Number(t.value) || 0,o = Number(t.value) || 0,i = String(t.unit).toLowerCase(),r = null,a = { day: function day() {return (r = new Date(p)).setHours(23), r.setMinutes(59), r.setSeconds(59), r.setMilliseconds(999), r = r.getTime() + 864e5 * (o - 1);}, week: function week() {var t = (r = new Date(p)).getDay();0 === t && (t = 7);var e = 7 - t;return r.setHours(23), r.setMinutes(59), r.setSeconds(59), r.setMilliseconds(999), r = r.getTime() + 24 * e * 60 * 60 * 1e3 + 7 * (o - 1) * 24 * 60 * 60 * 1e3;}, month: function month() {var t = (r = new Date(p)).getMonth() + o;return t > 11 ? (r.setFullYear(r.getFullYear() + parseInt(t / 12)), r.setMonth(t % 12)) : r.setMonth(t), r.setDate(1), r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0), r.getTime();}, second: function second(t) {var e = { month: 2592e6, week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4, second: 1e3 },o = null;return r = new Date(p), t in e && (o = e[t] * n), r.getTime() + o;} };return !0 !== t.natural ? a.second(i) : i in a ? a[i]() : void 0;}, getLast: function getLast(t, e) {var p = Number(t.value) || 0,n = Number(t.value) - 1 || 0,o = String(t.unit).toLowerCase(),i = null,r = { day: function day() {return (i = new Date(e)).setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i = i.getTime() - 864e5 * n;}, week: function week() {var t = (i = new Date(e)).getDay();return 0 === t && (t = 7), --t, i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i = i.getTime() - (24 * t * 60 * 60 * 1e3 + 7 * n * 24 * 60 * 60 * 1e3);}, month: function month() {var t = (i = new Date(e)).getMonth() + 1 - n;return t <= 0 ? (i.setFullYear(i.getFullYear() + (parseInt(t / 12) - 1)), i.setMonth(12 + t % 12 - 1)) : i.setMonth(t - 1), i.setDate(1), i.setHours(0), i.setMinutes(0), i.setSeconds(0), i.setMilliseconds(0), i.getTime();}, second: function second(t) {var n = { month: 2592e6, week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4, second: 1e3 },o = null;return i = new Date(e), t in n && (o = n[t] * p), i.getTime() - o;} };return !0 !== t.natural ? r.second(o) : o in r ? r[o]() : void 0;}, getArrMatchCount: function getArrMatchCount(t, e) {var p = 0;for (p = 0; p < t.length; p++) {if (e >= t[p]) return p;}return t.length;}, checkRule: function checkRule(t, e) {var p = new Date(),n = e,o = Number(t.value) || 0,i = Number(t.value) - 1 || 0,r = String(t.unit).toLowerCase(),a = null,u = { day: function day() {return (a = new Date(n)).setHours(23), a.setMinutes(59), a.setSeconds(59), a.setMilliseconds(999), a = a.getTime() + 864e5 * i, p > a;}, week: function week() {var t = (a = new Date(n)).getDay();0 === t && (t = 7);var e = 7 - t;return a.setHours(23), a.setMinutes(59), a.setSeconds(59), a.setMilliseconds(999), a = a.getTime() + 24 * e * 60 * 60 * 1e3 + 7 * i * 24 * 60 * 60 * 1e3, p > a;}, month: function month() {var t = (a = new Date(n)).getMonth() + i;return t >= 11 ? (a.setFullYear(a.getFullYear() + t / 11), a.setMonth(t % 11)) : a.setMonth(t), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0), p > a;}, second: function second(t) {return a = new Date(n), t in inteval && (interval_time = { month: 2592e6, week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4, second: 1e3 }[t] * o), p > a + null;} };return !0 !== t.natural ? u.second(r) : r in u ? u[r]() : void 0;} }, popup.eventTriggerProcess = function (t, e) {var p = !1;_.isArray(t) && t.length > 0 && _.isObject(t[0]) && (popup.log("--------------------\u89E6\u53D1\u4E8B\u4EF6\u5F00\u59CB--------------------"), _.each(t, function (t) {_.isObject(t) && void 0 !== t.match_state && delete t.match_state, new popup.RuleCheck(t, e);}), _.each(t, function (t) {!0 === t.match_state ? !1 === p ? (p = !0, popup.log("\u68C0\u67E5\u5B8C\u6BD5-\u4F18\u5148\u5F39\u7A97-\u5F00\u59CB", t.plan.cname), new popup.PopupCheck(t, !0)) : !0 === p && (popup.log("\u68C0\u67E5\u5B8C\u6BD5-\u975E\u4F18\u5148\u5F39\u7A97-\u4E0D\u6E32\u67D3", t.plan.cname), new popup.PopupCheck(t, !1)) : popup.log("\u68C0\u67E5\u5B8C\u6BD5-\u8BA1\u5212-\u4E0D\u6EE1\u8DB3", t.plan.cname);}), popup.log("--------------------\u89E6\u53D1\u4E8B\u4EF6\u7ED3\u675F--------------------"));}, popup.PopupCheck = function (t, e) {this.plan = t.plan, this.current_time = new Date().getTime(), e ? this.displayPopup() : this.hidePopup();}, popup.PopupCheck.prototype.displayPopup = function () {var t = _.getUuid()(),e = { props: { $sf_succeed: !0 } };popup.popupTree = {}, e.uuid = t, e.plan = this.plan;var p = this.plan.popup_window_content,n = "",o = !0;if (p && p.content) try {n = JSON.parse(p.content), new popup.parseTree(n);} catch (t) {n = !1, o = !1;} else popup.log("\u8BA1\u5212\u65E0\u7A97\u4F53\u5185\u5BB9\uFF01"), o = !1;e.popupTree = popup.popupTree;var i = { name: this.plan.cname, plan_id: this.plan.plan_id, content: this.plan.popup_window_content ? this.plan.popup_window_content.content : "", type: this.plan.popup_window_content ? this.plan.popup_window_content.popup_type : "" };this.plan.hasOwnProperty("strategy_id") ? this.plan.is_trigger ? popup.campaign_listener.shouldStart(i) ? p ? "CUSTOMIZED" === p.popup_type ? (e.popupTree = {}, popup.CAMPAIGN_ERROR.onStart ? (e.props = { $sf_fail_reason: "onStart \u672A\u5B9A\u4E49", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, 1004, "onStart \u672A\u5B9A\u4E49")) : p.content ? (popup.track.popupDisplay(e), popup.campaign_listener.onStart(i), popup.info.popup_listener.onLoadSuccess(this.plan.plan_id)) : (e.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u9519\u8BEF", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, 1001, "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"))) : o ? (popup.track.popupDisplay(e), popup.CAMPAIGN_ERROR.onStart || popup.campaign_listener.onStart(i), this.renderPopup(e)) : (e.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u9519\u8BEF", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E")) : (e.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u9519\u8BEF", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E")) : (e.props = { $sf_fail_reason: "shouldStart \u63A5\u53E3\u8FD4\u56DE false", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1004", "shouldStart \u63A5\u53E3\u8FD4\u56DE false")) : (e.props = { $sf_fail_reason: "\u8BA1\u5212\u4E0B\u53D1 is_trigger \u4E3A false", $sf_succeed: !1 }, popup.track.popupDisplay(e), p && "PRESET" === p.popup_type && popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "1005", "\u8BA1\u5212\u4E0B\u53D1 is_trigger \u4E3A false"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1005", "\u8BA1\u5212\u4E0B\u53D1 is_trigger \u4E3A false")) : this.plan.is_control_group ? (e.props = { $sf_fail_reason: "\u5BF9\u7167\u7EC4", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "2000", "\u5BF9\u7167\u7EC4"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "2000", "\u5BF9\u7167\u7EC4")) : popup.campaign_listener.shouldStart(i) ? o ? (popup.track.popupDisplay(e), popup.CAMPAIGN_ERROR.onStart || popup.campaign_listener.onStart(i), this.renderPopup(e)) : (e.props = { $sf_fail_reason: "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E")) : (e.props = { $sf_fail_reason: "shouldStart \u63A5\u53E3\u8FD4\u56DE false", $sf_succeed: !1 }, popup.track.popupDisplay(e), popup.info.popup_listener.onLoadFailed(this.plan.plan_id, "1004", "shouldStart \u63A5\u53E3\u8FD4\u56DE false"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(i, "1004", "shouldStart \u63A5\u53E3\u8FD4\u56DE false"));this.startConvertWindow(t), this.startPopupIntervalWindow(), this.startPopupLimitWindow(), this.setGlobalLimit(), this.deletePlanAllWindow(), popup.updateAndListenPlan.updateData();}, popup.PopupCheck.prototype.hidePopup = function () {this.deletePlanAllWindow(), popup.updateAndListenPlan.updateData();}, popup.PopupCheck.prototype.renderPopup = function (t) {popup.log("\u6E32\u67D3\u5F39\u7A97"), popup.popupEmitter.notify(t);}, popup.PopupCheck.prototype.startConvertWindow = function (t) {popup.log("--\u5F39\u7A97\u5C55\u793A-\u8F6C\u5316\u7A97\u53E3\u8BBE\u7F6E"), _.isObject(this.plan.convert_window) && this.plan.convert_window.value && (this.plan.is_in_convert_window = { expire_time: popup.ruleTime.getExpire(this.plan.convert_window, this.current_time), start_time: this.current_time, uuid: t }, popup.asyncConvert(this.plan));}, popup.PopupCheck.prototype.startPopupIntervalWindow = function () {_.isObject(this.plan.popup_interval) && this.plan.popup_interval.value && (this.plan.is_in_popup_interval_window = popup.ruleTime.getExpire(this.plan.popup_interval, this.current_time));}, popup.PopupCheck.prototype.startPopupLimitWindow = function () {popup.log("--\u5F39\u7A97\u5C55\u793A-\u53C2\u4E0E\u9650\u5236\u7A97\u53E3\u8BBE\u7F6E\u91CD\u7F6E"), _.isObject(this.plan.re_enter) && this.plan.re_enter.value && (_.isObject(this.plan.is_in_popup_limit_window) ? this.plan.is_in_popup_limit_window.count++ : this.plan.is_in_popup_limit_window = { expire_time: popup.ruleTime.getExpire(this.plan.re_enter, this.current_time), count: 1 });}, popup.PopupCheck.prototype.setGlobalLimit = function () {popup.log("--\u5F39\u7A97\u5C55\u793A-\u5168\u5C40\u5F39\u7A97\u6B21\u6570\u8BBE\u7F6E");var t = popup.store.getCurrentUserPlanList();_.isArray(t.global_popup_count) || (t.global_popup_count = []), t.global_popup_count.unshift(this.current_time);for (var e = t.global_popup_count, p = e[e.length - 1]; p + 7776e6 < this.current_time || e.length > 3e3;) {e.pop(), p = e[e.length - 1];}}, popup.PopupCheck.prototype.deletePlanAllWindow = function () {var t = this.plan.pattern_popup.matcher_list;_.isArray(t) && _.each(t, function (t) {t.is_in_window && (popup.log("--\u5F39\u7A97\u5C55\u793A-\u91CD\u7F6E\u5404\u4E2A\u89C4\u5219\u7684\u7A97\u53E3\u8BA1\u7B97-\u6210\u529F"), delete t.is_in_window);});}, popup.RuleCheck = function (t, e) {this.plan_match = t, this.plan = t.plan, this.rule_arr = t.rule, this.event_data = e, this.current_time = new Date().getTime();var p = "-------------\u68C0\u67E5-\u8BA1\u5212-(" + this.plan.cname + ")";_.each(this.rule_arr, function (t) {p += "--\u5305\u542B\u89C4\u5219-(" + t.event_name + "\uFF09-\u89E6\u53D1" + t.params[0] + "\u6B21";}), popup.log(p), popup.log(this.plan), this.checkPlanIsExpire(), popup.updateAndListenPlan.updateData();}, popup.RuleCheck.prototype.checkPlanIsExpire = function () {!this.plan.expire_at || _.isNumber(this.plan.expire_at) && this.current_time < this.plan.expire_at ? (popup.log("--\u8FC7\u671F-\u6EE1\u8DB3"), this.checkPlanIsAudience()) : popup.log("--\u8FC7\u671F-\u4E0D\u6EE1\u8DB3");}, popup.RuleCheck.prototype.checkPlanIsAudience = function () {!0 === this.plan.is_audience ? (popup.log("--\u662F\u5426\u53D7\u4F17-\u6EE1\u8DB3"), this.checkPlanSuspend()) : popup.log("--\u662F\u5426\u53D7\u4F17-\u4E0D\u6EE1\u8DB3");}, popup.RuleCheck.prototype.checkPlanSuspend = function () {this.plan.status && "SUSPEND" === this.plan.status ? popup.log("--\u6682\u505C-\u4E0D\u6EE1\u8DB3") : (popup.log("--\u6682\u505C-\u6EE1\u8DB3"), this.checkConvert());}, popup.RuleCheck.prototype.checkConvert = function () {_.isObject(this.plan.is_in_convert_window) && this.plan.is_in_convert_window.expire_time > this.current_time ? popup.log("--\u5B58\u5728\u8F6C\u5316\u7A97\u53E3 - \u4E0D\u6EE1\u8DB3", this.plan.is_in_convert_window) : (popup.log("--\u4E0D\u5B58\u5728\u8F6C\u5316\u7A97\u53E3\u6216\u8005\u7A97\u53E3\u8D85\u65F6\u5DF2\u7ECF\u8FC7\u671F - \u6EE1\u8DB3", this.plan.is_in_convert_window), this.checkGlobalPopupInterval());}, popup.RuleCheck.prototype.checkGlobalPopupInterval = function () {var t = popup.store.getCurrentUserPlanList(),e = t.global_popup_count;if (_.isArray(e) && e.length >= 1) {var p = popup.ruleTime.getLast(t.popup_interval_global, this.current_time);p > e[0] ? (popup.log("--\u5168\u5C40\u5F39\u7A97\u95F4\u9694-\u6EE1\u8DB3-" + p + ">\u4E0A\u6B21\u5F39\u7A97\u65F6\u95F4" + e[0]), this.checkPopupInterval()) : popup.log("\u68C0\u67E5-\u5168\u5C40\u5F39\u7A97\u95F4\u9694-\u4E0D\u6EE1\u8DB3-" + p + "<\u4E0A\u6B21\u5F39\u7A97\u65F6\u95F4" + e[0]);} else popup.log("--\u5168\u5C40\u5F39\u7A97\u95F4\u9694-\u6CA1\u6709\u5F39\u8FC7\u7A97-\u6EE1\u8DB3"), this.checkPopupInterval();}, popup.RuleCheck.prototype.checkPopupInterval = function () {_.isNumber(this.plan.is_in_popup_interval_window) ? this.current_time > this.plan.is_in_popup_interval_window ? (popup.log("--\u5F39\u7A97\u95F4\u9694-\u5F53\u524D\u65F6\u95F4\u5927\u4E8E\u56FA\u5B9A\u5F39\u7A97\u95F4\u9694-\u6EE1\u8DB3"), this.plan.is_in_popup_interval_window = null, this.checkProperties()) : popup.log("--\u5F39\u7A97\u95F4\u9694-\u5F53\u524D\u65F6\u95F4\u5C0F\u4E8E\u56FA\u5B9A\u5F39\u7A97\u95F4\u9694-\u4E0D\u6EE1\u8DB3") : (popup.log("--\u5F39\u7A97\u95F4\u9694-\u7A97\u53E3\u4E0D\u5B58\u5728-\u65B0\u5F00"), this.plan.is_in_popup_interval_window = null, this.checkProperties());}, popup.RuleCheck.prototype.checkProperties = function () {var t = { equal: function equal(t, e) {if (!_.isNumber(t) && !_.isString(t)) return !1;for (var p = 0, n = e.length; p < n; p++) {if (!_.isNumber(e[p]) && !_.isString(e[p])) return !1;if (_.isString(t)) {if (t === (_.isString(e[p]) ? e[p] : String(e[p]))) return !0;} else if (_.getConvertNumberValue(t) === _.getConvertNumberValue(e[p])) return !0;}return !1;}, notEqual: function notEqual(t, e) {if (!_.isNumber(t) && !_.isString(t)) return !1;for (var p = 0, n = e.length; p < n; p++) {if (!_.isNumber(e[p]) && !_.isString(e[p])) return !1;if (_.isString(t)) {if (t === (_.isString(e[p]) ? e[p] : String(e[p]))) return !1;} else if (_.getConvertNumberValue(t) === _.getConvertNumberValue(e[p])) return !1;}return !0;}, contain: function contain(t, e) {return !!_.isString(t) && t.indexOf(e[0]) >= 0;}, notContain: function notContain(t, e) {return !!_.isString(t) && -1 === t.indexOf(e[0]);}, isTrue: function isTrue(t) {return !0 === t;}, isFalse: function isFalse(t) {return !1 === t;}, isSet: function isSet(t) {return void 0 !== t;}, notSet: function notSet(t) {return void 0 === t;}, isEmpty: function isEmpty(t) {if (!_.isString(t) && !_.isArray(t)) return !1;if (_.isString(t)) return "" === t;for (var e = 0; e < t.length; e++) {if ("" !== t[e].replace(/^\s+|\s+$/g, "")) return !1;}return !0;}, isNotEmpty: function isNotEmpty(t) {if (!_.isString(t) && !_.isArray(t)) return !1;if (_.isString(t)) return "" !== t;for (var e = 0; e < t.length; e++) {if ("" === t[e].replace(/^\s+|\s+$/g, "")) return !1;}return !0;}, less: function less(t, e) {return !!_.isNumber(t) && t < Number(e[0]);}, greater: function greater(t, e) {return !!_.isNumber(t) && t > Number(e[0]);}, between: function between(t, e) {return !!_.isNumber(t) && t >= Number(e[0]) && t <= Number(e[1]);}, in: function _in(t, e) {if (!_.isArray(t)) return !1;for (var p = 0; p < t.length; p++) {if (e.indexOf(t[p]) >= 0) return !0;}return !1;}, notInclude: function notInclude(t, e) {if (!_.isArray(t)) return !1;for (var p = 0; p < t.length; p++) {if (-1 === e.indexOf(t[p])) return !0;}return !1;}, absolute_between: function absolute_between(t, e) {try {var p = new Date(e[0]),n = new Date(e[1]),o = new Date(t);return o >= p && o <= n;} catch (t) {popup.log("absolute_between Error", t);}}, absoluteBetween: function absoluteBetween(t, e) {try {var p = new Date(e[0]),n = new Date(e[1]),o = new Date(t);return o >= p && o <= n;} catch (t) {popup.log("absolute_between Error", t);}} },e = this,p = _.filter(this.rule_arr, function (p) {if (!p.filter || p.filter.conditions && 0 === p.filter.conditions.length) return !0;var n = p.filter,o = n.relation,i = "or" === String(o).toLowerCase(),r = "and" === String(o).toLowerCase(),a = !!r,u = !0;return _.each(n.conditions, function (p) {if (!u) return !1;if (!p.field) return !1;var n = p.field.lastIndexOf("."),o = p.params,s = p.function;if (!t[s]) return a = !1, u = !1, !1;if (n < 0) return !1;var l = p.field.slice(n + 1),c = e.event_data.properties[l],_ = t[s](c, o);i && _ && (a = !0, u = !1), r && !_ && (a = !1, u = !1);}), a;});_.isArray(p) && p.length > 0 ? (this.checkWindowAndMatch(p), popup.log("--\u5C5E\u6027\u5339\u914D-\u6EE1\u8DB3", p)) : popup.log("--\u5C5E\u6027\u5339\u914D-\u4E0D\u6EE1\u8DB3");}, popup.RuleCheck.prototype.checkWindowAndMatch = function (t) {var e = this,p = [];_.each(t, function (t) {if (!t.params || !t.params[0]) return popup.log("--\u7A97\u53E3\u671F\u548C\u6B21\u6570-\u89C4\u5219\u6570\u636E\u5F02\u5E38"), !1;var n = Number(t.params[0]);1 === n ? p.push(t) : n > 1 && _.isObject(t.window) && t.window.value > 0 && (!_.isObject(t.is_in_window) || !_.isNumber(t.is_in_window.expire_time) || t.is_in_window.expire_time < e.current_time ? t.is_in_window = { expire_time: popup.ruleTime.getExpire(t.window, e.current_time), count: 1 } : t.is_in_window.count = t.is_in_window.count + 1, t.is_in_window.count >= n ? p.push(t) : popup.log("--\u7A97\u53E3\u671F\u548C\u6B21\u6570-\u89C4\u5219\u6570", t.is_in_window.count, "\u4E0D\u5339\u914D\u5F53\u524D\u6B21\u6570", n));}), p.length > 0 ? (popup.log("--\u7A97\u53E3\u671F\u548C\u6B21\u6570-\u6709\u5339\u914D\u6210\u529F\u7684\u89C4\u5219", p), this.checkGlobalPopupLimit()) : popup.log("--\u7A97\u53E3\u671F\u548C\u6B21\u6570-\u6CA1\u6709\u5339\u914D\u6210\u529F\u7684\u89C4\u5219", p);}, popup.RuleCheck.prototype.checkGlobalPopupLimit = function () {var t = popup.store.getCurrentUserPlanList(),e = t.msg_limit_global,p = !0,n = this;_.isObject(e) && !0 === e.is_in_use && _.isArray(e.limits) && _.isArray(t.global_popup_count) && !0 === this.plan.global_msg_limit_enabled ? (_.each(e.limits, function (e) {if (_.isObject(e) && _.isNumber(e.limit)) {var o = popup.ruleTime.getLast(e, n.current_time),i = popup.ruleTime.getArrMatchCount(t.global_popup_count, o);popup.log("--\u5168\u5C40\u5F39\u7A97\u9650\u5236-\u5DF2\u7ECF\u5F39\u7A97\u6B21\u6570-" + i + "-\u9650\u5236\u7684\u6B21\u6570" + e.limit + "-\u9650\u5236\u65F6\u95F4-" + o), p = i < e.limit ? p && !0 : p && !1;}}), p ? this.checkPopupLimit() : popup.log("--\u5168\u5C40\u5F39\u7A97\u9650\u5236-\u4E0D\u6EE1\u8DB3")) : (popup.log("--\u5168\u5C40\u5F39\u7A97\u9650\u5236-\u4E0D\u6EE1\u8DB3(\u53C2\u6570\u6B63\u5E38\uFF0C\u5DF2\u5F39\u8FC7\u7A97\uFF0C\u5F53\u524D\u8BA1\u5212\u8BBE\u7F6E\u4E86\u9650\u5236)\u4E4B\u4E00 - \u6EE1\u8DB3"), this.checkPopupLimit());}, popup.RuleCheck.prototype.checkPopupLimit = function () {if (!_.isObject(this.plan.re_enter) || !_.isNumber(this.plan.re_enter.value) || !_.isNumber(this.plan.re_enter.limit)) return this.plan_match.match_state = !0, !1;_.isObject(this.plan.is_in_popup_limit_window) && _.isNumber(this.plan.is_in_popup_limit_window.expire_time) && _.isNumber(this.plan.is_in_popup_limit_window.count) ? this.plan.is_in_popup_limit_window.expire_time < this.current_time ? (popup.log("--\u53C2\u4E0E\u9650\u5236-\u8D85\u8FC7\u4E86\u53C2\u4E0E\u9650\u5236\u7A97\u53E3-\u5F00\u542F\u65B0\u7A97\u53E3-\u6EE1\u8DB3", this.plan.is_in_popup_limit_window), delete this.plan.is_in_popup_limit_window, this.plan_match.match_state = !0) : this.plan.is_in_popup_limit_window.count < this.plan.re_enter.limit ? (popup.log("--\u53C2\u4E0E\u9650\u5236-\u5728\u7A97\u53E3\u5185\u4E14\u5728\u53C2\u4E0E\u9650\u5236\u6B21\u6570\u5185-\u6EE1\u8DB3", this.plan.is_in_popup_limit_window), this.plan_match.match_state = !0) : popup.log("--\u53C2\u4E0E\u9650\u5236-\u5728\u7A97\u53E3\u5185\u4F46\u662F\u8D85\u8FC7\u4E86\u53C2\u4E0E\u9650\u5236-\u4E0D\u6EE1\u8DB3", this.plan.is_in_popup_limit_window) : (this.plan.is_in_popup_limit_window ? (popup.log("--\u53C2\u4E0E\u9650\u5236-\u6709\u7A97\u53E3\u4F46\u662F\u7A97\u53E3\u6570\u636E\u5F02\u5E38-\u5F00\u65B0\u7A97\u53E3-\u6EE1\u8DB3", this.plan.is_in_popup_limit_window), delete this.plan.is_in_popup_limit_window) : popup.log("--\u53C2\u4E0E\u9650\u5236-\u4E0D\u5B58\u5728\u7A97\u53E3-\u5F00\u65B0\u7A97\u53E3-\u6EE1\u8DB3", this.plan.is_in_popup_limit_window), this.plan_match.match_state = !0);}, popup.store = { getJSONData: function getJSONData() {return _.parseStorageSync("sensorsdata202002-popupdata");}, saveJSONData: function saveJSONData() {_.setStorageSync("sensorsdata202002-popupdata", JSON.stringify(popup.localData));}, getUserId: function getUserId() {var t = popup.sa.store.getDistinctId();return popup.localData.user_list[t];}, getCurrentUserPlanList: function getCurrentUserPlanList() {var t = this.getUserId();return popup.localData.plan_list[t];} }, popup.updateAndListenPlan = { active_state: !0, interval_time: 6e5, save_interval: null, data_interval: null, local_data: {}, diffData: function diffData() {var t = popup.store.getCurrentUserPlanList(),e = popup.store.getUserId(),p = JSON.parse(JSON.stringify(popup.serverData));if (!p || _.isEmptyObject(p)) return !1;if (!t || _.isEmptyObject(t) || !t.popup_plans || 0 === t.popup_plans.length) return popup.localData.plan_list[e] = p, popup.localData.plan_list[e].update_time = Date.now(), !1;var n = p.popup_plans;_.each(n, function (e, p) {var o = null;if (_.each(t.popup_plans, function (t) {t.plan_id === e.plan_id && (o = t, _.isObject(e.window_update) && _.each(e.window_update, function (p, n) {switch (n) {case "trigger_window":t.window_update && t.window_update[n] && t.window_update[n] === p || (o.pattern_popup.matcher_list = e.pattern_popup.matcher_list);break;case "convert_window":t.window_update && t.window_update[n] && t.window_update[n] === p || _.isObject(o.is_in_convert_window) && o.is_in_convert_window.expire_time && o.is_in_convert_window.start_time && (o.is_in_convert_window.expire_time = popup.ruleTime.getExpire(e.convert_window, o.is_in_convert_window.start_time));}}));}), !o) return !1;if (!e.window_update && o.last_update_config_time !== e.last_update_config_time) return !1;e.audience_id || delete o.audience_id;var i = o.pattern_popup.matcher_list;_.extend2Lev(o, e), o.pattern_popup.matcher_list = i, n[p] = o;});var o = t.global_popup_count;t = {}, o && (t.global_popup_count = o), _.extend(t, p), t.update_time = Date.now(), popup.localData.plan_list[e] = t, popup.log("\u521D\u59CB\u5316-\u6BD4\u5BF9\u6570\u636E\u5F97\u5230\u9700\u8981\u7684-localData", popup.localData);}, filterConvertPlans: function filterConvertPlans() {var t = popup.store.getCurrentUserPlanList();if (!t || _.isEmptyObject(t)) return !1;var e = t.popup_plans,p = Date.now();if (!e || !_.isArray(e)) return !1;var n = _.filter(e, function (t) {return !!t.convert_window && !!t.is_in_convert_window && p < t.is_in_convert_window.expire_time;});popup.convertPlans = n, popup.log("\u521D\u59CB\u5316-\u5F02\u6B65\u7684convertWindow", popup.convertPlans), popup.asyncConvert();}, updateData: function updateData() {var t = this.local_data,e = JSON.stringify(popup.localData);e !== t && (t = e, popup.store.saveJSONData());}, updateLocalData: function updateLocalData() {var t = { get: function get(e, p) {try {return _.isObject(e[p]) ? (popup.localData.target[p] = new Proxy(e[p], t), new Proxy(e[p], t)) : e[p];} catch (t) {return e[p];}}, set: function set(t, e, p) {var n = t[e];return n !== p && popup.log("\u4FEE\u6539 localdata \u6570\u636E: ", n, " - ", p), t[e] = p, popup.store.saveJSONData(), !0;}, deleteProperty: function deleteProperty(t, e) {return delete t[e], popup.log("deleteProperty localdata", t, e), popup.store.saveJSONData(), !0;} };popup.localData = new Proxy(popup.localData, t);}, getEventRule: function getEventRule() {var t,e = popup.store.getCurrentUserPlanList(),p = {};return !!e && !(!(t = e.popup_plans) || !_.isArray(t)) && (_.each(t, function (t) {var e = t.pattern_popup.matcher_list;_.each(e, function (e) {var n = { plan: t, rule: [e] },o = e.event_name,i = !1;if (p[o]) {if (_.each(p[o], function (p) {p.plan.plan_id === t.plan_id && (p.rule.push(e), i = !0);}), i) return !1;p[o].push(n);} else p[o] = [n];});}), _.each(p, function (t) {t.sort(function (t, e) {var p = e.plan.absolute_priority - t.plan.absolute_priority;return 0 === p ? e.plan.plan_id - t.plan.plan_id : p;});}), popup.eventRule = p, popup.log("\u521D\u59CB\u5316-\u5F97\u5230\u4E8B\u4EF6\u548C\u8BA1\u5212\u7684\u5173\u7CFB"), void popup.log("--------------------\u521D\u59CB\u5316\u5B8C\u6210--------------------\u7B49\u5F85\u4E8B\u4EF6\u89E6\u53D1\u8BA1\u5212--------------------"));}, setListenEvent: function setListenEvent() {this.updateUserPlans(), this.diffData(), this.filterConvertPlans(), this.getEventRule(), this.updateData();}, setIntervalTime: function setIntervalTime(t) {var e = this;e.data_interval && clearTimeout(e.data_interval), e.data_interval = setTimeout(function () {popup.log("10\u5206\u949F\u5B9A\u65F6\u4E0B\u62C9\u8BA1\u5212-------"), e.pullPlan();}, t);}, initial: function initial() {popup.distinct_id = popup.sa.store.getDistinctId();var t = popup.store.getJSONData() || {};t.user_list || t.plan_list ? popup.localData = _.extend(popup.localData, t) : this.transData(t), this.updateLocalPlans(), this.setListenEvent(), this.pullPlan();}, changeId: function changeId() {this.stopAllState(), this.startState();}, stopAllState: function stopAllState() {this.active_state = !1;var t = popup.store.getUserId();popup.eventRule = {}, this.data_interval && clearTimeout(this.data_interval), this.save_interval && clearInterval(this.save_interval), popup.asyncConvert.timer && clearTimeout(popup.asyncConvert.timer), popup.convertPlans = [], popup.log("\u521D\u59CB\u5316-\u6E05\u7A7A-Data"), popup.serverData = {}, popup.localData.plan_list[t] = {};}, pullPlan: function pullPlan() {var t = this;if (!t.active_state) return !1;var e = popup.sa.store.getDistinctId(),p = popup.info.platform,n = popup.info.project;_.wxrequest({ url: popup.info.api_base_url + "/sfo/user_popup_configs?distinct_id=" + encodeURIComponent(e) + "&app_id=" + encodeURIComponent(popup.info.app_id) + "&sdk_version=" + encodeURIComponent(popup.lib_version) + "&platform=" + encodeURIComponent(p) + "&project=" + encodeURIComponent(n) + "&time=" + new Date().getTime(), method: "GET", success: function success(e) {if (!t.active_state) return !1;var p = e.data;popup.log("\u5F39\u7A97-\u62C9\u53D6\u8BA1\u5212\u6570\u636E\u6210\u529F"), p.popup_test_window && !_.isEmptyObject(p.popup_test_window) && t.testRender(p.popup_test_window), _.isObject(p) && p.server_current_time && p.popup_plans && p.min_sdk_version_required && /\d+\.\d+/.test(p.min_sdk_version_required) && parseFloat(p.min_sdk_version_required) <= parseFloat(popup.lib_version) ? (popup.info.preload_image && popup.popupEmitter.loadImage(_.matchImage(p.popup_plans)), popup.serverData = p, t.setListenEvent(), t.interval_time = p.config_pull_interval_ms, t.setIntervalTime(t.interval_time)) : (popup.log("\u5F39\u7A97-\u8BF7\u6C42\u8FD4\u56DE\u7684\u6570\u636E\u9519\u8BEF"), popup.serverData = {}, t.setIntervalTime(t.interval_time));}, fail: function fail(e) {if (!t.active_state) return !1;popup.log("\u5F39\u7A97-\u8BF7\u6C42\u62C9\u53D6\u6570\u636E\u9519\u8BEF: ", e), t.setIntervalTime(t.interval_time);}, complete: function complete() {popup.sub.ready || popup.sub.isReady();} });}, testRender: function testRender(t) {var e,p = { content: t.content, type: t.popup_type },n = !0,o = _.getUuid()();try {e = JSON.parse(t.content);} catch (t) {n = !1;}var i = { props: { $sf_succeed: !0 }, plan: {} };if (i.uuid = o, "CUSTOMIZED" === t.popup_type) i.popupTree = {}, popup.CAMPAIGN_ERROR.onStart ? (i.props = { $sf_fail_reason: "onStart \u65B9\u6CD5\u672A\u5B9A\u4E49", $sf_succeed: !1 }, popup.track.popupDisplay(i), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(p, "1004", "onStart \u65B9\u6CD5\u672A\u5B9A\u4E49")) : t.content ? (popup.campaign_listener.onStart(p), popup.track.popupDisplay(i)) : (i.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u9519\u8BEF", $sf_succeed: !1 }, popup.track.popupDisplay(i), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(p));else {try {new popup.parseTree(e), i.popupTree = popup.popupTree, i.plan = { popup_window_content: t };} catch (t) {popup.log("--\u6D4B\u8BD5\u5F39\u7A97\u5C55\u793A-\u6E32\u67D3\u9519\u8BEF", t), n = !1;}n ? (popup.track.popupDisplay(i), popup.CAMPAIGN_ERROR.onStart || popup.campaign_listener.onStart(p), popup.popupEmitter.notify(i)) : (i.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u5F02\u5E38", $sf_succeed: !1 }, popup.track.popupDisplay(i), popup.info.popup_listener.onLoadFailed(void 0, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(p, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"));}}, startState: function startState() {this.active_state = !0, popup.localData = popup.store.getJSONData() || {}, this.pullPlan(), this.updateData();}, transData: function transData(t) {var e = popup.sa.store.getDistinctId(),p = { user_list: {}, plan_list: {} };p.user_list[e] = e, p.plan_list[e] = JSON.parse(JSON.stringify(t)), p.plan_list[e].update_time = Date.now(), popup.localData = p, popup.store.saveJSONData();}, updateLocalPlans: function updateLocalPlans() {var t = popup.store.getUserId(),e = Date.now();popup.localData.plan_list[t] && (popup.localData.plan_list[t].update_time = e), _.each(popup.localData.plan_list, function (t, p) {e - t.update_time >= 2592e6 && delete popup.localData.plan_list[p];});}, updateUserPlans: function updateUserPlans() {var t = popup.serverData,e = popup.sa.store.getDistinctId();t.user_id ? (popup.localData.user_list[e] = t.user_id, popup.localData.plan_list[t.user_id] || popup.localData.plan_list[e] && (popup.localData.plan_list[t.user_id] = popup.localData.plan_list[e], delete popup.localData.plan_list[e])) : popup.localData.user_list[e] || (popup.localData.user_list[e] = e);} };var IMAGE_MAP = { close: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAe1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NgkbwAAAAKHRSTlMA5if6t/B0UjMSxpAtJB4MBfTr30oY6NjV0r2loZ6XkoaBenFp3UA/LNePaQAAAsxJREFUWMOsltlygzAMRRXMZsAsAZJmX9v6/7+wg1QXpjGxCDkvyWTIQZauDcCgzKLrPtnUSyGW9SbZX6OshDcQh36lH6j8MJ7pTZd6lGX6sr0IP7SDj7CA6chLoBkEFzm14nM1/P/2eGti1RZFq+LmdtwGw7afJ1Ue1dogcGCW4QptqCO2OPe1IbnL0Y7dE23wc2bJgSn44MFTvIMwLeMUXqZGfGKUkp+MPC2dwUjMGhWwUL7pnXRUsdbIIpow84VG1k9Xmf1e5U8Kq/R/68memAPqcggTCQUNc9SdL+iCL5jMd0B1j/RErh3LYrRyLa2po2x8KngJ9Uk5sWUwpZoVvIiiulNLhMwgHDhDED2MEH8X3zCDL4HV/R8lRTOEWYS0KWzt8GEm/mNLihpHKOeqJY6yLqDnbO42F1r9eXCzitMOfkuqfvkXTId6h1phSi5/ncbgneAtnDCAxTAzIn+POhfDFOObzAEsNLu0HXO06a4BCwd89wEk1h2ezdwl0rObvS5nNreHurg/lxKwsNPoHjXrHVhI+lMK3xjvMH4YelYzCSzc8V3zrx9CWtu5MG67eWEdhBSmI+GT7eIZt+Nny7YJ+y8ON9/cF1tWVL7LzTdTi6sSMtw9AE432wwl7u6MzqotMNwcM7Glc/TafRyB4+aa4dhdcoV993EDlptphlt3zZ72TgM8N88MDe3vDQWE5V6tWGaKyAbwqaiA5+aZQeETkk6QFtxuvhlaOkVwwxfgdq/IvHKbocBj6ac5OzYCIASBKGo10n+HBgakMswbaYDgTmX3fzgafhD4G+Hhg1cGXnT4PMFHVayCdVcBXGBu7cKwACOOC2YwTsIQ7KI7LBywJrlyByupK9Kw/lto4VFLAqLdmRwJiBDWwjDOI0QPPhPXRn3yTlyrILND4w7oOw3h5AlTPk5U/ddrZSk4RWW+C9hp2rgru6GiP/678n2UFPV1AAAAAElFTkSuQmCC" };popup.parseTree = function (t) {this.img = void 0, this.content = void 0, this.title = void 0, this.button = [], this.image_button = void 0, this.buttonStyle = {}, this.view = {}, this.parseView(t.template), this.properties = { maskCloseEnabled: t.properties.maskCloseEnabled, maskActionId: t.properties.maskActionId, maskColor: _.getRgba(t.properties.maskColor) }, popup.popupTree.properties = this.properties;}, popup.parseTree.prototype = { parseView: function parseView(t) {switch (t.type) {case "column":case "row":this.getViewProp(t);break;case "image":this.getImg(t);break;case "label":this.getLabel(t);break;case "button":this.getButton(t);break;case "link":this.getLink(t);break;case "image_button":this.getImgButton(t);}this.img && !_.isEmptyObject(this.img) && (popup.popupTree.img = this.img), this.title && !_.isEmptyObject(this.title) && (popup.popupTree.title = this.title, popup.popupTree.diverseModule = !0), this.content && !_.isEmptyObject(this.content) && (popup.popupTree.content = this.content, popup.popupTree.diverseModule = !0), this.image_button && !_.isEmptyObject(this.image_button) && (popup.popupTree.image_button = this.image_button), this.buttonStyle && !_.isEmptyObject(this.buttonStyle) && (popup.popupTree.buttonStyle = this.buttonStyle), this.boxStyle && !_.isEmptyObject(this.boxStyle) && (popup.popupTree.boxStyle = this.boxStyle), this.container && !_.isEmptyObject(this.container) && (popup.popupTree.container = this.container), this.button && !_.isEmptyObject(this.button) && this.button.length > 0 && (popup.popupTree.button = this.button, popup.popupTree.diverseModule = !0), this.view && !_.isEmptyObject(this.view) && (popup.popupTree.view = this.view), t.GRADE || (t.GRADE = 0, this.view.container = Object.assign({}, this.getViewProp(t))), t.subviews && t.subviews.length > 0 && _.each(t.subviews, function (e) {e.GRADE = t.GRADE + 1, this.parseView(e);}, this);}, getViewProp: function getViewProp(t) {switch (t.GRADE) {case 0:return { style: "width: " + _.getRpx(t.layout.width) + ";" };case 1:if (t.subviews.length > 0) {var e = Object.assign({}, { backgroundImage: t.properties.backgroundImage ? t.properties.backgroundImage : "", style: this.getStyle(t) }),p = 'background: url("' + e.backgroundImage + '");background-size: 100% 100%;' + e.style;this.view.content = Object.assign({}, { style: p });}break;case 2:t.subviews && t.subviews.length > 0 ? this.view.button = Object.assign({}, { type: t.type }) : this.view.padding = Object.assign({}, { style: "margin-top: " + _.getRpx(t.layout.margin.top) + ";", type: t.type });}}, isButtonBranch: function isButtonBranch(t) {var e = !0,p = { image_button: 1, link: 1, button: 1 };return _.each(t, function (t, n) {p[n] || (e = !1);}), e;}, getImg: function getImg(t) {this.img = _.extend({}, this.getAttr(t.properties), this.getAction(t.action)), this.img.style = this.getStyle(t);}, getImgButton: function getImgButton(t) {var e = {};"close" === t.properties.msgType ? t.properties.isHidden || (this.image_button = _.extend({}, this.getAction(t.action), this.getAttr(t.properties)), t.layout.align && (this.image_button.aligin = t.layout.align), this.image_button.style = this.getStyle(t), this.image_button.type = t.type) : ((e = _.extend({}, this.getAction(t.action), this.getAttr(t.properties))).style = this.getStyle(t), e.type = t.type), _.isEmptyObject(e) || this.button.push(e);}, getLabel: function getLabel(t) {"title" === t.properties.msgType ? (this.title = _.extend({}, this.getAttr(t.properties)), this.title.style = this.getStyle(t)) : "content" === t.properties.msgType && (this.content = _.extend({}, this.getAttr(t.properties)), this.content.style = this.getStyle(t));}, getButton: function getButton(t) {var e = {};(e = _.extend({}, this.getAction(t.action), this.getAttr(t.properties))).style = this.getStyle(t), e.type = t.type, _.isEmptyObject(e) || this.button.push(e);}, getLink: function getLink(t) {var e = {};(e = _.extend({}, this.getAction(t.action), this.getAttr(t.properties))).style = this.getStyle(t), e.type = t.type, _.isEmptyObject(e) || this.button.push(e);}, getAttr: function getAttr(t) {var e = {};return t.text ? e.innerText = t.text : t.image && (t.localImageName ? (e.src = IMAGE_MAP[t.localImageName], e.useLocalImage = !0) : e.src = t.image), e;}, getAction: function getAction(t) {var e = {};return t && t.MINIPROGRAM && (t = t.MINIPROGRAM[0], e.id = t.id, e.closeable = t.closeable, e.action_type = t.type, e.$sf_close_type = t.$sf_close_type, t.value && (e.value = t.value), t.path && (e.path = t.path), t.appid && (e.appid = t.appid)), e;}, getStyle: function getStyle(t) {var e,p = { textAlign: "text-align", font: "font-size", backgroundColor: "background-color", borderWidth: function borderWidth(t) {return "border-width: " + t + ";border-style: solid;";}, borderColor: "border-color", cornerRadius: "border-radius", backgroundImage: function backgroundImage(t) {return "";}, margin: this.boxModel("margin"), padding: this.boxModel("padding"), maxHeight: "max-height", maxWidth: "max-width" },n = ["msgType", "text", "image", "name", "isHidden", "align", "localImageName"],o = "";return e = _.extend({}, t.layout, t.properties), _.each(e, function (t, e) {t = _.getRpx(t);var i = p[e];if (n.indexOf(e) >= 0) return !1;_.isString(i) ? o += i + ":" + _.getRgba(t) + ";" : _.isFunction(i) ? o += i(t) + ";" : o += e + ":" + _.getRgba(t) + ";";}), o;}, boxModel: function boxModel(t) {return function (e) {if ("object" != typeof e) return e;var p = "";for (var n in e) {p += t + "-" + n + ":" + _.getRpx(e[n]);}return p;};} };var QRCode = { 1011: 1, 1012: 1, 1013: 1, 1017: 1, 1047: 1, 1048: 1, 1049: 1 };popup.testSend = { getPopupId: function getPopupId(t) {var e = 0,p = t.query.scene;if (p) {var n = decodeURIComponent(p).split("=");e = "sf_test_id" === n[0] && n[1] ? n[1] : 0;}return e;}, start: function start(t) {if (!QRCode[t.scene]) return !1;var e = this.getPopupId(t);if (!e) return !1;var p = popup.info.project,n = popup.info.platform,o = popup.sa.store.getDistinctId();_.wxrequest({ url: popup.info.api_base_url + "/sfo/popup_windows/" + e + "?distinct_id=" + encodeURIComponent(o) + "&app_id=" + encodeURIComponent(popup.info.app_id) + "&project=" + encodeURIComponent(p) + "&platform=" + encodeURIComponent(n) + "&sdk_version=" + encodeURIComponent(popup.lib_version) + "&time=" + new Date().getTime(), type: "GET", success: function success(t) {var e,p = t.data,n = { content: p.content, type: p.popup_type },o = !0,i = _.getUuid()();try {e = JSON.parse(p.content);} catch (t) {o = !1;}var r = { props: { $sf_succeed: !0 }, plan: {} };if (r.uuid = i, popup.popupTree = {}, "CUSTOMIZED" === p.popup_type) r.popupTree = {}, popup.CAMPAIGN_ERROR.onStart ? (r.props = { $sf_fail_reason: "onStart \u65B9\u6CD5\u672A\u5B9A\u4E49", $sf_succeed: !1 }, popup.track.popupDisplay(r), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(n, "1004", "onStart \u65B9\u6CD5\u672A\u5B9A\u4E49")) : p.content ? (popup.campaign_listener.onStart(n), popup.track.popupDisplay(r)) : (r.props = { $sf_fail_reason: "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E", $sf_succeed: !1 }, popup.track.popupDisplay(r), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(n, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"));else {try {new popup.parseTree(e), r.popupTree = popup.popupTree, r.plan = { popup_window_content: p };} catch (t) {popup.log("--\u6D4B\u8BD5\u5F39\u7A97-\u89E3\u6790\u9519\u8BEF", t), o = !1;}o ? (popup.track.popupDisplay(r), popup.CAMPAIGN_ERROR.onStart || popup.campaign_listener.onStart(n), popup.popupEmitter.notify(r)) : (r.props = { $sf_fail_reason: "\u5F39\u7A97\u5185\u5BB9\u5F02\u5E38", $sf_succeed: !1 }, popup.track.popupDisplay(r), popup.info.popup_listener.onLoadFailed(void 0, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"), popup.CAMPAIGN_ERROR.onFailed || popup.campaign_listener.onFailed(n, "1001", "\u9884\u89C8\u4FE1\u606F\u89E3\u6790\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u8BA1\u5212\u914D\u7F6E"));}} });} }, popup.track = { getPublicProps: function getPublicProps() {return { $sf_lib_version: popup.lib_version, $sf_plan_type: "\u8FD0\u8425\u8BA1\u5212", $sf_channel_service_name: "SENSORS_FOCUS", $sf_channel_category: "POPUP", $sf_platform_tag: popup.info.platform };}, removeEmpty: function removeEmpty(t) {_.each(t, function (e, p) {"" !== e && void 0 !== e || delete t[p];});}, popupDisplay: function popupDisplay(t) {var e = popup.track.getPublicProps(),p = popup.track.getPlanProps(t);_.extend(e, t.props, p), this.removeEmpty(e), popup.sa.track("$PlanPopupDisplay", e);}, popupClick: function popupClick(t) {var e = popup.track.getPublicProps(),p = popup.track.getPlanProps(t),n = { type: t.props.$sf_msg_element_action, value: t.props.action_value || "", extra: t.props.action_value || "" };try {popup.info.popup_listener.onClick(t.plan.plan_id, n);} catch (t) {popup.log("popup_listener.onClick error", t);}delete t.props.action_value, _.extend(e, t.props, p), e.$sf_plan_id || delete e.$sf_plan_id, this.removeEmpty(e), popup.sa.track("$PlanPopupClick", e);}, getPlanProps: function getPlanProps(t) {var e = {},p = t.popupTree;return e.$sf_msg_id = t.uuid, e.$sf_msg_title = p.title ? p.title.innerText : "", e.$sf_msg_content = p.content ? p.content.innerText : "", e.$sf_msg_image_url = p.img ? p.img.src : "", e.$sf_plan_id = t.plan && t.plan.plan_id || "", e.$sf_audience_id = t.plan && t.plan.audience_id || "", t.plan.strategy_id ? e.$sf_plan_strategy_id = t.plan.strategy_id : _.isBoolean(t.plan.is_control_group) && (t.plan.is_control_group ? e.$sf_plan_strategy_id = -1 : e.$sf_plan_strategy_id = 0), e;} };var _default = popup;exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map