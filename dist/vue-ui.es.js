import { openBlock as l, createElementBlock as d, normalizeClass as i, renderSlot as p } from "vue";
const m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, s] of e)
    n[o] = s;
  return n;
}, u = {
  name: "v-button",
  props: {
    expanded: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function f(t, e, n, o, s, a) {
  return l(), d("button", {
    class: i(["p-3 rounded-sm bg-green-600 hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", { "w-full": n.expanded }]),
    onClick: e[0] || (e[0] = (...c) => a.handleClick && a.handleClick(...c))
  }, [
    p(t.$slots, "default")
  ], 2);
}
const h = /* @__PURE__ */ m(u, [["render", f]]), k = { VButton: h }, r = k, v = {
  install(t) {
    Object.keys(r).forEach((e) => {
      t.component(e, r[e]);
    });
  }
};
export {
  v as default
};
