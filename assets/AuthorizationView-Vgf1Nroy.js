import{I as U}from"./IOSimpleSelect-8R48QINh.js";import{I as A}from"./IOButton-Db3GHPv1.js";import{I as f}from"./utils-Dbgakl5c.js";import{u as x}from"./UserStore-DPCOenhv.js";import{d as h,r as c,a as b,o as m,c as V,b as e,w as t,e as o,f as n,p as I,g as $,_ as g,u as d,h as k,i as y}from"./index-C4OjjIZe.js";import{_ as C,a as B,b as N,c as L,d as O,e as S,S as R}from"./SelectScrollDownButton.vue_vue_type_script_setup_true_lang-CtS_pjlC.js";const z="/Intern-online/assets/AuthPhoto-DMEqoAN6.png",E=a=>(I("data-v-e1591ede"),a=a(),$(),a),P={class:"auth__login"},q={class:"auth__login__remember"},D=E(()=>n("div",null,[n("input",{type:"checkbox"}),o(),n("label",null,"Сохранить вход")],-1)),M=h({__name:"AuthLogin",setup(a){const l=c(""),u=c(""),r=x();function _(){r.signIn({email:l.value,password:u.value})}return(v,p)=>{const w=b("router-link");return m(),V("div",P,[e(f,{modelValue:l.value,"onUpdate:modelValue":p[0]||(p[0]=s=>l.value=s),props:{placeholder:"Логин"}},{default:t(()=>[o(" Логин ")]),_:1},8,["modelValue"]),e(f,{modelValue:u.value,"onUpdate:modelValue":p[1]||(p[1]=s=>u.value=s)},{default:t(()=>[o(" Пароль ")]),_:1},8,["modelValue"]),n("div",q,[D,e(w,{to:"/recovery"},{default:t(()=>[o(" Забыли пароль? ")]),_:1})]),e(A,{"full-width":"",onClick:_},{default:t(()=>[o(" Войти ")]),_:1})])}}}),T=g(M,[["__scopeId","data-v-e1591ede"]]),j=a=>(I("data-v-da9ecb01"),a=a(),$(),a),F={class:"auth__registration"},G=j(()=>n("p",{class:"p-14-500"},"Зарегистрироваться как",-1)),H=h({__name:"AuthRegistration",setup(a){const l=c(""),u=c(""),r=c(""),_=c(""),v=x();function p(){v.signUp({email:l.value,password:u.value,organisation:_.value==="organisation"&&!0})}return(w,s)=>(m(),V("div",F,[G,e(d(R),{modelValue:_.value,"onUpdate:modelValue":s[0]||(s[0]=i=>_.value=i)},{default:t(()=>[e(d(C),null,{default:t(()=>[e(d(B),{placeholder:"Выберите вид пользователя"})]),_:1}),e(d(N),null,{default:t(()=>[e(d(L),null,{default:t(()=>[e(d(O),null,{default:t(()=>[o("Выберите вид пользователя")]),_:1}),e(d(S),{value:"default"},{default:t(()=>[o(" Обычный ")]),_:1}),e(d(S),{value:"organisation"},{default:t(()=>[o(" Организация ")]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(f,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=i=>l.value=i),props:{placeholder:"Телефон"}},{default:t(()=>[o(" Почта ")]),_:1},8,["modelValue"]),e(f,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=i=>u.value=i),props:{placeholder:"Пароль"}},{default:t(()=>[o(" Пароль ")]),_:1},8,["modelValue"]),e(f,{modelValue:r.value,"onUpdate:modelValue":s[3]||(s[3]=i=>r.value=i),props:{placeholder:"Повторите пароль"}},{default:t(()=>[o(" Повтор пароля ")]),_:1},8,["modelValue"]),e(A,{class:"auth__registration-button","full-width":"",onClick:p},{default:t(()=>[o(" Зарегистрироваться ")]),_:1})]))}}),J=g(H,[["__scopeId","data-v-da9ecb01"]]),K=a=>(I("data-v-22d2f325"),a=a(),$(),a),Q={class:"auth"},W=K(()=>n("div",{class:"auth__back"},[n("span",null,"⭠"),n("p",null,"Назад")],-1)),X=h({__name:"AuthLayout",setup(a){const l=c("login");return(u,r)=>{const _=b("router-link");return m(),V("div",Q,[n("div",null,[e(_,{to:"/"},{default:t(()=>[W]),_:1}),e(U,{style:{"margin-top":"27px"},class:"auth__simpleselect",onSelectedValue:r[0]||(r[0]=v=>l.value=v)},{login:t(()=>[o(" Вход ")]),registration:t(()=>[o(" Регистрация ")]),_:1}),l.value=="login"?(m(),k(T,{key:0})):l.value=="registration"?(m(),k(J,{key:1})):y("",!0)])])}}}),Y=g(X,[["__scopeId","data-v-22d2f325"]]),Z=["src"],ee=h({__name:"AuthorizationView",setup(a){return(l,u)=>(m(),V("main",null,[e(Y),n("img",{src:d(z),alt:""},null,8,Z)]))}}),ue=g(ee,[["__scopeId","data-v-a2a653f2"]]);export{ue as default};
