var X=Object.defineProperty,z=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var k=(n,e,t)=>e in n?X(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,d=(n,e)=>{for(var t in e||(e={}))q.call(e,t)&&k(n,t,e[t]);if($)for(var t of $(e))_.call(e,t)&&k(n,t,e[t]);return n},T=(n,e)=>z(n,Y(e));import{iw as g,o1 as N,cT as S,o2 as H,c4 as y,o3 as J,mN as R,o4 as A,ar as G,b5 as E,bR as Q,eC as B,ij as x,eF as K,hu as Z,c6 as ee,j2 as te,b0 as D}from"./vendor.c8f3cc8c.js";import{i as ne}from"./geojson.b8459412.js";import{n as C,o as v}from"./xmlUtils.9790bce4.js";function re(n){var e;return(e=se(n))!=null?e:ae(n)}function ae(n){const e=new Date(n).getTime();return Number.isNaN(e)?null:e}function se(n){var e,t,a,r;const s=oe.exec(n);if(!s)return null;const o=s.groups,i=+o.year,u=+o.month-1,l=+o.day,p=+((e=o.hours)!=null?e:"0"),c=+((t=o.minutes)!=null?t:"0"),m=+((a=o.seconds)!=null?a:"0");if(p>23||c>59||m>59)return null;const f=(r=o.ms)!=null?r:"0",w=f?+f.padEnd(3,"0").substring(0,3):0;let b;if(o.isUTC)b=Date.UTC(i,u,l,p,c,m,w);else if(o.offsetSign){const V=+o.offsetHours,W=+o.offsetMinutes;b=6e4*(o.offsetSign==="+"?-1:1)*(60*V+W)+Date.UTC(i,u,l,p,c,m,w)}else b=new Date(i,u,l,p,c,m,w).getTime();return Number.isNaN(b)?null:b}const oe=/^(?:(?<year>-?\d{4,})-(?<month>\d{2})-(?<day>\d{2}))(?:T(?<hours>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?:\.(?<ms>\d+))?)?(?:(?<isUTC>Z)|(?:(?<offsetSign>\+|-)(?<offsetHours>\d{2}):(?<offsetMinutes>\d{2})))?$/,P="xlink:href",h="2.0.0",U="__esri_wfs_id__",ie="wfs-layer:getWFSLayerTypeInfo-error",ue="wfs-layer:empty-service",j="wfs-layer:feature-type-not-found",le="wfs-layer:geojson-not-supported",pe="wfs-layer:kvp-encoding-not-supported",ce="wfs-layer:malformed-json",I="wfs-layer:unknown-geometry-type",me="wfs-layer:unknown-field-type",ye="wfs-layer:unsupported-spatial-reference",de="wfs-layer:unsupported-wfs-version";async function je(n,e){const t=fe((await S(n,{responseType:"text",query:d({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:h},e==null?void 0:e.customParameters),signal:e==null?void 0:e.signal})).data);return be(n,t),t}function fe(n){const e=O(n);Re(e),L(e);const t=e.firstElementChild,a=H(Te(t));return{operations:we(t),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}const ge=new Set(["json","application/json","geojson","application/json; subtype=geojson"]);function we(n){let e=!1;const t={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}};if(v(n,{OperationsMetadata:{Operation:a=>{switch(a.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:r=>{t.GetCapabilities.url=r.getAttribute(P)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:r=>{t.DescribeFeatureType.url=r.getAttribute(P)}}}};case"GetFeature":return{DCP:{HTTP:{Get:r=>{t.GetFeature.url=r.getAttribute(P)}}},Parameter:r=>{if(r.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:s=>{const o=s.textContent;ge.has(o.toLowerCase())&&(t.GetFeature.outputFormat=o)}}}}}}},Constraint:a=>{switch(a.getAttribute("name")){case"KVPEncoding":return{DefaultValue:r=>{e=r.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:r=>{t.GetFeature.supportsPagination=r.textContent.toLowerCase()==="true"}}}}}}),!e)throw new y(pe,"WFS service doesn't support key/value pair (KVP) encoding");if(E(t.GetFeature.outputFormat))throw new y(le,"WFS service doesn't support GeoJSON output format");return t}function be(n,e){J(n)&&(R(n,e.operations.DescribeFeatureType.url,!0)&&(e.operations.DescribeFeatureType.url=A(e.operations.DescribeFeatureType.url)),R(n,e.operations.GetFeature.url,!0)&&(e.operations.GetFeature.url=A(e.operations.GetFeature.url)))}function Te(n){return C(n,{FeatureTypeList:{FeatureType:e=>{const t={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",supportedSpatialReferences:[]},a=new Set([4326]),r=s=>{var o,i;const u=parseInt((o=s.textContent.match(/(?<wkid>\d+$)/i))==null||(i=o.groups)==null?void 0:i.wkid,10);Number.isNaN(u)||a.add(u)};return v(e,{Name:s=>{const{name:o,prefix:i}=F(s.textContent);t.typeName=`${i}:${o}`,t.name=o,t.namespacePrefix=i,t.namespaceUri=s.lookupNamespaceURI(i)},Abstract:s=>{t.description=s.textContent},Title:s=>{t.title=s.textContent},WGS84BoundingBox:s=>{t.extent=he(s)},DefaultSRS:r,DefaultCRS:r,OtherSRS:r,OtherCRS:r}),t.title||(t.title=t.name),t.supportedSpatialReferences.push(...a),t}}})}function he(n){let e,t,a,r;for(const s of n.children)switch(s.localName){case"LowerCorner":[e,t]=s.textContent.split(" ").map(o=>Number.parseFloat(o));break;case"UpperCorner":[a,r]=s.textContent.split(" ").map(o=>Number.parseFloat(o))}return{xmin:e,ymin:t,xmax:a,ymax:r,spatialReference:x}}function Fe(n,e,t){return N(n,a=>t?a.name===e&&a.namespaceUri===t:a.typeName===e||a.name===e)}async function Ie(n,e,t,a={}){var r;const{featureType:s,extent:o}=await Se(n,e,t,a),{fields:i,geometryType:u,swapXY:l,objectIdField:p,geometryField:c}=await xe(n,s.typeName,a);return{url:n.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:i,geometryField:c,geometryType:u,objectIdField:p,spatialReference:(r=a.spatialReference)!=null?r:G.WGS84,extent:o,swapXY:l,wfsCapabilities:n,customParameters:a.customParameters}}async function Se(n,e,t,a={}){const{spatialReference:r=G.WGS84}=a,s=n.readFeatureTypes(),o=e?Fe(s,e,t):s.next().value;if(E(o))throw e?new y(j,`The type '${e}' could not be found in the service`):new y(ue,"The service is empty");let i=new Q(T(d({},o.extent),{spatialReference:r}));if(!B(r,x))try{await K(x,r,void 0,a),i=Z(i,x)}catch{throw new y(ye,"Projection not supported")}return{extent:i,spatialReference:r,featureType:o}}async function xe(n,e,t={}){const[a,r]=await ee([Ne(n.operations.DescribeFeatureType.url,e,t),ve(n,e,t)]);if(a.error||r.error)throw new y(ie,`An error occurred while getting info about the feature type '${e}'`,{error:a.error||r.error});const{fields:s,errors:o}=a.value,i=a.value.geometryType||r.value.geometryType,u=r.value.swapXY;if(E(i))throw new y(I,`The geometry type could not be determined for type '${e}`,{typeName:e,geometryType:i,fields:s,errors:o});return T(d({},Ce(s)),{geometryType:i,swapXY:u})}function Ce(n){var e;const t=n.find(r=>r.type==="geometry");let a=n.find(r=>r.type==="oid");return n=n.filter(r=>r.type!=="geometry"),a||(a=new g({name:U,type:"oid",alias:U}),n.unshift(a)),{geometryField:(e=t==null?void 0:t.name)!=null?e:null,objectIdField:a.name,fields:n}}async function ve(n,e,t={}){var a;let r,s=!1;const[o,i]=await Promise.all([ke(n.operations.GetFeature.url,e,n.operations.GetFeature.outputFormat,T(d({},t),{count:1})),S(n.operations.GetFeature.url,{responseType:"text",query:M(e,void 0,T(d({},t),{count:1})),signal:t==null?void 0:t.signal})]),u=o.type==="FeatureCollection"&&((a=o.features[0])==null?void 0:a.geometry);if(u){let l;switch(r=te.fromJSON(ne(u.type)),u.type){case"Point":l=u.coordinates;break;case"LineString":case"MultiPoint":l=u.coordinates[0];break;case"MultiLineString":case"Polygon":l=u.coordinates[0][0];break;case"MultiPolygon":l=u.coordinates[0][0][0]}const p=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(i.data);if(p){const c=l[0].toFixed(3),m=l[1].toFixed(3),f=parseFloat(p[1]).toFixed(3);c===parseFloat(p[2]).toFixed(3)&&m===f&&(s=!0)}}return{geometryType:r,swapXY:s}}async function Ne(n,e,t){return Ee(e,(await S(n,{responseType:"text",query:d({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:h,TYPENAME:e},t==null?void 0:t.customParameters),signal:t==null?void 0:t.signal})).data)}function Ee(n,e){const{name:t}=F(n),a=O(e);L(a);const r=N(C(a.firstElementChild,{element:s=>({name:s.getAttribute("name"),typeName:F(s.getAttribute("type")).name})}),({name:s})=>s===t);if(D(r)){const s=N(C(a.firstElementChild,{complexType:o=>o}),o=>o.getAttribute("name")===r.typeName);if(D(s))return $e(s)}throw new y(j,`Type '${n}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}const Pe=new Set(["objectid","fid"]);function $e(n){var e,t;const a=[],r=[];let s;const o=C(n,{complexContent:{extension:{sequence:{element:i=>i}}}});for(const i of o){const u=i.getAttribute("name");if(!u)continue;let l,p;if(i.hasAttribute("type")?l=F(i.getAttribute("type")).name:v(i,{simpleType:{restriction:f=>(l=F(f.getAttribute("base")).name,{maxLength:w=>{p=+w.getAttribute("value")}})}}),!l)continue;const c=i.getAttribute("nillable")==="true";let m=!1;switch(l.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":r.push(new g({name:u,alias:u,type:"integer",nullable:c}));break;case"float":case"double":case"decimal":r.push(new g({name:u,alias:u,type:"double",nullable:c}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":r.push(new g({name:u,alias:u,type:"string",nullable:c,length:(e=p)!=null?e:255}));break;case"datetime":case"date":r.push(new g({name:u,alias:u,type:"date",nullable:c,length:(t=p)!=null?t:36}));break;case"pointpropertytype":s="point",m=!0;break;case"multipointpropertytype":s="multipoint",m=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":s="polyline",m=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":s="polygon",m=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":m=!0,a.push(new y(I,`geometry type '${l}' is not supported`,{type:new XMLSerializer().serializeToString(n)}));break;default:a.push(new y(me,`Unknown field type '${l}'`,{type:new XMLSerializer().serializeToString(n)}))}m&&r.push(new g({name:u,alias:u,type:"geometry",nullable:c}))}for(const i of r)if(i.type==="integer"&&!i.nullable&&Pe.has(i.name.toLowerCase())){i.type="oid";break}return{geometryType:s,fields:r,errors:a}}async function ke(n,e,t,a){let{data:r}=await S(n,{responseType:"text",query:M(e,t,a),signal:a==null?void 0:a.signal});r=r.replace(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{var s;if(a!=null&&(s=a.dateFields)!=null&&s.length){const o=new Set(a.dateFields);return JSON.parse(r,(i,u)=>o.has(i)?re(u):u)}return JSON.parse(r)}catch(o){throw new y(ce,"Error while parsing the\xA0response",{response:r,error:o})}}function M(n,e,t){return d({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:h,TYPENAMES:n,OUTPUTFORMAT:e,SRSNAME:"EPSG:4326",STARTINDEX:t==null?void 0:t.startIndex,COUNT:t==null?void 0:t.count},t==null?void 0:t.customParameters)}function O(n){return new DOMParser().parseFromString(n.trim(),"text/xml")}function F(n){const[e,t]=n.split(":");return{prefix:t?e:"",name:t!=null?t:e}}function Re(n){const e=n.firstElementChild.getAttribute("version");if(e&&e!==h)throw new y(de,`Unsupported WFS version ${e}. Supported version: ${h}`)}function L(n){let e,t;if(v(n.firstElementChild,{Exception:a=>(e=a.getAttribute("exceptionCode"),{ExceptionText:r=>{t=r.textContent}})}),e)throw new y(`wfs-layer:${e}`,t)}export{je as D,ke as K,Fe as W,Ie as X,U as v,Ce as z};