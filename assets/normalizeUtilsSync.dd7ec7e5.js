import{cv as w,e7 as A,eu as L,ev as g,e8 as X,dV as Q,e5 as R,dM as T,dQ as V,e0 as k,ew as $,ex as q,ey as h}from"./vendor.c8f3cc8c.js";function G(s){if(!s)return null;let t=null;const i=s.spatialReference,e=A(i);if(!e)return"toJSON"in s?s.toJSON():s;const m=L(i)?102100:4326,x=g[m].maxX,n=g[m].minX,l=g[m].plus180Line,f=g[m].minus180Line;let c;const a="toJSON"in s?s.toJSON():s;if(X(a))c=j(a,x,n);else if(Q(a))a.points=a.points.map(r=>j(r,x,n)),c=a;else if(R(a))c=B(a,e);else if(T(a)||V(a)){const r=E;k(r,a);const o={xmin:r[0],ymin:r[1],xmax:r[2],ymax:r[3]},u=h(o.xmin,n)*(2*x),y=u===0?a:z(a,u);o.xmin+=u,o.xmax+=u,$(o,l)&&o.xmax!==x||$(o,f)&&o.xmin!==n?t=y:c=y}else c=a;return t!==null?new D().cut(t,x):c}function z(s,t){const i=q(s);for(const e of i)for(const m of e)m[0]+=t;return s}function B(s,t){if(!t)return s;const i=C(s,t).map(e=>e.extent);return i.length<2?i[0]||s:i.length>2?(s.xmin=t.valid[0],s.xmax=t.valid[1],s):{rings:i.map(e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]])}}function j(s,t,i){if(Array.isArray(s)){const e=s[0];if(e>t){const m=h(e,t);s[0]=e+m*(-2*t)}else if(e<i){const m=h(e,i);s[0]=e+m*(-2*i)}}else{const e=s.x;if(e>t){const m=h(e,t);s.x+=m*(-2*t)}else if(e<i){const m=h(e,i);s.x+=m*(-2*i)}}return s}function C(s,t){const i=[],{ymin:e,ymax:m}=s,x=s.xmax-s.xmin,n=s.xmin,l=s.xmax;let f;const[c,a]=t.valid;f=P(s.xmin,t);const r=f.x,o=f.frameId;f=P(s.xmax,t);const u=f.x,y=f.frameId,b=r===u&&x>0;if(x>2*a){const S={xmin:n<l?r:u,ymin:e,xmax:a,ymax:m},J={xmin:c,ymin:e,xmax:n<l?u:r,ymax:m},N={xmin:0,ymin:e,xmax:a,ymax:m},O={xmin:c,ymin:e,xmax:0,ymax:m},p=[],d=[];v(S,N)&&p.push(o),v(S,O)&&d.push(o),v(J,N)&&p.push(y),v(J,O)&&d.push(y);for(let I=o+1;I<y;I++)p.push(I),d.push(I);i.push({extent:S,frameIds:[o]},{extent:J,frameIds:[y]},{extent:N,frameIds:p},{extent:O,frameIds:d})}else r>u||b?i.push({extent:{xmin:r,ymin:e,xmax:a,ymax:m},frameIds:[o]},{extent:{xmin:c,ymin:e,xmax:u,ymax:m},frameIds:[y]}):i.push({extent:{xmin:r,ymin:e,xmax:u,ymax:m},frameIds:[o]});return i}function P(s,t){const[i,e]=t.valid,m=2*e;let x,n=0;return s>e?(x=Math.ceil(Math.abs(s-e)/m),s-=x*m,n=x):s<i&&(x=Math.ceil(Math.abs(s-i)/m),s+=x*m,n=-x),{x:s,frameId:n}}function v(s,t){const{xmin:i,ymin:e,xmax:m,ymax:x}=t;return M(s,i,e)&&M(s,i,x)&&M(s,m,x)&&M(s,m,e)}function M(s,t,i){return t>=s.xmin&&t<=s.xmax&&i>=s.ymin&&i<=s.ymax}class D{cut(t,i){let e;if(t.rings)this.closed=!0,e=t.rings,this.minPts=4;else{if(!t.paths)return null;this.closed=!1,e=t.paths,this.minPts=2}const m=e.length,x=-2*i;for(let n=0;n<m;n++){const l=e[n];if(l&&l.length>=this.minPts){const f=[];for(const c of l)f.push([c[0]+x,c[1]]);e.push(f)}}return this.closed?t.rings=e:t.paths=e,t}}const E=w();export{G as u};