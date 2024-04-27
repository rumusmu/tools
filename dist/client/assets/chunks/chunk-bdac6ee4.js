import{_ as L}from"./chunk-6deddc2e.js";import{l as h}from"./chunk-231c3e11.js";import{a as u,b as O}from"./chunk-a740628f.js";import{m as n,F as y,z as b,d as C,V as $,r as g,G as I,as as P,c as _,q as l,j as v,D as k,E as Y,l as N,S as x,k as j,L as z,_ as G}from"./chunk-449c23a2.js";import{u as M}from"./chunk-767079b6.js";import{_ as H}from"./chunk-3ef38193.js";import{_ as K}from"./chunk-4515d3e7.js";import{w as A}from"./chunk-4d6daddf.js";import{i as Q}from"./chunk-c7e7c785.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";import"./chunk-f823181b.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-6222e43f.js";import"./chunk-2749dac9.js";import"./chunk-567e13ca.js";import"./chunk-1d5b5526.js";import"./chunk-416dc92c.js";import"./chunk-6d336811.js";function W(e,t,{onlyShowDifferences:s=!1}={}){return u.isArray(e)&&u.isArray(t)?{key:"",type:"array",children:E(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:u.isObject(e)&&u.isObject(t)?{key:"",type:"object",children:D(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:{key:"",type:"value",oldValue:e,value:t,status:p(e,t)}}function D(e,t,{onlyShowDifferences:s=!1}={}){return Object.keys({...e,...t}).map(r=>S(e?.[r],t?.[r],r,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function S(e,t,s,{onlyShowDifferences:o=!1}={}){const r=m(e);return r==="object"?{key:s,type:r,children:D(e,t,{onlyShowDifferences:o}),oldValue:e,value:t,status:p(e,t)}:r==="array"?{key:s,type:r,children:E(e,t,{onlyShowDifferences:o}),value:t,oldValue:e,status:p(e,t)}:{key:s,type:r,value:t,oldValue:e,status:p(e,t)}}function E(e,t,{onlyShowDifferences:s=!1}={}){const o=Math.max(0,e?.length,t?.length);return Array.from({length:o},(r,a)=>S(e?.[a],t?.[a],a,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function m(e){return e===null?"value":Array.isArray(e)?"array":typeof e=="object"?"object":"value"}function p(e,t){if(e===void 0)return"added";if(t===void 0)return"removed";const s=m(e)==="object"&&m(t)==="object",o=m(e)==="array"&&m(t)==="array";return u.isEqual(e,t)?"unchanged":s||o?"children-updated":"updated"}function X({diff:e}){return n("div",{class:"diffs-viewer"},[n("ul",null,[R({diff:e,showKeys:!1})])])}function R({diff:e,showKeys:t=!0}){const{type:s,status:o}=e;return o==="updated"?w({diff:e,showKeys:t}):s==="array"?T({diff:e,showKeys:t,showChildrenKeys:!1,openTag:"[",closeTag:"]"}):s==="object"?T({diff:e,showKeys:t,openTag:"{",closeTag:"}"}):Z({diff:e,showKeys:t})}function Z({diff:e,showKeys:t}){const{value:s,key:o,status:r,oldValue:a}=e,i=r==="removed"?a:s;return n("li",null,[n("span",{class:[r,"result"]},[t&&n(y,null,[n("span",{class:"key"},[o]),": "]),J({value:i,status:r})]),b(",")])}function w({diff:e,showKeys:t}){const{value:s,key:o,oldValue:r}=e;return n("li",{class:"updated-line"},[t&&n(y,null,[n("span",{class:"key"},[o]),": "]),J({value:r,status:"removed"}),J({value:s,status:"added"}),b(",")])}function T({diff:e,openTag:t,closeTag:s,showKeys:o,showChildrenKeys:r=!0}){const{children:a,key:i,status:c,type:f}=e;return n("li",null,[n("div",{class:[f,c],style:{display:"inline-block"}},[o&&n(y,null,[n("span",{class:"key"},[i]),": "]),t,a.length>0&&n("ul",null,[a.map(d=>R({diff:d,showKeys:r}))]),`${s},`])])}function ee(e){return u.isNull(e)?"null":JSON.stringify(e)}function J({value:e,status:t}){const s=ee(e),{copy:o}=M({source:s});return n("span",{class:["value",t],onClick:()=>o()},[s])}const te={key:0},se={flex:"","justify-center":""},re={key:0,"text-center":"","op-70":""},oe=C({__name:"diff-viewer",props:{leftJson:{},rightJson:{}},setup(e){const t=e;$(d=>({"7a613f80":l(a).text.mutedColor,ed7825ee:l(a).success.colorFaded,"31e3079f":l(a).success.color,"8956bfb8":l(a).error.colorFaded,"3a20e0b8":l(a).error.color,"29d2da8a":l(a).text.baseColor}));const s=g(!1),{leftJson:o,rightJson:r}=I(t),a=P(),i=_(()=>W(o.value,r.value,{onlyShowDifferences:s.value})),c=_(()=>u.isEqual(o.value,r.value)),f=_(()=>!u.isUndefined(o.value)&&!u.isUndefined(r.value));return(d,V)=>{const q=H,U=K,B=O;return l(f)?(v(),k("div",te,[Y("div",se,[n(U,{label:"Only show differences","label-placement":"left"},{default:N(()=>[n(q,{value:l(s),"onUpdate:value":V[0]||(V[0]=F=>x(s)?s.value=F:null)},null,8,["value"])]),_:1})]),n(B,{"data-test-id":"diff-result"},{default:N(()=>[l(c)?(v(),k("div",re," The provided JSONs are the same ")):(v(),j(l(X),{key:1,diff:l(i)},null,8,["diff"]))]),_:1})])):z("",!0)}}});const ne=G(oe,[["__scopeId","data-v-d84bb557"]]),be=C({__name:"json-diff",setup(e){const t=g(""),s=g(""),o=_(()=>A(()=>h.parse(t.value),void 0)),r=_(()=>A(()=>h.parse(s.value),void 0)),a=[{validator:i=>i===""||Q(()=>h.parse(i)),message:"Invalid JSON format"}];return(i,c)=>{const f=L;return v(),k(y,null,[n(f,{value:l(t),"onUpdate:value":c[0]||(c[0]=d=>x(t)?t.value=d:null),"validation-rules":a,label:"Your first JSON",placeholder:"Paste your first JSON here...",rows:"20",multiline:"","test-id":"leftJson","raw-text":"",monospace:""},null,8,["value"]),n(f,{value:l(s),"onUpdate:value":c[1]||(c[1]=d=>x(s)?s.value=d:null),"validation-rules":a,label:"Your JSON to compare",placeholder:"Paste your JSON to compare here...",rows:"20",multiline:"","test-id":"rightJson","raw-text":"",monospace:""},null,8,["value"]),n(ne,{"left-json":l(o),"right-json":l(r)},null,8,["left-json","right-json"])],64)}}});export{be as default};
