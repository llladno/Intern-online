import{I as U}from"./IOSimpleSelect-C_S26Ixp.js";import{I as S}from"./IOButton-CVAa8UGJ.js";import{I as k}from"./IOInput-B8uQ0dN7.js";import{u as x,_ as L,a as R,b as B,c as C,d as O,e as y,f as M}from"./SelectScrollDownButton.vue_vue_type_script_setup_true_lang-KgGFj5AC.js";import{d as v,r as p,a as A,o as c,c as m,b as t,w as o,e as l,f as u,p as I,g as $,_ as h,m as N,u as D,h as P,i as j,v as z,j as E,k as r,l as w,n as W}from"./index-Da5dTUJc.js";const q=e=>(I("data-v-fcb5c77a"),e=e(),$(),e),T={class:"auth__login"},F={class:"auth__login__remember"},G=q(()=>u("div",null,[u("input",{type:"checkbox"}),l(),u("label",null,"Сохранить вход")],-1)),H=v({__name:"AuthLogin",setup(e){const a=p(""),n=p(""),d=x();function i(){d.signIn({email:a.value,password:n.value})}return(g,f)=>{const b=A("RouterLink");return c(),m("div",T,[t(k,{modelValue:a.value,"onUpdate:modelValue":f[0]||(f[0]=s=>a.value=s),props:{placeholder:"Логин"}},{default:o(()=>[l("Логин")]),_:1},8,["modelValue"]),t(k,{modelValue:n.value,"onUpdate:modelValue":f[1]||(f[1]=s=>n.value=s)},{default:o(()=>[l("Пароль")]),_:1},8,["modelValue"]),u("div",F,[G,t(b,{to:"/recovery"},{default:o(()=>[l("Забыли пароль?")]),_:1})]),t(S,{onClick:i,fullWidth:""},{default:o(()=>[l("Войти")]),_:1})])}}}),J=h(H,[["__scopeId","data-v-fcb5c77a"]]),K={class:"default-input"},Q=["type","placeholder"],X={key:1,rows:"4"},Y=v({__name:"OIInput",props:N({props:Object,big:Boolean,placeholder:String,type:String},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const a=D(e,"modelValue");return(n,d)=>(c(),m("div",K,[u("label",null,[P(n.$slots,"default",{},void 0,!0)]),e.big?(c(),m("textarea",X)):j((c(),m("input",E({key:0,type:e.type?e.type:"text"},{...e.props},{placeholder:e.placeholder,"onUpdate:modelValue":d[0]||(d[0]=i=>a.value=i)}),null,16,Q)),[[z,a.value]])]))}}),V=h(Y,[["__scopeId","data-v-ddd8bc4d"]]),Z=e=>(I("data-v-48bc7474"),e=e(),$(),e),ee={class:"auth__registration"},te=Z(()=>u("p",null,"Зарегистрироваться как",-1)),oe=v({__name:"AuthRegistration",setup(e){const a=p(""),n=p(""),d=p(""),i=p(""),g=x();function f(){console.log(i.value==="organisation"&&!0),console.log(g.signUp({email:a.value,password:n.value,organisation:i.value==="organisation"}))}return(b,s)=>(c(),m("div",ee,[te,t(r(M),{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=_=>i.value=_)},{default:o(()=>[t(r(L),null,{default:o(()=>[t(r(R),{placeholder:"Выберите вид пользователя"})]),_:1}),t(r(B),null,{default:o(()=>[t(r(C),null,{default:o(()=>[t(r(O),null,{default:o(()=>[l("Выберите вид пользователя")]),_:1}),t(r(y),{value:"default"},{default:o(()=>[l("Обычный")]),_:1}),t(r(y),{value:"organisation"},{default:o(()=>[l("Организация")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),t(V,{modelValue:a.value,"onUpdate:modelValue":s[1]||(s[1]=_=>a.value=_),props:{placeholder:"Телефон"}},{default:o(()=>[l("Почта")]),_:1},8,["modelValue"]),t(V,{modelValue:n.value,"onUpdate:modelValue":s[2]||(s[2]=_=>n.value=_),props:{placeholder:"Пароль"}},{default:o(()=>[l("Пароль")]),_:1},8,["modelValue"]),t(V,{modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=_=>d.value=_),props:{placeholder:"Повторите пароль"}},{default:o(()=>[l("Повтор пароля")]),_:1},8,["modelValue"]),t(S,{onClick:f,fullWidth:""},{default:o(()=>[l("Зарегистрироваться")]),_:1})]))}}),ae=h(oe,[["__scopeId","data-v-48bc7474"]]),le=e=>(I("data-v-fcfce354"),e=e(),$(),e),se={class:"auth"},ne=le(()=>u("div",{class:"auth__back"},[u("span",null,"⭠"),u("p",null,"Назад")],-1)),ue=v({__name:"AuthLayout",setup(e){const a=p("login");return(n,d)=>{const i=A("RouterLink");return c(),m("div",se,[u("div",null,[t(i,{to:"/"},{default:o(()=>[ne]),_:1}),t(U,{onSelectedValue:d[0]||(d[0]=g=>a.value=g),style:{"margin-top":"27px"},class:"auth__simpleselect"},{login:o(()=>[l("Вход")]),registration:o(()=>[l("Регистрация")]),_:1}),a.value=="login"?(c(),w(J,{key:0})):a.value=="registration"?(c(),w(ae,{key:1})):W("",!0)])])}}}),de=h(ue,[["__scopeId","data-v-fcfce354"]]),ie="/Intern-online/assets/AuthPhoto-DMEqoAN6.png",re=["src"],ce=v({__name:"AuthorizationView",setup(e){return(a,n)=>(c(),m("main",null,[t(de),u("img",{src:r(ie),alt:""},null,8,re)]))}}),he=h(ce,[["__scopeId","data-v-0bf6fdfa"]]);export{he as default};
