import{b5 as o,h6 as d,bL as n,cz as u,gM as h,aW as g,aX as c,aY as f,aZ as S,gn as v,bO as j}from"./vendor.c8f3cc8c.js";import{b as z}from"./TileTreeDebugger.2aeeeacd.js";let p=class extends z{constructor(l){super(l)}getTiles(){const l=this.lv.getVisibleNodes(),t=this.view.renderSpatialReference,a=this.nodeSR;return l.map(r=>m(r,t,a)).sort((r,s)=>r.lij[0]===s.lij[0]?r.label>s.label?-1:1:r.lij[0]-s.lij[0])}};function m(l,t,a){const r=l.serviceObb;if(o(r)||o(t))return null;d(i,r.quaternion),n(e,r.center),u(e,a,0,e,t,0,1),i[12]=e[0],i[13]=e[1],i[14]=e[2];const s=[[],[],[]];n(e,r.halfSize),h(e,e,i),u(e,t,0,e,a,0,1),s[0].push([e[0],e[1]]),n(e,r.halfSize),e[0]=-e[0],h(e,e,i),u(e,t,0,e,a,0,1),s[0].push([e[0],e[1]]),n(e,r.halfSize),e[0]=-e[0],e[1]=-e[1],h(e,e,i),u(e,t,0,e,a,0,1),s[0].push([e[0],e[1]]),n(e,r.halfSize),e[1]=-e[1],h(e,e,i),u(e,t,0,e,a,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),n(e,r.halfSize),e[0]=-e[0],e[2]=-e[2],h(e,e,i),u(e,t,0,e,a,0,1),s[1].push([e[0],e[1]]),n(e,r.halfSize),e[2]=-e[2],h(e,e,i),u(e,t,0,e,a,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),n(e,r.halfSize),e[1]=-e[1],e[2]=-e[2],h(e,e,i),u(e,t,0,e,a,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const b=new g({rings:s,spatialReference:a});return{lij:[l.level,l.childCount,0],label:l.id,geometry:b}}c([f({constructOnly:!0})],p.prototype,"lv",void 0),c([f({constructOnly:!0})],p.prototype,"nodeSR",void 0),p=c([S("esri.views.3d.layers.support.I3STreeDebugger")],p);const i=v(),e=j();export{p as I3STreeDebugger};