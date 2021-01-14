import Vue from 'vue';
import Vuetify from 'vuetify';
import { Component, Prop, Vue as Vue$1, Watch } from 'vue-property-decorator';

Vue.use(Vuetify);
const options = {
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
};
new Vuetify(options);

function _initializerDefineProperty(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object.keys(descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object.defineProperty(target, property, desc);
    desc = null;
  }

  return desc;
}

var _dec, _dec2, _class, _class2, _descriptor, _temp;
let Ping = (_dec = Component({
  name: "Ping",
  components: {}
}), _dec2 = Prop({
  default: "poof"
}), _dec(_class = (_class2 = (_temp = class Ping extends Vue$1 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "poof", _descriptor, this);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "poof", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = Ping;
/* template */

var __vue_render__ = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', [_vm._v("Ping " + _vm._s(_vm.poof))]);
};

var __vue_staticRenderFns__ = [];
/* style */

const __vue_inject_styles__ = undefined;
/* scoped */

const __vue_scope_id__ = undefined;
/* module identifier */

const __vue_module_identifier__ = undefined;
/* functional template */

const __vue_is_functional_template__ = false;
/* style inject */

/* style inject SSR */

/* style inject shadow dom */

const __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, undefined, undefined);

var _dec$1, _dec2$1, _dec3, _dec4, _dec5, _dec6, _class$1, _class2$1, _descriptor$1, _descriptor2, _descriptor3, _descriptor4, _temp$1;
let TestComp = (_dec$1 = Component({
  name: "TestComp",
  components: {
    Ping: __vue_component__
  }
}), _dec2$1 = Prop({
  default: "OVERLINE"
}), _dec3 = Prop({
  default: "Headline"
}), _dec4 = Prop({
  default: "Subtitle"
}), _dec5 = Prop({
  default: () => []
}), _dec6 = Watch('items', {
  deep: true
}), _dec$1(_class$1 = (_class2$1 = (_temp$1 = class TestComp extends Vue$1 {
  constructor(...args) {
    super(...args);

    _initializerDefineProperty(this, "overline", _descriptor$1, this);

    _initializerDefineProperty(this, "headline", _descriptor2, this);

    _initializerDefineProperty(this, "subtitle", _descriptor3, this);

    _initializerDefineProperty(this, "items", _descriptor4, this);

    this.localStringList = [];
  }

  loadLocalStringList() {
    this.localStringList.length = 0;

    for (let i = 0; i < this.items.length; i++) {
      this.localStringList.push(this.items[i]);
    }
  }

  mounted() {
    this.loadLocalStringList();
  }

}, _temp$1), (_descriptor$1 = _applyDecoratedDescriptor(_class2$1.prototype, "overline", [_dec2$1], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2$1.prototype, "headline", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2$1.prototype, "subtitle", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2$1.prototype, "items", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2$1.prototype, "loadLocalStringList", [_dec6], Object.getOwnPropertyDescriptor(_class2$1.prototype, "loadLocalStringList"), _class2$1.prototype)), _class2$1)) || _class$1);

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$1 = TestComp;
/* template */

var __vue_render__$1 = function () {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    staticClass: "testcomp"
  }, [_c('v-card', {
    attrs: {
      "elevation": "10",
      "outlined": "",
      "shaped": ""
    }
  }, [_c('v-list-item', {
    attrs: {
      "three-line": ""
    }
  }, [_c('v-list-item-content', [_c('div', {
    staticClass: "overline mb-4"
  }, [_vm._v("\n                    " + _vm._s(_vm.overline) + "\n                ")]), _vm._v(" "), _c('v-list-item-title', {
    staticClass: "headline mb-1"
  }, [_vm._v("\n                    " + _vm._s(_vm.headline) + "\n                    "), _c('ping', {
    attrs: {
      "poof": 'poof: ' + _vm.headline
    }
  })], 1), _vm._v(" "), _c('v-list-item-subtitle', [_vm._v(_vm._s(_vm.subtitle))]), _vm._v(" "), _vm._l(_vm.localStringList, function (line) {
    return _c('v-list-item', {
      key: line
    }, [_vm._v("\n                    " + _vm._s(line) + "\n                ")]);
  })], 2), _vm._v(" "), _c('v-list-item-avatar', {
    attrs: {
      "tile": "",
      "size": "80",
      "color": "grey"
    }
  })], 1), _vm._v(" "), _c('v-card-actions', [_c('v-btn', {
    attrs: {
      "outlined": "",
      "rounded": "",
      "text": ""
    }
  }, [_vm._v("\n                Button\n            ")])], 1)], 1)], 1);
};

var __vue_staticRenderFns__$1 = [];
/* style */

const __vue_inject_styles__$1 = function (inject) {
  if (!inject) return;
  inject("data-v-53b1d7cc_0", {
    source: ".testcomp[data-v-53b1d7cc]{background-color:pink}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


const __vue_scope_id__$1 = "data-v-53b1d7cc";
/* module identifier */

const __vue_module_identifier__$1 = undefined;
/* functional template */

const __vue_is_functional_template__$1 = false;
/* style inject SSR */

/* style inject shadow dom */

const __vue_component__$1 = /*#__PURE__*/normalizeComponent({
  render: __vue_render__$1,
  staticRenderFns: __vue_staticRenderFns__$1
}, __vue_inject_styles__$1, __vue_script__$1, __vue_scope_id__$1, __vue_is_functional_template__$1, __vue_module_identifier__$1, false, createInjector, undefined, undefined);

/* eslint-disable import/prefer-default-export */

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  TestComp: __vue_component__$1
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any

// install function executed by Vue.use()
const install = function installAbcd(Vue) {
  if (install.installed) return;
  install.installed = true;
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
}; // Create module definition for Vue.use()


const plugin = {
  install
}; // To auto-install on non-es builds, when vue is found

export default plugin;
export { __vue_component__$1 as TestComp };
