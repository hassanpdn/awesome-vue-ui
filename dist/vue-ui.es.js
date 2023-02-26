import { openBlock as a, createElementBlock as n, normalizeClass as u, renderSlot as f, Fragment as _, createElementVNode as t, toDisplayString as c, createCommentVNode as g } from "vue";
const m = (l, s) => {
  const e = l.__vccOpts || l;
  for (const [r, i] of s)
    e[r] = i;
  return e;
}, v = {
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
function w(l, s, e, r, i, o) {
  return a(), n("button", {
    class: u(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear", `${e.expanded ? "w-full" : ""} ${e.bgColor} ${e.textColor}`]),
    onClick: s[0] || (s[0] = (...d) => o.handleClick && o.handleClick(...d))
  }, [
    f(l.$slots, "default")
  ], 2);
}
const y = /* @__PURE__ */ m(v, [["render", w]]), b = {
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
      this.$emit("input", !1), document.querySelector("body").style.overflow = "visible";
    }
  },
  mounted() {
    document.querySelector("body").style.overflow = "hidden";
  }
}, x = /* @__PURE__ */ t("div", { class: "overlay backdrop-blur-sm h-screen w-screen blur-sm z-10 absolute" }, null, -1), p = {
  key: 0,
  class: "flex items-center mx-4 my-3",
  xmlns: "http://www.w3.org/2000/svg",
  width: "26",
  height: "28",
  viewBox: "0 0 24 20"
}, C = /* @__PURE__ */ t("path", {
  id: "Danger",
  d: "M17.316,18H2.679a3.129,3.129,0,0,1-.91-.2A2.809,2.809,0,0,1,.218,16.275,2.747,2.747,0,0,1,.21,14.146L7.529,1.433a2.746,2.746,0,0,1,1.1-1.08A2.819,2.819,0,0,1,9.993,0a2.853,2.853,0,0,1,2.484,1.442l7.268,12.615a2.936,2.936,0,0,1,.25,1,2.753,2.753,0,0,1-.73,2.021A2.841,2.841,0,0,1,17.316,18ZM10,12.272a.873.873,0,1,0,0,1.745.877.877,0,0,0,.869-.883A.867.867,0,0,0,10,12.272ZM10,6.09a.872.872,0,0,0-.88.862v2.8a.888.888,0,0,0,.88.873.872.872,0,0,0,.869-.873v-2.8A.867.867,0,0,0,10,6.09Z",
  transform: "translate(0.001 0)",
  fill: "#f76d6a"
}, null, -1), k = [
  C
], A = {
  key: 1,
  class: "flex items-center mx-4 my-3",
  xmlns: "http://www.w3.org/2000/svg",
  width: "26",
  height: "28",
  viewBox: "0 0 24 20"
}, B = /* @__PURE__ */ t("g", {
  id: "Info_Circle",
  "data-name": "Info Circle",
  transform: "translate(0.5 0.5)"
}, [
  /* @__PURE__ */ t("g", {
    id: "Info_Circle-2",
    "data-name": "Info Circle",
    transform: "translate(0 0)"
  }, [
    /* @__PURE__ */ t("path", {
      id: "Info_Circle-3",
      "data-name": "Info Circle",
      d: "M10,20a10,10,0,1,1,7.074-2.929A10.011,10.011,0,0,1,10,20Zm0-7.069a.871.871,0,0,0-.87.869.875.875,0,1,0,.87-.869Zm0-7.6a.892.892,0,0,0-.88.88v4.42a.875.875,0,0,0,1.751,0V6.21A.876.876,0,0,0,10,5.33Z",
      fill: "#619feb",
      stroke: "#fff3f3",
      "stroke-width": "1"
    })
  ])
], -1), S = [
  B
], Z = {
  key: 2,
  class: "flex items-center mx-4 my-3",
  xmlns: "http://www.w3.org/2000/svg",
  width: "26",
  height: "28",
  viewBox: "0 0 24 20"
}, M = /* @__PURE__ */ t("path", {
  id: "Tick_Square",
  "data-name": "Tick Square",
  d: "M14.34,20H5.67C2.279,20,0,17.625,0,14.091V5.92C0,2.379,2.279,0,5.67,0h8.67C17.725,0,20,2.379,20,5.92v8.171C20,17.625,17.725,20,14.34,20ZM6.44,9.125a.875.875,0,0,0-.62,1.5L8.2,12.99a.881.881,0,0,0,1.23,0L14.18,8.24A.877.877,0,0,0,12.94,7L8.81,11.13,7.06,9.38A.868.868,0,0,0,6.44,9.125Z",
  transform: "translate(0 0)",
  fill: "#4bd778"
}, null, -1), z = [
  M
], H = {
  key: 3,
  xmlns: "http://www.w3.org/2000/svg",
  width: "20.001",
  height: "18",
  viewBox: "0 0 20.001 18"
}, L = /* @__PURE__ */ t("path", {
  id: "Danger",
  d: "M17.316,18H2.679a3.129,3.129,0,0,1-.91-.2A2.809,2.809,0,0,1,.218,16.275,2.747,2.747,0,0,1,.21,14.146L7.529,1.433a2.746,2.746,0,0,1,1.1-1.08A2.819,2.819,0,0,1,9.993,0a2.853,2.853,0,0,1,2.484,1.442l7.268,12.615a2.936,2.936,0,0,1,.25,1,2.753,2.753,0,0,1-.73,2.021A2.841,2.841,0,0,1,17.316,18ZM10,12.272a.873.873,0,1,0,0,1.745.877.877,0,0,0,.869-.883A.867.867,0,0,0,10,12.272ZM10,6.09a.872.872,0,0,0-.88.862v2.8a.888.888,0,0,0,.88.873.872.872,0,0,0,.869-.873v-2.8A.867.867,0,0,0,10,6.09Z",
  transform: "translate(0.001 0)",
  fill: "#f7ba6a"
}, null, -1), V = [
  L
], I = { class: "flex flex-col" }, q = { class: "font-bold mt-2" }, D = { class: "block sm:inline mb-2" }, E = {
  key: 4,
  class: "flex items-center px-4 py-3"
}, j = /* @__PURE__ */ t("title", null, "Close", -1), N = /* @__PURE__ */ t("path", { d: "M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" }, null, -1), O = [
  j,
  N
];
function T(l, s, e, r, i, o) {
  return a(), n(_, null, [
    x,
    t("div", {
      class: u(["alert absolute flex justify-between items-center z-20", [o.alertClass, o.sizeClass, { "text-center": e.center }]]),
      role: "alert"
    }, [
      e.variant === "danger" ? (a(), n("svg", p, k)) : e.variant === "info" ? (a(), n("svg", A, S)) : e.variant === "success" ? (a(), n("svg", Z, z)) : (a(), n("svg", H, V)),
      t("p", I, [
        t("strong", q, c(e.title), 1),
        t("span", D, c(e.message), 1)
      ]),
      e.close_able ? (a(), n("span", E, [
        (a(), n("svg", {
          class: "fill-current h-6 w-6",
          role: "button",
          onClick: s[0] || (s[0] = (...d) => o.close && o.close(...d)),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20"
        }, O))
      ])) : g("", !0)
    ], 2)
  ], 64);
}
const F = /* @__PURE__ */ m(b, [["render", T]]), G = { VButton: y, VAlert: F }, h = G, K = {
  install(l) {
    Object.keys(h).forEach((s) => {
      l.component(s, h[s]);
    });
  }
};
export {
  K as default
};
