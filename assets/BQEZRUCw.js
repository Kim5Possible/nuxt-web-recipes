import v from"./CNQCGQYd.js";import{_ as y}from"./D8fDm-yp.js";import{_ as z}from"./Dogm_0aX.js";import{u as D,m as L,c,b as l,w as f,n as m,a as e,t as n,p as t,d as r,F as _,q as x,o,x as b}from"./DMCOXjUz.js";import{u as B}from"./-1oF3iSi.js";const N={class:"container border border-gray-300 rounded-lg py-10 mb-10 shadow-inner"},T={class:"flex flex-col gap-5 items-center mb-10"},$={class:"text-center text-3xl md:text-6xl font-bold"},C={class:"flex gap-5"},I={class:"flex gap-5 text-xs sm:text-sm font-bold uppercase"},M={class:"flex justify-between gap-2 mb-5"},V={class:"flex flex-wrap gap-1"},j={class:"flex flex-wrap gap-1"},F={class:"flex md:flex-row flex-col justify-between gap-10"},S={class:"basis-2/6 bg-blueLighter rounded-lg p-10 shadow-inner shadow-blueLight"},q={class:"list-disc"},R={class:"text-lg mb-1"},A={class:"basis-4/6 bg-peachLighter rounded-lg p-10 shadow-inner shadow-peachLight"},E={class:"list-decimal"},P={class:"leading-9 text-lg mb-2 tracking-wide"},p="flex items-center gap-1 text-center",W={__name:"[id]",async setup(G){let u,h;const{id:w}=D().params,{data:s}=([u,h]=L(()=>B(`https://dummyjson.com/recipes/${w}`,"$9VbMg5piq0")),u=await u,h(),u);return(H,i)=>{const d=v,g=y,k=z;return o(),c("section",N,[l(g,{to:"/",class:m(p)},{default:f(()=>[l(d,{name:"mdi:arrow-left",size:"20"}),i[0]||(i[0]=r("Back"))]),_:1}),e("div",T,[i[1]||(i[1]=e("div",{class:"name bg-peachDark"},"Recipe",-1)),e("h1",$,n(t(s).name),1),e("div",C,[e("span",{class:m(p)},[l(d,{name:"mdi:star-outline",size:"20",class:"text-peachDark"}),r(" "+n(t(s).rating)+" ("+n(t(s).reviewCount)+")",1)]),e("span",{class:m(p)},[l(d,{name:"mdi:clock-outline",size:"20",class:"text-peachDark"}),r(" "+n(t(s).prepTimeMinutes+t(s).cookTimeMinutes),1)])]),e("div",I,[e("span",{class:m(p)},[l(d,{name:"mdi:water",size:"20"}),r(n(t(s).caloriesPerServing)+" calories",1)]),e("span",{class:m(p)},[l(d,{name:"mdi:checkbox-marked-circle",size:"20"}),r(n(t(s).difficulty)+" level",1)]),e("span",{class:m(p)},[l(d,{name:"mdi:room-service",size:"20"}),r(n(t(s).servings)+" servings",1)])]),l(k,{src:t(s).image,alt:t(s).name,class:"w-[70%] sm:max-w-[800px] rounded-lg"},null,8,["src","alt"])]),e("div",M,[e("div",V,[(o(!0),c(_,null,x(t(s).tags,a=>(o(),b(g,{to:`/categories/Tags/${a}`,key:a,class:"font-bold py-1 px-2 text-sm text-white bg-blueDark rounded-md"},{default:f(()=>[r(n(a),1)]),_:2},1032,["to"]))),128))]),e("div",j,[(o(!0),c(_,null,x(t(s).mealType,a=>(o(),b(g,{to:`/categories/Meals/${a}`,key:a,class:"h-fit font-bold py-1 px-2 text-sm bg-peachDark text-white rounded-md"},{default:f(()=>[r(n(a),1)]),_:2},1032,["to"]))),128))])]),e("div",F,[e("div",S,[i[2]||(i[2]=e("p",{class:"text-2xl tracking-widest font-semibold uppercase mb-4"}," Ingredients ",-1)),e("ul",q,[(o(!0),c(_,null,x(t(s).ingredients,a=>(o(),c("li",R,n(a),1))),256))])]),e("div",A,[i[3]||(i[3]=e("p",{class:"text-center text-2xl tracking-widest font-semibold uppercase mb-4"}," Instructions ",-1)),e("ul",E,[(o(!0),c(_,null,x(t(s).instructions,a=>(o(),c("li",P,n(a),1))),256))])])])])}}};export{W as default};
