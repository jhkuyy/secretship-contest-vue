import{D as f,F as I,B as V,k as F,e as T,f as k,g as B,h as w,H as C}from"./TextInput.1168a308.js";import{_ as x}from"./index.521f2190.js";import{h as D,r as l,o as U,i as g,l as o,w as d,k as e,m}from"./vendor.e22287f4.js";var $={};const H=D({components:{Dropdown:f,Form:I,Button:V,Checkbox:F,FormLabel:T,FormTextInput:k,FormMultiselect:B,Tabs:w,Header:C},data:()=>({input1:"",model1:[],model2:["Item 1"],activeTab:void 0,tabs:[{name:"Tab 1"},{name:"Tab 2"},{name:"Tab 3"}]})}),M={class:"container"},N=m(" Ui kit "),j={class:"row"},y={class:"col-md-4"},L={class:"mb-4"},E=e("h3",{class:"mb-3"}," Buttons ",-1),A=m("Button"),K={class:"col-md-4"},q={class:"mb-4"},z=e("h3",{class:"mb-3"}," Checkboxes ",-1),G={class:"col-md-4"},J={class:"mb-4"},O=e("h3",{class:"mb-3"}," Dropdown ",-1),P=e("a",{class:"color-primary"},"Dropdown",-1),Q=e("div",{class:"text-center"}," contents ",-1),R={class:"mb-4"},S=e("h3",{class:"mb-3"}," Form ",-1),W=m("Form name"),X={class:"mb-3"},Y={class:"mb-3"},Z={class:"mb-3"},ee={class:"mb-3"},oe={class:"mb-3"},te={class:"mb-3"},se={class:"mb-3"},ne={class:"mb-4"},le=e("h3",{class:"mb-3"}," Tabs ",-1);function de(s,n,ae,me,ie,ce){const r=l("Header"),_=l("Button"),i=l("Checkbox"),p=l("Dropdown"),b=l("FormLabel"),c=l("FormMultiselect"),a=l("FormTextInput"),h=l("Form"),v=l("Tabs");return U(),g("div",M,[o(r,{anchor:"#bottom"},{default:d(()=>[N]),_:1}),e("div",j,[e("div",y,[e("div",L,[E,o(_,null,{default:d(()=>[A]),_:1})])]),e("div",K,[e("div",q,[z,o(i,{class:"me-1",modelValue:"true"}),o(i)])]),e("div",G,[e("div",J,[O,o(p,null,{trigger:d(()=>[P]),default:d(()=>[Q]),_:1})])])]),e("div",R,[S,o(b,null,{default:d(()=>[W]),_:1}),o(h,null,{default:d(()=>[e("div",X,[o(c,{modelValue:s.model1,"onUpdate:modelValue":n[0]||(n[0]=t=>s.model1=t),notFoundText:"Not found",placeholder:"placeholder",items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]},null,8,["modelValue"])]),e("div",Y,[o(c,{modelValue:s.model2,"onUpdate:modelValue":n[1]||(n[1]=t=>s.model2=t),notFoundText:"Not found",disabled:"",description:"Disabled",items:["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6"]},null,8,["modelValue"])]),e("div",Z,[o(a,{modelValue:s.input1,"onUpdate:modelValue":n[2]||(n[2]=t=>s.input1=t),label:"Input label",rules:[t=>!t||t.length<3?"Error message":void 0]},null,8,["modelValue","rules"])]),e("div",ee,[o(a,{placeholder:"Input label"})]),e("div",oe,[o(a,{modelValue:s.input1,"onUpdate:modelValue":n[3]||(n[3]=t=>s.input1=t),label:"Input label",hintText:"Hint text"},null,8,["modelValue"])]),e("div",te,[o(a,{modelValue:s.input1,"onUpdate:modelValue":n[4]||(n[4]=t=>s.input1=t),label:"Input label",description:"Field description"},null,8,["modelValue"])]),e("div",se,[o(a,{prefix:"$",placeholder:"Amount"})])]),_:1})]),e("div",ne,[le,o(v,{active:s.activeTab,items:s.tabs,onChange:n[5]||(n[5]=t=>s.activeTab=t)},null,8,["active","items"])])])}const u={};u.$style=$;var pe=x(H,[["render",de],["__cssModules",u]]);export{pe as default};