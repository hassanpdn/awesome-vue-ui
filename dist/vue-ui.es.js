import { openBlock as s, createElementBlock as l, normalizeClass as m, renderSlot as g, createElementVNode as a, toDisplayString as c, createCommentVNode as h } from "vue";
const f = (o, t) => {
  const e = o.__vccOpts || o;
  for (const [r, d] of t)
    e[r] = d;
  return e;
}, b = {
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
function p(o, t, e, r, d, n) {
  return s(), l("button", {
    class: m(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${e.expanded ? "w-full" : ""} ${e.bgColor} ${e.textColor}`]),
    onClick: t[0] || (t[0] = (...i) => n.handleClick && n.handleClick(...i))
  }, [
    g(o.$slots, "default")
  ], 2);
}
const y = /* @__PURE__ */ f(b, [["render", p]]), _ = {
  name: "Alert",
  emits: ["input"],
  props: {
    title: {
      type: String,
      default: "Holy smokes!"
    },
    message: {
      type: String,
      default: "Something seriously bad happened."
    },
    variant: {
      type: String,
      default: "danger"
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
    variantHandler() {
      switch (this.variant) {
        case "success":
          return "green";
        case "danger":
          return "red";
        case "warning":
          return "orange";
        case "info":
          return "blue";
      }
    },
    alertClass() {
      return [
        "bg-" + this.variantHandler + "-100",
        "border",
        "border-" + this.variantHandler + "-400",
        "text-" + this.variantHandler + "-700",
        { "rounded-lg": this.rounded }
      ];
    },
    sizeClass() {
      return "w-3/4 md:w-2/5 mx-auto -mt-1 alert-" + this.size;
    }
  },
  methods: {
    close() {
      this.$emit("input", !1);
    }
  },
  mounted() {
    document.querySelector("body").style.overflow = "hidden";
  },
  beforeDestroy() {
    document.querySelector("body").style.overflow = "visible";
  }
}, v = { class: "font-bold mt-2" }, w = { class: "block sm:inline mb-2" }, C = {
  key: 0,
  class: "absolute top-0 bottom-0 right-0 px-4 py-3"
}, x = /* @__PURE__ */ a("title", null, "Close", -1), k = /* @__PURE__ */ a("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" }, null, -1), S = [
  x,
  k
];
function B(o, t, e, r, d, n) {
  return s(), l("div", {
    class: m(["alert absolute flex flex-col", [n.alertClass, n.sizeClass, { "text-center": e.center }]]),
    role: "alert"
  }, [
    a("strong", v, c(e.title), 1),
    a("span", w, c(e.message), 1),
    e.close_able ? (s(), l("span", C, [
      (s(), l("svg", {
        class: "fill-current h-6 w-6",
        role: "button",
        onClick: t[0] || (t[0] = (...i) => n.close && n.close(...i)),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20"
      }, S))
    ])) : h("", !0)
  ], 2);
}
const z = /* @__PURE__ */ f(_, [["render", B]]), H = { VButton: y, VAlert: z }, u = H, E = {
  install(o) {
    Object.keys(u).forEach((t) => {
      o.component(t, u[t]);
    });
  }
};
export {
  E as default
};
