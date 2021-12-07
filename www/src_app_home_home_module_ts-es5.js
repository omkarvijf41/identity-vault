(function () {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

  function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  (self["webpackChunkgetting_started_iv_angular"] = self["webpackChunkgetting_started_iv_angular"] || []).push([["src_app_home_home_module_ts"], {
    /***/
    41899: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Capacitor": function Capacitor() {
          return (
            /* binding */
            _Capacitor
          );
        },

        /* harmony export */
        "CapacitorException": function CapacitorException() {
          return (
            /* binding */
            _CapacitorException
          );
        },

        /* harmony export */
        "CapacitorPlatforms": function CapacitorPlatforms() {
          return (
            /* binding */
            _CapacitorPlatforms
          );
        },

        /* harmony export */
        "ExceptionCode": function ExceptionCode() {
          return (
            /* binding */
            _ExceptionCode
          );
        },

        /* harmony export */
        "Plugins": function Plugins() {
          return (
            /* binding */
            _Plugins
          );
        },

        /* harmony export */
        "WebPlugin": function WebPlugin() {
          return (
            /* binding */
            _WebPlugin
          );
        },

        /* harmony export */
        "WebView": function WebView() {
          return (
            /* binding */
            _WebView
          );
        },

        /* harmony export */
        "addPlatform": function addPlatform() {
          return (
            /* binding */
            _addPlatform
          );
        },

        /* harmony export */
        "registerPlugin": function registerPlugin() {
          return (
            /* binding */
            _registerPlugin
          );
        },

        /* harmony export */
        "registerWebPlugin": function registerWebPlugin() {
          return (
            /* binding */
            _registerWebPlugin
          );
        },

        /* harmony export */
        "setPlatform": function setPlatform() {
          return (
            /* binding */
            _setPlatform
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /*! Capacitor: https://capacitorjs.com/ - MIT License */


      var createCapacitorPlatforms = function createCapacitorPlatforms(win) {
        var defaultPlatformMap = new Map();
        defaultPlatformMap.set('web', {
          name: 'web'
        });
        var capPlatforms = win.CapacitorPlatforms || {
          currentPlatform: {
            name: 'web'
          },
          platforms: defaultPlatformMap
        };

        var addPlatform = function addPlatform(name, platform) {
          capPlatforms.platforms.set(name, platform);
        };

        var setPlatform = function setPlatform(name) {
          if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
          }
        };

        capPlatforms.addPlatform = addPlatform;
        capPlatforms.setPlatform = setPlatform;
        return capPlatforms;
      };

      var initPlatforms = function initPlatforms(win) {
        return win.CapacitorPlatforms = createCapacitorPlatforms(win);
      };
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var _CapacitorPlatforms = /*#__PURE__*/initPlatforms(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */


      var _addPlatform = _CapacitorPlatforms.addPlatform;
      /**
       * @deprecated Set `CapacitorCustomPlatform` on the window object prior to runtime executing in the web app instead
       */

      var _setPlatform = _CapacitorPlatforms.setPlatform;

      var legacyRegisterWebPlugin = function legacyRegisterWebPlugin(cap, webPlugin) {
        var _a;

        var config = webPlugin.config;
        var Plugins = cap.Plugins;

        if (!config || !config.name) {
          // TODO: add link to upgrade guide
          throw new Error("Capacitor WebPlugin is using the deprecated \"registerWebPlugin()\" function, but without the config. Please use \"registerPlugin()\" instead to register this web plugin.\"");
        } // TODO: add link to upgrade guide


        console.warn("Capacitor plugin \"".concat(config.name, "\" is using the deprecated \"registerWebPlugin()\" function"));

        if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
          // Add the web plugin into the plugins registry if there already isn't
          // an existing one. If it doesn't already exist, that means
          // there's no existing native implementation for it.
          // - OR -
          // If we already have a plugin registered (meaning it was defined in the native layer),
          // then we should only overwrite it if the corresponding web plugin activates on
          // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
          Plugins[config.name] = webPlugin;
        }
      };

      var _ExceptionCode;

      (function (ExceptionCode) {
        /**
         * API is not implemented.
         *
         * This usually means the API can't be used because it is not implemented for
         * the current platform.
         */
        ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
        /**
         * API is not available.
         *
         * This means the API can't be used right now because:
         *   - it is currently missing a prerequisite, such as network connectivity
         *   - it requires a particular platform or browser version
         */

        ExceptionCode["Unavailable"] = "UNAVAILABLE";
      })(_ExceptionCode || (_ExceptionCode = {}));

      var _CapacitorException = /*#__PURE__*/function (_Error) {
        _inherits(_CapacitorException, _Error);

        var _super = _createSuper(_CapacitorException);

        function _CapacitorException(message, code) {
          var _this38;

          _classCallCheck(this, _CapacitorException);

          _this38 = _super.call(this, message);
          _this38.message = message;
          _this38.code = code;
          return _this38;
        }

        return _CapacitorException;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      var getPlatformId = function getPlatformId(win) {
        var _a, _b;

        if (win === null || win === void 0 ? void 0 : win.androidBridge) {
          return 'android';
        } else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
          return 'ios';
        } else {
          return 'web';
        }
      };

      var createCapacitor = function createCapacitor(win) {
        var _a, _b, _c, _d, _e;

        var capCustomPlatform = win.CapacitorCustomPlatform || null;
        var cap = win.Capacitor || {};
        var Plugins = cap.Plugins = cap.Plugins || {};
        /**
         * @deprecated Use `capCustomPlatform` instead, default functions like registerPlugin will function with the new object.
         */

        var capPlatforms = win.CapacitorPlatforms;

        var defaultGetPlatform = function defaultGetPlatform() {
          return capCustomPlatform !== null ? capCustomPlatform.name : getPlatformId(win);
        };

        var getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;

        var defaultIsNativePlatform = function defaultIsNativePlatform() {
          return getPlatform() !== 'web';
        };

        var isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;

        var defaultIsPluginAvailable = function defaultIsPluginAvailable(pluginName) {
          var plugin = registeredPlugins.get(pluginName);

          if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
          }

          if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
          }

          return false;
        };

        var isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) || defaultIsPluginAvailable;

        var defaultGetPluginHeader = function defaultGetPluginHeader(pluginName) {
          var _a;

          return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(function (h) {
            return h.name === pluginName;
          });
        };

        var getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;

        var handleError = function handleError(err) {
          return win.console.error(err);
        };

        var pluginMethodNoop = function pluginMethodNoop(_target, prop, pluginName) {
          return Promise.reject("".concat(pluginName, " does not have an implementation of \"").concat(prop, "\"."));
        };

        var registeredPlugins = new Map();

        var defaultRegisterPlugin = function defaultRegisterPlugin(pluginName) {
          var jsImplementations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var registeredPlugin = registeredPlugins.get(pluginName);

          if (registeredPlugin) {
            console.warn("Capacitor plugin \"".concat(pluginName, "\" already registered. Cannot register plugins twice."));
            return registeredPlugin.proxy;
          }

          var platform = getPlatform();
          var pluginHeader = getPluginHeader(pluginName);
          var jsImplementation;

          var loadPluginImplementation = /*#__PURE__*/function () {
            var _ref = (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(!jsImplementation && platform in jsImplementations)) {
                        _context.next = 11;
                        break;
                      }

                      if (!(typeof jsImplementations[platform] === 'function')) {
                        _context.next = 7;
                        break;
                      }

                      _context.next = 4;
                      return jsImplementations[platform]();

                    case 4:
                      _context.t0 = jsImplementation = _context.sent;
                      _context.next = 8;
                      break;

                    case 7:
                      _context.t0 = jsImplementation = jsImplementations[platform];

                    case 8:
                      jsImplementation = _context.t0;
                      _context.next = 20;
                      break;

                    case 11:
                      if (!(capCustomPlatform !== null && !jsImplementation && 'web' in jsImplementations)) {
                        _context.next = 20;
                        break;
                      }

                      if (!(typeof jsImplementations['web'] === 'function')) {
                        _context.next = 18;
                        break;
                      }

                      _context.next = 15;
                      return jsImplementations['web']();

                    case 15:
                      _context.t1 = jsImplementation = _context.sent;
                      _context.next = 19;
                      break;

                    case 18:
                      _context.t1 = jsImplementation = jsImplementations['web'];

                    case 19:
                      jsImplementation = _context.t1;

                    case 20:
                      return _context.abrupt("return", jsImplementation);

                    case 21:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));

            return function loadPluginImplementation() {
              return _ref.apply(this, arguments);
            };
          }();

          var createPluginMethod = function createPluginMethod(impl, prop) {
            var _a, _b;

            if (pluginHeader) {
              var methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(function (m) {
                return prop === m.name;
              });

              if (methodHeader) {
                if (methodHeader.rtype === 'promise') {
                  return function (options) {
                    return cap.nativePromise(pluginName, prop.toString(), options);
                  };
                } else {
                  return function (options, callback) {
                    return cap.nativeCallback(pluginName, prop.toString(), options, callback);
                  };
                }
              } else if (impl) {
                return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
              }
            } else if (impl) {
              return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            } else {
              throw new _CapacitorException("\"".concat(pluginName, "\" plugin is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
            }
          };

          var createPluginMethodWrapper = function createPluginMethodWrapper(prop) {
            var remove;

            var wrapper = function wrapper() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              var p = loadPluginImplementation().then(function (impl) {
                var fn = createPluginMethod(impl, prop);

                if (fn) {
                  var _p = fn.apply(void 0, args);

                  remove = _p === null || _p === void 0 ? void 0 : _p.remove;
                  return _p;
                } else {
                  throw new _CapacitorException("\"".concat(pluginName, ".").concat(prop, "()\" is not implemented on ").concat(platform), _ExceptionCode.Unimplemented);
                }
              });

              if (prop === 'addListener') {
                p.remove = /*#__PURE__*/(0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          return _context2.abrupt("return", remove());

                        case 1:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));
              }

              return p;
            }; // Some flair ✨


            wrapper.toString = function () {
              return "".concat(prop.toString(), "() { [capacitor code] }");
            };

            Object.defineProperty(wrapper, 'name', {
              value: prop,
              writable: false,
              configurable: false
            });
            return wrapper;
          };

          var addListener = createPluginMethodWrapper('addListener');
          var removeListener = createPluginMethodWrapper('removeListener');

          var addListenerNative = function addListenerNative(eventName, callback) {
            var call = addListener({
              eventName: eventName
            }, callback);

            var remove = /*#__PURE__*/function () {
              var _ref3 = (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var callbackId;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return call;

                      case 2:
                        callbackId = _context3.sent;
                        removeListener({
                          eventName: eventName,
                          callbackId: callbackId
                        }, callback);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function remove() {
                return _ref3.apply(this, arguments);
              };
            }();

            var p = new Promise(function (resolve) {
              return call.then(function () {
                return resolve({
                  remove: remove
                });
              });
            });
            p.remove = /*#__PURE__*/(0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.warn("Using addListener() without 'await' is deprecated.");
                      _context4.next = 3;
                      return remove();

                    case 3:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
            return p;
          };

          var proxy = new Proxy({}, {
            get: function get(_, prop) {
              switch (prop) {
                // https://github.com/facebook/react/issues/20030
                case '$$typeof':
                  return undefined;

                case 'toJSON':
                  return function () {
                    return {};
                  };

                case 'addListener':
                  return pluginHeader ? addListenerNative : addListener;

                case 'removeListener':
                  return removeListener;

                default:
                  return createPluginMethodWrapper(prop);
              }
            }
          });
          Plugins[pluginName] = proxy;
          registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy: proxy,
            platforms: new Set([].concat(_toConsumableArray(Object.keys(jsImplementations)), _toConsumableArray(pluginHeader ? [platform] : [])))
          });
          return proxy;
        };

        var registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin; // Add in convertFileSrc for web, it will already be available in native context

        if (!cap.convertFileSrc) {
          cap.convertFileSrc = function (filePath) {
            return filePath;
          };
        }

        cap.getPlatform = getPlatform;
        cap.handleError = handleError;
        cap.isNativePlatform = isNativePlatform;
        cap.isPluginAvailable = isPluginAvailable;
        cap.pluginMethodNoop = pluginMethodNoop;
        cap.registerPlugin = registerPlugin;
        cap.Exception = _CapacitorException;
        cap.DEBUG = !!cap.DEBUG;
        cap.isLoggingEnabled = !!cap.isLoggingEnabled; // Deprecated props

        cap.platform = cap.getPlatform();
        cap.isNative = cap.isNativePlatform();
        return cap;
      };

      var initCapacitorGlobal = function initCapacitorGlobal(win) {
        return win.Capacitor = createCapacitor(win);
      };

      var _Capacitor = /*#__PURE__*/initCapacitorGlobal(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {});

      var _registerPlugin = _Capacitor.registerPlugin;
      /**
       * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
       * Capacitor v3 plugins should import the plugin directly. This "Plugins"
       * export is deprecated in v3, and will be removed in v4.
       */

      var _Plugins = _Capacitor.Plugins;
      /**
       * Provided for backwards compatibility. Use the registerPlugin() API
       * instead, and provide the web plugin as the "web" implmenetation.
       * For example
       *
       * export const Example = registerPlugin('Example', {
       *   web: () => import('./web').then(m => new m.Example())
       * })
       *
       * @deprecated Deprecated in v3, will be removed from v4.
       */

      var _registerWebPlugin = function _registerWebPlugin(plugin) {
        return legacyRegisterWebPlugin(_Capacitor, plugin);
      };
      /**
       * Base class web plugins should extend.
       */


      var _WebPlugin = /*#__PURE__*/function () {
        function _WebPlugin(config) {
          _classCallCheck(this, _WebPlugin);

          this.listeners = {};
          this.windowListeners = {};

          if (config) {
            // TODO: add link to upgrade guide
            console.warn("Capacitor WebPlugin \"".concat(config.name, "\" config object was deprecated in v3 and will be removed in v4."));
            this.config = config;
          }
        }

        _createClass(_WebPlugin, [{
          key: "addListener",
          value: function addListener(eventName, listenerFunc) {
            var _this = this;

            var listeners = this.listeners[eventName];

            if (!listeners) {
              this.listeners[eventName] = [];
            }

            this.listeners[eventName].push(listenerFunc); // If we haven't added a window listener for this event and it requires one,
            // go ahead and add it

            var windowListener = this.windowListeners[eventName];

            if (windowListener && !windowListener.registered) {
              this.addWindowListener(windowListener);
            }

            var remove = /*#__PURE__*/function () {
              var _ref5 = (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        return _context5.abrupt("return", _this.removeListener(eventName, listenerFunc));

                      case 1:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5);
              }));

              return function remove() {
                return _ref5.apply(this, arguments);
              };
            }();

            var p = Promise.resolve({
              remove: remove
            });
            Object.defineProperty(p, 'remove', {
              value: function () {
                var _ref6 = (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                  return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                      switch (_context6.prev = _context6.next) {
                        case 0:
                          console.warn("Using addListener() without 'await' is deprecated.");
                          _context6.next = 3;
                          return remove();

                        case 3:
                        case "end":
                          return _context6.stop();
                      }
                    }
                  }, _callee6);
                }));

                return function value() {
                  return _ref6.apply(this, arguments);
                };
              }()
            });
            return p;
          }
        }, {
          key: "removeAllListeners",
          value: function removeAllListeners() {
            var _this2 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var listener;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _this2.listeners = {};

                      for (listener in _this2.windowListeners) {
                        _this2.removeWindowListener(_this2.windowListeners[listener]);
                      }

                      _this2.windowListeners = {};

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }))();
          }
        }, {
          key: "notifyListeners",
          value: function notifyListeners(eventName, data) {
            var listeners = this.listeners[eventName];

            if (listeners) {
              listeners.forEach(function (listener) {
                return listener(data);
              });
            }
          }
        }, {
          key: "hasListeners",
          value: function hasListeners(eventName) {
            return !!this.listeners[eventName].length;
          }
        }, {
          key: "registerWindowListener",
          value: function registerWindowListener(windowEventName, pluginEventName) {
            var _this39 = this;

            this.windowListeners[pluginEventName] = {
              registered: false,
              windowEventName: windowEventName,
              pluginEventName: pluginEventName,
              handler: function handler(event) {
                _this39.notifyListeners(pluginEventName, event);
              }
            };
          }
        }, {
          key: "unimplemented",
          value: function unimplemented() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not implemented';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unimplemented);
          }
        }, {
          key: "unavailable",
          value: function unavailable() {
            var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'not available';
            return new _Capacitor.Exception(msg, _ExceptionCode.Unavailable);
          }
        }, {
          key: "removeListener",
          value: function removeListener(eventName, listenerFunc) {
            var _this3 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var listeners, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      listeners = _this3.listeners[eventName];

                      if (listeners) {
                        _context8.next = 3;
                        break;
                      }

                      return _context8.abrupt("return");

                    case 3:
                      index = listeners.indexOf(listenerFunc);

                      _this3.listeners[eventName].splice(index, 1); // If there are no more listeners for this type of event,
                      // remove the window listener


                      if (!_this3.listeners[eventName].length) {
                        _this3.removeWindowListener(_this3.windowListeners[eventName]);
                      }

                    case 6:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }))();
          }
        }, {
          key: "addWindowListener",
          value: function addWindowListener(handle) {
            window.addEventListener(handle.windowEventName, handle.handler);
            handle.registered = true;
          }
        }, {
          key: "removeWindowListener",
          value: function removeWindowListener(handle) {
            if (!handle) {
              return;
            }

            window.removeEventListener(handle.windowEventName, handle.handler);
            handle.registered = false;
          }
        }]);

        return _WebPlugin;
      }();

      var _WebView = /*#__PURE__*/_registerPlugin('WebView');
      /***/

    },

    /***/
    71525: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AndroidBiometricCryptoPreference": function AndroidBiometricCryptoPreference() {
          return (
            /* binding */
            _AndroidBiometricCryptoPreference
          );
        },

        /* harmony export */
        "AuthMode": function AuthMode() {
          return (
            /* binding */
            _AuthMode
          );
        },

        /* harmony export */
        "BiometricSecurityStrength": function BiometricSecurityStrength() {
          return (
            /* binding */
            _BiometricSecurityStrength
          );
        },

        /* harmony export */
        "BrowserVault": function BrowserVault() {
          return (
            /* binding */
            _BrowserVault
          );
        },

        /* harmony export */
        "Device": function Device() {
          return (
            /* binding */
            _Device
          );
        },

        /* harmony export */
        "DeviceSecurityType": function DeviceSecurityType() {
          return (
            /* binding */
            _DeviceSecurityType
          );
        },

        /* harmony export */
        "SupportedBiometricType": function SupportedBiometricType() {
          return (
            /* binding */
            _SupportedBiometricType
          );
        },

        /* harmony export */
        "Vault": function Vault() {
          return (
            /* binding */
            _Vault
          );
        },

        /* harmony export */
        "VaultErrorCodes": function VaultErrorCodes() {
          return (
            /* binding */
            _VaultErrorCodes
          );
        },

        /* harmony export */
        "VaultMigrator": function VaultMigrator() {
          return (
            /* binding */
            _VaultMigrator
          );
        },

        /* harmony export */
        "VaultType": function VaultType() {
          return (
            /* binding */
            _VaultType
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      19369);
      /*! Ionic Enterprise Identity Vault: https://ionicframework.com/ - Commercially Licensed */

      /**
       * The meaning of the error code in the thrown {@link VaultError}.
       */


      var _VaultErrorCodes;

      (function (VaultErrorCodes) {
        /**
         * An unknown error happened.
         * @constant `0`
         */
        VaultErrorCodes[VaultErrorCodes["Unknown"] = 0] = "Unknown";
        /**
         * The operation failed because the vault was locked.
         * @constant `1`
         */

        VaultErrorCodes[VaultErrorCodes["VaultLocked"] = 1] = "VaultLocked";
        /**
         * The operation failed because the vault was unavailable.
         * The most likely cause of this error is that a vault has not been configured.
         * @constant `2`
         */

        VaultErrorCodes[VaultErrorCodes["VaultUnavailable"] = 2] = "VaultUnavailable";
        /**
         * The operation failed because the some of the vault provided arguments were invalid.
         * @constant `3`
         */

        VaultErrorCodes[VaultErrorCodes["InvalidArguments"] = 3] = "InvalidArguments";
        /**
         * The credentials were invalidated. This can happen when a user changes biometrics or passcode.
         * @constant `4`
         */

        VaultErrorCodes[VaultErrorCodes["InvalidatedCredential"] = 4] = "InvalidatedCredential";
        /**
         * Biometric security is unavailable due to a passcode not being set up at the system level.
         * In order to use biometric identification on the device a system level passcode must be set up by the user.
         * @constant `5`
         */

        VaultErrorCodes[VaultErrorCodes["SecurityNotAvailable"] = 5] = "SecurityNotAvailable";
        /**
         * User authentication failed.
         * @constant `6`
         */

        VaultErrorCodes[VaultErrorCodes["AuthFailed"] = 6] = "AuthFailed";
        /**
         * Too many failed authentication attempts made against the custom passcode vault, so the vault was cleared and user will need to login again.
         * @constant `7`
         */

        VaultErrorCodes[VaultErrorCodes["TooManyFailedAttempts"] = 7] = "TooManyFailedAttempts";
        /**
         * The user cancelled the native authentication dialog.
         *
         * **Note**: On iOS, this error code will also be thrown in the event that the native authentication dialog fails as a result of too many failed attempts.
         * The user will be forced to cancel the dialog, triggering this error code.
         *
         * On Android, this error also will be thrown if using {@link DeviceSecurityType.SystemPasscode} or {@link DeviceSecurityType.Both} in the event of too many failed attempts.
         * Its currently not possible to get the nature of failures from the native authentication dialog, and similar to iOS, the user will be forced to cancel the dialog, triggering this error code.
         * @constant `8`
         */

        VaultErrorCodes[VaultErrorCodes["UserCanceledInteraction"] = 8] = "UserCanceledInteraction";
        /**
         * The user provided mismatched passcodes.
         * @constant `9`
         */

        VaultErrorCodes[VaultErrorCodes["MismatchedPasscode"] = 9] = "MismatchedPasscode";
        /**
         * The operation requires passcode to be setup but it isn't set yet. Call {@link Vault.setCustomPasscode} to set it.
         * @constant `10`
         */

        VaultErrorCodes[VaultErrorCodes["MissingPasscode"] = 10] = "MissingPasscode";
        /**
         * The operation failed because the application tried to unlock the vault with passcode authentication,
         * but the vault is not configured to allow passcode authentication.
         * @constant `11`
         */

        VaultErrorCodes[VaultErrorCodes["PasscodeNotEnabled"] = 11] = "PasscodeNotEnabled";
        /**
         * The key was not found. This can happen when a user changes biometrics or passcode.
         * @constant `12`
         */

        VaultErrorCodes[VaultErrorCodes["KeyNotFound"] = 12] = "KeyNotFound";
        /**
         * The operation failed because biometric authentication is not enabled.
         * This can occur when biometrics is not supported by the device
         * or when biometrics has not been configured for the device or vault.
         * @constant `13`
         */

        VaultErrorCodes[VaultErrorCodes["BiometricsNotEnabled"] = 13] = "BiometricsNotEnabled";
        /**
         * @ignore
         */

        VaultErrorCodes[VaultErrorCodes["InvalidAuthMode"] = 14] = "InvalidAuthMode";
        /**
         * Biometrics have not been authed yet (Android only)
         * @constant `15`
         */

        VaultErrorCodes[VaultErrorCodes["MissingBiometrics"] = 15] = "MissingBiometrics";
        /**
         * {@link DeviceSecurityType.SystemPasscode} for {@link DeviceSecurityType} not available on this Android device.
         * @constant `16`
         */

        VaultErrorCodes[VaultErrorCodes["AndroidSystemPasscodeUnavailable"] = 16] = "AndroidSystemPasscodeUnavailable";
        /**
         * Biometrics have been locked out, usually because of too many failed attempts.
         *
         * **Note:** This error will never be thrown if using {@link DeviceSecurityType.SystemPasscode} or {@link DeviceSecurityType.Both}.
         * Its currently not possible to get the nature of failures from the native authentication dialog, so the only error that would be thrown is {@link VaultErrorCodes.UserCanceledInteraction} as the user
         * is forced to cancel the prompt.
         *
         * @constant `17`
         */

        VaultErrorCodes[VaultErrorCodes["AndroidBiometricsLockedOut"] = 17] = "AndroidBiometricsLockedOut";
        /**
         * Biometrics have been locked out, usually because of too many failed attempts.
         *
         * @constant `18`
         */

        VaultErrorCodes[VaultErrorCodes["iOSBiometricsLockedOut"] = 18] = "iOSBiometricsLockedOut";
        /**
         * An unexpected error has occurred in the Android keystore.
         *
         * @constant `19`
         */

        VaultErrorCodes[VaultErrorCodes["AndroidUnexpectedKeystoreError"] = 19] = "AndroidUnexpectedKeystoreError";
      })(_VaultErrorCodes || (_VaultErrorCodes = {}));
      /**
       * The possible values returned by {@link Device.getAvailableHardware}
       */


      var _SupportedBiometricType;

      (function (SupportedBiometricType) {
        /** The device supports fingerprint scanning. */
        SupportedBiometricType["Fingerprint"] = "fingerprint";
        /** The device supports facial recognition. */

        SupportedBiometricType["Face"] = "face";
        /** The device supports iris scanning. */

        SupportedBiometricType["Iris"] = "iris";
      })(_SupportedBiometricType || (_SupportedBiometricType = {}));
      /**
       * Possible device biometric strength levels on Android (always `strong` on iOS).
       * [More Information](https://source.android.com/security/biometric/measure#tiered-authentication).
       */


      var _BiometricSecurityStrength;

      (function (BiometricSecurityStrength) {
        /** Refers to Class 2 - Weak biometric security */
        BiometricSecurityStrength["Weak"] = "weak";
        /** Refers to Class 3 - Strong biometric security */

        BiometricSecurityStrength["Strong"] = "strong";
      })(_BiometricSecurityStrength || (_BiometricSecurityStrength = {}));
      /**
       * When type is set to 'DeviceSecurity', determines which aspects of the device to use to secure the vault.
       * Note: Android only supports `SystemPasscode` on Android 11 and greater.
       * @default `Both`
       */


      var _DeviceSecurityType;

      (function (DeviceSecurityType) {
        /** Will allow a system passcode to secure the vault. On Android, only supported on Android 11 and greater. */
        DeviceSecurityType["SystemPasscode"] = "SystemPasscode";
        /** WIll allow biometric hardware tos secure the vault. */

        DeviceSecurityType["Biometrics"] = "Biometrics";
        /** WIll allow both SystemPasscode or Biometrics as an option to secure the vault. */

        DeviceSecurityType["Both"] = "Both";
        /** No biometric security option will be used. */

        DeviceSecurityType["None"] = "None";
      })(_DeviceSecurityType || (_DeviceSecurityType = {}));
      /**
       * The type of vault
       */


      var _VaultType;

      (function (VaultType) {
        /** No additional security is required in the app as long as the device was unlocked with a secure method. */
        VaultType["SecureStorage"] = "SecureStorage";
        /** Uses additional device features to add an additional layer of security while the user is in the app. */

        VaultType["DeviceSecurity"] = "DeviceSecurity";
        /** User will set a custom passcode that will be used to access the vault. */

        VaultType["CustomPasscode"] = "CustomPasscode";
        /** Data will persist only while the application is in memory. */

        VaultType["InMemory"] = "InMemory";
      })(_VaultType || (_VaultType = {}));
      /**
       * For Android, when type is {@link VaultType.DeviceSecurity} and deviceSecurityType is {@link DeviceSecurityType.Both}, this options specifies if you want to
       * prefer a Strong Cryptographic Vault or the System Passcode fallback when they both aren't available.
       * @default `StrongVault`
       */


      var _AndroidBiometricCryptoPreference;

      (function (AndroidBiometricCryptoPreference) {
        /** Prefer to use a strong cryptographic vault. */
        AndroidBiometricCryptoPreference["StrongVault"] = "StrongVault";
        /** Prefer the system passcode fallback. */

        AndroidBiometricCryptoPreference["SystemPasscode"] = "SystemPasscode";
      })(_AndroidBiometricCryptoPreference || (_AndroidBiometricCryptoPreference = {})); // OLD METHODS

      /**
       * The type of authentication the vault should be configured to allow.
       * @deprecated For use in legacy Vault Migrator only.
       * @ignore
       */


      var _AuthMode;

      (function (AuthMode) {
        /**
         * Biometrics authentication should only be allowed
         */
        AuthMode[AuthMode["BiometricOnly"] = 0] = "BiometricOnly";
        /**
         * Passcode authentication should only be allowed
         */

        AuthMode[AuthMode["PasscodeOnly"] = 1] = "PasscodeOnly";
        /**
         * Both biometric and passcode authentication should be allowed
         */

        AuthMode[AuthMode["BiometricAndPasscode"] = 2] = "BiometricAndPasscode";
        /**
         * Both biometric and passcode authentication should be disabled.
         * With this setting all data in the vault will be cleared on lock or
         * if the app is closed. Stored data is kept only in memory.
         */

        AuthMode[AuthMode["InMemoryOnly"] = 3] = "InMemoryOnly";
        /**
         * Use biometrics if it is available, otherwise use passcode
         */

        AuthMode[AuthMode["BiometricOrPasscode"] = 4] = "BiometricOrPasscode";
        /**
         * Both biometric and passcode authentication will be disabled but any stored values
         * will persist and be stored securely at rest using the keychain and will be available
         * without needing to authenticate via passcode or biometrics when the device is unlocked.
         */

        AuthMode[AuthMode["SecureStorage"] = 5] = "SecureStorage";
      })(_AuthMode || (_AuthMode = {}));
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */


      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      var STORAGE_KEYS = {
        DATA: "data"
      };
      /**
       * THIS VAULT DOES NOT IMPLEMENT SECURE STORAGE IN THE BROWSER. It only exists
       * as a way to run browser-compatible code in place of Identity Vault. Browsers
       * do not have a secure storage element same as native devices. This class
       * is intended to be used to enable running your application in the browser while
       * simulating the functions of Identity Vault using sessionStorage.
       *
       * Represents a vault implementation for browser compatibility.
       */

      var _BrowserVault = /*#__PURE__*/function () {
        /**
         * @usage
         * ```typescript
         * const vault = new Vault({
         *  key: 'com.company.myvaultapp',
         *  type: 'CustomPasscode',
         *  deviceSecurityType: 'Both',
         *  lockAfterBackgrounded: 2000,
         * });
         * ```
         * @param config
         */
        function _BrowserVault(config) {
          _classCallCheck(this, _BrowserVault);

          /** @ignore */
          this.isVaultLocked = false;
          console.warn("THIS VAULT DOES NOT IMPLEMENT SECURE STORAGE IN THE BROWSER AND IS NOT INTENDED FOR PRODUCTION USE. It only exists as a way to run browser-compatible code in place of Identity Vault. Browsers do not have a secure storage element same as native devices. This class is intended to be used to enable running your application in the browser while simulating the functions of Identity Vault using sessionStorage.");
          this.config = Object.assign({
            deviceSecurityType: "Both",
            androidBiometricsPreferStrongVaultOrSystemPasscode: "StrongVault",
            shouldClearVaultAfterTooManyFailedAttempts: false,
            customPasscodeInvalidUnlockAttempts: 5,
            unlockVaultOnLoad: false
          }, config);
          this.isVaultLocked = config.unlockVaultOnLoad ? false : true;
        }
        /** See {@link Vault.doesVaultExist} */


        _createClass(_BrowserVault, [{
          key: "doesVaultExist",
          value: function doesVaultExist() {
            var data = this.getDataObj();
            return Promise.resolve(!!data);
          }
          /** See {@link Vault.clear} */

        }, {
          key: "clear",
          value: function clear() {
            this.unlockIfLocked();
            sessionStorage.removeItem(this.getKey(STORAGE_KEYS.DATA));
            return Promise.resolve();
          }
          /** See {@link Vault.exportVault} */

        }, {
          key: "exportVault",
          value: function exportVault() {
            this.unlockIfLocked();
            var data = this.getDataObj();
            return Promise.resolve(data !== null && data !== void 0 ? data : {});
          }
          /** See {@link Vault.importVault} */

        }, {
          key: "importVault",
          value: function importVault(data) {
            this.setDataObj(data);
            return Promise.resolve();
          }
          /** See {@link Vault.isLocked} */

        }, {
          key: "isLocked",
          value: function isLocked() {
            return Promise.resolve(this.isVaultLocked);
          }
          /** See {@link Vault.getKeys} */

        }, {
          key: "getKeys",
          value: function getKeys() {
            this.unlockIfLocked();
            var data = this.getDataObj();
            if (!data) return Promise.resolve([]);
            return Promise.resolve(Object.keys(data));
          }
          /** See {@link Vault.getValue} */

        }, {
          key: "getValue",
          value: function getValue(key) {
            var _a;

            this.unlockIfLocked();
            var data = this.getDataObj();
            return Promise.resolve((_a = data === null || data === void 0 ? void 0 : data[key]) !== null && _a !== void 0 ? _a : null);
          }
          /** See {@link Vault.lock} */

        }, {
          key: "lock",
          value: function lock() {
            var _a;

            (_a = this.lockCallback) === null || _a === void 0 ? void 0 : _a.call(this);
            return Promise.resolve();
          }
          /** See {@link Vault.removeValue} */

        }, {
          key: "removeValue",
          value: function removeValue(key) {
            this.unlockIfLocked();
            var data = this.getDataObj();
            if (!data) return Promise.resolve();
            var _a = data,
                _b = key;
            _a[_b];

            var dataAfterRemoval = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);

            this.setDataObj(dataAfterRemoval);
            return Promise.resolve();
          }
          /** See {@link Vault.setCustomPasscode} */

        }, {
          key: "setCustomPasscode",
          value: function setCustomPasscode(passcode) {
            return Promise.resolve();
          }
          /** See {@link Vault.setValue} */

        }, {
          key: "setValue",
          value: function setValue(key, value) {
            this.unlockIfLocked();
            var data = this.getDataObj();

            if (!data) {
              this.setDataObj(_defineProperty({}, key, value));
            } else {
              this.setDataObj(Object.assign(Object.assign({}, data), _defineProperty({}, key, value)));
            }

            return Promise.resolve();
          }
          /** See {@link Vault.onConfigChanged} */

        }, {
          key: "onConfigChanged",
          value: function onConfigChanged(callback) {
            this.configCallback = callback;
          }
          /** See {@link Vault.onError} */

        }, {
          key: "onError",
          value: function onError(callback) {
            this.errorCallback = callback;
          }
          /** See {@link Vault.onLock} */

        }, {
          key: "onLock",
          value: function onLock(callback) {
            this.lockCallback = callback;
          }
          /** See {@link Vault.onPasscodeRequested} */

        }, {
          key: "onPasscodeRequested",
          value: function onPasscodeRequested(callback) {// No passcode support
          }
          /** See {@link Vault.onUnlock} */

        }, {
          key: "onUnlock",
          value: function onUnlock(callback) {
            this.unlockCallback = callback;
          }
          /** See {@link Vault.unlock} */

        }, {
          key: "unlock",
          value: function unlock() {
            var _a;

            (_a = this.unlockCallback) === null || _a === void 0 ? void 0 : _a.call(this);
            return Promise.resolve();
          }
          /** See {@link Vault.updateConfig} */

        }, {
          key: "updateConfig",
          value: function updateConfig(config) {
            var _a;

            this.config = config;
            (_a = this.configCallback) === null || _a === void 0 ? void 0 : _a.call(this, config);
            return Promise.resolve();
          }
          /** @ignore */

        }, {
          key: "requestBiometricPrompt",
          value: function requestBiometricPrompt() {
            this.unlockIfLocked();
            return Promise.resolve(true);
          }
          /** @ignore */

        }, {
          key: "unlockIfLocked",
          value: function unlockIfLocked() {
            if (this.isVaultLocked) {
              this.unlock();
            }
          }
          /** @ignore */

        }, {
          key: "getDataObj",
          value: function getDataObj() {
            var _a;

            var value = sessionStorage.getItem(this.getKey(STORAGE_KEYS.DATA));
            if (!value) return null;

            try {
              return JSON.parse(value);
            } catch (e) {
              (_a = this.errorCallback) === null || _a === void 0 ? void 0 : _a.call(this, {
                message: "Unable to parse data store",
                code: _VaultErrorCodes.Unknown
              });
              return null;
            }
          }
          /** @ignore */

        }, {
          key: "setDataObj",
          value: function setDataObj(data) {
            var _a;

            try {
              var dataStr = JSON.stringify(data);
              sessionStorage.setItem(this.getKey(STORAGE_KEYS.DATA), dataStr);
            } catch (e) {
              (_a = this.errorCallback) === null || _a === void 0 ? void 0 : _a.call(this, {
                message: "Unable to serialize data",
                code: _VaultErrorCodes.Unknown
              });
            }
          }
          /** @ignore */

        }, {
          key: "getKey",
          value: function getKey(key) {
            return "IV-".concat(this.config.key, "-").concat(key);
          }
        }]);

        return _BrowserVault;
      }();
      /**
       * Represents a vault for secure value storage
       */


      var _Vault = /*#__PURE__*/function () {
        /**
         * @usage
         * ```typescript
         * const vault = new Vault({
         *  key: 'com.company.myvaultapp',
         *  type: 'CustomPasscode',
         *  deviceSecurityType: DeviceSecurityType.None,
         *  lockAfterBackgrounded: 2000,
         * });
         * ```
         * @param config
         */
        function _Vault(config) {
          var _this40 = this;

          _classCallCheck(this, _Vault);

          /** @ignore */
          this.defaultConfig = {
            deviceSecurityType: _DeviceSecurityType.None,
            androidBiometricsPreferStrongVaultOrSystemPasscode: _AndroidBiometricCryptoPreference.StrongVault,
            shouldClearVaultAfterTooManyFailedAttempts: false,
            customPasscodeInvalidUnlockAttempts: 5,
            unlockVaultOnLoad: false
          }; // set defaults

          this.config = Object.assign(this.defaultConfig, config); // setting sane defaults

          if (config.deviceSecurityType === _DeviceSecurityType.None && config.type === _VaultType.DeviceSecurity) {
            config.deviceSecurityType = _DeviceSecurityType.Both;
          }

          this.resume = this.resume.bind(this);
          this.handleError = this.handleError.bind(this);
          this.setup().then(function () {
            _this40.getPersistedVaultConfig();
          });
        }
        /**
         * Resolves true if a vault with the same key already exists, and false if not.
         * The vault does not need to be unlocked to check.
         *
         * @usage
         * ```typescript
         * const vault = new Vault(existingVaultConfig);
         * const vaultExists = await vault.doesVaultExists()
         * if (!vaultExists) {
         *  // the vault does not exist...
         * }
         * ```
         */


        _createClass(_Vault, [{
          key: "doesVaultExist",
          value: function doesVaultExist() {
            var _this41 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _this41.handleError(resolve, reject, error, function () {
                  return _this41.doesVaultExist();
                });
              }, "VaultPlugin", "doesVaultExist", [_this41.config]);
            });
          }
          /**
           * Clears out the current vault and removes it from the system.
           * Note: The vault does not need to be unlocked in order to clear it. No credentials are checked
           * when clearing the vault.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * await vault.clear();
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            var _this42 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve();
              }, function (error) {
                _this42.handleError(resolve, reject, error, function () {
                  return _this42.clear();
                });
              }, "VaultPlugin", "clear", [_this42.config]);
            });
          }
          /**
           * Exports the data of the current vault in its entirety.
           * The data is a map with keys that are strings and values that are JSON.
           * Calling `exportVault` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * const data = await vault.exportVault();
           * ```
           *
           * @return The resolved object is a map with string keys and string values.
           *
           */

        }, {
          key: "exportVault",
          value: function exportVault() {
            var _this43 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _this43.handleError(resolve, reject, error, function () {
                  return _this43.exportVault();
                });
              }, "VaultPlugin", "exportVault", [_this43.config]);
            });
          }
          /**
           * Imports data into the vault, replacing the current contents of the vault.
           * The data is a map with keys that are strings and values that are JSON.
           * Calling `importVault` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const dataFromElsewhere = await getUserData();
           * const newVault = new Vault(vaultConfig);
           * await newVault.importVault(dataFromElsewhere);
           * ```
           *
           * @param data The entire data object to be imported. The shape of data must be {[key: string]: string}.
           *
           */

        }, {
          key: "importVault",
          value: function importVault(data) {
            var _this44 = this;

            var jsonData = JSON.stringify(data);
            return new Promise(function (resolve, reject) {
              cordova.exec(resolve, function (error) {
                _this44.handleError(resolve, reject, error, function () {
                  return _this44.importVault(data);
                });
              }, "VaultPlugin", "importVault", [_this44.config, jsonData]);
            });
          }
          /**
           * Checks if the vault is currently in a locked state, which signifies that the contents
           * of the secure vault are not currently accessible. `isLocked` can also return true if the
           * vault does not exist.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * const locked = await vault.isLocked();
           * if (locked) {
           *  // vault is locked (or does not exist);
           * }
           * ```
           */

        }, {
          key: "isLocked",
          value: function isLocked() {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _this45.handleError(resolve, reject, error);
              }, "VaultPlugin", "isLocked", [_this45.config]);
            });
          }
          /**
           * Returns an array of keys that are currently in the vault.
           * Calling `getKeys` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * const allKeys = await vault.getKeys();
           * allKeys.forEach((key) => {
           *  // do something with the key
           * });
           * ```
           */

        }, {
          key: "getKeys",
          value: function getKeys() {
            var _this46 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _this46.handleError(resolve, reject, error, function () {
                  return _this46.getKeys();
                });
              }, "VaultPlugin", "getKeys", [_this46.config]);
            });
          }
          /**
           * Gets the value for a given key. Returns null if the key does not exist.
           * Calling `getValue` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * const userFirstName = await vault.getValue<string>("firstname");
           * ```
           *
           * @param key The key to look up the value for
           *
           */

        }, {
          key: "getValue",
          value: function getValue(key) {
            var _this47 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                if (!data) {
                  // android returns null as an empty string, so manually convert it here
                  resolve(null);
                } else {
                  try {
                    resolve(JSON.parse(data));
                  } catch (err) {
                    resolve(data);
                  }
                }
              }, function (error) {
                _this47.handleError(resolve, reject, error, function () {
                  return _this47.getValue(key);
                });
              }, "VaultPlugin", "getValue", [_this47.config, key]);
            });
          }
          /**
           * Locks the vault if it is currently unlocked.
           * Locking the vault with remove all secure data from memory inside of Identity Vault, but not your application.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * await vault.lock();
           * ```
           */

        }, {
          key: "lock",
          value: function lock() {
            var _this48 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve();
              }, function (error) {
                _this48.handleError(resolve, reject, error);
              }, "VaultPlugin", "lock", [_this48.config]);
            });
          }
          /**
           * Removes a value from the vault.
           * Calling `removeValue` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * await vault.removeValue("address");
           * ```
           *
           * @param key The key to remove
           *
           */

        }, {
          key: "removeValue",
          value: function removeValue(key) {
            var _this49 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(resolve, function (error) {
                _this49.handleError(resolve, reject, error, function () {
                  return _this49.removeValue(key);
                });
              }, "VaultPlugin", "removeValue", [_this49.config, key]);
            });
          }
          /**
           * When the vault type is set to 'CustomPasscode', this method sets the passcode required to
           * secure the vault.
           * This method is typically called in the `onPasscodeRequested` callback.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * const code = window.prompt("Enter your passcode.");
           * if (code) {
           *  await vault.setCustomPasscode(code);
           * }
           * ```
           *
           * @param passcode The user supplied passcode to secure the vault with.
           *
           */

        }, {
          key: "setCustomPasscode",
          value: function setCustomPasscode(passcode) {
            var _this50 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(resolve, function (error) {
                _this50.handleError(resolve, reject, error);
              }, "VaultPlugin", "setCustomPasscode", [_this50.config, passcode]);
            });
          }
          /**
           * Sets the value of an item in the vault.
           * Calling `setValue` will attempt to unlock the vault if it is currently locked.
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * await vault.setValue<string>("theme", theme);
           * ```
           *
           * @param key The key for the new value.
           * @param value The value to store in the vault. Value can be of any type, as it will be parsed to JSON in the vault.
           *
           */

        }, {
          key: "setValue",
          value: function setValue(key, value) {
            var _this51 = this;

            var jsonValue = JSON.stringify(value);
            return new Promise(function (resolve, reject) {
              cordova.exec(resolve, function (error) {
                _this51.handleError(resolve, reject, error, function () {
                  return _this51.setValue(key, value);
                });
              }, "VaultPlugin", "setValue", [_this51.config, key, jsonValue]);
            });
          }
          /**
           * Triggers when a config change occurs.
           *
           * @usage
           * ```typescript
           * vault.onConfigChanged((config) => {
           *  console.log("updated config: ", config);
           * });
           * ```
           * @param callback The callback function that will be called when the event triggers. Passes in the current vault config.
           *
           */

        }, {
          key: "onConfigChanged",
          value: function onConfigChanged(callback) {
            cordova.exec(function (data) {
              callback(JSON.parse(data));
            }, function (error) {
              return console.error(error);
            }, "VaultPlugin", "onConfigChanged", []);
          }
          /**
           * Triggers when an error occurs in the application.
           * Errors that come back as rejected promises also trigger this event.
           *
           * @usage
           * ```typescript
           * vault.onError((err) => {
           *  console.log('ERROR from callback', JSON.stringify(err));
           * });
           * ```
           *
           * @param callback The callback function that will be called when the event triggers. Passes in the error object.
           *
           */

        }, {
          key: "onError",
          value: function onError(callback) {
            cordova.exec(function () {}, callback, "VaultPlugin", "onError", []);
          }
          /**
           * Triggers when the vault enters a locked state.
           *
           * @usage
           * ```typescript
           * vault.onLock(() => { displayNotification("Vault locked."); })
           * ```
           *
           * @param callback The callback function that will be called when the event triggers.
           *
           */

        }, {
          key: "onLock",
          value: function onLock(callback) {
            cordova.exec(callback, function (error) {
              return console.error(error);
            }, "VaultPlugin", "onLock", [this.config]);
          }
          /**
           * For CustomPasscode vaults, this event triggers when the vault is attempting to unlock
           * and the passcode has not been set yet. The callback function will pass in a Promise that,
           * when resolved, with attempt to unlock the vault again calling the same method that originally
           * tried to unlock the vault. Before the promise is resolved, you should prompt the user to supply a passcode, and
           * then supply that value to `setCustomPasscode`.
           *
           * @usage
           * ```typescript
           * vault.onPasscodeRequested(async (isPasscodeSetRequest) => {
           *  const message = isPasscodeSetRequest
           *    ? 'Setup Passcode' // passcode is being set for first time
           *    : 'Enter passcode'; // passcode is being asked for unlock
           *  const passcode = window.prompt(message) || '';
           *   vault.setCustomPasscode(passcode);
           *   return Promise.resolve();
           * });
           * ```
           *
           * @param callback The callback function that will be called when the event triggers. The function returns a promise with a boolean that indicates if the passcode is being setup for the first time for the vault or not.
           *
           */

        }, {
          key: "onPasscodeRequested",
          value: function onPasscodeRequested(callback) {
            this.passCodeRequestedCallback = callback;
          }
          /**
           * Triggers when the vault enters an unlocked state.
           *
           * @usage
           * ```typescript
           * vault.onUnlock(() => {
           *  console.log("vault is now unlocked");
           * });
           * ```
           * @param callback The callback function that will be called when the event triggers.
           *
           */

        }, {
          key: "onUnlock",
          value: function onUnlock(callback) {
            cordova.exec(callback, function (error) {
              return console.error(error);
            }, "VaultPlugin", "onUnlock", [this.config]);
          }
          /**
           * Manually unlock the vault. Will trigger any authentication mechanism needed to access the vault (passcode, biometrics, etc..).
           *
           * @usage
           * ```typescript
           * const vault = new Vault(existingVaultConfig);
           * await vault.unlock();
           * ```
           */

        }, {
          key: "unlock",
          value: function unlock() {
            var _this52 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function () {
                resolve();
              }, function (error) {
                _this52.handleError(resolve, reject, error, function () {
                  return _this52.unlock();
                });
              }, "VaultPlugin", "unlock", [_this52.config]);
            });
          }
          /**
           * Updates the configuration of the current vault.
           *
           *  @usage
           * ```typescript
           * async function changeVaultType(type: VaultType) {
           *  const vault = new Vault(this.existingVaultConfig);
           *  const newConfig = { ...this.existingVaultConfig, type };
           *  await vault.updateConfig(newConfig);
           *  this.existingVaultConfig = newConfig;
           * }
           * ```
           *
           * @param config The new config
           *
           */

        }, {
          key: "updateConfig",
          value: function updateConfig(config) {
            var _this53 = this;

            return new Promise(function (resolve, reject) {
              config = Object.assign(_this53.defaultConfig, config); // setting sane defaults

              if (config.deviceSecurityType === _DeviceSecurityType.None && config.type === _VaultType.DeviceSecurity) {
                config.deviceSecurityType = _DeviceSecurityType.Both;
              }

              cordova.exec(function () {
                _this53.config = config;
                resolve();
              }, function (error) {
                _this53.handleError(resolve, reject, error, function () {
                  return _this53.updateConfig(config);
                });
              }, "VaultPlugin", "updateConfig", [config]);
            });
          }
          /** @ignore */

        }, {
          key: "handleError",
          value: function handleError(resolve, reject, error, retryFunc) {
            var _this = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var data;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      if (!(error.code === _VaultErrorCodes.MissingPasscode && _this.passCodeRequestedCallback)) {
                        _context10.next = 16;
                        break;
                      }

                      _context10.next = 3;
                      return _this.passCodeRequestedCallback(error.extra.isPasscodeSetRequest);

                    case 3:
                      if (!retryFunc) {
                        _context10.next = 14;
                        break;
                      }

                      _context10.prev = 4;
                      _context10.next = 7;
                      return retryFunc();

                    case 7:
                      data = _context10.sent;
                      resolve(data);
                      _context10.next = 14;
                      break;

                    case 11:
                      _context10.prev = 11;
                      _context10.t0 = _context10["catch"](4);
                      reject(_context10.t0);

                    case 14:
                      _context10.next = 17;
                      break;

                    case 16:
                      if (error.code === _VaultErrorCodes.MissingBiometrics) {
                        cordova.exec( /*#__PURE__*/(0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var data;
                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  _context9.next = 2;
                                  return retryFunc();

                                case 2:
                                  data = _context9.sent;
                                  resolve(data);

                                case 4:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9);
                        })), function (e) {
                          return reject(e);
                        }, "VaultPlugin", "requestBiometricPrompt", [_this.config]);
                      } else {
                        reject(error);
                      }

                    case 17:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, null, [[4, 11]]);
            }))();
          }
          /** @ignore */

        }, {
          key: "requestBiometricPrompt",
          value: function requestBiometricPrompt() {
            var _this54 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _this54.handleError(resolve, reject, error, function () {
                  return _this54.requestBiometricPrompt();
                });
              }, "VaultPlugin", "requestBiometricPrompt", [_this54.config]);
            });
          }
          /**
           * @ignore
           */

        }, {
          key: "resume",
          value: function resume() {
            var _this55 = this;

            var noop = function noop() {};

            cordova.exec(noop, function (error) {
              _this55.handleError(noop, noop, error, function () {
                return _this55.resume();
              });
            }, "VaultPlugin", "appResumed", [this.config]);
          }
          /**
           * @ignore
           */

        }, {
          key: "setup",
          value: function setup() {
            var _this56 = this;

            return new Promise(function (resolve, reject) {
              document.addEventListener("resume", _this56.resume, false);
              cordova.exec(resolve, function (error) {
                _this56.handleError(resolve, reject, error);
              }, "VaultPlugin", "setup", [_this56.config]);
            });
          }
          /**
           * @ignore
           */

        }, {
          key: "getPersistedVaultConfig",
          value: function getPersistedVaultConfig() {
            var _this57 = this;

            return new Promise(function (resolve, reject) {
              cordova.exec(function (data) {
                if (!data) {
                  resolve();
                } else {
                  var vaultConfig = JSON.parse(data);
                  _this57.config = Object.assign(_this57.config, vaultConfig);
                  resolve();
                }
              }, function (error) {
                _this57.handleError(resolve, reject, error);
              }, "VaultPlugin", "getVaultConfig", [_this57.config]);
            });
          }
        }]);

        return _Vault;
      }();

      var _Device = /*#__PURE__*/function () {
        /** @ignore */
        function _Device() {
          _classCallCheck(this, _Device);
        }
        /**
         * Gets the types of biometrics the device supports.
         *
         * @usage
         * ```typescript
         * const hardware = await Device.getAvailableHardware();
         * hardware.forEach((biometricType) => console.log("Type: " + biometricType));
         * ```
         */


        _createClass(_Device, null, [{
          key: "getAvailableHardware",
          value: function getAvailableHardware() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve([]);
                return;
              }

              cordova.exec(function (data) {
                resolve(data);
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "getAvailableHardware", []);
            });
          }
          /**
           * Check whether biometrics are locked out on the device.
           *
           * On Android, the locked out state will only known after an attempted biometric unlock.
           *
           * @usage
           * ```typescript
           * const isLockedOut = await Device.isLockedOutOfBiometrics();
           * if (isLockedOut) {
           *  // device is locked out ...
           * }
           * ```
           */

        }, {
          key: "isLockedOutOfBiometrics",
          value: function isLockedOutOfBiometrics() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "isLockedOutOfBiometrics", []);
            });
          }
          /**
           * Checks the device biometric strength level.
           *
           * On iOS this will always return 'strong'.
           *
           * @usage
           * ```typescript
           * const biometricStrength = await Device.getBiometricStrengthLevel();
           * ```
           */

        }, {
          key: "getBiometricStrengthLevel",
          value: function getBiometricStrengthLevel() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(_BiometricSecurityStrength.Weak);
                return;
              }

              cordova.exec(function (data) {
                resolve(data);
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "getBiometricStrengthLevel", []);
            });
          }
          /**
           * Check whether or not the screen will be obscured in app switcher mode.
           *
           * @usage
           * ```typescript
           * const willHideScreen = await Device.isHideScreenOnBackgroundEnabled();
           * ```
           */

        }, {
          key: "isHideScreenOnBackgroundEnabled",
          value: function isHideScreenOnBackgroundEnabled() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "isHideScreenOnBackgroundEnabled", []);
            });
          }
          /**
           * Set whether or not the screen will be obscured in app switcher mode
           *
           * @usage
           * ```typescript
           * await Device.setHideScreenOnBackground(true);
           * ```
           */

        }, {
          key: "setHideScreenOnBackground",
          value: function setHideScreenOnBackground(enabled) {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve();
                return;
              }

              cordova.exec(function () {
                resolve();
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "setHideScreenOnBackground", [enabled]);
            });
          }
          /**
           * Check whether the device OS-level passcode has been set.
           *
           * @usage
           * ```typescript
           * const hasSystemPasscode = await Device.isSystemPasscodeSet();
           * if (hasSystemPasscode) {
           *  // device has a system passcode
           * }
           * ```
           */

        }, {
          key: "isSystemPasscodeSet",
          value: function isSystemPasscodeSet() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "isSystemPasscodeSet", []);
            });
          }
          /**
           * Check whether or not biometrics is supported by the device and has been configured by the current user of the device.
           *
           * @usage
           * ```typescript
           * const biometricsEnabled = await Device.isBiometricsEnabled();
           * if (!biometricsEnabled) {
           *  // biometrics not enabled on this device...
           * }
           * ```
           */

        }, {
          key: "isBiometricsEnabled",
          value: function isBiometricsEnabled() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                console.log("biometrics is enabled: ", data);
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "isBiometricsEnabled", []);
            });
          }
          /**
           * Check whether or not biometrics is supported by the device.
           *
           * @usage
           * ```typescript
           * const biometricsSupported = await Device.isBiometricsSupported();
           * if (biometricsSupported) {
           *   // biometrics is supported on this device...
           * }
           * ```
           */

        }, {
          key: "isBiometricsSupported",
          value: function isBiometricsSupported() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "isBiometricsSupported", []);
            });
          }
          /**
           * Check if the device has a secure hardware enclave.
           *
           * @usage
           * ```typescript
           * const hasSecureHardware = await Device.hasSecureHardware();
           * if (!hasSecureHardware) {
           *    // this device doesn't have secure hardware
           * }
           * ```
           */

        }, {
          key: "hasSecureHardware",
          value: function hasSecureHardware() {
            return new Promise(function (resolve, reject) {
              if (!("cordova" in window)) {
                resolve(false);
                return;
              }

              cordova.exec(function (data) {
                resolve(JSON.parse(data));
              }, function (error) {
                _Device.handleError(resolve, reject, error);
              }, "DevicePlugin", "hasSecureHardware", []);
            });
          }
          /**
           * @ignore
           */

        }, {
          key: "handleError",
          value: function handleError(resolve, reject, error, retryFunc) {
            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      reject(error);

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }))();
          }
        }]);

        return _Device;
      }();
      /**
       * @hidden
       *
       * @ignore
       */


      var IonicIdentityVaultUser = /*#__PURE__*/function () {
        function IonicIdentityVaultUser(platform, options, descriptor) {
          _classCallCheck(this, IonicIdentityVaultUser);

          this.platform = platform;
          this.options = options;
          this._readyCalled = false;
          this.descriptor = descriptor || {
            username: '_lastUser',
            vaultId: 'default'
          };
          this._readyPromise = this.initializeVault();
        }

        _createClass(IonicIdentityVaultUser, [{
          key: "token",
          get: function get() {
            var session = this.session;
            return session && session.token;
          }
        }, {
          key: "username",
          get: function get() {
            var session = this.session;
            return session && session.username;
          }
        }, {
          key: "config",
          get: function get() {
            if (!this._config) {
              return undefined;
            }

            var authMode;
            var bioEnabled = this._config.isBiometricsEnabled;
            var passEnabled = this._config.isPasscodeEnabled;
            var secureStorageMode = this._config.isSecureStorageModeEnabled;

            if (secureStorageMode) {
              authMode = _AuthMode.SecureStorage;
            } else if (bioEnabled && passEnabled) {
              authMode = _AuthMode.BiometricAndPasscode;
            } else if (bioEnabled && !passEnabled) {
              authMode = _AuthMode.BiometricOnly;
            } else if (!bioEnabled && passEnabled) {
              authMode = _AuthMode.PasscodeOnly;
            } else if (!bioEnabled && !passEnabled) {
              authMode = _AuthMode.InMemoryOnly;
            }

            return {
              authMode: authMode,
              isPasscodeSetupNeeded: this._config.isPasscodeSetupNeeded,
              lockAfter: this._config.lockAfter,
              hideScreenOnBackground: this._config.hideScreenOnBackground
            };
          } // overidable event handlers

        }, {
          key: "onVaultLocked",
          value: function onVaultLocked(_event) {}
        }, {
          key: "onSessionRestoreError",
          value: function onSessionRestoreError(_err) {}
        }, {
          key: "onUnlockOnReadyError",
          value: function onUnlockOnReadyError(_err) {}
        }, {
          key: "onVaultUnlocked",
          value: function onVaultUnlocked(_config) {}
        }, {
          key: "onVaultReady",
          value: function onVaultReady(_config) {}
        }, {
          key: "onSetupError",
          value: function onSetupError(_error) {}
        }, {
          key: "onConfigChange",
          value: function onConfigChange(_config) {}
        }, {
          key: "onSessionRestored",
          value: function onSessionRestored(_session) {}
        }, {
          key: "onPasscodeRequest",
          value: function onPasscodeRequest(_isPasscodeSetRequest) {
            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return");

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }))();
          }
        }, {
          key: "onReady",
          value: function onReady(vault) {
            var _this2 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var inUse, locked, restoreSessionError, unlockOnReadyError;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      if (!_this2._readyCalled) {
                        _context13.next = 2;
                        break;
                      }

                      return _context13.abrupt("return");

                    case 2:
                      _this2._readyCalled = true;
                      _this2.vault = vault;
                      _context13.next = 6;
                      return _this2.vault.isInUse();

                    case 6:
                      inUse = _context13.sent;
                      _this2._config = vault.config;
                      _context13.next = 10;
                      return _this2.vault.isLocked();

                    case 10:
                      locked = _context13.sent;
                      _context13.prev = 11;

                      if (!(_this2.options.restoreSessionOnReady && inUse)) {
                        _context13.next = 15;
                        break;
                      }

                      _context13.next = 15;
                      return _this2._restoreSession();

                    case 15:
                      _context13.next = 20;
                      break;

                    case 17:
                      _context13.prev = 17;
                      _context13.t0 = _context13["catch"](11);
                      restoreSessionError = _context13.t0;

                    case 20:
                      _context13.prev = 20;

                      if (!(locked && _this2.options.unlockOnReady)) {
                        _context13.next = 24;
                        break;
                      }

                      _context13.next = 24;
                      return _this2._unlock();

                    case 24:
                      _context13.next = 29;
                      break;

                    case 26:
                      _context13.prev = 26;
                      _context13.t1 = _context13["catch"](20);
                      unlockOnReadyError = _context13.t1;

                    case 29:
                      _context13.prev = 29;

                      if (inUse) {
                        _context13.next = 33;
                        break;
                      }

                      _context13.next = 33;
                      return _this2._trySetAuthMode(_this2.options.authMode);

                    case 33:
                      _context13.next = 37;
                      break;

                    case 35:
                      _context13.prev = 35;
                      _context13.t2 = _context13["catch"](29);

                    case 37:
                      _this2._readyResolve();

                      _this2.onVaultReady(_this2.config);

                      if (restoreSessionError) {
                        _this2.onSessionRestoreError(restoreSessionError);
                      }

                      if (unlockOnReadyError) {
                        _this2.onUnlockOnReadyError(restoreSessionError);
                      }

                    case 41:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, null, [[11, 17], [20, 26], [29, 35]]);
            }))();
          }
        }, {
          key: "onLock",
          value: function onLock(event) {
            this.session = undefined;
            this.onVaultLocked(event);
          }
        }, {
          key: "onUnlock",
          value: function onUnlock(config) {
            var _this3 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return _this3.ready();

                    case 2:
                      _this3._config = config;

                      _this3.onVaultUnlocked(_this3.config);

                    case 4:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }))();
          }
        }, {
          key: "onError",
          value: function onError(error) {
            this._readyReject(error);

            this.onSetupError(error);
          }
        }, {
          key: "onConfig",
          value: function onConfig(config) {
            this._config = config;
            this.onConfigChange(this.config);
          }
        }, {
          key: "ready",
          value: function ready() {
            var _this4 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      return _context15.abrupt("return", _this4._readyPromise);

                    case 1:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15);
            }))();
          }
        }, {
          key: "_unlock",
          value: function _unlock(authMode) {
            var _this5 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var locked, handleableErrors, session;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return _this5.vault.isLocked();

                    case 2:
                      locked = _context16.sent;

                      if (locked) {
                        _context16.next = 5;
                        break;
                      }

                      return _context16.abrupt("return");

                    case 5:
                      authMode = authMode !== undefined && authMode !== _AuthMode.BiometricOrPasscode ? authMode : _this5.config.authMode;
                      _context16.t0 = authMode;
                      _context16.next = _context16.t0 === _AuthMode.BiometricOnly ? 9 : _context16.t0 === _AuthMode.PasscodeOnly ? 10 : _context16.t0 === _AuthMode.BiometricAndPasscode ? 11 : 31;
                      break;

                    case 9:
                      return _context16.abrupt("return", _this5.vault.unlock());

                    case 10:
                      return _context16.abrupt("return", _this5.unlockWithPasscode());

                    case 11:
                      _context16.prev = 11;
                      _context16.next = 14;
                      return _this5.vault.unlock();

                    case 14:
                      return _context16.abrupt("return");

                    case 17:
                      _context16.prev = 17;
                      _context16.t1 = _context16["catch"](11);
                      handleableErrors = [_VaultErrorCodes.AuthFailed, _VaultErrorCodes.BiometricsNotEnabled, _VaultErrorCodes.UserCanceledInteraction, _VaultErrorCodes.InvalidatedCredential];

                      if (!(handleableErrors.indexOf(_context16.t1.code) > -1)) {
                        _context16.next = 30;
                        break;
                      }

                      _context16.next = 23;
                      return _this5.unlockWithPasscode();

                    case 23:
                      if (!(_context16.t1.code === _VaultErrorCodes.InvalidatedCredential)) {
                        _context16.next = 29;
                        break;
                      }

                      _context16.next = 26;
                      return _this5.restoreSession();

                    case 26:
                      session = _context16.sent;
                      _context16.next = 29;
                      return _this5.saveSession(session);

                    case 29:
                      return _context16.abrupt("return");

                    case 30:
                      throw _context16.t1;

                    case 31:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, null, [[11, 17]]);
            }))();
          }
        }, {
          key: "unlock",
          value: function unlock(authMode) {
            var _this6 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return _this6.ready();

                    case 2:
                      return _context17.abrupt("return", _this6._unlock(authMode));

                    case 3:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17);
            }))();
          }
        }, {
          key: "unlockWithPasscode",
          value: function unlockWithPasscode() {
            var _this7 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var passcode;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return _this7.onPasscodeRequest(false);

                    case 2:
                      passcode = _context18.sent;
                      return _context18.abrupt("return", _this7.vault.unlock(true, passcode));

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }))();
          }
        }, {
          key: "_setPasscode",
          value: function _setPasscode() {
            var _this8 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var locked, passcode;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return _this8.vault.isLocked();

                    case 2:
                      locked = _context19.sent;

                      if (!locked) {
                        _context19.next = 5;
                        break;
                      }

                      throw {
                        code: _VaultErrorCodes.VaultLocked,
                        message: "Operation not allowed while vault locked."
                      };

                    case 5:
                      _context19.next = 7;
                      return _this8.onPasscodeRequest(true);

                    case 7:
                      passcode = _context19.sent;
                      return _context19.abrupt("return", _this8.vault.setPasscode(passcode));

                    case 9:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19);
            }))();
          }
        }, {
          key: "setPasscode",
          value: function setPasscode() {
            var _this9 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return _this9.ready();

                    case 2:
                      return _context20.abrupt("return", _this9._setPasscode());

                    case 3:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }))();
          }
        }, {
          key: "getSession",
          value: function getSession() {
            var _this10 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return _this10.ready();

                    case 2:
                      if (!_this10.options.unlockOnAccess) {
                        _context21.next = 5;
                        break;
                      }

                      _context21.next = 5;
                      return _this10._unlock();

                    case 5:
                      return _context21.abrupt("return", _this10.session);

                    case 6:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21);
            }))();
          }
        }, {
          key: "_restoreSession",
          value: function _restoreSession() {
            var _this11 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              var inUse;
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.next = 2;
                      return _this11.vault.isInUse();

                    case 2:
                      inUse = _context22.sent;

                      if (inUse) {
                        _context22.next = 5;
                        break;
                      }

                      return _context22.abrupt("return");

                    case 5:
                      if (!_this11.options.unlockOnAccess) {
                        _context22.next = 8;
                        break;
                      }

                      _context22.next = 8;
                      return _this11._unlock();

                    case 8:
                      _context22.next = 10;
                      return _this11.vault.getValue('session');

                    case 10:
                      _this11.session = _context22.sent;

                      _this11.onSessionRestored(_this11.session);

                      return _context22.abrupt("return", _this11.session);

                    case 13:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22);
            }))();
          }
        }, {
          key: "restoreSession",
          value: function restoreSession() {
            var _this12 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.next = 2;
                      return _this12.ready();

                    case 2:
                      return _context23.abrupt("return", _this12._restoreSession());

                    case 3:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23);
            }))();
          }
        }, {
          key: "saveSession",
          value: function saveSession(session) {
            var _this13 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var authMode;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.next = 2;
                      return _this13.ready();

                    case 2:
                      if (!_this13.config.isPasscodeSetupNeeded) {
                        _context24.next = 5;
                        break;
                      }

                      _context24.next = 5;
                      return _this13.setPasscode();

                    case 5:
                      _context24.prev = 5;
                      _context24.next = 8;
                      return _this13.vault.storeValue('session', session);

                    case 8:
                      _context24.next = 21;
                      break;

                    case 10:
                      _context24.prev = 10;
                      _context24.t0 = _context24["catch"](5);

                      if (!(_context24.t0.code === _VaultErrorCodes.SecurityNotAvailable)) {
                        _context24.next = 20;
                        break;
                      }

                      _context24.next = 15;
                      return _this13.getAuthMode();

                    case 15:
                      authMode = _context24.sent;

                      if (!(authMode === _AuthMode.BiometricAndPasscode)) {
                        _context24.next = 20;
                        break;
                      }

                      _context24.next = 19;
                      return _this13.setAuthMode(_AuthMode.PasscodeOnly);

                    case 19:
                      return _context24.abrupt("return", _this13.saveSession(session));

                    case 20:
                      throw _context24.t0;

                    case 21:
                      _this13.session = session;

                    case 22:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, null, [[5, 10]]);
            }))();
          }
        }, {
          key: "login",
          value: function login(session, authMode) {
            var _this14 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.next = 2;
                      return _this14.ready();

                    case 2:
                      _context25.next = 4;
                      return _this14.logout();

                    case 4:
                      _context25.next = 6;
                      return _this14._trySetAuthMode(authMode);

                    case 6:
                      return _context25.abrupt("return", _this14.saveSession(session));

                    case 7:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25);
            }))();
          }
        }, {
          key: "getVault",
          value: function getVault() {
            var _this15 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.next = 2;
                      return _this15.ready();

                    case 2:
                      return _context26.abrupt("return", _this15.vault);

                    case 3:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26);
            }))();
          }
        }, {
          key: "initializeVault",
          value: function initializeVault() {
            var _this16 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var readyPromise, _this16$options, lockAfter, hideScreenOnBackground, shouldClearVaultAfterTooManyFailedAttempts, allowSystemPinFallback, androidPromptNegativeButtonText, androidPromptTitle, androidPromptSubtitle, androidPromptDescription, iosPromptText;

              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.next = 2;
                      return _this16.platform.ready();

                    case 2:
                      if (!(_this16.vault != null)) {
                        _context27.next = 4;
                        break;
                      }

                      return _context27.abrupt("return", Promise.resolve());

                    case 4:
                      if (_this16.vIonicNativeAuth == null) {
                        _this16.vIonicNativeAuth = _this16.getPlugin();
                      }

                      readyPromise = new Promise(function (resolve, reject) {
                        _this16._readyResolve = resolve;
                        _this16._readyReject = reject;
                      });
                      _this16$options = _this16.options, lockAfter = _this16$options.lockAfter, hideScreenOnBackground = _this16$options.hideScreenOnBackground, shouldClearVaultAfterTooManyFailedAttempts = _this16$options.shouldClearVaultAfterTooManyFailedAttempts, allowSystemPinFallback = _this16$options.allowSystemPinFallback, androidPromptNegativeButtonText = _this16$options.androidPromptNegativeButtonText, androidPromptTitle = _this16$options.androidPromptTitle, androidPromptSubtitle = _this16$options.androidPromptSubtitle, androidPromptDescription = _this16$options.androidPromptDescription, iosPromptText = _this16$options.iosPromptText;
                      _this16.vault = _this16.vIonicNativeAuth.getVault(Object.assign(Object.assign({
                        lockAfter: lockAfter,
                        hideScreenOnBackground: hideScreenOnBackground,
                        shouldClearVaultAfterTooManyFailedAttempts: shouldClearVaultAfterTooManyFailedAttempts,
                        allowSystemPinFallback: allowSystemPinFallback,
                        androidPromptNegativeButtonText: androidPromptNegativeButtonText,
                        androidPromptTitle: androidPromptTitle,
                        androidPromptSubtitle: androidPromptSubtitle,
                        androidPromptDescription: androidPromptDescription,
                        iosPromptText: iosPromptText
                      }, _this16.descriptor), {
                        onLock: _this16.onLock.bind(_this16),
                        onConfig: _this16.onConfig.bind(_this16),
                        onError: _this16.onError.bind(_this16),
                        onUnlock: _this16.onUnlock.bind(_this16),
                        onReady: _this16.onReady.bind(_this16)
                      }));
                      return _context27.abrupt("return", readyPromise);

                    case 9:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27);
            }))();
          }
        }, {
          key: "getPlugin",
          value: function getPlugin() {
            return IonicNativeAuth;
          }
        }, {
          key: "getBiometricType",
          value: function getBiometricType() {
            var _this17 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.next = 2;
                      return _this17.ready();

                    case 2:
                      return _context28.abrupt("return", _this17.vault.getBiometricType());

                    case 3:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28);
            }))();
          }
        }, {
          key: "getAvailableHardware",
          value: function getAvailableHardware() {
            var _this18 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return _this18.ready();

                    case 2:
                      return _context29.abrupt("return", _this18.vault.getAvailableHardware());

                    case 3:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29);
            }))();
          }
        }, {
          key: "lockOut",
          value: function lockOut() {
            var _this19 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return _this19.ready();

                    case 2:
                      _context30.next = 4;
                      return _this19.vault.lock();

                    case 4:
                      _this19.session = undefined;

                    case 5:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30);
            }))();
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this20 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.next = 2;
                      return _this20.ready();

                    case 2:
                      _context31.next = 4;
                      return _this20.vault.clear();

                    case 4:
                      _this20.session = undefined;
                      _context31.next = 7;
                      return _this20.vault.getConfig();

                    case 7:
                      _this20._config = _context31.sent;

                    case 8:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31);
            }))();
          }
        }, {
          key: "hasStoredSession",
          value: function hasStoredSession() {
            var _this21 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return _this21.ready();

                    case 2:
                      return _context32.abrupt("return", _this21.vault.isInUse());

                    case 3:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32);
            }))();
          }
        }, {
          key: "setBiometricsEnabled",
          value: function setBiometricsEnabled(isBiometricsEnabled) {
            var _this22 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return _this22.ready();

                    case 2:
                      return _context33.abrupt("return", _this22._setBiometricsEnabled(isBiometricsEnabled));

                    case 3:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33);
            }))();
          }
        }, {
          key: "_setBiometricsEnabled",
          value: function _setBiometricsEnabled(isBiometricsEnabled) {
            var _this23 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      return _context34.abrupt("return", _this23.vault.setBiometricsEnabled(isBiometricsEnabled));

                    case 1:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34);
            }))();
          }
        }, {
          key: "setHideScreenOnBackground",
          value: function setHideScreenOnBackground(enabled) {
            var _this24 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      _context35.next = 2;
                      return _this24.ready();

                    case 2:
                      return _context35.abrupt("return", _this24.vault.setHideScreenOnBackground(enabled));

                    case 3:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35);
            }))();
          }
        }, {
          key: "setPasscodeEnabled",
          value: function setPasscodeEnabled(isPasscodeEnabled) {
            var _this25 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
              return regeneratorRuntime.wrap(function _callee36$(_context36) {
                while (1) {
                  switch (_context36.prev = _context36.next) {
                    case 0:
                      _context36.next = 2;
                      return _this25.ready();

                    case 2:
                      _context36.next = 4;
                      return _this25._setPasscodeEnabled(isPasscodeEnabled);

                    case 4:
                    case "end":
                      return _context36.stop();
                  }
                }
              }, _callee36);
            }))();
          }
        }, {
          key: "_setPasscodeEnabled",
          value: function _setPasscodeEnabled(isPasscodeEnabled) {
            var _this26 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
              return regeneratorRuntime.wrap(function _callee37$(_context37) {
                while (1) {
                  switch (_context37.prev = _context37.next) {
                    case 0:
                      _context37.next = 2;
                      return _this26.vault.setPasscodeEnabled(isPasscodeEnabled);

                    case 2:
                      _context37.next = 4;
                      return _this26.vault.getConfig();

                    case 4:
                      _this26._config = _context37.sent;

                      if (!_this26.config.isPasscodeSetupNeeded) {
                        _context37.next = 8;
                        break;
                      }

                      _context37.next = 8;
                      return _this26._setPasscode();

                    case 8:
                    case "end":
                      return _context37.stop();
                  }
                }
              }, _callee37);
            }))();
          }
        }, {
          key: "isBiometricsEnabled",
          value: function isBiometricsEnabled() {
            var _this27 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
              return regeneratorRuntime.wrap(function _callee38$(_context38) {
                while (1) {
                  switch (_context38.prev = _context38.next) {
                    case 0:
                      _context38.next = 2;
                      return _this27.ready();

                    case 2:
                      return _context38.abrupt("return", _this27.vault.isBiometricsEnabled());

                    case 3:
                    case "end":
                      return _context38.stop();
                  }
                }
              }, _callee38);
            }))();
          }
        }, {
          key: "isBiometricsAvailable",
          value: function isBiometricsAvailable() {
            var _this28 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
              return regeneratorRuntime.wrap(function _callee39$(_context39) {
                while (1) {
                  switch (_context39.prev = _context39.next) {
                    case 0:
                      _context39.next = 2;
                      return _this28.ready();

                    case 2:
                      return _context39.abrupt("return", _this28.vault.isBiometricsAvailable());

                    case 3:
                    case "end":
                      return _context39.stop();
                  }
                }
              }, _callee39);
            }))();
          }
        }, {
          key: "isBiometricsSupported",
          value: function isBiometricsSupported() {
            var _this29 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
              return regeneratorRuntime.wrap(function _callee40$(_context40) {
                while (1) {
                  switch (_context40.prev = _context40.next) {
                    case 0:
                      _context40.next = 2;
                      return _this29.ready();

                    case 2:
                      return _context40.abrupt("return", _this29.vault.isBiometricsSupported());

                    case 3:
                    case "end":
                      return _context40.stop();
                  }
                }
              }, _callee40);
            }))();
          }
        }, {
          key: "isSecureStorageModeEnabled",
          value: function isSecureStorageModeEnabled() {
            var _this30 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
              return regeneratorRuntime.wrap(function _callee41$(_context41) {
                while (1) {
                  switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return _this30.ready();

                    case 2:
                      return _context41.abrupt("return", _this30.vault.isSecureStorageModeEnabled());

                    case 3:
                    case "end":
                      return _context41.stop();
                  }
                }
              }, _callee41);
            }))();
          }
        }, {
          key: "isPasscodeEnabled",
          value: function isPasscodeEnabled() {
            var _this31 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
              return regeneratorRuntime.wrap(function _callee42$(_context42) {
                while (1) {
                  switch (_context42.prev = _context42.next) {
                    case 0:
                      _context42.next = 2;
                      return _this31.ready();

                    case 2:
                      return _context42.abrupt("return", _this31.vault.isPasscodeEnabled());

                    case 3:
                    case "end":
                      return _context42.stop();
                  }
                }
              }, _callee42);
            }))();
          }
        }, {
          key: "_setAuthMode",
          value: function _setAuthMode(authMode) {
            var _this32 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
              return regeneratorRuntime.wrap(function _callee43$(_context43) {
                while (1) {
                  switch (_context43.prev = _context43.next) {
                    case 0:
                      authMode = authMode !== undefined ? authMode : _this32.config.authMode;

                      if (!(authMode === _this32.config.authMode)) {
                        _context43.next = 3;
                        break;
                      }

                      return _context43.abrupt("return");

                    case 3:
                      _context43.t0 = authMode;
                      _context43.next = _context43.t0 === _AuthMode.BiometricOnly ? 6 : _context43.t0 === _AuthMode.PasscodeOnly ? 11 : _context43.t0 === _AuthMode.BiometricAndPasscode ? 16 : _context43.t0 === _AuthMode.BiometricOrPasscode ? 21 : _context43.t0 === _AuthMode.InMemoryOnly ? 33 : _context43.t0 === _AuthMode.SecureStorage ? 40 : 43;
                      break;

                    case 6:
                      _context43.next = 8;
                      return _this32._setBiometricsEnabled(true);

                    case 8:
                      _context43.next = 10;
                      return _this32._setPasscodeEnabled(false);

                    case 10:
                      return _context43.abrupt("break", 44);

                    case 11:
                      _context43.next = 13;
                      return _this32._setPasscodeEnabled(true);

                    case 13:
                      _context43.next = 15;
                      return _this32._setBiometricsEnabled(false);

                    case 15:
                      return _context43.abrupt("break", 44);

                    case 16:
                      _context43.next = 18;
                      return _this32._setPasscodeEnabled(true);

                    case 18:
                      _context43.next = 20;
                      return _this32._setBiometricsEnabled(true);

                    case 20:
                      return _context43.abrupt("break", 44);

                    case 21:
                      _context43.prev = 21;
                      _context43.next = 24;
                      return _this32._setBiometricsEnabled(true);

                    case 24:
                      _context43.next = 26;
                      return _this32._setPasscodeEnabled(false);

                    case 26:
                      _context43.next = 32;
                      break;

                    case 28:
                      _context43.prev = 28;
                      _context43.t1 = _context43["catch"](21);
                      _context43.next = 32;
                      return _this32._setPasscodeEnabled(true);

                    case 32:
                      return _context43.abrupt("break", 44);

                    case 33:
                      _context43.next = 35;
                      return _this32._setPasscodeEnabled(false);

                    case 35:
                      _context43.next = 37;
                      return _this32._setBiometricsEnabled(false);

                    case 37:
                      _context43.next = 39;
                      return _this32.vault.setSecureStorageModeEnabled(false);

                    case 39:
                      return _context43.abrupt("break", 44);

                    case 40:
                      _context43.next = 42;
                      return _this32.vault.setSecureStorageModeEnabled(true);

                    case 42:
                      return _context43.abrupt("break", 44);

                    case 43:
                      throw {
                        code: _VaultErrorCodes.InvalidAuthMode,
                        message: "Invalid AuthMode"
                      };

                    case 44:
                    case "end":
                      return _context43.stop();
                  }
                }
              }, _callee43, null, [[21, 28]]);
            }))();
          }
        }, {
          key: "_trySetAuthMode",
          value: function _trySetAuthMode(authMode) {
            var _this33 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
              return regeneratorRuntime.wrap(function _callee44$(_context44) {
                while (1) {
                  switch (_context44.prev = _context44.next) {
                    case 0:
                      _context44.prev = 0;
                      _context44.next = 3;
                      return _this33._setAuthMode(authMode);

                    case 3:
                      _context44.next = 9;
                      break;

                    case 5:
                      _context44.prev = 5;
                      _context44.t0 = _context44["catch"](0);

                      if (!(_context44.t0.code !== _VaultErrorCodes.BiometricsNotEnabled && _context44.t0.code !== _VaultErrorCodes.SecurityNotAvailable)) {
                        _context44.next = 9;
                        break;
                      }

                      throw _context44.t0;

                    case 9:
                    case "end":
                      return _context44.stop();
                  }
                }
              }, _callee44, null, [[0, 5]]);
            }))();
          }
        }, {
          key: "setAuthMode",
          value: function setAuthMode(authMode) {
            var _this34 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
              return regeneratorRuntime.wrap(function _callee45$(_context45) {
                while (1) {
                  switch (_context45.prev = _context45.next) {
                    case 0:
                      _context45.next = 2;
                      return _this34.ready();

                    case 2:
                      return _context45.abrupt("return", _this34._setAuthMode(authMode));

                    case 3:
                    case "end":
                      return _context45.stop();
                  }
                }
              }, _callee45);
            }))();
          }
        }, {
          key: "getAuthMode",
          value: function getAuthMode() {
            var _this35 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
              return regeneratorRuntime.wrap(function _callee46$(_context46) {
                while (1) {
                  switch (_context46.prev = _context46.next) {
                    case 0:
                      _context46.next = 2;
                      return _this35.ready();

                    case 2:
                      _context46.next = 4;
                      return _this35.vault.getConfig();

                    case 4:
                      _this35._config = _context46.sent;
                      return _context46.abrupt("return", _this35.config.authMode);

                    case 6:
                    case "end":
                      return _context46.stop();
                  }
                }
              }, _callee46);
            }))();
          }
        }]);

        return IonicIdentityVaultUser;
      }();

      var MigratorVault = /*#__PURE__*/function (_IonicIdentityVaultUs) {
        _inherits(MigratorVault, _IonicIdentityVaultUs);

        var _super2 = _createSuper(MigratorVault);

        function MigratorVault(options, onPasscodeRequest, descriptor) {
          var _this58;

          _classCallCheck(this, MigratorVault);

          _this58 = _super2.call(this, {
            ready: function ready() {
              return Promise.resolve(true);
            }
          }, options, descriptor);

          if (onPasscodeRequest) {
            _this58.onPasscodeRequest = onPasscodeRequest;
          }

          return _this58;
        }

        _createClass(MigratorVault, null, [{
          key: "getInstance",
          value: function getInstance(options, onPasscodeRequest, descriptor) {
            if (!MigratorVault.instance) {
              MigratorVault.instance = new MigratorVault(options, onPasscodeRequest, descriptor);
            }

            return MigratorVault.instance;
          }
        }]);

        return MigratorVault;
      }(IonicIdentityVaultUser);

      MigratorVault.instance = undefined;

      var _VaultMigrator = /*#__PURE__*/function () {
        /**
         *
         * @usage
         * ```typescript
         * const legacyVaultConfig = {
         *  unlockOnAccess: true,
         *  hideScreenOnBackground: true,
         *  lockAfter: 5000,
         *  // and more ....
         * }
         * const migrator = new VaultMigrator(legacyVaultConfig, customPasscodePrompt);
         * ```
         * @param options The legacy vault configuration options
         * @param onPasscodeRequest An optional callback function that will be called when the vault attempts to request a passcode. The function returns a promise with a boolean that indicates if the passcode is being setup for the first time for the vault or not.
         * @param descriptor An optional interface that describes the legacy vault.
         */
        function _VaultMigrator(options, onPasscodeRequest, descriptor) {
          _classCallCheck(this, _VaultMigrator);

          this.migratorSession = MigratorVault.getInstance(options, onPasscodeRequest, descriptor);
        }
        /**
         * Exports the data of the legacy vault in its entirety.
         *
         * @usage
         * ```typescript
         * const data = await migrator.exportVault();
         * console.log("@@VAULT DATA: ", JSON.stringify(data));
         * ```
         * @returns
         */


        _createClass(_VaultMigrator, [{
          key: "exportVault",
          value: function exportVault() {
            var _this36 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
              var vault, keys, vaultData, i, keyValue;
              return regeneratorRuntime.wrap(function _callee47$(_context47) {
                while (1) {
                  switch (_context47.prev = _context47.next) {
                    case 0:
                      _context47.next = 2;
                      return _this36.migratorSession.hasStoredSession();

                    case 2:
                      if (_context47.sent) {
                        _context47.next = 4;
                        break;
                      }

                      throw Error("no data in legacy vault");

                    case 4:
                      _context47.next = 6;
                      return _this36.migratorSession.unlock();

                    case 6:
                      _context47.next = 8;
                      return _this36.migratorSession.getVault();

                    case 8:
                      vault = _context47.sent;
                      _context47.next = 11;
                      return vault.getKeys();

                    case 11:
                      keys = _context47.sent;
                      vaultData = {};
                      i = 0;

                    case 14:
                      if (!(i < keys.length)) {
                        _context47.next = 22;
                        break;
                      }

                      _context47.next = 17;
                      return vault.getValue(keys[i]);

                    case 17:
                      keyValue = _context47.sent;
                      vaultData[keys[i]] = keyValue;

                    case 19:
                      i++;
                      _context47.next = 14;
                      break;

                    case 22:
                      return _context47.abrupt("return", vaultData);

                    case 23:
                    case "end":
                      return _context47.stop();
                  }
                }
              }, _callee47);
            }))();
          }
          /**
           * Clears out the legacy vault and removes it from the system.  Be sure to run {@link VaultMigrator.exportVault} before calling this method.
           *
           * @usage
           * ```typescript
           * const data = await migrator.exportVault();
           * await importVault(data);
           * await migrator.clear();
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            var _this37 = this;

            return (0, _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee48() {
              var vault;
              return regeneratorRuntime.wrap(function _callee48$(_context48) {
                while (1) {
                  switch (_context48.prev = _context48.next) {
                    case 0:
                      _context48.next = 2;
                      return _this37.migratorSession.getVault();

                    case 2:
                      vault = _context48.sent;
                      return _context48.abrupt("return", vault.clear());

                    case 4:
                    case "end":
                      return _context48.stop();
                  }
                }
              }, _callee48);
            }))();
          }
        }]);

        return _VaultMigrator;
      }();
      /***/

    },

    /***/
    52003: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageRoutingModule": function HomePageRoutingModule() {
          return (
            /* binding */
            _HomePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);

      var routes = [{
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
      }];

      var _HomePageRoutingModule = function HomePageRoutingModule() {
        _classCallCheck(this, HomePageRoutingModule);
      };

      _HomePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _HomePageRoutingModule);
      /***/
    },

    /***/
    3467: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePageModule": function HomePageModule() {
          return (
            /* binding */
            _HomePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      81864);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home.page */
      62267);
      /* harmony import */


      var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home-routing.module */
      52003);

      var _HomePageModule = function HomePageModule() {
        _classCallCheck(this, HomePageModule);
      };

      _HomePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
      })], _HomePageModule);
      /***/
    },

    /***/
    62267: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomePage": function HomePage() {
          return (
            /* binding */
            _HomePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */
      12056);
      /* harmony import */


      var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home.page.scss */
      18847);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _vault_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../vault.service */
      83899);

      var _HomePage = /*#__PURE__*/function () {
        function HomePage(vaultService) {
          _classCallCheck(this, HomePage);

          this.vaultService = vaultService;
          this.state = vaultService.state;
        }

        _createClass(HomePage, [{
          key: "setSession",
          value: function setSession(data) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee49() {
              return regeneratorRuntime.wrap(function _callee49$(_context49) {
                while (1) {
                  switch (_context49.prev = _context49.next) {
                    case 0:
                      _context49.next = 2;
                      return this.vaultService.setSession(data);

                    case 2:
                    case "end":
                      return _context49.stop();
                  }
                }
              }, _callee49, this);
            }));
          }
        }, {
          key: "restoreSession",
          value: function restoreSession() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee50() {
              return regeneratorRuntime.wrap(function _callee50$(_context50) {
                while (1) {
                  switch (_context50.prev = _context50.next) {
                    case 0:
                      _context50.next = 2;
                      return this.vaultService.restoreSession();

                    case 2:
                    case "end":
                      return _context50.stop();
                  }
                }
              }, _callee50, this);
            }));
          }
        }, {
          key: "lockVault",
          value: function lockVault() {
            this.vaultService.lockVault();
          }
        }, {
          key: "unlockVault",
          value: function unlockVault() {
            this.vaultService.unlockVault();
          }
        }, {
          key: "setLockType",
          value: function setLockType() {
            this.vaultService.setLockType();
          }
        }, {
          key: "setPrivacyScreen",
          value: function setPrivacyScreen() {
            this.vaultService.setPrivacyScreen(this.state.privacyScreen);
          }
        }, {
          key: "clearVault",
          value: function clearVault() {
            this.vaultService.clearVault();
          }
        }]);

        return HomePage;
      }();

      _HomePage.ctorParameters = function () {
        return [{
          type: _vault_service__WEBPACK_IMPORTED_MODULE_2__.VaultService
        }];
      };

      _HomePage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: "app-home",
        template: _Users_i711243_Desktop_projects_Duplicate_Projects_Identity_vault_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _HomePage);
      /***/
    },

    /***/
    83899: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "VaultService": function VaultService() {
          return (
            /* binding */
            _VaultService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-enterprise/identity-vault */
      71525);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      81864);

      var config = {
        key: "io.ionic.getstartedivangular",
        type: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity,
        deviceSecurityType: _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Both,
        lockAfterBackgrounded: 2000,
        shouldClearVaultAfterTooManyFailedAttempts: true,
        customPasscodeInvalidUnlockAttempts: 2,
        unlockVaultOnLoad: false,
        iosBiometricsLocalizedFallbackTitle: "Use Password"
      };
      var key = "sessionData";

      var _VaultService = /*#__PURE__*/function () {
        function VaultService(ngZone, platform) {
          var _this59 = this;

          _classCallCheck(this, VaultService);

          this.ngZone = ngZone;
          this.platform = platform;
          this.state = {
            session: "",
            isLocked: false,
            privacyScreen: false,
            lockType: "Both",
            canUseBiometrics: false,
            canUseBoth: false,
            canUsePasscode: false,
            vaultExists: false
          };
          this.vault = new _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Vault(config);
          this.vault.onLock(function () {
            _this59.ngZone.run(function () {
              _this59.state.isLocked = true;
              _this59.state.session = undefined;
            });
          });
          this.vault.onUnlock(function () {
            _this59.ngZone.run(function () {
              _this59.state.isLocked = false;
            });
          });
          this.init();
        }

        _createClass(VaultService, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee51() {
              return regeneratorRuntime.wrap(function _callee51$(_context51) {
                while (1) {
                  switch (_context51.prev = _context51.next) {
                    case 0:
                      _context51.next = 2;
                      return this.vault.isLocked();

                    case 2:
                      this.state.isLocked = _context51.sent;

                      if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web")) {
                        _context51.next = 7;
                        break;
                      }

                      _context51.t0 = false;
                      _context51.next = 10;
                      break;

                    case 7:
                      _context51.next = 9;
                      return _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isHideScreenOnBackgroundEnabled();

                    case 9:
                      _context51.t0 = _context51.sent;

                    case 10:
                      this.state.privacyScreen = _context51.t0;

                      if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web")) {
                        _context51.next = 15;
                        break;
                      }

                      _context51.t1 = false;
                      _context51.next = 18;
                      break;

                    case 15:
                      _context51.next = 17;
                      return _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isBiometricsEnabled();

                    case 17:
                      _context51.t1 = _context51.sent;

                    case 18:
                      this.state.canUseBiometrics = _context51.t1;

                      if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web")) {
                        _context51.next = 23;
                        break;
                      }

                      _context51.t2 = false;
                      _context51.next = 31;
                      break;

                    case 23:
                      _context51.next = 25;
                      return _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isBiometricsEnabled();

                    case 25:
                      _context51.t3 = _context51.sent;

                      if (!_context51.t3) {
                        _context51.next = 30;
                        break;
                      }

                      _context51.next = 29;
                      return _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isSystemPasscodeSet();

                    case 29:
                      _context51.t3 = _context51.sent;

                    case 30:
                      _context51.t2 = _context51.t3;

                    case 31:
                      this.state.canUseBoth = _context51.t2;

                      if (!(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.Capacitor.getPlatform() === "web")) {
                        _context51.next = 36;
                        break;
                      }

                      _context51.t4 = false;
                      _context51.next = 39;
                      break;

                    case 36:
                      _context51.next = 38;
                      return _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.isSystemPasscodeSet();

                    case 38:
                      _context51.t4 = _context51.sent;

                    case 39:
                      this.state.canUsePasscode = _context51.t4;
                      _context51.next = 42;
                      return this.vault.doesVaultExist();

                    case 42:
                      this.state.vaultExists = _context51.sent;

                    case 43:
                    case "end":
                      return _context51.stop();
                  }
                }
              }, _callee51, this);
            }));
          }
        }, {
          key: "setSession",
          value: function setSession(value) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee52() {
              return regeneratorRuntime.wrap(function _callee52$(_context52) {
                while (1) {
                  switch (_context52.prev = _context52.next) {
                    case 0:
                      this.state.session = value;
                      _context52.next = 3;
                      return this.vault.setValue(key, value);

                    case 3:
                      _context52.next = 5;
                      return this.vault.doesVaultExist();

                    case 5:
                      this.state.vaultExists = _context52.sent;

                    case 6:
                    case "end":
                      return _context52.stop();
                  }
                }
              }, _callee52, this);
            }));
          }
        }, {
          key: "restoreSession",
          value: function restoreSession() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee53() {
              var value;
              return regeneratorRuntime.wrap(function _callee53$(_context53) {
                while (1) {
                  switch (_context53.prev = _context53.next) {
                    case 0:
                      _context53.next = 2;
                      return this.vault.getValue(key);

                    case 2:
                      value = _context53.sent;
                      this.state.session = value;

                    case 4:
                    case "end":
                      return _context53.stop();
                  }
                }
              }, _callee53, this);
            }));
          }
        }, {
          key: "lockVault",
          value: function lockVault() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee54() {
              return regeneratorRuntime.wrap(function _callee54$(_context54) {
                while (1) {
                  switch (_context54.prev = _context54.next) {
                    case 0:
                      _context54.next = 2;
                      return this.vault.lock();

                    case 2:
                    case "end":
                      return _context54.stop();
                  }
                }
              }, _callee54, this);
            }));
          }
        }, {
          key: "unlockVault",
          value: function unlockVault() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee55() {
              return regeneratorRuntime.wrap(function _callee55$(_context55) {
                while (1) {
                  switch (_context55.prev = _context55.next) {
                    case 0:
                      _context55.next = 2;
                      return this.vault.unlock();

                    case 2:
                    case "end":
                      return _context55.stop();
                  }
                }
              }, _callee55, this);
            }));
          }
        }, {
          key: "setPrivacyScreen",
          value: function setPrivacyScreen(enabled) {
            _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.Device.setHideScreenOnBackground(enabled);

            this.state.privacyScreen = enabled;
          }
        }, {
          key: "setLockType",
          value: function setLockType() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee56() {
              var type, deviceSecurityType;
              return regeneratorRuntime.wrap(function _callee56$(_context56) {
                while (1) {
                  switch (_context56.prev = _context56.next) {
                    case 0:
                      _context56.t0 = this.state.lockType;
                      _context56.next = _context56.t0 === "Biometrics" ? 3 : _context56.t0 === "SystemPasscode" ? 6 : _context56.t0 === "Both" ? 9 : 12;
                      break;

                    case 3:
                      type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                      deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Biometrics;
                      return _context56.abrupt("break", 14);

                    case 6:
                      type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                      deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.SystemPasscode;
                      return _context56.abrupt("break", 14);

                    case 9:
                      type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.DeviceSecurity;
                      deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.Both;
                      return _context56.abrupt("break", 14);

                    case 12:
                      type = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.VaultType.SecureStorage;
                      deviceSecurityType = _ionic_enterprise_identity_vault__WEBPACK_IMPORTED_MODULE_1__.DeviceSecurityType.None;

                    case 14:
                      _context56.next = 16;
                      return this.vault.updateConfig(Object.assign(Object.assign({}, this.vault.config), {
                        type: type,
                        deviceSecurityType: deviceSecurityType
                      }));

                    case 16:
                    case "end":
                      return _context56.stop();
                  }
                }
              }, _callee56, this);
            }));
          }
        }, {
          key: "clearVault",
          value: function clearVault() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee57() {
              return regeneratorRuntime.wrap(function _callee57$(_context57) {
                while (1) {
                  switch (_context57.prev = _context57.next) {
                    case 0:
                      _context57.next = 2;
                      return this.vault.clear();

                    case 2:
                      this.state.lockType = "NoLocking";
                      this.state.session = undefined;
                      _context57.next = 6;
                      return this.vault.doesVaultExist();

                    case 6:
                      this.state.vaultExists = _context57.sent;

                    case 7:
                    case "end":
                      return _context57.stop();
                  }
                }
              }, _callee57, this);
            }));
          }
        }]);

        return VaultService;
      }();

      _VaultService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
        }];
      };

      _VaultService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: "root"
      })], _VaultService);
      /***/
    },

    /***/
    12056: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Blank\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Blank</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Enter the \"session\" data</ion-label>\n      <ion-input [(ngModel)]=\"state.session\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"setSession(state.session)\">Set Session Data</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"restoreSession()\">Restore Session Data</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"lockVault()\">Lock Vault</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"unlockVault()\">Unlock Vault</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Use Privacy Screen</ion-label>\n      <ion-checkbox [(ngModel)]=\"state.privacyScreen\" (ionChange)=\"setPrivacyScreen()\"></ion-checkbox>\n    </ion-item>\n\n    <ion-item>\n      <ion-radio-group [(ngModel)]=\"state.lockType\" (ionChange)=\"setLockType()\">\n        <ion-list-header>\n          <ion-label> Vault Locking Mechanism </ion-label>\n        </ion-list-header>\n\n        <ion-item>\n          <ion-label>Do Not Lock</ion-label>\n          <ion-radio value=\"NoLocking\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Use Biometrics</ion-label>\n          <ion-radio [disabled]=\"!state.canUseBiometrics\" value=\"Biometrics\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Use System Passcode</ion-label>\n          <ion-radio [disabled]=\"!state.canUsePasscode\" value=\"SystemPasscode\"></ion-radio>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Use Both</ion-label>\n          <ion-radio [disabled]=\"!state.canUseBoth\" value=\"Both\"></ion-radio>\n        </ion-item>\n      </ion-radio-group>\n    </ion-item>\n\n    <ion-item>\n      <div style=\"flex: auto;\">\n        <ion-button expand=\"block\" (click)=\"clearVault()\">Clear Vault</ion-button>\n      </div>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>\n        <div>Session Data: {{ state.session }}</div>\n        <div>Vault is locked: {{ state.isLocked }}</div>\n        <div>Vault exists: {{ state.vaultExists }}</div>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    18847: function _(module) {
      module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_home_home_module_ts-es5.js.map