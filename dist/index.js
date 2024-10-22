"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // bin/live-reload.js
  var init_live_reload = __esm({
    "bin/live-reload.js"() {
      "use strict";
      new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());
    }
  });

  // node_modules/.pnpm/materialize-css@1.0.0-rc.2/node_modules/materialize-css/dist/js/materialize.js
  var require_materialize = __commonJS({
    "node_modules/.pnpm/materialize-css@1.0.0-rc.2/node_modules/materialize-css/dist/js/materialize.js"(exports, module) {
      init_live_reload();
      var _get3 = function get(object, property, receiver) {
        if (object === null)
          object = Function.prototype;
        var desc = Object.getOwnPropertyDescriptor(object, property);
        if (desc === void 0) {
          var parent = Object.getPrototypeOf(object);
          if (parent === null) {
            return void 0;
          } else {
            return get(parent, property, receiver);
          }
        } else if ("value" in desc) {
          return desc.value;
        } else {
          var getter = desc.get;
          if (getter === void 0) {
            return void 0;
          }
          return getter.call(receiver);
        }
      };
      var _createClass2 = /* @__PURE__ */ function() {
        function defineProperties(target, props) {
          for (var i3 = 0; i3 < props.length; i3++) {
            var descriptor = props[i3];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        return function(Constructor, protoProps, staticProps) {
          if (protoProps)
            defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();
      function _possibleConstructorReturn(self2, call) {
        if (!self2) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }
        return call && (typeof call === "object" || typeof call === "function") ? call : self2;
      }
      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
        if (superClass)
          Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      (function(factory) {
        window.cash = factory();
      })(function() {
        var doc = document, win = window, ArrayProto = Array.prototype, slice = ArrayProto.slice, filter = ArrayProto.filter, push = ArrayProto.push;
        var noop = function() {
        }, isFunction = function(item) {
          return typeof item === typeof noop && item.call;
        }, isString = function(item) {
          return typeof item === "string";
        };
        var idMatch = /^#[\w-]*$/, classMatch = /^\.[\w-]*$/, htmlMatch = /<.+>/, singlet = /^\w+$/;
        function find(selector3, context3) {
          context3 = context3 || doc;
          var elems = classMatch.test(selector3) ? context3.getElementsByClassName(selector3.slice(1)) : singlet.test(selector3) ? context3.getElementsByTagName(selector3) : context3.querySelectorAll(selector3);
          return elems;
        }
        var frag;
        function parseHTML(str) {
          if (!frag) {
            frag = doc.implementation.createHTMLDocument(null);
            var base = frag.createElement("base");
            base.href = doc.location.href;
            frag.head.appendChild(base);
          }
          frag.body.innerHTML = str;
          return frag.body.childNodes;
        }
        function onReady(fn2) {
          if (doc.readyState !== "loading") {
            fn2();
          } else {
            doc.addEventListener("DOMContentLoaded", fn2);
          }
        }
        function Init(selector3, context3) {
          if (!selector3) {
            return this;
          }
          if (selector3.cash && selector3 !== win) {
            return selector3;
          }
          var elems = selector3, i3 = 0, length;
          if (isString(selector3)) {
            elems = idMatch.test(selector3) ? (
              // If an ID use the faster getElementById check
              doc.getElementById(selector3.slice(1))
            ) : htmlMatch.test(selector3) ? (
              // If HTML, parse it into real elements
              parseHTML(selector3)
            ) : (
              // else use `find`
              find(selector3, context3)
            );
          } else if (isFunction(selector3)) {
            onReady(selector3);
            return this;
          }
          if (!elems) {
            return this;
          }
          if (elems.nodeType || elems === win) {
            this[0] = elems;
            this.length = 1;
          } else {
            length = this.length = elems.length;
            for (; i3 < length; i3++) {
              this[i3] = elems[i3];
            }
          }
          return this;
        }
        function cash2(selector3, context3) {
          return new Init(selector3, context3);
        }
        var fn = cash2.fn = cash2.prototype = Init.prototype = {
          // jshint ignore:line
          cash: true,
          length: 0,
          push,
          splice: ArrayProto.splice,
          map: ArrayProto.map,
          init: Init
        };
        Object.defineProperty(fn, "constructor", { value: cash2 });
        cash2.parseHTML = parseHTML;
        cash2.noop = noop;
        cash2.isFunction = isFunction;
        cash2.isString = isString;
        cash2.extend = fn.extend = function(target) {
          target = target || {};
          var args = slice.call(arguments), length = args.length, i3 = 1;
          if (args.length === 1) {
            target = this;
            i3 = 0;
          }
          for (; i3 < length; i3++) {
            if (!args[i3]) {
              continue;
            }
            for (var key in args[i3]) {
              if (args[i3].hasOwnProperty(key)) {
                target[key] = args[i3][key];
              }
            }
          }
          return target;
        };
        function each(collection, callback) {
          var l2 = collection.length, i3 = 0;
          for (; i3 < l2; i3++) {
            if (callback.call(collection[i3], collection[i3], i3, collection) === false) {
              break;
            }
          }
        }
        function matches(el, selector3) {
          var m2 = el && (el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector);
          return !!m2 && m2.call(el, selector3);
        }
        function getCompareFunction(selector3) {
          return (
            /* Use browser's `matches` function if string */
            isString(selector3) ? matches : (
              /* Match a cash element */
              selector3.cash ? function(el) {
                return selector3.is(el);
              } : (
                /* Direct comparison */
                function(el, selector4) {
                  return el === selector4;
                }
              )
            )
          );
        }
        function unique(collection) {
          return cash2(slice.call(collection).filter(function(item, index, self2) {
            return self2.indexOf(item) === index;
          }));
        }
        cash2.extend({
          merge: function(first, second) {
            var len = +second.length, i3 = first.length, j = 0;
            for (; j < len; i3++, j++) {
              first[i3] = second[j];
            }
            first.length = i3;
            return first;
          },
          each,
          matches,
          unique,
          isArray: Array.isArray,
          isNumeric: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
          }
        });
        var uid = cash2.uid = "_cash" + Date.now();
        function getDataCache(node) {
          return node[uid] = node[uid] || {};
        }
        function setData(node, key, value) {
          return getDataCache(node)[key] = value;
        }
        function getData(node, key) {
          var c2 = getDataCache(node);
          if (c2[key] === void 0) {
            c2[key] = node.dataset ? node.dataset[key] : cash2(node).attr("data-" + key);
          }
          return c2[key];
        }
        function removeData(node, key) {
          var c2 = getDataCache(node);
          if (c2) {
            delete c2[key];
          } else if (node.dataset) {
            delete node.dataset[key];
          } else {
            cash2(node).removeAttr("data-" + name);
          }
        }
        fn.extend({
          data: function(name2, value) {
            if (isString(name2)) {
              return value === void 0 ? getData(this[0], name2) : this.each(function(v) {
                return setData(v, name2, value);
              });
            }
            for (var key in name2) {
              this.data(key, name2[key]);
            }
            return this;
          },
          removeData: function(key) {
            return this.each(function(v) {
              return removeData(v, key);
            });
          }
        });
        var notWhiteMatch = /\S+/g;
        function getClasses(c2) {
          return isString(c2) && c2.match(notWhiteMatch);
        }
        function hasClass(v, c2) {
          return v.classList ? v.classList.contains(c2) : new RegExp("(^| )" + c2 + "( |$)", "gi").test(v.className);
        }
        function addClass(v, c2, spacedName) {
          if (v.classList) {
            v.classList.add(c2);
          } else if (spacedName.indexOf(" " + c2 + " ")) {
            v.className += " " + c2;
          }
        }
        function removeClass(v, c2) {
          if (v.classList) {
            v.classList.remove(c2);
          } else {
            v.className = v.className.replace(c2, "");
          }
        }
        fn.extend({
          addClass: function(c2) {
            var classes2 = getClasses(c2);
            return classes2 ? this.each(function(v) {
              var spacedName = " " + v.className + " ";
              each(classes2, function(c3) {
                addClass(v, c3, spacedName);
              });
            }) : this;
          },
          attr: function(name2, value) {
            if (!name2) {
              return void 0;
            }
            if (isString(name2)) {
              if (value === void 0) {
                return this[0] ? this[0].getAttribute ? this[0].getAttribute(name2) : this[0][name2] : void 0;
              }
              return this.each(function(v) {
                if (v.setAttribute) {
                  v.setAttribute(name2, value);
                } else {
                  v[name2] = value;
                }
              });
            }
            for (var key in name2) {
              this.attr(key, name2[key]);
            }
            return this;
          },
          hasClass: function(c2) {
            var check = false, classes2 = getClasses(c2);
            if (classes2 && classes2.length) {
              this.each(function(v) {
                check = hasClass(v, classes2[0]);
                return !check;
              });
            }
            return check;
          },
          prop: function(name2, value) {
            if (isString(name2)) {
              return value === void 0 ? this[0][name2] : this.each(function(v) {
                v[name2] = value;
              });
            }
            for (var key in name2) {
              this.prop(key, name2[key]);
            }
            return this;
          },
          removeAttr: function(name2) {
            return this.each(function(v) {
              if (v.removeAttribute) {
                v.removeAttribute(name2);
              } else {
                delete v[name2];
              }
            });
          },
          removeClass: function(c2) {
            if (!arguments.length) {
              return this.attr("class", "");
            }
            var classes2 = getClasses(c2);
            return classes2 ? this.each(function(v) {
              each(classes2, function(c3) {
                removeClass(v, c3);
              });
            }) : this;
          },
          removeProp: function(name2) {
            return this.each(function(v) {
              delete v[name2];
            });
          },
          toggleClass: function(c2, state) {
            if (state !== void 0) {
              return this[state ? "addClass" : "removeClass"](c2);
            }
            var classes2 = getClasses(c2);
            return classes2 ? this.each(function(v) {
              var spacedName = " " + v.className + " ";
              each(classes2, function(c3) {
                if (hasClass(v, c3)) {
                  removeClass(v, c3);
                } else {
                  addClass(v, c3, spacedName);
                }
              });
            }) : this;
          }
        });
        fn.extend({
          add: function(selector3, context3) {
            return unique(cash2.merge(this, cash2(selector3, context3)));
          },
          each: function(callback) {
            each(this, callback);
            return this;
          },
          eq: function(index) {
            return cash2(this.get(index));
          },
          filter: function(selector3) {
            if (!selector3) {
              return this;
            }
            var comparator = isFunction(selector3) ? selector3 : getCompareFunction(selector3);
            return cash2(filter.call(this, function(e2) {
              return comparator(e2, selector3);
            }));
          },
          first: function() {
            return this.eq(0);
          },
          get: function(index) {
            if (index === void 0) {
              return slice.call(this);
            }
            return index < 0 ? this[index + this.length] : this[index];
          },
          index: function(elem) {
            var child = elem ? cash2(elem)[0] : this[0], collection = elem ? this : cash2(child).parent().children();
            return slice.call(collection).indexOf(child);
          },
          last: function() {
            return this.eq(-1);
          }
        });
        var camelCase = /* @__PURE__ */ function() {
          var camelRegex = /(?:^\w|[A-Z]|\b\w)/g, whiteSpace = /[\s-_]+/g;
          return function(str) {
            return str.replace(camelRegex, function(letter, index) {
              return letter[index === 0 ? "toLowerCase" : "toUpperCase"]();
            }).replace(whiteSpace, "");
          };
        }();
        var getPrefixedProp = function() {
          var cache = {}, doc2 = document, div = doc2.createElement("div"), style = div.style;
          return function(prop) {
            prop = camelCase(prop);
            if (cache[prop]) {
              return cache[prop];
            }
            var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1), prefixes = ["webkit", "moz", "ms", "o"], props = (prop + " " + prefixes.join(ucProp + " ") + ucProp).split(" ");
            each(props, function(p2) {
              if (p2 in style) {
                cache[p2] = prop = cache[prop] = p2;
                return false;
              }
            });
            return cache[prop];
          };
        }();
        cash2.prefixedProp = getPrefixedProp;
        cash2.camelCase = camelCase;
        fn.extend({
          css: function(prop, value) {
            if (isString(prop)) {
              prop = getPrefixedProp(prop);
              return arguments.length > 1 ? this.each(function(v) {
                return v.style[prop] = value;
              }) : win.getComputedStyle(this[0])[prop];
            }
            for (var key in prop) {
              this.css(key, prop[key]);
            }
            return this;
          }
        });
        function compute(el, prop) {
          return parseInt(win.getComputedStyle(el[0], null)[prop], 10) || 0;
        }
        each(["Width", "Height"], function(v) {
          var lower = v.toLowerCase();
          fn[lower] = function() {
            return this[0].getBoundingClientRect()[lower];
          };
          fn["inner" + v] = function() {
            return this[0]["client" + v];
          };
          fn["outer" + v] = function(margins) {
            return this[0]["offset" + v] + (margins ? compute(this, "margin" + (v === "Width" ? "Left" : "Top")) + compute(this, "margin" + (v === "Width" ? "Right" : "Bottom")) : 0);
          };
        });
        function registerEvent(node, eventName, callback) {
          var eventCache = getData(node, "_cashEvents") || setData(node, "_cashEvents", {});
          eventCache[eventName] = eventCache[eventName] || [];
          eventCache[eventName].push(callback);
          node.addEventListener(eventName, callback);
        }
        function removeEvent(node, eventName, callback) {
          var events2 = getData(node, "_cashEvents"), eventCache = events2 && events2[eventName], index;
          if (!eventCache) {
            return;
          }
          if (callback) {
            node.removeEventListener(eventName, callback);
            index = eventCache.indexOf(callback);
            if (index >= 0) {
              eventCache.splice(index, 1);
            }
          } else {
            each(eventCache, function(event2) {
              node.removeEventListener(eventName, event2);
            });
            eventCache = [];
          }
        }
        fn.extend({
          off: function(eventName, callback) {
            return this.each(function(v) {
              return removeEvent(v, eventName, callback);
            });
          },
          on: function(eventName, delegate, callback, runOnce) {
            var originalCallback;
            if (!isString(eventName)) {
              for (var key in eventName) {
                this.on(key, delegate, eventName[key]);
              }
              return this;
            }
            if (isFunction(delegate)) {
              callback = delegate;
              delegate = null;
            }
            if (eventName === "ready") {
              onReady(callback);
              return this;
            }
            if (delegate) {
              originalCallback = callback;
              callback = function(e2) {
                var t2 = e2.target;
                while (!matches(t2, delegate)) {
                  if (t2 === this || t2 === null) {
                    return t2 = false;
                  }
                  t2 = t2.parentNode;
                }
                if (t2) {
                  originalCallback.call(t2, e2);
                }
              };
            }
            return this.each(function(v) {
              var finalCallback = callback;
              if (runOnce) {
                finalCallback = function() {
                  callback.apply(this, arguments);
                  removeEvent(v, eventName, finalCallback);
                };
              }
              registerEvent(v, eventName, finalCallback);
            });
          },
          one: function(eventName, delegate, callback) {
            return this.on(eventName, delegate, callback, true);
          },
          ready: onReady,
          /**
           * Modified
           * Triggers browser event
           * @param String eventName
           * @param Object data - Add properties to event object
           */
          trigger: function(eventName, data) {
            if (document.createEvent) {
              var evt = document.createEvent("HTMLEvents");
              evt.initEvent(eventName, true, false);
              evt = this.extend(evt, data);
              return this.each(function(v) {
                return v.dispatchEvent(evt);
              });
            }
          }
        });
        function encode(name2, value) {
          return "&" + encodeURIComponent(name2) + "=" + encodeURIComponent(value).replace(/%20/g, "+");
        }
        function getSelectMultiple_(el) {
          var values = [];
          each(el.options, function(o) {
            if (o.selected) {
              values.push(o.value);
            }
          });
          return values.length ? values : null;
        }
        function getSelectSingle_(el) {
          var selectedIndex = el.selectedIndex;
          return selectedIndex >= 0 ? el.options[selectedIndex].value : null;
        }
        function getValue(el) {
          var type = el.type;
          if (!type) {
            return null;
          }
          switch (type.toLowerCase()) {
            case "select-one":
              return getSelectSingle_(el);
            case "select-multiple":
              return getSelectMultiple_(el);
            case "radio":
              return el.checked ? el.value : null;
            case "checkbox":
              return el.checked ? el.value : null;
            default:
              return el.value ? el.value : null;
          }
        }
        fn.extend({
          serialize: function() {
            var query = "";
            each(this[0].elements || this, function(el) {
              if (el.disabled || el.tagName === "FIELDSET") {
                return;
              }
              var name2 = el.name;
              switch (el.type.toLowerCase()) {
                case "file":
                case "reset":
                case "submit":
                case "button":
                  break;
                case "select-multiple":
                  var values = getValue(el);
                  if (values !== null) {
                    each(values, function(value2) {
                      query += encode(name2, value2);
                    });
                  }
                  break;
                default:
                  var value = getValue(el);
                  if (value !== null) {
                    query += encode(name2, value);
                  }
              }
            });
            return query.substr(1);
          },
          val: function(value) {
            if (value === void 0) {
              return getValue(this[0]);
            }
            return this.each(function(v) {
              return v.value = value;
            });
          }
        });
        function insertElement(el, child, prepend) {
          if (prepend) {
            var first = el.childNodes[0];
            el.insertBefore(child, first);
          } else {
            el.appendChild(child);
          }
        }
        function insertContent(parent, child, prepend) {
          var str = isString(child);
          if (!str && child.length) {
            each(child, function(v) {
              return insertContent(parent, v, prepend);
            });
            return;
          }
          each(parent, str ? function(v) {
            return v.insertAdjacentHTML(prepend ? "afterbegin" : "beforeend", child);
          } : function(v, i3) {
            return insertElement(v, i3 === 0 ? child : child.cloneNode(true), prepend);
          });
        }
        fn.extend({
          after: function(selector3) {
            cash2(selector3).insertAfter(this);
            return this;
          },
          append: function(content) {
            insertContent(this, content);
            return this;
          },
          appendTo: function(parent) {
            insertContent(cash2(parent), this);
            return this;
          },
          before: function(selector3) {
            cash2(selector3).insertBefore(this);
            return this;
          },
          clone: function() {
            return cash2(this.map(function(v) {
              return v.cloneNode(true);
            }));
          },
          empty: function() {
            this.html("");
            return this;
          },
          html: function(content) {
            if (content === void 0) {
              return this[0].innerHTML;
            }
            var source = content.nodeType ? content[0].outerHTML : content;
            return this.each(function(v) {
              return v.innerHTML = source;
            });
          },
          insertAfter: function(selector3) {
            var _this = this;
            cash2(selector3).each(function(el, i3) {
              var parent = el.parentNode, sibling = el.nextSibling;
              _this.each(function(v) {
                parent.insertBefore(i3 === 0 ? v : v.cloneNode(true), sibling);
              });
            });
            return this;
          },
          insertBefore: function(selector3) {
            var _this2 = this;
            cash2(selector3).each(function(el, i3) {
              var parent = el.parentNode;
              _this2.each(function(v) {
                parent.insertBefore(i3 === 0 ? v : v.cloneNode(true), el);
              });
            });
            return this;
          },
          prepend: function(content) {
            insertContent(this, content, true);
            return this;
          },
          prependTo: function(parent) {
            insertContent(cash2(parent), this, true);
            return this;
          },
          remove: function() {
            return this.each(function(v) {
              if (!!v.parentNode) {
                return v.parentNode.removeChild(v);
              }
            });
          },
          text: function(content) {
            if (content === void 0) {
              return this[0].textContent;
            }
            return this.each(function(v) {
              return v.textContent = content;
            });
          }
        });
        var docEl = doc.documentElement;
        fn.extend({
          position: function() {
            var el = this[0];
            return {
              left: el.offsetLeft,
              top: el.offsetTop
            };
          },
          offset: function() {
            var rect = this[0].getBoundingClientRect();
            return {
              top: rect.top + win.pageYOffset - docEl.clientTop,
              left: rect.left + win.pageXOffset - docEl.clientLeft
            };
          },
          offsetParent: function() {
            return cash2(this[0].offsetParent);
          }
        });
        fn.extend({
          children: function(selector3) {
            var elems = [];
            this.each(function(el) {
              push.apply(elems, el.children);
            });
            elems = unique(elems);
            return !selector3 ? elems : elems.filter(function(v) {
              return matches(v, selector3);
            });
          },
          closest: function(selector3) {
            if (!selector3 || this.length < 1) {
              return cash2();
            }
            if (this.is(selector3)) {
              return this.filter(selector3);
            }
            return this.parent().closest(selector3);
          },
          is: function(selector3) {
            if (!selector3) {
              return false;
            }
            var match = false, comparator = getCompareFunction(selector3);
            this.each(function(el) {
              match = comparator(el, selector3);
              return !match;
            });
            return match;
          },
          find: function(selector3) {
            if (!selector3 || selector3.nodeType) {
              return cash2(selector3 && this.has(selector3).length ? selector3 : null);
            }
            var elems = [];
            this.each(function(el) {
              push.apply(elems, find(selector3, el));
            });
            return unique(elems);
          },
          has: function(selector3) {
            var comparator = isString(selector3) ? function(el) {
              return find(selector3, el).length !== 0;
            } : function(el) {
              return el.contains(selector3);
            };
            return this.filter(comparator);
          },
          next: function() {
            return cash2(this[0].nextElementSibling);
          },
          not: function(selector3) {
            if (!selector3) {
              return this;
            }
            var comparator = getCompareFunction(selector3);
            return this.filter(function(el) {
              return !comparator(el, selector3);
            });
          },
          parent: function() {
            var result = [];
            this.each(function(item) {
              if (item && item.parentNode) {
                result.push(item.parentNode);
              }
            });
            return unique(result);
          },
          parents: function(selector3) {
            var last, result = [];
            this.each(function(item) {
              last = item;
              while (last && last.parentNode && last !== doc.body.parentNode) {
                last = last.parentNode;
                if (!selector3 || selector3 && matches(last, selector3)) {
                  result.push(last);
                }
              }
            });
            return unique(result);
          },
          prev: function() {
            return cash2(this[0].previousElementSibling);
          },
          siblings: function(selector3) {
            var collection = this.parent().children(selector3), el = this[0];
            return collection.filter(function(i3) {
              return i3 !== el;
            });
          }
        });
        return cash2;
      });
      var Component = function() {
        function Component2(classDef, el, options) {
          _classCallCheck(this, Component2);
          if (!(el instanceof Element)) {
            console.error(Error(el + " is not an HTML Element"));
          }
          var ins = classDef.getInstance(el);
          if (!!ins) {
            ins.destroy();
          }
          this.el = el;
          this.$el = cash(el);
        }
        _createClass2(Component2, null, [{
          key: "init",
          value: function init4(classDef, els, options) {
            var instances = null;
            if (els instanceof Element) {
              instances = new classDef(els, options);
            } else if (!!els && (els.jquery || els.cash || els instanceof NodeList)) {
              var instancesArr = [];
              for (var i3 = 0; i3 < els.length; i3++) {
                instancesArr.push(new classDef(els[i3], options));
              }
              instances = instancesArr;
            }
            return instances;
          }
        }]);
        return Component2;
      }();
      (function(window2) {
        if (window2.Package) {
          M = {};
        } else {
          window2.M = {};
        }
        M.jQueryLoaded = !!window2.jQuery;
      })(window);
      if (typeof define === "function" && define.amd) {
        define("M", [], function() {
          return M;
        });
      } else if (typeof exports !== "undefined" && !exports.nodeType) {
        if (typeof module !== "undefined" && !module.nodeType && module.exports) {
          exports = module.exports = M;
        }
        exports.default = M;
      }
      M.keys = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        ARROW_UP: 38,
        ARROW_DOWN: 40
      };
      M.tabPressed = false;
      M.keyDown = false;
      var docHandleKeydown = function(e2) {
        M.keyDown = true;
        if (e2.which === M.keys.TAB || e2.which === M.keys.ARROW_DOWN || e2.which === M.keys.ARROW_UP) {
          M.tabPressed = true;
        }
      };
      var docHandleKeyup = function(e2) {
        M.keyDown = false;
        if (e2.which === M.keys.TAB || e2.which === M.keys.ARROW_DOWN || e2.which === M.keys.ARROW_UP) {
          M.tabPressed = false;
        }
      };
      var docHandleFocus = function(e2) {
        if (M.keyDown) {
          document.body.classList.add("keyboard-focused");
        }
      };
      var docHandleBlur = function(e2) {
        document.body.classList.remove("keyboard-focused");
      };
      document.addEventListener("keydown", docHandleKeydown, true);
      document.addEventListener("keyup", docHandleKeyup, true);
      document.addEventListener("focus", docHandleFocus, true);
      document.addEventListener("blur", docHandleBlur, true);
      M.initializeJqueryWrapper = function(plugin, pluginName, classRef) {
        jQuery.fn[pluginName] = function(methodOrOptions) {
          if (plugin.prototype[methodOrOptions]) {
            var params = Array.prototype.slice.call(arguments, 1);
            if (methodOrOptions.slice(0, 3) === "get") {
              var instance = this.first()[0][classRef];
              return instance[methodOrOptions].apply(instance, params);
            }
            return this.each(function() {
              var instance2 = this[classRef];
              instance2[methodOrOptions].apply(instance2, params);
            });
          } else if (typeof methodOrOptions === "object" || !methodOrOptions) {
            plugin.init(this, arguments[0]);
            return this;
          }
          jQuery.error("Method " + methodOrOptions + " does not exist on jQuery." + pluginName);
        };
      };
      M.AutoInit = function(context3) {
        var root = !!context3 ? context3 : document.body;
        var registry = {
          Autocomplete: root.querySelectorAll(".autocomplete:not(.no-autoinit)"),
          Carousel: root.querySelectorAll(".carousel:not(.no-autoinit)"),
          Chips: root.querySelectorAll(".chips:not(.no-autoinit)"),
          Collapsible: root.querySelectorAll(".collapsible:not(.no-autoinit)"),
          Datepicker: root.querySelectorAll(".datepicker:not(.no-autoinit)"),
          Dropdown: root.querySelectorAll(".dropdown-trigger:not(.no-autoinit)"),
          Materialbox: root.querySelectorAll(".materialboxed:not(.no-autoinit)"),
          Modal: root.querySelectorAll(".modal:not(.no-autoinit)"),
          Parallax: root.querySelectorAll(".parallax:not(.no-autoinit)"),
          Pushpin: root.querySelectorAll(".pushpin:not(.no-autoinit)"),
          ScrollSpy: root.querySelectorAll(".scrollspy:not(.no-autoinit)"),
          FormSelect: root.querySelectorAll("select:not(.no-autoinit)"),
          Sidenav: root.querySelectorAll(".sidenav:not(.no-autoinit)"),
          Tabs: root.querySelectorAll(".tabs:not(.no-autoinit)"),
          TapTarget: root.querySelectorAll(".tap-target:not(.no-autoinit)"),
          Timepicker: root.querySelectorAll(".timepicker:not(.no-autoinit)"),
          Tooltip: root.querySelectorAll(".tooltipped:not(.no-autoinit)"),
          FloatingActionButton: root.querySelectorAll(".fixed-action-btn:not(.no-autoinit)")
        };
        for (var pluginName in registry) {
          var plugin = M[pluginName];
          plugin.init(registry[pluginName]);
        }
      };
      M.objectSelectorString = function(obj) {
        var tagStr = obj.prop("tagName") || "";
        var idStr = obj.attr("id") || "";
        var classStr = obj.attr("class") || "";
        return (tagStr + idStr + classStr).replace(/\s/g, "");
      };
      M.guid = /* @__PURE__ */ function() {
        function s4() {
          return Math.floor((1 + Math.random()) * 65536).toString(16).substring(1);
        }
        return function() {
          return s4() + s4() + "-" + s4() + "-" + s4() + "-" + s4() + "-" + s4() + s4() + s4();
        };
      }();
      M.escapeHash = function(hash) {
        return hash.replace(/(:|\.|\[|\]|,|=|\/)/g, "\\$1");
      };
      M.elementOrParentIsFixed = function(element) {
        var $element = $(element);
        var $checkElements = $element.add($element.parents());
        var isFixed = false;
        $checkElements.each(function() {
          if ($(this).css("position") === "fixed") {
            isFixed = true;
            return false;
          }
        });
        return isFixed;
      };
      M.checkWithinContainer = function(container, bounding, offset) {
        var edges = {
          top: false,
          right: false,
          bottom: false,
          left: false
        };
        var containerRect = container.getBoundingClientRect();
        var containerBottom = container === document.body ? Math.max(containerRect.bottom, window.innerHeight) : containerRect.bottom;
        var scrollLeft = container.scrollLeft;
        var scrollTop = container.scrollTop;
        var scrolledX = bounding.left - scrollLeft;
        var scrolledY = bounding.top - scrollTop;
        if (scrolledX < containerRect.left + offset || scrolledX < offset) {
          edges.left = true;
        }
        if (scrolledX + bounding.width > containerRect.right - offset || scrolledX + bounding.width > window.innerWidth - offset) {
          edges.right = true;
        }
        if (scrolledY < containerRect.top + offset || scrolledY < offset) {
          edges.top = true;
        }
        if (scrolledY + bounding.height > containerBottom - offset || scrolledY + bounding.height > window.innerHeight - offset) {
          edges.bottom = true;
        }
        return edges;
      };
      M.checkPossibleAlignments = function(el, container, bounding, offset) {
        var canAlign = {
          top: true,
          right: true,
          bottom: true,
          left: true,
          spaceOnTop: null,
          spaceOnRight: null,
          spaceOnBottom: null,
          spaceOnLeft: null
        };
        var containerAllowsOverflow = getComputedStyle(container).overflow === "visible";
        var containerRect = container.getBoundingClientRect();
        var containerHeight = Math.min(containerRect.height, window.innerHeight);
        var containerWidth = Math.min(containerRect.width, window.innerWidth);
        var elOffsetRect = el.getBoundingClientRect();
        var scrollLeft = container.scrollLeft;
        var scrollTop = container.scrollTop;
        var scrolledX = bounding.left - scrollLeft;
        var scrolledYTopEdge = bounding.top - scrollTop;
        var scrolledYBottomEdge = bounding.top + elOffsetRect.height - scrollTop;
        canAlign.spaceOnRight = !containerAllowsOverflow ? containerWidth - (scrolledX + bounding.width) : window.innerWidth - (elOffsetRect.left + bounding.width);
        if (canAlign.spaceOnRight < 0) {
          canAlign.left = false;
        }
        canAlign.spaceOnLeft = !containerAllowsOverflow ? scrolledX - bounding.width + elOffsetRect.width : elOffsetRect.right - bounding.width;
        if (canAlign.spaceOnLeft < 0) {
          canAlign.right = false;
        }
        canAlign.spaceOnBottom = !containerAllowsOverflow ? containerHeight - (scrolledYTopEdge + bounding.height + offset) : window.innerHeight - (elOffsetRect.top + bounding.height + offset);
        if (canAlign.spaceOnBottom < 0) {
          canAlign.top = false;
        }
        canAlign.spaceOnTop = !containerAllowsOverflow ? scrolledYBottomEdge - (bounding.height - offset) : elOffsetRect.bottom - (bounding.height + offset);
        if (canAlign.spaceOnTop < 0) {
          canAlign.bottom = false;
        }
        return canAlign;
      };
      M.getOverflowParent = function(element) {
        if (element == null) {
          return null;
        }
        if (element === document.body || getComputedStyle(element).overflow !== "visible") {
          return element;
        }
        return M.getOverflowParent(element.parentElement);
      };
      M.getIdFromTrigger = function(trigger) {
        var id = trigger.getAttribute("data-target");
        if (!id) {
          id = trigger.getAttribute("href");
          if (id) {
            id = id.slice(1);
          } else {
            id = "";
          }
        }
        return id;
      };
      M.getDocumentScrollTop = function() {
        return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      };
      M.getDocumentScrollLeft = function() {
        return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
      };
      var getTime = Date.now || function() {
        return (/* @__PURE__ */ new Date()).getTime();
      };
      M.throttle = function(func, wait, options) {
        var context3 = void 0, args = void 0, result = void 0;
        var timeout = null;
        var previous = 0;
        options || (options = {});
        var later = function() {
          previous = options.leading === false ? 0 : getTime();
          timeout = null;
          result = func.apply(context3, args);
          context3 = args = null;
        };
        return function() {
          var now2 = getTime();
          if (!previous && options.leading === false)
            previous = now2;
          var remaining = wait - (now2 - previous);
          context3 = this;
          args = arguments;
          if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now2;
            result = func.apply(context3, args);
            context3 = args = null;
          } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
          }
          return result;
        };
      };
      var $jscomp = { scope: {} };
      $jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(e2, r, p2) {
        if (p2.get || p2.set)
          throw new TypeError("ES3 does not support getters and setters.");
        e2 != Array.prototype && e2 != Object.prototype && (e2[r] = p2.value);
      };
      $jscomp.getGlobal = function(e2) {
        return "undefined" != typeof window && window === e2 ? e2 : "undefined" != typeof global && null != global ? global : e2;
      };
      $jscomp.global = $jscomp.getGlobal(exports);
      $jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
      $jscomp.initSymbol = function() {
        $jscomp.initSymbol = function() {
        };
        $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
      };
      $jscomp.symbolCounter_ = 0;
      $jscomp.Symbol = function(e2) {
        return $jscomp.SYMBOL_PREFIX + (e2 || "") + $jscomp.symbolCounter_++;
      };
      $jscomp.initSymbolIterator = function() {
        $jscomp.initSymbol();
        var e2 = $jscomp.global.Symbol.iterator;
        e2 || (e2 = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
        "function" != typeof Array.prototype[e2] && $jscomp.defineProperty(Array.prototype, e2, { configurable: true, writable: true, value: function() {
          return $jscomp.arrayIterator(this);
        } });
        $jscomp.initSymbolIterator = function() {
        };
      };
      $jscomp.arrayIterator = function(e2) {
        var r = 0;
        return $jscomp.iteratorPrototype(function() {
          return r < e2.length ? { done: false, value: e2[r++] } : { done: true };
        });
      };
      $jscomp.iteratorPrototype = function(e2) {
        $jscomp.initSymbolIterator();
        e2 = { next: e2 };
        e2[$jscomp.global.Symbol.iterator] = function() {
          return this;
        };
        return e2;
      };
      $jscomp.array = $jscomp.array || {};
      $jscomp.iteratorFromArray = function(e2, r) {
        $jscomp.initSymbolIterator();
        e2 instanceof String && (e2 += "");
        var p2 = 0, m2 = { next: function() {
          if (p2 < e2.length) {
            var u2 = p2++;
            return { value: r(u2, e2[u2]), done: false };
          }
          m2.next = function() {
            return { done: true, value: void 0 };
          };
          return m2.next();
        } };
        m2[Symbol.iterator] = function() {
          return m2;
        };
        return m2;
      };
      $jscomp.polyfill = function(e2, r, p2, m2) {
        if (r) {
          p2 = $jscomp.global;
          e2 = e2.split(".");
          for (m2 = 0; m2 < e2.length - 1; m2++) {
            var u2 = e2[m2];
            u2 in p2 || (p2[u2] = {});
            p2 = p2[u2];
          }
          e2 = e2[e2.length - 1];
          m2 = p2[e2];
          r = r(m2);
          r != m2 && null != r && $jscomp.defineProperty(p2, e2, { configurable: true, writable: true, value: r });
        }
      };
      $jscomp.polyfill("Array.prototype.keys", function(e2) {
        return e2 ? e2 : function() {
          return $jscomp.iteratorFromArray(this, function(e3) {
            return e3;
          });
        };
      }, "es6-impl", "es3");
      var $jscomp$this = exports;
      (function(r) {
        M.anime = r();
      })(function() {
        function e2(a) {
          if (!h.col(a))
            try {
              return document.querySelectorAll(a);
            } catch (c2) {
            }
        }
        function r(a, c2) {
          for (var d2 = a.length, b = 2 <= arguments.length ? arguments[1] : void 0, f2 = [], n = 0; n < d2; n++) {
            if (n in a) {
              var k = a[n];
              c2.call(b, k, n, a) && f2.push(k);
            }
          }
          return f2;
        }
        function p2(a) {
          return a.reduce(function(a2, d2) {
            return a2.concat(h.arr(d2) ? p2(d2) : d2);
          }, []);
        }
        function m2(a) {
          if (h.arr(a))
            return a;
          h.str(a) && (a = e2(a) || a);
          return a instanceof NodeList || a instanceof HTMLCollection ? [].slice.call(a) : [a];
        }
        function u2(a, c2) {
          return a.some(function(a2) {
            return a2 === c2;
          });
        }
        function C2(a) {
          var c2 = {}, d2;
          for (d2 in a) {
            c2[d2] = a[d2];
          }
          return c2;
        }
        function D(a, c2) {
          var d2 = C2(a), b;
          for (b in a) {
            d2[b] = c2.hasOwnProperty(b) ? c2[b] : a[b];
          }
          return d2;
        }
        function z(a, c2) {
          var d2 = C2(a), b;
          for (b in c2) {
            d2[b] = h.und(a[b]) ? c2[b] : a[b];
          }
          return d2;
        }
        function T(a) {
          a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a2, c3, d3, k) {
            return c3 + c3 + d3 + d3 + k + k;
          });
          var c2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
          a = parseInt(c2[1], 16);
          var d2 = parseInt(c2[2], 16), c2 = parseInt(c2[3], 16);
          return "rgba(" + a + "," + d2 + "," + c2 + ",1)";
        }
        function U2(a) {
          function c2(a2, c3, b2) {
            0 > b2 && (b2 += 1);
            1 < b2 && --b2;
            return b2 < 1 / 6 ? a2 + 6 * (c3 - a2) * b2 : 0.5 > b2 ? c3 : b2 < 2 / 3 ? a2 + (c3 - a2) * (2 / 3 - b2) * 6 : a2;
          }
          var d2 = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(a) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(a);
          a = parseInt(d2[1]) / 360;
          var b = parseInt(d2[2]) / 100, f2 = parseInt(d2[3]) / 100, d2 = d2[4] || 1;
          if (0 == b)
            f2 = b = a = f2;
          else {
            var n = 0.5 > f2 ? f2 * (1 + b) : f2 + b - f2 * b, k = 2 * f2 - n, f2 = c2(k, n, a + 1 / 3), b = c2(k, n, a);
            a = c2(k, n, a - 1 / 3);
          }
          return "rgba(" + 255 * f2 + "," + 255 * b + "," + 255 * a + "," + d2 + ")";
        }
        function y(a) {
          if (a = /([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(a))
            return a[2];
        }
        function V(a) {
          if (-1 < a.indexOf("translate") || "perspective" === a)
            return "px";
          if (-1 < a.indexOf("rotate") || -1 < a.indexOf("skew"))
            return "deg";
        }
        function I2(a, c2) {
          return h.fnc(a) ? a(c2.target, c2.id, c2.total) : a;
        }
        function E(a, c2) {
          if (c2 in a.style)
            return getComputedStyle(a).getPropertyValue(c2.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()) || "0";
        }
        function J(a, c2) {
          if (h.dom(a) && u2(W, c2))
            return "transform";
          if (h.dom(a) && (a.getAttribute(c2) || h.svg(a) && a[c2]))
            return "attribute";
          if (h.dom(a) && "transform" !== c2 && E(a, c2))
            return "css";
          if (null != a[c2])
            return "object";
        }
        function X2(a, c2) {
          var d2 = V(c2), d2 = -1 < c2.indexOf("scale") ? 1 : 0 + d2;
          a = a.style.transform;
          if (!a)
            return d2;
          for (var b = [], f2 = [], n = [], k = /(\w+)\((.+?)\)/g; b = k.exec(a); ) {
            f2.push(b[1]), n.push(b[2]);
          }
          a = r(n, function(a2, b2) {
            return f2[b2] === c2;
          });
          return a.length ? a[0] : d2;
        }
        function K(a, c2) {
          switch (J(a, c2)) {
            case "transform":
              return X2(a, c2);
            case "css":
              return E(a, c2);
            case "attribute":
              return a.getAttribute(c2);
          }
          return a[c2] || 0;
        }
        function L(a, c2) {
          var d2 = /^(\*=|\+=|-=)/.exec(a);
          if (!d2)
            return a;
          var b = y(a) || 0;
          c2 = parseFloat(c2);
          a = parseFloat(a.replace(d2[0], ""));
          switch (d2[0][0]) {
            case "+":
              return c2 + a + b;
            case "-":
              return c2 - a + b;
            case "*":
              return c2 * a + b;
          }
        }
        function F(a, c2) {
          return Math.sqrt(Math.pow(c2.x - a.x, 2) + Math.pow(c2.y - a.y, 2));
        }
        function M3(a) {
          a = a.points;
          for (var c2 = 0, d2, b = 0; b < a.numberOfItems; b++) {
            var f2 = a.getItem(b);
            0 < b && (c2 += F(d2, f2));
            d2 = f2;
          }
          return c2;
        }
        function N2(a) {
          if (a.getTotalLength)
            return a.getTotalLength();
          switch (a.tagName.toLowerCase()) {
            case "circle":
              return 2 * Math.PI * a.getAttribute("r");
            case "rect":
              return 2 * a.getAttribute("width") + 2 * a.getAttribute("height");
            case "line":
              return F({ x: a.getAttribute("x1"), y: a.getAttribute("y1") }, { x: a.getAttribute("x2"), y: a.getAttribute("y2") });
            case "polyline":
              return M3(a);
            case "polygon":
              var c2 = a.points;
              return M3(a) + F(c2.getItem(c2.numberOfItems - 1), c2.getItem(0));
          }
        }
        function Y(a, c2) {
          function d2(b2) {
            b2 = void 0 === b2 ? 0 : b2;
            return a.el.getPointAtLength(1 <= c2 + b2 ? c2 + b2 : 0);
          }
          var b = d2(), f2 = d2(-1), n = d2(1);
          switch (a.property) {
            case "x":
              return b.x;
            case "y":
              return b.y;
            case "angle":
              return 180 * Math.atan2(n.y - f2.y, n.x - f2.x) / Math.PI;
          }
        }
        function O2(a, c2) {
          var d2 = /-?\d*\.?\d+/g, b;
          b = h.pth(a) ? a.totalLength : a;
          if (h.col(b)) {
            if (h.rgb(b)) {
              var f2 = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(b);
              b = f2 ? "rgba(" + f2[1] + ",1)" : b;
            } else
              b = h.hex(b) ? T(b) : h.hsl(b) ? U2(b) : void 0;
          } else
            f2 = (f2 = y(b)) ? b.substr(0, b.length - f2.length) : b, b = c2 && !/\s/g.test(b) ? f2 + c2 : f2;
          b += "";
          return { original: b, numbers: b.match(d2) ? b.match(d2).map(Number) : [0], strings: h.str(a) || c2 ? b.split(d2) : [] };
        }
        function P2(a) {
          a = a ? p2(h.arr(a) ? a.map(m2) : m2(a)) : [];
          return r(a, function(a2, d2, b) {
            return b.indexOf(a2) === d2;
          });
        }
        function Z(a) {
          var c2 = P2(a);
          return c2.map(function(a2, b) {
            return { target: a2, id: b, total: c2.length };
          });
        }
        function aa(a, c2) {
          var d2 = C2(c2);
          if (h.arr(a)) {
            var b = a.length;
            2 !== b || h.obj(a[0]) ? h.fnc(c2.duration) || (d2.duration = c2.duration / b) : a = { value: a };
          }
          return m2(a).map(function(a2, b2) {
            b2 = b2 ? 0 : c2.delay;
            a2 = h.obj(a2) && !h.pth(a2) ? a2 : { value: a2 };
            h.und(a2.delay) && (a2.delay = b2);
            return a2;
          }).map(function(a2) {
            return z(a2, d2);
          });
        }
        function ba(a, c2) {
          var d2 = {}, b;
          for (b in a) {
            var f2 = I2(a[b], c2);
            h.arr(f2) && (f2 = f2.map(function(a2) {
              return I2(a2, c2);
            }), 1 === f2.length && (f2 = f2[0]));
            d2[b] = f2;
          }
          d2.duration = parseFloat(d2.duration);
          d2.delay = parseFloat(d2.delay);
          return d2;
        }
        function ca(a) {
          return h.arr(a) ? A.apply(this, a) : Q[a];
        }
        function da(a, c2) {
          var d2;
          return a.tweens.map(function(b) {
            b = ba(b, c2);
            var f2 = b.value, e3 = K(c2.target, a.name), k = d2 ? d2.to.original : e3, k = h.arr(f2) ? f2[0] : k, w = L(h.arr(f2) ? f2[1] : f2, k), e3 = y(w) || y(k) || y(e3);
            b.from = O2(k, e3);
            b.to = O2(w, e3);
            b.start = d2 ? d2.end : a.offset;
            b.end = b.start + b.delay + b.duration;
            b.easing = ca(b.easing);
            b.elasticity = (1e3 - Math.min(Math.max(b.elasticity, 1), 999)) / 1e3;
            b.isPath = h.pth(f2);
            b.isColor = h.col(b.from.original);
            b.isColor && (b.round = 1);
            return d2 = b;
          });
        }
        function ea(a, c2) {
          return r(p2(a.map(function(a2) {
            return c2.map(function(b) {
              var c3 = J(a2.target, b.name);
              if (c3) {
                var d2 = da(b, a2);
                b = { type: c3, property: b.name, animatable: a2, tweens: d2, duration: d2[d2.length - 1].end, delay: d2[0].delay };
              } else
                b = void 0;
              return b;
            });
          })), function(a2) {
            return !h.und(a2);
          });
        }
        function R2(a, c2, d2, b) {
          var f2 = "delay" === a;
          return c2.length ? (f2 ? Math.min : Math.max).apply(Math, c2.map(function(b2) {
            return b2[a];
          })) : f2 ? b.delay : d2.offset + b.delay + b.duration;
        }
        function fa(a) {
          var c2 = D(ga, a), d2 = D(S2, a), b = Z(a.targets), f2 = [], e3 = z(c2, d2), k;
          for (k in a) {
            e3.hasOwnProperty(k) || "targets" === k || f2.push({ name: k, offset: e3.offset, tweens: aa(a[k], d2) });
          }
          a = ea(b, f2);
          return z(c2, { children: [], animatables: b, animations: a, duration: R2("duration", a, c2, d2), delay: R2("delay", a, c2, d2) });
        }
        function q(a) {
          function c2() {
            return window.Promise && new Promise(function(a2) {
              return p3 = a2;
            });
          }
          function d2(a2) {
            return g.reversed ? g.duration - a2 : a2;
          }
          function b(a2) {
            for (var b2 = 0, c3 = {}, d3 = g.animations, f3 = d3.length; b2 < f3; ) {
              var e4 = d3[b2], k2 = e4.animatable, h3 = e4.tweens, n = h3.length - 1, l3 = h3[n];
              n && (l3 = r(h3, function(b3) {
                return a2 < b3.end;
              })[0] || l3);
              for (var h3 = Math.min(Math.max(a2 - l3.start - l3.delay, 0), l3.duration) / l3.duration, w = isNaN(h3) ? 1 : l3.easing(h3, l3.elasticity), h3 = l3.to.strings, p4 = l3.round, n = [], m4 = void 0, m4 = l3.to.numbers.length, t3 = 0; t3 < m4; t3++) {
                var x2 = void 0, x2 = l3.to.numbers[t3], q2 = l3.from.numbers[t3], x2 = l3.isPath ? Y(l3.value, w * x2) : q2 + w * (x2 - q2);
                p4 && (l3.isColor && 2 < t3 || (x2 = Math.round(x2 * p4) / p4));
                n.push(x2);
              }
              if (l3 = h3.length)
                for (m4 = h3[0], w = 0; w < l3; w++) {
                  p4 = h3[w + 1], t3 = n[w], isNaN(t3) || (m4 = p4 ? m4 + (t3 + p4) : m4 + (t3 + " "));
                }
              else
                m4 = n[0];
              ha[e4.type](k2.target, e4.property, m4, c3, k2.id);
              e4.currentValue = m4;
              b2++;
            }
            if (b2 = Object.keys(c3).length)
              for (d3 = 0; d3 < b2; d3++) {
                H || (H = E(document.body, "transform") ? "transform" : "-webkit-transform"), g.animatables[d3].target.style[H] = c3[d3].join(" ");
              }
            g.currentTime = a2;
            g.progress = a2 / g.duration * 100;
          }
          function f2(a2) {
            if (g[a2])
              g[a2](g);
          }
          function e3() {
            g.remaining && true !== g.remaining && g.remaining--;
          }
          function k(a2) {
            var k2 = g.duration, n = g.offset, w = n + g.delay, r2 = g.currentTime, x2 = g.reversed, q2 = d2(a2);
            if (g.children.length) {
              var u3 = g.children, v2 = u3.length;
              if (q2 >= g.currentTime)
                for (var G2 = 0; G2 < v2; G2++) {
                  u3[G2].seek(q2);
                }
              else
                for (; v2--; ) {
                  u3[v2].seek(q2);
                }
            }
            if (q2 >= w || !k2)
              g.began || (g.began = true, f2("begin")), f2("run");
            if (q2 > n && q2 < k2)
              b(q2);
            else if (q2 <= n && 0 !== r2 && (b(0), x2 && e3()), q2 >= k2 && r2 !== k2 || !k2)
              b(k2), x2 || e3();
            f2("update");
            a2 >= k2 && (g.remaining ? (t2 = h2, "alternate" === g.direction && (g.reversed = !g.reversed)) : (g.pause(), g.completed || (g.completed = true, f2("complete"), "Promise" in window && (p3(), m3 = c2()))), l2 = 0);
          }
          a = void 0 === a ? {} : a;
          var h2, t2, l2 = 0, p3 = null, m3 = c2(), g = fa(a);
          g.reset = function() {
            var a2 = g.direction, c3 = g.loop;
            g.currentTime = 0;
            g.progress = 0;
            g.paused = true;
            g.began = false;
            g.completed = false;
            g.reversed = "reverse" === a2;
            g.remaining = "alternate" === a2 && 1 === c3 ? 2 : c3;
            b(0);
            for (a2 = g.children.length; a2--; ) {
              g.children[a2].reset();
            }
          };
          g.tick = function(a2) {
            h2 = a2;
            t2 || (t2 = h2);
            k((l2 + h2 - t2) * q.speed);
          };
          g.seek = function(a2) {
            k(d2(a2));
          };
          g.pause = function() {
            var a2 = v.indexOf(g);
            -1 < a2 && v.splice(a2, 1);
            g.paused = true;
          };
          g.play = function() {
            g.paused && (g.paused = false, t2 = 0, l2 = d2(g.currentTime), v.push(g), B || ia());
          };
          g.reverse = function() {
            g.reversed = !g.reversed;
            t2 = 0;
            l2 = d2(g.currentTime);
          };
          g.restart = function() {
            g.pause();
            g.reset();
            g.play();
          };
          g.finished = m3;
          g.reset();
          g.autoplay && g.play();
          return g;
        }
        var ga = { update: void 0, begin: void 0, run: void 0, complete: void 0, loop: 1, direction: "normal", autoplay: true, offset: 0 }, S2 = { duration: 1e3, delay: 0, easing: "easeOutElastic", elasticity: 500, round: 0 }, W = "translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY perspective".split(" "), H, h = {
          arr: function(a) {
            return Array.isArray(a);
          },
          obj: function(a) {
            return -1 < Object.prototype.toString.call(a).indexOf("Object");
          },
          pth: function(a) {
            return h.obj(a) && a.hasOwnProperty("totalLength");
          },
          svg: function(a) {
            return a instanceof SVGElement;
          },
          dom: function(a) {
            return a.nodeType || h.svg(a);
          },
          str: function(a) {
            return "string" === typeof a;
          },
          fnc: function(a) {
            return "function" === typeof a;
          },
          und: function(a) {
            return "undefined" === typeof a;
          },
          hex: function(a) {
            return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
          },
          rgb: function(a) {
            return /^rgb/.test(a);
          },
          hsl: function(a) {
            return /^hsl/.test(a);
          },
          col: function(a) {
            return h.hex(a) || h.rgb(a) || h.hsl(a);
          }
        }, A = /* @__PURE__ */ function() {
          function a(a2, d2, b) {
            return (((1 - 3 * b + 3 * d2) * a2 + (3 * b - 6 * d2)) * a2 + 3 * d2) * a2;
          }
          return function(c2, d2, b, f2) {
            if (0 <= c2 && 1 >= c2 && 0 <= b && 1 >= b) {
              var e3 = new Float32Array(11);
              if (c2 !== d2 || b !== f2)
                for (var k = 0; 11 > k; ++k) {
                  e3[k] = a(0.1 * k, c2, b);
                }
              return function(k2) {
                if (c2 === d2 && b === f2)
                  return k2;
                if (0 === k2)
                  return 0;
                if (1 === k2)
                  return 1;
                for (var h2 = 0, l2 = 1; 10 !== l2 && e3[l2] <= k2; ++l2) {
                  h2 += 0.1;
                }
                --l2;
                var l2 = h2 + (k2 - e3[l2]) / (e3[l2 + 1] - e3[l2]) * 0.1, n = 3 * (1 - 3 * b + 3 * c2) * l2 * l2 + 2 * (3 * b - 6 * c2) * l2 + 3 * c2;
                if (1e-3 <= n) {
                  for (h2 = 0; 4 > h2; ++h2) {
                    n = 3 * (1 - 3 * b + 3 * c2) * l2 * l2 + 2 * (3 * b - 6 * c2) * l2 + 3 * c2;
                    if (0 === n)
                      break;
                    var m3 = a(l2, c2, b) - k2, l2 = l2 - m3 / n;
                  }
                  k2 = l2;
                } else if (0 === n)
                  k2 = l2;
                else {
                  var l2 = h2, h2 = h2 + 0.1, g = 0;
                  do {
                    m3 = l2 + (h2 - l2) / 2, n = a(m3, c2, b) - k2, 0 < n ? h2 = m3 : l2 = m3;
                  } while (1e-7 < Math.abs(n) && 10 > ++g);
                  k2 = m3;
                }
                return a(k2, d2, f2);
              };
            }
          };
        }(), Q = function() {
          function a(a2, b2) {
            return 0 === a2 || 1 === a2 ? a2 : -Math.pow(2, 10 * (a2 - 1)) * Math.sin(2 * (a2 - 1 - b2 / (2 * Math.PI) * Math.asin(1)) * Math.PI / b2);
          }
          var c2 = "Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "), d2 = { In: [[0.55, 0.085, 0.68, 0.53], [0.55, 0.055, 0.675, 0.19], [0.895, 0.03, 0.685, 0.22], [0.755, 0.05, 0.855, 0.06], [0.47, 0, 0.745, 0.715], [0.95, 0.05, 0.795, 0.035], [0.6, 0.04, 0.98, 0.335], [0.6, -0.28, 0.735, 0.045], a], Out: [[0.25, 0.46, 0.45, 0.94], [0.215, 0.61, 0.355, 1], [0.165, 0.84, 0.44, 1], [0.23, 1, 0.32, 1], [0.39, 0.575, 0.565, 1], [0.19, 1, 0.22, 1], [0.075, 0.82, 0.165, 1], [0.175, 0.885, 0.32, 1.275], function(b2, c3) {
            return 1 - a(1 - b2, c3);
          }], InOut: [[0.455, 0.03, 0.515, 0.955], [0.645, 0.045, 0.355, 1], [0.77, 0, 0.175, 1], [0.86, 0, 0.07, 1], [0.445, 0.05, 0.55, 0.95], [1, 0, 0, 1], [0.785, 0.135, 0.15, 0.86], [0.68, -0.55, 0.265, 1.55], function(b2, c3) {
            return 0.5 > b2 ? a(2 * b2, c3) / 2 : 1 - a(-2 * b2 + 2, c3) / 2;
          }] }, b = { linear: A(0.25, 0.25, 0.75, 0.75) }, f2 = {}, e3;
          for (e3 in d2) {
            f2.type = e3, d2[f2.type].forEach(/* @__PURE__ */ function(a2) {
              return function(d3, f3) {
                b["ease" + a2.type + c2[f3]] = h.fnc(d3) ? d3 : A.apply($jscomp$this, d3);
              };
            }(f2)), f2 = { type: f2.type };
          }
          return b;
        }(), ha = { css: function(a, c2, d2) {
          return a.style[c2] = d2;
        }, attribute: function(a, c2, d2) {
          return a.setAttribute(c2, d2);
        }, object: function(a, c2, d2) {
          return a[c2] = d2;
        }, transform: function(a, c2, d2, b, f2) {
          b[f2] || (b[f2] = []);
          b[f2].push(c2 + "(" + d2 + ")");
        } }, v = [], B = 0, ia = /* @__PURE__ */ function() {
          function a() {
            B = requestAnimationFrame(c2);
          }
          function c2(c3) {
            var b = v.length;
            if (b) {
              for (var d2 = 0; d2 < b; ) {
                v[d2] && v[d2].tick(c3), d2++;
              }
              a();
            } else
              cancelAnimationFrame(B), B = 0;
          }
          return a;
        }();
        q.version = "2.2.0";
        q.speed = 1;
        q.running = v;
        q.remove = function(a) {
          a = P2(a);
          for (var c2 = v.length; c2--; ) {
            for (var d2 = v[c2], b = d2.animations, f2 = b.length; f2--; ) {
              u2(a, b[f2].animatable.target) && (b.splice(f2, 1), b.length || d2.pause());
            }
          }
        };
        q.getValue = K;
        q.path = function(a, c2) {
          var d2 = h.str(a) ? e2(a)[0] : a, b = c2 || 100;
          return function(a2) {
            return { el: d2, property: a2, totalLength: N2(d2) * (b / 100) };
          };
        };
        q.setDashoffset = function(a) {
          var c2 = N2(a);
          a.setAttribute("stroke-dasharray", c2);
          return c2;
        };
        q.bezier = A;
        q.easings = Q;
        q.timeline = function(a) {
          var c2 = q(a);
          c2.pause();
          c2.duration = 0;
          c2.add = function(d2) {
            c2.children.forEach(function(a2) {
              a2.began = true;
              a2.completed = true;
            });
            m2(d2).forEach(function(b) {
              var d3 = z(b, D(S2, a || {}));
              d3.targets = d3.targets || a.targets;
              b = c2.duration;
              var e3 = d3.offset;
              d3.autoplay = false;
              d3.direction = c2.direction;
              d3.offset = h.und(e3) ? b : L(e3, b);
              c2.began = true;
              c2.completed = true;
              c2.seek(d3.offset);
              d3 = q(d3);
              d3.began = true;
              d3.completed = true;
              d3.duration > b && (c2.duration = d3.duration);
              c2.children.push(d3);
            });
            c2.seek(0);
            c2.reset();
            c2.autoplay && c2.restart();
            return c2;
          };
          return c2;
        };
        q.random = function(a, c2) {
          return Math.floor(Math.random() * (c2 - a + 1)) + a;
        };
        return q;
      });
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          accordion: true,
          onOpenStart: void 0,
          onOpenEnd: void 0,
          onCloseStart: void 0,
          onCloseEnd: void 0,
          inDuration: 300,
          outDuration: 300
        };
        var Collapsible = function(_Component) {
          _inherits(Collapsible2, _Component);
          function Collapsible2(el, options) {
            _classCallCheck(this, Collapsible2);
            var _this3 = _possibleConstructorReturn(this, (Collapsible2.__proto__ || Object.getPrototypeOf(Collapsible2)).call(this, Collapsible2, el, options));
            _this3.el.M_Collapsible = _this3;
            _this3.options = $2.extend({}, Collapsible2.defaults, options);
            _this3.$headers = _this3.$el.children("li").children(".collapsible-header");
            _this3.$headers.attr("tabindex", 0);
            _this3._setupEventHandlers();
            var $activeBodies = _this3.$el.children("li.active").children(".collapsible-body");
            if (_this3.options.accordion) {
              $activeBodies.first().css("display", "block");
            } else {
              $activeBodies.css("display", "block");
            }
            return _this3;
          }
          _createClass2(Collapsible2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.M_Collapsible = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              var _this4 = this;
              this._handleCollapsibleClickBound = this._handleCollapsibleClick.bind(this);
              this._handleCollapsibleKeydownBound = this._handleCollapsibleKeydown.bind(this);
              this.el.addEventListener("click", this._handleCollapsibleClickBound);
              this.$headers.each(function(header) {
                header.addEventListener("keydown", _this4._handleCollapsibleKeydownBound);
              });
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              var _this5 = this;
              this.el.removeEventListener("click", this._handleCollapsibleClickBound);
              this.$headers.each(function(header) {
                header.removeEventListener("keydown", _this5._handleCollapsibleKeydownBound);
              });
            }
            /**
             * Handle Collapsible Click
             * @param {Event} e
             */
          }, {
            key: "_handleCollapsibleClick",
            value: function _handleCollapsibleClick(e2) {
              var $header = $2(e2.target).closest(".collapsible-header");
              if (e2.target && $header.length) {
                var $collapsible = $header.closest(".collapsible");
                if ($collapsible[0] === this.el) {
                  var $collapsibleLi = $header.closest("li");
                  var $collapsibleLis = $collapsible.children("li");
                  var isActive = $collapsibleLi[0].classList.contains("active");
                  var index = $collapsibleLis.index($collapsibleLi);
                  if (isActive) {
                    this.close(index);
                  } else {
                    this.open(index);
                  }
                }
              }
            }
            /**
             * Handle Collapsible Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleCollapsibleKeydown",
            value: function _handleCollapsibleKeydown(e2) {
              if (e2.keyCode === 13) {
                this._handleCollapsibleClickBound(e2);
              }
            }
            /**
             * Animate in collapsible slide
             * @param {Number} index - 0th index of slide
             */
          }, {
            key: "_animateIn",
            value: function _animateIn(index) {
              var _this6 = this;
              var $collapsibleLi = this.$el.children("li").eq(index);
              if ($collapsibleLi.length) {
                var $body = $collapsibleLi.children(".collapsible-body");
                anim.remove($body[0]);
                $body.css({
                  display: "block",
                  overflow: "hidden",
                  height: 0,
                  paddingTop: "",
                  paddingBottom: ""
                });
                var pTop = $body.css("padding-top");
                var pBottom = $body.css("padding-bottom");
                var finalHeight = $body[0].scrollHeight;
                $body.css({
                  paddingTop: 0,
                  paddingBottom: 0
                });
                anim({
                  targets: $body[0],
                  height: finalHeight,
                  paddingTop: pTop,
                  paddingBottom: pBottom,
                  duration: this.options.inDuration,
                  easing: "easeInOutCubic",
                  complete: function(anim2) {
                    $body.css({
                      overflow: "",
                      paddingTop: "",
                      paddingBottom: "",
                      height: ""
                    });
                    if (typeof _this6.options.onOpenEnd === "function") {
                      _this6.options.onOpenEnd.call(_this6, $collapsibleLi[0]);
                    }
                  }
                });
              }
            }
            /**
             * Animate out collapsible slide
             * @param {Number} index - 0th index of slide to open
             */
          }, {
            key: "_animateOut",
            value: function _animateOut(index) {
              var _this7 = this;
              var $collapsibleLi = this.$el.children("li").eq(index);
              if ($collapsibleLi.length) {
                var $body = $collapsibleLi.children(".collapsible-body");
                anim.remove($body[0]);
                $body.css("overflow", "hidden");
                anim({
                  targets: $body[0],
                  height: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  duration: this.options.outDuration,
                  easing: "easeInOutCubic",
                  complete: function() {
                    $body.css({
                      height: "",
                      overflow: "",
                      padding: "",
                      display: ""
                    });
                    if (typeof _this7.options.onCloseEnd === "function") {
                      _this7.options.onCloseEnd.call(_this7, $collapsibleLi[0]);
                    }
                  }
                });
              }
            }
            /**
             * Open Collapsible
             * @param {Number} index - 0th index of slide
             */
          }, {
            key: "open",
            value: function open(index) {
              var _this8 = this;
              var $collapsibleLi = this.$el.children("li").eq(index);
              if ($collapsibleLi.length && !$collapsibleLi[0].classList.contains("active")) {
                if (typeof this.options.onOpenStart === "function") {
                  this.options.onOpenStart.call(this, $collapsibleLi[0]);
                }
                if (this.options.accordion) {
                  var $collapsibleLis = this.$el.children("li");
                  var $activeLis = this.$el.children("li.active");
                  $activeLis.each(function(el) {
                    var index2 = $collapsibleLis.index($2(el));
                    _this8.close(index2);
                  });
                }
                $collapsibleLi[0].classList.add("active");
                this._animateIn(index);
              }
            }
            /**
             * Close Collapsible
             * @param {Number} index - 0th index of slide
             */
          }, {
            key: "close",
            value: function close(index) {
              var $collapsibleLi = this.$el.children("li").eq(index);
              if ($collapsibleLi.length && $collapsibleLi[0].classList.contains("active")) {
                if (typeof this.options.onCloseStart === "function") {
                  this.options.onCloseStart.call(this, $collapsibleLi[0]);
                }
                $collapsibleLi[0].classList.remove("active");
                this._animateOut(index);
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Collapsible2.__proto__ || Object.getPrototypeOf(Collapsible2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Collapsible;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Collapsible2;
        }(Component);
        M.Collapsible = Collapsible;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Collapsible, "collapsible", "M_Collapsible");
        }
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          alignment: "left",
          autoFocus: true,
          constrainWidth: true,
          container: null,
          coverTrigger: true,
          closeOnClick: true,
          hover: false,
          inDuration: 150,
          outDuration: 250,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          onItemClick: null
        };
        var Dropdown = function(_Component2) {
          _inherits(Dropdown2, _Component2);
          function Dropdown2(el, options) {
            _classCallCheck(this, Dropdown2);
            var _this9 = _possibleConstructorReturn(this, (Dropdown2.__proto__ || Object.getPrototypeOf(Dropdown2)).call(this, Dropdown2, el, options));
            _this9.el.M_Dropdown = _this9;
            Dropdown2._dropdowns.push(_this9);
            _this9.id = M.getIdFromTrigger(el);
            _this9.dropdownEl = document.getElementById(_this9.id);
            _this9.$dropdownEl = $2(_this9.dropdownEl);
            _this9.options = $2.extend({}, Dropdown2.defaults, options);
            _this9.isOpen = false;
            _this9.isScrollable = false;
            _this9.isTouchMoving = false;
            _this9.focusedIndex = -1;
            _this9.filterQuery = [];
            if (!!_this9.options.container) {
              $2(_this9.options.container).append(_this9.dropdownEl);
            } else {
              _this9.$el.after(_this9.dropdownEl);
            }
            _this9._makeDropdownFocusable();
            _this9._resetFilterQueryBound = _this9._resetFilterQuery.bind(_this9);
            _this9._handleDocumentClickBound = _this9._handleDocumentClick.bind(_this9);
            _this9._handleDocumentTouchmoveBound = _this9._handleDocumentTouchmove.bind(_this9);
            _this9._handleDropdownClickBound = _this9._handleDropdownClick.bind(_this9);
            _this9._handleDropdownKeydownBound = _this9._handleDropdownKeydown.bind(_this9);
            _this9._handleTriggerKeydownBound = _this9._handleTriggerKeydown.bind(_this9);
            _this9._setupEventHandlers();
            return _this9;
          }
          _createClass2(Dropdown2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._resetDropdownStyles();
              this._removeEventHandlers();
              Dropdown2._dropdowns.splice(Dropdown2._dropdowns.indexOf(this), 1);
              this.el.M_Dropdown = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this.el.addEventListener("keydown", this._handleTriggerKeydownBound);
              this.dropdownEl.addEventListener("click", this._handleDropdownClickBound);
              if (this.options.hover) {
                this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
                this.el.addEventListener("mouseenter", this._handleMouseEnterBound);
                this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
                this.el.addEventListener("mouseleave", this._handleMouseLeaveBound);
                this.dropdownEl.addEventListener("mouseleave", this._handleMouseLeaveBound);
              } else {
                this._handleClickBound = this._handleClick.bind(this);
                this.el.addEventListener("click", this._handleClickBound);
              }
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("keydown", this._handleTriggerKeydownBound);
              this.dropdownEl.removeEventListener("click", this._handleDropdownClickBound);
              if (this.options.hover) {
                this.el.removeEventListener("mouseenter", this._handleMouseEnterBound);
                this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound);
                this.dropdownEl.removeEventListener("mouseleave", this._handleMouseLeaveBound);
              } else {
                this.el.removeEventListener("click", this._handleClickBound);
              }
            }
          }, {
            key: "_setupTemporaryEventHandlers",
            value: function _setupTemporaryEventHandlers() {
              document.body.addEventListener("click", this._handleDocumentClickBound, true);
              document.body.addEventListener("touchend", this._handleDocumentClickBound);
              document.body.addEventListener("touchmove", this._handleDocumentTouchmoveBound);
              this.dropdownEl.addEventListener("keydown", this._handleDropdownKeydownBound);
            }
          }, {
            key: "_removeTemporaryEventHandlers",
            value: function _removeTemporaryEventHandlers() {
              document.body.removeEventListener("click", this._handleDocumentClickBound, true);
              document.body.removeEventListener("touchend", this._handleDocumentClickBound);
              document.body.removeEventListener("touchmove", this._handleDocumentTouchmoveBound);
              this.dropdownEl.removeEventListener("keydown", this._handleDropdownKeydownBound);
            }
          }, {
            key: "_handleClick",
            value: function _handleClick(e2) {
              e2.preventDefault();
              this.open();
            }
          }, {
            key: "_handleMouseEnter",
            value: function _handleMouseEnter() {
              this.open();
            }
          }, {
            key: "_handleMouseLeave",
            value: function _handleMouseLeave(e2) {
              var toEl = e2.toElement || e2.relatedTarget;
              var leaveToDropdownContent = !!$2(toEl).closest(".dropdown-content").length;
              var leaveToActiveDropdownTrigger = false;
              var $closestTrigger = $2(toEl).closest(".dropdown-trigger");
              if ($closestTrigger.length && !!$closestTrigger[0].M_Dropdown && $closestTrigger[0].M_Dropdown.isOpen) {
                leaveToActiveDropdownTrigger = true;
              }
              if (!leaveToActiveDropdownTrigger && !leaveToDropdownContent) {
                this.close();
              }
            }
          }, {
            key: "_handleDocumentClick",
            value: function _handleDocumentClick(e2) {
              var _this10 = this;
              var $target = $2(e2.target);
              if (this.options.closeOnClick && $target.closest(".dropdown-content").length && !this.isTouchMoving) {
                setTimeout(function() {
                  _this10.close();
                }, 0);
              } else if ($target.closest(".dropdown-trigger").length || !$target.closest(".dropdown-content").length) {
                setTimeout(function() {
                  _this10.close();
                }, 0);
              }
              this.isTouchMoving = false;
            }
          }, {
            key: "_handleTriggerKeydown",
            value: function _handleTriggerKeydown(e2) {
              if ((e2.which === M.keys.ARROW_DOWN || e2.which === M.keys.ENTER) && !this.isOpen) {
                e2.preventDefault();
                this.open();
              }
            }
            /**
             * Handle Document Touchmove
             * @param {Event} e
             */
          }, {
            key: "_handleDocumentTouchmove",
            value: function _handleDocumentTouchmove(e2) {
              var $target = $2(e2.target);
              if ($target.closest(".dropdown-content").length) {
                this.isTouchMoving = true;
              }
            }
            /**
             * Handle Dropdown Click
             * @param {Event} e
             */
          }, {
            key: "_handleDropdownClick",
            value: function _handleDropdownClick(e2) {
              if (typeof this.options.onItemClick === "function") {
                var itemEl = $2(e2.target).closest("li")[0];
                this.options.onItemClick.call(this, itemEl);
              }
            }
            /**
             * Handle Dropdown Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleDropdownKeydown",
            value: function _handleDropdownKeydown(e2) {
              if (e2.which === M.keys.TAB) {
                e2.preventDefault();
                this.close();
              } else if ((e2.which === M.keys.ARROW_DOWN || e2.which === M.keys.ARROW_UP) && this.isOpen) {
                e2.preventDefault();
                var direction = e2.which === M.keys.ARROW_DOWN ? 1 : -1;
                var newFocusedIndex = this.focusedIndex;
                var foundNewIndex = false;
                do {
                  newFocusedIndex = newFocusedIndex + direction;
                  if (!!this.dropdownEl.children[newFocusedIndex] && this.dropdownEl.children[newFocusedIndex].tabIndex !== -1) {
                    foundNewIndex = true;
                    break;
                  }
                } while (newFocusedIndex < this.dropdownEl.children.length && newFocusedIndex >= 0);
                if (foundNewIndex) {
                  this.focusedIndex = newFocusedIndex;
                  this._focusFocusedItem();
                }
              } else if (e2.which === M.keys.ENTER && this.isOpen) {
                var focusedElement = this.dropdownEl.children[this.focusedIndex];
                var $activatableElement = $2(focusedElement).find("a, button").first();
                !!$activatableElement.length ? $activatableElement[0].click() : focusedElement.click();
              } else if (e2.which === M.keys.ESC && this.isOpen) {
                e2.preventDefault();
                this.close();
              }
              var letter = String.fromCharCode(e2.which).toLowerCase(), nonLetters = [9, 13, 27, 38, 40];
              if (letter && nonLetters.indexOf(e2.which) === -1) {
                this.filterQuery.push(letter);
                var string = this.filterQuery.join(""), newOptionEl = $2(this.dropdownEl).find("li").filter(function(el) {
                  return $2(el).text().toLowerCase().indexOf(string) === 0;
                })[0];
                if (newOptionEl) {
                  this.focusedIndex = $2(newOptionEl).index();
                  this._focusFocusedItem();
                }
              }
              this.filterTimeout = setTimeout(this._resetFilterQueryBound, 1e3);
            }
            /**
             * Setup dropdown
             */
          }, {
            key: "_resetFilterQuery",
            value: function _resetFilterQuery() {
              this.filterQuery = [];
            }
          }, {
            key: "_resetDropdownStyles",
            value: function _resetDropdownStyles() {
              this.$dropdownEl.css({
                display: "",
                width: "",
                height: "",
                left: "",
                top: "",
                "transform-origin": "",
                transform: "",
                opacity: ""
              });
            }
          }, {
            key: "_makeDropdownFocusable",
            value: function _makeDropdownFocusable() {
              this.dropdownEl.tabIndex = 0;
              $2(this.dropdownEl).children().each(function(el) {
                if (!el.getAttribute("tabindex")) {
                  el.setAttribute("tabindex", 0);
                }
              });
            }
          }, {
            key: "_focusFocusedItem",
            value: function _focusFocusedItem() {
              if (this.focusedIndex >= 0 && this.focusedIndex < this.dropdownEl.children.length && this.options.autoFocus) {
                this.dropdownEl.children[this.focusedIndex].focus();
              }
            }
          }, {
            key: "_getDropdownPosition",
            value: function _getDropdownPosition() {
              var offsetParentBRect = this.el.offsetParent.getBoundingClientRect();
              var triggerBRect = this.el.getBoundingClientRect();
              var dropdownBRect = this.dropdownEl.getBoundingClientRect();
              var idealHeight = dropdownBRect.height;
              var idealWidth = dropdownBRect.width;
              var idealXPos = triggerBRect.left - dropdownBRect.left;
              var idealYPos = triggerBRect.top - dropdownBRect.top;
              var dropdownBounds = {
                left: idealXPos,
                top: idealYPos,
                height: idealHeight,
                width: idealWidth
              };
              var closestOverflowParent = !!this.dropdownEl.offsetParent ? this.dropdownEl.offsetParent : this.dropdownEl.parentNode;
              var alignments = M.checkPossibleAlignments(this.el, closestOverflowParent, dropdownBounds, this.options.coverTrigger ? 0 : triggerBRect.height);
              var verticalAlignment = "top";
              var horizontalAlignment = this.options.alignment;
              idealYPos += this.options.coverTrigger ? 0 : triggerBRect.height;
              this.isScrollable = false;
              if (!alignments.top) {
                if (alignments.bottom) {
                  verticalAlignment = "bottom";
                } else {
                  this.isScrollable = true;
                  if (alignments.spaceOnTop > alignments.spaceOnBottom) {
                    verticalAlignment = "bottom";
                    idealHeight += alignments.spaceOnTop;
                    idealYPos -= alignments.spaceOnTop;
                  } else {
                    idealHeight += alignments.spaceOnBottom;
                  }
                }
              }
              if (!alignments[horizontalAlignment]) {
                var oppositeAlignment = horizontalAlignment === "left" ? "right" : "left";
                if (alignments[oppositeAlignment]) {
                  horizontalAlignment = oppositeAlignment;
                } else {
                  if (alignments.spaceOnLeft > alignments.spaceOnRight) {
                    horizontalAlignment = "right";
                    idealWidth += alignments.spaceOnLeft;
                    idealXPos -= alignments.spaceOnLeft;
                  } else {
                    horizontalAlignment = "left";
                    idealWidth += alignments.spaceOnRight;
                  }
                }
              }
              if (verticalAlignment === "bottom") {
                idealYPos = idealYPos - dropdownBRect.height + (this.options.coverTrigger ? triggerBRect.height : 0);
              }
              if (horizontalAlignment === "right") {
                idealXPos = idealXPos - dropdownBRect.width + triggerBRect.width;
              }
              return {
                x: idealXPos,
                y: idealYPos,
                verticalAlignment,
                horizontalAlignment,
                height: idealHeight,
                width: idealWidth
              };
            }
            /**
             * Animate in dropdown
             */
          }, {
            key: "_animateIn",
            value: function _animateIn() {
              var _this11 = this;
              anim.remove(this.dropdownEl);
              anim({
                targets: this.dropdownEl,
                opacity: {
                  value: [0, 1],
                  easing: "easeOutQuad"
                },
                scaleX: [0.3, 1],
                scaleY: [0.3, 1],
                duration: this.options.inDuration,
                easing: "easeOutQuint",
                complete: function(anim2) {
                  if (_this11.options.autoFocus) {
                    _this11.dropdownEl.focus();
                  }
                  if (typeof _this11.options.onOpenEnd === "function") {
                    var elem = anim2.animatables[0].target;
                    _this11.options.onOpenEnd.call(elem, _this11.el);
                  }
                }
              });
            }
            /**
             * Animate out dropdown
             */
          }, {
            key: "_animateOut",
            value: function _animateOut() {
              var _this12 = this;
              anim.remove(this.dropdownEl);
              anim({
                targets: this.dropdownEl,
                opacity: {
                  value: 0,
                  easing: "easeOutQuint"
                },
                scaleX: 0.3,
                scaleY: 0.3,
                duration: this.options.outDuration,
                easing: "easeOutQuint",
                complete: function(anim2) {
                  _this12._resetDropdownStyles();
                  if (typeof _this12.options.onCloseEnd === "function") {
                    var elem = anim2.animatables[0].target;
                    _this12.options.onCloseEnd.call(_this12, _this12.el);
                  }
                }
              });
            }
            /**
             * Place dropdown
             */
          }, {
            key: "_placeDropdown",
            value: function _placeDropdown() {
              var idealWidth = this.options.constrainWidth ? this.el.getBoundingClientRect().width : this.dropdownEl.getBoundingClientRect().width;
              this.dropdownEl.style.width = idealWidth + "px";
              var positionInfo = this._getDropdownPosition();
              this.dropdownEl.style.left = positionInfo.x + "px";
              this.dropdownEl.style.top = positionInfo.y + "px";
              this.dropdownEl.style.height = positionInfo.height + "px";
              this.dropdownEl.style.width = positionInfo.width + "px";
              this.dropdownEl.style.transformOrigin = (positionInfo.horizontalAlignment === "left" ? "0" : "100%") + " " + (positionInfo.verticalAlignment === "top" ? "0" : "100%");
            }
            /**
             * Open Dropdown
             */
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen) {
                return;
              }
              this.isOpen = true;
              if (typeof this.options.onOpenStart === "function") {
                this.options.onOpenStart.call(this, this.el);
              }
              this._resetDropdownStyles();
              this.dropdownEl.style.display = "block";
              this._placeDropdown();
              this._animateIn();
              this._setupTemporaryEventHandlers();
            }
            /**
             * Close Dropdown
             */
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              this.isOpen = false;
              this.focusedIndex = -1;
              if (typeof this.options.onCloseStart === "function") {
                this.options.onCloseStart.call(this, this.el);
              }
              this._animateOut();
              this._removeTemporaryEventHandlers();
              if (this.options.autoFocus) {
                this.el.focus();
              }
            }
            /**
             * Recalculate dimensions
             */
          }, {
            key: "recalculateDimensions",
            value: function recalculateDimensions() {
              if (this.isOpen) {
                this.$dropdownEl.css({
                  width: "",
                  height: "",
                  left: "",
                  top: "",
                  "transform-origin": ""
                });
                this._placeDropdown();
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Dropdown2.__proto__ || Object.getPrototypeOf(Dropdown2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Dropdown;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Dropdown2;
        }(Component);
        Dropdown._dropdowns = [];
        window.M.Dropdown = Dropdown;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Dropdown, "dropdown", "M_Dropdown");
        }
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          opacity: 0.5,
          inDuration: 250,
          outDuration: 250,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          preventScrolling: true,
          dismissible: true,
          startingTop: "4%",
          endingTop: "10%"
        };
        var Modal = function(_Component3) {
          _inherits(Modal2, _Component3);
          function Modal2(el, options) {
            _classCallCheck(this, Modal2);
            var _this13 = _possibleConstructorReturn(this, (Modal2.__proto__ || Object.getPrototypeOf(Modal2)).call(this, Modal2, el, options));
            _this13.el.M_Modal = _this13;
            _this13.options = $2.extend({}, Modal2.defaults, options);
            _this13.isOpen = false;
            _this13.id = _this13.$el.attr("id");
            _this13._openingTrigger = void 0;
            _this13.$overlay = $2('<div class="modal-overlay"></div>');
            _this13.el.tabIndex = 0;
            _this13._nthModalOpened = 0;
            Modal2._count++;
            _this13._setupEventHandlers();
            return _this13;
          }
          _createClass2(Modal2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              Modal2._count--;
              this._removeEventHandlers();
              this.el.removeAttribute("style");
              this.$overlay.remove();
              this.el.M_Modal = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleOverlayClickBound = this._handleOverlayClick.bind(this);
              this._handleModalCloseClickBound = this._handleModalCloseClick.bind(this);
              if (Modal2._count === 1) {
                document.body.addEventListener("click", this._handleTriggerClick);
              }
              this.$overlay[0].addEventListener("click", this._handleOverlayClickBound);
              this.el.addEventListener("click", this._handleModalCloseClickBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              if (Modal2._count === 0) {
                document.body.removeEventListener("click", this._handleTriggerClick);
              }
              this.$overlay[0].removeEventListener("click", this._handleOverlayClickBound);
              this.el.removeEventListener("click", this._handleModalCloseClickBound);
            }
            /**
             * Handle Trigger Click
             * @param {Event} e
             */
          }, {
            key: "_handleTriggerClick",
            value: function _handleTriggerClick(e2) {
              var $trigger = $2(e2.target).closest(".modal-trigger");
              if ($trigger.length) {
                var modalId = M.getIdFromTrigger($trigger[0]);
                var modalInstance = document.getElementById(modalId).M_Modal;
                if (modalInstance) {
                  modalInstance.open($trigger);
                }
                e2.preventDefault();
              }
            }
            /**
             * Handle Overlay Click
             */
          }, {
            key: "_handleOverlayClick",
            value: function _handleOverlayClick() {
              if (this.options.dismissible) {
                this.close();
              }
            }
            /**
             * Handle Modal Close Click
             * @param {Event} e
             */
          }, {
            key: "_handleModalCloseClick",
            value: function _handleModalCloseClick(e2) {
              var $closeTrigger = $2(e2.target).closest(".modal-close");
              if ($closeTrigger.length) {
                this.close();
              }
            }
            /**
             * Handle Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleKeydown",
            value: function _handleKeydown(e2) {
              if (e2.keyCode === 27 && this.options.dismissible) {
                this.close();
              }
            }
            /**
             * Handle Focus
             * @param {Event} e
             */
          }, {
            key: "_handleFocus",
            value: function _handleFocus(e2) {
              if (!this.el.contains(e2.target) && this._nthModalOpened === Modal2._modalsOpen) {
                this.el.focus();
              }
            }
            /**
             * Animate in modal
             */
          }, {
            key: "_animateIn",
            value: function _animateIn() {
              var _this14 = this;
              $2.extend(this.el.style, {
                display: "block",
                opacity: 0
              });
              $2.extend(this.$overlay[0].style, {
                display: "block",
                opacity: 0
              });
              anim({
                targets: this.$overlay[0],
                opacity: this.options.opacity,
                duration: this.options.inDuration,
                easing: "easeOutQuad"
              });
              var enterAnimOptions = {
                targets: this.el,
                duration: this.options.inDuration,
                easing: "easeOutCubic",
                // Handle modal onOpenEnd callback
                complete: function() {
                  if (typeof _this14.options.onOpenEnd === "function") {
                    _this14.options.onOpenEnd.call(_this14, _this14.el, _this14._openingTrigger);
                  }
                }
              };
              if (this.el.classList.contains("bottom-sheet")) {
                $2.extend(enterAnimOptions, {
                  bottom: 0,
                  opacity: 1
                });
                anim(enterAnimOptions);
              } else {
                $2.extend(enterAnimOptions, {
                  top: [this.options.startingTop, this.options.endingTop],
                  opacity: 1,
                  scaleX: [0.8, 1],
                  scaleY: [0.8, 1]
                });
                anim(enterAnimOptions);
              }
            }
            /**
             * Animate out modal
             */
          }, {
            key: "_animateOut",
            value: function _animateOut() {
              var _this15 = this;
              anim({
                targets: this.$overlay[0],
                opacity: 0,
                duration: this.options.outDuration,
                easing: "easeOutQuart"
              });
              var exitAnimOptions = {
                targets: this.el,
                duration: this.options.outDuration,
                easing: "easeOutCubic",
                // Handle modal ready callback
                complete: function() {
                  _this15.el.style.display = "none";
                  _this15.$overlay.remove();
                  if (typeof _this15.options.onCloseEnd === "function") {
                    _this15.options.onCloseEnd.call(_this15, _this15.el);
                  }
                }
              };
              if (this.el.classList.contains("bottom-sheet")) {
                $2.extend(exitAnimOptions, {
                  bottom: "-100%",
                  opacity: 0
                });
                anim(exitAnimOptions);
              } else {
                $2.extend(exitAnimOptions, {
                  top: [this.options.endingTop, this.options.startingTop],
                  opacity: 0,
                  scaleX: 0.8,
                  scaleY: 0.8
                });
                anim(exitAnimOptions);
              }
            }
            /**
             * Open Modal
             * @param {cash} [$trigger]
             */
          }, {
            key: "open",
            value: function open($trigger) {
              if (this.isOpen) {
                return;
              }
              this.isOpen = true;
              Modal2._modalsOpen++;
              this._nthModalOpened = Modal2._modalsOpen;
              this.$overlay[0].style.zIndex = 1e3 + Modal2._modalsOpen * 2;
              this.el.style.zIndex = 1e3 + Modal2._modalsOpen * 2 + 1;
              this._openingTrigger = !!$trigger ? $trigger[0] : void 0;
              if (typeof this.options.onOpenStart === "function") {
                this.options.onOpenStart.call(this, this.el, this._openingTrigger);
              }
              if (this.options.preventScrolling) {
                document.body.style.overflow = "hidden";
              }
              this.el.classList.add("open");
              this.el.insertAdjacentElement("afterend", this.$overlay[0]);
              if (this.options.dismissible) {
                this._handleKeydownBound = this._handleKeydown.bind(this);
                this._handleFocusBound = this._handleFocus.bind(this);
                document.addEventListener("keydown", this._handleKeydownBound);
                document.addEventListener("focus", this._handleFocusBound, true);
              }
              anim.remove(this.el);
              anim.remove(this.$overlay[0]);
              this._animateIn();
              this.el.focus();
              return this;
            }
            /**
             * Close Modal
             */
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              this.isOpen = false;
              Modal2._modalsOpen--;
              this._nthModalOpened = 0;
              if (typeof this.options.onCloseStart === "function") {
                this.options.onCloseStart.call(this, this.el);
              }
              this.el.classList.remove("open");
              if (Modal2._modalsOpen === 0) {
                document.body.style.overflow = "";
              }
              if (this.options.dismissible) {
                document.removeEventListener("keydown", this._handleKeydownBound);
                document.removeEventListener("focus", this._handleFocusBound, true);
              }
              anim.remove(this.el);
              anim.remove(this.$overlay[0]);
              this._animateOut();
              return this;
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Modal2.__proto__ || Object.getPrototypeOf(Modal2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Modal;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Modal2;
        }(Component);
        Modal._modalsOpen = 0;
        Modal._count = 0;
        M.Modal = Modal;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Modal, "modal", "M_Modal");
        }
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          inDuration: 275,
          outDuration: 200,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null
        };
        var Materialbox = function(_Component4) {
          _inherits(Materialbox2, _Component4);
          function Materialbox2(el, options) {
            _classCallCheck(this, Materialbox2);
            var _this16 = _possibleConstructorReturn(this, (Materialbox2.__proto__ || Object.getPrototypeOf(Materialbox2)).call(this, Materialbox2, el, options));
            _this16.el.M_Materialbox = _this16;
            _this16.options = $2.extend({}, Materialbox2.defaults, options);
            _this16.overlayActive = false;
            _this16.doneAnimating = true;
            _this16.placeholder = $2("<div></div>").addClass("material-placeholder");
            _this16.originalWidth = 0;
            _this16.originalHeight = 0;
            _this16.originInlineStyles = _this16.$el.attr("style");
            _this16.caption = _this16.el.getAttribute("data-caption") || "";
            _this16.$el.before(_this16.placeholder);
            _this16.placeholder.append(_this16.$el);
            _this16._setupEventHandlers();
            return _this16;
          }
          _createClass2(Materialbox2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.M_Materialbox = void 0;
              $2(this.placeholder).after(this.el).remove();
              this.$el.removeAttr("style");
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleMaterialboxClickBound = this._handleMaterialboxClick.bind(this);
              this.el.addEventListener("click", this._handleMaterialboxClickBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("click", this._handleMaterialboxClickBound);
            }
            /**
             * Handle Materialbox Click
             * @param {Event} e
             */
          }, {
            key: "_handleMaterialboxClick",
            value: function _handleMaterialboxClick(e2) {
              if (this.doneAnimating === false || this.overlayActive && this.doneAnimating) {
                this.close();
              } else {
                this.open();
              }
            }
            /**
             * Handle Window Scroll
             */
          }, {
            key: "_handleWindowScroll",
            value: function _handleWindowScroll() {
              if (this.overlayActive) {
                this.close();
              }
            }
            /**
             * Handle Window Resize
             */
          }, {
            key: "_handleWindowResize",
            value: function _handleWindowResize() {
              if (this.overlayActive) {
                this.close();
              }
            }
            /**
             * Handle Window Resize
             * @param {Event} e
             */
          }, {
            key: "_handleWindowEscape",
            value: function _handleWindowEscape(e2) {
              if (e2.keyCode === 27 && this.doneAnimating && this.overlayActive) {
                this.close();
              }
            }
            /**
             * Find ancestors with overflow: hidden; and make visible
             */
          }, {
            key: "_makeAncestorsOverflowVisible",
            value: function _makeAncestorsOverflowVisible() {
              this.ancestorsChanged = $2();
              var ancestor = this.placeholder[0].parentNode;
              while (ancestor !== null && !$2(ancestor).is(document)) {
                var curr = $2(ancestor);
                if (curr.css("overflow") !== "visible") {
                  curr.css("overflow", "visible");
                  if (this.ancestorsChanged === void 0) {
                    this.ancestorsChanged = curr;
                  } else {
                    this.ancestorsChanged = this.ancestorsChanged.add(curr);
                  }
                }
                ancestor = ancestor.parentNode;
              }
            }
            /**
             * Animate image in
             */
          }, {
            key: "_animateImageIn",
            value: function _animateImageIn() {
              var _this17 = this;
              var animOptions = {
                targets: this.el,
                height: [this.originalHeight, this.newHeight],
                width: [this.originalWidth, this.newWidth],
                left: M.getDocumentScrollLeft() + this.windowWidth / 2 - this.placeholder.offset().left - this.newWidth / 2,
                top: M.getDocumentScrollTop() + this.windowHeight / 2 - this.placeholder.offset().top - this.newHeight / 2,
                duration: this.options.inDuration,
                easing: "easeOutQuad",
                complete: function() {
                  _this17.doneAnimating = true;
                  if (typeof _this17.options.onOpenEnd === "function") {
                    _this17.options.onOpenEnd.call(_this17, _this17.el);
                  }
                }
              };
              this.maxWidth = this.$el.css("max-width");
              this.maxHeight = this.$el.css("max-height");
              if (this.maxWidth !== "none") {
                animOptions.maxWidth = this.newWidth;
              }
              if (this.maxHeight !== "none") {
                animOptions.maxHeight = this.newHeight;
              }
              anim(animOptions);
            }
            /**
             * Animate image out
             */
          }, {
            key: "_animateImageOut",
            value: function _animateImageOut() {
              var _this18 = this;
              var animOptions = {
                targets: this.el,
                width: this.originalWidth,
                height: this.originalHeight,
                left: 0,
                top: 0,
                duration: this.options.outDuration,
                easing: "easeOutQuad",
                complete: function() {
                  _this18.placeholder.css({
                    height: "",
                    width: "",
                    position: "",
                    top: "",
                    left: ""
                  });
                  if (_this18.attrWidth) {
                    _this18.$el.attr("width", _this18.attrWidth);
                  }
                  if (_this18.attrHeight) {
                    _this18.$el.attr("height", _this18.attrHeight);
                  }
                  _this18.$el.removeAttr("style");
                  _this18.originInlineStyles && _this18.$el.attr("style", _this18.originInlineStyles);
                  _this18.$el.removeClass("active");
                  _this18.doneAnimating = true;
                  if (_this18.ancestorsChanged.length) {
                    _this18.ancestorsChanged.css("overflow", "");
                  }
                  if (typeof _this18.options.onCloseEnd === "function") {
                    _this18.options.onCloseEnd.call(_this18, _this18.el);
                  }
                }
              };
              anim(animOptions);
            }
            /**
             * Update open and close vars
             */
          }, {
            key: "_updateVars",
            value: function _updateVars() {
              this.windowWidth = window.innerWidth;
              this.windowHeight = window.innerHeight;
              this.caption = this.el.getAttribute("data-caption") || "";
            }
            /**
             * Open Materialbox
             */
          }, {
            key: "open",
            value: function open() {
              var _this19 = this;
              this._updateVars();
              this.originalWidth = this.el.getBoundingClientRect().width;
              this.originalHeight = this.el.getBoundingClientRect().height;
              this.doneAnimating = false;
              this.$el.addClass("active");
              this.overlayActive = true;
              if (typeof this.options.onOpenStart === "function") {
                this.options.onOpenStart.call(this, this.el);
              }
              this.placeholder.css({
                width: this.placeholder[0].getBoundingClientRect().width + "px",
                height: this.placeholder[0].getBoundingClientRect().height + "px",
                position: "relative",
                top: 0,
                left: 0
              });
              this._makeAncestorsOverflowVisible();
              this.$el.css({
                position: "absolute",
                "z-index": 1e3,
                "will-change": "left, top, width, height"
              });
              this.attrWidth = this.$el.attr("width");
              this.attrHeight = this.$el.attr("height");
              if (this.attrWidth) {
                this.$el.css("width", this.attrWidth + "px");
                this.$el.removeAttr("width");
              }
              if (this.attrHeight) {
                this.$el.css("width", this.attrHeight + "px");
                this.$el.removeAttr("height");
              }
              this.$overlay = $2('<div id="materialbox-overlay"></div>').css({
                opacity: 0
              }).one("click", function() {
                if (_this19.doneAnimating) {
                  _this19.close();
                }
              });
              this.$el.before(this.$overlay);
              var overlayOffset = this.$overlay[0].getBoundingClientRect();
              this.$overlay.css({
                width: this.windowWidth + "px",
                height: this.windowHeight + "px",
                left: -1 * overlayOffset.left + "px",
                top: -1 * overlayOffset.top + "px"
              });
              anim.remove(this.el);
              anim.remove(this.$overlay[0]);
              anim({
                targets: this.$overlay[0],
                opacity: 1,
                duration: this.options.inDuration,
                easing: "easeOutQuad"
              });
              if (this.caption !== "") {
                if (this.$photocaption) {
                  anim.remove(this.$photoCaption[0]);
                }
                this.$photoCaption = $2('<div class="materialbox-caption"></div>');
                this.$photoCaption.text(this.caption);
                $2("body").append(this.$photoCaption);
                this.$photoCaption.css({ display: "inline" });
                anim({
                  targets: this.$photoCaption[0],
                  opacity: 1,
                  duration: this.options.inDuration,
                  easing: "easeOutQuad"
                });
              }
              var ratio = 0;
              var widthPercent = this.originalWidth / this.windowWidth;
              var heightPercent = this.originalHeight / this.windowHeight;
              this.newWidth = 0;
              this.newHeight = 0;
              if (widthPercent > heightPercent) {
                ratio = this.originalHeight / this.originalWidth;
                this.newWidth = this.windowWidth * 0.9;
                this.newHeight = this.windowWidth * 0.9 * ratio;
              } else {
                ratio = this.originalWidth / this.originalHeight;
                this.newWidth = this.windowHeight * 0.9 * ratio;
                this.newHeight = this.windowHeight * 0.9;
              }
              this._animateImageIn();
              this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
              this._handleWindowResizeBound = this._handleWindowResize.bind(this);
              this._handleWindowEscapeBound = this._handleWindowEscape.bind(this);
              window.addEventListener("scroll", this._handleWindowScrollBound);
              window.addEventListener("resize", this._handleWindowResizeBound);
              window.addEventListener("keyup", this._handleWindowEscapeBound);
            }
            /**
             * Close Materialbox
             */
          }, {
            key: "close",
            value: function close() {
              var _this20 = this;
              this._updateVars();
              this.doneAnimating = false;
              if (typeof this.options.onCloseStart === "function") {
                this.options.onCloseStart.call(this, this.el);
              }
              anim.remove(this.el);
              anim.remove(this.$overlay[0]);
              if (this.caption !== "") {
                anim.remove(this.$photoCaption[0]);
              }
              window.removeEventListener("scroll", this._handleWindowScrollBound);
              window.removeEventListener("resize", this._handleWindowResizeBound);
              window.removeEventListener("keyup", this._handleWindowEscapeBound);
              anim({
                targets: this.$overlay[0],
                opacity: 0,
                duration: this.options.outDuration,
                easing: "easeOutQuad",
                complete: function() {
                  _this20.overlayActive = false;
                  _this20.$overlay.remove();
                }
              });
              this._animateImageOut();
              if (this.caption !== "") {
                anim({
                  targets: this.$photoCaption[0],
                  opacity: 0,
                  duration: this.options.outDuration,
                  easing: "easeOutQuad",
                  complete: function() {
                    _this20.$photoCaption.remove();
                  }
                });
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Materialbox2.__proto__ || Object.getPrototypeOf(Materialbox2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Materialbox;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Materialbox2;
        }(Component);
        M.Materialbox = Materialbox;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Materialbox, "materialbox", "M_Materialbox");
        }
      })(cash, M.anime);
      (function($2) {
        "use strict";
        var _defaults3 = {
          responsiveThreshold: 0
          // breakpoint for swipeable
        };
        var Parallax2 = function(_Component5) {
          _inherits(Parallax3, _Component5);
          function Parallax3(el, options) {
            _classCallCheck(this, Parallax3);
            var _this21 = _possibleConstructorReturn(this, (Parallax3.__proto__ || Object.getPrototypeOf(Parallax3)).call(this, Parallax3, el, options));
            _this21.el.M_Parallax = _this21;
            _this21.options = $2.extend({}, Parallax3.defaults, options);
            _this21._enabled = window.innerWidth > _this21.options.responsiveThreshold;
            _this21.$img = _this21.$el.find("img").first();
            _this21.$img.each(function() {
              var el2 = this;
              if (el2.complete)
                $2(el2).trigger("load");
            });
            _this21._updateParallax();
            _this21._setupEventHandlers();
            _this21._setupStyles();
            Parallax3._parallaxes.push(_this21);
            return _this21;
          }
          _createClass2(Parallax3, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              Parallax3._parallaxes.splice(Parallax3._parallaxes.indexOf(this), 1);
              this.$img[0].style.transform = "";
              this._removeEventHandlers();
              this.$el[0].M_Parallax = void 0;
            }
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleImageLoadBound = this._handleImageLoad.bind(this);
              this.$img[0].addEventListener("load", this._handleImageLoadBound);
              if (Parallax3._parallaxes.length === 0) {
                Parallax3._handleScrollThrottled = M.throttle(Parallax3._handleScroll, 5);
                window.addEventListener("scroll", Parallax3._handleScrollThrottled);
                Parallax3._handleWindowResizeThrottled = M.throttle(Parallax3._handleWindowResize, 5);
                window.addEventListener("resize", Parallax3._handleWindowResizeThrottled);
              }
            }
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.$img[0].removeEventListener("load", this._handleImageLoadBound);
              if (Parallax3._parallaxes.length === 0) {
                window.removeEventListener("scroll", Parallax3._handleScrollThrottled);
                window.removeEventListener("resize", Parallax3._handleWindowResizeThrottled);
              }
            }
          }, {
            key: "_setupStyles",
            value: function _setupStyles() {
              this.$img[0].style.opacity = 1;
            }
          }, {
            key: "_handleImageLoad",
            value: function _handleImageLoad() {
              this._updateParallax();
            }
          }, {
            key: "_updateParallax",
            value: function _updateParallax() {
              var containerHeight = this.$el.height() > 0 ? this.el.parentNode.offsetHeight : 500;
              var imgHeight = this.$img[0].offsetHeight;
              var parallaxDist = imgHeight - containerHeight;
              var bottom = this.$el.offset().top + containerHeight;
              var top = this.$el.offset().top;
              var scrollTop = M.getDocumentScrollTop();
              var windowHeight = window.innerHeight;
              var windowBottom = scrollTop + windowHeight;
              var percentScrolled = (windowBottom - top) / (containerHeight + windowHeight);
              var parallax = parallaxDist * percentScrolled;
              if (!this._enabled) {
                this.$img[0].style.transform = "";
              } else if (bottom > scrollTop && top < scrollTop + windowHeight) {
                this.$img[0].style.transform = "translate3D(-50%, " + parallax + "px, 0)";
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Parallax3.__proto__ || Object.getPrototypeOf(Parallax3), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Parallax;
            }
          }, {
            key: "_handleScroll",
            value: function _handleScroll() {
              for (var i3 = 0; i3 < Parallax3._parallaxes.length; i3++) {
                var parallaxInstance = Parallax3._parallaxes[i3];
                parallaxInstance._updateParallax.call(parallaxInstance);
              }
            }
          }, {
            key: "_handleWindowResize",
            value: function _handleWindowResize() {
              for (var i3 = 0; i3 < Parallax3._parallaxes.length; i3++) {
                var parallaxInstance = Parallax3._parallaxes[i3];
                parallaxInstance._enabled = window.innerWidth > parallaxInstance.options.responsiveThreshold;
              }
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Parallax3;
        }(Component);
        Parallax2._parallaxes = [];
        M.Parallax = Parallax2;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Parallax2, "parallax", "M_Parallax");
        }
      })(cash);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          duration: 300,
          onShow: null,
          swipeable: false,
          responsiveThreshold: Infinity
          // breakpoint for swipeable
        };
        var Tabs = function(_Component6) {
          _inherits(Tabs2, _Component6);
          function Tabs2(el, options) {
            _classCallCheck(this, Tabs2);
            var _this22 = _possibleConstructorReturn(this, (Tabs2.__proto__ || Object.getPrototypeOf(Tabs2)).call(this, Tabs2, el, options));
            _this22.el.M_Tabs = _this22;
            _this22.options = $2.extend({}, Tabs2.defaults, options);
            _this22.$tabLinks = _this22.$el.children("li.tab").children("a");
            _this22.index = 0;
            _this22._setupActiveTabLink();
            if (_this22.options.swipeable) {
              _this22._setupSwipeableTabs();
            } else {
              _this22._setupNormalTabs();
            }
            _this22._setTabsAndTabWidth();
            _this22._createIndicator();
            _this22._setupEventHandlers();
            return _this22;
          }
          _createClass2(Tabs2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this._indicator.parentNode.removeChild(this._indicator);
              if (this.options.swipeable) {
                this._teardownSwipeableTabs();
              } else {
                this._teardownNormalTabs();
              }
              this.$el[0].M_Tabs = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleWindowResizeBound = this._handleWindowResize.bind(this);
              window.addEventListener("resize", this._handleWindowResizeBound);
              this._handleTabClickBound = this._handleTabClick.bind(this);
              this.el.addEventListener("click", this._handleTabClickBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              window.removeEventListener("resize", this._handleWindowResizeBound);
              this.el.removeEventListener("click", this._handleTabClickBound);
            }
            /**
             * Handle window Resize
             */
          }, {
            key: "_handleWindowResize",
            value: function _handleWindowResize() {
              this._setTabsAndTabWidth();
              if (this.tabWidth !== 0 && this.tabsWidth !== 0) {
                this._indicator.style.left = this._calcLeftPos(this.$activeTabLink) + "px";
                this._indicator.style.right = this._calcRightPos(this.$activeTabLink) + "px";
              }
            }
            /**
             * Handle tab click
             * @param {Event} e
             */
          }, {
            key: "_handleTabClick",
            value: function _handleTabClick(e2) {
              var _this23 = this;
              var tab = $2(e2.target).closest("li.tab");
              var tabLink = $2(e2.target).closest("a");
              if (!tabLink.length || !tabLink.parent().hasClass("tab")) {
                return;
              }
              if (tab.hasClass("disabled")) {
                e2.preventDefault();
                return;
              }
              if (!!tabLink.attr("target")) {
                return;
              }
              this.$activeTabLink.removeClass("active");
              var $oldContent = this.$content;
              this.$activeTabLink = tabLink;
              this.$content = $2(M.escapeHash(tabLink[0].hash));
              this.$tabLinks = this.$el.children("li.tab").children("a");
              this.$activeTabLink.addClass("active");
              var prevIndex = this.index;
              this.index = Math.max(this.$tabLinks.index(tabLink), 0);
              if (this.options.swipeable) {
                if (this._tabsCarousel) {
                  this._tabsCarousel.set(this.index, function() {
                    if (typeof _this23.options.onShow === "function") {
                      _this23.options.onShow.call(_this23, _this23.$content[0]);
                    }
                  });
                }
              } else {
                if (this.$content.length) {
                  this.$content[0].style.display = "block";
                  this.$content.addClass("active");
                  if (typeof this.options.onShow === "function") {
                    this.options.onShow.call(this, this.$content[0]);
                  }
                  if ($oldContent.length && !$oldContent.is(this.$content)) {
                    $oldContent[0].style.display = "none";
                    $oldContent.removeClass("active");
                  }
                }
              }
              this._setTabsAndTabWidth();
              this._animateIndicator(prevIndex);
              e2.preventDefault();
            }
            /**
             * Generate elements for tab indicator.
             */
          }, {
            key: "_createIndicator",
            value: function _createIndicator() {
              var _this24 = this;
              var indicator = document.createElement("li");
              indicator.classList.add("indicator");
              this.el.appendChild(indicator);
              this._indicator = indicator;
              setTimeout(function() {
                _this24._indicator.style.left = _this24._calcLeftPos(_this24.$activeTabLink) + "px";
                _this24._indicator.style.right = _this24._calcRightPos(_this24.$activeTabLink) + "px";
              }, 0);
            }
            /**
             * Setup first active tab link.
             */
          }, {
            key: "_setupActiveTabLink",
            value: function _setupActiveTabLink() {
              this.$activeTabLink = $2(this.$tabLinks.filter('[href="' + location.hash + '"]'));
              if (this.$activeTabLink.length === 0) {
                this.$activeTabLink = this.$el.children("li.tab").children("a.active").first();
              }
              if (this.$activeTabLink.length === 0) {
                this.$activeTabLink = this.$el.children("li.tab").children("a").first();
              }
              this.$tabLinks.removeClass("active");
              this.$activeTabLink[0].classList.add("active");
              this.index = Math.max(this.$tabLinks.index(this.$activeTabLink), 0);
              if (this.$activeTabLink.length) {
                this.$content = $2(M.escapeHash(this.$activeTabLink[0].hash));
                this.$content.addClass("active");
              }
            }
            /**
             * Setup swipeable tabs
             */
          }, {
            key: "_setupSwipeableTabs",
            value: function _setupSwipeableTabs() {
              var _this25 = this;
              if (window.innerWidth > this.options.responsiveThreshold) {
                this.options.swipeable = false;
              }
              var $tabsContent = $2();
              this.$tabLinks.each(function(link) {
                var $currContent = $2(M.escapeHash(link.hash));
                $currContent.addClass("carousel-item");
                $tabsContent = $tabsContent.add($currContent);
              });
              var $tabsWrapper = $2('<div class="tabs-content carousel carousel-slider"></div>');
              $tabsContent.first().before($tabsWrapper);
              $tabsWrapper.append($tabsContent);
              $tabsContent[0].style.display = "";
              var activeTabIndex = this.$activeTabLink.closest(".tab").index();
              this._tabsCarousel = M.Carousel.init($tabsWrapper[0], {
                fullWidth: true,
                noWrap: true,
                onCycleTo: function(item) {
                  var prevIndex = _this25.index;
                  _this25.index = $2(item).index();
                  _this25.$activeTabLink.removeClass("active");
                  _this25.$activeTabLink = _this25.$tabLinks.eq(_this25.index);
                  _this25.$activeTabLink.addClass("active");
                  _this25._animateIndicator(prevIndex);
                  if (typeof _this25.options.onShow === "function") {
                    _this25.options.onShow.call(_this25, _this25.$content[0]);
                  }
                }
              });
              this._tabsCarousel.set(activeTabIndex);
            }
            /**
             * Teardown normal tabs.
             */
          }, {
            key: "_teardownSwipeableTabs",
            value: function _teardownSwipeableTabs() {
              var $tabsWrapper = this._tabsCarousel.$el;
              this._tabsCarousel.destroy();
              $tabsWrapper.after($tabsWrapper.children());
              $tabsWrapper.remove();
            }
            /**
             * Setup normal tabs.
             */
          }, {
            key: "_setupNormalTabs",
            value: function _setupNormalTabs() {
              this.$tabLinks.not(this.$activeTabLink).each(function(link) {
                if (!!link.hash) {
                  var $currContent = $2(M.escapeHash(link.hash));
                  if ($currContent.length) {
                    $currContent[0].style.display = "none";
                  }
                }
              });
            }
            /**
             * Teardown normal tabs.
             */
          }, {
            key: "_teardownNormalTabs",
            value: function _teardownNormalTabs() {
              this.$tabLinks.each(function(link) {
                if (!!link.hash) {
                  var $currContent = $2(M.escapeHash(link.hash));
                  if ($currContent.length) {
                    $currContent[0].style.display = "";
                  }
                }
              });
            }
            /**
             * set tabs and tab width
             */
          }, {
            key: "_setTabsAndTabWidth",
            value: function _setTabsAndTabWidth() {
              this.tabsWidth = this.$el.width();
              this.tabWidth = Math.max(this.tabsWidth, this.el.scrollWidth) / this.$tabLinks.length;
            }
            /**
             * Finds right attribute for indicator based on active tab.
             * @param {cash} el
             */
          }, {
            key: "_calcRightPos",
            value: function _calcRightPos(el) {
              return Math.ceil(this.tabsWidth - el.position().left - el[0].getBoundingClientRect().width);
            }
            /**
             * Finds left attribute for indicator based on active tab.
             * @param {cash} el
             */
          }, {
            key: "_calcLeftPos",
            value: function _calcLeftPos(el) {
              return Math.floor(el.position().left);
            }
          }, {
            key: "updateTabIndicator",
            value: function updateTabIndicator() {
              this._setTabsAndTabWidth();
              this._animateIndicator(this.index);
            }
            /**
             * Animates Indicator to active tab.
             * @param {Number} prevIndex
             */
          }, {
            key: "_animateIndicator",
            value: function _animateIndicator(prevIndex) {
              var leftDelay = 0, rightDelay = 0;
              if (this.index - prevIndex >= 0) {
                leftDelay = 90;
              } else {
                rightDelay = 90;
              }
              var animOptions = {
                targets: this._indicator,
                left: {
                  value: this._calcLeftPos(this.$activeTabLink),
                  delay: leftDelay
                },
                right: {
                  value: this._calcRightPos(this.$activeTabLink),
                  delay: rightDelay
                },
                duration: this.options.duration,
                easing: "easeOutQuad"
              };
              anim.remove(this._indicator);
              anim(animOptions);
            }
            /**
             * Select tab.
             * @param {String} tabId
             */
          }, {
            key: "select",
            value: function select(tabId) {
              var tab = this.$tabLinks.filter('[href="#' + tabId + '"]');
              if (tab.length) {
                tab.trigger("click");
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Tabs2.__proto__ || Object.getPrototypeOf(Tabs2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Tabs;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Tabs2;
        }(Component);
        window.M.Tabs = Tabs;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Tabs, "tabs", "M_Tabs");
        }
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          exitDelay: 200,
          enterDelay: 0,
          html: null,
          margin: 5,
          inDuration: 250,
          outDuration: 200,
          position: "bottom",
          transitionMovement: 10
        };
        var Tooltip = function(_Component7) {
          _inherits(Tooltip2, _Component7);
          function Tooltip2(el, options) {
            _classCallCheck(this, Tooltip2);
            var _this26 = _possibleConstructorReturn(this, (Tooltip2.__proto__ || Object.getPrototypeOf(Tooltip2)).call(this, Tooltip2, el, options));
            _this26.el.M_Tooltip = _this26;
            _this26.options = $2.extend({}, Tooltip2.defaults, options);
            _this26.isOpen = false;
            _this26.isHovered = false;
            _this26.isFocused = false;
            _this26._appendTooltipEl();
            _this26._setupEventHandlers();
            return _this26;
          }
          _createClass2(Tooltip2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              $2(this.tooltipEl).remove();
              this._removeEventHandlers();
              this.el.M_Tooltip = void 0;
            }
          }, {
            key: "_appendTooltipEl",
            value: function _appendTooltipEl() {
              var tooltipEl = document.createElement("div");
              tooltipEl.classList.add("material-tooltip");
              this.tooltipEl = tooltipEl;
              var tooltipContentEl = document.createElement("div");
              tooltipContentEl.classList.add("tooltip-content");
              tooltipContentEl.innerHTML = this.options.html;
              tooltipEl.appendChild(tooltipContentEl);
              document.body.appendChild(tooltipEl);
            }
          }, {
            key: "_updateTooltipContent",
            value: function _updateTooltipContent() {
              this.tooltipEl.querySelector(".tooltip-content").innerHTML = this.options.html;
            }
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleMouseEnterBound = this._handleMouseEnter.bind(this);
              this._handleMouseLeaveBound = this._handleMouseLeave.bind(this);
              this._handleFocusBound = this._handleFocus.bind(this);
              this._handleBlurBound = this._handleBlur.bind(this);
              this.el.addEventListener("mouseenter", this._handleMouseEnterBound);
              this.el.addEventListener("mouseleave", this._handleMouseLeaveBound);
              this.el.addEventListener("focus", this._handleFocusBound, true);
              this.el.addEventListener("blur", this._handleBlurBound, true);
            }
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("mouseenter", this._handleMouseEnterBound);
              this.el.removeEventListener("mouseleave", this._handleMouseLeaveBound);
              this.el.removeEventListener("focus", this._handleFocusBound, true);
              this.el.removeEventListener("blur", this._handleBlurBound, true);
            }
          }, {
            key: "open",
            value: function open(isManual) {
              if (this.isOpen) {
                return;
              }
              isManual = isManual === void 0 ? true : void 0;
              this.isOpen = true;
              this.options = $2.extend({}, this.options, this._getAttributeOptions());
              this._updateTooltipContent();
              this._setEnterDelayTimeout(isManual);
            }
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              this.isHovered = false;
              this.isFocused = false;
              this.isOpen = false;
              this._setExitDelayTimeout();
            }
            /**
             * Create timeout which delays when the tooltip closes
             */
          }, {
            key: "_setExitDelayTimeout",
            value: function _setExitDelayTimeout() {
              var _this27 = this;
              clearTimeout(this._exitDelayTimeout);
              this._exitDelayTimeout = setTimeout(function() {
                if (_this27.isHovered || _this27.isFocused) {
                  return;
                }
                _this27._animateOut();
              }, this.options.exitDelay);
            }
            /**
             * Create timeout which delays when the toast closes
             */
          }, {
            key: "_setEnterDelayTimeout",
            value: function _setEnterDelayTimeout(isManual) {
              var _this28 = this;
              clearTimeout(this._enterDelayTimeout);
              this._enterDelayTimeout = setTimeout(function() {
                if (!_this28.isHovered && !_this28.isFocused && !isManual) {
                  return;
                }
                _this28._animateIn();
              }, this.options.enterDelay);
            }
          }, {
            key: "_positionTooltip",
            value: function _positionTooltip() {
              var origin = this.el, tooltip = this.tooltipEl, originHeight = origin.offsetHeight, originWidth = origin.offsetWidth, tooltipHeight = tooltip.offsetHeight, tooltipWidth = tooltip.offsetWidth, newCoordinates = void 0, margin = this.options.margin, targetTop = void 0, targetLeft = void 0;
              this.xMovement = 0, this.yMovement = 0;
              targetTop = origin.getBoundingClientRect().top + M.getDocumentScrollTop();
              targetLeft = origin.getBoundingClientRect().left + M.getDocumentScrollLeft();
              if (this.options.position === "top") {
                targetTop += -tooltipHeight - margin;
                targetLeft += originWidth / 2 - tooltipWidth / 2;
                this.yMovement = -this.options.transitionMovement;
              } else if (this.options.position === "right") {
                targetTop += originHeight / 2 - tooltipHeight / 2;
                targetLeft += originWidth + margin;
                this.xMovement = this.options.transitionMovement;
              } else if (this.options.position === "left") {
                targetTop += originHeight / 2 - tooltipHeight / 2;
                targetLeft += -tooltipWidth - margin;
                this.xMovement = -this.options.transitionMovement;
              } else {
                targetTop += originHeight + margin;
                targetLeft += originWidth / 2 - tooltipWidth / 2;
                this.yMovement = this.options.transitionMovement;
              }
              newCoordinates = this._repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
              $2(tooltip).css({
                top: newCoordinates.y + "px",
                left: newCoordinates.x + "px"
              });
            }
          }, {
            key: "_repositionWithinScreen",
            value: function _repositionWithinScreen(x2, y, width, height) {
              var scrollLeft = M.getDocumentScrollLeft();
              var scrollTop = M.getDocumentScrollTop();
              var newX = x2 - scrollLeft;
              var newY = y - scrollTop;
              var bounding = {
                left: newX,
                top: newY,
                width,
                height
              };
              var offset = this.options.margin + this.options.transitionMovement;
              var edges = M.checkWithinContainer(document.body, bounding, offset);
              if (edges.left) {
                newX = offset;
              } else if (edges.right) {
                newX -= newX + width - window.innerWidth;
              }
              if (edges.top) {
                newY = offset;
              } else if (edges.bottom) {
                newY -= newY + height - window.innerHeight;
              }
              return {
                x: newX + scrollLeft,
                y: newY + scrollTop
              };
            }
          }, {
            key: "_animateIn",
            value: function _animateIn() {
              this._positionTooltip();
              this.tooltipEl.style.visibility = "visible";
              anim.remove(this.tooltipEl);
              anim({
                targets: this.tooltipEl,
                opacity: 1,
                translateX: this.xMovement,
                translateY: this.yMovement,
                duration: this.options.inDuration,
                easing: "easeOutCubic"
              });
            }
          }, {
            key: "_animateOut",
            value: function _animateOut() {
              anim.remove(this.tooltipEl);
              anim({
                targets: this.tooltipEl,
                opacity: 0,
                translateX: 0,
                translateY: 0,
                duration: this.options.outDuration,
                easing: "easeOutCubic"
              });
            }
          }, {
            key: "_handleMouseEnter",
            value: function _handleMouseEnter() {
              this.isHovered = true;
              this.isFocused = false;
              this.open(false);
            }
          }, {
            key: "_handleMouseLeave",
            value: function _handleMouseLeave() {
              this.isHovered = false;
              this.isFocused = false;
              this.close();
            }
          }, {
            key: "_handleFocus",
            value: function _handleFocus() {
              if (M.tabPressed) {
                this.isFocused = true;
                this.open(false);
              }
            }
          }, {
            key: "_handleBlur",
            value: function _handleBlur() {
              this.isFocused = false;
              this.close();
            }
          }, {
            key: "_getAttributeOptions",
            value: function _getAttributeOptions() {
              var attributeOptions = {};
              var tooltipTextOption = this.el.getAttribute("data-tooltip");
              var positionOption = this.el.getAttribute("data-position");
              if (tooltipTextOption) {
                attributeOptions.html = tooltipTextOption;
              }
              if (positionOption) {
                attributeOptions.position = positionOption;
              }
              return attributeOptions;
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Tooltip2.__proto__ || Object.getPrototypeOf(Tooltip2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Tooltip;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Tooltip2;
        }(Component);
        M.Tooltip = Tooltip;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Tooltip, "tooltip", "M_Tooltip");
        }
      })(cash, M.anime);
      (function(window2) {
        "use strict";
        var Waves = Waves || {};
        var $$ = document.querySelectorAll.bind(document);
        function isWindow(obj) {
          return obj !== null && obj === obj.window;
        }
        function getWindow2(elem) {
          return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
        }
        function offset(elem) {
          var docElem, win, box = { top: 0, left: 0 }, doc = elem && elem.ownerDocument;
          docElem = doc.documentElement;
          if (typeof elem.getBoundingClientRect !== "undefined") {
            box = elem.getBoundingClientRect();
          }
          win = getWindow2(doc);
          return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
          };
        }
        function convertStyle(obj) {
          var style = "";
          for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
              style += a + ":" + obj[a] + ";";
            }
          }
          return style;
        }
        var Effect = {
          // Effect delay
          duration: 750,
          show: function(e2, element) {
            if (e2.button === 2) {
              return false;
            }
            var el = element || this;
            var ripple = document.createElement("div");
            ripple.className = "waves-ripple";
            el.appendChild(ripple);
            var pos = offset(el);
            var relativeY = e2.pageY - pos.top;
            var relativeX = e2.pageX - pos.left;
            var scale = "scale(" + el.clientWidth / 100 * 10 + ")";
            if ("touches" in e2) {
              relativeY = e2.touches[0].pageY - pos.top;
              relativeX = e2.touches[0].pageX - pos.left;
            }
            ripple.setAttribute("data-hold", Date.now());
            ripple.setAttribute("data-scale", scale);
            ripple.setAttribute("data-x", relativeX);
            ripple.setAttribute("data-y", relativeY);
            var rippleStyle = {
              "top": relativeY + "px",
              "left": relativeX + "px"
            };
            ripple.className = ripple.className + " waves-notransition";
            ripple.setAttribute("style", convertStyle(rippleStyle));
            ripple.className = ripple.className.replace("waves-notransition", "");
            rippleStyle["-webkit-transform"] = scale;
            rippleStyle["-moz-transform"] = scale;
            rippleStyle["-ms-transform"] = scale;
            rippleStyle["-o-transform"] = scale;
            rippleStyle.transform = scale;
            rippleStyle.opacity = "1";
            rippleStyle["-webkit-transition-duration"] = Effect.duration + "ms";
            rippleStyle["-moz-transition-duration"] = Effect.duration + "ms";
            rippleStyle["-o-transition-duration"] = Effect.duration + "ms";
            rippleStyle["transition-duration"] = Effect.duration + "ms";
            rippleStyle["-webkit-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
            rippleStyle["-moz-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
            rippleStyle["-o-transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
            rippleStyle["transition-timing-function"] = "cubic-bezier(0.250, 0.460, 0.450, 0.940)";
            ripple.setAttribute("style", convertStyle(rippleStyle));
          },
          hide: function(e2) {
            TouchHandler.touchup(e2);
            var el = this;
            var width = el.clientWidth * 1.4;
            var ripple = null;
            var ripples = el.getElementsByClassName("waves-ripple");
            if (ripples.length > 0) {
              ripple = ripples[ripples.length - 1];
            } else {
              return false;
            }
            var relativeX = ripple.getAttribute("data-x");
            var relativeY = ripple.getAttribute("data-y");
            var scale = ripple.getAttribute("data-scale");
            var diff = Date.now() - Number(ripple.getAttribute("data-hold"));
            var delay = 350 - diff;
            if (delay < 0) {
              delay = 0;
            }
            setTimeout(function() {
              var style = {
                "top": relativeY + "px",
                "left": relativeX + "px",
                "opacity": "0",
                // Duration
                "-webkit-transition-duration": Effect.duration + "ms",
                "-moz-transition-duration": Effect.duration + "ms",
                "-o-transition-duration": Effect.duration + "ms",
                "transition-duration": Effect.duration + "ms",
                "-webkit-transform": scale,
                "-moz-transform": scale,
                "-ms-transform": scale,
                "-o-transform": scale,
                "transform": scale
              };
              ripple.setAttribute("style", convertStyle(style));
              setTimeout(function() {
                try {
                  el.removeChild(ripple);
                } catch (e3) {
                  return false;
                }
              }, Effect.duration);
            }, delay);
          },
          // Little hack to make <input> can perform waves effect
          wrapInput: function(elements) {
            for (var a = 0; a < elements.length; a++) {
              var el = elements[a];
              if (el.tagName.toLowerCase() === "input") {
                var parent = el.parentNode;
                if (parent.tagName.toLowerCase() === "i" && parent.className.indexOf("waves-effect") !== -1) {
                  continue;
                }
                var wrapper = document.createElement("i");
                wrapper.className = el.className + " waves-input-wrapper";
                var elementStyle2 = el.getAttribute("style");
                if (!elementStyle2) {
                  elementStyle2 = "";
                }
                wrapper.setAttribute("style", elementStyle2);
                el.className = "waves-button-input";
                el.removeAttribute("style");
                parent.replaceChild(wrapper, el);
                wrapper.appendChild(el);
              }
            }
          }
        };
        var TouchHandler = {
          /* uses an integer rather than bool so there's no issues with
           * needing to clear timeouts if another touch event occurred
           * within the 500ms. Cannot mouseup between touchstart and
           * touchend, nor in the 500ms after touchend. */
          touches: 0,
          allowEvent: function(e2) {
            var allow = true;
            if (e2.type === "touchstart") {
              TouchHandler.touches += 1;
            } else if (e2.type === "touchend" || e2.type === "touchcancel") {
              setTimeout(function() {
                if (TouchHandler.touches > 0) {
                  TouchHandler.touches -= 1;
                }
              }, 500);
            } else if (e2.type === "mousedown" && TouchHandler.touches > 0) {
              allow = false;
            }
            return allow;
          },
          touchup: function(e2) {
            TouchHandler.allowEvent(e2);
          }
        };
        function getWavesEffectElement(e2) {
          if (TouchHandler.allowEvent(e2) === false) {
            return null;
          }
          var element = null;
          var target = e2.target || e2.srcElement;
          while (target.parentNode !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf("waves-effect") !== -1) {
              element = target;
              break;
            }
            target = target.parentNode;
          }
          return element;
        }
        function showEffect(e2) {
          var element = getWavesEffectElement(e2);
          if (element !== null) {
            Effect.show(e2, element);
            if ("ontouchstart" in window2) {
              element.addEventListener("touchend", Effect.hide, false);
              element.addEventListener("touchcancel", Effect.hide, false);
            }
            element.addEventListener("mouseup", Effect.hide, false);
            element.addEventListener("mouseleave", Effect.hide, false);
            element.addEventListener("dragend", Effect.hide, false);
          }
        }
        Waves.displayEffect = function(options) {
          options = options || {};
          if ("duration" in options) {
            Effect.duration = options.duration;
          }
          Effect.wrapInput($$(".waves-effect"));
          if ("ontouchstart" in window2) {
            document.body.addEventListener("touchstart", showEffect, false);
          }
          document.body.addEventListener("mousedown", showEffect, false);
        };
        Waves.attach = function(element) {
          if (element.tagName.toLowerCase() === "input") {
            Effect.wrapInput([element]);
            element = element.parentNode;
          }
          if ("ontouchstart" in window2) {
            element.addEventListener("touchstart", showEffect, false);
          }
          element.addEventListener("mousedown", showEffect, false);
        };
        window2.Waves = Waves;
        document.addEventListener("DOMContentLoaded", function() {
          Waves.displayEffect();
        }, false);
      })(window);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          html: "",
          displayLength: 4e3,
          inDuration: 300,
          outDuration: 375,
          classes: "",
          completeCallback: null,
          activationPercent: 0.8
        };
        var Toast = function() {
          function Toast2(options) {
            _classCallCheck(this, Toast2);
            this.options = $2.extend({}, Toast2.defaults, options);
            this.message = this.options.html;
            this.panning = false;
            this.timeRemaining = this.options.displayLength;
            if (Toast2._toasts.length === 0) {
              Toast2._createContainer();
            }
            Toast2._toasts.push(this);
            var toastElement = this._createToast();
            toastElement.M_Toast = this;
            this.el = toastElement;
            this.$el = $2(toastElement);
            this._animateIn();
            this._setTimer();
          }
          _createClass2(Toast2, [{
            key: "_createToast",
            /**
             * Create toast and append it to toast container
             */
            value: function _createToast() {
              var toast = document.createElement("div");
              toast.classList.add("toast");
              if (!!this.options.classes.length) {
                $2(toast).addClass(this.options.classes);
              }
              if (typeof HTMLElement === "object" ? this.message instanceof HTMLElement : this.message && typeof this.message === "object" && this.message !== null && this.message.nodeType === 1 && typeof this.message.nodeName === "string") {
                toast.appendChild(this.message);
              } else if (!!this.message.jquery) {
                $2(toast).append(this.message[0]);
              } else {
                toast.innerHTML = this.message;
              }
              Toast2._container.appendChild(toast);
              return toast;
            }
            /**
             * Animate in toast
             */
          }, {
            key: "_animateIn",
            value: function _animateIn() {
              anim({
                targets: this.el,
                top: 0,
                opacity: 1,
                duration: this.options.inDuration,
                easing: "easeOutCubic"
              });
            }
            /**
             * Create setInterval which automatically removes toast when timeRemaining >= 0
             * has been reached
             */
          }, {
            key: "_setTimer",
            value: function _setTimer() {
              var _this29 = this;
              if (this.timeRemaining !== Infinity) {
                this.counterInterval = setInterval(function() {
                  if (!_this29.panning) {
                    _this29.timeRemaining -= 20;
                  }
                  if (_this29.timeRemaining <= 0) {
                    _this29.dismiss();
                  }
                }, 20);
              }
            }
            /**
             * Dismiss toast with animation
             */
          }, {
            key: "dismiss",
            value: function dismiss() {
              var _this30 = this;
              window.clearInterval(this.counterInterval);
              var activationDistance = this.el.offsetWidth * this.options.activationPercent;
              if (this.wasSwiped) {
                this.el.style.transition = "transform .05s, opacity .05s";
                this.el.style.transform = "translateX(" + activationDistance + "px)";
                this.el.style.opacity = 0;
              }
              anim({
                targets: this.el,
                opacity: 0,
                marginTop: -40,
                duration: this.options.outDuration,
                easing: "easeOutExpo",
                complete: function() {
                  if (typeof _this30.options.completeCallback === "function") {
                    _this30.options.completeCallback();
                  }
                  _this30.$el.remove();
                  Toast2._toasts.splice(Toast2._toasts.indexOf(_this30), 1);
                  if (Toast2._toasts.length === 0) {
                    Toast2._removeContainer();
                  }
                }
              });
            }
          }], [{
            key: "getInstance",
            /**
             * Get Instance
             */
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Toast;
            }
            /**
             * Append toast container and add event handlers
             */
          }, {
            key: "_createContainer",
            value: function _createContainer() {
              var container = document.createElement("div");
              container.setAttribute("id", "toast-container");
              container.addEventListener("touchstart", Toast2._onDragStart);
              container.addEventListener("touchmove", Toast2._onDragMove);
              container.addEventListener("touchend", Toast2._onDragEnd);
              container.addEventListener("mousedown", Toast2._onDragStart);
              document.addEventListener("mousemove", Toast2._onDragMove);
              document.addEventListener("mouseup", Toast2._onDragEnd);
              document.body.appendChild(container);
              Toast2._container = container;
            }
            /**
             * Remove toast container and event handlers
             */
          }, {
            key: "_removeContainer",
            value: function _removeContainer() {
              document.removeEventListener("mousemove", Toast2._onDragMove);
              document.removeEventListener("mouseup", Toast2._onDragEnd);
              $2(Toast2._container).remove();
              Toast2._container = null;
            }
            /**
             * Begin drag handler
             * @param {Event} e
             */
          }, {
            key: "_onDragStart",
            value: function _onDragStart(e2) {
              if (e2.target && $2(e2.target).closest(".toast").length) {
                var $toast = $2(e2.target).closest(".toast");
                var toast = $toast[0].M_Toast;
                toast.panning = true;
                Toast2._draggedToast = toast;
                toast.el.classList.add("panning");
                toast.el.style.transition = "";
                toast.startingXPos = Toast2._xPos(e2);
                toast.time = Date.now();
                toast.xPos = Toast2._xPos(e2);
              }
            }
            /**
             * Drag move handler
             * @param {Event} e
             */
          }, {
            key: "_onDragMove",
            value: function _onDragMove(e2) {
              if (!!Toast2._draggedToast) {
                e2.preventDefault();
                var toast = Toast2._draggedToast;
                toast.deltaX = Math.abs(toast.xPos - Toast2._xPos(e2));
                toast.xPos = Toast2._xPos(e2);
                toast.velocityX = toast.deltaX / (Date.now() - toast.time);
                toast.time = Date.now();
                var totalDeltaX = toast.xPos - toast.startingXPos;
                var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
                toast.el.style.transform = "translateX(" + totalDeltaX + "px)";
                toast.el.style.opacity = 1 - Math.abs(totalDeltaX / activationDistance);
              }
            }
            /**
             * End drag handler
             */
          }, {
            key: "_onDragEnd",
            value: function _onDragEnd() {
              if (!!Toast2._draggedToast) {
                var toast = Toast2._draggedToast;
                toast.panning = false;
                toast.el.classList.remove("panning");
                var totalDeltaX = toast.xPos - toast.startingXPos;
                var activationDistance = toast.el.offsetWidth * toast.options.activationPercent;
                var shouldBeDismissed = Math.abs(totalDeltaX) > activationDistance || toast.velocityX > 1;
                if (shouldBeDismissed) {
                  toast.wasSwiped = true;
                  toast.dismiss();
                } else {
                  toast.el.style.transition = "transform .2s, opacity .2s";
                  toast.el.style.transform = "";
                  toast.el.style.opacity = "";
                }
                Toast2._draggedToast = null;
              }
            }
            /**
             * Get x position of mouse or touch event
             * @param {Event} e
             */
          }, {
            key: "_xPos",
            value: function _xPos(e2) {
              if (e2.targetTouches && e2.targetTouches.length >= 1) {
                return e2.targetTouches[0].clientX;
              }
              return e2.clientX;
            }
            /**
             * Remove all toasts
             */
          }, {
            key: "dismissAll",
            value: function dismissAll() {
              for (var toastIndex in Toast2._toasts) {
                Toast2._toasts[toastIndex].dismiss();
              }
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Toast2;
        }();
        Toast._toasts = [];
        Toast._container = null;
        Toast._draggedToast = null;
        M.Toast = Toast;
        M.toast = function(options) {
          return new Toast(options);
        };
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          edge: "left",
          draggable: true,
          inDuration: 250,
          outDuration: 200,
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          preventScrolling: true
        };
        var Sidenav = function(_Component8) {
          _inherits(Sidenav2, _Component8);
          function Sidenav2(el, options) {
            _classCallCheck(this, Sidenav2);
            var _this31 = _possibleConstructorReturn(this, (Sidenav2.__proto__ || Object.getPrototypeOf(Sidenav2)).call(this, Sidenav2, el, options));
            _this31.el.M_Sidenav = _this31;
            _this31.id = _this31.$el.attr("id");
            _this31.options = $2.extend({}, Sidenav2.defaults, options);
            _this31.isOpen = false;
            _this31.isFixed = _this31.el.classList.contains("sidenav-fixed");
            _this31.isDragged = false;
            _this31.lastWindowWidth = window.innerWidth;
            _this31.lastWindowHeight = window.innerHeight;
            _this31._createOverlay();
            _this31._createDragTarget();
            _this31._setupEventHandlers();
            _this31._setupClasses();
            _this31._setupFixed();
            Sidenav2._sidenavs.push(_this31);
            return _this31;
          }
          _createClass2(Sidenav2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this._enableBodyScrolling();
              this._overlay.parentNode.removeChild(this._overlay);
              this.dragTarget.parentNode.removeChild(this.dragTarget);
              this.el.M_Sidenav = void 0;
              this.el.style.transform = "";
              var index = Sidenav2._sidenavs.indexOf(this);
              if (index >= 0) {
                Sidenav2._sidenavs.splice(index, 1);
              }
            }
          }, {
            key: "_createOverlay",
            value: function _createOverlay() {
              var overlay = document.createElement("div");
              this._closeBound = this.close.bind(this);
              overlay.classList.add("sidenav-overlay");
              overlay.addEventListener("click", this._closeBound);
              document.body.appendChild(overlay);
              this._overlay = overlay;
            }
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              if (Sidenav2._sidenavs.length === 0) {
                document.body.addEventListener("click", this._handleTriggerClick);
              }
              this._handleDragTargetDragBound = this._handleDragTargetDrag.bind(this);
              this._handleDragTargetReleaseBound = this._handleDragTargetRelease.bind(this);
              this._handleCloseDragBound = this._handleCloseDrag.bind(this);
              this._handleCloseReleaseBound = this._handleCloseRelease.bind(this);
              this._handleCloseTriggerClickBound = this._handleCloseTriggerClick.bind(this);
              this.dragTarget.addEventListener("touchmove", this._handleDragTargetDragBound);
              this.dragTarget.addEventListener("touchend", this._handleDragTargetReleaseBound);
              this._overlay.addEventListener("touchmove", this._handleCloseDragBound);
              this._overlay.addEventListener("touchend", this._handleCloseReleaseBound);
              this.el.addEventListener("touchmove", this._handleCloseDragBound);
              this.el.addEventListener("touchend", this._handleCloseReleaseBound);
              this.el.addEventListener("click", this._handleCloseTriggerClickBound);
              if (this.isFixed) {
                this._handleWindowResizeBound = this._handleWindowResize.bind(this);
                window.addEventListener("resize", this._handleWindowResizeBound);
              }
            }
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              if (Sidenav2._sidenavs.length === 1) {
                document.body.removeEventListener("click", this._handleTriggerClick);
              }
              this.dragTarget.removeEventListener("touchmove", this._handleDragTargetDragBound);
              this.dragTarget.removeEventListener("touchend", this._handleDragTargetReleaseBound);
              this._overlay.removeEventListener("touchmove", this._handleCloseDragBound);
              this._overlay.removeEventListener("touchend", this._handleCloseReleaseBound);
              this.el.removeEventListener("touchmove", this._handleCloseDragBound);
              this.el.removeEventListener("touchend", this._handleCloseReleaseBound);
              this.el.removeEventListener("click", this._handleCloseTriggerClickBound);
              if (this.isFixed) {
                window.removeEventListener("resize", this._handleWindowResizeBound);
              }
            }
            /**
             * Handle Trigger Click
             * @param {Event} e
             */
          }, {
            key: "_handleTriggerClick",
            value: function _handleTriggerClick(e2) {
              var $trigger = $2(e2.target).closest(".sidenav-trigger");
              if (e2.target && $trigger.length) {
                var sidenavId = M.getIdFromTrigger($trigger[0]);
                var sidenavInstance = document.getElementById(sidenavId).M_Sidenav;
                if (sidenavInstance) {
                  sidenavInstance.open($trigger);
                }
                e2.preventDefault();
              }
            }
            /**
             * Set variables needed at the beggining of drag
             * and stop any current transition.
             * @param {Event} e
             */
          }, {
            key: "_startDrag",
            value: function _startDrag(e2) {
              var clientX = e2.targetTouches[0].clientX;
              this.isDragged = true;
              this._startingXpos = clientX;
              this._xPos = this._startingXpos;
              this._time = Date.now();
              this._width = this.el.getBoundingClientRect().width;
              this._overlay.style.display = "block";
              this._initialScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
              this._verticallyScrolling = false;
              anim.remove(this.el);
              anim.remove(this._overlay);
            }
            /**
             * Set variables needed at each drag move update tick
             * @param {Event} e
             */
          }, {
            key: "_dragMoveUpdate",
            value: function _dragMoveUpdate(e2) {
              var clientX = e2.targetTouches[0].clientX;
              var currentScrollTop = this.isOpen ? this.el.scrollTop : M.getDocumentScrollTop();
              this.deltaX = Math.abs(this._xPos - clientX);
              this._xPos = clientX;
              this.velocityX = this.deltaX / (Date.now() - this._time);
              this._time = Date.now();
              if (this._initialScrollTop !== currentScrollTop) {
                this._verticallyScrolling = true;
              }
            }
            /**
             * Handles Dragging of Sidenav
             * @param {Event} e
             */
          }, {
            key: "_handleDragTargetDrag",
            value: function _handleDragTargetDrag(e2) {
              if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
                return;
              }
              if (!this.isDragged) {
                this._startDrag(e2);
              }
              this._dragMoveUpdate(e2);
              var totalDeltaX = this._xPos - this._startingXpos;
              var dragDirection = totalDeltaX > 0 ? "right" : "left";
              totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
              if (this.options.edge === dragDirection) {
                totalDeltaX = 0;
              }
              var transformX = totalDeltaX;
              var transformPrefix = "translateX(-100%)";
              if (this.options.edge === "right") {
                transformPrefix = "translateX(100%)";
                transformX = -transformX;
              }
              this.percentOpen = Math.min(1, totalDeltaX / this._width);
              this.el.style.transform = transformPrefix + " translateX(" + transformX + "px)";
              this._overlay.style.opacity = this.percentOpen;
            }
            /**
             * Handle Drag Target Release
             */
          }, {
            key: "_handleDragTargetRelease",
            value: function _handleDragTargetRelease() {
              if (this.isDragged) {
                if (this.percentOpen > 0.2) {
                  this.open();
                } else {
                  this._animateOut();
                }
                this.isDragged = false;
                this._verticallyScrolling = false;
              }
            }
            /**
             * Handle Close Drag
             * @param {Event} e
             */
          }, {
            key: "_handleCloseDrag",
            value: function _handleCloseDrag(e2) {
              if (this.isOpen) {
                if (!this.options.draggable || this._isCurrentlyFixed() || this._verticallyScrolling) {
                  return;
                }
                if (!this.isDragged) {
                  this._startDrag(e2);
                }
                this._dragMoveUpdate(e2);
                var totalDeltaX = this._xPos - this._startingXpos;
                var dragDirection = totalDeltaX > 0 ? "right" : "left";
                totalDeltaX = Math.min(this._width, Math.abs(totalDeltaX));
                if (this.options.edge !== dragDirection) {
                  totalDeltaX = 0;
                }
                var transformX = -totalDeltaX;
                if (this.options.edge === "right") {
                  transformX = -transformX;
                }
                this.percentOpen = Math.min(1, 1 - totalDeltaX / this._width);
                this.el.style.transform = "translateX(" + transformX + "px)";
                this._overlay.style.opacity = this.percentOpen;
              }
            }
            /**
             * Handle Close Release
             */
          }, {
            key: "_handleCloseRelease",
            value: function _handleCloseRelease() {
              if (this.isOpen && this.isDragged) {
                if (this.percentOpen > 0.8) {
                  this._animateIn();
                } else {
                  this.close();
                }
                this.isDragged = false;
                this._verticallyScrolling = false;
              }
            }
            /**
             * Handles closing of Sidenav when element with class .sidenav-close
             */
          }, {
            key: "_handleCloseTriggerClick",
            value: function _handleCloseTriggerClick(e2) {
              var $closeTrigger = $2(e2.target).closest(".sidenav-close");
              if ($closeTrigger.length && !this._isCurrentlyFixed()) {
                this.close();
              }
            }
            /**
             * Handle Window Resize
             */
          }, {
            key: "_handleWindowResize",
            value: function _handleWindowResize() {
              if (this.lastWindowWidth !== window.innerWidth) {
                if (window.innerWidth > 992) {
                  this.open();
                } else {
                  this.close();
                }
              }
              this.lastWindowWidth = window.innerWidth;
              this.lastWindowHeight = window.innerHeight;
            }
          }, {
            key: "_setupClasses",
            value: function _setupClasses() {
              if (this.options.edge === "right") {
                this.el.classList.add("right-aligned");
                this.dragTarget.classList.add("right-aligned");
              }
            }
          }, {
            key: "_removeClasses",
            value: function _removeClasses() {
              this.el.classList.remove("right-aligned");
              this.dragTarget.classList.remove("right-aligned");
            }
          }, {
            key: "_setupFixed",
            value: function _setupFixed() {
              if (this._isCurrentlyFixed()) {
                this.open();
              }
            }
          }, {
            key: "_isCurrentlyFixed",
            value: function _isCurrentlyFixed() {
              return this.isFixed && window.innerWidth > 992;
            }
          }, {
            key: "_createDragTarget",
            value: function _createDragTarget() {
              var dragTarget = document.createElement("div");
              dragTarget.classList.add("drag-target");
              document.body.appendChild(dragTarget);
              this.dragTarget = dragTarget;
            }
          }, {
            key: "_preventBodyScrolling",
            value: function _preventBodyScrolling() {
              var body = document.body;
              body.style.overflow = "hidden";
            }
          }, {
            key: "_enableBodyScrolling",
            value: function _enableBodyScrolling() {
              var body = document.body;
              body.style.overflow = "";
            }
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen === true) {
                return;
              }
              this.isOpen = true;
              if (typeof this.options.onOpenStart === "function") {
                this.options.onOpenStart.call(this, this.el);
              }
              if (this._isCurrentlyFixed()) {
                anim.remove(this.el);
                anim({
                  targets: this.el,
                  translateX: 0,
                  duration: 0,
                  easing: "easeOutQuad"
                });
                this._enableBodyScrolling();
                this._overlay.style.display = "none";
              } else {
                if (this.options.preventScrolling) {
                  this._preventBodyScrolling();
                }
                if (!this.isDragged || this.percentOpen != 1) {
                  this._animateIn();
                }
              }
            }
          }, {
            key: "close",
            value: function close() {
              if (this.isOpen === false) {
                return;
              }
              this.isOpen = false;
              if (typeof this.options.onCloseStart === "function") {
                this.options.onCloseStart.call(this, this.el);
              }
              if (this._isCurrentlyFixed()) {
                var transformX = this.options.edge === "left" ? "-105%" : "105%";
                this.el.style.transform = "translateX(" + transformX + ")";
              } else {
                this._enableBodyScrolling();
                if (!this.isDragged || this.percentOpen != 0) {
                  this._animateOut();
                } else {
                  this._overlay.style.display = "none";
                }
              }
            }
          }, {
            key: "_animateIn",
            value: function _animateIn() {
              this._animateSidenavIn();
              this._animateOverlayIn();
            }
          }, {
            key: "_animateSidenavIn",
            value: function _animateSidenavIn() {
              var _this32 = this;
              var slideOutPercent = this.options.edge === "left" ? -1 : 1;
              if (this.isDragged) {
                slideOutPercent = this.options.edge === "left" ? slideOutPercent + this.percentOpen : slideOutPercent - this.percentOpen;
              }
              anim.remove(this.el);
              anim({
                targets: this.el,
                translateX: [slideOutPercent * 100 + "%", 0],
                duration: this.options.inDuration,
                easing: "easeOutQuad",
                complete: function() {
                  if (typeof _this32.options.onOpenEnd === "function") {
                    _this32.options.onOpenEnd.call(_this32, _this32.el);
                  }
                }
              });
            }
          }, {
            key: "_animateOverlayIn",
            value: function _animateOverlayIn() {
              var start = 0;
              if (this.isDragged) {
                start = this.percentOpen;
              } else {
                $2(this._overlay).css({
                  display: "block"
                });
              }
              anim.remove(this._overlay);
              anim({
                targets: this._overlay,
                opacity: [start, 1],
                duration: this.options.inDuration,
                easing: "easeOutQuad"
              });
            }
          }, {
            key: "_animateOut",
            value: function _animateOut() {
              this._animateSidenavOut();
              this._animateOverlayOut();
            }
          }, {
            key: "_animateSidenavOut",
            value: function _animateSidenavOut() {
              var _this33 = this;
              var endPercent = this.options.edge === "left" ? -1 : 1;
              var slideOutPercent = 0;
              if (this.isDragged) {
                slideOutPercent = this.options.edge === "left" ? endPercent + this.percentOpen : endPercent - this.percentOpen;
              }
              anim.remove(this.el);
              anim({
                targets: this.el,
                translateX: [slideOutPercent * 100 + "%", endPercent * 105 + "%"],
                duration: this.options.outDuration,
                easing: "easeOutQuad",
                complete: function() {
                  if (typeof _this33.options.onCloseEnd === "function") {
                    _this33.options.onCloseEnd.call(_this33, _this33.el);
                  }
                }
              });
            }
          }, {
            key: "_animateOverlayOut",
            value: function _animateOverlayOut() {
              var _this34 = this;
              anim.remove(this._overlay);
              anim({
                targets: this._overlay,
                opacity: 0,
                duration: this.options.outDuration,
                easing: "easeOutQuad",
                complete: function() {
                  $2(_this34._overlay).css("display", "none");
                }
              });
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Sidenav2.__proto__ || Object.getPrototypeOf(Sidenav2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Sidenav;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Sidenav2;
        }(Component);
        Sidenav._sidenavs = [];
        window.M.Sidenav = Sidenav;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Sidenav, "sidenav", "M_Sidenav");
        }
      })(cash, M.anime);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          throttle: 100,
          scrollOffset: 200,
          // offset - 200 allows elements near bottom of page to scroll
          activeClass: "active",
          getActiveElement: function(id) {
            return 'a[href="#' + id + '"]';
          }
        };
        var ScrollSpy = function(_Component9) {
          _inherits(ScrollSpy2, _Component9);
          function ScrollSpy2(el, options) {
            _classCallCheck(this, ScrollSpy2);
            var _this35 = _possibleConstructorReturn(this, (ScrollSpy2.__proto__ || Object.getPrototypeOf(ScrollSpy2)).call(this, ScrollSpy2, el, options));
            _this35.el.M_ScrollSpy = _this35;
            _this35.options = $2.extend({}, ScrollSpy2.defaults, options);
            ScrollSpy2._elements.push(_this35);
            ScrollSpy2._count++;
            ScrollSpy2._increment++;
            _this35.tickId = -1;
            _this35.id = ScrollSpy2._increment;
            _this35._setupEventHandlers();
            _this35._handleWindowScroll();
            return _this35;
          }
          _createClass2(ScrollSpy2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              ScrollSpy2._elements.splice(ScrollSpy2._elements.indexOf(this), 1);
              ScrollSpy2._elementsInView.splice(ScrollSpy2._elementsInView.indexOf(this), 1);
              ScrollSpy2._visibleElements.splice(ScrollSpy2._visibleElements.indexOf(this.$el), 1);
              ScrollSpy2._count--;
              this._removeEventHandlers();
              $2(this.options.getActiveElement(this.$el.attr("id"))).removeClass(this.options.activeClass);
              this.el.M_ScrollSpy = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              var throttledResize = M.throttle(this._handleWindowScroll, 200);
              this._handleThrottledResizeBound = throttledResize.bind(this);
              this._handleWindowScrollBound = this._handleWindowScroll.bind(this);
              if (ScrollSpy2._count === 1) {
                window.addEventListener("scroll", this._handleWindowScrollBound);
                window.addEventListener("resize", this._handleThrottledResizeBound);
                document.body.addEventListener("click", this._handleTriggerClick);
              }
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              if (ScrollSpy2._count === 0) {
                window.removeEventListener("scroll", this._handleWindowScrollBound);
                window.removeEventListener("resize", this._handleThrottledResizeBound);
                document.body.removeEventListener("click", this._handleTriggerClick);
              }
            }
            /**
             * Handle Trigger Click
             * @param {Event} e
             */
          }, {
            key: "_handleTriggerClick",
            value: function _handleTriggerClick(e2) {
              var $trigger = $2(e2.target);
              for (var i3 = ScrollSpy2._elements.length - 1; i3 >= 0; i3--) {
                var scrollspy = ScrollSpy2._elements[i3];
                if ($trigger.is('a[href="#' + scrollspy.$el.attr("id") + '"]')) {
                  e2.preventDefault();
                  var offset = scrollspy.$el.offset().top + 1;
                  anim({
                    targets: [document.documentElement, document.body],
                    scrollTop: offset - scrollspy.options.scrollOffset,
                    duration: 400,
                    easing: "easeOutCubic"
                  });
                  break;
                }
              }
            }
            /**
             * Handle Window Scroll
             */
          }, {
            key: "_handleWindowScroll",
            value: function _handleWindowScroll() {
              ScrollSpy2._ticks++;
              var top = M.getDocumentScrollTop(), left = M.getDocumentScrollLeft(), right = left + window.innerWidth, bottom = top + window.innerHeight;
              var intersections = ScrollSpy2._findElements(top, right, bottom, left);
              for (var i3 = 0; i3 < intersections.length; i3++) {
                var scrollspy = intersections[i3];
                var lastTick = scrollspy.tickId;
                if (lastTick < 0) {
                  scrollspy._enter();
                }
                scrollspy.tickId = ScrollSpy2._ticks;
              }
              for (var _i2 = 0; _i2 < ScrollSpy2._elementsInView.length; _i2++) {
                var _scrollspy = ScrollSpy2._elementsInView[_i2];
                var _lastTick = _scrollspy.tickId;
                if (_lastTick >= 0 && _lastTick !== ScrollSpy2._ticks) {
                  _scrollspy._exit();
                  _scrollspy.tickId = -1;
                }
              }
              ScrollSpy2._elementsInView = intersections;
            }
            /**
             * Find elements that are within the boundary
             * @param {number} top
             * @param {number} right
             * @param {number} bottom
             * @param {number} left
             * @return {Array.<ScrollSpy>}   A collection of elements
             */
          }, {
            key: "_enter",
            value: function _enter() {
              ScrollSpy2._visibleElements = ScrollSpy2._visibleElements.filter(function(value) {
                return value.height() != 0;
              });
              if (ScrollSpy2._visibleElements[0]) {
                $2(this.options.getActiveElement(ScrollSpy2._visibleElements[0].attr("id"))).removeClass(this.options.activeClass);
                if (ScrollSpy2._visibleElements[0][0].M_ScrollSpy && this.id < ScrollSpy2._visibleElements[0][0].M_ScrollSpy.id) {
                  ScrollSpy2._visibleElements.unshift(this.$el);
                } else {
                  ScrollSpy2._visibleElements.push(this.$el);
                }
              } else {
                ScrollSpy2._visibleElements.push(this.$el);
              }
              $2(this.options.getActiveElement(ScrollSpy2._visibleElements[0].attr("id"))).addClass(this.options.activeClass);
            }
          }, {
            key: "_exit",
            value: function _exit() {
              var _this36 = this;
              ScrollSpy2._visibleElements = ScrollSpy2._visibleElements.filter(function(value) {
                return value.height() != 0;
              });
              if (ScrollSpy2._visibleElements[0]) {
                $2(this.options.getActiveElement(ScrollSpy2._visibleElements[0].attr("id"))).removeClass(this.options.activeClass);
                ScrollSpy2._visibleElements = ScrollSpy2._visibleElements.filter(function(el) {
                  return el.attr("id") != _this36.$el.attr("id");
                });
                if (ScrollSpy2._visibleElements[0]) {
                  $2(this.options.getActiveElement(ScrollSpy2._visibleElements[0].attr("id"))).addClass(this.options.activeClass);
                }
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(ScrollSpy2.__proto__ || Object.getPrototypeOf(ScrollSpy2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_ScrollSpy;
            }
          }, {
            key: "_findElements",
            value: function _findElements(top, right, bottom, left) {
              var hits = [];
              for (var i3 = 0; i3 < ScrollSpy2._elements.length; i3++) {
                var scrollspy = ScrollSpy2._elements[i3];
                var currTop = top + scrollspy.options.scrollOffset || 200;
                if (scrollspy.$el.height() > 0) {
                  var elTop = scrollspy.$el.offset().top, elLeft = scrollspy.$el.offset().left, elRight = elLeft + scrollspy.$el.width(), elBottom = elTop + scrollspy.$el.height();
                  var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < currTop);
                  if (isIntersect) {
                    hits.push(scrollspy);
                  }
                }
              }
              return hits;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return ScrollSpy2;
        }(Component);
        ScrollSpy._elements = [];
        ScrollSpy._elementsInView = [];
        ScrollSpy._visibleElements = [];
        ScrollSpy._count = 0;
        ScrollSpy._increment = 0;
        ScrollSpy._ticks = 0;
        M.ScrollSpy = ScrollSpy;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(ScrollSpy, "scrollSpy", "M_ScrollSpy");
        }
      })(cash, M.anime);
      (function($2) {
        "use strict";
        var _defaults3 = {
          data: {},
          // Autocomplete data set
          limit: Infinity,
          // Limit of results the autocomplete shows
          onAutocomplete: null,
          // Callback for when autocompleted
          minLength: 1,
          // Min characters before autocomplete starts
          sortFunction: function(a, b, inputString) {
            return a.indexOf(inputString) - b.indexOf(inputString);
          }
        };
        var Autocomplete = function(_Component10) {
          _inherits(Autocomplete2, _Component10);
          function Autocomplete2(el, options) {
            _classCallCheck(this, Autocomplete2);
            var _this37 = _possibleConstructorReturn(this, (Autocomplete2.__proto__ || Object.getPrototypeOf(Autocomplete2)).call(this, Autocomplete2, el, options));
            _this37.el.M_Autocomplete = _this37;
            _this37.options = $2.extend({}, Autocomplete2.defaults, options);
            _this37.isOpen = false;
            _this37.count = 0;
            _this37.activeIndex = -1;
            _this37.oldVal;
            _this37.$inputField = _this37.$el.closest(".input-field");
            _this37.$active = $2();
            _this37._mousedown = false;
            _this37._setupDropdown();
            _this37._setupEventHandlers();
            return _this37;
          }
          _createClass2(Autocomplete2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this._removeDropdown();
              this.el.M_Autocomplete = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleInputBlurBound = this._handleInputBlur.bind(this);
              this._handleInputKeyupAndFocusBound = this._handleInputKeyupAndFocus.bind(this);
              this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
              this._handleInputClickBound = this._handleInputClick.bind(this);
              this._handleContainerMousedownAndTouchstartBound = this._handleContainerMousedownAndTouchstart.bind(this);
              this._handleContainerMouseupAndTouchendBound = this._handleContainerMouseupAndTouchend.bind(this);
              this.el.addEventListener("blur", this._handleInputBlurBound);
              this.el.addEventListener("keyup", this._handleInputKeyupAndFocusBound);
              this.el.addEventListener("focus", this._handleInputKeyupAndFocusBound);
              this.el.addEventListener("keydown", this._handleInputKeydownBound);
              this.el.addEventListener("click", this._handleInputClickBound);
              this.container.addEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound);
              this.container.addEventListener("mouseup", this._handleContainerMouseupAndTouchendBound);
              if (typeof window.ontouchstart !== "undefined") {
                this.container.addEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound);
                this.container.addEventListener("touchend", this._handleContainerMouseupAndTouchendBound);
              }
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("blur", this._handleInputBlurBound);
              this.el.removeEventListener("keyup", this._handleInputKeyupAndFocusBound);
              this.el.removeEventListener("focus", this._handleInputKeyupAndFocusBound);
              this.el.removeEventListener("keydown", this._handleInputKeydownBound);
              this.el.removeEventListener("click", this._handleInputClickBound);
              this.container.removeEventListener("mousedown", this._handleContainerMousedownAndTouchstartBound);
              this.container.removeEventListener("mouseup", this._handleContainerMouseupAndTouchendBound);
              if (typeof window.ontouchstart !== "undefined") {
                this.container.removeEventListener("touchstart", this._handleContainerMousedownAndTouchstartBound);
                this.container.removeEventListener("touchend", this._handleContainerMouseupAndTouchendBound);
              }
            }
            /**
             * Setup dropdown
             */
          }, {
            key: "_setupDropdown",
            value: function _setupDropdown() {
              var _this38 = this;
              this.container = document.createElement("ul");
              this.container.id = "autocomplete-options-" + M.guid();
              $2(this.container).addClass("autocomplete-content dropdown-content");
              this.$inputField.append(this.container);
              this.el.setAttribute("data-target", this.container.id);
              this.dropdown = M.Dropdown.init(this.el, {
                autoFocus: false,
                closeOnClick: false,
                coverTrigger: false,
                onItemClick: function(itemEl) {
                  _this38.selectOption($2(itemEl));
                }
              });
              this.el.removeEventListener("click", this.dropdown._handleClickBound);
            }
            /**
             * Remove dropdown
             */
          }, {
            key: "_removeDropdown",
            value: function _removeDropdown() {
              this.container.parentNode.removeChild(this.container);
            }
            /**
             * Handle Input Blur
             */
          }, {
            key: "_handleInputBlur",
            value: function _handleInputBlur() {
              if (!this._mousedown) {
                this.close();
                this._resetAutocomplete();
              }
            }
            /**
             * Handle Input Keyup and Focus
             * @param {Event} e
             */
          }, {
            key: "_handleInputKeyupAndFocus",
            value: function _handleInputKeyupAndFocus(e2) {
              if (e2.type === "keyup") {
                Autocomplete2._keydown = false;
              }
              this.count = 0;
              var val = this.el.value.toLowerCase();
              if (e2.keyCode === 13 || e2.keyCode === 38 || e2.keyCode === 40) {
                return;
              }
              if (this.oldVal !== val && (M.tabPressed || e2.type !== "focus")) {
                this.open();
              }
              this.oldVal = val;
            }
            /**
             * Handle Input Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleInputKeydown",
            value: function _handleInputKeydown(e2) {
              Autocomplete2._keydown = true;
              var keyCode = e2.keyCode, liElement = void 0, numItems = $2(this.container).children("li").length;
              if (keyCode === M.keys.ENTER && this.activeIndex >= 0) {
                liElement = $2(this.container).children("li").eq(this.activeIndex);
                if (liElement.length) {
                  this.selectOption(liElement);
                  e2.preventDefault();
                }
                return;
              }
              if (keyCode === M.keys.ARROW_UP || keyCode === M.keys.ARROW_DOWN) {
                e2.preventDefault();
                if (keyCode === M.keys.ARROW_UP && this.activeIndex > 0) {
                  this.activeIndex--;
                }
                if (keyCode === M.keys.ARROW_DOWN && this.activeIndex < numItems - 1) {
                  this.activeIndex++;
                }
                this.$active.removeClass("active");
                if (this.activeIndex >= 0) {
                  this.$active = $2(this.container).children("li").eq(this.activeIndex);
                  this.$active.addClass("active");
                }
              }
            }
            /**
             * Handle Input Click
             * @param {Event} e
             */
          }, {
            key: "_handleInputClick",
            value: function _handleInputClick(e2) {
              this.open();
            }
            /**
             * Handle Container Mousedown and Touchstart
             * @param {Event} e
             */
          }, {
            key: "_handleContainerMousedownAndTouchstart",
            value: function _handleContainerMousedownAndTouchstart(e2) {
              this._mousedown = true;
            }
            /**
             * Handle Container Mouseup and Touchend
             * @param {Event} e
             */
          }, {
            key: "_handleContainerMouseupAndTouchend",
            value: function _handleContainerMouseupAndTouchend(e2) {
              this._mousedown = false;
            }
            /**
             * Highlight partial match
             */
          }, {
            key: "_highlight",
            value: function _highlight(string, $el) {
              var img = $el.find("img");
              var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase()), matchEnd = matchStart + string.length - 1, beforeMatch = $el.text().slice(0, matchStart), matchText = $el.text().slice(matchStart, matchEnd + 1), afterMatch = $el.text().slice(matchEnd + 1);
              $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
              if (img.length) {
                $el.prepend(img);
              }
            }
            /**
             * Reset current element position
             */
          }, {
            key: "_resetCurrentElement",
            value: function _resetCurrentElement() {
              this.activeIndex = -1;
              this.$active.removeClass("active");
            }
            /**
             * Reset autocomplete elements
             */
          }, {
            key: "_resetAutocomplete",
            value: function _resetAutocomplete() {
              $2(this.container).empty();
              this._resetCurrentElement();
              this.oldVal = null;
              this.isOpen = false;
              this._mousedown = false;
            }
            /**
             * Select autocomplete option
             * @param {Element} el  Autocomplete option list item element
             */
          }, {
            key: "selectOption",
            value: function selectOption(el) {
              var text = el.text().trim();
              this.el.value = text;
              this.$el.trigger("change");
              this._resetAutocomplete();
              this.close();
              if (typeof this.options.onAutocomplete === "function") {
                this.options.onAutocomplete.call(this, text);
              }
            }
            /**
             * Render dropdown content
             * @param {Object} data  data set
             * @param {String} val  current input value
             */
          }, {
            key: "_renderDropdown",
            value: function _renderDropdown(data, val) {
              var _this39 = this;
              this._resetAutocomplete();
              var matchingData = [];
              for (var key in data) {
                if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1) {
                  if (this.count >= this.options.limit) {
                    break;
                  }
                  var entry = {
                    data: data[key],
                    key
                  };
                  matchingData.push(entry);
                  this.count++;
                }
              }
              if (this.options.sortFunction) {
                var sortFunctionBound = function(a, b) {
                  return _this39.options.sortFunction(a.key.toLowerCase(), b.key.toLowerCase(), val.toLowerCase());
                };
                matchingData.sort(sortFunctionBound);
              }
              for (var i3 = 0; i3 < matchingData.length; i3++) {
                var _entry = matchingData[i3];
                var $autocompleteOption = $2("<li></li>");
                if (!!_entry.data) {
                  $autocompleteOption.append('<img src="' + _entry.data + '" class="right circle"><span>' + _entry.key + "</span>");
                } else {
                  $autocompleteOption.append("<span>" + _entry.key + "</span>");
                }
                $2(this.container).append($autocompleteOption);
                this._highlight(val, $autocompleteOption);
              }
            }
            /**
             * Open Autocomplete Dropdown
             */
          }, {
            key: "open",
            value: function open() {
              var val = this.el.value.toLowerCase();
              this._resetAutocomplete();
              if (val.length >= this.options.minLength) {
                this.isOpen = true;
                this._renderDropdown(this.options.data, val);
              }
              if (!this.dropdown.isOpen) {
                this.dropdown.open();
              } else {
                this.dropdown.recalculateDimensions();
              }
            }
            /**
             * Close Autocomplete Dropdown
             */
          }, {
            key: "close",
            value: function close() {
              this.dropdown.close();
            }
            /**
             * Update Data
             * @param {Object} data
             */
          }, {
            key: "updateData",
            value: function updateData(data) {
              var val = this.el.value.toLowerCase();
              this.options.data = data;
              if (this.isOpen) {
                this._renderDropdown(data, val);
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Autocomplete2.__proto__ || Object.getPrototypeOf(Autocomplete2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Autocomplete;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Autocomplete2;
        }(Component);
        Autocomplete._keydown = false;
        M.Autocomplete = Autocomplete;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Autocomplete, "autocomplete", "M_Autocomplete");
        }
      })(cash);
      (function($2) {
        M.updateTextFields = function() {
          var input_selector = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
          $2(input_selector).each(function(element, index) {
            var $this = $2(this);
            if (element.value.length > 0 || $2(element).is(":focus") || element.autofocus || $this.attr("placeholder") !== null) {
              $this.siblings("label").addClass("active");
            } else if (element.validity) {
              $this.siblings("label").toggleClass("active", element.validity.badInput === true);
            } else {
              $this.siblings("label").removeClass("active");
            }
          });
        };
        M.validate_field = function(object) {
          var hasLength = object.attr("data-length") !== null;
          var lenAttr = parseInt(object.attr("data-length"));
          var len = object[0].value.length;
          if (len === 0 && object[0].validity.badInput === false && !object.is(":required")) {
            if (object.hasClass("validate")) {
              object.removeClass("valid");
              object.removeClass("invalid");
            }
          } else {
            if (object.hasClass("validate")) {
              if (object.is(":valid") && hasLength && len <= lenAttr || object.is(":valid") && !hasLength) {
                object.removeClass("invalid");
                object.addClass("valid");
              } else {
                object.removeClass("valid");
                object.addClass("invalid");
              }
            }
          }
        };
        M.textareaAutoResize = function($textarea) {
          if ($textarea instanceof Element) {
            $textarea = $2($textarea);
          }
          if (!$textarea.length) {
            console.error("No textarea element found");
            return;
          }
          var hiddenDiv = $2(".hiddendiv").first();
          if (!hiddenDiv.length) {
            hiddenDiv = $2('<div class="hiddendiv common"></div>');
            $2("body").append(hiddenDiv);
          }
          var fontFamily = $textarea.css("font-family");
          var fontSize = $textarea.css("font-size");
          var lineHeight = $textarea.css("line-height");
          var paddingTop = $textarea.css("padding-top");
          var paddingRight = $textarea.css("padding-right");
          var paddingBottom = $textarea.css("padding-bottom");
          var paddingLeft = $textarea.css("padding-left");
          if (fontSize) {
            hiddenDiv.css("font-size", fontSize);
          }
          if (fontFamily) {
            hiddenDiv.css("font-family", fontFamily);
          }
          if (lineHeight) {
            hiddenDiv.css("line-height", lineHeight);
          }
          if (paddingTop) {
            hiddenDiv.css("padding-top", paddingTop);
          }
          if (paddingRight) {
            hiddenDiv.css("padding-right", paddingRight);
          }
          if (paddingBottom) {
            hiddenDiv.css("padding-bottom", paddingBottom);
          }
          if (paddingLeft) {
            hiddenDiv.css("padding-left", paddingLeft);
          }
          if (!$textarea.data("original-height")) {
            $textarea.data("original-height", $textarea.height());
          }
          if ($textarea.attr("wrap") === "off") {
            hiddenDiv.css("overflow-wrap", "normal").css("white-space", "pre");
          }
          hiddenDiv.text($textarea[0].value + "\n");
          var content = hiddenDiv.html().replace(/\n/g, "<br>");
          hiddenDiv.html(content);
          if ($textarea[0].offsetWidth > 0 && $textarea[0].offsetHeight > 0) {
            hiddenDiv.css("width", $textarea.width() + "px");
          } else {
            hiddenDiv.css("width", window.innerWidth / 2 + "px");
          }
          if ($textarea.data("original-height") <= hiddenDiv.innerHeight()) {
            $textarea.css("height", hiddenDiv.innerHeight() + "px");
          } else if ($textarea[0].value.length < $textarea.data("previous-length")) {
            $textarea.css("height", $textarea.data("original-height") + "px");
          }
          $textarea.data("previous-length", $textarea[0].value.length);
        };
        $2(document).ready(function() {
          var input_selector = "input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], textarea";
          $2(document).on("change", input_selector, function() {
            if (this.value.length !== 0 || $2(this).attr("placeholder") !== null) {
              $2(this).siblings("label").addClass("active");
            }
            M.validate_field($2(this));
          });
          $2(document).ready(function() {
            M.updateTextFields();
          });
          $2(document).on("reset", function(e2) {
            var formReset = $2(e2.target);
            if (formReset.is("form")) {
              formReset.find(input_selector).removeClass("valid").removeClass("invalid");
              formReset.find(input_selector).each(function(e3) {
                if (this.value.length) {
                  $2(this).siblings("label").removeClass("active");
                }
              });
              setTimeout(function() {
                formReset.find("select").each(function() {
                  if (this.M_FormSelect) {
                    $2(this).trigger("change");
                  }
                });
              }, 0);
            }
          });
          document.addEventListener("focus", function(e2) {
            if ($2(e2.target).is(input_selector)) {
              $2(e2.target).siblings("label, .prefix").addClass("active");
            }
          }, true);
          document.addEventListener("blur", function(e2) {
            var $inputElement = $2(e2.target);
            if ($inputElement.is(input_selector)) {
              var selector3 = ".prefix";
              if ($inputElement[0].value.length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr("placeholder") === null) {
                selector3 += ", label";
              }
              $inputElement.siblings(selector3).removeClass("active");
              M.validate_field($inputElement);
            }
          }, true);
          var radio_checkbox = "input[type=radio], input[type=checkbox]";
          $2(document).on("keyup", radio_checkbox, function(e2) {
            if (e2.which === M.keys.TAB) {
              $2(this).addClass("tabbed");
              var $this = $2(this);
              $this.one("blur", function(e3) {
                $2(this).removeClass("tabbed");
              });
              return;
            }
          });
          var text_area_selector = ".materialize-textarea";
          $2(text_area_selector).each(function() {
            var $textarea = $2(this);
            $textarea.data("original-height", $textarea.height());
            $textarea.data("previous-length", this.value.length);
            M.textareaAutoResize($textarea);
          });
          $2(document).on("keyup", text_area_selector, function() {
            M.textareaAutoResize($2(this));
          });
          $2(document).on("keydown", text_area_selector, function() {
            M.textareaAutoResize($2(this));
          });
          $2(document).on("change", '.file-field input[type="file"]', function() {
            var file_field = $2(this).closest(".file-field");
            var path_input = file_field.find("input.file-path");
            var files = $2(this)[0].files;
            var file_names = [];
            for (var i3 = 0; i3 < files.length; i3++) {
              file_names.push(files[i3].name);
            }
            path_input[0].value = file_names.join(", ");
            path_input.trigger("change");
          });
        });
      })(cash);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          indicators: true,
          height: 400,
          duration: 500,
          interval: 6e3
        };
        var Slider = function(_Component11) {
          _inherits(Slider2, _Component11);
          function Slider2(el, options) {
            _classCallCheck(this, Slider2);
            var _this40 = _possibleConstructorReturn(this, (Slider2.__proto__ || Object.getPrototypeOf(Slider2)).call(this, Slider2, el, options));
            _this40.el.M_Slider = _this40;
            _this40.options = $2.extend({}, Slider2.defaults, options);
            _this40.$slider = _this40.$el.find(".slides");
            _this40.$slides = _this40.$slider.children("li");
            _this40.activeIndex = _this40.$slides.filter(function(item) {
              return $2(item).hasClass("active");
            }).first().index();
            if (_this40.activeIndex != -1) {
              _this40.$active = _this40.$slides.eq(_this40.activeIndex);
            }
            _this40._setSliderHeight();
            _this40.$slides.find(".caption").each(function(el2) {
              _this40._animateCaptionIn(el2, 0);
            });
            _this40.$slides.find("img").each(function(el2) {
              var placeholderBase64 = "data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
              if ($2(el2).attr("src") !== placeholderBase64) {
                $2(el2).css("background-image", 'url("' + $2(el2).attr("src") + '")');
                $2(el2).attr("src", placeholderBase64);
              }
            });
            _this40._setupIndicators();
            if (_this40.$active) {
              _this40.$active.css("display", "block");
            } else {
              _this40.$slides.first().addClass("active");
              anim({
                targets: _this40.$slides.first()[0],
                opacity: 1,
                duration: _this40.options.duration,
                easing: "easeOutQuad"
              });
              _this40.activeIndex = 0;
              _this40.$active = _this40.$slides.eq(_this40.activeIndex);
              if (_this40.options.indicators) {
                _this40.$indicators.eq(_this40.activeIndex).addClass("active");
              }
            }
            _this40.$active.find("img").each(function(el2) {
              anim({
                targets: _this40.$active.find(".caption")[0],
                opacity: 1,
                translateX: 0,
                translateY: 0,
                duration: _this40.options.duration,
                easing: "easeOutQuad"
              });
            });
            _this40._setupEventHandlers();
            _this40.start();
            return _this40;
          }
          _createClass2(Slider2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this.pause();
              this._removeIndicators();
              this._removeEventHandlers();
              this.el.M_Slider = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              var _this41 = this;
              this._handleIntervalBound = this._handleInterval.bind(this);
              this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
              if (this.options.indicators) {
                this.$indicators.each(function(el) {
                  el.addEventListener("click", _this41._handleIndicatorClickBound);
                });
              }
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              var _this42 = this;
              if (this.options.indicators) {
                this.$indicators.each(function(el) {
                  el.removeEventListener("click", _this42._handleIndicatorClickBound);
                });
              }
            }
            /**
             * Handle indicator click
             * @param {Event} e
             */
          }, {
            key: "_handleIndicatorClick",
            value: function _handleIndicatorClick(e2) {
              var currIndex = $2(e2.target).index();
              this.set(currIndex);
            }
            /**
             * Handle Interval
             */
          }, {
            key: "_handleInterval",
            value: function _handleInterval() {
              var newActiveIndex = this.$slider.find(".active").index();
              if (this.$slides.length === newActiveIndex + 1)
                newActiveIndex = 0;
              else
                newActiveIndex += 1;
              this.set(newActiveIndex);
            }
            /**
             * Animate in caption
             * @param {Element} caption
             * @param {Number} duration
             */
          }, {
            key: "_animateCaptionIn",
            value: function _animateCaptionIn(caption, duration) {
              var animOptions = {
                targets: caption,
                opacity: 0,
                duration,
                easing: "easeOutQuad"
              };
              if ($2(caption).hasClass("center-align")) {
                animOptions.translateY = -100;
              } else if ($2(caption).hasClass("right-align")) {
                animOptions.translateX = 100;
              } else if ($2(caption).hasClass("left-align")) {
                animOptions.translateX = -100;
              }
              anim(animOptions);
            }
            /**
             * Set height of slider
             */
          }, {
            key: "_setSliderHeight",
            value: function _setSliderHeight() {
              if (!this.$el.hasClass("fullscreen")) {
                if (this.options.indicators) {
                  this.$el.css("height", this.options.height + 40 + "px");
                } else {
                  this.$el.css("height", this.options.height + "px");
                }
                this.$slider.css("height", this.options.height + "px");
              }
            }
            /**
             * Setup indicators
             */
          }, {
            key: "_setupIndicators",
            value: function _setupIndicators() {
              var _this43 = this;
              if (this.options.indicators) {
                this.$indicators = $2('<ul class="indicators"></ul>');
                this.$slides.each(function(el, index) {
                  var $indicator = $2('<li class="indicator-item"></li>');
                  _this43.$indicators.append($indicator[0]);
                });
                this.$el.append(this.$indicators[0]);
                this.$indicators = this.$indicators.children("li.indicator-item");
              }
            }
            /**
             * Remove indicators
             */
          }, {
            key: "_removeIndicators",
            value: function _removeIndicators() {
              this.$el.find("ul.indicators").remove();
            }
            /**
             * Cycle to nth item
             * @param {Number} index
             */
          }, {
            key: "set",
            value: function set(index) {
              var _this44 = this;
              if (index >= this.$slides.length)
                index = 0;
              else if (index < 0)
                index = this.$slides.length - 1;
              if (this.activeIndex != index) {
                this.$active = this.$slides.eq(this.activeIndex);
                var $caption = this.$active.find(".caption");
                this.$active.removeClass("active");
                anim({
                  targets: this.$active[0],
                  opacity: 0,
                  duration: this.options.duration,
                  easing: "easeOutQuad",
                  complete: function() {
                    _this44.$slides.not(".active").each(function(el) {
                      anim({
                        targets: el,
                        opacity: 0,
                        translateX: 0,
                        translateY: 0,
                        duration: 0,
                        easing: "easeOutQuad"
                      });
                    });
                  }
                });
                this._animateCaptionIn($caption[0], this.options.duration);
                if (this.options.indicators) {
                  this.$indicators.eq(this.activeIndex).removeClass("active");
                  this.$indicators.eq(index).addClass("active");
                }
                anim({
                  targets: this.$slides.eq(index)[0],
                  opacity: 1,
                  duration: this.options.duration,
                  easing: "easeOutQuad"
                });
                anim({
                  targets: this.$slides.eq(index).find(".caption")[0],
                  opacity: 1,
                  translateX: 0,
                  translateY: 0,
                  duration: this.options.duration,
                  delay: this.options.duration,
                  easing: "easeOutQuad"
                });
                this.$slides.eq(index).addClass("active");
                this.activeIndex = index;
                this.start();
              }
            }
            /**
             * Pause slider interval
             */
          }, {
            key: "pause",
            value: function pause() {
              clearInterval(this.interval);
            }
            /**
             * Start slider interval
             */
          }, {
            key: "start",
            value: function start() {
              clearInterval(this.interval);
              this.interval = setInterval(this._handleIntervalBound, this.options.duration + this.options.interval);
            }
            /**
             * Move to next slide
             */
          }, {
            key: "next",
            value: function next() {
              var newIndex = this.activeIndex + 1;
              if (newIndex >= this.$slides.length)
                newIndex = 0;
              else if (newIndex < 0)
                newIndex = this.$slides.length - 1;
              this.set(newIndex);
            }
            /**
             * Move to previous slide
             */
          }, {
            key: "prev",
            value: function prev() {
              var newIndex = this.activeIndex - 1;
              if (newIndex >= this.$slides.length)
                newIndex = 0;
              else if (newIndex < 0)
                newIndex = this.$slides.length - 1;
              this.set(newIndex);
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Slider2.__proto__ || Object.getPrototypeOf(Slider2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Slider;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Slider2;
        }(Component);
        M.Slider = Slider;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Slider, "slider", "M_Slider");
        }
      })(cash, M.anime);
      (function($2, anim) {
        $2(document).on("click", ".card", function(e2) {
          if ($2(this).children(".card-reveal").length) {
            var $card = $2(e2.target).closest(".card");
            if ($card.data("initialOverflow") === void 0) {
              $card.data("initialOverflow", $card.css("overflow") === void 0 ? "" : $card.css("overflow"));
            }
            var $cardReveal = $2(this).find(".card-reveal");
            if ($2(e2.target).is($2(".card-reveal .card-title")) || $2(e2.target).is($2(".card-reveal .card-title i"))) {
              anim({
                targets: $cardReveal[0],
                translateY: 0,
                duration: 225,
                easing: "easeInOutQuad",
                complete: function(anim2) {
                  var el = anim2.animatables[0].target;
                  $2(el).css({ display: "none" });
                  $card.css("overflow", $card.data("initialOverflow"));
                }
              });
            } else if ($2(e2.target).is($2(".card .activator")) || $2(e2.target).is($2(".card .activator i"))) {
              $card.css("overflow", "hidden");
              $cardReveal.css({ display: "block" });
              anim({
                targets: $cardReveal[0],
                translateY: "-100%",
                duration: 300,
                easing: "easeInOutQuad"
              });
            }
          }
        });
      })(cash, M.anime);
      (function($2) {
        "use strict";
        var _defaults3 = {
          data: [],
          placeholder: "",
          secondaryPlaceholder: "",
          autocompleteOptions: {},
          limit: Infinity,
          onChipAdd: null,
          onChipSelect: null,
          onChipDelete: null
        };
        var Chips = function(_Component12) {
          _inherits(Chips2, _Component12);
          function Chips2(el, options) {
            _classCallCheck(this, Chips2);
            var _this45 = _possibleConstructorReturn(this, (Chips2.__proto__ || Object.getPrototypeOf(Chips2)).call(this, Chips2, el, options));
            _this45.el.M_Chips = _this45;
            _this45.options = $2.extend({}, Chips2.defaults, options);
            _this45.$el.addClass("chips input-field");
            _this45.chipsData = [];
            _this45.$chips = $2();
            _this45._setupInput();
            _this45.hasAutocomplete = Object.keys(_this45.options.autocompleteOptions).length > 0;
            if (!_this45.$input.attr("id")) {
              _this45.$input.attr("id", M.guid());
            }
            if (_this45.options.data.length) {
              _this45.chipsData = _this45.options.data;
              _this45._renderChips(_this45.chipsData);
            }
            if (_this45.hasAutocomplete) {
              _this45._setupAutocomplete();
            }
            _this45._setPlaceholder();
            _this45._setupLabel();
            _this45._setupEventHandlers();
            return _this45;
          }
          _createClass2(Chips2, [{
            key: "getData",
            /**
             * Get Chips Data
             */
            value: function getData() {
              return this.chipsData;
            }
            /**
             * Teardown component
             */
          }, {
            key: "destroy",
            value: function destroy() {
              this._removeEventHandlers();
              this.$chips.remove();
              this.el.M_Chips = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleChipClickBound = this._handleChipClick.bind(this);
              this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
              this._handleInputFocusBound = this._handleInputFocus.bind(this);
              this._handleInputBlurBound = this._handleInputBlur.bind(this);
              this.el.addEventListener("click", this._handleChipClickBound);
              document.addEventListener("keydown", Chips2._handleChipsKeydown);
              document.addEventListener("keyup", Chips2._handleChipsKeyup);
              this.el.addEventListener("blur", Chips2._handleChipsBlur, true);
              this.$input[0].addEventListener("focus", this._handleInputFocusBound);
              this.$input[0].addEventListener("blur", this._handleInputBlurBound);
              this.$input[0].addEventListener("keydown", this._handleInputKeydownBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("click", this._handleChipClickBound);
              document.removeEventListener("keydown", Chips2._handleChipsKeydown);
              document.removeEventListener("keyup", Chips2._handleChipsKeyup);
              this.el.removeEventListener("blur", Chips2._handleChipsBlur, true);
              this.$input[0].removeEventListener("focus", this._handleInputFocusBound);
              this.$input[0].removeEventListener("blur", this._handleInputBlurBound);
              this.$input[0].removeEventListener("keydown", this._handleInputKeydownBound);
            }
            /**
             * Handle Chip Click
             * @param {Event} e
             */
          }, {
            key: "_handleChipClick",
            value: function _handleChipClick(e2) {
              var $chip = $2(e2.target).closest(".chip");
              var clickedClose = $2(e2.target).is(".close");
              if ($chip.length) {
                var index = $chip.index();
                if (clickedClose) {
                  this.deleteChip(index);
                  this.$input[0].focus();
                } else {
                  this.selectChip(index);
                }
              } else {
                this.$input[0].focus();
              }
            }
            /**
             * Handle Chips Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleInputFocus",
            /**
             * Handle Input Focus
             */
            value: function _handleInputFocus() {
              this.$el.addClass("focus");
            }
            /**
             * Handle Input Blur
             */
          }, {
            key: "_handleInputBlur",
            value: function _handleInputBlur() {
              this.$el.removeClass("focus");
            }
            /**
             * Handle Input Keydown
             * @param {Event} e
             */
          }, {
            key: "_handleInputKeydown",
            value: function _handleInputKeydown(e2) {
              Chips2._keydown = true;
              if (e2.keyCode === 13) {
                if (this.hasAutocomplete && this.autocomplete && this.autocomplete.isOpen) {
                  return;
                }
                e2.preventDefault();
                this.addChip({
                  tag: this.$input[0].value
                });
                this.$input[0].value = "";
              } else if ((e2.keyCode === 8 || e2.keyCode === 37) && this.$input[0].value === "" && this.chipsData.length) {
                e2.preventDefault();
                this.selectChip(this.chipsData.length - 1);
              }
            }
            /**
             * Render Chip
             * @param {chip} chip
             * @return {Element}
             */
          }, {
            key: "_renderChip",
            value: function _renderChip(chip) {
              if (!chip.tag) {
                return;
              }
              var renderedChip = document.createElement("div");
              var closeIcon = document.createElement("i");
              renderedChip.classList.add("chip");
              renderedChip.textContent = chip.tag;
              renderedChip.setAttribute("tabindex", 0);
              $2(closeIcon).addClass("material-icons close");
              closeIcon.textContent = "close";
              if (chip.image) {
                var img = document.createElement("img");
                img.setAttribute("src", chip.image);
                renderedChip.insertBefore(img, renderedChip.firstChild);
              }
              renderedChip.appendChild(closeIcon);
              return renderedChip;
            }
            /**
             * Render Chips
             */
          }, {
            key: "_renderChips",
            value: function _renderChips() {
              this.$chips.remove();
              for (var i3 = 0; i3 < this.chipsData.length; i3++) {
                var chipEl = this._renderChip(this.chipsData[i3]);
                this.$el.append(chipEl);
                this.$chips.add(chipEl);
              }
              this.$el.append(this.$input[0]);
            }
            /**
             * Setup Autocomplete
             */
          }, {
            key: "_setupAutocomplete",
            value: function _setupAutocomplete() {
              var _this46 = this;
              this.options.autocompleteOptions.onAutocomplete = function(val) {
                _this46.addChip({
                  tag: val
                });
                _this46.$input[0].value = "";
                _this46.$input[0].focus();
              };
              this.autocomplete = M.Autocomplete.init(this.$input[0], this.options.autocompleteOptions);
            }
            /**
             * Setup Input
             */
          }, {
            key: "_setupInput",
            value: function _setupInput() {
              this.$input = this.$el.find("input");
              if (!this.$input.length) {
                this.$input = $2("<input></input>");
                this.$el.append(this.$input);
              }
              this.$input.addClass("input");
            }
            /**
             * Setup Label
             */
          }, {
            key: "_setupLabel",
            value: function _setupLabel() {
              this.$label = this.$el.find("label");
              if (this.$label.length) {
                this.$label.setAttribute("for", this.$input.attr("id"));
              }
            }
            /**
             * Set placeholder
             */
          }, {
            key: "_setPlaceholder",
            value: function _setPlaceholder() {
              if (this.chipsData !== void 0 && !this.chipsData.length && this.options.placeholder) {
                $2(this.$input).prop("placeholder", this.options.placeholder);
              } else if ((this.chipsData === void 0 || !!this.chipsData.length) && this.options.secondaryPlaceholder) {
                $2(this.$input).prop("placeholder", this.options.secondaryPlaceholder);
              }
            }
            /**
             * Check if chip is valid
             * @param {chip} chip
             */
          }, {
            key: "_isValid",
            value: function _isValid(chip) {
              if (chip.hasOwnProperty("tag") && chip.tag !== "") {
                var exists = false;
                for (var i3 = 0; i3 < this.chipsData.length; i3++) {
                  if (this.chipsData[i3].tag === chip.tag) {
                    exists = true;
                    break;
                  }
                }
                return !exists;
              }
              return false;
            }
            /**
             * Add chip
             * @param {chip} chip
             */
          }, {
            key: "addChip",
            value: function addChip(chip) {
              if (!this._isValid(chip) || this.chipsData.length >= this.options.limit) {
                return;
              }
              var renderedChip = this._renderChip(chip);
              this.$chips.add(renderedChip);
              this.chipsData.push(chip);
              $2(this.$input).before(renderedChip);
              this._setPlaceholder();
              if (typeof this.options.onChipAdd === "function") {
                this.options.onChipAdd.call(this, this.$el, renderedChip);
              }
            }
            /**
             * Delete chip
             * @param {Number} chip
             */
          }, {
            key: "deleteChip",
            value: function deleteChip(chipIndex) {
              var $chip = this.$chips.eq(chipIndex);
              this.$chips.eq(chipIndex).remove();
              this.$chips = this.$chips.filter(function(el) {
                return $2(el).index() >= 0;
              });
              this.chipsData.splice(chipIndex, 1);
              this._setPlaceholder();
              if (typeof this.options.onChipDelete === "function") {
                this.options.onChipDelete.call(this, this.$el, $chip[0]);
              }
            }
            /**
             * Select chip
             * @param {Number} chip
             */
          }, {
            key: "selectChip",
            value: function selectChip(chipIndex) {
              var $chip = this.$chips.eq(chipIndex);
              this._selectedChip = $chip;
              $chip[0].focus();
              if (typeof this.options.onChipSelect === "function") {
                this.options.onChipSelect.call(this, this.$el, $chip[0]);
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Chips2.__proto__ || Object.getPrototypeOf(Chips2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Chips;
            }
          }, {
            key: "_handleChipsKeydown",
            value: function _handleChipsKeydown(e2) {
              Chips2._keydown = true;
              var $chips = $2(e2.target).closest(".chips");
              var chipsKeydown = e2.target && $chips.length;
              if ($2(e2.target).is("input, textarea") || !chipsKeydown) {
                return;
              }
              var currChips = $chips[0].M_Chips;
              if (e2.keyCode === 8 || e2.keyCode === 46) {
                e2.preventDefault();
                var selectIndex = currChips.chipsData.length;
                if (currChips._selectedChip) {
                  var index = currChips._selectedChip.index();
                  currChips.deleteChip(index);
                  currChips._selectedChip = null;
                  selectIndex = Math.max(index - 1, 0);
                }
                if (currChips.chipsData.length) {
                  currChips.selectChip(selectIndex);
                }
              } else if (e2.keyCode === 37) {
                if (currChips._selectedChip) {
                  var _selectIndex = currChips._selectedChip.index() - 1;
                  if (_selectIndex < 0) {
                    return;
                  }
                  currChips.selectChip(_selectIndex);
                }
              } else if (e2.keyCode === 39) {
                if (currChips._selectedChip) {
                  var _selectIndex2 = currChips._selectedChip.index() + 1;
                  if (_selectIndex2 >= currChips.chipsData.length) {
                    currChips.$input[0].focus();
                  } else {
                    currChips.selectChip(_selectIndex2);
                  }
                }
              }
            }
            /**
             * Handle Chips Keyup
             * @param {Event} e
             */
          }, {
            key: "_handleChipsKeyup",
            value: function _handleChipsKeyup(e2) {
              Chips2._keydown = false;
            }
            /**
             * Handle Chips Blur
             * @param {Event} e
             */
          }, {
            key: "_handleChipsBlur",
            value: function _handleChipsBlur(e2) {
              if (!Chips2._keydown) {
                var $chips = $2(e2.target).closest(".chips");
                var currChips = $chips[0].M_Chips;
                currChips._selectedChip = null;
              }
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Chips2;
        }(Component);
        Chips._keydown = false;
        M.Chips = Chips;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Chips, "chips", "M_Chips");
        }
        $2(document).ready(function() {
          $2(document.body).on("click", ".chip .close", function() {
            var $chips = $2(this).closest(".chips");
            if ($chips.length && $chips[0].M_Chips) {
              return;
            }
            $2(this).closest(".chip").remove();
          });
        });
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {
          top: 0,
          bottom: Infinity,
          offset: 0,
          onPositionChange: null
        };
        var Pushpin = function(_Component13) {
          _inherits(Pushpin2, _Component13);
          function Pushpin2(el, options) {
            _classCallCheck(this, Pushpin2);
            var _this47 = _possibleConstructorReturn(this, (Pushpin2.__proto__ || Object.getPrototypeOf(Pushpin2)).call(this, Pushpin2, el, options));
            _this47.el.M_Pushpin = _this47;
            _this47.options = $2.extend({}, Pushpin2.defaults, options);
            _this47.originalOffset = _this47.el.offsetTop;
            Pushpin2._pushpins.push(_this47);
            _this47._setupEventHandlers();
            _this47._updatePosition();
            return _this47;
          }
          _createClass2(Pushpin2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this.el.style.top = null;
              this._removePinClasses();
              this._removeEventHandlers();
              var index = Pushpin2._pushpins.indexOf(this);
              Pushpin2._pushpins.splice(index, 1);
            }
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              document.addEventListener("scroll", Pushpin2._updateElements);
            }
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              document.removeEventListener("scroll", Pushpin2._updateElements);
            }
          }, {
            key: "_updatePosition",
            value: function _updatePosition() {
              var scrolled = M.getDocumentScrollTop() + this.options.offset;
              if (this.options.top <= scrolled && this.options.bottom >= scrolled && !this.el.classList.contains("pinned")) {
                this._removePinClasses();
                this.el.style.top = this.options.offset + "px";
                this.el.classList.add("pinned");
                if (typeof this.options.onPositionChange === "function") {
                  this.options.onPositionChange.call(this, "pinned");
                }
              }
              if (scrolled < this.options.top && !this.el.classList.contains("pin-top")) {
                this._removePinClasses();
                this.el.style.top = 0;
                this.el.classList.add("pin-top");
                if (typeof this.options.onPositionChange === "function") {
                  this.options.onPositionChange.call(this, "pin-top");
                }
              }
              if (scrolled > this.options.bottom && !this.el.classList.contains("pin-bottom")) {
                this._removePinClasses();
                this.el.classList.add("pin-bottom");
                this.el.style.top = this.options.bottom - this.originalOffset + "px";
                if (typeof this.options.onPositionChange === "function") {
                  this.options.onPositionChange.call(this, "pin-bottom");
                }
              }
            }
          }, {
            key: "_removePinClasses",
            value: function _removePinClasses() {
              this.el.classList.remove("pin-top");
              this.el.classList.remove("pinned");
              this.el.classList.remove("pin-bottom");
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Pushpin2.__proto__ || Object.getPrototypeOf(Pushpin2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Pushpin;
            }
          }, {
            key: "_updateElements",
            value: function _updateElements() {
              for (var elIndex in Pushpin2._pushpins) {
                var pInstance = Pushpin2._pushpins[elIndex];
                pInstance._updatePosition();
              }
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Pushpin2;
        }(Component);
        Pushpin._pushpins = [];
        M.Pushpin = Pushpin;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Pushpin, "pushpin", "M_Pushpin");
        }
      })(cash);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {
          direction: "top",
          hoverEnabled: true,
          toolbarEnabled: false
        };
        $2.fn.reverse = [].reverse;
        var FloatingActionButton = function(_Component14) {
          _inherits(FloatingActionButton2, _Component14);
          function FloatingActionButton2(el, options) {
            _classCallCheck(this, FloatingActionButton2);
            var _this48 = _possibleConstructorReturn(this, (FloatingActionButton2.__proto__ || Object.getPrototypeOf(FloatingActionButton2)).call(this, FloatingActionButton2, el, options));
            _this48.el.M_FloatingActionButton = _this48;
            _this48.options = $2.extend({}, FloatingActionButton2.defaults, options);
            _this48.isOpen = false;
            _this48.$anchor = _this48.$el.children("a").first();
            _this48.$menu = _this48.$el.children("ul").first();
            _this48.$floatingBtns = _this48.$el.find("ul .btn-floating");
            _this48.$floatingBtnsReverse = _this48.$el.find("ul .btn-floating").reverse();
            _this48.offsetY = 0;
            _this48.offsetX = 0;
            _this48.$el.addClass("direction-" + _this48.options.direction);
            if (_this48.options.direction === "top") {
              _this48.offsetY = 40;
            } else if (_this48.options.direction === "right") {
              _this48.offsetX = -40;
            } else if (_this48.options.direction === "bottom") {
              _this48.offsetY = -40;
            } else {
              _this48.offsetX = 40;
            }
            _this48._setupEventHandlers();
            return _this48;
          }
          _createClass2(FloatingActionButton2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.M_FloatingActionButton = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleFABClickBound = this._handleFABClick.bind(this);
              this._handleOpenBound = this.open.bind(this);
              this._handleCloseBound = this.close.bind(this);
              if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
                this.el.addEventListener("mouseenter", this._handleOpenBound);
                this.el.addEventListener("mouseleave", this._handleCloseBound);
              } else {
                this.el.addEventListener("click", this._handleFABClickBound);
              }
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              if (this.options.hoverEnabled && !this.options.toolbarEnabled) {
                this.el.removeEventListener("mouseenter", this._handleOpenBound);
                this.el.removeEventListener("mouseleave", this._handleCloseBound);
              } else {
                this.el.removeEventListener("click", this._handleFABClickBound);
              }
            }
            /**
             * Handle FAB Click
             */
          }, {
            key: "_handleFABClick",
            value: function _handleFABClick() {
              if (this.isOpen) {
                this.close();
              } else {
                this.open();
              }
            }
            /**
             * Handle Document Click
             * @param {Event} e
             */
          }, {
            key: "_handleDocumentClick",
            value: function _handleDocumentClick(e2) {
              if (!$2(e2.target).closest(this.$menu).length) {
                this.close();
              }
            }
            /**
             * Open FAB
             */
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen) {
                return;
              }
              if (this.options.toolbarEnabled) {
                this._animateInToolbar();
              } else {
                this._animateInFAB();
              }
              this.isOpen = true;
            }
            /**
             * Close FAB
             */
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              if (this.options.toolbarEnabled) {
                window.removeEventListener("scroll", this._handleCloseBound, true);
                document.body.removeEventListener("click", this._handleDocumentClickBound, true);
                this._animateOutToolbar();
              } else {
                this._animateOutFAB();
              }
              this.isOpen = false;
            }
            /**
             * Classic FAB Menu open
             */
          }, {
            key: "_animateInFAB",
            value: function _animateInFAB() {
              var _this49 = this;
              this.$el.addClass("active");
              var time = 0;
              this.$floatingBtnsReverse.each(function(el) {
                anim({
                  targets: el,
                  opacity: 1,
                  scale: [0.4, 1],
                  translateY: [_this49.offsetY, 0],
                  translateX: [_this49.offsetX, 0],
                  duration: 275,
                  delay: time,
                  easing: "easeInOutQuad"
                });
                time += 40;
              });
            }
            /**
             * Classic FAB Menu close
             */
          }, {
            key: "_animateOutFAB",
            value: function _animateOutFAB() {
              var _this50 = this;
              this.$floatingBtnsReverse.each(function(el) {
                anim.remove(el);
                anim({
                  targets: el,
                  opacity: 0,
                  scale: 0.4,
                  translateY: _this50.offsetY,
                  translateX: _this50.offsetX,
                  duration: 175,
                  easing: "easeOutQuad",
                  complete: function() {
                    _this50.$el.removeClass("active");
                  }
                });
              });
            }
            /**
             * Toolbar transition Menu open
             */
          }, {
            key: "_animateInToolbar",
            value: function _animateInToolbar() {
              var _this51 = this;
              var scaleFactor = void 0;
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var btnRect = this.el.getBoundingClientRect();
              var backdrop = $2('<div class="fab-backdrop"></div>');
              var fabColor = this.$anchor.css("background-color");
              this.$anchor.append(backdrop);
              this.offsetX = btnRect.left - windowWidth / 2 + btnRect.width / 2;
              this.offsetY = windowHeight - btnRect.bottom;
              scaleFactor = windowWidth / backdrop[0].clientWidth;
              this.btnBottom = btnRect.bottom;
              this.btnLeft = btnRect.left;
              this.btnWidth = btnRect.width;
              this.$el.addClass("active");
              this.$el.css({
                "text-align": "center",
                width: "100%",
                bottom: 0,
                left: 0,
                transform: "translateX(" + this.offsetX + "px)",
                transition: "none"
              });
              this.$anchor.css({
                transform: "translateY(" + -this.offsetY + "px)",
                transition: "none"
              });
              backdrop.css({
                "background-color": fabColor
              });
              setTimeout(function() {
                _this51.$el.css({
                  transform: "",
                  transition: "transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s"
                });
                _this51.$anchor.css({
                  overflow: "visible",
                  transform: "",
                  transition: "transform .2s"
                });
                setTimeout(function() {
                  _this51.$el.css({
                    overflow: "hidden",
                    "background-color": fabColor
                  });
                  backdrop.css({
                    transform: "scale(" + scaleFactor + ")",
                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                  });
                  _this51.$menu.children("li").children("a").css({
                    opacity: 1
                  });
                  _this51._handleDocumentClickBound = _this51._handleDocumentClick.bind(_this51);
                  window.addEventListener("scroll", _this51._handleCloseBound, true);
                  document.body.addEventListener("click", _this51._handleDocumentClickBound, true);
                }, 100);
              }, 0);
            }
            /**
             * Toolbar transition Menu close
             */
          }, {
            key: "_animateOutToolbar",
            value: function _animateOutToolbar() {
              var _this52 = this;
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var backdrop = this.$el.find(".fab-backdrop");
              var fabColor = this.$anchor.css("background-color");
              this.offsetX = this.btnLeft - windowWidth / 2 + this.btnWidth / 2;
              this.offsetY = windowHeight - this.btnBottom;
              this.$el.removeClass("active");
              this.$el.css({
                "background-color": "transparent",
                transition: "none"
              });
              this.$anchor.css({
                transition: "none"
              });
              backdrop.css({
                transform: "scale(0)",
                "background-color": fabColor
              });
              this.$menu.children("li").children("a").css({
                opacity: ""
              });
              setTimeout(function() {
                backdrop.remove();
                _this52.$el.css({
                  "text-align": "",
                  width: "",
                  bottom: "",
                  left: "",
                  overflow: "",
                  "background-color": "",
                  transform: "translate3d(" + -_this52.offsetX + "px,0,0)"
                });
                _this52.$anchor.css({
                  overflow: "",
                  transform: "translate3d(0," + _this52.offsetY + "px,0)"
                });
                setTimeout(function() {
                  _this52.$el.css({
                    transform: "translate3d(0,0,0)",
                    transition: "transform .2s"
                  });
                  _this52.$anchor.css({
                    transform: "translate3d(0,0,0)",
                    transition: "transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)"
                  });
                }, 20);
              }, 200);
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(FloatingActionButton2.__proto__ || Object.getPrototypeOf(FloatingActionButton2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_FloatingActionButton;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return FloatingActionButton2;
        }(Component);
        M.FloatingActionButton = FloatingActionButton;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(FloatingActionButton, "floatingActionButton", "M_FloatingActionButton");
        }
      })(cash, M.anime);
      (function($2) {
        "use strict";
        var _defaults3 = {
          // Close when date is selected
          autoClose: false,
          // the default output format for the input field value
          format: "mmm dd, yyyy",
          // Used to create date object from current input string
          parse: null,
          // The initial date to view when first opened
          defaultDate: null,
          // Make the `defaultDate` the initial selected value
          setDefaultDate: false,
          disableWeekends: false,
          disableDayFn: null,
          // First day of week (0: Sunday, 1: Monday etc)
          firstDay: 0,
          // The earliest date that can be selected
          minDate: null,
          // Thelatest date that can be selected
          maxDate: null,
          // Number of years either side, or array of upper/lower range
          yearRange: 10,
          // used internally (don't config outside)
          minYear: 0,
          maxYear: 9999,
          minMonth: void 0,
          maxMonth: void 0,
          startRange: null,
          endRange: null,
          isRTL: false,
          // Render the month after year in the calendar title
          showMonthAfterYear: false,
          // Render days of the calendar grid that fall in the next or previous month
          showDaysInNextAndPreviousMonths: false,
          // Specify a DOM element to render the calendar in
          container: null,
          // Show clear button
          showClearBtn: false,
          // internationalization
          i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok",
            previousMonth: "\u2039",
            nextMonth: "\u203A",
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            weekdaysAbbrev: ["S", "M", "T", "W", "T", "F", "S"]
          },
          // events array
          events: [],
          // callback function
          onSelect: null,
          onOpen: null,
          onClose: null,
          onDraw: null
        };
        var Datepicker = function(_Component15) {
          _inherits(Datepicker2, _Component15);
          function Datepicker2(el, options) {
            _classCallCheck(this, Datepicker2);
            var _this53 = _possibleConstructorReturn(this, (Datepicker2.__proto__ || Object.getPrototypeOf(Datepicker2)).call(this, Datepicker2, el, options));
            _this53.el.M_Datepicker = _this53;
            _this53.options = $2.extend({}, Datepicker2.defaults, options);
            if (!!options && options.hasOwnProperty("i18n") && typeof options.i18n === "object") {
              _this53.options.i18n = $2.extend({}, Datepicker2.defaults.i18n, options.i18n);
            }
            if (_this53.options.minDate)
              _this53.options.minDate.setHours(0, 0, 0, 0);
            if (_this53.options.maxDate)
              _this53.options.maxDate.setHours(0, 0, 0, 0);
            _this53.id = M.guid();
            _this53._setupVariables();
            _this53._insertHTMLIntoDOM();
            _this53._setupModal();
            _this53._setupEventHandlers();
            if (!_this53.options.defaultDate) {
              _this53.options.defaultDate = new Date(Date.parse(_this53.el.value));
            }
            var defDate = _this53.options.defaultDate;
            if (Datepicker2._isDate(defDate)) {
              if (_this53.options.setDefaultDate) {
                _this53.setDate(defDate, true);
                _this53.setInputValue();
              } else {
                _this53.gotoDate(defDate);
              }
            } else {
              _this53.gotoDate(/* @__PURE__ */ new Date());
            }
            _this53.isOpen = false;
            return _this53;
          }
          _createClass2(Datepicker2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.modal.destroy();
              $2(this.modalEl).remove();
              this.destroySelects();
              this.el.M_Datepicker = void 0;
            }
          }, {
            key: "destroySelects",
            value: function destroySelects() {
              var oldYearSelect = this.calendarEl.querySelector(".orig-select-year");
              if (oldYearSelect) {
                M.FormSelect.getInstance(oldYearSelect).destroy();
              }
              var oldMonthSelect = this.calendarEl.querySelector(".orig-select-month");
              if (oldMonthSelect) {
                M.FormSelect.getInstance(oldMonthSelect).destroy();
              }
            }
          }, {
            key: "_insertHTMLIntoDOM",
            value: function _insertHTMLIntoDOM() {
              if (this.options.showClearBtn) {
                $2(this.clearBtn).css({ visibility: "" });
                this.clearBtn.innerHTML = this.options.i18n.clear;
              }
              this.doneBtn.innerHTML = this.options.i18n.done;
              this.cancelBtn.innerHTML = this.options.i18n.cancel;
              if (this.options.container) {
                this.$modalEl.appendTo(this.options.container);
              } else {
                this.$modalEl.insertBefore(this.el);
              }
            }
          }, {
            key: "_setupModal",
            value: function _setupModal() {
              var _this54 = this;
              this.modalEl.id = "modal-" + this.id;
              this.modal = M.Modal.init(this.modalEl, {
                onCloseEnd: function() {
                  _this54.isOpen = false;
                }
              });
            }
          }, {
            key: "toString",
            value: function toString(format) {
              var _this55 = this;
              format = format || this.options.format;
              if (!Datepicker2._isDate(this.date)) {
                return "";
              }
              var formatArray = format.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
              var formattedDate = formatArray.map(function(label) {
                if (_this55.formats[label]) {
                  return _this55.formats[label]();
                }
                return label;
              }).join("");
              return formattedDate;
            }
          }, {
            key: "setDate",
            value: function setDate(date, preventOnSelect) {
              if (!date) {
                this.date = null;
                this._renderDateDisplay();
                return this.draw();
              }
              if (typeof date === "string") {
                date = new Date(Date.parse(date));
              }
              if (!Datepicker2._isDate(date)) {
                return;
              }
              var min = this.options.minDate, max = this.options.maxDate;
              if (Datepicker2._isDate(min) && date < min) {
                date = min;
              } else if (Datepicker2._isDate(max) && date > max) {
                date = max;
              }
              this.date = new Date(date.getTime());
              this._renderDateDisplay();
              Datepicker2._setToStartOfDay(this.date);
              this.gotoDate(this.date);
              if (!preventOnSelect && typeof this.options.onSelect === "function") {
                this.options.onSelect.call(this, this.date);
              }
            }
          }, {
            key: "setInputValue",
            value: function setInputValue() {
              this.el.value = this.toString();
              this.$el.trigger("change", { firedBy: this });
            }
          }, {
            key: "_renderDateDisplay",
            value: function _renderDateDisplay() {
              var displayDate = Datepicker2._isDate(this.date) ? this.date : /* @__PURE__ */ new Date();
              var i18n = this.options.i18n;
              var day = i18n.weekdaysShort[displayDate.getDay()];
              var month = i18n.monthsShort[displayDate.getMonth()];
              var date = displayDate.getDate();
              this.yearTextEl.innerHTML = displayDate.getFullYear();
              this.dateTextEl.innerHTML = day + ", " + month + " " + date;
            }
            /**
             * change view to a specific date
             */
          }, {
            key: "gotoDate",
            value: function gotoDate(date) {
              var newCalendar = true;
              if (!Datepicker2._isDate(date)) {
                return;
              }
              if (this.calendars) {
                var firstVisibleDate = new Date(this.calendars[0].year, this.calendars[0].month, 1), lastVisibleDate = new Date(this.calendars[this.calendars.length - 1].year, this.calendars[this.calendars.length - 1].month, 1), visibleDate = date.getTime();
                lastVisibleDate.setMonth(lastVisibleDate.getMonth() + 1);
                lastVisibleDate.setDate(lastVisibleDate.getDate() - 1);
                newCalendar = visibleDate < firstVisibleDate.getTime() || lastVisibleDate.getTime() < visibleDate;
              }
              if (newCalendar) {
                this.calendars = [{
                  month: date.getMonth(),
                  year: date.getFullYear()
                }];
              }
              this.adjustCalendars();
            }
          }, {
            key: "adjustCalendars",
            value: function adjustCalendars() {
              this.calendars[0] = this.adjustCalendar(this.calendars[0]);
              this.draw();
            }
          }, {
            key: "adjustCalendar",
            value: function adjustCalendar(calendar) {
              if (calendar.month < 0) {
                calendar.year -= Math.ceil(Math.abs(calendar.month) / 12);
                calendar.month += 12;
              }
              if (calendar.month > 11) {
                calendar.year += Math.floor(Math.abs(calendar.month) / 12);
                calendar.month -= 12;
              }
              return calendar;
            }
          }, {
            key: "nextMonth",
            value: function nextMonth() {
              this.calendars[0].month++;
              this.adjustCalendars();
            }
          }, {
            key: "prevMonth",
            value: function prevMonth() {
              this.calendars[0].month--;
              this.adjustCalendars();
            }
          }, {
            key: "render",
            value: function render3(year, month, randId) {
              var opts = this.options, now2 = /* @__PURE__ */ new Date(), days = Datepicker2._getDaysInMonth(year, month), before = new Date(year, month, 1).getDay(), data = [], row = [];
              Datepicker2._setToStartOfDay(now2);
              if (opts.firstDay > 0) {
                before -= opts.firstDay;
                if (before < 0) {
                  before += 7;
                }
              }
              var previousMonth = month === 0 ? 11 : month - 1, nextMonth = month === 11 ? 0 : month + 1, yearOfPreviousMonth = month === 0 ? year - 1 : year, yearOfNextMonth = month === 11 ? year + 1 : year, daysInPreviousMonth = Datepicker2._getDaysInMonth(yearOfPreviousMonth, previousMonth);
              var cells = days + before, after = cells;
              while (after > 7) {
                after -= 7;
              }
              cells += 7 - after;
              var isWeekSelected = false;
              for (var i3 = 0, r = 0; i3 < cells; i3++) {
                var day = new Date(year, month, 1 + (i3 - before)), isSelected = Datepicker2._isDate(this.date) ? Datepicker2._compareDates(day, this.date) : false, isToday = Datepicker2._compareDates(day, now2), hasEvent = opts.events.indexOf(day.toDateString()) !== -1 ? true : false, isEmpty = i3 < before || i3 >= days + before, dayNumber = 1 + (i3 - before), monthNumber = month, yearNumber = year, isStartRange = opts.startRange && Datepicker2._compareDates(opts.startRange, day), isEndRange = opts.endRange && Datepicker2._compareDates(opts.endRange, day), isInRange = opts.startRange && opts.endRange && opts.startRange < day && day < opts.endRange, isDisabled = opts.minDate && day < opts.minDate || opts.maxDate && day > opts.maxDate || opts.disableWeekends && Datepicker2._isWeekend(day) || opts.disableDayFn && opts.disableDayFn(day);
                if (isEmpty) {
                  if (i3 < before) {
                    dayNumber = daysInPreviousMonth + dayNumber;
                    monthNumber = previousMonth;
                    yearNumber = yearOfPreviousMonth;
                  } else {
                    dayNumber = dayNumber - days;
                    monthNumber = nextMonth;
                    yearNumber = yearOfNextMonth;
                  }
                }
                var dayConfig = {
                  day: dayNumber,
                  month: monthNumber,
                  year: yearNumber,
                  hasEvent,
                  isSelected,
                  isToday,
                  isDisabled,
                  isEmpty,
                  isStartRange,
                  isEndRange,
                  isInRange,
                  showDaysInNextAndPreviousMonths: opts.showDaysInNextAndPreviousMonths
                };
                row.push(this.renderDay(dayConfig));
                if (++r === 7) {
                  data.push(this.renderRow(row, opts.isRTL, isWeekSelected));
                  row = [];
                  r = 0;
                  isWeekSelected = false;
                }
              }
              return this.renderTable(opts, data, randId);
            }
          }, {
            key: "renderDay",
            value: function renderDay(opts) {
              var arr = [];
              var ariaSelected = "false";
              if (opts.isEmpty) {
                if (opts.showDaysInNextAndPreviousMonths) {
                  arr.push("is-outside-current-month");
                  arr.push("is-selection-disabled");
                } else {
                  return '<td class="is-empty"></td>';
                }
              }
              if (opts.isDisabled) {
                arr.push("is-disabled");
              }
              if (opts.isToday) {
                arr.push("is-today");
              }
              if (opts.isSelected) {
                arr.push("is-selected");
                ariaSelected = "true";
              }
              if (opts.hasEvent) {
                arr.push("has-event");
              }
              if (opts.isInRange) {
                arr.push("is-inrange");
              }
              if (opts.isStartRange) {
                arr.push("is-startrange");
              }
              if (opts.isEndRange) {
                arr.push("is-endrange");
              }
              return '<td data-day="' + opts.day + '" class="' + arr.join(" ") + '" aria-selected="' + ariaSelected + '">' + ('<button class="datepicker-day-button" type="button" data-year="' + opts.year + '" data-month="' + opts.month + '" data-day="' + opts.day + '">' + opts.day + "</button>") + "</td>";
            }
          }, {
            key: "renderRow",
            value: function renderRow(days, isRTL, isRowSelected) {
              return '<tr class="datepicker-row' + (isRowSelected ? " is-selected" : "") + '">' + (isRTL ? days.reverse() : days).join("") + "</tr>";
            }
          }, {
            key: "renderTable",
            value: function renderTable(opts, data, randId) {
              return '<div class="datepicker-table-wrapper"><table cellpadding="0" cellspacing="0" class="datepicker-table" role="grid" aria-labelledby="' + randId + '">' + this.renderHead(opts) + this.renderBody(data) + "</table></div>";
            }
          }, {
            key: "renderHead",
            value: function renderHead(opts) {
              var i3 = void 0, arr = [];
              for (i3 = 0; i3 < 7; i3++) {
                arr.push('<th scope="col"><abbr title="' + this.renderDayName(opts, i3) + '">' + this.renderDayName(opts, i3, true) + "</abbr></th>");
              }
              return "<thead><tr>" + (opts.isRTL ? arr.reverse() : arr).join("") + "</tr></thead>";
            }
          }, {
            key: "renderBody",
            value: function renderBody(rows) {
              return "<tbody>" + rows.join("") + "</tbody>";
            }
          }, {
            key: "renderTitle",
            value: function renderTitle(instance, c2, year, month, refYear, randId) {
              var i3 = void 0, j = void 0, arr = void 0, opts = this.options, isMinYear = year === opts.minYear, isMaxYear = year === opts.maxYear, html = '<div id="' + randId + '" class="datepicker-controls" role="heading" aria-live="assertive">', monthHtml = void 0, yearHtml = void 0, prev = true, next = true;
              for (arr = [], i3 = 0; i3 < 12; i3++) {
                arr.push('<option value="' + (year === refYear ? i3 - c2 : 12 + i3 - c2) + '"' + (i3 === month ? ' selected="selected"' : "") + (isMinYear && i3 < opts.minMonth || isMaxYear && i3 > opts.maxMonth ? 'disabled="disabled"' : "") + ">" + opts.i18n.months[i3] + "</option>");
              }
              monthHtml = '<select class="datepicker-select orig-select-month" tabindex="-1">' + arr.join("") + "</select>";
              if ($2.isArray(opts.yearRange)) {
                i3 = opts.yearRange[0];
                j = opts.yearRange[1] + 1;
              } else {
                i3 = year - opts.yearRange;
                j = 1 + year + opts.yearRange;
              }
              for (arr = []; i3 < j && i3 <= opts.maxYear; i3++) {
                if (i3 >= opts.minYear) {
                  arr.push('<option value="' + i3 + '" ' + (i3 === year ? 'selected="selected"' : "") + ">" + i3 + "</option>");
                }
              }
              yearHtml = '<select class="datepicker-select orig-select-year" tabindex="-1">' + arr.join("") + "</select>";
              var leftArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/><path d="M0-.5h24v24H0z" fill="none"/></svg>';
              html += '<button class="month-prev' + (prev ? "" : " is-disabled") + '" type="button">' + leftArrow + "</button>";
              html += '<div class="selects-container">';
              if (opts.showMonthAfterYear) {
                html += yearHtml + monthHtml;
              } else {
                html += monthHtml + yearHtml;
              }
              html += "</div>";
              if (isMinYear && (month === 0 || opts.minMonth >= month)) {
                prev = false;
              }
              if (isMaxYear && (month === 11 || opts.maxMonth <= month)) {
                next = false;
              }
              var rightArrow = '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/><path d="M0-.25h24v24H0z" fill="none"/></svg>';
              html += '<button class="month-next' + (next ? "" : " is-disabled") + '" type="button">' + rightArrow + "</button>";
              return html += "</div>";
            }
            /**
             * refresh the HTML
             */
          }, {
            key: "draw",
            value: function draw(force) {
              if (!this.isOpen && !force) {
                return;
              }
              var opts = this.options, minYear = opts.minYear, maxYear = opts.maxYear, minMonth = opts.minMonth, maxMonth = opts.maxMonth, html = "", randId = void 0;
              if (this._y <= minYear) {
                this._y = minYear;
                if (!isNaN(minMonth) && this._m < minMonth) {
                  this._m = minMonth;
                }
              }
              if (this._y >= maxYear) {
                this._y = maxYear;
                if (!isNaN(maxMonth) && this._m > maxMonth) {
                  this._m = maxMonth;
                }
              }
              randId = "datepicker-title-" + Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 2);
              for (var c2 = 0; c2 < 1; c2++) {
                this._renderDateDisplay();
                html += this.renderTitle(this, c2, this.calendars[c2].year, this.calendars[c2].month, this.calendars[0].year, randId) + this.render(this.calendars[c2].year, this.calendars[c2].month, randId);
              }
              this.destroySelects();
              this.calendarEl.innerHTML = html;
              var yearSelect = this.calendarEl.querySelector(".orig-select-year");
              var monthSelect = this.calendarEl.querySelector(".orig-select-month");
              M.FormSelect.init(yearSelect, {
                classes: "select-year",
                dropdownOptions: { container: document.body, constrainWidth: false }
              });
              M.FormSelect.init(monthSelect, {
                classes: "select-month",
                dropdownOptions: { container: document.body, constrainWidth: false }
              });
              yearSelect.addEventListener("change", this._handleYearChange.bind(this));
              monthSelect.addEventListener("change", this._handleMonthChange.bind(this));
              if (typeof this.options.onDraw === "function") {
                this.options.onDraw(this);
              }
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
              this._handleInputClickBound = this._handleInputClick.bind(this);
              this._handleInputChangeBound = this._handleInputChange.bind(this);
              this._handleCalendarClickBound = this._handleCalendarClick.bind(this);
              this._finishSelectionBound = this._finishSelection.bind(this);
              this._handleMonthChange = this._handleMonthChange.bind(this);
              this._closeBound = this.close.bind(this);
              this.el.addEventListener("click", this._handleInputClickBound);
              this.el.addEventListener("keydown", this._handleInputKeydownBound);
              this.el.addEventListener("change", this._handleInputChangeBound);
              this.calendarEl.addEventListener("click", this._handleCalendarClickBound);
              this.doneBtn.addEventListener("click", this._finishSelectionBound);
              this.cancelBtn.addEventListener("click", this._closeBound);
              if (this.options.showClearBtn) {
                this._handleClearClickBound = this._handleClearClick.bind(this);
                this.clearBtn.addEventListener("click", this._handleClearClickBound);
              }
            }
          }, {
            key: "_setupVariables",
            value: function _setupVariables() {
              var _this56 = this;
              this.$modalEl = $2(Datepicker2._template);
              this.modalEl = this.$modalEl[0];
              this.calendarEl = this.modalEl.querySelector(".datepicker-calendar");
              this.yearTextEl = this.modalEl.querySelector(".year-text");
              this.dateTextEl = this.modalEl.querySelector(".date-text");
              if (this.options.showClearBtn) {
                this.clearBtn = this.modalEl.querySelector(".datepicker-clear");
              }
              this.doneBtn = this.modalEl.querySelector(".datepicker-done");
              this.cancelBtn = this.modalEl.querySelector(".datepicker-cancel");
              this.formats = {
                d: function() {
                  return _this56.date.getDate();
                },
                dd: function() {
                  var d2 = _this56.date.getDate();
                  return (d2 < 10 ? "0" : "") + d2;
                },
                ddd: function() {
                  return _this56.options.i18n.weekdaysShort[_this56.date.getDay()];
                },
                dddd: function() {
                  return _this56.options.i18n.weekdays[_this56.date.getDay()];
                },
                m: function() {
                  return _this56.date.getMonth() + 1;
                },
                mm: function() {
                  var m2 = _this56.date.getMonth() + 1;
                  return (m2 < 10 ? "0" : "") + m2;
                },
                mmm: function() {
                  return _this56.options.i18n.monthsShort[_this56.date.getMonth()];
                },
                mmmm: function() {
                  return _this56.options.i18n.months[_this56.date.getMonth()];
                },
                yy: function() {
                  return ("" + _this56.date.getFullYear()).slice(2);
                },
                yyyy: function() {
                  return _this56.date.getFullYear();
                }
              };
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("click", this._handleInputClickBound);
              this.el.removeEventListener("keydown", this._handleInputKeydownBound);
              this.el.removeEventListener("change", this._handleInputChangeBound);
              this.calendarEl.removeEventListener("click", this._handleCalendarClickBound);
            }
          }, {
            key: "_handleInputClick",
            value: function _handleInputClick() {
              this.open();
            }
          }, {
            key: "_handleInputKeydown",
            value: function _handleInputKeydown(e2) {
              if (e2.which === M.keys.ENTER) {
                e2.preventDefault();
                this.open();
              }
            }
          }, {
            key: "_handleCalendarClick",
            value: function _handleCalendarClick(e2) {
              if (!this.isOpen) {
                return;
              }
              var $target = $2(e2.target);
              if (!$target.hasClass("is-disabled")) {
                if ($target.hasClass("datepicker-day-button") && !$target.hasClass("is-empty") && !$target.parent().hasClass("is-disabled")) {
                  this.setDate(new Date(e2.target.getAttribute("data-year"), e2.target.getAttribute("data-month"), e2.target.getAttribute("data-day")));
                  if (this.options.autoClose) {
                    this._finishSelection();
                  }
                } else if ($target.closest(".month-prev").length) {
                  this.prevMonth();
                } else if ($target.closest(".month-next").length) {
                  this.nextMonth();
                }
              }
            }
          }, {
            key: "_handleClearClick",
            value: function _handleClearClick() {
              this.date = null;
              this.setInputValue();
              this.close();
            }
          }, {
            key: "_handleMonthChange",
            value: function _handleMonthChange(e2) {
              this.gotoMonth(e2.target.value);
            }
          }, {
            key: "_handleYearChange",
            value: function _handleYearChange(e2) {
              this.gotoYear(e2.target.value);
            }
            /**
             * change view to a specific month (zero-index, e.g. 0: January)
             */
          }, {
            key: "gotoMonth",
            value: function gotoMonth(month) {
              if (!isNaN(month)) {
                this.calendars[0].month = parseInt(month, 10);
                this.adjustCalendars();
              }
            }
            /**
             * change view to a specific full year (e.g. "2012")
             */
          }, {
            key: "gotoYear",
            value: function gotoYear(year) {
              if (!isNaN(year)) {
                this.calendars[0].year = parseInt(year, 10);
                this.adjustCalendars();
              }
            }
          }, {
            key: "_handleInputChange",
            value: function _handleInputChange(e2) {
              var date = void 0;
              if (e2.firedBy === this) {
                return;
              }
              if (this.options.parse) {
                date = this.options.parse(this.el.value, this.options.format);
              } else {
                date = new Date(Date.parse(this.el.value));
              }
              if (Datepicker2._isDate(date)) {
                this.setDate(date);
              }
            }
          }, {
            key: "renderDayName",
            value: function renderDayName(opts, day, abbr) {
              day += opts.firstDay;
              while (day >= 7) {
                day -= 7;
              }
              return abbr ? opts.i18n.weekdaysAbbrev[day] : opts.i18n.weekdays[day];
            }
            /**
             * Set input value to the selected date and close Datepicker
             */
          }, {
            key: "_finishSelection",
            value: function _finishSelection() {
              this.setInputValue();
              this.close();
            }
            /**
             * Open Datepicker
             */
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen) {
                return;
              }
              this.isOpen = true;
              if (typeof this.options.onOpen === "function") {
                this.options.onOpen.call(this);
              }
              this.draw();
              this.modal.open();
              return this;
            }
            /**
             * Close Datepicker
             */
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              this.isOpen = false;
              if (typeof this.options.onClose === "function") {
                this.options.onClose.call(this);
              }
              this.modal.close();
              return this;
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Datepicker2.__proto__ || Object.getPrototypeOf(Datepicker2), "init", this).call(this, this, els, options);
            }
          }, {
            key: "_isDate",
            value: function _isDate(obj) {
              return /Date/.test(Object.prototype.toString.call(obj)) && !isNaN(obj.getTime());
            }
          }, {
            key: "_isWeekend",
            value: function _isWeekend(date) {
              var day = date.getDay();
              return day === 0 || day === 6;
            }
          }, {
            key: "_setToStartOfDay",
            value: function _setToStartOfDay(date) {
              if (Datepicker2._isDate(date))
                date.setHours(0, 0, 0, 0);
            }
          }, {
            key: "_getDaysInMonth",
            value: function _getDaysInMonth(year, month) {
              return [31, Datepicker2._isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
            }
          }, {
            key: "_isLeapYear",
            value: function _isLeapYear(year) {
              return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
            }
          }, {
            key: "_compareDates",
            value: function _compareDates(a, b) {
              return a.getTime() === b.getTime();
            }
          }, {
            key: "_setToStartOfDay",
            value: function _setToStartOfDay(date) {
              if (Datepicker2._isDate(date))
                date.setHours(0, 0, 0, 0);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Datepicker;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Datepicker2;
        }(Component);
        Datepicker._template = ['<div class= "modal datepicker-modal">', '<div class="modal-content datepicker-container">', '<div class="datepicker-date-display">', '<span class="year-text"></span>', '<span class="date-text"></span>', "</div>", '<div class="datepicker-calendar-container">', '<div class="datepicker-calendar"></div>', '<div class="datepicker-footer">', '<button class="btn-flat datepicker-clear waves-effect" style="visibility: hidden;" type="button"></button>', '<div class="confirmation-btns">', '<button class="btn-flat datepicker-cancel waves-effect" type="button"></button>', '<button class="btn-flat datepicker-done waves-effect" type="button"></button>', "</div>", "</div>", "</div>", "</div>", "</div>"].join("");
        M.Datepicker = Datepicker;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Datepicker, "datepicker", "M_Datepicker");
        }
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {
          dialRadius: 135,
          outerRadius: 105,
          innerRadius: 70,
          tickRadius: 20,
          duration: 350,
          container: null,
          defaultTime: "now",
          // default time, 'now' or '13:14' e.g.
          fromNow: 0,
          // Millisecond offset from the defaultTime
          showClearBtn: false,
          // internationalization
          i18n: {
            cancel: "Cancel",
            clear: "Clear",
            done: "Ok"
          },
          autoClose: false,
          // auto close when minute is selected
          twelveHour: true,
          // change to 12 hour AM/PM clock from 24 hour
          vibrate: true,
          // vibrate the device when dragging clock hand
          // Callbacks
          onOpenStart: null,
          onOpenEnd: null,
          onCloseStart: null,
          onCloseEnd: null,
          onSelect: null
        };
        var Timepicker = function(_Component16) {
          _inherits(Timepicker2, _Component16);
          function Timepicker2(el, options) {
            _classCallCheck(this, Timepicker2);
            var _this57 = _possibleConstructorReturn(this, (Timepicker2.__proto__ || Object.getPrototypeOf(Timepicker2)).call(this, Timepicker2, el, options));
            _this57.el.M_Timepicker = _this57;
            _this57.options = $2.extend({}, Timepicker2.defaults, options);
            _this57.id = M.guid();
            _this57._insertHTMLIntoDOM();
            _this57._setupModal();
            _this57._setupVariables();
            _this57._setupEventHandlers();
            _this57._clockSetup();
            _this57._pickerSetup();
            return _this57;
          }
          _createClass2(Timepicker2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.modal.destroy();
              $2(this.modalEl).remove();
              this.el.M_Timepicker = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleInputKeydownBound = this._handleInputKeydown.bind(this);
              this._handleInputClickBound = this._handleInputClick.bind(this);
              this._handleClockClickStartBound = this._handleClockClickStart.bind(this);
              this._handleDocumentClickMoveBound = this._handleDocumentClickMove.bind(this);
              this._handleDocumentClickEndBound = this._handleDocumentClickEnd.bind(this);
              this.el.addEventListener("click", this._handleInputClickBound);
              this.el.addEventListener("keydown", this._handleInputKeydownBound);
              this.plate.addEventListener("mousedown", this._handleClockClickStartBound);
              this.plate.addEventListener("touchstart", this._handleClockClickStartBound);
              $2(this.spanHours).on("click", this.showView.bind(this, "hours"));
              $2(this.spanMinutes).on("click", this.showView.bind(this, "minutes"));
            }
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("click", this._handleInputClickBound);
              this.el.removeEventListener("keydown", this._handleInputKeydownBound);
            }
          }, {
            key: "_handleInputClick",
            value: function _handleInputClick() {
              this.open();
            }
          }, {
            key: "_handleInputKeydown",
            value: function _handleInputKeydown(e2) {
              if (e2.which === M.keys.ENTER) {
                e2.preventDefault();
                this.open();
              }
            }
          }, {
            key: "_handleClockClickStart",
            value: function _handleClockClickStart(e2) {
              e2.preventDefault();
              var clockPlateBR = this.plate.getBoundingClientRect();
              var offset = { x: clockPlateBR.left, y: clockPlateBR.top };
              this.x0 = offset.x + this.options.dialRadius;
              this.y0 = offset.y + this.options.dialRadius;
              this.moved = false;
              var clickPos = Timepicker2._Pos(e2);
              this.dx = clickPos.x - this.x0;
              this.dy = clickPos.y - this.y0;
              this.setHand(this.dx, this.dy, false);
              document.addEventListener("mousemove", this._handleDocumentClickMoveBound);
              document.addEventListener("touchmove", this._handleDocumentClickMoveBound);
              document.addEventListener("mouseup", this._handleDocumentClickEndBound);
              document.addEventListener("touchend", this._handleDocumentClickEndBound);
            }
          }, {
            key: "_handleDocumentClickMove",
            value: function _handleDocumentClickMove(e2) {
              e2.preventDefault();
              var clickPos = Timepicker2._Pos(e2);
              var x2 = clickPos.x - this.x0;
              var y = clickPos.y - this.y0;
              this.moved = true;
              this.setHand(x2, y, false, true);
            }
          }, {
            key: "_handleDocumentClickEnd",
            value: function _handleDocumentClickEnd(e2) {
              var _this58 = this;
              e2.preventDefault();
              document.removeEventListener("mouseup", this._handleDocumentClickEndBound);
              document.removeEventListener("touchend", this._handleDocumentClickEndBound);
              var clickPos = Timepicker2._Pos(e2);
              var x2 = clickPos.x - this.x0;
              var y = clickPos.y - this.y0;
              if (this.moved && x2 === this.dx && y === this.dy) {
                this.setHand(x2, y);
              }
              if (this.currentView === "hours") {
                this.showView("minutes", this.options.duration / 2);
              } else if (this.options.autoClose) {
                $2(this.minutesView).addClass("timepicker-dial-out");
                setTimeout(function() {
                  _this58.done();
                }, this.options.duration / 2);
              }
              if (typeof this.options.onSelect === "function") {
                this.options.onSelect.call(this, this.hours, this.minutes);
              }
              document.removeEventListener("mousemove", this._handleDocumentClickMoveBound);
              document.removeEventListener("touchmove", this._handleDocumentClickMoveBound);
            }
          }, {
            key: "_insertHTMLIntoDOM",
            value: function _insertHTMLIntoDOM() {
              this.$modalEl = $2(Timepicker2._template);
              this.modalEl = this.$modalEl[0];
              this.modalEl.id = "modal-" + this.id;
              var containerEl = document.querySelector(this.options.container);
              if (this.options.container && !!containerEl) {
                this.$modalEl.appendTo(containerEl);
              } else {
                this.$modalEl.insertBefore(this.el);
              }
            }
          }, {
            key: "_setupModal",
            value: function _setupModal() {
              var _this59 = this;
              this.modal = M.Modal.init(this.modalEl, {
                onOpenStart: this.options.onOpenStart,
                onOpenEnd: this.options.onOpenEnd,
                onCloseStart: this.options.onCloseStart,
                onCloseEnd: function() {
                  if (typeof _this59.options.onCloseEnd === "function") {
                    _this59.options.onCloseEnd.call(_this59);
                  }
                  _this59.isOpen = false;
                }
              });
            }
          }, {
            key: "_setupVariables",
            value: function _setupVariables() {
              this.currentView = "hours";
              this.vibrate = navigator.vibrate ? "vibrate" : navigator.webkitVibrate ? "webkitVibrate" : null;
              this._canvas = this.modalEl.querySelector(".timepicker-canvas");
              this.plate = this.modalEl.querySelector(".timepicker-plate");
              this.hoursView = this.modalEl.querySelector(".timepicker-hours");
              this.minutesView = this.modalEl.querySelector(".timepicker-minutes");
              this.spanHours = this.modalEl.querySelector(".timepicker-span-hours");
              this.spanMinutes = this.modalEl.querySelector(".timepicker-span-minutes");
              this.spanAmPm = this.modalEl.querySelector(".timepicker-span-am-pm");
              this.footer = this.modalEl.querySelector(".timepicker-footer");
              this.amOrPm = "PM";
            }
          }, {
            key: "_pickerSetup",
            value: function _pickerSetup() {
              var $clearBtn = $2('<button class="btn-flat timepicker-clear waves-effect" style="visibility: hidden;" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.clear + "</button>").appendTo(this.footer).on("click", this.clear.bind(this));
              if (this.options.showClearBtn) {
                $clearBtn.css({ visibility: "" });
              }
              var confirmationBtnsContainer = $2('<div class="confirmation-btns"></div>');
              $2('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.cancel + "</button>").appendTo(confirmationBtnsContainer).on("click", this.close.bind(this));
              $2('<button class="btn-flat timepicker-close waves-effect" type="button" tabindex="' + (this.options.twelveHour ? "3" : "1") + '">' + this.options.i18n.done + "</button>").appendTo(confirmationBtnsContainer).on("click", this.done.bind(this));
              confirmationBtnsContainer.appendTo(this.footer);
            }
          }, {
            key: "_clockSetup",
            value: function _clockSetup() {
              if (this.options.twelveHour) {
                this.$amBtn = $2('<div class="am-btn">AM</div>');
                this.$pmBtn = $2('<div class="pm-btn">PM</div>');
                this.$amBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
                this.$pmBtn.on("click", this._handleAmPmClick.bind(this)).appendTo(this.spanAmPm);
              }
              this._buildHoursView();
              this._buildMinutesView();
              this._buildSVGClock();
            }
          }, {
            key: "_buildSVGClock",
            value: function _buildSVGClock() {
              var dialRadius = this.options.dialRadius;
              var tickRadius = this.options.tickRadius;
              var diameter = dialRadius * 2;
              var svg = Timepicker2._createSVGEl("svg");
              svg.setAttribute("class", "timepicker-svg");
              svg.setAttribute("width", diameter);
              svg.setAttribute("height", diameter);
              var g = Timepicker2._createSVGEl("g");
              g.setAttribute("transform", "translate(" + dialRadius + "," + dialRadius + ")");
              var bearing = Timepicker2._createSVGEl("circle");
              bearing.setAttribute("class", "timepicker-canvas-bearing");
              bearing.setAttribute("cx", 0);
              bearing.setAttribute("cy", 0);
              bearing.setAttribute("r", 4);
              var hand = Timepicker2._createSVGEl("line");
              hand.setAttribute("x1", 0);
              hand.setAttribute("y1", 0);
              var bg = Timepicker2._createSVGEl("circle");
              bg.setAttribute("class", "timepicker-canvas-bg");
              bg.setAttribute("r", tickRadius);
              g.appendChild(hand);
              g.appendChild(bg);
              g.appendChild(bearing);
              svg.appendChild(g);
              this._canvas.appendChild(svg);
              this.hand = hand;
              this.bg = bg;
              this.bearing = bearing;
              this.g = g;
            }
          }, {
            key: "_buildHoursView",
            value: function _buildHoursView() {
              var $tick = $2('<div class="timepicker-tick"></div>');
              if (this.options.twelveHour) {
                for (var i3 = 1; i3 < 13; i3 += 1) {
                  var tick = $tick.clone();
                  var radian = i3 / 6 * Math.PI;
                  var radius = this.options.outerRadius;
                  tick.css({
                    left: this.options.dialRadius + Math.sin(radian) * radius - this.options.tickRadius + "px",
                    top: this.options.dialRadius - Math.cos(radian) * radius - this.options.tickRadius + "px"
                  });
                  tick.html(i3 === 0 ? "00" : i3);
                  this.hoursView.appendChild(tick[0]);
                }
              } else {
                for (var _i2 = 0; _i2 < 24; _i2 += 1) {
                  var _tick = $tick.clone();
                  var _radian = _i2 / 6 * Math.PI;
                  var inner = _i2 > 0 && _i2 < 13;
                  var _radius = inner ? this.options.innerRadius : this.options.outerRadius;
                  _tick.css({
                    left: this.options.dialRadius + Math.sin(_radian) * _radius - this.options.tickRadius + "px",
                    top: this.options.dialRadius - Math.cos(_radian) * _radius - this.options.tickRadius + "px"
                  });
                  _tick.html(_i2 === 0 ? "00" : _i2);
                  this.hoursView.appendChild(_tick[0]);
                }
              }
            }
          }, {
            key: "_buildMinutesView",
            value: function _buildMinutesView() {
              var $tick = $2('<div class="timepicker-tick"></div>');
              for (var i3 = 0; i3 < 60; i3 += 5) {
                var tick = $tick.clone();
                var radian = i3 / 30 * Math.PI;
                tick.css({
                  left: this.options.dialRadius + Math.sin(radian) * this.options.outerRadius - this.options.tickRadius + "px",
                  top: this.options.dialRadius - Math.cos(radian) * this.options.outerRadius - this.options.tickRadius + "px"
                });
                tick.html(Timepicker2._addLeadingZero(i3));
                this.minutesView.appendChild(tick[0]);
              }
            }
          }, {
            key: "_handleAmPmClick",
            value: function _handleAmPmClick(e2) {
              var $btnClicked = $2(e2.target);
              this.amOrPm = $btnClicked.hasClass("am-btn") ? "AM" : "PM";
              this._updateAmPmView();
            }
          }, {
            key: "_updateAmPmView",
            value: function _updateAmPmView() {
              if (this.options.twelveHour) {
                this.$amBtn.toggleClass("text-primary", this.amOrPm === "AM");
                this.$pmBtn.toggleClass("text-primary", this.amOrPm === "PM");
              }
            }
          }, {
            key: "_updateTimeFromInput",
            value: function _updateTimeFromInput() {
              var value = ((this.el.value || this.options.defaultTime || "") + "").split(":");
              if (this.options.twelveHour && !(typeof value[1] === "undefined")) {
                if (value[1].toUpperCase().indexOf("AM") > 0) {
                  this.amOrPm = "AM";
                } else {
                  this.amOrPm = "PM";
                }
                value[1] = value[1].replace("AM", "").replace("PM", "");
              }
              if (value[0] === "now") {
                var now2 = new Date(+/* @__PURE__ */ new Date() + this.options.fromNow);
                value = [now2.getHours(), now2.getMinutes()];
                if (this.options.twelveHour) {
                  this.amOrPm = value[0] >= 12 && value[0] < 24 ? "PM" : "AM";
                }
              }
              this.hours = +value[0] || 0;
              this.minutes = +value[1] || 0;
              this.spanHours.innerHTML = this.hours;
              this.spanMinutes.innerHTML = Timepicker2._addLeadingZero(this.minutes);
              this._updateAmPmView();
            }
          }, {
            key: "showView",
            value: function showView(view, delay) {
              if (view === "minutes" && $2(this.hoursView).css("visibility") === "visible") {
              }
              var isHours = view === "hours", nextView = isHours ? this.hoursView : this.minutesView, hideView = isHours ? this.minutesView : this.hoursView;
              this.currentView = view;
              $2(this.spanHours).toggleClass("text-primary", isHours);
              $2(this.spanMinutes).toggleClass("text-primary", !isHours);
              hideView.classList.add("timepicker-dial-out");
              $2(nextView).css("visibility", "visible").removeClass("timepicker-dial-out");
              this.resetClock(delay);
              clearTimeout(this.toggleViewTimer);
              this.toggleViewTimer = setTimeout(function() {
                $2(hideView).css("visibility", "hidden");
              }, this.options.duration);
            }
          }, {
            key: "resetClock",
            value: function resetClock(delay) {
              var view = this.currentView, value = this[view], isHours = view === "hours", unit = Math.PI / (isHours ? 6 : 30), radian = value * unit, radius = isHours && value > 0 && value < 13 ? this.options.innerRadius : this.options.outerRadius, x2 = Math.sin(radian) * radius, y = -Math.cos(radian) * radius, self2 = this;
              if (delay) {
                $2(this.canvas).addClass("timepicker-canvas-out");
                setTimeout(function() {
                  $2(self2.canvas).removeClass("timepicker-canvas-out");
                  self2.setHand(x2, y);
                }, delay);
              } else {
                this.setHand(x2, y);
              }
            }
          }, {
            key: "setHand",
            value: function setHand(x2, y, roundBy5) {
              var _this60 = this;
              var radian = Math.atan2(x2, -y), isHours = this.currentView === "hours", unit = Math.PI / (isHours || roundBy5 ? 6 : 30), z = Math.sqrt(x2 * x2 + y * y), inner = isHours && z < (this.options.outerRadius + this.options.innerRadius) / 2, radius = inner ? this.options.innerRadius : this.options.outerRadius;
              if (this.options.twelveHour) {
                radius = this.options.outerRadius;
              }
              if (radian < 0) {
                radian = Math.PI * 2 + radian;
              }
              var value = Math.round(radian / unit);
              radian = value * unit;
              if (this.options.twelveHour) {
                if (isHours) {
                  if (value === 0)
                    value = 12;
                } else {
                  if (roundBy5)
                    value *= 5;
                  if (value === 60)
                    value = 0;
                }
              } else {
                if (isHours) {
                  if (value === 12) {
                    value = 0;
                  }
                  value = inner ? value === 0 ? 12 : value : value === 0 ? 0 : value + 12;
                } else {
                  if (roundBy5) {
                    value *= 5;
                  }
                  if (value === 60) {
                    value = 0;
                  }
                }
              }
              if (this[this.currentView] !== value) {
                if (this.vibrate && this.options.vibrate) {
                  if (!this.vibrateTimer) {
                    navigator[this.vibrate](10);
                    this.vibrateTimer = setTimeout(function() {
                      _this60.vibrateTimer = null;
                    }, 100);
                  }
                }
              }
              this[this.currentView] = value;
              if (isHours) {
                this["spanHours"].innerHTML = value;
              } else {
                this["spanMinutes"].innerHTML = Timepicker2._addLeadingZero(value);
              }
              var cx1 = Math.sin(radian) * (radius - this.options.tickRadius), cy1 = -Math.cos(radian) * (radius - this.options.tickRadius), cx2 = Math.sin(radian) * radius, cy2 = -Math.cos(radian) * radius;
              this.hand.setAttribute("x2", cx1);
              this.hand.setAttribute("y2", cy1);
              this.bg.setAttribute("cx", cx2);
              this.bg.setAttribute("cy", cy2);
            }
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen) {
                return;
              }
              this.isOpen = true;
              this._updateTimeFromInput();
              this.showView("hours");
              this.modal.open();
            }
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              this.isOpen = false;
              this.modal.close();
            }
            /**
             * Finish timepicker selection.
             */
          }, {
            key: "done",
            value: function done(e2, clearValue) {
              var last = this.el.value;
              var value = clearValue ? "" : Timepicker2._addLeadingZero(this.hours) + ":" + Timepicker2._addLeadingZero(this.minutes);
              this.time = value;
              if (!clearValue && this.options.twelveHour) {
                value = value + " " + this.amOrPm;
              }
              this.el.value = value;
              if (value !== last) {
                this.$el.trigger("change");
              }
              this.close();
              this.el.focus();
            }
          }, {
            key: "clear",
            value: function clear() {
              this.done(null, true);
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Timepicker2.__proto__ || Object.getPrototypeOf(Timepicker2), "init", this).call(this, this, els, options);
            }
          }, {
            key: "_addLeadingZero",
            value: function _addLeadingZero(num) {
              return (num < 10 ? "0" : "") + num;
            }
          }, {
            key: "_createSVGEl",
            value: function _createSVGEl(name2) {
              var svgNS = "http://www.w3.org/2000/svg";
              return document.createElementNS(svgNS, name2);
            }
            /**
             * @typedef {Object} Point
             * @property {number} x The X Coordinate
             * @property {number} y The Y Coordinate
             */
            /**
             * Get x position of mouse or touch event
             * @param {Event} e
             * @return {Point} x and y location
             */
          }, {
            key: "_Pos",
            value: function _Pos(e2) {
              if (e2.targetTouches && e2.targetTouches.length >= 1) {
                return { x: e2.targetTouches[0].clientX, y: e2.targetTouches[0].clientY };
              }
              return { x: e2.clientX, y: e2.clientY };
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Timepicker;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Timepicker2;
        }(Component);
        Timepicker._template = ['<div class= "modal timepicker-modal">', '<div class="modal-content timepicker-container">', '<div class="timepicker-digital-display">', '<div class="timepicker-text-container">', '<div class="timepicker-display-column">', '<span class="timepicker-span-hours text-primary"></span>', ":", '<span class="timepicker-span-minutes"></span>', "</div>", '<div class="timepicker-display-column timepicker-display-am-pm">', '<div class="timepicker-span-am-pm"></div>', "</div>", "</div>", "</div>", '<div class="timepicker-analog-display">', '<div class="timepicker-plate">', '<div class="timepicker-canvas"></div>', '<div class="timepicker-dial timepicker-hours"></div>', '<div class="timepicker-dial timepicker-minutes timepicker-dial-out"></div>', "</div>", '<div class="timepicker-footer"></div>', "</div>", "</div>", "</div>"].join("");
        M.Timepicker = Timepicker;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Timepicker, "timepicker", "M_Timepicker");
        }
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {};
        var CharacterCounter = function(_Component17) {
          _inherits(CharacterCounter2, _Component17);
          function CharacterCounter2(el, options) {
            _classCallCheck(this, CharacterCounter2);
            var _this61 = _possibleConstructorReturn(this, (CharacterCounter2.__proto__ || Object.getPrototypeOf(CharacterCounter2)).call(this, CharacterCounter2, el, options));
            _this61.el.M_CharacterCounter = _this61;
            _this61.options = $2.extend({}, CharacterCounter2.defaults, options);
            _this61.isInvalid = false;
            _this61.isValidLength = false;
            _this61._setupCounter();
            _this61._setupEventHandlers();
            return _this61;
          }
          _createClass2(CharacterCounter2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.CharacterCounter = void 0;
              this._removeCounter();
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleUpdateCounterBound = this.updateCounter.bind(this);
              this.el.addEventListener("focus", this._handleUpdateCounterBound, true);
              this.el.addEventListener("input", this._handleUpdateCounterBound, true);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("focus", this._handleUpdateCounterBound, true);
              this.el.removeEventListener("input", this._handleUpdateCounterBound, true);
            }
            /**
             * Setup counter element
             */
          }, {
            key: "_setupCounter",
            value: function _setupCounter() {
              this.counterEl = document.createElement("span");
              $2(this.counterEl).addClass("character-counter").css({
                float: "right",
                "font-size": "12px",
                height: 1
              });
              this.$el.parent().append(this.counterEl);
            }
            /**
             * Remove counter element
             */
          }, {
            key: "_removeCounter",
            value: function _removeCounter() {
              $2(this.counterEl).remove();
            }
            /**
             * Update counter
             */
          }, {
            key: "updateCounter",
            value: function updateCounter() {
              var maxLength = +this.$el.attr("data-length"), actualLength = this.el.value.length;
              this.isValidLength = actualLength <= maxLength;
              var counterString = actualLength;
              if (maxLength) {
                counterString += "/" + maxLength;
                this._validateInput();
              }
              $2(this.counterEl).html(counterString);
            }
            /**
             * Add validation classes
             */
          }, {
            key: "_validateInput",
            value: function _validateInput() {
              if (this.isValidLength && this.isInvalid) {
                this.isInvalid = false;
                this.$el.removeClass("invalid");
              } else if (!this.isValidLength && !this.isInvalid) {
                this.isInvalid = true;
                this.$el.removeClass("valid");
                this.$el.addClass("invalid");
              }
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(CharacterCounter2.__proto__ || Object.getPrototypeOf(CharacterCounter2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_CharacterCounter;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return CharacterCounter2;
        }(Component);
        M.CharacterCounter = CharacterCounter;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(CharacterCounter, "characterCounter", "M_CharacterCounter");
        }
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {
          duration: 200,
          // ms
          dist: -100,
          // zoom scale TODO: make this more intuitive as an option
          shift: 0,
          // spacing for center image
          padding: 0,
          // Padding between non center items
          numVisible: 5,
          // Number of visible items in carousel
          fullWidth: false,
          // Change to full width styles
          indicators: false,
          // Toggle indicators
          noWrap: false,
          // Don't wrap around and cycle through items.
          onCycleTo: null
          // Callback for when a new slide is cycled to.
        };
        var Carousel = function(_Component18) {
          _inherits(Carousel2, _Component18);
          function Carousel2(el, options) {
            _classCallCheck(this, Carousel2);
            var _this62 = _possibleConstructorReturn(this, (Carousel2.__proto__ || Object.getPrototypeOf(Carousel2)).call(this, Carousel2, el, options));
            _this62.el.M_Carousel = _this62;
            _this62.options = $2.extend({}, Carousel2.defaults, options);
            _this62.hasMultipleSlides = _this62.$el.find(".carousel-item").length > 1;
            _this62.showIndicators = _this62.options.indicators && _this62.hasMultipleSlides;
            _this62.noWrap = _this62.options.noWrap || !_this62.hasMultipleSlides;
            _this62.pressed = false;
            _this62.dragged = false;
            _this62.offset = _this62.target = 0;
            _this62.images = [];
            _this62.itemWidth = _this62.$el.find(".carousel-item").first().innerWidth();
            _this62.itemHeight = _this62.$el.find(".carousel-item").first().innerHeight();
            _this62.dim = _this62.itemWidth * 2 + _this62.options.padding || 1;
            _this62._autoScrollBound = _this62._autoScroll.bind(_this62);
            _this62._trackBound = _this62._track.bind(_this62);
            if (_this62.options.fullWidth) {
              _this62.options.dist = 0;
              _this62._setCarouselHeight();
              if (_this62.showIndicators) {
                _this62.$el.find(".carousel-fixed-item").addClass("with-indicators");
              }
            }
            _this62.$indicators = $2('<ul class="indicators"></ul>');
            _this62.$el.find(".carousel-item").each(function(el2, i3) {
              _this62.images.push(el2);
              if (_this62.showIndicators) {
                var $indicator = $2('<li class="indicator-item"></li>');
                if (i3 === 0) {
                  $indicator[0].classList.add("active");
                }
                _this62.$indicators.append($indicator);
              }
            });
            if (_this62.showIndicators) {
              _this62.$el.append(_this62.$indicators);
            }
            _this62.count = _this62.images.length;
            _this62.options.numVisible = Math.min(_this62.count, _this62.options.numVisible);
            _this62.xform = "transform";
            ["webkit", "Moz", "O", "ms"].every(function(prefix) {
              var e2 = prefix + "Transform";
              if (typeof document.body.style[e2] !== "undefined") {
                _this62.xform = e2;
                return false;
              }
              return true;
            });
            _this62._setupEventHandlers();
            _this62._scroll(_this62.offset);
            return _this62;
          }
          _createClass2(Carousel2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.M_Carousel = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              var _this63 = this;
              this._handleCarouselTapBound = this._handleCarouselTap.bind(this);
              this._handleCarouselDragBound = this._handleCarouselDrag.bind(this);
              this._handleCarouselReleaseBound = this._handleCarouselRelease.bind(this);
              this._handleCarouselClickBound = this._handleCarouselClick.bind(this);
              if (typeof window.ontouchstart !== "undefined") {
                this.el.addEventListener("touchstart", this._handleCarouselTapBound);
                this.el.addEventListener("touchmove", this._handleCarouselDragBound);
                this.el.addEventListener("touchend", this._handleCarouselReleaseBound);
              }
              this.el.addEventListener("mousedown", this._handleCarouselTapBound);
              this.el.addEventListener("mousemove", this._handleCarouselDragBound);
              this.el.addEventListener("mouseup", this._handleCarouselReleaseBound);
              this.el.addEventListener("mouseleave", this._handleCarouselReleaseBound);
              this.el.addEventListener("click", this._handleCarouselClickBound);
              if (this.showIndicators && this.$indicators) {
                this._handleIndicatorClickBound = this._handleIndicatorClick.bind(this);
                this.$indicators.find(".indicator-item").each(function(el, i3) {
                  el.addEventListener("click", _this63._handleIndicatorClickBound);
                });
              }
              var throttledResize = M.throttle(this._handleResize, 200);
              this._handleThrottledResizeBound = throttledResize.bind(this);
              window.addEventListener("resize", this._handleThrottledResizeBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              var _this64 = this;
              if (typeof window.ontouchstart !== "undefined") {
                this.el.removeEventListener("touchstart", this._handleCarouselTapBound);
                this.el.removeEventListener("touchmove", this._handleCarouselDragBound);
                this.el.removeEventListener("touchend", this._handleCarouselReleaseBound);
              }
              this.el.removeEventListener("mousedown", this._handleCarouselTapBound);
              this.el.removeEventListener("mousemove", this._handleCarouselDragBound);
              this.el.removeEventListener("mouseup", this._handleCarouselReleaseBound);
              this.el.removeEventListener("mouseleave", this._handleCarouselReleaseBound);
              this.el.removeEventListener("click", this._handleCarouselClickBound);
              if (this.showIndicators && this.$indicators) {
                this.$indicators.find(".indicator-item").each(function(el, i3) {
                  el.removeEventListener("click", _this64._handleIndicatorClickBound);
                });
              }
              window.removeEventListener("resize", this._handleThrottledResizeBound);
            }
            /**
             * Handle Carousel Tap
             * @param {Event} e
             */
          }, {
            key: "_handleCarouselTap",
            value: function _handleCarouselTap(e2) {
              if (e2.type === "mousedown" && $2(e2.target).is("img")) {
                e2.preventDefault();
              }
              this.pressed = true;
              this.dragged = false;
              this.verticalDragged = false;
              this.reference = this._xpos(e2);
              this.referenceY = this._ypos(e2);
              this.velocity = this.amplitude = 0;
              this.frame = this.offset;
              this.timestamp = Date.now();
              clearInterval(this.ticker);
              this.ticker = setInterval(this._trackBound, 100);
            }
            /**
             * Handle Carousel Drag
             * @param {Event} e
             */
          }, {
            key: "_handleCarouselDrag",
            value: function _handleCarouselDrag(e2) {
              var x2 = void 0, y = void 0, delta = void 0, deltaY = void 0;
              if (this.pressed) {
                x2 = this._xpos(e2);
                y = this._ypos(e2);
                delta = this.reference - x2;
                deltaY = Math.abs(this.referenceY - y);
                if (deltaY < 30 && !this.verticalDragged) {
                  if (delta > 2 || delta < -2) {
                    this.dragged = true;
                    this.reference = x2;
                    this._scroll(this.offset + delta);
                  }
                } else if (this.dragged) {
                  e2.preventDefault();
                  e2.stopPropagation();
                  return false;
                } else {
                  this.verticalDragged = true;
                }
              }
              if (this.dragged) {
                e2.preventDefault();
                e2.stopPropagation();
                return false;
              }
            }
            /**
             * Handle Carousel Release
             * @param {Event} e
             */
          }, {
            key: "_handleCarouselRelease",
            value: function _handleCarouselRelease(e2) {
              if (this.pressed) {
                this.pressed = false;
              } else {
                return;
              }
              clearInterval(this.ticker);
              this.target = this.offset;
              if (this.velocity > 10 || this.velocity < -10) {
                this.amplitude = 0.9 * this.velocity;
                this.target = this.offset + this.amplitude;
              }
              this.target = Math.round(this.target / this.dim) * this.dim;
              if (this.noWrap) {
                if (this.target >= this.dim * (this.count - 1)) {
                  this.target = this.dim * (this.count - 1);
                } else if (this.target < 0) {
                  this.target = 0;
                }
              }
              this.amplitude = this.target - this.offset;
              this.timestamp = Date.now();
              requestAnimationFrame(this._autoScrollBound);
              if (this.dragged) {
                e2.preventDefault();
                e2.stopPropagation();
              }
              return false;
            }
            /**
             * Handle Carousel CLick
             * @param {Event} e
             */
          }, {
            key: "_handleCarouselClick",
            value: function _handleCarouselClick(e2) {
              if (this.dragged) {
                e2.preventDefault();
                e2.stopPropagation();
                return false;
              } else if (!this.options.fullWidth) {
                var clickedIndex = $2(e2.target).closest(".carousel-item").index();
                var diff = this._wrap(this.center) - clickedIndex;
                if (diff !== 0) {
                  e2.preventDefault();
                  e2.stopPropagation();
                }
                this._cycleTo(clickedIndex);
              }
            }
            /**
             * Handle Indicator CLick
             * @param {Event} e
             */
          }, {
            key: "_handleIndicatorClick",
            value: function _handleIndicatorClick(e2) {
              e2.stopPropagation();
              var indicator = $2(e2.target).closest(".indicator-item");
              if (indicator.length) {
                this._cycleTo(indicator.index());
              }
            }
            /**
             * Handle Throttle Resize
             * @param {Event} e
             */
          }, {
            key: "_handleResize",
            value: function _handleResize(e2) {
              if (this.options.fullWidth) {
                this.itemWidth = this.$el.find(".carousel-item").first().innerWidth();
                this.imageHeight = this.$el.find(".carousel-item.active").height();
                this.dim = this.itemWidth * 2 + this.options.padding;
                this.offset = this.center * 2 * this.itemWidth;
                this.target = this.offset;
                this._setCarouselHeight(true);
              } else {
                this._scroll();
              }
            }
            /**
             * Set carousel height based on first slide
             * @param {Booleam} imageOnly - true for image slides
             */
          }, {
            key: "_setCarouselHeight",
            value: function _setCarouselHeight(imageOnly) {
              var _this65 = this;
              var firstSlide = this.$el.find(".carousel-item.active").length ? this.$el.find(".carousel-item.active").first() : this.$el.find(".carousel-item").first();
              var firstImage = firstSlide.find("img").first();
              if (firstImage.length) {
                if (firstImage[0].complete) {
                  var imageHeight = firstImage.height();
                  if (imageHeight > 0) {
                    this.$el.css("height", imageHeight + "px");
                  } else {
                    var naturalWidth = firstImage[0].naturalWidth;
                    var naturalHeight = firstImage[0].naturalHeight;
                    var adjustedHeight = this.$el.width() / naturalWidth * naturalHeight;
                    this.$el.css("height", adjustedHeight + "px");
                  }
                } else {
                  firstImage.one("load", function(el, i3) {
                    _this65.$el.css("height", el.offsetHeight + "px");
                  });
                }
              } else if (!imageOnly) {
                var slideHeight = firstSlide.height();
                this.$el.css("height", slideHeight + "px");
              }
            }
            /**
             * Get x position from event
             * @param {Event} e
             */
          }, {
            key: "_xpos",
            value: function _xpos(e2) {
              if (e2.targetTouches && e2.targetTouches.length >= 1) {
                return e2.targetTouches[0].clientX;
              }
              return e2.clientX;
            }
            /**
             * Get y position from event
             * @param {Event} e
             */
          }, {
            key: "_ypos",
            value: function _ypos(e2) {
              if (e2.targetTouches && e2.targetTouches.length >= 1) {
                return e2.targetTouches[0].clientY;
              }
              return e2.clientY;
            }
            /**
             * Wrap index
             * @param {Number} x
             */
          }, {
            key: "_wrap",
            value: function _wrap(x2) {
              return x2 >= this.count ? x2 % this.count : x2 < 0 ? this._wrap(this.count + x2 % this.count) : x2;
            }
            /**
             * Tracks scrolling information
             */
          }, {
            key: "_track",
            value: function _track() {
              var now2 = void 0, elapsed = void 0, delta = void 0, v = void 0;
              now2 = Date.now();
              elapsed = now2 - this.timestamp;
              this.timestamp = now2;
              delta = this.offset - this.frame;
              this.frame = this.offset;
              v = 1e3 * delta / (1 + elapsed);
              this.velocity = 0.8 * v + 0.2 * this.velocity;
            }
            /**
             * Auto scrolls to nearest carousel item.
             */
          }, {
            key: "_autoScroll",
            value: function _autoScroll() {
              var elapsed = void 0, delta = void 0;
              if (this.amplitude) {
                elapsed = Date.now() - this.timestamp;
                delta = this.amplitude * Math.exp(-elapsed / this.options.duration);
                if (delta > 2 || delta < -2) {
                  this._scroll(this.target - delta);
                  requestAnimationFrame(this._autoScrollBound);
                } else {
                  this._scroll(this.target);
                }
              }
            }
            /**
             * Scroll to target
             * @param {Number} x
             */
          }, {
            key: "_scroll",
            value: function _scroll(x2) {
              var _this66 = this;
              if (!this.$el.hasClass("scrolling")) {
                this.el.classList.add("scrolling");
              }
              if (this.scrollingTimeout != null) {
                window.clearTimeout(this.scrollingTimeout);
              }
              this.scrollingTimeout = window.setTimeout(function() {
                _this66.$el.removeClass("scrolling");
              }, this.options.duration);
              var i3 = void 0, half = void 0, delta = void 0, dir = void 0, tween = void 0, el = void 0, alignment = void 0, zTranslation = void 0, tweenedOpacity = void 0, centerTweenedOpacity = void 0;
              var lastCenter = this.center;
              var numVisibleOffset = 1 / this.options.numVisible;
              this.offset = typeof x2 === "number" ? x2 : this.offset;
              this.center = Math.floor((this.offset + this.dim / 2) / this.dim);
              delta = this.offset - this.center * this.dim;
              dir = delta < 0 ? 1 : -1;
              tween = -dir * delta * 2 / this.dim;
              half = this.count >> 1;
              if (this.options.fullWidth) {
                alignment = "translateX(0)";
                centerTweenedOpacity = 1;
              } else {
                alignment = "translateX(" + (this.el.clientWidth - this.itemWidth) / 2 + "px) ";
                alignment += "translateY(" + (this.el.clientHeight - this.itemHeight) / 2 + "px)";
                centerTweenedOpacity = 1 - numVisibleOffset * tween;
              }
              if (this.showIndicators) {
                var diff = this.center % this.count;
                var activeIndicator = this.$indicators.find(".indicator-item.active");
                if (activeIndicator.index() !== diff) {
                  activeIndicator.removeClass("active");
                  this.$indicators.find(".indicator-item").eq(diff)[0].classList.add("active");
                }
              }
              if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                el = this.images[this._wrap(this.center)];
                if (!$2(el).hasClass("active")) {
                  this.$el.find(".carousel-item").removeClass("active");
                  el.classList.add("active");
                }
                var transformString = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween * i3 + "px) translateZ(" + this.options.dist * tween + "px)";
                this._updateItemStyle(el, centerTweenedOpacity, 0, transformString);
              }
              for (i3 = 1; i3 <= half; ++i3) {
                if (this.options.fullWidth) {
                  zTranslation = this.options.dist;
                  tweenedOpacity = i3 === half && delta < 0 ? 1 - tween : 1;
                } else {
                  zTranslation = this.options.dist * (i3 * 2 + tween * dir);
                  tweenedOpacity = 1 - numVisibleOffset * (i3 * 2 + tween * dir);
                }
                if (!this.noWrap || this.center + i3 < this.count) {
                  el = this.images[this._wrap(this.center + i3)];
                  var _transformString = alignment + " translateX(" + (this.options.shift + (this.dim * i3 - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
                  this._updateItemStyle(el, tweenedOpacity, -i3, _transformString);
                }
                if (this.options.fullWidth) {
                  zTranslation = this.options.dist;
                  tweenedOpacity = i3 === half && delta > 0 ? 1 - tween : 1;
                } else {
                  zTranslation = this.options.dist * (i3 * 2 - tween * dir);
                  tweenedOpacity = 1 - numVisibleOffset * (i3 * 2 - tween * dir);
                }
                if (!this.noWrap || this.center - i3 >= 0) {
                  el = this.images[this._wrap(this.center - i3)];
                  var _transformString2 = alignment + " translateX(" + (-this.options.shift + (-this.dim * i3 - delta) / 2) + "px) translateZ(" + zTranslation + "px)";
                  this._updateItemStyle(el, tweenedOpacity, -i3, _transformString2);
                }
              }
              if (!this.noWrap || this.center >= 0 && this.center < this.count) {
                el = this.images[this._wrap(this.center)];
                var _transformString3 = alignment + " translateX(" + -delta / 2 + "px) translateX(" + dir * this.options.shift * tween + "px) translateZ(" + this.options.dist * tween + "px)";
                this._updateItemStyle(el, centerTweenedOpacity, 0, _transformString3);
              }
              var $currItem = this.$el.find(".carousel-item").eq(this._wrap(this.center));
              if (lastCenter !== this.center && typeof this.options.onCycleTo === "function") {
                this.options.onCycleTo.call(this, $currItem[0], this.dragged);
              }
              if (typeof this.oneTimeCallback === "function") {
                this.oneTimeCallback.call(this, $currItem[0], this.dragged);
                this.oneTimeCallback = null;
              }
            }
            /**
             * Cycle to target
             * @param {Element} el
             * @param {Number} opacity
             * @param {Number} zIndex
             * @param {String} transform
             */
          }, {
            key: "_updateItemStyle",
            value: function _updateItemStyle(el, opacity, zIndex, transform) {
              el.style[this.xform] = transform;
              el.style.zIndex = zIndex;
              el.style.opacity = opacity;
              el.style.visibility = "visible";
            }
            /**
             * Cycle to target
             * @param {Number} n
             * @param {Function} callback
             */
          }, {
            key: "_cycleTo",
            value: function _cycleTo(n, callback) {
              var diff = this.center % this.count - n;
              if (!this.noWrap) {
                if (diff < 0) {
                  if (Math.abs(diff + this.count) < Math.abs(diff)) {
                    diff += this.count;
                  }
                } else if (diff > 0) {
                  if (Math.abs(diff - this.count) < diff) {
                    diff -= this.count;
                  }
                }
              }
              this.target = this.dim * Math.round(this.offset / this.dim);
              if (diff < 0) {
                this.target += this.dim * Math.abs(diff);
              } else if (diff > 0) {
                this.target -= this.dim * diff;
              }
              if (typeof callback === "function") {
                this.oneTimeCallback = callback;
              }
              if (this.offset !== this.target) {
                this.amplitude = this.target - this.offset;
                this.timestamp = Date.now();
                requestAnimationFrame(this._autoScrollBound);
              }
            }
            /**
             * Cycle to next item
             * @param {Number} [n]
             */
          }, {
            key: "next",
            value: function next(n) {
              if (n === void 0 || isNaN(n)) {
                n = 1;
              }
              var index = this.center + n;
              if (index >= this.count || index < 0) {
                if (this.noWrap) {
                  return;
                }
                index = this._wrap(index);
              }
              this._cycleTo(index);
            }
            /**
             * Cycle to previous item
             * @param {Number} [n]
             */
          }, {
            key: "prev",
            value: function prev(n) {
              if (n === void 0 || isNaN(n)) {
                n = 1;
              }
              var index = this.center - n;
              if (index >= this.count || index < 0) {
                if (this.noWrap) {
                  return;
                }
                index = this._wrap(index);
              }
              this._cycleTo(index);
            }
            /**
             * Cycle to nth item
             * @param {Number} [n]
             * @param {Function} callback
             */
          }, {
            key: "set",
            value: function set(n, callback) {
              if (n === void 0 || isNaN(n)) {
                n = 0;
              }
              if (n > this.count || n < 0) {
                if (this.noWrap) {
                  return;
                }
                n = this._wrap(n);
              }
              this._cycleTo(n, callback);
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Carousel2.__proto__ || Object.getPrototypeOf(Carousel2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Carousel;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Carousel2;
        }(Component);
        M.Carousel = Carousel;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Carousel, "carousel", "M_Carousel");
        }
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {
          onOpen: void 0,
          onClose: void 0
        };
        var TapTarget = function(_Component19) {
          _inherits(TapTarget2, _Component19);
          function TapTarget2(el, options) {
            _classCallCheck(this, TapTarget2);
            var _this67 = _possibleConstructorReturn(this, (TapTarget2.__proto__ || Object.getPrototypeOf(TapTarget2)).call(this, TapTarget2, el, options));
            _this67.el.M_TapTarget = _this67;
            _this67.options = $2.extend({}, TapTarget2.defaults, options);
            _this67.isOpen = false;
            _this67.$origin = $2("#" + _this67.$el.attr("data-target"));
            _this67._setup();
            _this67._calculatePositioning();
            _this67._setupEventHandlers();
            return _this67;
          }
          _createClass2(TapTarget2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this.el.TapTarget = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleDocumentClickBound = this._handleDocumentClick.bind(this);
              this._handleTargetClickBound = this._handleTargetClick.bind(this);
              this._handleOriginClickBound = this._handleOriginClick.bind(this);
              this.el.addEventListener("click", this._handleTargetClickBound);
              this.originEl.addEventListener("click", this._handleOriginClickBound);
              var throttledResize = M.throttle(this._handleResize, 200);
              this._handleThrottledResizeBound = throttledResize.bind(this);
              window.addEventListener("resize", this._handleThrottledResizeBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("click", this._handleTargetClickBound);
              this.originEl.removeEventListener("click", this._handleOriginClickBound);
              window.removeEventListener("resize", this._handleThrottledResizeBound);
            }
            /**
             * Handle Target Click
             * @param {Event} e
             */
          }, {
            key: "_handleTargetClick",
            value: function _handleTargetClick(e2) {
              this.open();
            }
            /**
             * Handle Origin Click
             * @param {Event} e
             */
          }, {
            key: "_handleOriginClick",
            value: function _handleOriginClick(e2) {
              this.close();
            }
            /**
             * Handle Resize
             * @param {Event} e
             */
          }, {
            key: "_handleResize",
            value: function _handleResize(e2) {
              this._calculatePositioning();
            }
            /**
             * Handle Resize
             * @param {Event} e
             */
          }, {
            key: "_handleDocumentClick",
            value: function _handleDocumentClick(e2) {
              if (!$2(e2.target).closest(".tap-target-wrapper").length) {
                this.close();
                e2.preventDefault();
                e2.stopPropagation();
              }
            }
            /**
             * Setup Tap Target
             */
          }, {
            key: "_setup",
            value: function _setup() {
              this.wrapper = this.$el.parent()[0];
              this.waveEl = $2(this.wrapper).find(".tap-target-wave")[0];
              this.originEl = $2(this.wrapper).find(".tap-target-origin")[0];
              this.contentEl = this.$el.find(".tap-target-content")[0];
              if (!$2(this.wrapper).hasClass(".tap-target-wrapper")) {
                this.wrapper = document.createElement("div");
                this.wrapper.classList.add("tap-target-wrapper");
                this.$el.before($2(this.wrapper));
                this.wrapper.append(this.el);
              }
              if (!this.contentEl) {
                this.contentEl = document.createElement("div");
                this.contentEl.classList.add("tap-target-content");
                this.$el.append(this.contentEl);
              }
              if (!this.waveEl) {
                this.waveEl = document.createElement("div");
                this.waveEl.classList.add("tap-target-wave");
                if (!this.originEl) {
                  this.originEl = this.$origin.clone(true, true);
                  this.originEl.addClass("tap-target-origin");
                  this.originEl.removeAttr("id");
                  this.originEl.removeAttr("style");
                  this.originEl = this.originEl[0];
                  this.waveEl.append(this.originEl);
                }
                this.wrapper.append(this.waveEl);
              }
            }
            /**
             * Calculate positioning
             */
          }, {
            key: "_calculatePositioning",
            value: function _calculatePositioning() {
              var isFixed = this.$origin.css("position") === "fixed";
              if (!isFixed) {
                var parents = this.$origin.parents();
                for (var i3 = 0; i3 < parents.length; i3++) {
                  isFixed = $2(parents[i3]).css("position") == "fixed";
                  if (isFixed) {
                    break;
                  }
                }
              }
              var originWidth = this.$origin.outerWidth();
              var originHeight = this.$origin.outerHeight();
              var originTop = isFixed ? this.$origin.offset().top - M.getDocumentScrollTop() : this.$origin.offset().top;
              var originLeft = isFixed ? this.$origin.offset().left - M.getDocumentScrollLeft() : this.$origin.offset().left;
              var windowWidth = window.innerWidth;
              var windowHeight = window.innerHeight;
              var centerX = windowWidth / 2;
              var centerY = windowHeight / 2;
              var isLeft = originLeft <= centerX;
              var isRight = originLeft > centerX;
              var isTop = originTop <= centerY;
              var isBottom = originTop > centerY;
              var isCenterX = originLeft >= windowWidth * 0.25 && originLeft <= windowWidth * 0.75;
              var tapTargetWidth = this.$el.outerWidth();
              var tapTargetHeight = this.$el.outerHeight();
              var tapTargetTop = originTop + originHeight / 2 - tapTargetHeight / 2;
              var tapTargetLeft = originLeft + originWidth / 2 - tapTargetWidth / 2;
              var tapTargetPosition = isFixed ? "fixed" : "absolute";
              var tapTargetTextWidth = isCenterX ? tapTargetWidth : tapTargetWidth / 2 + originWidth;
              var tapTargetTextHeight = tapTargetHeight / 2;
              var tapTargetTextTop = isTop ? tapTargetHeight / 2 : 0;
              var tapTargetTextBottom = 0;
              var tapTargetTextLeft = isLeft && !isCenterX ? tapTargetWidth / 2 - originWidth : 0;
              var tapTargetTextRight = 0;
              var tapTargetTextPadding = originWidth;
              var tapTargetTextAlign = isBottom ? "bottom" : "top";
              var tapTargetWaveWidth = originWidth > originHeight ? originWidth * 2 : originWidth * 2;
              var tapTargetWaveHeight = tapTargetWaveWidth;
              var tapTargetWaveTop = tapTargetHeight / 2 - tapTargetWaveHeight / 2;
              var tapTargetWaveLeft = tapTargetWidth / 2 - tapTargetWaveWidth / 2;
              var tapTargetWrapperCssObj = {};
              tapTargetWrapperCssObj.top = isTop ? tapTargetTop + "px" : "";
              tapTargetWrapperCssObj.right = isRight ? windowWidth - tapTargetLeft - tapTargetWidth + "px" : "";
              tapTargetWrapperCssObj.bottom = isBottom ? windowHeight - tapTargetTop - tapTargetHeight + "px" : "";
              tapTargetWrapperCssObj.left = isLeft ? tapTargetLeft + "px" : "";
              tapTargetWrapperCssObj.position = tapTargetPosition;
              $2(this.wrapper).css(tapTargetWrapperCssObj);
              $2(this.contentEl).css({
                width: tapTargetTextWidth + "px",
                height: tapTargetTextHeight + "px",
                top: tapTargetTextTop + "px",
                right: tapTargetTextRight + "px",
                bottom: tapTargetTextBottom + "px",
                left: tapTargetTextLeft + "px",
                padding: tapTargetTextPadding + "px",
                verticalAlign: tapTargetTextAlign
              });
              $2(this.waveEl).css({
                top: tapTargetWaveTop + "px",
                left: tapTargetWaveLeft + "px",
                width: tapTargetWaveWidth + "px",
                height: tapTargetWaveHeight + "px"
              });
            }
            /**
             * Open TapTarget
             */
          }, {
            key: "open",
            value: function open() {
              if (this.isOpen) {
                return;
              }
              if (typeof this.options.onOpen === "function") {
                this.options.onOpen.call(this, this.$origin[0]);
              }
              this.isOpen = true;
              this.wrapper.classList.add("open");
              document.body.addEventListener("click", this._handleDocumentClickBound, true);
              document.body.addEventListener("touchend", this._handleDocumentClickBound);
            }
            /**
             * Close Tap Target
             */
          }, {
            key: "close",
            value: function close() {
              if (!this.isOpen) {
                return;
              }
              if (typeof this.options.onClose === "function") {
                this.options.onClose.call(this, this.$origin[0]);
              }
              this.isOpen = false;
              this.wrapper.classList.remove("open");
              document.body.removeEventListener("click", this._handleDocumentClickBound, true);
              document.body.removeEventListener("touchend", this._handleDocumentClickBound);
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(TapTarget2.__proto__ || Object.getPrototypeOf(TapTarget2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_TapTarget;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return TapTarget2;
        }(Component);
        M.TapTarget = TapTarget;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(TapTarget, "tapTarget", "M_TapTarget");
        }
      })(cash);
      (function($2) {
        "use strict";
        var _defaults3 = {
          classes: "",
          dropdownOptions: {}
        };
        var FormSelect = function(_Component20) {
          _inherits(FormSelect2, _Component20);
          function FormSelect2(el, options) {
            _classCallCheck(this, FormSelect2);
            var _this68 = _possibleConstructorReturn(this, (FormSelect2.__proto__ || Object.getPrototypeOf(FormSelect2)).call(this, FormSelect2, el, options));
            if (_this68.$el.hasClass("browser-default")) {
              return _possibleConstructorReturn(_this68);
            }
            _this68.el.M_FormSelect = _this68;
            _this68.options = $2.extend({}, FormSelect2.defaults, options);
            _this68.isMultiple = _this68.$el.prop("multiple");
            _this68.el.tabIndex = -1;
            _this68._keysSelected = {};
            _this68._valueDict = {};
            _this68._setupDropdown();
            _this68._setupEventHandlers();
            return _this68;
          }
          _createClass2(FormSelect2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this._removeDropdown();
              this.el.M_FormSelect = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              var _this69 = this;
              this._handleSelectChangeBound = this._handleSelectChange.bind(this);
              this._handleOptionClickBound = this._handleOptionClick.bind(this);
              this._handleInputClickBound = this._handleInputClick.bind(this);
              $2(this.dropdownOptions).find("li:not(.optgroup)").each(function(el) {
                el.addEventListener("click", _this69._handleOptionClickBound);
              });
              this.el.addEventListener("change", this._handleSelectChangeBound);
              this.input.addEventListener("click", this._handleInputClickBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              var _this70 = this;
              $2(this.dropdownOptions).find("li:not(.optgroup)").each(function(el) {
                el.removeEventListener("click", _this70._handleOptionClickBound);
              });
              this.el.removeEventListener("change", this._handleSelectChangeBound);
              this.input.removeEventListener("click", this._handleInputClickBound);
            }
            /**
             * Handle Select Change
             * @param {Event} e
             */
          }, {
            key: "_handleSelectChange",
            value: function _handleSelectChange(e2) {
              this._setValueToInput();
            }
            /**
             * Handle Option Click
             * @param {Event} e
             */
          }, {
            key: "_handleOptionClick",
            value: function _handleOptionClick(e2) {
              e2.preventDefault();
              var option = $2(e2.target).closest("li")[0];
              var key = option.id;
              if (!$2(option).hasClass("disabled") && !$2(option).hasClass("optgroup") && key.length) {
                var selected = true;
                if (this.isMultiple) {
                  var placeholderOption = $2(this.dropdownOptions).find("li.disabled.selected");
                  if (placeholderOption.length) {
                    placeholderOption.removeClass("selected");
                    placeholderOption.find('input[type="checkbox"]').prop("checked", false);
                    this._toggleEntryFromArray(placeholderOption[0].id);
                  }
                  selected = this._toggleEntryFromArray(key);
                } else {
                  $2(this.dropdownOptions).find("li").removeClass("selected");
                  $2(option).toggleClass("selected", selected);
                }
                var prevSelected = $2(this._valueDict[key].el).prop("selected");
                if (prevSelected !== selected) {
                  $2(this._valueDict[key].el).prop("selected", selected);
                  this.$el.trigger("change");
                }
              }
              e2.stopPropagation();
            }
            /**
             * Handle Input Click
             */
          }, {
            key: "_handleInputClick",
            value: function _handleInputClick() {
              if (this.dropdown && this.dropdown.isOpen) {
                this._setValueToInput();
                this._setSelectedStates();
              }
            }
            /**
             * Setup dropdown
             */
          }, {
            key: "_setupDropdown",
            value: function _setupDropdown() {
              var _this71 = this;
              this.wrapper = document.createElement("div");
              $2(this.wrapper).addClass("select-wrapper " + this.options.classes);
              this.$el.before($2(this.wrapper));
              this.wrapper.appendChild(this.el);
              if (this.el.disabled) {
                this.wrapper.classList.add("disabled");
              }
              this.$selectOptions = this.$el.children("option, optgroup");
              this.dropdownOptions = document.createElement("ul");
              this.dropdownOptions.id = "select-options-" + M.guid();
              $2(this.dropdownOptions).addClass("dropdown-content select-dropdown " + (this.isMultiple ? "multiple-select-dropdown" : ""));
              if (this.$selectOptions.length) {
                this.$selectOptions.each(function(el) {
                  if ($2(el).is("option")) {
                    var optionEl = void 0;
                    if (_this71.isMultiple) {
                      optionEl = _this71._appendOptionWithIcon(_this71.$el, el, "multiple");
                    } else {
                      optionEl = _this71._appendOptionWithIcon(_this71.$el, el);
                    }
                    _this71._addOptionToValueDict(el, optionEl);
                  } else if ($2(el).is("optgroup")) {
                    var selectOptions = $2(el).children("option");
                    $2(_this71.dropdownOptions).append($2('<li class="optgroup"><span>' + el.getAttribute("label") + "</span></li>")[0]);
                    selectOptions.each(function(el2) {
                      var optionEl2 = _this71._appendOptionWithIcon(_this71.$el, el2, "optgroup-option");
                      _this71._addOptionToValueDict(el2, optionEl2);
                    });
                  }
                });
              }
              this.$el.after(this.dropdownOptions);
              this.input = document.createElement("input");
              $2(this.input).addClass("select-dropdown dropdown-trigger");
              this.input.setAttribute("type", "text");
              this.input.setAttribute("readonly", "true");
              this.input.setAttribute("data-target", this.dropdownOptions.id);
              if (this.el.disabled) {
                $2(this.input).prop("disabled", "true");
              }
              this.$el.before(this.input);
              this._setValueToInput();
              var dropdownIcon = $2('<svg class="caret" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>');
              this.$el.before(dropdownIcon[0]);
              if (!this.el.disabled) {
                var dropdownOptions = $2.extend({}, this.options.dropdownOptions);
                dropdownOptions.onOpenEnd = function(el) {
                  var selectedOption = $2(_this71.dropdownOptions).find(".selected").first();
                  if (_this71.dropdown.isScrollable && selectedOption.length) {
                    var scrollOffset = selectedOption[0].getBoundingClientRect().top - _this71.dropdownOptions.getBoundingClientRect().top;
                    scrollOffset -= _this71.dropdownOptions.clientHeight / 2;
                    _this71.dropdownOptions.scrollTop = scrollOffset;
                  }
                };
                if (this.isMultiple) {
                  dropdownOptions.closeOnClick = false;
                }
                this.dropdown = M.Dropdown.init(this.input, dropdownOptions);
              }
              this._setSelectedStates();
            }
            /**
             * Add option to value dict
             * @param {Element} el  original option element
             * @param {Element} optionEl  generated option element
             */
          }, {
            key: "_addOptionToValueDict",
            value: function _addOptionToValueDict(el, optionEl) {
              var index = Object.keys(this._valueDict).length;
              var key = this.dropdownOptions.id + index;
              var obj = {};
              optionEl.id = key;
              obj.el = el;
              obj.optionEl = optionEl;
              this._valueDict[key] = obj;
            }
            /**
             * Remove dropdown
             */
          }, {
            key: "_removeDropdown",
            value: function _removeDropdown() {
              $2(this.wrapper).find(".caret").remove();
              $2(this.input).remove();
              $2(this.dropdownOptions).remove();
              $2(this.wrapper).before(this.$el);
              $2(this.wrapper).remove();
            }
            /**
             * Setup dropdown
             * @param {Element} select  select element
             * @param {Element} option  option element from select
             * @param {String} type
             * @return {Element}  option element added
             */
          }, {
            key: "_appendOptionWithIcon",
            value: function _appendOptionWithIcon(select, option, type) {
              var disabledClass = option.disabled ? "disabled " : "";
              var optgroupClass = type === "optgroup-option" ? "optgroup-option " : "";
              var multipleCheckbox = this.isMultiple ? '<label><input type="checkbox"' + disabledClass + '"/><span>' + option.innerHTML + "</span></label>" : option.innerHTML;
              var liEl = $2("<li></li>");
              var spanEl = $2("<span></span>");
              spanEl.html(multipleCheckbox);
              liEl.addClass(disabledClass + " " + optgroupClass);
              liEl.append(spanEl);
              var iconUrl = option.getAttribute("data-icon");
              if (!!iconUrl) {
                var imgEl = $2('<img alt="" src="' + iconUrl + '">');
                liEl.prepend(imgEl);
              }
              $2(this.dropdownOptions).append(liEl[0]);
              return liEl[0];
            }
            /**
             * Toggle entry from option
             * @param {String} key  Option key
             * @return {Boolean}  if entry was added or removed
             */
          }, {
            key: "_toggleEntryFromArray",
            value: function _toggleEntryFromArray(key) {
              var notAdded = !this._keysSelected.hasOwnProperty(key);
              var $optionLi = $2(this._valueDict[key].optionEl);
              if (notAdded) {
                this._keysSelected[key] = true;
              } else {
                delete this._keysSelected[key];
              }
              $optionLi.toggleClass("selected", notAdded);
              $optionLi.find('input[type="checkbox"]').prop("checked", notAdded);
              $optionLi.prop("selected", notAdded);
              return notAdded;
            }
            /**
             * Set text value to input
             */
          }, {
            key: "_setValueToInput",
            value: function _setValueToInput() {
              var values = [];
              var options = this.$el.find("option");
              options.each(function(el) {
                if ($2(el).prop("selected")) {
                  var text = $2(el).text();
                  values.push(text);
                }
              });
              if (!values.length) {
                var firstDisabled = this.$el.find("option:disabled").eq(0);
                if (firstDisabled.length && firstDisabled[0].value === "") {
                  values.push(firstDisabled.text());
                }
              }
              this.input.value = values.join(", ");
            }
            /**
             * Set selected state of dropdown to match actual select element
             */
          }, {
            key: "_setSelectedStates",
            value: function _setSelectedStates() {
              this._keysSelected = {};
              for (var key in this._valueDict) {
                var option = this._valueDict[key];
                var optionIsSelected = $2(option.el).prop("selected");
                $2(option.optionEl).find('input[type="checkbox"]').prop("checked", optionIsSelected);
                if (optionIsSelected) {
                  this._activateOption($2(this.dropdownOptions), $2(option.optionEl));
                  this._keysSelected[key] = true;
                } else {
                  $2(option.optionEl).removeClass("selected");
                }
              }
            }
            /**
             * Make option as selected and scroll to selected position
             * @param {jQuery} collection  Select options jQuery element
             * @param {Element} newOption  element of the new option
             */
          }, {
            key: "_activateOption",
            value: function _activateOption(collection, newOption) {
              if (newOption) {
                if (!this.isMultiple) {
                  collection.find("li.selected").removeClass("selected");
                }
                var option = $2(newOption);
                option.addClass("selected");
              }
            }
            /**
             * Get Selected Values
             * @return {Array}  Array of selected values
             */
          }, {
            key: "getSelectedValues",
            value: function getSelectedValues() {
              var selectedValues = [];
              for (var key in this._keysSelected) {
                selectedValues.push(this._valueDict[key].el.value);
              }
              return selectedValues;
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(FormSelect2.__proto__ || Object.getPrototypeOf(FormSelect2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_FormSelect;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return FormSelect2;
        }(Component);
        M.FormSelect = FormSelect;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(FormSelect, "formSelect", "M_FormSelect");
        }
      })(cash);
      (function($2, anim) {
        "use strict";
        var _defaults3 = {};
        var Range = function(_Component21) {
          _inherits(Range2, _Component21);
          function Range2(el, options) {
            _classCallCheck(this, Range2);
            var _this72 = _possibleConstructorReturn(this, (Range2.__proto__ || Object.getPrototypeOf(Range2)).call(this, Range2, el, options));
            _this72.el.M_Range = _this72;
            _this72.options = $2.extend({}, Range2.defaults, options);
            _this72._mousedown = false;
            _this72._setupThumb();
            _this72._setupEventHandlers();
            return _this72;
          }
          _createClass2(Range2, [{
            key: "destroy",
            /**
             * Teardown component
             */
            value: function destroy() {
              this._removeEventHandlers();
              this._removeThumb();
              this.el.M_Range = void 0;
            }
            /**
             * Setup Event Handlers
             */
          }, {
            key: "_setupEventHandlers",
            value: function _setupEventHandlers() {
              this._handleRangeChangeBound = this._handleRangeChange.bind(this);
              this._handleRangeMousedownTouchstartBound = this._handleRangeMousedownTouchstart.bind(this);
              this._handleRangeInputMousemoveTouchmoveBound = this._handleRangeInputMousemoveTouchmove.bind(this);
              this._handleRangeMouseupTouchendBound = this._handleRangeMouseupTouchend.bind(this);
              this._handleRangeBlurMouseoutTouchleaveBound = this._handleRangeBlurMouseoutTouchleave.bind(this);
              this.el.addEventListener("change", this._handleRangeChangeBound);
              this.el.addEventListener("mousedown", this._handleRangeMousedownTouchstartBound);
              this.el.addEventListener("touchstart", this._handleRangeMousedownTouchstartBound);
              this.el.addEventListener("input", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.addEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.addEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.addEventListener("mouseup", this._handleRangeMouseupTouchendBound);
              this.el.addEventListener("touchend", this._handleRangeMouseupTouchendBound);
              this.el.addEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound);
              this.el.addEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound);
              this.el.addEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
            }
            /**
             * Remove Event Handlers
             */
          }, {
            key: "_removeEventHandlers",
            value: function _removeEventHandlers() {
              this.el.removeEventListener("change", this._handleRangeChangeBound);
              this.el.removeEventListener("mousedown", this._handleRangeMousedownTouchstartBound);
              this.el.removeEventListener("touchstart", this._handleRangeMousedownTouchstartBound);
              this.el.removeEventListener("input", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.removeEventListener("mousemove", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.removeEventListener("touchmove", this._handleRangeInputMousemoveTouchmoveBound);
              this.el.removeEventListener("mouseup", this._handleRangeMouseupTouchendBound);
              this.el.removeEventListener("touchend", this._handleRangeMouseupTouchendBound);
              this.el.removeEventListener("blur", this._handleRangeBlurMouseoutTouchleaveBound);
              this.el.removeEventListener("mouseout", this._handleRangeBlurMouseoutTouchleaveBound);
              this.el.removeEventListener("touchleave", this._handleRangeBlurMouseoutTouchleaveBound);
            }
            /**
             * Handle Range Change
             * @param {Event} e
             */
          }, {
            key: "_handleRangeChange",
            value: function _handleRangeChange() {
              $2(this.value).html(this.$el.val());
              if (!$2(this.thumb).hasClass("active")) {
                this._showRangeBubble();
              }
              var offsetLeft = this._calcRangeOffset();
              $2(this.thumb).addClass("active").css("left", offsetLeft + "px");
            }
            /**
             * Handle Range Mousedown and Touchstart
             * @param {Event} e
             */
          }, {
            key: "_handleRangeMousedownTouchstart",
            value: function _handleRangeMousedownTouchstart(e2) {
              $2(this.value).html(this.$el.val());
              this._mousedown = true;
              this.$el.addClass("active");
              if (!$2(this.thumb).hasClass("active")) {
                this._showRangeBubble();
              }
              if (e2.type !== "input") {
                var offsetLeft = this._calcRangeOffset();
                $2(this.thumb).addClass("active").css("left", offsetLeft + "px");
              }
            }
            /**
             * Handle Range Input, Mousemove and Touchmove
             */
          }, {
            key: "_handleRangeInputMousemoveTouchmove",
            value: function _handleRangeInputMousemoveTouchmove() {
              if (this._mousedown) {
                if (!$2(this.thumb).hasClass("active")) {
                  this._showRangeBubble();
                }
                var offsetLeft = this._calcRangeOffset();
                $2(this.thumb).addClass("active").css("left", offsetLeft + "px");
                $2(this.value).html(this.$el.val());
              }
            }
            /**
             * Handle Range Mouseup and Touchend
             */
          }, {
            key: "_handleRangeMouseupTouchend",
            value: function _handleRangeMouseupTouchend() {
              this._mousedown = false;
              this.$el.removeClass("active");
            }
            /**
             * Handle Range Blur, Mouseout and Touchleave
             */
          }, {
            key: "_handleRangeBlurMouseoutTouchleave",
            value: function _handleRangeBlurMouseoutTouchleave() {
              if (!this._mousedown) {
                var paddingLeft = parseInt(this.$el.css("padding-left"));
                var marginLeft = 7 + paddingLeft + "px";
                if ($2(this.thumb).hasClass("active")) {
                  anim.remove(this.thumb);
                  anim({
                    targets: this.thumb,
                    height: 0,
                    width: 0,
                    top: 10,
                    easing: "easeOutQuad",
                    marginLeft,
                    duration: 100
                  });
                }
                $2(this.thumb).removeClass("active");
              }
            }
            /**
             * Setup dropdown
             */
          }, {
            key: "_setupThumb",
            value: function _setupThumb() {
              this.thumb = document.createElement("span");
              this.value = document.createElement("span");
              $2(this.thumb).addClass("thumb");
              $2(this.value).addClass("value");
              $2(this.thumb).append(this.value);
              this.$el.after(this.thumb);
            }
            /**
             * Remove dropdown
             */
          }, {
            key: "_removeThumb",
            value: function _removeThumb() {
              $2(this.thumb).remove();
            }
            /**
             * morph thumb into bubble
             */
          }, {
            key: "_showRangeBubble",
            value: function _showRangeBubble() {
              var paddingLeft = parseInt($2(this.thumb).parent().css("padding-left"));
              var marginLeft = -7 + paddingLeft + "px";
              anim.remove(this.thumb);
              anim({
                targets: this.thumb,
                height: 30,
                width: 30,
                top: -30,
                marginLeft,
                duration: 300,
                easing: "easeOutQuint"
              });
            }
            /**
             * Calculate the offset of the thumb
             * @return {Number}  offset in pixels
             */
          }, {
            key: "_calcRangeOffset",
            value: function _calcRangeOffset() {
              var width = this.$el.width() - 15;
              var max = parseFloat(this.$el.attr("max")) || 100;
              var min = parseFloat(this.$el.attr("min")) || 0;
              var percent = (parseFloat(this.$el.val()) - min) / (max - min);
              return percent * width;
            }
          }], [{
            key: "init",
            value: function init4(els, options) {
              return _get3(Range2.__proto__ || Object.getPrototypeOf(Range2), "init", this).call(this, this, els, options);
            }
            /**
             * Get Instance
             */
          }, {
            key: "getInstance",
            value: function getInstance(el) {
              var domElem = !!el.jquery ? el[0] : el;
              return domElem.M_Range;
            }
          }, {
            key: "defaults",
            get: function() {
              return _defaults3;
            }
          }]);
          return Range2;
        }(Component);
        M.Range = Range;
        if (M.jQueryLoaded) {
          M.initializeJqueryWrapper(Range, "range", "M_Range");
        }
        Range.init($2("input[type=range]"));
      })(cash, M.anime);
    }
  });

  // node_modules/.pnpm/split-type@0.2.1/node_modules/split-type/dist/split-type.js
  var require_split_type = __commonJS({
    "node_modules/.pnpm/split-type@0.2.1/node_modules/split-type/dist/split-type.js"(exports, module) {
      init_live_reload();
      (function(global2, factory) {
        typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, global2.SplitType = factory());
      })(exports, function() {
        "use strict";
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
          }
        }
        function _defineProperties2(target, props) {
          for (var i3 = 0; i3 < props.length; i3++) {
            var descriptor = props[i3];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass2(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties2(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties2(Constructor, staticProps);
          return Constructor;
        }
        function extend3(target, object) {
          return Object.getOwnPropertyNames(Object(target)).reduce(function(extended, key) {
            var currentValue = Object.getOwnPropertyDescriptor(Object(target), key);
            var newValue = Object.getOwnPropertyDescriptor(Object(object), key);
            return Object.defineProperty(extended, key, newValue || currentValue);
          }, {});
        }
        function parseSettings(settings) {
          var object = extend3(settings);
          if (object.types || object.split) {
            object.types = object.types || object.split;
          }
          if (object.absolute || object.position) {
            object.absolute = object.absolute || /absolute/.test(settings.position);
          }
          return object;
        }
        function isObject3(value) {
          return value !== null && typeof value === "object";
        }
        function isLength(value) {
          return typeof value === "number" && value > -1 && value % 1 === 0;
        }
        function isArrayLike(value) {
          return isObject3(value) && isLength(value.length);
        }
        function toArray3(value) {
          if (Array.isArray(value))
            return value;
          if (value == null)
            return [];
          return isArrayLike(value) ? Array.prototype.slice.call(value) : [value];
        }
        function isNode2(input) {
          return isObject3(input) && /^(1|3|11)$/.test(input.nodeType);
        }
        function isString(value) {
          return typeof value === "string";
        }
        function flatten(obj) {
          return toArray3(obj).reduce(function(result, item) {
            return result.concat(toArray3(item));
          }, []);
        }
        function getTargetElements(target) {
          var elements = target;
          if (isString(target)) {
            if (/^(#[a-z]\w+)$/.test(target.trim())) {
              elements = document.getElementById(target.trim().slice(1));
            } else {
              elements = document.querySelectorAll(target);
            }
          }
          return flatten(elements).filter(isNode2);
        }
        function Data(owner, key, value) {
          var data = {};
          var id = null;
          if (isObject3(owner)) {
            id = owner[Data.expando] || (owner[Data.expando] = ++Data.uid);
            data = Data.cache[id] || (Data.cache[id] = {});
          }
          if (value === void 0) {
            if (key === void 0) {
              return data;
            }
            return data[key];
          } else if (key !== void 0) {
            data[key] = value;
            return value;
          }
        }
        Data.expando = "splitType".concat(/* @__PURE__ */ new Date() * 1);
        Data.cache = {};
        Data.uid = 0;
        function RemoveData(element) {
          var id = element && element[Data.expando];
          if (id) {
            delete element[id];
            delete Data.cache[id];
          }
        }
        function forEach(collection, callback) {
          var arr = toArray3(collection);
          for (var len = arr.length, i3 = 0; i3 < len; i3++) {
            callback(arr[i3], i3, arr);
          }
        }
        function toWords(string) {
          var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : " ";
          string = string ? String(string) : "";
          return string.split(separator);
        }
        function toChars(string) {
          var separator = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
          string = string == null ? "" : String(string);
          return string.split(separator);
        }
        function createElement2(name2, attributes) {
          var element = document.createElement(name2);
          if (!attributes) {
            return element;
          }
          Object.keys(attributes).forEach(function(attribute) {
            var value = attributes[attribute];
            if (value === null)
              return;
            if (attribute === "textContent" || attribute === "innerHTML") {
              element[attribute] = value;
            } else if (attribute === "children") {
              forEach(value, function(child) {
                if (isNode2(child))
                  element.appendChild(child);
              });
            } else {
              element.setAttribute(attribute, String(value).trim());
            }
          });
          return element;
        }
        function parseTypes(value) {
          var types = isString(value) || Array.isArray(value) ? String(value) : "";
          return {
            lines: /line/i.test(types),
            words: /word/i.test(types),
            chars: /(char)|(character)/i.test(types)
          };
        }
        function getTextContent(element, LINE_BREAK_SYMBOL) {
          var brTag = /<br\s*\/?>/g;
          var textContent = element.textContent;
          if (LINE_BREAK_SYMBOL) {
            var innerHTML = element.innerHTML;
            var tempDiv = document.createElement("div");
            tempDiv.innerHTML = innerHTML.replace(brTag, " ".concat(LINE_BREAK_SYMBOL, " "));
            textContent = tempDiv.textContent;
          }
          return textContent.replace(/\s+/g, " ").trim();
        }
        var defaults3 = {
          splitClass: "",
          lineClass: "line",
          wordClass: "word",
          charClass: "char",
          types: "lines, words, chars",
          absolute: false,
          tagName: "div"
        };
        var createFragment = function createFragment2() {
          return document.createDocumentFragment();
        };
        var createTextNode = function createTextNode2(str) {
          return document.createTextNode(str);
        };
        function splitSingleElement(element, settings) {
          settings = extend3(defaults3, settings);
          var types = parseTypes(settings.types);
          var TAG_NAME = settings.tagName;
          var BR_SYMBOL = "B".concat(/* @__PURE__ */ new Date() * 1, "R");
          var isAbsolute = settings.position === "absolute" || settings.absolute;
          var lines = [];
          var words = [];
          var chars = [];
          var splitText;
          splitText = types.lines ? createElement2("div") : createFragment();
          var TEXT_CONTENT = getTextContent(element, BR_SYMBOL);
          words = toWords(TEXT_CONTENT).reduce(function(result, WORD, idx, arr) {
            var wordElement;
            var characterElementsForCurrentWord;
            if (WORD === BR_SYMBOL) {
              splitText.appendChild(createElement2("br"));
              return null;
            }
            if (types.chars) {
              characterElementsForCurrentWord = toChars(WORD).map(function(CHAR) {
                return createElement2(TAG_NAME, {
                  class: "".concat(settings.splitClass, " ").concat(settings.charClass),
                  style: "display: inline-block;",
                  textContent: CHAR
                });
              });
              chars = chars.concat(characterElementsForCurrentWord);
            }
            if (types.words || types.lines) {
              wordElement = createElement2(TAG_NAME, {
                class: "".concat(settings.wordClass, " ").concat(settings.splitClass),
                style: "display: inline-block; position: ".concat(types.words ? "relative" : "static"),
                children: types.chars ? characterElementsForCurrentWord : null,
                textContent: !types.chars ? WORD : null
              });
              splitText.appendChild(wordElement);
            } else {
              forEach(characterElementsForCurrentWord, function(characterElement) {
                splitText.appendChild(characterElement);
              });
            }
            if (idx !== arr.length - 1) {
              splitText.appendChild(createTextNode(" "));
            }
            return types.words ? result.concat(wordElement) : result;
          }, []);
          element.innerHTML = "";
          element.appendChild(splitText);
          if (!isAbsolute && !types.lines) {
            return {
              chars,
              words,
              lines: []
            };
          }
          var wordsInEachLine = [];
          var wordsInCurrentLine = [];
          var lineHeight;
          var elementHeight;
          var elementWidth;
          var contentBox;
          var lineOffsetY;
          var nodes = Data(element, "nodes", element.getElementsByTagName(TAG_NAME));
          var parent = element.parentElement;
          var nextSibling = element.nextElementSibling;
          var cs = window.getComputedStyle(element);
          var align = cs.textAlign;
          if (isAbsolute) {
            contentBox = {
              left: splitText.offsetLeft,
              top: splitText.offsetTop,
              width: splitText.offsetWidth
            };
            elementWidth = element.offsetWidth;
            elementHeight = element.offsetHeight;
            Data(element).cssWidth = element.style.width;
            Data(element).cssHeight = element.style.height;
          }
          forEach(nodes, function(node) {
            if (node === splitText)
              return;
            var isWord = node.parentElement === splitText;
            var wordOffsetY;
            if (types.lines && isWord) {
              wordOffsetY = Data(node, "top", node.offsetTop);
              if (wordOffsetY !== lineOffsetY) {
                lineOffsetY = wordOffsetY;
                wordsInEachLine.push(wordsInCurrentLine = []);
              }
              wordsInCurrentLine.push(node);
            }
            if (isAbsolute) {
              Data(node).top = wordOffsetY || node.offsetTop;
              Data(node).left = node.offsetLeft;
              Data(node).width = node.offsetWidth;
              Data(node).height = lineHeight || (lineHeight = node.offsetHeight);
            }
          });
          if (parent) {
            parent.removeChild(element);
          }
          if (types.lines) {
            splitText = createFragment();
            lines = wordsInEachLine.map(function(wordsInThisLine) {
              var lineElement = createElement2(TAG_NAME, {
                class: "".concat(settings.splitClass, " ").concat(settings.lineClass),
                style: "display: block; text-align: ".concat(align, "; width: 100%;")
              });
              splitText.appendChild(lineElement);
              if (isAbsolute) {
                Data(lineElement).type = "line";
                Data(lineElement).top = Data(wordsInThisLine[0]).top;
                Data(lineElement).height = lineHeight;
              }
              forEach(wordsInThisLine, function(wordElement, idx, arr) {
                if (types.words) {
                  lineElement.appendChild(wordElement);
                } else if (types.chars) {
                  forEach(wordElement.children, function(charNode) {
                    lineElement.appendChild(charNode);
                  });
                } else {
                  lineElement.appendChild(createTextNode(wordElement.textContent));
                }
                if (idx !== arr.length - 1) {
                  lineElement.appendChild(createTextNode(" "));
                }
              });
              return lineElement;
            });
            element.replaceChild(splitText, element.firstChild);
          }
          if (isAbsolute) {
            element.style.width = "".concat(element.style.width || elementWidth, "px");
            element.style.height = "".concat(elementHeight, "px");
            forEach(nodes, function(node) {
              var isLineNode = Data(node).type === "line";
              var isChildOfLineNode = !isLineNode && Data(node.parentElement).type === "line";
              node.style.top = "".concat(isChildOfLineNode ? 0 : Data(node).top, "px");
              node.style.left = isLineNode ? "".concat(contentBox.left, "px") : "".concat(Data(node).left - (isChildOfLineNode ? contentBox.left : 0), "px");
              node.style.height = "".concat(Data(node).height, "px");
              node.style.width = isLineNode ? "".concat(contentBox.width, "px") : "".concat(Data(node).width, "px");
              node.style.position = "absolute";
            });
          }
          if (parent) {
            if (nextSibling)
              parent.insertBefore(element, nextSibling);
            else
              parent.appendChild(element);
          }
          return {
            lines,
            words: types.words ? words : [],
            chars
          };
        }
        var _defaults3 = extend3(defaults3, {});
        var SplitType2 = /* @__PURE__ */ function() {
          _createClass2(SplitType3, null, [{
            key: "defaults",
            /**
             * The default settings for all splitType instances
             */
            get: function get() {
              return _defaults3;
            },
            set: function set(options) {
              _defaults3 = extend3(_defaults3, parseSettings(options));
            }
            /**
             * Creates a new `SplitType` instance
             *
             * @param {any} target The target elements to split. can be one of:
             *  - {string} A css selector
             *  - {HTMLElement} A single element
             *  - {ArrayLike<HTMLElement>} A collection of elements
             *  - {Array<HTMLElement | ArrayLike<HTMLElement>>} A nested array of elements
             * @param {Object} [options] Settings for the SplitType instance
             */
          }]);
          function SplitType3(target, options) {
            _classCallCheck(this, SplitType3);
            this.isSplit = false;
            this.settings = extend3(_defaults3, parseSettings(options));
            this.elements = getTargetElements(target) || [];
            if (this.elements.length) {
              this.originals = this.elements.map(function(element) {
                return Data(element, "html", Data(element).html || element.innerHTML);
              });
              if (this.settings.types) {
                this.split();
              }
            }
          }
          _createClass2(SplitType3, [{
            key: "split",
            value: function split(options) {
              var _this = this;
              this.revert();
              this.lines = [];
              this.words = [];
              this.chars = [];
              var scrollPos = [window.pageXoffset, window.pageYoffset];
              if (options !== void 0) {
                this.settings = extend3(this.settings, parseSettings(options));
              }
              this.elements.forEach(function(element) {
                var _split2 = splitSingleElement(element, _this.settings), lines = _split2.lines, words = _split2.words, chars = _split2.chars;
                _this.lines = _this.lines.concat(lines);
                _this.words = _this.words.concat(words);
                _this.chars = _this.chars.concat(chars);
                Data(element).isSplit = true;
              });
              this.isSplit = true;
              window.scrollTo(scrollPos[0], scrollPos[1]);
              this.elements.forEach(function(element) {
                var nodes = Data(element).nodes || [];
                toArray3(nodes).forEach(RemoveData);
              });
            }
            /**
             * Reverts target element(s) back to their original html content
             * @public
             */
          }, {
            key: "revert",
            value: function revert() {
              var _this2 = this;
              if (this.isSplit) {
                this.lines = null;
                this.words = null;
                this.chars = null;
              }
              this.elements.forEach(function(element) {
                if (Data(element).isSplit && Data(element).html) {
                  element.innerHTML = Data(element).html;
                  element.style.height = Data(element).cssHeight || "";
                  element.style.width = Data(element).cssWidth || "";
                  _this2.isSplit = false;
                }
              });
            }
          }]);
          return SplitType3;
        }();
        return SplitType2;
      });
    }
  });

  // src/index.ts
  init_live_reload();

  // src/utils/changeTheme.ts
  init_live_reload();
  function changeTheme() {
    function toggleTheme() {
      const currentTheme = document.body.getAttribute("element-theme");
      const newTheme = currentTheme === "1" ? "2" : "1";
      document.body.setAttribute("element-theme", newTheme);
      localStorage.setItem("theme", newTheme);
    }
    window.addEventListener("load", function() {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        document.body.setAttribute("element-theme", savedTheme);
      } else {
        setThemeBasedOnSystem();
      }
    });
    const changeModeLink = document.querySelector(".change-mode");
    changeModeLink.addEventListener("click", function(event2) {
      event2.preventDefault();
      toggleTheme();
    });
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function(e2) {
      if (!localStorage.getItem("theme")) {
        setThemeBasedOnSystem();
      }
    });
  }

  // src/utils/footerAnimation.ts
  init_live_reload();
  function footerAnimation() {
    $(function() {
      $(".padding-animation, .main_r").draggable({
        start: function(event2, ui) {
          if (!$(this).data("originalPosition")) {
            $(this).data("originalPosition", ui.position);
          }
        }
      });
      $(".reino-logo-letter.last").on("click", function() {
        $(".padding-animation, .main_r").each(function() {
          const originalPosition = $(this).data("originalPosition");
          if (originalPosition) {
            $(this).animate(
              {
                top: originalPosition.top,
                left: originalPosition.left
              },
              500
            );
          }
        });
      });
    });
  }

  // src/utils/globeEffect.ts
  init_live_reload();

  // node_modules/.pnpm/cobe@0.6.3/node_modules/cobe/dist/index.esm.js
  init_live_reload();

  // node_modules/.pnpm/phenomenon@1.6.0/node_modules/phenomenon/dist/phenomenon.mjs
  init_live_reload();
  var t = ["x", "y", "z"];
  var e = function(t2) {
    Object.assign(this, { uniforms: {}, geometry: { vertices: [{ x: 0, y: 0, z: 0 }] }, mode: 0, modifiers: {}, attributes: [], multiplier: 1, buffers: [] }), Object.assign(this, t2), this.prepareProgram(), this.prepareUniforms(), this.prepareAttributes();
  };
  e.prototype.compileShader = function(t2, e2) {
    var i3 = this.gl.createShader(t2);
    return this.gl.shaderSource(i3, e2), this.gl.compileShader(i3), i3;
  }, e.prototype.prepareProgram = function() {
    var t2 = this.gl, e2 = this.vertex, i3 = this.fragment, r = t2.createProgram();
    t2.attachShader(r, this.compileShader(35633, e2)), t2.attachShader(r, this.compileShader(35632, i3)), t2.linkProgram(r), t2.useProgram(r), this.program = r;
  }, e.prototype.prepareUniforms = function() {
    for (var t2 = Object.keys(this.uniforms), e2 = 0; e2 < t2.length; e2 += 1) {
      var i3 = this.gl.getUniformLocation(this.program, t2[e2]);
      this.uniforms[t2[e2]].location = i3;
    }
  }, e.prototype.prepareAttributes = function() {
    void 0 !== this.geometry.vertices && this.attributes.push({ name: "aPosition", size: 3 }), void 0 !== this.geometry.normal && this.attributes.push({ name: "aNormal", size: 3 }), this.attributeKeys = [];
    for (var t2 = 0; t2 < this.attributes.length; t2 += 1)
      this.attributeKeys.push(this.attributes[t2].name), this.prepareAttribute(this.attributes[t2]);
  }, e.prototype.prepareAttribute = function(e2) {
    for (var i3 = this.geometry, r = this.multiplier, s2 = i3.vertices, n = i3.normal, a = new Float32Array(r * s2.length * e2.size), o = 0; o < r; o += 1)
      for (var h = e2.data && e2.data(o, r), u2 = o * s2.length * e2.size, f2 = 0; f2 < s2.length; f2 += 1)
        for (var c2 = 0; c2 < e2.size; c2 += 1) {
          var l2 = this.modifiers[e2.name];
          a[u2] = void 0 !== l2 ? l2(h, f2, c2, this) : "aPosition" === e2.name ? s2[f2][t[c2]] : "aNormal" === e2.name ? n[f2][t[c2]] : h[c2], u2 += 1;
        }
    this.attributes[this.attributeKeys.indexOf(e2.name)].data = a, this.prepareBuffer(this.attributes[this.attributeKeys.indexOf(e2.name)]);
  }, e.prototype.prepareBuffer = function(t2) {
    var e2 = t2.data, i3 = t2.name, r = t2.size, s2 = this.gl.createBuffer();
    this.gl.bindBuffer(34962, s2), this.gl.bufferData(34962, e2, 35044);
    var n = this.gl.getAttribLocation(this.program, i3);
    this.gl.enableVertexAttribArray(n), this.gl.vertexAttribPointer(n, r, 5126, false, 0, 0), this.buffers[this.attributeKeys.indexOf(t2.name)] = { buffer: s2, location: n, size: r };
  }, e.prototype.render = function(t2) {
    var e2 = this, i3 = this.uniforms, r = this.multiplier, s2 = this.gl;
    s2.useProgram(this.program);
    for (var n = 0; n < this.buffers.length; n += 1) {
      var a = this.buffers[n], o = a.location, h = a.buffer, u2 = a.size;
      s2.enableVertexAttribArray(o), s2.bindBuffer(34962, h), s2.vertexAttribPointer(o, u2, 5126, false, 0, 0);
    }
    Object.keys(t2).forEach(function(e3) {
      i3[e3].value = t2[e3].value;
    }), Object.keys(i3).forEach(function(t3) {
      var r2 = i3[t3];
      e2.uniformMap[r2.type](r2.location, r2.value);
    }), s2.drawArrays(this.mode, 0, r * this.geometry.vertices.length), this.onRender && this.onRender(this);
  }, e.prototype.destroy = function() {
    for (var t2 = 0; t2 < this.buffers.length; t2 += 1)
      this.gl.deleteBuffer(this.buffers[t2].buffer);
    this.gl.deleteProgram(this.program), this.gl = null;
  };
  var i = function(t2) {
    var e2 = this, i3 = t2 || {}, r = i3.canvas;
    void 0 === r && (r = document.querySelector("canvas"));
    var s2 = i3.context;
    void 0 === s2 && (s2 = {});
    var n = i3.contextType;
    void 0 === n && (n = "experimental-webgl");
    var a = i3.settings;
    void 0 === a && (a = {});
    var o = r.getContext(n, Object.assign({ alpha: false, antialias: false }, s2));
    Object.assign(this, { gl: o, canvas: r, uniforms: {}, instances: /* @__PURE__ */ new Map(), shouldRender: true }), Object.assign(this, { devicePixelRatio: 1, clearColor: [1, 1, 1, 1], position: { x: 0, y: 0, z: 2 }, clip: [1e-3, 100] }), Object.assign(this, a), this.uniformMap = { float: function(t3, e3) {
      return o.uniform1f(t3, e3);
    }, vec2: function(t3, e3) {
      return o.uniform2fv(t3, e3);
    }, vec3: function(t3, e3) {
      return o.uniform3fv(t3, e3);
    }, vec4: function(t3, e3) {
      return o.uniform4fv(t3, e3);
    }, mat2: function(t3, e3) {
      return o.uniformMatrix2fv(t3, false, e3);
    }, mat3: function(t3, e3) {
      return o.uniformMatrix3fv(t3, false, e3);
    }, mat4: function(t3, e3) {
      return o.uniformMatrix4fv(t3, false, e3);
    } }, o.enable(o.DEPTH_TEST), o.depthFunc(o.LEQUAL), false === o.getContextAttributes().alpha && (o.clearColor.apply(o, this.clearColor), o.clearDepth(1)), this.onSetup && this.onSetup(o), window.addEventListener("resize", function() {
      return e2.resize();
    }), this.resize(), this.render();
  };
  i.prototype.resize = function() {
    var t2 = this.gl, e2 = this.canvas, i3 = this.devicePixelRatio, r = this.position;
    e2.width = e2.clientWidth * i3, e2.height = e2.clientHeight * i3;
    var s2 = t2.drawingBufferWidth, n = t2.drawingBufferHeight, a = s2 / n;
    t2.viewport(0, 0, s2, n);
    var o = Math.tan(Math.PI / 180 * 22.5), h = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, r.x, r.y, (a < 1 ? 1 : a) * -r.z, 1];
    this.uniforms.uProjectionMatrix = { type: "mat4", value: [0.5 / o, 0, 0, 0, 0, a / o * 0.5, 0, 0, 0, 0, -(this.clip[1] + this.clip[0]) / (this.clip[1] - this.clip[0]), -1, 0, 0, -2 * this.clip[1] * (this.clip[0] / (this.clip[1] - this.clip[0])), 0] }, this.uniforms.uViewMatrix = { type: "mat4", value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1] }, this.uniforms.uModelMatrix = { type: "mat4", value: h };
  }, i.prototype.toggle = function(t2) {
    t2 !== this.shouldRender && (this.shouldRender = void 0 !== t2 ? t2 : !this.shouldRender, this.shouldRender && this.render());
  }, i.prototype.render = function() {
    var t2 = this;
    this.gl.clear(16640), this.instances.forEach(function(e2) {
      e2.render(t2.uniforms);
    }), this.onRender && this.onRender(this), this.shouldRender && requestAnimationFrame(function() {
      return t2.render();
    });
  }, i.prototype.add = function(t2, i3) {
    void 0 === i3 && (i3 = { uniforms: {} }), void 0 === i3.uniforms && (i3.uniforms = {}), Object.assign(i3.uniforms, JSON.parse(JSON.stringify(this.uniforms))), Object.assign(i3, { gl: this.gl, uniformMap: this.uniformMap });
    var r = new e(i3);
    return this.instances.set(t2, r), r;
  }, i.prototype.remove = function(t2) {
    var e2 = this.instances.get(t2);
    void 0 !== e2 && (e2.destroy(), this.instances.delete(t2));
  }, i.prototype.destroy = function() {
    var t2 = this;
    this.instances.forEach(function(e2, i3) {
      e2.destroy(), t2.instances.delete(i3);
    }), this.toggle(false);
  };
  var phenomenon_default = i;

  // node_modules/.pnpm/cobe@0.6.3/node_modules/cobe/dist/index.esm.js
  var M2 = "phi";
  var R = "theta";
  var c = "mapSamples";
  var O = "mapBrightness";
  var N = "baseColor";
  var G = "markerColor";
  var s = "glowColor";
  var S = "markers";
  var P = "diffuse";
  var X = "devicePixelRatio";
  var f = "dark";
  var u = "offset";
  var m = "scale";
  var x = "opacity";
  var l = "mapBaseBrightness";
  var I = { [M2]: "A", [R]: "B", [c]: "l", [O]: "E", [N]: "R", [G]: "S", [s]: "y", [P]: "F", [f]: "G", [u]: "x", [m]: "C", [x]: "H", [l]: "I" };
  var { PI: i2, sin: d, cos: U } = Math;
  var C = (r) => [].concat(...r.map((E) => {
    let [_, o] = E.location;
    _ = _ * i2 / 180, o = o * i2 / 180 - i2;
    let a = U(_);
    return [-a * U(o), d(_), a * d(o), E.size];
  }), [0, 0, 0, 0]);
  var p = (r, E) => {
    let _ = (e2, t2, L) => ({ type: e2, value: typeof E[t2] == "undefined" ? L : E[t2] }), o = r.getContext("webgl") ? "webgl" : "experimental-webgl", a = new phenomenon_default({ canvas: r, contextType: o, context: { alpha: true, stencil: false, antialias: true, depth: false, preserveDrawingBuffer: false, ...E.context }, settings: { [X]: E[X] || 1, onSetup: (e2) => {
      let t2 = e2.RGB, L = e2.UNSIGNED_BYTE, n = e2.TEXTURE_2D, T = e2.createTexture();
      e2.bindTexture(n, T), e2.texImage2D(n, 0, t2, 1, 1, 0, t2, L, new Uint8Array([0, 0, 0, 0]));
      let A = new Image();
      A.onload = () => {
        e2.bindTexture(n, T), e2.texImage2D(n, 0, t2, t2, L, A), e2.generateMipmap(n);
        let h = e2.getParameter(e2.CURRENT_PROGRAM), v = e2.getUniformLocation(h, "J");
        e2.texParameteri(n, e2.TEXTURE_MIN_FILTER, e2.NEAREST), e2.texParameteri(n, e2.TEXTURE_MAG_FILTER, e2.NEAREST), e2.uniform1i(v, 0);
      }, A.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACAAQAAAADMzoqnAAAAAXNSR0IArs4c6QAABA5JREFUeNrV179uHEUAx/Hf3JpbF+E2VASBsmVKTBcpKJs3SMEDcDwBiVJAAewYEBUivIHT0uUBIt0YCovKD0CRjUC4QfHYh8hYXu+P25vZ2Zm9c66gMd/GJ/tz82d3bk8GN4SrByYF2366FNTACIAkivVAAazQdnf3MvAlbNUQfOPAdQDvSAimMWhwy4I2g4SU+Kp04ISLpPBAKLxPyic3O/CCi+Y7rUJbiodcpDOFY7CgxCEXmdYD2EYK2s5lApOx5pEDDYCUwM1XdJUwBV11QQMg59kePSCaPAASQMEL2hwo6TJFgxpg+TgC2ymXPbuvc40awr3D1QCFfbH9kcoqAOkZozpQo0aqAGQRKCog/+tjkgbNFEtg2FffBvBGlSxHoAaAa1u6X4PBAwDiR8FFsrQgeUhfJTSALaB9jy5NCybJPn1SVFiWk7ywN+KzhH1aKAuydhGkbEF4lWohLXDXavlyFgHY7LBnLRdlAP6BS5Cc8RfVDXbkwN/oIvmY+6obbNeBP0JwTuMGu9gTzy1Q4RS/cWpfzszeYwd+CAFrtBW/Hur0gLbJGlD+/OjVwe/drfBxkbbg63dndEDfiEBlAd7ac0BPe1D6Jd8dfbLH+RI0OzseFB5s01/M+gMdAeluLOCAuaUA9Lezo/vSgXoCX9rtEiXnp7Q1W/CNyWcd8DXoS6jH/YZ5vAJEWY2dXFQe2TUgaFaNejCzJ98g6HnlVrsE58sDcYqg+9XY75fPqdoh/kRQWiXKg8MWlJQxUFMPjqnyujhFBE7UxIMjyszk0QwQlFsezImsyvUYYYVED2pk6m0Tg8T04Fwjk2kdAwSACqlM6gRRt3vQYAFGX0Ah7Ebx1H+MDRI5ui0QldH4j7FGcm90XdxD2Jg1AOEAVAKhEFXSn4cKUELurIAKwJ3MArypPscQaLhJFICJ0ohjDySAdH8AhDtCiTuMycH8CXzhH9jUACAO5uMhoAwA5i+T6WAKmmAqnLy80wxHqIPFYpqCwxGaYLt4Dyievg5kEoVEUAhs6pqKgFtDQYOuaXypaWKQfIuwwoGSZgfLsu/XAtI8cGN+h7Cc1A5oLOMhwlIPXuhu48AIvsSBkvtV9wsJRKCyYLfq5lTrQMFd1a262oqBck9K1V0YjQg0iEYYgpS1A9GlXQV5cykwm4A7BzVsxQqo7E+zCegO7Ma7yKgsuOcfKbMBwLC8wvVNYDsANYalEpOAa6zpWjTeMKGwEwC1CiQewJc5EKfgy7GmRAZA4vUVGwE2dPM/g0xuAInE/yG5aZ8ISxWGfYigUVbdyBElTHh2uCwGdfCkOLGgQVBh3Ewp+/QK4CDlR5Ws/Zf7yhCf8pH7vinWAvoVCQ6zz0NX5V/6GkAVV+2/5qsJ/gU8bsxpM8IeAQAAAABJRU5ErkJggg==";
    } } });
    return a.add("", { vertex: "attribute vec3 aPosition;uniform mat4 uProjectionMatrix;uniform mat4 uModelMatrix;uniform mat4 uViewMatrix;void main(){gl_Position=uProjectionMatrix*uModelMatrix*uViewMatrix*vec4(aPosition,1.);}", fragment: "precision highp float;uniform vec2 t,x;uniform vec3 R,S,y;uniform vec4 z[64];uniform float A,B,l,C,D,E,F,G,H,I;uniform sampler2D J;float K=1./l;mat3 L(float a,float b){float c=cos(a),d=cos(b),e=sin(a),f=sin(b);return mat3(d,f*e,-f*c,0.,c,e,f,d*-e,d*c);}vec3 w(vec3 c,out float v){c=c.xzy;float p=max(2.,floor(log2(2.236068*l*3.141593*(1.-c.z*c.z))*.72021));vec2 g=floor(pow(1.618034,p)/2.236068*vec2(1.,1.618034)+.5),d=fract((g+1.)*.618034)*6.283185-3.883222,e=-2.*g,f=vec2(atan(c.y,c.x),c.z-1.),q=floor(vec2(e.y*f.x-d.y*(f.y*l+1.),-e.x*f.x+d.x*(f.y*l+1.))/(d.x*e.y-e.x*d.y));float n=3.141593;vec3 r;for(float h=0.;h<4.;h+=1.){vec2 s=vec2(mod(h,2.),floor(h*.5));float j=dot(g,q+s);if(j>l)continue;float a=j,b=0.;if(a>=524288.)a-=524288.,b+=.803894;if(a>=262144.)a-=262144.,b+=.901947;if(a>=131072.)a-=131072.,b+=.950973;if(a>=65536.)a-=65536.,b+=.475487;if(a>=32768.)a-=32768.,b+=.737743;if(a>=16384.)a-=16384.,b+=.868872;if(a>=8192.)a-=8192.,b+=.934436;if(a>=4096.)a-=4096.,b+=.467218;if(a>=2048.)a-=2048.,b+=.733609;if(a>=1024.)a-=1024.,b+=.866804;if(a>=512.)a-=512.,b+=.433402;if(a>=256.)a-=256.,b+=.216701;if(a>=128.)a-=128.,b+=.108351;if(a>=64.)a-=64.,b+=.554175;if(a>=32.)a-=32.,b+=.777088;if(a>=16.)a-=16.,b+=.888544;if(a>=8.)a-=8.,b+=.944272;if(a>=4.)a-=4.,b+=.472136;if(a>=2.)a-=2.,b+=.236068;if(a>=1.)a-=1.,b+=.618034;float k=fract(b)*6.283185,i=1.-2.*j*K,m=sqrt(1.-i*i);vec3 o=vec3(cos(k)*m,sin(k)*m,i);float u=length(c-o);if(u<n)n=u,r=o;}v=n;return r.xzy;}void main(){vec2 b=(gl_FragCoord.xy/t*2.-1.)/C-x*vec2(1.,-1.)/t;b.x*=t.x/t.y;float c=dot(b,b);vec4 M=vec4(0.);float m=0.;if(c<=.64){for(int d=0;d<2;d++){vec4 e=vec4(0.);float a;vec3 u=vec3(0.,0.,1.),f=normalize(vec3(b,sqrt(.64-c)));f.z*=d>0?-1.:1.,u.z*=d>0?-1.:1.;vec3 g=f*L(B,A),h=w(g,a);float n=asin(h.y),i=acos(-h.x/cos(n));i=h.z<0.?-i:i;float N=max(texture2D(J,vec2(i*.5/3.141593,-(n/3.141593+.5))).x,I),O=smoothstep(8e-3,0.,a),j=dot(f,u),v=pow(j,F)*E,o=N*O*v,T=mix((1.-o)*pow(j,.4),o,G)+.1;e+=vec4(R*T,1.);int U=int(D);float p=0.;for(int k=0;k<64;k++){if(k>=U)break;vec4 q=z[k];vec3 r=q.xyz,P=r-g;float s=q.w;if(dot(P,P)>s*s*4.)continue;vec3 V=w(r,a);a=length(V-g),a<s?p+=smoothstep(s*.5,0.,a):0.;}p=min(1.,p*v),e.xyz=mix(e.xyz,S,p),e.xyz+=pow(1.-j,4.)*y,M+=e*(1.+(d>0?-H:H))/2.;}m=pow(dot(normalize(vec3(-b,sqrt(1.-c))),vec3(0.,0.,1.)),4.)*smoothstep(0.,1.,.2/(c-.64));}else{float Q=sqrt(.2/(c-.64));m=smoothstep(.5,1.,Q/(Q+1.));}gl_FragColor=M+vec4(m*y,m);}", uniforms: { t: { type: "vec2", value: [E.width, E.height] }, A: _("float", M2), B: _("float", R), l: _("float", c), E: _("float", O), I: _("float", l), R: _("vec3", N), S: _("vec3", G), F: _("float", P), y: _("vec3", s), G: _("float", f), z: { type: "vec4", value: C(E[S]) }, D: { type: "float", value: E[S].length }, x: _("vec2", u, [0, 0]), C: _("float", m, 1), H: _("float", x, 1) }, mode: 4, geometry: { vertices: [{ x: -100, y: 100, z: 0 }, { x: -100, y: -100, z: 0 }, { x: 100, y: 100, z: 0 }, { x: 100, y: -100, z: 0 }, { x: -100, y: -100, z: 0 }, { x: 100, y: 100, z: 0 }] }, onRender: ({ uniforms: e2 }) => {
      let t2 = {};
      if (E.onRender) {
        t2 = E.onRender(t2) || t2;
        for (let L in I)
          t2[L] !== void 0 && (e2[I[L]].value = t2[L]);
        t2[S] !== void 0 && (e2["z"].value = C(t2[S]), e2["D"].value = t2[S].length), t2.width && t2.height && (e2["t"].value = [t2.width, t2.height]);
      }
    } }), a;
  };

  // src/utils/globeEffect.ts
  function globeEffect() {
    let phi = 0;
    const theta = 0.2;
    const canvas = document.getElementById("cobe");
    const globe = p(canvas, {
      devicePixelRatio: 2,
      width: 1500,
      height: 1500,
      phi,
      // Inicia a rotação a partir de phi 0
      theta,
      // Corrige o alinhamento para não ficar de cabeça para baixo
      dark: 0,
      diffuse: 1.2,
      scale: 1,
      mapSamples: 16e3,
      mapBrightness: 6,
      baseColor: [1, 1, 1],
      markerColor: [0.89, 0.67, 0.13],
      // Cor #e3ac21 no formato [r, g, b]
      glowColor: [1, 1, 1],
      offset: [0, 0],
      markers: [
        { location: [-23.5505, -46.6333], size: 0.1 },
        // São Paulo, Brasil
        { location: [-8.0476, -34.877], size: 0.1 }
        // Pernambuco, Brasil
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 6e-3;
      }
    });
  }

  // src/utils/heroAnimation.ts
  init_live_reload();
  function heroAnimation() {
    document.addEventListener("DOMContentLoaded", () => {
      const interactionConfig = [
        {
          trigger: ".button-hero",
          targets: [
            { selector: ".tec_anim", class: "big" },
            { selector: ".transp_anim.is-4", class: "big" },
            { selector: ".transp_anim.is-2", class: "big" },
            { selector: ".mini-animation-wrapper.is-2", class: "active" }
          ]
        }
        // Adicione novas configurações de interação aqui
      ];
      function handleInteraction(config3, action) {
        config3.targets.forEach((target) => {
          document.querySelectorAll(target.selector).forEach((element) => {
            element.classList[action](target.class);
          });
        });
      }
      interactionConfig.forEach((config3) => {
        document.querySelectorAll(config3.trigger).forEach((trigger) => {
          trigger.addEventListener("mouseover", () => handleInteraction(config3, "add"));
          trigger.addEventListener("mouseout", () => handleInteraction(config3, "remove"));
        });
      });
    });
  }

  // src/utils/processoAnimation.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/gsap-core.js
  init_live_reload();
  function _assertThisInitialized(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }
  var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
      lineHeight: ""
    }
  };
  var _defaults = {
    duration: 0.5,
    overwrite: false,
    delay: 0
  };
  var _suppressOverwrites;
  var _reverting;
  var _context;
  var _bigNum = 1e8;
  var _tinyNum = 1 / _bigNum;
  var _2PI = Math.PI * 2;
  var _HALF_PI = _2PI / 4;
  var _gsID = 0;
  var _sqrt = Math.sqrt;
  var _cos = Math.cos;
  var _sin = Math.sin;
  var _isString = function _isString2(value) {
    return typeof value === "string";
  };
  var _isFunction = function _isFunction2(value) {
    return typeof value === "function";
  };
  var _isNumber = function _isNumber2(value) {
    return typeof value === "number";
  };
  var _isUndefined = function _isUndefined2(value) {
    return typeof value === "undefined";
  };
  var _isObject = function _isObject2(value) {
    return typeof value === "object";
  };
  var _isNotFalse = function _isNotFalse2(value) {
    return value !== false;
  };
  var _windowExists = function _windowExists2() {
    return typeof window !== "undefined";
  };
  var _isFuncOrString = function _isFuncOrString2(value) {
    return _isFunction(value) || _isString(value);
  };
  var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
  };
  var _isArray = Array.isArray;
  var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
  var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
  var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
  var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
  var _relExp = /[+-]=-?[.\d]+/;
  var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
  var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
  var _globalTimeline;
  var _win;
  var _coreInitted;
  var _doc;
  var _globals = {};
  var _installScope = {};
  var _coreReady;
  var _install = function _install2(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
  };
  var _missingPlugin = function _missingPlugin2(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
  };
  var _warn = function _warn2(message, suppress) {
    return !suppress && console.warn(message);
  };
  var _addGlobal = function _addGlobal2(name2, obj) {
    return name2 && (_globals[name2] = obj) && _installScope && (_installScope[name2] = obj) || _globals;
  };
  var _emptyFunc = function _emptyFunc2() {
    return 0;
  };
  var _startAtRevertConfig = {
    suppressEvents: true,
    isStart: true,
    kill: false
  };
  var _revertConfigNoKill = {
    suppressEvents: true,
    kill: false
  };
  var _revertConfig = {
    suppressEvents: true
  };
  var _reservedProps = {};
  var _lazyTweens = [];
  var _lazyLookup = {};
  var _lastRenderedFrame;
  var _plugins = {};
  var _effects = {};
  var _nextGCFrame = 30;
  var _harnessPlugins = [];
  var _callbackNames = "";
  var _harness = function _harness2(targets) {
    var target = targets[0], harnessPlugin, i3;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
      i3 = _harnessPlugins.length;
      while (i3-- && !_harnessPlugins[i3].targetTest(target)) {
      }
      harnessPlugin = _harnessPlugins[i3];
    }
    i3 = targets.length;
    while (i3--) {
      targets[i3] && (targets[i3]._gsap || (targets[i3]._gsap = new GSCache(targets[i3], harnessPlugin))) || targets.splice(i3, 1);
    }
    return targets;
  };
  var _getCache = function _getCache2(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
  };
  var _getProperty = function _getProperty2(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
  };
  var _forEachName = function _forEachName2(names, func) {
    return (names = names.split(",")).forEach(func) || names;
  };
  var _round = function _round2(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _roundPrecise = function _roundPrecise2(value) {
    return Math.round(value * 1e7) / 1e7 || 0;
  };
  var _parseRelative = function _parseRelative2(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
  };
  var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
    var l2 = toFind.length, i3 = 0;
    for (; toSearch.indexOf(toFind[i3]) < 0 && ++i3 < l2; ) {
    }
    return i3 < l2;
  };
  var _lazyRender = function _lazyRender2() {
    var l2 = _lazyTweens.length, a = _lazyTweens.slice(0), i3, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i3 = 0; i3 < l2; i3++) {
      tween = a[i3];
      tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
  };
  var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
    _lazyTweens.length && !_reverting && _lazyRender();
    animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
    _lazyTweens.length && !_reverting && _lazyRender();
  };
  var _numericIfPossible = function _numericIfPossible2(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
  };
  var _passThrough = function _passThrough2(p2) {
    return p2;
  };
  var _setDefaults = function _setDefaults2(obj, defaults3) {
    for (var p2 in defaults3) {
      p2 in obj || (obj[p2] = defaults3[p2]);
    }
    return obj;
  };
  var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
    return function(obj, defaults3) {
      for (var p2 in defaults3) {
        p2 in obj || p2 === "duration" && excludeDuration || p2 === "ease" || (obj[p2] = defaults3[p2]);
      }
    };
  };
  var _merge = function _merge2(base, toMerge) {
    for (var p2 in toMerge) {
      base[p2] = toMerge[p2];
    }
    return base;
  };
  var _mergeDeep = function _mergeDeep2(base, toMerge) {
    for (var p2 in toMerge) {
      p2 !== "__proto__" && p2 !== "constructor" && p2 !== "prototype" && (base[p2] = _isObject(toMerge[p2]) ? _mergeDeep2(base[p2] || (base[p2] = {}), toMerge[p2]) : toMerge[p2]);
    }
    return base;
  };
  var _copyExcluding = function _copyExcluding2(obj, excluding) {
    var copy = {}, p2;
    for (p2 in obj) {
      p2 in excluding || (copy[p2] = obj[p2]);
    }
    return copy;
  };
  var _inheritDefaults = function _inheritDefaults2(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
      while (parent) {
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
      }
    }
    return vars;
  };
  var _arraysMatch = function _arraysMatch2(a1, a2) {
    var i3 = a1.length, match = i3 === a2.length;
    while (match && i3-- && a1[i3] === a2[i3]) {
    }
    return i3 < 0;
  };
  var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = parent[lastProp], t2;
    if (sortBy) {
      t2 = child[sortBy];
      while (prev && prev[sortBy] > t2) {
        prev = prev._prev;
      }
    }
    if (prev) {
      child._next = prev._next;
      prev._next = child;
    } else {
      child._next = parent[firstProp];
      parent[firstProp] = child;
    }
    if (child._next) {
      child._next._prev = child;
    } else {
      parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
  };
  var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
      firstProp = "_first";
    }
    if (lastProp === void 0) {
      lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
      prev._next = next;
    } else if (parent[firstProp] === child) {
      parent[firstProp] = next;
    }
    if (next) {
      next._prev = prev;
    } else if (parent[lastProp] === child) {
      parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null;
  };
  var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove && child.parent.remove(child);
    child._act = 0;
  };
  var _uncache = function _uncache2(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
      var a = animation;
      while (a) {
        a._dirty = 1;
        a = a.parent;
      }
    }
    return animation;
  };
  var _recacheAncestors = function _recacheAncestors2(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
      parent._dirty = 1;
      parent.totalDuration();
      parent = parent.parent;
    }
    return animation;
  };
  var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
    return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
  };
  var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
  };
  var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
  };
  var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
  };
  var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
  };
  var _setEnd = function _setEnd2(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
  };
  var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
      animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
      _setEnd(animation);
      parent._dirty || _uncache(parent, animation);
    }
    return animation;
  };
  var _postAddChecks = function _postAddChecks2(timeline2, child) {
    var t2;
    if (child._time || !child._dur && child._initted || child._start < timeline2._time && (child._dur || !child.add)) {
      t2 = _parentToChildTotalTime(timeline2.rawTime(), child);
      if (!child._dur || _clamp(0, child.totalDuration(), t2) - child._tTime > _tinyNum) {
        child.render(t2, true);
      }
    }
    if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
      if (timeline2._dur < timeline2.duration()) {
        t2 = timeline2;
        while (t2._dp) {
          t2.rawTime() >= 0 && t2.totalTime(t2._tTime);
          t2 = t2._dp;
        }
      }
      timeline2._zTime = -_tinyNum;
    }
  };
  var _addToTimeline = function _addToTimeline2(timeline2, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position, child) : timeline2._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline2._recent = child);
    skipChecks || _postAddChecks(timeline2, child);
    timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
    return timeline2;
  };
  var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
  };
  var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
    _initTween(tween, time, tTime);
    if (!tween._initted) {
      return 1;
    }
    if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
      _lazyTweens.push(tween);
      tween._lazy = [tTime, suppressEvents];
      return 1;
    }
  };
  var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
  };
  var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
  };
  var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
      tTime = _clamp(0, tween._tDur, totalTime);
      iteration = _animationCycle(tTime, repeatDelay);
      tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
      if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
        prevRatio = 1 - ratio;
        tween.vars.repeatRefresh && tween._initted && tween.invalidate();
      }
    }
    if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
      if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
        return;
      }
      prevIteration = tween._zTime;
      tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
      suppressEvents || (suppressEvents = totalTime && !prevIteration);
      tween.ratio = ratio;
      tween._from && (ratio = 1 - ratio);
      tween._time = 0;
      tween._tTime = tTime;
      pt = tween._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
      tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
      tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
      if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
        ratio && _removeFromParent(tween, 1);
        if (!suppressEvents && !_reverting) {
          _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
          tween._prom && tween._prom();
        }
      }
    } else if (!tween._zTime) {
      tween._zTime = totalTime;
    }
  };
  var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
      child = animation._first;
      while (child && child._start <= time) {
        if (child.data === "isPause" && child._start > prevTime) {
          return child;
        }
        child = child._next;
      }
    } else {
      child = animation._last;
      while (child && child._start >= time) {
        if (child.data === "isPause" && child._start < prevTime) {
          return child;
        }
        child = child._prev;
      }
    }
  };
  var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
    animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
  };
  var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
  };
  var _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
  };
  var _parsePosition = function _parsePosition2(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i3, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
      offset = position.charAt(0);
      isPercent = position.substr(-1) === "%";
      i3 = position.indexOf("=");
      if (offset === "<" || offset === ">") {
        i3 >= 0 && (position = position.replace(/=/, ""));
        return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i3 < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
      }
      if (i3 < 0) {
        position in labels || (labels[position] = clippedDuration);
        return labels[position];
      }
      offset = parseFloat(position.charAt(i3 - 1) + position.substr(i3 + 1));
      if (isPercent && percentAnimation) {
        offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
      }
      return i3 > 1 ? _parsePosition2(animation, position.substr(0, i3 - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
  };
  var _createTweenType = function _createTweenType2(type, params, timeline2) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline2;
    if (type) {
      irVars = vars;
      parent = timeline2;
      while (parent && !("immediateRender" in irVars)) {
        irVars = parent.vars.defaults || {};
        parent = _isNotFalse(parent.vars.inherit) && parent.parent;
      }
      vars.immediateRender = _isNotFalse(irVars.immediateRender);
      type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
  };
  var _conditionalReturn = function _conditionalReturn2(value, func) {
    return value || value === 0 ? func(value) : func;
  };
  var _clamp = function _clamp2(min, max, value) {
    return value < min ? min : value > max ? max : value;
  };
  var getUnit = function getUnit2(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
  };
  var clamp = function clamp2(min, max, value) {
    return _conditionalReturn(value, function(v) {
      return _clamp(min, max, v);
    });
  };
  var _slice = [].slice;
  var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
  };
  var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
      accumulator = [];
    }
    return ar.forEach(function(value) {
      var _accumulator;
      return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
  };
  var toArray = function toArray2(value, scope, leaveStrings) {
    return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
  };
  var selector = function selector2(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
      var el = value.current || value.nativeElement || value;
      return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
  };
  var shuffle = function shuffle2(a) {
    return a.sort(function() {
      return 0.5 - Math.random();
    });
  };
  var distribute = function distribute2(v) {
    if (_isFunction(v)) {
      return v;
    }
    var vars = _isObject(v) ? v : {
      each: v
    }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
      ratioX = ratioY = {
        center: 0.5,
        edges: 0.5,
        end: 1
      }[from] || 0;
    } else if (!isDecimal && ratios) {
      ratioX = from[0];
      ratioY = from[1];
    }
    return function(i3, target, a) {
      var l2 = (a || vars).length, distances = cache[l2], originX, originY, x2, y, d2, j, max, min, wrapAt;
      if (!distances) {
        wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
        if (!wrapAt) {
          max = -_bigNum;
          while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l2) {
          }
          wrapAt < l2 && wrapAt--;
        }
        distances = cache[l2] = [];
        originX = ratios ? Math.min(wrapAt, l2) * ratioX - 0.5 : from % wrapAt;
        originY = wrapAt === _bigNum ? 0 : ratios ? l2 * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
        max = 0;
        min = _bigNum;
        for (j = 0; j < l2; j++) {
          x2 = j % wrapAt - originX;
          y = originY - (j / wrapAt | 0);
          distances[j] = d2 = !axis ? _sqrt(x2 * x2 + y * y) : Math.abs(axis === "y" ? y : x2);
          d2 > max && (max = d2);
          d2 < min && (min = d2);
        }
        from === "random" && shuffle(distances);
        distances.max = max - min;
        distances.min = min;
        distances.v = l2 = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l2 ? l2 - 1 : !axis ? Math.max(wrapAt, l2 / wrapAt) : axis === "y" ? l2 / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
        distances.b = l2 < 0 ? base - l2 : base;
        distances.u = getUnit(vars.amount || vars.each) || 0;
        ease = ease && l2 < 0 ? _invertEase(ease) : ease;
      }
      l2 = (distances[i3] - distances.min) / distances.max || 0;
      return _roundPrecise(distances.b + (ease ? ease(l2) : l2) * distances.v) + distances.u;
    };
  };
  var _roundModifier = function _roundModifier2(v) {
    var p2 = Math.pow(10, ((v + "").split(".")[1] || "").length);
    return function(raw) {
      var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p2);
      return (n - n % 1) / p2 + (_isNumber(raw) ? 0 : getUnit(raw));
    };
  };
  var snap = function snap2(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
      radius = isArray = snapTo.radius || _bigNum;
      if (snapTo.values) {
        snapTo = toArray(snapTo.values);
        if (is2D = !_isNumber(snapTo[0])) {
          radius *= radius;
        }
      } else {
        snapTo = _roundModifier(snapTo.increment);
      }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
      is2D = snapTo(raw);
      return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
      var x2 = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i3 = snapTo.length, dx, dy;
      while (i3--) {
        if (is2D) {
          dx = snapTo[i3].x - x2;
          dy = snapTo[i3].y - y;
          dx = dx * dx + dy * dy;
        } else {
          dx = Math.abs(snapTo[i3] - x2);
        }
        if (dx < min) {
          min = dx;
          closest = i3;
        }
      }
      closest = !radius || min <= radius ? snapTo[closest] : raw;
      return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
  };
  var random = function random2(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
      return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
  };
  var pipe = function pipe2() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
      functions[_key] = arguments[_key];
    }
    return function(value) {
      return functions.reduce(function(v, f2) {
        return f2(v);
      }, value);
    };
  };
  var unitize = function unitize2(func, unit) {
    return function(value) {
      return func(parseFloat(value)) + (unit || getUnit(value));
    };
  };
  var normalize = function normalize2(min, max, value) {
    return mapRange(min, max, 0, 1, value);
  };
  var _wrapArray = function _wrapArray2(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
      return a[~~wrapper(index)];
    });
  };
  var wrap = function wrap2(min, max, value) {
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
      return (range + (value2 - min) % range) % range + min;
    });
  };
  var wrapYoyo = function wrapYoyo2(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
      value2 = (total + (value2 - min) % total) % total || 0;
      return min + (value2 > range ? total - value2 : value2);
    });
  };
  var _replaceRandom = function _replaceRandom2(value) {
    var prev = 0, s2 = "", i3, nums, end, isArray;
    while (~(i3 = value.indexOf("random(", prev))) {
      end = value.indexOf(")", i3);
      isArray = value.charAt(i3 + 7) === "[";
      nums = value.substr(i3 + 7, end - i3 - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
      s2 += value.substr(prev, i3 - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
      prev = end + 1;
    }
    return s2 + value.substr(prev, value.length - prev);
  };
  var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function(value2) {
      return outMin + ((value2 - inMin) / inRange * outRange || 0);
    });
  };
  var interpolate = function interpolate2(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p3) {
      return (1 - p3) * start + p3 * end;
    };
    if (!func) {
      var isString = _isString(start), master = {}, p2, i3, interpolators, l2, il;
      progress === true && (mutate = 1) && (progress = null);
      if (isString) {
        start = {
          p: start
        };
        end = {
          p: end
        };
      } else if (_isArray(start) && !_isArray(end)) {
        interpolators = [];
        l2 = start.length;
        il = l2 - 2;
        for (i3 = 1; i3 < l2; i3++) {
          interpolators.push(interpolate2(start[i3 - 1], start[i3]));
        }
        l2--;
        func = function func2(p3) {
          p3 *= l2;
          var i4 = Math.min(il, ~~p3);
          return interpolators[i4](p3 - i4);
        };
        progress = end;
      } else if (!mutate) {
        start = _merge(_isArray(start) ? [] : {}, start);
      }
      if (!interpolators) {
        for (p2 in end) {
          _addPropTween.call(master, start, p2, "get", end[p2]);
        }
        func = function func2(p3) {
          return _renderPropTweens(p3, master) || (isString ? start.p : start);
        };
      }
    }
    return _conditionalReturn(progress, func);
  };
  var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
    var labels = timeline2.labels, min = _bigNum, p2, distance, label;
    for (p2 in labels) {
      distance = labels[p2] - fromTime;
      if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
        label = p2;
        min = distance;
      }
    }
    return label;
  };
  var _callback = function _callback2(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
    if (!callback) {
      return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender();
    context3 && (_context = context3);
    result = params ? callback.apply(scope, params) : callback.call(scope);
    _context = prevContext;
    return result;
  };
  var _interrupt = function _interrupt2(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
  };
  var _quickTween;
  var _registerPluginQueue = [];
  var _createPlugin = function _createPlugin2(config3) {
    if (!config3)
      return;
    config3 = !config3.name && config3["default"] || config3;
    if (_windowExists() || config3.headless) {
      var name2 = config3.name, isFunc = _isFunction(config3), Plugin = name2 && !isFunc && config3.init ? function() {
        this._props = [];
      } : config3, instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
      }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
      };
      _wake();
      if (config3 !== Plugin) {
        if (_plugins[name2]) {
          return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config3, instanceDefaults), statics));
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config3, statics)));
        _plugins[Plugin.prop = name2] = Plugin;
        if (config3.targetTest) {
          _harnessPlugins.push(Plugin);
          _reservedProps[name2] = 1;
        }
        name2 = (name2 === "css" ? "CSS" : name2.charAt(0).toUpperCase() + name2.substr(1)) + "Plugin";
      }
      _addGlobal(name2, Plugin);
      config3.register && config3.register(gsap, Plugin, PropTween);
    } else {
      _registerPluginQueue.push(config3);
    }
  };
  var _255 = 255;
  var _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
  };
  var _hue = function _hue2(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
  };
  var splitColor = function splitColor2(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s2, l2, max, min, d2, wasHSL;
    if (!a) {
      if (v.substr(-1) === ",") {
        v = v.substr(0, v.length - 1);
      }
      if (_colorLookup[v]) {
        a = _colorLookup[v];
      } else if (v.charAt(0) === "#") {
        if (v.length < 6) {
          r = v.charAt(1);
          g = v.charAt(2);
          b = v.charAt(3);
          v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
        }
        if (v.length === 9) {
          a = parseInt(v.substr(1, 6), 16);
          return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
        }
        v = parseInt(v.substr(1), 16);
        a = [v >> 16, v >> 8 & _255, v & _255];
      } else if (v.substr(0, 3) === "hsl") {
        a = wasHSL = v.match(_strictNumExp);
        if (!toHSL) {
          h = +a[0] % 360 / 360;
          s2 = +a[1] / 100;
          l2 = +a[2] / 100;
          g = l2 <= 0.5 ? l2 * (s2 + 1) : l2 + s2 - l2 * s2;
          r = l2 * 2 - g;
          a.length > 3 && (a[3] *= 1);
          a[0] = _hue(h + 1 / 3, r, g);
          a[1] = _hue(h, r, g);
          a[2] = _hue(h - 1 / 3, r, g);
        } else if (~v.indexOf("=")) {
          a = v.match(_numExp);
          forceAlpha && a.length < 4 && (a[3] = 1);
          return a;
        }
      } else {
        a = v.match(_strictNumExp) || _colorLookup.transparent;
      }
      a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
      r = a[0] / _255;
      g = a[1] / _255;
      b = a[2] / _255;
      max = Math.max(r, g, b);
      min = Math.min(r, g, b);
      l2 = (max + min) / 2;
      if (max === min) {
        h = s2 = 0;
      } else {
        d2 = max - min;
        s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
        h = max === r ? (g - b) / d2 + (g < b ? 6 : 0) : max === g ? (b - r) / d2 + 2 : (r - g) / d2 + 4;
        h *= 60;
      }
      a[0] = ~~(h + 0.5);
      a[1] = ~~(s2 * 100 + 0.5);
      a[2] = ~~(l2 * 100 + 0.5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
  };
  var _colorOrderData = function _colorOrderData2(v) {
    var values = [], c2 = [], i3 = -1;
    v.split(_colorExp).forEach(function(v2) {
      var a = v2.match(_numWithUnitExp) || [];
      values.push.apply(values, a);
      c2.push(i3 += a.length + 1);
    });
    values.c = c2;
    return values;
  };
  var _formatColors = function _formatColors2(s2, toHSL, orderMatchData) {
    var result = "", colors = (s2 + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i3 = 0, c2, shell, d2, l2;
    if (!colors) {
      return s2;
    }
    colors = colors.map(function(color) {
      return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
      d2 = _colorOrderData(s2);
      c2 = orderMatchData.c;
      if (c2.join(result) !== d2.c.join(result)) {
        shell = s2.replace(_colorExp, "1").split(_numWithUnitExp);
        l2 = shell.length - 1;
        for (; i3 < l2; i3++) {
          result += shell[i3] + (~c2.indexOf(i3) ? colors.shift() || type + "0,0,0,0)" : (d2.length ? d2 : colors.length ? colors : orderMatchData).shift());
        }
      }
    }
    if (!shell) {
      shell = s2.split(_colorExp);
      l2 = shell.length - 1;
      for (; i3 < l2; i3++) {
        result += shell[i3] + colors[i3];
      }
    }
    return result + shell[l2];
  };
  var _colorExp = function() {
    var s2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p2;
    for (p2 in _colorLookup) {
      s2 += "|" + p2 + "\\b";
    }
    return new RegExp(s2 + ")", "gi");
  }();
  var _hslExp = /hsl[a]?\(/;
  var _colorStringFilter = function _colorStringFilter2(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
      toHSL = _hslExp.test(combined);
      a[1] = _formatColors(a[1], toHSL);
      a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
      return true;
    }
  };
  var _tickerActive;
  var _ticker = function() {
    var _getTime3 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime3(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id2, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
      var elapsed = _getTime3() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
      (elapsed > _lagThreshold || elapsed < 0) && (_startTime += elapsed - _adjustedLag);
      _lastUpdate += elapsed;
      time = _lastUpdate - _startTime;
      overlap = time - _nextTime;
      if (overlap > 0 || manual) {
        frame = ++_self.frame;
        _delta = time - _self.time * 1e3;
        _self.time = time = time / 1e3;
        _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
        dispatch = 1;
      }
      manual || (_id2 = _req(_tick2));
      if (dispatch) {
        for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
          _listeners3[_i2](time, _delta, frame, v);
        }
      }
    };
    _self = {
      time: 0,
      frame: 0,
      tick: function tick() {
        _tick(true);
      },
      deltaRatio: function deltaRatio(fps) {
        return _delta / (1e3 / (fps || 60));
      },
      wake: function wake() {
        if (_coreReady) {
          if (!_coreInitted && _windowExists()) {
            _win = _coreInitted = window;
            _doc = _win.document || {};
            _globals.gsap = gsap;
            (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
            _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
            _registerPluginQueue.forEach(_createPlugin);
          }
          _raf = typeof requestAnimationFrame !== "undefined" && requestAnimationFrame;
          _id2 && _self.sleep();
          _req = _raf || function(f2) {
            return setTimeout(f2, _nextTime - _self.time * 1e3 + 1 | 0);
          };
          _tickerActive = 1;
          _tick(2);
        }
      },
      sleep: function sleep() {
        (_raf ? cancelAnimationFrame : clearTimeout)(_id2);
        _tickerActive = 0;
        _req = _emptyFunc;
      },
      lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
        _lagThreshold = threshold || Infinity;
        _adjustedLag = Math.min(adjustedLag || 33, _lagThreshold);
      },
      fps: function fps(_fps) {
        _gap = 1e3 / (_fps || 240);
        _nextTime = _self.time * 1e3 + _gap;
      },
      add: function add(callback, once, prioritize) {
        var func = once ? function(t2, d2, f2, v) {
          callback(t2, d2, f2, v);
          _self.remove(func);
        } : callback;
        _self.remove(callback);
        _listeners3[prioritize ? "unshift" : "push"](func);
        _wake();
        return func;
      },
      remove: function remove(callback, i3) {
        ~(i3 = _listeners3.indexOf(callback)) && _listeners3.splice(i3, 1) && _i2 >= i3 && _i2--;
      },
      _listeners: _listeners3
    };
    return _self;
  }();
  var _wake = function _wake2() {
    return !_tickerActive && _ticker.wake();
  };
  var _easeMap = {};
  var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
  var _quotesExp = /["']/g;
  var _parseObjectInString = function _parseObjectInString2(value) {
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i3 = 1, l2 = split.length, index, val, parsedVal;
    for (; i3 < l2; i3++) {
      val = split[i3];
      index = i3 !== l2 - 1 ? val.lastIndexOf(",") : val.length;
      parsedVal = val.substr(0, index);
      obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
      key = val.substr(index + 1).trim();
    }
    return obj;
  };
  var _valueInParentheses = function _valueInParentheses2(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
  };
  var _configEaseFromString = function _configEaseFromString2(name2) {
    var split = (name2 + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name2.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name2).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name2) ? _easeMap._CE("", name2) : ease;
  };
  var _invertEase = function _invertEase2(ease) {
    return function(p2) {
      return 1 - ease(1 - p2);
    };
  };
  var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
    var child = timeline2._first, ease;
    while (child) {
      if (child instanceof Timeline) {
        _propagateYoyoEase2(child, isYoyo);
      } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
        if (child.timeline) {
          _propagateYoyoEase2(child.timeline, isYoyo);
        } else {
          ease = child._ease;
          child._ease = child._yEase;
          child._yEase = ease;
          child._yoyo = isYoyo;
        }
      }
      child = child._next;
    }
  };
  var _parseEase = function _parseEase2(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
  };
  var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
      easeOut = function easeOut2(p2) {
        return 1 - easeIn(1 - p2);
      };
    }
    if (easeInOut === void 0) {
      easeInOut = function easeInOut2(p2) {
        return p2 < 0.5 ? easeIn(p2 * 2) / 2 : 1 - easeIn((1 - p2) * 2) / 2;
      };
    }
    var ease = {
      easeIn,
      easeOut,
      easeInOut
    }, lowercaseName;
    _forEachName(names, function(name2) {
      _easeMap[name2] = _globals[name2] = ease;
      _easeMap[lowercaseName = name2.toLowerCase()] = easeOut;
      for (var p2 in ease) {
        _easeMap[lowercaseName + (p2 === "easeIn" ? ".in" : p2 === "easeOut" ? ".out" : ".inOut")] = _easeMap[name2 + "." + p2] = ease[p2];
      }
    });
    return ease;
  };
  var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
    return function(p2) {
      return p2 < 0.5 ? (1 - easeOut(1 - p2 * 2)) / 2 : 0.5 + easeOut((p2 - 0.5) * 2) / 2;
    };
  };
  var _configElastic = function _configElastic2(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p4) {
      return p4 === 1 ? 1 : p1 * Math.pow(2, -10 * p4) * _sin((p4 - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p4) {
      return 1 - easeOut(1 - p4);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2;
    ease.config = function(amplitude2, period2) {
      return _configElastic2(type, amplitude2, period2);
    };
    return ease;
  };
  var _configBack = function _configBack2(type, overshoot) {
    if (overshoot === void 0) {
      overshoot = 1.70158;
    }
    var easeOut = function easeOut2(p2) {
      return p2 ? --p2 * p2 * ((overshoot + 1) * p2 + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p2) {
      return 1 - easeOut(1 - p2);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot2) {
      return _configBack2(type, overshoot2);
    };
    return ease;
  };
  _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name2, i3) {
    var power = i3 < 5 ? i3 + 1 : i3;
    _insertEase(name2 + ",Power" + (power - 1), i3 ? function(p2) {
      return Math.pow(p2, power);
    } : function(p2) {
      return p2;
    }, function(p2) {
      return 1 - Math.pow(1 - p2, power);
    }, function(p2) {
      return p2 < 0.5 ? Math.pow(p2 * 2, power) / 2 : 1 - Math.pow((1 - p2) * 2, power) / 2;
    });
  });
  _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
  _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
  (function(n, c2) {
    var n1 = 1 / c2, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p2) {
      return p2 < n1 ? n * p2 * p2 : p2 < n2 ? n * Math.pow(p2 - 1.5 / c2, 2) + 0.75 : p2 < n3 ? n * (p2 -= 2.25 / c2) * p2 + 0.9375 : n * Math.pow(p2 - 2.625 / c2, 2) + 0.984375;
    };
    _insertEase("Bounce", function(p2) {
      return 1 - easeOut(1 - p2);
    }, easeOut);
  })(7.5625, 2.75);
  _insertEase("Expo", function(p2) {
    return p2 ? Math.pow(2, 10 * (p2 - 1)) : 0;
  });
  _insertEase("Circ", function(p2) {
    return -(_sqrt(1 - p2 * p2) - 1);
  });
  _insertEase("Sine", function(p2) {
    return p2 === 1 ? 1 : -_cos(p2 * _HALF_PI) + 1;
  });
  _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
  _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
      if (steps === void 0) {
        steps = 1;
      }
      var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
      return function(p4) {
        return ((p2 * _clamp(0, max, p4) | 0) + p3) * p1;
      };
    }
  };
  _defaults.ease = _easeMap["quad.out"];
  _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name2) {
    return _callbackNames += name2 + "," + name2 + "Params,";
  });
  var GSCache = function GSCache2(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
  };
  var Animation = /* @__PURE__ */ function() {
    function Animation2(vars) {
      this.vars = vars;
      this._delay = +vars.delay || 0;
      if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
        this._rDelay = vars.repeatDelay || 0;
        this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
      }
      this._ts = 1;
      _setDuration(this, +vars.duration, 1, 1);
      this.data = vars.data;
      if (_context) {
        this._ctx = _context;
        _context.data.push(this);
      }
      _tickerActive || _ticker.wake();
    }
    var _proto = Animation2.prototype;
    _proto.delay = function delay(value) {
      if (value || value === 0) {
        this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
        this._delay = value;
        return this;
      }
      return this._delay;
    };
    _proto.duration = function duration(value) {
      return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
      if (!arguments.length) {
        return this._tDur;
      }
      this._dirty = 0;
      return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
      _wake();
      if (!arguments.length) {
        return this._tTime;
      }
      var parent = this._dp;
      if (parent && parent.smoothChildTiming && this._ts) {
        _alignPlayhead(this, _totalTime);
        !parent._dp || parent.parent || _postAddChecks(parent, this);
        while (parent && parent.parent) {
          if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
            parent.totalTime(parent._tTime, true);
          }
          parent = parent.parent;
        }
        if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
          _addToTimeline(this._dp, this, this._start - this._delay);
        }
      }
      if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
        this._ts || (this._pTime = _totalTime);
        _lazySafeRender(this, _totalTime, suppressEvents);
      }
      return this;
    };
    _proto.time = function time(value, suppressEvents) {
      return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.progress = function progress(value, suppressEvents) {
      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
      var cycleDuration = this.duration() + this._rDelay;
      return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    };
    _proto.timeScale = function timeScale(value, suppressEvents) {
      if (!arguments.length) {
        return this._rts === -_tinyNum ? 0 : this._rts;
      }
      if (this._rts === value) {
        return this;
      }
      var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
      this._rts = +value || 0;
      this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
      this.totalTime(_clamp(-Math.abs(this._delay), this._tDur, tTime), suppressEvents !== false);
      _setEnd(this);
      return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
      if (!arguments.length) {
        return this._ps;
      }
      if (this._ps !== value) {
        this._ps = value;
        if (value) {
          this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
          this._ts = this._act = 0;
        } else {
          _wake();
          this._ts = this._rts;
          this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
        }
      }
      return this;
    };
    _proto.startTime = function startTime(value) {
      if (arguments.length) {
        this._start = value;
        var parent = this.parent || this._dp;
        parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
        return this;
      }
      return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
      return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
      var parent = this.parent || this._dp;
      return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.revert = function revert(config3) {
      if (config3 === void 0) {
        config3 = _revertConfig;
      }
      var prevIsReverting = _reverting;
      _reverting = config3;
      if (this._initted || this._startAt) {
        this.timeline && this.timeline.revert(config3);
        this.totalTime(-0.01, config3.suppressEvents);
      }
      this.data !== "nested" && config3.kill !== false && this.kill();
      _reverting = prevIsReverting;
      return this;
    };
    _proto.globalTime = function globalTime(rawTime) {
      var animation = this, time = arguments.length ? rawTime : animation.rawTime();
      while (animation) {
        time = animation._start + time / (Math.abs(animation._ts) || 1);
        animation = animation._dp;
      }
      return !this.parent && this._sat ? this._sat.globalTime(rawTime) : time;
    };
    _proto.repeat = function repeat(value) {
      if (arguments.length) {
        this._repeat = value === Infinity ? -2 : value;
        return _onUpdateTotalDuration(this);
      }
      return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
      if (arguments.length) {
        var time = this._time;
        this._rDelay = value;
        _onUpdateTotalDuration(this);
        return time ? this.time(time) : this;
      }
      return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
      if (arguments.length) {
        this._yoyo = value;
        return this;
      }
      return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
      return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
      return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
      from != null && this.seek(from, suppressEvents);
      return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
      from != null && this.seek(from || this.totalDuration(), suppressEvents);
      return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
      atTime != null && this.seek(atTime, suppressEvents);
      return this.paused(true);
    };
    _proto.resume = function resume() {
      return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
      if (arguments.length) {
        !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
        return this;
      }
      return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
      this._initted = this._act = 0;
      this._zTime = -_tinyNum;
      return this;
    };
    _proto.isActive = function isActive() {
      var parent = this.parent || this._dp, start = this._start, rawTime;
      return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
      var vars = this.vars;
      if (arguments.length > 1) {
        if (!callback) {
          delete vars[type];
        } else {
          vars[type] = callback;
          params && (vars[type + "Params"] = params);
          type === "onUpdate" && (this._onUpdate = callback);
        }
        return this;
      }
      return vars[type];
    };
    _proto.then = function then(onFulfilled) {
      var self2 = this;
      return new Promise(function(resolve) {
        var f2 = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
          var _then = self2.then;
          self2.then = null;
          _isFunction(f2) && (f2 = f2(self2)) && (f2.then || f2 === self2) && (self2.then = _then);
          resolve(f2);
          self2.then = _then;
        };
        if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
          _resolve();
        } else {
          self2._prom = _resolve;
        }
      });
    };
    _proto.kill = function kill() {
      _interrupt(this);
    };
    return Animation2;
  }();
  _setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
  });
  var Timeline = /* @__PURE__ */ function(_Animation) {
    _inheritsLoose(Timeline2, _Animation);
    function Timeline2(vars, position) {
      var _this;
      if (vars === void 0) {
        vars = {};
      }
      _this = _Animation.call(this, vars) || this;
      _this.labels = {};
      _this.smoothChildTiming = !!vars.smoothChildTiming;
      _this.autoRemoveChildren = !!vars.autoRemoveChildren;
      _this._sort = _isNotFalse(vars.sortChildren);
      _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
      vars.reversed && _this.reverse();
      vars.paused && _this.paused(true);
      vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
      return _this;
    }
    var _proto2 = Timeline2.prototype;
    _proto2.to = function to(targets, vars, position) {
      _createTweenType(0, arguments, this);
      return this;
    };
    _proto2.from = function from(targets, vars, position) {
      _createTweenType(1, arguments, this);
      return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
      _createTweenType(2, arguments, this);
      return this;
    };
    _proto2.set = function set(targets, vars, position) {
      vars.duration = 0;
      vars.parent = this;
      _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
      vars.immediateRender = !!vars.immediateRender;
      new Tween(targets, vars, _parsePosition(this, position), 1);
      return this;
    };
    _proto2.call = function call(callback, params, position) {
      return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    };
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.duration = duration;
      vars.stagger = vars.stagger || stagger;
      vars.onComplete = onCompleteAll;
      vars.onCompleteParams = onCompleteAllParams;
      vars.parent = this;
      new Tween(targets, vars, _parsePosition(this, position));
      return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
      vars.runBackwards = 1;
      _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
      return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
      toVars.startAt = fromVars;
      _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
      return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
      this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
      if (tTime !== this._tTime || force || crossingStart) {
        if (prevTime !== this._time && dur) {
          tTime += this._time - prevTime;
          totalTime += this._time - prevTime;
        }
        time = tTime;
        prevStart = this._start;
        timeScale = this._ts;
        prevPaused = !timeScale;
        if (crossingStart) {
          dur || (prevTime = this._zTime);
          (totalTime || !suppressEvents) && (this._zTime = totalTime);
        }
        if (this._repeat) {
          yoyo = this._yoyo;
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && totalTime < 0) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === tTime / cycleDuration) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          !prevTime && this._tTime && prevIteration !== iteration && this._tTime - prevIteration * cycleDuration - this._dur <= 0 && (prevIteration = iteration);
          if (yoyo && iteration & 1) {
            time = dur - time;
            isYoyo = 1;
          }
          if (iteration !== prevIteration && !this._lock) {
            var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
            iteration < prevIteration && (rewinding = !rewinding);
            prevTime = rewinding ? 0 : tTime % dur ? dur : tTime;
            this._lock = 1;
            this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
            this._tTime = tTime;
            !suppressEvents && this.parent && _callback(this, "onRepeat");
            this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
            if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
              return this;
            }
            dur = this._dur;
            tDur = this._tDur;
            if (doesWrap) {
              this._lock = 2;
              prevTime = rewinding ? dur : -1e-4;
              this.render(prevTime, true);
              this.vars.repeatRefresh && !isYoyo && this.invalidate();
            }
            this._lock = 0;
            if (!this._ts && !prevPaused) {
              return this;
            }
            _propagateYoyoEase(this, isYoyo);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2) {
          pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
          if (pauseTween) {
            tTime -= time - (time = pauseTween._start);
          }
        }
        this._tTime = tTime;
        this._time = time;
        this._act = !timeScale;
        if (!this._initted) {
          this._onUpdate = this.vars.onUpdate;
          this._initted = 1;
          this._zTime = totalTime;
          prevTime = 0;
        }
        if (!prevTime && time && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        if (time >= prevTime && totalTime >= 0) {
          child = this._first;
          while (child) {
            next = child._next;
            if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = -_tinyNum);
                break;
              }
            }
            child = next;
          }
        } else {
          child = this._last;
          var adjustedTime = totalTime < 0 ? totalTime : time;
          while (child) {
            next = child._prev;
            if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
              if (child.parent !== this) {
                return this.render(totalTime, suppressEvents, force);
              }
              child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
              if (time !== this._time || !this._ts && !prevPaused) {
                pauseTween = 0;
                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
                break;
              }
            }
            child = next;
          }
        }
        if (pauseTween && !suppressEvents) {
          this.pause();
          pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
          if (this._ts) {
            this._start = prevStart;
            _setEnd(this);
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
        if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
          if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
            if (!this._lock) {
              (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
              if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
              }
            }
          }
        }
      }
      return this;
    };
    _proto2.add = function add(child, position) {
      var _this2 = this;
      _isNumber(position) || (position = _parsePosition(this, position, child));
      if (!(child instanceof Animation)) {
        if (_isArray(child)) {
          child.forEach(function(obj) {
            return _this2.add(obj, position);
          });
          return this;
        }
        if (_isString(child)) {
          return this.addLabel(child, position);
        }
        if (_isFunction(child)) {
          child = Tween.delayedCall(0, child);
        } else {
          return this;
        }
      }
      return this !== child ? _addToTimeline(this, child, position) : this;
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
      if (nested === void 0) {
        nested = true;
      }
      if (tweens === void 0) {
        tweens = true;
      }
      if (timelines === void 0) {
        timelines = true;
      }
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = -_bigNum;
      }
      var a = [], child = this._first;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          if (child instanceof Tween) {
            tweens && a.push(child);
          } else {
            timelines && a.push(child);
            nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
          }
        }
        child = child._next;
      }
      return a;
    };
    _proto2.getById = function getById2(id) {
      var animations = this.getChildren(1, 1, 1), i3 = animations.length;
      while (i3--) {
        if (animations[i3].vars.id === id) {
          return animations[i3];
        }
      }
    };
    _proto2.remove = function remove(child) {
      if (_isString(child)) {
        return this.removeLabel(child);
      }
      if (_isFunction(child)) {
        return this.killTweensOf(child);
      }
      _removeLinkedListItem(this, child);
      if (child === this._recent) {
        this._recent = this._last;
      }
      return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
      if (!arguments.length) {
        return this._tTime;
      }
      this._forcing = 1;
      if (!this._dp && this._ts) {
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
      }
      _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
      this._forcing = 0;
      return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
      this.labels[label] = _parsePosition(this, position);
      return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
      delete this.labels[label];
      return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
      var t2 = Tween.delayedCall(0, callback || _emptyFunc, params);
      t2.data = "isPause";
      this._hasPause = 1;
      return _addToTimeline(this, t2, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
      var child = this._first;
      position = _parsePosition(this, position);
      while (child) {
        if (child._start === position && child.data === "isPause") {
          _removeFromParent(child);
        }
        child = child._next;
      }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      var tweens = this.getTweensOf(targets, onlyActive), i3 = tweens.length;
      while (i3--) {
        _overwritingTween !== tweens[i3] && tweens[i3].kill(targets, props);
      }
      return this;
    };
    _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
      var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
      while (child) {
        if (child instanceof Tween) {
          if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
            a.push(child);
          }
        } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
          a.push.apply(a, children);
        }
        child = child._next;
      }
      return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
      vars = vars || {};
      var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
        ease: vars.ease || "none",
        lazy: false,
        immediateRender: false,
        time: endTime,
        overwrite: "auto",
        duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
        onStart: function onStart() {
          tl.pause();
          if (!initted) {
            var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
            tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
            initted = 1;
          }
          _onStart && _onStart.apply(tween, onStartParams || []);
        }
      }, vars));
      return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
      return this.tweenTo(toPosition, _setDefaults({
        startAt: {
          time: _parsePosition(this, fromPosition)
        }
      }, vars));
    };
    _proto2.recent = function recent() {
      return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
      if (afterTime === void 0) {
        afterTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
      if (beforeTime === void 0) {
        beforeTime = this._time;
      }
      return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
      return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
      if (ignoreBeforeTime === void 0) {
        ignoreBeforeTime = 0;
      }
      var child = this._first, labels = this.labels, p2;
      while (child) {
        if (child._start >= ignoreBeforeTime) {
          child._start += amount;
          child._end += amount;
        }
        child = child._next;
      }
      if (adjustLabels) {
        for (p2 in labels) {
          if (labels[p2] >= ignoreBeforeTime) {
            labels[p2] += amount;
          }
        }
      }
      return _uncache(this);
    };
    _proto2.invalidate = function invalidate(soft) {
      var child = this._first;
      this._lock = 0;
      while (child) {
        child.invalidate(soft);
        child = child._next;
      }
      return _Animation.prototype.invalidate.call(this, soft);
    };
    _proto2.clear = function clear(includeLabels) {
      if (includeLabels === void 0) {
        includeLabels = true;
      }
      var child = this._first, next;
      while (child) {
        next = child._next;
        this.remove(child);
        child = next;
      }
      this._dp && (this._time = this._tTime = this._pTime = 0);
      includeLabels && (this.labels = {});
      return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
      var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
      if (arguments.length) {
        return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
      }
      if (self2._dirty) {
        parent = self2.parent;
        while (child) {
          prev = child._prev;
          child._dirty && child.totalDuration();
          start = child._start;
          if (start > prevStart && self2._sort && child._ts && !self2._lock) {
            self2._lock = 1;
            _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
          } else {
            prevStart = start;
          }
          if (start < 0 && child._ts) {
            max -= start;
            if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
              self2._start += start / self2._ts;
              self2._time -= start;
              self2._tTime -= start;
            }
            self2.shiftChildren(-start, false, -Infinity);
            prevStart = 0;
          }
          child._end > max && child._ts && (max = child._end);
          child = prev;
        }
        _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
        self2._dirty = 0;
      }
      return self2._tDur;
    };
    Timeline2.updateRoot = function updateRoot(time) {
      if (_globalTimeline._ts) {
        _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
        _lastRenderedFrame = _ticker.frame;
      }
      if (_ticker.frame >= _nextGCFrame) {
        _nextGCFrame += _config.autoSleep || 120;
        var child = _globalTimeline._first;
        if (!child || !child._ts) {
          if (_config.autoSleep && _ticker._listeners.length < 2) {
            while (child && !child._ts) {
              child = child._next;
            }
            child || _ticker.sleep();
          }
        }
      }
    };
    return Timeline2;
  }(Animation);
  _setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
  });
  var _addComplexStringPropTween = function _addComplexStringPropTween2(target, prop, start, end, setter, stringFilter, funcParam) {
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (stringFilter) {
      a = [start, end];
      stringFilter(a, target, prop);
      start = a[0];
      end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
      endNum = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(") {
        color = 1;
      }
      if (endNum !== startNums[matchIndex++]) {
        startNum = parseFloat(startNums[matchIndex - 1]) || 0;
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
          s: startNum,
          c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
          m: color && color < 4 ? Math.round : 0
        };
        index = _complexStringNumExp.lastIndex;
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
      pt.e = 0;
    }
    this._pt = pt;
    return pt;
  };
  var _addPropTween = function _addPropTween2(target, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
      if (~end.indexOf("random(")) {
        end = _replaceRandom(end);
      }
      if (end.charAt(1) === "=") {
        pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
        if (pt || pt === 0) {
          end = pt;
        }
      }
    }
    if (!optional || parsedStart !== end || _forceAllPropTweens) {
      if (!isNaN(parsedStart * end) && end !== "") {
        pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
        funcParam && (pt.fp = funcParam);
        modifier && pt.modifier(modifier, this, target);
        return this._pt = pt;
      }
      !currentValue && !(prop in target) && _missingPlugin(prop, end);
      return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
  };
  var _processVars = function _processVars2(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
      return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p2;
    for (p2 in vars) {
      copy[p2] = _parseFuncOrString(vars[p2], tween, index, target, targets);
    }
    return copy;
  };
  var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i3;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
      tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
      if (tween !== _quickTween) {
        ptLookup = tween._ptLookup[tween._targets.indexOf(target)];
        i3 = plugin._props.length;
        while (i3--) {
          ptLookup[plugin._props[i3]] = pt;
        }
      }
    }
    return plugin;
  };
  var _overwritingTween;
  var _forceAllPropTweens;
  var _initTween = function _initTween2(tween, time, tTime) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i3, p2, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
      yoyoEase = tween._yEase;
      tween._yEase = tween._ease;
      tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards;
    if (!tl || keyframes && !vars.stagger) {
      harness = targets[0] ? _getCache(targets[0]).harness : 0;
      harnessVars = harness && vars[harness.prop];
      cleanVars = _copyExcluding(vars, _reservedProps);
      if (prevStartAt) {
        prevStartAt._zTime < 0 && prevStartAt.progress(1);
        time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
        prevStartAt._lazy = 0;
      }
      if (startAt) {
        _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
          data: "isStart",
          overwrite: false,
          parent,
          immediateRender: true,
          lazy: !prevStartAt && _isNotFalse(lazy),
          startAt: null,
          delay: 0,
          onUpdate: onUpdate && function() {
            return _callback(tween, "onUpdate");
          },
          stagger: 0
        }, startAt)));
        tween._startAt._dp = 0;
        tween._startAt._sat = tween;
        time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
        if (immediateRender) {
          if (dur && time <= 0 && tTime <= 0) {
            time && (tween._zTime = time);
            return;
          }
        }
      } else if (runBackwards && dur) {
        if (!prevStartAt) {
          time && (immediateRender = false);
          p2 = _setDefaults({
            overwrite: false,
            data: "isFromStart",
            //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
            lazy: immediateRender && !prevStartAt && _isNotFalse(lazy),
            immediateRender,
            //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
            stagger: 0,
            parent
            //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
          }, cleanVars);
          harnessVars && (p2[harness.prop] = harnessVars);
          _removeFromParent(tween._startAt = Tween.set(targets, p2));
          tween._startAt._dp = 0;
          tween._startAt._sat = tween;
          time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
          tween._zTime = time;
          if (!immediateRender) {
            _initTween2(tween._startAt, _tinyNum, _tinyNum);
          } else if (!time) {
            return;
          }
        }
      }
      tween._pt = tween._ptCache = 0;
      lazy = dur && _isNotFalse(lazy) || lazy && !dur;
      for (i3 = 0; i3 < targets.length; i3++) {
        target = targets[i3];
        gsData = target._gsap || _harness(targets)[i3]._gsap;
        tween._ptLookup[i3] = ptLookup = {};
        _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
        index = fullTargets === targets ? i3 : fullTargets.indexOf(target);
        if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
          tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
          plugin._props.forEach(function(name2) {
            ptLookup[name2] = pt;
          });
          plugin.priority && (hasPriority = 1);
        }
        if (!harness || harnessVars) {
          for (p2 in cleanVars) {
            if (_plugins[p2] && (plugin = _checkPlugin(p2, cleanVars, tween, index, target, fullTargets))) {
              plugin.priority && (hasPriority = 1);
            } else {
              ptLookup[p2] = pt = _addPropTween.call(tween, target, p2, "get", cleanVars[p2], index, fullTargets, 0, vars.stringFilter);
            }
          }
        }
        tween._op && tween._op[i3] && tween.kill(target, tween._op[i3]);
        if (autoOverwrite && tween._pt) {
          _overwritingTween = tween;
          _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time));
          overwritten = !tween.parent;
          _overwritingTween = 0;
        }
        tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
      }
      hasPriority && _sortPropTweensByPriority(tween);
      tween._onInit && tween._onInit(tween);
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten;
    keyframes && time <= 0 && tl.render(_bigNum, true, true);
  };
  var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time, skipRecursion) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i3;
    if (!ptCache) {
      ptCache = tween._ptCache[property] = [];
      lookup = tween._ptLookup;
      i3 = tween._targets.length;
      while (i3--) {
        pt = lookup[i3][property];
        if (pt && pt.d && pt.d._pt) {
          pt = pt.d._pt;
          while (pt && pt.p !== property && pt.fp !== property) {
            pt = pt._next;
          }
        }
        if (!pt) {
          _forceAllPropTweens = 1;
          tween.vars[property] = "+=0";
          _initTween(tween, time);
          _forceAllPropTweens = 0;
          return skipRecursion ? _warn(property + " not eligible for reset") : 1;
        }
        ptCache.push(pt);
      }
    }
    i3 = ptCache.length;
    while (i3--) {
      rootPT = ptCache[i3];
      pt = rootPT._pt || rootPT;
      pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
      pt.c = value - pt.s;
      rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
      rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
    }
  };
  var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p2, i3, aliases;
    if (!propertyAliases) {
      return vars;
    }
    copy = _merge({}, vars);
    for (p2 in propertyAliases) {
      if (p2 in copy) {
        aliases = propertyAliases[p2].split(",");
        i3 = aliases.length;
        while (i3--) {
          copy[aliases[i3]] = copy[p2];
        }
      }
    }
    return copy;
  };
  var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p2, a;
    if (_isArray(obj)) {
      a = allProps[prop] || (allProps[prop] = []);
      obj.forEach(function(value, i3) {
        return a.push({
          t: i3 / (obj.length - 1) * 100,
          v: value,
          e: ease
        });
      });
    } else {
      for (p2 in obj) {
        a = allProps[p2] || (allProps[p2] = []);
        p2 === "ease" || a.push({
          t: parseFloat(prop),
          v: obj[p2],
          e: ease
        });
      }
    }
  };
  var _parseFuncOrString = function _parseFuncOrString2(value, tween, i3, target, targets) {
    return _isFunction(value) ? value.call(tween, i3, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
  };
  var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
  var _staggerPropsToSkip = {};
  _forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name2) {
    return _staggerPropsToSkip[name2] = 1;
  });
  var Tween = /* @__PURE__ */ function(_Animation2) {
    _inheritsLoose(Tween2, _Animation2);
    function Tween2(targets, vars, position, skipInherit) {
      var _this3;
      if (typeof vars === "number") {
        position.duration = vars;
        vars = position;
        position = null;
      }
      _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
      var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults3 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i3, copy, l2, p2, curTarget, staggerFunc, staggerVarsToMerge;
      _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://gsap.com", !_config.nullTargetWarn) || [];
      _this3._ptLookup = [];
      _this3._overwrite = overwrite;
      if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        vars = _this3.vars;
        tl = _this3.timeline = new Timeline({
          data: "nested",
          defaults: defaults3 || {},
          targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
        });
        tl.kill();
        tl.parent = tl._dp = _assertThisInitialized(_this3);
        tl._start = 0;
        if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
          l2 = parsedTargets.length;
          staggerFunc = stagger && distribute(stagger);
          if (_isObject(stagger)) {
            for (p2 in stagger) {
              if (~_staggerTweenProps.indexOf(p2)) {
                staggerVarsToMerge || (staggerVarsToMerge = {});
                staggerVarsToMerge[p2] = stagger[p2];
              }
            }
          }
          for (i3 = 0; i3 < l2; i3++) {
            copy = _copyExcluding(vars, _staggerPropsToSkip);
            copy.stagger = 0;
            yoyoEase && (copy.yoyoEase = yoyoEase);
            staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
            curTarget = parsedTargets[i3];
            copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i3, curTarget, parsedTargets);
            copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i3, curTarget, parsedTargets) || 0) - _this3._delay;
            if (!stagger && l2 === 1 && copy.delay) {
              _this3._delay = delay = copy.delay;
              _this3._start += delay;
              copy.delay = 0;
            }
            tl.to(curTarget, copy, staggerFunc ? staggerFunc(i3, curTarget, parsedTargets) : 0);
            tl._ease = _easeMap.none;
          }
          tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
        } else if (keyframes) {
          _inheritDefaults(_setDefaults(tl.vars.defaults, {
            ease: "none"
          }));
          tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
          var time = 0, a, kf, v;
          if (_isArray(keyframes)) {
            keyframes.forEach(function(frame) {
              return tl.to(parsedTargets, frame, ">");
            });
            tl.duration();
          } else {
            copy = {};
            for (p2 in keyframes) {
              p2 === "ease" || p2 === "easeEach" || _parseKeyframe(p2, keyframes[p2], copy, keyframes.easeEach);
            }
            for (p2 in copy) {
              a = copy[p2].sort(function(a2, b) {
                return a2.t - b.t;
              });
              time = 0;
              for (i3 = 0; i3 < a.length; i3++) {
                kf = a[i3];
                v = {
                  ease: kf.e,
                  duration: (kf.t - (i3 ? a[i3 - 1].t : 0)) / 100 * duration
                };
                v[p2] = kf.v;
                tl.to(parsedTargets, v, time);
                time += v.duration;
              }
            }
            tl.duration() < duration && tl.to({}, {
              duration: duration - tl.duration()
            });
          }
        }
        duration || _this3.duration(duration = tl.duration());
      } else {
        _this3.timeline = 0;
      }
      if (overwrite === true && !_suppressOverwrites) {
        _overwritingTween = _assertThisInitialized(_this3);
        _globalTimeline.killTweensOf(parsedTargets);
        _overwritingTween = 0;
      }
      _addToTimeline(parent, _assertThisInitialized(_this3), position);
      vars.reversed && _this3.reverse();
      vars.paused && _this3.paused(true);
      if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
        _this3._tTime = -_tinyNum;
        _this3.render(Math.max(0, -delay) || 0);
      }
      scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
      return _this3;
    }
    var _proto3 = Tween2.prototype;
    _proto3.render = function render3(totalTime, suppressEvents, force) {
      var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
      if (!dur) {
        _renderZeroDurationTween(this, totalTime, suppressEvents, force);
      } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
        time = tTime;
        timeline2 = this.timeline;
        if (this._repeat) {
          cycleDuration = dur + this._rDelay;
          if (this._repeat < -1 && isNegative) {
            return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
          }
          time = _roundPrecise(tTime % cycleDuration);
          if (tTime === tDur) {
            iteration = this._repeat;
            time = dur;
          } else {
            iteration = ~~(tTime / cycleDuration);
            if (iteration && iteration === _roundPrecise(tTime / cycleDuration)) {
              time = dur;
              iteration--;
            }
            time > dur && (time = dur);
          }
          isYoyo = this._yoyo && iteration & 1;
          if (isYoyo) {
            yoyoEase = this._yEase;
            time = dur - time;
          }
          prevIteration = _animationCycle(this._tTime, cycleDuration);
          if (time === prevTime && !force && this._initted && iteration === prevIteration) {
            this._tTime = tTime;
            return this;
          }
          if (iteration !== prevIteration) {
            timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
            if (this.vars.repeatRefresh && !isYoyo && !this._lock && this._time !== cycleDuration && this._initted) {
              this._lock = force = 1;
              this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
            }
          }
        }
        if (!this._initted) {
          if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
            this._tTime = 0;
            return this;
          }
          if (prevTime !== this._time && !(force && this.vars.repeatRefresh && iteration !== prevIteration)) {
            return this;
          }
          if (dur !== this._dur) {
            return this.render(totalTime, suppressEvents, force);
          }
        }
        this._tTime = tTime;
        this._time = time;
        if (!this._act && this._ts) {
          this._act = 1;
          this._lazy = 0;
        }
        this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
        if (this._from) {
          this.ratio = ratio = 1 - ratio;
        }
        if (time && !prevTime && !suppressEvents && !iteration) {
          _callback(this, "onStart");
          if (this._tTime !== tTime) {
            return this;
          }
        }
        pt = this._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        timeline2 && timeline2.render(totalTime < 0 ? totalTime : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
        if (this._onUpdate && !suppressEvents) {
          isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
          _callback(this, "onUpdate");
        }
        this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
        if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
          isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
          (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
          if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
          }
        }
      }
      return this;
    };
    _proto3.targets = function targets() {
      return this._targets;
    };
    _proto3.invalidate = function invalidate(soft) {
      (!soft || !this.vars.runBackwards) && (this._startAt = 0);
      this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
      this._ptLookup = [];
      this.timeline && this.timeline.invalidate(soft);
      return _Animation2.prototype.invalidate.call(this, soft);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative, skipRecursion) {
      _tickerActive || _ticker.wake();
      this._ts || this.play();
      var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
      this._initted || _initTween(this, time);
      ratio = this._ease(time / this._dur);
      if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time, skipRecursion)) {
        return this.resetTo(property, value, start, startIsRelative, 1);
      }
      _alignPlayhead(this, 0);
      this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
      return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
      if (vars === void 0) {
        vars = "all";
      }
      if (!targets && (!vars || vars === "all")) {
        this._lazy = this._pt = 0;
        return this.parent ? _interrupt(this) : this;
      }
      if (this.timeline) {
        var tDur = this.timeline.totalDuration();
        this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
        this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
        return this;
      }
      var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p2, pt, i3;
      if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
        vars === "all" && (this._pt = 0);
        return _interrupt(this);
      }
      overwrittenProps = this._op = this._op || [];
      if (vars !== "all") {
        if (_isString(vars)) {
          p2 = {};
          _forEachName(vars, function(name2) {
            return p2[name2] = 1;
          });
          vars = p2;
        }
        vars = _addAliasesToVars(parsedTargets, vars);
      }
      i3 = parsedTargets.length;
      while (i3--) {
        if (~killingTargets.indexOf(parsedTargets[i3])) {
          curLookup = propTweenLookup[i3];
          if (vars === "all") {
            overwrittenProps[i3] = vars;
            props = curLookup;
            curOverwriteProps = {};
          } else {
            curOverwriteProps = overwrittenProps[i3] = overwrittenProps[i3] || {};
            props = vars;
          }
          for (p2 in props) {
            pt = curLookup && curLookup[p2];
            if (pt) {
              if (!("kill" in pt.d) || pt.d.kill(p2) === true) {
                _removeLinkedListItem(this, pt, "_pt");
              }
              delete curLookup[p2];
            }
            if (curOverwriteProps !== "all") {
              curOverwriteProps[p2] = 1;
            }
          }
        }
      }
      this._initted && !this._pt && firstPT && _interrupt(this);
      return this;
    };
    Tween2.to = function to(targets, vars) {
      return new Tween2(targets, vars, arguments[2]);
    };
    Tween2.from = function from(targets, vars) {
      return _createTweenType(1, arguments);
    };
    Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
      return new Tween2(callback, 0, {
        immediateRender: false,
        lazy: false,
        overwrite: false,
        delay,
        onComplete: callback,
        onReverseComplete: callback,
        onCompleteParams: params,
        onReverseCompleteParams: params,
        callbackScope: scope
      });
    };
    Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
      return _createTweenType(2, arguments);
    };
    Tween2.set = function set(targets, vars) {
      vars.duration = 0;
      vars.repeatDelay || (vars.repeat = 0);
      return new Tween2(targets, vars);
    };
    Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
      return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween2;
  }(Animation);
  _setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
  });
  _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name2) {
    Tween[name2] = function() {
      var tl = new Timeline(), params = _slice.call(arguments, 0);
      params.splice(name2 === "staggerFromTo" ? 5 : 4, 0, 0);
      return tl[name2].apply(tl, params);
    };
  });
  var _setterPlain = function _setterPlain2(target, property, value) {
    return target[property] = value;
  };
  var _setterFunc = function _setterFunc2(target, property, value) {
    return target[property](value);
  };
  var _setterFuncWithParam = function _setterFuncWithParam2(target, property, value, data) {
    return target[property](data.fp, value);
  };
  var _setterAttribute = function _setterAttribute2(target, property, value) {
    return target.setAttribute(property, value);
  };
  var _getSetter = function _getSetter2(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
  };
  var _renderPlain = function _renderPlain2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
  };
  var _renderBoolean = function _renderBoolean2(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
  };
  var _renderComplexString = function _renderComplexString2(ratio, data) {
    var pt = data._pt, s2 = "";
    if (!ratio && data.b) {
      s2 = data.b;
    } else if (ratio === 1 && data.e) {
      s2 = data.e;
    } else {
      while (pt) {
        s2 = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s2;
        pt = pt._next;
      }
      s2 += data.c;
    }
    data.set(data.t, data.p, s2, data);
  };
  var _renderPropTweens = function _renderPropTweens2(ratio, data) {
    var pt = data._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
  };
  var _addPluginModifier = function _addPluginModifier2(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
      next = pt._next;
      pt.p === property && pt.modifier(modifier, tween, target);
      pt = next;
    }
  };
  var _killPropTweensOf = function _killPropTweensOf2(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
      next = pt._next;
      if (pt.p === property && !pt.op || pt.op === property) {
        _removeLinkedListItem(this, pt, "_pt");
      } else if (!pt.dep) {
        hasNonDependentRemaining = 1;
      }
      pt = next;
    }
    return !hasNonDependentRemaining;
  };
  var _setterWithModifier = function _setterWithModifier2(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
  };
  var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
    var pt = parent._pt, next, pt2, first, last;
    while (pt) {
      next = pt._next;
      pt2 = first;
      while (pt2 && pt2.pr > pt.pr) {
        pt2 = pt2._next;
      }
      if (pt._prev = pt2 ? pt2._prev : last) {
        pt._prev._next = pt;
      } else {
        first = pt;
      }
      if (pt._next = pt2) {
        pt2._prev = pt;
      } else {
        last = pt;
      }
      pt = next;
    }
    parent._pt = first;
  };
  var PropTween = /* @__PURE__ */ function() {
    function PropTween2(next, target, prop, start, change, renderer, data, setter, priority) {
      this.t = target;
      this.s = start;
      this.c = change;
      this.p = prop;
      this.r = renderer || _renderPlain;
      this.d = data || this;
      this.set = setter || _setterPlain;
      this.pr = priority || 0;
      this._next = next;
      if (next) {
        next._prev = this;
      }
    }
    var _proto4 = PropTween2.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
      this.mSet = this.mSet || this.set;
      this.set = _setterWithModifier;
      this.m = func;
      this.mt = target;
      this.tween = tween;
    };
    return PropTween2;
  }();
  _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name2) {
    return _reservedProps[name2] = 1;
  });
  _globals.TweenMax = _globals.TweenLite = Tween;
  _globals.TimelineLite = _globals.TimelineMax = Timeline;
  _globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
  });
  _config.stringFilter = _colorStringFilter;
  var _media = [];
  var _listeners = {};
  var _emptyArray = [];
  var _lastMediaTime = 0;
  var _contextID = 0;
  var _dispatch = function _dispatch2(type) {
    return (_listeners[type] || _emptyArray).map(function(f2) {
      return f2();
    });
  };
  var _onMediaChange = function _onMediaChange2() {
    var time = Date.now(), matches = [];
    if (time - _lastMediaTime > 2) {
      _dispatch("matchMediaInit");
      _media.forEach(function(c2) {
        var queries = c2.queries, conditions = c2.conditions, match, p2, anyMatch, toggled;
        for (p2 in queries) {
          match = _win.matchMedia(queries[p2]).matches;
          match && (anyMatch = 1);
          if (match !== conditions[p2]) {
            conditions[p2] = match;
            toggled = 1;
          }
        }
        if (toggled) {
          c2.revert();
          anyMatch && matches.push(c2);
        }
      });
      _dispatch("matchMediaRevert");
      matches.forEach(function(c2) {
        return c2.onMatch(c2, function(func) {
          return c2.add(null, func);
        });
      });
      _lastMediaTime = time;
      _dispatch("matchMedia");
    }
  };
  var Context = /* @__PURE__ */ function() {
    function Context2(func, scope) {
      this.selector = scope && selector(scope);
      this.data = [];
      this._r = [];
      this.isReverted = false;
      this.id = _contextID++;
      func && this.add(func);
    }
    var _proto5 = Context2.prototype;
    _proto5.add = function add(name2, func, scope) {
      if (_isFunction(name2)) {
        scope = func;
        func = name2;
        name2 = _isFunction;
      }
      var self2 = this, f2 = function f3() {
        var prev = _context, prevSelector = self2.selector, result;
        prev && prev !== self2 && prev.data.push(self2);
        scope && (self2.selector = selector(scope));
        _context = self2;
        result = func.apply(self2, arguments);
        _isFunction(result) && self2._r.push(result);
        _context = prev;
        self2.selector = prevSelector;
        self2.isReverted = false;
        return result;
      };
      self2.last = f2;
      return name2 === _isFunction ? f2(self2, function(func2) {
        return self2.add(null, func2);
      }) : name2 ? self2[name2] = f2 : f2;
    };
    _proto5.ignore = function ignore(func) {
      var prev = _context;
      _context = null;
      func(this);
      _context = prev;
    };
    _proto5.getTweens = function getTweens() {
      var a = [];
      this.data.forEach(function(e2) {
        return e2 instanceof Context2 ? a.push.apply(a, e2.getTweens()) : e2 instanceof Tween && !(e2.parent && e2.parent.data === "nested") && a.push(e2);
      });
      return a;
    };
    _proto5.clear = function clear() {
      this._r.length = this.data.length = 0;
    };
    _proto5.kill = function kill(revert, matchMedia2) {
      var _this4 = this;
      if (revert) {
        (function() {
          var tweens = _this4.getTweens(), i4 = _this4.data.length, t2;
          while (i4--) {
            t2 = _this4.data[i4];
            if (t2.data === "isFlip") {
              t2.revert();
              t2.getChildren(true, true, false).forEach(function(tween) {
                return tweens.splice(tweens.indexOf(tween), 1);
              });
            }
          }
          tweens.map(function(t3) {
            return {
              g: t3._dur || t3._delay || t3._sat && !t3._sat.vars.immediateRender ? t3.globalTime(0) : -Infinity,
              t: t3
            };
          }).sort(function(a, b) {
            return b.g - a.g || -Infinity;
          }).forEach(function(o) {
            return o.t.revert(revert);
          });
          i4 = _this4.data.length;
          while (i4--) {
            t2 = _this4.data[i4];
            if (t2 instanceof Timeline) {
              if (t2.data !== "nested") {
                t2.scrollTrigger && t2.scrollTrigger.revert();
                t2.kill();
              }
            } else {
              !(t2 instanceof Tween) && t2.revert && t2.revert(revert);
            }
          }
          _this4._r.forEach(function(f2) {
            return f2(revert, _this4);
          });
          _this4.isReverted = true;
        })();
      } else {
        this.data.forEach(function(e2) {
          return e2.kill && e2.kill();
        });
      }
      this.clear();
      if (matchMedia2) {
        var i3 = _media.length;
        while (i3--) {
          _media[i3].id === this.id && _media.splice(i3, 1);
        }
      }
    };
    _proto5.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    return Context2;
  }();
  var MatchMedia = /* @__PURE__ */ function() {
    function MatchMedia2(scope) {
      this.contexts = [];
      this.scope = scope;
      _context && _context.data.push(this);
    }
    var _proto6 = MatchMedia2.prototype;
    _proto6.add = function add(conditions, func, scope) {
      _isObject(conditions) || (conditions = {
        matches: conditions
      });
      var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p2, active;
      _context && !context3.selector && (context3.selector = _context.selector);
      this.contexts.push(context3);
      func = context3.add("onMatch", func);
      context3.queries = conditions;
      for (p2 in conditions) {
        if (p2 === "all") {
          active = 1;
        } else {
          mq = _win.matchMedia(conditions[p2]);
          if (mq) {
            _media.indexOf(context3) < 0 && _media.push(context3);
            (cond[p2] = mq.matches) && (active = 1);
            mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
          }
        }
      }
      active && func(context3, function(f2) {
        return context3.add(null, f2);
      });
      return this;
    };
    _proto6.revert = function revert(config3) {
      this.kill(config3 || {});
    };
    _proto6.kill = function kill(revert) {
      this.contexts.forEach(function(c2) {
        return c2.kill(revert, true);
      });
    };
    return MatchMedia2;
  }();
  var _gsap = {
    registerPlugin: function registerPlugin() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      args.forEach(function(config3) {
        return _createPlugin(config3);
      });
    },
    timeline: function timeline(vars) {
      return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
      return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
      _isString(target) && (target = toArray(target)[0]);
      var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
      unit === "native" && (unit = "");
      return !target ? target : !property ? function(property2, unit2, uncache2) {
        return format((_plugins[property2] && _plugins[property2].get || getter)(target, property2, unit2, uncache2));
      } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
      target = toArray(target);
      if (target.length > 1) {
        var setters = target.map(function(t2) {
          return gsap.quickSetter(t2, property, unit);
        }), l2 = setters.length;
        return function(value) {
          var i3 = l2;
          while (i3--) {
            setters[i3](value);
          }
        };
      }
      target = target[0] || {};
      var Plugin = _plugins[property], cache = _getCache(target), p2 = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
        var p3 = new Plugin();
        _quickTween._pt = 0;
        p3.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
        p3.render(1, p3);
        _quickTween._pt && _renderPropTweens(1, _quickTween);
      } : cache.set(target, p2);
      return Plugin ? setter : function(value) {
        return setter(target, p2, unit ? value + unit : value, cache, 1);
      };
    },
    quickTo: function quickTo(target, property, vars) {
      var _merge22;
      var tween = gsap.to(target, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
        return tween.resetTo(property, value, start, startIsRelative);
      };
      func.tween = tween;
      return func;
    },
    isTweening: function isTweening(targets) {
      return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
      value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
      return _mergeDeep(_defaults, value || {});
    },
    config: function config2(value) {
      return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
      var name2 = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults3 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
      (plugins || "").split(",").forEach(function(pluginName) {
        return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name2 + " effect requires " + pluginName + " plugin.");
      });
      _effects[name2] = function(targets, vars, tl) {
        return effect(toArray(targets), _setDefaults(vars || {}, defaults3), tl);
      };
      if (extendTimeline) {
        Timeline.prototype[name2] = function(targets, vars, position) {
          return this.add(_effects[name2](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
      }
    },
    registerEase: function registerEase(name2, ease) {
      _easeMap[name2] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
      return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
      return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
      if (vars === void 0) {
        vars = {};
      }
      var tl = new Timeline(vars), child, next;
      tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
      _globalTimeline.remove(tl);
      tl._dp = 0;
      tl._time = tl._tTime = _globalTimeline._time;
      child = _globalTimeline._first;
      while (child) {
        next = child._next;
        if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
          _addToTimeline(tl, child, child._start - child._delay);
        }
        child = next;
      }
      _addToTimeline(_globalTimeline, tl, 0);
      return tl;
    },
    context: function context(func, scope) {
      return func ? new Context(func, scope) : _context;
    },
    matchMedia: function matchMedia(scope) {
      return new MatchMedia(scope);
    },
    matchMediaRefresh: function matchMediaRefresh() {
      return _media.forEach(function(c2) {
        var cond = c2.conditions, found, p2;
        for (p2 in cond) {
          if (cond[p2]) {
            cond[p2] = false;
            found = 1;
          }
        }
        found && c2.revert();
      }) || _onMediaChange();
    },
    addEventListener: function addEventListener(type, callback) {
      var a = _listeners[type] || (_listeners[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    },
    removeEventListener: function removeEventListener(type, callback) {
      var a = _listeners[type], i3 = a && a.indexOf(callback);
      i3 >= 0 && a.splice(i3, 1);
    },
    utils: {
      wrap,
      wrapYoyo,
      distribute,
      random,
      snap,
      normalize,
      getUnit,
      clamp,
      splitColor,
      toArray,
      selector,
      mapRange,
      pipe,
      unitize,
      interpolate,
      shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
      PropTween,
      globals: _addGlobal,
      Tween,
      Timeline,
      Animation,
      getCache: _getCache,
      _removeLinkedListItem,
      reverting: function reverting() {
        return _reverting;
      },
      context: function context2(toAdd) {
        if (toAdd && _context) {
          _context.data.push(toAdd);
          toAdd._ctx = _context;
        }
        return _context;
      },
      suppressOverwrites: function suppressOverwrites(value) {
        return _suppressOverwrites = value;
      }
    }
  };
  _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name2) {
    return _gsap[name2] = Tween[name2];
  });
  _ticker.add(Timeline.updateRoot);
  _quickTween = _gsap.to({}, {
    duration: 0
  });
  var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
      pt = pt._next;
    }
    return pt;
  };
  var _addModifiers = function _addModifiers2(tween, modifiers) {
    var targets = tween._targets, p2, i3, pt;
    for (p2 in modifiers) {
      i3 = targets.length;
      while (i3--) {
        pt = tween._ptLookup[i3][p2];
        if (pt && (pt = pt.d)) {
          if (pt._pt) {
            pt = _getPluginPropTween(pt, p2);
          }
          pt && pt.modifier && pt.modifier(modifiers[p2], tween, targets[i3], p2);
        }
      }
    }
  };
  var _buildModifierPlugin = function _buildModifierPlugin2(name2, modifier) {
    return {
      name: name2,
      rawVars: 1,
      //don't pre-process function-based values or "random()" strings.
      init: function init4(target, vars, tween) {
        tween._onInit = function(tween2) {
          var temp, p2;
          if (_isString(vars)) {
            temp = {};
            _forEachName(vars, function(name3) {
              return temp[name3] = 1;
            });
            vars = temp;
          }
          if (modifier) {
            temp = {};
            for (p2 in vars) {
              temp[p2] = modifier(vars[p2]);
            }
            vars = temp;
          }
          _addModifiers(tween2, vars);
        };
      }
    };
  };
  var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
      var p2, pt, v;
      this.tween = tween;
      for (p2 in vars) {
        v = target.getAttribute(p2) || "";
        pt = this.add(target, "setAttribute", (v || 0) + "", vars[p2], index, targets, 0, 0, p2);
        pt.op = p2;
        pt.b = v;
        this._props.push(p2);
      }
    },
    render: function render(ratio, data) {
      var pt = data._pt;
      while (pt) {
        _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
        pt = pt._next;
      }
    }
  }, {
    name: "endArray",
    init: function init2(target, value) {
      var i3 = value.length;
      while (i3--) {
        this.add(target, i3, target[i3] || 0, value[i3], 0, 0, 0, 0, 0, 1);
      }
    }
  }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
  Tween.version = Timeline.version = gsap.version = "3.12.5";
  _coreReady = 1;
  _windowExists() && _wake();
  var Power0 = _easeMap.Power0;
  var Power1 = _easeMap.Power1;
  var Power2 = _easeMap.Power2;
  var Power3 = _easeMap.Power3;
  var Power4 = _easeMap.Power4;
  var Linear = _easeMap.Linear;
  var Quad = _easeMap.Quad;
  var Cubic = _easeMap.Cubic;
  var Quart = _easeMap.Quart;
  var Quint = _easeMap.Quint;
  var Strong = _easeMap.Strong;
  var Elastic = _easeMap.Elastic;
  var Back = _easeMap.Back;
  var SteppedEase = _easeMap.SteppedEase;
  var Bounce = _easeMap.Bounce;
  var Sine = _easeMap.Sine;
  var Expo = _easeMap.Expo;
  var Circ = _easeMap.Circ;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/CSSPlugin.js
  init_live_reload();
  var _win2;
  var _doc2;
  var _docElement;
  var _pluginInitted;
  var _tempDiv;
  var _tempDivStyler;
  var _recentSetterPlugin;
  var _reverting2;
  var _windowExists3 = function _windowExists4() {
    return typeof window !== "undefined";
  };
  var _transformProps = {};
  var _RAD2DEG = 180 / Math.PI;
  var _DEG2RAD = Math.PI / 180;
  var _atan2 = Math.atan2;
  var _bigNum2 = 1e8;
  var _capsExp = /([A-Z])/g;
  var _horizontalExp = /(left|right|width|margin|padding|x)/i;
  var _complexExp = /[\s,\(]\S/;
  var _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
  };
  var _renderCSSProp = function _renderCSSProp2(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
  };
  var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
  };
  var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
  };
  var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
  };
  var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
  };
  var _setterCSSStyle = function _setterCSSStyle2(target, property, value) {
    return target.style[property] = value;
  };
  var _setterCSSProp = function _setterCSSProp2(target, property, value) {
    return target.style.setProperty(property, value);
  };
  var _setterTransform = function _setterTransform2(target, property, value) {
    return target._gsap[property] = value;
  };
  var _setterScale = function _setterScale2(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
  };
  var _setterScaleWithRender = function _setterScaleWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
  };
  var _setterTransformWithRender = function _setterTransformWithRender2(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
  };
  var _transformProp = "transform";
  var _transformOriginProp = _transformProp + "Origin";
  var _saveStyle = function _saveStyle2(property, isNotCSS) {
    var _this = this;
    var target = this.target, style = target.style, cache = target._gsap;
    if (property in _transformProps && style) {
      this.tfm = this.tfm || {};
      if (property !== "transform") {
        property = _propertyAliases[property] || property;
        ~property.indexOf(",") ? property.split(",").forEach(function(a) {
          return _this.tfm[a] = _get(target, a);
        }) : this.tfm[property] = cache.x ? cache[property] : _get(target, property);
        property === _transformOriginProp && (this.tfm.zOrigin = cache.zOrigin);
      } else {
        return _propertyAliases.transform.split(",").forEach(function(p2) {
          return _saveStyle2.call(_this, p2, isNotCSS);
        });
      }
      if (this.props.indexOf(_transformProp) >= 0) {
        return;
      }
      if (cache.svg) {
        this.svgo = target.getAttribute("data-svg-origin");
        this.props.push(_transformOriginProp, isNotCSS, "");
      }
      property = _transformProp;
    }
    (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
  };
  var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
    if (style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _revertStyle = function _revertStyle2() {
    var props = this.props, target = this.target, style = target.style, cache = target._gsap, i3, p2;
    for (i3 = 0; i3 < props.length; i3 += 3) {
      props[i3 + 1] ? target[props[i3]] = props[i3 + 2] : props[i3 + 2] ? style[props[i3]] = props[i3 + 2] : style.removeProperty(props[i3].substr(0, 2) === "--" ? props[i3] : props[i3].replace(_capsExp, "-$1").toLowerCase());
    }
    if (this.tfm) {
      for (p2 in this.tfm) {
        cache[p2] = this.tfm[p2];
      }
      if (cache.svg) {
        cache.renderTransform();
        target.setAttribute("data-svg-origin", this.svgo || "");
      }
      i3 = _reverting2();
      if ((!i3 || !i3.isStart) && !style[_transformProp]) {
        _removeIndependentTransforms(style);
        if (cache.zOrigin && style[_transformOriginProp]) {
          style[_transformOriginProp] += " " + cache.zOrigin + "px";
          cache.zOrigin = 0;
          cache.renderTransform();
        }
        cache.uncache = 1;
      }
    }
  };
  var _getStyleSaver = function _getStyleSaver2(target, properties) {
    var saver = {
      target,
      props: [],
      revert: _revertStyle,
      save: _saveStyle
    };
    target._gsap || gsap.core.getCache(target);
    properties && properties.split(",").forEach(function(p2) {
      return saver.save(p2);
    });
    return saver;
  };
  var _supports3D;
  var _createElement = function _createElement2(type, ns) {
    var e2 = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
    return e2 && e2.style ? e2 : _doc2.createElement(type);
  };
  var _getComputedProperty = function _getComputedProperty2(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target, _checkPropPrefix(property) || property, 1) || "";
  };
  var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
  var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
    var e2 = element || _tempDiv, s2 = e2.style, i3 = 5;
    if (property in s2 && !preferPrefix) {
      return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i3-- && !(_prefixes[i3] + property in s2)) {
    }
    return i3 < 0 ? null : (i3 === 3 ? "ms" : i3 >= 0 ? _prefixes[i3] : "") + property;
  };
  var _initCore = function _initCore2() {
    if (_windowExists3() && window.document) {
      _win2 = window;
      _doc2 = _win2.document;
      _docElement = _doc2.documentElement;
      _tempDiv = _createElement("div") || {
        style: {}
      };
      _tempDivStyler = _createElement("div");
      _transformProp = _checkPropPrefix(_transformProp);
      _transformOriginProp = _transformProp + "Origin";
      _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
      _supports3D = !!_checkPropPrefix("perspective");
      _reverting2 = gsap.core.reverting;
      _pluginInitted = 1;
    }
  };
  var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
      try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox;
        this.getBBox = _getBBoxHack2;
      } catch (e2) {
      }
    } else if (this._gsapBBox) {
      bbox = this._gsapBBox();
    }
    if (oldParent) {
      if (oldSibling) {
        oldParent.insertBefore(this, oldSibling);
      } else {
        oldParent.appendChild(this);
      }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
  };
  var _getAttributeFallbacks = function _getAttributeFallbacks2(target, attributesArray) {
    var i3 = attributesArray.length;
    while (i3--) {
      if (target.hasAttribute(attributesArray[i3])) {
        return target.getAttribute(attributesArray[i3]);
      }
    }
  };
  var _getBBox = function _getBBox2(target) {
    var bounds;
    try {
      bounds = target.getBBox();
    } catch (error) {
      bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true));
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
      x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
      y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
      width: 0,
      height: 0
    } : bounds;
  };
  var _isSVG = function _isSVG2(e2) {
    return !!(e2.getCTM && (!e2.parentNode || e2.ownerSVGElement) && _getBBox(e2));
  };
  var _removeProperty = function _removeProperty2(target, property) {
    if (property) {
      var style = target.style, first2Chars;
      if (property in _transformProps && property !== _transformOriginProp) {
        property = _transformProp;
      }
      if (style.removeProperty) {
        first2Chars = property.substr(0, 2);
        if (first2Chars === "ms" || property.substr(0, 6) === "webkit") {
          property = "-" + property;
        }
        style.removeProperty(first2Chars === "--" ? property : property.replace(_capsExp, "-$1").toLowerCase());
      } else {
        style.removeAttribute(property);
      }
    }
  };
  var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
  };
  var _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
  };
  var _nonStandardLayouts = {
    grid: 1,
    flex: 1
  };
  var _convertToUnit = function _convertToUnit2(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
      return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
      px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
      return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
      parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc2 || !parent.appendChild) {
      parent = _doc2.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
      return _round(curValue / cache.width * amount);
    } else {
      if (toPercent && (property === "height" || property === "width")) {
        var v = target.style[property];
        target.style[property] = amount + unit;
        px = target[measureProperty];
        v ? target.style[property] = v : _removeProperty(target, property);
      } else {
        (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static");
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
      }
      if (horizontal && toPercent) {
        cache = _getCache(parent);
        cache.time = _ticker.time;
        cache.width = parent[measureProperty];
      }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
  };
  var _get = function _get2(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
      property = _propertyAliases[property];
      if (~property.indexOf(",")) {
        property = property.split(",")[0];
      }
    }
    if (_transformProps[property] && property !== "transform") {
      value = _parseTransform(target, uncache);
      value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
      value = target.style[property];
      if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
        value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0);
      }
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
  };
  var _tweenComplexCSSString = function _tweenComplexCSSString2(target, prop, start, end) {
    if (!start || start === "none") {
      var p2 = _checkPropPrefix(prop, target, 1), s2 = p2 && _getComputedProperty(target, p2, 1);
      if (s2 && s2 !== start) {
        prop = p2;
        start = s2;
      } else if (prop === "borderColor") {
        start = _getComputedProperty(target, "borderTopColor");
      }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += "";
    end += "";
    if (end === "auto") {
      startValue = target.style[prop];
      target.style[prop] = end;
      end = _getComputedProperty(target, prop) || end;
      startValue ? target.style[prop] = startValue : _removeProperty(target, prop);
    }
    a = [start, end];
    _colorStringFilter(a);
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
      while (result = _numWithUnitExp.exec(end)) {
        endValue = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
          color = (color + 1) % 5;
        } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
          color = 1;
        }
        if (endValue !== (startValue = startValues[matchIndex++] || "")) {
          startNum = parseFloat(startValue) || 0;
          startUnit = startValue.substr((startNum + "").length);
          endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
          endNum = parseFloat(endValue);
          endUnit = endValue.substr((endNum + "").length);
          index = _numWithUnitExp.lastIndex - endUnit.length;
          if (!endUnit) {
            endUnit = endUnit || _config.units[prop] || startUnit;
            if (index === end.length) {
              end += endUnit;
              pt.e += endUnit;
            }
          }
          if (startUnit !== endUnit) {
            startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
          }
          pt._pt = {
            _next: pt._pt,
            p: chunk || matchIndex === 1 ? chunk : ",",
            //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
            s: startNum,
            c: endNum - startNum,
            m: color && color < 4 || prop === "zIndex" ? Math.round : 0
          };
        }
      }
      pt.c = index < end.length ? end.substring(index, end.length) : "";
    } else {
      pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    _relExp.test(end) && (pt.e = 0);
    this._pt = pt;
    return pt;
  };
  var _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
  };
  var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
    var split = value.split(" "), x2 = split[0], y = split[1] || "50%";
    if (x2 === "top" || x2 === "bottom" || y === "left" || y === "right") {
      value = x2;
      x2 = y;
      y = value;
    }
    split[0] = _keywordToPercent[x2] || x2;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
  };
  var _renderClearProps = function _renderClearProps2(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
      var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i3;
      if (props === "all" || props === true) {
        style.cssText = "";
        clearTransforms = 1;
      } else {
        props = props.split(",");
        i3 = props.length;
        while (--i3 > -1) {
          prop = props[i3];
          if (_transformProps[prop]) {
            clearTransforms = 1;
            prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
          }
          _removeProperty(target, prop);
        }
      }
      if (clearTransforms) {
        _removeProperty(target, _transformProp);
        if (cache) {
          cache.svg && target.removeAttribute("transform");
          _parseTransform(target, 1);
          cache.uncache = 1;
          _removeIndependentTransforms(style);
        }
      }
    }
  };
  var _specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
      if (tween.data !== "isFromStart") {
        var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
        pt.u = endValue;
        pt.pr = -10;
        pt.tween = tween;
        plugin._props.push(property);
        return 1;
      }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
    	let _renderClassName = (ratio, data) => {
    			data.css.render(ratio, data.css);
    			if (!ratio || ratio === 1) {
    				let inline = data.rmv,
    					target = data.t,
    					p;
    				target.setAttribute("class", ratio ? data.e : data.b);
    				for (p in inline) {
    					_removeProperty(target, p);
    				}
    			}
    		},
    		_getAllStyles = (target) => {
    			let styles = {},
    				computed = getComputedStyle(target),
    				p;
    			for (p in computed) {
    				if (isNaN(p) && p !== "cssText" && p !== "length") {
    					styles[p] = computed[p];
    				}
    			}
    			_setDefaults(styles, _parseTransform(target, 1));
    			return styles;
    		},
    		startClassList = target.getAttribute("class"),
    		style = target.style,
    		cssText = style.cssText,
    		cache = target._gsap,
    		classPT = cache.classPT,
    		inlineToRemoveAtEnd = {},
    		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
    		changingVars = {},
    		startVars = _getAllStyles(target),
    		transformRelated = /(transform|perspective)/i,
    		endVars, p;
    	if (classPT) {
    		classPT.r(1, classPT.d);
    		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
    	}
    	target.setAttribute("class", data.e);
    	endVars = _getAllStyles(target, true);
    	target.setAttribute("class", startClassList);
    	for (p in endVars) {
    		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
    			changingVars[p] = endVars[p];
    			if (!style[p] && style[p] !== "0") {
    				inlineToRemoveAtEnd[p] = 1;
    			}
    		}
    	}
    	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
    	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
    		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
    	}
    	_parseTransform(target, true); //to clear the caching of transforms
    	data.css = new gsap.plugins.css();
    	data.css.init(target, changingVars, tween);
    	plugin._props.push(...data.css._props);
    	return 1;
    }
    */
  };
  var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
  var _rotationalProperties = {};
  var _isNullTransform = function _isNullTransform2(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
  };
  var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
  };
  var _getMatrix = function _getMatrix2(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
      temp = target.transform.baseVal.consolidate().matrix;
      matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
      return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
      temp = style.display;
      style.display = "block";
      parent = target.parentNode;
      if (!parent || !target.offsetParent) {
        addedToDOM = 1;
        nextSibling = target.nextElementSibling;
        _docElement.appendChild(target);
      }
      matrix = _getComputedTransformMatrixAsArray(target);
      temp ? style.display = temp : _removeProperty(target, "display");
      if (addedToDOM) {
        nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
      }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
  };
  var _applySVGOrigin = function _applySVGOrigin2(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c2 = matrix[2], d2 = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x2, y;
    if (!originIsAbsolute) {
      bounds = _getBBox(target);
      xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
      yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d2 - b * c2)) {
      x2 = xOrigin * (d2 / determinant) + yOrigin * (-c2 / determinant) + (c2 * ty - d2 * tx) / determinant;
      y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
      xOrigin = x2;
      yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
      tx = xOrigin - xOriginOld;
      ty = yOrigin - yOriginOld;
      cache.xOffset = xOffsetOld + (tx * a + ty * c2) - tx;
      cache.yOffset = yOffsetOld + (tx * b + ty * d2) - ty;
    } else {
      cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px";
    if (pluginToAddPropTweensTo) {
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
      _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
  };
  var _parseTransform = function _parseTransform2(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
      return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target), origin = _getComputedProperty(target, _transformOriginProp) || "0", x2, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c2, d2, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x2 = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    if (cs.translate) {
      if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
        style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
      }
      style.scale = style.rotate = style.translate = "none";
    }
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
      if (cache.uncache) {
        t2 = target.getBBox();
        origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
        t1 = "";
      } else {
        t1 = !uncache && target.getAttribute("data-svg-origin");
      }
      _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
      a = matrix[0];
      b = matrix[1];
      c2 = matrix[2];
      d2 = matrix[3];
      x2 = a12 = matrix[4];
      y = a22 = matrix[5];
      if (matrix.length === 6) {
        scaleX = Math.sqrt(a * a + b * b);
        scaleY = Math.sqrt(d2 * d2 + c2 * c2);
        rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
        skewX = c2 || d2 ? _atan2(c2, d2) * _RAD2DEG + rotation : 0;
        skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
        if (cache.svg) {
          x2 -= xOrigin - (xOrigin * a + yOrigin * c2);
          y -= yOrigin - (xOrigin * b + yOrigin * d2);
        }
      } else {
        a32 = matrix[6];
        a42 = matrix[7];
        a13 = matrix[8];
        a23 = matrix[9];
        a33 = matrix[10];
        a43 = matrix[11];
        x2 = matrix[12];
        y = matrix[13];
        z = matrix[14];
        angle = _atan2(a32, a33);
        rotationX = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a12 * cos + a13 * sin;
          t2 = a22 * cos + a23 * sin;
          t3 = a32 * cos + a33 * sin;
          a13 = a12 * -sin + a13 * cos;
          a23 = a22 * -sin + a23 * cos;
          a33 = a32 * -sin + a33 * cos;
          a43 = a42 * -sin + a43 * cos;
          a12 = t1;
          a22 = t2;
          a32 = t3;
        }
        angle = _atan2(-c2, a33);
        rotationY = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(-angle);
          sin = Math.sin(-angle);
          t1 = a * cos - a13 * sin;
          t2 = b * cos - a23 * sin;
          t3 = c2 * cos - a33 * sin;
          a43 = d2 * sin + a43 * cos;
          a = t1;
          b = t2;
          c2 = t3;
        }
        angle = _atan2(b, a);
        rotation = angle * _RAD2DEG;
        if (angle) {
          cos = Math.cos(angle);
          sin = Math.sin(angle);
          t1 = a * cos + b * sin;
          t2 = a12 * cos + a22 * sin;
          b = b * cos - a * sin;
          a22 = a22 * cos - a12 * sin;
          a = t1;
          a12 = t2;
        }
        if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
          rotationX = rotation = 0;
          rotationY = 180 - rotationY;
        }
        scaleX = _round(Math.sqrt(a * a + b * b + c2 * c2));
        scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
        angle = _atan2(a12, a22);
        skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
        perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
      }
      if (cache.svg) {
        t1 = target.getAttribute("transform");
        cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
        t1 && target.setAttribute("transform", t1);
      }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
      if (invertedScaleX) {
        scaleX *= -1;
        skewX += rotation <= 0 ? 180 : -180;
        rotation += rotation <= 0 ? 180 : -180;
      } else {
        scaleY *= -1;
        skewX += skewX <= 0 ? 180 : -180;
      }
    }
    uncache = uncache || cache.uncache;
    cache.x = x2 - ((cache.xPercent = x2 && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x2) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || !uncache && cache.zOrigin || 0) {
      style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
  };
  var _firstTwoOnly = function _firstTwoOnly2(value) {
    return (value = value.split(" "))[0] + " " + value[1];
  };
  var _addPxTranslate = function _addPxTranslate2(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
  };
  var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
  };
  var _zeroDeg = "0deg";
  var _zeroPx = "0px";
  var _endParenthesis = ") ";
  var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x2 = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
      var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
      angle = parseFloat(rotationX) * _DEG2RAD;
      cos = Math.cos(angle);
      x2 = _addPxTranslate(target, x2, a13 * cos * -zOrigin);
      y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
      z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
      transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
      transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x2 !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
      transforms += z !== _zeroPx || use3D ? "translate3d(" + x2 + ", " + y + ", " + z + ") " : "translate(" + x2 + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
      transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
      transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
      transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
      transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
      transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
  };
  var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x2 = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x2), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
      skewY = parseFloat(skewY);
      skewX += skewY;
      rotation += skewY;
    }
    if (rotation || skewX) {
      rotation *= _DEG2RAD;
      skewX *= _DEG2RAD;
      a11 = Math.cos(rotation) * scaleX;
      a21 = Math.sin(rotation) * scaleX;
      a12 = Math.sin(rotation - skewX) * -scaleY;
      a22 = Math.cos(rotation - skewX) * scaleY;
      if (skewX) {
        skewY *= _DEG2RAD;
        temp = Math.tan(skewX - skewY);
        temp = Math.sqrt(1 + temp * temp);
        a12 *= temp;
        a22 *= temp;
        if (skewY) {
          temp = Math.tan(skewY);
          temp = Math.sqrt(1 + temp * temp);
          a11 *= temp;
          a21 *= temp;
        }
      }
      a11 = _round(a11);
      a21 = _round(a21);
      a12 = _round(a12);
      a22 = _round(a22);
    } else {
      a11 = scaleX;
      a22 = scaleY;
      a21 = a12 = 0;
    }
    if (tx && !~(x2 + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
      tx = _convertToUnit(target, "x", x2, "px");
      ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
      tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
      ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
      temp = target.getBBox();
      tx = _round(tx + xPercent / 100 * temp.width);
      ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp);
  };
  var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
      direction = endValue.split("_")[1];
      if (direction === "short") {
        change %= cap;
        if (change !== change % (cap / 2)) {
          change += change < 0 ? cap : -cap;
        }
      }
      if (direction === "cw" && change < 0) {
        change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
      } else if (direction === "ccw" && change > 0) {
        change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
      }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
  };
  var _assign = function _assign2(target, source) {
    for (var p2 in source) {
      target[p2] = source[p2];
    }
    return target;
  };
  var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target) {
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p2, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
      startValue = target.getAttribute("transform");
      target.setAttribute("transform", "");
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      _removeProperty(target, _transformProp);
      target.setAttribute("transform", startValue);
    } else {
      startValue = getComputedStyle(target)[_transformProp];
      style[_transformProp] = transforms;
      endCache = _parseTransform(target, 1);
      style[_transformProp] = startValue;
    }
    for (p2 in _transformProps) {
      startValue = startCache[p2];
      endValue = endCache[p2];
      if (startValue !== endValue && exclude.indexOf(p2) < 0) {
        startUnit = getUnit(startValue);
        endUnit = getUnit(endValue);
        startNum = startUnit !== endUnit ? _convertToUnit(target, p2, startValue, endUnit) : parseFloat(startValue);
        endNum = parseFloat(endValue);
        plugin._pt = new PropTween(plugin._pt, endCache, p2, startNum, endNum - startNum, _renderCSSProp);
        plugin._pt.u = endUnit || 0;
        plugin._props.push(p2);
      }
    }
    _assign(endCache, startCache);
  };
  _forEachName("padding,margin,Width,Radius", function(name2, index) {
    var t2 = "Top", r = "Right", b = "Bottom", l2 = "Left", props = (index < 3 ? [t2, r, b, l2] : [t2 + l2, t2 + r, b + r, b + l2]).map(function(side) {
      return index < 2 ? name2 + side : "border" + side + name2;
    });
    _specialProps[index > 1 ? "border" + name2 : name2] = function(plugin, target, property, endValue, tween) {
      var a, vars;
      if (arguments.length < 4) {
        a = props.map(function(prop) {
          return _get(plugin, prop, property);
        });
        vars = a.join(" ");
        return vars.split(a[0]).length === 5 ? a[0] : vars;
      }
      a = (endValue + "").split(" ");
      vars = {};
      props.forEach(function(prop, i3) {
        return vars[prop] = a[i3] = a[i3] || a[(i3 - 1) / 2 | 0];
      });
      plugin.init(target, vars, tween);
    };
  });
  var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
      return target.style && target.nodeType;
    },
    init: function init3(target, vars, tween, index, targets) {
      var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p2, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
      _pluginInitted || _initCore();
      this.styles = this.styles || _getStyleSaver(target);
      inlineProps = this.styles.props;
      this.tween = tween;
      for (p2 in vars) {
        if (p2 === "autoRound") {
          continue;
        }
        endValue = vars[p2];
        if (_plugins[p2] && _checkPlugin(p2, vars, tween, index, target, targets)) {
          continue;
        }
        type = typeof endValue;
        specialProp = _specialProps[p2];
        if (type === "function") {
          endValue = endValue.call(tween, index, target, targets);
          type = typeof endValue;
        }
        if (type === "string" && ~endValue.indexOf("random(")) {
          endValue = _replaceRandom(endValue);
        }
        if (specialProp) {
          specialProp(this, target, p2, endValue, tween) && (hasPriority = 1);
        } else if (p2.substr(0, 2) === "--") {
          startValue = (getComputedStyle(target).getPropertyValue(p2) + "").trim();
          endValue += "";
          _colorExp.lastIndex = 0;
          if (!_colorExp.test(startValue)) {
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
          }
          endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p2, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
          this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p2);
          props.push(p2);
          inlineProps.push(p2, 0, style[p2]);
        } else if (type !== "undefined") {
          if (startAt && p2 in startAt) {
            startValue = typeof startAt[p2] === "function" ? startAt[p2].call(tween, index, target, targets) : startAt[p2];
            _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
            getUnit(startValue + "") || startValue === "auto" || (startValue += _config.units[p2] || getUnit(_get(target, p2)) || "");
            (startValue + "").charAt(1) === "=" && (startValue = _get(target, p2));
          } else {
            startValue = _get(target, p2);
          }
          startNum = parseFloat(startValue);
          relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
          relative && (endValue = endValue.substr(2));
          endNum = parseFloat(endValue);
          if (p2 in _propertyAliases) {
            if (p2 === "autoAlpha") {
              if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                startNum = 0;
              }
              inlineProps.push("visibility", 0, style.visibility);
              _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
            }
            if (p2 !== "scale" && p2 !== "transform") {
              p2 = _propertyAliases[p2];
              ~p2.indexOf(",") && (p2 = p2.split(",")[0]);
            }
          }
          isTransformRelated = p2 in _transformProps;
          if (isTransformRelated) {
            this.styles.save(p2);
            if (!transformPropTween) {
              cache = target._gsap;
              cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform);
              smooth = vars.smoothOrigin !== false && cache.smooth;
              transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
              transformPropTween.dep = 1;
            }
            if (p2 === "scale") {
              this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, (relative ? _parseRelative(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0, _renderCSSProp);
              this._pt.u = 0;
              props.push("scaleY", p2);
              p2 += "X";
            } else if (p2 === "transformOrigin") {
              inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
              endValue = _convertKeywordsToPercentages(endValue);
              if (cache.svg) {
                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
              } else {
                endUnit = parseFloat(endValue.split(" ")[2]) || 0;
                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                _addNonTweeningPT(this, style, p2, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
              }
              continue;
            } else if (p2 === "svgOrigin") {
              _applySVGOrigin(target, endValue, 1, smooth, 0, this);
              continue;
            } else if (p2 in _rotationalProperties) {
              _addRotationalPropTween(this, cache, p2, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
              continue;
            } else if (p2 === "smoothOrigin") {
              _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
              continue;
            } else if (p2 === "force3D") {
              cache[p2] = endValue;
              continue;
            } else if (p2 === "transform") {
              _addRawTransformPTs(this, endValue, target);
              continue;
            }
          } else if (!(p2 in style)) {
            p2 = _checkPropPrefix(p2) || p2;
          }
          if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p2 in style) {
            startUnit = (startValue + "").substr((startNum + "").length);
            endNum || (endNum = 0);
            endUnit = getUnit(endValue) || (p2 in _config.units ? _config.units[p2] : startUnit);
            startUnit !== endUnit && (startNum = _convertToUnit(target, p2, startValue, endUnit));
            this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p2, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p2 === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
            this._pt.u = endUnit || 0;
            if (startUnit !== endUnit && endUnit !== "%") {
              this._pt.b = startValue;
              this._pt.r = _renderCSSPropWithBeginning;
            }
          } else if (!(p2 in style)) {
            if (p2 in target) {
              this.add(target, p2, startValue || target[p2], relative ? relative + endValue : endValue, index, targets);
            } else if (p2 !== "parseTransform") {
              _missingPlugin(p2, endValue);
              continue;
            }
          } else {
            _tweenComplexCSSString.call(this, target, p2, startValue, relative ? relative + endValue : endValue);
          }
          isTransformRelated || (p2 in style ? inlineProps.push(p2, 0, style[p2]) : inlineProps.push(p2, 1, startValue || target[p2]));
          props.push(p2);
        }
      }
      hasPriority && _sortPropTweensByPriority(this);
    },
    render: function render2(ratio, data) {
      if (data.tween._time || !_reverting2()) {
        var pt = data._pt;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
      } else {
        data.styles.revert();
      }
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
      var p2 = _propertyAliases[property];
      p2 && p2.indexOf(",") < 0 && (property = p2);
      return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
      _removeProperty,
      _getMatrix
    }
  };
  gsap.utils.checkPrefix = _checkPropPrefix;
  gsap.core.getStyleSaver = _getStyleSaver;
  (function(positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name2) {
      _transformProps[name2] = 1;
    });
    _forEachName(rotation, function(name2) {
      _config.units[name2] = "deg";
      _rotationalProperties[name2] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function(name2) {
      var split = name2.split(":");
      _propertyAliases[split[1]] = all[split[0]];
    });
  })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
  _forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name2) {
    _config.units[name2] = "px";
  });
  gsap.registerPlugin(CSSPlugin);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/index.js
  var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
  var TweenMaxWithCSS = gsapWithCSS.core.Tween;

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Observer.js
  init_live_reload();
  function _defineProperties(target, props) {
    for (var i3 = 0; i3 < props.length; i3++) {
      var descriptor = props[i3];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var gsap2;
  var _coreInitted2;
  var _clamp3;
  var _win3;
  var _doc3;
  var _docEl;
  var _body;
  var _isTouch;
  var _pointerType;
  var ScrollTrigger;
  var _root;
  var _normalizer;
  var _eventTypes;
  var _context2;
  var _getGSAP = function _getGSAP2() {
    return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
  };
  var _startup = 1;
  var _observers = [];
  var _scrollers = [];
  var _proxies = [];
  var _getTime = Date.now;
  var _bridge = function _bridge2(name2, value) {
    return value;
  };
  var _integrate = function _integrate2() {
    var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
    scrollers.push.apply(scrollers, _scrollers);
    proxies.push.apply(proxies, _proxies);
    _scrollers = scrollers;
    _proxies = proxies;
    _bridge = function _bridge3(name2, value) {
      return data[name2](value);
    };
  };
  var _getProxyProp = function _getProxyProp2(element, property) {
    return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
  };
  var _isViewport = function _isViewport2(el) {
    return !!~_root.indexOf(el);
  };
  var _addListener = function _addListener2(element, type, func, passive, capture) {
    return element.addEventListener(type, func, {
      passive: passive !== false,
      capture: !!capture
    });
  };
  var _removeListener = function _removeListener2(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _scrollLeft = "scrollLeft";
  var _scrollTop = "scrollTop";
  var _onScroll = function _onScroll2() {
    return _normalizer && _normalizer.isPressed || _scrollers.cache++;
  };
  var _scrollCacheFunc = function _scrollCacheFunc2(f2, doNotCache) {
    var cachingFunc = function cachingFunc2(value) {
      if (value || value === 0) {
        _startup && (_win3.history.scrollRestoration = "manual");
        var isNormalizing = _normalizer && _normalizer.isPressed;
        value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
        f2(value);
        cachingFunc2.cacheID = _scrollers.cache;
        isNormalizing && _bridge("ss", value);
      } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
        cachingFunc2.cacheID = _scrollers.cache;
        cachingFunc2.v = f2();
      }
      return cachingFunc2.v + cachingFunc2.offset;
    };
    cachingFunc.offset = 0;
    return f2 && cachingFunc;
  };
  var _horizontal = {
    s: _scrollLeft,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
    })
  };
  var _vertical = {
    s: _scrollTop,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: _horizontal,
    sc: _scrollCacheFunc(function(value) {
      return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
    })
  };
  var _getTarget = function _getTarget2(t2, self2) {
    return (self2 && self2._ctx && self2._ctx.selector || gsap2.utils.toArray)(t2)[0] || (typeof t2 === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t2) : null);
  };
  var _getScrollFunc = function _getScrollFunc2(element, _ref) {
    var s2 = _ref.s, sc = _ref.sc;
    _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
    var i3 = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
    !~i3 && (i3 = _scrollers.push(element) - 1);
    _scrollers[i3 + offset] || _addListener(element, "scroll", _onScroll);
    var prev = _scrollers[i3 + offset], func = prev || (_scrollers[i3 + offset] = _scrollCacheFunc(_getProxyProp(element, s2), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
      return arguments.length ? element[s2] = value : element[s2];
    })));
    func.target = element;
    prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
    return func;
  };
  var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
    var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update2 = function update3(value2, force) {
      var t3 = _getTime();
      if (force || t3 - t1 > min) {
        v2 = v1;
        v1 = value2;
        t2 = t1;
        t1 = t3;
      } else if (useDelta) {
        v1 += value2;
      } else {
        v1 = v2 + (value2 - v2) / (t3 - t2) * (t1 - t2);
      }
    }, reset = function reset2() {
      v2 = v1 = useDelta ? 0 : v1;
      t2 = t1 = 0;
    }, getVelocity = function getVelocity2(latestValue) {
      var tOld = t2, vOld = v2, t3 = _getTime();
      (latestValue || latestValue === 0) && latestValue !== v1 && update2(latestValue);
      return t1 === t2 || t3 - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t3 : t1) - tOld) * 1e3;
    };
    return {
      update: update2,
      reset,
      getVelocity
    };
  };
  var _getEvent = function _getEvent2(e2, preventDefault) {
    preventDefault && !e2._gsapAllow && e2.preventDefault();
    return e2.changedTouches ? e2.changedTouches[0] : e2;
  };
  var _getAbsoluteMax = function _getAbsoluteMax2(a) {
    var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
    return Math.abs(max) >= Math.abs(min) ? max : min;
  };
  var _setScrollTrigger = function _setScrollTrigger2() {
    ScrollTrigger = gsap2.core.globals().ScrollTrigger;
    ScrollTrigger && ScrollTrigger.core && _integrate();
  };
  var _initCore3 = function _initCore4(core) {
    gsap2 = core || _getGSAP();
    if (!_coreInitted2 && gsap2 && typeof document !== "undefined" && document.body) {
      _win3 = window;
      _doc3 = document;
      _docEl = _doc3.documentElement;
      _body = _doc3.body;
      _root = [_win3, _doc3, _docEl, _body];
      _clamp3 = gsap2.utils.clamp;
      _context2 = gsap2.core.context || function() {
      };
      _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
      _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
      _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
      setTimeout(function() {
        return _startup = 0;
      }, 500);
      _setScrollTrigger();
      _coreInitted2 = 1;
    }
    return _coreInitted2;
  };
  _horizontal.op = _vertical;
  _scrollers.cache = 0;
  var Observer = /* @__PURE__ */ function() {
    function Observer3(vars) {
      this.init(vars);
    }
    var _proto = Observer3.prototype;
    _proto.init = function init4(vars) {
      _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
      ScrollTrigger || _setScrollTrigger();
      var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce2 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event2 = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick2 = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
      this.target = target = _getTarget(target) || _docEl;
      this.vars = vars;
      ignore && (ignore = gsap2.utils.toArray(ignore));
      tolerance = tolerance || 1e-9;
      dragMinimum = dragMinimum || 0;
      wheelSpeed = wheelSpeed || 1;
      scrollSpeed = scrollSpeed || 1;
      type = type || "wheel,touch,pointer";
      debounce2 = debounce2 !== false;
      lineHeight || (lineHeight = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
      var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
        return onClickTime = _getTime();
      }, _ignoreCheck = function _ignoreCheck2(e2, isPointerOrTouch) {
        return (self2.event = e2) && ignore && ~ignore.indexOf(e2.target) || isPointerOrTouch && limitToTouch && e2.pointerType !== "touch" || ignoreCheck && ignoreCheck(e2, isPointerOrTouch);
      }, onStopFunc = function onStopFunc2() {
        self2._vx.reset();
        self2._vy.reset();
        onStopDelayedCall.pause();
        onStop && onStop(self2);
      }, update2 = function update3() {
        var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
        onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
        if (changedX) {
          onRight && self2.deltaX > 0 && onRight(self2);
          onLeft && self2.deltaX < 0 && onLeft(self2);
          onChangeX && onChangeX(self2);
          onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
          prevDeltaX = self2.deltaX;
          deltaX[0] = deltaX[1] = deltaX[2] = 0;
        }
        if (changedY) {
          onDown && self2.deltaY > 0 && onDown(self2);
          onUp && self2.deltaY < 0 && onUp(self2);
          onChangeY && onChangeY(self2);
          onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
          prevDeltaY = self2.deltaY;
          deltaY[0] = deltaY[1] = deltaY[2] = 0;
        }
        if (moved || dragged) {
          onMove && onMove(self2);
          if (dragged) {
            onDrag(self2);
            dragged = false;
          }
          moved = false;
        }
        locked && !(locked = false) && onLockAxis && onLockAxis(self2);
        if (wheeled) {
          onWheel(self2);
          wheeled = false;
        }
        id = 0;
      }, onDelta = function onDelta2(x2, y, index) {
        deltaX[index] += x2;
        deltaY[index] += y;
        self2._vx.update(x2);
        self2._vy.update(y);
        debounce2 ? id || (id = requestAnimationFrame(update2)) : update2();
      }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x2, y) {
        if (lockAxis && !axis) {
          self2.axis = axis = Math.abs(x2) > Math.abs(y) ? "x" : "y";
          locked = true;
        }
        if (axis !== "y") {
          deltaX[2] += x2;
          self2._vx.update(x2, true);
        }
        if (axis !== "x") {
          deltaY[2] += y;
          self2._vy.update(y, true);
        }
        debounce2 ? id || (id = requestAnimationFrame(update2)) : update2();
      }, _onDrag = function _onDrag2(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault);
        var x2 = e2.clientX, y = e2.clientY, dx = x2 - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
        self2.x = x2;
        self2.y = y;
        if (isDragging || Math.abs(self2.startX - x2) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
          onDrag && (dragged = true);
          isDragging || (self2.isDragging = true);
          onTouchOrPointerDelta(dx, dy);
          isDragging || onDragStart && onDragStart(self2);
        }
      }, _onPress = self2.onPress = function(e2) {
        if (_ignoreCheck(e2, 1) || e2 && e2.button) {
          return;
        }
        self2.axis = axis = null;
        onStopDelayedCall.pause();
        self2.isPressed = true;
        e2 = _getEvent(e2);
        prevDeltaX = prevDeltaY = 0;
        self2.startX = self2.x = e2.clientX;
        self2.startY = self2.y = e2.clientY;
        self2._vx.reset();
        self2._vy.reset();
        _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
        self2.deltaX = self2.deltaY = 0;
        onPress && onPress(self2);
      }, _onRelease = self2.onRelease = function(e2) {
        if (_ignoreCheck(e2, 1)) {
          return;
        }
        _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        var isTrackingDrag = !isNaN(self2.y - self2.startY), wasDragging = self2.isDragging, isDragNotClick = wasDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e2);
        if (!isDragNotClick && isTrackingDrag) {
          self2._vx.reset();
          self2._vy.reset();
          if (preventDefault && allowClicks) {
            gsap2.delayedCall(0.08, function() {
              if (_getTime() - onClickTime > 300 && !e2.defaultPrevented) {
                if (e2.target.click) {
                  e2.target.click();
                } else if (ownerDoc.createEvent) {
                  var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                  syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                  e2.target.dispatchEvent(syntheticEvent);
                }
              }
            });
          }
        }
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
        onDragEnd && wasDragging && onDragEnd(self2);
        onRelease && onRelease(self2, isDragNotClick);
      }, _onGestureStart = function _onGestureStart2(e2) {
        return e2.touches && e2.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e2, self2.isDragging);
      }, _onGestureEnd = function _onGestureEnd2() {
        return (self2.isGesturing = false) || onGestureEnd(self2);
      }, onScroll2 = function onScroll3(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x2 = scrollFuncX(), y = scrollFuncY();
        onDelta((x2 - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
        scrollX = x2;
        scrollY = y;
        onStop && onStopDelayedCall.restart(true);
      }, _onWheel = function _onWheel2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        e2 = _getEvent(e2, preventDefault);
        onWheel && (wheeled = true);
        var multiplier = (e2.deltaMode === 1 ? lineHeight : e2.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
        onDelta(e2.deltaX * multiplier, e2.deltaY * multiplier, 0);
        onStop && !isNormalizer && onStopDelayedCall.restart(true);
      }, _onMove = function _onMove2(e2) {
        if (_ignoreCheck(e2)) {
          return;
        }
        var x2 = e2.clientX, y = e2.clientY, dx = x2 - self2.x, dy = y - self2.y;
        self2.x = x2;
        self2.y = y;
        moved = true;
        onStop && onStopDelayedCall.restart(true);
        (dx || dy) && onTouchOrPointerDelta(dx, dy);
      }, _onHover = function _onHover2(e2) {
        self2.event = e2;
        onHover(self2);
      }, _onHoverEnd = function _onHoverEnd2(e2) {
        self2.event = e2;
        onHoverEnd(self2);
      }, _onClick = function _onClick2(e2) {
        return _ignoreCheck(e2) || _getEvent(e2, preventDefault) && onClick2(self2);
      };
      onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
      self2.deltaX = self2.deltaY = 0;
      self2._vx = _getVelocityProp(0, 50, true);
      self2._vy = _getVelocityProp(0, 50, true);
      self2.scrollX = scrollFuncX;
      self2.scrollY = scrollFuncY;
      self2.isDragging = self2.isGesturing = self2.isPressed = false;
      _context2(this);
      self2.enable = function(e2) {
        if (!self2.isEnabled) {
          _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll2, passive, capture);
          type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
          if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
            _addListener(target, _eventTypes[0], _onPress, passive, capture);
            _addListener(ownerDoc, _eventTypes[2], _onRelease);
            _addListener(ownerDoc, _eventTypes[3], _onRelease);
            allowClicks && _addListener(target, "click", clickCapture, true, true);
            onClick2 && _addListener(target, "click", _onClick);
            onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
            onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
            onHover && _addListener(target, _pointerType + "enter", _onHover);
            onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
            onMove && _addListener(target, _pointerType + "move", _onMove);
          }
          self2.isEnabled = true;
          e2 && e2.type && _onPress(e2);
          onEnable && onEnable(self2);
        }
        return self2;
      };
      self2.disable = function() {
        if (self2.isEnabled) {
          _observers.filter(function(o) {
            return o !== self2 && _isViewport(o.target);
          }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
          if (self2.isPressed) {
            self2._vx.reset();
            self2._vy.reset();
            _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
          }
          _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll2, capture);
          _removeListener(target, "wheel", _onWheel, capture);
          _removeListener(target, _eventTypes[0], _onPress, capture);
          _removeListener(ownerDoc, _eventTypes[2], _onRelease);
          _removeListener(ownerDoc, _eventTypes[3], _onRelease);
          _removeListener(target, "click", clickCapture, true);
          _removeListener(target, "click", _onClick);
          _removeListener(ownerDoc, "gesturestart", _onGestureStart);
          _removeListener(ownerDoc, "gestureend", _onGestureEnd);
          _removeListener(target, _pointerType + "enter", _onHover);
          _removeListener(target, _pointerType + "leave", _onHoverEnd);
          _removeListener(target, _pointerType + "move", _onMove);
          self2.isEnabled = self2.isPressed = self2.isDragging = false;
          onDisable && onDisable(self2);
        }
      };
      self2.kill = self2.revert = function() {
        self2.disable();
        var i3 = _observers.indexOf(self2);
        i3 >= 0 && _observers.splice(i3, 1);
        _normalizer === self2 && (_normalizer = 0);
      };
      _observers.push(self2);
      isNormalizer && _isViewport(target) && (_normalizer = self2);
      self2.enable(event2);
    };
    _createClass(Observer3, [{
      key: "velocityX",
      get: function get() {
        return this._vx.getVelocity();
      }
    }, {
      key: "velocityY",
      get: function get() {
        return this._vy.getVelocity();
      }
    }]);
    return Observer3;
  }();
  Observer.version = "3.12.5";
  Observer.create = function(vars) {
    return new Observer(vars);
  };
  Observer.register = _initCore3;
  Observer.getAll = function() {
    return _observers.slice();
  };
  Observer.getById = function(id) {
    return _observers.filter(function(o) {
      return o.vars.id === id;
    })[0];
  };
  _getGSAP() && gsap2.registerPlugin(Observer);

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/ScrollTrigger.js
  var gsap3;
  var _coreInitted3;
  var _win4;
  var _doc4;
  var _docEl2;
  var _body2;
  var _root2;
  var _resizeDelay;
  var _toArray;
  var _clamp4;
  var _time2;
  var _syncInterval;
  var _refreshing;
  var _pointerIsDown;
  var _transformProp2;
  var _i;
  var _prevWidth;
  var _prevHeight;
  var _autoRefresh;
  var _sort;
  var _suppressOverwrites2;
  var _ignoreResize;
  var _normalizer2;
  var _ignoreMobileResize;
  var _baseScreenHeight;
  var _baseScreenWidth;
  var _fixIOSBug;
  var _context3;
  var _scrollRestoration;
  var _div100vh;
  var _100vh;
  var _isReverted;
  var _clampingMax;
  var _limitCallbacks;
  var _startup2 = 1;
  var _getTime2 = Date.now;
  var _time1 = _getTime2();
  var _lastScrollTime = 0;
  var _enabled = 0;
  var _parseClamp = function _parseClamp2(value, type, self2) {
    var clamp4 = _isString3(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
    self2["_" + type + "Clamp"] = clamp4;
    return clamp4 ? value.substr(6, value.length - 7) : value;
  };
  var _keepClamp = function _keepClamp2(value, clamp4) {
    return clamp4 && (!_isString3(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
  };
  var _rafBugFix = function _rafBugFix2() {
    return _enabled && requestAnimationFrame(_rafBugFix2);
  };
  var _pointerDownHandler = function _pointerDownHandler2() {
    return _pointerIsDown = 1;
  };
  var _pointerUpHandler = function _pointerUpHandler2() {
    return _pointerIsDown = 0;
  };
  var _passThrough3 = function _passThrough4(v) {
    return v;
  };
  var _round3 = function _round4(value) {
    return Math.round(value * 1e5) / 1e5 || 0;
  };
  var _windowExists5 = function _windowExists6() {
    return typeof window !== "undefined";
  };
  var _getGSAP3 = function _getGSAP4() {
    return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
  };
  var _isViewport3 = function _isViewport4(e2) {
    return !!~_root2.indexOf(e2);
  };
  var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
    return (dimensionProperty === "Height" ? _100vh : _win4["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
  };
  var _getBoundsFunc = function _getBoundsFunc2(element) {
    return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
      _winOffsets.width = _win4.innerWidth;
      _winOffsets.height = _100vh;
      return _winOffsets;
    } : function() {
      return _getBounds(element);
    });
  };
  var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
    var d2 = _ref.d, d22 = _ref.d2, a = _ref.a;
    return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
      return a()[d2];
    } : function() {
      return (isViewport ? _getViewportDimension(d22) : scroller["client" + d22]) || 0;
    };
  };
  var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
    return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
      return _winOffsets;
    };
  };
  var _maxScroll = function _maxScroll2(element, _ref2) {
    var s2 = _ref2.s, d2 = _ref2.d2, d3 = _ref2.d, a = _ref2.a;
    return Math.max(0, (s2 = "scroll" + d2) && (a = _getProxyProp(element, s2)) ? a() - _getBoundsFunc(element)()[d3] : _isViewport3(element) ? (_docEl2[s2] || _body2[s2]) - _getViewportDimension(d2) : element[s2] - element["offset" + d2]);
  };
  var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events2) {
    for (var i3 = 0; i3 < _autoRefresh.length; i3 += 3) {
      (!events2 || ~events2.indexOf(_autoRefresh[i3 + 1])) && func(_autoRefresh[i3], _autoRefresh[i3 + 1], _autoRefresh[i3 + 2]);
    }
  };
  var _isString3 = function _isString4(value) {
    return typeof value === "string";
  };
  var _isFunction3 = function _isFunction4(value) {
    return typeof value === "function";
  };
  var _isNumber3 = function _isNumber4(value) {
    return typeof value === "number";
  };
  var _isObject3 = function _isObject4(value) {
    return typeof value === "object";
  };
  var _endAnimation = function _endAnimation2(animation, reversed, pause) {
    return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
  };
  var _callback3 = function _callback4(self2, func) {
    if (self2.enabled) {
      var result = self2._ctx ? self2._ctx.add(function() {
        return func(self2);
      }) : func(self2);
      result && result.totalTime && (self2.callbackAnimation = result);
    }
  };
  var _abs = Math.abs;
  var _left = "left";
  var _top = "top";
  var _right = "right";
  var _bottom = "bottom";
  var _width = "width";
  var _height = "height";
  var _Right = "Right";
  var _Left = "Left";
  var _Top = "Top";
  var _Bottom = "Bottom";
  var _padding = "padding";
  var _margin = "margin";
  var _Width = "Width";
  var _Height = "Height";
  var _px = "px";
  var _getComputedStyle = function _getComputedStyle2(element) {
    return _win4.getComputedStyle(element);
  };
  var _makePositionable = function _makePositionable2(element) {
    var position = _getComputedStyle(element).position;
    element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
  };
  var _setDefaults3 = function _setDefaults4(obj, defaults3) {
    for (var p2 in defaults3) {
      p2 in obj || (obj[p2] = defaults3[p2]);
    }
    return obj;
  };
  var _getBounds = function _getBounds2(element, withoutTransforms) {
    var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
      x: 0,
      y: 0,
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0
    }).progress(1), bounds = element.getBoundingClientRect();
    tween && tween.progress(0).kill();
    return bounds;
  };
  var _getSize = function _getSize2(element, _ref3) {
    var d2 = _ref3.d2;
    return element["offset" + d2] || element["client" + d2] || 0;
  };
  var _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
    var a = [], labels = timeline2.labels, duration = timeline2.duration(), p2;
    for (p2 in labels) {
      a.push(labels[p2] / duration);
    }
    return a;
  };
  var _getClosestLabel = function _getClosestLabel2(animation) {
    return function(value) {
      return gsap3.utils.snap(_getLabelRatioArray(animation), value);
    };
  };
  var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
    var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
      return a2 - b;
    });
    return a ? function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var i3;
      if (!direction) {
        return snap3(value);
      }
      if (direction > 0) {
        value -= threshold;
        for (i3 = 0; i3 < a.length; i3++) {
          if (a[i3] >= value) {
            return a[i3];
          }
        }
        return a[i3 - 1];
      } else {
        i3 = a.length;
        value += threshold;
        while (i3--) {
          if (a[i3] <= value) {
            return a[i3];
          }
        }
      }
      return a[0];
    } : function(value, direction, threshold) {
      if (threshold === void 0) {
        threshold = 1e-3;
      }
      var snapped = snap3(value);
      return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap3(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
    };
  };
  var _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
    return function(value, st) {
      return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
    };
  };
  var _multiListener = function _multiListener2(func, element, types, callback) {
    return types.split(",").forEach(function(type) {
      return func(element, type, callback);
    });
  };
  var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
    return element.addEventListener(type, func, {
      passive: !nonPassive,
      capture: !!capture
    });
  };
  var _removeListener3 = function _removeListener4(element, type, func, capture) {
    return element.removeEventListener(type, func, !!capture);
  };
  var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
    scrollFunc = scrollFunc && scrollFunc.wheelHandler;
    if (scrollFunc) {
      func(el, "wheel", scrollFunc);
      func(el, "touchmove", scrollFunc);
    }
  };
  var _markerDefaults = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal"
  };
  var _defaults2 = {
    toggleActions: "play",
    anticipatePin: 0
  };
  var _keywords = {
    top: 0,
    left: 0,
    center: 0.5,
    bottom: 1,
    right: 1
  };
  var _offsetToPx = function _offsetToPx2(value, size) {
    if (_isString3(value)) {
      var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
      if (~eqIndex) {
        value.indexOf("%") > eqIndex && (relative *= size / 100);
        value = value.substr(0, eqIndex - 1);
      }
      value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
    }
    return value;
  };
  var _createMarker = function _createMarker2(type, name2, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
    var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
    var e2 = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
    (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
    matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
    e2._isStart = isStart;
    e2.setAttribute("class", "gsap-marker-" + type + (name2 ? " marker-" + name2 : ""));
    e2.style.cssText = css;
    e2.innerText = name2 || name2 === 0 ? type + "-" + name2 : type;
    parent.children[0] ? parent.insertBefore(e2, parent.children[0]) : parent.appendChild(e2);
    e2._offset = e2["offset" + direction.op.d2];
    _positionMarker(e2, 0, direction, isStart);
    return e2;
  };
  var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
    var vars = {
      display: "block"
    }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
    marker._isFlipped = flipped;
    vars[direction.a + "Percent"] = flipped ? -100 : 0;
    vars[direction.a] = flipped ? "1px" : 0;
    vars["border" + side + _Width] = 1;
    vars["border" + oppositeSide + _Width] = 0;
    vars[direction.p] = start + "px";
    gsap3.set(marker, vars);
  };
  var _triggers = [];
  var _ids = {};
  var _rafID;
  var _sync = function _sync2() {
    return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
  };
  var _onScroll3 = function _onScroll4() {
    if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
      _scrollers.cache++;
      if (_normalizer2) {
        _rafID || (_rafID = requestAnimationFrame(_updateAll));
      } else {
        _updateAll();
      }
      _lastScrollTime || _dispatch3("scrollStart");
      _lastScrollTime = _getTime2();
    }
  };
  var _setBaseDimensions = function _setBaseDimensions2() {
    _baseScreenWidth = _win4.innerWidth;
    _baseScreenHeight = _win4.innerHeight;
  };
  var _onResize = function _onResize2() {
    _scrollers.cache++;
    !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25) && _resizeDelay.restart(true);
  };
  var _listeners2 = {};
  var _emptyArray2 = [];
  var _softRefresh = function _softRefresh2() {
    return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
  };
  var _dispatch3 = function _dispatch4(type) {
    return _listeners2[type] && _listeners2[type].map(function(f2) {
      return f2();
    }) || _emptyArray2;
  };
  var _savedStyles = [];
  var _revertRecorded = function _revertRecorded2(media) {
    for (var i3 = 0; i3 < _savedStyles.length; i3 += 5) {
      if (!media || _savedStyles[i3 + 4] && _savedStyles[i3 + 4].query === media) {
        _savedStyles[i3].style.cssText = _savedStyles[i3 + 1];
        _savedStyles[i3].getBBox && _savedStyles[i3].setAttribute("transform", _savedStyles[i3 + 2] || "");
        _savedStyles[i3 + 3].uncache = 1;
      }
    }
  };
  var _revertAll = function _revertAll2(kill, media) {
    var trigger;
    for (_i = 0; _i < _triggers.length; _i++) {
      trigger = _triggers[_i];
      if (trigger && (!media || trigger._ctx === media)) {
        if (kill) {
          trigger.kill(1);
        } else {
          trigger.revert(true, true);
        }
      }
    }
    _isReverted = true;
    media && _revertRecorded(media);
    media || _dispatch3("revert");
  };
  var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
    _scrollers.cache++;
    (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
    });
    _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
  };
  var _refreshingAll;
  var _refreshID = 0;
  var _queueRefreshID;
  var _queueRefreshAll = function _queueRefreshAll2() {
    if (_queueRefreshID !== _refreshID) {
      var id = _queueRefreshID = _refreshID;
      requestAnimationFrame(function() {
        return id === _refreshID && _refreshAll(true);
      });
    }
  };
  var _refresh100vh = function _refresh100vh2() {
    _body2.appendChild(_div100vh);
    _100vh = !_normalizer2 && _div100vh.offsetHeight || _win4.innerHeight;
    _body2.removeChild(_div100vh);
  };
  var _hideAllMarkers = function _hideAllMarkers2(hide) {
    return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
      return el.style.display = hide ? "none" : "block";
    });
  };
  var _refreshAll = function _refreshAll2(force, skipRevert) {
    if (_lastScrollTime && !force && !_isReverted) {
      _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
      return;
    }
    _refresh100vh();
    _refreshingAll = ScrollTrigger2.isRefreshing = true;
    _scrollers.forEach(function(obj) {
      return _isFunction3(obj) && ++obj.cacheID && (obj.rec = obj());
    });
    var refreshInits = _dispatch3("refreshInit");
    _sort && ScrollTrigger2.sort();
    skipRevert || _revertAll();
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && (obj.target.style.scrollBehavior = "auto");
        obj(0);
      }
    });
    _triggers.slice(0).forEach(function(t2) {
      return t2.refresh();
    });
    _isReverted = false;
    _triggers.forEach(function(t2) {
      if (t2._subPinOffset && t2.pin) {
        var prop = t2.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t2.pin[prop];
        t2.revert(true, 1);
        t2.adjustPinSpacing(t2.pin[prop] - original);
        t2.refresh();
      }
    });
    _clampingMax = 1;
    _hideAllMarkers(true);
    _triggers.forEach(function(t2) {
      var max = _maxScroll(t2.scroller, t2._dir), endClamp = t2.vars.end === "max" || t2._endClamp && t2.end > max, startClamp = t2._startClamp && t2.start >= max;
      (endClamp || startClamp) && t2.setPositions(startClamp ? max - 1 : t2.start, endClamp ? Math.max(startClamp ? max : t2.start + 1, max) : t2.end, true);
    });
    _hideAllMarkers(false);
    _clampingMax = 0;
    refreshInits.forEach(function(result) {
      return result && result.render && result.render(-1);
    });
    _scrollers.forEach(function(obj) {
      if (_isFunction3(obj)) {
        obj.smooth && requestAnimationFrame(function() {
          return obj.target.style.scrollBehavior = "smooth";
        });
        obj.rec && obj(obj.rec);
      }
    });
    _clearScrollMemory(_scrollRestoration, 1);
    _resizeDelay.pause();
    _refreshID++;
    _refreshingAll = 2;
    _updateAll(2);
    _triggers.forEach(function(t2) {
      return _isFunction3(t2.vars.onRefresh) && t2.vars.onRefresh(t2);
    });
    _refreshingAll = ScrollTrigger2.isRefreshing = false;
    _dispatch3("refresh");
  };
  var _lastScroll = 0;
  var _direction = 1;
  var _primary;
  var _updateAll = function _updateAll2(force) {
    if (force === 2 || !_refreshingAll && !_isReverted) {
      ScrollTrigger2.isUpdating = true;
      _primary && _primary.update(0);
      var l2 = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l2 && _triggers[0].scroll();
      _direction = _lastScroll > scroll ? -1 : 1;
      _refreshingAll || (_lastScroll = scroll);
      if (recordVelocity) {
        if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
          _lastScrollTime = 0;
          _dispatch3("scrollEnd");
        }
        _time2 = _time1;
        _time1 = time;
      }
      if (_direction < 0) {
        _i = l2;
        while (_i-- > 0) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
        _direction = 1;
      } else {
        for (_i = 0; _i < l2; _i++) {
          _triggers[_i] && _triggers[_i].update(0, recordVelocity);
        }
      }
      ScrollTrigger2.isUpdating = false;
    }
    _rafID = 0;
  };
  var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
  var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
  var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
    _setState(state);
    var cache = pin._gsap;
    if (cache.spacerIsNative) {
      _setState(cache.spacerState);
    } else if (pin._gsap.swappedIn) {
      var parent = spacer.parentNode;
      if (parent) {
        parent.insertBefore(pin, spacer);
        parent.removeChild(spacer);
      }
    }
    pin._gsap.swappedIn = false;
  };
  var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
    if (!pin._gsap.swappedIn) {
      var i3 = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p2;
      while (i3--) {
        p2 = _propNamesToCopy[i3];
        spacerStyle[p2] = cs[p2];
      }
      spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
      cs.display === "inline" && (spacerStyle.display = "inline-block");
      pinStyle[_bottom] = pinStyle[_right] = "auto";
      spacerStyle.flexBasis = cs.flexBasis || "auto";
      spacerStyle.overflow = "visible";
      spacerStyle.boxSizing = "border-box";
      spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
      spacerStyle[_height] = _getSize(pin, _vertical) + _px;
      spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
      _setState(spacerState);
      pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
      pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
      pinStyle[_padding] = cs[_padding];
      if (pin.parentNode !== spacer) {
        pin.parentNode.insertBefore(spacer, pin);
        spacer.appendChild(pin);
      }
      pin._gsap.swappedIn = true;
    }
  };
  var _capsExp2 = /([A-Z])/g;
  var _setState = function _setState2(state) {
    if (state) {
      var style = state.t.style, l2 = state.length, i3 = 0, p2, value;
      (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
      for (; i3 < l2; i3 += 2) {
        value = state[i3 + 1];
        p2 = state[i3];
        if (value) {
          style[p2] = value;
        } else if (style[p2]) {
          style.removeProperty(p2.replace(_capsExp2, "-$1").toLowerCase());
        }
      }
    }
  };
  var _getState = function _getState2(element) {
    var l2 = _stateProps.length, style = element.style, state = [], i3 = 0;
    for (; i3 < l2; i3++) {
      state.push(_stateProps[i3], style[_stateProps[i3]]);
    }
    state.t = element;
    return state;
  };
  var _copyState = function _copyState2(state, override, omitOffsets) {
    var result = [], l2 = state.length, i3 = omitOffsets ? 8 : 0, p2;
    for (; i3 < l2; i3 += 2) {
      p2 = state[i3];
      result.push(p2, p2 in override ? override[p2] : state[i3 + 1]);
    }
    result.t = state.t;
    return result;
  };
  var _winOffsets = {
    left: 0,
    top: 0
  };
  var _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
    _isFunction3(value) && (value = value(self2));
    if (_isString3(value) && value.substr(0, 3) === "max") {
      value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
    }
    var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
    containerAnimation && containerAnimation.seek(0);
    isNaN(value) || (value = +value);
    if (!_isNumber3(value)) {
      _isFunction3(trigger) && (trigger = trigger(self2));
      var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
      element = _getTarget(trigger, self2) || _body2;
      bounds = _getBounds(element) || {};
      if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
        display = element.style.display;
        element.style.display = "block";
        bounds = _getBounds(element);
        display ? element.style.display = display : element.style.removeProperty("display");
      }
      localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
      globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
      value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
      markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
      scrollerSize -= scrollerSize - globalOffset;
    } else {
      containerAnimation && (value = gsap3.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
      markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
    }
    if (clampZeroProp) {
      self2[clampZeroProp] = value || -1e-3;
      value < 0 && (value = 0);
    }
    if (marker) {
      var position = value + scrollerSize, isStart = marker._isStart;
      p1 = "scroll" + direction.d2;
      _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
      if (useFixedPosition) {
        scrollerBounds = _getBounds(markerScroller);
        useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
      }
    }
    if (containerAnimation && element) {
      p1 = _getBounds(element);
      containerAnimation.seek(scrollerMax);
      p2 = _getBounds(element);
      containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
      value = value / containerAnimation._caScrollDist * scrollerMax;
    }
    containerAnimation && containerAnimation.seek(time);
    return containerAnimation ? value : Math.round(value);
  };
  var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
  var _reparent = function _reparent2(element, parent, top, left) {
    if (element.parentNode !== parent) {
      var style = element.style, p2, cs;
      if (parent === _body2) {
        element._stOrig = style.cssText;
        cs = _getComputedStyle(element);
        for (p2 in cs) {
          if (!+p2 && !_prefixExp.test(p2) && cs[p2] && typeof style[p2] === "string" && p2 !== "0") {
            style[p2] = cs[p2];
          }
        }
        style.top = top;
        style.left = left;
      } else {
        style.cssText = element._stOrig;
      }
      gsap3.core.getCache(element).uncache = 1;
      parent.appendChild(element);
    }
  };
  var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
    var last1 = initialValue, last2 = last1;
    return function(value) {
      var current = Math.round(getValueFunc());
      if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
        value = current;
        onInterrupt && onInterrupt();
      }
      last2 = last1;
      last1 = value;
      return value;
    };
  };
  var _shiftMarker = function _shiftMarker2(marker, direction, value) {
    var vars = {};
    vars[direction.p] = "+=" + value;
    gsap3.set(marker, vars);
  };
  var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
    var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
      var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
      initialValue = initialValue || getScroll();
      var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
        tween.kill();
        getTween2.tween = 0;
      });
      change2 = change1 && change2 || 0;
      change1 = change1 || scrollTo - initialValue;
      tween && tween.kill();
      vars[prop] = scrollTo;
      vars.inherit = false;
      vars.modifiers = modifiers;
      modifiers[prop] = function() {
        return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
      };
      vars.onUpdate = function() {
        _scrollers.cache++;
        getTween2.tween && _updateAll();
      };
      vars.onComplete = function() {
        getTween2.tween = 0;
        onComplete && onComplete.call(tween);
      };
      tween = getTween2.tween = gsap3.to(scroller, vars);
      return tween;
    };
    scroller[prop] = getScroll;
    getScroll.wheelHandler = function() {
      return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
    };
    _addListener3(scroller, "wheel", getScroll.wheelHandler);
    ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
    return getTween;
  };
  var ScrollTrigger2 = /* @__PURE__ */ function() {
    function ScrollTrigger3(vars, animation) {
      _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
      _context3(this);
      this.init(vars, animation);
    }
    var _proto = ScrollTrigger3.prototype;
    _proto.init = function init4(vars, animation) {
      this.progress = this.start = 0;
      this.vars && this.kill(true, true);
      if (!_enabled) {
        this.update = this.refresh = this.kill = _passThrough3;
        return;
      }
      vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
        trigger: vars
      } : vars, _defaults2);
      var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
        return vars.onRefreshInit(self2);
      }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
      self2._startClamp = self2._endClamp = false;
      self2._dir = direction;
      anticipatePin *= 45;
      self2.scroller = scroller;
      self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
      scroll1 = scrollFunc();
      self2.vars = vars;
      animation = animation || vars.animation;
      if ("refreshPriority" in vars) {
        _sort = 1;
        vars.refreshPriority === -9999 && (_primary = self2);
      }
      scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
        top: _getTweenCreator(scroller, _vertical),
        left: _getTweenCreator(scroller, _horizontal)
      };
      self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
      self2.scrubDuration = function(value) {
        scrubSmooth = _isNumber3(value) && value;
        if (!scrubSmooth) {
          scrubTween && scrubTween.progress(1).kill();
          scrubTween = 0;
        } else {
          scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
            ease: "expo",
            totalProgress: "+=0",
            inherit: false,
            duration: scrubSmooth,
            paused: true,
            onComplete: function onComplete() {
              return onScrubComplete && onScrubComplete(self2);
            }
          });
        }
      };
      if (animation) {
        animation.vars.lazy = false;
        animation._initted && !self2.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
        self2.animation = animation.pause();
        animation.scrollTrigger = self2;
        self2.scrubDuration(scrub);
        snap1 = 0;
        id || (id = animation.vars.id);
      }
      if (snap3) {
        if (!_isObject3(snap3) || snap3.push) {
          snap3 = {
            snapTo: snap3
          };
        }
        "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
          scrollBehavior: "auto"
        });
        _scrollers.forEach(function(o) {
          return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
        });
        snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
          return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
        } : gsap3.utils.snap(snap3.snapTo);
        snapDurClamp = snap3.duration || {
          min: 0.1,
          max: 2
        };
        snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
        snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
          var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
          if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
            var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
            endValue = snapFunc(naturalEnd, self2);
            _isNumber3(endValue) || (endValue = naturalEnd);
            endScroll = Math.round(start + endValue * change);
            if (scroll <= end && scroll >= start && endScroll !== scroll) {
              if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                return;
              }
              if (snap3.inertia === false) {
                change1 = endValue - progress;
              }
              tweenTo(endScroll, {
                duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                ease: snap3.ease || "power3",
                data: _abs(endScroll - scroll),
                // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
                onInterrupt: function onInterrupt() {
                  return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                },
                onComplete: function onComplete() {
                  self2.update();
                  lastSnap = scrollFunc();
                  if (animation) {
                    scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                  }
                  snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                  onSnapComplete && onSnapComplete(self2);
                  _onComplete && _onComplete(self2);
                }
              }, scroll, change1 * change, endScroll - scroll - change1 * change);
              onStart && onStart(self2, tweenTo.tween);
            }
          } else if (self2.isActive && lastSnap !== scroll) {
            snapDelayedCall.restart(true);
          }
        }).pause();
      }
      id && (_ids[id] = self2);
      trigger = self2.trigger = _getTarget(trigger || pin !== true && pin);
      customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
      customRevertReturn && (customRevertReturn = customRevertReturn(self2));
      pin = pin === true ? trigger : _getTarget(pin);
      _isString3(toggleClass) && (toggleClass = {
        targets: trigger,
        className: toggleClass
      });
      if (pin) {
        pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
        self2.pin = pin;
        pinCache = gsap3.core.getCache(pin);
        if (!pinCache.spacer) {
          if (pinSpacer) {
            pinSpacer = _getTarget(pinSpacer);
            pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
            pinCache.spacerIsNative = !!pinSpacer;
            pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
          }
          pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
          spacer.classList.add("pin-spacer");
          id && spacer.classList.add("pin-spacer-" + id);
          pinCache.pinState = pinOriginalState = _getState(pin);
        } else {
          pinOriginalState = pinCache.pinState;
        }
        vars.force3D !== false && gsap3.set(pin, {
          force3D: true
        });
        self2.spacer = spacer = pinCache.spacer;
        cs = _getComputedStyle(pin);
        spacingStart = cs[pinSpacing + direction.os2];
        pinGetter = gsap3.getProperty(pin);
        pinSetter = gsap3.quickSetter(pin, direction.a, _px);
        _swapPinIn(pin, spacer, cs);
        pinState = _getState(pin);
      }
      if (markers) {
        markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
        markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
        markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
        offset = markerStartTrigger["offset" + direction.op.d2];
        var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
        markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
        markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
        containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction.a, _px));
        if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
          _makePositionable(isViewport ? _body2 : scroller);
          gsap3.set([markerStartTrigger, markerEndTrigger], {
            force3D: true
          });
          markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction.a, _px);
          markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction.a, _px);
        }
      }
      if (containerAnimation) {
        var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
        containerAnimation.eventCallback("onUpdate", function() {
          self2.update(0, 0, 1);
          oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
        });
      }
      self2.previous = function() {
        return _triggers[_triggers.indexOf(self2) - 1];
      };
      self2.next = function() {
        return _triggers[_triggers.indexOf(self2) + 1];
      };
      self2.revert = function(revert, temp) {
        if (!temp) {
          return self2.kill(true);
        }
        var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
        if (r !== self2.isReverted) {
          if (r) {
            prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
            prevProgress = self2.progress;
            prevAnimProgress = animation && animation.progress();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
            return m2.style.display = r ? "none" : "block";
          });
          if (r) {
            _refreshing = self2;
            self2.update(r);
          }
          if (pin && (!pinReparent || !self2.isActive)) {
            if (r) {
              _swapPinOut(pin, spacer, pinOriginalState);
            } else {
              _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
            }
          }
          r || self2.update(r);
          _refreshing = prevRefreshing;
          self2.isReverted = r;
        }
      };
      self2.refresh = function(soft, force, position, pinOffset) {
        if ((_refreshing || !self2.enabled) && !force) {
          return;
        }
        if (pin && soft && _lastScrollTime) {
          _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
          return;
        }
        !_refreshingAll && onRefreshInit && onRefreshInit(self2);
        _refreshing = self2;
        if (tweenTo.tween && !position) {
          tweenTo.tween.kill();
          tweenTo.tween = 0;
        }
        scrubTween && scrubTween.pause();
        invalidateOnRefresh && animation && animation.revert({
          kill: false
        }).invalidate();
        self2.isReverted || self2.revert(true, true);
        self2._subPinOffset = false;
        var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject3(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject3(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self2), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i3 = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
        if (markers && _isObject3(position)) {
          markerStartOffset = gsap3.getProperty(markerStartTrigger, direction.p);
          markerEndOffset = gsap3.getProperty(markerEndTrigger, direction.p);
        }
        while (i3--) {
          curTrigger = _triggers[i3];
          curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self2);
          curPin = curTrigger.pin;
          if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
            revertedPins || (revertedPins = []);
            revertedPins.unshift(curTrigger);
            curTrigger.revert(true, true);
          }
          if (curTrigger !== _triggers[i3]) {
            triggerIndex--;
            i3--;
          }
        }
        _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
        parsedStart = _parseClamp(parsedStart, "start", self2);
        start = _parsePosition3(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
        _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
        if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
          if (~parsedEnd.indexOf(" ")) {
            parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
          } else {
            offset2 = _offsetToPx(parsedEnd.substr(2), size);
            parsedEnd = _isString3(parsedStart) ? parsedStart : (containerAnimation ? gsap3.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
            parsedEndTrigger = trigger;
          }
        }
        parsedEnd = _parseClamp(parsedEnd, "end", self2);
        end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self2._endClamp && "_endClamp")) || -1e-3;
        offset2 = 0;
        i3 = triggerIndex;
        while (i3--) {
          curTrigger = _triggers[i3];
          curPin = curTrigger.pin;
          if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
            cs2 = curTrigger.end - (self2._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
            if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
              offset2 += cs2 * (1 - curTrigger.progress);
            }
            curPin === pin && (otherPinOffset += cs2);
          }
        }
        start += offset2;
        end += offset2;
        self2._startClamp && (self2._startClamp += offset2);
        if (self2._endClamp && !_refreshingAll) {
          self2._endClamp = end || -1e-3;
          end = Math.min(end, _maxScroll(scroller, direction));
        }
        change = end - start || (start -= 0.01) && 1e-3;
        if (isFirstRefresh) {
          prevProgress = gsap3.utils.clamp(0, 1, gsap3.utils.normalize(start, end, prevScroll));
        }
        self2._pinPush = otherPinOffset;
        if (markerStart && offset2) {
          cs2 = {};
          cs2[direction.a] = "+=" + offset2;
          pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
          gsap3.set([markerStart, markerEnd], cs2);
        }
        if (pin && !(_clampingMax && self2.end >= _maxScroll(scroller, direction))) {
          cs2 = _getComputedStyle(pin);
          isVertical = direction === _vertical;
          scroll = scrollFunc();
          pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
          if (!max && end > 1) {
            forcedOverflow = (isViewport ? _doc4.scrollingElement || _docEl2 : scroller).style;
            forcedOverflow = {
              style: forcedOverflow,
              value: forcedOverflow["overflow" + direction.a.toUpperCase()]
            };
            if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
              forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
            }
          }
          _swapPinIn(pin, spacer, cs2);
          pinState = _getState(pin);
          bounds = _getBounds(pin, true);
          oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
          if (pinSpacing) {
            spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
            spacerState.t = spacer;
            i3 = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
            if (i3) {
              spacerState.push(direction.d, i3 + _px);
              spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
            }
            _setState(spacerState);
            if (pinnedContainer) {
              _triggers.forEach(function(t2) {
                if (t2.pin === pinnedContainer && t2.vars.pinSpacing !== false) {
                  t2._subPinOffset = true;
                }
              });
            }
            useFixedPosition && scrollFunc(prevScroll);
          } else {
            i3 = _getSize(pin, direction);
            i3 && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i3 + _px);
          }
          if (useFixedPosition) {
            override = {
              top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
              left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
              boxSizing: "border-box",
              position: "fixed"
            };
            override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
            override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
            override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
            override[_padding] = cs2[_padding];
            override[_padding + _Top] = cs2[_padding + _Top];
            override[_padding + _Right] = cs2[_padding + _Right];
            override[_padding + _Bottom] = cs2[_padding + _Bottom];
            override[_padding + _Left] = cs2[_padding + _Left];
            pinActiveState = _copyState(pinOriginalState, override, pinReparent);
            _refreshingAll && scrollFunc(0);
          }
          if (animation) {
            initted = animation._initted;
            _suppressOverwrites2(1);
            animation.render(animation.duration(), true, true);
            pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
            pinMoves = Math.abs(change - pinChange) > 1;
            useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
            animation.render(0, true, true);
            initted || animation.invalidate(true);
            animation.parent || animation.totalTime(animation.totalTime());
            _suppressOverwrites2(0);
          } else {
            pinChange = change;
          }
          forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
        } else if (trigger && scrollFunc() && !containerAnimation) {
          bounds = trigger.parentNode;
          while (bounds && bounds !== _body2) {
            if (bounds._pinOffset) {
              start -= bounds._pinOffset;
              end -= bounds._pinOffset;
            }
            bounds = bounds.parentNode;
          }
        }
        revertedPins && revertedPins.forEach(function(t2) {
          return t2.revert(false, true);
        });
        self2.start = start;
        self2.end = end;
        scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
        if (!containerAnimation && !_refreshingAll) {
          scroll1 < prevScroll && scrollFunc(prevScroll);
          self2.scroll.rec = 0;
        }
        self2.revert(false, true);
        lastRefresh = _getTime2();
        if (snapDelayedCall) {
          lastSnap = -1;
          snapDelayedCall.restart(true);
        }
        _refreshing = 0;
        animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
        if (isFirstRefresh || prevProgress !== self2.progress || containerAnimation || invalidateOnRefresh) {
          animation && !isToggle && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap3.utils.normalize(start, end, 0) : prevProgress, true);
          self2.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
        }
        pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
        scrubTween && scrubTween.invalidate();
        if (!isNaN(markerStartOffset)) {
          markerStartOffset -= gsap3.getProperty(markerStartTrigger, direction.p);
          markerEndOffset -= gsap3.getProperty(markerEndTrigger, direction.p);
          _shiftMarker(markerStartTrigger, direction, markerStartOffset);
          _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
          _shiftMarker(markerEndTrigger, direction, markerEndOffset);
          _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
        }
        isFirstRefresh && !_refreshingAll && self2.update();
        if (onRefresh && !_refreshingAll && !executingOnRefresh) {
          executingOnRefresh = true;
          onRefresh(self2);
          executingOnRefresh = false;
        }
      };
      self2.getVelocity = function() {
        return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
      };
      self2.endAnimation = function() {
        _endAnimation(self2.callbackAnimation);
        if (animation) {
          scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
        }
      };
      self2.labelToScroll = function(label) {
        return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
      };
      self2.getTrailing = function(name2) {
        var i3 = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i3).reverse() : _triggers.slice(i3 + 1);
        return (_isString3(name2) ? a.filter(function(t2) {
          return t2.vars.preventOverlaps === name2;
        }) : a).filter(function(t2) {
          return self2.direction > 0 ? t2.end <= start : t2.start >= end;
        });
      };
      self2.update = function(reset, recordVelocity, forceFake) {
        if (containerAnimation && !forceFake && !reset) {
          return;
        }
        var scroll = _refreshingAll === true ? prevScroll : self2.scroll(), p2 = reset ? 0 : (scroll - start) / change, clipped = p2 < 0 ? 0 : p2 > 1 ? 1 : p2 || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
        if (recordVelocity) {
          scroll2 = scroll1;
          scroll1 = containerAnimation ? scrollFunc() : scroll;
          if (snap3) {
            snap22 = snap1;
            snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
          }
        }
        if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
          if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 1e-4;
          } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
            clipped = 0.9999;
          }
        }
        if (clipped !== prevProgress2 && self2.enabled) {
          isActive = self2.isActive = !!clipped && clipped < 1;
          wasActive = !!prevProgress2 && prevProgress2 < 1;
          toggled = isActive !== wasActive;
          stateChanged = toggled || !!clipped !== !!prevProgress2;
          self2.direction = clipped > prevProgress2 ? 1 : -1;
          self2.progress = clipped;
          if (stateChanged && !_refreshing) {
            toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
            if (isToggle) {
              action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
              isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
            }
          }
          preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t2) {
            return t2.endAnimation();
          }));
          if (!isToggle) {
            if (scrubTween && !_refreshing && !_startup2) {
              scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
              if (scrubTween.resetTo) {
                scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
              } else {
                scrubTween.vars.totalProgress = clipped;
                scrubTween.invalidate().restart();
              }
            } else if (animation) {
              animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
            }
          }
          if (pin) {
            reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
            if (!useFixedPosition) {
              pinSetter(_round3(pinStart + pinChange * clipped));
            } else if (stateChanged) {
              isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
              if (pinReparent) {
                if (!reset && (isActive || isAtMax)) {
                  var bounds = _getBounds(pin, true), _offset = scroll - start;
                  _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
                } else {
                  _reparent(pin, spacer);
                }
              }
              _setState(isActive || isAtMax ? pinActiveState : pinState);
              pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
            }
          }
          snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
          toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
            return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
          });
          onUpdate && !isToggle && !reset && onUpdate(self2);
          if (stateChanged && !_refreshing) {
            if (isToggle) {
              if (isTakingAction) {
                if (action === "complete") {
                  animation.pause().totalProgress(1);
                } else if (action === "reset") {
                  animation.restart(true).pause();
                } else if (action === "restart") {
                  animation.restart(true);
                } else {
                  animation[action]();
                }
              }
              onUpdate && onUpdate(self2);
            }
            if (toggled || !_limitCallbacks) {
              onToggle && toggled && _callback3(self2, onToggle);
              callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
              if (!toggled) {
                toggleState = clipped === 1 ? 1 : 3;
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
              }
            }
            if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
              _endAnimation(self2.callbackAnimation);
              scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
            }
          } else if (isToggle && onUpdate && !_refreshing) {
            onUpdate(self2);
          }
        }
        if (markerEndSetter) {
          var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
          markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
          markerEndSetter(n);
        }
        caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
      };
      self2.enable = function(reset, refresh) {
        if (!self2.enabled) {
          self2.enabled = true;
          _addListener3(scroller, "resize", _onResize);
          isViewport || _addListener3(scroller, "scroll", _onScroll3);
          onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (reset !== false) {
            self2.progress = prevProgress = 0;
            scroll1 = scroll2 = lastSnap = scrollFunc();
          }
          refresh !== false && self2.refresh();
        }
      };
      self2.getTween = function(snap4) {
        return snap4 && tweenTo ? tweenTo.tween : scrubTween;
      };
      self2.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
        if (containerAnimation) {
          var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
          newStart = st.start + _change * newStart / duration;
          newEnd = st.start + _change * newEnd / duration;
        }
        self2.refresh(false, false, {
          start: _keepClamp(newStart, keepClamp && !!self2._startClamp),
          end: _keepClamp(newEnd, keepClamp && !!self2._endClamp)
        }, pinOffset);
        self2.update();
      };
      self2.adjustPinSpacing = function(amount) {
        if (spacerState && amount) {
          var i3 = spacerState.indexOf(direction.d) + 1;
          spacerState[i3] = parseFloat(spacerState[i3]) + amount + _px;
          spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
          _setState(spacerState);
        }
      };
      self2.disable = function(reset, allowAnimation) {
        if (self2.enabled) {
          reset !== false && self2.revert(true, true);
          self2.enabled = self2.isActive = false;
          allowAnimation || scrubTween && scrubTween.pause();
          prevScroll = 0;
          pinCache && (pinCache.uncache = 1);
          onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
          if (snapDelayedCall) {
            snapDelayedCall.pause();
            tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
          }
          if (!isViewport) {
            var i3 = _triggers.length;
            while (i3--) {
              if (_triggers[i3].scroller === scroller && _triggers[i3] !== self2) {
                return;
              }
            }
            _removeListener3(scroller, "resize", _onResize);
            isViewport || _removeListener3(scroller, "scroll", _onScroll3);
          }
        }
      };
      self2.kill = function(revert, allowAnimation) {
        self2.disable(revert, allowAnimation);
        scrubTween && !allowAnimation && scrubTween.kill();
        id && delete _ids[id];
        var i3 = _triggers.indexOf(self2);
        i3 >= 0 && _triggers.splice(i3, 1);
        i3 === _i && _direction > 0 && _i--;
        i3 = 0;
        _triggers.forEach(function(t2) {
          return t2.scroller === self2.scroller && (i3 = 1);
        });
        i3 || _refreshingAll || (self2.scroll.rec = 0);
        if (animation) {
          animation.scrollTrigger = null;
          revert && animation.revert({
            kill: false
          });
          allowAnimation || animation.kill();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m2) {
          return m2.parentNode && m2.parentNode.removeChild(m2);
        });
        _primary === self2 && (_primary = 0);
        if (pin) {
          pinCache && (pinCache.uncache = 1);
          i3 = 0;
          _triggers.forEach(function(t2) {
            return t2.pin === pin && i3++;
          });
          i3 || (pinCache.spacer = 0);
        }
        vars.onKill && vars.onKill(self2);
      };
      _triggers.push(self2);
      self2.enable(false, false);
      customRevertReturn && customRevertReturn(self2);
      if (animation && animation.add && !change) {
        var updateFunc = self2.update;
        self2.update = function() {
          self2.update = updateFunc;
          start || end || self2.refresh();
        };
        gsap3.delayedCall(0.01, self2.update);
        change = 0.01;
        start = end = 0;
      } else {
        self2.refresh();
      }
      pin && _queueRefreshAll();
    };
    ScrollTrigger3.register = function register(core) {
      if (!_coreInitted3) {
        gsap3 = core || _getGSAP3();
        _windowExists5() && window.document && ScrollTrigger3.enable();
        _coreInitted3 = _enabled;
      }
      return _coreInitted3;
    };
    ScrollTrigger3.defaults = function defaults3(config3) {
      if (config3) {
        for (var p2 in config3) {
          _defaults2[p2] = config3[p2];
        }
      }
      return _defaults2;
    };
    ScrollTrigger3.disable = function disable(reset, kill) {
      _enabled = 0;
      _triggers.forEach(function(trigger) {
        return trigger[kill ? "kill" : "disable"](reset);
      });
      _removeListener3(_win4, "wheel", _onScroll3);
      _removeListener3(_doc4, "scroll", _onScroll3);
      clearInterval(_syncInterval);
      _removeListener3(_doc4, "touchcancel", _passThrough3);
      _removeListener3(_body2, "touchstart", _passThrough3);
      _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
      _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
      _resizeDelay.kill();
      _iterateAutoRefresh(_removeListener3);
      for (var i3 = 0; i3 < _scrollers.length; i3 += 3) {
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
        _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
      }
    };
    ScrollTrigger3.enable = function enable() {
      _win4 = window;
      _doc4 = document;
      _docEl2 = _doc4.documentElement;
      _body2 = _doc4.body;
      if (gsap3) {
        _toArray = gsap3.utils.toArray;
        _clamp4 = gsap3.utils.clamp;
        _context3 = gsap3.core.context || _passThrough3;
        _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
        _scrollRestoration = _win4.history.scrollRestoration || "auto";
        _lastScroll = _win4.pageYOffset;
        gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
        if (_body2) {
          _enabled = 1;
          _div100vh = document.createElement("div");
          _div100vh.style.height = "100vh";
          _div100vh.style.position = "absolute";
          _refresh100vh();
          _rafBugFix();
          Observer.register(gsap3);
          ScrollTrigger3.isTouch = Observer.isTouch;
          _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
          _ignoreMobileResize = Observer.isTouch === 1;
          _addListener3(_win4, "wheel", _onScroll3);
          _root2 = [_win4, _doc4, _docEl2, _body2];
          if (gsap3.matchMedia) {
            ScrollTrigger3.matchMedia = function(vars) {
              var mm = gsap3.matchMedia(), p2;
              for (p2 in vars) {
                mm.add(p2, vars[p2]);
              }
              return mm;
            };
            gsap3.addEventListener("matchMediaInit", function() {
              return _revertAll();
            });
            gsap3.addEventListener("matchMediaRevert", function() {
              return _revertRecorded();
            });
            gsap3.addEventListener("matchMedia", function() {
              _refreshAll(0, 1);
              _dispatch3("matchMedia");
            });
            gsap3.matchMedia("(orientation: portrait)", function() {
              _setBaseDimensions();
              return _setBaseDimensions;
            });
          } else {
            console.warn("Requires GSAP 3.11.0 or later");
          }
          _setBaseDimensions();
          _addListener3(_doc4, "scroll", _onScroll3);
          var bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i3;
          AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
            value: function value() {
              return this.time(-0.01, true);
            }
          });
          bodyStyle.borderTopStyle = "solid";
          bounds = _getBounds(_body2);
          _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
          _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
          border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
          _syncInterval = setInterval(_sync, 250);
          gsap3.delayedCall(0.5, function() {
            return _startup2 = 0;
          });
          _addListener3(_doc4, "touchcancel", _passThrough3);
          _addListener3(_body2, "touchstart", _passThrough3);
          _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
          _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
          _transformProp2 = gsap3.utils.checkPrefix("transform");
          _stateProps.push(_transformProp2);
          _coreInitted3 = _getTime2();
          _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
          _autoRefresh = [_doc4, "visibilitychange", function() {
            var w = _win4.innerWidth, h = _win4.innerHeight;
            if (_doc4.hidden) {
              _prevWidth = w;
              _prevHeight = h;
            } else if (_prevWidth !== w || _prevHeight !== h) {
              _onResize();
            }
          }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
          _iterateAutoRefresh(_addListener3);
          _triggers.forEach(function(trigger) {
            return trigger.enable(0, 1);
          });
          for (i3 = 0; i3 < _scrollers.length; i3 += 3) {
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 1]);
            _wheelListener(_removeListener3, _scrollers[i3], _scrollers[i3 + 2]);
          }
        }
      }
    };
    ScrollTrigger3.config = function config3(vars) {
      "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
      var ms = vars.syncInterval;
      ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
      "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
      if ("autoRefreshEvents" in vars) {
        _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
        _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
      }
    };
    ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
      var t2 = _getTarget(target), i3 = _scrollers.indexOf(t2), isViewport = _isViewport3(t2);
      if (~i3) {
        _scrollers.splice(i3, isViewport ? 6 : 2);
      }
      if (vars) {
        isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t2, vars);
      }
    };
    ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
      _triggers.forEach(function(t2) {
        return t2._ctx && t2._ctx.query === query && t2._ctx.kill(true, true);
      });
    };
    ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
      var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
      return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
    };
    ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
      _isString3(element) && (element = _getTarget(element));
      var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
      return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
    };
    ScrollTrigger3.killAll = function killAll(allowListeners) {
      _triggers.slice(0).forEach(function(t2) {
        return t2.vars.id !== "ScrollSmoother" && t2.kill();
      });
      if (allowListeners !== true) {
        var listeners = _listeners2.killAll || [];
        _listeners2 = {};
        listeners.forEach(function(f2) {
          return f2();
        });
      }
    };
    return ScrollTrigger3;
  }();
  ScrollTrigger2.version = "3.12.5";
  ScrollTrigger2.saveStyles = function(targets) {
    return targets ? _toArray(targets).forEach(function(target) {
      if (target && target.style) {
        var i3 = _savedStyles.indexOf(target);
        i3 >= 0 && _savedStyles.splice(i3, 5);
        _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap3.core.getCache(target), _context3());
      }
    }) : _savedStyles;
  };
  ScrollTrigger2.revert = function(soft, media) {
    return _revertAll(!soft, media);
  };
  ScrollTrigger2.create = function(vars, animation) {
    return new ScrollTrigger2(vars, animation);
  };
  ScrollTrigger2.refresh = function(safe) {
    return safe ? _onResize() : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
  };
  ScrollTrigger2.update = function(force) {
    return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
  };
  ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
  ScrollTrigger2.maxScroll = function(element, horizontal) {
    return _maxScroll(element, horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getScrollFunc = function(element, horizontal) {
    return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
  };
  ScrollTrigger2.getById = function(id) {
    return _ids[id];
  };
  ScrollTrigger2.getAll = function() {
    return _triggers.filter(function(t2) {
      return t2.vars.id !== "ScrollSmoother";
    });
  };
  ScrollTrigger2.isScrolling = function() {
    return !!_lastScrollTime;
  };
  ScrollTrigger2.snapDirectional = _snapDirectional;
  ScrollTrigger2.addEventListener = function(type, callback) {
    var a = _listeners2[type] || (_listeners2[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  };
  ScrollTrigger2.removeEventListener = function(type, callback) {
    var a = _listeners2[type], i3 = a && a.indexOf(callback);
    i3 >= 0 && a.splice(i3, 1);
  };
  ScrollTrigger2.batch = function(targets, vars) {
    var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
      var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
        callback(elements, triggers);
        elements = [];
        triggers = [];
      }).pause();
      return function(self2) {
        elements.length || delay.restart(true);
        elements.push(self2.trigger);
        triggers.push(self2);
        batchMax <= elements.length && delay.progress(1);
      };
    }, p2;
    for (p2 in vars) {
      varsCopy[p2] = p2.substr(0, 2) === "on" && _isFunction3(vars[p2]) && p2 !== "onRefreshInit" ? proxyCallback(p2, vars[p2]) : vars[p2];
    }
    if (_isFunction3(batchMax)) {
      batchMax = batchMax();
      _addListener3(ScrollTrigger2, "refresh", function() {
        return batchMax = vars.batchMax();
      });
    }
    _toArray(targets).forEach(function(target) {
      var config3 = {};
      for (p2 in varsCopy) {
        config3[p2] = varsCopy[p2];
      }
      config3.trigger = target;
      result.push(ScrollTrigger2.create(config3));
    });
    return result;
  };
  var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
    current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
    return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
  };
  var _allowNativePanning = function _allowNativePanning2(target, direction) {
    if (direction === true) {
      target.style.removeProperty("touch-action");
    } else {
      target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
    }
    target === _docEl2 && _allowNativePanning2(_body2, direction);
  };
  var _overflow = {
    auto: 1,
    scroll: 1
  };
  var _nestedScroll = function _nestedScroll2(_ref5) {
    var event2 = _ref5.event, target = _ref5.target, axis = _ref5.axis;
    var node = (event2.changedTouches ? event2.changedTouches[0] : event2).target, cache = node._gsap || gsap3.core.getCache(node), time = _getTime2(), cs;
    if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
      while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
        node = node.parentNode;
      }
      cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
      cache._isScrollT = time;
    }
    if (cache._isScroll || axis === "x") {
      event2.stopPropagation();
      event2._gsapAllow = true;
    }
  };
  var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
    return Observer.create({
      target,
      capture: true,
      debounce: false,
      lockAxis: true,
      type,
      onWheel: nested = nested && _nestedScroll,
      onPress: nested,
      onDrag: nested,
      onScroll: nested,
      onEnable: function onEnable() {
        return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
      },
      onDisable: function onDisable() {
        return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
      }
    });
  };
  var _inputExp = /(input|label|select|textarea)/i;
  var _inputIsFocused;
  var _captureInputs = function _captureInputs2(e2) {
    var isInput = _inputExp.test(e2.target.tagName);
    if (isInput || _inputIsFocused) {
      e2._gsapAllow = true;
      _inputIsFocused = isInput;
    }
  };
  var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
    _isObject3(vars) || (vars = {});
    vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
    vars.type || (vars.type = "wheel,touch");
    vars.debounce = !!vars.debounce;
    vars.id = vars.id || "normalizer";
    var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self2, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
      return momentum(self2);
    } : function() {
      return momentum || 2.8;
    }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
      return skipTouchMove = false;
    }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
      maxY = _maxScroll(target, _vertical);
      scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
      normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target, _horizontal)));
      lastRefreshID = _refreshID;
    }, removeContentOffset = function removeContentOffset2() {
      content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
      content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
      scrollFuncY.offset = scrollFuncY.cacheID = 0;
    }, ignoreDrag = function ignoreDrag2() {
      if (skipTouchMove) {
        requestAnimationFrame(resumeTouchMove);
        var offset = _round3(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
        if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
          scrollFuncY.offset = scroll - scrollFuncY.v;
          var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
          content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
          content._gsap.y = y + "px";
          scrollFuncY.cacheID = _scrollers.cache;
          _updateAll();
        }
        return true;
      }
      scrollFuncY.offset && removeContentOffset();
      skipTouchMove = true;
    }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize2 = function onResize3() {
      updateClamps();
      if (tween.isActive() && tween.vars.scrollY > maxY) {
        scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
      }
    };
    content && gsap3.set(content, {
      y: "+=0"
    });
    vars.ignoreCheck = function(e2) {
      return _fixIOSBug && e2.type === "touchmove" && ignoreDrag(e2) || scale > 1.05 && e2.type !== "touchstart" || self2.isGesturing || e2.touches && e2.touches.length > 1;
    };
    vars.onPress = function() {
      skipTouchMove = false;
      var prevScale = scale;
      scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
      tween.pause();
      prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
      startScrollX = scrollFuncX();
      startScrollY = scrollFuncY();
      updateClamps();
      lastRefreshID = _refreshID;
    };
    vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
      scrollFuncY.offset && removeContentOffset();
      if (!wasDragging) {
        onStopDelayedCall.restart(true);
      } else {
        _scrollers.cache++;
        var dur = resolveMomentumDuration(), currentScroll, endScroll;
        if (normalizeScrollX) {
          currentScroll = scrollFuncX();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
          tween.vars.scrollX = scrollClampX(endScroll);
        }
        currentScroll = scrollFuncY();
        endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
        tween.vars.scrollY = scrollClampY(endScroll);
        tween.invalidate().duration(dur).play(0.01);
        if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
          gsap3.to({}, {
            onUpdate: onResize2,
            duration: dur
          });
        }
      }
      onRelease && onRelease(self3);
    };
    vars.onWheel = function() {
      tween._ts && tween.pause();
      if (_getTime2() - wheelRefresh > 1e3) {
        lastRefreshID = 0;
        wheelRefresh = _getTime2();
      }
    };
    vars.onChange = function(self3, dx, dy, xArray, yArray) {
      _refreshID !== lastRefreshID && updateClamps();
      dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
      if (dy) {
        scrollFuncY.offset && removeContentOffset();
        var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
        isTouch && y !== yClamped && (startScrollY += yClamped - y);
        scrollFuncY(yClamped);
      }
      (dy || dx) && _updateAll();
    };
    vars.onEnable = function() {
      _allowNativePanning(target, normalizeScrollX ? false : "x");
      ScrollTrigger2.addEventListener("refresh", onResize2);
      _addListener3(_win4, "resize", onResize2);
      if (scrollFuncY.smooth) {
        scrollFuncY.target.style.scrollBehavior = "auto";
        scrollFuncY.smooth = scrollFuncX.smooth = false;
      }
      inputObserver.enable();
    };
    vars.onDisable = function() {
      _allowNativePanning(target, true);
      _removeListener3(_win4, "resize", onResize2);
      ScrollTrigger2.removeEventListener("refresh", onResize2);
      inputObserver.kill();
    };
    vars.lockAxis = vars.lockAxis !== false;
    self2 = new Observer(vars);
    self2.iOS = _fixIOSBug;
    _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
    _fixIOSBug && gsap3.ticker.add(_passThrough3);
    onStopDelayedCall = self2._dc;
    tween = gsap3.to(self2, {
      ease: "power4",
      paused: true,
      inherit: false,
      scrollX: normalizeScrollX ? "+=0.1" : "+=0",
      scrollY: "+=0.1",
      modifiers: {
        scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
          return tween.pause();
        })
      },
      onUpdate: _updateAll,
      onComplete: onStopDelayedCall.vars.onComplete
    });
    return self2;
  };
  ScrollTrigger2.sort = function(func) {
    return _triggers.sort(func || function(a, b) {
      return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
    });
  };
  ScrollTrigger2.observe = function(vars) {
    return new Observer(vars);
  };
  ScrollTrigger2.normalizeScroll = function(vars) {
    if (typeof vars === "undefined") {
      return _normalizer2;
    }
    if (vars === true && _normalizer2) {
      return _normalizer2.enable();
    }
    if (vars === false) {
      _normalizer2 && _normalizer2.kill();
      _normalizer2 = vars;
      return;
    }
    var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
    _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
    _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
    return normalizer;
  };
  ScrollTrigger2.core = {
    // smaller file size way to leverage in ScrollSmoother and Observer
    _getVelocityProp,
    _inputObserver,
    _scrollers,
    _proxies,
    bridge: {
      // when normalizeScroll sets the scroll position (ss = setScroll)
      ss: function ss() {
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      },
      // a way to get the _refreshing value in Observer
      ref: function ref() {
        return _refreshing;
      }
    }
  };
  _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);

  // src/utils/processoAnimation.ts
  function processoAnimation() {
    gsapWithCSS.registerPlugin(ScrollTrigger2);
  }

  // src/utils/rightMenu.ts
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  init_live_reload();

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/utils/matrix.js
  init_live_reload();
  var _doc5;
  var _win5;
  var _docElement2;
  var _body3;
  var _divContainer;
  var _svgContainer;
  var _identityMatrix;
  var _gEl;
  var _transformProp3 = "transform";
  var _transformOriginProp2 = _transformProp3 + "Origin";
  var _hasOffsetBug;
  var _setDoc = function _setDoc2(element) {
    var doc = element.ownerDocument || element;
    if (!(_transformProp3 in element.style) && "msTransform" in element.style) {
      _transformProp3 = "msTransform";
      _transformOriginProp2 = _transformProp3 + "Origin";
    }
    while (doc.parentNode && (doc = doc.parentNode)) {
    }
    _win5 = window;
    _identityMatrix = new Matrix2D();
    if (doc) {
      _doc5 = doc;
      _docElement2 = doc.documentElement;
      _body3 = doc.body;
      _gEl = _doc5.createElementNS("http://www.w3.org/2000/svg", "g");
      _gEl.style.transform = "none";
      var d1 = doc.createElement("div"), d2 = doc.createElement("div"), root = doc && (doc.body || doc.firstElementChild);
      if (root && root.appendChild) {
        root.appendChild(d1);
        d1.appendChild(d2);
        d1.setAttribute("style", "position:static;transform:translate3d(0,0,1px)");
        _hasOffsetBug = d2.offsetParent !== d1;
        root.removeChild(d1);
      }
    }
    return doc;
  };
  var _forceNonZeroScale = function _forceNonZeroScale2(e2) {
    var a, cache;
    while (e2 && e2 !== _body3) {
      cache = e2._gsap;
      cache && cache.uncache && cache.get(e2, "x");
      if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
        cache.scaleX = cache.scaleY = 1e-4;
        cache.renderTransform(1, cache);
        a ? a.push(cache) : a = [cache];
      }
      e2 = e2.parentNode;
    }
    return a;
  };
  var _svgTemps = [];
  var _divTemps = [];
  var _getDocScrollTop = function _getDocScrollTop2() {
    return _win5.pageYOffset || _doc5.scrollTop || _docElement2.scrollTop || _body3.scrollTop || 0;
  };
  var _getDocScrollLeft = function _getDocScrollLeft2() {
    return _win5.pageXOffset || _doc5.scrollLeft || _docElement2.scrollLeft || _body3.scrollLeft || 0;
  };
  var _svgOwner = function _svgOwner2(element) {
    return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
  };
  var _isFixed = function _isFixed2(element) {
    if (_win5.getComputedStyle(element).position === "fixed") {
      return true;
    }
    element = element.parentNode;
    if (element && element.nodeType === 1) {
      return _isFixed2(element);
    }
  };
  var _createSibling = function _createSibling2(element, i3) {
    if (element.parentNode && (_doc5 || _setDoc(element))) {
      var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i3 ? "rect" : "g" : "div", x2 = i3 !== 2 ? 0 : 100, y = i3 === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e2 = _doc5.createElementNS ? _doc5.createElementNS(ns.replace(/^https/, "http"), type) : _doc5.createElement(type);
      if (i3) {
        if (!svg) {
          if (!_divContainer) {
            _divContainer = _createSibling2(element);
            _divContainer.style.cssText = css;
          }
          e2.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x2 + "px";
          _divContainer.appendChild(e2);
        } else {
          _svgContainer || (_svgContainer = _createSibling2(element));
          e2.setAttribute("width", 0.01);
          e2.setAttribute("height", 0.01);
          e2.setAttribute("transform", "translate(" + x2 + "," + y + ")");
          _svgContainer.appendChild(e2);
        }
      }
      return e2;
    }
    throw "Need document and parent.";
  };
  var _consolidate = function _consolidate2(m2) {
    var c2 = new Matrix2D(), i3 = 0;
    for (; i3 < m2.numberOfItems; i3++) {
      c2.multiply(m2.getItem(i3).matrix);
    }
    return c2;
  };
  var _getCTM = function _getCTM2(svg) {
    var m2 = svg.getCTM(), transform;
    if (!m2) {
      transform = svg.style[_transformProp3];
      svg.style[_transformProp3] = "none";
      svg.appendChild(_gEl);
      m2 = _gEl.getCTM();
      svg.removeChild(_gEl);
      transform ? svg.style[_transformProp3] = transform : svg.style.removeProperty(_transformProp3.replace(/([A-Z])/g, "-$1").toLowerCase());
    }
    return m2 || _identityMatrix.clone();
  };
  var _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
    var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m2, b, x2, y, cs;
    if (element === _win5) {
      return element;
    }
    siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
    container = svg ? _svgContainer : _divContainer;
    if (svg) {
      if (isRootSVG) {
        b = _getCTM(element);
        x2 = -b.e / b.a;
        y = -b.f / b.d;
        m2 = _identityMatrix;
      } else if (element.getBBox) {
        b = element.getBBox();
        m2 = element.transform ? element.transform.baseVal : {};
        m2 = !m2.numberOfItems ? _identityMatrix : m2.numberOfItems > 1 ? _consolidate(m2) : m2.getItem(0).matrix;
        x2 = m2.a * b.x + m2.c * b.y;
        y = m2.b * b.x + m2.d * b.y;
      } else {
        m2 = new Matrix2D();
        x2 = y = 0;
      }
      if (adjustGOffset && element.tagName.toLowerCase() === "g") {
        x2 = y = 0;
      }
      (isRootSVG ? svg : parent).appendChild(container);
      container.setAttribute("transform", "matrix(" + m2.a + "," + m2.b + "," + m2.c + "," + m2.d + "," + (m2.e + x2) + "," + (m2.f + y) + ")");
    } else {
      x2 = y = 0;
      if (_hasOffsetBug) {
        m2 = element.offsetParent;
        b = element;
        while (b && (b = b.parentNode) && b !== m2 && b.parentNode) {
          if ((_win5.getComputedStyle(b)[_transformProp3] + "").length > 4) {
            x2 = b.offsetLeft;
            y = b.offsetTop;
            b = 0;
          }
        }
      }
      cs = _win5.getComputedStyle(element);
      if (cs.position !== "absolute" && cs.position !== "fixed") {
        m2 = element.offsetParent;
        while (parent && parent !== m2) {
          x2 += parent.scrollLeft || 0;
          y += parent.scrollTop || 0;
          parent = parent.parentNode;
        }
      }
      b = container.style;
      b.top = element.offsetTop - y + "px";
      b.left = element.offsetLeft - x2 + "px";
      b[_transformProp3] = cs[_transformProp3];
      b[_transformOriginProp2] = cs[_transformOriginProp2];
      b.position = cs.position === "fixed" ? "fixed" : "absolute";
      element.parentNode.appendChild(container);
    }
    return container;
  };
  var _setMatrix = function _setMatrix2(m2, a, b, c2, d2, e2, f2) {
    m2.a = a;
    m2.b = b;
    m2.c = c2;
    m2.d = d2;
    m2.e = e2;
    m2.f = f2;
    return m2;
  };
  var Matrix2D = /* @__PURE__ */ function() {
    function Matrix2D2(a, b, c2, d2, e2, f2) {
      if (a === void 0) {
        a = 1;
      }
      if (b === void 0) {
        b = 0;
      }
      if (c2 === void 0) {
        c2 = 0;
      }
      if (d2 === void 0) {
        d2 = 1;
      }
      if (e2 === void 0) {
        e2 = 0;
      }
      if (f2 === void 0) {
        f2 = 0;
      }
      _setMatrix(this, a, b, c2, d2, e2, f2);
    }
    var _proto = Matrix2D2.prototype;
    _proto.inverse = function inverse() {
      var a = this.a, b = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f, determinant = a * d2 - b * c2 || 1e-10;
      return _setMatrix(this, d2 / determinant, -b / determinant, -c2 / determinant, a / determinant, (c2 * f2 - d2 * e2) / determinant, -(a * f2 - b * e2) / determinant);
    };
    _proto.multiply = function multiply(matrix) {
      var a = this.a, b = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f, a2 = matrix.a, b2 = matrix.c, c22 = matrix.b, d22 = matrix.d, e22 = matrix.e, f22 = matrix.f;
      return _setMatrix(this, a2 * a + c22 * c2, a2 * b + c22 * d2, b2 * a + d22 * c2, b2 * b + d22 * d2, e2 + e22 * a + f22 * c2, f2 + e22 * b + f22 * d2);
    };
    _proto.clone = function clone() {
      return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
    };
    _proto.equals = function equals(matrix) {
      var a = this.a, b = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f;
      return a === matrix.a && b === matrix.b && c2 === matrix.c && d2 === matrix.d && e2 === matrix.e && f2 === matrix.f;
    };
    _proto.apply = function apply(point, decoratee) {
      if (decoratee === void 0) {
        decoratee = {};
      }
      var x2 = point.x, y = point.y, a = this.a, b = this.b, c2 = this.c, d2 = this.d, e2 = this.e, f2 = this.f;
      decoratee.x = x2 * a + y * c2 + e2 || 0;
      decoratee.y = x2 * b + y * d2 + f2 || 0;
      return decoratee;
    };
    return Matrix2D2;
  }();
  function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
    if (!element || !element.parentNode || (_doc5 || _setDoc(element)).documentElement === element) {
      return new Matrix2D();
    }
    var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m2 = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
    parent.removeChild(container);
    if (zeroScales) {
      b1 = zeroScales.length;
      while (b1--) {
        b2 = zeroScales[b1];
        b2.scaleX = b2.scaleY = 0;
        b2.renderTransform(1, b2);
      }
    }
    return inverse ? m2.inverse() : m2;
  }

  // node_modules/.pnpm/gsap@3.12.5/node_modules/gsap/Flip.js
  var _id = 1;
  var _toArray2;
  var gsap4;
  var _batch;
  var _batchAction;
  var _body4;
  var _closestTenth;
  var _getStyleSaver3;
  var _forEachBatch = function _forEachBatch2(batch, name2) {
    return batch.actions.forEach(function(a) {
      return a.vars[name2] && a.vars[name2](a);
    });
  };
  var _batchLookup = {};
  var _RAD2DEG2 = 180 / Math.PI;
  var _DEG2RAD2 = Math.PI / 180;
  var _emptyObj = {};
  var _dashedNameLookup = {};
  var _memoizedRemoveProps = {};
  var _listToArray = function _listToArray2(list) {
    return typeof list === "string" ? list.split(" ").join("").split(",") : list;
  };
  var _callbacks = _listToArray("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt");
  var _removeProps = _listToArray("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight");
  var _getEl = function _getEl2(target) {
    return _toArray2(target)[0] || console.warn("Element not found:", target);
  };
  var _round5 = function _round6(value) {
    return Math.round(value * 1e4) / 1e4 || 0;
  };
  var _toggleClass = function _toggleClass2(targets, className, action) {
    return targets.forEach(function(el) {
      return el.classList[action](className);
    });
  };
  var _reserved = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1
  };
  var _fitReserved = {
    zIndex: 1,
    simple: 1,
    clearProps: 1,
    scale: 1,
    absolute: 1,
    fitChild: 1,
    getVars: 1,
    props: 1
  };
  var _camelToDashed = function _camelToDashed2(p2) {
    return p2.replace(/([A-Z])/g, "-$1").toLowerCase();
  };
  var _copy = function _copy2(obj, exclude) {
    var result = {}, p2;
    for (p2 in obj) {
      exclude[p2] || (result[p2] = obj[p2]);
    }
    return result;
  };
  var _memoizedProps = {};
  var _memoizeProps = function _memoizeProps2(props) {
    var p2 = _memoizedProps[props] = _listToArray(props);
    _memoizedRemoveProps[props] = p2.concat(_removeProps);
    return p2;
  };
  var _getInverseGlobalMatrix = function _getInverseGlobalMatrix2(el) {
    var cache = el._gsap || gsap4.core.getCache(el);
    if (cache.gmCache === gsap4.ticker.frame) {
      return cache.gMatrix;
    }
    cache.gmCache = gsap4.ticker.frame;
    return cache.gMatrix = getGlobalMatrix(el, true, false, true);
  };
  var _getDOMDepth = function _getDOMDepth2(el, invert, level) {
    if (level === void 0) {
      level = 0;
    }
    var parent = el.parentNode, inc = 1e3 * Math.pow(10, level) * (invert ? -1 : 1), l2 = invert ? -inc * 900 : 0;
    while (el) {
      l2 += inc;
      el = el.previousSibling;
    }
    return parent ? l2 + _getDOMDepth2(parent, invert, level + 1) : l2;
  };
  var _orderByDOMDepth = function _orderByDOMDepth2(comps, invert, isElStates) {
    comps.forEach(function(comp) {
      return comp.d = _getDOMDepth(isElStates ? comp.element : comp.t, invert);
    });
    comps.sort(function(c1, c2) {
      return c1.d - c2.d;
    });
    return comps;
  };
  var _recordInlineStyles = function _recordInlineStyles2(elState, props) {
    var style = elState.element.style, a = elState.css = elState.css || [], i3 = props.length, p2, v;
    while (i3--) {
      p2 = props[i3];
      v = style[p2] || style.getPropertyValue(p2);
      a.push(v ? p2 : _dashedNameLookup[p2] || (_dashedNameLookup[p2] = _camelToDashed(p2)), v);
    }
    return style;
  };
  var _applyInlineStyles = function _applyInlineStyles2(state) {
    var css = state.css, style = state.element.style, i3 = 0;
    state.cache.uncache = 1;
    for (; i3 < css.length; i3 += 2) {
      css[i3 + 1] ? style[css[i3]] = css[i3 + 1] : style.removeProperty(css[i3]);
    }
    if (!css[css.indexOf("transform") + 1] && style.translate) {
      style.removeProperty("translate");
      style.removeProperty("scale");
      style.removeProperty("rotate");
    }
  };
  var _setFinalStates = function _setFinalStates2(comps, onlyTransforms) {
    comps.forEach(function(c2) {
      return c2.a.cache.uncache = 1;
    });
    onlyTransforms || comps.finalStates.forEach(_applyInlineStyles);
  };
  var _absoluteProps = "paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(",");
  var _makeAbsolute = function _makeAbsolute2(elState, fallbackNode, ignoreBatch) {
    var element = elState.element, width = elState.width, height = elState.height, uncache = elState.uncache, getProp = elState.getProp, style = element.style, i3 = 4, result, displayIsNone, cs;
    typeof fallbackNode !== "object" && (fallbackNode = elState);
    if (_batch && ignoreBatch !== 1) {
      _batch._abs.push({
        t: element,
        b: elState,
        a: elState,
        sd: 0
      });
      _batch._final.push(function() {
        return (elState.cache.uncache = 1) && _applyInlineStyles(elState);
      });
      return element;
    }
    displayIsNone = getProp("display") === "none";
    if (!elState.isVisible || displayIsNone) {
      displayIsNone && (_recordInlineStyles(elState, ["display"]).display = fallbackNode.display);
      elState.matrix = fallbackNode.matrix;
      elState.width = width = elState.width || fallbackNode.width;
      elState.height = height = elState.height || fallbackNode.height;
    }
    _recordInlineStyles(elState, _absoluteProps);
    cs = window.getComputedStyle(element);
    while (i3--) {
      style[_absoluteProps[i3]] = cs[_absoluteProps[i3]];
    }
    style.gridArea = "1 / 1 / 1 / 1";
    style.transition = "none";
    style.position = "absolute";
    style.width = width + "px";
    style.height = height + "px";
    style.top || (style.top = "0px");
    style.left || (style.left = "0px");
    if (uncache) {
      result = new ElementState(element);
    } else {
      result = _copy(elState, _emptyObj);
      result.position = "absolute";
      if (elState.simple) {
        var bounds = element.getBoundingClientRect();
        result.matrix = new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop());
      } else {
        result.matrix = getGlobalMatrix(element, false, false, true);
      }
    }
    result = _fit(result, elState, true);
    elState.x = _closestTenth(result.x, 0.01);
    elState.y = _closestTenth(result.y, 0.01);
    return element;
  };
  var _filterComps = function _filterComps2(comps, targets) {
    if (targets !== true) {
      targets = _toArray2(targets);
      comps = comps.filter(function(c2) {
        if (targets.indexOf((c2.sd < 0 ? c2.b : c2.a).element) !== -1) {
          return true;
        } else {
          c2.t._gsap.renderTransform(1);
          if (c2.b.isVisible) {
            c2.t.style.width = c2.b.width + "px";
            c2.t.style.height = c2.b.height + "px";
          }
        }
      });
    }
    return comps;
  };
  var _makeCompsAbsolute = function _makeCompsAbsolute2(comps) {
    return _orderByDOMDepth(comps, true).forEach(function(c2) {
      return (c2.a.isVisible || c2.b.isVisible) && _makeAbsolute(c2.sd < 0 ? c2.b : c2.a, c2.b, 1);
    });
  };
  var _findElStateInState = function _findElStateInState2(state, other) {
    return other && state.idLookup[_parseElementState(other).id] || state.elementStates[0];
  };
  var _parseElementState = function _parseElementState2(elOrNode, props, simple, other) {
    return elOrNode instanceof ElementState ? elOrNode : elOrNode instanceof FlipState ? _findElStateInState(elOrNode, other) : new ElementState(typeof elOrNode === "string" ? _getEl(elOrNode) || console.warn(elOrNode + " not found") : elOrNode, props, simple);
  };
  var _recordProps = function _recordProps2(elState, props) {
    var getProp = gsap4.getProperty(elState.element, null, "native"), obj = elState.props = {}, i3 = props.length;
    while (i3--) {
      obj[props[i3]] = (getProp(props[i3]) + "").trim();
    }
    obj.zIndex && (obj.zIndex = parseFloat(obj.zIndex) || 0);
    return elState;
  };
  var _applyProps = function _applyProps2(element, props) {
    var style = element.style || element, p2;
    for (p2 in props) {
      style[p2] = props[p2];
    }
  };
  var _getID = function _getID2(el) {
    var id = el.getAttribute("data-flip-id");
    id || el.setAttribute("data-flip-id", id = "auto-" + _id++);
    return id;
  };
  var _elementsFromElementStates = function _elementsFromElementStates2(elStates) {
    return elStates.map(function(elState) {
      return elState.element;
    });
  };
  var _handleCallback = function _handleCallback2(callback, elStates, tl) {
    return callback && elStates.length && tl.add(callback(_elementsFromElementStates(elStates), tl, new FlipState(elStates, 0, true)), 0);
  };
  var _fit = function _fit2(fromState, toState, scale, applyProps, fitChild, vars) {
    var element = fromState.element, cache = fromState.cache, parent = fromState.parent, x2 = fromState.x, y = fromState.y, width = toState.width, height = toState.height, scaleX = toState.scaleX, scaleY = toState.scaleY, rotation = toState.rotation, bounds = toState.bounds, styles = vars && _getStyleSaver3 && _getStyleSaver3(element, "transform"), dimensionState = fromState, _toState$matrix = toState.matrix, e2 = _toState$matrix.e, f2 = _toState$matrix.f, deep = fromState.bounds.width !== bounds.width || fromState.bounds.height !== bounds.height || fromState.scaleX !== scaleX || fromState.scaleY !== scaleY || fromState.rotation !== rotation, simple = !deep && fromState.simple && toState.simple && !fitChild, skewX, fromPoint, toPoint, getProp, parentMatrix, matrix, bbox;
    if (simple || !parent) {
      scaleX = scaleY = 1;
      rotation = skewX = 0;
    } else {
      parentMatrix = _getInverseGlobalMatrix(parent);
      matrix = parentMatrix.clone().multiply(toState.ctm ? toState.matrix.clone().multiply(toState.ctm) : toState.matrix);
      rotation = _round5(Math.atan2(matrix.b, matrix.a) * _RAD2DEG2);
      skewX = _round5(Math.atan2(matrix.c, matrix.d) * _RAD2DEG2 + rotation) % 360;
      scaleX = Math.sqrt(Math.pow(matrix.a, 2) + Math.pow(matrix.b, 2));
      scaleY = Math.sqrt(Math.pow(matrix.c, 2) + Math.pow(matrix.d, 2)) * Math.cos(skewX * _DEG2RAD2);
      if (fitChild) {
        fitChild = _toArray2(fitChild)[0];
        getProp = gsap4.getProperty(fitChild);
        bbox = fitChild.getBBox && typeof fitChild.getBBox === "function" && fitChild.getBBox();
        dimensionState = {
          scaleX: getProp("scaleX"),
          scaleY: getProp("scaleY"),
          width: bbox ? bbox.width : Math.ceil(parseFloat(getProp("width", "px"))),
          height: bbox ? bbox.height : parseFloat(getProp("height", "px"))
        };
      }
      cache.rotation = rotation + "deg";
      cache.skewX = skewX + "deg";
    }
    if (scale) {
      scaleX *= width === dimensionState.width || !dimensionState.width ? 1 : width / dimensionState.width;
      scaleY *= height === dimensionState.height || !dimensionState.height ? 1 : height / dimensionState.height;
      cache.scaleX = scaleX;
      cache.scaleY = scaleY;
    } else {
      width = _closestTenth(width * scaleX / dimensionState.scaleX, 0);
      height = _closestTenth(height * scaleY / dimensionState.scaleY, 0);
      element.style.width = width + "px";
      element.style.height = height + "px";
    }
    applyProps && _applyProps(element, toState.props);
    if (simple || !parent) {
      x2 += e2 - fromState.matrix.e;
      y += f2 - fromState.matrix.f;
    } else if (deep || parent !== toState.parent) {
      cache.renderTransform(1, cache);
      matrix = getGlobalMatrix(fitChild || element, false, false, true);
      fromPoint = parentMatrix.apply({
        x: matrix.e,
        y: matrix.f
      });
      toPoint = parentMatrix.apply({
        x: e2,
        y: f2
      });
      x2 += toPoint.x - fromPoint.x;
      y += toPoint.y - fromPoint.y;
    } else {
      parentMatrix.e = parentMatrix.f = 0;
      toPoint = parentMatrix.apply({
        x: e2 - fromState.matrix.e,
        y: f2 - fromState.matrix.f
      });
      x2 += toPoint.x;
      y += toPoint.y;
    }
    x2 = _closestTenth(x2, 0.02);
    y = _closestTenth(y, 0.02);
    if (vars && !(vars instanceof ElementState)) {
      styles && styles.revert();
    } else {
      cache.x = x2 + "px";
      cache.y = y + "px";
      cache.renderTransform(1, cache);
    }
    if (vars) {
      vars.x = x2;
      vars.y = y;
      vars.rotation = rotation;
      vars.skewX = skewX;
      if (scale) {
        vars.scaleX = scaleX;
        vars.scaleY = scaleY;
      } else {
        vars.width = width;
        vars.height = height;
      }
    }
    return vars || cache;
  };
  var _parseState = function _parseState2(targetsOrState, vars) {
    return targetsOrState instanceof FlipState ? targetsOrState : new FlipState(targetsOrState, vars);
  };
  var _getChangingElState = function _getChangingElState2(toState, fromState, id) {
    var to1 = toState.idLookup[id], to2 = toState.alt[id];
    return to2.isVisible && (!(fromState.getElementState(to2.element) || to2).isVisible || !to1.isVisible) ? to2 : to1;
  };
  var _bodyMetrics = [];
  var _bodyProps = "width,height,overflowX,overflowY".split(",");
  var _bodyLocked;
  var _lockBodyScroll = function _lockBodyScroll2(lock) {
    if (lock !== _bodyLocked) {
      var s2 = _body4.style, w = _body4.clientWidth === window.outerWidth, h = _body4.clientHeight === window.outerHeight, i3 = 4;
      if (lock && (w || h)) {
        while (i3--) {
          _bodyMetrics[i3] = s2[_bodyProps[i3]];
        }
        if (w) {
          s2.width = _body4.clientWidth + "px";
          s2.overflowY = "hidden";
        }
        if (h) {
          s2.height = _body4.clientHeight + "px";
          s2.overflowX = "hidden";
        }
        _bodyLocked = lock;
      } else if (_bodyLocked) {
        while (i3--) {
          _bodyMetrics[i3] ? s2[_bodyProps[i3]] = _bodyMetrics[i3] : s2.removeProperty(_camelToDashed(_bodyProps[i3]));
        }
        _bodyLocked = lock;
      }
    }
  };
  var _fromTo = function _fromTo2(fromState, toState, vars, relative) {
    fromState instanceof FlipState && toState instanceof FlipState || console.warn("Not a valid state object.");
    vars = vars || {};
    var _vars = vars, clearProps2 = _vars.clearProps, onEnter = _vars.onEnter, onLeave = _vars.onLeave, absolute = _vars.absolute, absoluteOnLeave = _vars.absoluteOnLeave, custom = _vars.custom, delay = _vars.delay, paused = _vars.paused, repeat = _vars.repeat, repeatDelay = _vars.repeatDelay, yoyo = _vars.yoyo, toggleClass = _vars.toggleClass, nested = _vars.nested, _zIndex = _vars.zIndex, scale = _vars.scale, fade = _vars.fade, stagger = _vars.stagger, spin = _vars.spin, prune = _vars.prune, props = ("props" in vars ? vars : fromState).props, tweenVars = _copy(vars, _reserved), animation = gsap4.timeline({
      delay,
      paused,
      repeat,
      repeatDelay,
      yoyo,
      data: "isFlip"
    }), remainingProps = tweenVars, entering = [], leaving = [], comps = [], swapOutTargets = [], spinNum = spin === true ? 1 : spin || 0, spinFunc = typeof spin === "function" ? spin : function() {
      return spinNum;
    }, interrupted = fromState.interrupted || toState.interrupted, addFunc = animation[relative !== 1 ? "to" : "from"], v, p2, endTime, i3, el, comp, state, targets, finalStates, fromNode, toNode, run, a, b;
    for (p2 in toState.idLookup) {
      toNode = !toState.alt[p2] ? toState.idLookup[p2] : _getChangingElState(toState, fromState, p2);
      el = toNode.element;
      fromNode = fromState.idLookup[p2];
      fromState.alt[p2] && el === fromNode.element && (fromState.alt[p2].isVisible || !toNode.isVisible) && (fromNode = fromState.alt[p2]);
      if (fromNode) {
        comp = {
          t: el,
          b: fromNode,
          a: toNode,
          sd: fromNode.element === el ? 0 : toNode.isVisible ? 1 : -1
        };
        comps.push(comp);
        if (comp.sd) {
          if (comp.sd < 0) {
            comp.b = toNode;
            comp.a = fromNode;
          }
          interrupted && _recordInlineStyles(comp.b, props ? _memoizedRemoveProps[props] : _removeProps);
          fade && comps.push(comp.swap = {
            t: fromNode.element,
            b: comp.b,
            a: comp.a,
            sd: -comp.sd,
            swap: comp
          });
        }
        el._flip = fromNode.element._flip = _batch ? _batch.timeline : animation;
      } else if (toNode.isVisible) {
        comps.push({
          t: el,
          b: _copy(toNode, {
            isVisible: 1
          }),
          a: toNode,
          sd: 0,
          entering: 1
        });
        el._flip = _batch ? _batch.timeline : animation;
      }
    }
    props && (_memoizedProps[props] || _memoizeProps(props)).forEach(function(p3) {
      return tweenVars[p3] = function(i4) {
        return comps[i4].a.props[p3];
      };
    });
    comps.finalStates = finalStates = [];
    run = function run2() {
      _orderByDOMDepth(comps);
      _lockBodyScroll(true);
      for (i3 = 0; i3 < comps.length; i3++) {
        comp = comps[i3];
        a = comp.a;
        b = comp.b;
        if (prune && !a.isDifferent(b) && !comp.entering) {
          comps.splice(i3--, 1);
        } else {
          el = comp.t;
          nested && !(comp.sd < 0) && i3 && (a.matrix = getGlobalMatrix(el, false, false, true));
          if (b.isVisible && a.isVisible) {
            if (comp.sd < 0) {
              state = new ElementState(el, props, fromState.simple);
              _fit(state, a, scale, 0, 0, state);
              state.matrix = getGlobalMatrix(el, false, false, true);
              state.css = comp.b.css;
              comp.a = a = state;
              fade && (el.style.opacity = interrupted ? b.opacity : a.opacity);
              stagger && swapOutTargets.push(el);
            } else if (comp.sd > 0 && fade) {
              el.style.opacity = interrupted ? a.opacity - b.opacity : "0";
            }
            _fit(a, b, scale, props);
          } else if (b.isVisible !== a.isVisible) {
            if (!b.isVisible) {
              a.isVisible && entering.push(a);
              comps.splice(i3--, 1);
            } else if (!a.isVisible) {
              b.css = a.css;
              leaving.push(b);
              comps.splice(i3--, 1);
              absolute && nested && _fit(a, b, scale, props);
            }
          }
          if (!scale) {
            el.style.maxWidth = Math.max(a.width, b.width) + "px";
            el.style.maxHeight = Math.max(a.height, b.height) + "px";
            el.style.minWidth = Math.min(a.width, b.width) + "px";
            el.style.minHeight = Math.min(a.height, b.height) + "px";
          }
          nested && toggleClass && el.classList.add(toggleClass);
        }
        finalStates.push(a);
      }
      var classTargets;
      if (toggleClass) {
        classTargets = finalStates.map(function(s2) {
          return s2.element;
        });
        nested && classTargets.forEach(function(e2) {
          return e2.classList.remove(toggleClass);
        });
      }
      _lockBodyScroll(false);
      if (scale) {
        tweenVars.scaleX = function(i4) {
          return comps[i4].a.scaleX;
        };
        tweenVars.scaleY = function(i4) {
          return comps[i4].a.scaleY;
        };
      } else {
        tweenVars.width = function(i4) {
          return comps[i4].a.width + "px";
        };
        tweenVars.height = function(i4) {
          return comps[i4].a.height + "px";
        };
        tweenVars.autoRound = vars.autoRound || false;
      }
      tweenVars.x = function(i4) {
        return comps[i4].a.x + "px";
      };
      tweenVars.y = function(i4) {
        return comps[i4].a.y + "px";
      };
      tweenVars.rotation = function(i4) {
        return comps[i4].a.rotation + (spin ? spinFunc(i4, targets[i4], targets) * 360 : 0);
      };
      tweenVars.skewX = function(i4) {
        return comps[i4].a.skewX;
      };
      targets = comps.map(function(c2) {
        return c2.t;
      });
      if (_zIndex || _zIndex === 0) {
        tweenVars.modifiers = {
          zIndex: function zIndex() {
            return _zIndex;
          }
        };
        tweenVars.zIndex = _zIndex;
        tweenVars.immediateRender = vars.immediateRender !== false;
      }
      fade && (tweenVars.opacity = function(i4) {
        return comps[i4].sd < 0 ? 0 : comps[i4].sd > 0 ? comps[i4].a.opacity : "+=0";
      });
      if (swapOutTargets.length) {
        stagger = gsap4.utils.distribute(stagger);
        var dummyArray = targets.slice(swapOutTargets.length);
        tweenVars.stagger = function(i4, el2) {
          return stagger(~swapOutTargets.indexOf(el2) ? targets.indexOf(comps[i4].swap.t) : i4, el2, dummyArray);
        };
      }
      _callbacks.forEach(function(name2) {
        return vars[name2] && animation.eventCallback(name2, vars[name2], vars[name2 + "Params"]);
      });
      if (custom && targets.length) {
        remainingProps = _copy(tweenVars, _reserved);
        if ("scale" in custom) {
          custom.scaleX = custom.scaleY = custom.scale;
          delete custom.scale;
        }
        for (p2 in custom) {
          v = _copy(custom[p2], _fitReserved);
          v[p2] = tweenVars[p2];
          !("duration" in v) && "duration" in tweenVars && (v.duration = tweenVars.duration);
          v.stagger = tweenVars.stagger;
          addFunc.call(animation, targets, v, 0);
          delete remainingProps[p2];
        }
      }
      if (targets.length || leaving.length || entering.length) {
        toggleClass && animation.add(function() {
          return _toggleClass(classTargets, toggleClass, animation._zTime < 0 ? "remove" : "add");
        }, 0) && !paused && _toggleClass(classTargets, toggleClass, "add");
        targets.length && addFunc.call(animation, targets, remainingProps, 0);
      }
      _handleCallback(onEnter, entering, animation);
      _handleCallback(onLeave, leaving, animation);
      var batchTl = _batch && _batch.timeline;
      if (batchTl) {
        batchTl.add(animation, 0);
        _batch._final.push(function() {
          return _setFinalStates(comps, !clearProps2);
        });
      }
      endTime = animation.duration();
      animation.call(function() {
        var forward = animation.time() >= endTime;
        forward && !batchTl && _setFinalStates(comps, !clearProps2);
        toggleClass && _toggleClass(classTargets, toggleClass, forward ? "remove" : "add");
      });
    };
    absoluteOnLeave && (absolute = comps.filter(function(comp2) {
      return !comp2.sd && !comp2.a.isVisible && comp2.b.isVisible;
    }).map(function(comp2) {
      return comp2.a.element;
    }));
    if (_batch) {
      var _batch$_abs;
      absolute && (_batch$_abs = _batch._abs).push.apply(_batch$_abs, _filterComps(comps, absolute));
      _batch._run.push(run);
    } else {
      absolute && _makeCompsAbsolute(_filterComps(comps, absolute));
      run();
    }
    var anim = _batch ? _batch.timeline : animation;
    anim.revert = function() {
      return _killFlip(anim, 1, 1);
    };
    return anim;
  };
  var _interrupt3 = function _interrupt4(tl) {
    tl.vars.onInterrupt && tl.vars.onInterrupt.apply(tl, tl.vars.onInterruptParams || []);
    tl.getChildren(true, false, true).forEach(_interrupt4);
  };
  var _killFlip = function _killFlip2(tl, action, force) {
    if (tl && tl.progress() < 1 && (!tl.paused() || force)) {
      if (action) {
        _interrupt3(tl);
        action < 2 && tl.progress(1);
        tl.kill();
      }
      return true;
    }
  };
  var _createLookup = function _createLookup2(state) {
    var lookup = state.idLookup = {}, alt = state.alt = {}, elStates = state.elementStates, i3 = elStates.length, elState;
    while (i3--) {
      elState = elStates[i3];
      lookup[elState.id] ? alt[elState.id] = elState : lookup[elState.id] = elState;
    }
  };
  var FlipState = /* @__PURE__ */ function() {
    function FlipState2(targets, vars, targetsAreElementStates) {
      this.props = vars && vars.props;
      this.simple = !!(vars && vars.simple);
      if (targetsAreElementStates) {
        this.targets = _elementsFromElementStates(targets);
        this.elementStates = targets;
        _createLookup(this);
      } else {
        this.targets = _toArray2(targets);
        var soft = vars && (vars.kill === false || vars.batch && !vars.kill);
        _batch && !soft && _batch._kill.push(this);
        this.update(soft || !!_batch);
      }
    }
    var _proto = FlipState2.prototype;
    _proto.update = function update2(soft) {
      var _this = this;
      this.elementStates = this.targets.map(function(el) {
        return new ElementState(el, _this.props, _this.simple);
      });
      _createLookup(this);
      this.interrupt(soft);
      this.recordInlineStyles();
      return this;
    };
    _proto.clear = function clear() {
      this.targets.length = this.elementStates.length = 0;
      _createLookup(this);
      return this;
    };
    _proto.fit = function fit(state, scale, nested) {
      var elStatesInOrder = _orderByDOMDepth(this.elementStates.slice(0), false, true), toElStates = (state || this).idLookup, i3 = 0, fromNode, toNode;
      for (; i3 < elStatesInOrder.length; i3++) {
        fromNode = elStatesInOrder[i3];
        nested && (fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true));
        toNode = toElStates[fromNode.id];
        toNode && _fit(fromNode, toNode, scale, true, 0, fromNode);
        fromNode.matrix = getGlobalMatrix(fromNode.element, false, false, true);
      }
      return this;
    };
    _proto.getProperty = function getProperty2(element, property) {
      var es = this.getElementState(element) || _emptyObj;
      return (property in es ? es : es.props || _emptyObj)[property];
    };
    _proto.add = function add(state) {
      var i3 = state.targets.length, lookup = this.idLookup, alt = this.alt, index, es, es2;
      while (i3--) {
        es = state.elementStates[i3];
        es2 = lookup[es.id];
        if (es2 && (es.element === es2.element || alt[es.id] && alt[es.id].element === es.element)) {
          index = this.elementStates.indexOf(es.element === es2.element ? es2 : alt[es.id]);
          this.targets.splice(index, 1, state.targets[i3]);
          this.elementStates.splice(index, 1, es);
        } else {
          this.targets.push(state.targets[i3]);
          this.elementStates.push(es);
        }
      }
      state.interrupted && (this.interrupted = true);
      state.simple || (this.simple = false);
      _createLookup(this);
      return this;
    };
    _proto.compare = function compare(state) {
      var l1 = state.idLookup, l2 = this.idLookup, unchanged = [], changed = [], enter = [], leave = [], targets = [], a1 = state.alt, a2 = this.alt, place = function place2(s12, s22, el2) {
        return (s12.isVisible !== s22.isVisible ? s12.isVisible ? enter : leave : s12.isVisible ? changed : unchanged).push(el2) && targets.push(el2);
      }, placeIfDoesNotExist = function placeIfDoesNotExist2(s12, s22, el2) {
        return targets.indexOf(el2) < 0 && place(s12, s22, el2);
      }, s1, s2, p2, el, s1Alt, s2Alt, c1, c2;
      for (p2 in l1) {
        s1Alt = a1[p2];
        s2Alt = a2[p2];
        s1 = !s1Alt ? l1[p2] : _getChangingElState(state, this, p2);
        el = s1.element;
        s2 = l2[p2];
        if (s2Alt) {
          c2 = s2.isVisible || !s2Alt.isVisible && el === s2.element ? s2 : s2Alt;
          c1 = s1Alt && !s1.isVisible && !s1Alt.isVisible && c2.element === s1Alt.element ? s1Alt : s1;
          if (c1.isVisible && c2.isVisible && c1.element !== c2.element) {
            (c1.isDifferent(c2) ? changed : unchanged).push(c1.element, c2.element);
            targets.push(c1.element, c2.element);
          } else {
            place(c1, c2, c1.element);
          }
          s1Alt && c1.element === s1Alt.element && (s1Alt = l1[p2]);
          placeIfDoesNotExist(c1.element !== s2.element && s1Alt ? s1Alt : c1, s2, s2.element);
          placeIfDoesNotExist(s1Alt && s1Alt.element === s2Alt.element ? s1Alt : c1, s2Alt, s2Alt.element);
          s1Alt && placeIfDoesNotExist(s1Alt, s2Alt.element === s1Alt.element ? s2Alt : s2, s1Alt.element);
        } else {
          !s2 ? enter.push(el) : !s2.isDifferent(s1) ? unchanged.push(el) : place(s1, s2, el);
          s1Alt && placeIfDoesNotExist(s1Alt, s2, s1Alt.element);
        }
      }
      for (p2 in l2) {
        if (!l1[p2]) {
          leave.push(l2[p2].element);
          a2[p2] && leave.push(a2[p2].element);
        }
      }
      return {
        changed,
        unchanged,
        enter,
        leave
      };
    };
    _proto.recordInlineStyles = function recordInlineStyles() {
      var props = _memoizedRemoveProps[this.props] || _removeProps, i3 = this.elementStates.length;
      while (i3--) {
        _recordInlineStyles(this.elementStates[i3], props);
      }
    };
    _proto.interrupt = function interrupt(soft) {
      var _this2 = this;
      var timelines = [];
      this.targets.forEach(function(t2) {
        var tl = t2._flip, foundInProgress = _killFlip(tl, soft ? 0 : 1);
        soft && foundInProgress && timelines.indexOf(tl) < 0 && tl.add(function() {
          return _this2.updateVisibility();
        });
        foundInProgress && timelines.push(tl);
      });
      !soft && timelines.length && this.updateVisibility();
      this.interrupted || (this.interrupted = !!timelines.length);
    };
    _proto.updateVisibility = function updateVisibility() {
      this.elementStates.forEach(function(es) {
        var b = es.element.getBoundingClientRect();
        es.isVisible = !!(b.width || b.height || b.top || b.left);
        es.uncache = 1;
      });
    };
    _proto.getElementState = function getElementState(element) {
      return this.elementStates[this.targets.indexOf(_getEl(element))];
    };
    _proto.makeAbsolute = function makeAbsolute() {
      return _orderByDOMDepth(this.elementStates.slice(0), true, true).map(_makeAbsolute);
    };
    return FlipState2;
  }();
  var ElementState = /* @__PURE__ */ function() {
    function ElementState2(element, props, simple) {
      this.element = element;
      this.update(props, simple);
    }
    var _proto2 = ElementState2.prototype;
    _proto2.isDifferent = function isDifferent(state) {
      var b1 = this.bounds, b2 = state.bounds;
      return b1.top !== b2.top || b1.left !== b2.left || b1.width !== b2.width || b1.height !== b2.height || !this.matrix.equals(state.matrix) || this.opacity !== state.opacity || this.props && state.props && JSON.stringify(this.props) !== JSON.stringify(state.props);
    };
    _proto2.update = function update2(props, simple) {
      var self2 = this, element = self2.element, getProp = gsap4.getProperty(element), cache = gsap4.core.getCache(element), bounds = element.getBoundingClientRect(), bbox = element.getBBox && typeof element.getBBox === "function" && element.nodeName.toLowerCase() !== "svg" && element.getBBox(), m2 = simple ? new Matrix2D(1, 0, 0, 1, bounds.left + _getDocScrollLeft(), bounds.top + _getDocScrollTop()) : getGlobalMatrix(element, false, false, true);
      self2.getProp = getProp;
      self2.element = element;
      self2.id = _getID(element);
      self2.matrix = m2;
      self2.cache = cache;
      self2.bounds = bounds;
      self2.isVisible = !!(bounds.width || bounds.height || bounds.left || bounds.top);
      self2.display = getProp("display");
      self2.position = getProp("position");
      self2.parent = element.parentNode;
      self2.x = getProp("x");
      self2.y = getProp("y");
      self2.scaleX = cache.scaleX;
      self2.scaleY = cache.scaleY;
      self2.rotation = getProp("rotation");
      self2.skewX = getProp("skewX");
      self2.opacity = getProp("opacity");
      self2.width = bbox ? bbox.width : _closestTenth(getProp("width", "px"), 0.04);
      self2.height = bbox ? bbox.height : _closestTenth(getProp("height", "px"), 0.04);
      props && _recordProps(self2, _memoizedProps[props] || _memoizeProps(props));
      self2.ctm = element.getCTM && element.nodeName.toLowerCase() === "svg" && _getCTM(element).inverse();
      self2.simple = simple || _round5(m2.a) === 1 && !_round5(m2.b) && !_round5(m2.c) && _round5(m2.d) === 1;
      self2.uncache = 0;
    };
    return ElementState2;
  }();
  var FlipAction = /* @__PURE__ */ function() {
    function FlipAction2(vars, batch) {
      this.vars = vars;
      this.batch = batch;
      this.states = [];
      this.timeline = batch.timeline;
    }
    var _proto3 = FlipAction2.prototype;
    _proto3.getStateById = function getStateById(id) {
      var i3 = this.states.length;
      while (i3--) {
        if (this.states[i3].idLookup[id]) {
          return this.states[i3];
        }
      }
    };
    _proto3.kill = function kill() {
      this.batch.remove(this);
    };
    return FlipAction2;
  }();
  var FlipBatch = /* @__PURE__ */ function() {
    function FlipBatch2(id) {
      this.id = id;
      this.actions = [];
      this._kill = [];
      this._final = [];
      this._abs = [];
      this._run = [];
      this.data = {};
      this.state = new FlipState();
      this.timeline = gsap4.timeline();
    }
    var _proto4 = FlipBatch2.prototype;
    _proto4.add = function add(config3) {
      var result = this.actions.filter(function(action) {
        return action.vars === config3;
      });
      if (result.length) {
        return result[0];
      }
      result = new FlipAction(typeof config3 === "function" ? {
        animate: config3
      } : config3, this);
      this.actions.push(result);
      return result;
    };
    _proto4.remove = function remove(action) {
      var i3 = this.actions.indexOf(action);
      i3 >= 0 && this.actions.splice(i3, 1);
      return this;
    };
    _proto4.getState = function getState(merge) {
      var _this3 = this;
      var prevBatch = _batch, prevAction = _batchAction;
      _batch = this;
      this.state.clear();
      this._kill.length = 0;
      this.actions.forEach(function(action) {
        if (action.vars.getState) {
          action.states.length = 0;
          _batchAction = action;
          action.state = action.vars.getState(action);
        }
        merge && action.states.forEach(function(s2) {
          return _this3.state.add(s2);
        });
      });
      _batchAction = prevAction;
      _batch = prevBatch;
      this.killConflicts();
      return this;
    };
    _proto4.animate = function animate() {
      var _this4 = this;
      var prevBatch = _batch, tl = this.timeline, i3 = this.actions.length, finalStates, endTime;
      _batch = this;
      tl.clear();
      this._abs.length = this._final.length = this._run.length = 0;
      this.actions.forEach(function(a) {
        a.vars.animate && a.vars.animate(a);
        var onEnter = a.vars.onEnter, onLeave = a.vars.onLeave, targets = a.targets, s2, result;
        if (targets && targets.length && (onEnter || onLeave)) {
          s2 = new FlipState();
          a.states.forEach(function(state) {
            return s2.add(state);
          });
          result = s2.compare(Flip.getState(targets));
          result.enter.length && onEnter && onEnter(result.enter);
          result.leave.length && onLeave && onLeave(result.leave);
        }
      });
      _makeCompsAbsolute(this._abs);
      this._run.forEach(function(f2) {
        return f2();
      });
      endTime = tl.duration();
      finalStates = this._final.slice(0);
      tl.add(function() {
        if (endTime <= tl.time()) {
          finalStates.forEach(function(f2) {
            return f2();
          });
          _forEachBatch(_this4, "onComplete");
        }
      });
      _batch = prevBatch;
      while (i3--) {
        this.actions[i3].vars.once && this.actions[i3].kill();
      }
      _forEachBatch(this, "onStart");
      tl.restart();
      return this;
    };
    _proto4.loadState = function loadState(done) {
      done || (done = function done2() {
        return 0;
      });
      var queue = [];
      this.actions.forEach(function(c2) {
        if (c2.vars.loadState) {
          var i3, f2 = function f3(targets) {
            targets && (c2.targets = targets);
            i3 = queue.indexOf(f3);
            if (~i3) {
              queue.splice(i3, 1);
              queue.length || done();
            }
          };
          queue.push(f2);
          c2.vars.loadState(f2);
        }
      });
      queue.length || done();
      return this;
    };
    _proto4.setState = function setState() {
      this.actions.forEach(function(c2) {
        return c2.targets = c2.vars.setState && c2.vars.setState(c2);
      });
      return this;
    };
    _proto4.killConflicts = function killConflicts(soft) {
      this.state.interrupt(soft);
      this._kill.forEach(function(state) {
        return state.interrupt(soft);
      });
      return this;
    };
    _proto4.run = function run(skipGetState, merge) {
      var _this5 = this;
      if (this !== _batch) {
        skipGetState || this.getState(merge);
        this.loadState(function() {
          if (!_this5._killed) {
            _this5.setState();
            _this5.animate();
          }
        });
      }
      return this;
    };
    _proto4.clear = function clear(stateOnly) {
      this.state.clear();
      stateOnly || (this.actions.length = 0);
    };
    _proto4.getStateById = function getStateById(id) {
      var i3 = this.actions.length, s2;
      while (i3--) {
        s2 = this.actions[i3].getStateById(id);
        if (s2) {
          return s2;
        }
      }
      return this.state.idLookup[id] && this.state;
    };
    _proto4.kill = function kill() {
      this._killed = 1;
      this.clear();
      delete _batchLookup[this.id];
    };
    return FlipBatch2;
  }();
  var Flip = /* @__PURE__ */ function() {
    function Flip2() {
    }
    Flip2.getState = function getState(targets, vars) {
      var state = _parseState(targets, vars);
      _batchAction && _batchAction.states.push(state);
      vars && vars.batch && Flip2.batch(vars.batch).state.add(state);
      return state;
    };
    Flip2.from = function from(state, vars) {
      vars = vars || {};
      "clearProps" in vars || (vars.clearProps = true);
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, -1);
    };
    Flip2.to = function to(state, vars) {
      return _fromTo(state, _parseState(vars.targets || state.targets, {
        props: vars.props || state.props,
        simple: vars.simple,
        kill: !!vars.kill
      }), vars, 1);
    };
    Flip2.fromTo = function fromTo(fromState, toState, vars) {
      return _fromTo(fromState, toState, vars);
    };
    Flip2.fit = function fit(fromEl, toEl, vars) {
      var v = vars ? _copy(vars, _fitReserved) : {}, _ref = vars || v, absolute = _ref.absolute, scale = _ref.scale, getVars = _ref.getVars, props = _ref.props, runBackwards = _ref.runBackwards, onComplete = _ref.onComplete, simple = _ref.simple, fitChild = vars && vars.fitChild && _getEl(vars.fitChild), before = _parseElementState(toEl, props, simple, fromEl), after = _parseElementState(fromEl, 0, simple, before), inlineProps = props ? _memoizedRemoveProps[props] : _removeProps, ctx = gsap4.context();
      props && _applyProps(v, before.props);
      _recordInlineStyles(after, inlineProps);
      if (runBackwards) {
        "immediateRender" in v || (v.immediateRender = true);
        v.onComplete = function() {
          _applyInlineStyles(after);
          onComplete && onComplete.apply(this, arguments);
        };
      }
      absolute && _makeAbsolute(after, before);
      v = _fit(after, before, scale || fitChild, props, fitChild, v.duration || getVars ? v : 0);
      ctx && !getVars && ctx.add(function() {
        return function() {
          return _applyInlineStyles(after);
        };
      });
      return getVars ? v : v.duration ? gsap4.to(after.element, v) : null;
    };
    Flip2.makeAbsolute = function makeAbsolute(targetsOrStates, vars) {
      return (targetsOrStates instanceof FlipState ? targetsOrStates : new FlipState(targetsOrStates, vars)).makeAbsolute();
    };
    Flip2.batch = function batch(id) {
      id || (id = "default");
      return _batchLookup[id] || (_batchLookup[id] = new FlipBatch(id));
    };
    Flip2.killFlipsOf = function killFlipsOf(targets, complete) {
      (targets instanceof FlipState ? targets.targets : _toArray2(targets)).forEach(function(t2) {
        return t2 && _killFlip(t2._flip, complete !== false ? 1 : 2);
      });
    };
    Flip2.isFlipping = function isFlipping(target) {
      var f2 = Flip2.getByTarget(target);
      return !!f2 && f2.isActive();
    };
    Flip2.getByTarget = function getByTarget(target) {
      return (_getEl(target) || _emptyObj)._flip;
    };
    Flip2.getElementState = function getElementState(target, props) {
      return new ElementState(_getEl(target), props);
    };
    Flip2.convertCoordinates = function convertCoordinates(fromElement, toElement, point) {
      var m2 = getGlobalMatrix(toElement, true, true).multiply(getGlobalMatrix(fromElement));
      return point ? m2.apply(point) : m2;
    };
    Flip2.register = function register(core) {
      _body4 = typeof document !== "undefined" && document.body;
      if (_body4) {
        gsap4 = core;
        _setDoc(_body4);
        _toArray2 = gsap4.utils.toArray;
        _getStyleSaver3 = gsap4.core.getStyleSaver;
        var snap3 = gsap4.utils.snap(0.1);
        _closestTenth = function _closestTenth2(value, add) {
          return snap3(parseFloat(value) + add);
        };
      }
    };
    return Flip2;
  }();
  Flip.version = "3.12.5";
  typeof window !== "undefined" && window.gsap && window.gsap.registerPlugin(Flip);

  // src/utils/rightMenu.ts
  function rightMenu() {
    gsapWithCSS.registerPlugin(Flip);
    $(".bio_content-element").on("mouseenter", function() {
      const state = Flip.getState(".bio_content-element, .tab_name, .image_content", {
        props: "fontSize,padding"
      });
      $(this).siblings().addClass("closed");
      $(this).removeClass("closed");
      $(this).siblings().addClass("hide-text");
      Flip.from(state, {
        duration: 1.5,
        nested: true,
        absolute: true,
        ease: "power1.inOut"
      });
    });
  }

  // src/utils/scrollEffect.ts
  init_live_reload();

  // node_modules/.pnpm/lenis@1.1.14/node_modules/lenis/dist/lenis.mjs
  init_live_reload();
  var version = "1.1.14";
  function clamp3(min, input, max) {
    return Math.max(min, Math.min(input, max));
  }
  function lerp(x2, y, t2) {
    return (1 - t2) * x2 + t2 * y;
  }
  function damp(x2, y, lambda, deltaTime) {
    return lerp(x2, y, 1 - Math.exp(-lambda * deltaTime));
  }
  function modulo(n, d2) {
    return (n % d2 + d2) % d2;
  }
  var Animate = class {
    isRunning = false;
    value = 0;
    from = 0;
    to = 0;
    currentTime = 0;
    // These are instanciated in the fromTo method
    lerp;
    duration;
    easing;
    onUpdate;
    /**
     * Advance the animation by the given delta time
     *
     * @param deltaTime - The time in seconds to advance the animation
     */
    advance(deltaTime) {
      if (!this.isRunning)
        return;
      let completed = false;
      if (this.duration && this.easing) {
        this.currentTime += deltaTime;
        const linearProgress = clamp3(0, this.currentTime / this.duration, 1);
        completed = linearProgress >= 1;
        const easedProgress = completed ? 1 : this.easing(linearProgress);
        this.value = this.from + (this.to - this.from) * easedProgress;
      } else if (this.lerp) {
        this.value = damp(this.value, this.to, this.lerp * 60, deltaTime);
        if (Math.round(this.value) === this.to) {
          this.value = this.to;
          completed = true;
        }
      } else {
        this.value = this.to;
        completed = true;
      }
      if (completed) {
        this.stop();
      }
      this.onUpdate?.(this.value, completed);
    }
    /** Stop the animation */
    stop() {
      this.isRunning = false;
    }
    /**
     * Set up the animation from a starting value to an ending value
     * with optional parameters for lerping, duration, easing, and onUpdate callback
     *
     * @param from - The starting value
     * @param to - The ending value
     * @param options - Options for the animation
     */
    fromTo(from, to, { lerp: lerp2, duration, easing, onStart, onUpdate }) {
      this.from = this.value = from;
      this.to = to;
      this.lerp = lerp2;
      this.duration = duration;
      this.easing = easing;
      this.currentTime = 0;
      this.isRunning = true;
      onStart?.();
      this.onUpdate = onUpdate;
    }
  };
  function debounce(callback, delay) {
    let timer;
    return function(...args) {
      let context3 = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = void 0;
        callback.apply(context3, args);
      }, delay);
    };
  }
  var Dimensions = class {
    constructor(wrapper, content, { autoResize = true, debounce: debounceValue = 250 } = {}) {
      this.wrapper = wrapper;
      this.content = content;
      if (autoResize) {
        this.debouncedResize = debounce(this.resize, debounceValue);
        if (this.wrapper instanceof Window) {
          window.addEventListener("resize", this.debouncedResize, false);
        } else {
          this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize);
          this.wrapperResizeObserver.observe(this.wrapper);
        }
        this.contentResizeObserver = new ResizeObserver(this.debouncedResize);
        this.contentResizeObserver.observe(this.content);
      }
      this.resize();
    }
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    // These are instanciated in the constructor as they need information from the options
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    destroy() {
      this.wrapperResizeObserver?.disconnect();
      this.contentResizeObserver?.disconnect();
      if (this.wrapper === window && this.debouncedResize) {
        window.removeEventListener("resize", this.debouncedResize, false);
      }
    }
    resize = () => {
      this.onWrapperResize();
      this.onContentResize();
    };
    onWrapperResize = () => {
      if (this.wrapper instanceof Window) {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
      } else {
        this.width = this.wrapper.clientWidth;
        this.height = this.wrapper.clientHeight;
      }
    };
    onContentResize = () => {
      if (this.wrapper instanceof Window) {
        this.scrollHeight = this.content.scrollHeight;
        this.scrollWidth = this.content.scrollWidth;
      } else {
        this.scrollHeight = this.wrapper.scrollHeight;
        this.scrollWidth = this.wrapper.scrollWidth;
      }
    };
    get limit() {
      return {
        x: this.scrollWidth - this.width,
        y: this.scrollHeight - this.height
      };
    }
  };
  var Emitter = class {
    events = {};
    /**
     * Emit an event with the given data
     * @param event Event name
     * @param args Data to pass to the event handlers
     */
    emit(event2, ...args) {
      let callbacks = this.events[event2] || [];
      for (let i3 = 0, length = callbacks.length; i3 < length; i3++) {
        callbacks[i3]?.(...args);
      }
    }
    /**
     * Add a callback to the event
     * @param event Event name
     * @param cb Callback function
     * @returns Unsubscribe function
     */
    on(event2, cb) {
      this.events[event2]?.push(cb) || (this.events[event2] = [cb]);
      return () => {
        this.events[event2] = this.events[event2]?.filter((i3) => cb !== i3);
      };
    }
    /**
     * Remove a callback from the event
     * @param event Event name
     * @param callback Callback function
     */
    off(event2, callback) {
      this.events[event2] = this.events[event2]?.filter((i3) => callback !== i3);
    }
    /**
     * Remove all event listeners and clean up
     */
    destroy() {
      this.events = {};
    }
  };
  var LINE_HEIGHT = 100 / 6;
  var listenerOptions = { passive: false };
  var VirtualScroll = class {
    constructor(element, options = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      this.element = element;
      this.options = options;
      window.addEventListener("resize", this.onWindowResize, false);
      this.onWindowResize();
      this.element.addEventListener("wheel", this.onWheel, listenerOptions);
      this.element.addEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.addEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.addEventListener("touchend", this.onTouchEnd, listenerOptions);
    }
    touchStart = {
      x: 0,
      y: 0
    };
    lastDelta = {
      x: 0,
      y: 0
    };
    window = {
      width: 0,
      height: 0
    };
    emitter = new Emitter();
    /**
     * Add an event listener for the given event and callback
     *
     * @param event Event name
     * @param callback Callback function
     */
    on(event2, callback) {
      return this.emitter.on(event2, callback);
    }
    /** Remove all event listeners and clean up */
    destroy() {
      this.emitter.destroy();
      window.removeEventListener("resize", this.onWindowResize, false);
      this.element.removeEventListener("wheel", this.onWheel, listenerOptions);
      this.element.removeEventListener(
        "touchstart",
        this.onTouchStart,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchmove",
        this.onTouchMove,
        listenerOptions
      );
      this.element.removeEventListener(
        "touchend",
        this.onTouchEnd,
        listenerOptions
      );
    }
    /**
     * Event handler for 'touchstart' event
     *
     * @param event Touch event
     */
    onTouchStart = (event2) => {
      const { clientX, clientY } = event2.targetTouches ? event2.targetTouches[0] : event2;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: 0,
        y: 0
      };
      this.emitter.emit("scroll", {
        deltaX: 0,
        deltaY: 0,
        event: event2
      });
    };
    /** Event handler for 'touchmove' event */
    onTouchMove = (event2) => {
      const { clientX, clientY } = event2.targetTouches ? event2.targetTouches[0] : event2;
      const deltaX = -(clientX - this.touchStart.x) * this.options.touchMultiplier;
      const deltaY = -(clientY - this.touchStart.y) * this.options.touchMultiplier;
      this.touchStart.x = clientX;
      this.touchStart.y = clientY;
      this.lastDelta = {
        x: deltaX,
        y: deltaY
      };
      this.emitter.emit("scroll", {
        deltaX,
        deltaY,
        event: event2
      });
    };
    onTouchEnd = (event2) => {
      this.emitter.emit("scroll", {
        deltaX: this.lastDelta.x,
        deltaY: this.lastDelta.y,
        event: event2
      });
    };
    /** Event handler for 'wheel' event */
    onWheel = (event2) => {
      let { deltaX, deltaY, deltaMode } = event2;
      const multiplierX = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.width : 1;
      const multiplierY = deltaMode === 1 ? LINE_HEIGHT : deltaMode === 2 ? this.window.height : 1;
      deltaX *= multiplierX;
      deltaY *= multiplierY;
      deltaX *= this.options.wheelMultiplier;
      deltaY *= this.options.wheelMultiplier;
      this.emitter.emit("scroll", { deltaX, deltaY, event: event2 });
    };
    onWindowResize = () => {
      this.window = {
        width: window.innerWidth,
        height: window.innerHeight
      };
    };
  };
  var Lenis = class {
    _isScrolling = false;
    // true when scroll is animating
    _isStopped = false;
    // true if user should not be able to scroll - enable/disable programmatically
    _isLocked = false;
    // same as isStopped but enabled/disabled when scroll reaches target
    _preventNextNativeScrollEvent = false;
    _resetVelocityTimeout = null;
    /**
     * Whether or not the user is touching the screen
     */
    isTouching;
    /**
     * The time in ms since the lenis instance was created
     */
    time = 0;
    /**
     * User data that will be forwarded through the scroll event
     *
     * @example
     * lenis.scrollTo(100, {
     *   userData: {
     *     foo: 'bar'
     *   }
     * })
     */
    userData = {};
    /**
     * The last velocity of the scroll
     */
    lastVelocity = 0;
    /**
     * The current velocity of the scroll
     */
    velocity = 0;
    /**
     * The direction of the scroll
     */
    direction = 0;
    /**
     * The options passed to the lenis instance
     */
    options;
    /**
     * The target scroll value
     */
    targetScroll;
    /**
     * The animated scroll value
     */
    animatedScroll;
    // These are instanciated here as they don't need information from the options
    animate = new Animate();
    emitter = new Emitter();
    // These are instanciated in the constructor as they need information from the options
    dimensions;
    // This is not private because it's used in the Snap class
    virtualScroll;
    constructor({
      wrapper = window,
      content = document.documentElement,
      eventsTarget = wrapper,
      smoothWheel = true,
      syncTouch = false,
      syncTouchLerp = 0.075,
      touchInertiaMultiplier = 35,
      duration,
      // in seconds
      easing = (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)),
      lerp: lerp2 = 0.1,
      infinite = false,
      orientation = "vertical",
      // vertical, horizontal
      gestureOrientation = "vertical",
      // vertical, horizontal, both
      touchMultiplier = 1,
      wheelMultiplier = 1,
      autoResize = true,
      prevent,
      virtualScroll,
      overscroll = true,
      __experimental__naiveDimensions = false
    } = {}) {
      window.lenisVersion = version;
      if (!wrapper || wrapper === document.documentElement || wrapper === document.body) {
        wrapper = window;
      }
      this.options = {
        wrapper,
        content,
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaMultiplier,
        duration,
        easing,
        lerp: lerp2,
        infinite,
        gestureOrientation,
        orientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        __experimental__naiveDimensions
      };
      this.dimensions = new Dimensions(wrapper, content, { autoResize });
      this.updateClassName();
      this.targetScroll = this.animatedScroll = this.actualScroll;
      this.options.wrapper.addEventListener("scroll", this.onNativeScroll, false);
      this.options.wrapper.addEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll = new VirtualScroll(eventsTarget, {
        touchMultiplier,
        wheelMultiplier
      });
      this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    /**
     * Destroy the lenis instance, remove all event listeners and clean up the class name
     */
    destroy() {
      this.emitter.destroy();
      this.options.wrapper.removeEventListener(
        "scroll",
        this.onNativeScroll,
        false
      );
      this.options.wrapper.removeEventListener(
        "pointerdown",
        this.onPointerDown,
        false
      );
      this.virtualScroll.destroy();
      this.dimensions.destroy();
      this.cleanUpClassName();
    }
    on(event2, callback) {
      return this.emitter.on(event2, callback);
    }
    off(event2, callback) {
      return this.emitter.off(event2, callback);
    }
    setScroll(scroll) {
      if (this.isHorizontal) {
        this.rootElement.scrollLeft = scroll;
      } else {
        this.rootElement.scrollTop = scroll;
      }
    }
    onPointerDown = (event2) => {
      if (event2.button === 1) {
        this.reset();
      }
    };
    onVirtualScroll = (data) => {
      if (typeof this.options.virtualScroll === "function" && this.options.virtualScroll(data) === false)
        return;
      const { deltaX, deltaY, event: event2 } = data;
      this.emitter.emit("virtual-scroll", { deltaX, deltaY, event: event2 });
      if (event2.ctrlKey)
        return;
      if (event2.lenisStopPropagation)
        return;
      const isTouch = event2.type.includes("touch");
      const isWheel = event2.type.includes("wheel");
      this.isTouching = event2.type === "touchstart" || event2.type === "touchmove";
      const isTapToStop = this.options.syncTouch && isTouch && event2.type === "touchstart" && !this.isStopped && !this.isLocked;
      if (isTapToStop) {
        this.reset();
        return;
      }
      const isClick = deltaX === 0 && deltaY === 0;
      const isUnknownGesture = this.options.gestureOrientation === "vertical" && deltaY === 0 || this.options.gestureOrientation === "horizontal" && deltaX === 0;
      if (isClick || isUnknownGesture) {
        return;
      }
      let composedPath = event2.composedPath();
      composedPath = composedPath.slice(0, composedPath.indexOf(this.rootElement));
      const prevent = this.options.prevent;
      if (!!composedPath.find(
        (node) => node instanceof HTMLElement && (typeof prevent === "function" && prevent?.(node) || node.hasAttribute?.("data-lenis-prevent") || isTouch && node.hasAttribute?.("data-lenis-prevent-touch") || isWheel && node.hasAttribute?.("data-lenis-prevent-wheel"))
      ))
        return;
      if (this.isStopped || this.isLocked) {
        event2.preventDefault();
        return;
      }
      const isSmooth = this.options.syncTouch && isTouch || this.options.smoothWheel && isWheel;
      if (!isSmooth) {
        this.isScrolling = "native";
        this.animate.stop();
        event2.lenisStopPropagation = true;
        return;
      }
      let delta = deltaY;
      if (this.options.gestureOrientation === "both") {
        delta = Math.abs(deltaY) > Math.abs(deltaX) ? deltaY : deltaX;
      } else if (this.options.gestureOrientation === "horizontal") {
        delta = deltaX;
      }
      if (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && (this.animatedScroll > 0 && this.animatedScroll < this.limit || this.animatedScroll === 0 && deltaY > 0 || this.animatedScroll === this.limit && deltaY < 0)) {
        event2.lenisStopPropagation = true;
      }
      event2.preventDefault();
      const syncTouch = isTouch && this.options.syncTouch;
      const isTouchEnd = isTouch && event2.type === "touchend";
      const hasTouchInertia = isTouchEnd && Math.abs(delta) > 5;
      if (hasTouchInertia) {
        delta = this.velocity * this.options.touchInertiaMultiplier;
      }
      this.scrollTo(this.targetScroll + delta, {
        programmatic: false,
        ...syncTouch ? {
          lerp: hasTouchInertia ? this.options.syncTouchLerp : 1
        } : {
          lerp: this.options.lerp,
          duration: this.options.duration,
          easing: this.options.easing
        }
      });
    };
    /**
     * Force lenis to recalculate the dimensions
     */
    resize() {
      this.dimensions.resize();
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.emit();
    }
    emit() {
      this.emitter.emit("scroll", this);
    }
    onNativeScroll = () => {
      if (this._resetVelocityTimeout !== null) {
        clearTimeout(this._resetVelocityTimeout);
        this._resetVelocityTimeout = null;
      }
      if (this._preventNextNativeScrollEvent) {
        this._preventNextNativeScrollEvent = false;
        return;
      }
      if (this.isScrolling === false || this.isScrolling === "native") {
        const lastScroll = this.animatedScroll;
        this.animatedScroll = this.targetScroll = this.actualScroll;
        this.lastVelocity = this.velocity;
        this.velocity = this.animatedScroll - lastScroll;
        this.direction = Math.sign(
          this.animatedScroll - lastScroll
        );
        this.isScrolling = "native";
        this.emit();
        if (this.velocity !== 0) {
          this._resetVelocityTimeout = setTimeout(() => {
            this.lastVelocity = this.velocity;
            this.velocity = 0;
            this.isScrolling = false;
            this.emit();
          }, 400);
        }
      }
    };
    reset() {
      this.isLocked = false;
      this.isScrolling = false;
      this.animatedScroll = this.targetScroll = this.actualScroll;
      this.lastVelocity = this.velocity = 0;
      this.animate.stop();
    }
    /**
     * Start lenis scroll after it has been stopped
     */
    start() {
      if (!this.isStopped)
        return;
      this.isStopped = false;
      this.reset();
    }
    /**
     * Stop lenis scroll
     */
    stop() {
      if (this.isStopped)
        return;
      this.isStopped = true;
      this.animate.stop();
      this.reset();
    }
    /**
     * RequestAnimationFrame for lenis
     *
     * @param time The time in ms from an external clock like `requestAnimationFrame` or Tempus
     */
    raf(time) {
      const deltaTime = time - (this.time || time);
      this.time = time;
      this.animate.advance(deltaTime * 1e-3);
    }
    /**
     * Scroll to a target value
     *
     * @param target The target value to scroll to
     * @param options The options for the scroll
     *
     * @example
     * lenis.scrollTo(100, {
     *   offset: 100,
     *   duration: 1,
     *   easing: (t) => 1 - Math.cos((t * Math.PI) / 2),
     *   lerp: 0.1,
     *   onStart: () => {
     *     console.log('onStart')
     *   },
     *   onComplete: () => {
     *     console.log('onComplete')
     *   },
     * })
     */
    scrollTo(target, {
      offset = 0,
      immediate = false,
      lock = false,
      duration = this.options.duration,
      easing = this.options.easing,
      lerp: lerp2 = this.options.lerp,
      onStart,
      onComplete,
      force = false,
      // scroll even if stopped
      programmatic = true,
      // called from outside of the class
      userData
    } = {}) {
      if ((this.isStopped || this.isLocked) && !force)
        return;
      if (typeof target === "string" && ["top", "left", "start"].includes(target)) {
        target = 0;
      } else if (typeof target === "string" && ["bottom", "right", "end"].includes(target)) {
        target = this.limit;
      } else {
        let node;
        if (typeof target === "string") {
          node = document.querySelector(target);
        } else if (target instanceof HTMLElement && target?.nodeType) {
          node = target;
        }
        if (node) {
          if (this.options.wrapper !== window) {
            const wrapperRect = this.rootElement.getBoundingClientRect();
            offset -= this.isHorizontal ? wrapperRect.left : wrapperRect.top;
          }
          const rect = node.getBoundingClientRect();
          target = (this.isHorizontal ? rect.left : rect.top) + this.animatedScroll;
        }
      }
      if (typeof target !== "number")
        return;
      target += offset;
      target = Math.round(target);
      if (this.options.infinite) {
        if (programmatic) {
          this.targetScroll = this.animatedScroll = this.scroll;
        }
      } else {
        target = clamp3(0, target, this.limit);
      }
      if (target === this.targetScroll) {
        onStart?.(this);
        onComplete?.(this);
        return;
      }
      this.userData = userData ?? {};
      if (immediate) {
        this.animatedScroll = this.targetScroll = target;
        this.setScroll(this.scroll);
        this.reset();
        this.preventNextNativeScrollEvent();
        this.emit();
        onComplete?.(this);
        this.userData = {};
        return;
      }
      if (!programmatic) {
        this.targetScroll = target;
      }
      this.animate.fromTo(this.animatedScroll, target, {
        duration,
        easing,
        lerp: lerp2,
        onStart: () => {
          if (lock)
            this.isLocked = true;
          this.isScrolling = "smooth";
          onStart?.(this);
        },
        onUpdate: (value, completed) => {
          this.isScrolling = "smooth";
          this.lastVelocity = this.velocity;
          this.velocity = value - this.animatedScroll;
          this.direction = Math.sign(this.velocity);
          this.animatedScroll = value;
          this.setScroll(this.scroll);
          if (programmatic) {
            this.targetScroll = value;
          }
          if (!completed)
            this.emit();
          if (completed) {
            this.reset();
            this.emit();
            onComplete?.(this);
            this.userData = {};
            this.preventNextNativeScrollEvent();
          }
        }
      });
    }
    preventNextNativeScrollEvent() {
      this._preventNextNativeScrollEvent = true;
      requestAnimationFrame(() => {
        this._preventNextNativeScrollEvent = false;
      });
    }
    /**
     * The root element on which lenis is instanced
     */
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    /**
     * The limit which is the maximum scroll value
     */
    get limit() {
      if (this.options.__experimental__naiveDimensions) {
        if (this.isHorizontal) {
          return this.rootElement.scrollWidth - this.rootElement.clientWidth;
        } else {
          return this.rootElement.scrollHeight - this.rootElement.clientHeight;
        }
      } else {
        return this.dimensions.limit[this.isHorizontal ? "x" : "y"];
      }
    }
    /**
     * Whether or not the scroll is horizontal
     */
    get isHorizontal() {
      return this.options.orientation === "horizontal";
    }
    /**
     * The actual scroll value
     */
    get actualScroll() {
      return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
    }
    /**
     * The current scroll value
     */
    get scroll() {
      return this.options.infinite ? modulo(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    /**
     * The progress of the scroll relative to the limit
     */
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    /**
     * Current scroll state
     */
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(value) {
      if (this._isScrolling !== value) {
        this._isScrolling = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is stopped
     */
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(value) {
      if (this._isStopped !== value) {
        this._isStopped = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is locked
     */
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(value) {
      if (this._isLocked !== value) {
        this._isLocked = value;
        this.updateClassName();
      }
    }
    /**
     * Check if lenis is smooth scrolling
     */
    get isSmooth() {
      return this.isScrolling === "smooth";
    }
    /**
     * The class name applied to the wrapper element
     */
    get className() {
      let className = "lenis";
      if (this.isStopped)
        className += " lenis-stopped";
      if (this.isLocked)
        className += " lenis-locked";
      if (this.isScrolling)
        className += " lenis-scrolling";
      if (this.isScrolling === "smooth")
        className += " lenis-smooth";
      return className;
    }
    updateClassName() {
      this.cleanUpClassName();
      this.rootElement.className = `${this.rootElement.className} ${this.className}`.trim();
    }
    cleanUpClassName() {
      this.rootElement.className = this.rootElement.className.replace(/lenis(-\w+)?/g, "").trim();
    }
  };

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/swiper.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/swiper-core.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/ssr-window.esm.mjs
  init_live_reload();
  function isObject(obj) {
    return obj !== null && typeof obj === "object" && "constructor" in obj && obj.constructor === Object;
  }
  function extend(target, src) {
    if (target === void 0) {
      target = {};
    }
    if (src === void 0) {
      src = {};
    }
    Object.keys(src).forEach((key) => {
      if (typeof target[key] === "undefined")
        target[key] = src[key];
      else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
        extend(target[key], src[key]);
      }
    });
  }
  var ssrDocument = {
    body: {},
    addEventListener() {
    },
    removeEventListener() {
    },
    activeElement: {
      blur() {
      },
      nodeName: ""
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
    getElementById() {
      return null;
    },
    createEvent() {
      return {
        initEvent() {
        }
      };
    },
    createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {
        },
        getElementsByTagName() {
          return [];
        }
      };
    },
    createElementNS() {
      return {};
    },
    importNode() {
      return null;
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    }
  };
  function getDocument() {
    const doc = typeof document !== "undefined" ? document : {};
    extend(doc, ssrDocument);
    return doc;
  }
  var ssrWindow = {
    document: ssrDocument,
    navigator: {
      userAgent: ""
    },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: ""
    },
    history: {
      replaceState() {
      },
      pushState() {
      },
      go() {
      },
      back() {
      }
    },
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener() {
    },
    removeEventListener() {
    },
    getComputedStyle() {
      return {
        getPropertyValue() {
          return "";
        }
      };
    },
    Image() {
    },
    Date() {
    },
    screen: {},
    setTimeout() {
    },
    clearTimeout() {
    },
    matchMedia() {
      return {};
    },
    requestAnimationFrame(callback) {
      if (typeof setTimeout === "undefined") {
        callback();
        return null;
      }
      return setTimeout(callback, 0);
    },
    cancelAnimationFrame(id) {
      if (typeof setTimeout === "undefined") {
        return;
      }
      clearTimeout(id);
    }
  };
  function getWindow() {
    const win = typeof window !== "undefined" ? window : {};
    extend(win, ssrWindow);
    return win;
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/utils.mjs
  init_live_reload();
  function classesToTokens(classes2) {
    if (classes2 === void 0) {
      classes2 = "";
    }
    return classes2.trim().split(" ").filter((c2) => !!c2.trim());
  }
  function deleteProps(obj) {
    const object = obj;
    Object.keys(object).forEach((key) => {
      try {
        object[key] = null;
      } catch (e2) {
      }
      try {
        delete object[key];
      } catch (e2) {
      }
    });
  }
  function nextTick(callback, delay) {
    if (delay === void 0) {
      delay = 0;
    }
    return setTimeout(callback, delay);
  }
  function now() {
    return Date.now();
  }
  function getComputedStyle2(el) {
    const window2 = getWindow();
    let style;
    if (window2.getComputedStyle) {
      style = window2.getComputedStyle(el, null);
    }
    if (!style && el.currentStyle) {
      style = el.currentStyle;
    }
    if (!style) {
      style = el.style;
    }
    return style;
  }
  function getTranslate(el, axis) {
    if (axis === void 0) {
      axis = "x";
    }
    const window2 = getWindow();
    let matrix;
    let curTransform;
    let transformMatrix;
    const curStyle = getComputedStyle2(el);
    if (window2.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(",").length > 6) {
        curTransform = curTransform.split(", ").map((a) => a.replace(",", ".")).join(", ");
      }
      transformMatrix = new window2.WebKitCSSMatrix(curTransform === "none" ? "" : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,");
      matrix = transformMatrix.toString().split(",");
    }
    if (axis === "x") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m41;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[12]);
      else
        curTransform = parseFloat(matrix[4]);
    }
    if (axis === "y") {
      if (window2.WebKitCSSMatrix)
        curTransform = transformMatrix.m42;
      else if (matrix.length === 16)
        curTransform = parseFloat(matrix[13]);
      else
        curTransform = parseFloat(matrix[5]);
    }
    return curTransform || 0;
  }
  function isObject2(o) {
    return typeof o === "object" && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === "Object";
  }
  function isNode(node) {
    if (typeof window !== "undefined" && typeof window.HTMLElement !== "undefined") {
      return node instanceof HTMLElement;
    }
    return node && (node.nodeType === 1 || node.nodeType === 11);
  }
  function extend2() {
    const to = Object(arguments.length <= 0 ? void 0 : arguments[0]);
    const noExtend = ["__proto__", "constructor", "prototype"];
    for (let i3 = 1; i3 < arguments.length; i3 += 1) {
      const nextSource = i3 < 0 || arguments.length <= i3 ? void 0 : arguments[i3];
      if (nextSource !== void 0 && nextSource !== null && !isNode(nextSource)) {
        const keysArray = Object.keys(Object(nextSource)).filter((key) => noExtend.indexOf(key) < 0);
        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          const nextKey = keysArray[nextIndex];
          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== void 0 && desc.enumerable) {
            if (isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else if (!isObject2(to[nextKey]) && isObject2(nextSource[nextKey])) {
              to[nextKey] = {};
              if (nextSource[nextKey].__swiper__) {
                to[nextKey] = nextSource[nextKey];
              } else {
                extend2(to[nextKey], nextSource[nextKey]);
              }
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  }
  function setCSSProperty(el, varName, varValue) {
    el.style.setProperty(varName, varValue);
  }
  function animateCSSModeScroll(_ref) {
    let {
      swiper,
      targetPosition,
      side
    } = _ref;
    const window2 = getWindow();
    const startPosition = -swiper.translate;
    let startTime = null;
    let time;
    const duration = swiper.params.speed;
    swiper.wrapperEl.style.scrollSnapType = "none";
    window2.cancelAnimationFrame(swiper.cssModeFrameID);
    const dir = targetPosition > startPosition ? "next" : "prev";
    const isOutOfBound = (current, target) => {
      return dir === "next" && current >= target || dir === "prev" && current <= target;
    };
    const animate = () => {
      time = (/* @__PURE__ */ new Date()).getTime();
      if (startTime === null) {
        startTime = time;
      }
      const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
      const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
      let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
      if (isOutOfBound(currentPosition, targetPosition)) {
        currentPosition = targetPosition;
      }
      swiper.wrapperEl.scrollTo({
        [side]: currentPosition
      });
      if (isOutOfBound(currentPosition, targetPosition)) {
        swiper.wrapperEl.style.overflow = "hidden";
        swiper.wrapperEl.style.scrollSnapType = "";
        setTimeout(() => {
          swiper.wrapperEl.style.overflow = "";
          swiper.wrapperEl.scrollTo({
            [side]: currentPosition
          });
        });
        window2.cancelAnimationFrame(swiper.cssModeFrameID);
        return;
      }
      swiper.cssModeFrameID = window2.requestAnimationFrame(animate);
    };
    animate();
  }
  function getSlideTransformEl(slideEl) {
    return slideEl.querySelector(".swiper-slide-transform") || slideEl.shadowRoot && slideEl.shadowRoot.querySelector(".swiper-slide-transform") || slideEl;
  }
  function elementChildren(element, selector3) {
    if (selector3 === void 0) {
      selector3 = "";
    }
    const children = [...element.children];
    if (element instanceof HTMLSlotElement) {
      children.push(...element.assignedElements());
    }
    if (!selector3) {
      return children;
    }
    return children.filter((el) => el.matches(selector3));
  }
  function elementIsChildOf(el, parent) {
    const isChild = parent.contains(el);
    if (!isChild && parent instanceof HTMLSlotElement) {
      const children = [...parent.assignedElements()];
      return children.includes(el);
    }
    return isChild;
  }
  function showWarning(text) {
    try {
      console.warn(text);
      return;
    } catch (err) {
    }
  }
  function createElement(tag, classes2) {
    if (classes2 === void 0) {
      classes2 = [];
    }
    const el = document.createElement(tag);
    el.classList.add(...Array.isArray(classes2) ? classes2 : classesToTokens(classes2));
    return el;
  }
  function elementPrevAll(el, selector3) {
    const prevEls = [];
    while (el.previousElementSibling) {
      const prev = el.previousElementSibling;
      if (selector3) {
        if (prev.matches(selector3))
          prevEls.push(prev);
      } else
        prevEls.push(prev);
      el = prev;
    }
    return prevEls;
  }
  function elementNextAll(el, selector3) {
    const nextEls = [];
    while (el.nextElementSibling) {
      const next = el.nextElementSibling;
      if (selector3) {
        if (next.matches(selector3))
          nextEls.push(next);
      } else
        nextEls.push(next);
      el = next;
    }
    return nextEls;
  }
  function elementStyle(el, prop) {
    const window2 = getWindow();
    return window2.getComputedStyle(el, null).getPropertyValue(prop);
  }
  function elementIndex(el) {
    let child = el;
    let i3;
    if (child) {
      i3 = 0;
      while ((child = child.previousSibling) !== null) {
        if (child.nodeType === 1)
          i3 += 1;
      }
      return i3;
    }
    return void 0;
  }
  function elementParents(el, selector3) {
    const parents = [];
    let parent = el.parentElement;
    while (parent) {
      if (selector3) {
        if (parent.matches(selector3))
          parents.push(parent);
      } else {
        parents.push(parent);
      }
      parent = parent.parentElement;
    }
    return parents;
  }
  function elementTransitionEnd(el, callback) {
    function fireCallBack(e2) {
      if (e2.target !== el)
        return;
      callback.call(el, e2);
      el.removeEventListener("transitionend", fireCallBack);
    }
    if (callback) {
      el.addEventListener("transitionend", fireCallBack);
    }
  }
  function elementOuterSize(el, size, includeMargins) {
    const window2 = getWindow();
    if (includeMargins) {
      return el[size === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-right" : "margin-top")) + parseFloat(window2.getComputedStyle(el, null).getPropertyValue(size === "width" ? "margin-left" : "margin-bottom"));
    }
    return el.offsetWidth;
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/swiper-core.mjs
  var support;
  function calcSupport() {
    const window2 = getWindow();
    const document2 = getDocument();
    return {
      smoothScroll: document2.documentElement && document2.documentElement.style && "scrollBehavior" in document2.documentElement.style,
      touch: !!("ontouchstart" in window2 || window2.DocumentTouch && document2 instanceof window2.DocumentTouch)
    };
  }
  function getSupport() {
    if (!support) {
      support = calcSupport();
    }
    return support;
  }
  var deviceCached;
  function calcDevice(_temp) {
    let {
      userAgent
    } = _temp === void 0 ? {} : _temp;
    const support2 = getSupport();
    const window2 = getWindow();
    const platform = window2.navigator.platform;
    const ua = userAgent || window2.navigator.userAgent;
    const device = {
      ios: false,
      android: false
    };
    const screenWidth = window2.screen.width;
    const screenHeight = window2.screen.height;
    const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
    let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
    const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
    const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
    const windows = platform === "Win32";
    let macos = platform === "MacIntel";
    const iPadScreens = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    if (!ipad && macos && support2.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
      ipad = ua.match(/(Version)\/([\d.]+)/);
      if (!ipad)
        ipad = [0, 1, "13_0_0"];
      macos = false;
    }
    if (android && !windows) {
      device.os = "android";
      device.android = true;
    }
    if (ipad || iphone || ipod) {
      device.os = "ios";
      device.ios = true;
    }
    return device;
  }
  function getDevice(overrides) {
    if (overrides === void 0) {
      overrides = {};
    }
    if (!deviceCached) {
      deviceCached = calcDevice(overrides);
    }
    return deviceCached;
  }
  var browser;
  function calcBrowser() {
    const window2 = getWindow();
    const device = getDevice();
    let needPerspectiveFix = false;
    function isSafari() {
      const ua = window2.navigator.userAgent.toLowerCase();
      return ua.indexOf("safari") >= 0 && ua.indexOf("chrome") < 0 && ua.indexOf("android") < 0;
    }
    if (isSafari()) {
      const ua = String(window2.navigator.userAgent);
      if (ua.includes("Version/")) {
        const [major, minor] = ua.split("Version/")[1].split(" ")[0].split(".").map((num) => Number(num));
        needPerspectiveFix = major < 16 || major === 16 && minor < 2;
      }
    }
    const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window2.navigator.userAgent);
    const isSafariBrowser = isSafari();
    const need3dFix = isSafariBrowser || isWebView && device.ios;
    return {
      isSafari: needPerspectiveFix || isSafariBrowser,
      needPerspectiveFix,
      need3dFix,
      isWebView
    };
  }
  function getBrowser() {
    if (!browser) {
      browser = calcBrowser();
    }
    return browser;
  }
  function Resize(_ref) {
    let {
      swiper,
      on,
      emit
    } = _ref;
    const window2 = getWindow();
    let observer = null;
    let animationFrame = null;
    const resizeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("beforeResize");
      emit("resize");
    };
    const createObserver = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      observer = new ResizeObserver((entries) => {
        animationFrame = window2.requestAnimationFrame(() => {
          const {
            width,
            height
          } = swiper;
          let newWidth = width;
          let newHeight = height;
          entries.forEach((_ref2) => {
            let {
              contentBoxSize,
              contentRect,
              target
            } = _ref2;
            if (target && target !== swiper.el)
              return;
            newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
            newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
          });
          if (newWidth !== width || newHeight !== height) {
            resizeHandler();
          }
        });
      });
      observer.observe(swiper.el);
    };
    const removeObserver = () => {
      if (animationFrame) {
        window2.cancelAnimationFrame(animationFrame);
      }
      if (observer && observer.unobserve && swiper.el) {
        observer.unobserve(swiper.el);
        observer = null;
      }
    };
    const orientationChangeHandler = () => {
      if (!swiper || swiper.destroyed || !swiper.initialized)
        return;
      emit("orientationchange");
    };
    on("init", () => {
      if (swiper.params.resizeObserver && typeof window2.ResizeObserver !== "undefined") {
        createObserver();
        return;
      }
      window2.addEventListener("resize", resizeHandler);
      window2.addEventListener("orientationchange", orientationChangeHandler);
    });
    on("destroy", () => {
      removeObserver();
      window2.removeEventListener("resize", resizeHandler);
      window2.removeEventListener("orientationchange", orientationChangeHandler);
    });
  }
  function Observer2(_ref) {
    let {
      swiper,
      extendParams,
      on,
      emit
    } = _ref;
    const observers = [];
    const window2 = getWindow();
    const attach = function(target, options) {
      if (options === void 0) {
        options = {};
      }
      const ObserverFunc = window2.MutationObserver || window2.WebkitMutationObserver;
      const observer = new ObserverFunc((mutations) => {
        if (swiper.__preventObserver__)
          return;
        if (mutations.length === 1) {
          emit("observerUpdate", mutations[0]);
          return;
        }
        const observerUpdate = function observerUpdate2() {
          emit("observerUpdate", mutations[0]);
        };
        if (window2.requestAnimationFrame) {
          window2.requestAnimationFrame(observerUpdate);
        } else {
          window2.setTimeout(observerUpdate, 0);
        }
      });
      observer.observe(target, {
        attributes: typeof options.attributes === "undefined" ? true : options.attributes,
        childList: swiper.isElement || (typeof options.childList === "undefined" ? true : options).childList,
        characterData: typeof options.characterData === "undefined" ? true : options.characterData
      });
      observers.push(observer);
    };
    const init4 = () => {
      if (!swiper.params.observer)
        return;
      if (swiper.params.observeParents) {
        const containerParents = elementParents(swiper.hostEl);
        for (let i3 = 0; i3 < containerParents.length; i3 += 1) {
          attach(containerParents[i3]);
        }
      }
      attach(swiper.hostEl, {
        childList: swiper.params.observeSlideChildren
      });
      attach(swiper.wrapperEl, {
        attributes: false
      });
    };
    const destroy = () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
      observers.splice(0, observers.length);
    };
    extendParams({
      observer: false,
      observeParents: false,
      observeSlideChildren: false
    });
    on("init", init4);
    on("destroy", destroy);
  }
  var eventsEmitter = {
    on(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      events2.split(" ").forEach((event2) => {
        if (!self2.eventsListeners[event2])
          self2.eventsListeners[event2] = [];
        self2.eventsListeners[event2][method](handler);
      });
      return self2;
    },
    once(events2, handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      function onceHandler() {
        self2.off(events2, onceHandler);
        if (onceHandler.__emitterProxy) {
          delete onceHandler.__emitterProxy;
        }
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        handler.apply(self2, args);
      }
      onceHandler.__emitterProxy = handler;
      return self2.on(events2, onceHandler, priority);
    },
    onAny(handler, priority) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (typeof handler !== "function")
        return self2;
      const method = priority ? "unshift" : "push";
      if (self2.eventsAnyListeners.indexOf(handler) < 0) {
        self2.eventsAnyListeners[method](handler);
      }
      return self2;
    },
    offAny(handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsAnyListeners)
        return self2;
      const index = self2.eventsAnyListeners.indexOf(handler);
      if (index >= 0) {
        self2.eventsAnyListeners.splice(index, 1);
      }
      return self2;
    },
    off(events2, handler) {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      events2.split(" ").forEach((event2) => {
        if (typeof handler === "undefined") {
          self2.eventsListeners[event2] = [];
        } else if (self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler, index) => {
            if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
              self2.eventsListeners[event2].splice(index, 1);
            }
          });
        }
      });
      return self2;
    },
    emit() {
      const self2 = this;
      if (!self2.eventsListeners || self2.destroyed)
        return self2;
      if (!self2.eventsListeners)
        return self2;
      let events2;
      let data;
      let context3;
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      if (typeof args[0] === "string" || Array.isArray(args[0])) {
        events2 = args[0];
        data = args.slice(1, args.length);
        context3 = self2;
      } else {
        events2 = args[0].events;
        data = args[0].data;
        context3 = args[0].context || self2;
      }
      data.unshift(context3);
      const eventsArray = Array.isArray(events2) ? events2 : events2.split(" ");
      eventsArray.forEach((event2) => {
        if (self2.eventsAnyListeners && self2.eventsAnyListeners.length) {
          self2.eventsAnyListeners.forEach((eventHandler) => {
            eventHandler.apply(context3, [event2, ...data]);
          });
        }
        if (self2.eventsListeners && self2.eventsListeners[event2]) {
          self2.eventsListeners[event2].forEach((eventHandler) => {
            eventHandler.apply(context3, data);
          });
        }
      });
      return self2;
    }
  };
  function updateSize() {
    const swiper = this;
    let width;
    let height;
    const el = swiper.el;
    if (typeof swiper.params.width !== "undefined" && swiper.params.width !== null) {
      width = swiper.params.width;
    } else {
      width = el.clientWidth;
    }
    if (typeof swiper.params.height !== "undefined" && swiper.params.height !== null) {
      height = swiper.params.height;
    } else {
      height = el.clientHeight;
    }
    if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
      return;
    }
    width = width - parseInt(elementStyle(el, "padding-left") || 0, 10) - parseInt(elementStyle(el, "padding-right") || 0, 10);
    height = height - parseInt(elementStyle(el, "padding-top") || 0, 10) - parseInt(elementStyle(el, "padding-bottom") || 0, 10);
    if (Number.isNaN(width))
      width = 0;
    if (Number.isNaN(height))
      height = 0;
    Object.assign(swiper, {
      width,
      height,
      size: swiper.isHorizontal() ? width : height
    });
  }
  function updateSlides() {
    const swiper = this;
    function getDirectionPropertyValue(node, label) {
      return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
    }
    const params = swiper.params;
    const {
      wrapperEl,
      slidesEl,
      size: swiperSize,
      rtlTranslate: rtl,
      wrongRTL
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
    const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
    const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
    let snapGrid = [];
    const slidesGrid = [];
    const slidesSizesGrid = [];
    let offsetBefore = params.slidesOffsetBefore;
    if (typeof offsetBefore === "function") {
      offsetBefore = params.slidesOffsetBefore.call(swiper);
    }
    let offsetAfter = params.slidesOffsetAfter;
    if (typeof offsetAfter === "function") {
      offsetAfter = params.slidesOffsetAfter.call(swiper);
    }
    const previousSnapGridLength = swiper.snapGrid.length;
    const previousSlidesGridLength = swiper.slidesGrid.length;
    let spaceBetween = params.spaceBetween;
    let slidePosition = -offsetBefore;
    let prevSlideSize = 0;
    let index = 0;
    if (typeof swiperSize === "undefined") {
      return;
    }
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiperSize;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    swiper.virtualSize = -spaceBetween;
    slides.forEach((slideEl) => {
      if (rtl) {
        slideEl.style.marginLeft = "";
      } else {
        slideEl.style.marginRight = "";
      }
      slideEl.style.marginBottom = "";
      slideEl.style.marginTop = "";
    });
    if (params.centeredSlides && params.cssMode) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", "");
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", "");
    }
    const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
    if (gridEnabled) {
      swiper.grid.initSlides(slides);
    } else if (swiper.grid) {
      swiper.grid.unsetSlides();
    }
    let slideSize;
    const shouldResetSlideSize = params.slidesPerView === "auto" && params.breakpoints && Object.keys(params.breakpoints).filter((key) => {
      return typeof params.breakpoints[key].slidesPerView !== "undefined";
    }).length > 0;
    for (let i3 = 0; i3 < slidesLength; i3 += 1) {
      slideSize = 0;
      let slide2;
      if (slides[i3])
        slide2 = slides[i3];
      if (gridEnabled) {
        swiper.grid.updateSlide(i3, slide2, slides);
      }
      if (slides[i3] && elementStyle(slide2, "display") === "none")
        continue;
      if (params.slidesPerView === "auto") {
        if (shouldResetSlideSize) {
          slides[i3].style[swiper.getDirectionLabel("width")] = ``;
        }
        const slideStyles = getComputedStyle(slide2);
        const currentTransform = slide2.style.transform;
        const currentWebKitTransform = slide2.style.webkitTransform;
        if (currentTransform) {
          slide2.style.transform = "none";
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = "none";
        }
        if (params.roundLengths) {
          slideSize = swiper.isHorizontal() ? elementOuterSize(slide2, "width", true) : elementOuterSize(slide2, "height", true);
        } else {
          const width = getDirectionPropertyValue(slideStyles, "width");
          const paddingLeft = getDirectionPropertyValue(slideStyles, "padding-left");
          const paddingRight = getDirectionPropertyValue(slideStyles, "padding-right");
          const marginLeft = getDirectionPropertyValue(slideStyles, "margin-left");
          const marginRight = getDirectionPropertyValue(slideStyles, "margin-right");
          const boxSizing = slideStyles.getPropertyValue("box-sizing");
          if (boxSizing && boxSizing === "border-box") {
            slideSize = width + marginLeft + marginRight;
          } else {
            const {
              clientWidth,
              offsetWidth
            } = slide2;
            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
          }
        }
        if (currentTransform) {
          slide2.style.transform = currentTransform;
        }
        if (currentWebKitTransform) {
          slide2.style.webkitTransform = currentWebKitTransform;
        }
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
      } else {
        slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
        if (params.roundLengths)
          slideSize = Math.floor(slideSize);
        if (slides[i3]) {
          slides[i3].style[swiper.getDirectionLabel("width")] = `${slideSize}px`;
        }
      }
      if (slides[i3]) {
        slides[i3].swiperSlideSize = slideSize;
      }
      slidesSizesGrid.push(slideSize);
      if (params.centeredSlides) {
        slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
        if (prevSlideSize === 0 && i3 !== 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (i3 === 0)
          slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
        if (Math.abs(slidePosition) < 1 / 1e3)
          slidePosition = 0;
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if (index % params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
      } else {
        if (params.roundLengths)
          slidePosition = Math.floor(slidePosition);
        if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0)
          snapGrid.push(slidePosition);
        slidesGrid.push(slidePosition);
        slidePosition = slidePosition + slideSize + spaceBetween;
      }
      swiper.virtualSize += slideSize + spaceBetween;
      prevSlideSize = slideSize;
      index += 1;
    }
    swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
    if (rtl && wrongRTL && (params.effect === "slide" || params.effect === "coverflow")) {
      wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (params.setWrapperSize) {
      wrapperEl.style[swiper.getDirectionLabel("width")] = `${swiper.virtualSize + spaceBetween}px`;
    }
    if (gridEnabled) {
      swiper.grid.updateWrapperSize(slideSize, snapGrid);
    }
    if (!params.centeredSlides) {
      const newSlidesGrid = [];
      for (let i3 = 0; i3 < snapGrid.length; i3 += 1) {
        let slidesGridItem = snapGrid[i3];
        if (params.roundLengths)
          slidesGridItem = Math.floor(slidesGridItem);
        if (snapGrid[i3] <= swiper.virtualSize - swiperSize) {
          newSlidesGrid.push(slidesGridItem);
        }
      }
      snapGrid = newSlidesGrid;
      if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
        snapGrid.push(swiper.virtualSize - swiperSize);
      }
    }
    if (isVirtual && params.loop) {
      const size = slidesSizesGrid[0] + spaceBetween;
      if (params.slidesPerGroup > 1) {
        const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
        const groupSize = size * params.slidesPerGroup;
        for (let i3 = 0; i3 < groups; i3 += 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
        }
      }
      for (let i3 = 0; i3 < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i3 += 1) {
        if (params.slidesPerGroup === 1) {
          snapGrid.push(snapGrid[snapGrid.length - 1] + size);
        }
        slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
        swiper.virtualSize += size;
      }
    }
    if (snapGrid.length === 0)
      snapGrid = [0];
    if (spaceBetween !== 0) {
      const key = swiper.isHorizontal() && rtl ? "marginLeft" : swiper.getDirectionLabel("marginRight");
      slides.filter((_, slideIndex) => {
        if (!params.cssMode || params.loop)
          return true;
        if (slideIndex === slides.length - 1) {
          return false;
        }
        return true;
      }).forEach((slideEl) => {
        slideEl.style[key] = `${spaceBetween}px`;
      });
    }
    if (params.centeredSlides && params.centeredSlidesBounds) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
      snapGrid = snapGrid.map((snap3) => {
        if (snap3 <= 0)
          return -offsetBefore;
        if (snap3 > maxSnap)
          return maxSnap + offsetAfter;
        return snap3;
      });
    }
    if (params.centerInsufficientSlides) {
      let allSlidesSize = 0;
      slidesSizesGrid.forEach((slideSizeValue) => {
        allSlidesSize += slideSizeValue + (spaceBetween || 0);
      });
      allSlidesSize -= spaceBetween;
      const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
      if (allSlidesSize + offsetSize < swiperSize) {
        const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
        snapGrid.forEach((snap3, snapIndex) => {
          snapGrid[snapIndex] = snap3 - allSlidesOffset;
        });
        slidesGrid.forEach((snap3, snapIndex) => {
          slidesGrid[snapIndex] = snap3 + allSlidesOffset;
        });
      }
    }
    Object.assign(swiper, {
      slides,
      snapGrid,
      slidesGrid,
      slidesSizesGrid
    });
    if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
      setCSSProperty(wrapperEl, "--swiper-centered-offset-before", `${-snapGrid[0]}px`);
      setCSSProperty(wrapperEl, "--swiper-centered-offset-after", `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
      const addToSnapGrid = -swiper.snapGrid[0];
      const addToSlidesGrid = -swiper.slidesGrid[0];
      swiper.snapGrid = swiper.snapGrid.map((v) => v + addToSnapGrid);
      swiper.slidesGrid = swiper.slidesGrid.map((v) => v + addToSlidesGrid);
    }
    if (slidesLength !== previousSlidesLength) {
      swiper.emit("slidesLengthChange");
    }
    if (snapGrid.length !== previousSnapGridLength) {
      if (swiper.params.watchOverflow)
        swiper.checkOverflow();
      swiper.emit("snapGridLengthChange");
    }
    if (slidesGrid.length !== previousSlidesGridLength) {
      swiper.emit("slidesGridLengthChange");
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    swiper.emit("slidesUpdated");
    if (!isVirtual && !params.cssMode && (params.effect === "slide" || params.effect === "fade")) {
      const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
      const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
      if (slidesLength <= params.maxBackfaceHiddenSlides) {
        if (!hasClassBackfaceClassAdded)
          swiper.el.classList.add(backFaceHiddenClass);
      } else if (hasClassBackfaceClassAdded) {
        swiper.el.classList.remove(backFaceHiddenClass);
      }
    }
  }
  function updateAutoHeight(speed) {
    const swiper = this;
    const activeSlides = [];
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    let newHeight = 0;
    let i3;
    if (typeof speed === "number") {
      swiper.setTransition(speed);
    } else if (speed === true) {
      swiper.setTransition(swiper.params.speed);
    }
    const getSlideByIndex = (index) => {
      if (isVirtual) {
        return swiper.slides[swiper.getSlideIndexByData(index)];
      }
      return swiper.slides[index];
    };
    if (swiper.params.slidesPerView !== "auto" && swiper.params.slidesPerView > 1) {
      if (swiper.params.centeredSlides) {
        (swiper.visibleSlides || []).forEach((slide2) => {
          activeSlides.push(slide2);
        });
      } else {
        for (i3 = 0; i3 < Math.ceil(swiper.params.slidesPerView); i3 += 1) {
          const index = swiper.activeIndex + i3;
          if (index > swiper.slides.length && !isVirtual)
            break;
          activeSlides.push(getSlideByIndex(index));
        }
      }
    } else {
      activeSlides.push(getSlideByIndex(swiper.activeIndex));
    }
    for (i3 = 0; i3 < activeSlides.length; i3 += 1) {
      if (typeof activeSlides[i3] !== "undefined") {
        const height = activeSlides[i3].offsetHeight;
        newHeight = height > newHeight ? height : newHeight;
      }
    }
    if (newHeight || newHeight === 0)
      swiper.wrapperEl.style.height = `${newHeight}px`;
  }
  function updateSlidesOffset() {
    const swiper = this;
    const slides = swiper.slides;
    const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
    for (let i3 = 0; i3 < slides.length; i3 += 1) {
      slides[i3].swiperSlideOffset = (swiper.isHorizontal() ? slides[i3].offsetLeft : slides[i3].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
    }
  }
  var toggleSlideClasses$1 = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesProgress(translate2) {
    if (translate2 === void 0) {
      translate2 = this && this.translate || 0;
    }
    const swiper = this;
    const params = swiper.params;
    const {
      slides,
      rtlTranslate: rtl,
      snapGrid
    } = swiper;
    if (slides.length === 0)
      return;
    if (typeof slides[0].swiperSlideOffset === "undefined")
      swiper.updateSlidesOffset();
    let offsetCenter = -translate2;
    if (rtl)
      offsetCenter = translate2;
    swiper.visibleSlidesIndexes = [];
    swiper.visibleSlides = [];
    let spaceBetween = params.spaceBetween;
    if (typeof spaceBetween === "string" && spaceBetween.indexOf("%") >= 0) {
      spaceBetween = parseFloat(spaceBetween.replace("%", "")) / 100 * swiper.size;
    } else if (typeof spaceBetween === "string") {
      spaceBetween = parseFloat(spaceBetween);
    }
    for (let i3 = 0; i3 < slides.length; i3 += 1) {
      const slide2 = slides[i3];
      let slideOffset = slide2.swiperSlideOffset;
      if (params.cssMode && params.centeredSlides) {
        slideOffset -= slides[0].swiperSlideOffset;
      }
      const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide2.swiperSlideSize + spaceBetween);
      const slideBefore = -(offsetCenter - slideOffset);
      const slideAfter = slideBefore + swiper.slidesSizesGrid[i3];
      const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i3];
      const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
      if (isVisible) {
        swiper.visibleSlides.push(slide2);
        swiper.visibleSlidesIndexes.push(i3);
      }
      toggleSlideClasses$1(slide2, isVisible, params.slideVisibleClass);
      toggleSlideClasses$1(slide2, isFullyVisible, params.slideFullyVisibleClass);
      slide2.progress = rtl ? -slideProgress : slideProgress;
      slide2.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
    }
  }
  function updateProgress(translate2) {
    const swiper = this;
    if (typeof translate2 === "undefined") {
      const multiplier = swiper.rtlTranslate ? -1 : 1;
      translate2 = swiper && swiper.translate && swiper.translate * multiplier || 0;
    }
    const params = swiper.params;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    let {
      progress,
      isBeginning,
      isEnd,
      progressLoop
    } = swiper;
    const wasBeginning = isBeginning;
    const wasEnd = isEnd;
    if (translatesDiff === 0) {
      progress = 0;
      isBeginning = true;
      isEnd = true;
    } else {
      progress = (translate2 - swiper.minTranslate()) / translatesDiff;
      const isBeginningRounded = Math.abs(translate2 - swiper.minTranslate()) < 1;
      const isEndRounded = Math.abs(translate2 - swiper.maxTranslate()) < 1;
      isBeginning = isBeginningRounded || progress <= 0;
      isEnd = isEndRounded || progress >= 1;
      if (isBeginningRounded)
        progress = 0;
      if (isEndRounded)
        progress = 1;
    }
    if (params.loop) {
      const firstSlideIndex = swiper.getSlideIndexByData(0);
      const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
      const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
      const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
      const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
      const translateAbs = Math.abs(translate2);
      if (translateAbs >= firstSlideTranslate) {
        progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
      } else {
        progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
      }
      if (progressLoop > 1)
        progressLoop -= 1;
    }
    Object.assign(swiper, {
      progress,
      progressLoop,
      isBeginning,
      isEnd
    });
    if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight)
      swiper.updateSlidesProgress(translate2);
    if (isBeginning && !wasBeginning) {
      swiper.emit("reachBeginning toEdge");
    }
    if (isEnd && !wasEnd) {
      swiper.emit("reachEnd toEdge");
    }
    if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
      swiper.emit("fromEdge");
    }
    swiper.emit("progress", progress);
  }
  var toggleSlideClasses = (slideEl, condition, className) => {
    if (condition && !slideEl.classList.contains(className)) {
      slideEl.classList.add(className);
    } else if (!condition && slideEl.classList.contains(className)) {
      slideEl.classList.remove(className);
    }
  };
  function updateSlidesClasses() {
    const swiper = this;
    const {
      slides,
      params,
      slidesEl,
      activeIndex
    } = swiper;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const getFilteredSlide = (selector3) => {
      return elementChildren(slidesEl, `.${params.slideClass}${selector3}, swiper-slide${selector3}`)[0];
    };
    let activeSlide;
    let prevSlide;
    let nextSlide;
    if (isVirtual) {
      if (params.loop) {
        let slideIndex = activeIndex - swiper.virtual.slidesBefore;
        if (slideIndex < 0)
          slideIndex = swiper.virtual.slides.length + slideIndex;
        if (slideIndex >= swiper.virtual.slides.length)
          slideIndex -= swiper.virtual.slides.length;
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
      } else {
        activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
      }
    } else {
      if (gridEnabled) {
        activeSlide = slides.filter((slideEl) => slideEl.column === activeIndex)[0];
        nextSlide = slides.filter((slideEl) => slideEl.column === activeIndex + 1)[0];
        prevSlide = slides.filter((slideEl) => slideEl.column === activeIndex - 1)[0];
      } else {
        activeSlide = slides[activeIndex];
      }
    }
    if (activeSlide) {
      if (!gridEnabled) {
        nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !nextSlide) {
          nextSlide = slides[0];
        }
        prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
        if (params.loop && !prevSlide === 0) {
          prevSlide = slides[slides.length - 1];
        }
      }
    }
    slides.forEach((slideEl) => {
      toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
      toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
      toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
    });
    swiper.emitSlidesClasses();
  }
  var processLazyPreloader = (swiper, imageEl) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
    const slideEl = imageEl.closest(slideSelector());
    if (slideEl) {
      let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
      if (!lazyEl && swiper.isElement) {
        if (slideEl.shadowRoot) {
          lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
        } else {
          requestAnimationFrame(() => {
            if (slideEl.shadowRoot) {
              lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
              if (lazyEl)
                lazyEl.remove();
            }
          });
        }
      }
      if (lazyEl)
        lazyEl.remove();
    }
  };
  var unlazy = (swiper, index) => {
    if (!swiper.slides[index])
      return;
    const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
    if (imageEl)
      imageEl.removeAttribute("loading");
  };
  var preload = (swiper) => {
    if (!swiper || swiper.destroyed || !swiper.params)
      return;
    let amount = swiper.params.lazyPreloadPrevNext;
    const len = swiper.slides.length;
    if (!len || !amount || amount < 0)
      return;
    amount = Math.min(amount, len);
    const slidesPerView = swiper.params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
    const activeIndex = swiper.activeIndex;
    if (swiper.params.grid && swiper.params.grid.rows > 1) {
      const activeColumn = activeIndex;
      const preloadColumns = [activeColumn - amount];
      preloadColumns.push(...Array.from({
        length: amount
      }).map((_, i3) => {
        return activeColumn + slidesPerView + i3;
      }));
      swiper.slides.forEach((slideEl, i3) => {
        if (preloadColumns.includes(slideEl.column))
          unlazy(swiper, i3);
      });
      return;
    }
    const slideIndexLastInView = activeIndex + slidesPerView - 1;
    if (swiper.params.rewind || swiper.params.loop) {
      for (let i3 = activeIndex - amount; i3 <= slideIndexLastInView + amount; i3 += 1) {
        const realIndex = (i3 % len + len) % len;
        if (realIndex < activeIndex || realIndex > slideIndexLastInView)
          unlazy(swiper, realIndex);
      }
    } else {
      for (let i3 = Math.max(activeIndex - amount, 0); i3 <= Math.min(slideIndexLastInView + amount, len - 1); i3 += 1) {
        if (i3 !== activeIndex && (i3 > slideIndexLastInView || i3 < activeIndex)) {
          unlazy(swiper, i3);
        }
      }
    }
  };
  function getActiveIndexByTranslate(swiper) {
    const {
      slidesGrid,
      params
    } = swiper;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    let activeIndex;
    for (let i3 = 0; i3 < slidesGrid.length; i3 += 1) {
      if (typeof slidesGrid[i3 + 1] !== "undefined") {
        if (translate2 >= slidesGrid[i3] && translate2 < slidesGrid[i3 + 1] - (slidesGrid[i3 + 1] - slidesGrid[i3]) / 2) {
          activeIndex = i3;
        } else if (translate2 >= slidesGrid[i3] && translate2 < slidesGrid[i3 + 1]) {
          activeIndex = i3 + 1;
        }
      } else if (translate2 >= slidesGrid[i3]) {
        activeIndex = i3;
      }
    }
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === "undefined")
        activeIndex = 0;
    }
    return activeIndex;
  }
  function updateActiveIndex(newActiveIndex) {
    const swiper = this;
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    const {
      snapGrid,
      params,
      activeIndex: previousIndex,
      realIndex: previousRealIndex,
      snapIndex: previousSnapIndex
    } = swiper;
    let activeIndex = newActiveIndex;
    let snapIndex;
    const getVirtualRealIndex = (aIndex) => {
      let realIndex2 = aIndex - swiper.virtual.slidesBefore;
      if (realIndex2 < 0) {
        realIndex2 = swiper.virtual.slides.length + realIndex2;
      }
      if (realIndex2 >= swiper.virtual.slides.length) {
        realIndex2 -= swiper.virtual.slides.length;
      }
      return realIndex2;
    };
    if (typeof activeIndex === "undefined") {
      activeIndex = getActiveIndexByTranslate(swiper);
    }
    if (snapGrid.indexOf(translate2) >= 0) {
      snapIndex = snapGrid.indexOf(translate2);
    } else {
      const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
      snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
    }
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    if (activeIndex === previousIndex && !swiper.params.loop) {
      if (snapIndex !== previousSnapIndex) {
        swiper.snapIndex = snapIndex;
        swiper.emit("snapIndexChange");
      }
      return;
    }
    if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
      swiper.realIndex = getVirtualRealIndex(activeIndex);
      return;
    }
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    let realIndex;
    if (swiper.virtual && params.virtual.enabled && params.loop) {
      realIndex = getVirtualRealIndex(activeIndex);
    } else if (gridEnabled) {
      const firstSlideInColumn = swiper.slides.filter((slideEl) => slideEl.column === activeIndex)[0];
      let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute("data-swiper-slide-index"), 10);
      if (Number.isNaN(activeSlideIndex)) {
        activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
      }
      realIndex = Math.floor(activeSlideIndex / params.grid.rows);
    } else if (swiper.slides[activeIndex]) {
      const slideIndex = swiper.slides[activeIndex].getAttribute("data-swiper-slide-index");
      if (slideIndex) {
        realIndex = parseInt(slideIndex, 10);
      } else {
        realIndex = activeIndex;
      }
    } else {
      realIndex = activeIndex;
    }
    Object.assign(swiper, {
      previousSnapIndex,
      snapIndex,
      previousRealIndex,
      realIndex,
      previousIndex,
      activeIndex
    });
    if (swiper.initialized) {
      preload(swiper);
    }
    swiper.emit("activeIndexChange");
    swiper.emit("snapIndexChange");
    if (swiper.initialized || swiper.params.runCallbacksOnInit) {
      if (previousRealIndex !== realIndex) {
        swiper.emit("realIndexChange");
      }
      swiper.emit("slideChange");
    }
  }
  function updateClickedSlide(el, path) {
    const swiper = this;
    const params = swiper.params;
    let slide2 = el.closest(`.${params.slideClass}, swiper-slide`);
    if (!slide2 && swiper.isElement && path && path.length > 1 && path.includes(el)) {
      [...path.slice(path.indexOf(el) + 1, path.length)].forEach((pathEl) => {
        if (!slide2 && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
          slide2 = pathEl;
        }
      });
    }
    let slideFound = false;
    let slideIndex;
    if (slide2) {
      for (let i3 = 0; i3 < swiper.slides.length; i3 += 1) {
        if (swiper.slides[i3] === slide2) {
          slideFound = true;
          slideIndex = i3;
          break;
        }
      }
    }
    if (slide2 && slideFound) {
      swiper.clickedSlide = slide2;
      if (swiper.virtual && swiper.params.virtual.enabled) {
        swiper.clickedIndex = parseInt(slide2.getAttribute("data-swiper-slide-index"), 10);
      } else {
        swiper.clickedIndex = slideIndex;
      }
    } else {
      swiper.clickedSlide = void 0;
      swiper.clickedIndex = void 0;
      return;
    }
    if (params.slideToClickedSlide && swiper.clickedIndex !== void 0 && swiper.clickedIndex !== swiper.activeIndex) {
      swiper.slideToClickedSlide();
    }
  }
  var update = {
    updateSize,
    updateSlides,
    updateAutoHeight,
    updateSlidesOffset,
    updateSlidesProgress,
    updateProgress,
    updateSlidesClasses,
    updateActiveIndex,
    updateClickedSlide
  };
  function getSwiperTranslate(axis) {
    if (axis === void 0) {
      axis = this.isHorizontal() ? "x" : "y";
    }
    const swiper = this;
    const {
      params,
      rtlTranslate: rtl,
      translate: translate2,
      wrapperEl
    } = swiper;
    if (params.virtualTranslate) {
      return rtl ? -translate2 : translate2;
    }
    if (params.cssMode) {
      return translate2;
    }
    let currentTranslate = getTranslate(wrapperEl, axis);
    currentTranslate += swiper.cssOverflowAdjustment();
    if (rtl)
      currentTranslate = -currentTranslate;
    return currentTranslate || 0;
  }
  function setTranslate(translate2, byController) {
    const swiper = this;
    const {
      rtlTranslate: rtl,
      params,
      wrapperEl,
      progress
    } = swiper;
    let x2 = 0;
    let y = 0;
    const z = 0;
    if (swiper.isHorizontal()) {
      x2 = rtl ? -translate2 : translate2;
    } else {
      y = translate2;
    }
    if (params.roundLengths) {
      x2 = Math.floor(x2);
      y = Math.floor(y);
    }
    swiper.previousTranslate = swiper.translate;
    swiper.translate = swiper.isHorizontal() ? x2 : y;
    if (params.cssMode) {
      wrapperEl[swiper.isHorizontal() ? "scrollLeft" : "scrollTop"] = swiper.isHorizontal() ? -x2 : -y;
    } else if (!params.virtualTranslate) {
      if (swiper.isHorizontal()) {
        x2 -= swiper.cssOverflowAdjustment();
      } else {
        y -= swiper.cssOverflowAdjustment();
      }
      wrapperEl.style.transform = `translate3d(${x2}px, ${y}px, ${z}px)`;
    }
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (translate2 - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== progress) {
      swiper.updateProgress(translate2);
    }
    swiper.emit("setTranslate", swiper.translate, byController);
  }
  function minTranslate() {
    return -this.snapGrid[0];
  }
  function maxTranslate() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }
  function translateTo(translate2, speed, runCallbacks, translateBounds, internal) {
    if (translate2 === void 0) {
      translate2 = 0;
    }
    if (speed === void 0) {
      speed = this.params.speed;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (translateBounds === void 0) {
      translateBounds = true;
    }
    const swiper = this;
    const {
      params,
      wrapperEl
    } = swiper;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    const minTranslate2 = swiper.minTranslate();
    const maxTranslate2 = swiper.maxTranslate();
    let newTranslate;
    if (translateBounds && translate2 > minTranslate2)
      newTranslate = minTranslate2;
    else if (translateBounds && translate2 < maxTranslate2)
      newTranslate = maxTranslate2;
    else
      newTranslate = translate2;
    swiper.updateProgress(newTranslate);
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      if (speed === 0) {
        wrapperEl[isH ? "scrollLeft" : "scrollTop"] = -newTranslate;
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: -newTranslate,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: -newTranslate,
          behavior: "smooth"
        });
      }
      return true;
    }
    if (speed === 0) {
      swiper.setTransition(0);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionEnd");
      }
    } else {
      swiper.setTransition(speed);
      swiper.setTranslate(newTranslate);
      if (runCallbacks) {
        swiper.emit("beforeTransitionStart", speed, internal);
        swiper.emit("transitionStart");
      }
      if (!swiper.animating) {
        swiper.animating = true;
        if (!swiper.onTranslateToWrapperTransitionEnd) {
          swiper.onTranslateToWrapperTransitionEnd = function transitionEnd2(e2) {
            if (!swiper || swiper.destroyed)
              return;
            if (e2.target !== this)
              return;
            swiper.wrapperEl.removeEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
            swiper.onTranslateToWrapperTransitionEnd = null;
            delete swiper.onTranslateToWrapperTransitionEnd;
            swiper.animating = false;
            if (runCallbacks) {
              swiper.emit("transitionEnd");
            }
          };
        }
        swiper.wrapperEl.addEventListener("transitionend", swiper.onTranslateToWrapperTransitionEnd);
      }
    }
    return true;
  }
  var translate = {
    getTranslate: getSwiperTranslate,
    setTranslate,
    minTranslate,
    maxTranslate,
    translateTo
  };
  function setTransition(duration, byController) {
    const swiper = this;
    if (!swiper.params.cssMode) {
      swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
      swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : "";
    }
    swiper.emit("setTransition", duration, byController);
  }
  function transitionEmit(_ref) {
    let {
      swiper,
      runCallbacks,
      direction,
      step
    } = _ref;
    const {
      activeIndex,
      previousIndex
    } = swiper;
    let dir = direction;
    if (!dir) {
      if (activeIndex > previousIndex)
        dir = "next";
      else if (activeIndex < previousIndex)
        dir = "prev";
      else
        dir = "reset";
    }
    swiper.emit(`transition${step}`);
    if (runCallbacks && activeIndex !== previousIndex) {
      if (dir === "reset") {
        swiper.emit(`slideResetTransition${step}`);
        return;
      }
      swiper.emit(`slideChangeTransition${step}`);
      if (dir === "next") {
        swiper.emit(`slideNextTransition${step}`);
      } else {
        swiper.emit(`slidePrevTransition${step}`);
      }
    }
  }
  function transitionStart(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    if (params.cssMode)
      return;
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "Start"
    });
  }
  function transitionEnd(runCallbacks, direction) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.animating = false;
    if (params.cssMode)
      return;
    swiper.setTransition(0);
    transitionEmit({
      swiper,
      runCallbacks,
      direction,
      step: "End"
    });
  }
  var transition = {
    setTransition,
    transitionStart,
    transitionEnd
  };
  function slideTo(index, speed, runCallbacks, internal, initial) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      index = parseInt(index, 10);
    }
    const swiper = this;
    let slideIndex = index;
    if (slideIndex < 0)
      slideIndex = 0;
    const {
      params,
      snapGrid,
      slidesGrid,
      previousIndex,
      activeIndex,
      rtlTranslate: rtl,
      wrapperEl,
      enabled
    } = swiper;
    if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
      return false;
    }
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
    let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
    if (snapIndex >= snapGrid.length)
      snapIndex = snapGrid.length - 1;
    const translate2 = -snapGrid[snapIndex];
    if (params.normalizeSlideIndex) {
      for (let i3 = 0; i3 < slidesGrid.length; i3 += 1) {
        const normalizedTranslate = -Math.floor(translate2 * 100);
        const normalizedGrid = Math.floor(slidesGrid[i3] * 100);
        const normalizedGridNext = Math.floor(slidesGrid[i3 + 1] * 100);
        if (typeof slidesGrid[i3 + 1] !== "undefined") {
          if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
            slideIndex = i3;
          } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
            slideIndex = i3 + 1;
          }
        } else if (normalizedTranslate >= normalizedGrid) {
          slideIndex = i3;
        }
      }
    }
    if (swiper.initialized && slideIndex !== activeIndex) {
      if (!swiper.allowSlideNext && (rtl ? translate2 > swiper.translate && translate2 > swiper.minTranslate() : translate2 < swiper.translate && translate2 < swiper.minTranslate())) {
        return false;
      }
      if (!swiper.allowSlidePrev && translate2 > swiper.translate && translate2 > swiper.maxTranslate()) {
        if ((activeIndex || 0) !== slideIndex) {
          return false;
        }
      }
    }
    if (slideIndex !== (previousIndex || 0) && runCallbacks) {
      swiper.emit("beforeSlideChangeStart");
    }
    swiper.updateProgress(translate2);
    let direction;
    if (slideIndex > activeIndex)
      direction = "next";
    else if (slideIndex < activeIndex)
      direction = "prev";
    else
      direction = "reset";
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    const isInitialVirtual = isVirtual && initial;
    if (!isInitialVirtual && (rtl && -translate2 === swiper.translate || !rtl && translate2 === swiper.translate)) {
      swiper.updateActiveIndex(slideIndex);
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
      swiper.updateSlidesClasses();
      if (params.effect !== "slide") {
        swiper.setTranslate(translate2);
      }
      if (direction !== "reset") {
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      }
      return false;
    }
    if (params.cssMode) {
      const isH = swiper.isHorizontal();
      const t2 = rtl ? translate2 : -translate2;
      if (speed === 0) {
        if (isVirtual) {
          swiper.wrapperEl.style.scrollSnapType = "none";
          swiper._immediateVirtual = true;
        }
        if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
          swiper._cssModeVirtualInitialSet = true;
          requestAnimationFrame(() => {
            wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
          });
        } else {
          wrapperEl[isH ? "scrollLeft" : "scrollTop"] = t2;
        }
        if (isVirtual) {
          requestAnimationFrame(() => {
            swiper.wrapperEl.style.scrollSnapType = "";
            swiper._immediateVirtual = false;
          });
        }
      } else {
        if (!swiper.support.smoothScroll) {
          animateCSSModeScroll({
            swiper,
            targetPosition: t2,
            side: isH ? "left" : "top"
          });
          return true;
        }
        wrapperEl.scrollTo({
          [isH ? "left" : "top"]: t2,
          behavior: "smooth"
        });
      }
      return true;
    }
    swiper.setTransition(speed);
    swiper.setTranslate(translate2);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit("beforeTransitionStart", speed, internal);
    swiper.transitionStart(runCallbacks, direction);
    if (speed === 0) {
      swiper.transitionEnd(runCallbacks, direction);
    } else if (!swiper.animating) {
      swiper.animating = true;
      if (!swiper.onSlideToWrapperTransitionEnd) {
        swiper.onSlideToWrapperTransitionEnd = function transitionEnd2(e2) {
          if (!swiper || swiper.destroyed)
            return;
          if (e2.target !== this)
            return;
          swiper.wrapperEl.removeEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
          swiper.onSlideToWrapperTransitionEnd = null;
          delete swiper.onSlideToWrapperTransitionEnd;
          swiper.transitionEnd(runCallbacks, direction);
        };
      }
      swiper.wrapperEl.addEventListener("transitionend", swiper.onSlideToWrapperTransitionEnd);
    }
    return true;
  }
  function slideToLoop(index, speed, runCallbacks, internal) {
    if (index === void 0) {
      index = 0;
    }
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (typeof index === "string") {
      const indexAsNumber = parseInt(index, 10);
      index = indexAsNumber;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
    let newIndex = index;
    if (swiper.params.loop) {
      if (swiper.virtual && swiper.params.virtual.enabled) {
        newIndex = newIndex + swiper.virtual.slidesBefore;
      } else {
        let targetSlideIndex;
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          targetSlideIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          targetSlideIndex = swiper.getSlideIndexByData(newIndex);
        }
        const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
        const {
          centeredSlides
        } = swiper.params;
        let slidesPerView = swiper.params.slidesPerView;
        if (slidesPerView === "auto") {
          slidesPerView = swiper.slidesPerViewDynamic();
        } else {
          slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
          if (centeredSlides && slidesPerView % 2 === 0) {
            slidesPerView = slidesPerView + 1;
          }
        }
        let needLoopFix = cols - targetSlideIndex < slidesPerView;
        if (centeredSlides) {
          needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
        }
        if (internal && centeredSlides && swiper.params.slidesPerView !== "auto" && !gridEnabled) {
          needLoopFix = false;
        }
        if (needLoopFix) {
          const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? "prev" : "next" : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? "next" : "prev";
          swiper.loopFix({
            direction,
            slideTo: true,
            activeSlideIndex: direction === "next" ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
            slideRealIndex: direction === "next" ? swiper.realIndex : void 0
          });
        }
        if (gridEnabled) {
          const slideIndex = newIndex * swiper.params.grid.rows;
          newIndex = swiper.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === slideIndex)[0].column;
        } else {
          newIndex = swiper.getSlideIndexByData(newIndex);
        }
      }
    }
    requestAnimationFrame(() => {
      swiper.slideTo(newIndex, speed, runCallbacks, internal);
    });
    return swiper;
  }
  function slideNext(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      enabled,
      params,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed)
      return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let perGroup = params.slidesPerGroup;
    if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
      perGroup = Math.max(swiper.slidesPerViewDynamic("current", true), 1);
    }
    const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "next"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
      if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
        requestAnimationFrame(() => {
          swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
        });
        return true;
      }
    }
    if (params.rewind && swiper.isEnd) {
      return swiper.slideTo(0, speed, runCallbacks, internal);
    }
    return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
  }
  function slidePrev(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    const {
      params,
      snapGrid,
      slidesGrid,
      rtlTranslate,
      enabled,
      animating
    } = swiper;
    if (!enabled || swiper.destroyed)
      return swiper;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    const isVirtual = swiper.virtual && params.virtual.enabled;
    if (params.loop) {
      if (animating && !isVirtual && params.loopPreventsSliding)
        return false;
      swiper.loopFix({
        direction: "prev"
      });
      swiper._clientLeft = swiper.wrapperEl.clientLeft;
    }
    const translate2 = rtlTranslate ? swiper.translate : -swiper.translate;
    function normalize3(val) {
      if (val < 0)
        return -Math.floor(Math.abs(val));
      return Math.floor(val);
    }
    const normalizedTranslate = normalize3(translate2);
    const normalizedSnapGrid = snapGrid.map((val) => normalize3(val));
    let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
    if (typeof prevSnap === "undefined" && params.cssMode) {
      let prevSnapIndex;
      snapGrid.forEach((snap3, snapIndex) => {
        if (normalizedTranslate >= snap3) {
          prevSnapIndex = snapIndex;
        }
      });
      if (typeof prevSnapIndex !== "undefined") {
        prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
      }
    }
    let prevIndex = 0;
    if (typeof prevSnap !== "undefined") {
      prevIndex = slidesGrid.indexOf(prevSnap);
      if (prevIndex < 0)
        prevIndex = swiper.activeIndex - 1;
      if (params.slidesPerView === "auto" && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        prevIndex = prevIndex - swiper.slidesPerViewDynamic("previous", true) + 1;
        prevIndex = Math.max(prevIndex, 0);
      }
    }
    if (params.rewind && swiper.isBeginning) {
      const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
    } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
      requestAnimationFrame(() => {
        swiper.slideTo(prevIndex, speed, runCallbacks, internal);
      });
      return true;
    }
    return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
  }
  function slideReset(speed, runCallbacks, internal) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
  }
  function slideToClosest(speed, runCallbacks, internal, threshold) {
    if (runCallbacks === void 0) {
      runCallbacks = true;
    }
    if (threshold === void 0) {
      threshold = 0.5;
    }
    const swiper = this;
    if (swiper.destroyed)
      return;
    if (typeof speed === "undefined") {
      speed = swiper.params.speed;
    }
    let index = swiper.activeIndex;
    const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
    const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
    const translate2 = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
    if (translate2 >= swiper.snapGrid[snapIndex]) {
      const currentSnap = swiper.snapGrid[snapIndex];
      const nextSnap = swiper.snapGrid[snapIndex + 1];
      if (translate2 - currentSnap > (nextSnap - currentSnap) * threshold) {
        index += swiper.params.slidesPerGroup;
      }
    } else {
      const prevSnap = swiper.snapGrid[snapIndex - 1];
      const currentSnap = swiper.snapGrid[snapIndex];
      if (translate2 - prevSnap <= (currentSnap - prevSnap) * threshold) {
        index -= swiper.params.slidesPerGroup;
      }
    }
    index = Math.max(index, 0);
    index = Math.min(index, swiper.slidesGrid.length - 1);
    return swiper.slideTo(index, speed, runCallbacks, internal);
  }
  function slideToClickedSlide() {
    const swiper = this;
    if (swiper.destroyed)
      return;
    const {
      params,
      slidesEl
    } = swiper;
    const slidesPerView = params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : params.slidesPerView;
    let slideToIndex = swiper.clickedIndex;
    let realIndex;
    const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
    if (params.loop) {
      if (swiper.animating)
        return;
      realIndex = parseInt(swiper.clickedSlide.getAttribute("data-swiper-slide-index"), 10);
      if (params.centeredSlides) {
        if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
          swiper.loopFix();
          slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else if (slideToIndex > swiper.slides.length - slidesPerView) {
        swiper.loopFix();
        slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
        nextTick(() => {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else {
      swiper.slideTo(slideToIndex);
    }
  }
  var slide = {
    slideTo,
    slideToLoop,
    slideNext,
    slidePrev,
    slideReset,
    slideToClosest,
    slideToClickedSlide
  };
  function loopCreate(slideRealIndex) {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    const initSlides = () => {
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      slides.forEach((el, index) => {
        el.setAttribute("data-swiper-slide-index", index);
      });
    };
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
    const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
    const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
    const addBlankSlides = (amountOfSlides) => {
      for (let i3 = 0; i3 < amountOfSlides; i3 += 1) {
        const slideEl = swiper.isElement ? createElement("swiper-slide", [params.slideBlankClass]) : createElement("div", [params.slideClass, params.slideBlankClass]);
        swiper.slidesEl.append(slideEl);
      }
    };
    if (shouldFillGroup) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else if (shouldFillGrid) {
      if (params.loopAddBlankSlides) {
        const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
        addBlankSlides(slidesToAdd);
        swiper.recalcSlides();
        swiper.updateSlides();
      } else {
        showWarning("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
      }
      initSlides();
    } else {
      initSlides();
    }
    swiper.loopFix({
      slideRealIndex,
      direction: params.centeredSlides ? void 0 : "next"
    });
  }
  function loopFix(_temp) {
    let {
      slideRealIndex,
      slideTo: slideTo2 = true,
      direction,
      setTranslate: setTranslate2,
      activeSlideIndex,
      byController,
      byMousewheel
    } = _temp === void 0 ? {} : _temp;
    const swiper = this;
    if (!swiper.params.loop)
      return;
    swiper.emit("beforeLoopFix");
    const {
      slides,
      allowSlidePrev,
      allowSlideNext,
      slidesEl,
      params
    } = swiper;
    const {
      centeredSlides
    } = params;
    swiper.allowSlidePrev = true;
    swiper.allowSlideNext = true;
    if (swiper.virtual && params.virtual.enabled) {
      if (slideTo2) {
        if (!params.centeredSlides && swiper.snapIndex === 0) {
          swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
        } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
          swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
        } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
          swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
        }
      }
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit("loopFix");
      return;
    }
    let slidesPerView = params.slidesPerView;
    if (slidesPerView === "auto") {
      slidesPerView = swiper.slidesPerViewDynamic();
    } else {
      slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
      if (centeredSlides && slidesPerView % 2 === 0) {
        slidesPerView = slidesPerView + 1;
      }
    }
    const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
    let loopedSlides = slidesPerGroup;
    if (loopedSlides % slidesPerGroup !== 0) {
      loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
    }
    loopedSlides += params.loopAdditionalSlides;
    swiper.loopedSlides = loopedSlides;
    const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
    if (slides.length < slidesPerView + loopedSlides) {
      showWarning("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters");
    } else if (gridEnabled && params.grid.fill === "row") {
      showWarning("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
    }
    const prependSlidesIndexes = [];
    const appendSlidesIndexes = [];
    let activeIndex = swiper.activeIndex;
    if (typeof activeSlideIndex === "undefined") {
      activeSlideIndex = swiper.getSlideIndex(slides.filter((el) => el.classList.contains(params.slideActiveClass))[0]);
    } else {
      activeIndex = activeSlideIndex;
    }
    const isNext = direction === "next" || !direction;
    const isPrev = direction === "prev" || !direction;
    let slidesPrepended = 0;
    let slidesAppended = 0;
    const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
    const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
    const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate2 === "undefined" ? -slidesPerView / 2 + 0.5 : 0);
    if (activeColIndexWithShift < loopedSlides) {
      slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
      for (let i3 = 0; i3 < loopedSlides - activeColIndexWithShift; i3 += 1) {
        const index = i3 - Math.floor(i3 / cols) * cols;
        if (gridEnabled) {
          const colIndexToPrepend = cols - index - 1;
          for (let i4 = slides.length - 1; i4 >= 0; i4 -= 1) {
            if (slides[i4].column === colIndexToPrepend)
              prependSlidesIndexes.push(i4);
          }
        } else {
          prependSlidesIndexes.push(cols - index - 1);
        }
      }
    } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
      slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
      for (let i3 = 0; i3 < slidesAppended; i3 += 1) {
        const index = i3 - Math.floor(i3 / cols) * cols;
        if (gridEnabled) {
          slides.forEach((slide2, slideIndex) => {
            if (slide2.column === index)
              appendSlidesIndexes.push(slideIndex);
          });
        } else {
          appendSlidesIndexes.push(index);
        }
      }
    }
    swiper.__preventObserver__ = true;
    requestAnimationFrame(() => {
      swiper.__preventObserver__ = false;
    });
    if (isPrev) {
      prependSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.prepend(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    if (isNext) {
      appendSlidesIndexes.forEach((index) => {
        slides[index].swiperLoopMoveDOM = true;
        slidesEl.append(slides[index]);
        slides[index].swiperLoopMoveDOM = false;
      });
    }
    swiper.recalcSlides();
    if (params.slidesPerView === "auto") {
      swiper.updateSlides();
    } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
      swiper.slides.forEach((slide2, slideIndex) => {
        swiper.grid.updateSlide(slideIndex, slide2, swiper.slides);
      });
    }
    if (params.watchSlidesProgress) {
      swiper.updateSlidesOffset();
    }
    if (slideTo2) {
      if (prependSlidesIndexes.length > 0 && isPrev) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          if (setTranslate2) {
            const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
            swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
            swiper.touchEventsData.currentTranslate = swiper.translate;
          }
        }
      } else if (appendSlidesIndexes.length > 0 && isNext) {
        if (typeof slideRealIndex === "undefined") {
          const currentSlideTranslate = swiper.slidesGrid[activeIndex];
          const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
          const diff = newSlideTranslate - currentSlideTranslate;
          if (byMousewheel) {
            swiper.setTranslate(swiper.translate - diff);
          } else {
            swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
            if (setTranslate2) {
              swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
              swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
            }
          }
        } else {
          const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
          swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
        }
      }
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.controller && swiper.controller.control && !byController) {
      const loopParams = {
        slideRealIndex,
        direction,
        setTranslate: setTranslate2,
        activeSlideIndex,
        byController: true
      };
      if (Array.isArray(swiper.controller.control)) {
        swiper.controller.control.forEach((c2) => {
          if (!c2.destroyed && c2.params.loop)
            c2.loopFix({
              ...loopParams,
              slideTo: c2.params.slidesPerView === params.slidesPerView ? slideTo2 : false
            });
        });
      } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
        swiper.controller.control.loopFix({
          ...loopParams,
          slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo2 : false
        });
      }
    }
    swiper.emit("loopFix");
  }
  function loopDestroy() {
    const swiper = this;
    const {
      params,
      slidesEl
    } = swiper;
    if (!params.loop || swiper.virtual && swiper.params.virtual.enabled)
      return;
    swiper.recalcSlides();
    const newSlidesOrder = [];
    swiper.slides.forEach((slideEl) => {
      const index = typeof slideEl.swiperSlideIndex === "undefined" ? slideEl.getAttribute("data-swiper-slide-index") * 1 : slideEl.swiperSlideIndex;
      newSlidesOrder[index] = slideEl;
    });
    swiper.slides.forEach((slideEl) => {
      slideEl.removeAttribute("data-swiper-slide-index");
    });
    newSlidesOrder.forEach((slideEl) => {
      slidesEl.append(slideEl);
    });
    swiper.recalcSlides();
    swiper.slideTo(swiper.realIndex, 0);
  }
  var loop = {
    loopCreate,
    loopFix,
    loopDestroy
  };
  function setGrabCursor(moving) {
    const swiper = this;
    if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode)
      return;
    const el = swiper.params.touchEventsTarget === "container" ? swiper.el : swiper.wrapperEl;
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    el.style.cursor = "move";
    el.style.cursor = moving ? "grabbing" : "grab";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  function unsetGrabCursor() {
    const swiper = this;
    if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
      return;
    }
    if (swiper.isElement) {
      swiper.__preventObserver__ = true;
    }
    swiper[swiper.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "";
    if (swiper.isElement) {
      requestAnimationFrame(() => {
        swiper.__preventObserver__ = false;
      });
    }
  }
  var grabCursor = {
    setGrabCursor,
    unsetGrabCursor
  };
  function closestElement(selector3, base) {
    if (base === void 0) {
      base = this;
    }
    function __closestFrom(el) {
      if (!el || el === getDocument() || el === getWindow())
        return null;
      if (el.assignedSlot)
        el = el.assignedSlot;
      const found = el.closest(selector3);
      if (!found && !el.getRootNode) {
        return null;
      }
      return found || __closestFrom(el.getRootNode().host);
    }
    return __closestFrom(base);
  }
  function preventEdgeSwipe(swiper, event2, startX) {
    const window2 = getWindow();
    const {
      params
    } = swiper;
    const edgeSwipeDetection = params.edgeSwipeDetection;
    const edgeSwipeThreshold = params.edgeSwipeThreshold;
    if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window2.innerWidth - edgeSwipeThreshold)) {
      if (edgeSwipeDetection === "prevent") {
        event2.preventDefault();
        return true;
      }
      return false;
    }
    return true;
  }
  function onTouchStart(event2) {
    const swiper = this;
    const document2 = getDocument();
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    const data = swiper.touchEventsData;
    if (e2.type === "pointerdown") {
      if (data.pointerId !== null && data.pointerId !== e2.pointerId) {
        return;
      }
      data.pointerId = e2.pointerId;
    } else if (e2.type === "touchstart" && e2.targetTouches.length === 1) {
      data.touchId = e2.targetTouches[0].identifier;
    }
    if (e2.type === "touchstart") {
      preventEdgeSwipe(swiper, e2, e2.targetTouches[0].pageX);
      return;
    }
    const {
      params,
      touches,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e2.pointerType === "mouse")
      return;
    if (swiper.animating && params.preventInteractionOnTransition) {
      return;
    }
    if (!swiper.animating && params.cssMode && params.loop) {
      swiper.loopFix();
    }
    let targetEl = e2.target;
    if (params.touchEventsTarget === "wrapper") {
      if (!elementIsChildOf(targetEl, swiper.wrapperEl))
        return;
    }
    if ("which" in e2 && e2.which === 3)
      return;
    if ("button" in e2 && e2.button > 0)
      return;
    if (data.isTouched && data.isMoved)
      return;
    const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== "";
    const eventPath = e2.composedPath ? e2.composedPath() : e2.path;
    if (swipingClassHasValue && e2.target && e2.target.shadowRoot && eventPath) {
      targetEl = eventPath[0];
    }
    const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
    const isTargetShadow = !!(e2.target && e2.target.shadowRoot);
    if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
      swiper.allowClick = true;
      return;
    }
    if (params.swipeHandler) {
      if (!targetEl.closest(params.swipeHandler))
        return;
    }
    touches.currentX = e2.pageX;
    touches.currentY = e2.pageY;
    const startX = touches.currentX;
    const startY = touches.currentY;
    if (!preventEdgeSwipe(swiper, e2, startX)) {
      return;
    }
    Object.assign(data, {
      isTouched: true,
      isMoved: false,
      allowTouchCallbacks: true,
      isScrolling: void 0,
      startMoving: void 0
    });
    touches.startX = startX;
    touches.startY = startY;
    data.touchStartTime = now();
    swiper.allowClick = true;
    swiper.updateSize();
    swiper.swipeDirection = void 0;
    if (params.threshold > 0)
      data.allowThresholdMove = false;
    let preventDefault = true;
    if (targetEl.matches(data.focusableElements)) {
      preventDefault = false;
      if (targetEl.nodeName === "SELECT") {
        data.isTouched = false;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== targetEl && (e2.pointerType === "mouse" || e2.pointerType !== "mouse" && !targetEl.matches(data.focusableElements))) {
      document2.activeElement.blur();
    }
    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
    if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
      e2.preventDefault();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
      swiper.freeMode.onTouchStart();
    }
    swiper.emit("touchStart", e2);
  }
  function onTouchMove(event2) {
    const document2 = getDocument();
    const swiper = this;
    const data = swiper.touchEventsData;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && event2.pointerType === "mouse")
      return;
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    if (e2.type === "pointermove") {
      if (data.touchId !== null)
        return;
      const id = e2.pointerId;
      if (id !== data.pointerId)
        return;
    }
    let targetTouch;
    if (e2.type === "touchmove") {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    } else {
      targetTouch = e2;
    }
    if (!data.isTouched) {
      if (data.startMoving && data.isScrolling) {
        swiper.emit("touchMoveOpposite", e2);
      }
      return;
    }
    const pageX = targetTouch.pageX;
    const pageY = targetTouch.pageY;
    if (e2.preventedByNestedSwiper) {
      touches.startX = pageX;
      touches.startY = pageY;
      return;
    }
    if (!swiper.allowTouchMove) {
      if (!e2.target.matches(data.focusableElements)) {
        swiper.allowClick = false;
      }
      if (data.isTouched) {
        Object.assign(touches, {
          startX: pageX,
          startY: pageY,
          currentX: pageX,
          currentY: pageY
        });
        data.touchStartTime = now();
      }
      return;
    }
    if (params.touchReleaseOnEdges && !params.loop) {
      if (swiper.isVertical()) {
        if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
          data.isTouched = false;
          data.isMoved = false;
          return;
        }
      } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
        return;
      }
    }
    if (document2.activeElement && document2.activeElement.matches(data.focusableElements) && document2.activeElement !== e2.target && e2.pointerType !== "mouse") {
      document2.activeElement.blur();
    }
    if (document2.activeElement) {
      if (e2.target === document2.activeElement && e2.target.matches(data.focusableElements)) {
        data.isMoved = true;
        swiper.allowClick = false;
        return;
      }
    }
    if (data.allowTouchCallbacks) {
      swiper.emit("touchMove", e2);
    }
    touches.previousX = touches.currentX;
    touches.previousY = touches.currentY;
    touches.currentX = pageX;
    touches.currentY = pageY;
    const diffX = touches.currentX - touches.startX;
    const diffY = touches.currentY - touches.startY;
    if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold)
      return;
    if (typeof data.isScrolling === "undefined") {
      let touchAngle;
      if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
        data.isScrolling = false;
      } else {
        if (diffX * diffX + diffY * diffY >= 25) {
          touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
          data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
        }
      }
    }
    if (data.isScrolling) {
      swiper.emit("touchMoveOpposite", e2);
    }
    if (typeof data.startMoving === "undefined") {
      if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
        data.startMoving = true;
      }
    }
    if (data.isScrolling || e2.type === "touchmove" && data.preventTouchMoveFromPointerMove) {
      data.isTouched = false;
      return;
    }
    if (!data.startMoving) {
      return;
    }
    swiper.allowClick = false;
    if (!params.cssMode && e2.cancelable) {
      e2.preventDefault();
    }
    if (params.touchMoveStopPropagation && !params.nested) {
      e2.stopPropagation();
    }
    let diff = swiper.isHorizontal() ? diffX : diffY;
    let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
    if (params.oneWayMovement) {
      diff = Math.abs(diff) * (rtl ? 1 : -1);
      touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
    }
    touches.diff = diff;
    diff *= params.touchRatio;
    if (rtl) {
      diff = -diff;
      touchesDiff = -touchesDiff;
    }
    const prevTouchesDirection = swiper.touchesDirection;
    swiper.swipeDirection = diff > 0 ? "prev" : "next";
    swiper.touchesDirection = touchesDiff > 0 ? "prev" : "next";
    const isLoop = swiper.params.loop && !params.cssMode;
    const allowLoopFix = swiper.touchesDirection === "next" && swiper.allowSlideNext || swiper.touchesDirection === "prev" && swiper.allowSlidePrev;
    if (!data.isMoved) {
      if (isLoop && allowLoopFix) {
        swiper.loopFix({
          direction: swiper.swipeDirection
        });
      }
      data.startTranslate = swiper.getTranslate();
      swiper.setTransition(0);
      if (swiper.animating) {
        const evt = new window.CustomEvent("transitionend", {
          bubbles: true,
          cancelable: true,
          detail: {
            bySwiperTouchMove: true
          }
        });
        swiper.wrapperEl.dispatchEvent(evt);
      }
      data.allowMomentumBounce = false;
      if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(true);
      }
      swiper.emit("sliderFirstMove", e2);
    }
    let loopFixed;
    (/* @__PURE__ */ new Date()).getTime();
    if (data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
      Object.assign(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
        startTranslate: data.currentTranslate
      });
      data.loopSwapReset = true;
      data.startTranslate = data.currentTranslate;
      return;
    }
    swiper.emit("sliderMove", e2);
    data.isMoved = true;
    data.currentTranslate = diff + data.startTranslate;
    let disableParentSwiper = true;
    let resistanceRatio = params.resistanceRatio;
    if (params.touchReleaseOnEdges) {
      resistanceRatio = 0;
    }
    if (diff > 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
        swiper.loopFix({
          direction: "prev",
          setTranslate: true,
          activeSlideIndex: 0
        });
      }
      if (data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
        }
      }
    } else if (diff < 0) {
      if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== "auto" && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
        swiper.loopFix({
          direction: "next",
          setTranslate: true,
          activeSlideIndex: swiper.slides.length - (params.slidesPerView === "auto" ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
        });
      }
      if (data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
        }
      }
    }
    if (disableParentSwiper) {
      e2.preventedByNestedSwiper = true;
    }
    if (!swiper.allowSlideNext && swiper.swipeDirection === "next" && data.currentTranslate < data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && swiper.swipeDirection === "prev" && data.currentTranslate > data.startTranslate) {
      data.currentTranslate = data.startTranslate;
    }
    if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
      data.currentTranslate = data.startTranslate;
    }
    if (params.threshold > 0) {
      if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
        if (!data.allowThresholdMove) {
          data.allowThresholdMove = true;
          touches.startX = touches.currentX;
          touches.startY = touches.currentY;
          data.currentTranslate = data.startTranslate;
          touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
          return;
        }
      } else {
        data.currentTranslate = data.startTranslate;
        return;
      }
    }
    if (!params.followFinger || params.cssMode)
      return;
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
      swiper.freeMode.onTouchMove();
    }
    swiper.updateProgress(data.currentTranslate);
    swiper.setTranslate(data.currentTranslate);
  }
  function onTouchEnd(event2) {
    const swiper = this;
    const data = swiper.touchEventsData;
    let e2 = event2;
    if (e2.originalEvent)
      e2 = e2.originalEvent;
    let targetTouch;
    const isTouchEvent = e2.type === "touchend" || e2.type === "touchcancel";
    if (!isTouchEvent) {
      if (data.touchId !== null)
        return;
      if (e2.pointerId !== data.pointerId)
        return;
      targetTouch = e2;
    } else {
      targetTouch = [...e2.changedTouches].filter((t2) => t2.identifier === data.touchId)[0];
      if (!targetTouch || targetTouch.identifier !== data.touchId)
        return;
    }
    if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(e2.type)) {
      const proceed = ["pointercancel", "contextmenu"].includes(e2.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
      if (!proceed) {
        return;
      }
    }
    data.pointerId = null;
    data.touchId = null;
    const {
      params,
      touches,
      rtlTranslate: rtl,
      slidesGrid,
      enabled
    } = swiper;
    if (!enabled)
      return;
    if (!params.simulateTouch && e2.pointerType === "mouse")
      return;
    if (data.allowTouchCallbacks) {
      swiper.emit("touchEnd", e2);
    }
    data.allowTouchCallbacks = false;
    if (!data.isTouched) {
      if (data.isMoved && params.grabCursor) {
        swiper.setGrabCursor(false);
      }
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(false);
    }
    const touchEndTime = now();
    const timeDiff = touchEndTime - data.touchStartTime;
    if (swiper.allowClick) {
      const pathTree = e2.path || e2.composedPath && e2.composedPath();
      swiper.updateClickedSlide(pathTree && pathTree[0] || e2.target, pathTree);
      swiper.emit("tap click", e2);
      if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
        swiper.emit("doubleTap doubleClick", e2);
      }
    }
    data.lastClickTime = now();
    nextTick(() => {
      if (!swiper.destroyed)
        swiper.allowClick = true;
    });
    if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      return;
    }
    data.isTouched = false;
    data.isMoved = false;
    data.startMoving = false;
    let currentPos;
    if (params.followFinger) {
      currentPos = rtl ? swiper.translate : -swiper.translate;
    } else {
      currentPos = -data.currentTranslate;
    }
    if (params.cssMode) {
      return;
    }
    if (params.freeMode && params.freeMode.enabled) {
      swiper.freeMode.onTouchEnd({
        currentPos
      });
      return;
    }
    const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
    let stopIndex = 0;
    let groupSize = swiper.slidesSizesGrid[0];
    for (let i3 = 0; i3 < slidesGrid.length; i3 += i3 < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
      const increment2 = i3 < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
      if (typeof slidesGrid[i3 + increment2] !== "undefined") {
        if (swipeToLast || currentPos >= slidesGrid[i3] && currentPos < slidesGrid[i3 + increment2]) {
          stopIndex = i3;
          groupSize = slidesGrid[i3 + increment2] - slidesGrid[i3];
        }
      } else if (swipeToLast || currentPos >= slidesGrid[i3]) {
        stopIndex = i3;
        groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
      }
    }
    let rewindFirstIndex = null;
    let rewindLastIndex = null;
    if (params.rewind) {
      if (swiper.isBeginning) {
        rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
      } else if (swiper.isEnd) {
        rewindFirstIndex = 0;
      }
    }
    const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
    const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
    if (timeDiff > params.longSwipesMs) {
      if (!params.longSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      if (swiper.swipeDirection === "next") {
        if (ratio >= params.longSwipesRatio)
          swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
        else
          swiper.slideTo(stopIndex);
      }
      if (swiper.swipeDirection === "prev") {
        if (ratio > 1 - params.longSwipesRatio) {
          swiper.slideTo(stopIndex + increment);
        } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
          swiper.slideTo(rewindLastIndex);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    } else {
      if (!params.shortSwipes) {
        swiper.slideTo(swiper.activeIndex);
        return;
      }
      const isNavButtonTarget = swiper.navigation && (e2.target === swiper.navigation.nextEl || e2.target === swiper.navigation.prevEl);
      if (!isNavButtonTarget) {
        if (swiper.swipeDirection === "next") {
          swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
        }
        if (swiper.swipeDirection === "prev") {
          swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
        }
      } else if (e2.target === swiper.navigation.nextEl) {
        swiper.slideTo(stopIndex + increment);
      } else {
        swiper.slideTo(stopIndex);
      }
    }
  }
  function onResize() {
    const swiper = this;
    const {
      params,
      el
    } = swiper;
    if (el && el.offsetWidth === 0)
      return;
    if (params.breakpoints) {
      swiper.setBreakpoint();
    }
    const {
      allowSlideNext,
      allowSlidePrev,
      snapGrid
    } = swiper;
    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateSlidesClasses();
    const isVirtualLoop = isVirtual && params.loop;
    if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      if (swiper.params.loop && !isVirtual) {
        swiper.slideToLoop(swiper.realIndex, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
    }
    if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
      clearTimeout(swiper.autoplay.resizeTimeout);
      swiper.autoplay.resizeTimeout = setTimeout(() => {
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
          swiper.autoplay.resume();
        }
      }, 500);
    }
    swiper.allowSlidePrev = allowSlidePrev;
    swiper.allowSlideNext = allowSlideNext;
    if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
      swiper.checkOverflow();
    }
  }
  function onClick(e2) {
    const swiper = this;
    if (!swiper.enabled)
      return;
    if (!swiper.allowClick) {
      if (swiper.params.preventClicks)
        e2.preventDefault();
      if (swiper.params.preventClicksPropagation && swiper.animating) {
        e2.stopPropagation();
        e2.stopImmediatePropagation();
      }
    }
  }
  function onScroll() {
    const swiper = this;
    const {
      wrapperEl,
      rtlTranslate,
      enabled
    } = swiper;
    if (!enabled)
      return;
    swiper.previousTranslate = swiper.translate;
    if (swiper.isHorizontal()) {
      swiper.translate = -wrapperEl.scrollLeft;
    } else {
      swiper.translate = -wrapperEl.scrollTop;
    }
    if (swiper.translate === 0)
      swiper.translate = 0;
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
    let newProgress;
    const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
    if (translatesDiff === 0) {
      newProgress = 0;
    } else {
      newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
    }
    if (newProgress !== swiper.progress) {
      swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
    }
    swiper.emit("setTranslate", swiper.translate, false);
  }
  function onLoad(e2) {
    const swiper = this;
    processLazyPreloader(swiper, e2.target);
    if (swiper.params.cssMode || swiper.params.slidesPerView !== "auto" && !swiper.params.autoHeight) {
      return;
    }
    swiper.update();
  }
  function onDocumentTouchStart() {
    const swiper = this;
    if (swiper.documentTouchHandlerProceeded)
      return;
    swiper.documentTouchHandlerProceeded = true;
    if (swiper.params.touchReleaseOnEdges) {
      swiper.el.style.touchAction = "auto";
    }
  }
  var events = (swiper, method) => {
    const document2 = getDocument();
    const {
      params,
      el,
      wrapperEl,
      device
    } = swiper;
    const capture = !!params.nested;
    const domMethod = method === "on" ? "addEventListener" : "removeEventListener";
    const swiperMethod = method;
    if (!el || typeof el === "string")
      return;
    document2[domMethod]("touchstart", swiper.onDocumentTouchStart, {
      passive: false,
      capture
    });
    el[domMethod]("touchstart", swiper.onTouchStart, {
      passive: false
    });
    el[domMethod]("pointerdown", swiper.onTouchStart, {
      passive: false
    });
    document2[domMethod]("touchmove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("pointermove", swiper.onTouchMove, {
      passive: false,
      capture
    });
    document2[domMethod]("touchend", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerup", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointercancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("touchcancel", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerout", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("pointerleave", swiper.onTouchEnd, {
      passive: true
    });
    document2[domMethod]("contextmenu", swiper.onTouchEnd, {
      passive: true
    });
    if (params.preventClicks || params.preventClicksPropagation) {
      el[domMethod]("click", swiper.onClick, true);
    }
    if (params.cssMode) {
      wrapperEl[domMethod]("scroll", swiper.onScroll);
    }
    if (params.updateOnWindowResize) {
      swiper[swiperMethod](device.ios || device.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", onResize, true);
    } else {
      swiper[swiperMethod]("observerUpdate", onResize, true);
    }
    el[domMethod]("load", swiper.onLoad, {
      capture: true
    });
  };
  function attachEvents() {
    const swiper = this;
    const {
      params
    } = swiper;
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
    swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
    if (params.cssMode) {
      swiper.onScroll = onScroll.bind(swiper);
    }
    swiper.onClick = onClick.bind(swiper);
    swiper.onLoad = onLoad.bind(swiper);
    events(swiper, "on");
  }
  function detachEvents() {
    const swiper = this;
    events(swiper, "off");
  }
  var events$1 = {
    attachEvents,
    detachEvents
  };
  var isGridEnabled = (swiper, params) => {
    return swiper.grid && params.grid && params.grid.rows > 1;
  };
  function setBreakpoint() {
    const swiper = this;
    const {
      realIndex,
      initialized,
      params,
      el
    } = swiper;
    const breakpoints2 = params.breakpoints;
    if (!breakpoints2 || breakpoints2 && Object.keys(breakpoints2).length === 0)
      return;
    const breakpoint = swiper.getBreakpoint(breakpoints2, swiper.params.breakpointsBase, swiper.el);
    if (!breakpoint || swiper.currentBreakpoint === breakpoint)
      return;
    const breakpointOnlyParams = breakpoint in breakpoints2 ? breakpoints2[breakpoint] : void 0;
    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
    const wasMultiRow = isGridEnabled(swiper, params);
    const isMultiRow = isGridEnabled(swiper, breakpointParams);
    const wasGrabCursor = swiper.params.grabCursor;
    const isGrabCursor = breakpointParams.grabCursor;
    const wasEnabled = params.enabled;
    if (wasMultiRow && !isMultiRow) {
      el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
      swiper.emitContainerClasses();
    } else if (!wasMultiRow && isMultiRow) {
      el.classList.add(`${params.containerModifierClass}grid`);
      if (breakpointParams.grid.fill && breakpointParams.grid.fill === "column" || !breakpointParams.grid.fill && params.grid.fill === "column") {
        el.classList.add(`${params.containerModifierClass}grid-column`);
      }
      swiper.emitContainerClasses();
    }
    if (wasGrabCursor && !isGrabCursor) {
      swiper.unsetGrabCursor();
    } else if (!wasGrabCursor && isGrabCursor) {
      swiper.setGrabCursor();
    }
    ["navigation", "pagination", "scrollbar"].forEach((prop) => {
      if (typeof breakpointParams[prop] === "undefined")
        return;
      const wasModuleEnabled = params[prop] && params[prop].enabled;
      const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
      if (wasModuleEnabled && !isModuleEnabled) {
        swiper[prop].disable();
      }
      if (!wasModuleEnabled && isModuleEnabled) {
        swiper[prop].enable();
      }
    });
    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
    const wasLoop = params.loop;
    if (directionChanged && initialized) {
      swiper.changeDirection();
    }
    extend2(swiper.params, breakpointParams);
    const isEnabled = swiper.params.enabled;
    const hasLoop = swiper.params.loop;
    Object.assign(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev
    });
    if (wasEnabled && !isEnabled) {
      swiper.disable();
    } else if (!wasEnabled && isEnabled) {
      swiper.enable();
    }
    swiper.currentBreakpoint = breakpoint;
    swiper.emit("_beforeBreakpoint", breakpointParams);
    if (initialized) {
      if (needsReLoop) {
        swiper.loopDestroy();
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (!wasLoop && hasLoop) {
        swiper.loopCreate(realIndex);
        swiper.updateSlides();
      } else if (wasLoop && !hasLoop) {
        swiper.loopDestroy();
      }
    }
    swiper.emit("breakpoint", breakpointParams);
  }
  function getBreakpoint(breakpoints2, base, containerEl) {
    if (base === void 0) {
      base = "window";
    }
    if (!breakpoints2 || base === "container" && !containerEl)
      return void 0;
    let breakpoint = false;
    const window2 = getWindow();
    const currentHeight = base === "window" ? window2.innerHeight : containerEl.clientHeight;
    const points = Object.keys(breakpoints2).map((point) => {
      if (typeof point === "string" && point.indexOf("@") === 0) {
        const minRatio = parseFloat(point.substr(1));
        const value = currentHeight * minRatio;
        return {
          value,
          point
        };
      }
      return {
        value: point,
        point
      };
    });
    points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
    for (let i3 = 0; i3 < points.length; i3 += 1) {
      const {
        point,
        value
      } = points[i3];
      if (base === "window") {
        if (window2.matchMedia(`(min-width: ${value}px)`).matches) {
          breakpoint = point;
        }
      } else if (value <= containerEl.clientWidth) {
        breakpoint = point;
      }
    }
    return breakpoint || "max";
  }
  var breakpoints = {
    setBreakpoint,
    getBreakpoint
  };
  function prepareClasses(entries, prefix) {
    const resultClasses = [];
    entries.forEach((item) => {
      if (typeof item === "object") {
        Object.keys(item).forEach((classNames) => {
          if (item[classNames]) {
            resultClasses.push(prefix + classNames);
          }
        });
      } else if (typeof item === "string") {
        resultClasses.push(prefix + item);
      }
    });
    return resultClasses;
  }
  function addClasses() {
    const swiper = this;
    const {
      classNames,
      params,
      rtl,
      el,
      device
    } = swiper;
    const suffixes = prepareClasses(["initialized", params.direction, {
      "free-mode": swiper.params.freeMode && params.freeMode.enabled
    }, {
      "autoheight": params.autoHeight
    }, {
      "rtl": rtl
    }, {
      "grid": params.grid && params.grid.rows > 1
    }, {
      "grid-column": params.grid && params.grid.rows > 1 && params.grid.fill === "column"
    }, {
      "android": device.android
    }, {
      "ios": device.ios
    }, {
      "css-mode": params.cssMode
    }, {
      "centered": params.cssMode && params.centeredSlides
    }, {
      "watch-progress": params.watchSlidesProgress
    }], params.containerModifierClass);
    classNames.push(...suffixes);
    el.classList.add(...classNames);
    swiper.emitContainerClasses();
  }
  function removeClasses() {
    const swiper = this;
    const {
      el,
      classNames
    } = swiper;
    if (!el || typeof el === "string")
      return;
    el.classList.remove(...classNames);
    swiper.emitContainerClasses();
  }
  var classes = {
    addClasses,
    removeClasses
  };
  function checkOverflow() {
    const swiper = this;
    const {
      isLocked: wasLocked,
      params
    } = swiper;
    const {
      slidesOffsetBefore
    } = params;
    if (slidesOffsetBefore) {
      const lastSlideIndex = swiper.slides.length - 1;
      const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
      swiper.isLocked = swiper.size > lastSlideRightEdge;
    } else {
      swiper.isLocked = swiper.snapGrid.length === 1;
    }
    if (params.allowSlideNext === true) {
      swiper.allowSlideNext = !swiper.isLocked;
    }
    if (params.allowSlidePrev === true) {
      swiper.allowSlidePrev = !swiper.isLocked;
    }
    if (wasLocked && wasLocked !== swiper.isLocked) {
      swiper.isEnd = false;
    }
    if (wasLocked !== swiper.isLocked) {
      swiper.emit(swiper.isLocked ? "lock" : "unlock");
    }
  }
  var checkOverflow$1 = {
    checkOverflow
  };
  var defaults2 = {
    init: true,
    direction: "horizontal",
    oneWayMovement: false,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: false,
    updateOnWindowResize: true,
    resizeObserver: true,
    nested: false,
    createElements: false,
    eventsPrefix: "swiper",
    enabled: true,
    focusableElements: "input, select, option, textarea, button, video, label",
    // Overrides
    width: null,
    height: null,
    //
    preventInteractionOnTransition: false,
    // ssr
    userAgent: null,
    url: null,
    // To support iOS's swipe-to-go-back gesture (when being used in-app).
    edgeSwipeDetection: false,
    edgeSwipeThreshold: 20,
    // Autoheight
    autoHeight: false,
    // Set wrapper width
    setWrapperSize: false,
    // Virtual Translate
    virtualTranslate: false,
    // Effects
    effect: "slide",
    // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
    // Breakpoints
    breakpoints: void 0,
    breakpointsBase: "window",
    // Slides grid
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: false,
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesOffsetBefore: 0,
    // in px
    slidesOffsetAfter: 0,
    // in px
    normalizeSlideIndex: true,
    centerInsufficientSlides: false,
    // Disable swiper and hide navigation when container not overflow
    watchOverflow: true,
    // Round length
    roundLengths: false,
    // Touches
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: true,
    shortSwipes: true,
    longSwipes: true,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    allowTouchMove: true,
    threshold: 5,
    touchMoveStopPropagation: false,
    touchStartPreventDefault: true,
    touchStartForcePreventDefault: false,
    touchReleaseOnEdges: false,
    // Unique Navigation Elements
    uniqueNavElements: true,
    // Resistance
    resistance: true,
    resistanceRatio: 0.85,
    // Progress
    watchSlidesProgress: false,
    // Cursor
    grabCursor: false,
    // Clicks
    preventClicks: true,
    preventClicksPropagation: true,
    slideToClickedSlide: false,
    // loop
    loop: false,
    loopAddBlankSlides: true,
    loopAdditionalSlides: 0,
    loopPreventsSliding: true,
    // rewind
    rewind: false,
    // Swiping/no swiping
    allowSlidePrev: true,
    allowSlideNext: true,
    swipeHandler: null,
    // '.swipe-handler',
    noSwiping: true,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    // Passive Listeners
    passiveListeners: true,
    maxBackfaceHiddenSlides: 10,
    // NS
    containerModifierClass: "swiper-",
    // NEW
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    // Callbacks
    runCallbacksOnInit: true,
    // Internals
    _emitClasses: false
  };
  function moduleExtendParams(params, allModulesParams) {
    return function extendParams(obj) {
      if (obj === void 0) {
        obj = {};
      }
      const moduleParamName = Object.keys(obj)[0];
      const moduleParams = obj[moduleParamName];
      if (typeof moduleParams !== "object" || moduleParams === null) {
        extend2(allModulesParams, obj);
        return;
      }
      if (params[moduleParamName] === true) {
        params[moduleParamName] = {
          enabled: true
        };
      }
      if (moduleParamName === "navigation" && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
        params[moduleParamName].auto = true;
      }
      if (["pagination", "scrollbar"].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
        params[moduleParamName].auto = true;
      }
      if (!(moduleParamName in params && "enabled" in moduleParams)) {
        extend2(allModulesParams, obj);
        return;
      }
      if (typeof params[moduleParamName] === "object" && !("enabled" in params[moduleParamName])) {
        params[moduleParamName].enabled = true;
      }
      if (!params[moduleParamName])
        params[moduleParamName] = {
          enabled: false
        };
      extend2(allModulesParams, obj);
    };
  }
  var prototypes = {
    eventsEmitter,
    update,
    translate,
    transition,
    slide,
    loop,
    grabCursor,
    events: events$1,
    breakpoints,
    checkOverflow: checkOverflow$1,
    classes
  };
  var extendedDefaults = {};
  var Swiper = class _Swiper {
    constructor() {
      let el;
      let params;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === "Object") {
        params = args[0];
      } else {
        [el, params] = args;
      }
      if (!params)
        params = {};
      params = extend2({}, params);
      if (el && !params.el)
        params.el = el;
      const document2 = getDocument();
      if (params.el && typeof params.el === "string" && document2.querySelectorAll(params.el).length > 1) {
        const swipers = [];
        document2.querySelectorAll(params.el).forEach((containerEl) => {
          const newParams = extend2({}, params, {
            el: containerEl
          });
          swipers.push(new _Swiper(newParams));
        });
        return swipers;
      }
      const swiper = this;
      swiper.__swiper__ = true;
      swiper.support = getSupport();
      swiper.device = getDevice({
        userAgent: params.userAgent
      });
      swiper.browser = getBrowser();
      swiper.eventsListeners = {};
      swiper.eventsAnyListeners = [];
      swiper.modules = [...swiper.__modules__];
      if (params.modules && Array.isArray(params.modules)) {
        swiper.modules.push(...params.modules);
      }
      const allModulesParams = {};
      swiper.modules.forEach((mod) => {
        mod({
          params,
          swiper,
          extendParams: moduleExtendParams(params, allModulesParams),
          on: swiper.on.bind(swiper),
          once: swiper.once.bind(swiper),
          off: swiper.off.bind(swiper),
          emit: swiper.emit.bind(swiper)
        });
      });
      const swiperParams = extend2({}, defaults2, allModulesParams);
      swiper.params = extend2({}, swiperParams, extendedDefaults, params);
      swiper.originalParams = extend2({}, swiper.params);
      swiper.passedParams = extend2({}, params);
      if (swiper.params && swiper.params.on) {
        Object.keys(swiper.params.on).forEach((eventName) => {
          swiper.on(eventName, swiper.params.on[eventName]);
        });
      }
      if (swiper.params && swiper.params.onAny) {
        swiper.onAny(swiper.params.onAny);
      }
      Object.assign(swiper, {
        enabled: swiper.params.enabled,
        el,
        // Classes
        classNames: [],
        // Slides
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        // isDirection
        isHorizontal() {
          return swiper.params.direction === "horizontal";
        },
        isVertical() {
          return swiper.params.direction === "vertical";
        },
        // Indexes
        activeIndex: 0,
        realIndex: 0,
        //
        isBeginning: true,
        isEnd: false,
        // Props
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: false,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        // Locks
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev,
        // Touch Events
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          // Form elements to match
          focusableElements: swiper.params.focusableElements,
          // Last click time
          lastClickTime: 0,
          clickTimeout: void 0,
          // Velocities
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null
        },
        // Clicks
        allowClick: true,
        // Touches
        allowTouchMove: swiper.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        // Images
        imagesToLoad: [],
        imagesLoaded: 0
      });
      swiper.emit("_swiper");
      if (swiper.params.init) {
        swiper.init();
      }
      return swiper;
    }
    getDirectionLabel(property) {
      if (this.isHorizontal()) {
        return property;
      }
      return {
        "width": "height",
        "margin-top": "margin-left",
        "margin-bottom ": "margin-right",
        "margin-left": "margin-top",
        "margin-right": "margin-bottom",
        "padding-left": "padding-top",
        "padding-right": "padding-bottom",
        "marginRight": "marginBottom"
      }[property];
    }
    getSlideIndex(slideEl) {
      const {
        slidesEl,
        params
      } = this;
      const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
      const firstSlideIndex = elementIndex(slides[0]);
      return elementIndex(slideEl) - firstSlideIndex;
    }
    getSlideIndexByData(index) {
      return this.getSlideIndex(this.slides.filter((slideEl) => slideEl.getAttribute("data-swiper-slide-index") * 1 === index)[0]);
    }
    recalcSlides() {
      const swiper = this;
      const {
        slidesEl,
        params
      } = swiper;
      swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
    }
    enable() {
      const swiper = this;
      if (swiper.enabled)
        return;
      swiper.enabled = true;
      if (swiper.params.grabCursor) {
        swiper.setGrabCursor();
      }
      swiper.emit("enable");
    }
    disable() {
      const swiper = this;
      if (!swiper.enabled)
        return;
      swiper.enabled = false;
      if (swiper.params.grabCursor) {
        swiper.unsetGrabCursor();
      }
      swiper.emit("disable");
    }
    setProgress(progress, speed) {
      const swiper = this;
      progress = Math.min(Math.max(progress, 0), 1);
      const min = swiper.minTranslate();
      const max = swiper.maxTranslate();
      const current = (max - min) * progress + min;
      swiper.translateTo(current, typeof speed === "undefined" ? 0 : speed);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    emitContainerClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const cls = swiper.el.className.split(" ").filter((className) => {
        return className.indexOf("swiper") === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
      });
      swiper.emit("_containerClasses", cls.join(" "));
    }
    getSlideClasses(slideEl) {
      const swiper = this;
      if (swiper.destroyed)
        return "";
      return slideEl.className.split(" ").filter((className) => {
        return className.indexOf("swiper-slide") === 0 || className.indexOf(swiper.params.slideClass) === 0;
      }).join(" ");
    }
    emitSlidesClasses() {
      const swiper = this;
      if (!swiper.params._emitClasses || !swiper.el)
        return;
      const updates = [];
      swiper.slides.forEach((slideEl) => {
        const classNames = swiper.getSlideClasses(slideEl);
        updates.push({
          slideEl,
          classNames
        });
        swiper.emit("_slideClass", slideEl, classNames);
      });
      swiper.emit("_slideClasses", updates);
    }
    slidesPerViewDynamic(view, exact) {
      if (view === void 0) {
        view = "current";
      }
      if (exact === void 0) {
        exact = false;
      }
      const swiper = this;
      const {
        params,
        slides,
        slidesGrid,
        slidesSizesGrid,
        size: swiperSize,
        activeIndex
      } = swiper;
      let spv = 1;
      if (typeof params.slidesPerView === "number")
        return params.slidesPerView;
      if (params.centeredSlides) {
        let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
        let breakLoop;
        for (let i3 = activeIndex + 1; i3 < slides.length; i3 += 1) {
          if (slides[i3] && !breakLoop) {
            slideSize += Math.ceil(slides[i3].swiperSlideSize);
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
        for (let i3 = activeIndex - 1; i3 >= 0; i3 -= 1) {
          if (slides[i3] && !breakLoop) {
            slideSize += slides[i3].swiperSlideSize;
            spv += 1;
            if (slideSize > swiperSize)
              breakLoop = true;
          }
        }
      } else {
        if (view === "current") {
          for (let i3 = activeIndex + 1; i3 < slides.length; i3 += 1) {
            const slideInView = exact ? slidesGrid[i3] + slidesSizesGrid[i3] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i3] - slidesGrid[activeIndex] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        } else {
          for (let i3 = activeIndex - 1; i3 >= 0; i3 -= 1) {
            const slideInView = slidesGrid[activeIndex] - slidesGrid[i3] < swiperSize;
            if (slideInView) {
              spv += 1;
            }
          }
        }
      }
      return spv;
    }
    update() {
      const swiper = this;
      if (!swiper || swiper.destroyed)
        return;
      const {
        snapGrid,
        params
      } = swiper;
      if (params.breakpoints) {
        swiper.setBreakpoint();
      }
      [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        }
      });
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      function setTranslate2() {
        const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
        const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
        swiper.setTranslate(newTranslate);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
      let translated;
      if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
        setTranslate2();
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
      } else {
        if ((params.slidesPerView === "auto" || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
          const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
          translated = swiper.slideTo(slides.length - 1, 0, false, true);
        } else {
          translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
        }
        if (!translated) {
          setTranslate2();
        }
      }
      if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
      swiper.emit("update");
    }
    changeDirection(newDirection, needUpdate) {
      if (needUpdate === void 0) {
        needUpdate = true;
      }
      const swiper = this;
      const currentDirection = swiper.params.direction;
      if (!newDirection) {
        newDirection = currentDirection === "horizontal" ? "vertical" : "horizontal";
      }
      if (newDirection === currentDirection || newDirection !== "horizontal" && newDirection !== "vertical") {
        return swiper;
      }
      swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
      swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
      swiper.emitContainerClasses();
      swiper.params.direction = newDirection;
      swiper.slides.forEach((slideEl) => {
        if (newDirection === "vertical") {
          slideEl.style.width = "";
        } else {
          slideEl.style.height = "";
        }
      });
      swiper.emit("changeDirection");
      if (needUpdate)
        swiper.update();
      return swiper;
    }
    changeLanguageDirection(direction) {
      const swiper = this;
      if (swiper.rtl && direction === "rtl" || !swiper.rtl && direction === "ltr")
        return;
      swiper.rtl = direction === "rtl";
      swiper.rtlTranslate = swiper.params.direction === "horizontal" && swiper.rtl;
      if (swiper.rtl) {
        swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "rtl";
      } else {
        swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
        swiper.el.dir = "ltr";
      }
      swiper.update();
    }
    mount(element) {
      const swiper = this;
      if (swiper.mounted)
        return true;
      let el = element || swiper.params.el;
      if (typeof el === "string") {
        el = document.querySelector(el);
      }
      if (!el) {
        return false;
      }
      el.swiper = swiper;
      if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
        swiper.isElement = true;
      }
      const getWrapperSelector = () => {
        return `.${(swiper.params.wrapperClass || "").trim().split(" ").join(".")}`;
      };
      const getWrapper = () => {
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          const res = el.shadowRoot.querySelector(getWrapperSelector());
          return res;
        }
        return elementChildren(el, getWrapperSelector())[0];
      };
      let wrapperEl = getWrapper();
      if (!wrapperEl && swiper.params.createElements) {
        wrapperEl = createElement("div", swiper.params.wrapperClass);
        el.append(wrapperEl);
        elementChildren(el, `.${swiper.params.slideClass}`).forEach((slideEl) => {
          wrapperEl.append(slideEl);
        });
      }
      Object.assign(swiper, {
        el,
        wrapperEl,
        slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
        hostEl: swiper.isElement ? el.parentNode.host : el,
        mounted: true,
        // RTL
        rtl: el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl",
        rtlTranslate: swiper.params.direction === "horizontal" && (el.dir.toLowerCase() === "rtl" || elementStyle(el, "direction") === "rtl"),
        wrongRTL: elementStyle(wrapperEl, "display") === "-webkit-box"
      });
      return true;
    }
    init(el) {
      const swiper = this;
      if (swiper.initialized)
        return swiper;
      const mounted = swiper.mount(el);
      if (mounted === false)
        return swiper;
      swiper.emit("beforeInit");
      if (swiper.params.breakpoints) {
        swiper.setBreakpoint();
      }
      swiper.addClasses();
      swiper.updateSize();
      swiper.updateSlides();
      if (swiper.params.watchOverflow) {
        swiper.checkOverflow();
      }
      if (swiper.params.grabCursor && swiper.enabled) {
        swiper.setGrabCursor();
      }
      if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
        swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
      } else {
        swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
      }
      if (swiper.params.loop) {
        swiper.loopCreate();
      }
      swiper.attachEvents();
      const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
      if (swiper.isElement) {
        lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
      }
      lazyElements.forEach((imageEl) => {
        if (imageEl.complete) {
          processLazyPreloader(swiper, imageEl);
        } else {
          imageEl.addEventListener("load", (e2) => {
            processLazyPreloader(swiper, e2.target);
          });
        }
      });
      preload(swiper);
      swiper.initialized = true;
      preload(swiper);
      swiper.emit("init");
      swiper.emit("afterInit");
      return swiper;
    }
    destroy(deleteInstance, cleanStyles) {
      if (deleteInstance === void 0) {
        deleteInstance = true;
      }
      if (cleanStyles === void 0) {
        cleanStyles = true;
      }
      const swiper = this;
      const {
        params,
        el,
        wrapperEl,
        slides
      } = swiper;
      if (typeof swiper.params === "undefined" || swiper.destroyed) {
        return null;
      }
      swiper.emit("beforeDestroy");
      swiper.initialized = false;
      swiper.detachEvents();
      if (params.loop) {
        swiper.loopDestroy();
      }
      if (cleanStyles) {
        swiper.removeClasses();
        if (el && typeof el !== "string") {
          el.removeAttribute("style");
        }
        if (wrapperEl) {
          wrapperEl.removeAttribute("style");
        }
        if (slides && slides.length) {
          slides.forEach((slideEl) => {
            slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
            slideEl.removeAttribute("style");
            slideEl.removeAttribute("data-swiper-slide-index");
          });
        }
      }
      swiper.emit("destroy");
      Object.keys(swiper.eventsListeners).forEach((eventName) => {
        swiper.off(eventName);
      });
      if (deleteInstance !== false) {
        if (swiper.el && typeof swiper.el !== "string") {
          swiper.el.swiper = null;
        }
        deleteProps(swiper);
      }
      swiper.destroyed = true;
      return null;
    }
    static extendDefaults(newDefaults) {
      extend2(extendedDefaults, newDefaults);
    }
    static get extendedDefaults() {
      return extendedDefaults;
    }
    static get defaults() {
      return defaults2;
    }
    static installModule(mod) {
      if (!_Swiper.prototype.__modules__)
        _Swiper.prototype.__modules__ = [];
      const modules = _Swiper.prototype.__modules__;
      if (typeof mod === "function" && modules.indexOf(mod) < 0) {
        modules.push(mod);
      }
    }
    static use(module) {
      if (Array.isArray(module)) {
        module.forEach((m2) => _Swiper.installModule(m2));
        return _Swiper;
      }
      _Swiper.installModule(module);
      return _Swiper;
    }
  };
  Object.keys(prototypes).forEach((prototypeGroup) => {
    Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
      Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
    });
  });
  Swiper.use([Resize, Observer2]);

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/index.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/virtual.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/keyboard.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/mousewheel.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-element-if-not-defined.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/pagination.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/classes-to-selector.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/scrollbar.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/parallax.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/zoom.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/controller.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/a11y.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/history.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/hash-navigation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/autoplay.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/thumbs.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/free-mode.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/grid.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/manipulation.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-fade.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-init.mjs
  init_live_reload();
  function effectInit(params) {
    const {
      effect,
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams,
      perspective,
      recreateShadows,
      getEffectParams
    } = params;
    on("beforeInit", () => {
      if (swiper.params.effect !== effect)
        return;
      swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
      if (perspective && perspective()) {
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
      }
      const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
      Object.assign(swiper.params, overwriteParamsResult);
      Object.assign(swiper.originalParams, overwriteParamsResult);
    });
    on("setTranslate", () => {
      if (swiper.params.effect !== effect)
        return;
      setTranslate2();
    });
    on("setTransition", (_s, duration) => {
      if (swiper.params.effect !== effect)
        return;
      setTransition2(duration);
    });
    on("transitionEnd", () => {
      if (swiper.params.effect !== effect)
        return;
      if (recreateShadows) {
        if (!getEffectParams || !getEffectParams().slideShadows)
          return;
        swiper.slides.forEach((slideEl) => {
          slideEl.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((shadowEl) => shadowEl.remove());
        });
        recreateShadows();
      }
    });
    let requireUpdateOnVirtual;
    on("virtualUpdate", () => {
      if (swiper.params.effect !== effect)
        return;
      if (!swiper.slides.length) {
        requireUpdateOnVirtual = true;
      }
      requestAnimationFrame(() => {
        if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
          setTranslate2();
          requireUpdateOnVirtual = false;
        }
      });
    });
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-target.mjs
  init_live_reload();
  function effectTarget(effectParams, slideEl) {
    const transformEl = getSlideTransformEl(slideEl);
    if (transformEl !== slideEl) {
      transformEl.style.backfaceVisibility = "hidden";
      transformEl.style["-webkit-backface-visibility"] = "hidden";
    }
    return transformEl;
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/effect-virtual-transition-end.mjs
  init_live_reload();
  function effectVirtualTransitionEnd(_ref) {
    let {
      swiper,
      duration,
      transformElements,
      allSlides
    } = _ref;
    const {
      activeIndex
    } = swiper;
    const getSlide = (el) => {
      if (!el.parentElement) {
        const slide2 = swiper.slides.filter((slideEl) => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode)[0];
        return slide2;
      }
      return el.parentElement;
    };
    if (swiper.params.virtualTranslate && duration !== 0) {
      let eventTriggered = false;
      let transitionEndTarget;
      if (allSlides) {
        transitionEndTarget = transformElements;
      } else {
        transitionEndTarget = transformElements.filter((transformEl) => {
          const el = transformEl.classList.contains("swiper-slide-transform") ? getSlide(transformEl) : transformEl;
          return swiper.getSlideIndex(el) === activeIndex;
        });
      }
      transitionEndTarget.forEach((el) => {
        elementTransitionEnd(el, () => {
          if (eventTriggered)
            return;
          if (!swiper || swiper.destroyed)
            return;
          eventTriggered = true;
          swiper.animating = false;
          const evt = new window.CustomEvent("transitionend", {
            bubbles: true,
            cancelable: true
          });
          swiper.wrapperEl.dispatchEvent(evt);
        });
      });
    }
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-fade.mjs
  function EffectFade(_ref) {
    let {
      swiper,
      extendParams,
      on
    } = _ref;
    extendParams({
      fadeEffect: {
        crossFade: false
      }
    });
    const setTranslate2 = () => {
      const {
        slides
      } = swiper;
      const params = swiper.params.fadeEffect;
      for (let i3 = 0; i3 < slides.length; i3 += 1) {
        const slideEl = swiper.slides[i3];
        const offset = slideEl.swiperSlideOffset;
        let tx = -offset;
        if (!swiper.params.virtualTranslate)
          tx -= swiper.translate;
        let ty = 0;
        if (!swiper.isHorizontal()) {
          ty = tx;
          tx = 0;
        }
        const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
        const targetEl = effectTarget(params, slideEl);
        targetEl.style.opacity = slideOpacity;
        targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
      }
    };
    const setTransition2 = (duration) => {
      const transformElements = swiper.slides.map((slideEl) => getSlideTransformEl(slideEl));
      transformElements.forEach((el) => {
        el.style.transitionDuration = `${duration}ms`;
      });
      effectVirtualTransitionEnd({
        swiper,
        duration,
        transformElements,
        allSlides: true
      });
    };
    effectInit({
      effect: "fade",
      swiper,
      on,
      setTranslate: setTranslate2,
      setTransition: setTransition2,
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: !swiper.params.cssMode
      })
    });
  }

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cube.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-flip.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/shared/create-shadow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-coverflow.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-creative.mjs
  init_live_reload();

  // node_modules/.pnpm/swiper@11.1.14/node_modules/swiper/modules/effect-cards.mjs
  init_live_reload();

  // src/utils/scrollEffect.ts
  function scrollEffect() {
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    const lenis = new Lenis({
      wrapper: window,
      content: document.documentElement,
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
      easing: (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
      infinite: false,
      autoResize: true
    });
    const vagasSwiper = new Swiper(".swiper.is-vagas", {
      direction: "vertical",
      slidesPerView: "auto",
      freeMode: true,
      mousewheel: true,
      nested: true
    });
    const infoSwiper = new Swiper(".swiper.is-vagas-content", {
      modules: [EffectFade],
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: { crossFade: true },
      allowTouchMove: false,
      scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true
      }
    });
    const vagasItems = document.querySelectorAll(".swiper-wrapper.is-vagas .swiper-slide.is-vagas");
    const scrollToItem = (item) => {
      lenis.scrollTo(item, {
        offset: -window.innerHeight / 2 + item.offsetHeight / 2,
        duration: 1,
        easing: (t2) => Math.min(1, 1.001 - Math.pow(2, -10 * t2))
      });
    };
    ScrollTrigger2.create({
      trigger: ".swiper.is-vagas",
      start: "top 20%",
      end: "bottom 80%",
      scrub: true,
      onUpdate: (self2) => {
        const itemIndex = Math.floor(self2.progress * (vagasItems.length - 1));
        infoSwiper.slideTo(itemIndex, 300);
        vagasSwiper.slideTo(itemIndex, 300);
        vagasItems.forEach((item, index) => {
          const isActive = index === itemIndex;
          gsapWithCSS.to(item, { opacity: isActive ? 1 : 0.5, duration: 0.3 });
          const button = item.querySelector(".button.is-vagas");
          if (button) {
            gsapWithCSS.to(button, {
              width: isActive ? "11.38rem" : "9rem",
              backgroundColor: isActive ? "#ffffff" : "transparent",
              color: isActive ? "#000000" : "white",
              duration: 0.3
            });
          }
        });
      }
    });
    vagasItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        infoSwiper.slideTo(index, 300);
        vagasSwiper.slideTo(index, 300);
        scrollToItem(item);
      });
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger2.update);
    gsapWithCSS.ticker.add((time) => {
      lenis.raf(time * 1e3);
    });
    gsapWithCSS.ticker.lagSmoothing(0);
  }

  // src/utils/tabEffect.ts
  init_live_reload();
  function tabEffectsInit() {
    let lastClickedTabIndex = 0;
    $(".atuacao_top_item").on("click", function() {
      lastClickedTabIndex = $(this).index();
    });
    $(".ts_trigger").each(function(index) {
      const totalTabs = $(".atuacao_top_item").length;
      ScrollTrigger2.create({
        trigger: $(this),
        start: "top center",
        end: "+=0",
        markers: false,
        onEnter: () => {
          if (index + 1 > lastClickedTabIndex) {
            $(".atuacao_top_item").eq(index + 1).click();
            lastClickedTabIndex = index + 1;
          }
        },
        onEnterBack: () => {
          if (index < lastClickedTabIndex) {
            $(".atuacao_top_item").eq(index).click();
            lastClickedTabIndex = index;
          }
        }
      });
    });
  }

  // src/utils/textAnimation.ts
  init_live_reload();
  var import_materialize_css = __toESM(require_materialize(), 1);
  function textAnimation() {
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    const buttons = document.querySelectorAll(".nav-link");
    buttons.forEach((button) => {
      let buttonWidth;
      button.addEventListener("mouseenter", (e2) => {
        buttonWidth = button.offsetWidth;
        updateDirection(e2, button);
      });
      button.addEventListener("mousemove", (e2) => updateDirection(e2, button));
      function updateDirection(e2, button2) {
        const mouseX = e2.clientX - button2.getBoundingClientRect().left;
        if (mouseX > buttonWidth / 2) {
          button2.classList.add("left-to-right");
        } else {
          button2.classList.remove("left-to-right");
        }
      }
    });
    const scramble = document.querySelectorAll(".scramble");
    const scrambleTL = gsapWithCSS.timeline({
      scrollTrigger: {
        trigger: scramble,
        start: "top bottom",
        end: "top 50%",
        toggleActions: "play none none none"
      }
    });
    scrambleTL.to(scramble, {
      duration: 3,
      stagger: 0.2,
      scrambleText: { speed: 0.5, text: "{original}", chars: "+?84564XERSHKZN" }
    });
  }

  // src/utils/textScroll.ts
  init_live_reload();
  var import_split_type = __toESM(require_split_type(), 1);
  function textScroll() {
    gsapWithCSS.registerPlugin(ScrollTrigger2);
    const typeSplit = new import_split_type.default("[text-split]", {
      types: "words, chars",
      tagName: "span"
    });
    function createScrollTrigger(triggerElement, timeline2) {
      ScrollTrigger2.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline2.progress(0);
          timeline2.pause();
        }
      });
      ScrollTrigger2.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline2.play()
      });
    }
    $("[words-slide-up]").each(function(index) {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.from($(this).find(".word"), {
        opacity: 0,
        yPercent: 100,
        duration: 0.6,
        ease: "back.out(3)",
        stagger: { amount: 0.5 }
      });
      createScrollTrigger($(this), tl);
    });
    $("[words-rotate-in]").each(function(index) {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.set($(this).find(".word"), { transformPerspective: 1e3 });
      tl.from($(this).find(".word"), {
        rotationX: -90,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger($(this), tl);
    });
    $("[words-slide-from-right]").each(function(index) {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.from($(this).find(".word"), {
        opacity: 0,
        x: "1em",
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.2 }
      });
      createScrollTrigger($(this), tl);
    });
    $("[letters-slide-up]").each(function(index) {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        yPercent: 100,
        duration: 0.3,
        ease: "power3.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger($(this), tl);
    });
    $("[letters-slide-down]").each(function(index) {
      const tl = gsapWithCSS.timeline({ paused: true });
      tl.from($(this).find(".char"), {
        yPercent: -120,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 0.6 }
      });
      createScrollTrigger($(this), tl);
    });
    gsapWithCSS.set("[text-split]", { opacity: 1 });
  }

  // src/index.ts
  rightMenu();
  globeEffect();
  textScroll();
  footerAnimation();
  changeTheme();
  scrollEffect();
  textAnimation();
  processoAnimation();
  heroAnimation();
  tabEffectsInit();
})();
/*! Bundled license information:

materialize-css/dist/js/materialize.js:
  (*!
   * Materialize v1.0.0-rc.2 (http://materializecss.com)
   * Copyright 2014-2017 Materialize
   * MIT License (https://raw.githubusercontent.com/Dogfalo/materialize/master/LICENSE)
   *)
  (*! cash-dom 1.3.5, https://github.com/kenwheeler/cash @license MIT *)
  (**
   * Get time in ms
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
   * @type {function}
   * @return {number}
   *)
  (**
   * Returns a function, that, when invoked, will only be triggered at most once
   * during a given window of time. Normally, the throttled function will run
   * as much as it can, without ever going more than once per `wait` duration;
   * but if you'd like to disable the execution on the leading edge, pass
   * `{leading: false}`. To disable execution on the trailing edge, ditto.
   * @license https://raw.github.com/jashkenas/underscore/master/LICENSE
   * @param {function} func
   * @param {number} wait
   * @param {Object=} options
   * @returns {Function}
   *)
  (*!
  * Waves v0.6.4
  * http://fian.my.id/Waves
  *
  * Copyright 2014 Alfiana E. Sibuea and other contributors
  * Released under the MIT license
  * https://github.com/fians/Waves/blob/master/LICENSE
  *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/utils/matrix.js:
  (*!
   * matrix 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Flip.js:
  (*!
   * Flip 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
//# sourceMappingURL=index.js.map
