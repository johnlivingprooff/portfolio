import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4, b as __nuxt_component_1$1 } from './Contact-BJ-Y6Hjn.mjs';
import { useSSRContext, withCtx, createTextVNode, ref, computed, mergeProps, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
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

const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const _sfc_main$3 = {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-e295feaf><div class="container" data-v-e295feaf><div data-v-e295feaf>`);
  _push(ssrRenderComponent(_component_Icon, null, null, _parent));
  _push(`<span class="wel fade-l" data-v-e295feaf><h2 style="${ssrRenderStyle({ fontSize: $data.fontSize + "px" })}" data-v-e295feaf>${ssrInterpolate($data.welcomeText)}</h2><p data-v-e295feaf>- to bous -<br data-v-e295feaf><br data-v-e295feaf>\u2193</p></span></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/WelcomeAnime.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-e295feaf"]]);
const _sfc_main$2 = {
  data() {
    return {
      links: [
        // { id: 1, label: 'Home', url: '/portfolio' },
        { id: 2, label: "About", url: "#about" },
        { id: 3, label: "Projects", url: "/projects" },
        { id: 4, label: "Feedback", url: "#testimonials" },
        // non exiistent yet
        { id: 5, label: "Blog", url: "#blog" },
        { id: 6, label: "Contact", url: "#contact" }
      ]
    };
  },
  methods: {
    currentUrl() {
      return (void 0).location.pathname;
    },
    isActive(url) {
      return url === this.currentUrl();
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-862303bf><!--[-->`);
  ssrRenderList($data.links, (link) => {
    _push(ssrRenderComponent(_component_NuxtLink, {
      key: link.id,
      to: link.url,
      class: "link"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(link.label)}`);
        } else {
          return [
            createTextVNode(toDisplayString(link.label), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-862303bf"]]);
const _imports_0 = "" + buildAssetsURL("scroll.C83-Uykc.png");
const _sfc_main$1 = {
  async setup() {
    const slideshowImages = ref([]);
    const fetchImages = async () => {
      const images = /* @__PURE__ */ Object.assign({ "../public/img/slides/1.jpg": () => import('./1-BvSyIHaG.mjs'), "../public/img/slides/anders-jilden-nxCtO8W9JLo-unsplash.jpg": () => import('./anders-jilden-nxCtO8W9JLo-unsplash-xO4yPWIg.mjs'), "../public/img/slides/casey-horner-y7jrFSlVZAQ-unsplash.jpg": () => import('./casey-horner-y7jrFSlVZAQ-unsplash-Crq9Ffyk.mjs'), "../public/img/slides/christopher-burns-pzMP-RGJ7mY-unsplash.jpg": () => import('./christopher-burns-pzMP-RGJ7mY-unsplash-W0LUduXN.mjs'), "../public/img/slides/daniel-lee-KB2cHm0pZAU-unsplash.jpg": () => import('./daniel-lee-KB2cHm0pZAU-unsplash-DcnuH-IV.mjs'), "../public/img/slides/denys-nevozhai-2vmT5_FeMck-unsplash.jpg": () => import('./denys-nevozhai-2vmT5_FeMck-unsplash-DM8WOgpj.mjs'), "../public/img/slides/dina-SqSY0AWFgjc-unsplash.jpg": () => import('./dina-SqSY0AWFgjc-unsplash-B2Ai4buA.mjs'), "../public/img/slides/erik-mclean-QzpgqElvSiA-unsplash.jpg": () => import('./erik-mclean-QzpgqElvSiA-unsplash-DLjipVYY.mjs'), "../public/img/slides/farhad-ibrahimzade-1VeYwfqR92s-unsplash.jpg": () => import('./farhad-ibrahimzade-1VeYwfqR92s-unsplash-eQxsLHnU.mjs'), "../public/img/slides/garden_fountain.jpg": () => import('./garden_fountain-j4g-26ax.mjs'), "../public/img/slides/gilles-lambert-pb_lF8VWaPU-unsplash.jpg": () => import('./gilles-lambert-pb_lF8VWaPU-unsplash-g0g5be3c.mjs'), "../public/img/slides/nicolai-berntsen-F3uyey6ours-unsplash.jpg": () => import('./nicolai-berntsen-F3uyey6ours-unsplash-B5yCzGbr.mjs'), "../public/img/slides/ryan-moreno-CAQV_lXm_iw-unsplash.jpg": () => import('./ryan-moreno-CAQV_lXm_iw-unsplash-CPlPxk9U.mjs'), "../public/img/slides/z-grills-australia-64T9z7Or6-s-unsplash.jpg": () => import('./z-grills-australia-64T9z7Or6-s-unsplash-DxEGs35h.mjs') });
      const importedImages = await Promise.all(Object.values(images).map((i) => i()));
      slideshowImages.value = importedImages.map((module) => module.default);
    };
    fetchImages();
    const currentIndex = ref(0);
    let intervalId = null;
    const slideShow = () => {
      intervalId = setInterval();
    };
    const stopScroll = () => {
      clearInterval(intervalId);
    };
    const startScroll = () => {
      slideShow();
    };
    const lineData = computed(() => {
      return [
        { id: "1", year: "2020", description: "Holding Lamps for a Distrought generation, we are light" },
        { id: "2", year: "2021", description: "A Comic relief in an Isolated World, take advantage" },
        { id: "3", year: "2022", description: "Can we really do the most? we do what we can, without limit" },
        { id: "4", year: "2023", description: "The herald of a new dawn, for lightbearers. Join God's kids ;)" }
      ];
    });
    return {
      slideshowImages,
      currentIndex,
      stopScroll,
      startScroll,
      lineData
    };
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "container" }, _attrs))} data-v-8970499a><div class="bous" data-v-8970499a><h1 data-v-8970499a>bous</h1><p data-v-8970499a>/\u03B2\u03BF\u1FE6\u03C2/</p></div><div class="line" data-v-8970499a><!--[-->`);
  ssrRenderList($setup.lineData, (line, index2) => {
    _push(`<span data-v-8970499a><h2 data-v-8970499a>${ssrInterpolate(line.year)}</h2>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/blog/" + line.id
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(line.description)}`);
        } else {
          return [
            createTextVNode(toDisplayString(line.description), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</span>`);
  });
  _push(`<!--]--><br data-v-8970499a><br data-v-8970499a><br data-v-8970499a></div><div class="window" data-v-8970499a><div class="slideshow" data-v-8970499a><!--[-->`);
  ssrRenderList($setup.slideshowImages, (image, index2) => {
    _push(`<img${ssrRenderAttr("src", image)} class="slideshow-image" data-v-8970499a>`);
  });
  _push(`<!--]--></div><img${ssrRenderAttr("src", _imports_0)} alt="scroll" class="scrl" data-v-8970499a></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Bous.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-8970499a"]]);
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
  const _component_NavBar = __nuxt_component_1;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_Bous = __nuxt_component_3;
  const _component_Line = __nuxt_component_3$1;
  const _component_Contact = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_WelcomeAnime, null, null, _parent));
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<div class="card" id="about"><div class="c-img"></div><div class="c-txt"><p>Welcome to my</p><h2>Digital<br>Realm</h2><p id="intro"> Woken\u2014a blend of fear and love. Writer, designer, creator, innovator. A fusion of creativity and technology one boundless force.. `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/about" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`read more`);
      } else {
        return [
          createTextVNode("read more")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p><br><br><span id="nametag">- John-Livingprooff</span></div></div><br><br><br><br><br>`);
  _push(ssrRenderComponent(_component_Bous, { id: "blog" }, null, _parent));
  _push(`<br><br><br><br><br>`);
  _push(ssrRenderComponent(_component_Line, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, { id: "contact" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DHI_l3fL.mjs.map
