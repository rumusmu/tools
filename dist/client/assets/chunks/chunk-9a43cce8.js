const o=()=>Math.random(),e=t=>t[Math.floor(o()*t.length)],a=(t,n)=>Math.floor(o()*(n-t)+t);function r(t){for(let n=t.length-1;n>0;n--){const s=Math.floor(Math.random()*(n+1));[t[n],t[s]]=[t[s],t[n]]}return t}const f=(t,n="")=>r(t.split(n)).join(n),h=()=>`id-${o().toString(36).substring(2,12)}`;export{a,h as g,e as r,f as s};
