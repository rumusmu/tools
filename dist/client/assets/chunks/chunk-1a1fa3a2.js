import{_ as s}from"./chunk-30e914ce.js";import{l as i}from"./chunk-231c3e11.js";import{w as p}from"./chunk-4d6daddf.js";import{d as m,j as c,k as u}from"./chunk-449c23a2.js";import"./chunk-f1ca2155.js";import"./chunk-a740628f.js";import"./chunk-767079b6.js";import"./chunk-55ba3dae.js";import"../entries/src_pages_Home.page.16dc467b.js";import"./chunk-cf010ec4.js";import"./chunk-ee54c1e8.js";import"./chunk-baa77311.js";import"./chunk-78769b89.js";import"./chunk-6deddc2e.js";import"./chunk-9a43cce8.js";import"./chunk-340feaf0.js";function l({array:t}){const r=new Set;return t.forEach(e=>Object.keys(e).forEach(o=>r.add(o))),Array.from(r)}function f(t){if(t===null)return"null";if(t===void 0)return"";const r=String(t).replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/"/g,'\\"');return r.includes(",")?`"${r}"`:r}function d({array:t}){const r=l({array:t}),e=t.map(o=>r.map(n=>f(o[n])));return[r.join(","),...e].join(`
`)}const x=m({__name:"json-to-csv",setup(t){function r(o){return p(()=>o===""?"":d({array:i.parse(o)}),"")}const e=[{validator:o=>o===""||i.parse(o),message:"Provided JSON is not valid."}];return(o,n)=>{const a=s;return c(),u(a,{"input-label":"Your raw JSON","input-placeholder":"Paste your raw JSON here...","output-label":"CSV version of your JSON","input-validation-rules":e,transformer:r})}}});export{x as default};
