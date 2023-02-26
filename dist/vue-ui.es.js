import { openBlock as d, createElementBlock as c, normalizeClass as p, renderSlot as m, createElementVNode as r } from "vue";
const i = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [n, l] of e)
    o[n] = l;
  return o;
}, f = {
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
function y(t, e, o, n, l, s) {
  return d(), c("button", {
    class: p(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${o.expanded ? "w-full" : ""} ${o.bgColor} ${o.textColor}`]),
    onClick: e[0] || (e[0] = (...u) => s.handleClick && s.handleClick(...u))
  }, [
    m(t.$slots, "default")
  ], 2);
}
const b = /* @__PURE__ */ i(f, [["render", y]]), h = {
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
    document.querySelector("body").style.overflow = "hidden", document.querySelector("body").classList.add = "blur-sm", document.querySelector("body").addEventListener("click", () => !1);
  },
  beforeDestroy() {
    document.querySelector("body").style.overflow = "visible", document.querySelector("body").classList.remove = "blur-sm", document.querySelector("body").removeEventListener("click", () => !1);
  }
}, _ = {
  class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
  role: "alert"
}, g = /* @__PURE__ */ r("strong", { class: "font-bold" }, "Holy smokes!", -1), v = /* @__PURE__ */ r("span", { class: "block sm:inline" }, "Something seriously bad happened.", -1), w = /* @__PURE__ */ r("span", { class: "absolute top-0 bottom-0 right-0 px-4 py-3" }, [
  /* @__PURE__ */ r("svg", {
    class: "fill-current h-6 w-6 text-red-500",
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ r("title", null, "Close"),
    /* @__PURE__ */ r("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" })
  ])
], -1), x = [
  g,
  v,
  w
];
function k(t, e, o, n, l, s) {
  return d(), c("div", _, x);
}
const S = /* @__PURE__ */ i(h, [["render", k]]), C = { VButton: b, VAlert: S }, a = C, B = {
  install(t) {
    Object.keys(a).forEach((e) => {
      t.component(e, a[e]);
    });
  }
};
export {
  B as default
};
