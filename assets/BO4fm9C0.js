import{_ as F}from"./D8fDm-yp.js";import B from"./CNQCGQYd.js";import{r as h,s as H,f as U,o as a,c as d,a as e,J as V,K as I,p as n,L as j,b as l,y as v,F as L,q as S,w as u,t as T,X as N,v as R,D as E,n as z,d as w,x as k,Y as O}from"./DMCOXjUz.js";import{u as Y}from"./-1oF3iSi.js";import{_ as q}from"./DlAUqK2U.js";function A(y,m){let s;return function(...o){clearTimeout(s),s=setTimeout(()=>{y.apply(this,o)},m)}}const G={class:"container z-20 absolute left-0 right-0 top-3 bg-white w-full pb-2"},J={class:"relative"},K={key:0,class:"mt-4 bg-white border border-peachLight rounded-md px-4 py-2 shadow"},P={class:"flex flex-col gap-3"},W={key:0},X={class:"flex items-center gap-2 mb-2 lg:mb-0"},Q=["src"],Z={class:"text-slate-700 text-sm"},ee={class:"flex flex-wrap gap-2 text-[10px] md:text-xs"},te=["onClick"],se=["onClick"],oe={__name:"Search",emits:["update:isSearch"],setup(y,{emit:m}){const{data:s}=Y("https://dummyjson.com/recipes","$uC8IT8HUdL"),i=m,o=h(""),g=h([]),$=H(()=>{if(!o.value)return g.value=[];const p=o.value.toLowerCase();return s.value.recipes.filter(r=>r.name.toLowerCase().includes(p)||r.tags.some(c=>c.toLowerCase().includes(p))||r.mealType.some(c=>c.toLowerCase().includes(p)))}),f=()=>{g.value=$.value},t=(p,r)=>{o.value=r,f()},x=A(f,300);return U(o,()=>{x()}),(p,r)=>{const c=B,M=F;return a(),d("div",G,[e("div",J,[V(e("input",{"onUpdate:modelValue":r[0]||(r[0]=_=>j(o)?o.value=_:null),type:"text",class:"w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow",placeholder:"Search recipes by name, tag or meal type"},null,512),[[I,n(o)]]),e("button",{class:"absolute top-[50%] right-1 translate-y-[-50%] flex items-center",type:"button",onClick:r[1]||(r[1]=_=>i("update:isSearch",!1))},[l(c,{name:"mdi:close",size:"25"})])]),n(o)?(a(),d("div",K,[e("div",P,[n(g).length===0&&n(o)?(a(),d("div",W,r[3]||(r[3]=[e("p",{class:"text-slate-500 text-sm"},"No recipes found",-1)]))):v("",!0),n(g).length?(a(!0),d(L,{key:1},S(n(g),_=>(a(),d("div",{key:_.id},[l(M,{to:`/recipes/${_.id}`,class:"flex flex-col lg:flex-row items-start lg:items-center justify-between",onClick:r[2]||(r[2]=b=>i("update:isSearch",!1))},{default:u(()=>[e("div",X,[e("img",{src:_.image,class:"w-10 h-10 rounded-full object-cover"},null,8,Q),e("span",Z,T(_.name),1)]),e("div",ee,[(a(!0),d(L,null,S(_.tags,b=>(a(),d("button",{onClick:N(C=>t(C,b),["stop","prevent"]),key:b,class:"font-bold py-1 px-1 md:px-2 text-white bg-blueDark rounded-md"},T(b),9,te))),128)),(a(!0),d(L,null,S(_.mealType,b=>(a(),d("button",{onClick:N(C=>t(C,b),["stop","prevent"]),key:b,class:"h-fit font-bold py-1 px-1 md:px-2 bg-peachDark text-white rounded-md"},T(b),9,se))),128))])]),_:2},1032,["to"]),r[4]||(r[4]=e("hr",{class:"my-2"},null,-1))]))),128)):v("",!0)])])):v("",!0)])}}},D=""+new URL("Foody.CCjPGYFT.svg",import.meta.url).href,ne={class:"relative px-[4rem] flex justify-between items-center md:mb-8"},le=["src"],re={class:"flex flex-col md:flex-row gap-5 md:gap-20 md:items-center"},ae={key:2,class:"absolute top-7 left-0 bg-white flex flex-col gap-2 text-sm border border-gray-300 rounded-md p-2"},ie={class:"flex gap-5"},de={__name:"Header",setup(y){const m=h(!1),s=h(!1),i=h(!1),o=h(!1);R(()=>{const f=()=>{i.value=window.innerWidth<768};f(),window.addEventListener("resize",f),E(()=>{window.removeEventListener("resize",f)})});const g=()=>{m.value=!m.value},$=()=>{s.value=!s.value};return(f,t)=>{const x=F,p=B,r=oe;return a(),d("header",ne,[l(x,{class:z([`${n(o)?"opacity-0":""}`,"pb-5 md:pb-0"]),to:"/"},{default:u(()=>[e("img",{src:n(D),alt:"Foody"},null,8,le)]),_:1},8,["class"]),!n(i)||n(i)&&n(s)?(a(),d("nav",{key:0,class:z([`${n(o)?"opacity-0":""}`,"absolute z-10 top-14 right-2 md:w-auto p-5 md:static md:block bg-white md:bg-transparent border md:border-none border-gray-300 rounded-md"])},[e("ul",re,[e("li",null,[l(x,{onClick:t[0]||(t[0]=c=>s.value=!1),to:"/"},{default:u(()=>t[6]||(t[6]=[w("Home")])),_:1})]),e("li",{class:"relative flex items-center gap-1 cursor-pointer",onClick:g},[t[10]||(t[10]=e("span",null,"Categories",-1)),n(m)?(a(),k(p,{key:1,name:"mdi:chevron-up",size:"25"})):(a(),k(p,{key:0,name:"mdi:chevron-down",size:"25"})),n(m)?(a(),d("ul",ae,[l(x,{onClick:t[1]||(t[1]=c=>s.value=!1),to:`/categories/${f.categoryType="Meals"}`},{default:u(()=>t[7]||(t[7]=[e("li",null,"By meal type",-1)])),_:1},8,["to"]),t[9]||(t[9]=e("hr",null,null,-1)),l(x,{onClick:t[2]||(t[2]=c=>s.value=!1),to:`/categories/${f.categoryType="Tags"}`},{default:u(()=>t[8]||(t[8]=[e("li",null,"By tag",-1)])),_:1},8,["to"])])):v("",!0)]),e("li",null,[l(x,{onClick:t[3]||(t[3]=c=>s.value=!1),to:"/blog"},{default:u(()=>t[11]||(t[11]=[w("Blog")])),_:1})])])],2)):v("",!0),e("div",ie,[e("button",{onClick:t[4]||(t[4]=c=>o.value=!0)},[n(o)?v("",!0):(a(),k(p,{key:0,name:"mdi:search",size:"25"}))]),n(o)?(a(),k(r,{key:0,isSearch:n(o),"onUpdate:isSearch":t[5]||(t[5]=c=>j(o)?o.value=c:null)},null,8,["isSearch"])):v("",!0),e("button",{class:z([`${n(o)?"opacity-0":""}`,"md:hidden"]),onClick:$},[l(p,{name:"mdi:menu",size:"25"})],2)])])}}},ue={class:"bg-grayDark text-white"},ce={class:"container pt-3 flex justify-between items-center border-b border-b-grayLight"},me=["src"],pe={class:"flex flex-col md:flex-row gap-3 md:gap-10"},fe={class:"mb-2"},_e={class:"mb-2"},be={class:"mb-2"},ge={class:"mb-2"},xe={class:"flex gap-5"},ve={__name:"Footer",setup(y){return(m,s)=>{const i=F,o=B;return a(),d("footer",ue,[e("div",ce,[l(i,{to:"/",class:"pb-5"},{default:u(()=>[e("img",{src:n(D),alt:"Foody"},null,8,me)]),_:1}),e("ul",pe,[e("li",fe,[l(i,{to:"/"},{default:u(()=>s[0]||(s[0]=[w("Home")])),_:1})]),e("li",_e,[l(i,{to:"/"},{default:u(()=>s[1]||(s[1]=[w("About")])),_:1})]),e("li",be,[l(i,{to:"/"},{default:u(()=>s[2]||(s[2]=[w("Contact")])),_:1})]),e("li",ge,[l(i,{to:"/blog"},{default:u(()=>s[3]||(s[3]=[w("Blog")])),_:1})])]),e("div",xe,[l(i,{to:"/"},{default:u(()=>[l(o,{name:"mdi:instagram",size:"25"})]),_:1}),l(i,{to:"/"},{default:u(()=>[l(o,{name:"mdi:twitter",size:"25"})]),_:1})])]),s[4]||(s[4]=e("div",{class:"container flex justify-center items-center py-3 text-sm opacity-75"},[e("p",null,"© Foody 2024")],-1))])}}},ye={};function he(y,m){const s=de,i=ve;return a(),d("div",null,[l(s),O(y.$slots,"default"),l(i)])}const Se=q(ye,[["render",he]]);export{Se as default};