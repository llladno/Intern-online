import{d as h,C as v,r as o,D as k,E as S,c as a,f as d,F as y,s as w,o as n,y as C,k as I,_ as g}from"./index-C4OjjIZe.js";const B={class:"switch"},O={class:"switch__slider-values"},V=["onClick"],b=h({__name:"IOSimpleSelect",emits:["selectedValue"],setup(x,{emit:_}){const u=v(),i=o({width:0,left:4,id:0}),c=o(null),f=o(),m=_;k(()=>{S(()=>{var s;(s=document.querySelector(".simple__selected"))==null||s.click()}),setTimeout(()=>{},1e3)});function p(s,r,t){if(c.value){const e=c.value,l=s.target;e.style.width=l.offsetWidth+32+"px",e.style.left=l.offsetLeft-16+20+"px"}i.value.id=r,m("selectedValue",t)}return(s,r)=>(n(),a("div",B,[d("div",{ref_key:"slide",ref:c,class:"switch__slide-container"},null,512),d("div",O,[(n(!0),a(y,null,w(Object.keys(u),(t,e)=>(n(),a("span",{key:e,ref_for:!0,ref:e==0?f.value:null,class:C(["p-13-500",[i.value.id==e?"simple__selected":"default"]]),onClick:l=>p(l,e,t)},[I(s.$slots,t,{},void 0,!0)],10,V))),128))])]))}}),F=g(b,[["__scopeId","data-v-e095fb66"]]);export{F as I};
