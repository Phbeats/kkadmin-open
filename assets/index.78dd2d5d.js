import{_ as k,z as d,N as L,aL as B,a as y,W as S}from"./index.4696ec71.js";import{B as D,c5 as v,j as f,a1 as o,D as n,F as w,w as P,a2 as u,ad as m,L as C,ab as E,u as r}from"./vendor.bf608252.js";import{c as T,u as F}from"./index.a001add6.js";import I from"./SessionTimeoutLogin.f49a14b1.js";import"./index.40104ea5.js";import"./useWindowSizeFn.011a8160.js";import"./useContentViewHeight.cafeca6c.js";/* empty css               *//* empty css               */import"./lock.5317181c.js";import"./Login.9e190084.js";import"./LoginForm.03b9c708.js";/* empty css              *//* empty css               */import"./LoginFormTitle.56c66ee2.js";const x=D({name:"LayoutFeatures",components:{BackTop:v,LayoutLockPage:T(()=>d(()=>import("./index.59c94632.js"),["assets/index.59c94632.js","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/LockPage.a2d3b5fb.js","assets/LockPage.74e81a43.css","assets/index.4696ec71.js","assets/index.007abcad.css","assets/lock.5317181c.js","assets/header.d801b988.js"])),SettingDrawer:T(()=>d(()=>import("./index.2fff45fd.js").then(function(e){return e.i}),["assets/index.2fff45fd.js","assets/index.17eb4c41.css","assets/index.27c08b25.js","assets/index.5c7227e9.css","assets/index.00780982.css","assets/index.4696ec71.js","assets/index.007abcad.css","assets/vendor.bf608252.js","assets/vendor.3cca954f.css","assets/index.a001add6.js","assets/index.f8c87140.css","assets/index.5aa8aa0e.css","assets/index.40104ea5.js","assets/index.bdbca534.css","assets/useWindowSizeFn.011a8160.js","assets/useContentViewHeight.cafeca6c.js","assets/lock.5317181c.js"])),SessionTimeoutLogin:I},setup(){const{getUseOpenBackTop:e,getShowSettingButton:p,getSettingButtonPosition:c,getFullContent:g}=L(),_=B(),{prefixCls:l}=y("setting-drawer-feature"),{getShowHeader:s}=F(),a=f(()=>_.getSessionTimeout),i=f(()=>{if(!r(p))return!1;const t=r(c);return t===S.AUTO?!r(s)||r(g):t===S.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:e,getIsFixedSettingDrawer:i,prefixCls:l,getIsSessionTimeout:a}}});function O(e,p,c,g,_,l){const s=o("LayoutLockPage"),a=o("BackTop"),i=o("SettingDrawer"),t=o("SessionTimeoutLogin");return n(),w(E,null,[P(s),e.getUseOpenBackTop?(n(),u(a,{key:0,target:e.getTarget},null,8,["target"])):m("",!0),e.getIsFixedSettingDrawer?(n(),u(i,{key:1,class:C(e.prefixCls)},null,8,["class"])):m("",!0),e.getIsSessionTimeout?(n(),u(t,{key:2})):m("",!0)],64)}var J=k(x,[["render",O]]);export{J as default};