import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useSSRContext, mergeProps } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _imports_0 = "" + publicAssetsURL("img/icon.png");
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><span class="icon"><img${ssrRenderAttr("src", _imports_0)} alt="logo"></span></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$2 = {
  data() {
    return {
      originalFontSize: 10,
      // Original font size
      maxFontSize: 80,
      // Maximum font size when scrolling up
      fontSize: 10,
      // Initial font size
      welcomeText: "Welcome",
      // Initial welcome text
      scrollingDirection: null,
      // Track scrolling direction: 'up', 'down', or null
      scrollEnabled: false,
      // Track whether default scroll behavior is enabled
      animationFinished: false
      // Track whether initial animation has finished
    };
  },
  mounted() {
    const element = this.$el.querySelector(".fade-l");
    element.style.transform = "translateX(0)";
    element.style.opacity = "1";
    this.animateFontSize();
  },
  methods: {
    animateFontSize() {
      setInterval();
    },
    changeWelcomeText() {
      setInterval();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e9233b9c><div class="container" data-v-e9233b9c><div data-v-e9233b9c>`);
  _push(ssrRenderComponent(_component_Icon, null, null, _parent));
  _push(`<span class="wel fade-l" data-v-e9233b9c><h2 style="${ssrRenderStyle({ fontSize: $data.fontSize + "px" })}" data-v-e9233b9c>${ssrInterpolate($data.welcomeText)}</h2><p data-v-e9233b9c>- to bous -<br data-v-e9233b9c><br data-v-e9233b9c>\u2193</p></span></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WelcomeAnime.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-e9233b9c"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-34f49667><div class="bous" data-v-34f49667><h1 data-v-34f49667>bous</h1><p data-v-34f49667>/\u03B2\u03BF\u1FE6\u03C2/</p></div><div class="line" data-v-34f49667><span data-v-34f49667><h2 data-v-34f49667>2020</h2><i data-v-34f49667>Holding Lamps for a Distrought generation</i></span><span data-v-34f49667><h2 data-v-34f49667>2020</h2><i data-v-34f49667>Holding Lamps for a Distrought generation</i></span><span data-v-34f49667><h2 data-v-34f49667>2020</h2><i data-v-34f49667>Holding Lamps for a Distrought generation</i></span><span data-v-34f49667><h2 data-v-34f49667>2020</h2><i data-v-34f49667>Holding Lamps for a Distrought generation</i></span><br data-v-34f49667><br data-v-34f49667><br data-v-34f49667></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bous.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-34f49667"]]);
const _sfc_main = {
  mounted() {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.05
      // 5% of the card needs to be visible for the callback to trigger
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.fadeInCard();
          observer.unobserve(this.$refs.card);
        }
      });
    }, options);
    observer.observe(this.$refs.card);
  },
  methods: {
    fadeInCard() {
      const card = this.$refs.card;
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_WelcomeAnime = __nuxt_component_0;
  const _component_Bous = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WelcomeAnime, null, null, _parent));
  _push(`<div class="card"><div class="c-img"></div><div class="c-txt"><p>Welcome to my</p><h2>Digital<br>Realm</h2><p id="intro"> Woken\u2014a blend of fear and love. Writer, designer, creator, innovator. A fusion of creativity and technology one boundless force. </p><br><br><span id="nametag">- John-Livingprooff</span></div></div><br><br><br><br><br>`);
  _push(ssrRenderComponent(_component_Bous, null, null, _parent));
  _push(`<br><br><br><br><br></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CLTl434T.mjs.map
