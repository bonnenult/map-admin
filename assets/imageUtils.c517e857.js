import{aX as I,aZ as C}from"./vendor.c8f3cc8c.js";import{n as L}from"./BitmapTileContainer.c07920c9.js";const b=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new L(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){var i;this.container.removeChild(this._bitmapView),(i=this._bitmapView)==null||i.removeAllChildren()}};return t=I([C("esri.views.2d.layers.BitmapTileLayerView2D")],t),t};function M(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function T(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function y(e,t,i,o){if(i.level===o.level)return t;const n=e.tileInfo.size,r=e.getTileResolution(i.level),l=e.getTileResolution(o.level);let a=e.getLODInfoAt(o.level);const m=a.getXForColumn(o.col),d=a.getYForRow(o.row);a=e.getLODInfoAt(i.level);const u=a.getXForColumn(i.col),w=a.getYForRow(i.row),s=M(t)/n[0],c=T(t)/n[1],g=Math.round(s*((m-u)/r)),f=Math.round(c*(-(d-w)/r)),v=Math.round(s*n[0]*(l/r)),p=Math.round(c*n[1]*(l/r)),h=V(n);return h.getContext("2d").drawImage(t,g,f,v,p,0,0,n[0],n[1]),h}function V(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{y as n,V as o,b as r};