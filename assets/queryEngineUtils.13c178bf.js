var a=Object.defineProperty,i=Object.defineProperties;var d=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var n=(e,t,o)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,c=(e,t)=>{for(var o in t||(t={}))p.call(t,o)&&n(e,o,t[o]);if(r)for(var o of r(t))g.call(t,o)&&n(e,o,t[o]);return e},s=(e,t)=>i(e,d(t));import{sn as u,so as j,sp as w,sq as b}from"./vendor.c8f3cc8c.js";class l extends u{constructor(t){super(s(c({},t),{constraint:new j(t.coordinateHelper,t.targetPoint)}))}get hints(){return[new w(this.targetPoint)]}}function T(e,t){switch(e.type){case"edge":return new b({coordinateHelper:t,edgeStart:t.pointToVector(e.start),edgeEnd:t.pointToVector(e.end),targetPoint:t.pointToVector(e.target),objectId:e.objectId});case"vertex":return new l({coordinateHelper:t,targetPoint:t.pointToVector(e.target),objectId:e.objectId})}}export{T as o};