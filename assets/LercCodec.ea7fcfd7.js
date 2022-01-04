import{nF as Y}from"./vendor.c8f3cc8c.js";var A={};A.defaultNoDataValue=Y(-1/0),A.decode=function(i,t){var f=(t=t||{}).encodedMaskData||t.encodedMaskData===null,e=T(i,t.inputOffset||0,f),c=t.noDataValue!=null?Y(t.noDataValue):A.defaultNoDataValue,n=X(e,t.pixelType||Float32Array,t.encodedMaskData,c,t.returnMask),s={width:e.width,height:e.height,pixelData:n.resultPixels,minValue:e.pixels.minValue,maxValue:e.pixels.maxValue,noDataValue:c};return n.resultMask&&(s.maskData=n.resultMask),t.returnEncodedMask&&e.mask&&(s.encodedMaskData=e.mask.bitset?e.mask.bitset:null),t.returnFileInfo&&(s.fileInfo=E(e,c),t.computeUsedBitDepths&&(s.fileInfo.bitDepths=S(e))),s};var X=function(i,t,f,e,c){var n,s,d=0,u=i.pixels.numBlocksX,h=i.pixels.numBlocksY,y=Math.floor(i.width/u),v=Math.floor(i.height/h),w=2*i.maxZError;f=f||(i.mask?i.mask.bitset:null),n=new t(i.width*i.height),c&&f&&(s=new Uint8Array(i.width*i.height));for(var g,k,x=new Float32Array(y*v),M=0;M<=h;M++){var B=M!==h?v:i.height%h;if(B!==0)for(var I=0;I<=u;I++){var r=I!==u?y:i.width%u;if(r!==0){var P,a,o,p,l=M*i.width*v+I*y,U=i.width-r,m=i.pixels.blocks[d];if(m.encoding<2?(m.encoding===0?P=m.rawData:(b(m.stuffedData,m.bitsPerPixel,m.numValidPixels,m.offset,w,x,i.pixels.maxValue),P=x),a=0):o=m.encoding===2?0:m.offset,f)for(k=0;k<B;k++){for(7&l&&(p=f[l>>3],p<<=7&l),g=0;g<r;g++)7&l||(p=f[l>>3]),128&p?(s&&(s[l]=1),n[l++]=m.encoding<2?P[a++]:o):(s&&(s[l]=0),n[l++]=e),p<<=1;l+=U}else if(m.encoding<2)for(k=0;k<B;k++){for(g=0;g<r;g++)n[l++]=P[a++];l+=U}else for(k=0;k<B;k++)if(n.fill)n.fill(o,l,l+r),l+=r+U;else{for(g=0;g<r;g++)n[l++]=o;l+=U}if(m.encoding===1&&a!==m.numValidPixels)throw"Block and Mask do not match";d++}}}return{resultPixels:n,resultMask:s}},E=function(i,t){return{fileIdentifierString:i.fileIdentifierString,fileVersion:i.fileVersion,imageType:i.imageType,height:i.height,width:i.width,maxZError:i.maxZError,eofOffset:i.eofOffset,mask:i.mask?{numBlocksX:i.mask.numBlocksX,numBlocksY:i.mask.numBlocksY,numBytes:i.mask.numBytes,maxValue:i.mask.maxValue}:null,pixels:{numBlocksX:i.pixels.numBlocksX,numBlocksY:i.pixels.numBlocksY,numBytes:i.pixels.numBytes,maxValue:i.pixels.maxValue,minValue:i.pixels.minValue,noDataValue:t}}},S=function(i){for(var t=i.pixels.numBlocksX*i.pixels.numBlocksY,f={},e=0;e<t;e++){var c=i.pixels.blocks[e];c.encoding===0?f.float32=!0:c.encoding===1?f[c.bitsPerPixel]=!0:f[0]=!0}return Object.keys(f)},T=function(i,t,f){var e={},c=new Uint8Array(i,t,10);if(e.fileIdentifierString=String.fromCharCode.apply(null,c),e.fileIdentifierString.trim()!="CntZImage")throw"Unexpected file identifier string: "+e.fileIdentifierString;t+=10;var n=new DataView(i,t,24);if(e.fileVersion=n.getInt32(0,!0),e.imageType=n.getInt32(4,!0),e.height=n.getUint32(8,!0),e.width=n.getUint32(12,!0),e.maxZError=n.getFloat64(16,!0),t+=24,!f)if(n=new DataView(i,t,16),e.mask={},e.mask.numBlocksY=n.getUint32(0,!0),e.mask.numBlocksX=n.getUint32(4,!0),e.mask.numBytes=n.getUint32(8,!0),e.mask.maxValue=n.getFloat32(12,!0),t+=16,e.mask.numBytes>0){var s=new Uint8Array(Math.ceil(e.width*e.height/8)),d=(n=new DataView(i,t,e.mask.numBytes)).getInt16(0,!0),u=2,h=0;do{if(d>0)for(;d--;)s[h++]=n.getUint8(u++);else{var y=n.getUint8(u++);for(d=-d;d--;)s[h++]=y}d=n.getInt16(u,!0),u+=2}while(u<e.mask.numBytes);if(d!==-32768||h<s.length)throw"Unexpected end of mask RLE encoding";e.mask.bitset=s,t+=e.mask.numBytes}else(e.mask.numBytes|e.mask.numBlocksY|e.mask.maxValue)==0&&(s=new Uint8Array(Math.ceil(e.width*e.height/8)),e.mask.bitset=s);n=new DataView(i,t,16),e.pixels={},e.pixels.numBlocksY=n.getUint32(0,!0),e.pixels.numBlocksX=n.getUint32(4,!0),e.pixels.numBytes=n.getUint32(8,!0),e.pixels.maxValue=n.getFloat32(12,!0),t+=16;var v=e.pixels.numBlocksX,w=e.pixels.numBlocksY,g=v+(e.width%v>0?1:0),k=w+(e.height%w>0?1:0);e.pixels.blocks=new Array(g*k);for(var x=1e9,M=0,B=0;B<k;B++)for(var I=0;I<g;I++){var r=0,P=i.byteLength-t;n=new DataView(i,t,Math.min(10,P));var a={};e.pixels.blocks[M++]=a;var o=n.getUint8(0);if(r++,a.encoding=63&o,a.encoding>3)throw"Invalid block encoding ("+a.encoding+")";if(a.encoding!==2){if(o!==0&&o!==2){if(o>>=6,a.offsetType=o,o===2)a.offset=n.getInt8(1),r++;else if(o===1)a.offset=n.getInt16(1,!0),r+=2;else{if(o!==0)throw"Invalid block offset type";a.offset=n.getFloat32(1,!0),r+=4}if(x=Math.min(a.offset,x),a.encoding===1)if(o=n.getUint8(r),r++,a.bitsPerPixel=63&o,o>>=6,a.numValidPixelsType=o,o===2)a.numValidPixels=n.getUint8(r),r++;else if(o===1)a.numValidPixels=n.getUint16(r,!0),r+=2;else{if(o!==0)throw"Invalid valid pixel count type";a.numValidPixels=n.getUint32(r,!0),r+=4}}var p;if(t+=r,a.encoding!=3){if(a.encoding===0){var l=(e.pixels.numBytes-1)/4;if(l!==Math.floor(l))throw"uncompressed block has invalid length";p=new ArrayBuffer(4*l),new Uint8Array(p).set(new Uint8Array(i,t,4*l));for(var U=new Float32Array(p),m=0;m<U.length;m++)x=Math.min(x,U[m]);a.rawData=U,t+=4*l}else if(a.encoding===1){var V=Math.ceil(a.numValidPixels*a.bitsPerPixel/8),F=Math.ceil(V/4);p=new ArrayBuffer(4*F),new Uint8Array(p).set(new Uint8Array(i,t,V)),a.stuffedData=new Uint32Array(p),t+=V}}}else t++,x=Math.min(x,0)}return e.pixels.minValue=x,e.eofOffset=t,e},b=function(i,t,f,e,c,n,s){var d,u,h,y=(1<<t)-1,v=0,w=0,g=Math.ceil((s-e)/c),k=4*i.length-Math.ceil(t*f/8);for(i[i.length-1]<<=8*k,d=0;d<f;d++){if(w===0&&(h=i[v++],w=32),w>=t)u=h>>>w-t&y,w-=t;else{var x=t-w;u=(h&y)<<x&y,u+=(h=i[v++])>>>(w=32-x)}n[d]=u<g?e+u*c:s}return n};const O=A.decode;export{O as r};