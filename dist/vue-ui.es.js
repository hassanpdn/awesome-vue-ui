import { openBlock as d, createElementBlock as i, normalizeClass as p, renderSlot as f, createElementVNode as n } from "vue";
const c = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [l, r] of e)
    t[l] = r;
  return t;
}, h = {
  name: "v-button",
  props: {
    expanded: {
      type: Boolean,
      default: !1
    },
    text: {
      type: String,
      default: ""
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
function m(o, e, t, l, r, s) {
  return d(), i("button", {
    class: p(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${t.expanded ? "w-full" : ""} ${t.bgColor} ${t.textColor} ${t.text}`]),
    onClick: e[0] || (e[0] = (...u) => s.handleClick && s.handleClick(...u))
  }, [
    f(o.$slots, "default")
  ], 2);
}
const g = /* @__PURE__ */ c(h, [["render", m]]), y = {
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
}, _ = {
  class: "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative",
  role: "alert"
}, b = /* @__PURE__ */ n("strong", { class: "font-bold" }, "Holy smokes!", -1), v = /* @__PURE__ */ n("span", { class: "block sm:inline" }, "Something seriously bad happened.", -1), x = /* @__PURE__ */ n("span", { class: "absolute top-0 bottom-0 right-0 px-4 py-3" }, [
  /* @__PURE__ */ n("svg", {
    class: "fill-current h-6 w-6 text-red-500",
    role: "button",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20"
  }, [
    /* @__PURE__ */ n("title", null, "Close"),
    /* @__PURE__ */ n("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" })
  ])
], -1), w = [
  b,
  v,
  x
];
function k(o, e, t, l, r, s) {
  return d(), i("div", _, w);
}
const C = /* @__PURE__ */ c(y, [["render", k]]), S = { VButton: g, VAlert: C }, a = S, B = {
  install(o) {
    Object.keys(a).forEach((e) => {
      o.component(e, a[e]);
    });
  }
};
export {
  B as default
};
