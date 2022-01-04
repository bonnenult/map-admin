import{bE as y,fW as f,b0 as n,b5 as d,iV as g,b9 as v,bc as u,c2 as F,as as m,aX as i,aY as a,gj as b,gh as w,aZ as _}from"./vendor.c8f3cc8c.js";import{WhereClause as S}from"./WhereClause.23a6eab5.js";import{$ as j,u as E}from"./I3SMeshView3D.e0cdecba.js";import{o as I,c as C,s as x,i as Q,a as q}from"./SceneLayerView.6723c0c1.js";import{O as h,d as D,a as O,n as R}from"./I3SQueryFeatureStore.16cfaa6d.js";import{d as A}from"./I3SUtil.0920074c.js";import{p as V}from"./DefinitionExpressionSceneLayerView.936c443f.js";import{c as $}from"./PopupSceneLayerView.4cba9705.js";import"./I3SAttributeOverrides.1a1a773d.js";import"./I3SBinaryReader.465d8dc4.js";import"./SceneModification.dda1eaa9.js";import"./Graphics3DScaleVisibility.02cae195.js";import"./rendererConversion.609a1f23.js";import"./optimizedFeatureQueryEngineAdapter.f6867afe.js";import"./centroid.d0af71ad.js";import"./PooledRBush.02ffbd0a.js";import"./SceneLayerWorker.e923a8d2.js";import"./attributeUtils.a1b96ab7.js";import"./QueryEngine.a50ba40b.js";import"./projectionSupport.a9ad5f38.js";import"./json.2d0d6862.js";import"./QueryEngineCapabilities.83e56447.js";import"./utils.d8f3ec1d.js";import"./ClassBreaksDefinition.ad6c5f16.js";import"./spatialQuerySupport.88aac535.js";import"./popupUtils.37c6f82e.js";const L=y.getLogger("esri.views.3d.layers.SceneLayerView3D"),c=q();let r=class extends j(V($(f(I)))){constructor(){super(...arguments),this.type="scene-layer-3d",this.lodFactor=1,this.progressiveLoadFactor=1,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!0,this._interactiveEditingSessions=new Map,this._queryEngine=null}get filter(){return n(this.viewFilter)?this.viewFilter.filter:null}set filter(e){!d(e)&&h.checkSupport(e)?n(this.viewFilter)?this.viewFilter.filter=e:this.viewFilter=new h({filter:e,layerFieldsIndex:this.layer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),applyFilters:()=>this._applyFilters(!0),addSqlFilter:(t,s)=>this.addSqlFilter(t,s,this.logError)}):this.viewFilter=null}get requiredFields(){var e,t;return(e=(t=this.fieldsHelper)==null?void 0:t.requiredFields)!=null?e:[]}get floorFilterClause(){const e=g(this);return n(e)?S.create(e,this.layer.fieldsIndex):null}get lodCrossfadeinDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeinDuration)!=null?e:0}get lodCrossfadeoutDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeoutDuration)!=null?e:0}get lodCrossfadeUncoveredDuration(){var e,t;return(e=(t=this.view)==null?void 0:t.qualitySettings.sceneService["3dObject"].lodCrossfadeUncoveredDuration)!=null?e:0}initialize(){this.fieldsHelper=new C({layerView:this}),this.updatingHandles.add(this.layer,"rangeInfos",e=>this._rangeInfosChanged(e),2),this.updatingHandles.add(this.layer,"renderer",e=>this.updatingHandles.addPromise(this._rendererChange(e)),2);for(const e of["parsedDefinitionExpression","filter","viewFilter.parsedWhereClause","viewFilter.parsedGeometry","viewFilter.sortedObjectIds","floorFilterClause"])this.updatingHandles.add(this,e,()=>this._filterChange());for(const e of["filter","viewFilter.parsedGeometry"])this.updatingHandles.add(this,e,()=>this._geometryFilterChange());this.handles.add(this.layer.on("apply-edits",e=>this.updatingHandles.addPromise(e.result))),this.handles.add(this.layer.on("edits",e=>this._handleEdits(e)))}destroy(){this.fieldsHelper=v(this.fieldsHelper)}_rangeInfosChanged(e){e!=null&&e.length>0&&L.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return n(this.filter)?this.filter.createQuery(e):new u(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(s=>{if(s==null||!s.features)return s;const o=this.layer;for(const l of s.features)l.layer=o,l.sourceLayer=o;return s})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return this._queryEngine||(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=E(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new D({layerView:this,priority:F.FEATURE_QUERY_ENGINE,spatialIndex:new O({featureAdapter:new R({objectIdField:this.layer.objectIdField,attributeStorageInfo:this.layer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(t,s)=>this._forAllFeatures((o,l,p)=>t({id:o,index:l,meta:p}),s,2),getFeatureExtent:e,sourceSpatialReference:A(this.layer),viewSpatialReference:this.view.spatialReference})})}highlight(e){const t=this._highlights;if(e instanceof u){const{set:s,handle:o}=t.acquireSet();return this.queryObjectIds(e).then(l=>t.setFeatureIds(s,l)),o}return super.highlight(e)}createInteractiveEditSession(e){return x(this.attributeEditingContext,e)}_createLayerGraphic(e){const t=new m(null,null,e);return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}getFilters(){const e=super.getFilters();return this.floorFilterClause&&this.addSqlFilter(e,this.floorFilterClause,this.logError),this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),n(this.viewFilter)&&this.viewFilter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}_ensureQuery(e){return this._addDefinitionExpressionToQuery(d(e)?this.createQuery():u.from(e))}get attributeEditingContext(){return{sessions:this._interactiveEditingSessions,fieldsIndex:this.layer.fieldsIndex,objectIdField:this._getObjectIdField(),forEachNode:e=>this._forAllNodes(t=>n(t)?e(t.node,t.featureIds):null),attributeStorageInfo:this.i3slayer.attributeStorageInfo,attributeOverrides:this.attributeOverrides,getAttributeData:e=>this.getAttributeData(e),setAttributeData:(e,t)=>this.setAttributeData(e,t),clearMemCache:()=>this.clearMemCache()}}_handleEdits(e){Q(this.attributeEditingContext,e)}get hasGeometryFilter(){const e=this.viewFilter;return n(e)&&n(e.parsedGeometry)}computeNodeFiltering(e){const t=this.viewFilter;return d(t)||t.isMBSGeoemtryVisible(e,this.view.spatialReference,this._controller.crsIndex)?0:1}};i([a({aliasOf:"layer"})],r.prototype,"i3slayer",void 0),i([a()],r.prototype,"suspended",void 0),i([a(b)],r.prototype,"updatingProgress",void 0),i([a({type:w})],r.prototype,"filter",null),i([a()],r.prototype,"viewFilter",void 0),i([a(c.requiredFields)],r.prototype,"requiredFields",null),i([a(c.availableFields)],r.prototype,"availableFields",void 0),i([a()],r.prototype,"fieldsHelper",void 0),i([a()],r.prototype,"floorFilterClause",null),i([a({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.3dObject.lodFactor"})],r.prototype,"lodFactor",void 0),i([a({readOnly:!0,aliasOf:"_controller.updatingProgress"})],r.prototype,"updatingProgressValue",void 0),r=i([_("esri.views.3d.layers.SceneLayerView3D")],r);const ue=r;export{ue as default};