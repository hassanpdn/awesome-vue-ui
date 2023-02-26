import { openBlock as d, createElementBlock as c, normalizeClass as p, renderSlot as f, Fragment as m, createElementVNode as t } from "vue";
const i = (o, e) => {
  const l = o.__vccOpts || o;
  for (const [n, r] of e)
    l[n] = r;
  return l;
}, h = {
  name: "v-button",
  props: {
    expanded: {
      type: Boolean,
      default: !1
    },
    textColor: {
      type: String,
      default: "bg-gray-300"
    },
    bgColor: {
      type: String,
      default: "bg-blue-500"
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function g(o, e, l, n, r, a) {
  return d(), c("button", {
    class: p(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${l.expanded ? "w-full" : ""} ${l.bgColor} ${l.textColor}`]),
    onClick: e[0] || (e[0] = (...u) => a.handleClick && a.handleClick(...u))
  }, [
    f(o.$slots, "default")
  ], 2);
}
const y = /* @__PURE__ */ i(h, [["render", g]]), b = {
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
}, v = /* @__PURE__ */ t("div", { class: "overlay h-screen w-full blur-sm z-10 relative" }, null, -1), _ = /* @__PURE__ */ t("div", {
  class: "relative z-20 top-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",
  role: "alert"
}, [
  /* @__PURE__ */ t("strong", { class: "font-bold" }, "Holy smokes!"),
  /* @__PURE__ */ t("span", { class: "block sm:inline" }, "Something seriously bad happened."),
  /* @__PURE__ */ t("span", { class: "absolute top-0 bottom-0 right-0 px-4 py-3" }, [
    /* @__PURE__ */ t("svg", {
      class: "fill-current h-6 w-6 text-red-500",
      role: "button",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, [
      /* @__PURE__ */ t("title", null, "Close"),
      /* @__PURE__ */ t("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" })
    ])
  ])
], -1);
function w(o, e, l, n, r, a) {
  return d(), c(m, null, [
    v,
    _
  ], 64);
}
const x = /* @__PURE__ */ i(b, [["render", w]]), k = { VButton: y, VAlert: x }, s = k, $ = {
  install(o) {
    Object.keys(s).forEach((e) => {
      o.component(e, s[e]);
    });
  }
};
export {
  $ as default
};
