(function(e,s){typeof exports=="object"&&typeof module<"u"?module.exports=s(require("vue")):typeof define=="function"&&define.amd?define(["vue"],s):(e=typeof globalThis<"u"?globalThis:e||self,e["vue-ui"]=s(e.Vue))})(this,function(e){"use strict";const s="",i=(n,o)=>{const t=n.__vccOpts||n;for(const[r,a]of o)t[r]=a;return t},m={name:"v-button",props:{expanded:{type:Boolean,default:!1},textColor:{type:String,default:"bg-gray-300"},bgColor:{type:String,default:"bg-blue-500"}},methods:{handleClick(){this.$emit("click")}}};function u(n,o,t,r,a,l){return e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["p-3 rounded-sm hover:bg-green-50 hover:shadow-md hover:shadow-gray-400 active:shadow-sm active:bg-green-800 transition-colors transition-shadows duration-500 ease-linear",`${t.expanded?"w-full":""} ${t.bgColor} ${t.textColor}`]),onClick:o[0]||(o[0]=(...d)=>l.handleClick&&l.handleClick(...d))},[e.renderSlot(n.$slots,"default")],2)}const f=i(m,[["render",u]]),h={name:"Alert",props:{title:{type:String,default:"Holy smokes!"},message:{type:String,default:"Something seriously bad happened."},variant:{type:String,default:"danger"},close_able:{type:Boolean,default:!0},size:{type:String,default:"md"},rounded:{type:Boolean,default:!1},center:{type:Boolean,default:!1},value:{type:Boolean,default:!1}},computed:{alertClass(){return["bg-"+this.variant+"-100","border","border-"+this.variant+"-400","text-"+this.variant+"-700",{"rounded-lg rounded-t-none":!this.rounded}]},sizeClass(){return"w-3/4 md:w-2/5 mx-auto -mt-1 alert-"+this.size}},methods:{close(){this.$emit("input",!1)}},mounted(){document.querySelector("body").style.overflow="hidden"},beforeDestroy(){document.querySelector("body").style.overflow="visible"}},p=e.createElementVNode("div",{class:"overlay h-screen w-full blur-sm z-10 relative"},null,-1),y={class:"font-bold"},_={class:"block sm:inline"},g={key:0,class:"absolute top-0 bottom-0 right-0 px-4 py-3"},b=[e.createElementVNode("title",null,"Close",-1),e.createElementVNode("path",{d:"M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"},null,-1)];function k(n,o,t,r,a,l){return e.openBlock(),e.createElementBlock(e.Fragment,null,[p,e.createElementVNode("div",{class:e.normalizeClass(["alert",[l.alertClass,l.sizeClass,{"text-center":t.center}]]),role:"alert"},[e.createElementVNode("strong",y,e.toDisplayString(t.title),1),e.createElementVNode("span",_,e.toDisplayString(t.message),1),t.close_able?(e.openBlock(),e.createElementBlock("span",g,[(e.openBlock(),e.createElementBlock("svg",{class:"fill-current h-6 w-6",role:"button",onClick:o[0]||(o[0]=(...d)=>l.close&&l.close(...d)),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},b))])):e.createCommentVNode("",!0)],2)],64)}const c={VButton:f,VAlert:i(h,[["render",k]])};return{install(n){Object.keys(c).forEach(o=>{n.component(o,c[o])})}}});
