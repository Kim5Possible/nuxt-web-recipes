import{u as T,_ as $}from"./sK12sWlx.js";import C from"./On3uGGZ-.js";import{_ as D}from"./BPhRrrN1.js";import{_ as M}from"./DYEesMoM.js";import{m as S,p as B,q as N,C as q,u as t,y as h,c,b as r,w as b,n as p,a as e,t as a,d as l,F as x,s as g,o as i}from"./CknCBAuj.js";import{u as A,a as I}from"./BINcv5cG.js";import"./DlAUqK2U.js";const V={key:1,class:"container border border-gray-300 rounded-lg py-10 mb-10 shadow-inner"},j={class:"flex flex-col gap-5 items-center mb-10"},F={class:"relative wrapper text-center text-3xl md:text-6xl font-bold"},R={class:"text-wrapper relative inline-block overflow-hidden p-2"},E={class:"letters"},H={class:"flex gap-5"},P={class:"flex gap-5 text-xs sm:text-sm font-bold uppercase"},W={class:"flex justify-between gap-2 mb-5"},G={class:"flex flex-wrap gap-1"},J={class:"flex flex-wrap gap-1"},K={class:"flex md:flex-row flex-col justify-between gap-10"},O={class:"basis-2/6 bg-blueLighter rounded-lg p-10 shadow-inner shadow-blueLight"},Q={class:"list-disc"},U={class:"text-lg mb-1"},X={class:"basis-4/6 bg-peachLighter rounded-lg p-10 shadow-inner shadow-peachLight"},Y={class:"list-decimal"},Z={class:"leading-9 text-lg mb-2 tracking-wide"},m="flex items-center gap-1 text-center",le={__name:"[id]",async setup(ee){let u,w;const{id:k}=S().params,{data:s}=([u,w]=B(()=>I(`https://dummyjson.com/recipes/${k}`,"$9VbMg5piq0")),u=await u,w(),u),{loading:y}=T([s]),{textAppear:v}=A();return N(()=>{q(()=>{const _=document.querySelector(".wrapper .letters");if(_){_.innerHTML=_.textContent.replace(/\S/g,"<span class='letter origin-[50%_100%] inline-block'>$&</span>");const n=document.querySelectorAll(".wrapper .letter");console.log(n.length),v(n,_)}})}),(_,n)=>{const L=$,d=C,f=D,z=M;return t(y)?(i(),h(L,{key:0})):(i(),c("section",V,[r(f,{to:"/",class:p(m)},{default:b(()=>[r(d,{name:"mdi:arrow-left",size:"20"}),n[0]||(n[0]=l("Back"))]),_:1}),e("div",j,[n[1]||(n[1]=e("div",{class:"name bg-peachDark"},"Recipe",-1)),e("h1",F,[e("span",R,[e("span",E,a(t(s).name),1)])]),e("div",H,[e("span",{class:p(m)},[r(d,{name:"mdi:star-outline",size:"20",class:"text-peachDark"}),l(" "+a(t(s).rating)+" ("+a(t(s).reviewCount)+")",1)]),e("span",{class:p(m)},[r(d,{name:"mdi:clock-outline",size:"20",class:"text-peachDark"}),l(" "+a(t(s).prepTimeMinutes+t(s).cookTimeMinutes),1)])]),e("div",P,[e("span",{class:p(m)},[r(d,{name:"mdi:water",size:"20"}),l(a(t(s).caloriesPerServing)+" calories",1)]),e("span",{class:p(m)},[r(d,{name:"mdi:checkbox-marked-circle",size:"20"}),l(a(t(s).difficulty)+" level",1)]),e("span",{class:p(m)},[r(d,{name:"mdi:room-service",size:"20"}),l(a(t(s).servings)+" servings",1)])]),r(z,{src:t(s).image,alt:t(s).name,class:"w-[70%] sm:max-w-[800px] rounded-lg"},null,8,["src","alt"])]),e("div",W,[e("div",G,[(i(!0),c(x,null,g(t(s).tags,o=>(i(),h(f,{to:`/categories/Tags/${o}`,key:o,class:"font-bold py-1 px-2 text-sm text-white bg-blueDark rounded-md"},{default:b(()=>[l(a(o),1)]),_:2},1032,["to"]))),128))]),e("div",J,[(i(!0),c(x,null,g(t(s).mealType,o=>(i(),h(f,{to:`/categories/Meals/${o}`,key:o,class:"h-fit font-bold py-1 px-2 text-sm bg-peachDark text-white rounded-md"},{default:b(()=>[l(a(o),1)]),_:2},1032,["to"]))),128))])]),e("div",K,[e("div",O,[n[2]||(n[2]=e("p",{class:"text-2xl tracking-widest font-semibold uppercase mb-4"}," Ingredients ",-1)),e("ul",Q,[(i(!0),c(x,null,g(t(s).ingredients,o=>(i(),c("li",U,a(o),1))),256))])]),e("div",X,[n[3]||(n[3]=e("p",{class:"text-center text-2xl tracking-widest font-semibold uppercase mb-4"}," Instructions ",-1)),e("ul",Y,[(i(!0),c(x,null,g(t(s).instructions,o=>(i(),c("li",Z,a(o),1))),256))])])])]))}}};export{le as default};