import{d as U,g as _,r as V,j,D as k,E as c,m as r,q as o,S as d,l as f,M as B,z as C,K as N}from"./chunk-449c23a2.js";import{a as v,b as R}from"./chunk-a740628f.js";import{_ as P}from"./chunk-323c539f.js";import{_ as T}from"./chunk-6deddc2e.js";import{c as $}from"./chunk-ca3460ec.js";import{u as D}from"./chunk-767079b6.js";import{u as E}from"./chunk-0e27dfca.js";import{_ as F}from"./chunk-aa4619b6.js";import"./chunk-a3974c29.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-66ac4853.js";import"./chunk-2749dac9.js";import"./chunk-015e5c20.js";import"./chunk-416dc92c.js";import"./chunk-567e13ca.js";import"./chunk-26a03a7a.js";import"./chunk-f823181b.js";import"./chunk-9519e52e.js";import"./chunk-f94e2689.js";import"./chunk-1d5b5526.js";import"./chunk-fc34c9a6.js";import"./chunk-af6e0163.js";import"./chunk-b0332f36.js";import"./chunk-f206ee20.js";import"./chunk-05af1949.js";function L(l){return(l.match(/[^0-9a-f]/i)===null?l.match(/.{1,2}/g)??[]:l.split(/[^0-9a-f]/i)).filter(Boolean).map(t=>t.padStart(2,"0"))}function q({prefix:l="",separator:s=":",getRandomByte:t=()=>v.random(0,255).toString(16).padStart(2,"0")}={}){const n=L(l),m=v.times(6-n.length,t);return[...n,...m].join(s)}const z={flex:"","flex-col":"","justify-center":"","gap-2":""},K={flex:"","items-center":""},Q=c("label",{"w-150px":"","pr-12px":"","text-right":""}," Quantity:",-1),G={"m-0":"","m-x-auto":""},H={flex:"","justify-center":"","gap-2":""},ye=U({__name:"mac-address-generator",setup(l){const s=_("mac-address-generator-amount",1),t=_("mac-address-generator-prefix","64:16:7F"),n=E(t),m=[{label:"Uppercase",value:p=>p.toUpperCase()},{label:"Lowercase",value:p=>p.toLowerCase()}],i=V(m[0].value),b=[{label:":",value:":"},{label:"-",value:"-"},{label:".",value:"."},{label:"None",value:""}],u=_("mac-address-generator-separator",b[0].value),[x,y]=$(()=>n.isValid?v.times(s.value,()=>i.value(q({prefix:t.value,separator:u.value}))).join(`
`):""),{copy:w}=D({source:x,text:"MAC addresses copied to the clipboard"});return(p,e)=>{const S=F,A=T,g=P,M=R,h=N;return j(),k("div",z,[c("div",K,[Q,r(S,{value:o(s),"onUpdate:value":e[0]||(e[0]=a=>d(s)?s.value=a:null),min:"1",max:"100","flex-1":""},null,8,["value"])]),r(A,{value:o(t),"onUpdate:value":e[1]||(e[1]=a=>d(t)?t.value=a:null),label:"MAC address prefix:",placeholder:"Set a prefix, e.g. 64:16:7F",clearable:"","label-position":"left",spellcheck:"false",validation:o(n),"raw-text":"","label-width":"150px","label-align":"right"},null,8,["value","validation"]),r(g,{value:o(i),"onUpdate:value":e[2]||(e[2]=a=>d(i)?i.value=a:null),options:m,label:"Case:","label-width":"150px","label-align":"right"},null,8,["value"]),r(g,{value:o(u),"onUpdate:value":e[3]||(e[3]=a=>d(u)?u.value=a:null),options:b,label:"Separator:","label-width":"150px","label-align":"right"},null,8,["value"]),r(M,{"mt-5":"",flex:"","data-test-id":"ulids"},{default:f(()=>[c("pre",G,B(o(x)),1)]),_:1}),c("div",H,[r(h,{"data-test-id":"refresh",onClick:e[4]||(e[4]=a=>o(y)())},{default:f(()=>[C(" Refresh ")]),_:1}),r(h,{onClick:e[5]||(e[5]=a=>o(w)())},{default:f(()=>[C(" Copy ")]),_:1})])])}}});export{ye as default};
