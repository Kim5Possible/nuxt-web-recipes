import{u as T,_ as E}from"./Dxlea6vE.js";import{_ as I}from"./DcXLd1DC.js";import{_ as C}from"./DByPUCGo.js";import{m as N,p as $,x as q,r as A,q as w,f as B,u as n,c as d,a as p,t as v,y as k,v as f,F,s as L,o as l,b as S,w as V}from"./DKmSXBkg.js";import{u as j,a as U}from"./BwMiS_QE.js";import"./DlAUqK2U.js";const D={key:0,class:"container mb-10"},O={class:"title"},R={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"},z={class:"text-center font-bold text-xl mb-2"},X={__name:"[categoryType]",async setup(G){let m,h;const{categoryType:c}=N().params,{categoriesObserver:b}=j(),{data:i}=([m,h]=$(()=>U("https://dummyjson.com/recipes?select=mealType,tags,image","$F43j2hUmAw")),m=await m,h(),m||[]),_=q(()=>{const a=c==="Meals"?"mealType":"tags",o=i.value.recipes.flatMap(e=>e[a]);return[...new Set(o)]}),{loading:M}=T([_,i]),r=A(new Map),y=()=>{r.value.clear();const a=new Map,o=new Map;i.value.recipes.forEach(e=>{a.set(e.image,(a.get(e.image)||0)+1),(c==="Meals"?e.mealType:e.tags).forEach(t=>{o.has(t)||o.set(t,new Set),o.get(t).add(e.image)})}),_.value.forEach(e=>{const u=o.get(e)||[];let t=null,s=1/0;u.forEach(g=>{const x=a.get(g)||0;!r.value.has(g)&&x<s&&(t=g,s=x)}),t!==null&&(r.value.set(e,t),a.set(t,s+1))})};return w(y),B(()=>c,y),w(()=>{document.querySelectorAll(".type").forEach(a=>{b.observe(a)})}),(a,o)=>{const e=E,u=I,t=C;return n(i)?(l(),d("section",D,[p("h1",O,v(n(c)),1),n(M)?(l(),k(e,{key:0})):f("",!0),p("div",R,[(l(!0),d(F,null,L(n(_),s=>(l(),d("div",{class:"type opacity-0",key:s},[S(t,{to:`/categories/${n(c)}/${s}`},{default:V(()=>[n(r).get(s)?(l(),k(u,{key:0,src:n(r).get(s),alt:s,class:"w-[70%] mx-auto rounded-full mb-4"},null,8,["src","alt"])):f("",!0),p("h2",z,v(s),1)]),_:2},1032,["to"])]))),128))])])):f("",!0)}}};export{X as default};