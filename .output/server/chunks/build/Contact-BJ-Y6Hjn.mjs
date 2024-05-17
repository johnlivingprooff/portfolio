import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { useSSRContext, mergeProps, withCtx, createTextVNode } from 'vue';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-P6SDANQl.mjs';

const _imports_0$1 = "" + buildAssetsURL("icon.BOUb3UTG.png");
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}><span class="icon"><img${ssrRenderAttr("src", _imports_0$1)} alt="logo"></span></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hr-line" }, _attrs))}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Line.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + buildAssetsURL("email.B_58GTIC.png");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footr" }, _attrs))}><div class="socials"><a href="https://github.com/johnlivingprooff" target="_blank" <img src="../public/img/socials/github.webp" alt="github profile"></a><a href="https://twitter.com/ola0luwajj" target="_blank" <img src="../public/img/socials/twitter.png" alt="twitter (X)"></a><a href="https://instagram.com/johnlivingprooff" target="_blank" <img src="../public/img/socials/insta.png" alt="instagram profile"></a><a href="https://wa.me/265996554837" target="_blank" <img src="../public/img/socials/wa-icon.png" alt="whatsapp"></a><a href="https://www.linkedin.com/in/johnlivingprooff/" target="_blank" <img src="../public/img/socials/linkedin.png" alt="linkedin"></a><a href="mailto:johnlivingprooff@gmail.com"><img${ssrRenderAttr("src", _imports_0)} alt=""></a></div><hr width="1" color="transparent"><div class="copyright"><p>\xA9 2024 `);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`John-Livingproof Fowowe`);
      } else {
        return [
          createTextVNode("John-Livingproof Fowowe")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_3 as _, __nuxt_component_4 as a, __nuxt_component_1 as b };
//# sourceMappingURL=Contact-BJ-Y6Hjn.mjs.map
