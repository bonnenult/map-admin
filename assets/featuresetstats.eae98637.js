import{oP as F,pg as l,oJ as m,ow as A,oS as h,oD as i,oR as s,oC as p,oL as v}from"./vendor.c8f3cc8c.js";import{J as d}from"./arcadeUtils.19b8ccf5.js";import{WhereClause as g}from"./WhereClause.23a6eab5.js";import"./FeatureSetReader.2ffb1ded.js";import"./centroid.d0af71ad.js";function f(t,e,u,n,a,r){if(n.length===1){if(m(n[0]))return i(d(t,n[0],s(n[1],-1)));if(h(n[0]))return i(d(t,n[0].toArray(),s(n[1],-1)))}else if(n.length===2){if(m(n[0]))return i(d(t,n[0],s(n[1],-1)));if(h(n[0]))return i(d(t,n[0].toArray(),s(n[1],-1)));if(l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,a).then(o=>n[0].calculateStatistic(t,o,s(n[2],1e3),e.abortSignal)))}else if(n.length===3&&l(n[0]))return n[0].load().then(c=>y(g.create(n[1],c.getFieldsIndex()),r,a).then(o=>n[0].calculateStatistic(t,o,s(n[2],1e3),e.abortSignal)));return i(d(t,n,-1))}function y(t,e,u){try{const n=t.getVariables();if(n.length>0){const a=[];for(let r=0;r<n.length;r++){const c={name:n[r]};a.push(e.evaluateIdentifier(u,c))}return p(a).then(r=>{const c={};for(let o=0;o<n.length;o++)c[n[o]]=r[o];return t.parameters=c,t})}return i(t)}catch(n){return v(n)}}function I(t){t.mode==="async"&&(t.functions.stdev=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("stdev",n,a,r,e,t)})},t.functions.variance=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("variance",n,a,r,e,t)})},t.functions.average=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("mean",n,a,r,e,t)})},t.functions.mean=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("mean",n,a,r,e,t)})},t.functions.sum=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("sum",n,a,r,e,t)})},t.functions.min=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("min",n,a,r,e,t)})},t.functions.max=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){return f("max",n,a,r,e,t)})},t.functions.count=function(e,u){return t.standardFunctionAsync(e,u,function(n,a,r){if(F(r,1,1),l(r[0]))return r[0].count(n.abortSignal);if(m(r[0])||A(r[0]))return r[0].length;if(h(r[0]))return r[0].length();throw new Error("Invalid Parameters for Count")})})}export{I as registerFunctions};