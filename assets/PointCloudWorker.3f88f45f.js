import{gq as v,b0 as b,hf as A,ar as h,cz as S,eh as g,gG as y,gI as D,jD as m}from"./vendor.c8f3cc8c.js";import{c as M,a as c,u as z,m as j}from"./PointCloudWorkerUtil.696f47e7.js";import"./PointCloudUniqueValueRenderer.48dfc9fd.js";import"./I3SBinaryReader.465d8dc4.js";class w{transform(t){const a=this._transform(t),e=[a.points.buffer,a.rgb.buffer];b(a.pointIdFilterMap)&&e.push(a.pointIdFilterMap.buffer);for(const r of a.attributes)"buffer"in r.values&&A(r.values.buffer)&&r.values.buffer!==a.rgb.buffer&&e.push(r.values.buffer);return Promise.resolve({result:a,transferList:e})}_transform(t){const a=M(t.schema,t.geometryBuffer);let e=a.length/3,r=null;const s=[],i=c(t.primaryAttributeData,a,e);b(t.primaryAttributeData)&&i&&s.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:i});const n=c(t.modulationAttributeData,a,e);b(t.modulationAttributeData)&&n&&s.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:n});let f=z(t.rendererInfo,i,n,e);if(t.filterInfo&&t.filterInfo.length>0&&b(t.filterAttributesData)){const o=t.filterAttributesData.map(l=>{const I=c(l,a,e),p={attributeInfo:l.attributeInfo,values:I};return s.push(p),p});r=new Uint32Array(e),e=j(a,f,r,t.filterInfo,o)}for(const o of t.userAttributesData){const l=c(o,a,e);s.push({attributeInfo:o.attributeInfo,values:l})}3*e<f.length&&(f=new Uint8Array(f.buffer.slice(0,3*e))),this._applyElevationOffsetInPlace(a,e,t.elevationOffset);const u=this._transformCoordinates(a,e,t.obb,h.fromJSON(t.inSR),h.fromJSON(t.outSR));return{obb:t.obb,points:u,rgb:f,attributes:s,pointIdFilterMap:r}}_transformCoordinates(t,a,e,r,s){if(!S(t,r,0,t,s,0,a))throw Error("Can't reproject");const i=g(e.center[0],e.center[1],e.center[2]),n=m(),f=m();y(d,e.quaternion);const u=new Float32Array(3*a);for(let o=0;o<a;o++)n[0]=t[3*o]-i[0],n[1]=t[3*o+1]-i[1],n[2]=t[3*o+2]-i[2],D(f,n,d),e.halfSize[0]=Math.max(e.halfSize[0],Math.abs(f[0])),e.halfSize[1]=Math.max(e.halfSize[1],Math.abs(f[1])),e.halfSize[2]=Math.max(e.halfSize[2],Math.abs(f[2])),u[3*o]=n[0],u[3*o+1]=n[1],u[3*o+2]=n[2];return u}_applyElevationOffsetInPlace(t,a,e){if(e!==0)for(let r=0;r<a;r++)t[3*r+2]+=e}}const d=v();function F(){return new w}export{F as default};