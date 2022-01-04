import{aW as Y,lx as T,aq as y,p6 as et,rm as it,ps as k,a$ as D,rl as st,bs as rt,aV as at,cv as R,rn as V,ro as H,cc as ot,rp as O,b9 as ht,rk as b,rq as L,rr as ct,rs as nt,as as M,b0 as lt,aX as _,aY as v,aZ as pt,ri as dt}from"./vendor.c8f3cc8c.js";import ut from"./GraphicMover.1f45e3fc.js";function j(t){let e=0,i=0;const s=t.length;let r,a=t[i];for(i=0;i<s-1;i++)r=t[i+1],e+=(r[0]-a[0])*(r[1]+a[1]),a=r;return e>=0}function N(t,e,i,s){const r=[];for(const a of t){const h=a.slice(0);r.push(h);const n=e*(a[0]-s.x)-i*(a[1]-s.y)+s.x,o=i*(a[0]-s.x)+e*(a[1]-s.y)+s.y;h[0]=n,h[1]=o}return r}function z(t,e,i){const s=t.spatialReference,r=e*Math.PI/180,a=Math.cos(r),h=Math.sin(r);var n,o;if("xmin"in t&&(i=(n=i)!=null?n:t.center,t=new Y({spatialReference:s,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]})),"paths"in t){var l;i=(l=i)!=null?l:t.extent.center;const g=[];for(const G of t.paths)g.push(N(G,a,h,i));return new T({spatialReference:s,paths:g})}if("rings"in t){var c;i=(c=i)!=null?c:t.extent.center;const g=[];for(const G of t.rings){const $=j(G),w=N(G,a,h,i);j(w)!==$&&w.reverse(),g.push(w)}return new Y({spatialReference:s,rings:g})}if("x"in t){var p;i=(p=i)!=null?p:t;const g=new y({x:a*(t.x-i.x)-h*(t.y-i.y)+i.x,y:h*(t.x-i.x)+a*(t.y-i.y)+i.y,spatialReference:s});return t.z!=null&&(g.z=t.z),t.m!=null&&(g.m=t.m),g}return"points"in t?(i=(o=i)!=null?o:t.extent.center,new et({points:N(t.points,a,h,i),spatialReference:s})):null}class _t{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move-start"}}class vt{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move"}}class gt{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.dx=s,this.dy=r,this.type="move-stop"}}class Gt{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-start"}}class yt{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate"}}class mt{constructor(e,i,s){this.graphics=e,this.mover=i,this.angle=s,this.type="rotate-stop"}}class ft{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale-start"}}class bt{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale"}}class St{constructor(e,i,s,r){this.graphics=e,this.mover=i,this.xScale=s,this.yScale=r,this.type="scale-stop"}}const u=it.transformGraphics,x={centerIndicator:new k({style:"cross",size:u.center.size,color:u.center.color}),fill:{default:new D({color:u.fill.color,outline:{color:u.fill.outlineColor,join:"round",width:1}}),active:new D({color:u.fill.stagedColor,outline:{color:u.fill.outlineColor,join:"round",style:"dash",width:1}})},handles:{default:new k({style:"square",size:u.vertex.size,color:u.vertex.color,outline:{color:u.vertex.outlineColor,width:1}}),hover:new k({style:"square",size:u.vertex.hoverSize,color:u.vertex.hoverColor,outline:{color:u.vertex.hoverOutlineColor,width:1}})},rotator:{default:new k({style:"circle",size:u.vertex.size,color:u.vertex.color,outline:{color:u.vertex.outlineColor,width:1}}),hover:new k({style:"circle",size:u.vertex.hoverSize,color:u.vertex.hoverColor,outline:{color:u.vertex.hoverOutlineColor,width:1}})},rotatorLine:new st({color:u.line.color,width:1})};let d=class extends rt.EventedAccessor{constructor(t){super(t),this._activeHandleGraphic=null,this._graphicAttributes={esriSketchTool:"box"},this._handles=new at,this._mover=null,this._rotateGraphicOffset=20,this._angleOfRotation=0,this._rotateLineGraphic=null,this._startInfo=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this.type="box",this.callbacks={onMoveStart(){},onMove(){},onMoveStop(){},onScaleStart(){},onScale(){},onScaleStop(){},onRotateStart(){},onRotate(){},onRotateStop(){},onGraphicClick(){}},this.centerGraphic=null,this.backgroundGraphic=null,this.enableMovement=!0,this.enableRotation=!0,this.enableScaling=!0,this.graphics=[],this.handleGraphics=[],this.layer=null,this.preserveAspectRatio=!1,this.rotateGraphic=null,this.showCenterGraphic=!0,this.view=null,this._getBounds=(()=>{const e=R();return(i,s)=>{i[0]=Number.POSITIVE_INFINITY,i[1]=Number.POSITIVE_INFINITY,i[2]=Number.NEGATIVE_INFINITY,i[3]=Number.NEGATIVE_INFINITY;for(const r of s){if(!r)continue;let a,h,n,o;if(r.type==="point")a=n=r.x,h=o=r.y;else if(r.type==="multipoint"){const l=V(r);[a,h,n,o]=H(e,[l])}else if(r.type==="extent")[a,h,n,o]=[r.xmin,r.ymin,r.xmax,r.ymax];else{const l=V(r);[a,h,n,o]=H(e,l)}i[0]=Math.min(a,i[0]),i[1]=Math.min(h,i[1]),i[2]=Math.max(n,i[2]),i[3]=Math.max(o,i[3])}return i}})()}initialize(){this._setup(),this._handles.add([ot(this,"view.ready",()=>{const{layer:t,view:e}=this;dt(e,t)}),O(this,"preserveAspectRatio",()=>{this._activeHandleGraphic&&(this._scaleGraphic(this._activeHandleGraphic),this._updateGraphics())}),O(this,"view.scale",()=>{this._updateRotateGraphic(),this._updateRotateLineGraphic()}),O(this,"graphics",()=>this.refresh()),O(this,"layer",(t,e)=>{e&&this._resetGraphics(e),this.refresh()})])}destroy(){this._reset(),this._handles=ht(this._handles)}get state(){const t=!!this.get("view.ready"),e=!(!this.get("graphics.length")||!this.get("layer"));return t&&e?"active":t?"ready":"disabled"}set symbols(t){const{centerIndicator:e=x.centerIndicator,fill:i=x.fill,handles:s=x.handles,rotator:r=x.rotator,rotatorLine:a=x.rotatorLine}=t||{};this._set("symbols",{centerIndicator:e,fill:i,handles:s,rotator:r,rotatorLine:a})}isUIGraphic(t){let e=[];return this.handleGraphics.length&&(e=e.concat(this.handleGraphics)),this.backgroundGraphic&&e.push(this.backgroundGraphic),this.centerGraphic&&e.push(this.centerGraphic),this.rotateGraphic&&e.push(this.rotateGraphic),this._rotateLineGraphic&&e.push(this._rotateLineGraphic),e.length&&e.includes(t)}move(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=b(s,t,e,this.view);i.geometry=r}this.refresh(),this._emitMoveStopEvent(t,e,null)}}scale(t,e){if(this._mover&&this.graphics.length){for(const i of this.graphics){const s=i.geometry,r=L(s,t,e);i.geometry=r}this.refresh(),this._emitScaleStopEvent(t,e,null)}}rotate(t,e){if(this._mover&&this.graphics.length){if(!e){const i=this.handleGraphics[1].geometry.x,s=this.handleGraphics[3].geometry.y;e=new y(i,s,this.view.spatialReference)}for(const i of this.graphics){const s=i.geometry,r=z(s,t,e);i.geometry=r}this.refresh(),this._emitRotateStopEvent(t,null)}}refresh(){this._reset(),this._setup()}reset(){this.graphics=[]}_setup(){this.state==="active"&&(this._setupGraphics(),this._setupMover(),this._updateGraphics())}_reset(){this._resetGraphicStateVars(),this._resetGraphics(),this._mover&&this._mover.destroy(),this._mover=null,this.view.cursor="default"}_resetGraphicStateVars(){this._startInfo=null,this._activeHandleGraphic=null,this._totalDx=0,this._totalDy=0,this._xScale=1,this._yScale=1,this._angleOfRotation=0}_resetGraphics(t){const e=t||this.layer;e&&(e.removeMany(this.handleGraphics),e.remove(this.backgroundGraphic),e.remove(this.centerGraphic),e.remove(this.rotateGraphic),e.remove(this._rotateLineGraphic));for(const i of this.handleGraphics)i.destroy();this._set("handleGraphics",[]),this.backgroundGraphic&&(this.backgroundGraphic.destroy(),this._set("backgroundGraphic",null)),this.centerGraphic&&(this.centerGraphic.destroy(),this._set("centerGraphic",null)),this.rotateGraphic&&(this.rotateGraphic.destroy(),this._set("rotateGraphic",null)),this._rotateLineGraphic&&(this._rotateLineGraphic.destroy(),this._rotateLineGraphic=null)}_setupMover(){let t=[];this.enableScaling&&(t=t.concat(this.handleGraphics)),this.enableMovement&&(t=t.concat(this.graphics,this.backgroundGraphic)),this.enableRotation&&t.push(this.rotateGraphic),this.showCenterGraphic&&t.push(this.centerGraphic),this._mover=new ut({enableMoveAllGraphics:!1,indicatorsEnabled:!1,view:this.view,graphics:t,callbacks:{onGraphicClick:e=>this._onGraphicClickCallback(e),onGraphicMoveStart:e=>this._onGraphicMoveStartCallback(e),onGraphicMove:e=>this._onGraphicMoveCallback(e),onGraphicMoveStop:e=>this._onGraphicMoveStopCallback(e),onGraphicPointerOver:e=>this._onGraphicPointerOverCallback(e),onGraphicPointerOut:e=>this._onGraphicPointerOutCallback(e)}})}_getStartInfo(t){const[e,i,s,r]=this._getBoxBounds(R()),a=Math.abs(s-e),h=Math.abs(r-i),n=(s+e)/2,o=(r+i)/2,{x:l,y:c}=t.geometry;return{width:a,height:h,centerX:n,centerY:o,startX:l,startY:c,graphicInfos:this._getGraphicInfos(),box:this.backgroundGraphic.geometry,rotate:this.rotateGraphic.geometry}}_getGraphicInfos(){return this.graphics.map(t=>this._getGraphicInfo(t))}_getGraphicInfo(t){const e=t.geometry,[i,s,r,a]=this._getBounds(R(),[e]);return{width:Math.abs(r-i),height:Math.abs(a-s),centerX:(r+i)/2,centerY:(a+s)/2,geometry:e}}_onGraphicClickCallback(t){t.viewEvent.stopPropagation(),this.emit("graphic-click",t),this.callbacks.onGraphicClick&&this.callbacks.onGraphicClick(t)}_onGraphicMoveStartCallback(t){const{_angleOfRotation:e,_xScale:i,_yScale:s,backgroundGraphic:r,handleGraphics:a,rotateGraphic:h,symbols:n}=this,o=t.graphic;this._resetGraphicStateVars(),this._hideGraphicsBeforeUpdate(),r.symbol=n.fill.active,this._startInfo=this._getStartInfo(o),o===h?(this.view.cursor="grabbing",this._emitRotateStartEvent(e,o)):a.includes(o)?(this._activeHandleGraphic=o,this._emitScaleStartEvent(i,s,o)):this._emitMoveStartEvent(t.dx,t.dy,o)}_onGraphicMoveCallback(t){const e=t.graphic;if(this._startInfo)if(this.handleGraphics.includes(e))this._scaleGraphic(e),this._emitScaleEvent(this._xScale,this._yScale,e);else if(e===this.rotateGraphic)this._rotateGraphic(e),this._emitRotateEvent(this._angleOfRotation,e);else{const i=t.dx,s=t.dy;this._totalDx+=i,this._totalDy+=s,this._moveGraphic(e,i,s),this._emitMoveEvent(i,s,e)}}_onGraphicMoveStopCallback(t){const e=t.graphic;if(!this._startInfo)return void this.refresh();const{_angleOfRotation:i,_totalDx:s,_totalDy:r,_xScale:a,_yScale:h,handleGraphics:n,rotateGraphic:o}=this;this.refresh(),e===o?(this.view.cursor="pointer",this._emitRotateStopEvent(i,e)):n.includes(e)?this._emitScaleStopEvent(a,h,e):this._emitMoveStopEvent(s,r,e)}_onGraphicPointerOverCallback(t){const{backgroundGraphic:e,handleGraphics:i,graphics:s,rotateGraphic:r,symbols:a,view:h}=this,n=t.graphic;if(n===r)return r.symbol=a.rotator.hover,void(h.cursor="pointer");if(s.includes(n)||n===e)return void(h.cursor="move");if(!i.includes(n))return void(h.cursor="pointer");t.graphic.symbol=a.handles.hover;const o=h.rotation;let l,c=t.index;switch(c<8&&(o>=0&&o<45?c%=8:c=o>=45&&o<90?(c+1)%8:o>=90&&o<135?(c+2)%8:o>=135&&o<180?(c+3)%8:o>=180&&o<225?(c+4)%8:o>=225&&o<270?(c+5)%8:o>=270&&o<315?(c+6)%8:(c+7)%8),c){case 0:case 4:l="nwse-resize";break;case 1:case 5:l="ns-resize";break;case 2:case 6:l="nesw-resize";break;case 3:case 7:l="ew-resize";break;default:l="pointer"}h.cursor=l}_onGraphicPointerOutCallback(t){const{handleGraphics:e,rotateGraphic:i,symbols:s,view:r}=this;t.graphic===i?i.symbol=s.rotator.default:e.includes(t.graphic)&&(t.graphic.symbol=s.handles.default),r.cursor="default"}_scaleGraphic(t){const{_startInfo:e,handleGraphics:i,preserveAspectRatio:s,view:r}=this,{centerX:a,centerY:h,startX:n,startY:o}=e,{resolution:l,transform:c}=r.state,p=i.indexOf(t);p!==1&&p!==5||this._updateX(t,a),p!==3&&p!==7||this._updateY(t,h);const{x:g,y:G}=t.geometry,$=c[0]*g+c[2]*G+c[4],w=c[1]*g+c[3]*G+c[5],I=e.graphicInfos.map(S=>S.geometry);if(s){const S=c[0]*a+c[2]*h+c[4],C=c[1]*a+c[3]*h+c[5],m=c[0]*n+c[2]*o+c[4],f=c[1]*n+c[3]*o+c[5];this._xScale=this._yScale=ct(S,C,m,f,$,w);for(const E of I){const B=I.indexOf(E);this.graphics[B].geometry=L(E,this._xScale,this._yScale,[a,h])}this._updateBackgroundGraphic()}else{const{width:S,height:C}=e;let m=g-n,f=o-G;if(p===1||p===5?m=0:p!==3&&p!==7||(f=0),m===0&&f===0)return;const E=S+(n>a?m:-1*m),B=C+(o<h?f:-1*f),q=a+m/2,F=h+f/2;this._xScale=E/S||1,this._yScale=B/C||1,p===1||p===5?this._xScale=1:p!==3&&p!==7||(this._yScale=1);const U=(q-a)/l,W=(F-h)/l,Z=L(e.box,this._xScale,this._yScale);this.backgroundGraphic.geometry=b(Z,U,W,r,!0);const{centerX:X,centerY:P}=this._getGraphicInfo(this.backgroundGraphic),J=(X-a)/l,K=-1*(P-h)/l;for(const A of I){const Q=I.indexOf(A),tt=L(A,this._xScale,this._yScale,[a,h]);this.graphics[Q].geometry=b(tt,J,K,r,!0)}this.centerGraphic.geometry=new y(X,P,r.spatialReference)}}_rotateGraphic(t){const{centerX:e,centerY:i,startX:s,startY:r,box:a,rotate:h}=this._startInfo,n=new y(s,r,this.view.spatialReference),o=new y(e,i,this.view.spatialReference),l=t.geometry;this._angleOfRotation=nt(n,l,o);const c=this._startInfo.graphicInfos.map(p=>p.geometry);for(const p of c){const g=c.indexOf(p),G=z(p,this._angleOfRotation,o);this.graphics[g].geometry=G}this.backgroundGraphic.geometry=z(a,this._angleOfRotation,o),this.rotateGraphic.geometry=z(h,this._angleOfRotation,o)}_moveGraphic(t,e,i){if(this.graphics.includes(t)){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=b(s,e,i,this.view);for(const r of this.graphics)r!==t&&(r.geometry=b(r.geometry,e,i,this.view))}else if(t===this.centerGraphic){const s=this.backgroundGraphic.geometry;this.backgroundGraphic.geometry=b(s,e,i,this.view)}if(t===this.backgroundGraphic||t===this.centerGraphic)for(const s of this.graphics)s.geometry=b(s.geometry,e,i,this.view)}_setupGraphics(){const{_graphicAttributes:t,symbols:e}=this;this._set("centerGraphic",new M(null,e.centerIndicator,t)),this.showCenterGraphic&&this.layer.add(this.centerGraphic),this._set("backgroundGraphic",new M(null,e.fill.default,t)),this.layer.add(this.backgroundGraphic),this._rotateLineGraphic=new M(null,e.rotatorLine,t),this._set("rotateGraphic",new M(null,e.rotator.default,t)),this.enableRotation&&!this._hasExtentGraphic()&&(this.layer.add(this._rotateLineGraphic),this.layer.add(this.rotateGraphic));for(let i=0;i<8;i++)this.handleGraphics.push(new M(null,e.handles.default,t));this.enableScaling&&this.layer.addMany(this.handleGraphics)}_updateGraphics(){this._updateBackgroundGraphic(),this._updateHandleGraphics(),this._updateCenterGraphic(),this._updateRotateGraphic(),this._updateRotateLineGraphic()}_hideGraphicsBeforeUpdate(){this.centerGraphic.visible=!1,this.rotateGraphic.visible=!1,this._rotateLineGraphic.visible=!1,this.handleGraphics.forEach(t=>t.visible=!1)}_updateHandleGraphics(){const t=this._getCoordinates(!0);this.handleGraphics.forEach((e,i)=>{const[s,r]=t[i];this._updateXY(e,s,r)})}_updateBackgroundGraphic(){const t=this._getCoordinates();this.backgroundGraphic.geometry=new Y({rings:t,spatialReference:this.view.spatialReference})}_updateCenterGraphic(){const[t,e,i,s]=this._getBoxBounds(R()),r=(i+t)/2,a=(s+e)/2;this.centerGraphic.geometry=new y(r,a,this.view.spatialReference)}_updateRotateGraphic(){if(!this.handleGraphics.length)return;const{x:t,y:e}=this.handleGraphics[1].geometry,i=e+this.view.state.resolution*this._rotateGraphicOffset;this.rotateGraphic.geometry=new y(t,i,this.view.spatialReference)}_updateRotateLineGraphic(){if(!this.handleGraphics.length||!this.rotateGraphic||!this.rotateGraphic.geometry)return;const t=this.handleGraphics[1].geometry,e=this.rotateGraphic.geometry;this._rotateLineGraphic.geometry=new T({paths:[[t.x,t.y],[e.x,e.y]],spatialReference:this.view.spatialReference})}_updateXY(t,e,i){t.geometry=new y(e,i,this.view.spatialReference)}_updateX(t,e){const i=t.geometry.y;t.geometry=new y(e,i,this.view.spatialReference)}_updateY(t,e){const i=t.geometry.x;t.geometry=new y(i,e,this.view.spatialReference)}_hasExtentGraphic(){return this.graphics.some(t=>t&&lt(t.geometry)&&t.geometry.type==="extent")}_getBoxBounds(t){const e=this.graphics.map(i=>i.geometry);return this._getBounds(t,e)}_getCoordinates(t){const[e,i,s,r]=this._getBoxBounds(R());if(t){const a=(e+s)/2,h=(r+i)/2;return[[e,r],[a,r],[s,r],[s,h],[s,i],[a,i],[e,i],[e,h]]}return[[e,r],[s,r],[s,i],[e,i]]}_emitMoveStartEvent(t,e,i){const s=new _t(this.graphics,i,t,e);this.emit("move-start",s),this.callbacks.onMoveStart&&this.callbacks.onMoveStart(s)}_emitMoveEvent(t,e,i){const s=new vt(this.graphics,i,t,e);this.emit("move",s),this.callbacks.onMove&&this.callbacks.onMove(s)}_emitMoveStopEvent(t,e,i){const s=new gt(this.graphics,i,t,e);this.emit("move-stop",s),this.callbacks.onMoveStop&&this.callbacks.onMoveStop(s)}_emitRotateStartEvent(t,e){const i=new Gt(this.graphics,e,t);this.emit("rotate-start",i),this.callbacks.onRotateStart&&this.callbacks.onRotateStart(i)}_emitRotateEvent(t,e){const i=new yt(this.graphics,e,t);this.emit("rotate",i),this.callbacks.onRotate&&this.callbacks.onRotate(i)}_emitRotateStopEvent(t,e){const i=new mt(this.graphics,e,t);this.emit("rotate-stop",i),this.callbacks.onRotateStop&&this.callbacks.onRotateStop(i)}_emitScaleStartEvent(t,e,i){const s=new ft(this.graphics,i,t,e);this.emit("scale-start",s),this.callbacks.onScaleStart&&this.callbacks.onScaleStart(s)}_emitScaleEvent(t,e,i){const s=new bt(this.graphics,i,t,e);this.emit("scale",s),this.callbacks.onScale&&this.callbacks.onScale(s)}_emitScaleStopEvent(t,e,i){const s=new St(this.graphics,i,t,e);this.emit("scale-stop",s),this.callbacks.onScaleStop&&this.callbacks.onScaleStop(s)}};_([v()],d.prototype,"_rotateLineGraphic",void 0),_([v({readOnly:!0})],d.prototype,"type",void 0),_([v()],d.prototype,"callbacks",void 0),_([v({readOnly:!0})],d.prototype,"centerGraphic",void 0),_([v({readOnly:!0})],d.prototype,"backgroundGraphic",void 0),_([v()],d.prototype,"enableMovement",void 0),_([v()],d.prototype,"enableRotation",void 0),_([v()],d.prototype,"enableScaling",void 0),_([v()],d.prototype,"graphics",void 0),_([v({readOnly:!0})],d.prototype,"handleGraphics",void 0),_([v()],d.prototype,"layer",void 0),_([v()],d.prototype,"preserveAspectRatio",void 0),_([v({readOnly:!0})],d.prototype,"rotateGraphic",void 0),_([v()],d.prototype,"showCenterGraphic",void 0),_([v({readOnly:!0})],d.prototype,"state",null),_([v({value:x})],d.prototype,"symbols",null),_([v()],d.prototype,"view",void 0),d=_([pt("esri.views.draw.support.Box")],d);const kt=d;export{kt as default};