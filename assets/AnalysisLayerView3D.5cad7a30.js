import{fW as h,fX as c,bd as u,b0 as o,c4 as y,dG as m,b5 as V,cY as f,aX as n,aY as r,aZ as p}from"./vendor.c8f3cc8c.js";const d="analysis-view-handles";let a=class extends h(c){constructor(e){super(e),this.type="analysis-3d",this.allAnalysisViews=new u,this._creatingViewCount=0,this._analysisViewCreationTasks=new Map,this._analysisModules={"area-measurement":{module:null},"direct-line-measurement":{module:null},"line-of-sight":{module:null},slice:{module:null}}}initialize(){for(const e of this.layer.analyses)this._createAnalysisView(e);this.handles.add([this.layer.analyses.on("after-add",e=>{this._createAnalysisView(e.item)}),this.layer.analyses.on("after-remove",e=>{const s=this.allAnalysisViews.removeAt(this.allAnalysisViews.findIndex(t=>t.analysis===e.item));o(s)&&s.destroy();const i=this._analysisViewCreationTasks.get(e.item);o(i)&&(i.abort(),this._analysisViewCreationTasks.delete(e.item))})],d)}destroy(){this.handles.remove(d),this.allAnalysisViews.drain(e=>e.destroy()),this._analysisViewCreationTasks.clear(),this._creatingViewCount=0}whenAnalysisView(e){const s=this._analysisViewCreationTasks.get(e);if(o(s))return s.promise;const i=new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the AnalysisLayer of this layer view",{analysis:e});return Promise.reject(i)}isUpdating(){return this._creatingViewCount!==0||this.allAnalysisViews.some(e=>e.updating)}_createAnalysisView(e){this._analysisViewCreationTasks.set(e,m(s=>this._createAnalysisViewPromise(e,s)))}async _createAnalysisViewPromise(e,s){this._creatingViewCount+=1;const i=e.type,t=this._analysisModules[i];if(V(t.module)){const w=await this._loadAnalysisModule(i);t.module=w}const l=new t.module.default({analysis:e,view:this.view,parent:this});if(await l.when(),this._creatingViewCount-=1,f(s))throw l.destroy(),new y("layerview:no-analysisview-for-analysis","The analysis has not been added to the AnalysisLayer of this layer view",{analysis:e});return this.allAnalysisViews.add(l),l}_loadAnalysisModule(e){switch(e){case"area-measurement":return import("./AreaMeasurementView3D.ce839e34.js").then(function(s){return s.A});case"direct-line-measurement":return import("./DirectLineMeasurementView3D.471d441d.js").then(function(s){return s.D});case"line-of-sight":return import("./LineOfSightView3D.2f033a68.js");case"slice":return import("./SliceView3D.ac50dffb.js");default:return null}}};n([r()],a.prototype,"type",void 0),n([r()],a.prototype,"layer",void 0),n([r()],a.prototype,"allAnalysisViews",void 0),n([r()],a.prototype,"_creatingViewCount",void 0),a=n([p("esri.views.3d.layers.AnalysisLayerView3D")],a);const _=a;export{_ as default};