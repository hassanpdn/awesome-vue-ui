(function(e,l){typeof exports=="object"&&typeof module<"u"?module.exports=l(require("vue")):typeof define=="function"&&define.amd?define(["vue"],l):(e=typeof globalThis<"u"?globalThis:e||self,e["vue-ui"]=l(e.Vue))})(this,function(e){"use strict";const l="",d=(o,t)=>{const n=o.__vccOpts||o;for(const[r,s]of t)n[r]=s;return n},c={name:"v-button",props:{expanded:{type:Boolean,default:!1},textColor:{type:String,default:"bg-gray-300"},bgColor:{type:String,default:"bg-blue-500"}},methods:{handleClick(){this.$emit("click")}}};function u(o,t,n,r,s,a){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear",`${n.expanded?"w-full":""} ${n.bgColor} ${n.textColor}`]),onClick:t[0]||(t[0]=(...b)=>a.handleClick&&a.handleClick(...b))},[e.renderSlot(o.$slots,"default")],2)}const p=d(c,[["render",u]]),f={name:"alert",props:{variant:{type:String,default:"danger"},message:{type:String,default:""},close_able:{type:Boolean,default:!0},size:{type:String,default:"md"},rounded:{type:Boolean,default:!1},center:{type:Boolean,default:!1},value:{type:Boolean,default:!1}},computed:{variant_handler(){return"alert-"+this.variant},size_handler(){return"alert-"+this.size}},mounted(){document.querySelector("body").style.overflow="hidden"},beforeDestroy(){document.querySelector("body").style.overflow="visible"}},m={class:"overlay h-screen w-full blur-sm z-10 relative"},h=[e.createElementVNode("div",{class:"absolute z-20 top-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded",role:"alert"},[e.createElementVNode("strong",{class:"font-bold"},"Holy smokes!"),e.createElementVNode("span",{class:"block sm:inline"},"Something seriously bad happened."),e.createElementVNode("span",{class:"absolute top-0 bottom-0 right-0 px-4 py-3"},[e.createElementVNode("svg",{class:"fill-current h-6 w-6 text-red-500",role:"button",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[e.createElementVNode("title",null,"Close"),e.createElementVNode("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"})])])],-1)];function y(o,t,n,r,s,a){return e.openBlock(),e.createElementBlock("div",m,h)}const i={VButton:p,VAlert:d(f,[["render",y]])};return{install(o){Object.keys(i).forEach(t=>{o.component(t,i[t])})}}});
