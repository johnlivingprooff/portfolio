import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-P6SDANQl.mjs';
import { useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { b as __nuxt_component_1, _ as __nuxt_component_3, a as __nuxt_component_4 } from './Contact-BJ-Y6Hjn.mjs';
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

const _sfc_main$2 = {
  data() {
    return {
      links: [
        { id: 1, label: "Home", url: "/" },
        // { id: 2, label: 'About', url: '#about' },
        { id: 3, label: "Projects", url: "/projects" },
        // { id: 4, label: 'Feedback', url: '#testimonials' },
        // { id: 5, label: 'Blog', url: '/blog' },
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar" }, _attrs))} data-v-836f4716><!--[-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar2.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-836f4716"]]);
const _imports_0 = "" + buildAssetsURL("1.DSu-k1m9.png");
const _imports_1 = "" + buildAssetsURL("2.BrtIosJy.png");
const _imports_2 = "" + buildAssetsURL("3.CJfTmcYg.png");
const _imports_3 = "" + buildAssetsURL("4.YTPOwz2j.png");
const _imports_4 = "" + buildAssetsURL("5.8_NMwZpn.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="p_card"><img${ssrRenderAttr("src", _imports_0)} alt="project-one"><img${ssrRenderAttr("src", _imports_1)} alt="project-one"><img${ssrRenderAttr("src", _imports_2)} alt="project-one"><img${ssrRenderAttr("src", _imports_3)} alt="project-one"><img${ssrRenderAttr("src", _imports_4)} alt="project-one"></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjectCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar2 = __nuxt_component_0;
  const _component_Icon = __nuxt_component_1;
  const _component_ProjectCard = __nuxt_component_2;
  const _component_Line = __nuxt_component_3;
  const _component_Contact = __nuxt_component_4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "containr" }, _attrs))} data-v-dbcd74c6>`);
  _push(ssrRenderComponent(_component_NavBar2, null, null, _parent));
  _push(`<br data-v-dbcd74c6><br data-v-dbcd74c6><br data-v-dbcd74c6><br data-v-dbcd74c6>`);
  _push(ssrRenderComponent(_component_Icon, null, null, _parent));
  _push(`<br data-v-dbcd74c6><br data-v-dbcd74c6><div class="cards" data-v-dbcd74c6><h2 data-v-dbcd74c6>Some of My WWW&#39;s</h2><br data-v-dbcd74c6>`);
  _push(ssrRenderComponent(_component_ProjectCard, null, null, _parent));
  _push(`<h2 data-v-dbcd74c6>Bye</h2></div><br data-v-dbcd74c6><br data-v-dbcd74c6><br data-v-dbcd74c6><br data-v-dbcd74c6>`);
  _push(ssrRenderComponent(_component_Line, null, null, _parent));
  _push(ssrRenderComponent(_component_Contact, { id: "contact" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Projects.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Projects = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dbcd74c6"]]);

export { Projects as default };
//# sourceMappingURL=Projects-CDlD6Hdr.mjs.map
