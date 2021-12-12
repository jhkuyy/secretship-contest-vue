import{h as T,j as q,J as b,p as f,U as B,r as s,o as d,i as A,l as o,w as n,F as D,k as c,n as E,m as C,t as g,f as I}from"./vendor.8051fb1e.js";import{a as j,b as F,B as V,C as $,c as w,T as N,d as P}from"./TextInput.506c90c2.js";import{_ as W,R as k}from"./index.c49a531a.js";import{u as M,R as O}from"./useRequest.a3776885.js";import{a as U}from"./ApiClient.24e86d0b.js";const z="_search_1dqh0_1";var G={search:z};const J=T({components:{AppListEmpty:j,LoadingWrapper:F,Button:V,CurrencyChip:$,DateChip:w,Table:N,TextInput:P},setup(){const{t:e}=q(),r=b([]),p=b(""),[i,_]=M(async()=>{r.value=await U.fetchApps()}),h=f(()=>[{id:"link",name:e("page.app_list.apps_table.column.name"),sortable:!0,sort:(t,l)=>t.link.name.localeCompare(l.link.name)},{id:"balance",name:e("page.app_list.apps_table.column.balance"),sortable:!1},{id:"createdAt",name:e("page.app_list.apps_table.column.created_at"),sortable:!0,sort:(t,l)=>t>l}]),u=f(()=>r.value.map(t=>({link:{name:t.name,route:{name:k.APP_DETAILS_WALLET,params:{id:t.id}}},balance:t.balance,createdAt:t.createdAt}))),m=t=>t.link.name.toLowerCase().includes(p.value);return B(i),{Route:k,t:e,columns:h,items:u,RequestState:O,requestState:_,fetchApps:i,searchString:p,searchFunction:m}}}),H={class:"container mt-3"},K={class:"row"},Q={class:"col-md-8 mb-3"},X={class:"col-md-4 mb-3"};function Y(e,r,p,i,_,h){const u=s("TextInput"),m=s("Button"),t=s("router-link"),l=s("CurrencyChip"),R=s("DateChip"),y=s("Table"),L=s("AppListEmpty"),S=s("LoadingWrapper");return d(),A("div",H,[o(S,{loading:e.requestState===e.RequestState.LOADING,error:e.requestState===e.RequestState.ERROR,onReload:e.fetchApps},{default:n(()=>[e.items.length>0?(d(),A(D,{key:0},[c("div",K,[c("div",Q,[c("div",{class:E(e.$style.search)},[o(u,{modelValue:e.searchString,"onUpdate:modelValue":r[0]||(r[0]=a=>e.searchString=a),icon:"search",placeholder:e.t("page.app_list.apps_table.search_placeholder")},null,8,["modelValue","placeholder"])],2)]),c("div",X,[o(m,{block:"",to:{name:e.Route.APP_ADD}},{default:n(()=>[C(g(e.t("page.app_list.button_add")),1)]),_:1},8,["to"])])]),o(y,{columns:e.columns,items:e.items,searchFunction:e.searchFunction},{link:n(({value:a})=>[o(t,{to:a.route},{default:n(()=>[C(g(a.name),1)]),_:2},1032,["to"])]),balance:n(({value:a})=>[o(l,{value:a},null,8,["value"])]),createdAt:n(({value:a})=>[o(R,{value:a},null,8,["value"])]),_:1},8,["columns","items","searchFunction"])],64)):(d(),I(L,{key:1}))]),_:1},8,["loading","error","onReload"])])}const v={};v.$style=G;var se=W(J,[["render",Y],["__cssModules",v]]);export{se as default};