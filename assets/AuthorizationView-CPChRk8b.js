import{_ as $}from"./OISimpleSelect.vue_vue_type_script_setup_true_lang-pOK__juE.js";import{I as m}from"./IOButton-CdAPPgUp.js";import{O as c,_ as k}from"./OIOptionsSelect.vue_vue_type_script_setup_true_lang-Bn9xm46K.js";import{d as r,r as v,o as n,c as i,a as e,w as o,b as s,e as a,p,f as h,_ as u,g as A,h as f,i as b,u as x}from"./index-Ckb45UsQ.js";const L=t=>(p("data-v-8839bf3b"),t=t(),h(),t),w={class:"auth__login"},y={class:"auth__login__remember"},S=L(()=>a("div",null,[a("input",{type:"checkbox"}),s(),a("label",null,"Сохранить вход")],-1)),V=r({__name:"AuthLogin",setup(t){return(_,d)=>{const l=v("RouterLink");return n(),i("div",w,[e(c,{props:{placeholder:"Логин"}},{default:o(()=>[s("Логин")]),_:1}),e(c,null,{default:o(()=>[s("Пароль")]),_:1}),a("div",y,[S,e(l,{to:"/recovery"},{default:o(()=>[s("Забыли пароль?")]),_:1})]),e(m,{fullWidth:""},{default:o(()=>[s("Войти")]),_:1})])}}}),R=u(V,[["__scopeId","data-v-8839bf3b"]]),B=t=>(p("data-v-a21f0912"),t=t(),h(),t),N={class:"auth__registration"},C=B(()=>a("p",null,"Зарегистрироваться как",-1)),O=r({__name:"AuthRegistration",setup(t){return(_,d)=>(n(),i("div",N,[C,e(k,{options:["Обычный","Организация"],defaultSelect:"Выберите вид пользователя"}),e(c,{props:{placeholder:"Телефон"}},{default:o(()=>[s("Телефон")]),_:1}),e(c,{props:{placeholder:"Пароль"}},{default:o(()=>[s("Пароль")]),_:1}),e(c,{props:{placeholder:"Повторите пароль"}},{default:o(()=>[s("Повтор пароля")]),_:1}),e(m,{fullWidth:""},{default:o(()=>[s("Зарегистрироваться")]),_:1})]))}}),z=u(O,[["__scopeId","data-v-a21f0912"]]),E=t=>(p("data-v-8824dfc7"),t=t(),h(),t),P={class:"auth"},W=E(()=>a("div",{class:"auth__back"},[a("span",null,"⭠"),a("p",null,"Назад")],-1)),q=r({__name:"AuthLayout",setup(t){const _=A("login");return(d,l)=>{const g=v("RouterLink");return n(),i("div",P,[a("div",null,[e(g,{to:"/"},{default:o(()=>[W]),_:1}),e($,{onSelectedValue:l[0]||(l[0]=I=>_.value=I),style:{"margin-top":"27px"},class:"auth__simpleselect"},{login:o(()=>[s("Вход")]),registration:o(()=>[s("Регистрация")]),_:1}),_.value=="login"?(n(),f(R,{key:0})):_.value=="registration"?(n(),f(z,{key:1})):b("",!0)])])}}}),D=u(q,[["__scopeId","data-v-8824dfc7"]]),M="/Intern-online/assets/AuthPhoto-DMEqoAN6.png",T=["src"],j=r({__name:"AuthorizationView",setup(t){return(_,d)=>(n(),i("main",null,[e(D),a("img",{src:x(M),alt:""},null,8,T)]))}}),K=u(j,[["__scopeId","data-v-0d41346b"]]);export{K as default};
