(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports=t.p+"static/media/logo.6bb0a3cf.svg"},function(e,a,t){e.exports=t.p+"static/media/logo-large.d885e70b.svg"},function(e,a,t){e.exports=t.p+"static/media/profile-picture.f7ae0414.jpeg"},function(e,a,t){e.exports=t.p+"static/media/billlee.0e1c9828.webp"},function(e,a,t){e.exports=t.p+"static/media/billlee.957d0b32.png"},function(e,a,t){e.exports=t.p+"static/media/camlab.45c4bf9b.webp"},function(e,a,t){e.exports=t.p+"static/media/camlab.bf9e517e.png"},function(e,a,t){e.exports=t.p+"static/media/memory-game.33cf4e8a.webp"},function(e,a,t){e.exports=t.p+"static/media/memory-game.19b18731.png"},function(e,a,t){e.exports=t.p+"static/media/pamelagotti.3614b0eb.webp"},function(e,a,t){e.exports=t.p+"static/media/pamelagotti.0ba35912.png"},function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(3),l=t.n(r),o=(t(21),t(4)),c=t.n(o),m=t(5),s=t.n(m);var u=function(){return i.a.createElement("div",{className:"brand-logo"},i.a.createElement("picture",null,i.a.createElement("source",{media:"(min-width: 768px)",srcSet:s.a}),i.a.createElement("img",{src:c.a,alt:"Marko Nikolajevic Logo"})))},p=t(1),d=t.n(p);var g=function(e){return i.a.createElement("a",{className:"nav-link nav-mobile-link",href:e.link.url},e.link.text)};var f=class extends i.a.Component{constructor(e){super(e),this.state={isActive:!1},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(e=>({isActive:!e.isActive}));const e=document.querySelector(".hamburger-menu"),a=document.querySelector(".nav-mobile"),t=document.querySelector("body");e.classList.toggle("animated"),a.classList.toggle("show-menu-mobile"),t.classList.toggle("no-scroll"),t.ontouchend=(e=>{e.preventDefault()}),function(){let e=document.querySelectorAll(".nav-mobile-link");(e=Array.from(e)).forEach(function(e){e.addEventListener("click",function(){const e=document.querySelector(".hamburger-menu"),a=document.querySelector(".nav-mobile"),t=document.querySelector("body");a.classList.remove("show-menu-mobile"),e.classList.remove("animated"),t.classList.toggle("no-scroll")})})}()}render(){return i.a.createElement("div",{className:"hamburger-menu",onClick:this.handleClick,"aria-label":"Menu","aria-controls":"navigation"},i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}),i.a.createElement("div",{className:"bar"}))}};var b=function(){return i.a.createElement("nav",{className:"navbar nav-flex"},i.a.createElement(u,null),i.a.createElement(d.a,{query:"(max-width: 768px)"},i.a.createElement(f,null)),i.a.createElement(d.a,{query:"(min-width: 769px)"},i.a.createElement(g,{link:{url:"#about",text:"Su di me"}}),i.a.createElement(g,{link:{url:"#portfolio",text:"Portfolio"}}),i.a.createElement(g,{link:{url:"#contact",text:"Contatti"}})))};var h=function(e){return i.a.createElement("div",{className:"footer-links"},i.a.createElement("a",{className:"footer-link",href:e.footerLink.url,target:"_blank",rel:"noopener noreferrer"},i.a.createElement("i",{className:e.footerLink.icon})))};var E=function(){return i.a.createElement("nav",{className:"nav-mobile",role:"navigation"},i.a.createElement(g,{link:{url:"#about",text:"Su di me"}}),i.a.createElement(g,{link:{url:"#portfolio",text:"Portfolio"}}),i.a.createElement(g,{link:{url:"#contact",text:"Contatti"}}),i.a.createElement("div",{className:"wrapper"},i.a.createElement(h,{footerLink:{url:"https://twitter.com/markez1317",icon:"fab fa-twitter"}}),i.a.createElement(h,{footerLink:{url:"https://github.com/MarkoNikolajevic",icon:"fab fa-github"}}),i.a.createElement(h,{footerLink:{url:"https://www.linkedin.com/in/markonikolajevic/",icon:"fab fa-linkedin-in"}})))};var v=function(){return i.a.createElement("header",{className:"main-header"},i.a.createElement(b,null),i.a.createElement(E,null),i.a.createElement("div",{className:"header-text"},i.a.createElement("h1",{className:"main-title"},"Marko",i.a.createElement("br",null),"Nikolajevi\u0107"),i.a.createElement("p",{className:"intro"},"Sono un web developer e web designer situato a Trieste.")))},k=t(6),w=t.n(k);var N=function(){return i.a.createElement("section",{id:"about"},i.a.createElement("img",{src:w.a,alt:"Marko Nikolajevi\u0107",className:"profile-picture"}),i.a.createElement("p",{className:"personal-desc"},"Mi sono avvicinato alla programmazione attraverso la Specializzazione in 'Data Science' offerta dalla Johns Hopkins University sulla piattaforma di e-learning, Coursera. Ho imparato a programmare in R e vari aspetti nell'analisi di dati. Inoltre ho seguito corsi di programmazione web, sia su Coursera sia su altre piattaforme come freeCodeCamp, Udacity ed edX, migliorando la mia conoscenza e abilit\xe0."))};var x=function(e){return i.a.createElement("div",{className:"project-card"},i.a.createElement("picture",{className:"project-image"},i.a.createElement("source",{srcSet:e.webPImage,type:"image/webp"}),i.a.createElement("img",{src:e.image,alt:e.title})),i.a.createElement("div",{className:"project-text"},i.a.createElement("h4",{className:"project-title"},e.title),i.a.createElement("p",{className:"project-description"},e.description),i.a.createElement("a",{className:"project-link",href:e.link,target:"_blank",rel:"noopener noreferrer"},"Visita",i.a.createElement("i",{className:"fas fa-arrow-right"}))))},y=t(7),C=t.n(y),S=t(8),L=t.n(S),j=t(9),q=t.n(j),P=t(10),M=t.n(P),z=t(11),I=t.n(z),G=t(12),A=t.n(G),F=t(13),T=t.n(F),B=t(14),D=t.n(B);var J=[{id:"pamelaGotti",webPImage:T.a,image:D.a,title:"Pamela Gotti",description:"Sito personale della psicologa, ipnologa e consulente sessuale Pamela Gotti.",link:"https://pamelagotti.netlify.com/"},{id:"billLee",webPImage:C.a,image:L.a,title:"Bill Lee",description:"Sito personale del grande artista e musicista Bill Lee Curtis.",link:"https://www.billleecurtis.com/"},{id:"camlab",webPImage:q.a,image:M.a,title:"CamLab Trieste",description:"Gruppo professionale di wellness e cura della persona situato a Trieste.",link:"https://www.camlabtrieste.com/"},{id:"memoryGame",webPImage:I.a,image:A.a,title:"Memory Game",description:"Browser game creato per il programma Front End NanoDegree su Udacity.",link:"https://www.markonikolajevic.com/memory-game/"}];var U=function(){const e=J.map(e=>i.a.createElement(x,{key:e.id,webP:e.webPImage,image:e.image,title:e.title,description:e.description,link:e.link}));return i.a.createElement("section",{id:"portfolio"},e)};var _=class extends i.a.Component{constructor(e){super(e),this.state={name:"",email:"",message:""},this.handleChange=this.handleChange.bind(this)}handleChange(e){const a=e.target,t=a.value,n=a.id;this.setState({[n]:t})}render(){return i.a.createElement("section",{id:"contact"},i.a.createElement("form",{action:"https://formspree.io/mrknikolajevic@gmail.com",method:"POST",className:"form"},i.a.createElement("label",{htmlFor:"name"},"Nome"),i.a.createElement("input",{id:"name",type:"text",name:"name",placeholder:"Scrivi il tuo nome",onChange:this.handleChange,required:!0}),i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{id:"email",type:"email",name:"_replyto",placeholder:"Scrivi la tua email",onChange:this.handleChange,required:!0}),i.a.createElement("label",{htmlFor:"message"},"Messaggio"),i.a.createElement("textarea",{id:"message",name:"message",rows:"7",placeholder:"Scrivi il tuo messaggio",onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit",className:"submit-btn"},"Invia")))}};var H=function(){return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"footer-links-container"},i.a.createElement(h,{footerLink:{url:"https://twitter.com/markez1317",icon:"fab fa-twitter"}}),i.a.createElement(h,{footerLink:{url:"https://github.com/MarkoNikolajevic",icon:"fab fa-github"}}),i.a.createElement(h,{footerLink:{url:"https://www.linkedin.com/in/markonikolajevic/",icon:"fab fa-linkedin-in"}})),i.a.createElement("p",{className:"copyright"},"\xa9 2019 Marko Nikolajevi\u0107"))};var O=function(){return i.a.createElement("div",null,i.a.createElement(v,null),i.a.createElement(N,null),i.a.createElement(U,null),i.a.createElement(_,null),i.a.createElement(H,null))};l.a.render(i.a.createElement(O,null),document.querySelector("#app"))}],[[15,1,2]]]);
//# sourceMappingURL=main.ddc290c0.chunk.js.map