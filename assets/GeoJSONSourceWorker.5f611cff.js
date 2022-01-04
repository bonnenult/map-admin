var Q=Object.defineProperty,v=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable;var R=(p,e,t)=>e in p?Q(p,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):p[e]=t,j=(p,e)=>{for(var t in e||(e={}))A.call(e,t)&&R(p,t,e[t]);if(S)for(var t of S(e))G.call(e,t)&&R(p,t,e[t]);return p},C=(p,e)=>v(p,P(e));import{ij as _,c4 as I,nz as Z,mV as M,f7 as z,dG as N,b8 as B,bE as L,eC as W,b0 as F,eJ as J,f1 as U,cT as V,dK as $,e_ as H,f0 as K,nA as Y}from"./vendor.c8f3cc8c.js";import{m as X}from"./FeatureStore.9f10829a.js";import{f as b,g as T}from"./projectionSupport.a9ad5f38.js";import{L as ee}from"./QueryEngine.a50ba40b.js";import{T as te,L as se,O as ie}from"./geojson.b8459412.js";import{u as ne,i as re,n as ae}from"./clientSideDefaults.8e508139.js";import{y as oe,d as w,c as q,u as E,h as O}from"./sourceUtils.a9020e5d.js";import"./PooledRBush.02ffbd0a.js";import"./optimizedFeatureQueryEngineAdapter.f6867afe.js";import"./centroid.d0af71ad.js";import"./json.2d0d6862.js";import"./WhereClause.23a6eab5.js";import"./QueryEngineCapabilities.83e56447.js";import"./utils.d8f3ec1d.js";import"./ClassBreaksDefinition.ad6c5f16.js";import"./spatialQuerySupport.88aac535.js";const ue={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}};class qe{constructor(){this._queryEngine=null,this._snapshotFeatures=async e=>{const t=await this._fetch(e);return this._createFeatures(t)}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=this._fieldsIndex=this._createDefaultAttributes=null}async load(e,t={}){this.loadOptions={url:e.url,customParameters:e.customParameters};const i=[];await this._checkProjection(e.spatialReference);let n=null;e.url&&(n=await this._fetch(t==null?void 0:t.signal));const a=te(n,{geometryType:e.geometryType}),o=e.fields||a.fields||[],l=e.hasZ!=null?e.hasZ:a.hasZ,d=a.geometryType,c=e.objectIdField||a.objectIdFieldName||"__OBJECTID",y=e.spatialReference||_;let s=e.timeInfo;o===a.fields&&a.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:a.unknownFields}});let u=o.find(r=>r.name===c);u?(u.type!=="esriFieldTypeString"&&(u.type="esriFieldTypeOID"),u.editable=!1,u.nullable=!1):(u={alias:c,name:c,type:a.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},o.unshift(u));const h={};for(const r of o){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new I("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!Z.jsonValues.includes(r.type))throw new I("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==u.name){const g=M(r);g!==void 0&&(h[r.name]=g)}}this._fieldsIndex=new z(o);const m=this._fieldsIndex.requiredFields.indexOf(u);if(m>-1&&this._fieldsIndex.requiredFields.splice(m,1),s){if(s.startTimeField){const r=this._fieldsIndex.get(s.startTimeField);r?(s.startTimeField=r.name,r.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const r=this._fieldsIndex.get(s.endTimeField);r?(s.endTimeField=r.name,r.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const r=this._fieldsIndex.get(s.trackIdField);r?s.trackIdField=r.name:(s.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.startTimeField||s.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=null)}const k=d?ne(d):null,f={warnings:i,featureErrors:[],layerDefinition:C(j({},ue),{drawingInfo:k,templates:re(h),extent:null,geometryType:d,objectIdField:c,fields:o,hasZ:!!l,timeInfo:s})};this._queryEngine=new ee({fields:o,geometryType:d,hasM:!1,hasZ:l,objectIdField:c,spatialReference:y,timeInfo:s,featureStore:new X({geometryType:d,hasM:!1,hasZ:l}),cacheSpatialQueries:!0}),this._createDefaultAttributes=ae(h,c);const x=await this._createFeatures(n);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,x);const D=this._normalizeFeatures(x,f.warnings,f.featureErrors);if(this._queryEngine.featureStore.addMany(D),f.layerDefinition.extent=this._queryEngine.fullExtent,f.layerDefinition.timeInfo){const{start:r,end:g}=this._queryEngine.timeExtent;f.layerDefinition.timeInfo.timeExtent=[r,g]}return f}async applyEdits(e){const{spatialReference:t,geometryType:i}=this._queryEngine;return await Promise.all([oe(t,i),b(e.adds,t),b(e.updates,t)]),await this._waitSnapshotComplete(),this._applyEdits(e)}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this.loadOptions.customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=N(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);const n=this._normalizeFeatures(i);n&&this._queryEngine.featureStore.addMany(n)},i=>{this._queryEngine.featureStore.clear(),B(i)||L.getLogger("esri.layers.GeoJSONLayer").error(new I("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),await this._waitSnapshotComplete(),{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent}}async _createFeatures(e){const{geometryType:t,hasZ:i,objectIdField:n}=this._queryEngine,a=se(e,{geometryType:t,hasZ:i,objectIdField:n});if(!W(this._queryEngine.spatialReference,_))for(const o of a)F(o.geometry)&&(o.geometry=J(T(U(o.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return a}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(e){const{url:t,customParameters:i}=this.loadOptions,n=(await V(t,{responseType:"json",query:j({},i),signal:e})).data;return await ie(n),n}_normalizeFeatures(e,t,i){const{objectIdField:n}=this._queryEngine,a=[];for(const o of e){const l=this._createDefaultAttributes(),d=w(this._fieldsIndex,l,o.attributes,!0,t);d?i==null||i.push(d):(this._assignObjectId(l,o.attributes,!0),o.attributes=l,o.objectId=l[n],a.push(o))}return a}_applyEdits(e){const{adds:t,updates:i,deletes:n}=e,a={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(a,t),i&&i.length&&this._applyUpdateEdits(a,i),n&&n.length){for(const o of n)a.deleteResults.push(q(o));this._queryEngine.featureStore.removeManyById(n)}return{extent:this._queryEngine.fullExtent,timeExtent:this._queryEngine.timeExtent,featureEditResults:a}}_applyAddEdits(e,t){const{addResults:i}=e,{geometryType:n,hasM:a,hasZ:o,objectIdField:l,spatialReference:d,featureStore:c}=this._queryEngine,y=[];for(const s of t){if(s.geometry&&n!==$(s.geometry)){i.push(E("Incorrect geometry type."));continue}const u=this._createDefaultAttributes(),h=w(this._fieldsIndex,u,s.attributes);if(h)i.push(h);else{if(this._assignObjectId(u,s.attributes),s.attributes=u,s.uid!=null){const m=s.attributes[l];e.uidToObjectId[s.uid]=m}F(s.geometry)&&(s.geometry=T(O(s.geometry,d),s.geometry.spatialReference,d)),y.push(s),i.push(q(s.attributes[l]))}}c.addMany(H([],y,n,o,a,l))}_applyUpdateEdits({updateResults:e},t){const{geometryType:i,hasM:n,hasZ:a,objectIdField:o,spatialReference:l,featureStore:d}=this._queryEngine;for(const c of t){const{attributes:y,geometry:s}=c,u=y&&y[o];if(u==null){e.push(E(`Identifier field ${o} missing`));continue}if(!d.has(u)){e.push(E(`Feature with object id ${u} missing`));continue}const h=K(d.getFeature(u),i,a,n);if(F(s)){if(i!==$(s)){e.push(E("Incorrect geometry type."));continue}h.geometry=T(O(s,l),s.spatialReference,l)}if(y){const m=w(this._fieldsIndex,h.attributes,y);if(m){e.push(m);continue}}d.add(Y(h,i,a,n,o)),e.push(q(u))}}_createObjectIdGenerator(e,t){const i=e.fieldsIndex.get(e.objectIdField);if(i.type==="esriFieldTypeString")return()=>i.name+"-"+Date.now().toString(16);let n=Number.NEGATIVE_INFINITY;for(const a of t)a.objectId&&(n=Math.max(n,a.objectId));return n=Math.max(0,n)+1,()=>n++}_assignObjectId(e,t,i=!1){const n=this._queryEngine.objectIdField;e[n]=i&&n in t?t[n]:this._objectIdGenerator()}async _checkProjection(e){try{await b(_,e)}catch{throw new I("geojson-layer","Projection not supported")}}}export{qe as default};