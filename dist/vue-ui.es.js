import { openBlock as d, createElementBlock as c, normalizeClass as p, renderSlot as f, createElementVNode as o } from "vue";
const i = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [s, r] of e)
    n[s] = r;
  return n;
}, h = {
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
function m(t, e, n, s, r, a) {
  return d(), c("button", {
    class: p(["p-3 rounded-sm bg-green-600 hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", { "w-full": n.expanded }]),
    onClick: e[0] || (e[0] = (...u) => a.handleClick && a.handleClick(...u))
  }, [
    f(t.$slots, "default")
  ], 2);
}
const _ = /* @__PURE__ */ i(h, [["render", m]]), y = {
  name: "alert",
  props: {
    variant: {
      type: String,
      default: "danger"
    },
    message: {
      type: String,
      default: ""
    },
    close_able: {
      type: Boolean,
      default: !0
    },
    size: {
      type: String,
      default: "md"
    },
    rounded: {
      type: Boolean,
      default: !1
    },
    center: {
      type: Boolean,
      default: !1
    },
    value: {
      type: Boolean,
      default: !1
    }
  },
  computed: {
    variant_handler() {
      return "alert-" + this.variant;
    },
    size_handler() {
      return "alert-" + this.size;
    }
  },
  mounted() {
    document.querySelector("body").style.overflow = "hidden";
  },
  beforeDestroy() {
    document.querySelector("body").style.overflow = "visible";
  }
}, b = {
  class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
  role: "alert"
}, g = /* @__PURE__ */ o("strong", { class: "font-bold" }, "Holy smokes!", -1), v = /* @__PURE__ */ o("span", { class: "block sm:inline" }, "Something seriously bad happened.", -1), w = /* @__PURE__ */ o("span", { class: "absolute top-0 bottom-0 right-0 px-4 py-3" }, [
  /* @__PURE__ */ o("svg", {
    class: "fill-current h-6 w-6 text-red-500",
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ o("title", null, "Close"),
    /* @__PURE__ */ o("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" })
  ])
], -1), x = [
  g,
  v,
  w
];
function k(t, e, n, s, r, a) {
  return d(), c("div", b, x);
}
const B = /* @__PURE__ */ i(y, [["render", k]]), $ = { VButton: _, VAlert: B }, l = $, S = {
  install(t) {
    Object.keys(l).forEach((e) => {
      t.component(e, l[e]);
    });
  }
};
export {
  S as default
};
