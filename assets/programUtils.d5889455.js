import{cN as l}from"./vendor.c8f3cc8c.js";class d{constructor(e){this.readFile=e}resolveIncludes(e){return this.resolve(e)}resolve(e,t=new Map){if(t.has(e))return t.get(e);const n=this.read(e);if(!n)throw new Error(`cannot find shader file ${e}`);const r=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=r.exec(n);const c=[];for(;s!=null;)c.push({path:s[1],start:s.index,length:s[0].length}),s=r.exec(n);let f=0,i="";return c.forEach(a=>{i+=n.slice(f,a.start),i+=t.has(a.path)?"":this.resolve(a.path,t),f=a.start+a.length}),i+=n.slice(f),t.set(e,i),i}read(e){return this.readFile(e)}}function u(o){let e="";for(const t in o){const n=o[t];if(typeof n=="boolean")n&&(e+=`#define ${t}
`);else if(typeof n=="number")e+=`#define ${t} ${n.toFixed()}
`;else if(typeof n=="object"){const r=n.options;let s=0;for(const c in r)e+=`#define ${r[c]} ${(s++).toFixed()}
`;e+=`#define ${t} ${r[n.value]}
`}}return e}function p(o,e,t,n){t=t||{},n=n||"";const r=typeof e.shaders=="function"?e.shaders(t):e.shaders;return new l(o,n+r.vertexShader,n+r.fragmentShader,e.attributes)}export{d as e,u as n,p as t};