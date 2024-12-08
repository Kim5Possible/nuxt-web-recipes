import{_ as B}from"./DByPUCGo.js";import M from"./BhyY_vMu.js";import{r as y,x as U,f as N,o as m,c as p,a as t,J as V,K as I,u as r,L as H,b as o,v as b,F,s as z,w as f,t as D,X as j,q as E,D as R,n as $,d as x,y as O,C as Y,Y as G}from"./DKmSXBkg.js";import{a as J,u as q}from"./BwMiS_QE.js";import{_ as K}from"./DlAUqK2U.js";function P(v,g){let n;return function(...c){clearTimeout(n),n=setTimeout(()=>{v.apply(this,c)},g)}}const W={class:"search hidden container z-20 absolute left-0 right-0 top-3 w-full pb-2"},X={class:"relative bg-grayLighter"},Q={key:0,class:"mt-4 bg-white border border-peachLight rounded-md px-4 py-2 shadow"},Z={class:"flex flex-col gap-3"},ee={key:0},te={class:"flex items-center gap-2 mb-2 lg:mb-0"},se=["src"],oe={class:"text-slate-700 text-sm"},ne={class:"flex flex-wrap gap-2 text-[10px] md:text-xs"},ae=["onClick"],re=["onClick"],le={__name:"Search",props:{isSearch:{type:Boolean}},emits:["update:isSearch"],setup(v,{emit:g}){const{data:n}=J("https://dummyjson.com/recipes","$uC8IT8HUdL")||[],a=g,{searchAnimation:c}=q(),u=y(""),l=y([]),C=v,L=U(()=>{if(!u.value)return l.value=[];const e=u.value.toLowerCase();return n.value.recipes.filter(s=>s.name.toLowerCase().includes(e)||s.tags.some(_=>_.toLowerCase().includes(e))||s.mealType.some(_=>_.toLowerCase().includes(e)))}),w=()=>{l.value=L.value},k=(e,s)=>{u.value=s,w()},d=P(w,300);return N(u,()=>{d()}),N(()=>C.isSearch,e=>{c(document.querySelector(".search"),e)},{immediate:!1}),(e,s)=>{const _=M,S=B;return m(),p("div",W,[t("div",X,[V(t("input",{"onUpdate:modelValue":s[0]||(s[0]=i=>H(u)?u.value=i:null),type:"text",class:"w-full bg-transparent placeholder:text-grayDark/40 text-grayDark text-sm border border-grayLight/30 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-peachLight hover:border-peachLight shadow-sm focus:shadow-inner focus:shadow-peachlight/30",placeholder:"Search recipes by name, tag or meal type"},null,512),[[I,r(u)]]),t("button",{class:"absolute top-[50%] right-1 translate-y-[-50%] flex items-center",type:"button",onClick:s[1]||(s[1]=i=>a("update:isSearch",!1))},[o(_,{name:"mdi:close",size:"25"})])]),r(u)?(m(),p("div",Q,[t("div",Z,[r(l).length===0&&r(u)?(m(),p("div",ee,s[3]||(s[3]=[t("p",{class:"text-slate-500 text-sm"},"No recipes found",-1)]))):b("",!0),r(l).length?(m(!0),p(F,{key:1},z(r(l),i=>(m(),p("div",{key:i.id},[o(S,{to:`/recipes/${i.id}`,class:"flex flex-col lg:flex-row items-start lg:items-center justify-between",onClick:s[2]||(s[2]=h=>{a("update:isSearch",!1),u.value="",l.value=[]})},{default:f(()=>[t("div",te,[t("img",{src:i.image,class:"w-10 h-10 rounded-full object-cover"},null,8,se),t("span",oe,D(i.name),1)]),t("div",ne,[(m(!0),p(F,null,z(i.tags,h=>(m(),p("button",{onClick:j(T=>k(T,h),["stop","prevent"]),key:h,class:"font-bold py-1 px-1 md:px-2 text-white bg-blueDark rounded-md"},D(h),9,ae))),128)),(m(!0),p(F,null,z(i.mealType,h=>(m(),p("button",{onClick:j(T=>k(T,h),["stop","prevent"]),key:h,class:"h-fit font-bold py-1 px-1 md:px-2 bg-peachDark text-white rounded-md"},D(h),9,re))),128))])]),_:2},1032,["to"]),s[4]||(s[4]=t("hr",{class:"my-2"},null,-1))]))),128)):b("",!0)])])):b("",!0)])}}},A=""+new URL("Foody.CCjPGYFT.svg",import.meta.url).href,ie={class:"relative px-[4rem] flex justify-between items-center md:mb-8"},de=["src"],ce={class:"flex flex-col md:flex-row gap-5 md:gap-20 md:items-center"},ue={class:"text-hover"},me={class:"text-hover flex items-center"},pe={class:"categories-menu hidden opacity-0 absolute top-7 left-0 bg-grayLighter text-sm rounded-md"},fe={class:"text-hover"},_e={class:"flex gap-5"},ge={__name:"Header",setup(v){const{textHover:g,categoriesMenu:n}=q(),a=y(!1),c=y(!1),u=y(!1),l=y(!1);E(()=>{const d=()=>{u.value=window.innerWidth<768};d(),window.addEventListener("resize",d),R(()=>{window.removeEventListener("resize",d)})});const C=()=>{a.value=!a.value,Y(()=>{n(document.querySelector(".categories-menu"),document.querySelectorAll(".category"),a.value)})},L=()=>{c.value=!c.value},w=d=>{g(d,1.1,"#FF642F")},k=d=>{g(d,1,"#000")};return E(()=>{document.querySelectorAll(".text-hover").forEach(d=>{d.addEventListener("mouseenter",e=>{w(e.target)}),d.addEventListener("mouseleave",e=>{k(e.target)})})}),(d,e)=>{const s=B,_=M,S=le;return m(),p("header",ie,[o(s,{class:$([`${r(l)?"opacity-0 transition-all duration-1000 ease-in-out":"opacity-100"}`,"pb-5 md:pb-0"]),to:"/"},{default:f(()=>[t("img",{src:r(A),alt:"Foody"},null,8,de)]),_:1},8,["class"]),!r(u)||r(u)&&r(c)?(m(),p("nav",{key:0,class:$([`${r(l)?"opacity-0 transition-all duration-700 ease-in-out":""}`,"absolute z-10 top-14 right-2 md:w-auto p-5 md:static md:block bg-white md:bg-transparent border md:border-none border-gray-300 rounded-md"])},[t("ul",ce,[t("li",ue,[o(s,{onClick:e[0]||(e[0]=i=>c.value=!1),to:"/"},{default:f(()=>e[6]||(e[6]=[x("Home")])),_:1})]),t("li",{class:"relative flex items-center gap-1 cursor-pointer",onClick:C},[t("div",me,[e[7]||(e[7]=x(" Categories ")),o(_,{name:"mdi:chevron-down",size:"25",class:$({"transform transition-transform duration-300":!0,"rotate-180":r(a)})},null,8,["class"])]),t("ul",pe,[o(s,{onClick:e[1]||(e[1]=i=>c.value=!1),to:`/categories/${d.categoryType="Meals"}`},{default:f(()=>e[8]||(e[8]=[t("li",{class:"category hover:text-peachDark p-2"},"By meal type",-1)])),_:1},8,["to"]),e[10]||(e[10]=t("hr",null,null,-1)),o(s,{onClick:e[2]||(e[2]=i=>c.value=!1),to:`/categories/${d.categoryType="Tags"}`},{default:f(()=>e[9]||(e[9]=[t("li",{class:"category hover:text-peachDark p-2"},"By tag",-1)])),_:1},8,["to"])])]),t("li",fe,[o(s,{onClick:e[3]||(e[3]=i=>c.value=!1),to:"/blog"},{default:f(()=>e[11]||(e[11]=[x("Blog")])),_:1})])])],2)):b("",!0),t("div",_e,[t("button",{onClick:e[4]||(e[4]=i=>l.value=!0),class:"w-[30px] pr-3"},[r(l)?b("",!0):(m(),O(_,{key:0,name:"mdi:search",size:"25"}))]),o(S,{isSearch:r(l),"onUpdate:isSearch":e[5]||(e[5]=i=>H(l)?l.value=i:null),isSeatch:r(l)},null,8,["isSearch","isSeatch"]),t("button",{class:$([`${r(l)?"opacity-0":""}`,"md:hidden"]),onClick:L},[o(_,{name:"mdi:menu",size:"25"})],2)])])}}},he={class:"bg-grayDark text-white mt-auto"},ve={class:"container pt-3 flex justify-between items-center border-b border-b-grayLight"},xe=["src"],ye={class:"flex flex-col md:flex-row gap-3 md:gap-10"},be={class:"mb-2"},we={class:"mb-2"},ke={class:"mb-2"},$e={class:"mb-2"},Ce={class:"flex gap-5"},Le={__name:"Footer",setup(v){return(g,n)=>{const a=B,c=M;return m(),p("footer",he,[t("div",ve,[o(a,{to:"/",class:"pb-5"},{default:f(()=>[t("img",{src:r(A),alt:"Foody"},null,8,xe)]),_:1}),t("ul",ye,[t("li",be,[o(a,{to:"/"},{default:f(()=>n[0]||(n[0]=[x("Home")])),_:1})]),t("li",we,[o(a,{to:"/"},{default:f(()=>n[1]||(n[1]=[x("About")])),_:1})]),t("li",ke,[o(a,{to:"/"},{default:f(()=>n[2]||(n[2]=[x("Contact")])),_:1})]),t("li",$e,[o(a,{to:"/blog"},{default:f(()=>n[3]||(n[3]=[x("Blog")])),_:1})])]),t("div",Ce,[o(a,{to:"/"},{default:f(()=>[o(c,{name:"mdi:instagram",size:"25"})]),_:1}),o(a,{to:"/"},{default:f(()=>[o(c,{name:"mdi:twitter",size:"25"})]),_:1})])]),n[4]||(n[4]=t("div",{class:"container flex justify-center items-center py-3 text-sm opacity-75"},[t("p",null,"© Foody 2024")],-1))])}}},Se={},Te={class:"min-h-screen flex flex-col"};function Fe(v,g){const n=ge,a=Le;return m(),p("div",Te,[o(n),G(v.$slots,"default"),o(a)])}const je=K(Se,[["render",Fe]]);export{je as default};
