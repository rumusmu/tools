import{q as b,a0 as H,i as A,n as O,r as $,w as j,A as W,a1 as S,ac as I}from"./chunk-449c23a2.js";import{_ as D}from"./chunk-cf010ec4.js";function F(o){return typeof o=="function"?o():b(o)}const C=F;typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function _(o,t={},e){for(const s in o){const r=o[s],n=e?`${e}:${s}`:s;typeof r=="object"&&r!==null?_(r,t,n):typeof r=="function"&&(t[n]=r)}return t}const U={run:o=>o()},q=()=>U,T=typeof console.createTask<"u"?console.createTask:q;function x(o,t){const e=t.shift(),s=T(e);return o.reduce((r,n)=>r.then(()=>s.run(()=>n(...t))),Promise.resolve())}function B(o,t){const e=t.shift(),s=T(e);return Promise.all(o.map(r=>s.run(()=>r(...t))))}function h(o,t){for(const e of[...o])e(t)}class K{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,e,s={}){if(!t||typeof e!="function")return()=>{};const r=t;let n;for(;this._deprecatedHooks[t];)n=this._deprecatedHooks[t],t=n.to;if(n&&!s.allowDeprecated){let i=n.message;i||(i=`${r} hook has been deprecated`+(n.to?`, please use ${n.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!e.name)try{Object.defineProperty(e,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(e),()=>{e&&(this.removeHook(t,e),e=void 0)}}hookOnce(t,e){let s,r=(...n)=>(typeof s=="function"&&s(),s=void 0,r=void 0,e(...n));return s=this.hook(t,r),s}removeHook(t,e){if(this._hooks[t]){const s=this._hooks[t].indexOf(e);s!==-1&&this._hooks[t].splice(s,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,e){this._deprecatedHooks[t]=typeof e=="string"?{to:e}:e;const s=this._hooks[t]||[];delete this._hooks[t];for(const r of s)this.hook(t,r)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const e in t)this.deprecateHook(e,t[e])}addHooks(t){const e=_(t),s=Object.keys(e).map(r=>this.hook(r,e[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(t){const e=_(t);for(const s in e)this.removeHook(s,e[s])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...e){return e.unshift(t),this.callHookWith(x,t,...e)}callHookParallel(t,...e){return e.unshift(t),this.callHookWith(B,t,...e)}callHookWith(t,e,...s){const r=this._before||this._after?{name:e,args:s,context:{}}:void 0;this._before&&h(this._before,r);const n=t(e in this._hooks?[...this._hooks[e]]:[],s);return n instanceof Promise?n.finally(()=>{this._after&&r&&h(this._after,r)}):(this._after&&r&&h(this._after,r),n)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const e=this._before.indexOf(t);e!==-1&&this._before.splice(e,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const e=this._after.indexOf(t);e!==-1&&this._after.splice(e,1)}}}}function M(){return new K}const L=["base","meta","link","style","script","noscript"],V=["title","titleTemplate","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],R=["tagPosition","tagPriority","tagDuplicateStrategy"];function G(o,t){const e={tag:o,props:{}};return o==="title"||o==="titleTemplate"?(e.children=t,e):(e.props=Q({...t}),["children","innerHtml","innerHTML"].forEach(s=>{typeof e.props[s]<"u"&&(e.children=e.props[s],delete e.props[s])}),Object.keys(e.props).filter(s=>R.includes(s)).forEach(s=>{e[s]=e.props[s],delete e.props[s]}),typeof e.props.class=="object"&&!Array.isArray(e.props.class)&&(e.props.class=Object.keys(e.props.class).filter(s=>e.props.class[s])),Array.isArray(e.props.class)&&(e.props.class=e.props.class.join(" ")),e.props.content&&Array.isArray(e.props.content)?e.props.content.map((s,r)=>{const n={...e,props:{...e.props}};return n.props.content=s,n.key=`${e.props.name||e.props.property}:${r}`,n}):e)}function Q(o){for(const t in o)String(o[t])==="true"?o[t]="":String(o[t])==="false"&&delete o[t];return o}const g=o=>{if(typeof o.tagPriority=="number")return o.tagPriority;switch(o.tag){case"base":return-1;case"title":return 1;case"meta":return o.props.charset?-2:o.props["http-equiv"]==="content-security-policy"?0:10;default:return 10}},z=(o,t)=>g(o)-g(t),J=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],N=["og:image","og:video","og:audio","og:locale:alternate","video:actor","video:director","video:writer","video:tag","article:author","article:tag","book:tag","book:author","music:album","music:musician"];function X(o){const{props:t,tag:e}=o;if(J.includes(e))return e;if(e==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const s=["id"];e==="meta"&&s.push("name","property","http-equiv");for(const r of s)if(typeof t[r]<"u"){const n=String(t[r]);return N.findIndex(i=>n.startsWith(i))!==-1?!1:`${e}:${r}:${n}`}return!1}const y=(o,t)=>o==null?t||null:typeof o=="function"?o(t):o.replace("%s",t??"");function Y(o){const t=o.findIndex(s=>s.tag==="titleTemplate"),e=o.findIndex(s=>s.tag==="title");if(e!==-1&&t!==-1){const s=y(o[t].children,o[e].children);s!==null?o[e].children=s||o[e].children:delete o[e]}else if(t!==-1){const s=y(o[t].children);s!==null&&(o[t].children=s,o[t].tag="title")}return t!==-1&&delete o[t],o.filter(Boolean)}const Z=o=>{o=o||{};const t=o.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:e}){t.forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const s=e.key?`${e.tag}:${e.key}`:X(e);s&&(e._d=s)},"tags:resolve":function(e){const s={};e.tags.forEach(r=>{let n=r._d||r._p;const i=s[n];if(i){let a=r?.tagDuplicateStrategy;if(!a&&(r.tag==="htmlAttrs"||r.tag==="bodyAttrs")&&(a="merge"),a==="merge"){const c=i.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),s[n].props={...c,...r.props};return}else r._e===i._e&&(n=r._d=`${n}:${r._p}`);const f=Object.keys(r.props).length;if((f===0||f===1&&typeof r.props["data-h-key"]<"u")&&!r.children){delete s[n];return}}s[n]=r}),e.tags=Object.values(s)}}}},ee=()=>({hooks:{"tags:resolve":o=>{const t=e=>o.tags.find(s=>s._d===e)?._p;for(const e of o.tags){if(!e.tagPriority||typeof e.tagPriority=="number")continue;const s=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];for(const{prefix:r,offset:n}of s)if(e.tagPriority.startsWith(r)){const i=e.tagPriority.replace(r,""),a=t(i);typeof a<"u"&&(e._p=a+n)}}o.tags.sort((e,s)=>e._p-s._p).sort(z)}}}),te=()=>({hooks:{"tags:resolve":o=>{o.tags=Y(o.tags)}}}),oe=()=>({hooks:{"tag:normalise":function({tag:o}){typeof o.props.body<"u"&&(o.tagPosition="bodyClose",delete o.props.body)}}}),se=typeof window<"u",re=()=>({hooks:{"tag:normalise":o=>{const{tag:t,entry:e}=o;if(!L.includes(t.tag))return;!(se||w()?.resolvedOptions?.document)&&e._m==="server"&&t.key&&(t.props["data-h-key"]=t._d)}}}),ne=o=>({hooks:{"entries:updated":function(t){if(typeof o?.document>"u"&&typeof window>"u")return;let e=o?.delayFn;!e&&typeof requestAnimationFrame<"u"&&(e=requestAnimationFrame),D(()=>import("./chunk-978d89fe.js"),[]).then(({debouncedRenderDOMHead:s})=>{s(t,{document:o?.document||window.document,delayFn:e})})}}}),ie=()=>{const o=t=>{const e={},s={};return Object.entries(t.props).forEach(([r,n])=>{r.startsWith("on")&&typeof n=="function"?s[r]=n:e[r]=n}),{props:e,eventHandlers:s}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(e=>(e.props=o(e).props,e))},"dom:beforeRenderTag":function(t){const{props:e,eventHandlers:s}=o(t.tag);Object.keys(s).length&&(t.tag.props=e,t.tag._eventHandlers=s)},"dom:renderTag":function(t){const e=t.$el;!t.tag._eventHandlers||!e||Object.entries(t.tag._eventHandlers).forEach(([s,r])=>{const n=`${t.tag._d||t.tag._p}:${s}`,i=s.slice(2).toLowerCase(),a=r;e?.addEventListener(i,a),t.entry._sde[n]=()=>{e.removeEventListener(i,a)},delete t.queuedSideEffects[n]})}}}};function m(o){return Array.isArray(o)?o:[o]}let P;const ae=o=>P=o,w=()=>P,ce=10;function le(o){return Object.entries(o.input).filter(([t,e])=>typeof e<"u"&&V.includes(t)).map(([t,e])=>m(e).map(s=>m(G(t,s)))).flat(3).map((t,e)=>(t._e=o._i,t._p=(o._i<<ce)+e,t))}function fe(o={}){let t=[],e={},s=0;const r=M();o?.hooks&&r.addHooks(o.hooks),o.plugins=[oe(),Z(),ee(),te(),ie(),re(),ne({document:o?.document,delayFn:o?.domDelayFn}),...o?.plugins||[]],o.plugins.forEach(a=>a.hooks&&r.addHooks(a.hooks));const n=()=>r.callHook("entries:updated",i),i={resolvedOptions:o,_popSideEffectQueue(){const a={...e};return e={},a},headEntries(){return t},get hooks(){return r},push(a,f){const c={_i:s++,input:a,_sde:{}};f?.mode&&(c._m=f?.mode),t.push(c),n();const l=d=>{e={...e,...d._sde||{}},d._sde={},n()};return{dispose(){t=t.filter(d=>d._i!==c._i?!0:(l(d),!1))},patch(d){t=t.map(u=>(u._i===c._i&&(l(u),c.input=u.input=d,c._i=u._i=s++),u))}}},async resolveTags(){const a={tags:[],entries:[...t]};await r.callHook("entries:resolve",a);for(const f of a.entries)for(const c of le(f)){const l={tag:c,entry:f};await r.callHook("tag:normalise",l),a.tags.push(l.tag)}return await r.callHook("tags:resolve",a),a.tags}};return i.hooks.callHook("init",i),ae(i),i}function p(o){const t=C(o);return!o||!t?t:Array.isArray(t)?t.map(p):typeof t=="object"?Object.fromEntries(Object.entries(t).map(([e,s])=>e==="titleTemplate"||e.startsWith("on")?[e,b(s)]:[e,p(s)])):t}const de=I.startsWith("3"),v=typeof window<"u",E="usehead";function k(){return H()&&A(E)||w()}function ge(o={}){const t=[ue(),...o?.plugins||[]],e=fe({...o,domDelayFn:s=>setTimeout(()=>O(()=>s()),10),plugins:t});return e.install=s=>{de&&(s.config.globalProperties.$unhead=e,s.provide(E,e))},e}const ue=()=>({hooks:{"entries:resolve":function(o){for(const t of o.entries)t.input=p(t.input)}}});function pe(o,t={}){const e=k();if(!H()){e.push(o,t);return}const r=$({});j(()=>{r.value=p(o)});let n;W(r,i=>{n?n.patch(i):n=e.push(i,t)},{immediate:!0}),S(()=>{n?.dispose()})}function he(o,t={}){k().push(o,t)}function ye(o,t={}){const e=k(),s=v||e.resolvedOptions?.document;t.mode==="server"&&s||t.mode==="client"&&!s||(v?pe(o,t):he(o,t))}export{ge as c,ye as u};
