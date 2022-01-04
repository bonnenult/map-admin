import{K as S}from"./arcadeUtils.19b8ccf5.js";import{p7 as R,oD as i,pg as o,o9 as c,oL as y,oP as A,oG as d}from"./vendor.c8f3cc8c.js";import{g as h,d as l}from"./SpatialFilter.58c174f3.js";import{crosses as F,touches as v,within as b,overlaps as D,contains as j,intersects as w,relate as k}from"./geometryEngineAsync.5581ce40.js";import"./FeatureSetReader.2ffb1ded.js";import"./centroid.d0af71ad.js";import"./WhereClause.23a6eab5.js";function p(t){return t instanceof c}function u(t,a,r,f,m){return m(t,a,function(n,E,e){if(e.length<2)return f(new Error("Missing Parameters"));if((e=R(e))[0]===null&&e[1]===null)return i(!1);if(o(e[0]))return e[1]instanceof c?i(new h({parentfeatureset:e[0],relation:r,relationGeom:e[1]})):e[1]===null?i(new l({parentfeatureset:e[0]})):f("Spatial Relation cannot accept this parameter type");if(p(e[0])){if(p(e[1])){let s=null;switch(r){case"esriSpatialRelEnvelopeIntersects":s=w(S(e[0]),S(e[1]));break;case"esriSpatialRelIntersects":s=w(e[0],e[1]);break;case"esriSpatialRelContains":s=j(e[0],e[1]);break;case"esriSpatialRelOverlaps":s=D(e[0],e[1]);break;case"esriSpatialRelWithin":s=b(e[0],e[1]);break;case"esriSpatialRelTouches":s=v(e[0],e[1]);break;case"esriSpatialRelCrosses":s=F(e[0],e[1])}return s!==null?s:y(new Error("Unrecognised Relationship"))}return o(e[1])?i(new h({parentfeatureset:e[1],relation:r,relationGeom:e[0]})):e[1]===null?i(!1):f("Spatial Relation cannot accept this parameter type")}return e[0]!==null?f("Spatial Relation cannot accept this parameter type"):o(e[1])?i(new l({parentfeatureset:e[1]})):e[1]instanceof c||e[1]===null?i(!1):void 0})}function P(t){t.mode==="async"&&(t.functions.intersects=function(a,r){return u(a,r,"esriSpatialRelIntersects",t.failDefferred,t.standardFunctionAsync)},t.functions.envelopeintersects=function(a,r){return u(a,r,"esriSpatialRelEnvelopeIntersects",t.failDefferred,t.standardFunctionAsync)},t.signatures.push({name:"envelopeintersects",min:"2",max:"2"}),t.functions.contains=function(a,r){return u(a,r,"esriSpatialRelContains",t.failDefferred,t.standardFunctionAsync)},t.functions.overlaps=function(a,r){return u(a,r,"esriSpatialRelOverlaps",t.failDefferred,t.standardFunctionAsync)},t.functions.within=function(a,r){return u(a,r,"esriSpatialRelWithin",t.failDefferred,t.standardFunctionAsync)},t.functions.touches=function(a,r){return u(a,r,"esriSpatialRelTouches",t.failDefferred,t.standardFunctionAsync)},t.functions.crosses=function(a,r){return u(a,r,"esriSpatialRelCrosses",t.failDefferred,t.standardFunctionAsync)},t.functions.relate=function(a,r){return t.standardFunctionAsync(a,r,function(f,m,n){if(n=R(n),A(n,3,3),p(n[0])&&p(n[1]))return k(n[0],n[1],d(n[2]));if(n[0]instanceof c&&n[1]===null||n[1]instanceof c&&n[0]===null)return!1;if(o(n[0])&&n[1]===null)return new l({parentfeatureset:n[0]});if(o(n[1])&&n[0]===null)return new l({parentfeatureset:n[1]});if(o(n[0])&&n[1]instanceof c)return n[0].relate(n[1],d(n[2]));if(o(n[1])&&n[0]instanceof c)return n[1].relate(n[0],d(n[2]));if(n[0]===null&&n[1]===null)return!1;throw new Error("Illegal Argument")})})}export{P as registerFunctions};