// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"kS06O":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "51cf58d705cf099e";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lA0Es":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _model = require("./model");
var _groupsViewJs = require("./views/groupsView.js");
var _groupsViewJsDefault = parcelHelpers.interopDefault(_groupsViewJs);
var _payerViewJs = require("./views/usersView/payerView.js");
var _payerViewJsDefault = parcelHelpers.interopDefault(_payerViewJs);
var _sharerViewJs = require("./views/usersView/sharerView.js");
var _sharerViewJsDefault = parcelHelpers.interopDefault(_sharerViewJs);
var _userMngtViewJs = require("./views/usersView/userMngtView.js");
var _userMngtViewJsDefault = parcelHelpers.interopDefault(_userMngtViewJs);
var _eventsViewJs = require("./views/eventsView/eventsView.js");
var _eventsViewJsDefault = parcelHelpers.interopDefault(_eventsViewJs);
var _eventsHeaderViewJs = require("./views/eventsView/eventsHeaderView.js");
var _eventsHeaderViewJsDefault = parcelHelpers.interopDefault(_eventsHeaderViewJs);
var _balanceViewJs = require("./views/balanceView.js");
var _balanceViewJsDefault = parcelHelpers.interopDefault(_balanceViewJs);
var _debtsView = require("./views/usersView/debtsView");
var _debtsViewDefault = parcelHelpers.interopDefault(_debtsView);
'use strict';
const controlRenderAll = function() {
    _groupsViewJsDefault.default.render(_model.state.groupObject);
    _payerViewJsDefault.default.render(_model.state.activeGroup[0].users);
    _sharerViewJsDefault.default.render(_model.state.activeGroup[0].users);
    _userMngtViewJsDefault.default.render(_model.state.activeGroup[0].users);
    controlRenderEvents();
    _groupsViewJsDefault.default._generateActiveGroup(_model.state.activeGroup[0].id);
};
// Groups
const controlRenderGroups = function() {
    _groupsViewJsDefault.default.render(_model.state.groupObject);
};
const controlActiveGroup = function(id) {
    if (!id) return _model.state.activeGroup[0].id;
    _model.setActiveGroup(_model.state.groupObject.find((group)=>group.id === id
    ));
    controlRenderAll();
    return id;
};
const controlCreateNewGroup = function() {
    const newGroupName = document.querySelector('.newGroupName').value;
    _model.createNewGroup(newGroupName);
    controlRenderAll();
    _groupsViewJsDefault.default._generateActiveGroup(_model.state.activeGroup[0].id);
};
const controlDeleteGroup = function(id) {
    if (_model.state.groupObject.length === 1) {
        alert('請先新增群組，再刪除此群組');
        return;
    }
    _model.deleteGroup(id);
    controlRenderAll();
};
const controlReviseGroup = function(id, newGroupName) {
    if (!_model.state.groupObject.some((group)=>group.groupName === newGroupName
    )) {
        _model.reviesGroupInfo(id, newGroupName);
        _model.setActiveGroup();
        controlRenderAll();
    } else {
        _model.setActiveGroup();
        controlRenderAll();
        return true;
    }
};
//Users
const controlRenderPayers = function() {
    _payerViewJsDefault.default.render(_model.state.activeGroup[0].users);
};
const controlRenderSharers = function() {
    _sharerViewJsDefault.default.render(_model.state.activeGroup[0].users);
};
const controlRenderUserMngts = function() {
    _userMngtViewJsDefault.default.render(_model.state.activeGroup[0].users);
};
const controlCreateNewUser = function(newUserName) {
    _model.createNewUser(newUserName);
    _model.updateUsersBalance();
    _model.isAllMember();
    controlRenderAll();
};
const controlDeleteUser = function(id) {
    _model.deleteUser(id);
    _model.updateUsersBalance();
    _model.isAllMember();
    controlRenderAll();
};
//Events
const controlRenderEvents = function() {
    document.querySelector('.event-list').innerHTML = '';
    _model.state.eventDateList = [];
    _model.state.activeGroup[0].events.map((event)=>{
        if (_model.createEventDateHeader(event)) _eventsHeaderViewJsDefault.default.render(event, false);
        _eventsViewJsDefault.default._parentElement = document.querySelector(`.Date${event.date}`);
        _eventsViewJsDefault.default.render(event, false);
    });
    _eventsViewJsDefault.default._parentElement = document.querySelector('.event-list');
    _balanceViewJsDefault.default.render(_model.state.activeGroup[0].users);
    _debtsViewDefault.default.render(_model.debtRelationship());
};
const controlRenderCreateNewEvents = function() {
    _model.createNewEvent();
    controlRenderEvents();
};
const controlDeleteEvent = function(id) {
    _model.deleteEvent(id);
    controlRenderEvents();
};
const controlDeleteAllLocalStorage = function() {
    _model.deleteAllLocalStorage();
};
const controlReviseUserMngt = function(id, newUserName) {
    if (_model.state.activeGroup[0].users.map((user)=>user.userName === newUserName
    ).includes(true)) {
        alert('已有相同使用者，請重新輸入');
        return;
    }
    _model.reviesUserInfo(id, newUserName);
    _model.setActiveGroup();
    controlRenderAll();
};
const init = function() {
    // Render
    _groupsViewJsDefault.default._addHandlerRender(controlRenderGroups);
    _groupsViewJsDefault.default._addHandlerAddActive(controlActiveGroup);
    _payerViewJsDefault.default._addHandlerRender(controlRenderPayers);
    _sharerViewJsDefault.default._addHandlerRender(controlRenderSharers);
    _userMngtViewJsDefault.default._addHandlerRender(controlRenderUserMngts);
    _eventsViewJsDefault.default._addHandlerRender(controlRenderEvents);
    _sharerViewJsDefault.default._addHandlerMarkSharer();
    // Create
    _groupsViewJsDefault.default._addHandlerNewGroup(controlCreateNewGroup);
    _eventsViewJsDefault.default._addHandlerNewEvent(controlRenderCreateNewEvents);
    _userMngtViewJsDefault.default._addHandlerNewUser(controlCreateNewUser);
    // Delete
    _eventsViewJsDefault.default._addHandlerDeleteEvent(controlDeleteEvent);
    _groupsViewJsDefault.default._addHandlerDeleteGroup(controlDeleteGroup);
    _userMngtViewJsDefault.default._addHandlerDeleteUser(controlDeleteUser);
    // Revise
    _groupsViewJsDefault.default._addHandlerReviseGroup(controlReviseGroup);
    _userMngtViewJsDefault.default._addHandlerReviseUser(controlReviseUserMngt);
    // ToggleVisible
    _groupsViewJsDefault.default._addHandlerToggleSidebar();
    _groupsViewJsDefault.default._addHandlerToggleCreateWindow();
    _balanceViewJsDefault.default._addHandlerToggleSidebar();
    _userMngtViewJsDefault.default._addHandlerToggleWindow();
    _userMngtViewJsDefault.default._addHandlerToggleNewUserWindow();
    _sharerViewJsDefault.default._addHandlerSelectAll();
    _eventsViewJsDefault.default._addHandlerScrolltoEventTop();
    // Local Storage
    _groupsViewJsDefault.default._addHandlerDeleteAllGroups(controlDeleteAllLocalStorage);
};
init();

},{"./model":"1pVJj","./views/groupsView.js":"8rCOT","./views/usersView/payerView.js":"6ZhYb","./views/usersView/sharerView.js":"bfXUJ","./views/usersView/userMngtView.js":"kqe1H","./views/eventsView/eventsView.js":"6WopJ","./views/eventsView/eventsHeaderView.js":"akg9f","./views/balanceView.js":"1F7sM","./views/usersView/debtsView":"fSwuM","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1pVJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
//  Group Instance
parcelHelpers.export(exports, "Group", ()=>Group
);
//  User Instance
parcelHelpers.export(exports, "User", ()=>User
);
//  Event Instance
parcelHelpers.export(exports, "Event", ()=>Event
);
parcelHelpers.export(exports, "state", ()=>state
);
parcelHelpers.export(exports, "createNewGroup", ()=>createNewGroup
);
parcelHelpers.export(exports, "deleteGroup", ()=>deleteGroup
);
parcelHelpers.export(exports, "setActiveGroup", ()=>setActiveGroup
);
parcelHelpers.export(exports, "createNewUser", ()=>createNewUser
);
parcelHelpers.export(exports, "deleteUser", ()=>deleteUser
);
parcelHelpers.export(exports, "updateUsersBalance", ()=>updateUsersBalance
);
parcelHelpers.export(exports, "reviesUserInfo", ()=>reviesUserInfo
);
parcelHelpers.export(exports, "reviesGroupInfo", ()=>reviesGroupInfo
);
parcelHelpers.export(exports, "createNewEvent", ()=>createNewEvent
);
parcelHelpers.export(exports, "deleteEvent", ()=>deleteEvent
);
parcelHelpers.export(exports, "updateDeleteEventAmont", ()=>updateDeleteEventAmont
);
parcelHelpers.export(exports, "createEventDateHeader", ()=>createEventDateHeader
);
parcelHelpers.export(exports, "sortEventsOrder", ()=>sortEventsOrder
);
parcelHelpers.export(exports, "debtRelationship", ()=>debtRelationship
);
parcelHelpers.export(exports, "isAllMember", ()=>isAllMember
);
parcelHelpers.export(exports, "storeLocalStorage", ()=>storeLocalStorage
);
parcelHelpers.export(exports, "deleteAllLocalStorage", ()=>deleteAllLocalStorage
);
class Group {
    constructor(groupName, users, events){
        this.id = this._getRomdomId();
        this.groupName = groupName;
        this.users = users;
        this.events = events;
    }
    _getRomdomId() {
        return 'G_' + Math.random().toString(36).substr(2, 9);
    }
}
class User {
    constructor(userName, assets, debts, group2){
        this.id = this._getRomdomId();
        this.userName = userName;
        this.assets = assets;
        this.debts = debts;
        this.group = group2;
        this.balance = this.assets - this.debts;
    }
    _getRomdomId() {
        return 'U_' + Math.random().toString(36).substr(2, 9);
    }
}
class Event {
    // prettier-ignore
    constructor(spend1, date1, type1, productName1, note1, payer1, payerId1, sharer1, sharerId, group1, groupId, isAllMember1){
        this.id = this._getRomdomId();
        this.spend = spend1;
        this.date = date1;
        this.type = type1;
        this.productName = productName1;
        this.note = note1;
        this.payer = payer1;
        this.payerId = payerId1;
        this.sharer = sharer1;
        this.sharerId = sharerId;
        this.group = group1;
        this.groupId = groupId;
        this.isAllMember = isAllMember1;
    }
    _getRomdomId() {
        return 'E_' + Math.random().toString(36).substr(2, 9);
    }
}
const state = {
    activeGroup: [],
    groupObject: [],
    sharerId: [],
    sharer: [],
    eventDateList: []
};
const createNewGroup = async function(newGroupName) {
    const newGroup = new Group(newGroupName, [], []);
    // 將新群組設定成active
    setActiveGroup(newGroup);
    // 建立預設使用者
    createDefaultUserObject(newGroup);
    state.groupObject.push(newGroup);
    // 更新新使用者的balance
    updateUsersBalance();
    storeLocalStorage();
};
const deleteGroup = function(id) {
    const target = state.groupObject.find((group)=>group.id === id
    );
    const index = state.groupObject.indexOf(target);
    // 刪除特定群組
    state.groupObject.splice(index, 1);
    // 更新active群組
    state.activeGroup.splice(0, 1);
    state.activeGroup.push(state.groupObject[index - 1 > 0 ? index - 1 : 0]);
    storeLocalStorage();
};
const setActiveGroup = async function(group3) {
    // 若group參數無值，則active群組依舊為目前的active群組
    if (!group3) {
        const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
        );
        const index = state.groupObject.indexOf(activeGroup);
        group3 = state.groupObject[index];
    }
    // 若group參數有值，設定新的active群組
    state.activeGroup.splice(0, 1);
    state.activeGroup.push(group3);
    storeLocalStorage();
};
const createNewUser = function(newUserName) {
    console.log(newUserName);
    if (newUserName.value === '') {
        alert('名稱不可為空');
        return;
    }
    // 建立New User Instance
    createNewUserObject(newUserName);
    storeLocalStorage();
    newUserName.value = '';
};
const createNewUserObject = function(newUserName) {
    if (state.activeGroup[0].users.map((user)=>user.userName === newUserName
    ).includes(true)) {
        alert('已有相同名稱，請重新命名');
        return;
    }
    // 建立New User Instance
    const newUser = new User(newUserName, 0, 0, state.activeGroup[0].groupName);
    const index = state.groupObject.findIndex((group)=>group.id === state.activeGroup[0].id
    );
    state.groupObject[index].users.push(newUser);
    setActiveGroup(state.groupObject[index]);
    storeLocalStorage();
};
const deleteUser = function(id) {
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    const obj = state.activeGroup[0].users.find((user)=>user.id === id
    );
    const index = state.activeGroup[0].users.indexOf(obj);
    if (index === 0) {
        alert('無法刪除自己');
        return;
    } else if (obj.balance !== 0) {
        alert('帳款尚未平衡');
        return;
    } else {
        state.groupObject[activeGroupIndex].users.splice(index, 1);
        setActiveGroup(state.groupObject[activeGroupIndex]);
    }
    storeLocalStorage();
};
const updateUsersAmont = function(newEvent) {
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    //更新使用者應收額
    const payer2 = state.groupObject[activeGroupIndex].users.find((payer)=>payer.id === `${newEvent.payerId}`
    );
    payer2.assets = Number(payer2.assets) + Number(newEvent.spend);
    //更新使用者應付額
    for (const i of newEvent.sharer){
        const [sharer2] = state.groupObject[activeGroupIndex].users.filter((sharer)=>sharer.id === `${newEvent.sharerId[newEvent.sharer.indexOf(i)]}`
        );
        if (!sharer2) return;
        sharer2.debts = Number(Number(sharer2.debts) + Number((newEvent.spend / state.sharer.length).toFixed(2))).toFixed(2);
    }
    updateUsersBalance();
    setActiveGroup(state.groupObject[activeGroupIndex]);
};
const updateUsersBalance = function() {
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    //更新active群組中的user balance
    if (!state.groupObject[activeGroupIndex]) return;
    state.groupObject[activeGroupIndex].users.map((user)=>user.balance = user.assets - user.debts
    );
    setActiveGroup(state.groupObject[activeGroupIndex]);
};
const reviesUserInfo = function(id, newUserName) {
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const groupIndex = state.groupObject.indexOf(activeGroup);
    const target = state.groupObject[groupIndex].users.find((user)=>user.id === id
    );
    target.userName = newUserName;
};
const reviesGroupInfo = function(id, newGroupName) {
    const target = state.groupObject.find((group)=>group.id === id
    );
    target.groupName = newGroupName;
};
const createNewEvent = function() {
    // 確認使用者為分款者的名單
    checkSharerList();
    if (state.sharerId.length === 0) {
        alert('分款者為必填');
        return;
    }
    // 建立new Event Instance
    createNewEventObject();
    // 透過時間排序事件
    sortEventsOrder();
    storeLocalStorage();
    state.sharerId = [];
    state.sharer = [];
};
const createNewEventObject = function() {
    const spend = document.querySelector('.event-form__input--spend');
    const date = document.querySelector('.event-form__input--date');
    const type = document.querySelector('.event-form__input--type');
    const productName = document.querySelector('.event-form__input--name');
    const note = document.querySelector('.event-form__input--note');
    const payerId = document.querySelector('.event-form__input--payer');
    const payer = state.activeGroup[0].users.find((user)=>user.id === payerId.value
    );
    if (!Number.isFinite(+spend.value) || Number(spend.value) < 0 || Number(spend.value) % 1 !== 0) {
        alert('請輸入正整數');
        state.sharerId = [];
        state.sharer = [];
        return;
    }
    // 建立new Event Instance
    const newEvent = new Event(spend.value, date.value, type.value, productName.value, note.value, payer.userName, payerId.value, state.sharer, state.sharerId, state.activeGroup[0].groupName, state.activeGroup[0].id, state.sharerId.length === state.activeGroup[0].users.length ? true : false);
    const index = state.groupObject.findIndex((group)=>group.id === state.activeGroup[0].id
    );
    state.groupObject[index].events.push(newEvent);
    setActiveGroup(state.groupObject[index]);
    updateUsersAmont(newEvent);
    storeLocalStorage();
};
const deleteEvent = function(id) {
    // 刪除特定event
    const obj = state.activeGroup[0].events.find((event)=>event.id === id
    );
    const index = state.activeGroup[0].events.indexOf(obj);
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    updateDeleteEventAmont(id);
    state.groupObject[activeGroupIndex].events.splice(index, 1);
    sortEventsOrder();
    setActiveGroup(state.groupObject[activeGroupIndex]);
    storeLocalStorage();
};
const updateDeleteEventAmont = function(id) {
    // 更新被刪除event中使用者數值
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    const deletedEvent = state.groupObject[activeGroupIndex].events.find((event)=>event.id === id
    );
    //更新收款者的值;
    const payer = state.groupObject[activeGroupIndex].users.find((user)=>user.id === deletedEvent.payerId
    );
    payer.assets = Number(payer.assets) - Number(deletedEvent.spend);
    //更新分款者的值;
    for (const i of deletedEvent.sharer){
        const [sharer] = state.groupObject[activeGroupIndex].users.filter((user)=>user.id === `${deletedEvent.sharerId[deletedEvent.sharer.indexOf(i)]}`
        );
        if (!sharer) return;
        sharer.debts = Number(Number(sharer.debts) - Number((deletedEvent.spend / deletedEvent.sharer.length).toFixed(2))).toFixed(2);
    }
    // 更新使用者balance值
    updateUsersBalance();
};
const createEventDateHeader = function(event) {
    // 建立日期標誌
    const dateSet = new Set(state.eventDateList);
    if (dateSet.has(event.date)) return false;
    state.eventDateList.push(event.date);
    storeLocalStorage();
    return true;
};
const checkSharerList = function() {
    // 確認使用者中誰為分款者
    document.querySelectorAll('input[type=checkbox]:checked').forEach((el)=>{
        state.sharerId.push(el.classList[1]);
        state.sharer.push(el.value);
        if (state.sharer.at(-1) === 'selectedAll') {
            state.sharer.splice(-1, 1);
            state.sharerId.splice(-1, 1);
        }
    });
};
const sortEventsOrder = function() {
    //透過日期排序Event順序
    state.activeGroup[0].events = state.activeGroup[0].events.map((event)=>event
    ).sort((a, b)=>new Date(a.date) - new Date(b.date)
    );
};
const debtRelationship = function() {
    const debtRelation = [];
    const renderArr = [];
    if (!state.activeGroup[0]) return;
    //在DebtRelation Array中push所有user的userName與balance
    state.activeGroup[0].users.map((obj)=>{
        debtRelation.push([
            `${obj.userName}`,
            `${obj.balance}`
        ]);
    });
    //將DebtRelation內元素由大至小排序
    debtRelation.sort((a, b)=>b[1] - a[1]
    );
    //宣告所需變數
    let creditor = debtRelation[0][0];
    let debtor = debtRelation[debtRelation.length - 1][0];
    let creditorPayment = +debtRelation[0][1];
    let debtorPayment = +debtRelation[debtRelation.length - 1][1];
    //若DebtRelation內只有預設使用者，或是尚無應收應付帳款，則顯示尚無應收/應付帳款
    if (debtRelation.length === 1 || creditorPayment === 0 && debtorPayment === 0) return false;
    else {
        //若有應收/應付帳款時，執行此迴圈
        while(creditorPayment > 0 && debtorPayment < 0)if (creditorPayment > debtorPayment) {
            //更新debtRelation帳款
            if (Math.abs(creditorPayment) > Math.abs(debtorPayment)) {
                debtRelation[0][1] = creditorPayment + debtorPayment;
                debtRelation[debtRelation.length - 1][1] = debtorPayment - debtorPayment;
                renderArr.push({
                    creditor,
                    debtor,
                    payment: -debtorPayment
                });
            } else if (Math.abs(creditorPayment) < Math.abs(debtorPayment) || Math.abs(creditorPayment) === Math.abs(debtorPayment) && creditorPayment !== 0) {
                debtRelation[0][1] = creditorPayment - creditorPayment;
                debtRelation[debtRelation.length - 1][1] = debtorPayment + creditorPayment;
                renderArr.push({
                    creditor,
                    debtor,
                    payment: creditorPayment
                });
            } else return;
            //重新排序debtRelation
            debtRelation.sort((a, b)=>b[1] - a[1]
            );
            //重新宣告變數
            creditor = debtRelation[0][0];
            debtor = debtRelation[debtRelation.length - 1][0];
            creditorPayment = Number(debtRelation[0][1]);
            debtorPayment = Number(debtRelation[debtRelation.length - 1][1]);
        }
        return renderArr;
    }
};
//------------------------INIT------------------------
const getDeviceHeight = ()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    console.log(`執行成功，目前高度為${vh * 100}px`);
};
const createDefaultUserObject = function(group) {
    // prettier-ignore
    if (group.users.length === 0) {
        newUser = new User('自己', 0, 0, state.activeGroup[0].groupName);
        group.users.push(newUser);
        setActiveGroup(group);
    } else return;
};
const isAllMember = ()=>{
    const activeGroup = state.groupObject.find((group)=>group.id === state.activeGroup[0].id
    );
    const activeGroupIndex = state.groupObject.indexOf(activeGroup);
    state.groupObject[activeGroupIndex].events.map((event)=>{
        event.isAllMember = event.sharerId.length === state.groupObject[activeGroupIndex].users.length ? true : false;
    });
    setActiveGroup(state.groupObject[activeGroupIndex]);
    storeLocalStorage();
};
const createDefaultGroupObject = function() {
    if (state.groupObject.length === 0) createNewGroup('預設群組');
};
const setDefaultDate = function() {
    const now = new Date();
    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, 0);
    const dates = `${now.getDate()}`.padStart(2, 0);
    const todayDate = `${year}-${month}-${dates}`;
    const dateInput = document.querySelector('.event-form__input--date');
    dateInput.setAttribute('value', todayDate);
};
const storeLocalStorage = function() {
    persistLocalData();
    getLocalData();
};
const persistLocalData = function() {
    localStorage.setItem('groups', JSON.stringify(state.groupObject));
    localStorage.setItem('activeGroup', JSON.stringify(state.activeGroup));
};
const getLocalData = function() {
    const groupsData = JSON.parse(localStorage.getItem('groups'));
    const activeGroupData = JSON.parse(localStorage.getItem('activeGroup'));
    if (!activeGroupData || !groupsData) return;
    state.groupObject = groupsData;
    state.activeGroup[0] = activeGroupData[0];
};
const deleteAllLocalStorage = ()=>{
    localStorage.clear();
};
const init = function() {
    getDeviceHeight();
    getLocalData();
    createDefaultGroupObject();
    setDefaultDate();
    updateUsersBalance();
    persistLocalData();
};
init();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"8rCOT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("./View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _revisePng = require("url:../../img/revise.png");
var _revisePngDefault = parcelHelpers.interopDefault(_revisePng);
var _deletePng = require("url:../../img/delete.png");
var _deletePngDefault = parcelHelpers.interopDefault(_deletePng);
class GroupsView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.group-list');
    _group = document.querySelector('.group');
    // render all groups
    _addHandlerRender(handler5) {
        window.addEventListener('load', handler5);
        this._group.addEventListener('click', (e)=>{
            if (!e.target.closest('.group') || e.target.classList.contains('group__item--revise') || e.target.classList.contains('group__item--delete')) return;
            handler5();
        });
    }
    _addHandlerAddActive(handler1) {
        window.addEventListener('load', ()=>{
            this._generateActiveGroup(handler1());
        });
        this._group.addEventListener('click', (e)=>{
            if (e.target.classList.contains('group__item--delete')) return;
            if (!e.target.closest('.group-list__info')) {
                this._generateActiveGroup(handler1());
                return;
            }
            const target = e.target.closest('.group-list__info').classList[1];
            this._generateActiveGroup(handler1(target));
        });
    }
    _addHandlerNewGroup(handler2) {
        const newGroupForm = document.querySelector('.group-create__form');
        const newGroupName = document.querySelector('.newGroupName');
        newGroupForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler2();
            newGroupName.value = '';
            newGroupForm.classList.add('hidden');
        });
    }
    _addHandlerReviseGroup(handler3) {
        this._parentElement.addEventListener('click', (e1)=>{
            if (!e1.target.classList.contains('group__item--revise')) return;
            const target = e1.target.parentNode.parentNode.classList[1];
            const newGroupName = e1.target.parentNode.children[1];
            this._groupsSetDefault();
            this._groupsSetInputField(newGroupName);
            newGroupName.addEventListener('keypress', (e)=>{
                if (e.key !== 'Enter') return;
                if (newGroupName.value === '') newGroupName.setAttribute('value', newGroupName.dataset.name);
                if (newGroupName.value !== '') {
                    if (handler3(target, newGroupName.value)) {
                        alert('已有相同群組，請重新命名');
                        newGroupName.value = '';
                        return;
                    }
                    e.preventDefault();
                    newGroupName.setAttribute('value', newGroupName.value);
                    handler3(target, newGroupName.value);
                }
                newGroupName.setAttribute('readonly', '');
                newGroupName.removeAttribute('placeholder');
            });
        });
    }
    _addHandlerDeleteGroup(handler4) {
        this._parentElement.addEventListener('click', function(e) {
            if (!e.target.closest('.group__item--delete')) return;
            const target = e.target.closest('.group-list__info').classList[1];
            handler4(target);
        });
    }
    _addHandlerToggleSidebar() {
        window.addEventListener('click', (e)=>{
            const toggleGroupVisible = document.getElementById('toggleGroupArea');
            const eventGroupBtn = e.target.classList.contains('event__btn--groups');
            const groupCloseBtn = e.target.classList.contains('group__btn--close');
            const groupArea = e.target.closest('.group');
            const groupList = e.target.closest('.group-list__info');
            if (eventGroupBtn || groupCloseBtn || toggleGroupVisible.checked && !groupArea && !groupList) {
                this._groupsSetDefault();
                toggleGroupVisible.checked = !toggleGroupVisible.checked;
            }
        });
    }
    _addHandlerToggleCreateWindow() {
        const createBtn = document.querySelector('.group-create__btn');
        const newGroupForm = document.querySelector('.group-create__form');
        const newGroupName = document.querySelector('.newGroupName');
        createBtn.addEventListener('click', function() {
            newGroupForm.classList.toggle('hidden');
            newGroupName.focus();
        });
    }
    _groupsSetDefault = function() {
        const allGroupNames = document.querySelectorAll('.group-list__info .group__item--headline');
        allGroupNames.forEach((users)=>{
            users.setAttribute('readonly', '');
            users.removeAttribute('placeholder');
            users.value = users.dataset.name;
        });
    };
    _groupsSetInputField = function(newGroupName) {
        newGroupName.removeAttribute('readonly');
        newGroupName.value = '';
        newGroupName.setAttribute('placeholder', '新群組名');
        newGroupName.focus();
    };
    _addHandlerDeleteAllGroups = function(handler) {
        window.addEventListener('click', (e)=>{
            if (!e.target.classList.contains('event__btn--deleteAllInfo')) return;
            const firstCheck = confirm('您確定要刪除所有資料嗎？將會刪除所有的群組、使用者及記錄。');
            if (firstCheck) {
                const secondCheck = confirm('您確定嗎？');
                if (secondCheck) {
                    handler();
                    alert('所有資料已被刪除！');
                    location.reload();
                } else return;
            } else return;
        });
    };
    _generateActiveGroup(id) {
        const allGroup = document.querySelectorAll('.group-list__info');
        allGroup.forEach((group)=>{
            group.classList.remove('active');
        });
        if (!document.querySelector(`.${id}`)) return;
        document.querySelector(`.${id}`).classList.add('active');
    }
    _generateMarkup() {
        return this._data.map((group)=>`
      <div class="group-list__info ${group.id}">
        <div class="group__items">
          <div class="group__item--icon">
            <span>${group.groupName.charAt(0)}</span>
          </div>
          <input
            class="group__item--headline"
            autocomplete="off"
            readonly
            required
            maxlength="5"
            placeholder=""
            value="${group.groupName}"
            data-name="${group.groupName}"
          />
          <div class="group__item--subhead">
            ${group.users.length}位成員
          </div>
          <img class="group__item--revise" src="${_revisePngDefault.default}"></img>
          <img class="group__item--delete" src="${_deletePngDefault.default}"></img>
        </div>
      </div>`
        ).reverse().join('');
    }
}
exports.default = new GroupsView();

},{"./View.js":"9dvKv","url:../../img/revise.png":"av4eb","url:../../img/delete.png":"9mXIo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9dvKv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class View {
    render(data, clear = true) {
        this._data = data;
        const markup = this._generateMarkup();
        if (clear) this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    _clear() {
        this._parentElement.innerHTML = '';
    }
    renderError(message = this._errorMessage) {
        const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
    renderMessage(message1 = this._message) {
        const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message1}</p>
      </div>
    `;
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
}
exports.default = View;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"av4eb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "revise.fcdd5b78.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"9mXIo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('71ti3') + "delete.d425e3ad.png" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6ZhYb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class PayerView extends _viewDefault.default {
    _parentElement = document.querySelector('.event-form__input--payer');
    _addHandlerRender(handler) {
        window.addEventListener('load', ()=>{
            handler();
        });
    }
    _generateMarkup() {
        return this._data.map((user)=>`<option value="${user.id}">${user.userName}</option>`
        ).join('');
    }
}
exports.default = new PayerView();

},{"../View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bfXUJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class SharerView extends _viewDefault.default {
    _parentElement = document.querySelector('.event-form__input--sharers');
    _addHandlerRender(handler) {
        window.addEventListener('load', ()=>{
            handler();
        });
    }
    _addHandlerMarkSharer() {
        this._parentElement.addEventListener('click', (e)=>{
            if (!e.target.classList.contains('event-form__input--sharer')) return;
            if (!e.target.previousElementSibling.checked) e.target.classList.add('checked');
            if (e.target.previousElementSibling.checked) e.target.classList.remove('checked');
        });
    }
    _addHandlerSelectAll() {
        window.addEventListener('click', (e)=>{
            if (!e.target.classList.contains('selectedAll')) return;
            const selectedAllCheckbox = document.querySelector('.selectedAllCheckbox');
            const allCheckboxes = document.querySelectorAll('.checkbox');
            if (!selectedAllCheckbox.checked) allCheckboxes.forEach((checkbox)=>{
                checkbox.checked = true;
                checkbox.nextElementSibling.classList.add('checked');
            });
            if (selectedAllCheckbox.checked) {
                allCheckboxes.forEach((checkbox)=>{
                    checkbox.checked = false;
                    checkbox.nextElementSibling.classList.remove('checked');
                });
                return;
            }
        });
    }
    _generateMarkup() {
        return this._data.map((user)=>`
        <input class="checkbox ${user.id}" type="checkbox" id="${user.id}" value="${user.userName}"/>
        <label class="event-form__input--sharer" for="${user.id}">${user.userName}</label>
        `
        ).join('') + (this._data.length > 1 ? `
        <input class="selectedAllCheckbox" type="checkbox" id="selectedAll" value = "selectedAll">
        <label class="event-form__input--sharer selectedAll" for="selectedAll">全選</label>
        ` : '');
    // : '';
    // this._data.length >
    // 1
    // ? `
    // <input class="checkbox selectedAll" type="checkbox" id="selectedAll" value="全選"/>
    // <label class="event-form__input--sharer" for="selectedAll">全選</label>
    //   `
    // : '';
    }
}
exports.default = new SharerView();

},{"../View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kqe1H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _viewJs = require("../View.js");
var _viewJsDefault = parcelHelpers.interopDefault(_viewJs);
var _revisePng = require("url:../../../img/revise.png");
var _revisePngDefault = parcelHelpers.interopDefault(_revisePng);
var _deletePng = require("url:../../../img/delete.png");
var _deletePngDefault = parcelHelpers.interopDefault(_deletePng);
class UserMgntView extends _viewJsDefault.default {
    _parentElement = document.querySelector('.user__infos');
    _addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _addHandlerNewUser(handler1) {
        const newUserName = document.querySelector('.user-form__input--newUserName');
        const allUserInfos = document.querySelector('.user__infos');
        const newUserForm = document.querySelector('.user-form');
        const newUserNameInput = document.querySelector('.user-form__input--newUserName');
        newUserForm.addEventListener('submit', (e)=>{
            e.preventDefault();
            handler1(newUserName.value);
            const newUserId = allUserInfos.children[allUserInfos.children.length - 1].id;
            document.querySelector(`.user__info #${newUserId}`).scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            });
            newUserNameInput.value = '';
        });
    }
    _addHandlerDeleteUser(handler2) {
        document.querySelector('.userMngt').addEventListener('click', (e)=>{
            if (!e.target.classList.contains('user__info__btn--delete')) return;
            const target = e.target.parentElement.parentElement.id;
            handler2(target);
        });
    }
    _addHandlerToggleWindow() {
        window.addEventListener('click', (e)=>{
            const eventUserMngtBtn = e.target.classList.contains('event__btn--usersMngt');
            const userMngtWindow = document.querySelector('.userMngt');
            const userMngtCloseBtn = e.target.classList.contains('userMngt__btn--close');
            const userInfoButtons = e.target.closest('.user__info__btns');
            const newUserForm = document.querySelector('.user-form');
            // e.target.closest('.userMngt');
            if (eventUserMngtBtn || userMngtCloseBtn || !userMngtWindow.classList.contains('hidden') && !e.target.closest('.userMngt') && !userInfoButtons) {
                userMngtWindow.classList.toggle('hidden');
                this._usersSetDefault();
                newUserForm.classList.add('hidden');
            }
        });
    }
    _addHandlerToggleNewUserWindow() {
        const createNewUserBtn = document.querySelector('.userMngt-header__btn--createNewUser');
        const newUserName = document.querySelector('.user-form__input--newUserName');
        createNewUserBtn.addEventListener('click', function() {
            const newUserForm = document.querySelector('.user-form');
            newUserForm.classList.toggle('hidden');
            newUserName.focus();
        });
    }
    _addHandlerReviseUser(handler3) {
        this._parentElement.addEventListener('click', (e1)=>{
            if (!e1.target.classList.contains('user__info__btn--revise')) return;
            const allUserNames = document.querySelectorAll('.user__info--name');
            const target = e1.target.parentNode.parentNode.id;
            const userName = e1.target.parentNode.parentNode.children[0];
            this._usersSetDefault();
            this._usersSetInputField(userName);
            allUserNames.forEach((user)=>user.addEventListener('keypress', (e)=>{
                    if (e.key === 'Enter') {
                        if (userName.value === '') userName.setAttribute('value', userName.dataset.name);
                        else userName.setAttribute('value', userName.value);
                        userName.setAttribute('readonly', '');
                        userName.removeAttribute('placeholder');
                        handler3(target, userName.value);
                    } else return;
                })
            );
        });
    }
    _usersSetDefault = function() {
        const allUserNames = document.querySelectorAll('.user__info--name');
        allUserNames.forEach((user)=>{
            user.setAttribute('readonly', '');
            user.removeAttribute('placeholder');
            user.value = user.dataset.name;
        });
    };
    _usersSetInputField = function(userName) {
        userName.setAttribute('data-name', userName.value);
        userName.removeAttribute('readonly');
        userName.removeAttribute('value');
        userName.setAttribute('placeholder', '請輸入新名稱');
        userName.value = '';
        userName.focus();
    };
    // _userRevise(e) {
    //   const userNames = document.querySelectorAll('.user__info--name');
    //   if (!e.target.classList.contains('user__btn--revise')) return;
    //   const obj = model.state.activeGroup[0].users.find(
    //     obj => obj.id === e.target.parentNode.parentNode.id
    //   );
    //   const userName = e.target.parentNode.parentNode.children[0];
    //   userNames.forEach(users => {
    //     users.setAttribute('readonly', '');
    //     users.removeAttribute('placeholder');
    //     users.value = users.dataset.name;
    //   });
    //   userName.setAttribute('data-name', userName.value);
    //   userName.removeAttribute('readonly');
    //   userName.removeAttribute('value');
    //   userName.setAttribute('placeholder', '請輸入新名稱');
    //   userName.value = '';
    //   userName.focus();
    //   document.querySelector('.user__btn--OK').addEventListener(
    //     'click',
    //     () => {
    //       if (
    //         model.state.activeGroup[0].users
    //           .map(user => user.userName === userName.value)
    //           .includes(true)
    //       ) {
    //         alert('已有相同名稱，請重新輸入');
    //         userName.value = '';
    //         return;
    //       }
    //       if (userName.value === '') {
    //         userName.setAttribute('value', userName.dataset.name);
    //       } else {
    //         userName.setAttribute('value', userName.value);
    //         obj.userName = userName.value;
    //       }
    //       userName.setAttribute('readonly', '');
    //       userName.removeAttribute('placeholder');
    //       this._renderAll();
    //       model.storeLocalStorage();
    //     },
    //     { once: true }
    //   );
    //   document
    //     .querySelectorAll('.user__info--name')
    //     .forEach(user =>
    //       user.addEventListener('keypress', e => {
    //         if (e.key === 'Enter') {
    //           if (
    //             model.state.activeGroup[0].users
    //               .map(user => user.userName === userName.value)
    //               .includes(true)
    //           ) {
    //             alert('已有相同名稱，請重新輸入');
    //             userName.value = '';
    //             return;
    //           }
    //           if (userName.value === '') {
    //             userName.setAttribute('value', userName.dataset.name);
    //           } else {
    //             userName.setAttribute('value', userName.value);
    //             obj.userName = userName.value;
    //           }
    //           userName.setAttribute('readonly', '');
    //           userName.removeAttribute('placeholder');
    //           this._renderAll();
    //           model.storeLocalStorage();
    //         } else {
    //           return;
    //         }
    //       })
    //     );
    // }
    _generateMarkup() {
        return this._data.map((user)=>`
        <div class="user__info" id=${user.id}>
          <input class="user__info--name" id=${user.id} maxlength="5" autocomplete="off" readonly value="${user.userName}" data-name="${user.userName}">

          <div class="user__info__btns">
            <img class="user__info__btn--revise"src="${_revisePngDefault.default}"></img>
            <img class="user__info__btn--delete"src="${_deletePngDefault.default}"></img>
          </div>
      </div>`
        ).join('');
    }
}
exports.default = new UserMgntView();

},{"../View.js":"9dvKv","url:../../../img/revise.png":"av4eb","url:../../../img/delete.png":"9mXIo","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"6WopJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class EventsView extends _viewDefault.default {
    _parentElement = document.querySelector('.event-list');
    _addHandlerRender(handler) {
        window.addEventListener('load', handler);
    }
    _addHandlerNewEvent(handler1) {
        const eventForm = document.querySelector('.event-form');
        eventForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handler1();
        });
    }
    _addHandlerDeleteEvent(handler2) {
        this._parentElement.addEventListener('click', function(e) {
            const target = e.target.id;
            if (!e.target.classList.contains('event__info__btn--delete')) return;
            handler2(target);
        });
    }
    _addHandlerScrolltoEventTop() {
        window.addEventListener('click', function(e) {
            if (!e.target.classList.contains('event__btn--gotoTop')) return;
            document.querySelector('.event__content')?.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth'
            });
        });
    }
    _generateMarkup() {
        const internationalNumberFormat = new Intl.NumberFormat('en-US');
        return ` 
      <div class="event__info">
        <div class="event__info__btn--delete" id=${this._data.id}>x</div>
          <div class="event__info--group">
            <span class="event__info--group-value">${this._data.group}</span>
          </div>
        <div class="event__product">
          <div class="event__info--type">
            <span class="event__info--type-value">${this._data.type}</span>
          </div>
          <div class="event__info--productName">
            <span class="event__info--productName-value">${this._data.productName}
            </span>
          </div>
          <div class="event__info--note">
            <span class="event__info--note-value">${this._data.note}</span>
          </div>
        </div>
        <div class="event__info--spend">
          <span class="event__info--spend-value">
            ${internationalNumberFormat.format(this._data.spend)}
          </span>
          <span class="event__info--spend-unit">NTD</span>
        </div>
        <div class="event__info--payer">
          <class="event__info--payer-value">付款人 : ${this._data.payer}</span>
        </div>
        <div class="event__info--sharer">
          <span class="event__info--sharer-value">分款人 :
          ${this._data.isAllMember ? '全員' : this._data.sharer}
          </span>
        </div>
      </div>
      `;
    }
}
exports.default = new EventsView();

},{"../View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"akg9f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class EventsHeaderView extends _viewDefault.default {
    _parentElement = document.querySelector('.event-list');
    _addHandlerNewEventHeader(handler) {
        handler();
    }
    _generateMarkup() {
        return `
      <div class="event__content">
        <div class="event__content--dateHeader">${this._data.date}</div>
        <div class="event__infos Date${this._data.date}"></div>
      </div>
      `;
    }
}
exports.default = new EventsHeaderView();

},{"../View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1F7sM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("./View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class BalanceView extends _viewDefault.default {
    _parentElement = document.querySelector('.balance__infos');
    _addHandlerToggleSidebar() {
        window.addEventListener('click', (e)=>{
            const balanceSidebar = document.getElementById('toggleBalanceArea');
            const eventBalanceBtn = e.target.classList.contains('event__btn--balance');
            const balanceCloseBtn = e.target.classList.contains('balance__btn--close');
            const balanceArea = e.target.closest('.balance');
            if (eventBalanceBtn || balanceCloseBtn || balanceSidebar.checked & !balanceArea) balanceSidebar.checked = !balanceSidebar.checked;
        });
    }
    _generateMarkup() {
        const internationalNumberFormat = new Intl.NumberFormat('en-US');
        return this._data.map((user)=>`
      <div class="balance__info" id=${user.id}>
        <div class="balance__info--name"><strong>${user.userName}</strong></div>
        <div class="balance__info--money">
        ${Number(Math.round(user.balance)) > 0 ? `需收${internationalNumberFormat.format(Number(Math.round(user.balance)))}元` : Number(Math.round(user.balance)) === 0 ? '無' : `需付${internationalNumberFormat.format(Number(Math.round(-user.balance)))}元
            `}
        </div>
      </div>`
        ).join('');
    }
}
exports.default = new BalanceView();

},{"./View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fSwuM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _view = require("../View");
var _viewDefault = parcelHelpers.interopDefault(_view);
class DebtsView extends _viewDefault.default {
    _parentElement = document.querySelector('.debt__infos');
    _generateMarkup() {
        const internationalNumberFormat = new Intl.NumberFormat('en-US');
        if (this._data) return this._data.map((debt)=>`
      <div class="debt__info">
        <span><strong>${debt.debtor}</strong></span>
        需支付給
        <span><strong>${debt.creditor}</strong></span>${internationalNumberFormat.format(Number(Math.round(debt.payment)))}元
      </div>`
        ).join('');
        else return `<div class="debt__info">尚無應收/應付帳款</div>`;
    }
}
exports.default = new DebtsView();

},{"../View":"9dvKv","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["kS06O","lA0Es"], "lA0Es", "parcelRequired7e5")

//# sourceMappingURL=index.05cf099e.js.map
