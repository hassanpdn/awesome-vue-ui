import { openBlock as d, createElementBlock as c, normalizeClass as p, renderSlot as f, createElementVNode as n } from "vue";
const i = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of t)
    o[s] = l;
  return o;
}, m = {
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
function h(e, t, o, s, l, r) {
  return d(), c("button", {
    class: p(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${o.expanded ? "w-full" : ""} ${o.bgColor} ${o.textColor}`]),
    onClick: t[0] || (t[0] = (...u) => r.handleClick && r.handleClick(...u))
  }, [
    f(e.$slots, "default")
  ], 2);
}
const b = /* @__PURE__ */ i(m, [["render", h]]), y = {
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
    const e = document.querySelector("body");
    e.style.overflow = "hidden", e.classList.add = "blur-sm", e.addEventListener("click", () => !1);
  },
  beforeDestroy() {
    const e = document.querySelector("body");
    e.style.overflow = "visible", e.classList.remove = "blur-sm", e.removeEventListener("click", () => !1);
  }
}, _ = {
  class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
  role: "alert"
}, g = /* @__PURE__ */ n("strong", { class: "font-bold" }, "Holy smokes!", -1), v = /* @__PURE__ */ n("span", { class: "block sm:inline" }, "Something seriously bad happened.", -1), w = /* @__PURE__ */ n("span", { class: "absolute top-0 bottom-0 right-0 px-4 py-3" }, [
  /* @__PURE__ */ n("svg", {
    class: "fill-current h-6 w-6 text-red-500",
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ n("title", null, "Close"),
    /* @__PURE__ */ n("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" })
  ])
], -1), x = [
  g,
  v,
  w
];
function k(e, t, o, s, l, r) {
  return d(), c("div", _, x);
}
const C = /* @__PURE__ */ i(y, [["render", k]]), $ = { VButton: b, VAlert: C }, a = $, S = {
  install(e) {
    Object.keys(a).forEach((t) => {
      e.component(t, a[t]);
    });
  }
};
export {
  S as default
};
