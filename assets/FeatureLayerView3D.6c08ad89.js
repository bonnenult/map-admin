import{aX as t,aY as r,aZ as a,j6 as s,c4 as i,cn as o}from"./vendor.c8f3cc8c.js";import{x as p}from"./FeatureLayerViewBase3D.c4d5c315.js";import"./EventedSet.787fa9eb.js";import"./Graphics3DFeatureLikeLayerView.9eb6815a.js";import"./Graphics3DScaleVisibility.02cae195.js";import"./rendererConversion.609a1f23.js";import"./optimizedFeatureQueryEngineAdapter.f6867afe.js";import"./centroid.d0af71ad.js";import"./PooledRBush.02ffbd0a.js";import"./Graphics3DObjectStates.598bf630.js";import"./QueryEngine.a50ba40b.js";import"./WhereClause.23a6eab5.js";import"./projectionSupport.a9ad5f38.js";import"./json.2d0d6862.js";import"./QueryEngineCapabilities.83e56447.js";import"./utils.d8f3ec1d.js";import"./ClassBreaksDefinition.ad6c5f16.js";import"./spatialQuerySupport.88aac535.js";import"./Graphics3DFrustumVisibility.58187526.js";import"./attributeUtils.a1b96ab7.js";import"./projectExtentUtils.32bc4bc4.js";import"./FeatureLayerView.0b5ae637.js";import"./popupUtils.37c6f82e.js";import"./RefreshableLayerView.552e5409.js";let e=class extends p{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=s()}initialize(){this.layer.infoFor3D&&!this.direct3DObjectFeatureLayerDisplayEnabled&&this.addResolvingPromise(Promise.reject(new i("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${this.layer.geometryType}`))),this.layer.geometryType!=="mesh"||o(this.layer.spatialReference,this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new i("layerview:spatial-reference-incompatible","The spatial references of the feature layer layer is incompatible with the spatial reference of the view")))}};t([r({constructOnly:!0})],e.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),t([r()],e.prototype,"layer",void 0),e=t([a("esri.views.3d.layers.FeatureLayerView3D")],e);const C=e;export{C as default};