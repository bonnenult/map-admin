import{c4 as c,bR as h,aX as p,aY as m,aZ as l}from"./vendor.c8f3cc8c.js";import{V as f}from"./DynamicLayerView3D.809cdda5.js";import{a as u}from"./WMSLayerView.0f67c32d.js";import"./projectExtentUtils.32bc4bc4.js";import"./RefreshableLayerView.552e5409.js";import"./ExportWMSImageParameters.491e05de.js";let i=class extends u(f){constructor(){super(...arguments),this.type="wms-3d"}initialize(){this.layer.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view"))),this.updatingHandles.add(this.exportImageParameters,"version",()=>{this.updatingHandles.addPromise(this.refreshDebounced())})}createFetchPopupFeaturesQuery(s){const r=this.findExtentInfoAt(s),e=r.extent,t=new h(e[0],e[1],e[2],e[3],this._spatialReference),a=r.imageSize,n=a.width,d=a.height,o=t.width/n;return{extent:t,width:n,height:d,x:Math.round((s.x-t.xmin)/o),y:Math.round((t.ymax-s.y)/o)}}getFetchOptions(){return{timeExtent:this.timeExtent}}};p([m()],i.prototype,"suspended",void 0),i=p([l("esri.views.3d.layers.WMSLayerView3D")],i);const v=i;export{v as default};