import{_ as D}from"./chunk-6deddc2e.js";import{b as B}from"./chunk-a740628f.js";import{d as S,r as C,c as R,j as T,D as $,m as s,l as m,E as _,aq as h,ar as k,q as n,S as y,M as N,z as g,K as E,_ as O}from"./chunk-449c23a2.js";import{u as x}from"./chunk-767079b6.js";import{u as I}from"./chunk-340feaf0.js";import{_ as j}from"./chunk-aa4619b6.js";import{_ as U}from"./chunk-4515d3e7.js";import"./chunk-9a43cce8.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-66ac4853.js";import"./chunk-2749dac9.js";import"./chunk-015e5c20.js";import"./chunk-416dc92c.js";import"./chunk-567e13ca.js";import"./chunk-26a03a7a.js";import"./chunk-f823181b.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-1d5b5526.js";import"./chunk-fc34c9a6.js";import"./chunk-af6e0163.js";import"./chunk-b0332f36.js";import"./chunk-f206ee20.js";import"./chunk-05af1949.js";import"./chunk-6d336811.js";const c=1,d=3999;function q(o){if(o<c||o>d)return"";const t={M:1e3,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};let r="";for(const e in t)for(;o>=t[e];)r+=e,o-=t[e];return r}const z=/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;function A(o){return z.test(o)}function P(o){if(!A(o))return null;const t={I:1,V:5,X:10,L:50,C:100,D:500,M:1e3};return[...o].reduce((r,e,i,p)=>t[p[i+1]]>t[e]?r-t[e]:r+t[e],0)}const G={flex:"","items-center":"","justify-between":""},K={class:"result"},W={flex:"","items-center":"","justify-between":""},F={class:"result"},H=S({__name:"roman-numeral-converter",setup(o){const t=C(42),r=R(()=>q(t.value)),{attrs:e}=I({source:t,rules:[{validator:u=>u>=c&&u<=d,message:`We can only convert numbers between ${c.toLocaleString()} and ${d.toLocaleString()}`}]}),i=C("XLII"),p=R(()=>P(i.value)),f=I({source:i,rules:[{validator:u=>A(u),message:"The input you entered is not a valid roman number"}]}),{copy:M}=x({source:r,text:"Roman number copied to the clipboard"}),{copy:X}=x({source:()=>String(p),text:"Arabic number copied to the clipboard"});return(u,a)=>{const V=j,w=U,v=E,b=B,L=D;return T(),$("div",null,[s(b,{title:"Arabic to roman"},{default:m(()=>[_("div",G,[s(w,h(k(n(e))),{default:m(()=>[s(V,{value:n(t),"onUpdate:value":a[0]||(a[0]=l=>y(t)?t.value=l:null),min:1,style:{width:"200px"},"show-button":!1},null,8,["value"])]),_:1},16),_("div",K,N(n(r)),1),s(v,{autofocus:"",disabled:n(e).validationStatus==="error",onClick:a[1]||(a[1]=l=>n(M)())},{default:m(()=>[g(" Copy ")]),_:1},8,["disabled"])])]),_:1}),s(b,{title:"Roman to arabic","mt-5":""},{default:m(()=>[_("div",W,[s(L,{value:n(i),"onUpdate:value":a[2]||(a[2]=l=>y(i)?i.value=l:null),style:{width:"200px"},validation:n(f)},null,8,["value","validation"]),_("div",F,N(n(p)),1),s(v,{disabled:!n(f).isValid,onClick:a[3]||(a[3]=l=>n(X)())},{default:m(()=>[g(" Copy ")]),_:1},8,["disabled"])])]),_:1})])}}});const xt=O(H,[["__scopeId","data-v-b1e0d482"]]);export{xt as default};
