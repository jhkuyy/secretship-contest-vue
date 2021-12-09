var g=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var u=(t,e,r)=>(g(t,e,"read from private field"),r?r.call(t):e.get(t)),h=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r)},f=(t,e,r,o)=>(g(t,e,"write to private field"),o?o.call(t,r):e.set(t,r),r);var _=(t,e,r)=>(g(t,e,"access private method"),r);import{d as P,c as S,a as O,b as I,e as k,r as x,o as D,f as R,g as H}from"./vendor.37d275cf.js";const M=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(n){if(n.ep)return;n.ep=!0;const i=r(n);fetch(n.href,i)}};M();const U="modulepreload",A={},N="/secretship-contest-vue/",s=function(e,r){return!r||r.length===0?e():Promise.all(r.map(o=>{if(o=`${N}${o}`,o in A)return;A[o]=!0;const n=o.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=n?"stylesheet":U,n||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),n)return new Promise((L,T)=>{a.addEventListener("load",L),a.addEventListener("error",T)})})).then(()=>e())};var b={RU:"ru",EN:"en"},l={WELCOME:"route:home",APP_ADD:"route:app-add",APP_DETAILS:"route:app-details",APP_LIST:"route:app-list",PROFILE_EDIT:"route:profile-edit",NOT_FOUND:"route:not-found",HELP:"route:help"},c={AUTH:Symbol("guard:auth"),NO_AUTH:Symbol("guard:no-auth")},C=[{name:l.WELCOME,path:"/",component:()=>s(()=>import("./WelcomeScreen.388fba55.js"),["assets/WelcomeScreen.388fba55.js","assets/WelcomeScreen.b8e47eb7.css","assets/vendor.37d275cf.js","assets/UserChip.4e785730.js","assets/UserChip.87e46e15.css"]),meta:{guards:[c.NO_AUTH]}},{path:"/",component:()=>s(()=>import("./ApplicationLayout.5316d8b4.js"),["assets/ApplicationLayout.5316d8b4.js","assets/ApplicationLayout.3241ef48.css","assets/UserChip.4e785730.js","assets/UserChip.87e46e15.css","assets/vendor.37d275cf.js"]),children:[{path:"apps",component:()=>s(()=>import("./AppLayout.66dce9fb.js"),["assets/AppLayout.66dce9fb.js","assets/vendor.37d275cf.js"]),children:[{name:l.APP_LIST,path:"",component:()=>s(()=>import("./AppList.d572ed79.js"),["assets/AppList.d572ed79.js","assets/vendor.37d275cf.js"]),meta:{guards:[c.AUTH]}},{name:l.APP_ADD,path:"add",component:()=>s(()=>import("./AppAdd.b37e3890.js"),["assets/AppAdd.b37e3890.js","assets/vendor.37d275cf.js"]),meta:{guards:[c.AUTH]}},{name:l.APP_DETAILS,path:"details/:id",component:()=>s(()=>import("./AppDetails.c836e90c.js"),["assets/AppDetails.c836e90c.js","assets/vendor.37d275cf.js"]),meta:{guards:[c.AUTH]}}]},{name:l.PROFILE_EDIT,path:"/profile-edit",component:()=>s(()=>import("./ProfileEdit.6089eb2e.js"),["assets/ProfileEdit.6089eb2e.js","assets/vendor.37d275cf.js"]),meta:{guards:[c.AUTH]}},{name:l.HELP,path:"/help",component:()=>s(()=>import("./HelpScreen.dff5fc7d.js"),["assets/HelpScreen.dff5fc7d.js","assets/vendor.37d275cf.js"]),meta:{guards:[c.AUTH]}}]},{path:"/:pathMatch(.*)*",redirect:"/"}],p,m,v;class V{constructor(e){h(this,m);h(this,p,void 0);if(!("localStorage"in window))throw new Error("LocalStorageAdapter not supported");f(this,p,e)}get(e){const r=window.localStorage.getItem(_(this,m,v).call(this,e));return r?JSON.parse(r):void 0}set(e,r){window.localStorage.setItem(_(this,m,v).call(this,e),JSON.stringify(r))}remove(e){window.localStorage.removeItem(_(this,m,v).call(this,e))}}p=new WeakMap,m=new WeakSet,v=function(e){return`${u(this,p)}:${e}`};var d;class B{constructor(e){h(this,d,void 0);f(this,d,e)}get(e){return u(this,d).get(e)}set(e,r){u(this,d).set(e,r)}remove(e){u(this,d).remove(e)}}d=new WeakMap;const $=new V("APP_STORAGE");var z=new B($);const w="user";var y=P("user",{state:()=>({user:void 0}),getters:{isAuthorized:t=>t.user!==void 0},actions:{async initAuthorization(){const t=z.get(w);t!==void 0?this.login(t):this.logout()},login(t){this.user=t,z.set(w,t)},logout(){this.user=void 0,z.remove(w)}}});function j(){return S()}function E(t,e){return(r,o,n)=>{var i;return((i=r.meta.guards)==null?void 0:i.includes(t))?e({to:r,from:o,next:n}):n()}}const W=E(c.AUTH,({next:t})=>y().isAuthorized?t():(console.error("Auth guard failed"),t({name:l.WELCOME}))),G=E(c.NO_AUTH,({next:t})=>y().isAuthorized?(console.error("No auth guard failed"),t({name:l.APP_LIST})):t());var F=[W,G];function K(){const t=O({history:I(),routes:C});return F.forEach(t.beforeEach),t}var q={page:{welcome:{title1:t=>{const{normalize:e}=t;return e(["Telegram Ad Platform"])},p1:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Telegram provides a ",r(o("t1"))," messaging service for more than ",r(o("t2"))," around the world. In addition to sending private messages and chatting in private groups, Telegram users can subscribe to ",r(o("t3")),"."])},t1:t=>{const{normalize:e}=t;return e(["free and secure"])},t2:t=>{const{normalize:e}=t;return e(["500 million monthly active users"])},t3:t=>{const{normalize:e}=t;return e(["public one-to-many channels"])}},p2:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Every month, Telegram users generate over ",r(o("t1"))," in one-to-many channels."])},t1:t=>{const{normalize:e}=t;return e(["500 billion views"])}},title2:t=>{const{normalize:e}=t;return e(["Advertising on Telegram"])},p3:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Sponsored messages on Telegram are displayed in ",r(o("t1"))," with ",r(o("t2"))," subscribers and are limited to ",r(o("t3")),". Sponsored Messages are based solely on the ",r(o("t4"))," of the public channels in which they are shown."])},t1:t=>{const{normalize:e}=t;return e(["large public one-to-many channels"])},t2:t=>{const{normalize:e}=t;return e(["1000+"])},t3:t=>{const{normalize:e}=t;return e(["160 characters"])},t4:t=>{const{normalize:e}=t;return e(["topic"])}},p4:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["This means that ",r(o("t1"))," is mined or analyzed to display ads, and every user viewing a particular channel on Telegram sees ",r(o("t2")),"."])},t1:t=>{const{normalize:e}=t;return e(["no user data"])},t2:t=>{const{normalize:e}=t;return e(["the same sponsored messages"])}},title3:t=>{const{normalize:e}=t;return e(["Context-based advertising"])},p5:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Advertisers can choose the ",r(o("t1"))," and approximate ",r(o("t2"))," of channels where their ads will be displayed. It is also possible to choose ",r(o("t3"))," where a certain ad will be shown \u2013 or add specific channels where it will ",r(o("t4"))," be displayed."])},t1:t=>{const{normalize:e}=t;return e(["language"])},t2:t=>{const{normalize:e}=t;return e(["topics"])},t3:t=>{const{normalize:e}=t;return e(["specific channels"])},t4:t=>{const{normalize:e}=t;return e(["not"])}},p6:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["This allows advertisers to serve ",r(o("t1"))," ads while ",r(o("t2")),"."])},t1:t=>{const{normalize:e}=t;return e(["precise and efficient"])},t2:t=>{const{normalize:e}=t;return e(["preserving user privacy"])}},title4:t=>{const{normalize:e}=t;return e(["Privacy-conscious ads"])},p7:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Unlike other apps, Telegram ",r(o("t1"))," based on their interactions with sponsored messages or other activities. We also ",r(o("t2"))," in sponsored messages to ensure that third parties can\u2019t spy on our users. We believe that everyone has the right to privacy, and technological platforms should respect that."])},t1:t=>{const{normalize:e}=t;return e(["doesn\u2019t track or profile users"])},t2:t=>{const{normalize:e}=t;return e(["prevent external links"])}},title5:t=>{const{normalize:e}=t;return e(["Revenue sharing with channel owners"])},p8:t=>{const{normalize:e}=t;return e(["Sponsored Messages are currently in test mode. Once they are fully launched and allow Telegram to cover its basic costs, we will start sharing ad revenue with the owners of public channels in which sponsored messages are displayed."])},title6:t=>{const{normalize:e}=t;return e(["Getting started"])},p9:{term:t=>{const{normalize:e,interpolate:r,named:o}=t;return e(["Telegram welcomes all responsible advertisers. Anyone can study Telegram's ",r(o("t1")),", ",r(o("t2"))," on the Ad Platform and ",r(o("t3")),". For a detailed overview of the platform, see ",r(o("t4")),"."])},t1:t=>{const{normalize:e}=t;return e(["Ad Policies and Guidelines"])},t2:t=>{const{normalize:e}=t;return e(["create an account"])},t3:t=>{const{normalize:e}=t;return e(["try out the interface"])},t4:t=>{const{normalize:e}=t;return e(["this guide"])}}}},user_chip:{menu:{profile_edit:t=>{const{normalize:e}=t;return e(["Edit Account Info"])},help:t=>{const{normalize:e}=t;return e(["Help"])},logout:t=>{const{normalize:e}=t;return e(["Logout"])}}}},J={page:{welcome:{title:t=>{const{normalize:e}=t;return e(["\u0422\u0435\u0441\u0442"])}}}};function Y(){return k({legacy:!1,locale:b.EN,fallbackLocale:b.EN,messages:{en:q,ru:J}})}var Q=(t,e)=>{const r=t.__vccOpts||t;for(const[o,n]of e)r[o]=n;return r};const X={};function Z(t,e){const r=x("router-view");return D(),R(r)}var ee=Q(X,[["render",Z]]);function te(){const t=K(),e=j(),r=Y();return{app:H(ee).use(t).use(e).use(r),router:t,store:e}}function re({useUser:t}){return t().initAuthorization()}function oe({router:t,useUser:e}){return Promise.all([re({router:t,useUser:e})])}if(typeof window!="undefined"){let t=function(){let e=document.body,r=document.getElementById("__svg__icons__dom__1639043744887__");r||(r=document.createElementNS("http://www.w3.org/2000/svg","svg"),r.style.position="absolute",r.style.width="0",r.style.height="0",r.id="__svg__icons__dom__1639043744887__"),r.innerHTML='<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 6" id="icon-angle"><path fill="none" stroke="#1289eb" stroke-linecap="round" stroke-width="2" d="M1.68 1 5.8 4.46c.37.31.91.31 1.28 0L11.2 1h0" /></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-help"><g fill="none" fill-rule="evenodd"><circle cx="12" cy="12.5" r="8.7" stroke="#979797" stroke-width="1.6" /><path d="M11.92 14.29c.46 0 .71-.25.81-.68.08-.54.28-.82 1.13-1.32.91-.53 1.38-1.19 1.38-2.17 0-1.5-1.23-2.5-3.06-2.5-1.39 0-2.42.54-2.83 1.39-.13.25-.19.49-.19.77 0 .49.31.81.82.81.4 0 .69-.18.85-.6.2-.57.63-.88 1.26-.88.71 0 1.2.44 1.2 1.07 0 .59-.25.92-1.08 1.41-.76.45-1.16.95-1.16 1.71v.09c0 .53.32.9.87.9zm.02 2.87c.58 0 1.05-.44 1.05-1.01s-.47-1.01-1.05-1.01-1.06.44-1.06 1.01.48 1.01 1.06 1.01z" fill="#979797" fill-rule="nonzero" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" id="icon-logo"><g fill-rule="evenodd"><path d="m11.68 15.58.31 2.6c.12.96-.57 1.83-1.54 1.94-.03.01-.06.01-.1.01l-.19.02c-1 .06-1.94-.5-2.34-1.41l-1.46-2.88a.495.495 0 0 1 .21-.66c.07-.03.15-.05.22-.05h4.41c.24 0 .45.19.48.43zM6 5.95h6.21c.27 0 .49.22.49.49v7.02c0 .27-.22.49-.49.49H6c-2.21 0-4-1.79-4-4s1.79-4 4-4zM15.36 5.35l3.43-2.04c.7-.41 1.59-.18 2.01.51.13.23.2.49.2.75v10.86c0 .81-.66 1.46-1.46 1.46-.27 0-.52-.07-.75-.2l-3.43-2.03c-.84-.5-1.36-1.41-1.36-2.39V7.73c0-.98.52-1.89 1.36-2.38z" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-logout"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-linecap="round" stroke-width="1.6"><path d="M14 16.48v.42c0 1.16-.92 2.1-2.06 2.1H6.06C4.92 19 4 18.06 4 16.9V7.1C4 5.94 4.92 5 6.06 5h5.88C13.08 5 14 5.94 14 7.1v.66M9 12h11M17.4 16l3.3-3.67a.49.49 0 0 0 0-.66L17.4 8" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-pencil"><g fill="none" fill-rule="evenodd" stroke="#979797" stroke-width="1.6"><path d="M4.5 20h3.06c.28 0 .55-.12.74-.32L18.33 8.81c.75-.82.7-2.08-.11-2.83-.1-.09-.21-.17-.33-.24l-1.49-.9c-.81-.49-1.86-.34-2.5.36L4.26 15.71c-.17.19-.26.43-.26.68v3.11c0 .28.22.5.5.5zM12.5 6.893l3.644 3.644" /></g></symbol><symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon-plus"><g fill="none" fill-rule="evenodd" stroke="#979797"><rect fill="#d8d8d8" height="9" rx=".5" width="1" x="11.7" y="7.5" /><rect fill="#d8d8d8" height="1" rx=".5" width="9" x="7.5" y="11.7" /><circle cx="12" cy="12" r="8.7" stroke-width="1.6" /></g></symbol>',e.insertBefore(r,e.firstChild)};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",t):t()}(async()=>{const{app:t,router:e}=te();await oe({router:e,useUser:y}),t.mount("#app")})();export{l as R,Q as _,y as u};
