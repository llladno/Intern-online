import{I as S}from"./SelectScrollDownButton.vue_vue_type_script_setup_true_lang-CAVRmDWk.js";import{I}from"./IOButton-DBab3VG-.js";import{I as k}from"./IconStar-jrqd4xR4.js";import{d as b,o as s,c as o,f as t,t as _,F as p,q as u,h as w,b as e,w as l,e as c,_ as g,r as x,p as C,g as y}from"./index-miEHew2R.js";import{I as f}from"./utils-D5v0nwQG.js";import{I as v}from"./IOSelect-CltvCgOf.js";const V={class:"tarif-card"},$={class:"tarif-card__info"},B={class:"p-25-500"},O={class:"tarif-card__stars"},N={class:"p-24-600"},T=b({__name:"CaseTarifCard",props:{tarif:Object},setup(a){return(d,h)=>(s(),o("div",V,[t("div",$,[t("h3",B,_(a.tarif.title),1),t("div",O,[(s(!0),o(p,null,u(a.tarif.stars,r=>(s(),w(k,{key:r}))),128))]),t("h3",N,_(a.tarif.cost)+" руб",1),t("ul",null,[(s(!0),o(p,null,u(a.tarif.advantages,r=>(s(),o("li",{key:r},_(r),1))),128))])]),e(I,null,{default:l(()=>[c("Оплатить")]),_:1})]))}}),A=g(T,[["__scopeId","data-v-1197a529"]]),i=a=>(C("data-v-0af8f987"),a=a(),y(),a),F={class:"main-container"},j=i(()=>t("h2",{class:"header-1"},"Новый кейс",-1)),q={key:0,class:"new-case__tarifs"},D={key:1,class:"new-case"},E=i(()=>t("h3",{class:"p-13-500"},"Направление кейса*",-1)),L=i(()=>t("h3",{class:"p-18-500"},"Требование для участников",-1)),z=i(()=>t("span",{class:"p-13-500"},"Участие",-1)),G=i(()=>t("span",{class:"p-10-500"},"Введите число от 1 до 30",-1)),H={class:"new-case__buttons"},J=b({__name:"AddCaseView",setup(a){const d=x("tarif"),h=[{title:'Тариф "Лайт"',stars:3,cost:500,advantages:["Публикация на месяц (с возможностью продления)","1 направление по кейсу","30 решений"]},{title:'Тариф "Стандарт"',stars:4,cost:900,advantages:["Публикация на 2 месяца (с возможностью продления)","От 1 до 2 направлений по кейсу","30 решений","Поднятие в ленте каждые 15 дней","Выделение кейса на 10 дней"]},{title:'Тариф "Премиум"',stars:5,cost:1300,advantages:["Публикация на 3 месяца (с возможностью продления)","От 1 до 3 направлений по кейсу","Неограниченное кол-во решений","Поднятие в ленте каждые 5 дней","Выделение кейса на 3 месяца","Чат с участниками"]}];return(r,m)=>(s(),o("div",F,[j,e(S,{style:{"margin-top":"16px","margin-bottom":"20px"},onSelectedValue:m[0]||(m[0]=n=>d.value=n)},{tarif:l(()=>[c("Тариф")]),info:l(()=>[c("Общая информация")]),_:1}),d.value=="tarif"?(s(),o("div",q,[(s(),o(p,null,u(h,n=>e(A,{key:n.title,tarif:n},null,8,["tarif"])),64))])):(s(),o("div",D,[E,e(v,{options:[{value:"default",label:"Обычный"},{value:"organisation",label:"Организация"}],placeholder:"Выберите направление",label:"Выберите направление"}),e(f,{placeholder:"Введите название"},{default:l(()=>[c("Название кейса")]),_:1}),e(f,{big:"",placeholder:"Введите описание кейса.."},{default:l(()=>[c(" Описание кейса")]),_:1}),L,z,e(v,{options:[{value:"self",label:"Личное"},{value:"command",label:"Команда"}],placeholder:"Выберите участие",label:"Выберите участие"}),t("div",null,[e(f,{placeholder:"До"},{default:l(()=>[c("Кол-во решений*")]),_:1}),G]),t("div",H,[e(I,null,{default:l(()=>[c("Опубликовать")]),_:1})])]))]))}}),W=g(J,[["__scopeId","data-v-0af8f987"]]);export{W as default};
