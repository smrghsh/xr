var Ub=Object.defineProperty;var Bb=(zi,Ht,yi)=>Ht in zi?Ub(zi,Ht,{enumerable:!0,configurable:!0,writable:!0,value:yi}):zi[Ht]=yi;var Ju=(zi,Ht,yi)=>(Bb(zi,typeof Ht!="symbol"?Ht+"":Ht,yi),yi);var Hb=(zi,Ht)=>()=>(Ht||zi((Ht={exports:{}}).exports,Ht),Ht.exports),Gb=Hb((zi,Ht)=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
* @license
* Copyright 2010-2022 Three.js Authors
* SPDX-License-Identifier: MIT
*/const yi="148",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ku=0,Ml=1,Qu=2,El=1,ed=2,pn=3,ki=0,$t=1,es=2,ts=3,Fi=0,Rr=1,fa=2,Tl=3,Al=4,td=5,Lr=100,id=101,rd=102,Cl=103,Rl=104,nd=200,sd=201,ad=202,od=203,Ll=204,Pl=205,ld=206,cd=207,hd=208,ud=209,dd=210,pd=0,md=1,fd=2,_a=3,_d=4,gd=5,wd=6,vd=7,Il=0,bd=1,yd=2,xi=0,xd=1,Sd=2,Md=3,Ed=4,Td=5,Dl=300,Pr=301,Ir=302,ga=303,wa=304,is=306,Dr=1e3,Zt=1001,rs=1002,vt=1003,va=1004,ns=1005,Gt=1006,Nl=1007,Ki=1008,Qi=1009,Ad=1010,Cd=1011,Ol=1012,Rd=1013,er=1014,Ui=1015,mn=1016,Ld=1017,Pd=1018,Nr=1020,Id=1021,Dd=1022,Kt=1023,Nd=1024,Od=1025,tr=1026,Or=1027,zd=1028,kd=1029,Fd=1030,Ud=1031,Bd=1033,ba=33776,ya=33777,xa=33778,Sa=33779,zl=35840,kl=35841,Fl=35842,Ul=35843,Hd=36196,Bl=37492,Hl=37496,Gl=37808,Vl=37809,Wl=37810,jl=37811,Xl=37812,ql=37813,Yl=37814,Jl=37815,$l=37816,Zl=37817,Kl=37818,Ql=37819,ec=37820,tc=37821,ic=36492,fn=2300,zr=2301,Ma=2302,rc=2400,nc=2401,sc=2402,Gd=2500,Vd=1,ac=2,ir=3e3,je=3001,Wd=3200,jd=3201,oc=0,Xd=1,di="srgb",ss="srgb-linear",Ea=7680,qd=519,Ta=35044,lc="300 es",Aa=1035;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let r=0,n=i.length;r<n;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cc=1234567;const _n=Math.PI/180,gn=180/Math.PI;function Qt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Ca(s,e){return(s%e+e)%e}function Yd(s,e,t,i,r){return i+(s-e)*(r-i)/(t-e)}function Jd(s,e,t){return s!==e?(t-s)/(e-s):0}function wn(s,e,t){return(1-t)*s+t*e}function $d(s,e,t,i){return wn(s,e,1-Math.exp(-t*i))}function Zd(s,e=1){return e-Math.abs(Ca(s,e*2)-e)}function Kd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Qd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ep(s,e){return s+Math.floor(Math.random()*(e-s+1))}function tp(s,e){return s+Math.random()*(e-s)}function ip(s){return s*(.5-Math.random())}function rp(s){s!==void 0&&(cc=s);let e=cc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function np(s){return s*_n}function sp(s){return s*gn}function Ra(s){return(s&s-1)===0&&s!==0}function hc(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function as(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ap(s,e,t,i,r){const n=Math.cos,a=Math.sin,o=n(t/2),l=a(t/2),c=n((e+i)/2),h=a((e+i)/2),u=n((e-i)/2),d=a((e-i)/2),f=n((i-e)/2),w=a((i-e)/2);switch(r){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*w,l*f,o*c);break;case"YXY":s.set(l*f,o*h,l*w,o*c);break;case"ZYZ":s.set(l*w,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Si(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function $e(s,e){switch(e.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var op=Object.freeze({__proto__:null,DEG2RAD:_n,RAD2DEG:gn,generateUUID:Qt,clamp:bt,euclideanModulo:Ca,mapLinear:Yd,inverseLerp:Jd,lerp:wn,damp:$d,pingpong:Zd,smoothstep:Kd,smootherstep:Qd,randInt:ep,randFloat:tp,randFloatSpread:ip,seededRandom:rp,degToRad:np,radToDeg:sp,isPowerOfTwo:Ra,ceilPowerOfTwo:hc,floorPowerOfTwo:as,setQuaternionFromProperEuler:ap,normalize:$e,denormalize:Si});class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),n=this.x-e.x,a=this.y-e.y;return this.x=n*i-a*r+e.x,this.y=n*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,n,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=n,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],w=i[8],_=r[0],m=r[3],g=r[6],y=r[1],v=r[4],x=r[7],S=r[2],L=r[5],O=r[8];return n[0]=a*_+o*y+l*S,n[3]=a*m+o*v+l*L,n[6]=a*g+o*x+l*O,n[1]=c*_+h*y+u*S,n[4]=c*m+h*v+u*L,n[7]=c*g+h*x+u*O,n[2]=d*_+f*y+w*S,n[5]=d*m+f*v+w*L,n[8]=d*g+f*x+w*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*n*h+i*o*l+r*n*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*n,f=c*n-a*l,w=t*u+i*d+r*f;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/w;return e[0]=u*_,e[1]=(r*c-h*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(h*t-r*l)*_,e[5]=(r*n-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*n)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,n,a,o){const l=Math.cos(n),c=Math.sin(n);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(La.makeScale(e,t)),this}rotate(e){return this.premultiply(La.makeRotation(-e)),this}translate(e,t){return this.premultiply(La.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const La=new Wt;function uc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vn(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function nr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function os(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Pa={[di]:{[ss]:nr},[ss]:{[di]:os}},Ot={legacyMode:!0,get workingColorSpace(){return ss},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,e,t){if(this.legacyMode||e===t||!e||!t)return s;if(Pa[e]&&Pa[e][t]!==void 0){const i=Pa[e][t];return s.r=i(s.r),s.g=i(s.g),s.b=i(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)}},dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pt={r:0,g:0,b:0},ai={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Ia(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<.16666666666666666?s+(e-s)*6*t:t<.5?e:t<.6666666666666666?s+(e-s)*6*(.6666666666666666-t):s}function cs(s,e){return e.r=s.r,e.g=s.g,e.b=s.b,e}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ot.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ot.workingColorSpace){if(e=Ca(e,1),t=bt(t,0,1),i=bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const n=i<=.5?i*(1+t):i+t-i*t,a=2*i-n;this.r=Ia(a,n,e+.3333333333333333),this.g=Ia(a,n,e),this.b=Ia(a,n,e-.3333333333333333)}return Ot.toWorkingColorSpace(this,r),this}setStyle(e,t=di){function i(n){n!==void 0&&parseFloat(n)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let n;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(n[1],10))/255,this.g=Math.min(255,parseInt(n[2],10))/255,this.b=Math.min(255,parseInt(n[3],10))/255,Ot.toWorkingColorSpace(this,t),i(n[4]),this;if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(n[1],10))/100,this.g=Math.min(100,parseInt(n[2],10))/100,this.b=Math.min(100,parseInt(n[3],10))/100,Ot.toWorkingColorSpace(this,t),i(n[4]),this;break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(n[1])/360,c=parseFloat(n[2])/100,h=parseFloat(n[3])/100;return i(n[4]),this.setHSL(l,c,h,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const n=r[1],a=n.length;if(a===3)return this.r=parseInt(n.charAt(0)+n.charAt(0),16)/255,this.g=parseInt(n.charAt(1)+n.charAt(1),16)/255,this.b=parseInt(n.charAt(2)+n.charAt(2),16)/255,Ot.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(n.charAt(0)+n.charAt(1),16)/255,this.g=parseInt(n.charAt(2)+n.charAt(3),16)/255,this.b=parseInt(n.charAt(4)+n.charAt(5),16)/255,Ot.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=di){const i=dc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ot.fromWorkingColorSpace(cs(this,pt),e),bt(pt.r*255,0,255)<<16^bt(pt.g*255,0,255)<<8^bt(pt.b*255,0,255)<<0}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.fromWorkingColorSpace(cs(this,pt),t);const i=pt.r,r=pt.g,n=pt.b,a=Math.max(i,r,n),o=Math.min(i,r,n);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(r-n)/u+(r<n?6:0);break;case r:l=(n-i)/u+2;break;case n:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ot.workingColorSpace){return Ot.fromWorkingColorSpace(cs(this,pt),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=di){return Ot.fromWorkingColorSpace(cs(this,pt),e),e!==di?`color(${e} ${pt.r} ${pt.g} ${pt.b})`:`rgb(${pt.r*255|0},${pt.g*255|0},${pt.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(ai),ai.h+=e,ai.s+=t,ai.l+=i,this.setHSL(ai.h,ai.s,ai.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(ls);const i=wn(ai.h,ls.h,t),r=wn(ai.s,ls.s,t),n=wn(ai.l,ls.l,t);return this.setHSL(i,r,n),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Le.NAMES=dc;let kr;class pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kr===void 0&&(kr=vn("canvas")),kr.width=e.width,kr.height=e.height;const i=kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=kr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vn("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),n=r.data;for(let a=0;a<n.length;a++)n[a]=nr(n[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(nr(t[i]/255)*255):t[i]=nr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class mc{constructor(e=null){this.isSource=!0,this.uuid=Qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?n.push(Da(r[a].image)):n.push(Da(r[a]))}else n=Da(r);i.url=n}return t||(e.images[this.uuid]=i),i}}function Da(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?pc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class At extends rr{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,i=Zt,r=Zt,n=Gt,a=Ki,o=Kt,l=Qi,c=At.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Qt(),this.name="",this.source=new mc(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=n,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case Zt:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case Zt:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}At.DEFAULT_IMAGE=null,At.DEFAULT_MAPPING=Dl,At.DEFAULT_ANISOTROPY=1;class Ze{constructor(e=0,t=0,i=0,r=1){Ze.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*n,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*n,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*n,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*n,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,n;const a=e.elements,o=a[0],l=a[4],c=a[8],h=a[1],u=a[5],d=a[9],f=a[2],w=a[6],_=a[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(d-w)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(d+w)<.1&&Math.abs(o+u+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(o+1)/2,y=(u+1)/2,v=(_+1)/2,x=(l+h)/4,S=(c+f)/4,L=(d+w)/4;return g>y&&g>v?g<.01?(i=0,r=.707106781,n=.707106781):(i=Math.sqrt(g),r=x/i,n=S/i):y>v?y<.01?(i=.707106781,r=0,n=.707106781):(r=Math.sqrt(y),i=x/r,n=L/r):v<.01?(i=.707106781,r=.707106781,n=0):(n=Math.sqrt(v),i=S/n,r=L/n),this.set(i,r,n,t),this}let m=Math.sqrt((w-d)*(w-d)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(w-d)/m,this.y=(c-f)/m,this.z=(h-l)/m,this.w=Math.acos((o+u+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class sr extends rr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ze(0,0,e,t),this.scissorTest=!1,this.viewport=new Ze(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new At(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Gt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cp extends At{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vt,this.minFilter=vt,this.wrapR=Zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let pi=class{constructor(s=0,e=0,t=0,i=1){this.isQuaternion=!0,this._x=s,this._y=e,this._z=t,this._w=i}static slerpFlat(s,e,t,i,r,n,a){let o=t[i+0],l=t[i+1],c=t[i+2],h=t[i+3];const u=r[n+0],d=r[n+1],f=r[n+2],w=r[n+3];if(a===0){s[e+0]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h;return}if(a===1){s[e+0]=u,s[e+1]=d,s[e+2]=f,s[e+3]=w;return}if(h!==w||o!==u||l!==d||c!==f){let _=1-a;const m=o*u+l*d+c*f+h*w,g=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const x=Math.sqrt(y),S=Math.atan2(x,m*g);_=Math.sin(_*S)/x,a=Math.sin(a*S)/x}const v=a*g;if(o=o*_+u*v,l=l*_+d*v,c=c*_+f*v,h=h*_+w*v,_===1-a){const x=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=x,l*=x,c*=x,h*=x}}s[e]=o,s[e+1]=l,s[e+2]=c,s[e+3]=h}static multiplyQuaternionsFlat(s,e,t,i,r,n){const a=t[i],o=t[i+1],l=t[i+2],c=t[i+3],h=r[n],u=r[n+1],d=r[n+2],f=r[n+3];return s[e]=a*f+c*h+o*d-l*u,s[e+1]=o*f+c*u+l*h-a*d,s[e+2]=l*f+c*d+a*u-o*h,s[e+3]=c*f-a*h-o*u-l*d,s}get x(){return this._x}set x(s){this._x=s,this._onChangeCallback()}get y(){return this._y}set y(s){this._y=s,this._onChangeCallback()}get z(){return this._z}set z(s){this._z=s,this._onChangeCallback()}get w(){return this._w}set w(s){this._w=s,this._onChangeCallback()}set(s,e,t,i){return this._x=s,this._y=e,this._z=t,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(s){return this._x=s.x,this._y=s.y,this._z=s.z,this._w=s.w,this._onChangeCallback(),this}setFromEuler(s,e){const t=s._x,i=s._y,r=s._z,n=s._order,a=Math.cos,o=Math.sin,l=a(t/2),c=a(i/2),h=a(r/2),u=o(t/2),d=o(i/2),f=o(r/2);switch(n){case"XYZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"YXZ":this._x=u*c*h+l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"ZXY":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h-u*d*f;break;case"ZYX":this._x=u*c*h-l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h+u*d*f;break;case"YZX":this._x=u*c*h+l*d*f,this._y=l*d*h+u*c*f,this._z=l*c*f-u*d*h,this._w=l*c*h-u*d*f;break;case"XZY":this._x=u*c*h-l*d*f,this._y=l*d*h-u*c*f,this._z=l*c*f+u*d*h,this._w=l*c*h+u*d*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+n)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(s,e){const t=e/2,i=Math.sin(t);return this._x=s.x*i,this._y=s.y*i,this._z=s.z*i,this._w=Math.cos(t),this._onChangeCallback(),this}setFromRotationMatrix(s){const e=s.elements,t=e[0],i=e[4],r=e[8],n=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10],u=t+a+h;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(c-o)*d,this._y=(r-l)*d,this._z=(n-i)*d}else if(t>a&&t>h){const d=2*Math.sqrt(1+t-a-h);this._w=(c-o)/d,this._x=.25*d,this._y=(i+n)/d,this._z=(r+l)/d}else if(a>h){const d=2*Math.sqrt(1+a-t-h);this._w=(r-l)/d,this._x=(i+n)/d,this._y=.25*d,this._z=(o+c)/d}else{const d=2*Math.sqrt(1+h-t-a);this._w=(n-i)/d,this._x=(r+l)/d,this._y=(o+c)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(s,e){let t=s.dot(e)+1;return t<Number.EPSILON?(t=0,Math.abs(s.x)>Math.abs(s.z)?(this._x=-s.y,this._y=s.x,this._z=0,this._w=t):(this._x=0,this._y=-s.z,this._z=s.y,this._w=t)):(this._x=s.y*e.z-s.z*e.y,this._y=s.z*e.x-s.x*e.z,this._z=s.x*e.y-s.y*e.x,this._w=t),this.normalize()}angleTo(s){return 2*Math.acos(Math.abs(bt(this.dot(s),-1,1)))}rotateTowards(s,e){const t=this.angleTo(s);if(t===0)return this;const i=Math.min(1,e/t);return this.slerp(s,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(s){return this._x*s._x+this._y*s._y+this._z*s._z+this._w*s._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let s=this.length();return s===0?(this._x=0,this._y=0,this._z=0,this._w=1):(s=1/s,this._x=this._x*s,this._y=this._y*s,this._z=this._z*s,this._w=this._w*s),this._onChangeCallback(),this}multiply(s){return this.multiplyQuaternions(this,s)}premultiply(s){return this.multiplyQuaternions(s,this)}multiplyQuaternions(s,e){const t=s._x,i=s._y,r=s._z,n=s._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=t*c+n*a+i*l-r*o,this._y=i*c+n*o+r*a-t*l,this._z=r*c+n*l+t*o-i*a,this._w=n*c-t*a-i*o-r*l,this._onChangeCallback(),this}slerp(s,e){if(e===0)return this;if(e===1)return this.copy(s);const t=this._x,i=this._y,r=this._z,n=this._w;let a=n*s._w+t*s._x+i*s._y+r*s._z;if(a<0?(this._w=-s._w,this._x=-s._x,this._y=-s._y,this._z=-s._z,a=-a):this.copy(s),a>=1)return this._w=n,this._x=t,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const d=1-e;return this._w=d*n+e*this._w,this._x=d*t+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),h=Math.sin((1-e)*c)/l,u=Math.sin(e*c)/l;return this._w=n*h+this._w*u,this._x=t*h+this._x*u,this._y=i*h+this._y*u,this._z=r*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(s,e,t){return this.copy(s).slerp(e,t)}random(){const s=Math.random(),e=Math.sqrt(1-s),t=Math.sqrt(s),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),t*Math.sin(r),t*Math.cos(r),e*Math.sin(i))}equals(s){return s._x===this._x&&s._y===this._y&&s._z===this._z&&s._w===this._w}fromArray(s,e=0){return this._x=s[e],this._y=s[e+1],this._z=s[e+2],this._w=s[e+3],this._onChangeCallback(),this}toArray(s=[],e=0){return s[e]=this._x,s[e+1]=this._y,s[e+2]=this._z,s[e+3]=this._w,s}fromBufferAttribute(s,e){return this._x=s.getX(e),this._y=s.getY(e),this._z=s.getZ(e),this._w=s.getW(e),this}_onChange(s){return this._onChangeCallback=s,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class $u{constructor(e=0,t=0,i=0){$u.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6]*r,this.y=n[1]*t+n[4]*i+n[7]*r,this.z=n[2]*t+n[5]*i+n[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,n=e.elements,a=1/(n[3]*t+n[7]*i+n[11]*r+n[15]);return this.x=(n[0]*t+n[4]*i+n[8]*r+n[12])*a,this.y=(n[1]*t+n[5]*i+n[9]*r+n[13])*a,this.z=(n[2]*t+n[6]*i+n[10]*r+n[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,n=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,h=l*i+o*t-n*r,u=l*r+n*i-a*t,d=-n*t-a*i-o*r;return this.x=c*l+d*-n+h*-o-u*-a,this.y=h*l+d*-a+u*-n-c*-o,this.z=u*l+d*-o+c*-a-h*-n,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,n=e.elements;return this.x=n[0]*t+n[4]*i+n[8]*r,this.y=n[1]*t+n[5]*i+n[9]*r,this.z=n[2]*t+n[6]*i+n[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,n=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-n*o,this.y=n*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};const Na=new P,_c=new pi;class Fr{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,n=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,n=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<r&&(r=d),h>n&&(n=h),u>a&&(a=u),d>o&&(o=d)}return this.min.set(t,i,r),this.max.set(n,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const n=i.attributes.position;for(let a=0,o=n.count;a<o;a++)ar.fromBufferAttribute(n,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ar)}else i.boundingBox===null&&i.computeBoundingBox(),Oa.copy(i.boundingBox),Oa.applyMatrix4(e.matrixWorld),this.union(Oa);const r=e.children;for(let n=0,a=r.length;n<a;n++)this.expandByObject(r[n],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bn),hs.subVectors(this.max,bn),Ur.subVectors(e.a,bn),Br.subVectors(e.b,bn),Hr.subVectors(e.c,bn),Bi.subVectors(Br,Ur),Hi.subVectors(Hr,Br),or.subVectors(Ur,Hr);let t=[0,-Bi.z,Bi.y,0,-Hi.z,Hi.y,0,-or.z,or.y,Bi.z,0,-Bi.x,Hi.z,0,-Hi.x,or.z,0,-or.x,-Bi.y,Bi.x,0,-Hi.y,Hi.x,0,-or.y,or.x,0];return!za(t,Ur,Br,Hr,hs)||(t=[1,0,0,0,1,0,0,0,1],!za(t,Ur,Br,Hr,hs))?!1:(us.crossVectors(Bi,Hi),t=[us.x,us.y,us.z],za(t,Ur,Br,Hr,hs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return ar.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mi=[new P,new P,new P,new P,new P,new P,new P,new P],ar=new P,Oa=new Fr,Ur=new P,Br=new P,Hr=new P,Bi=new P,Hi=new P,or=new P,bn=new P,hs=new P,us=new P,lr=new P;function za(s,e,t,i,r){for(let n=0,a=s.length-3;n<=a;n+=3){lr.fromArray(s,n);const o=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=t.dot(lr),h=i.dot(lr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const hp=new Fr,yn=new P,ka=new P;class Gr{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):hp.setFromPoints(e).getCenter(i);let r=0;for(let n=0,a=e.length;n<a;n++)r=Math.max(r,i.distanceToSquared(e[n]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yn.subVectors(e,this.center);const t=yn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(yn,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yn.copy(e.center).add(ka)),this.expandByPoint(yn.copy(e.center).sub(ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new P,Fa=new P,ds=new P,Gi=new P,Ua=new P,ps=new P,Ba=new P;let ms=class{constructor(s=new P,e=new P(0,0,-1)){this.origin=s,this.direction=e}set(s,e){return this.origin.copy(s),this.direction.copy(e),this}copy(s){return this.origin.copy(s.origin),this.direction.copy(s.direction),this}at(s,e){return e.copy(this.direction).multiplyScalar(s).add(this.origin)}lookAt(s){return this.direction.copy(s).sub(this.origin).normalize(),this}recast(s){return this.origin.copy(this.at(s,Ei)),this}closestPointToPoint(s,e){e.subVectors(s,this.origin);const t=e.dot(this.direction);return t<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(t).add(this.origin)}distanceToPoint(s){return Math.sqrt(this.distanceSqToPoint(s))}distanceSqToPoint(s){const e=Ei.subVectors(s,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(s):(Ei.copy(this.direction).multiplyScalar(e).add(this.origin),Ei.distanceToSquared(s))}distanceSqToSegment(s,e,t,i){Fa.copy(s).add(e).multiplyScalar(.5),ds.copy(e).sub(s).normalize(),Gi.copy(this.origin).sub(Fa);const r=s.distanceTo(e)*.5,n=-this.direction.dot(ds),a=Gi.dot(this.direction),o=-Gi.dot(ds),l=Gi.lengthSq(),c=Math.abs(1-n*n);let h,u,d,f;if(c>0)if(h=n*o-a,u=n*a-o,f=r*c,h>=0)if(u>=-f)if(u<=f){const w=1/c;h*=w,u*=w,d=h*(h+n*u+2*a)+u*(n*h+u+2*o)+l}else u=r,h=Math.max(0,-(n*u+a)),d=-h*h+u*(u+2*o)+l;else u=-r,h=Math.max(0,-(n*u+a)),d=-h*h+u*(u+2*o)+l;else u<=-f?(h=Math.max(0,-(-n*r+a)),u=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l):u<=f?(h=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+l):(h=Math.max(0,-(n*r+a)),u=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+u*(u+2*o)+l);else u=n>0?-r:r,h=Math.max(0,-(n*u+a)),d=-h*h+u*(u+2*o)+l;return t&&t.copy(this.direction).multiplyScalar(h).add(this.origin),i&&i.copy(ds).multiplyScalar(u).add(Fa),d}intersectSphere(s,e){Ei.subVectors(s.center,this.origin);const t=Ei.dot(this.direction),i=Ei.dot(Ei)-t*t,r=s.radius*s.radius;if(i>r)return null;const n=Math.sqrt(r-i),a=t-n,o=t+n;return a<0&&o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(s){return this.distanceSqToPoint(s.center)<=s.radius*s.radius}distanceToPlane(s){const e=s.normal.dot(this.direction);if(e===0)return s.distanceToPoint(this.origin)===0?0:null;const t=-(this.origin.dot(s.normal)+s.constant)/e;return t>=0?t:null}intersectPlane(s,e){const t=this.distanceToPlane(s);return t===null?null:this.at(t,e)}intersectsPlane(s){const e=s.distanceToPoint(this.origin);return e===0||s.normal.dot(this.direction)*e<0}intersectBox(s,e){let t,i,r,n,a,o;const l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,u=this.origin;return l>=0?(t=(s.min.x-u.x)*l,i=(s.max.x-u.x)*l):(t=(s.max.x-u.x)*l,i=(s.min.x-u.x)*l),c>=0?(r=(s.min.y-u.y)*c,n=(s.max.y-u.y)*c):(r=(s.max.y-u.y)*c,n=(s.min.y-u.y)*c),t>n||r>i||((r>t||isNaN(t))&&(t=r),(n<i||isNaN(i))&&(i=n),h>=0?(a=(s.min.z-u.z)*h,o=(s.max.z-u.z)*h):(a=(s.max.z-u.z)*h,o=(s.min.z-u.z)*h),t>o||a>i)||((a>t||t!==t)&&(t=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(t>=0?t:i,e)}intersectsBox(s){return this.intersectBox(s,Ei)!==null}intersectTriangle(s,e,t,i,r){Ua.subVectors(e,s),ps.subVectors(t,s),Ba.crossVectors(Ua,ps);let n=this.direction.dot(Ba),a;if(n>0){if(i)return null;a=1}else if(n<0)a=-1,n=-n;else return null;Gi.subVectors(this.origin,s);const o=a*this.direction.dot(ps.crossVectors(Gi,ps));if(o<0)return null;const l=a*this.direction.dot(Ua.cross(Gi));if(l<0||o+l>n)return null;const c=-a*Gi.dot(Ba);return c<0?null:this.at(c/n,r)}applyMatrix4(s){return this.origin.applyMatrix4(s),this.direction.transformDirection(s),this}equals(s){return s.origin.equals(this.origin)&&s.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Ne{constructor(){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,n,a,o,l,c,h,u,d,f,w,_,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=r,g[1]=n,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=d,g[3]=f,g[7]=w,g[11]=_,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),n=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*n,t[5]=i[5]*n,t[6]=i[6]*n,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,n=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(n),u=Math.sin(n);if(e.order==="XYZ"){const d=a*h,f=a*u,w=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+w*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=w+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,w=c*h,_=c*u;t[0]=d+_*o,t[4]=w*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-w,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,w=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=w+f*o,t[1]=f+w*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,w=o*h,_=o*u;t[0]=l*h,t[4]=w*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-w,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,w=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=w*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+w,t[10]=d-_*u}else if(e.order==="XZY"){const d=a*l,f=a*c,w=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-w,t[2]=w*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Vi.crossVectors(i,jt),Vi.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Vi.crossVectors(i,jt)),Vi.normalize(),fs.crossVectors(jt,Vi),r[0]=Vi.x,r[4]=fs.x,r[8]=jt.x,r[1]=Vi.y,r[5]=fs.y,r[9]=jt.y,r[2]=Vi.z,r[6]=fs.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,n=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],w=i[2],_=i[6],m=i[10],g=i[14],y=i[3],v=i[7],x=i[11],S=i[15],L=r[0],O=r[4],b=r[8],R=r[12],k=r[1],X=r[5],ee=r[9],H=r[13],z=r[2],q=r[6],te=r[10],ie=r[14],Z=r[3],ae=r[7],re=r[11],V=r[15];return n[0]=a*L+o*k+l*z+c*Z,n[4]=a*O+o*X+l*q+c*ae,n[8]=a*b+o*ee+l*te+c*re,n[12]=a*R+o*H+l*ie+c*V,n[1]=h*L+u*k+d*z+f*Z,n[5]=h*O+u*X+d*q+f*ae,n[9]=h*b+u*ee+d*te+f*re,n[13]=h*R+u*H+d*ie+f*V,n[2]=w*L+_*k+m*z+g*Z,n[6]=w*O+_*X+m*q+g*ae,n[10]=w*b+_*ee+m*te+g*re,n[14]=w*R+_*H+m*ie+g*V,n[3]=y*L+v*k+x*z+S*Z,n[7]=y*O+v*X+x*q+S*ae,n[11]=y*b+v*ee+x*te+S*re,n[15]=y*R+v*H+x*ie+S*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],n=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],w=e[3],_=e[7],m=e[11],g=e[15];return w*(+n*l*u-r*c*u-n*o*d+i*c*d+r*o*f-i*l*f)+_*(+t*l*f-t*c*d+n*a*d-r*a*f+r*c*h-n*l*h)+m*(+t*c*u-t*o*f-n*a*u+i*a*f+n*o*h-i*c*h)+g*(-r*o*h-t*l*u+t*o*d+r*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],n=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],w=e[12],_=e[13],m=e[14],g=e[15],y=u*m*c-_*d*c+_*l*f-o*m*f-u*l*g+o*d*g,v=w*d*c-h*m*c-w*l*f+a*m*f+h*l*g-a*d*g,x=h*_*c-w*u*c+w*o*f-a*_*f-h*o*g+a*u*g,S=w*u*l-h*_*l-w*o*d+a*_*d+h*o*m-a*u*m,L=t*y+i*v+r*x+n*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/L;return e[0]=y*O,e[1]=(_*d*n-u*m*n-_*r*f+i*m*f+u*r*g-i*d*g)*O,e[2]=(o*m*n-_*l*n+_*r*c-i*m*c-o*r*g+i*l*g)*O,e[3]=(u*l*n-o*d*n-u*r*c+i*d*c+o*r*f-i*l*f)*O,e[4]=v*O,e[5]=(h*m*n-w*d*n+w*r*f-t*m*f-h*r*g+t*d*g)*O,e[6]=(w*l*n-a*m*n-w*r*c+t*m*c+a*r*g-t*l*g)*O,e[7]=(a*d*n-h*l*n+h*r*c-t*d*c-a*r*f+t*l*f)*O,e[8]=x*O,e[9]=(w*u*n-h*_*n-w*i*f+t*_*f+h*i*g-t*u*g)*O,e[10]=(a*_*n-w*o*n+w*i*c-t*_*c-a*i*g+t*o*g)*O,e[11]=(h*o*n-a*u*n-h*i*c+t*u*c+a*i*f-t*o*f)*O,e[12]=S*O,e[13]=(h*_*r-w*u*r+w*i*d-t*_*d-h*i*m+t*u*m)*O,e[14]=(w*o*r-a*_*r-w*i*l+t*_*l+a*i*m-t*o*m)*O,e[15]=(a*u*r-h*o*r+h*i*l-t*u*l-a*i*d+t*o*d)*O,this}scale(e){const t=this.elements,i=e.x,r=e.y,n=e.z;return t[0]*=i,t[4]*=r,t[8]*=n,t[1]*=i,t[5]*=r,t[9]*=n,t[2]*=i,t[6]*=r,t[10]*=n,t[3]*=i,t[7]*=r,t[11]*=n,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),n=1-i,a=e.x,o=e.y,l=e.z,c=n*a,h=n*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,n*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,n,a){return this.set(1,i,n,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,n=t._x,a=t._y,o=t._z,l=t._w,c=n+n,h=a+a,u=o+o,d=n*c,f=n*h,w=n*u,_=a*h,m=a*u,g=o*u,y=l*c,v=l*h,x=l*u,S=i.x,L=i.y,O=i.z;return r[0]=(1-(_+g))*S,r[1]=(f+x)*S,r[2]=(w-v)*S,r[3]=0,r[4]=(f-x)*L,r[5]=(1-(d+g))*L,r[6]=(m+y)*L,r[7]=0,r[8]=(w+v)*O,r[9]=(m-y)*O,r[10]=(1-(d+_))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let n=Vr.set(r[0],r[1],r[2]).length();const a=Vr.set(r[4],r[5],r[6]).length(),o=Vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(n=-n),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const l=1/n,c=1/a,h=1/o;return oi.elements[0]*=l,oi.elements[1]*=l,oi.elements[2]*=l,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=h,oi.elements[9]*=h,oi.elements[10]*=h,t.setFromRotationMatrix(oi),i.x=n,i.y=a,i.z=o,this}makePerspective(e,t,i,r,n,a){const o=this.elements,l=2*n/(t-e),c=2*n/(i-r),h=(t+e)/(t-e),u=(i+r)/(i-r),d=-(a+n)/(a-n),f=-2*a*n/(a-n);return o[0]=l,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=c,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=f,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,n,a){const o=this.elements,l=1/(t-e),c=1/(i-r),h=1/(a-n),u=(t+e)*l,d=(i+r)*c,f=(a+n)*h;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=-2*h,o[14]=-f,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vr=new P,oi=new Ne,up=new P(0,0,0),dp=new P(1,1,1),Vi=new P,fs=new P,jt=new P,gc=new Ne,wc=new pi;class xn{constructor(e=0,t=0,i=0,r=xn.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,n=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],u=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,n)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,n),this._z=0);break;case"ZXY":this._x=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,n)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return gc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wc.setFromEuler(this),this.setFromQuaternion(wc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}xn.DefaultOrder="XYZ",xn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pp=0;const vc=new P,Wr=new pi,Ti=new Ne,_s=new P,Sn=new P,mp=new P,fp=new pi,bc=new P(1,0,0),yc=new P(0,1,0),xc=new P(0,0,1),_p={type:"added"},Sc={type:"removed"};class tt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tt.DefaultUp.clone();const e=new P,t=new xn,i=new pi,r=new P(1,1,1);function n(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(n),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Wt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=tt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=tt.DefaultMatrixWorldAutoUpdate,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,t){return Wr.setFromAxisAngle(e,t),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(xc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(xc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_s.copy(e):_s.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Sn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(Sn,_s,this.up):Ti.lookAt(_s,Sn,this.up),this.quaternion.setFromRotationMatrix(Ti),r&&(Ti.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(Ti),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_p)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Sc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const n=this.children[i].getObjectByProperty(e,t);if(n!==void 0)return n}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,n=this.children.length;r<n;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,e,mp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sn,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const n=t[i];(n.matrixWorldAutoUpdate===!0||e===!0)&&n.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let n=0,a=r.length;n<a;n++){const o=r[n];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=n(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];n(e.shapes,u)}else n(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(e.materials,this.material[l]));r.material=o}else r.material=n(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(n(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),w=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),w.length>0&&(i.nodes=w)}return i.object=r,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tt.DefaultUp=new P(0,1,0),tt.DefaultMatrixAutoUpdate=!0,tt.DefaultMatrixWorldAutoUpdate=!0;const li=new P,Ai=new P,Ga=new P,Ci=new P,jr=new P,Xr=new P,Mc=new P,Va=new P,Wa=new P,ja=new P;let Xa=class dn{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),li.subVectors(e,t),r.cross(li);const n=r.lengthSq();return n>0?r.multiplyScalar(1/Math.sqrt(n)):r.set(0,0,0)}static getBarycoord(e,t,i,r,n){li.subVectors(r,t),Ai.subVectors(i,t),Ga.subVectors(e,t);const a=li.dot(li),o=li.dot(Ai),l=li.dot(Ga),c=Ai.dot(Ai),h=Ai.dot(Ga),u=a*c-o*o;if(u===0)return n.set(-2,-1,-1);const d=1/u,f=(c*l-o*h)*d,w=(a*h-o*l)*d;return n.set(1-f-w,w,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ci),Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getUV(e,t,i,r,n,a,o,l){return this.getBarycoord(e,t,i,r,Ci),l.set(0,0),l.addScaledVector(n,Ci.x),l.addScaledVector(a,Ci.y),l.addScaledVector(o,Ci.z),l}static isFrontFacing(e,t,i,r){return li.subVectors(i,t),Ai.subVectors(e,t),li.cross(Ai).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),li.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,n){return dn.getUV(e,this.a,this.b,this.c,t,i,r,n)}containsPoint(e){return dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,n=this.c;let a,o;jr.subVectors(r,i),Xr.subVectors(n,i),Va.subVectors(e,i);const l=jr.dot(Va),c=Xr.dot(Va);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,r);const h=jr.dot(Wa),u=Xr.dot(Wa);if(h>=0&&u<=h)return t.copy(r);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(jr,a);ja.subVectors(e,n);const f=jr.dot(ja),w=Xr.dot(ja);if(w>=0&&f<=w)return t.copy(n);const _=f*c-l*w;if(_<=0&&c>=0&&w<=0)return o=c/(c-w),t.copy(i).addScaledVector(Xr,o);const m=h*w-f*u;if(m<=0&&u-h>=0&&f-w>=0)return Mc.subVectors(n,r),o=(u-h)/(u-h+(f-w)),t.copy(r).addScaledVector(Mc,o);const g=1/(m+_+d);return a=_*g,o=d*g,t.copy(i).addScaledVector(jr,a).addScaledVector(Xr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},gp=0;class mi extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gp++}),this.uuid=Qt(),this.name="",this.type="Material",this.blending=Rr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ll,this.blendDst=Pl,this.blendEquation=Lr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){const a=[];for(const o in n){const l=n[o];delete l.metadata,a.push(l)}return a}if(t){const n=r(e.textures),a=r(e.images);n.length>0&&(i.textures=n),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=t[n].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wi extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new P,gs=new he;class Ct{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ta,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)gs.fromBufferAttribute(this,t),gs.applyMatrix3(e),this.setXY(t,gs.x,gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e*=this.itemSize,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),n=$e(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=n,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ta&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Ec extends Ct{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Tc extends Ct{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ei extends Ct{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wp=0;const ti=new Ne,qa=new tt,qr=new P,Xt=new Fr,Mn=new Fr,yt=new P;class ii extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uc(e)?Tc:Ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const n=new Wt().getNormalMatrix(e);i.applyNormalMatrix(n),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,i){return ti.makeTranslation(e,t,i),this.applyMatrix4(ti),this}scale(e,t,i){return ti.makeScale(e,t,i),this.applyMatrix4(ti),this}lookAt(e){return qa.lookAt(e),qa.updateMatrix(),this.applyMatrix4(qa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const n=e[i];t.push(n.x,n.y,n.z||0)}return this.setAttribute("position",new ei(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const n=t[i];Xt.setFromBufferAttribute(n),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Mn.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Xt.min,Mn.min),Xt.expandByPoint(yt),yt.addVectors(Xt.max,Mn.max),Xt.expandByPoint(yt)):(Xt.expandByPoint(Mn.min),Xt.expandByPoint(Mn.max))}Xt.getCenter(i);let r=0;for(let n=0,a=e.count;n<a;n++)yt.fromBufferAttribute(e,n),r=Math.max(r,i.distanceToSquared(yt));if(t)for(let n=0,a=t.length;n<a;n++){const o=t[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)yt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),yt.add(qr)),r=Math.max(r,i.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,n=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let k=0;k<o;k++)c[k]=new P,h[k]=new P;const u=new P,d=new P,f=new P,w=new he,_=new he,m=new he,g=new P,y=new P;function v(k,X,ee){u.fromArray(r,k*3),d.fromArray(r,X*3),f.fromArray(r,ee*3),w.fromArray(a,k*2),_.fromArray(a,X*2),m.fromArray(a,ee*2),d.sub(u),f.sub(u),_.sub(w),m.sub(w);const H=1/(_.x*m.y-m.x*_.y);isFinite(H)&&(g.copy(d).multiplyScalar(m.y).addScaledVector(f,-_.y).multiplyScalar(H),y.copy(f).multiplyScalar(_.x).addScaledVector(d,-m.x).multiplyScalar(H),c[k].add(g),c[X].add(g),c[ee].add(g),h[k].add(y),h[X].add(y),h[ee].add(y))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let k=0,X=x.length;k<X;++k){const ee=x[k],H=ee.start,z=ee.count;for(let q=H,te=H+z;q<te;q+=3)v(i[q+0],i[q+1],i[q+2])}const S=new P,L=new P,O=new P,b=new P;function R(k){O.fromArray(n,k*3),b.copy(O);const X=c[k];S.copy(X),S.sub(O.multiplyScalar(O.dot(X))).normalize(),L.crossVectors(b,X);const ee=L.dot(h[k])<0?-1:1;l[k*4]=S.x,l[k*4+1]=S.y,l[k*4+2]=S.z,l[k*4+3]=ee}for(let k=0,X=x.length;k<X;++k){const ee=x[k],H=ee.start,z=ee.count;for(let q=H,te=H+z;q<te;q+=3)R(i[q+0]),R(i[q+1]),R(i[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new P,n=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){const w=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,w),n.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,n),u.subVectors(r,n),h.cross(u),o.fromBufferAttribute(i,w),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(w,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),n.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,n),u.subVectors(r,n),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let f=0,w=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let g=0;g<h;g++)d[w++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const n=this.morphAttributes;for(const o in n){const l=[],c=n[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let n=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,n=!0)}n&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const n=e.morphAttributes;for(const c in n){const h=[],u=n[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new Ne,Yr=new ms,Ya=new Gr,En=new P,Tn=new P,An=new P,Ja=new P,ws=new P,vs=new he,bs=new he,ys=new he,$a=new P,xs=new P;class It extends tt{constructor(e=new ii,t=new Wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(n&&o){ws.set(0,0,0);for(let l=0,c=n.length;l<c;l++){const h=o[l],u=n[l];h!==0&&(Ja.fromBufferAttribute(u,e),a?ws.addScaledVector(Ja,h):ws.addScaledVector(Ja.sub(t),h))}t.add(ws)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,n=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Ya.copy(i.boundingSphere),Ya.applyMatrix4(n),e.ray.intersectsSphere(Ya)===!1)||(Ac.copy(n).invert(),Yr.copy(e.ray).applyMatrix4(Ac),i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,u=i.groups,d=i.drawRange;if(o!==null)if(Array.isArray(r))for(let f=0,w=u.length;f<w;f++){const _=u[f],m=r[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(o.count,Math.min(_.start+_.count,d.start+d.count));for(let v=g,x=y;v<x;v+=3){const S=o.getX(v),L=o.getX(v+1),O=o.getX(v+2);a=Ss(this,m,e,Yr,c,h,S,L,O),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const f=Math.max(0,d.start),w=Math.min(o.count,d.start+d.count);for(let _=f,m=w;_<m;_+=3){const g=o.getX(_),y=o.getX(_+1),v=o.getX(_+2);a=Ss(this,r,e,Yr,c,h,g,y,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let f=0,w=u.length;f<w;f++){const _=u[f],m=r[_.materialIndex],g=Math.max(_.start,d.start),y=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=g,x=y;v<x;v+=3){const S=v,L=v+1,O=v+2;a=Ss(this,m,e,Yr,c,h,S,L,O),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=_.materialIndex,t.push(a))}}else{const f=Math.max(0,d.start),w=Math.min(l.count,d.start+d.count);for(let _=f,m=w;_<m;_+=3){const g=_,y=_+1,v=_+2;a=Ss(this,r,e,Yr,c,h,g,y,v),a&&(a.faceIndex=Math.floor(_/3),t.push(a))}}}}function vp(s,e,t,i,r,n,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,n,r,!0,o):l=i.intersectTriangle(r,n,a,e.side===ki,o),l===null)return null;xs.copy(o),xs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(xs);return c<t.near||c>t.far?null:{distance:c,point:xs.clone(),object:s}}function Ss(s,e,t,i,r,n,a,o,l){s.getVertexPosition(a,En),s.getVertexPosition(o,Tn),s.getVertexPosition(l,An);const c=vp(s,e,t,i,En,Tn,An,$a);if(c){r&&(vs.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,o),ys.fromBufferAttribute(r,l),c.uv=Xa.getUV($a,En,Tn,An,vs,bs,ys,new he)),n&&(vs.fromBufferAttribute(n,a),bs.fromBufferAttribute(n,o),ys.fromBufferAttribute(n,l),c.uv2=Xa.getUV($a,En,Tn,An,vs,bs,ys,new he));const h={a,b:o,c:l,normal:new P,materialIndex:0};Xa.getNormal(En,Tn,An,h.normal),c.face=h}return c}class Cn extends ii{constructor(e=1,t=1,i=1,r=1,n=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:n,depthSegments:a};const o=this;r=Math.floor(r),n=Math.floor(n),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;w("z","y","x",-1,-1,i,t,e,a,n,0),w("z","y","x",1,-1,i,t,-e,a,n,1),w("x","z","y",1,1,e,i,t,r,a,2),w("x","z","y",1,-1,e,i,-t,r,a,3),w("x","y","z",1,-1,e,t,i,r,n,4),w("x","y","z",-1,-1,e,t,-i,r,n,5),this.setIndex(l),this.setAttribute("position",new ei(c,3)),this.setAttribute("normal",new ei(h,3)),this.setAttribute("uv",new ei(u,2));function w(_,m,g,y,v,x,S,L,O,b,R){const k=x/O,X=S/b,ee=x/2,H=S/2,z=L/2,q=O+1,te=b+1;let ie=0,Z=0;const ae=new P;for(let re=0;re<te;re++){const V=re*X-H;for(let Y=0;Y<q;Y++){const K=Y*k-ee;ae[_]=K*y,ae[m]=V*v,ae[g]=z,c.push(ae.x,ae.y,ae.z),ae[_]=0,ae[m]=0,ae[g]=L>0?1:-1,h.push(ae.x,ae.y,ae.z),u.push(Y/O),u.push(1-re/b),ie+=1}}for(let re=0;re<b;re++)for(let V=0;V<O;V++){const Y=d+V+q*re,K=d+V+q*(re+1),se=d+(V+1)+q*(re+1),_e=d+(V+1)+q*re;l.push(Y,K,_e),l.push(K,se,_e),Z+=6}o.addGroup(f,Z,R),f+=Z,d+=ie}}static fromJSON(e){return new Cn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const r=s[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function zt(s){const e={};for(let t=0;t<s.length;t++){const i=Jr(s[t]);for(const r in i)e[r]=i[r]}return e}function bp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Cc(s){return s.getRenderTarget()===null&&s.outputEncoding===je?di:ss}const yp={clone:Jr,merge:zt};var xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=bp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const n=this.uniforms[r].value;n&&n.isTexture?t.uniforms[r]={type:"t",value:n.toJSON(e).uuid}:n&&n.isColor?t.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?t.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?t.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?t.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?t.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?t.uniforms[r]={type:"m4",value:n.toArray()}:t.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}let Rc=class extends tt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne}copy(s,e){return super.copy(s,e),this.matrixWorldInverse.copy(s.matrixWorldInverse),this.projectionMatrix.copy(s.projectionMatrix),this.projectionMatrixInverse.copy(s.projectionMatrixInverse),this}getWorldDirection(s){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return s.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(s){super.updateMatrixWorld(s),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(s,e){super.updateWorldMatrix(s,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};class kt extends Rc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=gn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return gn*2*Math.atan(Math.tan(_n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,n,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_n*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,n=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;n+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(n+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $r=-90,Zr=1;class Mp extends tt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new kt($r,Zr,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const n=new kt($r,Zr,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(-1,0,0),this.add(n);const a=new kt($r,Zr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new kt($r,Zr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new kt($r,Zr,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt($r,Zr,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,n,a,o,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=xi,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,n),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Za extends At{constructor(e,t,i,r,n,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Pr,super(e,t,i,r,n,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ep extends sr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Za(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Cn(5,5,5),n=new ji({name:"CubemapFromEquirect",uniforms:Jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Fi});n.uniforms.tEquirect.value=t;const a=new It(r,n),o=t.minFilter;return t.minFilter===Ki&&(t.minFilter=Gt),new Mp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const n=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(n)}}const Ka=new P,Tp=new P,Ap=new Wt;class cr{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ka.subVectors(i,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Ka),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const n=-(e.start.dot(this.normal)+this.constant)/r;return n<0||n>1?null:t.copy(i).multiplyScalar(n).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ap.getNormalMatrix(e),r=this.coplanarPoint(Ka).applyMatrix4(e),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Gr,Ms=new P;class Qa{constructor(e=new cr,t=new cr,i=new cr,r=new cr,n=new cr,a=new cr){this.planes=[e,t,i,r,n,a]}set(e,t,i,r,n,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(n),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],n=i[1],a=i[2],o=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],w=i[10],_=i[11],m=i[12],g=i[13],y=i[14],v=i[15];return t[0].setComponents(o-r,u-l,_-d,v-m).normalize(),t[1].setComponents(o+r,u+l,_+d,v+m).normalize(),t[2].setComponents(o+n,u+c,_+f,v+g).normalize(),t[3].setComponents(o-n,u-c,_-f,v-g).normalize(),t[4].setComponents(o-a,u-h,_-w,v-y).normalize(),t[5].setComponents(o+a,u+h,_+w,v+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let n=0;n<6;n++)if(t[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ms.x=r.normal.x>0?e.max.x:e.min.x,Ms.y=r.normal.y>0?e.max.y:e.min.y,Ms.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Lc(){let s=null,e=!1,t=null,i=null;function r(n,a){t(n,a),i=s.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(r),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(n){t=n},setContext:function(n){s=n}}}function Cp(s,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const u=c.array,d=c.usage,f=s.createBuffer();s.bindBuffer(h,f),s.bufferData(h,u,d),c.onUploadCallback();let w;if(u instanceof Float32Array)w=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(u instanceof Int16Array)w=5122;else if(u instanceof Uint32Array)w=5125;else if(u instanceof Int32Array)w=5124;else if(u instanceof Int8Array)w=5120;else if(u instanceof Uint8Array)w=5121;else if(u instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:w,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function n(c,h,u){const d=h.array,f=h.updateRange;s.bindBuffer(u,c),f.count===-1?s.bufferSubData(u,0,d):(t?s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):s.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(s.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,r(c,h)):u.version<c.version&&(n(u.buffer,c,h),u.version=c.version)}return{get:a,remove:o,update:l}}class Es extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const n=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,u=e/o,d=t/l,f=[],w=[],_=[],m=[];for(let g=0;g<h;g++){const y=g*d-a;for(let v=0;v<c;v++){const x=v*u-n;w.push(x,-y,0),_.push(0,0,1),m.push(v/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const v=y+c*g,x=y+c*(g+1),S=y+1+c*(g+1),L=y+1+c*g;f.push(v,x,L),f.push(x,S,L)}this.setIndex(f),this.setAttribute("position",new ei(w,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(m,2))}static fromJSON(e){return new Es(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Op="vec3 transformed = vec3( position );",zp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kp=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Fp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Up=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$p=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Qp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,om=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,um=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,pm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,wm=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,vm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ym=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Sm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Mm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Em=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Tm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Im=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Om=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,km=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Um=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vm=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$m=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Km=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ef=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,rf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,af=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,lf=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cf=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,hf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,df=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ff=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,bf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,yf=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,xf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Sf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Ef=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Tf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Af=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Rf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Nf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Of=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$f=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,r_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,n_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,a_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Rp,alphamap_pars_fragment:Lp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Np,begin_vertex:Op,beginnormal_vertex:zp,bsdfs:kp,iridescence_fragment:Fp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Hp,clipping_planes_pars_vertex:Gp,clipping_planes_vertex:Vp,color_fragment:Wp,color_pars_fragment:jp,color_pars_vertex:Xp,color_vertex:qp,common:Yp,cube_uv_reflection_fragment:Jp,defaultnormal_vertex:$p,displacementmap_pars_vertex:Zp,displacementmap_vertex:Kp,emissivemap_fragment:Qp,emissivemap_pars_fragment:em,encodings_fragment:tm,encodings_pars_fragment:im,envmap_fragment:rm,envmap_common_pars_fragment:nm,envmap_pars_fragment:sm,envmap_pars_vertex:am,envmap_physical_pars_fragment:wm,envmap_vertex:om,fog_vertex:lm,fog_pars_vertex:cm,fog_fragment:hm,fog_pars_fragment:um,gradientmap_pars_fragment:dm,lightmap_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:fm,lights_lambert_pars_fragment:_m,lights_pars_begin:gm,lights_toon_fragment:vm,lights_toon_pars_fragment:bm,lights_phong_fragment:ym,lights_phong_pars_fragment:xm,lights_physical_fragment:Sm,lights_physical_pars_fragment:Mm,lights_fragment_begin:Em,lights_fragment_maps:Tm,lights_fragment_end:Am,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Rm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Pm,map_fragment:Im,map_pars_fragment:Dm,map_particle_fragment:Nm,map_particle_pars_fragment:Om,metalnessmap_fragment:zm,metalnessmap_pars_fragment:km,morphcolor_vertex:Fm,morphnormal_vertex:Um,morphtarget_pars_vertex:Bm,morphtarget_vertex:Hm,normal_fragment_begin:Gm,normal_fragment_maps:Vm,normal_pars_fragment:Wm,normal_pars_vertex:jm,normal_vertex:Xm,normalmap_pars_fragment:qm,clearcoat_normal_fragment_begin:Ym,clearcoat_normal_fragment_maps:Jm,clearcoat_pars_fragment:$m,iridescence_pars_fragment:Zm,output_fragment:Km,packing:Qm,premultiplied_alpha_fragment:ef,project_vertex:tf,dithering_fragment:rf,dithering_pars_fragment:nf,roughnessmap_fragment:sf,roughnessmap_pars_fragment:af,shadowmap_pars_fragment:of,shadowmap_pars_vertex:lf,shadowmap_vertex:cf,shadowmask_pars_fragment:hf,skinbase_vertex:uf,skinning_pars_vertex:df,skinning_vertex:pf,skinnormal_vertex:mf,specularmap_fragment:ff,specularmap_pars_fragment:_f,tonemapping_fragment:gf,tonemapping_pars_fragment:wf,transmission_fragment:vf,transmission_pars_fragment:bf,uv_pars_fragment:yf,uv_pars_vertex:xf,uv_vertex:Sf,uv2_pars_fragment:Mf,uv2_pars_vertex:Ef,uv2_vertex:Tf,worldpos_vertex:Af,background_vert:Cf,background_frag:Rf,backgroundCube_vert:Lf,backgroundCube_frag:Pf,cube_vert:If,cube_frag:Df,depth_vert:Nf,depth_frag:Of,distanceRGBA_vert:zf,distanceRGBA_frag:kf,equirect_vert:Ff,equirect_frag:Uf,linedashed_vert:Bf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Vf,meshlambert_vert:Wf,meshlambert_frag:jf,meshmatcap_vert:Xf,meshmatcap_frag:qf,meshnormal_vert:Yf,meshnormal_frag:Jf,meshphong_vert:$f,meshphong_frag:Zf,meshphysical_vert:Kf,meshphysical_frag:Qf,meshtoon_vert:e_,meshtoon_frag:t_,points_vert:i_,points_frag:r_,shadow_vert:n_,shadow_frag:s_,sprite_vert:a_,sprite_frag:o_},le={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},fi={basic:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:zt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:zt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:zt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Le(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:zt([le.points,le.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:zt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:zt([le.common,le.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:zt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:zt([le.sprite,le.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:zt([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:zt([le.lights,le.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};fi.physical={uniforms:zt([fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new he(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const Ts={r:0,b:0,g:0};function l_(s,e,t,i,r,n,a){const o=new Le(0);let l=n===!0?0:1,c,h,u=null,d=0,f=null;function w(m,g){let y=!1,v=g.isScene===!0?g.background:null;v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v));const x=s.xr,S=x.getSession&&x.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?_(o,l):v&&v.isColor&&(_(v,1),y=!0),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),v&&(v.isCubeTexture||v.mapping===is)?(h===void 0&&(h=new It(new Cn(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Jr(fi.backgroundCube.uniforms),vertexShader:fi.backgroundCube.vertexShader,fragmentShader:fi.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,O,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=g.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,h.material.toneMapped=v.encoding!==je,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new It(new Es(2,2),new ji({name:"BackgroundMaterial",uniforms:Jr(fi.background.uniforms),vertexShader:fi.background.vertexShader,fragmentShader:fi.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=g.backgroundIntensity,c.material.toneMapped=v.encoding!==je,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,g){m.getRGB(Ts,Cc(s)),i.buffers.color.setClear(Ts.r,Ts.g,Ts.b,g,a)}return{getClearColor:function(){return o},setClearColor:function(m,g=1){o.set(m),l=g,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:w}}function c_(s,e,t,i){const r=s.getParameter(34921),n=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||n!==null,o={},l=m(null);let c=l,h=!1;function u(z,q,te,ie,Z){let ae=!1;if(a){const re=_(ie,te,q);c!==re&&(c=re,f(c.object)),ae=g(z,ie,te,Z),ae&&y(z,ie,te,Z)}else{const re=q.wireframe===!0;(c.geometry!==ie.id||c.program!==te.id||c.wireframe!==re)&&(c.geometry=ie.id,c.program=te.id,c.wireframe=re,ae=!0)}Z!==null&&t.update(Z,34963),(ae||h)&&(h=!1,b(z,q,te,ie),Z!==null&&s.bindBuffer(34963,t.get(Z).buffer))}function d(){return i.isWebGL2?s.createVertexArray():n.createVertexArrayOES()}function f(z){return i.isWebGL2?s.bindVertexArray(z):n.bindVertexArrayOES(z)}function w(z){return i.isWebGL2?s.deleteVertexArray(z):n.deleteVertexArrayOES(z)}function _(z,q,te){const ie=te.wireframe===!0;let Z=o[z.id];Z===void 0&&(Z={},o[z.id]=Z);let ae=Z[q.id];ae===void 0&&(ae={},Z[q.id]=ae);let re=ae[ie];return re===void 0&&(re=m(d()),ae[ie]=re),re}function m(z){const q=[],te=[],ie=[];for(let Z=0;Z<r;Z++)q[Z]=0,te[Z]=0,ie[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:te,attributeDivisors:ie,object:z,attributes:{},index:null}}function g(z,q,te,ie){const Z=c.attributes,ae=q.attributes;let re=0;const V=te.getAttributes();for(const Y in V)if(V[Y].location>=0){const K=Z[Y];let se=ae[Y];if(se===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(se=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(se=z.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;re++}return c.attributesNum!==re||c.index!==ie}function y(z,q,te,ie){const Z={},ae=q.attributes;let re=0;const V=te.getAttributes();for(const Y in V)if(V[Y].location>=0){let K=ae[Y];K===void 0&&(Y==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),Y==="instanceColor"&&z.instanceColor&&(K=z.instanceColor));const se={};se.attribute=K,K&&K.data&&(se.data=K.data),Z[Y]=se,re++}c.attributes=Z,c.attributesNum=re,c.index=ie}function v(){const z=c.newAttributes;for(let q=0,te=z.length;q<te;q++)z[q]=0}function x(z){S(z,0)}function S(z,q){const te=c.newAttributes,ie=c.enabledAttributes,Z=c.attributeDivisors;te[z]=1,ie[z]===0&&(s.enableVertexAttribArray(z),ie[z]=1),Z[z]!==q&&((i.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,q),Z[z]=q)}function L(){const z=c.newAttributes,q=c.enabledAttributes;for(let te=0,ie=q.length;te<ie;te++)q[te]!==z[te]&&(s.disableVertexAttribArray(te),q[te]=0)}function O(z,q,te,ie,Z,ae){i.isWebGL2===!0&&(te===5124||te===5125)?s.vertexAttribIPointer(z,q,te,Z,ae):s.vertexAttribPointer(z,q,te,ie,Z,ae)}function b(z,q,te,ie){if(i.isWebGL2===!1&&(z.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const Z=ie.attributes,ae=te.getAttributes(),re=q.defaultAttributeValues;for(const V in ae){const Y=ae[V];if(Y.location>=0){let K=Z[V];if(K===void 0&&(V==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),V==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),K!==void 0){const se=K.normalized,_e=K.itemSize,$=t.get(K);if($===void 0)continue;const Fe=$.buffer,we=$.type,Me=$.bytesPerElement;if(K.isInterleavedBufferAttribute){const me=K.data,Je=me.stride,Ie=K.offset;if(me.isInstancedInterleavedBuffer){for(let Ee=0;Ee<Y.locationSize;Ee++)S(Y.location+Ee,me.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ee=0;Ee<Y.locationSize;Ee++)x(Y.location+Ee);s.bindBuffer(34962,Fe);for(let Ee=0;Ee<Y.locationSize;Ee++)O(Y.location+Ee,_e/Y.locationSize,we,se,Je*Me,(Ie+_e/Y.locationSize*Ee)*Me)}else{if(K.isInstancedBufferAttribute){for(let me=0;me<Y.locationSize;me++)S(Y.location+me,K.meshPerAttribute);z.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let me=0;me<Y.locationSize;me++)x(Y.location+me);s.bindBuffer(34962,Fe);for(let me=0;me<Y.locationSize;me++)O(Y.location+me,_e/Y.locationSize,we,se,_e*Me,_e/Y.locationSize*me*Me)}}else if(re!==void 0){const se=re[V];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(Y.location,se);break;case 3:s.vertexAttrib3fv(Y.location,se);break;case 4:s.vertexAttrib4fv(Y.location,se);break;default:s.vertexAttrib1fv(Y.location,se)}}}}L()}function R(){ee();for(const z in o){const q=o[z];for(const te in q){const ie=q[te];for(const Z in ie)w(ie[Z].object),delete ie[Z];delete q[te]}delete o[z]}}function k(z){if(o[z.id]===void 0)return;const q=o[z.id];for(const te in q){const ie=q[te];for(const Z in ie)w(ie[Z].object),delete ie[Z];delete q[te]}delete o[z.id]}function X(z){for(const q in o){const te=o[q];if(te[z.id]===void 0)continue;const ie=te[z.id];for(const Z in ie)w(ie[Z].object),delete ie[Z];delete te[z.id]}}function ee(){H(),h=!0,c!==l&&(c=l,f(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:ee,resetDefaultState:H,dispose:R,releaseStatesOfGeometry:k,releaseStatesOfProgram:X,initAttributes:v,enableAttribute:x,disableUnusedAttributes:L}}function h_(s,e,t,i){const r=i.isWebGL2;let n;function a(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function l(c,h,u){if(u===0)return;let d,f;if(r)d=s,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](n,c,h,u),t.update(h,n,u)}this.setMode=a,this.render=o,this.renderInstances=l}function u_(s,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function n(O){if(O==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&s instanceof WebGL2ComputeRenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=n(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=s.getParameter(34930),d=s.getParameter(35660),f=s.getParameter(3379),w=s.getParameter(34076),_=s.getParameter(34921),m=s.getParameter(36347),g=s.getParameter(36348),y=s.getParameter(36349),v=d>0,x=a||e.has("OES_texture_float"),S=v&&x,L=a?s.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:n,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:w,maxAttributes:_,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:x,floatVertexTextures:S,maxSamples:L}}function d_(s){const e=this;let t=null,i=0,r=!1,n=!1;const a=new cr,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const w=u.length!==0||d||i!==0||r;return r=d,t=h(u,f,0),i=u.length,w},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1,c()},this.setState=function(u,d,f){const w=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!r||w===null||w.length===0||n&&!m)n?h(null):c();else{const y=n?0:i,v=y*4;let x=g.clippingState||null;l.value=x,x=h(w,d,v,f);for(let S=0;S!==v;++S)x[S]=t[S];g.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,w){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,w!==!0||m===null){const g=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let v=0,x=f;v!==_;++v,x+=4)a.copy(u[v]).applyMatrix4(y,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function p_(s){let e=new WeakMap;function t(a,o){return o===ga?a.mapping=Pr:o===wa&&(a.mapping=Ir),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===ga||o===wa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ep(l.height/2);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function n(){e=new WeakMap}return{get:i,dispose:n}}class eo extends Rc{constructor(e=-1,t=1,i=1,r=-1,n=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=n,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,n,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let n=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=c*this.view.offsetX,a=n+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(n,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qr=4,Pc=[.125,.215,.35,.446,.526,.582],hr=20,to=new eo,Ic=new Le;let io=null;const ur=(1+Math.sqrt(5))/2,en=1/ur,Dc=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,ur,en),new P(0,ur,-en),new P(en,0,ur),new P(-en,0,ur),new P(ur,en,0),new P(-ur,en,0)];class Nc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){io=this._renderer.getRenderTarget(),this._setSize(256);const n=this._allocateTargets();return n.depthBuffer=!0,this._sceneToCubeUV(e,i,r,n),t>0&&this._blur(n,0,0,t),this._applyPMREM(n),this._cleanup(n),n}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(io),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Pr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),io=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:mn,format:Kt,encoding:ir,depthBuffer:!1},r=Oc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oc(e,t,i);const{_lodMax:n}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m_(n)),this._blurMaterial=f_(n,e,t)}return r}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,to)}_sceneToCubeUV(e,t,i,r){const n=new kt(90,1,t,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Ic),l.toneMapping=xi,l.autoClear=!1;const u=new Wi({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),d=new It(new Cn,u);let f=!1;const w=e.background;w?w.isColor&&(u.color.copy(w),e.background=null,f=!0):(u.color.copy(Ic),f=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(n.up.set(0,a[_],0),n.lookAt(o[_],0,0)):m===1?(n.up.set(0,0,a[_]),n.lookAt(0,o[_],0)):(n.up.set(0,a[_],0),n.lookAt(0,0,o[_]));const g=this._cubeSize;As(r,m*g,_>2?g:0,g,g),l.setRenderTarget(r),f&&l.render(d,n),l.render(e,n)}d.geometry.dispose(),d.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Pr||e.mapping===Ir;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zc());const n=r?this._cubemapMaterial:this._equirectMaterial,a=new It(this._lodPlanes[0],n),o=n.uniforms;o.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,to)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const n=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dc[(r-1)%Dc.length];this._blur(e,r-1,r,n,a)}t.autoClear=i}_blur(e,t,i,r,n){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",n),this._halfBlur(a,e,i,i,r,"longitudinal",n)}_halfBlur(e,t,i,r,n,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new It(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,w=isFinite(n)?Math.PI/(2*f):2*Math.PI/(2*hr-1),_=n/w,m=isFinite(n)?1+Math.floor(h*_):hr;m>hr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hr}`);const g=[];let y=0;for(let O=0;O<hr;++O){const b=O/_,R=Math.exp(-b*b/2);g.push(R),O===0?y+=R:O<m&&(y+=2*R)}for(let O=0;O<g.length;O++)g[O]=g[O]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=w,d.mipInt.value=v-i;const x=this._sizeLods[r],S=3*x*(r>v-Qr?r-v+Qr:0),L=4*(this._cubeSize-x);As(t,S,L,3*x,2*x),l.setRenderTarget(t),l.render(u,to)}}function m_(s){const e=[],t=[],i=[];let r=s;const n=s-Qr+1+Pc.length;for(let a=0;a<n;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>s-Qr?l=Pc[a-s+Qr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,w=6,_=3,m=2,g=1,y=new Float32Array(_*w*f),v=new Float32Array(m*w*f),x=new Float32Array(g*w*f);for(let L=0;L<f;L++){const O=L%3*2/3-1,b=L>2?0:-1,R=[O,b,0,O+2/3,b,0,O+2/3,b+1,0,O,b,0,O+2/3,b+1,0,O,b+1,0];y.set(R,_*w*L),v.set(d,m*w*L);const k=[L,L,L,L,L,L];x.set(k,g*w*L)}const S=new ii;S.setAttribute("position",new Ct(y,_)),S.setAttribute("uv",new Ct(v,m)),S.setAttribute("faceIndex",new Ct(x,g)),e.push(S),r>Qr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Oc(s,e,t){const i=new sr(s,e,t);return i.texture.mapping=is,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function As(s,e,t,i,r){s.viewport.set(e,t,i,r),s.scissor.set(e,t,i,r)}function f_(s,e,t){const i=new Float32Array(hr),r=new P(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function zc(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function kc(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fi,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function __(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===ga||l===wa,h=l===Pr||l===Ir;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=e.get(o);return t===null&&(t=new Nc(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),e.set(o,u),u.texture}else{if(e.has(o))return e.get(o).texture;{const u=o.image;if(c&&u&&u.height>0||h&&u&&r(u)){t===null&&(t=new Nc(s));const d=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,d),o.addEventListener("dispose",n),d.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function n(o){const l=o.target;l.removeEventListener("dispose",n);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function g_(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=s.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w_(s,e,t,i){const r={},n=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const w in d.attributes)e.remove(d.attributes[w]);d.removeEventListener("dispose",a),delete r[d.id];const f=n.get(d);f&&(e.remove(f),n.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const w in d)e.update(d[w],34962);const f=u.morphAttributes;for(const w in f){const _=f[w];for(let m=0,g=_.length;m<g;m++)e.update(_[m],34962)}}function c(u){const d=[],f=u.index,w=u.attributes.position;let _=0;if(f!==null){const y=f.array;_=f.version;for(let v=0,x=y.length;v<x;v+=3){const S=y[v+0],L=y[v+1],O=y[v+2];d.push(S,L,L,O,O,S)}}else{const y=w.array;_=w.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const S=v+0,L=v+1,O=v+2;d.push(S,L,L,O,O,S)}}const m=new(uc(d)?Tc:Ec)(d,1);m.version=_;const g=n.get(u);g&&e.remove(g),n.set(u,m)}function h(u){const d=n.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return n.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function v_(s,e,t,i){const r=i.isWebGL2;let n;function a(d){n=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function h(d,f){s.drawElements(n,f,o,d*l),t.update(f,n,1)}function u(d,f,w){if(w===0)return;let _,m;if(r)_=s,m="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](n,f,o,d*l,w),t.update(f,n,w)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u}function b_(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(n,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(n/3);break;case 1:t.lines+=o*(n/2);break;case 3:t.lines+=o*(n-1);break;case 2:t.lines+=o*n;break;case 0:t.points+=o*n;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function y_(s,e){return s[0]-e[0]}function x_(s,e){return Math.abs(e[1])-Math.abs(s[1])}function S_(s,e,t){const i={},r=new Float32Array(8),n=new WeakMap,a=new Ze,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,m=_!==void 0?_.length:0;let g=n.get(h);if(g===void 0||g.count!==m){let x=function(){q.dispose(),n.delete(h),h.removeEventListener("dispose",x)};var w=x;g!==void 0&&g.texture.dispose();const S=h.morphAttributes.position!==void 0,L=h.morphAttributes.normal!==void 0,O=h.morphAttributes.color!==void 0,b=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let X=0;S===!0&&(X=1),L===!0&&(X=2),O===!0&&(X=3);let ee=h.attributes.position.count*X,H=1;ee>e.maxTextureSize&&(H=Math.ceil(ee/e.maxTextureSize),ee=e.maxTextureSize);const z=new Float32Array(ee*H*4*m),q=new fc(z,ee,H,m);q.type=Ui,q.needsUpdate=!0;const te=X*4;for(let ie=0;ie<m;ie++){const Z=b[ie],ae=R[ie],re=k[ie],V=ee*H*4*ie;for(let Y=0;Y<Z.count;Y++){const K=Y*te;S===!0&&(a.fromBufferAttribute(Z,Y),z[V+K+0]=a.x,z[V+K+1]=a.y,z[V+K+2]=a.z,z[V+K+3]=0),L===!0&&(a.fromBufferAttribute(ae,Y),z[V+K+4]=a.x,z[V+K+5]=a.y,z[V+K+6]=a.z,z[V+K+7]=0),O===!0&&(a.fromBufferAttribute(re,Y),z[V+K+8]=a.x,z[V+K+9]=a.y,z[V+K+10]=a.z,z[V+K+11]=re.itemSize===4?a.w:1)}}g={count:m,texture:q,size:new he(ee,H)},n.set(h,g),h.addEventListener("dispose",x)}let y=0;for(let x=0;x<f.length;x++)y+=f[x];const v=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(s,"morphTargetBaseInfluence",v),d.getUniforms().setValue(s,"morphTargetInfluences",f),d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}else{const _=f===void 0?0:f.length;let m=i[h.id];if(m===void 0||m.length!==_){m=[];for(let S=0;S<_;S++)m[S]=[S,0];i[h.id]=m}for(let S=0;S<_;S++){const L=m[S];L[0]=S,L[1]=f[S]}m.sort(x_);for(let S=0;S<8;S++)S<_&&m[S][1]?(o[S][0]=m[S][0],o[S][1]=m[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(y_);const g=h.morphAttributes.position,y=h.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const L=o[S],O=L[0],b=L[1];O!==Number.MAX_SAFE_INTEGER&&b?(g&&h.getAttribute("morphTarget"+S)!==g[O]&&h.setAttribute("morphTarget"+S,g[O]),y&&h.getAttribute("morphNormal"+S)!==y[O]&&h.setAttribute("morphNormal"+S,y[O]),r[S]=b,v+=b):(g&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),y&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const x=h.morphTargetsRelative?1:1-v;d.getUniforms().setValue(s,"morphTargetBaseInfluence",x),d.getUniforms().setValue(s,"morphTargetInfluences",r)}}return{update:l}}function M_(s,e,t,i){let r=new WeakMap;function n(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:n,dispose:a}}const Fc=new At,Uc=new fc,Bc=new cp,Hc=new Za,Gc=[],Vc=[],Wc=new Float32Array(16),jc=new Float32Array(9),Xc=new Float32Array(4);function tn(s,e,t){const i=s[0];if(i<=0||i>0)return s;const r=e*t;let n=Gc[r];if(n===void 0&&(n=new Float32Array(r),Gc[r]=n),e!==0){i.toArray(n,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(n,o)}return n}function mt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Cs(s,e){let t=Vc[e];t===void 0&&(t=new Int32Array(e),Vc[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function E_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function T_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function A_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function C_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function R_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(mt(t,i))return;Xc.set(i),s.uniformMatrix2fv(this.addr,!1,Xc),ft(t,i)}}function L_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(mt(t,i))return;jc.set(i),s.uniformMatrix3fv(this.addr,!1,jc),ft(t,i)}}function P_(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(mt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(mt(t,i))return;Wc.set(i),s.uniformMatrix4fv(this.addr,!1,Wc),ft(t,i)}}function I_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function D_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function N_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function O_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function z_(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function k_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function F_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function U_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function B_(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Fc,r)}function H_(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Bc,r)}function G_(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hc,r)}function V_(s,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(s.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Uc,r)}function W_(s){switch(s){case 5126:return E_;case 35664:return T_;case 35665:return A_;case 35666:return C_;case 35674:return R_;case 35675:return L_;case 35676:return P_;case 5124:case 35670:return I_;case 35667:case 35671:return D_;case 35668:case 35672:return N_;case 35669:case 35673:return O_;case 5125:return z_;case 36294:return k_;case 36295:return F_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return B_;case 35679:case 36299:case 36307:return H_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return V_}}function j_(s,e){s.uniform1fv(this.addr,e)}function X_(s,e){const t=tn(e,this.size,2);s.uniform2fv(this.addr,t)}function q_(s,e){const t=tn(e,this.size,3);s.uniform3fv(this.addr,t)}function Y_(s,e){const t=tn(e,this.size,4);s.uniform4fv(this.addr,t)}function J_(s,e){const t=tn(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function $_(s,e){const t=tn(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Z_(s,e){const t=tn(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K_(s,e){s.uniform1iv(this.addr,e)}function Q_(s,e){s.uniform2iv(this.addr,e)}function eg(s,e){s.uniform3iv(this.addr,e)}function tg(s,e){s.uniform4iv(this.addr,e)}function ig(s,e){s.uniform1uiv(this.addr,e)}function rg(s,e){s.uniform2uiv(this.addr,e)}function ng(s,e){s.uniform3uiv(this.addr,e)}function sg(s,e){s.uniform4uiv(this.addr,e)}function ag(s,e,t){const i=this.cache,r=e.length,n=Cs(t,r);mt(i,n)||(s.uniform1iv(this.addr,n),ft(i,n));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Fc,n[a])}function og(s,e,t){const i=this.cache,r=e.length,n=Cs(t,r);mt(i,n)||(s.uniform1iv(this.addr,n),ft(i,n));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Bc,n[a])}function lg(s,e,t){const i=this.cache,r=e.length,n=Cs(t,r);mt(i,n)||(s.uniform1iv(this.addr,n),ft(i,n));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hc,n[a])}function cg(s,e,t){const i=this.cache,r=e.length,n=Cs(t,r);mt(i,n)||(s.uniform1iv(this.addr,n),ft(i,n));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Uc,n[a])}function hg(s){switch(s){case 5126:return j_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return J_;case 35675:return $_;case 35676:return Z_;case 5124:case 35670:return K_;case 35667:case 35671:return Q_;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ig;case 36294:return rg;case 36295:return ng;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return ag;case 35679:case 36299:case 36307:return og;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}class ug{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=W_(t.type)}}class dg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=hg(t.type)}}class pg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let n=0,a=r.length;n!==a;++n){const o=r[n];o.setValue(e,t[o.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function qc(s,e){s.seq.push(e),s.map[e.id]=e}function mg(s,e,t){const i=s.name,r=i.length;for(no.lastIndex=0;;){const n=no.exec(i),a=no.lastIndex;let o=n[1];const l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){qc(t,c===void 0?new ug(o,s,e):new dg(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new pg(o),qc(t,h)),t=h}}}class Rs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const n=e.getActiveUniform(t,r),a=e.getUniformLocation(t,n.name);mg(n,a,this)}}setValue(e,t,i,r){const n=this.map[t];n!==void 0&&n.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let n=0,a=t.length;n!==a;++n){const o=t[n],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,n=e.length;r!==n;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Yc(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}let fg=0;function _g(s,e){const t=s.split(`
`),i=[],r=Math.max(e-6,0),n=Math.min(e+6,t.length);for(let a=r;a<n;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function gg(s){switch(s){case ir:return["Linear","( value )"];case je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Jc(s,e,t){const i=s.getShaderParameter(e,35713),r=s.getShaderInfoLog(e).trim();if(i&&r==="")return"";const n=/ERROR: 0:(\d+)/.exec(r);if(n){const a=parseInt(n[1]);return t.toUpperCase()+`

`+r+`

`+_g(s.getShaderSource(e),a)}else return r}function wg(s,e){const t=gg(e);return"vec4 "+s+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vg(s,e){let t;switch(e){case xd:t="Linear";break;case Sd:t="Reinhard";break;case Md:t="OptimizedCineon";break;case Ed:t="ACESFilmic";break;case Td:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Rn).join(`
`)}function yg(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function xg(s,e){const t={},i=s.getProgramParameter(e,35721);for(let r=0;r<i;r++){const n=s.getActiveAttrib(e,r),a=n.name;let o=1;n.type===35674&&(o=2),n.type===35675&&(o=3),n.type===35676&&(o=4),t[a]={type:n.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Rn(s){return s!==""}function $c(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zc(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(s){return s.replace(Sg,Mg)}function Mg(s,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return so(t)}const Eg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kc(s){return s.replace(Eg,Tg)}function Tg(s,e,t,i){let r="";for(let n=parseInt(e);n<parseInt(t);n++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return r}function Qc(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ag(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===El?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===pn&&(e="SHADOWMAP_TYPE_VSM"),e}function Cg(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pr:case Ir:e="ENVMAP_TYPE_CUBE";break;case is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rg(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Lg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case bd:e="ENVMAP_BLENDING_MIX";break;case yd:e="ENVMAP_BLENDING_ADD";break}return e}function Pg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ig(s,e,t,i){const r=s.getContext(),n=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Ag(t),c=Cg(t),h=Rg(t),u=Lg(t),d=Pg(t),f=t.isWebGL2?"":bg(t),w=yg(n),_=r.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[w].filter(Rn).join(`
`),m.length>0&&(m+=`
`),g=[f,w].filter(Rn).join(`
`),g.length>0&&(g+=`
`)):(m=[Qc(t),"#define SHADER_NAME "+t.shaderName,w,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rn).join(`
`),g=[f,Qc(t),"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?De.tonemapping_pars_fragment:"",t.toneMapping!==xi?vg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,wg("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rn).join(`
`)),a=so(a),a=$c(a,t),a=Zc(a,t),o=so(o),o=$c(o,t),o=Zc(o,t),a=Kc(a),o=Kc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=y+m+a,x=y+g+o,S=Yc(r,35633,v),L=Yc(r,35632,x);if(r.attachShader(_,S),r.attachShader(_,L),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_),s.debug.checkShaderErrors){const R=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(S).trim(),X=r.getShaderInfoLog(L).trim();let ee=!0,H=!0;if(r.getProgramParameter(_,35714)===!1){ee=!1;const z=Jc(r,S,"vertex"),q=Jc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,35715)+`

Program Info Log: `+R+`
`+z+`
`+q)}else R!==""?console.warn("THREE.WebGLProgram: Program Info Log:",R):(k===""||X==="")&&(H=!1);H&&(this.diagnostics={runnable:ee,programLog:R,vertexShader:{log:k,prefix:m},fragmentShader:{log:X,prefix:g}})}r.deleteShader(S),r.deleteShader(L);let O;this.getUniforms=function(){return O===void 0&&(O=new Rs(r,_)),O};let b;return this.getAttributes=function(){return b===void 0&&(b=xg(r,_)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=L,this}let Dg=0;class Ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),n=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(n)===!1&&(a.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Og(e),t.set(e,i)),i}}class Og{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}}function zg(s,e,t,i,r,n,a){const o=new Ha,l=new Ng,c=[],h=r.isWebGL2,u=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b,R,k,X,ee){const H=X.fog,z=ee.geometry,q=b.isMeshStandardMaterial?X.environment:null,te=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),ie=te&&te.mapping===is?te.image.height:null,Z=w[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ae=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,re=ae!==void 0?ae.length:0;let V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let Y,K,se,_e;if(Z){const me=fi[Z];Y=me.vertexShader,K=me.fragmentShader}else Y=b.vertexShader,K=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const $=s.getRenderTarget(),Fe=b.alphaTest>0,we=b.clearcoat>0,Me=b.iridescence>0;return{isWebGL2:h,shaderID:Z,shaderName:b.type,vertexShader:Y,fragmentShader:K,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,instancing:ee.isInstancedMesh===!0,instancingColor:ee.isInstancedMesh===!0&&ee.instanceColor!==null,supportsVertexTextures:d,outputEncoding:$===null?s.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:ir,map:!!b.map,matcap:!!b.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:ie,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Xd,tangentSpaceNormalMap:b.normalMapType===oc,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===je,clearcoat:we,clearcoatMap:we&&!!b.clearcoatMap,clearcoatRoughnessMap:we&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:we&&!!b.clearcoatNormalMap,iridescence:Me,iridescenceMap:Me&&!!b.iridescenceMap,iridescenceThicknessMap:Me&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===Rr,alphaMap:!!b.alphaMap,alphaTest:Fe,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!z.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:u,skinning:ee.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:V,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:b.toneMapped?s.toneMapping:xi,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===es,flipSided:b.side===$t,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function m(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)R.push(k),R.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(g(R,b),y(R,b),R.push(s.outputEncoding)),R.push(b.customProgramCacheKey),R.join()}function g(b,R){b.push(R.precision),b.push(R.outputEncoding),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.combine),b.push(R.vertexUvs),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function y(b,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.map&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.lightMap&&o.enable(7),R.aoMap&&o.enable(8),R.emissiveMap&&o.enable(9),R.bumpMap&&o.enable(10),R.normalMap&&o.enable(11),R.objectSpaceNormalMap&&o.enable(12),R.tangentSpaceNormalMap&&o.enable(13),R.clearcoat&&o.enable(14),R.clearcoatMap&&o.enable(15),R.clearcoatRoughnessMap&&o.enable(16),R.clearcoatNormalMap&&o.enable(17),R.iridescence&&o.enable(18),R.iridescenceMap&&o.enable(19),R.iridescenceThicknessMap&&o.enable(20),R.displacementMap&&o.enable(21),R.specularMap&&o.enable(22),R.roughnessMap&&o.enable(23),R.metalnessMap&&o.enable(24),R.gradientMap&&o.enable(25),R.alphaMap&&o.enable(26),R.alphaTest&&o.enable(27),R.vertexColors&&o.enable(28),R.vertexAlphas&&o.enable(29),R.vertexUvs&&o.enable(30),R.vertexTangents&&o.enable(31),R.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.physicallyCorrectLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.specularIntensityMap&&o.enable(15),R.specularColorMap&&o.enable(16),R.transmission&&o.enable(17),R.transmissionMap&&o.enable(18),R.thicknessMap&&o.enable(19),R.sheen&&o.enable(20),R.sheenColorMap&&o.enable(21),R.sheenRoughnessMap&&o.enable(22),R.decodeVideoTexture&&o.enable(23),R.opaque&&o.enable(24),b.push(o.mask)}function v(b){const R=w[b.type];let k;if(R){const X=fi[R];k=yp.clone(X.uniforms)}else k=b.uniforms;return k}function x(b,R){let k;for(let X=0,ee=c.length;X<ee;X++){const H=c[X];if(H.cacheKey===R){k=H,++k.usedTimes;break}}return k===void 0&&(k=new Ig(s,R,b,n),c.push(k)),k}function S(b){if(--b.usedTimes===0){const R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function L(b){l.remove(b)}function O(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:x,releaseProgram:S,releaseShaderCache:L,programs:c,dispose:O}}function kg(){let s=new WeakMap;function e(n){let a=s.get(n);return a===void 0&&(a={},s.set(n,a)),a}function t(n){s.delete(n)}function i(n,a,o){s.get(n)[a]=o}function r(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Fg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function th(){const s=[];let e=0;const t=[],i=[],r=[];function n(){e=0,t.length=0,i.length=0,r.length=0}function a(u,d,f,w,_,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:d,material:f,groupOrder:w,renderOrder:u.renderOrder,z:_,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=f,g.groupOrder=w,g.renderOrder=u.renderOrder,g.z=_,g.group=m),e++,g}function o(u,d,f,w,_,m){const g=a(u,d,f,w,_,m);f.transmission>0?i.push(g):f.transparent===!0?r.push(g):t.push(g)}function l(u,d,f,w,_,m){const g=a(u,d,f,w,_,m);f.transmission>0?i.unshift(g):f.transparent===!0?r.unshift(g):t.unshift(g)}function c(u,d){t.length>1&&t.sort(u||Fg),i.length>1&&i.sort(d||eh),r.length>1&&r.sort(d||eh)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:n,push:o,unshift:l,finish:h,sort:c}}function Ug(){let s=new WeakMap;function e(i,r){const n=s.get(i);let a;return n===void 0?(a=new th,s.set(i,[a])):r>=n.length?(a=new th,n.push(a)):a=n[r],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Bg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Hg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Gg=0;function Vg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Wg(s,e){const t=new Bg,i=Hg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new P);const n=new P,a=new Ne,o=new Ne;function l(h,u){let d=0,f=0,w=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,m=0,g=0,y=0,v=0,x=0,S=0,L=0,O=0,b=0;h.sort(Vg);const R=u!==!0?Math.PI:1;for(let X=0,ee=h.length;X<ee;X++){const H=h[X],z=H.color,q=H.intensity,te=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)d+=z.r*q*R,f+=z.g*q*R,w+=z.b*q*R;else if(H.isLightProbe)for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(H.sh.coefficients[Z],q);else if(H.isDirectionalLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*R),H.castShadow){const ae=H.shadow,re=i.get(H);re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,r.directionalShadow[_]=re,r.directionalShadowMap[_]=ie,r.directionalShadowMatrix[_]=H.shadow.matrix,x++}r.directional[_]=Z,_++}else if(H.isSpotLight){const Z=t.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(z).multiplyScalar(q*R),Z.distance=te,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,r.spot[g]=Z;const ae=H.shadow;if(H.map&&(r.spotLightMap[O]=H.map,O++,ae.updateMatrices(H),H.castShadow&&b++),r.spotLightMatrix[g]=ae.matrix,H.castShadow){const re=i.get(H);re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,r.spotShadow[g]=re,r.spotShadowMap[g]=ie,L++}g++}else if(H.isRectAreaLight){const Z=t.get(H);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),r.rectArea[y]=Z,y++}else if(H.isPointLight){const Z=t.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity*R),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const ae=H.shadow,re=i.get(H);re.shadowBias=ae.bias,re.shadowNormalBias=ae.normalBias,re.shadowRadius=ae.radius,re.shadowMapSize=ae.mapSize,re.shadowCameraNear=ae.camera.near,re.shadowCameraFar=ae.camera.far,r.pointShadow[m]=re,r.pointShadowMap[m]=ie,r.pointShadowMatrix[m]=H.shadow.matrix,S++}r.point[m]=Z,m++}else if(H.isHemisphereLight){const Z=t.get(H);Z.skyColor.copy(H.color).multiplyScalar(q*R),Z.groundColor.copy(H.groundColor).multiplyScalar(q*R),r.hemi[v]=Z,v++}}y>0&&(e.isWebGL2||s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=f,r.ambient[2]=w;const k=r.hash;(k.directionalLength!==_||k.pointLength!==m||k.spotLength!==g||k.rectAreaLength!==y||k.hemiLength!==v||k.numDirectionalShadows!==x||k.numPointShadows!==S||k.numSpotShadows!==L||k.numSpotMaps!==O)&&(r.directional.length=_,r.spot.length=g,r.rectArea.length=y,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=L+O-b,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=b,k.directionalLength=_,k.pointLength=m,k.spotLength=g,k.rectAreaLength=y,k.hemiLength=v,k.numDirectionalShadows=x,k.numPointShadows=S,k.numSpotShadows=L,k.numSpotMaps=O,r.version=Gg++)}function c(h,u){let d=0,f=0,w=0,_=0,m=0;const g=u.matrixWorldInverse;for(let y=0,v=h.length;y<v;y++){const x=h[y];if(x.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),d++}else if(x.isSpotLight){const S=r.spot[w];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(n),S.direction.transformDirection(g),w++}else if(x.isRectAreaLight){const S=r.rectArea[_];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),o.identity(),a.copy(x.matrixWorld),a.premultiply(g),o.extractRotation(a),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const S=r.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),m++}}}return{setup:l,setupView:c,state:r}}function ih(s,e){const t=new Wg(s,e),i=[],r=[];function n(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:n,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jg(s,e){let t=new WeakMap;function i(n,a=0){const o=t.get(n);let l;return o===void 0?(l=new ih(s,e),t.set(n,[l])):a>=o.length?(l=new ih(s,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Xg extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qg extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new P,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function $g(s,e,t){let i=new Qa;const r=new he,n=new he,a=new Ze,o=new Xg({depthPacking:jd}),l=new qg,c={},h=t.maxTextureSize,u={0:$t,1:ki,2:es},d=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Yg,fragmentShader:Jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const w=new ii;w.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new It(w,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=El,this.render=function(x,S,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const O=s.getRenderTarget(),b=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Fi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let X=0,ee=x.length;X<ee;X++){const H=x[X],z=H.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const q=z.getFrameExtents();if(r.multiply(q),n.copy(z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(n.x=Math.floor(h/q.x),r.x=n.x*q.x,z.mapSize.x=n.x),r.y>h&&(n.y=Math.floor(h/q.y),r.y=n.y*q.y,z.mapSize.y=n.y)),z.map===null){const ie=this.type!==pn?{minFilter:vt,magFilter:vt}:{};z.map=new sr(r.x,r.y,ie),z.map.texture.name=H.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const te=z.getViewportCount();for(let ie=0;ie<te;ie++){const Z=z.getViewport(ie);a.set(n.x*Z.x,n.y*Z.y,n.x*Z.z,n.y*Z.w),k.viewport(a),z.updateMatrices(H,ie),i=z.getFrustum(),v(S,L,z.camera,H,this.type)}z.isPointLightShadow!==!0&&this.type===pn&&g(z,L),z.needsUpdate=!1}m.needsUpdate=!1,s.setRenderTarget(O,b,R)};function g(x,S){const L=e.update(_);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,f.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new sr(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,s.setRenderTarget(x.mapPass),s.clear(),s.renderBufferDirect(S,null,L,d,_,null),f.uniforms.shadow_pass.value=x.mapPass.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,s.setRenderTarget(x.map),s.clear(),s.renderBufferDirect(S,null,L,f,_,null)}function y(x,S,L,O,b,R){let k=null;const X=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(X!==void 0)k=X;else if(k=L.isPointLight===!0?l:o,s.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const ee=k.uuid,H=S.uuid;let z=c[ee];z===void 0&&(z={},c[ee]=z);let q=z[H];q===void 0&&(q=k.clone(),z[H]=q),k=q}return k.visible=S.visible,k.wireframe=S.wireframe,R===pn?k.side=S.shadowSide!==null?S.shadowSide:S.side:k.side=S.shadowSide!==null?S.shadowSide:u[S.side],k.alphaMap=S.alphaMap,k.alphaTest=S.alphaTest,k.map=S.map,k.clipShadows=S.clipShadows,k.clippingPlanes=S.clippingPlanes,k.clipIntersection=S.clipIntersection,k.displacementMap=S.displacementMap,k.displacementScale=S.displacementScale,k.displacementBias=S.displacementBias,k.wireframeLinewidth=S.wireframeLinewidth,k.linewidth=S.linewidth,L.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(L.matrixWorld),k.nearDistance=O,k.farDistance=b),k}function v(x,S,L,O,b){if(x.visible===!1)return;if(x.layers.test(S.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&b===pn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const k=e.update(x),X=x.material;if(Array.isArray(X)){const ee=k.groups;for(let H=0,z=ee.length;H<z;H++){const q=ee[H],te=X[q.materialIndex];if(te&&te.visible){const ie=y(x,te,O,L.near,L.far,b);s.renderBufferDirect(L,null,k,ie,x,q)}}}else if(X.visible){const ee=y(x,X,O,L.near,L.far,b);s.renderBufferDirect(L,null,k,ee,x,null)}}const R=x.children;for(let k=0,X=R.length;k<X;k++)v(R[k],S,L,O,b)}}function Zg(s,e,t){const i=t.isWebGL2;function r(){let D=!1;const W=new Ze;let Q=null;const de=new Ze(0,0,0,0);return{setMask:function(Se){Q!==Se&&!D&&(s.colorMask(Se,Se,Se,Se),Q=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Xe,Tt,Dt,Sr){Sr===!0&&(Se*=Dt,Xe*=Dt,Tt*=Dt),W.set(Se,Xe,Tt,Dt),de.equals(W)===!1&&(s.clearColor(Se,Xe,Tt,Dt),de.copy(W))},reset:function(){D=!1,Q=null,de.set(-1,0,0,0)}}}function n(){let D=!1,W=null,Q=null,de=null;return{setTest:function(Se){Se?Fe(2929):we(2929)},setMask:function(Se){W!==Se&&!D&&(s.depthMask(Se),W=Se)},setFunc:function(Se){if(Q!==Se){switch(Se){case pd:s.depthFunc(512);break;case md:s.depthFunc(519);break;case fd:s.depthFunc(513);break;case _a:s.depthFunc(515);break;case _d:s.depthFunc(514);break;case gd:s.depthFunc(518);break;case wd:s.depthFunc(516);break;case vd:s.depthFunc(517);break;default:s.depthFunc(515)}Q=Se}},setLocked:function(Se){D=Se},setClear:function(Se){de!==Se&&(s.clearDepth(Se),de=Se)},reset:function(){D=!1,W=null,Q=null,de=null}}}function a(){let D=!1,W=null,Q=null,de=null,Se=null,Xe=null,Tt=null,Dt=null,Sr=null;return{setTest:function(rt){D||(rt?Fe(2960):we(2960))},setMask:function(rt){W!==rt&&!D&&(s.stencilMask(rt),W=rt)},setFunc:function(rt,Ni,si){(Q!==rt||de!==Ni||Se!==si)&&(s.stencilFunc(rt,Ni,si),Q=rt,de=Ni,Se=si)},setOp:function(rt,Ni,si){(Xe!==rt||Tt!==Ni||Dt!==si)&&(s.stencilOp(rt,Ni,si),Xe=rt,Tt=Ni,Dt=si)},setLocked:function(rt){D=rt},setClear:function(rt){Sr!==rt&&(s.clearStencil(rt),Sr=rt)},reset:function(){D=!1,W=null,Q=null,de=null,Se=null,Xe=null,Tt=null,Dt=null,Sr=null}}}const o=new r,l=new n,c=new a,h=new WeakMap,u=new WeakMap;let d={},f={},w=new WeakMap,_=[],m=null,g=!1,y=null,v=null,x=null,S=null,L=null,O=null,b=null,R=!1,k=null,X=null,ee=null,H=null,z=null;const q=s.getParameter(35661);let te=!1,ie=0;const Z=s.getParameter(7938);Z.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(Z)[1]),te=ie>=1):Z.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),te=ie>=2);let ae=null,re={};const V=s.getParameter(3088),Y=s.getParameter(2978),K=new Ze().fromArray(V),se=new Ze().fromArray(Y);function _e(D,W,Q){const de=new Uint8Array(4),Se=s.createTexture();s.bindTexture(D,Se),s.texParameteri(D,10241,9728),s.texParameteri(D,10240,9728);for(let Xe=0;Xe<Q;Xe++)s.texImage2D(W+Xe,0,6408,1,1,0,6408,5121,de);return Se}const $={};$[3553]=_e(3553,3553,1),$[34067]=_e(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Fe(2929),l.setFunc(_a),wt(!1),Ut(Ml),Fe(2884),Mt(Fi);function Fe(D){d[D]!==!0&&(s.enable(D),d[D]=!0)}function we(D){d[D]!==!1&&(s.disable(D),d[D]=!1)}function Me(D,W){return f[D]!==W?(s.bindFramebuffer(D,W),f[D]=W,i&&(D===36009&&(f[36160]=W),D===36160&&(f[36009]=W)),!0):!1}function me(D,W){let Q=_,de=!1;if(D)if(Q=w.get(W),Q===void 0&&(Q=[],w.set(W,Q)),D.isWebGLMultipleRenderTargets){const Se=D.texture;if(Q.length!==Se.length||Q[0]!==36064){for(let Xe=0,Tt=Se.length;Xe<Tt;Xe++)Q[Xe]=36064+Xe;Q.length=Se.length,de=!0}}else Q[0]!==36064&&(Q[0]=36064,de=!0);else Q[0]!==1029&&(Q[0]=1029,de=!0);de&&(t.isWebGL2?s.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Je(D){return m!==D?(s.useProgram(D),m=D,!0):!1}const Ie={[Lr]:32774,[id]:32778,[rd]:32779};if(i)Ie[Cl]=32775,Ie[Rl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Ie[Cl]=D.MIN_EXT,Ie[Rl]=D.MAX_EXT)}const Ee={[nd]:0,[sd]:1,[ad]:768,[Ll]:770,[dd]:776,[hd]:774,[ld]:772,[od]:769,[Pl]:771,[ud]:775,[cd]:773};function Mt(D,W,Q,de,Se,Xe,Tt,Dt){if(D===Fi){g===!0&&(we(3042),g=!1);return}if(g===!1&&(Fe(3042),g=!0),D!==td){if(D!==y||Dt!==R){if((v!==Lr||L!==Lr)&&(s.blendEquation(32774),v=Lr,L=Lr),Dt)switch(D){case Rr:s.blendFuncSeparate(1,771,1,771);break;case fa:s.blendFunc(1,1);break;case Tl:s.blendFuncSeparate(0,769,0,1);break;case Al:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rr:s.blendFuncSeparate(770,771,1,771);break;case fa:s.blendFunc(770,1);break;case Tl:s.blendFuncSeparate(0,769,0,1);break;case Al:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,S=null,O=null,b=null,y=D,R=Dt}return}Se=Se||W,Xe=Xe||Q,Tt=Tt||de,(W!==v||Se!==L)&&(s.blendEquationSeparate(Ie[W],Ie[Se]),v=W,L=Se),(Q!==x||de!==S||Xe!==O||Tt!==b)&&(s.blendFuncSeparate(Ee[Q],Ee[de],Ee[Xe],Ee[Tt]),x=Q,S=de,O=Xe,b=Tt),y=D,R=!1}function gt(D,W){D.side===es?we(2884):Fe(2884);let Q=D.side===$t;W&&(Q=!Q),wt(Q),D.blending===Rr&&D.transparent===!1?Mt(Fi):Mt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const de=D.stencilWrite;c.setTest(de),de&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Fe(32926):we(32926)}function wt(D){k!==D&&(D?s.frontFace(2304):s.frontFace(2305),k=D)}function Ut(D){D!==Ku?(Fe(2884),D!==X&&(D===Ml?s.cullFace(1029):D===Qu?s.cullFace(1028):s.cullFace(1032))):we(2884),X=D}function lt(D){D!==ee&&(te&&s.lineWidth(D),ee=D)}function Ye(D,W,Q){D?(Fe(32823),(H!==W||z!==Q)&&(s.polygonOffset(W,Q),H=W,z=Q)):we(32823)}function ni(D){D?Fe(3089):we(3089)}function Vt(D){D===void 0&&(D=33984+q-1),ae!==D&&(s.activeTexture(D),ae=D)}function T(D,W,Q){Q===void 0&&(ae===null?Q=33984+q-1:Q=ae);let de=re[Q];de===void 0&&(de={type:void 0,texture:void 0},re[Q]=de),(de.type!==D||de.texture!==W)&&(ae!==Q&&(s.activeTexture(Q),ae=Q),s.bindTexture(D,W||$[D]),de.type=D,de.texture=W)}function M(){const D=re[ae];D!==void 0&&D.type!==void 0&&(s.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function G(){try{s.compressedTexImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{s.compressedTexImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{s.texSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{s.texSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{s.texStorage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{s.texStorage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{s.texImage3D.apply(s,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(D){K.equals(D)===!1&&(s.scissor(D.x,D.y,D.z,D.w),K.copy(D))}function ye(D){se.equals(D)===!1&&(s.viewport(D.x,D.y,D.z,D.w),se.copy(D))}function Re(D,W){let Q=u.get(W);Q===void 0&&(Q=new WeakMap,u.set(W,Q));let de=Q.get(D);de===void 0&&(de=s.getUniformBlockIndex(W,D.name),Q.set(D,de))}function Be(D,W){const Q=u.get(W).get(D);h.get(W)!==Q&&(s.uniformBlockBinding(W,Q,D.__bindingPointIndex),h.set(W,Q))}function Et(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),i===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},ae=null,re={},f={},w=new WeakMap,_=[],m=null,g=!1,y=null,v=null,x=null,S=null,L=null,O=null,b=null,R=!1,k=null,X=null,ee=null,H=null,z=null,K.set(0,0,s.canvas.width,s.canvas.height),se.set(0,0,s.canvas.width,s.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Fe,disable:we,bindFramebuffer:Me,drawBuffers:me,useProgram:Je,setBlending:Mt,setMaterial:gt,setFlipSided:wt,setCullFace:Ut,setLineWidth:lt,setPolygonOffset:Ye,setScissorTest:ni,activeTexture:Vt,bindTexture:T,unbindTexture:M,compressedTexImage2D:G,compressedTexImage3D:ne,texImage2D:fe,texImage3D:pe,updateUBOMapping:Re,uniformBlockBinding:Be,texStorage2D:F,texStorage3D:ue,texSubImage2D:oe,texSubImage3D:ce,compressedTexSubImage2D:Te,compressedTexSubImage3D:A,scissor:ve,viewport:ye,reset:Et}}function Kg(s,e,t,i,r,n,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,u=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),w=new WeakMap;let _;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,M){return g?new OffscreenCanvas(T,M):vn("canvas")}function v(T,M,G,ne){let oe=1;if((T.width>ne||T.height>ne)&&(oe=ne/Math.max(T.width,T.height)),oe<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ce=M?as:Math.floor,Te=ce(oe*T.width),A=ce(oe*T.height);_===void 0&&(_=y(Te,A));const F=G?y(Te,A):_;return F.width=Te,F.height=A,F.getContext("2d").drawImage(T,0,0,Te,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+Te+"x"+A+")."),F}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function x(T){return Ra(T.width)&&Ra(T.height)}function S(T){return o?!1:T.wrapS!==Zt||T.wrapT!==Zt||T.minFilter!==vt&&T.minFilter!==Gt}function L(T,M){return T.generateMipmaps&&M&&T.minFilter!==vt&&T.minFilter!==Gt}function O(T){s.generateMipmap(T)}function b(T,M,G,ne,oe=!1){if(o===!1)return M;if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ce=M;return M===6403&&(G===5126&&(ce=33326),G===5131&&(ce=33325),G===5121&&(ce=33321)),M===33319&&(G===5126&&(ce=33328),G===5131&&(ce=33327),G===5121&&(ce=33323)),M===6408&&(G===5126&&(ce=34836),G===5131&&(ce=34842),G===5121&&(ce=ne===je&&oe===!1?35907:32856),G===32819&&(ce=32854),G===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function R(T,M,G){return L(T,G)===!0||T.isFramebufferTexture&&T.minFilter!==vt&&T.minFilter!==Gt?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function k(T){return T===vt||T===va||T===ns?9728:9729}function X(T){const M=T.target;M.removeEventListener("dispose",X),H(M),M.isVideoTexture&&w.delete(M)}function ee(T){const M=T.target;M.removeEventListener("dispose",ee),q(M)}function H(T){const M=i.get(T);if(M.__webglInit===void 0)return;const G=T.source,ne=m.get(G);if(ne){const oe=ne[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&z(T),Object.keys(ne).length===0&&m.delete(G)}i.remove(T)}function z(T){const M=i.get(T);s.deleteTexture(M.__webglTexture);const G=T.source,ne=m.get(G);delete ne[M.__cacheKey],a.memory.textures--}function q(T){const M=T.texture,G=i.get(T),ne=i.get(M);if(ne.__webglTexture!==void 0&&(s.deleteTexture(ne.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)s.deleteFramebuffer(G.__webglFramebuffer[oe]),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer[oe]);else{if(s.deleteFramebuffer(G.__webglFramebuffer),G.__webglDepthbuffer&&s.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&s.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let oe=0;oe<G.__webglColorRenderbuffer.length;oe++)G.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(G.__webglColorRenderbuffer[oe]);G.__webglDepthRenderbuffer&&s.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let oe=0,ce=M.length;oe<ce;oe++){const Te=i.get(M[oe]);Te.__webglTexture&&(s.deleteTexture(Te.__webglTexture),a.memory.textures--),i.remove(M[oe])}i.remove(M),i.remove(T)}let te=0;function ie(){te=0}function Z(){const T=te;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),te+=1,T}function ae(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.encoding),M.join()}function re(T,M){const G=i.get(T);if(T.isVideoTexture&&ni(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const ne=T.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(G,T,M);return}}t.bindTexture(3553,G.__webglTexture,33984+M)}function V(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){we(G,T,M);return}t.bindTexture(35866,G.__webglTexture,33984+M)}function Y(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){we(G,T,M);return}t.bindTexture(32879,G.__webglTexture,33984+M)}function K(T,M){const G=i.get(T);if(T.version>0&&G.__version!==T.version){Me(G,T,M);return}t.bindTexture(34067,G.__webglTexture,33984+M)}const se={[Dr]:10497,[Zt]:33071,[rs]:33648},_e={[vt]:9728,[va]:9984,[ns]:9986,[Gt]:9729,[Nl]:9985,[Ki]:9987};function $(T,M,G){if(G?(s.texParameteri(T,10242,se[M.wrapS]),s.texParameteri(T,10243,se[M.wrapT]),(T===32879||T===35866)&&s.texParameteri(T,32882,se[M.wrapR]),s.texParameteri(T,10240,_e[M.magFilter]),s.texParameteri(T,10241,_e[M.minFilter])):(s.texParameteri(T,10242,33071),s.texParameteri(T,10243,33071),(T===32879||T===35866)&&s.texParameteri(T,32882,33071),(M.wrapS!==Zt||M.wrapT!==Zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(T,10240,k(M.magFilter)),s.texParameteri(T,10241,k(M.minFilter)),M.minFilter!==vt&&M.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===vt||M.minFilter!==ns&&M.minFilter!==Ki||M.type===Ui&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===mn&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(s.texParameterf(T,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function Fe(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",X));const ne=M.source;let oe=m.get(ne);oe===void 0&&(oe={},m.set(ne,oe));const ce=ae(M);if(ce!==T.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,G=!0),oe[ce].usedTimes++;const Te=oe[T.__cacheKey];Te!==void 0&&(oe[T.__cacheKey].usedTimes--,Te.usedTimes===0&&z(M)),T.__cacheKey=ce,T.__webglTexture=oe[ce].texture}return G}function we(T,M,G){let ne=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=35866),M.isData3DTexture&&(ne=32879);const oe=Fe(T,M),ce=M.source;t.bindTexture(ne,T.__webglTexture,33984+G);const Te=i.get(ce);if(ce.version!==Te.__version||oe===!0){t.activeTexture(33984+G),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const A=S(M)&&x(M.image)===!1;let F=v(M.image,A,!1,h);F=Vt(M,F);const ue=x(F)||o,fe=n.convert(M.format,M.encoding);let pe=n.convert(M.type),ve=b(M.internalFormat,fe,pe,M.encoding,M.isVideoTexture);$(ne,M,ue);let ye;const Re=M.mipmaps,Be=o&&M.isVideoTexture!==!0,Et=Te.__version===void 0||oe===!0,D=R(M,F,ue);if(M.isDepthTexture)ve=6402,o?M.type===Ui?ve=36012:M.type===er?ve=33190:M.type===Nr?ve=35056:ve=33189:M.type===Ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===tr&&ve===6402&&M.type!==Ol&&M.type!==er&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=er,pe=n.convert(M.type)),M.format===Or&&ve===6402&&(ve=34041,M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Nr,pe=n.convert(M.type))),Et&&(Be?t.texStorage2D(3553,1,ve,F.width,F.height):t.texImage2D(3553,0,ve,F.width,F.height,0,fe,pe,null));else if(M.isDataTexture)if(Re.length>0&&ue){Be&&Et&&t.texStorage2D(3553,D,ve,Re[0].width,Re[0].height);for(let W=0,Q=Re.length;W<Q;W++)ye=Re[W],Be?t.texSubImage2D(3553,W,0,0,ye.width,ye.height,fe,pe,ye.data):t.texImage2D(3553,W,ve,ye.width,ye.height,0,fe,pe,ye.data);M.generateMipmaps=!1}else Be?(Et&&t.texStorage2D(3553,D,ve,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,fe,pe,F.data)):t.texImage2D(3553,0,ve,F.width,F.height,0,fe,pe,F.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Be&&Et&&t.texStorage3D(35866,D,ve,Re[0].width,Re[0].height,F.depth);for(let W=0,Q=Re.length;W<Q;W++)ye=Re[W],M.format!==Kt?fe!==null?Be?t.compressedTexSubImage3D(35866,W,0,0,0,ye.width,ye.height,F.depth,fe,ye.data,0,0):t.compressedTexImage3D(35866,W,ve,ye.width,ye.height,F.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage3D(35866,W,0,0,0,ye.width,ye.height,F.depth,fe,pe,ye.data):t.texImage3D(35866,W,ve,ye.width,ye.height,F.depth,0,fe,pe,ye.data)}else{Be&&Et&&t.texStorage2D(3553,D,ve,Re[0].width,Re[0].height);for(let W=0,Q=Re.length;W<Q;W++)ye=Re[W],M.format!==Kt?fe!==null?Be?t.compressedTexSubImage2D(3553,W,0,0,ye.width,ye.height,fe,ye.data):t.compressedTexImage2D(3553,W,ve,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?t.texSubImage2D(3553,W,0,0,ye.width,ye.height,fe,pe,ye.data):t.texImage2D(3553,W,ve,ye.width,ye.height,0,fe,pe,ye.data)}else if(M.isDataArrayTexture)Be?(Et&&t.texStorage3D(35866,D,ve,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,fe,pe,F.data)):t.texImage3D(35866,0,ve,F.width,F.height,F.depth,0,fe,pe,F.data);else if(M.isData3DTexture)Be?(Et&&t.texStorage3D(32879,D,ve,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,fe,pe,F.data)):t.texImage3D(32879,0,ve,F.width,F.height,F.depth,0,fe,pe,F.data);else if(M.isFramebufferTexture){if(Et)if(Be)t.texStorage2D(3553,D,ve,F.width,F.height);else{let W=F.width,Q=F.height;for(let de=0;de<D;de++)t.texImage2D(3553,de,ve,W,Q,0,fe,pe,null),W>>=1,Q>>=1}}else if(Re.length>0&&ue){Be&&Et&&t.texStorage2D(3553,D,ve,Re[0].width,Re[0].height);for(let W=0,Q=Re.length;W<Q;W++)ye=Re[W],Be?t.texSubImage2D(3553,W,0,0,fe,pe,ye):t.texImage2D(3553,W,ve,fe,pe,ye);M.generateMipmaps=!1}else Be?(Et&&t.texStorage2D(3553,D,ve,F.width,F.height),t.texSubImage2D(3553,0,0,0,fe,pe,F)):t.texImage2D(3553,0,ve,fe,pe,F);L(M,ue)&&O(ne),Te.__version=ce.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Me(T,M,G){if(M.image.length!==6)return;const ne=Fe(T,M),oe=M.source;t.bindTexture(34067,T.__webglTexture,33984+G);const ce=i.get(oe);if(oe.version!==ce.__version||ne===!0){t.activeTexture(33984+G),s.pixelStorei(37440,M.flipY),s.pixelStorei(37441,M.premultiplyAlpha),s.pixelStorei(3317,M.unpackAlignment),s.pixelStorei(37443,0);const Te=M.isCompressedTexture||M.image[0].isCompressedTexture,A=M.image[0]&&M.image[0].isDataTexture,F=[];for(let W=0;W<6;W++)!Te&&!A?F[W]=v(M.image[W],!1,!0,c):F[W]=A?M.image[W].image:M.image[W],F[W]=Vt(M,F[W]);const ue=F[0],fe=x(ue)||o,pe=n.convert(M.format,M.encoding),ve=n.convert(M.type),ye=b(M.internalFormat,pe,ve,M.encoding),Re=o&&M.isVideoTexture!==!0,Be=ce.__version===void 0||ne===!0;let Et=R(M,ue,fe);$(34067,M,fe);let D;if(Te){Re&&Be&&t.texStorage2D(34067,Et,ye,ue.width,ue.height);for(let W=0;W<6;W++){D=F[W].mipmaps;for(let Q=0;Q<D.length;Q++){const de=D[Q];M.format!==Kt?pe!==null?Re?t.compressedTexSubImage2D(34069+W,Q,0,0,de.width,de.height,pe,de.data):t.compressedTexImage2D(34069+W,Q,ye,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+W,Q,0,0,de.width,de.height,pe,ve,de.data):t.texImage2D(34069+W,Q,ye,de.width,de.height,0,pe,ve,de.data)}}}else{D=M.mipmaps,Re&&Be&&(D.length>0&&Et++,t.texStorage2D(34067,Et,ye,F[0].width,F[0].height));for(let W=0;W<6;W++)if(A){Re?t.texSubImage2D(34069+W,0,0,0,F[W].width,F[W].height,pe,ve,F[W].data):t.texImage2D(34069+W,0,ye,F[W].width,F[W].height,0,pe,ve,F[W].data);for(let Q=0;Q<D.length;Q++){const de=D[Q].image[W].image;Re?t.texSubImage2D(34069+W,Q+1,0,0,de.width,de.height,pe,ve,de.data):t.texImage2D(34069+W,Q+1,ye,de.width,de.height,0,pe,ve,de.data)}}else{Re?t.texSubImage2D(34069+W,0,0,0,pe,ve,F[W]):t.texImage2D(34069+W,0,ye,pe,ve,F[W]);for(let Q=0;Q<D.length;Q++){const de=D[Q];Re?t.texSubImage2D(34069+W,Q+1,0,0,pe,ve,de.image[W]):t.texImage2D(34069+W,Q+1,ye,pe,ve,de.image[W])}}}L(M,fe)&&O(34067),ce.__version=oe.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function me(T,M,G,ne,oe){const ce=n.convert(G.format,G.encoding),Te=n.convert(G.type),A=b(G.internalFormat,ce,Te,G.encoding);i.get(M).__hasExternalTextures||(oe===32879||oe===35866?t.texImage3D(oe,0,A,M.width,M.height,M.depth,0,ce,Te,null):t.texImage2D(oe,0,A,M.width,M.height,0,ce,Te,null)),t.bindFramebuffer(36160,T),Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,ne,oe,i.get(G).__webglTexture,0,lt(M)):(oe===3553||oe>=34069&&oe<=34074)&&s.framebufferTexture2D(36160,ne,oe,i.get(G).__webglTexture,0),t.bindFramebuffer(36160,null)}function Je(T,M,G){if(s.bindRenderbuffer(36161,T),M.depthBuffer&&!M.stencilBuffer){let ne=33189;if(G||Ye(M)){const oe=M.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Ui?ne=36012:oe.type===er&&(ne=33190));const ce=lt(M);Ye(M)?d.renderbufferStorageMultisampleEXT(36161,ce,ne,M.width,M.height):s.renderbufferStorageMultisample(36161,ce,ne,M.width,M.height)}else s.renderbufferStorage(36161,ne,M.width,M.height);s.framebufferRenderbuffer(36160,36096,36161,T)}else if(M.depthBuffer&&M.stencilBuffer){const ne=lt(M);G&&Ye(M)===!1?s.renderbufferStorageMultisample(36161,ne,35056,M.width,M.height):Ye(M)?d.renderbufferStorageMultisampleEXT(36161,ne,35056,M.width,M.height):s.renderbufferStorage(36161,34041,M.width,M.height),s.framebufferRenderbuffer(36160,33306,36161,T)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let oe=0;oe<ne.length;oe++){const ce=ne[oe],Te=n.convert(ce.format,ce.encoding),A=n.convert(ce.type),F=b(ce.internalFormat,Te,A,ce.encoding),ue=lt(M);G&&Ye(M)===!1?s.renderbufferStorageMultisample(36161,ue,F,M.width,M.height):Ye(M)?d.renderbufferStorageMultisampleEXT(36161,ue,F,M.width,M.height):s.renderbufferStorage(36161,F,M.width,M.height)}}s.bindRenderbuffer(36161,null)}function Ie(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),re(M.depthTexture,0);const G=i.get(M.depthTexture).__webglTexture,ne=lt(M);if(M.depthTexture.format===tr)Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,G,0,ne):s.framebufferTexture2D(36160,36096,3553,G,0);else if(M.depthTexture.format===Or)Ye(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,G,0,ne):s.framebufferTexture2D(36160,33306,3553,G,0);else throw new Error("Unknown depthTexture format")}function Ee(T){const M=i.get(T),G=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Ie(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(36160,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=s.createRenderbuffer(),Je(M.__webglDepthbuffer[ne],T,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=s.createRenderbuffer(),Je(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Mt(T,M,G){const ne=i.get(T);M!==void 0&&me(ne.__webglFramebuffer,T,T.texture,36064,3553),G!==void 0&&Ee(T)}function gt(T){const M=T.texture,G=i.get(T),ne=i.get(M);T.addEventListener("dispose",ee),T.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=s.createTexture()),ne.__version=M.version,a.memory.textures++);const oe=T.isWebGLCubeRenderTarget===!0,ce=T.isWebGLMultipleRenderTargets===!0,Te=x(T)||o;if(oe){G.__webglFramebuffer=[];for(let A=0;A<6;A++)G.__webglFramebuffer[A]=s.createFramebuffer()}else{if(G.__webglFramebuffer=s.createFramebuffer(),ce)if(r.drawBuffers){const A=T.texture;for(let F=0,ue=A.length;F<ue;F++){const fe=i.get(A[F]);fe.__webglTexture===void 0&&(fe.__webglTexture=s.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&Ye(T)===!1){const A=ce?M:[M];G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,G.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ue=A[F];G.__webglColorRenderbuffer[F]=s.createRenderbuffer(),s.bindRenderbuffer(36161,G.__webglColorRenderbuffer[F]);const fe=n.convert(ue.format,ue.encoding),pe=n.convert(ue.type),ve=b(ue.internalFormat,fe,pe,ue.encoding,T.isXRRenderTarget===!0),ye=lt(T);s.renderbufferStorageMultisample(36161,ye,ve,T.width,T.height),s.framebufferRenderbuffer(36160,36064+F,36161,G.__webglColorRenderbuffer[F])}s.bindRenderbuffer(36161,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Je(G.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(oe){t.bindTexture(34067,ne.__webglTexture),$(34067,M,Te);for(let A=0;A<6;A++)me(G.__webglFramebuffer[A],T,M,36064,34069+A);L(M,Te)&&O(34067),t.unbindTexture()}else if(ce){const A=T.texture;for(let F=0,ue=A.length;F<ue;F++){const fe=A[F],pe=i.get(fe);t.bindTexture(3553,pe.__webglTexture),$(3553,fe,Te),me(G.__webglFramebuffer,T,fe,36064+F,3553),L(fe,Te)&&O(3553)}t.unbindTexture()}else{let A=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?A=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,ne.__webglTexture),$(A,M,Te),me(G.__webglFramebuffer,T,M,36064,A),L(M,Te)&&O(A),t.unbindTexture()}T.depthBuffer&&Ee(T)}function wt(T){const M=x(T)||o,G=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ne=0,oe=G.length;ne<oe;ne++){const ce=G[ne];if(L(ce,M)){const Te=T.isWebGLCubeRenderTarget?34067:3553,A=i.get(ce).__webglTexture;t.bindTexture(Te,A),O(Te),t.unbindTexture()}}}function Ut(T){if(o&&T.samples>0&&Ye(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],G=T.width,ne=T.height;let oe=16384;const ce=[],Te=T.stencilBuffer?33306:36096,A=i.get(T),F=T.isWebGLMultipleRenderTargets===!0;if(F)for(let ue=0;ue<M.length;ue++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){ce.push(36064+ue),T.depthBuffer&&ce.push(Te);const fe=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(fe===!1&&(T.depthBuffer&&(oe|=256),T.stencilBuffer&&(oe|=1024)),F&&s.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ue]),fe===!0&&(s.invalidateFramebuffer(36008,[Te]),s.invalidateFramebuffer(36009,[Te])),F){const pe=i.get(M[ue]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,pe,0)}s.blitFramebuffer(0,0,G,ne,0,0,G,ne,oe,9728),f&&s.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ue=0;ue<M.length;ue++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+ue,36161,A.__webglColorRenderbuffer[ue]);const fe=i.get(M[ue]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),s.framebufferTexture2D(36009,36064+ue,3553,fe,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function lt(T){return Math.min(u,T.samples)}function Ye(T){const M=i.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ni(T){const M=a.render.frame;w.get(T)!==M&&(w.set(T,M),T.update())}function Vt(T,M){const G=T.encoding,ne=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Aa||G!==ir&&(G===je?o===!1?e.has("EXT_sRGB")===!0&&ne===Kt?(T.format=Aa,T.minFilter=Gt,T.generateMipmaps=!1):M=pc.sRGBToLinear(M):(ne!==Kt||oe!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",G)),M}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=re,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=K,this.rebindTextures=Mt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Ye}function Qg(s,e,t){const i=t.isWebGL2;function r(n,a=null){let o;if(n===Qi)return 5121;if(n===Ld)return 32819;if(n===Pd)return 32820;if(n===Ad)return 5120;if(n===Cd)return 5122;if(n===Ol)return 5123;if(n===Rd)return 5124;if(n===er)return 5125;if(n===Ui)return 5126;if(n===mn)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(n===Id)return 6406;if(n===Kt)return 6408;if(n===Nd)return 6409;if(n===Od)return 6410;if(n===tr)return 6402;if(n===Or)return 34041;if(n===Dd)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(n===Aa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(n===zd)return 6403;if(n===kd)return 36244;if(n===Fd)return 33319;if(n===Ud)return 33320;if(n===Bd)return 36249;if(n===ba||n===ya||n===xa||n===Sa)if(a===je)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===ba)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===ba)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===kl||n===Fl||n===Ul)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===zl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Fl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hd)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===Bl||n===Hl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Bl)return a===je?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Hl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Gl||n===Vl||n===Wl||n===jl||n===Xl||n===ql||n===Yl||n===Jl||n===$l||n===Zl||n===Kl||n===Ql||n===ec||n===tc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Gl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$l)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ql)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return a===je?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ic)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===ic)return a===je?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return n===Nr?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):s[n]!==void 0?s[n]:null}return{convert:r}}class ew extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xi extends tt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tw={type:"move"};class ao{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,n=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),g=this._getHandJoint(c,_);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,w=.005;c.inputState.pinching&&d>f+w?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-w&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(n=t.getPose(e.gripSpace,i),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(tw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=n!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class iw extends At{constructor(e,t,i,r,n,a,o,l,c,h){if(h=h!==void 0?h:tr,h!==tr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===tr&&(i=er),i===void 0&&h===Or&&(i=Nr),super(null,r,n,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vt,this.minFilter=l!==void 0?l:vt,this.flipY=!1,this.generateMipmaps=!1}}class rw extends rr{constructor(e,t){super();const i=this;let r=null,n=1,a=null,o="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const w=t.getContextAttributes();let _=null,m=null;const g=[],y=[],v=new Set,x=new Map,S=new kt;S.layers.enable(1),S.viewport=new Ze;const L=new kt;L.layers.enable(2),L.viewport=new Ze;const O=[S,L],b=new ew;b.layers.enable(1),b.layers.enable(2);let R=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Y=g[V];return Y===void 0&&(Y=new ao,g[V]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(V){let Y=g[V];return Y===void 0&&(Y=new ao,g[V]=Y),Y.getGripSpace()},this.getHand=function(V){let Y=g[V];return Y===void 0&&(Y=new ao,g[V]=Y),Y.getHandSpace()};function X(V){const Y=y.indexOf(V.inputSource);if(Y===-1)return;const K=g[Y];K!==void 0&&K.dispatchEvent({type:V.type,data:V.inputSource})}function ee(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",ee),r.removeEventListener("inputsourceschange",H);for(let V=0;V<g.length;V++){const Y=y[V];Y!==null&&(y[V]=null,g[V].disconnect(Y))}R=null,k=null,e.setRenderTarget(_),d=null,u=null,h=null,r=null,m=null,re.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){n=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",ee),r.addEventListener("inputsourceschange",H),w.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:r.renderState.layers===void 0?w.antialias:!0,alpha:w.alpha,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:n};d=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:d}),m=new sr(d.framebufferWidth,d.framebufferHeight,{format:Kt,type:Qi,encoding:e.outputEncoding,stencilBuffer:w.stencil})}else{let Y=null,K=null,se=null;w.depth&&(se=w.stencil?35056:33190,Y=w.stencil?Or:tr,K=w.stencil?Nr:er);const _e={colorFormat:32856,depthFormat:se,scaleFactor:n};h=new XRWebGLBinding(r,t),u=h.createProjectionLayer(_e),r.updateRenderState({layers:[u]}),m=new sr(u.textureWidth,u.textureHeight,{format:Kt,type:Qi,depthTexture:new iw(u.textureWidth,u.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:w.stencil,encoding:e.outputEncoding,samples:w.antialias?4:0});const $=e.properties.get(m);$.__ignoreDepthValues=u.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),l=null,a=await r.requestReferenceSpace(o),re.setContext(r),re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function H(V){for(let Y=0;Y<V.removed.length;Y++){const K=V.removed[Y],se=y.indexOf(K);se>=0&&(y[se]=null,g[se].disconnect(K))}for(let Y=0;Y<V.added.length;Y++){const K=V.added[Y];let se=y.indexOf(K);if(se===-1){for(let $=0;$<g.length;$++)if($>=y.length){y.push(K),se=$;break}else if(y[$]===null){y[$]=K,se=$;break}if(se===-1)break}const _e=g[se];_e&&_e.connect(K)}}const z=new P,q=new P;function te(V,Y,K){z.setFromMatrixPosition(Y.matrixWorld),q.setFromMatrixPosition(K.matrixWorld);const se=z.distanceTo(q),_e=Y.projectionMatrix.elements,$=K.projectionMatrix.elements,Fe=_e[14]/(_e[10]-1),we=_e[14]/(_e[10]+1),Me=(_e[9]+1)/_e[5],me=(_e[9]-1)/_e[5],Je=(_e[8]-1)/_e[0],Ie=($[8]+1)/$[0],Ee=Fe*Je,Mt=Fe*Ie,gt=se/(-Je+Ie),wt=gt*-Je;Y.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(wt),V.translateZ(gt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const Ut=Fe+gt,lt=we+gt,Ye=Ee-wt,ni=Mt+(se-wt),Vt=Me*we/lt*Ut,T=me*we/lt*Ut;V.projectionMatrix.makePerspective(Ye,ni,Vt,T,Ut,lt)}function ie(V,Y){Y===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Y.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=L.near=S.near=V.near,b.far=L.far=S.far=V.far,(R!==b.near||k!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,k=b.far);const Y=V.parent,K=b.cameras;ie(b,Y);for(let _e=0;_e<K.length;_e++)ie(K[_e],Y);b.matrixWorld.decompose(b.position,b.quaternion,b.scale),V.matrix.copy(b.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const se=V.children;for(let _e=0,$=se.length;_e<$;_e++)se[_e].updateMatrixWorld(!0);K.length===2?te(b,S,L):b.projectionMatrix.copy(S.projectionMatrix)},this.getCamera=function(){return b},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(V){u!==null&&(u.fixedFoveation=V),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=V)},this.getPlanes=function(){return v};let Z=null;function ae(V,Y){if(c=Y.getViewerPose(l||a),f=Y,c!==null){const K=c.views;d!==null&&(e.setRenderTargetFramebuffer(m,d.framebuffer),e.setRenderTarget(m));let se=!1;K.length!==b.cameras.length&&(b.cameras.length=0,se=!0);for(let _e=0;_e<K.length;_e++){const $=K[_e];let Fe=null;if(d!==null)Fe=d.getViewport($);else{const Me=h.getViewSubImage(u,$);Fe=Me.viewport,_e===0&&(e.setRenderTargetTextures(m,Me.colorTexture,u.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(m))}let we=O[_e];we===void 0&&(we=new kt,we.layers.enable(_e),we.viewport=new Ze,O[_e]=we),we.matrix.fromArray($.transform.matrix),we.projectionMatrix.fromArray($.projectionMatrix),we.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),_e===0&&b.matrix.copy(we.matrix),se===!0&&b.cameras.push(we)}}for(let K=0;K<g.length;K++){const se=y[K],_e=g[K];se!==null&&_e!==void 0&&_e.update(se,Y,l||a)}if(Z&&Z(V,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let K=null;for(const se of v)Y.detectedPlanes.has(se)||(K===null&&(K=[]),K.push(se));if(K!==null)for(const se of K)v.delete(se),x.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of Y.detectedPlanes)if(!v.has(se))v.add(se),x.set(se,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const _e=x.get(se);se.lastChangedTime>_e&&(x.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}f=null}const re=new Lc;re.setAnimationLoop(ae),this.setAnimationLoop=function(V){Z=V},this.dispose=function(){}}}function nw(s,e){function t(_,m){m.color.getRGB(_.fogColor.value,Cc(s)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,g,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(_,m):m.isMeshToonMaterial?(r(_,m),h(_,m)):m.isMeshPhongMaterial?(r(_,m),c(_,m)):m.isMeshStandardMaterial?(r(_,m),u(_,m),m.isMeshPhysicalMaterial&&d(_,m,v)):m.isMeshMatcapMaterial?(r(_,m),f(_,m)):m.isMeshDepthMaterial?r(_,m):m.isMeshDistanceMaterial?(r(_,m),w(_,m)):m.isMeshNormalMaterial?r(_,m):m.isLineBasicMaterial?(n(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?o(_,m,g,y):m.isSpriteMaterial?l(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.bumpMap&&(_.bumpMap.value=m.bumpMap,_.bumpScale.value=m.bumpScale,m.side===$t&&(_.bumpScale.value*=-1)),m.displacementMap&&(_.displacementMap.value=m.displacementMap,_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap),m.normalMap&&(_.normalMap.value=m.normalMap,_.normalScale.value.copy(m.normalScale),m.side===$t&&_.normalScale.value.negate()),m.specularMap&&(_.specularMap.value=m.specularMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);const g=e.get(m).envMap;if(g&&(_.envMap.value=g,_.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap){_.lightMap.value=m.lightMap;const x=s.physicallyCorrectLights!==!0?Math.PI:1;_.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity);let y;m.map?y=m.map:m.specularMap?y=m.specularMap:m.displacementMap?y=m.displacementMap:m.normalMap?y=m.normalMap:m.bumpMap?y=m.bumpMap:m.roughnessMap?y=m.roughnessMap:m.metalnessMap?y=m.metalnessMap:m.alphaMap?y=m.alphaMap:m.emissiveMap?y=m.emissiveMap:m.clearcoatMap?y=m.clearcoatMap:m.clearcoatNormalMap?y=m.clearcoatNormalMap:m.clearcoatRoughnessMap?y=m.clearcoatRoughnessMap:m.iridescenceMap?y=m.iridescenceMap:m.iridescenceThicknessMap?y=m.iridescenceThicknessMap:m.specularIntensityMap?y=m.specularIntensityMap:m.specularColorMap?y=m.specularColorMap:m.transmissionMap?y=m.transmissionMap:m.thicknessMap?y=m.thicknessMap:m.sheenColorMap?y=m.sheenColorMap:m.sheenRoughnessMap&&(y=m.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),_.uvTransform.value.copy(y.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),_.uv2Transform.value.copy(v.matrix))}function n(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function o(_,m,g,y){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*g,_.scale.value=y*.5,m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),_.uvTransform.value.copy(v.matrix))}function l(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map),m.alphaMap&&(_.alphaMap.value=m.alphaMap),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let g;m.map?g=m.map:m.alphaMap&&(g=m.alphaMap),g!==void 0&&(g.matrixAutoUpdate===!0&&g.updateMatrix(),_.uvTransform.value.copy(g.matrix))}function c(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function h(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function u(_,m){_.roughness.value=m.roughness,_.metalness.value=m.metalness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,g){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),_.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===$t&&_.clearcoatNormalScale.value.negate())),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=g.texture,_.transmissionSamplerSize.value.set(g.width,g.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap)}function f(_,m){m.matcap&&(_.matcap.value=m.matcap)}function w(_,m){_.referencePosition.value.copy(m.referencePosition),_.nearDistance.value=m.nearDistance,_.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function sw(s,e,t,i){let r={},n={},a=[];const o=t.isWebGL2?s.getParameter(35375):0;function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(w(y),x=h(y),r[y.id]=x,y.addEventListener("dispose",m));const S=v.program;i.updateUBOMapping(y,S);const L=e.render.frame;n[y.id]!==L&&(d(y),n[y.id]=L)}function h(y){const v=u();y.__bindingPointIndex=v;const x=s.createBuffer(),S=y.__size,L=y.usage;return s.bindBuffer(35345,x),s.bufferData(35345,S,L),s.bindBuffer(35345,null),s.bindBufferBase(35345,v,x),x}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const v=r[y.id],x=y.uniforms,S=y.__cache;s.bindBuffer(35345,v);for(let L=0,O=x.length;L<O;L++){const b=x[L];if(f(b,L,S)===!0){const R=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let X=0;for(let ee=0;ee<k.length;ee++){const H=k[ee],z=_(H);typeof H=="number"?(b.__data[0]=H,s.bufferSubData(35345,R+X,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=H.elements[0],b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=H.elements[0],b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=H.elements[0]):(H.toArray(b.__data,X),X+=z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,R,b.__data)}}s.bindBuffer(35345,null)}function f(y,v,x){const S=y.value;if(x[v]===void 0){if(typeof S=="number")x[v]=S;else{const L=Array.isArray(S)?S:[S],O=[];for(let b=0;b<L.length;b++)O.push(L[b].clone());x[v]=O}return!0}else if(typeof S=="number"){if(x[v]!==S)return x[v]=S,!0}else{const L=Array.isArray(x[v])?x[v]:[x[v]],O=Array.isArray(S)?S:[S];for(let b=0;b<L.length;b++){const R=L[b];if(R.equals(O[b])===!1)return R.copy(O[b]),!0}}return!1}function w(y){const v=y.uniforms;let x=0;const S=16;let L=0;for(let O=0,b=v.length;O<b;O++){const R=v[O],k={boundary:0,storage:0},X=Array.isArray(R.value)?R.value:[R.value];for(let ee=0,H=X.length;ee<H;ee++){const z=X[ee],q=_(z);k.boundary+=q.boundary,k.storage+=q.storage}if(R.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=x,O>0){L=x%S;const ee=S-L;L!==0&&ee-k.boundary<0&&(x+=S-L,R.__offset=x)}x+=k.storage}return L=x%S,L>0&&(x+=S-L),y.__size=x,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=a.indexOf(v.__bindingPointIndex);a.splice(x,1),s.deleteBuffer(r[v.id]),delete r[v.id],delete n[v.id]}function g(){for(const y in r)s.deleteBuffer(r[y]);a=[],r={},n={}}return{bind:l,update:c,dispose:g}}function aw(){const s=vn("canvas");return s.style.display="block",s}function rh(s={}){this.isWebGLRenderer=!0;const e=s.canvas!==void 0?s.canvas:aw(),t=s.context!==void 0?s.context:null,i=s.depth!==void 0?s.depth:!0,r=s.stencil!==void 0?s.stencil:!0,n=s.antialias!==void 0?s.antialias:!1,a=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,o=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,l=s.powerPreference!==void 0?s.powerPreference:"default",c=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=s.alpha!==void 0?s.alpha:!1;let u=null,d=null;const f=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ir,this.physicallyCorrectLights=!1,this.toneMapping=xi,this.toneMappingExposure=1;const _=this;let m=!1,g=0,y=0,v=null,x=-1,S=null;const L=new Ze,O=new Ze;let b=null,R=e.width,k=e.height,X=1,ee=null,H=null;const z=new Ze(0,0,R,k),q=new Ze(0,0,R,k);let te=!1;const ie=new Qa;let Z=!1,ae=!1,re=null;const V=new Ne,Y=new he,K=new P,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return v===null?X:1}let $=t;function Fe(E,B){for(let j=0;j<E.length;j++){const U=E[j],J=e.getContext(U,B);if(J!==null)return J}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:n,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${yi}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Re,!1),$===null){const B=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&B.shift(),$=Fe(B,E),$===null)throw Fe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let we,Me,me,Je,Ie,Ee,Mt,gt,wt,Ut,lt,Ye,ni,Vt,T,M,G,ne,oe,ce,Te,A,F,ue;function fe(){we=new g_($),Me=new u_($,we,s),we.init(Me),A=new Qg($,we,Me),me=new Zg($,we,Me),Je=new b_,Ie=new kg,Ee=new Kg($,we,me,Ie,Me,A,Je),Mt=new p_(_),gt=new __(_),wt=new Cp($,Me),F=new c_($,we,wt,Me),Ut=new w_($,wt,Je,F),lt=new M_($,Ut,wt,Je),oe=new S_($,Me,Ee),M=new d_(Ie),Ye=new zg(_,Mt,gt,we,Me,F,M),ni=new nw(_,Ie),Vt=new Ug,T=new jg(we,Me),ne=new l_(_,Mt,gt,me,lt,h,a),G=new $g(_,lt,Me),ue=new sw($,Je,Me,me),ce=new h_($,we,Je,Me),Te=new v_($,we,Je,Me),Je.programs=Ye.programs,_.capabilities=Me,_.extensions=we,_.properties=Ie,_.renderLists=Vt,_.shadowMap=G,_.state=me,_.info=Je}fe();const pe=new rw(_,$);this.xr=pe,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const E=we.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=we.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(R,k,!1))},this.getSize=function(E){return E.set(R,k)},this.setSize=function(E,B,j){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=E,k=B,e.width=Math.floor(E*X),e.height=Math.floor(B*X),j!==!1&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(R*X,k*X).floor()},this.setDrawingBufferSize=function(E,B,j){R=E,k=B,X=j,e.width=Math.floor(E*j),e.height=Math.floor(B*j),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(z)},this.setViewport=function(E,B,j,U){E.isVector4?z.set(E.x,E.y,E.z,E.w):z.set(E,B,j,U),me.viewport(L.copy(z).multiplyScalar(X).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,B,j,U){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,B,j,U),me.scissor(O.copy(q).multiplyScalar(X).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){me.setScissorTest(te=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){H=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,B=!0,j=!0){let U=0;E&&(U|=16384),B&&(U|=256),j&&(U|=1024),$.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),Vt.dispose(),T.dispose(),Ie.dispose(),Mt.dispose(),gt.dispose(),lt.dispose(),F.dispose(),ue.dispose(),Ye.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",de),pe.removeEventListener("sessionend",Se),re&&(re.dispose(),re=null),Xe.stop()};function ve(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Je.autoReset,B=G.enabled,j=G.autoUpdate,U=G.needsUpdate,J=G.type;fe(),Je.autoReset=E,G.enabled=B,G.autoUpdate=j,G.needsUpdate=U,G.type=J}function Re(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Be(E){const B=E.target;B.removeEventListener("dispose",Be),Et(B)}function Et(E){D(E),Ie.remove(E)}function D(E){const B=Ie.get(E).programs;B!==void 0&&(B.forEach(function(j){Ye.releaseProgram(j)}),E.isShaderMaterial&&Ye.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,j,U,J,be){B===null&&(B=se);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Oe=Ob(E,B,j,U,J);me.setMaterial(U,Ce);let ke=j.index,Qe=1;U.wireframe===!0&&(ke=Ut.getWireframeAttribute(j),Qe=2);const We=j.drawRange,He=j.attributes.position;let Nt=We.start*Qe,Yt=(We.start+We.count)*Qe;be!==null&&(Nt=Math.max(Nt,be.start*Qe),Yt=Math.min(Yt,(be.start+be.count)*Qe)),ke!==null?(Nt=Math.max(Nt,0),Yt=Math.min(Yt,ke.count)):He!=null&&(Nt=Math.max(Nt,0),Yt=Math.min(Yt,He.count));const Oi=Yt-Nt;if(Oi<0||Oi===1/0)return;F.setup(J,U,Oe,j,ke);let Mr,dt=ce;if(ke!==null&&(Mr=wt.get(ke),dt=Te,dt.setIndex(Mr)),J.isMesh)U.wireframe===!0?(me.setLineWidth(U.wireframeLinewidth*_e()),dt.setMode(1)):dt.setMode(4);else if(J.isLine){let Ge=U.linewidth;Ge===void 0&&(Ge=1),me.setLineWidth(Ge*_e()),J.isLineSegments?dt.setMode(1):J.isLineLoop?dt.setMode(2):dt.setMode(3)}else J.isPoints?dt.setMode(0):J.isSprite&&dt.setMode(4);if(J.isInstancedMesh)dt.renderInstances(Nt,Oi,J.count);else if(j.isInstancedBufferGeometry){const Ge=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,vl=Math.min(j.instanceCount,Ge);dt.renderInstances(Nt,Oi,vl)}else dt.render(Nt,Oi)},this.compile=function(E,B){function j(U,J,be){U.transparent===!0&&U.side===ts?(U.side=$t,U.needsUpdate=!0,si(U,J,be),U.side=ki,U.needsUpdate=!0,si(U,J,be),U.side=ts):si(U,J,be)}d=T.get(E),d.init(),w.push(d),E.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(_.physicallyCorrectLights),E.traverse(function(U){const J=U.material;if(J)if(Array.isArray(J))for(let be=0;be<J.length;be++){const Ce=J[be];j(Ce,E,U)}else j(J,E,U)}),w.pop(),d=null};let W=null;function Q(E){W&&W(E)}function de(){Xe.stop()}function Se(){Xe.start()}const Xe=new Lc;Xe.setAnimationLoop(Q),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){W=E,pe.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},pe.addEventListener("sessionstart",de),pe.addEventListener("sessionend",Se),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(B),B=pe.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,B,v),d=T.get(E,w.length),d.init(),w.push(d),V.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ie.setFromProjectionMatrix(V),ae=this.localClippingEnabled,Z=M.init(this.clippingPlanes,ae,B),u=Vt.get(E,f.length),u.init(),f.push(u),Tt(E,B,0,_.sortObjects),u.finish(),_.sortObjects===!0&&u.sort(ee,H),Z===!0&&M.beginShadows();const j=d.state.shadowsArray;if(G.render(j,E,B),Z===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),ne.render(u,E),d.setupLights(_.physicallyCorrectLights),B.isArrayCamera){const U=B.cameras;for(let J=0,be=U.length;J<be;J++){const Ce=U[J];Dt(u,E,Ce,Ce.viewport)}}else Dt(u,E,B);v!==null&&(Ee.updateMultisampleRenderTarget(v),Ee.updateRenderTargetMipmap(v)),E.isScene===!0&&E.onAfterRender(_,E,B),F.resetDefaultState(),x=-1,S=null,w.pop(),w.length>0?d=w[w.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Tt(E,B,j,U){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)j=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){U&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const be=lt.update(E),Ce=E.material;Ce.visible&&u.push(E,be,Ce,j,K.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Je.render.frame&&(E.skeleton.update(),E.skeleton.frame=Je.render.frame),!E.frustumCulled||ie.intersectsObject(E))){U&&K.setFromMatrixPosition(E.matrixWorld).applyMatrix4(V);const be=lt.update(E),Ce=E.material;if(Array.isArray(Ce)){const Oe=be.groups;for(let ke=0,Qe=Oe.length;ke<Qe;ke++){const We=Oe[ke],He=Ce[We.materialIndex];He&&He.visible&&u.push(E,be,He,j,K.z,We)}}else Ce.visible&&u.push(E,be,Ce,j,K.z,null)}}const J=E.children;for(let be=0,Ce=J.length;be<Ce;be++)Tt(J[be],B,j,U)}function Dt(E,B,j,U){const J=E.opaque,be=E.transmissive,Ce=E.transparent;d.setupLightsView(j),be.length>0&&Sr(J,B,j),U&&me.viewport(L.copy(U)),J.length>0&&rt(J,B,j),be.length>0&&rt(be,B,j),Ce.length>0&&rt(Ce,B,j),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Sr(E,B,j){const U=Me.isWebGL2;re===null&&(re=new sr(1,1,{generateMipmaps:!0,type:we.has("EXT_color_buffer_half_float")?mn:Qi,minFilter:Ki,samples:U&&n===!0?4:0})),_.getDrawingBufferSize(Y),U?re.setSize(Y.x,Y.y):re.setSize(as(Y.x),as(Y.y));const J=_.getRenderTarget();_.setRenderTarget(re),_.clear();const be=_.toneMapping;_.toneMapping=xi,rt(E,B,j),_.toneMapping=be,Ee.updateMultisampleRenderTarget(re),Ee.updateRenderTargetMipmap(re),_.setRenderTarget(J)}function rt(E,B,j){const U=B.isScene===!0?B.overrideMaterial:null;for(let J=0,be=E.length;J<be;J++){const Ce=E[J],Oe=Ce.object,ke=Ce.geometry,Qe=U===null?Ce.material:U,We=Ce.group;Oe.layers.test(j.layers)&&Ni(Oe,B,j,ke,Qe,We)}}function Ni(E,B,j,U,J,be){E.onBeforeRender(_,B,j,U,J,be),E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(_,B,j,U,E,be),J.transparent===!0&&J.side===ts?(J.side=$t,J.needsUpdate=!0,_.renderBufferDirect(j,B,U,J,E,be),J.side=ki,J.needsUpdate=!0,_.renderBufferDirect(j,B,U,J,E,be),J.side=ts):_.renderBufferDirect(j,B,U,J,E,be),E.onAfterRender(_,B,j,U,J,be)}function si(E,B,j){B.isScene!==!0&&(B=se);const U=Ie.get(E),J=d.state.lights,be=d.state.shadowsArray,Ce=J.state.version,Oe=Ye.getParameters(E,J.state,be,B,j),ke=Ye.getProgramCacheKey(Oe);let Qe=U.programs;U.environment=E.isMeshStandardMaterial?B.environment:null,U.fog=B.fog,U.envMap=(E.isMeshStandardMaterial?gt:Mt).get(E.envMap||U.environment),Qe===void 0&&(E.addEventListener("dispose",Be),Qe=new Map,U.programs=Qe);let We=Qe.get(ke);if(We!==void 0){if(U.currentProgram===We&&U.lightsStateVersion===Ce)return Xu(E,Oe),We}else Oe.uniforms=Ye.getUniforms(E),E.onBuild(j,Oe,_),E.onBeforeCompile(Oe,_),We=Ye.acquireProgram(Oe,ke),Qe.set(ke,We),U.uniforms=Oe.uniforms;const He=U.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=M.uniform),Xu(E,Oe),U.needsLights=kb(E),U.lightsStateVersion=Ce,U.needsLights&&(He.ambientLightColor.value=J.state.ambient,He.lightProbe.value=J.state.probe,He.directionalLights.value=J.state.directional,He.directionalLightShadows.value=J.state.directionalShadow,He.spotLights.value=J.state.spot,He.spotLightShadows.value=J.state.spotShadow,He.rectAreaLights.value=J.state.rectArea,He.ltc_1.value=J.state.rectAreaLTC1,He.ltc_2.value=J.state.rectAreaLTC2,He.pointLights.value=J.state.point,He.pointLightShadows.value=J.state.pointShadow,He.hemisphereLights.value=J.state.hemi,He.directionalShadowMap.value=J.state.directionalShadowMap,He.directionalShadowMatrix.value=J.state.directionalShadowMatrix,He.spotShadowMap.value=J.state.spotShadowMap,He.spotLightMatrix.value=J.state.spotLightMatrix,He.spotLightMap.value=J.state.spotLightMap,He.pointShadowMap.value=J.state.pointShadowMap,He.pointShadowMatrix.value=J.state.pointShadowMatrix);const Nt=We.getUniforms(),Yt=Rs.seqWithValue(Nt.seq,He);return U.currentProgram=We,U.uniformsList=Yt,We}function Xu(E,B){const j=Ie.get(E);j.outputEncoding=B.outputEncoding,j.instancing=B.instancing,j.skinning=B.skinning,j.morphTargets=B.morphTargets,j.morphNormals=B.morphNormals,j.morphColors=B.morphColors,j.morphTargetsCount=B.morphTargetsCount,j.numClippingPlanes=B.numClippingPlanes,j.numIntersection=B.numClipIntersection,j.vertexAlphas=B.vertexAlphas,j.vertexTangents=B.vertexTangents,j.toneMapping=B.toneMapping}function Ob(E,B,j,U,J){B.isScene!==!0&&(B=se),Ee.resetTextureUnits();const be=B.fog,Ce=U.isMeshStandardMaterial?B.environment:null,Oe=v===null?_.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:ir,ke=(U.isMeshStandardMaterial?gt:Mt).get(U.envMap||Ce),Qe=U.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,We=!!U.normalMap&&!!j.attributes.tangent,He=!!j.morphAttributes.position,Nt=!!j.morphAttributes.normal,Yt=!!j.morphAttributes.color,Oi=U.toneMapped?_.toneMapping:xi,Mr=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,dt=Mr!==void 0?Mr.length:0,Ge=Ie.get(U),vl=d.state.lights;if(Z===!0&&(ae===!0||E!==S)){const Jt=E===S&&U.id===x;M.setState(U,E,Jt)}let bl=!1;U.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==vl.state.version||Ge.outputEncoding!==Oe||J.isInstancedMesh&&Ge.instancing===!1||!J.isInstancedMesh&&Ge.instancing===!0||J.isSkinnedMesh&&Ge.skinning===!1||!J.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==ke||U.fog===!0&&Ge.fog!==be||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==M.numPlanes||Ge.numIntersection!==M.numIntersection)||Ge.vertexAlphas!==Qe||Ge.vertexTangents!==We||Ge.morphTargets!==He||Ge.morphNormals!==Nt||Ge.morphColors!==Yt||Ge.toneMapping!==Oi||Me.isWebGL2===!0&&Ge.morphTargetsCount!==dt)&&(bl=!0):(bl=!0,Ge.__version=U.version);let Er=Ge.currentProgram;bl===!0&&(Er=si(U,B,J));let qu=!1,Qn=!1,yl=!1;const Bt=Er.getUniforms(),Tr=Ge.uniforms;if(me.useProgram(Er.program)&&(qu=!0,Qn=!0,yl=!0),U.id!==x&&(x=U.id,Qn=!0),qu||S!==E){if(Bt.setValue($,"projectionMatrix",E.projectionMatrix),Me.logarithmicDepthBuffer&&Bt.setValue($,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),S!==E&&(S=E,Qn=!0,yl=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Jt=Bt.map.cameraPosition;Jt!==void 0&&Jt.setValue($,K.setFromMatrixPosition(E.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Bt.setValue($,"isOrthographic",E.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||J.isSkinnedMesh)&&Bt.setValue($,"viewMatrix",E.matrixWorldInverse)}if(J.isSkinnedMesh){Bt.setOptional($,J,"bindMatrix"),Bt.setOptional($,J,"bindMatrixInverse");const Jt=J.skeleton;Jt&&(Me.floatVertexTextures?(Jt.boneTexture===null&&Jt.computeBoneTexture(),Bt.setValue($,"boneTexture",Jt.boneTexture,Ee),Bt.setValue($,"boneTextureSize",Jt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xl=j.morphAttributes;if((xl.position!==void 0||xl.normal!==void 0||xl.color!==void 0&&Me.isWebGL2===!0)&&oe.update(J,j,U,Er),(Qn||Ge.receiveShadow!==J.receiveShadow)&&(Ge.receiveShadow=J.receiveShadow,Bt.setValue($,"receiveShadow",J.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(Tr.envMap.value=ke,Tr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Qn&&(Bt.setValue($,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&zb(Tr,yl),be&&U.fog===!0&&ni.refreshFogUniforms(Tr,be),ni.refreshMaterialUniforms(Tr,U,X,k,re),Rs.upload($,Ge.uniformsList,Tr,Ee)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Rs.upload($,Ge.uniformsList,Tr,Ee),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Bt.setValue($,"center",J.center),Bt.setValue($,"modelViewMatrix",J.modelViewMatrix),Bt.setValue($,"normalMatrix",J.normalMatrix),Bt.setValue($,"modelMatrix",J.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Jt=U.uniformsGroups;for(let Sl=0,Fb=Jt.length;Sl<Fb;Sl++)if(Me.isWebGL2){const Yu=Jt[Sl];ue.update(Yu,Er),ue.bind(Yu,Er)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Er}function zb(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function kb(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return g},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(E,B,j){Ie.get(E.texture).__webglTexture=B,Ie.get(E.depthTexture).__webglTexture=j;const U=Ie.get(E);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=j===void 0,U.__autoAllocateDepthBuffer||we.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,B){const j=Ie.get(E);j.__webglFramebuffer=B,j.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,j=0){v=E,g=B,y=j;let U=!0,J=null,be=!1,Ce=!1;if(E){const Oe=Ie.get(E);Oe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),U=!1):Oe.__webglFramebuffer===void 0?Ee.setupRenderTarget(E):Oe.__hasExternalTextures&&Ee.rebindTextures(E,Ie.get(E.texture).__webglTexture,Ie.get(E.depthTexture).__webglTexture);const ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ce=!0);const Qe=Ie.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(J=Qe[B],be=!0):Me.isWebGL2&&E.samples>0&&Ee.useMultisampledRTT(E)===!1?J=Ie.get(E).__webglMultisampledFramebuffer:J=Qe,L.copy(E.viewport),O.copy(E.scissor),b=E.scissorTest}else L.copy(z).multiplyScalar(X).floor(),O.copy(q).multiplyScalar(X).floor(),b=te;if(me.bindFramebuffer(36160,J)&&Me.drawBuffers&&U&&me.drawBuffers(E,J),me.viewport(L),me.scissor(O),me.setScissorTest(b),be){const Oe=Ie.get(E.texture);$.framebufferTexture2D(36160,36064,34069+B,Oe.__webglTexture,j)}else if(Ce){const Oe=Ie.get(E.texture),ke=B||0;$.framebufferTextureLayer(36160,36064,Oe.__webglTexture,j||0,ke)}x=-1},this.readRenderTargetPixels=function(E,B,j,U,J,be,Ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ie.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Oe=Oe[Ce]),Oe){me.bindFramebuffer(36160,Oe);try{const ke=E.texture,Qe=ke.format,We=ke.type;if(Qe!==Kt&&A.convert(Qe)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=We===mn&&(we.has("EXT_color_buffer_half_float")||Me.isWebGL2&&we.has("EXT_color_buffer_float"));if(We!==Qi&&A.convert(We)!==$.getParameter(35738)&&!(We===Ui&&(Me.isWebGL2||we.has("OES_texture_float")||we.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-U&&j>=0&&j<=E.height-J&&$.readPixels(B,j,U,J,A.convert(Qe),A.convert(We),be)}finally{const ke=v!==null?Ie.get(v).__webglFramebuffer:null;me.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(E,B,j=0){const U=Math.pow(2,-j),J=Math.floor(B.image.width*U),be=Math.floor(B.image.height*U);Ee.setTexture2D(B,0),$.copyTexSubImage2D(3553,j,0,0,E.x,E.y,J,be),me.unbindTexture()},this.copyTextureToTexture=function(E,B,j,U=0){const J=B.image.width,be=B.image.height,Ce=A.convert(j.format),Oe=A.convert(j.type);Ee.setTexture2D(j,0),$.pixelStorei(37440,j.flipY),$.pixelStorei(37441,j.premultiplyAlpha),$.pixelStorei(3317,j.unpackAlignment),B.isDataTexture?$.texSubImage2D(3553,U,E.x,E.y,J,be,Ce,Oe,B.image.data):B.isCompressedTexture?$.compressedTexSubImage2D(3553,U,E.x,E.y,B.mipmaps[0].width,B.mipmaps[0].height,Ce,B.mipmaps[0].data):$.texSubImage2D(3553,U,E.x,E.y,Ce,Oe,B.image),U===0&&j.generateMipmaps&&$.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(E,B,j,U,J=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=E.max.x-E.min.x+1,Ce=E.max.y-E.min.y+1,Oe=E.max.z-E.min.z+1,ke=A.convert(U.format),Qe=A.convert(U.type);let We;if(U.isData3DTexture)Ee.setTexture3D(U,0),We=32879;else if(U.isDataArrayTexture)Ee.setTexture2DArray(U,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,U.flipY),$.pixelStorei(37441,U.premultiplyAlpha),$.pixelStorei(3317,U.unpackAlignment);const He=$.getParameter(3314),Nt=$.getParameter(32878),Yt=$.getParameter(3316),Oi=$.getParameter(3315),Mr=$.getParameter(32877),dt=j.isCompressedTexture?j.mipmaps[0]:j.image;$.pixelStorei(3314,dt.width),$.pixelStorei(32878,dt.height),$.pixelStorei(3316,E.min.x),$.pixelStorei(3315,E.min.y),$.pixelStorei(32877,E.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(We,J,B.x,B.y,B.z,be,Ce,Oe,ke,Qe,dt.data):j.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(We,J,B.x,B.y,B.z,be,Ce,Oe,ke,dt.data)):$.texSubImage3D(We,J,B.x,B.y,B.z,be,Ce,Oe,ke,Qe,dt),$.pixelStorei(3314,He),$.pixelStorei(32878,Nt),$.pixelStorei(3316,Yt),$.pixelStorei(3315,Oi),$.pixelStorei(32877,Mr),J===0&&U.generateMipmaps&&$.generateMipmap(We),me.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ee.setTextureCube(E,0):E.isData3DTexture?Ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ee.setTexture2DArray(E,0):Ee.setTexture2D(E,0),me.unbindTexture()},this.resetState=function(){g=0,y=0,v=null,me.reset(),F.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class ow extends rh{}ow.prototype.isWebGL1Renderer=!0;class lw extends tt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class cw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ta,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,n=this.stride;r<n;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new P;class oo{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}setX(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$e(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$e(t,this.array),i=$e(i,this.array),r=$e(r,this.array),n=$e(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=n,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)t.push(this.data.array[r+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nh=new P,sh=new Ze,ah=new Ze,hw=new P,oh=new Ne;class uw extends It{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Ne,this.bindMatrixInverse=new Ne}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ze,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const n=1/e.manhattanLength();n!==1/0?e.multiplyScalar(n):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,r=this.geometry;sh.fromBufferAttribute(r.attributes.skinIndex,e),ah.fromBufferAttribute(r.attributes.skinWeight,e),nh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let n=0;n<4;n++){const a=ah.getComponent(n);if(a!==0){const o=sh.getComponent(n);oh.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(hw.copy(nh).applyMatrix4(oh),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class lh extends tt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class dw extends At{constructor(e=null,t=1,i=1,r,n,a,o,l,c=vt,h=vt,u,d){super(null,a,o,l,c,h,r,n,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ch=new Ne,pw=new Ne;class lo{constructor(e=[],t=[]){this.uuid=Qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Ne)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Ne;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let n=0,a=e.length;n<a;n++){const o=e[n]?e[n].matrixWorld:pw;ch.multiplyMatrices(o,t[n]),ch.toArray(i,n*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=hc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new dw(t,e,e,Kt,Ui);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const n=e.bones[i];let a=t[n];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",n),a=new lh),this.bones.push(a),this.boneInverses.push(new Ne().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,n=t.length;r<n;r++){const a=t[r];e.bones.push(a.uuid);const o=i[r];e.boneInverses.push(o.toArray())}return e}}class hh extends Ct{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const uh=new Ne,dh=new Ne,Ls=[],mw=new Ne,Ln=new It;class fw extends It{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let r=0;r<i;r++)this.setMatrixAt(r,mw)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Ln.geometry=this.geometry,Ln.material=this.material,Ln.material!==void 0)for(let n=0;n<r;n++){this.getMatrixAt(n,uh),dh.multiplyMatrices(i,uh),Ln.matrixWorld=dh,Ln.raycast(e,Ls);for(let a=0,o=Ls.length;a<o;a++){const l=Ls[a];l.instanceId=n,l.object=this,t.push(l)}Ls.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ph extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const mh=new P,fh=new P,_h=new Ne,co=new ms,Ps=new Gr;class ho extends tt{constructor(e=new ii,t=new ph){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,n=t.count;r<n;r++)mh.fromBufferAttribute(t,r-1),fh.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=mh.distanceTo(fh);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(r),Ps.radius+=n,e.ray.intersectsSphere(Ps)===!1)return;_h.copy(r).invert(),co.copy(e.ray).applyMatrix4(_h);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new P,h=new P,u=new P,d=new P,f=this.isLineSegments?2:1,w=i.index,_=i.attributes.position;if(w!==null){const m=Math.max(0,a.start),g=Math.min(w.count,a.start+a.count);for(let y=m,v=g-1;y<v;y+=f){const x=w.getX(y),S=w.getX(y+1);if(c.fromBufferAttribute(_,x),h.fromBufferAttribute(_,S),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(d);L<e.near||L>e.far||t.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,a.start),g=Math.min(_.count,a.start+a.count);for(let y=m,v=g-1;y<v;y+=f){if(c.fromBufferAttribute(_,y),h.fromBufferAttribute(_,y+1),co.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const gh=new P,wh=new P;class _w extends ho{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,n=t.count;r<n;r+=2)gh.fromBufferAttribute(t,r),wh.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+gh.distanceTo(wh);e.setAttribute("lineDistance",new ei(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gw extends ho{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class uo extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new Ne,po=new ms,Is=new Gr,Ds=new P;class bh extends tt{constructor(e=new ii,t=new uo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,n=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=n,e.ray.intersectsSphere(Is)===!1)return;vh.copy(r).invert(),po.copy(e.ray).applyMatrix4(vh);const o=n/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let f=u,w=d;f<w;f++){const _=c.getX(f);Ds.fromBufferAttribute(h,_),yh(Ds,_,l,r,e,t,this)}}else{const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let f=u,w=d;f<w;f++)Ds.fromBufferAttribute(h,f),yh(Ds,f,l,r,e,t,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yh(s,e,t,i,r,n,a){const o=po.distanceSqToPoint(s);if(o<t){const l=new P;po.closestPointToPoint(s,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class _i{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),n=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),n+=i.distanceTo(r),t.push(n),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const n=i.length;let a;t?a=t:a=e*i[n-1];let o=0,l=n-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(n-1);const h=i[r],u=i[r+1]-h,d=(a-h)/u;return(r+d)/(n-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const n=this.getPoint(i),a=this.getPoint(r),o=t||(n.isVector2?new he:new P);return o.copy(a).sub(n).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new P,r=[],n=[],a=[],o=new P,l=new Ne;for(let f=0;f<=e;f++){const w=f/e;r[f]=this.getTangentAt(w,new P)}n[0]=new P,a[0]=new P;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],o),a[0].crossVectors(r[0],n[0]);for(let f=1;f<=e;f++){if(n[f]=n[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const w=Math.acos(bt(r[f-1].dot(r[f]),-1,1));n[f].applyMatrix4(l.makeRotationAxis(o,w))}a[f].crossVectors(r[f],n[f])}if(t===!0){let f=Math.acos(bt(n[0].dot(n[e]),-1,1));f/=e,r[0].dot(o.crossVectors(n[0],n[e]))>0&&(f=-f);for(let w=1;w<=e;w++)n[w].applyMatrix4(l.makeRotationAxis(r[w],f*w)),a[w].crossVectors(r[w],n[w])}return{tangents:r,normals:n,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class mo extends _i{constructor(e=0,t=0,i=1,r=1,n=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const i=t||new he,r=Math.PI*2;let n=this.aEndAngle-this.aStartAngle;const a=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(a?n=0:n=r),this.aClockwise===!0&&!a&&(n===r?n=-r:n=n-r);const o=this.aStartAngle+e*n;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ww extends mo{constructor(e,t,i,r,n,a){super(e,t,i,i,r,n,a),this.isArcCurve=!0,this.type="ArcCurve"}}function fo(){let s=0,e=0,t=0,i=0;function r(n,a,o,l){s=n,e=o,t=-3*n+3*a-2*o-l,i=2*n-2*a+o+l}return{initCatmullRom:function(n,a,o,l,c){r(a,o,c*(o-n),c*(l-a))},initNonuniformCatmullRom:function(n,a,o,l,c,h,u){let d=(a-n)/c-(o-n)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,r(a,o,d,f)},calc:function(n){const a=n*n,o=a*n;return s+e*n+t*a+i*o}}}const Ns=new P,_o=new fo,go=new fo,wo=new fo;class vw extends _i{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new P){const i=t,r=this.points,n=r.length,a=(n-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/n)+1)*n:l===0&&o===n-1&&(o=n-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%n]:(Ns.subVectors(r[0],r[1]).add(r[0]),c=Ns);const u=r[o%n],d=r[(o+1)%n];if(this.closed||o+2<n?h=r[(o+2)%n]:(Ns.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=Ns),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let w=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),w<1e-4&&(w=_),m<1e-4&&(m=_),_o.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,w,_,m),go.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,w,_,m),wo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,w,_,m)}else this.curveType==="catmullrom"&&(_o.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),go.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),wo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(_o.calc(l),go.calc(l),wo.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new P().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function xh(s,e,t,i,r){const n=(i-e)*.5,a=(r-t)*.5,o=s*s,l=s*o;return(2*t-2*i+n+a)*l+(-3*t+3*i-2*n-a)*o+n*s+t}function bw(s,e){const t=1-s;return t*t*e}function yw(s,e){return 2*(1-s)*s*e}function xw(s,e){return s*s*e}function Pn(s,e,t,i){return bw(s,e)+yw(s,t)+xw(s,i)}function Sw(s,e){const t=1-s;return t*t*t*e}function Mw(s,e){const t=1-s;return 3*t*t*s*e}function Ew(s,e){return 3*(1-s)*s*s*e}function Tw(s,e){return s*s*s*e}function In(s,e,t,i,r){return Sw(s,e)+Mw(s,t)+Ew(s,i)+Tw(s,r)}class Sh extends _i{constructor(e=new he,t=new he,i=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new he){const i=t,r=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(In(e,r.x,n.x,a.x,o.x),In(e,r.y,n.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Aw extends _i{constructor(e=new P,t=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new P){const i=t,r=this.v0,n=this.v1,a=this.v2,o=this.v3;return i.set(In(e,r.x,n.x,a.x,o.x),In(e,r.y,n.y,a.y,o.y),In(e,r.z,n.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class vo extends _i{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new he;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cw extends _i{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mh extends _i{constructor(e=new he,t=new he,i=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new he){const i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(Pn(e,r.x,n.x,a.x),Pn(e,r.y,n.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rw extends _i{constructor(e=new P,t=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new P){const i=t,r=this.v0,n=this.v1,a=this.v2;return i.set(Pn(e,r.x,n.x,a.x),Pn(e,r.y,n.y,a.y),Pn(e,r.z,n.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Eh extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const i=t,r=this.points,n=(r.length-1)*e,a=Math.floor(n),o=n-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return i.set(xh(o,l.x,c.x,h.x,u.x),xh(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var Lw=Object.freeze({__proto__:null,ArcCurve:ww,CatmullRomCurve3:vw,CubicBezierCurve:Sh,CubicBezierCurve3:Aw,EllipseCurve:mo,LineCurve:vo,LineCurve3:Cw,QuadraticBezierCurve:Mh,QuadraticBezierCurve3:Rw,SplineCurve:Eh});class Pw extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new vo(t,e))}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let n=0;for(;n<r.length;){if(r[n]>=i){const a=r[n]-i,o=this.curves[n],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}n++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,n=this.curves;r<n.length;r++){const a=n[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Lw[r.type]().fromJSON(r))}return this}}class bo extends Pw{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new vo(this.currentPoint.clone(),new he(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const n=new Mh(this.currentPoint.clone(),new he(e,t),new he(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,n,a){const o=new Sh(this.currentPoint.clone(),new he(e,t),new he(i,r),new he(n,a));return this.curves.push(o),this.currentPoint.set(n,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Eh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,n,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,n,a),this}absarc(e,t,i,r,n,a){return this.absellipse(e,t,i,i,r,n,a),this}ellipse(e,t,i,r,n,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,n,a,o,l),this}absellipse(e,t,i,r,n,a,o,l){const c=new mo(e,t,i,r,n,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}let yo=class extends bo{constructor(s){super(s),this.uuid=Qt(),this.type="Shape",this.holes=[]}getPointsHoles(s){const e=[];for(let t=0,i=this.holes.length;t<i;t++)e[t]=this.holes[t].getPoints(s);return e}extractPoints(s){return{shape:this.getPoints(s),holes:this.getPointsHoles(s)}}copy(s){super.copy(s),this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(i.clone())}return this}toJSON(){const s=super.toJSON();s.uuid=this.uuid,s.holes=[];for(let e=0,t=this.holes.length;e<t;e++){const i=this.holes[e];s.holes.push(i.toJSON())}return s}fromJSON(s){super.fromJSON(s),this.uuid=s.uuid,this.holes=[];for(let e=0,t=s.holes.length;e<t;e++){const i=s.holes[e];this.holes.push(new bo().fromJSON(i))}return this}};const Iw={triangulate:function(s,e,t=2){const i=e&&e.length,r=i?e[0]*t:s.length;let n=Th(s,0,r,t,!0);const a=[];if(!n||n.next===n.prev)return a;let o,l,c,h,u,d,f;if(i&&(n=kw(s,e,n,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let w=t;w<r;w+=t)u=s[w],d=s[w+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Dn(n,a,t,o,l,f,0),a}};function Th(s,e,t,i,r){let n,a;if(r===Yw(s,e,t,i)>0)for(n=e;n<t;n+=i)a=Rh(n,s[n],s[n+1],a);else for(n=t-i;n>=e;n-=i)a=Rh(n,s[n],s[n+1],a);return a&&Os(a,a.next)&&(On(a),a=a.next),a}function dr(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Os(t,t.next)||nt(t.prev,t,t.next)===0)){if(On(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Dn(s,e,t,i,r,n,a){if(!s)return;!a&&n&&Gw(s,i,r,n);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,n?Nw(s,i,r,n):Dw(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),On(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=Ow(dr(s),e,t),Dn(s,e,t,i,r,n,2)):a===2&&zw(s,e,t,i,r,n):Dn(dr(s),e,t,i,r,n,1);break}}}function Dw(s){const e=s.prev,t=s,i=s.next;if(nt(e,t,i)>=0)return!1;const r=e.x,n=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<n?r<a?r:a:n<a?n:a,u=o<l?o<c?o:c:l<c?l:c,d=r>n?r>a?r:a:n>a?n:a,f=o>l?o>c?o:c:l>c?l:c;let w=i.next;for(;w!==e;){if(w.x>=h&&w.x<=d&&w.y>=u&&w.y<=f&&rn(r,o,n,l,a,c,w.x,w.y)&&nt(w.prev,w,w.next)>=0)return!1;w=w.next}return!0}function Nw(s,e,t,i){const r=s.prev,n=s,a=s.next;if(nt(r,n,a)>=0)return!1;const o=r.x,l=n.x,c=a.x,h=r.y,u=n.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,w=h<u?h<d?h:d:u<d?u:d,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,g=xo(f,w,e,t,i),y=xo(_,m,e,t,i);let v=s.prevZ,x=s.nextZ;for(;v&&v.z>=g&&x&&x.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=w&&v.y<=m&&v!==r&&v!==a&&rn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0||(v=v.prevZ,x.x>=f&&x.x<=_&&x.y>=w&&x.y<=m&&x!==r&&x!==a&&rn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;v&&v.z>=g;){if(v.x>=f&&v.x<=_&&v.y>=w&&v.y<=m&&v!==r&&v!==a&&rn(o,h,l,u,c,d,v.x,v.y)&&nt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;x&&x.z<=y;){if(x.x>=f&&x.x<=_&&x.y>=w&&x.y<=m&&x!==r&&x!==a&&rn(o,h,l,u,c,d,x.x,x.y)&&nt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Ow(s,e,t){let i=s;do{const r=i.prev,n=i.next.next;!Os(r,n)&&Ah(r,i,i.next,n)&&Nn(r,n)&&Nn(n,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(n.i/t|0),On(i),On(i.next),i=s=n),i=i.next}while(i!==s);return dr(i)}function zw(s,e,t,i,r,n){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jw(a,o)){let l=Ch(a,o);a=dr(a,a.next),l=dr(l,l.next),Dn(a,e,t,i,r,n,0),Dn(l,e,t,i,r,n,0);return}o=o.next}a=a.next}while(a!==s)}function kw(s,e,t,i){const r=[];let n,a,o,l,c;for(n=0,a=e.length;n<a;n++)o=e[n]*i,l=n<a-1?e[n+1]*i:s.length,c=Th(s,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(Ww(c));for(r.sort(Fw),n=0;n<r.length;n++)t=Uw(r[n],t);return t}function Fw(s,e){return s.x-e.x}function Uw(s,e){const t=Bw(s,e);if(!t)return e;const i=Ch(t,s);return dr(i,i.next),dr(t,t.next)}function Bw(s,e){let t=e,i=-1/0,r;const n=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>i&&(i=d,r=t.x<t.next.x?t:t.next,d===n))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let h=1/0,u;t=r;do n>=t.x&&t.x>=l&&n!==t.x&&rn(a<c?n:i,a,l,c,a<c?i:n,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(n-t.x),Nn(t,s)&&(u<h||u===h&&(t.x>r.x||t.x===r.x&&Hw(r,t)))&&(r=t,h=u)),t=t.next;while(t!==o);return r}function Hw(s,e){return nt(s.prev,s,e.prev)<0&&nt(e.next,s,s.next)<0}function Gw(s,e,t,i){let r=s;do r.z===0&&(r.z=xo(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==s);r.prevZ.nextZ=null,r.prevZ=null,Vw(r)}function Vw(s){let e,t,i,r,n,a,o,l,c=1;do{for(t=s,s=null,n=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),n?n.nextZ=r:s=r,r.prevZ=n,n=r;t=i}n.nextZ=null,c*=2}while(a>1);return s}function xo(s,e,t,i,r){return s=(s-t)*r|0,e=(e-i)*r|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Ww(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function rn(s,e,t,i,r,n,a,o){return(r-a)*(e-o)>=(s-a)*(n-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(n-o)>=(r-a)*(i-o)}function jw(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Xw(s,e)&&(Nn(s,e)&&Nn(e,s)&&qw(s,e)&&(nt(s.prev,s,e.prev)||nt(s,e.prev,e))||Os(s,e)&&nt(s.prev,s,s.next)>0&&nt(e.prev,e,e.next)>0)}function nt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Os(s,e){return s.x===e.x&&s.y===e.y}function Ah(s,e,t,i){const r=ks(nt(s,e,t)),n=ks(nt(s,e,i)),a=ks(nt(t,i,s)),o=ks(nt(t,i,e));return!!(r!==n&&a!==o||r===0&&zs(s,t,e)||n===0&&zs(s,i,e)||a===0&&zs(t,s,i)||o===0&&zs(t,e,i))}function zs(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ks(s){return s>0?1:s<0?-1:0}function Xw(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Ah(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function Nn(s,e){return nt(s.prev,s,s.next)<0?nt(s,e,s.next)>=0&&nt(s,s.prev,e)>=0:nt(s,e,s.prev)<0||nt(s,s.next,e)<0}function qw(s,e){let t=s,i=!1;const r=(s.x+e.x)/2,n=(s.y+e.y)/2;do t.y>n!=t.next.y>n&&t.next.y!==t.y&&r<(t.next.x-t.x)*(n-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Ch(s,e){const t=new So(s.i,s.x,s.y),i=new So(e.i,e.x,e.y),r=s.next,n=e.prev;return s.next=e,e.prev=s,t.next=r,r.prev=t,i.next=t,t.prev=i,n.next=i,i.prev=n,i}function Rh(s,e,t,i){const r=new So(s,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function On(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function So(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Yw(s,e,t,i){let r=0;for(let n=e,a=t-i;n<t;n+=i)r+=(s[a]-s[n])*(s[n+1]+s[a+1]),a=n;return r}class Mo{static area(e){const t=e.length;let i=0;for(let r=t-1,n=0;n<t;r=n++)i+=e[r].x*e[n].y-e[n].x*e[r].y;return i*.5}static isClockWise(e){return Mo.area(e)<0}static triangulateShape(e,t){const i=[],r=[],n=[];Lh(e),Ph(i,e);let a=e.length;t.forEach(Lh);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Ph(i,t[l]);const o=Iw.triangulate(i,r);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}}function Lh(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Ph(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Fs extends ii{constructor(e=1,t=32,i=16,r=0,n=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:n,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new P,d=new P,f=[],w=[],_=[],m=[];for(let g=0;g<=i;g++){const y=[],v=g/i;let x=0;g==0&&a==0?x=.5/t:g==i&&l==Math.PI&&(x=-.5/t);for(let S=0;S<=t;S++){const L=S/t;u.x=-e*Math.cos(r+L*n)*Math.sin(a+v*o),u.y=e*Math.cos(a+v*o),u.z=e*Math.sin(r+L*n)*Math.sin(a+v*o),w.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(L+x,1-v),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const v=h[g][y+1],x=h[g][y],S=h[g+1][y],L=h[g+1][y+1];(g!==0||a>0)&&f.push(v,x,L),(g!==i-1||l<Math.PI)&&f.push(x,S,L)}this.setIndex(f),this.setAttribute("position",new ei(w,3)),this.setAttribute("normal",new ei(_,3)),this.setAttribute("uv",new ei(m,2))}static fromJSON(e){return new Fs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Us extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class pr extends Us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function qi(s,e,t){return Ih(s)?new s.constructor(s.subarray(e,t!==void 0?t:s.length)):s.slice(e,t)}function Bs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Ih(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Jw(s){function e(r,n){return s[r]-s[n]}const t=s.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function Dh(s,e,t){const i=s.length,r=new s.constructor(i);for(let n=0,a=0;a!==i;++n){const o=t[n]*e;for(let l=0;l!==e;++l)r[a++]=s[o+l]}return r}function Nh(s,e,t,i){let r=1,n=s[0];for(;n!==void 0&&n[i]===void 0;)n=s[r++];if(n===void 0)return;let a=n[i];if(a!==void 0)if(Array.isArray(a))do a=n[i],a!==void 0&&(e.push(n.time),t.push.apply(t,a)),n=s[r++];while(n!==void 0);else if(a.toArray!==void 0)do a=n[i],a!==void 0&&(e.push(n.time),a.toArray(t,t.length)),n=s[r++];while(n!==void 0);else do a=n[i],a!==void 0&&(e.push(n.time),t.push(a)),n=s[r++];while(n!==void 0)}class zn{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],n=t[i-1];i:{e:{let a;t:{r:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<n)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(n=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=n)){const o=t[1];e<o&&(i=2,n=o);for(let l=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=n,n=t[--i-1],e>=n)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],n=t[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r;for(let a=0;a!==r;++a)t[a]=i[n+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $w extends zn{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(e,t,i){const r=this.parameterPositions;let n=e-2,a=e+1,o=r[n],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case nc:n=e,o=2*t-i;break;case sc:n=r.length-2,o=t+r[n]-r[n+1];break;default:n=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case nc:a=e,l=2*i-t;break;case sc:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=n*h,this._offsetNext=a*h}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,w=(i-t)/(r-t),_=w*w,m=_*w,g=-d*m+2*d*_-d*w,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*w+1,v=(-1-f)*m+(1.5+f)*_+.5*w,x=f*m-f*_;for(let S=0;S!==o;++S)n[S]=g*a[h+S]+y*a[c+S]+v*a[l+S]+x*a[u+S];return n}}class Zw extends zn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),u=1-h;for(let d=0;d!==o;++d)n[d]=a[c+d]*u+a[l+d]*h;return n}}class Kw extends zn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Bs(t,this.TimeBufferType),this.values=Bs(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Bs(e.times,Array),values:Bs(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Zw(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new $w(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fn:t=this.InterpolantFactoryMethodDiscrete;break;case zr:t=this.InterpolantFactoryMethodLinear;break;case Ma:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fn;case this.InterpolantFactoryMethodLinear:return zr;case this.InterpolantFactoryMethodSmooth:return Ma}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let n=0,a=r-1;for(;n!==r&&i[n]<e;)++n;for(;a!==-1&&i[a]>t;)--a;if(++a,n!==0||a!==r){n>=a&&(a=Math.max(a,1),n=a-1);const o=this.getValueSize();this.times=qi(i,n,a),this.values=qi(this.values,n*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,n=i.length;n===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==n;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Ih(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=qi(this.times),t=qi(this.values),i=this.getValueSize(),r=this.getInterpolation()===Ma,n=e.length-1;let a=1;for(let o=1;o<n;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{const u=o*i,d=u-i,f=u+i;for(let w=0;w!==i;++w){const _=t[u+w];if(_!==t[d+w]||_!==t[f+w]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(n>0){e[a]=e[n];for(let o=n*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=qi(e,0,a),this.values=qi(t,0,a*i)):(this.times=e,this.values=t),this}clone(){const e=qi(this.times,0),t=qi(this.values,0),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gi.prototype.TimeBufferType=Float32Array,gi.prototype.ValueBufferType=Float32Array,gi.prototype.DefaultInterpolation=zr;class nn extends gi{}nn.prototype.ValueTypeName="bool",nn.prototype.ValueBufferType=Array,nn.prototype.DefaultInterpolation=fn,nn.prototype.InterpolantFactoryMethodLinear=void 0,nn.prototype.InterpolantFactoryMethodSmooth=void 0;class Oh extends gi{}Oh.prototype.ValueTypeName="color";class kn extends gi{}kn.prototype.ValueTypeName="number";class Qw extends zn{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t);let c=e*o;for(let h=c+o;c!==h;c+=4)pi.slerpFlat(n,0,a,c-o,a,c,l);return n}}class mr extends gi{InterpolantFactoryMethodLinear(e){return new Qw(this.times,this.values,this.getValueSize(),e)}}mr.prototype.ValueTypeName="quaternion",mr.prototype.DefaultInterpolation=zr,mr.prototype.InterpolantFactoryMethodSmooth=void 0;class sn extends gi{}sn.prototype.ValueTypeName="string",sn.prototype.ValueBufferType=Array,sn.prototype.DefaultInterpolation=fn,sn.prototype.InterpolantFactoryMethodLinear=void 0,sn.prototype.InterpolantFactoryMethodSmooth=void 0;class Fn extends gi{}Fn.prototype.ValueTypeName="vector";class ev{constructor(e,t=-1,i,r=Gd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(iv(i[a]).scale(r));const n=new this(e.name,e.duration,t,e.blendMode);return n.uuid=e.uuid,n}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let n=0,a=i.length;n!==a;++n)t.push(gi.toJSON(i[n]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const n=t.length,a=[];for(let o=0;o<n;o++){let l=[],c=[];l.push((o+n-1)%n,o,(o+1)%n),c.push(0,1,0);const h=Jw(l);l=Dh(l,1,h),c=Dh(c,1,h),!r&&l[0]===0&&(l.push(n),c.push(c[0])),a.push(new kn(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},n=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(n);if(h&&h.length>1){const u=h[1];let d=r[u];d||(r[u]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,u,d,f,w){if(d.length!==0){const _=[],m=[];Nh(d,_,m,f),_.length!==0&&w.push(new h(u,_,m))}},r=[],n=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const d={};let f;for(f=0;f<u.length;f++)if(u[f].morphTargets)for(let w=0;w<u[f].morphTargets.length;w++)d[u[f].morphTargets[w]]=-1;for(const w in d){const _=[],m=[];for(let g=0;g!==u[f].morphTargets.length;++g){const y=u[f];_.push(y.time),m.push(y.morphTarget===w?1:0)}r.push(new kn(".morphTargetInfluence["+w+"]",_,m))}l=d.length*a}else{const d=".bones["+t[h].name+"]";i(Fn,d+".position",u,"pos",r),i(mr,d+".quaternion",u,"rot",r),i(Fn,d+".scale",u,"scl",r)}}return r.length===0?null:new this(n,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const n=this.tracks[i];t=Math.max(t,n.times[n.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return kn;case"vector":case"vector2":case"vector3":case"vector4":return Fn;case"color":return Oh;case"quaternion":return mr;case"bool":case"boolean":return nn;case"string":return sn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function iv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tv(s.type);if(s.times===void 0){const t=[],i=[];Nh(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const an={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class rv{constructor(e,t,i){const r=this;let n=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,n===!1&&r.onStart!==void 0&&r.onStart(h,a,o),n=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],w=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return w}return null}}}const nv=new rv;class fr{constructor(e){this.manager=e!==void 0?e:nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,n){i.load(e,r,t,n)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Ri={};class sv extends Error{constructor(e,t){super(e),this.response=t}}class Eo extends fr{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=an.get(e);if(n!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(n),this.manager.itemEnd(e)},0),n;if(Ri[e]!==void 0){Ri[e].push({onLoad:t,onProgress:i,onError:r});return}Ri[e]=[],Ri[e].push({onLoad:t,onProgress:i,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ri[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,w=f!==0;let _=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:v,value:x})=>{if(v)g.close();else{_+=x.byteLength;const S=new ProgressEvent("progress",{lengthComputable:w,loaded:_,total:f});for(let L=0,O=h.length;L<O;L++){const b=h[L];b.onProgress&&b.onProgress(S)}g.enqueue(x),y()}})}}});return new Response(m)}else throw new sv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return c.arrayBuffer().then(f=>d.decode(f))}}}).then(c=>{an.add(e,c);const h=Ri[e];delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Ri[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ri[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class zh extends fr{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=an.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o=vn("img");function l(){h(),an.add(e,this),t&&t(this),n.manager.itemEnd(e)}function c(u){h(),r&&r(u),n.manager.itemError(e),n.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),n.manager.itemStart(e),o.src=e,o}}class av extends fr{constructor(e){super(e)}load(e,t,i,r){const n=new Za,a=new zh(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){n.images[c]=h,o++,o===6&&(n.needsUpdate=!0,t&&t(n))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return n}}class kh extends fr{constructor(e){super(e)}load(e,t,i,r){const n=new At,a=new zh(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){n.image=o,n.needsUpdate=!0,t!==void 0&&t(n)},i,r),n}}class Hs extends tt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const To=new Ne,Fh=new P,Uh=new P;class Ao{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qa,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new Ze(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Uh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uh),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ov extends Ao{constructor(){super(new kt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=gn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,n=e.distance||t.far;(i!==t.fov||r!==t.aspect||n!==t.far)&&(t.fov=i,t.aspect=r,t.far=n,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lv extends Hs{constructor(e,t,i=0,r=Math.PI/3,n=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.distance=i,this.angle=r,this.penumbra=n,this.decay=a,this.map=null,this.shadow=new ov}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bh=new Ne,Un=new P,Co=new P;class cv extends Ao{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new Ze(2,1,1,1),new Ze(0,1,1,1),new Ze(3,1,1,1),new Ze(1,1,1,1),new Ze(3,0,1,1),new Ze(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,n=e.distance||i.far;n!==i.far&&(i.far=n,i.updateProjectionMatrix()),Un.setFromMatrixPosition(e.matrixWorld),i.position.copy(Un),Co.copy(i.position),Co.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Co),i.updateMatrixWorld(),r.makeTranslation(-Un.x,-Un.y,-Un.z),Bh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class hv extends Hs{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new cv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class uv extends Ao{constructor(){super(new eo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dv extends Hs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tt.DefaultUp),this.updateMatrix(),this.target=new tt,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pv extends Hs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class _r{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class mv extends fr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const n=this,a=an.get(e);if(a!==void 0)return n.manager.itemStart(e),setTimeout(function(){t&&t(a),n.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(n.options,{colorSpaceConversion:"none"}))}).then(function(l){an.add(e,l),t&&t(l),n.manager.itemEnd(e)}).catch(function(l){r&&r(l),n.manager.itemError(e),n.manager.itemEnd(e)}),n.manager.itemStart(e)}}class fv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Hh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Hh(){return(typeof performance>"u"?Date:performance).now()}const Ro="\\[\\]\\.:\\/",_v=new RegExp("["+Ro+"]","g"),Lo="[^"+Ro+"]",gv="[^"+Ro.replace("\\.","")+"]",wv=/((?:WC+[\/:])*)/.source.replace("WC",Lo),vv=/(WCOD+)?/.source.replace("WCOD",gv),bv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lo),yv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lo),xv=new RegExp("^"+wv+vv+bv+yv+"$"),Sv=["material","materials","bones","map"];class Mv{constructor(e,t,i){const r=i||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class qe{constructor(e,t,i){this.path=t,this.parsedPath=i||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,i):new qe(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(e){const t=xv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const n=i.nodeName.substring(r+1);Sv.indexOf(n)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=n)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(n){for(let a=0;a<n.length;a++){const o=n[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,n=i.length;r!==n;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let n=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[n]!==void 0&&(n=e.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=n}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=Mv,qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray],qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ev{constructor(e,t,i=0,r=1/0){this.ray=new ms(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Po(e,this,i,t),i.sort(Gh),i}intersectObjects(e,t=!0,i=[]){for(let r=0,n=e.length;r<n;r++)Po(e[r],this,i,t);return i.sort(Gh),i}}function Gh(s,e){return s.distance-e.distance}function Po(s,e,t,i){if(s.layers.test(e.layers)&&s.raycast(e,t),i===!0){const r=s.children;for(let n=0,a=r.length;n<a;n++)Po(r[n],e,t,!0)}}class Vh{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tv{constructor(){this.type="ShapePath",this.color=new Le,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new bo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,n,a){return this.currentPath.bezierCurveTo(e,t,i,r,n,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let v=0,x=g.length;v<x;v++){const S=g[v],L=new yo;L.curves=S.curves,y.push(L)}return y}function i(g,y){const v=y.length;let x=!1;for(let S=v-1,L=0;L<v;S=L++){let O=y[S],b=y[L],R=b.x-O.x,k=b.y-O.y;if(Math.abs(k)>Number.EPSILON){if(k<0&&(O=y[L],R=-R,b=y[S],k=-k),g.y<O.y||g.y>b.y)continue;if(g.y===O.y){if(g.x===O.x)return!0}else{const X=k*(g.x-O.x)-R*(g.y-O.y);if(X===0)return!0;if(X<0)continue;x=!x}}else{if(g.y!==O.y)continue;if(b.x<=g.x&&g.x<=O.x||O.x<=g.x&&g.x<=b.x)return!0}}return x}const r=Mo.isClockWise,n=this.subPaths;if(n.length===0)return[];let a,o,l;const c=[];if(n.length===1)return o=n[0],l=new yo,l.curves=o.curves,c.push(l),c;let h=!r(n[0].getPoints());h=e?!h:h;const u=[],d=[];let f=[],w=0,_;d[w]=void 0,f[w]=[];for(let g=0,y=n.length;g<y;g++)o=n[g],_=o.getPoints(),a=r(_),a=e?!a:a,a?(!h&&d[w]&&w++,d[w]={s:new yo,p:_},d[w].s.curves=o.curves,h&&w++,f[w]=[]):f[w].push({h:o,p:_[0]});if(!d[0])return t(n);if(d.length>1){let g=!1,y=0;for(let v=0,x=d.length;v<x;v++)u[v]=[];for(let v=0,x=d.length;v<x;v++){const S=f[v];for(let L=0;L<S.length;L++){const O=S[L];let b=!0;for(let R=0;R<d.length;R++)i(O.p,d[R].p)&&(v!==R&&y++,b?(b=!1,u[R].push(O)):g=!0);b&&u[v].push(O)}}y>0&&g===!1&&(f=u)}let m;for(let g=0,y=d.length;g<y;g++){l=d[g].s,c.push(l),m=f[g];for(let v=0,x=m.length;v<x;v++)l.holes.push(m[v].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yi}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yi);/**
* lil-gui
* https://lil-gui.georgealways.com
* @version 0.17.0
* @author George Michael Brower
* @license MIT
*/class wi{constructor(e,t,i,r,n="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(r),this.$name=document.createElement("div"),this.$name.classList.add("name"),wi.nextNameID=wi.nextNameID||0,this.$name.id=`lil-gui-name-${++wi.nextNameID}`,this.$widget=document.createElement(n),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class Av extends wi{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Io(s){let e,t;return(e=s.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const Cv={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:Io,toHexString:Io},Bn={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},Rv={isPrimitive:!1,match:Array.isArray,fromHexString(s,e,t=1){const i=Bn.fromHexString(s);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([s,e,t],i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return Bn.toHexString(r)}},Lv={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,e,t=1){const i=Bn.fromHexString(s);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r:s,g:e,b:t},i=1){i=255/i;const r=s*i<<16^e*i<<8^t*i<<0;return Bn.toHexString(r)}},Pv=[Cv,Bn,Rv,Lv];function Iv(s){return Pv.find(e=>e.match(s))}class Dv extends wi{constructor(e,t,i,r){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=Iv(this.initialValue),this._rgbScale=r,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const n=Io(this.$text.value);n&&this._setValueFromHexString(n)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Do extends wi{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",r=>{r.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Nv extends wi{constructor(e,t,i,r,n,a){super(e,t,i,"number"),this._initInput(),this.min(r),this.max(n);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let g=parseFloat(this.$input.value);isNaN(g)||(this._stepExplicit&&(g=this._snap(g)),this.setValue(this._clamp(g)))},t=g=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+g),this.$input.value=this.getValue())},i=g=>{g.code==="Enter"&&this.$input.blur(),g.code==="ArrowUp"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g))),g.code==="ArrowDown"&&(g.preventDefault(),t(this._step*this._arrowKeyMultiplier(g)*-1))},r=g=>{this._inputFocused&&(g.preventDefault(),t(this._step*this._normalizeMouseWheel(g)))};let n=!1,a,o,l,c,h;const u=5,d=g=>{a=g.clientX,o=l=g.clientY,n=!0,c=this.getValue(),h=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",w)},f=g=>{if(n){const y=g.clientX-a,v=g.clientY-o;Math.abs(v)>u?(g.preventDefault(),this.$input.blur(),n=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&w()}if(!n){const y=g.clientY-l;h-=y*this._step*this._arrowKeyMultiplier(g),c+h>this._max?h=this._max-c:c+h<this._min&&(h=this._min-c),this._snapClampSetValue(c+h)}l=g.clientY},w=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",w)},_=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",_),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(g,y,v,x,S)=>(g-y)/(v-y)*(S-x)+x,t=g=>{const y=this.$slider.getBoundingClientRect();let v=e(g,y.left,y.right,this._min,this._max);this._snapClampSetValue(v)},i=g=>{this._setDraggingStyle(!0),t(g.clientX),window.addEventListener("mousemove",r),window.addEventListener("mouseup",n)},r=g=>{t(g.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",n)};let a=!1,o,l;const c=g=>{g.preventDefault(),this._setDraggingStyle(!0),t(g.touches[0].clientX),a=!1},h=g=>{g.touches.length>1||(this._hasScrollBar?(o=g.touches[0].clientX,l=g.touches[0].clientY,a=!0):c(g),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=g=>{if(a){const y=g.touches[0].clientX-o,v=g.touches[0].clientY-l;Math.abs(y)>Math.abs(v)?c(g):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else g.preventDefault(),t(g.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},f=this._callOnFinishChange.bind(this),w=400;let _;const m=g=>{if(Math.abs(g.deltaX)<Math.abs(g.deltaY)&&this._hasScrollBar)return;g.preventDefault();const y=this._normalizeMouseWheel(g)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(f,w)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",m,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class Ov extends wi{constructor(e,t,i,r){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(r)?r:Object.values(r),this._names=Array.isArray(r)?r:Object.keys(r),this._names.forEach(n=>{const a=document.createElement("option");a.innerHTML=n,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class zv extends wi{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",r=>{r.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const kv=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function Fv(s){const e=document.createElement("style");e.innerHTML=s;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let Wh=!1;class No{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:r,title:n="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{(l.code==="Enter"||l.code==="Space")&&(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!Wh&&a&&(Fv(kv),Wh=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),r&&this.domElement.style.setProperty("--width",r+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,i,r,n){if(Object(i)===i)return new Ov(this,e,t,i);const a=e[t];switch(typeof a){case"number":return new Nv(this,e,t,i,r,n);case"boolean":return new Av(this,e,t);case"string":return new zv(this,e,t);case"function":return new Do(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,a)}addColor(e,t,i=1){return new Dv(this,e,t,i)}addFolder(e){return new No({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Do||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Do)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=n=>{n.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const r=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=r+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}class Uv{constructor(){this.active=!0,this.active&&(this.ui=new No)}}class jh{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(i=>{const r=this.resolveName(i);this.callbacks[r.namespace]instanceof Object||(this.callbacks[r.namespace]={}),this.callbacks[r.namespace][r.value]instanceof Array||(this.callbacks[r.namespace][r.value]=[]),this.callbacks[r.namespace][r.value].push(t)}),this)}off(e){return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(t=>{const i=this.resolveName(t);if(i.namespace!=="base"&&i.value==="")delete this.callbacks[i.namespace];else if(i.namespace==="base")for(const r in this.callbacks)this.callbacks[r]instanceof Object&&this.callbacks[r][i.value]instanceof Array&&(delete this.callbacks[r][i.value],Object.keys(this.callbacks[r]).length===0&&delete this.callbacks[r]);else this.callbacks[i.namespace]instanceof Object&&this.callbacks[i.namespace][i.value]instanceof Array&&(delete this.callbacks[i.namespace][i.value],Object.keys(this.callbacks[i.namespace]).length===0&&delete this.callbacks[i.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;let i=null;const r=t instanceof Array?t:[];let n=this.resolveNames(e);if(n=this.resolveName(n[0]),n.namespace==="base")for(const a in this.callbacks)this.callbacks[a]instanceof Object&&this.callbacks[a][n.value]instanceof Array&&this.callbacks[a][n.value].forEach(function(o){o.apply(this,r)});else if(this.callbacks[n.namespace]instanceof Object){if(n.value==="")return console.warn("wrong name"),this;this.callbacks[n.namespace][n.value].forEach(function(a){a.apply(this,r)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},i=e.split(".");return t.original=e,t.value=i[0],t.namespace="base",i.length>1&&i[1]!==""&&(t.namespace=i[1]),t}}class Bv extends jh{constructor(){super(),this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.trigger("resize")})}}class Xh extends fr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new jv(t)}),this.register(function(t){return new Kv(t)}),this.register(function(t){return new Qv(t)}),this.register(function(t){return new qv(t)}),this.register(function(t){return new Yv(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new Wv(t)}),this.register(function(t){return new Zv(t)}),this.register(function(t){return new Xv(t)}),this.register(function(t){return new Gv(t)}),this.register(function(t){return new e0(t)}),this.register(function(t){return new t0(t)})}load(e,t,i,r){const n=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=_r.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),n.manager.itemError(e),n.manager.itemEnd(e)},l=new Eo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{n.parse(c,a,function(h){t(h),n.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let n;const a={},o={};if(typeof e=="string")n=JSON.parse(e);else if(e instanceof ArrayBuffer)if(_r.decodeText(new Uint8Array(e,0,4))===qh){try{a[Ve.KHR_BINARY_GLTF]=new i0(e)}catch(c){r&&r(c);return}n=JSON.parse(a[Ve.KHR_BINARY_GLTF].content)}else n=JSON.parse(_r.decodeText(new Uint8Array(e)));else n=e;if(n.asset===void 0||n.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new f0(n,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);o[h.name]=h,a[h.name]=!0}if(n.extensionsUsed)for(let c=0;c<n.extensionsUsed.length;++c){const h=n.extensionsUsed[c],u=n.extensionsRequired||[];switch(h){case Ve.KHR_MATERIALS_UNLIT:a[h]=new Vv;break;case Ve.KHR_DRACO_MESH_COMPRESSION:a[h]=new r0(n,this.dracoLoader);break;case Ve.KHR_TEXTURE_TRANSFORM:a[h]=new n0;break;case Ve.KHR_MESH_QUANTIZATION:a[h]=new s0;break;default:u.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,n){i.parse(e,t,r,n)})}}function Hv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const Ve={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Gv{constructor(e){this.parser=e,this.name=Ve.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const n=t[i];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const n=t.json,a=((n.extensions&&n.extensions[this.name]||{}).lights||[])[e];let o;const l=new Le(16777215);a.color!==void 0&&l.fromArray(a.color);const c=a.range!==void 0?a.range:0;switch(a.type){case"directional":o=new dv(l),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new hv(l),o.distance=c;break;case"spot":o=new lv(l),o.distance=c,a.spot=a.spot||{},a.spot.innerConeAngle=a.spot.innerConeAngle!==void 0?a.spot.innerConeAngle:0,a.spot.outerConeAngle=a.spot.outerConeAngle!==void 0?a.spot.outerConeAngle:Math.PI/4,o.angle=a.spot.outerConeAngle,o.penumbra=1-a.spot.innerConeAngle/a.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+a.type)}return o.position.set(0,0,0),o.decay=2,Ji(o,a),a.intensity!==void 0&&(o.intensity=a.intensity),o.name=t.createUniqueName(a.name||"light_"+e),r=Promise.resolve(o),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],n=(r.extensions&&r.extensions[this.name]||{}).light;return n===void 0?null:this._loadLight(n).then(function(a){return i._getNodeRef(t.cache,n,a)})}}class Vv{constructor(){this.name=Ve.KHR_MATERIALS_UNLIT}getMaterialType(){return Wi}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const n=t.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){const a=n.baseColorFactor;e.color.fromArray(a),e.opacity=a[3]}n.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",n.baseColorTexture,je))}return Promise.all(r)}}class Wv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class jv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(n.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(n)}}class Xv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&n.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(n)}}class qv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.fromArray(a.sheenColorFactor),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&n.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,je)),a.sheenRoughnessTexture!==void 0&&n.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(n)}}class Yv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&n.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(n)}}class Jv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&n.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Le(o[0],o[1],o[2]),Promise.all(n)}}class $v{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class Zv{constructor(e){this.parser=e,this.name=Ve.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return!t.extensions||!t.extensions[this.name]?null:pr}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const n=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&n.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Le(o[0],o[1],o[2]),a.specularColorTexture!==void 0&&n.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,je)),Promise.all(n)}}class Kv{constructor(e){this.parser=e,this.name=Ve.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const n=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,n.source,a)}}class Qv{constructor(e){this.parser=e,this.name=Ve.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,n=r.textures[e];if(!n.extensions||!n.extensions[t])return null;const a=n.extensions[t],o=r.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class e0{constructor(e){this.name=Ve.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],n=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,h=r.count,u=r.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,r.mode,r.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,r.mode,r.filter),f})})}else return null}}class t0{constructor(e){this.name=Ve.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const l of r.primitives)if(l.mode!==ri.TRIANGLES&&l.mode!==ri.TRIANGLE_STRIP&&l.mode!==ri.TRIANGLE_FAN&&l.mode!==void 0)return null;const n=i.extensions[this.name].attributes,a=[],o={};for(const l in n)a.push(this.parser.getDependency("accessor",n[l]).then(c=>(o[l]=c,o[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const f of h){const w=new Ne,_=new P,m=new pi,g=new P(1,1,1),y=new fw(f.geometry,f.material,u);for(let v=0;v<u;v++)o.TRANSLATION&&_.fromBufferAttribute(o.TRANSLATION,v),o.ROTATION&&m.fromBufferAttribute(o.ROTATION,v),o.SCALE&&g.fromBufferAttribute(o.SCALE,v),y.setMatrixAt(v,w.compose(_,m,g));for(const v in o)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&f.geometry.setAttribute(v,o[v]);tt.prototype.copy.call(y,f),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),d.push(y)}return c.isGroup?(c.clear(),c.add(...d),c):d[0]}))}}const qh="glTF",Hn=12,Yh={JSON:1313821514,BIN:5130562};class i0{constructor(e){this.name=Ve.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Hn);if(this.header={magic:_r.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==qh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Hn,r=new DataView(e,Hn);let n=0;for(;n<i;){const a=r.getUint32(n,!0);n+=4;const o=r.getUint32(n,!0);if(n+=4,o===Yh.JSON){const l=new Uint8Array(e,Hn+n,a);this.content=_r.decodeText(l)}else if(o===Yh.BIN){const l=Hn+n;this.body=e.slice(l,l+a)}n+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class r0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ve.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,n=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=zo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=zo[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],f=on[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",n).then(function(h){return new Promise(function(u){r.decodeDracoFile(h,function(d){for(const f in d.attributes){const w=d.attributes[f],_=l[f];_!==void 0&&(w.normalized=_)}u(d)},o,c)})})}}class n0{constructor(){this.name=Ve.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class s0{constructor(){this.name=Ve.KHR_MESH_QUANTIZATION}}class Jh extends zn{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=e*r*3+r;for(let a=0;a!==r;a++)t[a]=i[n+a];return t}interpolate_(e,t,i,r){const n=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=r-t,u=(i-t)/h,d=u*u,f=d*u,w=e*c,_=w-c,m=-2*f+3*d,g=f-d,y=1-m,v=g-d+u;for(let x=0;x!==o;x++){const S=a[_+x+o],L=a[_+x+l]*h,O=a[w+x+o],b=a[w+x]*h;n[x]=y*S+v*L+m*O+g*b}return n}}const a0=new pi;class o0 extends Jh{interpolate_(e,t,i,r){const n=super.interpolate_(e,t,i,r);return a0.fromArray(n).normalize().toArray(n),n}}const ri={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},on={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},$h={9728:vt,9729:Gt,9984:va,9985:Nl,9986:ns,9987:Ki},Zh={33071:Zt,33648:rs,10497:Dr},Oo={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},zo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},l0={CUBICSPLINE:void 0,LINEAR:zr,STEP:fn},ko={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function c0(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Us({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ki})),s.DefaultMaterial}function Gn(s,e,t){for(const i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Ji(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function h0(s,e,t){let i=!1,r=!1,n=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(r=!0),u.COLOR_0!==void 0&&(n=!0),i&&r&&n)break}if(!i&&!r&&!n)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(r){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(n){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(s.morphAttributes.position=h),r&&(s.morphAttributes.normal=u),n&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function u0(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function d0(s){const e=s.extensions&&s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Kh(e.attributes):t=s.indices+":"+Kh(s.attributes)+":"+s.mode,t}function Kh(s){let e="";const t=Object.keys(s).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Fo(s){switch(s){case Int8Array:return .007874015748031496;case Uint8Array:return .00392156862745098;case Int16Array:return 3051850947599719e-20;case Uint16Array:return 15259021896696422e-21;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function p0(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const m0=new Ne;class f0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Hv,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,n=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,n=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&n<98?this.textureLoader=new kh(this.options.manager):this.textureLoader=new mv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,n=this.extensions;this.cache.removeAll(),this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:i,userData:{}};Gn(n,o,r),Ji(o,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,n=t.length;r<n;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,n=e.length;r<n;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),n=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())n(h,o.children[c])};return n(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const n=e(t[r]);n&&i.push(n)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(n){return n.loadNode&&n.loadNode(t)});break;case"mesh":r=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(n,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(n,a){i.load(_r.resolveURL(t.uri,r.path),n,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,n=t.byteOffset||0;return i.slice(n,n+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=Oo[r.type],o=on[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new Ct(c,a,l))}const n=[];return r.bufferView!==void 0?n.push(this.getDependency("bufferView",r.bufferView)):n.push(null),r.sparse!==void 0&&(n.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(n).then(function(a){const o=a[0],l=Oo[r.type],c=on[r.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=r.byteOffset||0,f=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,w=r.normalized===!0;let _,m;if(f&&f!==u){const g=Math.floor(d/f),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+g+":"+r.count;let v=t.cache.get(y);v||(_=new c(o,g*f,r.count*f/h),v=new cw(_,f/h),t.cache.add(y,v)),m=new oo(v,l,d%f/h,w)}else o===null?_=new c(r.count*l):_=new c(o,d,r.count*l),m=new Ct(_,l,w);if(r.sparse!==void 0){const g=Oo.SCALAR,y=on[r.sparse.indices.componentType],v=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,S=new y(a[1],v,r.sparse.count*g),L=new c(a[2],x,r.sparse.count*l);o!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized));for(let O=0,b=S.length;O<b;O++){const R=S[O];if(m.setX(R,L[O*l]),l>=2&&m.setY(R,L[O*l+1]),l>=3&&m.setZ(R,L[O*l+2]),l>=4&&m.setW(R,L[O*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,n=t.images[r];let a=this.textureLoader;if(n.uri){const o=i.manager.getHandler(n.uri);o!==null&&(a=o)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const r=this,n=this.json,a=n.textures[e],o=n.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"";const u=(n.samplers||{})[a.sampler]||{};return h.magFilter=$h[u.magFilter]||Gt,h.minFilter=$h[u.minFilter]||Ki,h.wrapS=Zh[u.wrapS]||Dr,h.wrapT=Zh[u.wrapT]||Dr,r.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,n=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let w=d;t.isImageBitmapLoader===!0&&(w=function(_){const m=new At(_);m.needsUpdate=!0,d(m)}),t.load(_r.resolveURL(u,n.path),w,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||p0(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,r){const n=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),n.extensions[Ve.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[Ve.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=n.associations.get(a);a=n.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),n.associations.set(a,l)}}return r!==void 0&&(a.encoding=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,n=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new uo,mi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new ph,mi.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(o,l)),i=l}if(r||n||a){let o="ClonedMaterial:"+i.uuid+":";r&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),n&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return Us}loadMaterial(e){const t=this,i=this.json,r=this.extensions,n=i.materials[e];let a;const o={},l=n.extensions||{},c=[];if(l[Ve.KHR_MATERIALS_UNLIT]){const u=r[Ve.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,n,t))}else{const u=n.pbrMetallicRoughness||{};if(o.color=new Le(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.fromArray(d),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,je)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}n.doubleSided===!0&&(o.side=es);const h=n.alphaMode||ko.OPAQUE;if(h===ko.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ko.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&a!==Wi&&(c.push(t.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new he(1,1),n.normalTexture.scale!==void 0)){const u=n.normalTexture.scale;o.normalScale.set(u,u)}return n.occlusionTexture!==void 0&&a!==Wi&&(c.push(t.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&a!==Wi&&(o.emissive=new Le().fromArray(n.emissiveFactor)),n.emissiveTexture!==void 0&&a!==Wi&&c.push(t.assignTexture(o,"emissiveMap",n.emissiveTexture,je)),Promise.all(c).then(function(){const u=new a(o);return n.name&&(u.name=n.name),Ji(u,n),t.associations.set(u,{materials:e}),n.extensions&&Gn(r,u,n),u})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");let i=t;for(let r=1;this.nodeNamesUsed[i];++r)i=t+"_"+r;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function n(o){return i[Ve.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qh(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=d0(c),u=r[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]?d=n(c):d=Qh(new ii,c,t),r[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,r=this.extensions,n=i.meshes[e],a=n.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?c0(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,w=h.length;f<w;f++){const _=h[f],m=a[f];let g;const y=c[f];if(m.mode===ri.TRIANGLES||m.mode===ri.TRIANGLE_STRIP||m.mode===ri.TRIANGLE_FAN||m.mode===void 0)g=n.isSkinnedMesh===!0?new uw(_,y):new It(_,y),g.isSkinnedMesh===!0&&!g.geometry.attributes.skinWeight.normalized&&g.normalizeSkinWeights(),m.mode===ri.TRIANGLE_STRIP?g.geometry=eu(g.geometry,Vd):m.mode===ri.TRIANGLE_FAN&&(g.geometry=eu(g.geometry,ac));else if(m.mode===ri.LINES)g=new _w(_,y);else if(m.mode===ri.LINE_STRIP)g=new ho(_,y);else if(m.mode===ri.LINE_LOOP)g=new gw(_,y);else if(m.mode===ri.POINTS)g=new bh(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&u0(g,n),g.name=t.createUniqueName(n.name||"mesh_"+e),Ji(g,n),m.extensions&&Gn(r,g,m),t.assignFinalMaterial(g),u.push(g)}for(let f=0,w=u.length;f<w;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Xi;t.associations.set(d,{meshes:e});for(let f=0,w=u.length;f<w;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new kt(op.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new eo(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Ji(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,n=t.joints.length;r<n;r++)i.push(this.getDependency("node",t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const n=r.pop(),a=r,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Ne;n!==null&&d.fromArray(n.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lo(o,l)})}loadAnimation(e){const t=this.json.animations[e],i=[],r=[],n=[],a=[],o=[];for(let l=0,c=t.channels.length;l<c;l++){const h=t.channels[l],u=t.samplers[h.sampler],d=h.target,f=d.node,w=t.parameters!==void 0?t.parameters[u.input]:u.input,_=t.parameters!==void 0?t.parameters[u.output]:u.output;i.push(this.getDependency("node",f)),r.push(this.getDependency("accessor",w)),n.push(this.getDependency("accessor",_)),a.push(u),o.push(d)}return Promise.all([Promise.all(i),Promise.all(r),Promise.all(n),Promise.all(a),Promise.all(o)]).then(function(l){const c=l[0],h=l[1],u=l[2],d=l[3],f=l[4],w=[];for(let m=0,g=c.length;m<g;m++){const y=c[m],v=h[m],x=u[m],S=d[m],L=f[m];if(y===void 0)continue;y.updateMatrix();let O;switch(Yi[L.path]){case Yi.weights:O=kn;break;case Yi.rotation:O=mr;break;case Yi.position:case Yi.scale:default:O=Fn;break}const b=y.name?y.name:y.uuid,R=S.interpolation!==void 0?l0[S.interpolation]:zr,k=[];Yi[L.path]===Yi.weights?y.traverse(function(ee){ee.morphTargetInfluences&&k.push(ee.name?ee.name:ee.uuid)}):k.push(b);let X=x.array;if(x.normalized){const ee=Fo(X.constructor),H=new Float32Array(X.length);for(let z=0,q=X.length;z<q;z++)H[z]=X[z]*ee;X=H}for(let ee=0,H=k.length;ee<H;ee++){const z=new O(k[ee]+"."+Yi[L.path],v.array,X,R);S.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(q){const te=this instanceof mr?o0:Jh;return new te(this.times,this.values,this.getValueSize()/3,q)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),w.push(z)}}const _=t.name?t.name:"animation_"+e;return new ev(_,void 0,w)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(n){const a=i._getNodeRef(i.meshCache,r.mesh,n);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,i=this.extensions,r=this,n=t.nodes[e],a=n.name?r.createUniqueName(n.name):"";return function(){const o=[],l=r._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&o.push(l),n.camera!==void 0&&o.push(r.getDependency("camera",n.camera).then(function(d){return r._getNodeRef(r.cameraCache,n.camera,d)})),r._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){o.push(d)});const c=[],h=n.children||[];for(let d=0,f=h.length;d<f;d++)c.push(r.getDependency("node",h[d]));const u=n.skin===void 0?Promise.resolve(null):r.getDependency("skin",n.skin);return Promise.all([Promise.all(o),Promise.all(c),u])}().then(function(o){const l=o[0],c=o[1],h=o[2];let u;if(n.isBone===!0?u=new lh:l.length>1?u=new Xi:l.length===1?u=l[0]:u=new tt,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(n.name&&(u.userData.name=n.name,u.name=a),Ji(u,n),n.extensions&&Gn(i,u,n),n.matrix!==void 0){const d=new Ne;d.fromArray(n.matrix),u.applyMatrix4(d)}else n.translation!==void 0&&u.position.fromArray(n.translation),n.rotation!==void 0&&u.quaternion.fromArray(n.rotation),n.scale!==void 0&&u.scale.fromArray(n.scale);r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,m0)});for(let d=0,f=c.length;d<f;d++)u.add(c[d]);return u})}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,n=new Xi;i.name&&(n.name=r.createUniqueName(i.name)),Ji(n,i),i.extensions&&Gn(t,n,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)n.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of r.associations)(d instanceof mi||d instanceof At)&&u.set(d,f);return h.traverse(d=>{const f=r.associations.get(d);f!=null&&u.set(d,f)}),u};return r.associations=c(n),n})}}function _0(s,e,t){const i=e.attributes,r=new Fr;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=Fo(on[o.componentType]);r.min.multiplyScalar(h),r.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const n=e.targets;if(n!==void 0){const o=new P,l=new P;for(let c=0,h=n.length;c<h;c++){const u=n[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,w=d.max;if(f!==void 0&&w!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(w[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(w[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(w[2]))),d.normalized){const _=Fo(on[d.componentType]);l.multiplyScalar(_)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}s.boundingBox=r;const a=new Gr;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,s.boundingSphere=a}function Qh(s,e,t){const i=e.attributes,r=[];function n(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in i){const o=zo[a]||a.toLowerCase();o in s.attributes||r.push(n(i[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});r.push(a)}return Ji(s,e),_0(s,e,t),Promise.all(r).then(function(){return e.targets!==void 0?h0(s,e.targets,t):s})}function eu(s,e){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const i=t.count-2,r=[];if(e===ac)for(let a=1;a<=i;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const n=s.clone();return n.setIndex(r),n}class g0 extends fr{constructor(e){super(e)}load(e,t,i,r){const n=this,a=new Eo(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){const l=n.parse(JSON.parse(o));t&&t(l)},i,r)}parse(e){return new w0(e)}}class w0{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const i=[],r=v0(e,t,this.data);for(let n=0,a=r.length;n<a;n++)i.push(...r[n].toShapes());return i}}function v0(s,e,t){const i=Array.from(s),r=e/t.resolution,n=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,a=[];let o=0,l=0;for(let c=0;c<i.length;c++){const h=i[c];if(h===`
`)o=0,l-=n;else{const u=b0(h,r,o,l,t);o+=u.offsetX,a.push(u.path)}}return a}function b0(s,e,t,i,r){const n=r.glyphs[s]||r.glyphs["?"];if(!n){console.error('THREE.Font: character "'+s+'" does not exists in font family '+r.familyName+".");return}const a=new Tv;let o,l,c,h,u,d,f,w;if(n.o){const _=n._cachedOutline||(n._cachedOutline=n.o.split(" "));for(let m=0,g=_.length;m<g;)switch(_[m++]){case"m":o=_[m++]*e+t,l=_[m++]*e+i,a.moveTo(o,l);break;case"l":o=_[m++]*e+t,l=_[m++]*e+i,a.lineTo(o,l);break;case"q":c=_[m++]*e+t,h=_[m++]*e+i,u=_[m++]*e+t,d=_[m++]*e+i,a.quadraticCurveTo(u,d,c,h);break;case"b":c=_[m++]*e+t,h=_[m++]*e+i,u=_[m++]*e+t,d=_[m++]*e+i,f=_[m++]*e+t,w=_[m++]*e+i,a.bezierCurveTo(u,d,f,w,c,h);break}}return{offsetX:n.ha*e,path:a}}class y0 extends jh{constructor(e){super(),this.sources=e,this.items={},this.toLoad=this.sources.length,this.loaded=0,this.setLoaders(),this.startLoading()}setLoaders(){this.loaders={},this.loaders.gltfLoader=new Xh,this.loaders.textureLoader=new kh,this.loaders.cubeTextureLoader=new av,this.loaders.fontLoader=new g0}startLoading(){for(const e of this.sources)e.type==="gltfModel"?this.loaders.gltfLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="texture"?this.loaders.textureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="cubeTexture"?this.loaders.cubeTextureLoader.load(e.path,t=>{this.sourceLoaded(e,t)}):e.type==="font"&&this.loaders.fontLoader.load(e.path,t=>{this.sourceLoaded(e,t)})}sourceLoaded(e,t){if(this.items[e.name]=t,this.loaded++,this.loaded===this.toLoad){let i=document.getElementById("loading");i.style.display="none",this.trigger("ready")}}}class x0 extends he{constructor(){super(),this.experience=new bi,this.sizes=this.experience.sizes,window.addEventListener("mousemove",e=>{this.x=e.clientX/this.sizes.width*2-1,this.y=-(e.clientY/this.sizes.height)*2+1})}}const tu={type:"change"},Uo={type:"start"},iu={type:"end"};class S0 extends rr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",Vt),this._domElementKeyEvents=A},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(tu),i.update(),n=r.NONE},this.update=function(){const A=new P,F=new pi().setFromUnitVectors(e.up,new P(0,1,0)),ue=F.clone().invert(),fe=new P,pe=new pi,ve=2*Math.PI;return function(){const ye=i.object.position;A.copy(ye).sub(i.target),A.applyQuaternion(F),o.setFromVector3(A),i.autoRotate&&n===r.NONE&&R(O()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Re=i.minAzimuthAngle,Be=i.maxAzimuthAngle;return isFinite(Re)&&isFinite(Be)&&(Re<-Math.PI?Re+=ve:Re>Math.PI&&(Re-=ve),Be<-Math.PI?Be+=ve:Be>Math.PI&&(Be-=ve),Re<=Be?o.theta=Math.max(Re,Math.min(Be,o.theta)):o.theta=o.theta>(Re+Be)/2?Math.max(Re,o.theta):Math.min(Be,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),A.setFromSpherical(o),A.applyQuaternion(ue),ye.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||fe.distanceToSquared(i.object.position)>a||8*(1-pe.dot(i.object.quaternion))>a?(i.dispatchEvent(tu),fe.copy(i.object.position),pe.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",G),i.domElement.removeEventListener("pointerdown",Mt),i.domElement.removeEventListener("pointercancel",Ut),i.domElement.removeEventListener("wheel",ni),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",wt),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",Vt)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let n=r.NONE;const a=1e-6,o=new Vh,l=new Vh;let c=1;const h=new P;let u=!1;const d=new he,f=new he,w=new he,_=new he,m=new he,g=new he,y=new he,v=new he,x=new he,S=[],L={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function R(A){l.theta-=A}function k(A){l.phi-=A}const X=function(){const A=new P;return function(F,ue){A.setFromMatrixColumn(ue,0),A.multiplyScalar(-F),h.add(A)}}(),ee=function(){const A=new P;return function(F,ue){i.screenSpacePanning===!0?A.setFromMatrixColumn(ue,1):(A.setFromMatrixColumn(ue,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(F),h.add(A)}}(),H=function(){const A=new P;return function(F,ue){const fe=i.domElement;if(i.object.isPerspectiveCamera){const pe=i.object.position;A.copy(pe).sub(i.target);let ve=A.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),X(2*F*ve/fe.clientHeight,i.object.matrix),ee(2*ue*ve/fe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(X(F*(i.object.right-i.object.left)/i.object.zoom/fe.clientWidth,i.object.matrix),ee(ue*(i.object.top-i.object.bottom)/i.object.zoom/fe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function q(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(A){d.set(A.clientX,A.clientY)}function ie(A){y.set(A.clientX,A.clientY)}function Z(A){_.set(A.clientX,A.clientY)}function ae(A){f.set(A.clientX,A.clientY),w.subVectors(f,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;R(2*Math.PI*w.x/F.clientHeight),k(2*Math.PI*w.y/F.clientHeight),d.copy(f),i.update()}function re(A){v.set(A.clientX,A.clientY),x.subVectors(v,y),x.y>0?z(b()):x.y<0&&q(b()),y.copy(v),i.update()}function V(A){m.set(A.clientX,A.clientY),g.subVectors(m,_).multiplyScalar(i.panSpeed),H(g.x,g.y),_.copy(m),i.update()}function Y(A){A.deltaY<0?q(b()):A.deltaY>0&&z(b()),i.update()}function K(A){let F=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?k(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?k(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),i.update())}function se(){if(S.length===1)d.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),F=.5*(S[0].pageY+S[1].pageY);d.set(A,F)}}function _e(){if(S.length===1)_.set(S[0].pageX,S[0].pageY);else{const A=.5*(S[0].pageX+S[1].pageX),F=.5*(S[0].pageY+S[1].pageY);_.set(A,F)}}function $(){const A=S[0].pageX-S[1].pageX,F=S[0].pageY-S[1].pageY,ue=Math.sqrt(A*A+F*F);y.set(0,ue)}function Fe(){i.enableZoom&&$(),i.enablePan&&_e()}function we(){i.enableZoom&&$(),i.enableRotate&&se()}function Me(A){if(S.length==1)f.set(A.pageX,A.pageY);else{const ue=Te(A),fe=.5*(A.pageX+ue.x),pe=.5*(A.pageY+ue.y);f.set(fe,pe)}w.subVectors(f,d).multiplyScalar(i.rotateSpeed);const F=i.domElement;R(2*Math.PI*w.x/F.clientHeight),k(2*Math.PI*w.y/F.clientHeight),d.copy(f)}function me(A){if(S.length===1)m.set(A.pageX,A.pageY);else{const F=Te(A),ue=.5*(A.pageX+F.x),fe=.5*(A.pageY+F.y);m.set(ue,fe)}g.subVectors(m,_).multiplyScalar(i.panSpeed),H(g.x,g.y),_.copy(m)}function Je(A){const F=Te(A),ue=A.pageX-F.x,fe=A.pageY-F.y,pe=Math.sqrt(ue*ue+fe*fe);v.set(0,pe),x.set(0,Math.pow(v.y/y.y,i.zoomSpeed)),z(x.y),y.copy(v)}function Ie(A){i.enableZoom&&Je(A),i.enablePan&&me(A)}function Ee(A){i.enableZoom&&Je(A),i.enableRotate&&Me(A)}function Mt(A){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",gt),i.domElement.addEventListener("pointerup",wt)),ne(A),A.pointerType==="touch"?T(A):lt(A))}function gt(A){i.enabled!==!1&&(A.pointerType==="touch"?M(A):Ye(A))}function wt(A){oe(A),S.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",gt),i.domElement.removeEventListener("pointerup",wt)),i.dispatchEvent(iu),n=r.NONE}function Ut(A){oe(A)}function lt(A){let F;switch(A.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ar.DOLLY:if(i.enableZoom===!1)return;ie(A),n=r.DOLLY;break;case Ar.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;Z(A),n=r.PAN}else{if(i.enableRotate===!1)return;te(A),n=r.ROTATE}break;case Ar.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;te(A),n=r.ROTATE}else{if(i.enablePan===!1)return;Z(A),n=r.PAN}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Uo)}function Ye(A){switch(n){case r.ROTATE:if(i.enableRotate===!1)return;ae(A);break;case r.DOLLY:if(i.enableZoom===!1)return;re(A);break;case r.PAN:if(i.enablePan===!1)return;V(A);break}}function ni(A){i.enabled===!1||i.enableZoom===!1||n!==r.NONE||(A.preventDefault(),i.dispatchEvent(Uo),Y(A),i.dispatchEvent(iu))}function Vt(A){i.enabled===!1||i.enablePan===!1||K(A)}function T(A){switch(ce(A),S.length){case 1:switch(i.touches.ONE){case Cr.ROTATE:if(i.enableRotate===!1)return;se(),n=r.TOUCH_ROTATE;break;case Cr.PAN:if(i.enablePan===!1)return;_e(),n=r.TOUCH_PAN;break;default:n=r.NONE}break;case 2:switch(i.touches.TWO){case Cr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),n=r.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;we(),n=r.TOUCH_DOLLY_ROTATE;break;default:n=r.NONE}break;default:n=r.NONE}n!==r.NONE&&i.dispatchEvent(Uo)}function M(A){switch(ce(A),n){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;me(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ee(A),i.update();break;default:n=r.NONE}}function G(A){i.enabled!==!1&&A.preventDefault()}function ne(A){S.push(A)}function oe(A){delete L[A.pointerId];for(let F=0;F<S.length;F++)if(S[F].pointerId==A.pointerId){S.splice(F,1);return}}function ce(A){let F=L[A.pointerId];F===void 0&&(F=new he,L[A.pointerId]=F),F.set(A.pageX,A.pageY)}function Te(A){const F=A.pointerId===S[0].pointerId?S[1]:S[0];return L[F.pointerId]}i.domElement.addEventListener("contextmenu",G),i.domElement.addEventListener("pointerdown",Mt),i.domElement.addEventListener("pointercancel",Ut),i.domElement.addEventListener("wheel",ni,{passive:!1}),this.update()}}class M0{constructor(){this.experience=new bi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.canvas=this.experience.canvas,this.setInstance(),this.setOrbitControls()}setInstance(){this.instance=new kt(35,this.sizes.width/this.sizes.height,.1,100),this.instance.position.set(0,1.8,0),this.instance.lookAt(new P(0,1.8,1)),this.scene.add(this.instance)}setOrbitControls(){this.controls=new S0(this.instance,this.canvas),this.controls.enableDamping=!0,this.instance.lookAt(new P(0,1.8,-1)),this.controls.target=new P(0,1.8,0)}resize(){this.instance.aspect=this.sizes.width/this.sizes.height,this.instance.updateProjectionMatrix()}update(){this.controls.update()}}class E0{constructor(){this.experience=new bi,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.camera=this.experience.camera,this.setInstance()}setInstance(){this.instance=new rh({canvas:this.canvas,antialias:!0}),this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}resize(){this.instance.setSize(this.sizes.width,this.sizes.height),this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio,2))}update(){this.instance.render(this.scene,this.camera.instance)}}class T0{constructor(){this.experience=new bi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.debug=this.experience.debug,this.scene.background=new Le("black"),this.setAmbientLight()}setAmbientLight(){this.ambientLight=new pv("#ffffff",2),this.scene.add(this.ambientLight)}}var A0=`varying vec3 vPosition;

void main() {
    
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;
    vPosition = position;
}`,C0=`varying vec3 vPosition;

void main() {
    vec3 color = vec3(1.0);
    
    float thickness = 0.01;
    float opacity = smoothstep(1.0-thickness ,1.0,(vPosition.x - thickness/2.0) - floor(vPosition.x-thickness/2.0));
    opacity += smoothstep(1.0-thickness ,1.0,(vPosition.y - thickness/2.0) - floor(vPosition.y-thickness/2.0));opacity = opacity/2.0;
    opacity = step(0.01,opacity);
    opacity = opacity/4.0;
    gl_FragColor = vec4(color,opacity);
}`;class R0{constructor(){this.experience=new bi,this.scene=this.experience.scene,this.debug=this.experience.debug,this.geometry=new Es(30,30),this.horizontalGridMaterial=new ji({vertexShader:A0,fragmentShader:C0,transparent:!0}),this.floorPlane=new It(this.geometry,this.horizontalGridMaterial),this.floorPlane.x-=15,this.floorPlane.z-=15,this.floorPlane.rotation.x-=Math.PI/2,this.scene.add(this.floorPlane)}}class L0{constructor(){this.experience=new bi,this.scene=this.experience.scene,this.resources=this.experience.resources;const e=new ii,t=700,i=new Float32Array(t*3),r=new Float32Array(t*3);for(let a=0;a<t*3;a++)r[a]=1;console.log();for(let a=0;a<t*3;a+=3){let o=20,l=25,c=Math.random()*(l-o)+o,h=Math.acos(2*Math.random()-1),u=Math.random()*(2*Math.PI);i[a]=Math.sin(h)*Math.cos(u)*c,i[a+1]=Math.sin(h)*Math.sin(u)*c,i[a+2]=Math.cos(h)*c}e.setAttribute("position",new Ct(i,3)),e.setAttribute("color",new Ct(r,3));const n=new uo({size:.22,sizeAttenuation:!0});n.color=new Le("white"),n.vertexColors=!0,n.transparent=!0,n.alphaMap=this.resources.items.star,n.alphaTest=.001,n.depthWrite=!1,n.blending=fa,this.particles=new bh(e,n),this.scene.add(this.particles)}update(){}}var xt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function P0(s){if(s.__esModule)return s;var e=s.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(i){var r=Object.getOwnPropertyDescriptor(s,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return s[i]}})}),t}var ru={},Gs={};const I0={},D0=Object.freeze(Object.defineProperty({__proto__:null,default:I0},Symbol.toStringTag,{value:"Module"})),Vs=P0(D0);var gr={};Object.defineProperty(gr,"__esModule",{value:!0}),gr.code=gr.id=void 0,gr.id="/__vite-plugin-wasm-helper";const N0=async(s={},e)=>{let t;if(e.startsWith("data:")){const i=e.replace(/^data:.*?base64,/,"");let r;if(typeof Buffer=="function"&&typeof Buffer.from=="function")r=Buffer.from(i,"base64");else if(typeof atob=="function"){const n=atob(i);r=new Uint8Array(n.length);for(let a=0;a<n.length;a++)r[a]=n.charCodeAt(a)}else throw new Error("Cannot decode base64-encoded data URL");t=await WebAssembly.instantiate(r,s)}else{const i=await fetch(e),r=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&r.startsWith("application/wasm"))t=await WebAssembly.instantiateStreaming(i,s);else{const n=await i.arrayBuffer();t=await WebAssembly.instantiate(n,s)}}return t.instance.exports};gr.code=N0.toString();var wr={},O0=xt&&xt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(wr,"__esModule",{value:!0}),wr.generateGlueCode=wr.parseWasm=void 0;const z0=O0(Vs);async function nu(s){try{const e=await z0.default.promises.readFile(s),t=await WebAssembly.compile(e),i=Object.entries(WebAssembly.Module.imports(t).reduce((n,a)=>({...n,[a.module]:[...n[a.module]||[],a.name]}),{})).map(([n,a])=>({from:n,names:a})),r=WebAssembly.Module.exports(t).map(n=>n.name);return{imports:i,exports:r}}catch(e){throw new Error(`Failed to parse WASM file: ${e.message}`)}}wr.parseWasm=nu;async function k0(s,e){const{imports:t,exports:i}=await nu(s);return`
${t.map(({from:r,names:n},a)=>`import { ${n.map((o,l)=>`${o} as __vite__wasmImport_${a}_${l}`).join(", ")} } from ${JSON.stringify(r)};`).join(`
`)}
const __vite__wasmModule = await ${e.initWasm}({ ${t.map(({from:r,names:n},a)=>`${JSON.stringify(r)}: { ${n.map((o,l)=>`${o}: __vite__wasmImport_${a}_${l}`).join(", ")} }`).join(", ")} }, ${e.wasmUrl});
${i.map(r=>`export ${r==="default"?"default":`const ${r} =`} __vite__wasmModule.${r};`).join(`
`)}`}wr.generateGlueCode=k0;var Vn={},F0=xt&&xt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Vn,"__esModule",{value:!0}),Vn.createBase64UriForWasm=void 0;const U0=F0(Vs);async function B0(s){return"data:application/wasm;base64,"+await U0.default.promises.readFile(s,"base64")}Vn.createBase64UriForWasm=B0;var H0=xt&&xt.__createBinding||(Object.create?function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}:function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]}),G0=xt&&xt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),V0=xt&&xt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&H0(e,s,t);return G0(e,s),e},W0=xt&&xt.__importDefault||function(s){return s&&s.__esModule?s:{default:s}};Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.esbuildPlugin=void 0;const j0=W0(Vs),X0=Vs,q0=V0(gr),Y0=wr,J0=Vn;function $0(){return{name:"vite-plugin-wasm",setup(s){const e="vite-plugin-wasm-namespace";s.onResolve({filter:/\.wasm$/},t=>({path:(0,X0.createRequire)(t.importer).resolve(t.path),namespace:e})),s.onLoad({filter:/.*/,namespace:e},async t=>({contents:`
const wasmUrl = "${await(0,J0.createBase64UriForWasm)(t.path)}";
const initWasm = ${q0.code};
${await(0,Y0.generateGlueCode)(t.path,{initWasm:"initWasm",wasmUrl:"wasmUrl"})}
`,loader:"js",resolveDir:j0.default.dirname(t.path)}))}}}Gs.esbuildPlugin=$0;var Z0=xt&&xt.__createBinding||(Object.create?function(s,e,t,i){i===void 0&&(i=t);var r=Object.getOwnPropertyDescriptor(e,t);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[t]}}),Object.defineProperty(s,i,r)}:function(s,e,t,i){i===void 0&&(i=t),s[i]=e[t]}),K0=xt&&xt.__setModuleDefault||(Object.create?function(s,e){Object.defineProperty(s,"default",{enumerable:!0,value:e})}:function(s,e){s.default=e}),Q0=xt&&xt.__importStar||function(s){if(s&&s.__esModule)return s;var e={};if(s!=null)for(var t in s)t!=="default"&&Object.prototype.hasOwnProperty.call(s,t)&&Z0(e,s,t);return K0(e,s),e};Object.defineProperty(ru,"__esModule",{value:!0});const eb=Gs,tb=wr,Ws=Q0(gr),ib=Vn;function rb(){let s=!1;return{name:"vite-plugin-wasm",enforce:"pre",configResolved(e){var t;s=e.plugins.some(i=>i.name==="vitest"),(t=e.optimizeDeps)!=null&&t.esbuildOptions&&(e.optimizeDeps.esbuildOptions.plugins||(e.optimizeDeps.esbuildOptions.plugins=[]),e.optimizeDeps.esbuildOptions.plugins.push((0,eb.esbuildPlugin)()),e.optimizeDeps.esbuildOptions.target="esnext")},resolveId(e){if(e===Ws.id)return e},async load(e,t){if(e===Ws.id)return`export default ${Ws.code}`;if(!e.toLowerCase().endsWith(".wasm"))return;const i=e+"?url";return`
URL = globalThis.URL
${t!=null&&t.ssr||s?`const __vite__wasmUrl = ${JSON.stringify(await(0,ib.createBase64UriForWasm)(e))}`:`import __vite__wasmUrl from ${JSON.stringify(i)}`}
import __vite__initWasm from "${Ws.id}"
${await(0,tb.generateGlueCode)(e,{initWasm:"__vite__initWasm",wasmUrl:"__vite__wasmUrl"})}
`}}}var su=ru.default=rb;typeof su=="function"||su.default;let p;const Ue=new Array(128).fill(void 0);Ue.push(void 0,null,!0,!1);let Wn=Ue.length;function ln(s){Wn===Ue.length&&Ue.push(Ue.length+1);const e=Wn;return Wn=Ue[e],Ue[e]=s,e}function nb(s){return Ue[s]}function sb(s){s<132||(Ue[s]=Wn,Wn=s)}function js(s){const e=nb(s);return sb(s),e}function ge(s){return s==null}let Xs=null;function qs(){return(Xs===null||Xs.byteLength===0)&&(Xs=new Float64Array(p.memory.buffer)),Xs}let Ys=null;function Ae(){return(Ys===null||Ys.byteLength===0)&&(Ys=new Int32Array(p.memory.buffer)),Ys}const ab=typeof TextDecoder>"u"?(0,Ht.require)("util").TextDecoder:TextDecoder;let au=new ab("utf-8",{ignoreBOM:!0,fatal:!0});au.decode();let Js=null;function ob(){return(Js===null||Js.byteLength===0)&&(Js=new Uint8Array(p.memory.buffer)),Js}function lb(s,e){return s=s>>>0,au.decode(ob().subarray(s,s+e))}function cb(){let s,e;try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.version(r);var t=Ae()[r/4+0],i=Ae()[r/4+1];return s=t,e=i,lb(t,i)}finally{p.__wbindgen_add_to_stack_pointer(16),p.__wbindgen_free(s,e,1)}}function C(s,e){if(!(s instanceof e))throw new Error(`expected instance of ${e.name}`);return s.ptr}let $s=null;function et(){return($s===null||$s.byteLength===0)&&($s=new Float32Array(p.memory.buffer)),$s}let Ke=128;function it(s){if(Ke==1)throw new Error("out of js stack");return Ue[--Ke]=s,Ke}function ou(s,e){return s=s>>>0,et().subarray(s/4,s/4+e)}let Zs=null;function lu(){return(Zs===null||Zs.byteLength===0)&&(Zs=new Uint32Array(p.memory.buffer)),Zs}function hb(s,e){return s=s>>>0,lu().subarray(s/4,s/4+e)}let qt=0;function vr(s,e){const t=e(s.length*4,4)>>>0;return et().set(s,t/4),qt=s.length,t}function Ks(s,e){const t=e(s.length*4,4)>>>0;return lu().set(s,t/4),qt=s.length,t}const ci=Object.freeze({Revolute:0,0:"Revolute",Fixed:1,1:"Fixed",Prismatic:2,2:"Prismatic",Rope:3,3:"Rope",Spring:4,4:"Spring",Spherical:5,5:"Spherical",Generic:6,6:"Generic"}),Rt=Object.freeze({Ball:0,0:"Ball",Cuboid:1,1:"Cuboid",Capsule:2,2:"Capsule",Segment:3,3:"Segment",Polyline:4,4:"Polyline",Triangle:5,5:"Triangle",TriMesh:6,6:"TriMesh",HeightField:7,7:"HeightField",Compound:8,8:"Compound",ConvexPolyhedron:9,9:"ConvexPolyhedron",Cylinder:10,10:"Cylinder",Cone:11,11:"Cone",RoundCuboid:12,12:"RoundCuboid",RoundTriangle:13,13:"RoundTriangle",RoundCylinder:14,14:"RoundCylinder",RoundCone:15,15:"RoundCone",RoundConvexPolyhedron:16,16:"RoundConvexPolyhedron",HalfSpace:17,17:"HalfSpace"}),Qs=Object.freeze({X:0,0:"X",Y:1,1:"Y",Z:2,2:"Z",AngX:3,3:"AngX",AngY:4,4:"AngY",AngZ:5,5:"AngZ"});class br{static __wrap(e){e=e>>>0;const t=Object.create(br.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawbroadphase_free(e)}constructor(){const e=p.rawbroadphase_new();return this.__wbg_ptr=e>>>0,this}}class Bo{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawccdsolver_free(e)}constructor(){const e=p.rawccdsolver_new();return this.__wbg_ptr=e>>>0,this}}class cu{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawcharactercollision_free(e)}constructor(){const e=p.rawcharactercollision_new();return this.__wbg_ptr=e>>>0,this}handle(){return p.rawcharactercollision_handle(this.__wbg_ptr)}translationDeltaApplied(){const e=p.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return N.__wrap(e)}translationDeltaRemaining(){const e=p.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return N.__wrap(e)}toi(){return p.rawcharactercollision_toi(this.__wbg_ptr)}worldWitness1(){const e=p.rawcharactercollision_worldWitness1(this.__wbg_ptr);return N.__wrap(e)}worldWitness2(){const e=p.rawcharactercollision_worldWitness2(this.__wbg_ptr);return N.__wrap(e)}worldNormal1(){const e=p.rawcharactercollision_worldNormal1(this.__wbg_ptr);return N.__wrap(e)}worldNormal2(){const e=p.rawcharactercollision_worldNormal2(this.__wbg_ptr);return N.__wrap(e)}}class st{static __wrap(e){e=e>>>0;const t=Object.create(st.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawcolliderset_free(e)}coTranslation(e){const t=p.rawcolliderset_coTranslation(this.__wbg_ptr,e);return N.__wrap(t)}coRotation(e){const t=p.rawcolliderset_coRotation(this.__wbg_ptr,e);return ze.__wrap(t)}coSetTranslation(e,t,i,r){p.rawcolliderset_coSetTranslation(this.__wbg_ptr,e,t,i,r)}coSetTranslationWrtParent(e,t,i,r){p.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr,e,t,i,r)}coSetRotation(e,t,i,r,n){p.rawcolliderset_coSetRotation(this.__wbg_ptr,e,t,i,r,n)}coSetRotationWrtParent(e,t,i,r,n){p.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr,e,t,i,r,n)}coIsSensor(e){return p.rawcolliderset_coIsSensor(this.__wbg_ptr,e)!==0}coShapeType(e){return p.rawcolliderset_coShapeType(this.__wbg_ptr,e)}coHalfspaceNormal(e){const t=p.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}coHalfExtents(e){const t=p.rawcolliderset_coHalfExtents(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}coSetHalfExtents(e,t){C(t,N),p.rawcolliderset_coSetHalfExtents(this.__wbg_ptr,e,t.__wbg_ptr)}coRadius(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coRadius(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}coSetRadius(e,t){p.rawcolliderset_coSetRadius(this.__wbg_ptr,e,t)}coHalfHeight(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coHalfHeight(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}coSetHalfHeight(e,t){p.rawcolliderset_coSetHalfHeight(this.__wbg_ptr,e,t)}coRoundRadius(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coRoundRadius(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}coSetRoundRadius(e,t){p.rawcolliderset_coSetRoundRadius(this.__wbg_ptr,e,t)}coVertices(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coVertices(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=Ae()[r/4+1];let n;return t!==0&&(n=ou(t,i).slice(),p.__wbindgen_free(t,i*4,4)),n}finally{p.__wbindgen_add_to_stack_pointer(16)}}coIndices(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coIndices(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=Ae()[r/4+1];let n;return t!==0&&(n=hb(t,i).slice(),p.__wbindgen_free(t,i*4,4)),n}finally{p.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldHeights(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coHeightfieldHeights(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=Ae()[r/4+1];let n;return t!==0&&(n=ou(t,i).slice(),p.__wbindgen_free(t,i*4,4)),n}finally{p.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldScale(e){const t=p.rawcolliderset_coHeightfieldScale(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}coHeightfieldNRows(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coHeightfieldNRows(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=Ae()[r/4+1];return t===0?void 0:i>>>0}finally{p.__wbindgen_add_to_stack_pointer(16)}}coHeightfieldNCols(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coHeightfieldNCols(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=Ae()[r/4+1];return t===0?void 0:i>>>0}finally{p.__wbindgen_add_to_stack_pointer(16)}}coParent(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawcolliderset_coParent(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=qs()[r/8+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}coSetEnabled(e,t){p.rawcolliderset_coSetEnabled(this.__wbg_ptr,e,t)}coIsEnabled(e){return p.rawcolliderset_coIsEnabled(this.__wbg_ptr,e)!==0}coFriction(e){return p.rawcolliderset_coFriction(this.__wbg_ptr,e)}coRestitution(e){return p.rawcolliderset_coRestitution(this.__wbg_ptr,e)}coDensity(e){return p.rawcolliderset_coDensity(this.__wbg_ptr,e)}coMass(e){return p.rawcolliderset_coMass(this.__wbg_ptr,e)}coVolume(e){return p.rawcolliderset_coVolume(this.__wbg_ptr,e)}coCollisionGroups(e){return p.rawcolliderset_coCollisionGroups(this.__wbg_ptr,e)>>>0}coSolverGroups(e){return p.rawcolliderset_coSolverGroups(this.__wbg_ptr,e)>>>0}coActiveHooks(e){return p.rawcolliderset_coActiveHooks(this.__wbg_ptr,e)>>>0}coActiveCollisionTypes(e){return p.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr,e)}coActiveEvents(e){return p.rawcolliderset_coActiveEvents(this.__wbg_ptr,e)>>>0}coContactForceEventThreshold(e){return p.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr,e)}coContainsPoint(e,t){return C(t,N),p.rawcolliderset_coContainsPoint(this.__wbg_ptr,e,t.__wbg_ptr)!==0}coCastShape(e,t,i,r,n,a,o,l){C(t,N),C(i,xe),C(r,N),C(n,ze),C(a,N);const c=p.rawcolliderset_coCastShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o,l);return c===0?void 0:sa.__wrap(c)}coCastCollider(e,t,i,r,n,a){C(t,N),C(r,N);const o=p.rawcolliderset_coCastCollider(this.__wbg_ptr,e,t.__wbg_ptr,i,r.__wbg_ptr,n,a);return o===0?void 0:na.__wrap(o)}coIntersectsShape(e,t,i,r){return C(t,xe),C(i,N),C(r,ze),p.rawcolliderset_coIntersectsShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr)!==0}coContactShape(e,t,i,r,n){C(t,xe),C(i,N),C(r,ze);const a=p.rawcolliderset_coContactShape(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n);return a===0?void 0:jn.__wrap(a)}coContactCollider(e,t,i){const r=p.rawcolliderset_coContactCollider(this.__wbg_ptr,e,t,i);return r===0?void 0:jn.__wrap(r)}coProjectPoint(e,t,i){C(t,N);const r=p.rawcolliderset_coProjectPoint(this.__wbg_ptr,e,t.__wbg_ptr,i);return ta.__wrap(r)}coIntersectsRay(e,t,i,r){return C(t,N),C(i,N),p.rawcolliderset_coIntersectsRay(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)!==0}coCastRay(e,t,i,r,n){return C(t,N),C(i,N),p.rawcolliderset_coCastRay(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,n)}coCastRayAndGetNormal(e,t,i,r,n){C(t,N),C(i,N);const a=p.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,n);return a===0?void 0:ia.__wrap(a)}coSetSensor(e,t){p.rawcolliderset_coSetSensor(this.__wbg_ptr,e,t)}coSetRestitution(e,t){p.rawcolliderset_coSetRestitution(this.__wbg_ptr,e,t)}coSetFriction(e,t){p.rawcolliderset_coSetFriction(this.__wbg_ptr,e,t)}coFrictionCombineRule(e){return p.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr,e)>>>0}coSetFrictionCombineRule(e,t){p.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr,e,t)}coRestitutionCombineRule(e){return p.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr,e)>>>0}coSetRestitutionCombineRule(e,t){p.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr,e,t)}coSetCollisionGroups(e,t){p.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr,e,t)}coSetSolverGroups(e,t){p.rawcolliderset_coSetSolverGroups(this.__wbg_ptr,e,t)}coSetActiveHooks(e,t){p.rawcolliderset_coSetActiveHooks(this.__wbg_ptr,e,t)}coSetActiveEvents(e,t){p.rawcolliderset_coSetActiveEvents(this.__wbg_ptr,e,t)}coSetActiveCollisionTypes(e,t){p.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr,e,t)}coSetShape(e,t){C(t,xe),p.rawcolliderset_coSetShape(this.__wbg_ptr,e,t.__wbg_ptr)}coSetContactForceEventThreshold(e,t){p.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr,e,t)}coSetDensity(e,t){p.rawcolliderset_coSetDensity(this.__wbg_ptr,e,t)}coSetMass(e,t){p.rawcolliderset_coSetMass(this.__wbg_ptr,e,t)}coSetMassProperties(e,t,i,r,n){C(i,N),C(r,N),C(n,ze),p.rawcolliderset_coSetMassProperties(this.__wbg_ptr,e,t,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr)}constructor(){const e=p.rawcolliderset_new();return this.__wbg_ptr=e>>>0,this}len(){return p.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return p.rawcolliderset_contains(this.__wbg_ptr,e)!==0}createCollider(e,t,i,r,n,a,o,l,c,h,u,d,f,w,_,m,g,y,v,x,S,L,O,b){try{const X=p.__wbindgen_add_to_stack_pointer(-16);C(t,xe),C(i,N),C(r,ze),C(o,N),C(l,N),C(c,ze),C(b,at),p.rawcolliderset_createCollider(X,this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h,u,d,f,w,_,m,g,y,v,x,S,L,O,b.__wbg_ptr);var R=Ae()[X/4+0],k=qs()[X/8+1];return R===0?void 0:k}finally{p.__wbindgen_add_to_stack_pointer(16)}}remove(e,t,i,r){C(t,Pi),C(i,at),p.rawcolliderset_remove(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}isHandleValid(e){return p.rawcolliderset_contains(this.__wbg_ptr,e)!==0}forEachColliderHandle(e){try{p.rawcolliderset_forEachColliderHandle(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}}class Ho{static __wrap(e){e=e>>>0;const t=Object.create(Ho.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawcontactmanifold_free(e)}normal(){const e=p.rawcontactmanifold_normal(this.__wbg_ptr);return N.__wrap(e)}local_n1(){const e=p.rawcontactmanifold_local_n1(this.__wbg_ptr);return N.__wrap(e)}local_n2(){const e=p.rawcontactmanifold_local_n2(this.__wbg_ptr);return N.__wrap(e)}subshape1(){return p.rawcontactmanifold_subshape1(this.__wbg_ptr)>>>0}subshape2(){return p.rawcontactmanifold_subshape2(this.__wbg_ptr)>>>0}num_contacts(){return p.rawcontactmanifold_num_contacts(this.__wbg_ptr)>>>0}contact_local_p1(e){const t=p.rawcontactmanifold_contact_local_p1(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}contact_local_p2(e){const t=p.rawcontactmanifold_contact_local_p2(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}contact_dist(e){return p.rawcontactmanifold_contact_dist(this.__wbg_ptr,e)}contact_fid1(e){return p.rawcontactmanifold_contact_fid1(this.__wbg_ptr,e)>>>0}contact_fid2(e){return p.rawcontactmanifold_contact_fid2(this.__wbg_ptr,e)>>>0}contact_impulse(e){return p.rawcontactmanifold_contact_impulse(this.__wbg_ptr,e)}contact_tangent_impulse_x(e){return p.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr,e)}contact_tangent_impulse_y(e){return p.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr,e)}num_solver_contacts(){return p.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr)>>>0}solver_contact_point(e){const t=p.rawcontactmanifold_solver_contact_point(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}solver_contact_dist(e){return p.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr,e)}solver_contact_friction(e){return p.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr,e)}solver_contact_restitution(e){return p.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr,e)}solver_contact_tangent_velocity(e){const t=p.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr,e);return N.__wrap(t)}}class Go{static __wrap(e){e=e>>>0;const t=Object.create(Go.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawcontactpair_free(e)}collider1(){return p.rawcontactpair_collider1(this.__wbg_ptr)}collider2(){return p.rawcontactpair_collider2(this.__wbg_ptr)}numContactManifolds(){return p.rawcontactpair_numContactManifolds(this.__wbg_ptr)>>>0}contactManifold(e){const t=p.rawcontactpair_contactManifold(this.__wbg_ptr,e);return t===0?void 0:Ho.__wrap(t)}}class ub{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawdebugrenderpipeline_free(e)}constructor(){const e=p.rawdebugrenderpipeline_new();return this.__wbg_ptr=e>>>0,this}vertices(){const e=p.rawdebugrenderpipeline_vertices(this.__wbg_ptr);return js(e)}colors(){const e=p.rawdebugrenderpipeline_colors(this.__wbg_ptr);return js(e)}render(e,t,i,r,n){C(e,at),C(t,st),C(i,Li),C(r,Ii),C(n,$i),p.rawdebugrenderpipeline_render(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr)}}class Vo{static __wrap(e){e=e>>>0;const t=Object.create(Vo.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawdeserializedworld_free(e)}takeGravity(){const e=p.rawdeserializedworld_takeGravity(this.__wbg_ptr);return e===0?void 0:N.__wrap(e)}takeIntegrationParameters(){const e=p.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);return e===0?void 0:yr.__wrap(e)}takeIslandManager(){const e=p.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);return e===0?void 0:Pi.__wrap(e)}takeBroadPhase(){const e=p.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);return e===0?void 0:br.__wrap(e)}takeNarrowPhase(){const e=p.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);return e===0?void 0:$i.__wrap(e)}takeBodies(){const e=p.rawdeserializedworld_takeBodies(this.__wbg_ptr);return e===0?void 0:at.__wrap(e)}takeColliders(){const e=p.rawdeserializedworld_takeColliders(this.__wbg_ptr);return e===0?void 0:st.__wrap(e)}takeImpulseJoints(){const e=p.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);return e===0?void 0:Li.__wrap(e)}takeMultibodyJoints(){const e=p.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);return e===0?void 0:Ii.__wrap(e)}}class db{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawdynamicraycastvehiclecontroller_free(e)}constructor(e){const t=p.rawdynamicraycastvehiclecontroller_new(e);return this.__wbg_ptr=t>>>0,this}current_vehicle_speed(){return p.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}chassis(){return p.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr)}index_up_axis(){return p.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}set_index_up_axis(e){p.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}index_forward_axis(){return p.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set_index_forward_axis(e){p.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,e)}add_wheel(e,t,i,r,n){C(e,N),C(t,N),C(i,N),p.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,n)}num_wheels(){return p.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr)>>>0}update_vehicle(e,t,i,r,n,a,o){try{C(t,at),C(i,st),C(r,Wo),p.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,!ge(a),ge(a)?0:a,it(o))}finally{Ue[Ke++]=void 0}}wheel_chassis_connection_point_cs(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}set_wheel_chassis_connection_point_cs(e,t){C(t,N),p.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_suspension_rest_length(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_rest_length(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr,e,t)}wheel_max_suspension_travel(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_travel(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr,e,t)}wheel_radius(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_radius(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_radius(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr,e,t)}wheel_suspension_stiffness(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_stiffness(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr,e,t)}wheel_suspension_compression(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_compression(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr,e,t)}wheel_suspension_relaxation(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_suspension_relaxation(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr,e,t)}wheel_max_suspension_force(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_max_suspension_force(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr,e,t)}wheel_brake(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_brake(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_brake(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr,e,t)}wheel_steering(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_steering(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_steering(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr,e,t)}wheel_engine_force(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_engine_force(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_engine_force(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr,e,t)}wheel_direction_cs(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}set_wheel_direction_cs(e,t){C(t,N),p.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_axle_cs(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}set_wheel_axle_cs(e,t){C(t,N),p.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr,e,t.__wbg_ptr)}wheel_friction_slip(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_friction_slip(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_friction_slip(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr,e,t)}wheel_side_friction_stiffness(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}set_wheel_side_friction_stiffness(e,t){p.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr,e,t)}wheel_rotation(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_rotation(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}wheel_forward_impulse(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}wheel_side_impulse(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_side_impulse(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}wheel_suspension_force(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_force(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}wheel_contact_normal_ws(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}wheel_contact_point_ws(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}wheel_suspension_length(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_suspension_length(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=et()[r/4+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}wheel_hard_point_ws(e){const t=p.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr,e);return t===0?void 0:N.__wrap(t)}wheel_is_in_contact(e){return p.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr,e)!==0}wheel_ground_object(e){try{const r=p.__wbindgen_add_to_stack_pointer(-16);p.rawdynamicraycastvehiclecontroller_wheel_ground_object(r,this.__wbg_ptr,e);var t=Ae()[r/4+0],i=qs()[r/8+1];return t===0?void 0:i}finally{p.__wbindgen_add_to_stack_pointer(16)}}}class hu{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_raweventqueue_free(e)}constructor(e){const t=p.raweventqueue_new(e);return this.__wbg_ptr=t>>>0,this}drainCollisionEvents(e){try{p.raweventqueue_drainCollisionEvents(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}drainContactForceEvents(e){try{p.raweventqueue_drainContactForceEvents(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}clear(){p.raweventqueue_clear(this.__wbg_ptr)}}class St{static __wrap(e){e=e>>>0;const t=Object.create(St.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawgenericjoint_free(e)}static generic(e,t,i,r){C(e,N),C(t,N),C(i,N);const n=p.rawgenericjoint_generic(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return n===0?void 0:St.__wrap(n)}static spring(e,t,i,r,n){C(r,N),C(n,N);const a=p.rawgenericjoint_spring(e,t,i,r.__wbg_ptr,n.__wbg_ptr);return St.__wrap(a)}static rope(e,t,i){C(t,N),C(i,N);const r=p.rawgenericjoint_rope(e,t.__wbg_ptr,i.__wbg_ptr);return St.__wrap(r)}static spherical(e,t){C(e,N),C(t,N);const i=p.rawgenericjoint_spherical(e.__wbg_ptr,t.__wbg_ptr);return St.__wrap(i)}static prismatic(e,t,i,r,n,a){C(e,N),C(t,N),C(i,N);const o=p.rawgenericjoint_prismatic(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,n,a);return o===0?void 0:St.__wrap(o)}static fixed(e,t,i,r){C(e,N),C(t,ze),C(i,N),C(r,ze);const n=p.rawgenericjoint_fixed(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr);return St.__wrap(n)}static revolute(e,t,i){C(e,N),C(t,N),C(i,N);const r=p.rawgenericjoint_revolute(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr);return r===0?void 0:St.__wrap(r)}}class Li{static __wrap(e){e=e>>>0;const t=Object.create(Li.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawimpulsejointset_free(e)}jointType(e){return p.rawimpulsejointset_jointType(this.__wbg_ptr,e)}jointBodyHandle1(e){return p.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr,e)}jointBodyHandle2(e){return p.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr,e)}jointFrameX1(e){const t=p.rawimpulsejointset_jointFrameX1(this.__wbg_ptr,e);return ze.__wrap(t)}jointFrameX2(e){const t=p.rawimpulsejointset_jointFrameX2(this.__wbg_ptr,e);return ze.__wrap(t)}jointAnchor1(e){const t=p.rawimpulsejointset_jointAnchor1(this.__wbg_ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=p.rawimpulsejointset_jointAnchor2(this.__wbg_ptr,e);return N.__wrap(t)}jointSetAnchor1(e,t){C(t,N),p.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr,e,t.__wbg_ptr)}jointSetAnchor2(e,t){C(t,N),p.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr,e,t.__wbg_ptr)}jointContactsEnabled(e){return p.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){p.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return p.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return p.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return p.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr,e,t)}jointSetLimits(e,t,i,r){p.rawimpulsejointset_jointSetLimits(this.__wbg_ptr,e,t,i,r)}jointConfigureMotorModel(e,t,i){p.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr,e,t,i)}jointConfigureMotorVelocity(e,t,i,r){p.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr,e,t,i,r)}jointConfigureMotorPosition(e,t,i,r,n){p.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr,e,t,i,r,n)}jointConfigureMotor(e,t,i,r,n,a){p.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr,e,t,i,r,n,a)}constructor(){const e=p.rawimpulsejointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,i,r){return C(e,St),p.rawimpulsejointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,i,r)}remove(e,t){p.rawimpulsejointset_remove(this.__wbg_ptr,e,t)}len(){return p.rawimpulsejointset_len(this.__wbg_ptr)>>>0}contains(e){return p.rawimpulsejointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{p.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{p.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,it(t))}finally{Ue[Ke++]=void 0}}}class yr{static __wrap(e){e=e>>>0;const t=Object.create(yr.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawintegrationparameters_free(e)}constructor(){const e=p.rawintegrationparameters_new();return this.__wbg_ptr=e>>>0,this}get dt(){return p.rawintegrationparameters_dt(this.__wbg_ptr)}get erp(){return p.rawintegrationparameters_erp(this.__wbg_ptr)}get allowedLinearError(){return p.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr)}get predictionDistance(){return p.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr)}get numSolverIterations(){return p.rawintegrationparameters_numSolverIterations(this.__wbg_ptr)>>>0}get numAdditionalFrictionIterations(){return p.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr)>>>0}get numInternalPgsIterations(){return p.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr)>>>0}get minIslandSize(){return p.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr)>>>0}get maxCcdSubsteps(){return p.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr)>>>0}set dt(e){p.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}set erp(e){p.rawintegrationparameters_set_erp(this.__wbg_ptr,e)}set allowedLinearError(e){p.rawintegrationparameters_set_allowedLinearError(this.__wbg_ptr,e)}set predictionDistance(e){p.rawintegrationparameters_set_predictionDistance(this.__wbg_ptr,e)}set numSolverIterations(e){p.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr,e)}set numAdditionalFrictionIterations(e){p.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr,e)}set numInternalPgsIterations(e){p.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr,e)}set minIslandSize(e){p.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr,e)}set maxCcdSubsteps(e){p.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr,e)}switchToStandardPgsSolver(){p.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr)}switchToSmallStepsPgsSolver(){p.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr)}}class Pi{static __wrap(e){e=e>>>0;const t=Object.create(Pi.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawislandmanager_free(e)}constructor(){const e=p.rawislandmanager_new();return this.__wbg_ptr=e>>>0,this}forEachActiveRigidBodyHandle(e){try{p.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}}class pb{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawkinematiccharactercontroller_free(e)}constructor(e){const t=p.rawkinematiccharactercontroller_new(e);return this.__wbg_ptr=t>>>0,this}up(){const e=p.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return N.__wrap(e)}setUp(e){C(e,N),p.rawkinematiccharactercontroller_setUp(this.__wbg_ptr,e.__wbg_ptr)}offset(){return p.rawintegrationparameters_dt(this.__wbg_ptr)}setOffset(e){p.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr,e)}slideEnabled(){return p.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr)!==0}setSlideEnabled(e){p.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr,e)}autostepMaxHeight(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawkinematiccharactercontroller_autostepMaxHeight(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=et()[i/4+1];return e===0?void 0:t}finally{p.__wbindgen_add_to_stack_pointer(16)}}autostepMinWidth(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawkinematiccharactercontroller_autostepMinWidth(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=et()[i/4+1];return e===0?void 0:t}finally{p.__wbindgen_add_to_stack_pointer(16)}}autostepIncludesDynamicBodies(){const e=p.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);return e===16777215?void 0:e!==0}autostepEnabled(){return p.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr)!==0}enableAutostep(e,t,i){p.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr,e,t,i)}disableAutostep(){p.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr)}maxSlopeClimbAngle(){return p.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}setMaxSlopeClimbAngle(e){p.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr,e)}minSlopeSlideAngle(){return p.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr)}setMinSlopeSlideAngle(e){p.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr,e)}snapToGroundDistance(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawkinematiccharactercontroller_snapToGroundDistance(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=et()[i/4+1];return e===0?void 0:t}finally{p.__wbindgen_add_to_stack_pointer(16)}}enableSnapToGround(e){p.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr,e)}disableSnapToGround(){p.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr)}snapToGroundEnabled(){return p.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr)!==0}computeColliderMovement(e,t,i,r,n,a,o,l,c,h,u){try{C(t,at),C(i,st),C(r,Wo),C(a,N),p.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a.__wbg_ptr,o,!ge(l),ge(l)?0:l,c,!ge(h),ge(h)?0:h,it(u))}finally{Ue[Ke++]=void 0}}computedMovement(){const e=p.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);return N.__wrap(e)}computedGrounded(){return p.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr)!==0}numComputedCollisions(){return p.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr)>>>0}computedCollision(e,t){return C(t,cu),p.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr,e,t.__wbg_ptr)!==0}}class Ii{static __wrap(e){e=e>>>0;const t=Object.create(Ii.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawmultibodyjointset_free(e)}jointType(e){return p.rawmultibodyjointset_jointType(this.__wbg_ptr,e)}jointFrameX1(e){const t=p.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr,e);return ze.__wrap(t)}jointFrameX2(e){const t=p.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr,e);return ze.__wrap(t)}jointAnchor1(e){const t=p.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr,e);return N.__wrap(t)}jointAnchor2(e){const t=p.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr,e);return N.__wrap(t)}jointContactsEnabled(e){return p.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr,e)!==0}jointSetContactsEnabled(e,t){p.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr,e,t)}jointLimitsEnabled(e,t){return p.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr,e,t)!==0}jointLimitsMin(e,t){return p.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr,e,t)}jointLimitsMax(e,t){return p.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr,e,t)}constructor(){const e=p.rawmultibodyjointset_new();return this.__wbg_ptr=e>>>0,this}createJoint(e,t,i,r){return C(e,St),p.rawmultibodyjointset_createJoint(this.__wbg_ptr,e.__wbg_ptr,t,i,r)}remove(e,t){p.rawmultibodyjointset_remove(this.__wbg_ptr,e,t)}contains(e){return p.rawmultibodyjointset_contains(this.__wbg_ptr,e)!==0}forEachJointHandle(e){try{p.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}forEachJointAttachedToRigidBody(e,t){try{p.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr,e,it(t))}finally{Ue[Ke++]=void 0}}}class $i{static __wrap(e){e=e>>>0;const t=Object.create($i.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawnarrowphase_free(e)}constructor(){const e=p.rawnarrowphase_new();return this.__wbg_ptr=e>>>0,this}contact_pairs_with(e,t){p.rawnarrowphase_contact_pairs_with(this.__wbg_ptr,e,ln(t))}contact_pair(e,t){const i=p.rawnarrowphase_contact_pair(this.__wbg_ptr,e,t);return i===0?void 0:Go.__wrap(i)}intersection_pairs_with(e,t){p.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr,e,ln(t))}intersection_pair(e,t){return p.rawnarrowphase_intersection_pair(this.__wbg_ptr,e,t)!==0}}class mb{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawphysicspipeline_free(e)}constructor(){const e=p.rawphysicspipeline_new();return this.__wbg_ptr=e>>>0,this}step(e,t,i,r,n,a,o,l,c,h){C(e,N),C(t,yr),C(i,Pi),C(r,br),C(n,$i),C(a,at),C(o,st),C(l,Li),C(c,Ii),C(h,Bo),p.rawphysicspipeline_step(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr)}stepWithEvents(e,t,i,r,n,a,o,l,c,h,u,d,f,w){C(e,N),C(t,yr),C(i,Pi),C(r,br),C(n,$i),C(a,at),C(o,st),C(l,Li),C(c,Ii),C(h,Bo),C(u,hu),p.rawphysicspipeline_stepWithEvents(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,ln(d),ln(f),ln(w))}}class ea{static __wrap(e){e=e>>>0;const t=Object.create(ea.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawpointcolliderprojection_free(e)}colliderHandle(){return p.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}point(){const e=p.rawpointcolliderprojection_point(this.__wbg_ptr);return N.__wrap(e)}isInside(){return p.rawpointcolliderprojection_isInside(this.__wbg_ptr)!==0}featureType(){return p.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=Ae()[i/4+1];return e===0?void 0:t>>>0}finally{p.__wbindgen_add_to_stack_pointer(16)}}}class ta{static __wrap(e){e=e>>>0;const t=Object.create(ta.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawpointprojection_free(e)}point(){const e=p.rawpointprojection_point(this.__wbg_ptr);return N.__wrap(e)}isInside(){return p.rawpointprojection_isInside(this.__wbg_ptr)!==0}}class Wo{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawquerypipeline_free(e)}constructor(){const e=p.rawquerypipeline_new();return this.__wbg_ptr=e>>>0,this}update(e,t){C(e,at),C(t,st),p.rawquerypipeline_update(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr)}castRay(e,t,i,r,n,a,o,l,c,h,u){try{C(e,at),C(t,st),C(i,N),C(r,N);const d=p.rawquerypipeline_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a,o,!ge(l),ge(l)?0:l,!ge(c),ge(c)?0:c,!ge(h),ge(h)?0:h,it(u));return d===0?void 0:Xo.__wrap(d)}finally{Ue[Ke++]=void 0}}castRayAndGetNormal(e,t,i,r,n,a,o,l,c,h,u){try{C(e,at),C(t,st),C(i,N),C(r,N);const d=p.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a,o,!ge(l),ge(l)?0:l,!ge(c),ge(c)?0:c,!ge(h),ge(h)?0:h,it(u));return d===0?void 0:jo.__wrap(d)}finally{Ue[Ke++]=void 0}}intersectionsWithRay(e,t,i,r,n,a,o,l,c,h,u,d){try{C(e,at),C(t,st),C(i,N),C(r,N),p.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a,it(o),l,!ge(c),ge(c)?0:c,!ge(h),ge(h)?0:h,!ge(u),ge(u)?0:u,it(d))}finally{Ue[Ke++]=void 0,Ue[Ke++]=void 0}}intersectionWithShape(e,t,i,r,n,a,o,l,c,h){try{const f=p.__wbindgen_add_to_stack_pointer(-16);C(e,at),C(t,st),C(i,N),C(r,ze),C(n,xe),p.rawquerypipeline_intersectionWithShape(f,this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a,!ge(o),ge(o)?0:o,!ge(l),ge(l)?0:l,!ge(c),ge(c)?0:c,it(h));var u=Ae()[f/4+0],d=qs()[f/8+1];return u===0?void 0:d}finally{p.__wbindgen_add_to_stack_pointer(16),Ue[Ke++]=void 0}}projectPoint(e,t,i,r,n,a,o,l,c){try{C(e,at),C(t,st),C(i,N);const h=p.rawquerypipeline_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,n,!ge(a),ge(a)?0:a,!ge(o),ge(o)?0:o,!ge(l),ge(l)?0:l,it(c));return h===0?void 0:ea.__wrap(h)}finally{Ue[Ke++]=void 0}}projectPointAndGetFeature(e,t,i,r,n,a,o,l){try{C(e,at),C(t,st),C(i,N);const c=p.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r,!ge(n),ge(n)?0:n,!ge(a),ge(a)?0:a,!ge(o),ge(o)?0:o,it(l));return c===0?void 0:ea.__wrap(c)}finally{Ue[Ke++]=void 0}}intersectionsWithPoint(e,t,i,r,n,a,o,l,c){try{C(e,at),C(t,st),C(i,N),p.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,it(r),n,!ge(a),ge(a)?0:a,!ge(o),ge(o)?0:o,!ge(l),ge(l)?0:l,it(c))}finally{Ue[Ke++]=void 0,Ue[Ke++]=void 0}}castShape(e,t,i,r,n,a,o,l,c,h,u,d,f){try{C(e,at),C(t,st),C(i,N),C(r,ze),C(n,N),C(a,xe);const w=p.rawquerypipeline_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o,l,c,!ge(h),ge(h)?0:h,!ge(u),ge(u)?0:u,!ge(d),ge(d)?0:d,it(f));return w===0?void 0:na.__wrap(w)}finally{Ue[Ke++]=void 0}}intersectionsWithShape(e,t,i,r,n,a,o,l,c,h,u){try{C(e,at),C(t,st),C(i,N),C(r,ze),C(n,xe),p.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,it(a),o,!ge(l),ge(l)?0:l,!ge(c),ge(c)?0:c,!ge(h),ge(h)?0:h,it(u))}finally{Ue[Ke++]=void 0,Ue[Ke++]=void 0}}collidersWithAabbIntersectingAabb(e,t,i){try{C(e,N),C(t,N),p.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,it(i))}finally{Ue[Ke++]=void 0}}}class jo{static __wrap(e){e=e>>>0;const t=Object.create(jo.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawraycolliderintersection_free(e)}colliderHandle(){return p.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr)}normal(){const e=p.rawraycolliderintersection_normal(this.__wbg_ptr);return N.__wrap(e)}toi(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}featureType(){return p.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=Ae()[i/4+1];return e===0?void 0:t>>>0}finally{p.__wbindgen_add_to_stack_pointer(16)}}}class Xo{static __wrap(e){e=e>>>0;const t=Object.create(Xo.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawraycollidertoi_free(e)}colliderHandle(){return p.rawcharactercollision_handle(this.__wbg_ptr)}toi(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}}class ia{static __wrap(e){e=e>>>0;const t=Object.create(ia.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawrayintersection_free(e)}normal(){const e=p.rawraycolliderintersection_normal(this.__wbg_ptr);return N.__wrap(e)}toi(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}featureType(){return p.rawpointcolliderprojection_featureType(this.__wbg_ptr)}featureId(){try{const i=p.__wbindgen_add_to_stack_pointer(-16);p.rawpointcolliderprojection_featureId(i,this.__wbg_ptr);var e=Ae()[i/4+0],t=Ae()[i/4+1];return e===0?void 0:t>>>0}finally{p.__wbindgen_add_to_stack_pointer(16)}}}class at{static __wrap(e){e=e>>>0;const t=Object.create(at.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawrigidbodyset_free(e)}rbTranslation(e){const t=p.rawrigidbodyset_rbTranslation(this.__wbg_ptr,e);return N.__wrap(t)}rbRotation(e){const t=p.rawrigidbodyset_rbRotation(this.__wbg_ptr,e);return ze.__wrap(t)}rbSleep(e){p.rawrigidbodyset_rbSleep(this.__wbg_ptr,e)}rbIsSleeping(e){return p.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr,e)!==0}rbIsMoving(e){return p.rawrigidbodyset_rbIsMoving(this.__wbg_ptr,e)!==0}rbNextTranslation(e){const t=p.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr,e);return N.__wrap(t)}rbNextRotation(e){const t=p.rawrigidbodyset_rbNextRotation(this.__wbg_ptr,e);return ze.__wrap(t)}rbSetTranslation(e,t,i,r,n){p.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr,e,t,i,r,n)}rbSetRotation(e,t,i,r,n,a){p.rawrigidbodyset_rbSetRotation(this.__wbg_ptr,e,t,i,r,n,a)}rbSetLinvel(e,t,i){C(t,N),p.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbSetAngvel(e,t,i){C(t,N),p.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbSetNextKinematicTranslation(e,t,i,r){p.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr,e,t,i,r)}rbSetNextKinematicRotation(e,t,i,r,n){p.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr,e,t,i,r,n)}rbRecomputeMassPropertiesFromColliders(e,t){C(t,st),p.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr,e,t.__wbg_ptr)}rbSetAdditionalMass(e,t,i){p.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr,e,t,i)}rbSetAdditionalMassProperties(e,t,i,r,n,a){C(i,N),C(r,N),C(n,ze),p.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr,e,t,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a)}rbLinvel(e){const t=p.rawrigidbodyset_rbLinvel(this.__wbg_ptr,e);return N.__wrap(t)}rbAngvel(e){const t=p.rawrigidbodyset_rbAngvel(this.__wbg_ptr,e);return N.__wrap(t)}rbLockTranslations(e,t,i){p.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr,e,t,i)}rbSetEnabledTranslations(e,t,i,r,n){p.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr,e,t,i,r,n)}rbLockRotations(e,t,i){p.rawrigidbodyset_rbLockRotations(this.__wbg_ptr,e,t,i)}rbSetEnabledRotations(e,t,i,r,n){p.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr,e,t,i,r,n)}rbDominanceGroup(e){return p.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr,e)}rbSetDominanceGroup(e,t){p.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr,e,t)}rbEnableCcd(e,t){p.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr,e,t)}rbMass(e){return p.rawrigidbodyset_rbMass(this.__wbg_ptr,e)}rbInvMass(e){return p.rawrigidbodyset_rbInvMass(this.__wbg_ptr,e)}rbEffectiveInvMass(e){const t=p.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr,e);return N.__wrap(t)}rbLocalCom(e){const t=p.rawrigidbodyset_rbLocalCom(this.__wbg_ptr,e);return N.__wrap(t)}rbWorldCom(e){const t=p.rawrigidbodyset_rbWorldCom(this.__wbg_ptr,e);return N.__wrap(t)}rbInvPrincipalInertiaSqrt(e){const t=p.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr,e);return N.__wrap(t)}rbPrincipalInertiaLocalFrame(e){const t=p.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr,e);return ze.__wrap(t)}rbPrincipalInertia(e){const t=p.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr,e);return N.__wrap(t)}rbEffectiveWorldInvInertiaSqrt(e){const t=p.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr,e);return ra.__wrap(t)}rbEffectiveAngularInertia(e){const t=p.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr,e);return ra.__wrap(t)}rbWakeUp(e){p.rawrigidbodyset_rbWakeUp(this.__wbg_ptr,e)}rbIsCcdEnabled(e){return p.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr,e)!==0}rbNumColliders(e){return p.rawrigidbodyset_rbNumColliders(this.__wbg_ptr,e)>>>0}rbCollider(e,t){return p.rawrigidbodyset_rbCollider(this.__wbg_ptr,e,t)}rbBodyType(e){return p.rawrigidbodyset_rbBodyType(this.__wbg_ptr,e)}rbSetBodyType(e,t,i){p.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr,e,t,i)}rbIsFixed(e){return p.rawrigidbodyset_rbIsFixed(this.__wbg_ptr,e)!==0}rbIsKinematic(e){return p.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr,e)!==0}rbIsDynamic(e){return p.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr,e)!==0}rbLinearDamping(e){return p.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr,e)}rbAngularDamping(e){return p.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr,e)}rbSetLinearDamping(e,t){p.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr,e,t)}rbSetAngularDamping(e,t){p.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr,e,t)}rbSetEnabled(e,t){p.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr,e,t)}rbIsEnabled(e){return p.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr,e)!==0}rbGravityScale(e){return p.rawrigidbodyset_rbGravityScale(this.__wbg_ptr,e)}rbSetGravityScale(e,t,i){p.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr,e,t,i)}rbResetForces(e,t){p.rawrigidbodyset_rbResetForces(this.__wbg_ptr,e,t)}rbResetTorques(e,t){p.rawrigidbodyset_rbResetTorques(this.__wbg_ptr,e,t)}rbAddForce(e,t,i){C(t,N),p.rawrigidbodyset_rbAddForce(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbApplyImpulse(e,t,i){C(t,N),p.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbAddTorque(e,t,i){C(t,N),p.rawrigidbodyset_rbAddTorque(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbApplyTorqueImpulse(e,t,i){C(t,N),p.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr,e,t.__wbg_ptr,i)}rbAddForceAtPoint(e,t,i,r){C(t,N),C(i,N),p.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}rbApplyImpulseAtPoint(e,t,i,r){C(t,N),C(i,N),p.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r)}rbAdditionalSolverIterations(e){return p.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr,e)>>>0}rbSetAdditionalSolverIterations(e,t){p.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr,e,t)}rbUserData(e){return p.rawrigidbodyset_rbUserData(this.__wbg_ptr,e)>>>0}rbSetUserData(e,t){p.rawrigidbodyset_rbSetUserData(this.__wbg_ptr,e,t)}constructor(){const e=p.rawrigidbodyset_new();return this.__wbg_ptr=e>>>0,this}createRigidBody(e,t,i,r,n,a,o,l,c,h,u,d,f,w,_,m,g,y,v,x,S,L,O,b,R){return C(t,N),C(i,ze),C(o,N),C(l,N),C(c,N),C(h,N),C(u,ze),p.rawrigidbodyset_createRigidBody(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r,n,a,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr,h.__wbg_ptr,u.__wbg_ptr,d,f,w,_,m,g,y,v,x,S,L,O,b,R)}remove(e,t,i,r,n){C(t,Pi),C(i,st),C(r,Li),C(n,Ii),p.rawrigidbodyset_remove(this.__wbg_ptr,e,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr)}len(){return p.rawcolliderset_len(this.__wbg_ptr)>>>0}contains(e){return p.rawrigidbodyset_contains(this.__wbg_ptr,e)!==0}forEachRigidBodyHandle(e){try{p.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr,it(e))}finally{Ue[Ke++]=void 0}}propagateModifiedBodyPositionsToColliders(e){C(e,st),p.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr,e.__wbg_ptr)}}class ze{static __wrap(e){e=e>>>0;const t=Object.create(ze.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawrotation_free(e)}constructor(e,t,i,r){const n=p.rawrotation_new(e,t,i,r);return this.__wbg_ptr=n>>>0,this}static identity(){const e=p.rawrotation_identity();return ze.__wrap(e)}get x(){return p.rawrotation_x(this.__wbg_ptr)}get y(){return p.rawintegrationparameters_dt(this.__wbg_ptr)}get z(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}get w(){return p.rawintegrationparameters_erp(this.__wbg_ptr)}}class ra{static __wrap(e){e=e>>>0;const t=Object.create(ra.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawsdpmatrix3_free(e)}elements(){const e=p.rawsdpmatrix3_elements(this.__wbg_ptr);return js(e)}}class fb{__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawserializationpipeline_free(e)}constructor(){const e=p.rawserializationpipeline_new();return this.__wbg_ptr=e>>>0,this}serializeAll(e,t,i,r,n,a,o,l,c){C(e,N),C(t,yr),C(i,Pi),C(r,br),C(n,$i),C(a,at),C(o,st),C(l,Li),C(c,Ii);const h=p.rawserializationpipeline_serializeAll(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l.__wbg_ptr,c.__wbg_ptr);return js(h)}deserializeAll(e){const t=p.rawserializationpipeline_deserializeAll(this.__wbg_ptr,ln(e));return t===0?void 0:Vo.__wrap(t)}}class xe{static __wrap(e){e=e>>>0;const t=Object.create(xe.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawshape_free(e)}static cuboid(e,t,i){const r=p.rawshape_cuboid(e,t,i);return xe.__wrap(r)}static roundCuboid(e,t,i,r){const n=p.rawshape_roundCuboid(e,t,i,r);return xe.__wrap(n)}static ball(e){const t=p.rawshape_ball(e);return xe.__wrap(t)}static halfspace(e){C(e,N);const t=p.rawshape_halfspace(e.__wbg_ptr);return xe.__wrap(t)}static capsule(e,t){const i=p.rawshape_capsule(e,t);return xe.__wrap(i)}static cylinder(e,t){const i=p.rawshape_cylinder(e,t);return xe.__wrap(i)}static roundCylinder(e,t,i){const r=p.rawshape_roundCylinder(e,t,i);return xe.__wrap(r)}static cone(e,t){const i=p.rawshape_cone(e,t);return xe.__wrap(i)}static roundCone(e,t,i){const r=p.rawshape_roundCone(e,t,i);return xe.__wrap(r)}static polyline(e,t){const i=vr(e,p.__wbindgen_malloc),r=qt,n=Ks(t,p.__wbindgen_malloc),a=qt,o=p.rawshape_polyline(i,r,n,a);return xe.__wrap(o)}static trimesh(e,t){const i=vr(e,p.__wbindgen_malloc),r=qt,n=Ks(t,p.__wbindgen_malloc),a=qt,o=p.rawshape_trimesh(i,r,n,a);return xe.__wrap(o)}static heightfield(e,t,i,r){const n=vr(i,p.__wbindgen_malloc),a=qt;C(r,N);const o=p.rawshape_heightfield(e,t,n,a,r.__wbg_ptr);return xe.__wrap(o)}static segment(e,t){C(e,N),C(t,N);const i=p.rawshape_segment(e.__wbg_ptr,t.__wbg_ptr);return xe.__wrap(i)}static triangle(e,t,i){C(e,N),C(t,N),C(i,N);const r=p.rawshape_triangle(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr);return xe.__wrap(r)}static roundTriangle(e,t,i,r){C(e,N),C(t,N),C(i,N);const n=p.rawshape_roundTriangle(e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return xe.__wrap(n)}static convexHull(e){const t=vr(e,p.__wbindgen_malloc),i=qt,r=p.rawshape_convexHull(t,i);return r===0?void 0:xe.__wrap(r)}static roundConvexHull(e,t){const i=vr(e,p.__wbindgen_malloc),r=qt,n=p.rawshape_roundConvexHull(i,r,t);return n===0?void 0:xe.__wrap(n)}static convexMesh(e,t){const i=vr(e,p.__wbindgen_malloc),r=qt,n=Ks(t,p.__wbindgen_malloc),a=qt,o=p.rawshape_convexMesh(i,r,n,a);return o===0?void 0:xe.__wrap(o)}static roundConvexMesh(e,t,i){const r=vr(e,p.__wbindgen_malloc),n=qt,a=Ks(t,p.__wbindgen_malloc),o=qt,l=p.rawshape_roundConvexMesh(r,n,a,o,i);return l===0?void 0:xe.__wrap(l)}castShape(e,t,i,r,n,a,o,l,c){C(e,N),C(t,ze),C(i,N),C(r,xe),C(n,N),C(a,ze),C(o,N);const h=p.rawshape_castShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a.__wbg_ptr,o.__wbg_ptr,l,c);return h===0?void 0:sa.__wrap(h)}intersectsShape(e,t,i,r,n){return C(e,N),C(t,ze),C(i,xe),C(r,N),C(n,ze),p.rawshape_intersectsShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr)!==0}contactShape(e,t,i,r,n,a){C(e,N),C(t,ze),C(i,xe),C(r,N),C(n,ze);const o=p.rawshape_contactShape(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n.__wbg_ptr,a);return o===0?void 0:jn.__wrap(o)}containsPoint(e,t,i){return C(e,N),C(t,ze),C(i,N),p.rawshape_containsPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr)!==0}projectPoint(e,t,i,r){C(e,N),C(t,ze),C(i,N);const n=p.rawshape_projectPoint(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r);return ta.__wrap(n)}intersectsRay(e,t,i,r,n){return C(e,N),C(t,ze),C(i,N),C(r,N),p.rawshape_intersectsRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n)!==0}castRay(e,t,i,r,n,a){return C(e,N),C(t,ze),C(i,N),C(r,N),p.rawshape_castRay(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a)}castRayAndGetNormal(e,t,i,r,n,a){C(e,N),C(t,ze),C(i,N),C(r,N);const o=p.rawshape_castRayAndGetNormal(this.__wbg_ptr,e.__wbg_ptr,t.__wbg_ptr,i.__wbg_ptr,r.__wbg_ptr,n,a);return o===0?void 0:ia.__wrap(o)}}class na{static __wrap(e){e=e>>>0;const t=Object.create(na.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawshapecollidertoi_free(e)}colliderHandle(){return p.rawcharactercollision_handle(this.__wbg_ptr)}toi(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}witness1(){const e=p.rawraycolliderintersection_normal(this.__wbg_ptr);return N.__wrap(e)}witness2(){const e=p.rawshapecollidertoi_witness2(this.__wbg_ptr);return N.__wrap(e)}normal1(){const e=p.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return N.__wrap(e)}normal2(){const e=p.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);return N.__wrap(e)}}class jn{static __wrap(e){e=e>>>0;const t=Object.create(jn.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawshapecontact_free(e)}distance(){return p.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr)}point1(){const e=p.rawpointprojection_point(this.__wbg_ptr);return N.__wrap(e)}point2(){const e=p.rawraycolliderintersection_normal(this.__wbg_ptr);return N.__wrap(e)}normal1(){const e=p.rawshapecollidertoi_witness2(this.__wbg_ptr);return N.__wrap(e)}normal2(){const e=p.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);return N.__wrap(e)}}class sa{static __wrap(e){e=e>>>0;const t=Object.create(sa.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawshapetoi_free(e)}toi(){return p.rawrotation_x(this.__wbg_ptr)}witness1(){const e=p.rawshapetoi_witness1(this.__wbg_ptr);return N.__wrap(e)}witness2(){const e=p.rawcontactforceevent_total_force(this.__wbg_ptr);return N.__wrap(e)}normal1(){const e=p.rawshapetoi_normal1(this.__wbg_ptr);return N.__wrap(e)}normal2(){const e=p.rawshapetoi_normal2(this.__wbg_ptr);return N.__wrap(e)}}class N{static __wrap(e){e=e>>>0;const t=Object.create(N.prototype);return t.__wbg_ptr=e,t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,e}free(){const e=this.__destroy_into_raw();p.__wbg_rawvector_free(e)}static zero(){const e=p.rawvector_zero();return N.__wrap(e)}constructor(e,t,i){const r=p.rawvector_new(e,t,i);return this.__wbg_ptr=r>>>0,this}get x(){return p.rawrotation_x(this.__wbg_ptr)}set x(e){p.rawvector_set_x(this.__wbg_ptr,e)}get y(){return p.rawintegrationparameters_dt(this.__wbg_ptr)}set y(e){p.rawintegrationparameters_set_dt(this.__wbg_ptr,e)}get z(){return p.rawraycolliderintersection_toi(this.__wbg_ptr)}set z(e){p.rawvector_set_z(this.__wbg_ptr,e)}xyz(){const e=p.rawvector_xyz(this.__wbg_ptr);return N.__wrap(e)}yxz(){const e=p.rawvector_yxz(this.__wbg_ptr);return N.__wrap(e)}zxy(){const e=p.rawvector_zxy(this.__wbg_ptr);return N.__wrap(e)}xzy(){const e=p.rawvector_xzy(this.__wbg_ptr);return N.__wrap(e)}yzx(){const e=p.rawvector_yzx(this.__wbg_ptr);return N.__wrap(e)}zyx(){const e=p.rawvector_zyx(this.__wbg_ptr);return N.__wrap(e)}}class uu{constructor(e,t,i){this.x=e,this.y=t,this.z=i}}class I{static new(e,t,i){return new uu(e,t,i)}static intoRaw(e){return new N(e.x,e.y,e.z)}static zeros(){return I.new(0,0,0)}static fromRaw(e){if(!e)return null;let t=I.new(e.x,e.y,e.z);return e.free(),t}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z}}class qo{constructor(e,t,i,r){this.x=e,this.y=t,this.z=i,this.w=r}}class Pe{static identity(){return new qo(0,0,0,1)}static fromRaw(e){if(!e)return null;let t=new qo(e.x,e.y,e.z,e.w);return e.free(),t}static intoRaw(e){return new ze(e.x,e.y,e.z,e.w)}static copy(e,t){e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w}}class du{constructor(e){this.elements=e}get m11(){return this.elements[0]}get m12(){return this.elements[1]}get m21(){return this.m12}get m13(){return this.elements[2]}get m31(){return this.m13}get m22(){return this.elements[3]}get m23(){return this.elements[4]}get m32(){return this.m23}get m33(){return this.elements[5]}}class Yo{static fromRaw(e){const t=new du(e.elements());return e.free(),t}}var hi;(function(s){s[s.Dynamic=0]="Dynamic",s[s.Fixed=1]="Fixed",s[s.KinematicPositionBased=2]="KinematicPositionBased",s[s.KinematicVelocityBased=3]="KinematicVelocityBased"})(hi||(hi={}));class Jo{constructor(e,t,i){this.rawSet=e,this.colliderSet=t,this.handle=i}finalizeDeserialization(e){this.colliderSet=e}isValid(){return this.rawSet.contains(this.handle)}lockTranslations(e,t){return this.rawSet.rbLockTranslations(this.handle,e,t)}lockRotations(e,t){return this.rawSet.rbLockRotations(this.handle,e,t)}setEnabledTranslations(e,t,i,r){return this.rawSet.rbSetEnabledTranslations(this.handle,e,t,i,r)}restrictTranslations(e,t,i,r){this.setEnabledTranslations(e,t,i,r)}setEnabledRotations(e,t,i,r){return this.rawSet.rbSetEnabledRotations(this.handle,e,t,i,r)}restrictRotations(e,t,i,r){this.setEnabledRotations(e,t,i,r)}dominanceGroup(){return this.rawSet.rbDominanceGroup(this.handle)}setDominanceGroup(e){this.rawSet.rbSetDominanceGroup(this.handle,e)}additionalSolverIterations(){return this.rawSet.rbAdditionalSolverIterations(this.handle)}setAdditionalSolverIterations(e){this.rawSet.rbSetAdditionalSolverIterations(this.handle,e)}enableCcd(e){this.rawSet.rbEnableCcd(this.handle,e)}translation(){let e=this.rawSet.rbTranslation(this.handle);return I.fromRaw(e)}rotation(){let e=this.rawSet.rbRotation(this.handle);return Pe.fromRaw(e)}nextTranslation(){let e=this.rawSet.rbNextTranslation(this.handle);return I.fromRaw(e)}nextRotation(){let e=this.rawSet.rbNextRotation(this.handle);return Pe.fromRaw(e)}setTranslation(e,t){this.rawSet.rbSetTranslation(this.handle,e.x,e.y,e.z,t)}setLinvel(e,t){let i=I.intoRaw(e);this.rawSet.rbSetLinvel(this.handle,i,t),i.free()}gravityScale(){return this.rawSet.rbGravityScale(this.handle)}setGravityScale(e,t){this.rawSet.rbSetGravityScale(this.handle,e,t)}setRotation(e,t){this.rawSet.rbSetRotation(this.handle,e.x,e.y,e.z,e.w,t)}setAngvel(e,t){let i=I.intoRaw(e);this.rawSet.rbSetAngvel(this.handle,i,t),i.free()}setNextKinematicTranslation(e){this.rawSet.rbSetNextKinematicTranslation(this.handle,e.x,e.y,e.z)}setNextKinematicRotation(e){this.rawSet.rbSetNextKinematicRotation(this.handle,e.x,e.y,e.z,e.w)}linvel(){return I.fromRaw(this.rawSet.rbLinvel(this.handle))}angvel(){return I.fromRaw(this.rawSet.rbAngvel(this.handle))}mass(){return this.rawSet.rbMass(this.handle)}effectiveInvMass(){return I.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle))}invMass(){return this.rawSet.rbInvMass(this.handle)}localCom(){return I.fromRaw(this.rawSet.rbLocalCom(this.handle))}worldCom(){return I.fromRaw(this.rawSet.rbWorldCom(this.handle))}invPrincipalInertiaSqrt(){return I.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle))}principalInertia(){return I.fromRaw(this.rawSet.rbPrincipalInertia(this.handle))}principalInertiaLocalFrame(){return Pe.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle))}effectiveWorldInvInertiaSqrt(){return Yo.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle))}effectiveAngularInertia(){return Yo.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle))}sleep(){this.rawSet.rbSleep(this.handle)}wakeUp(){this.rawSet.rbWakeUp(this.handle)}isCcdEnabled(){return this.rawSet.rbIsCcdEnabled(this.handle)}numColliders(){return this.rawSet.rbNumColliders(this.handle)}collider(e){return this.colliderSet.get(this.rawSet.rbCollider(this.handle,e))}setEnabled(e){this.rawSet.rbSetEnabled(this.handle,e)}isEnabled(){return this.rawSet.rbIsEnabled(this.handle)}bodyType(){return this.rawSet.rbBodyType(this.handle)}setBodyType(e,t){return this.rawSet.rbSetBodyType(this.handle,e,t)}isSleeping(){return this.rawSet.rbIsSleeping(this.handle)}isMoving(){return this.rawSet.rbIsMoving(this.handle)}isFixed(){return this.rawSet.rbIsFixed(this.handle)}isKinematic(){return this.rawSet.rbIsKinematic(this.handle)}isDynamic(){return this.rawSet.rbIsDynamic(this.handle)}linearDamping(){return this.rawSet.rbLinearDamping(this.handle)}angularDamping(){return this.rawSet.rbAngularDamping(this.handle)}setLinearDamping(e){this.rawSet.rbSetLinearDamping(this.handle,e)}recomputeMassPropertiesFromColliders(){this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle,this.colliderSet.raw)}setAdditionalMass(e,t){this.rawSet.rbSetAdditionalMass(this.handle,e,t)}setAdditionalMassProperties(e,t,i,r,n){let a=I.intoRaw(t),o=I.intoRaw(i),l=Pe.intoRaw(r);this.rawSet.rbSetAdditionalMassProperties(this.handle,e,a,o,l,n),a.free(),o.free(),l.free()}setAngularDamping(e){this.rawSet.rbSetAngularDamping(this.handle,e)}resetForces(e){this.rawSet.rbResetForces(this.handle,e)}resetTorques(e){this.rawSet.rbResetTorques(this.handle,e)}addForce(e,t){const i=I.intoRaw(e);this.rawSet.rbAddForce(this.handle,i,t),i.free()}applyImpulse(e,t){const i=I.intoRaw(e);this.rawSet.rbApplyImpulse(this.handle,i,t),i.free()}addTorque(e,t){const i=I.intoRaw(e);this.rawSet.rbAddTorque(this.handle,i,t),i.free()}applyTorqueImpulse(e,t){const i=I.intoRaw(e);this.rawSet.rbApplyTorqueImpulse(this.handle,i,t),i.free()}addForceAtPoint(e,t,i){const r=I.intoRaw(e),n=I.intoRaw(t);this.rawSet.rbAddForceAtPoint(this.handle,r,n,i),r.free(),n.free()}applyImpulseAtPoint(e,t,i){const r=I.intoRaw(e),n=I.intoRaw(t);this.rawSet.rbApplyImpulseAtPoint(this.handle,r,n,i),r.free(),n.free()}}class vi{constructor(e){this.enabled=!0,this.status=e,this.translation=I.zeros(),this.rotation=Pe.identity(),this.gravityScale=1,this.linvel=I.zeros(),this.mass=0,this.massOnly=!1,this.centerOfMass=I.zeros(),this.translationsEnabledX=!0,this.translationsEnabledY=!0,this.angvel=I.zeros(),this.principalAngularInertia=I.zeros(),this.angularInertiaLocalFrame=Pe.identity(),this.translationsEnabledZ=!0,this.rotationsEnabledX=!0,this.rotationsEnabledY=!0,this.rotationsEnabledZ=!0,this.linearDamping=0,this.angularDamping=0,this.canSleep=!0,this.sleeping=!1,this.ccdEnabled=!1,this.dominanceGroup=0,this.additionalSolverIterations=0}static dynamic(){return new vi(hi.Dynamic)}static kinematicPositionBased(){return new vi(hi.KinematicPositionBased)}static kinematicVelocityBased(){return new vi(hi.KinematicVelocityBased)}static fixed(){return new vi(hi.Fixed)}static newDynamic(){return new vi(hi.Dynamic)}static newKinematicPositionBased(){return new vi(hi.KinematicPositionBased)}static newKinematicVelocityBased(){return new vi(hi.KinematicVelocityBased)}static newStatic(){return new vi(hi.Fixed)}setDominanceGroup(e){return this.dominanceGroup=e,this}setAdditionalSolverIterations(e){return this.additionalSolverIterations=e,this}setEnabled(e){return this.enabled=e,this}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return Pe.copy(this.rotation,e),this}setGravityScale(e){return this.gravityScale=e,this}setAdditionalMass(e){return this.mass=e,this.massOnly=!0,this}setLinvel(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The linvel components must be numbers.");return this.linvel={x:e,y:t,z:i},this}setAngvel(e){return I.copy(this.angvel,e),this}setAdditionalMassProperties(e,t,i,r){return this.mass=e,I.copy(this.centerOfMass,t),I.copy(this.principalAngularInertia,i),Pe.copy(this.angularInertiaLocalFrame,r),this.massOnly=!1,this}enabledTranslations(e,t,i){return this.translationsEnabledX=e,this.translationsEnabledY=t,this.translationsEnabledZ=i,this}restrictTranslations(e,t,i){return this.enabledTranslations(e,t,i)}lockTranslations(){return this.enabledTranslations(!1,!1,!1)}enabledRotations(e,t,i){return this.rotationsEnabledX=e,this.rotationsEnabledY=t,this.rotationsEnabledZ=i,this}restrictRotations(e,t,i){return this.enabledRotations(e,t,i)}lockRotations(){return this.restrictRotations(!1,!1,!1)}setLinearDamping(e){return this.linearDamping=e,this}setAngularDamping(e){return this.angularDamping=e,this}setCanSleep(e){return this.canSleep=e,this}setSleeping(e){return this.sleeping=e,this}setCcdEnabled(e){return this.ccdEnabled=e,this}setUserData(e){return this.userData=e,this}}class aa{constructor(){this.fconv=new Float64Array(1),this.uconv=new Uint32Array(this.fconv.buffer),this.data=new Array,this.size=0}set(e,t){let i=this.index(e);for(;this.data.length<=i;)this.data.push(null);this.data[i]==null&&(this.size+=1),this.data[i]=t}len(){return this.size}delete(e){let t=this.index(e);t<this.data.length&&(this.data[t]!=null&&(this.size-=1),this.data[t]=null)}clear(){this.data=new Array}get(e){let t=this.index(e);return t<this.data.length?this.data[t]:null}forEach(e){for(const t of this.data)t!=null&&e(t)}getAll(){return this.data.filter(e=>e!=null)}index(e){return this.fconv[0]=e,this.uconv[0]}}class pu{constructor(e){this.raw=e||new at,this.map=new aa,e&&e.forEachRigidBodyHandle(t=>{this.map.set(t,new Jo(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createRigidBody(e,t){let i=I.intoRaw(t.translation),r=Pe.intoRaw(t.rotation),n=I.intoRaw(t.linvel),a=I.intoRaw(t.centerOfMass),o=I.intoRaw(t.angvel),l=I.intoRaw(t.principalAngularInertia),c=Pe.intoRaw(t.angularInertiaLocalFrame),h=this.raw.createRigidBody(t.enabled,i,r,t.gravityScale,t.mass,t.massOnly,a,n,o,l,c,t.translationsEnabledX,t.translationsEnabledY,t.translationsEnabledZ,t.rotationsEnabledX,t.rotationsEnabledY,t.rotationsEnabledZ,t.linearDamping,t.angularDamping,t.status,t.canSleep,t.sleeping,t.ccdEnabled,t.dominanceGroup,t.additionalSolverIterations);i.free(),r.free(),n.free(),a.free(),o.free(),l.free(),c.free();const u=new Jo(this.raw,e,h);return u.userData=t.userData,this.map.set(h,u),u}remove(e,t,i,r,n){for(let a=0;a<this.raw.rbNumColliders(e);a+=1)i.unmap(this.raw.rbCollider(e,a));r.forEachJointHandleAttachedToRigidBody(e,a=>r.unmap(a)),n.forEachJointHandleAttachedToRigidBody(e,a=>n.unmap(a)),this.raw.remove(e,t.raw,i.raw,r.raw,n.raw),this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachActiveRigidBody(e,t){e.forEachActiveRigidBodyHandle(i=>{t(this.get(i))})}getAll(){return this.map.getAll()}}class mu{constructor(e){this.raw=e||new yr}free(){this.raw&&this.raw.free(),this.raw=void 0}get dt(){return this.raw.dt}get erp(){return this.raw.erp}get allowedLinearError(){return this.raw.allowedLinearError}get predictionDistance(){return this.raw.predictionDistance}get numSolverIterations(){return this.raw.numSolverIterations}get numAdditionalFrictionIterations(){return this.raw.numAdditionalFrictionIterations}get numInternalPgsIterations(){return this.raw.numInternalPgsIterations}get minIslandSize(){return this.raw.minIslandSize}get maxCcdSubsteps(){return this.raw.maxCcdSubsteps}set dt(e){this.raw.dt=e}set erp(e){this.raw.erp=e}set allowedLinearError(e){this.raw.allowedLinearError=e}set predictionDistance(e){this.raw.predictionDistance=e}set numSolverIterations(e){this.raw.numSolverIterations=e}set numAdditionalFrictionIterations(e){this.raw.numAdditionalFrictionIterations=e}set numInternalPgsIterations(e){this.raw.numInternalPgsIterations=e}set minIslandSize(e){this.raw.minIslandSize=e}set maxCcdSubsteps(e){this.raw.maxCcdSubsteps=e}switchToStandardPgsSolver(){this.raw.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.raw.switchToSmallStepsPgsSolver()}}var Lt;(function(s){s[s.Revolute=0]="Revolute",s[s.Fixed=1]="Fixed",s[s.Prismatic=2]="Prismatic",s[s.Rope=3]="Rope",s[s.Spring=4]="Spring",s[s.Spherical=5]="Spherical",s[s.Generic=6]="Generic"})(Lt||(Lt={}));var $o;(function(s){s[s.AccelerationBased=0]="AccelerationBased",s[s.ForceBased=1]="ForceBased"})($o||($o={}));var Zo;(function(s){s[s.X=1]="X",s[s.Y=2]="Y",s[s.Z=4]="Z",s[s.AngX=8]="AngX",s[s.AngY=16]="AngY",s[s.AngZ=32]="AngZ"})(Zo||(Zo={}));class ui{constructor(e,t,i){this.rawSet=e,this.bodySet=t,this.handle=i}static newTyped(e,t,i){switch(e.jointType(i)){case ci.Revolute:return new vu(e,t,i);case ci.Prismatic:return new wu(e,t,i);case ci.Fixed:return new fu(e,t,i);case ci.Spring:return new gu(e,t,i);case ci.Rope:return new _u(e,t,i);case ci.Spherical:return new yu(e,t,i);case ci.Generic:return new bu(e,t,i);default:return new ui(e,t,i)}}finalizeDeserialization(e){this.bodySet=e}isValid(){return this.rawSet.contains(this.handle)}body1(){return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle))}body2(){return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle))}type(){return this.rawSet.jointType(this.handle)}frameX1(){return Pe.fromRaw(this.rawSet.jointFrameX1(this.handle))}frameX2(){return Pe.fromRaw(this.rawSet.jointFrameX2(this.handle))}anchor1(){return I.fromRaw(this.rawSet.jointAnchor1(this.handle))}anchor2(){return I.fromRaw(this.rawSet.jointAnchor2(this.handle))}setAnchor1(e){const t=I.intoRaw(e);this.rawSet.jointSetAnchor1(this.handle,t),t.free()}setAnchor2(e){const t=I.intoRaw(e);this.rawSet.jointSetAnchor2(this.handle,t),t.free()}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Ko extends ui{limitsEnabled(){return this.rawSet.jointLimitsEnabled(this.handle,this.rawAxis())}limitsMin(){return this.rawSet.jointLimitsMin(this.handle,this.rawAxis())}limitsMax(){return this.rawSet.jointLimitsMax(this.handle,this.rawAxis())}setLimits(e,t){this.rawSet.jointSetLimits(this.handle,this.rawAxis(),e,t)}configureMotorModel(e){this.rawSet.jointConfigureMotorModel(this.handle,this.rawAxis(),e)}configureMotorVelocity(e,t){this.rawSet.jointConfigureMotorVelocity(this.handle,this.rawAxis(),e,t)}configureMotorPosition(e,t,i){this.rawSet.jointConfigureMotorPosition(this.handle,this.rawAxis(),e,t,i)}configureMotor(e,t,i,r){this.rawSet.jointConfigureMotor(this.handle,this.rawAxis(),e,t,i,r)}}class fu extends ui{}class _u extends ui{}class gu extends ui{}class wu extends Ko{rawAxis(){return Qs.X}}class vu extends Ko{rawAxis(){return Qs.AngX}}class bu extends ui{}class yu extends ui{}class Di{constructor(){}static fixed(e,t,i,r){let n=new Di;return n.anchor1=e,n.anchor2=i,n.frame1=t,n.frame2=r,n.jointType=Lt.Fixed,n}static spring(e,t,i,r,n){let a=new Di;return a.anchor1=r,a.anchor2=n,a.length=e,a.stiffness=t,a.damping=i,a.jointType=Lt.Spring,a}static rope(e,t,i){let r=new Di;return r.anchor1=t,r.anchor2=i,r.length=e,r.jointType=Lt.Rope,r}static generic(e,t,i,r){let n=new Di;return n.anchor1=e,n.anchor2=t,n.axis=i,n.axesMask=r,n.jointType=Lt.Generic,n}static spherical(e,t){let i=new Di;return i.anchor1=e,i.anchor2=t,i.jointType=Lt.Spherical,i}static prismatic(e,t,i){let r=new Di;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=Lt.Prismatic,r}static revolute(e,t,i){let r=new Di;return r.anchor1=e,r.anchor2=t,r.axis=i,r.jointType=Lt.Revolute,r}intoRaw(){let e=I.intoRaw(this.anchor1),t=I.intoRaw(this.anchor2),i,r,n=!1,a=0,o=0;switch(this.jointType){case Lt.Fixed:let l=Pe.intoRaw(this.frame1),c=Pe.intoRaw(this.frame2);r=St.fixed(e,l,t,c),l.free(),c.free();break;case Lt.Spring:r=St.spring(this.length,this.stiffness,this.damping,e,t);break;case Lt.Rope:r=St.rope(this.length,e,t);break;case Lt.Prismatic:i=I.intoRaw(this.axis),this.limitsEnabled&&(n=!0,a=this.limits[0],o=this.limits[1]),r=St.prismatic(e,t,i,n,a,o),i.free();break;case Lt.Generic:i=I.intoRaw(this.axis);let h=this.axesMask;r=St.generic(e,t,i,h);break;case Lt.Spherical:r=St.spherical(e,t);break;case Lt.Revolute:i=I.intoRaw(this.axis),r=St.revolute(e,t,i),i.free();break}return e.free(),t.free(),r}}class xu{constructor(e){this.raw=e||new Li,this.map=new aa,e&&e.forEachJointHandle(t=>{this.map.set(t,ui.newTyped(e,null,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createJoint(e,t,i,r,n){const a=t.intoRaw(),o=this.raw.createJoint(a,i,r,n);a.free();let l=ui.newTyped(this.raw,e,o);return this.map.set(o,l),l}remove(e,t){this.raw.remove(e,t),this.unmap(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}class Zi{constructor(e,t){this.rawSet=e,this.handle=t}static newTyped(e,t){switch(e.jointType(t)){case ci.Revolute:return new Eu(e,t);case ci.Prismatic:return new Mu(e,t);case ci.Fixed:return new Su(e,t);case ci.Spherical:return new Tu(e,t);default:return new Zi(e,t)}}isValid(){return this.rawSet.contains(this.handle)}setContactsEnabled(e){this.rawSet.jointSetContactsEnabled(this.handle,e)}contactsEnabled(){return this.rawSet.jointContactsEnabled(this.handle)}}class Qo extends Zi{}class Su extends Zi{}class Mu extends Qo{rawAxis(){return Qs.X}}class Eu extends Qo{rawAxis(){return Qs.AngX}}class Tu extends Zi{}class Au{constructor(e){this.raw=e||new Ii,this.map=new aa,e&&e.forEachJointHandle(t=>{this.map.set(t,Zi.newTyped(this.raw,t))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}createJoint(e,t,i,r){const n=e.intoRaw(),a=this.raw.createJoint(n,t,i,r);n.free();let o=Zi.newTyped(this.raw,a);return this.map.set(a,o),o}remove(e,t){this.raw.remove(e,t),this.map.delete(e)}unmap(e){this.map.delete(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}get(e){return this.map.get(e)}forEach(e){this.map.forEach(e)}forEachJointHandleAttachedToRigidBody(e,t){this.raw.forEachJointAttachedToRigidBody(e,t)}getAll(){return this.map.getAll()}}var Xn;(function(s){s[s.Average=0]="Average",s[s.Min=1]="Min",s[s.Multiply=2]="Multiply",s[s.Max=3]="Max"})(Xn||(Xn={}));class Cu{constructor(e){this.raw=e||new Bo}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Ru{constructor(e){this.raw=e||new Pi}free(){this.raw&&this.raw.free(),this.raw=void 0}forEachActiveRigidBodyHandle(e){this.raw.forEachActiveRigidBodyHandle(e)}}class Lu{constructor(e){this.raw=e||new br}free(){this.raw&&this.raw.free(),this.raw=void 0}}class Pu{constructor(e){this.raw=e||new $i,this.tempManifold=new Iu(null)}free(){this.raw&&this.raw.free(),this.raw=void 0}contactPairsWith(e,t){this.raw.contact_pairs_with(e,t)}intersectionPairsWith(e,t){this.raw.intersection_pairs_with(e,t)}contactPair(e,t,i){const r=this.raw.contact_pair(e,t);if(r){const n=r.collider1()!=e;let a;for(a=0;a<r.numContactManifolds();++a)this.tempManifold.raw=r.contactManifold(a),this.tempManifold.raw&&i(this.tempManifold,n),this.tempManifold.free();r.free()}}intersectionPair(e,t){return this.raw.intersection_pair(e,t)}}class Iu{constructor(e){this.raw=e}free(){this.raw&&this.raw.free(),this.raw=void 0}normal(){return I.fromRaw(this.raw.normal())}localNormal1(){return I.fromRaw(this.raw.local_n1())}localNormal2(){return I.fromRaw(this.raw.local_n2())}subshape1(){return this.raw.subshape1()}subshape2(){return this.raw.subshape2()}numContacts(){return this.raw.num_contacts()}localContactPoint1(e){return I.fromRaw(this.raw.contact_local_p1(e))}localContactPoint2(e){return I.fromRaw(this.raw.contact_local_p2(e))}contactDist(e){return this.raw.contact_dist(e)}contactFid1(e){return this.raw.contact_fid1(e)}contactFid2(e){return this.raw.contact_fid2(e)}contactImpulse(e){return this.raw.contact_impulse(e)}contactTangentImpulseX(e){return this.raw.contact_tangent_impulse_x(e)}contactTangentImpulseY(e){return this.raw.contact_tangent_impulse_y(e)}numSolverContacts(){return this.raw.num_solver_contacts()}solverContactPoint(e){return I.fromRaw(this.raw.solver_contact_point(e))}solverContactDist(e){return this.raw.solver_contact_dist(e)}solverContactFriction(e){return this.raw.solver_contact_friction(e)}solverContactRestitution(e){return this.raw.solver_contact_restitution(e)}solverContactTangentVelocity(e){return I.fromRaw(this.raw.solver_contact_tangent_velocity(e))}}class cn{constructor(e,t,i,r,n){this.distance=e,this.point1=t,this.point2=i,this.normal1=r,this.normal2=n}static fromRaw(e){if(!e)return null;const t=new cn(e.distance(),I.fromRaw(e.point1()),I.fromRaw(e.point2()),I.fromRaw(e.normal1()),I.fromRaw(e.normal2()));return e.free(),t}}var hn;(function(s){s[s.Vertex=0]="Vertex",s[s.Edge=1]="Edge",s[s.Face=2]="Face",s[s.Unknown=3]="Unknown"})(hn||(hn={}));class qn{constructor(e,t){this.point=e,this.isInside=t}static fromRaw(e){if(!e)return null;const t=new qn(I.fromRaw(e.point()),e.isInside());return e.free(),t}}class Yn{constructor(e,t,i,r,n){this.featureType=hn.Unknown,this.featureId=void 0,this.collider=e,this.point=t,this.isInside=i,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new Yn(e.get(t.colliderHandle()),I.fromRaw(t.point()),t.isInside(),t.featureType(),t.featureId());return t.free(),i}}class _b{constructor(e,t){this.origin=e,this.dir=t}pointAt(e){return{x:this.origin.x+this.dir.x*e,y:this.origin.y+this.dir.y*e,z:this.origin.z+this.dir.z*e}}}class Jn{constructor(e,t,i,r){this.featureType=hn.Unknown,this.featureId=void 0,this.toi=e,this.normal=t,r!==void 0&&(this.featureId=r),i!==void 0&&(this.featureType=i)}static fromRaw(e){if(!e)return null;const t=new Jn(e.toi(),I.fromRaw(e.normal()),e.featureType(),e.featureId());return e.free(),t}}class $n{constructor(e,t,i,r,n){this.featureType=hn.Unknown,this.featureId=void 0,this.collider=e,this.toi=t,this.normal=i,n!==void 0&&(this.featureId=n),r!==void 0&&(this.featureType=r)}static fromRaw(e,t){if(!t)return null;const i=new $n(e.get(t.colliderHandle()),t.toi(),I.fromRaw(t.normal()),t.featureType(),t.featureId());return t.free(),i}}class oa{constructor(e,t){this.collider=e,this.toi=t}static fromRaw(e,t){if(!t)return null;const i=new oa(e.get(t.colliderHandle()),t.toi());return t.free(),i}}class un{constructor(e,t,i,r,n){this.toi=e,this.witness1=t,this.witness2=i,this.normal1=r,this.normal2=n}static fromRaw(e,t){if(!t)return null;const i=new un(t.toi(),I.fromRaw(t.witness1()),I.fromRaw(t.witness2()),I.fromRaw(t.normal1()),I.fromRaw(t.normal2()));return t.free(),i}}class Zn extends un{constructor(e,t,i,r,n,a){super(t,i,r,n,a),this.collider=e}static fromRaw(e,t){if(!t)return null;const i=new Zn(e.get(t.colliderHandle()),t.toi(),I.fromRaw(t.witness1()),I.fromRaw(t.witness2()),I.fromRaw(t.normal1()),I.fromRaw(t.normal2()));return t.free(),i}}class _t{static fromRaw(e,t){const i=e.coShapeType(t);let r,n,a,o,l,c,h;switch(i){case Rt.Ball:return new el(e.coRadius(t));case Rt.Cuboid:return r=e.coHalfExtents(t),new tl(r.x,r.y,r.z);case Rt.RoundCuboid:return r=e.coHalfExtents(t),n=e.coRoundRadius(t),new il(r.x,r.y,r.z,n);case Rt.Capsule:return l=e.coHalfHeight(t),c=e.coRadius(t),new rl(l,c);case Rt.Segment:return a=e.coVertices(t),new nl(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]));case Rt.Polyline:return a=e.coVertices(t),o=e.coIndices(t),new ol(a,o);case Rt.Triangle:return a=e.coVertices(t),new sl(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]),I.new(a[6],a[7],a[8]));case Rt.RoundTriangle:return a=e.coVertices(t),n=e.coRoundRadius(t),new al(I.new(a[0],a[1],a[2]),I.new(a[3],a[4],a[5]),I.new(a[6],a[7],a[8]),n);case Rt.HalfSpace:return h=I.fromRaw(e.coHalfspaceNormal(t)),new Du(h);case Rt.TriMesh:return a=e.coVertices(t),o=e.coIndices(t),new ll(a,o);case Rt.HeightField:const u=e.coHeightfieldScale(t),d=e.coHeightfieldHeights(t),f=e.coHeightfieldNRows(t),w=e.coHeightfieldNCols(t);return new cl(f,w,d,u);case Rt.ConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),new la(a,o);case Rt.RoundConvexPolyhedron:return a=e.coVertices(t),o=e.coIndices(t),n=e.coRoundRadius(t),new ca(a,o,n);case Rt.Cylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),new hl(l,c);case Rt.RoundCylinder:return l=e.coHalfHeight(t),c=e.coRadius(t),n=e.coRoundRadius(t),new ul(l,c,n);case Rt.Cone:return l=e.coHalfHeight(t),c=e.coRadius(t),new dl(l,c);case Rt.RoundCone:return l=e.coHalfHeight(t),c=e.coRadius(t),n=e.coRoundRadius(t),new pl(l,c,n);default:throw new Error("unknown shape type: "+i)}}castShape(e,t,i,r,n,a,o,l,c){let h=I.intoRaw(e),u=Pe.intoRaw(t),d=I.intoRaw(i),f=I.intoRaw(n),w=Pe.intoRaw(a),_=I.intoRaw(o),m=this.intoRaw(),g=r.intoRaw(),y=un.fromRaw(null,m.castShape(h,u,d,g,f,w,_,l,c));return h.free(),u.free(),d.free(),f.free(),w.free(),_.free(),m.free(),g.free(),y}intersectsShape(e,t,i,r,n){let a=I.intoRaw(e),o=Pe.intoRaw(t),l=I.intoRaw(r),c=Pe.intoRaw(n),h=this.intoRaw(),u=i.intoRaw(),d=h.intersectsShape(a,o,u,l,c);return a.free(),o.free(),l.free(),c.free(),h.free(),u.free(),d}contactShape(e,t,i,r,n,a){let o=I.intoRaw(e),l=Pe.intoRaw(t),c=I.intoRaw(r),h=Pe.intoRaw(n),u=this.intoRaw(),d=i.intoRaw(),f=cn.fromRaw(u.contactShape(o,l,d,c,h,a));return o.free(),l.free(),c.free(),h.free(),u.free(),d.free(),f}containsPoint(e,t,i){let r=I.intoRaw(e),n=Pe.intoRaw(t),a=I.intoRaw(i),o=this.intoRaw(),l=o.containsPoint(r,n,a);return r.free(),n.free(),a.free(),o.free(),l}projectPoint(e,t,i,r){let n=I.intoRaw(e),a=Pe.intoRaw(t),o=I.intoRaw(i),l=this.intoRaw(),c=qn.fromRaw(l.projectPoint(n,a,o,r));return n.free(),a.free(),o.free(),l.free(),c}intersectsRay(e,t,i,r){let n=I.intoRaw(t),a=Pe.intoRaw(i),o=I.intoRaw(e.origin),l=I.intoRaw(e.dir),c=this.intoRaw(),h=c.intersectsRay(n,a,o,l,r);return n.free(),a.free(),o.free(),l.free(),c.free(),h}castRay(e,t,i,r,n){let a=I.intoRaw(t),o=Pe.intoRaw(i),l=I.intoRaw(e.origin),c=I.intoRaw(e.dir),h=this.intoRaw(),u=h.castRay(a,o,l,c,r,n);return a.free(),o.free(),l.free(),c.free(),h.free(),u}castRayAndGetNormal(e,t,i,r,n){let a=I.intoRaw(t),o=Pe.intoRaw(i),l=I.intoRaw(e.origin),c=I.intoRaw(e.dir),h=this.intoRaw(),u=Jn.fromRaw(h.castRayAndGetNormal(a,o,l,c,r,n));return a.free(),o.free(),l.free(),c.free(),h.free(),u}}var ht;(function(s){s[s.Ball=0]="Ball",s[s.Cuboid=1]="Cuboid",s[s.Capsule=2]="Capsule",s[s.Segment=3]="Segment",s[s.Polyline=4]="Polyline",s[s.Triangle=5]="Triangle",s[s.TriMesh=6]="TriMesh",s[s.HeightField=7]="HeightField",s[s.ConvexPolyhedron=9]="ConvexPolyhedron",s[s.Cylinder=10]="Cylinder",s[s.Cone=11]="Cone",s[s.RoundCuboid=12]="RoundCuboid",s[s.RoundTriangle=13]="RoundTriangle",s[s.RoundCylinder=14]="RoundCylinder",s[s.RoundCone=15]="RoundCone",s[s.RoundConvexPolyhedron=16]="RoundConvexPolyhedron",s[s.HalfSpace=17]="HalfSpace"})(ht||(ht={}));class el extends _t{constructor(e){super(),this.type=ht.Ball,this.radius=e}intoRaw(){return xe.ball(this.radius)}}class Du extends _t{constructor(e){super(),this.type=ht.HalfSpace,this.normal=e}intoRaw(){let e=I.intoRaw(this.normal),t=xe.halfspace(e);return e.free(),t}}class tl extends _t{constructor(e,t,i){super(),this.type=ht.Cuboid,this.halfExtents=I.new(e,t,i)}intoRaw(){return xe.cuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z)}}class il extends _t{constructor(e,t,i,r){super(),this.type=ht.RoundCuboid,this.halfExtents=I.new(e,t,i),this.borderRadius=r}intoRaw(){return xe.roundCuboid(this.halfExtents.x,this.halfExtents.y,this.halfExtents.z,this.borderRadius)}}class rl extends _t{constructor(e,t){super(),this.type=ht.Capsule,this.halfHeight=e,this.radius=t}intoRaw(){return xe.capsule(this.halfHeight,this.radius)}}class nl extends _t{constructor(e,t){super(),this.type=ht.Segment,this.a=e,this.b=t}intoRaw(){let e=I.intoRaw(this.a),t=I.intoRaw(this.b),i=xe.segment(e,t);return e.free(),t.free(),i}}class sl extends _t{constructor(e,t,i){super(),this.type=ht.Triangle,this.a=e,this.b=t,this.c=i}intoRaw(){let e=I.intoRaw(this.a),t=I.intoRaw(this.b),i=I.intoRaw(this.c),r=xe.triangle(e,t,i);return e.free(),t.free(),i.free(),r}}class al extends _t{constructor(e,t,i,r){super(),this.type=ht.RoundTriangle,this.a=e,this.b=t,this.c=i,this.borderRadius=r}intoRaw(){let e=I.intoRaw(this.a),t=I.intoRaw(this.b),i=I.intoRaw(this.c),r=xe.roundTriangle(e,t,i,this.borderRadius);return e.free(),t.free(),i.free(),r}}class ol extends _t{constructor(e,t){super(),this.type=ht.Polyline,this.vertices=e,this.indices=t??new Uint32Array(0)}intoRaw(){return xe.polyline(this.vertices,this.indices)}}class ll extends _t{constructor(e,t){super(),this.type=ht.TriMesh,this.vertices=e,this.indices=t}intoRaw(){return xe.trimesh(this.vertices,this.indices)}}class la extends _t{constructor(e,t){super(),this.type=ht.ConvexPolyhedron,this.vertices=e,this.indices=t}intoRaw(){return this.indices?xe.convexMesh(this.vertices,this.indices):xe.convexHull(this.vertices)}}class ca extends _t{constructor(e,t,i){super(),this.type=ht.RoundConvexPolyhedron,this.vertices=e,this.indices=t,this.borderRadius=i}intoRaw(){return this.indices?xe.roundConvexMesh(this.vertices,this.indices,this.borderRadius):xe.roundConvexHull(this.vertices,this.borderRadius)}}class cl extends _t{constructor(e,t,i,r){super(),this.type=ht.HeightField,this.nrows=e,this.ncols=t,this.heights=i,this.scale=r}intoRaw(){let e=I.intoRaw(this.scale),t=xe.heightfield(this.nrows,this.ncols,this.heights,e);return e.free(),t}}class hl extends _t{constructor(e,t){super(),this.type=ht.Cylinder,this.halfHeight=e,this.radius=t}intoRaw(){return xe.cylinder(this.halfHeight,this.radius)}}class ul extends _t{constructor(e,t,i){super(),this.type=ht.RoundCylinder,this.borderRadius=i,this.halfHeight=e,this.radius=t}intoRaw(){return xe.roundCylinder(this.halfHeight,this.radius,this.borderRadius)}}class dl extends _t{constructor(e,t){super(),this.type=ht.Cone,this.halfHeight=e,this.radius=t}intoRaw(){return xe.cone(this.halfHeight,this.radius)}}class pl extends _t{constructor(e,t,i){super(),this.type=ht.RoundCone,this.halfHeight=e,this.radius=t,this.borderRadius=i}intoRaw(){return xe.roundCone(this.halfHeight,this.radius,this.borderRadius)}}class Nu{constructor(e){this.raw=e||new mb}free(){this.raw&&this.raw.free(),this.raw=void 0}step(e,t,i,r,n,a,o,l,c,h,u,d){let f=I.intoRaw(e);u?this.raw.stepWithEvents(f,t.raw,i.raw,r.raw,n.raw,a.raw,o.raw,l.raw,c.raw,h.raw,u.raw,d,d?d.filterContactPair:null,d?d.filterIntersectionPair:null):this.raw.step(f,t.raw,i.raw,r.raw,n.raw,a.raw,o.raw,l.raw,c.raw,h.raw),f.free()}}var ml;(function(s){s[s.EXCLUDE_FIXED=1]="EXCLUDE_FIXED",s[s.EXCLUDE_KINEMATIC=2]="EXCLUDE_KINEMATIC",s[s.EXCLUDE_DYNAMIC=4]="EXCLUDE_DYNAMIC",s[s.EXCLUDE_SENSORS=8]="EXCLUDE_SENSORS",s[s.EXCLUDE_SOLIDS=16]="EXCLUDE_SOLIDS",s[s.ONLY_DYNAMIC=3]="ONLY_DYNAMIC",s[s.ONLY_KINEMATIC=5]="ONLY_KINEMATIC",s[s.ONLY_FIXED=6]="ONLY_FIXED"})(ml||(ml={}));class Ou{constructor(e){this.raw=e||new Wo}free(){this.raw&&this.raw.free(),this.raw=void 0}update(e,t){this.raw.update(e.raw,t.raw)}castRay(e,t,i,r,n,a,o,l,c,h){let u=I.intoRaw(i.origin),d=I.intoRaw(i.dir),f=oa.fromRaw(t,this.raw.castRay(e.raw,t.raw,u,d,r,n,a,o,l,c,h));return u.free(),d.free(),f}castRayAndGetNormal(e,t,i,r,n,a,o,l,c,h){let u=I.intoRaw(i.origin),d=I.intoRaw(i.dir),f=$n.fromRaw(t,this.raw.castRayAndGetNormal(e.raw,t.raw,u,d,r,n,a,o,l,c,h));return u.free(),d.free(),f}intersectionsWithRay(e,t,i,r,n,a,o,l,c,h,u){let d=I.intoRaw(i.origin),f=I.intoRaw(i.dir),w=_=>a($n.fromRaw(t,_));this.raw.intersectionsWithRay(e.raw,t.raw,d,f,r,n,w,o,l,c,h,u),d.free(),f.free()}intersectionWithShape(e,t,i,r,n,a,o,l,c,h){let u=I.intoRaw(i),d=Pe.intoRaw(r),f=n.intoRaw(),w=this.raw.intersectionWithShape(e.raw,t.raw,u,d,f,a,o,l,c,h);return u.free(),d.free(),f.free(),w}projectPoint(e,t,i,r,n,a,o,l,c){let h=I.intoRaw(i),u=Yn.fromRaw(t,this.raw.projectPoint(e.raw,t.raw,h,r,n,a,o,l,c));return h.free(),u}projectPointAndGetFeature(e,t,i,r,n,a,o,l){let c=I.intoRaw(i),h=Yn.fromRaw(t,this.raw.projectPointAndGetFeature(e.raw,t.raw,c,r,n,a,o,l));return c.free(),h}intersectionsWithPoint(e,t,i,r,n,a,o,l,c){let h=I.intoRaw(i);this.raw.intersectionsWithPoint(e.raw,t.raw,h,r,n,a,o,l,c),h.free()}castShape(e,t,i,r,n,a,o,l,c,h,u,d,f){let w=I.intoRaw(i),_=Pe.intoRaw(r),m=I.intoRaw(n),g=a.intoRaw(),y=Zn.fromRaw(t,this.raw.castShape(e.raw,t.raw,w,_,m,g,o,l,c,h,u,d,f));return w.free(),_.free(),m.free(),g.free(),y}intersectionsWithShape(e,t,i,r,n,a,o,l,c,h,u){let d=I.intoRaw(i),f=Pe.intoRaw(r),w=n.intoRaw();this.raw.intersectionsWithShape(e.raw,t.raw,d,f,w,a,o,l,c,h,u),d.free(),f.free(),w.free()}collidersWithAabbIntersectingAabb(e,t,i){let r=I.intoRaw(e),n=I.intoRaw(t);this.raw.collidersWithAabbIntersectingAabb(r,n,i),r.free(),n.free()}}class fl{constructor(e){this.raw=e||new fb}free(){this.raw&&this.raw.free(),this.raw=void 0}serializeAll(e,t,i,r,n,a,o,l,c){let h=I.intoRaw(e);const u=this.raw.serializeAll(h,t.raw,i.raw,r.raw,n.raw,a.raw,o.raw,l.raw,c.raw);return h.free(),u}deserializeAll(e){return Hu.fromRaw(this.raw.deserializeAll(e))}}class zu{constructor(e,t){this.vertices=e,this.colors=t}}class ku{constructor(e){this.raw=e||new ub}free(){this.raw&&this.raw.free(),this.raw=void 0,this.vertices=void 0,this.colors=void 0}render(e,t,i,r,n){this.raw.render(e.raw,t.raw,i.raw,r.raw,n.raw),this.vertices=this.raw.vertices(),this.colors=this.raw.colors()}}class Fu{}class Uu{constructor(e,t,i,r,n){this.params=t,this.bodies=i,this.colliders=r,this.queries=n,this.raw=new pb(e),this.rawCharacterCollision=new cu,this._applyImpulsesToDynamicBodies=!1,this._characterMass=null}free(){this.raw&&(this.raw.free(),this.rawCharacterCollision.free()),this.raw=void 0,this.rawCharacterCollision=void 0}up(){return this.raw.up()}setUp(e){let t=I.intoRaw(e);return this.raw.setUp(t)}applyImpulsesToDynamicBodies(){return this._applyImpulsesToDynamicBodies}setApplyImpulsesToDynamicBodies(e){this._applyImpulsesToDynamicBodies=e}characterMass(){return this._characterMass}setCharacterMass(e){this._characterMass=e}offset(){return this.raw.offset()}setOffset(e){this.raw.setOffset(e)}slideEnabled(){return this.raw.slideEnabled()}setSlideEnabled(e){this.raw.setSlideEnabled(e)}autostepMaxHeight(){return this.raw.autostepMaxHeight()}autostepMinWidth(){return this.raw.autostepMinWidth()}autostepIncludesDynamicBodies(){return this.raw.autostepIncludesDynamicBodies()}autostepEnabled(){return this.raw.autostepEnabled()}enableAutostep(e,t,i){this.raw.enableAutostep(e,t,i)}disableAutostep(){return this.raw.disableAutostep()}maxSlopeClimbAngle(){return this.raw.maxSlopeClimbAngle()}setMaxSlopeClimbAngle(e){this.raw.setMaxSlopeClimbAngle(e)}minSlopeSlideAngle(){return this.raw.minSlopeSlideAngle()}setMinSlopeSlideAngle(e){this.raw.setMinSlopeSlideAngle(e)}snapToGroundDistance(){return this.raw.snapToGroundDistance()}enableSnapToGround(e){this.raw.enableSnapToGround(e)}disableSnapToGround(){this.raw.disableSnapToGround()}snapToGroundEnabled(){return this.raw.snapToGroundEnabled()}computeColliderMovement(e,t,i,r,n){let a=I.intoRaw(t);this.raw.computeColliderMovement(this.params.dt,this.bodies.raw,this.colliders.raw,this.queries.raw,e.handle,a,this._applyImpulsesToDynamicBodies,this._characterMass,i,r,this.colliders.castClosure(n)),a.free()}computedMovement(){return I.fromRaw(this.raw.computedMovement())}computedGrounded(){return this.raw.computedGrounded()}numComputedCollisions(){return this.raw.numComputedCollisions()}computedCollision(e,t){if(this.raw.computedCollision(e,this.rawCharacterCollision)){let i=this.rawCharacterCollision;return t=t??new Fu,t.translationDeltaApplied=I.fromRaw(i.translationDeltaApplied()),t.translationDeltaRemaining=I.fromRaw(i.translationDeltaRemaining()),t.toi=i.toi(),t.witness1=I.fromRaw(i.worldWitness1()),t.witness2=I.fromRaw(i.worldWitness2()),t.normal1=I.fromRaw(i.worldNormal1()),t.normal2=I.fromRaw(i.worldNormal2()),t.collider=this.colliders.get(i.handle()),t}else return null}}class Bu{constructor(e,t,i,r){this.raw=new db(e.handle),this.bodies=t,this.colliders=i,this.queries=r,this._chassis=e}free(){this.raw&&this.raw.free(),this.raw=void 0}updateVehicle(e,t,i,r){this.raw.update_vehicle(e,this.bodies.raw,this.colliders.raw,this.queries.raw,t,i,this.colliders.castClosure(r))}currentVehicleSpeed(){return this.raw.current_vehicle_speed()}chassis(){return this._chassis}get indexUpAxis(){return this.raw.index_up_axis()}set indexUpAxis(e){this.raw.set_index_up_axis(e)}get indexForwardAxis(){return this.raw.index_forward_axis()}set setIndexForwardAxis(e){this.raw.set_index_forward_axis(e)}addWheel(e,t,i,r,n){let a=I.intoRaw(e),o=I.intoRaw(t),l=I.intoRaw(i);this.raw.add_wheel(a,o,l,r,n),a.free(),o.free(),l.free()}numWheels(){return this.raw.num_wheels()}wheelChassisConnectionPointCs(e){return I.fromRaw(this.raw.wheel_chassis_connection_point_cs(e))}setWheelChassisConnectionPointCs(e,t){let i=I.intoRaw(t);this.raw.set_wheel_chassis_connection_point_cs(e,i),i.free()}wheelSuspensionRestLength(e){return this.raw.wheel_suspension_rest_length(e)}setWheelSuspensionRestLength(e,t){this.raw.set_wheel_suspension_rest_length(e,t)}wheelMaxSuspensionTravel(e){return this.raw.wheel_max_suspension_travel(e)}setWheelMaxSuspensionTravel(e,t){this.raw.set_wheel_max_suspension_travel(e,t)}wheelRadius(e){return this.raw.wheel_radius(e)}setWheelRadius(e,t){this.raw.set_wheel_radius(e,t)}wheelSuspensionStiffness(e){return this.raw.wheel_suspension_stiffness(e)}setWheelSuspensionStiffness(e,t){this.raw.set_wheel_suspension_stiffness(e,t)}wheelSuspensionCompression(e){return this.raw.wheel_suspension_compression(e)}setWheelSuspensionCompression(e,t){this.raw.set_wheel_suspension_compression(e,t)}wheelSuspensionRelaxation(e){return this.raw.wheel_suspension_relaxation(e)}setWheelSuspensionRelaxation(e,t){this.raw.set_wheel_suspension_relaxation(e,t)}wheelMaxSuspensionForce(e){return this.raw.wheel_max_suspension_force(e)}setWheelMaxSuspensionForce(e,t){this.raw.set_wheel_max_suspension_force(e,t)}wheelBrake(e){return this.raw.wheel_brake(e)}setWheelBrake(e,t){this.raw.set_wheel_brake(e,t)}wheelSteering(e){return this.raw.wheel_steering(e)}setWheelSteering(e,t){this.raw.set_wheel_steering(e,t)}wheelEngineForce(e){return this.raw.wheel_engine_force(e)}setWheelEngineForce(e,t){this.raw.set_wheel_engine_force(e,t)}wheelDirectionCs(e){return I.fromRaw(this.raw.wheel_direction_cs(e))}setWheelDirectionCs(e,t){let i=I.intoRaw(t);this.raw.set_wheel_direction_cs(e,i),i.free()}wheelAxleCs(e){return I.fromRaw(this.raw.wheel_axle_cs(e))}setWheelAxleCs(e,t){let i=I.intoRaw(t);this.raw.set_wheel_axle_cs(e,i),i.free()}wheelFrictionSlip(e){return this.raw.wheel_friction_slip(e)}setWheelFrictionSlip(e,t){this.raw.set_wheel_friction_slip(e,t)}wheelSideFrictionStiffness(e){return this.raw.wheel_side_friction_stiffness(e)}setWheelSideFrictionStiffness(e,t){this.raw.set_wheel_side_friction_stiffness(e,t)}wheelRotation(e){return this.raw.wheel_rotation(e)}wheelForwardImpulse(e){return this.raw.wheel_forward_impulse(e)}wheelSideImpulse(e){return this.raw.wheel_side_impulse(e)}wheelSuspensionForce(e){return this.raw.wheel_suspension_force(e)}wheelContactNormal(e){return I.fromRaw(this.raw.wheel_contact_normal_ws(e))}wheelContactPoint(e){return I.fromRaw(this.raw.wheel_contact_point_ws(e))}wheelSuspensionLength(e){return this.raw.wheel_suspension_length(e)}wheelHardPoint(e){return I.fromRaw(this.raw.wheel_hard_point_ws(e))}wheelIsInContact(e){return this.raw.wheel_is_in_contact(e)}wheelGroundObject(e){return this.colliders.get(this.raw.wheel_ground_object(e))}}let Hu=class Zu{constructor(e,t,i,r,n,a,o,l,c,h,u,d,f,w){this.gravity=e,this.integrationParameters=new mu(t),this.islands=new Ru(i),this.broadPhase=new Lu(r),this.narrowPhase=new Pu(n),this.bodies=new pu(a),this.colliders=new Vu(o),this.impulseJoints=new xu(l),this.multibodyJoints=new Au(c),this.ccdSolver=new Cu(h),this.queryPipeline=new Ou(u),this.physicsPipeline=new Nu(d),this.serializationPipeline=new fl(f),this.debugRenderPipeline=new ku(w),this.characterControllers=new Set,this.vehicleControllers=new Set,this.impulseJoints.finalizeDeserialization(this.bodies),this.bodies.finalizeDeserialization(this.colliders),this.colliders.finalizeDeserialization(this.bodies)}free(){this.integrationParameters.free(),this.islands.free(),this.broadPhase.free(),this.narrowPhase.free(),this.bodies.free(),this.colliders.free(),this.impulseJoints.free(),this.multibodyJoints.free(),this.ccdSolver.free(),this.queryPipeline.free(),this.physicsPipeline.free(),this.serializationPipeline.free(),this.debugRenderPipeline.free(),this.characterControllers.forEach(e=>e.free()),this.vehicleControllers.forEach(e=>e.free()),this.integrationParameters=void 0,this.islands=void 0,this.broadPhase=void 0,this.narrowPhase=void 0,this.bodies=void 0,this.colliders=void 0,this.ccdSolver=void 0,this.impulseJoints=void 0,this.multibodyJoints=void 0,this.queryPipeline=void 0,this.physicsPipeline=void 0,this.serializationPipeline=void 0,this.debugRenderPipeline=void 0,this.characterControllers=void 0,this.vehicleControllers=void 0}static fromRaw(e){return e?new Zu(I.fromRaw(e.takeGravity()),e.takeIntegrationParameters(),e.takeIslandManager(),e.takeBroadPhase(),e.takeNarrowPhase(),e.takeBodies(),e.takeColliders(),e.takeImpulseJoints(),e.takeMultibodyJoints()):null}takeSnapshot(){return this.serializationPipeline.serializeAll(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints)}static restoreSnapshot(e){return new fl().deserializeAll(e)}debugRender(){return this.debugRenderPipeline.render(this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.narrowPhase),new zu(this.debugRenderPipeline.vertices,this.debugRenderPipeline.colors)}step(e,t){this.physicsPipeline.step(this.gravity,this.integrationParameters,this.islands,this.broadPhase,this.narrowPhase,this.bodies,this.colliders,this.impulseJoints,this.multibodyJoints,this.ccdSolver,e,t),this.queryPipeline.update(this.bodies,this.colliders)}propagateModifiedBodyPositionsToColliders(){this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw)}updateSceneQueries(){this.propagateModifiedBodyPositionsToColliders(),this.queryPipeline.update(this.bodies,this.colliders)}get timestep(){return this.integrationParameters.dt}set timestep(e){this.integrationParameters.dt=e}get numSolverIterations(){return this.integrationParameters.numSolverIterations}set numSolverIterations(e){this.integrationParameters.numSolverIterations=e}get numAdditionalFrictionIterations(){return this.integrationParameters.numAdditionalFrictionIterations}set numAdditionalFrictionIterations(e){this.integrationParameters.numAdditionalFrictionIterations=e}get numInternalPgsIterations(){return this.integrationParameters.numInternalPgsIterations}set numInternalPgsIterations(e){this.integrationParameters.numInternalPgsIterations=e}switchToStandardPgsSolver(){this.integrationParameters.switchToStandardPgsSolver()}switchToSmallStepsPgsSolver(){this.integrationParameters.switchToSmallStepsPgsSolver()}createRigidBody(e){return this.bodies.createRigidBody(this.colliders,e)}createCharacterController(e){let t=new Uu(e,this.integrationParameters,this.bodies,this.colliders,this.queryPipeline);return this.characterControllers.add(t),t}removeCharacterController(e){this.characterControllers.delete(e),e.free()}createVehicleController(e){let t=new Bu(e,this.bodies,this.colliders,this.queryPipeline);return this.vehicleControllers.add(t),t}removeVehicleController(e){this.vehicleControllers.delete(e),e.free()}createCollider(e,t){let i=t?t.handle:void 0;return this.colliders.createCollider(this.bodies,e,i)}createImpulseJoint(e,t,i,r){return this.impulseJoints.createJoint(this.bodies,e,t.handle,i.handle,r)}createMultibodyJoint(e,t,i,r){return this.multibodyJoints.createJoint(e,t.handle,i.handle,r)}getRigidBody(e){return this.bodies.get(e)}getCollider(e){return this.colliders.get(e)}getImpulseJoint(e){return this.impulseJoints.get(e)}getMultibodyJoint(e){return this.multibodyJoints.get(e)}removeRigidBody(e){this.bodies&&this.bodies.remove(e.handle,this.islands,this.colliders,this.impulseJoints,this.multibodyJoints)}removeCollider(e,t){this.colliders&&this.colliders.remove(e.handle,this.islands,this.bodies,t)}removeImpulseJoint(e,t){this.impulseJoints&&this.impulseJoints.remove(e.handle,t)}removeMultibodyJoint(e,t){this.impulseJoints&&this.multibodyJoints.remove(e.handle,t)}forEachCollider(e){this.colliders.forEach(e)}forEachRigidBody(e){this.bodies.forEach(e)}forEachActiveRigidBody(e){this.bodies.forEachActiveRigidBody(this.islands,e)}castRay(e,t,i,r,n,a,o,l){return this.queryPipeline.castRay(this.bodies,this.colliders,e,t,i,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}castRayAndGetNormal(e,t,i,r,n,a,o,l){return this.queryPipeline.castRayAndGetNormal(this.bodies,this.colliders,e,t,i,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l))}intersectionsWithRay(e,t,i,r,n,a,o,l,c){this.queryPipeline.intersectionsWithRay(this.bodies,this.colliders,e,t,i,r,n,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}intersectionWithShape(e,t,i,r,n,a,o,l){let c=this.queryPipeline.intersectionWithShape(this.bodies,this.colliders,e,t,i,r,n,a?a.handle:null,o?o.handle:null,this.colliders.castClosure(l));return c!=null?this.colliders.get(c):null}projectPoint(e,t,i,r,n,a,o){return this.queryPipeline.projectPoint(this.bodies,this.colliders,e,t,i,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}projectPointAndGetFeature(e,t,i,r,n,a){return this.queryPipeline.projectPointAndGetFeature(this.bodies,this.colliders,e,t,i,r?r.handle:null,n?n.handle:null,this.colliders.castClosure(a))}intersectionsWithPoint(e,t,i,r,n,a,o){this.queryPipeline.intersectionsWithPoint(this.bodies,this.colliders,e,this.colliders.castClosure(t),i,r,n?n.handle:null,a?a.handle:null,this.colliders.castClosure(o))}castShape(e,t,i,r,n,a,o,l,c,h,u){return this.queryPipeline.castShape(this.bodies,this.colliders,e,t,i,r,n,a,o,l,c?c.handle:null,h?h.handle:null,this.colliders.castClosure(u))}intersectionsWithShape(e,t,i,r,n,a,o,l,c){this.queryPipeline.intersectionsWithShape(this.bodies,this.colliders,e,t,i,this.colliders.castClosure(r),n,a,o?o.handle:null,l?l.handle:null,this.colliders.castClosure(c))}collidersWithAabbIntersectingAabb(e,t,i){this.queryPipeline.collidersWithAabbIntersectingAabb(e,t,this.colliders.castClosure(i))}contactPairsWith(e,t){this.narrowPhase.contactPairsWith(e.handle,this.colliders.castClosure(t))}intersectionPairsWith(e,t){this.narrowPhase.intersectionPairsWith(e.handle,this.colliders.castClosure(t))}contactPair(e,t,i){this.narrowPhase.contactPair(e.handle,t.handle,i)}intersectionPair(e,t){return this.narrowPhase.intersectionPair(e.handle,t.handle)}};var ha;(function(s){s[s.NONE=0]="NONE",s[s.COLLISION_EVENTS=1]="COLLISION_EVENTS",s[s.CONTACT_FORCE_EVENTS=2]="CONTACT_FORCE_EVENTS"})(ha||(ha={}));class Gu{free(){this.raw&&this.raw.free(),this.raw=void 0}collider1(){return this.raw.collider1()}collider2(){return this.raw.collider2()}totalForce(){return I.fromRaw(this.raw.total_force())}totalForceMagnitude(){return this.raw.total_force_magnitude()}maxForceDirection(){return I.fromRaw(this.raw.max_force_direction())}maxForceMagnitude(){return this.raw.max_force_magnitude()}}class gb{constructor(e,t){this.raw=t||new hu(e)}free(){this.raw&&this.raw.free(),this.raw=void 0}drainCollisionEvents(e){this.raw.drainCollisionEvents(e)}drainContactForceEvents(e){let t=new Gu;this.raw.drainContactForceEvents(i=>{t.raw=i,e(t),t.free()})}clear(){this.raw.clear()}}var ua;(function(s){s[s.NONE=0]="NONE",s[s.FILTER_CONTACT_PAIRS=1]="FILTER_CONTACT_PAIRS",s[s.FILTER_INTERSECTION_PAIRS=2]="FILTER_INTERSECTION_PAIRS"})(ua||(ua={}));var _l;(function(s){s[s.EMPTY=0]="EMPTY",s[s.COMPUTE_IMPULSE=1]="COMPUTE_IMPULSE"})(_l||(_l={}));var da;(function(s){s[s.DYNAMIC_DYNAMIC=1]="DYNAMIC_DYNAMIC",s[s.DYNAMIC_KINEMATIC=12]="DYNAMIC_KINEMATIC",s[s.DYNAMIC_FIXED=2]="DYNAMIC_FIXED",s[s.KINEMATIC_KINEMATIC=52224]="KINEMATIC_KINEMATIC",s[s.KINEMATIC_FIXED=8704]="KINEMATIC_FIXED",s[s.FIXED_FIXED=32]="FIXED_FIXED",s[s.DEFAULT=15]="DEFAULT",s[s.ALL=60943]="ALL"})(da||(da={}));class gl{constructor(e,t,i,r){this.colliderSet=e,this.handle=t,this._parent=i,this._shape=r}finalizeDeserialization(e){this.handle!=null&&(this._parent=e.get(this.colliderSet.raw.coParent(this.handle)))}ensureShapeIsCached(){this._shape||(this._shape=_t.fromRaw(this.colliderSet.raw,this.handle))}get shape(){return this.ensureShapeIsCached(),this._shape}isValid(){return this.colliderSet.raw.contains(this.handle)}translation(){return I.fromRaw(this.colliderSet.raw.coTranslation(this.handle))}rotation(){return Pe.fromRaw(this.colliderSet.raw.coRotation(this.handle))}isSensor(){return this.colliderSet.raw.coIsSensor(this.handle)}setSensor(e){this.colliderSet.raw.coSetSensor(this.handle,e)}setShape(e){let t=e.intoRaw();this.colliderSet.raw.coSetShape(this.handle,t),t.free(),this._shape=e}setEnabled(e){this.colliderSet.raw.coSetEnabled(this.handle,e)}isEnabled(){return this.colliderSet.raw.coIsEnabled(this.handle)}setRestitution(e){this.colliderSet.raw.coSetRestitution(this.handle,e)}setFriction(e){this.colliderSet.raw.coSetFriction(this.handle,e)}frictionCombineRule(){return this.colliderSet.raw.coFrictionCombineRule(this.handle)}setFrictionCombineRule(e){this.colliderSet.raw.coSetFrictionCombineRule(this.handle,e)}restitutionCombineRule(){return this.colliderSet.raw.coRestitutionCombineRule(this.handle)}setRestitutionCombineRule(e){this.colliderSet.raw.coSetRestitutionCombineRule(this.handle,e)}setCollisionGroups(e){this.colliderSet.raw.coSetCollisionGroups(this.handle,e)}setSolverGroups(e){this.colliderSet.raw.coSetSolverGroups(this.handle,e)}activeHooks(){return this.colliderSet.raw.coActiveHooks(this.handle)}setActiveHooks(e){this.colliderSet.raw.coSetActiveHooks(this.handle,e)}activeEvents(){return this.colliderSet.raw.coActiveEvents(this.handle)}setActiveEvents(e){this.colliderSet.raw.coSetActiveEvents(this.handle,e)}activeCollisionTypes(){return this.colliderSet.raw.coActiveCollisionTypes(this.handle)}setContactForceEventThreshold(e){return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle,e)}contactForceEventThreshold(){return this.colliderSet.raw.coContactForceEventThreshold(this.handle)}setActiveCollisionTypes(e){this.colliderSet.raw.coSetActiveCollisionTypes(this.handle,e)}setDensity(e){this.colliderSet.raw.coSetDensity(this.handle,e)}setMass(e){this.colliderSet.raw.coSetMass(this.handle,e)}setMassProperties(e,t,i,r){let n=I.intoRaw(t),a=I.intoRaw(i),o=Pe.intoRaw(r);this.colliderSet.raw.coSetMassProperties(this.handle,e,n,a,o),n.free(),a.free(),o.free()}setTranslation(e){this.colliderSet.raw.coSetTranslation(this.handle,e.x,e.y,e.z)}setTranslationWrtParent(e){this.colliderSet.raw.coSetTranslationWrtParent(this.handle,e.x,e.y,e.z)}setRotation(e){this.colliderSet.raw.coSetRotation(this.handle,e.x,e.y,e.z,e.w)}setRotationWrtParent(e){this.colliderSet.raw.coSetRotationWrtParent(this.handle,e.x,e.y,e.z,e.w)}shapeType(){return this.colliderSet.raw.coShapeType(this.handle)}halfExtents(){return I.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle))}setHalfExtents(e){const t=I.intoRaw(e);this.colliderSet.raw.coSetHalfExtents(this.handle,t)}radius(){return this.colliderSet.raw.coRadius(this.handle)}setRadius(e){this.colliderSet.raw.coSetRadius(this.handle,e)}roundRadius(){return this.colliderSet.raw.coRoundRadius(this.handle)}setRoundRadius(e){this.colliderSet.raw.coSetRoundRadius(this.handle,e)}halfHeight(){return this.colliderSet.raw.coHalfHeight(this.handle)}setHalfHeight(e){this.colliderSet.raw.coSetHalfHeight(this.handle,e)}vertices(){return this.colliderSet.raw.coVertices(this.handle)}indices(){return this.colliderSet.raw.coIndices(this.handle)}heightfieldHeights(){return this.colliderSet.raw.coHeightfieldHeights(this.handle)}heightfieldScale(){let e=this.colliderSet.raw.coHeightfieldScale(this.handle);return I.fromRaw(e)}heightfieldNRows(){return this.colliderSet.raw.coHeightfieldNRows(this.handle)}heightfieldNCols(){return this.colliderSet.raw.coHeightfieldNCols(this.handle)}parent(){return this._parent}friction(){return this.colliderSet.raw.coFriction(this.handle)}restitution(){return this.colliderSet.raw.coRestitution(this.handle)}density(){return this.colliderSet.raw.coDensity(this.handle)}mass(){return this.colliderSet.raw.coMass(this.handle)}volume(){return this.colliderSet.raw.coVolume(this.handle)}collisionGroups(){return this.colliderSet.raw.coCollisionGroups(this.handle)}solverGroups(){return this.colliderSet.raw.coSolverGroups(this.handle)}containsPoint(e){let t=I.intoRaw(e),i=this.colliderSet.raw.coContainsPoint(this.handle,t);return t.free(),i}projectPoint(e,t){let i=I.intoRaw(e),r=qn.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle,i,t));return i.free(),r}intersectsRay(e,t){let i=I.intoRaw(e.origin),r=I.intoRaw(e.dir),n=this.colliderSet.raw.coIntersectsRay(this.handle,i,r,t);return i.free(),r.free(),n}castShape(e,t,i,r,n,a,o){let l=I.intoRaw(e),c=I.intoRaw(i),h=Pe.intoRaw(r),u=I.intoRaw(n),d=t.intoRaw(),f=un.fromRaw(this.colliderSet,this.colliderSet.raw.coCastShape(this.handle,l,d,c,h,u,a,o));return l.free(),c.free(),h.free(),u.free(),d.free(),f}castCollider(e,t,i,r,n){let a=I.intoRaw(e),o=I.intoRaw(i),l=Zn.fromRaw(this.colliderSet,this.colliderSet.raw.coCastCollider(this.handle,a,t.handle,o,r,n));return a.free(),o.free(),l}intersectsShape(e,t,i){let r=I.intoRaw(t),n=Pe.intoRaw(i),a=e.intoRaw(),o=this.colliderSet.raw.coIntersectsShape(this.handle,a,r,n);return r.free(),n.free(),a.free(),o}contactShape(e,t,i,r){let n=I.intoRaw(t),a=Pe.intoRaw(i),o=e.intoRaw(),l=cn.fromRaw(this.colliderSet.raw.coContactShape(this.handle,o,n,a,r));return n.free(),a.free(),o.free(),l}contactCollider(e,t){return cn.fromRaw(this.colliderSet.raw.coContactCollider(this.handle,e.handle,t))}castRay(e,t,i){let r=I.intoRaw(e.origin),n=I.intoRaw(e.dir),a=this.colliderSet.raw.coCastRay(this.handle,r,n,t,i);return r.free(),n.free(),a}castRayAndGetNormal(e,t,i){let r=I.intoRaw(e.origin),n=I.intoRaw(e.dir),a=Jn.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle,r,n,t,i));return r.free(),n.free(),a}}var xr;(function(s){s[s.Density=0]="Density",s[s.Mass=1]="Mass",s[s.MassProps=2]="MassProps"})(xr||(xr={}));class ut{constructor(e){this.enabled=!0,this.shape=e,this.massPropsMode=xr.Density,this.density=1,this.friction=.5,this.restitution=0,this.rotation=Pe.identity(),this.translation=I.zeros(),this.isSensor=!1,this.collisionGroups=4294967295,this.solverGroups=4294967295,this.frictionCombineRule=Xn.Average,this.restitutionCombineRule=Xn.Average,this.activeCollisionTypes=da.DEFAULT,this.activeEvents=ha.NONE,this.activeHooks=ua.NONE,this.mass=0,this.centerOfMass=I.zeros(),this.contactForceEventThreshold=0,this.principalAngularInertia=I.zeros(),this.angularInertiaLocalFrame=Pe.identity()}static ball(e){const t=new el(e);return new ut(t)}static capsule(e,t){const i=new rl(e,t);return new ut(i)}static segment(e,t){const i=new nl(e,t);return new ut(i)}static triangle(e,t,i){const r=new sl(e,t,i);return new ut(r)}static roundTriangle(e,t,i,r){const n=new al(e,t,i,r);return new ut(n)}static polyline(e,t){const i=new ol(e,t);return new ut(i)}static trimesh(e,t){const i=new ll(e,t);return new ut(i)}static cuboid(e,t,i){const r=new tl(e,t,i);return new ut(r)}static roundCuboid(e,t,i,r){const n=new il(e,t,i,r);return new ut(n)}static heightfield(e,t,i,r){const n=new cl(e,t,i,r);return new ut(n)}static cylinder(e,t){const i=new hl(e,t);return new ut(i)}static roundCylinder(e,t,i){const r=new ul(e,t,i);return new ut(r)}static cone(e,t){const i=new dl(e,t);return new ut(i)}static roundCone(e,t,i){const r=new pl(e,t,i);return new ut(r)}static convexHull(e){const t=new la(e,null);return new ut(t)}static convexMesh(e,t){const i=new la(e,t);return new ut(i)}static roundConvexHull(e,t){const i=new ca(e,null,t);return new ut(i)}static roundConvexMesh(e,t,i){const r=new ca(e,t,i);return new ut(r)}setTranslation(e,t,i){if(typeof e!="number"||typeof t!="number"||typeof i!="number")throw TypeError("The translation components must be numbers.");return this.translation={x:e,y:t,z:i},this}setRotation(e){return Pe.copy(this.rotation,e),this}setSensor(e){return this.isSensor=e,this}setEnabled(e){return this.enabled=e,this}setDensity(e){return this.massPropsMode=xr.Density,this.density=e,this}setMass(e){return this.massPropsMode=xr.Mass,this.mass=e,this}setMassProperties(e,t,i,r){return this.massPropsMode=xr.MassProps,this.mass=e,I.copy(this.centerOfMass,t),I.copy(this.principalAngularInertia,i),Pe.copy(this.angularInertiaLocalFrame,r),this}setRestitution(e){return this.restitution=e,this}setFriction(e){return this.friction=e,this}setFrictionCombineRule(e){return this.frictionCombineRule=e,this}setRestitutionCombineRule(e){return this.restitutionCombineRule=e,this}setCollisionGroups(e){return this.collisionGroups=e,this}setSolverGroups(e){return this.solverGroups=e,this}setActiveHooks(e){return this.activeHooks=e,this}setActiveEvents(e){return this.activeEvents=e,this}setActiveCollisionTypes(e){return this.activeCollisionTypes=e,this}setContactForceEventThreshold(e){return this.contactForceEventThreshold=e,this}}class Vu{constructor(e){this.raw=e||new st,this.map=new aa,e&&e.forEachColliderHandle(t=>{this.map.set(t,new gl(this,t,null))})}free(){this.raw&&this.raw.free(),this.raw=void 0,this.map&&this.map.clear(),this.map=void 0}castClosure(e){return t=>{if(e)return e(this.get(t))}}finalizeDeserialization(e){this.map.forEach(t=>t.finalizeDeserialization(e))}createCollider(e,t,i){let r=i!=null&&i!=null;if(r&&isNaN(i))throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");let n=t.shape.intoRaw(),a=I.intoRaw(t.translation),o=Pe.intoRaw(t.rotation),l=I.intoRaw(t.centerOfMass),c=I.intoRaw(t.principalAngularInertia),h=Pe.intoRaw(t.angularInertiaLocalFrame),u=this.raw.createCollider(t.enabled,n,a,o,t.massPropsMode,t.mass,l,c,h,t.density,t.friction,t.restitution,t.frictionCombineRule,t.restitutionCombineRule,t.isSensor,t.collisionGroups,t.solverGroups,t.activeCollisionTypes,t.activeHooks,t.activeEvents,t.contactForceEventThreshold,r,r?i:0,e.raw);n.free(),a.free(),o.free(),l.free(),c.free(),h.free();let d=r?e.get(i):null,f=new gl(this,u,d,t.shape);return this.map.set(u,f),f}remove(e,t,i,r){this.raw.remove(e,t.raw,i.raw,r),this.unmap(e)}unmap(e){this.map.delete(e)}get(e){return this.map.get(e)}len(){return this.map.len()}contains(e){return this.get(e)!=null}forEach(e){this.map.forEach(e)}getAll(){return this.map.getAll()}}function wb(){return cb()}const pa=Object.freeze(Object.defineProperty({__proto__:null,get ActiveCollisionTypes(){return da},get ActiveEvents(){return ha},get ActiveHooks(){return ua},Ball:el,BroadPhase:Lu,CCDSolver:Cu,Capsule:rl,CharacterCollision:Fu,get CoefficientCombineRule(){return Xn},Collider:gl,ColliderDesc:ut,ColliderSet:Vu,Cone:dl,ConvexPolyhedron:la,Cuboid:tl,Cylinder:hl,DebugRenderBuffers:zu,DebugRenderPipeline:ku,DynamicRayCastVehicleController:Bu,EventQueue:gb,get FeatureType(){return hn},FixedImpulseJoint:fu,FixedMultibodyJoint:Su,GenericImpulseJoint:bu,HalfSpace:Du,Heightfield:cl,ImpulseJoint:ui,ImpulseJointSet:xu,IntegrationParameters:mu,IslandManager:Ru,get JointAxesMask(){return Zo},JointData:Di,get JointType(){return Lt},KinematicCharacterController:Uu,get MassPropsMode(){return xr},get MotorModel(){return $o},MultibodyJoint:Zi,MultibodyJointSet:Au,NarrowPhase:Pu,PhysicsPipeline:Nu,PointColliderProjection:Yn,PointProjection:qn,Polyline:ol,PrismaticImpulseJoint:wu,PrismaticMultibodyJoint:Mu,Quaternion:qo,get QueryFilterFlags(){return ml},QueryPipeline:Ou,Ray:_b,RayColliderIntersection:$n,RayColliderToi:oa,RayIntersection:Jn,RevoluteImpulseJoint:vu,RevoluteMultibodyJoint:Eu,RigidBody:Jo,RigidBodyDesc:vi,RigidBodySet:pu,get RigidBodyType(){return hi},RopeImpulseJoint:_u,RotationOps:Pe,RoundCone:pl,RoundConvexPolyhedron:ca,RoundCuboid:il,RoundCylinder:ul,RoundTriangle:al,SdpMatrix3:du,SdpMatrix3Ops:Yo,Segment:nl,SerializationPipeline:fl,Shape:_t,ShapeColliderTOI:Zn,ShapeContact:cn,ShapeTOI:un,get ShapeType(){return ht},get SolverFlags(){return _l},SphericalImpulseJoint:yu,SphericalMultibodyJoint:Tu,SpringImpulseJoint:gu,TempContactForceEvent:Gu,TempContactManifold:Iu,TriMesh:ll,Triangle:sl,UnitImpulseJoint:Ko,UnitMultibodyJoint:Qo,Vector3:uu,VectorOps:I,World:Hu,version:wb},Symbol.toStringTag,{value:"Module"}));class vb{constructor(){this.experience=new bi,this.scene=this.experience.scene,this.resources=this.experience.resources,this.group=new Xi,this.scene.add(this.group),this.gravity={x:0,y:-9.81,z:0},this.world=new pa.World(this.gravity),this.groundColliderDesc=pa.ColliderDesc.cuboid(10,.1,10),this.world.createCollider(this.groundColliderDesc),this.rigidBodyDesc=pa.RigidBodyDesc.dynamic().setTranslation(0,10,-3),this.rigidBody=this.world.createRigidBody(this.rigidBodyDesc),this.colliderDesc=pa.ColliderDesc.ball(.5,.5,.5).setDensity(1.3).setFriction(.8).setRestitution(.8),this.collider=this.world.createCollider(this.colliderDesc,this.rigidBody),this.createBalloons()}createBalloons(){this.balloon=new It(new Fs(.5,16,16),new Us({color:16711680,metalness:.3,roughness:.4})),this.balloon.scale.set(.5,.5,.5);let e=this.rigidBody.translation();this.balloon.position.x=e.x,this.balloon.position.y=e.y,this.balloon.position.z=e.z,this.group.add(this.balloon)}update(){this.world.step();let e=this.rigidBody.translation();console.log("Rigid-body position: ",e.x,e.y,e.z),this.balloon.position.x=e.x,this.balloon.position.y=e.y,this.balloon.position.z=e.z}}class bb{constructor(){this.experience=new bi,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.resources=this.experience.resources,this.floor=new R0,this.showingQuoteDust=!0,this.ready=!1,this.resources.on("ready",()=>{console.log("resources ready"),this.stars=new L0,this.environment=new T0,this.balloons=new vb,this.ready=!0})}update(){this.ready&&(this.stars.update(),this.balloons.update())}}const yb=[{name:"font",type:"font",path:"helvetiker_regular.typeface.json"},{name:"butterflyTexture",type:"texture",path:"textures/butterfly.png"},{name:"star",type:"texture",path:"textures/5.png"},{name:"matcap",type:"texture",path:"textures/matcap.png"},{name:"matcapTexture2",type:"texture",path:"textures/matcapTexture2.jpg"}],Kn=class Kn{static createButton(e){const t=document.createElement("button");function i(){let l=null;async function c(u){u.addEventListener("end",h),await e.xr.setSession(u),t.textContent="EXIT VR",l=u}function h(){l.removeEventListener("end",h),t.textContent="ENTER VR",l=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(l===null){const u={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",u).then(c)}else l.end()}}function r(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function n(){r(),t.textContent="VR NOT SUPPORTED"}function a(l){r(),console.warn("Exception when trying to call xr.isSessionSupported",l),t.textContent="VR NOT ALLOWED"}function o(l){l.style.position="absolute",l.style.bottom="20px",l.style.padding="12px 6px",l.style.border="1px solid #fff",l.style.borderRadius="4px",l.style.background="rgba(0,0,0,0.1)",l.style.color="#fff",l.style.font="normal 13px sans-serif",l.style.textAlign="center",l.style.opacity="0.5",l.style.outline="none",l.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then(function(l){l?i():n(),l&&Kn.xrSessionIsGranted&&t.click()}).catch(a),t;{const l=document.createElement("a");return window.isSecureContext===!1?(l.href=document.location.href.replace(/^http:/,"https:"),l.innerHTML="WEBXR NEEDS HTTPS"):(l.href="https://immersiveweb.dev/",l.innerHTML="WEBXR NOT AVAILABLE"),l.style.left="calc(50% - 90px)",l.style.width="180px",l.style.textDecoration="none",o(l),l}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{Kn.xrSessionIsGranted=!0})}}};Ju(Kn,"xrSessionIsGranted",!1);let ma=Kn;ma.registerSessionGrantedListener();const ot={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function Wu(s){const e=await fetch(s);if(e.ok)return e.json();throw new Error(e.statusText)}async function xb(s){if(!s)throw new Error("No basePath supplied");return await Wu(`${s}/profilesList.json`)}async function Sb(s,e,t=null,i=!0){if(!s)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const r=await xb(e);let n;if(s.profiles.some(l=>{const c=r[l];return c&&(n={profileId:l,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}),!!n}),!n){if(!t)throw new Error("No matching profile name found");const l=r[t];if(!l)throw new Error(`No matching profile name found and default profile "${t}" missing.`);n={profileId:t,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}}const a=await Wu(n.profilePath);let o;if(i){let l;if(s.handedness==="any"?l=a.layouts[Object.keys(a.layouts)[0]]:l=a.layouts[s.handedness],!l)throw new Error(`No matching handedness, ${s.handedness}, in profile ${n.profileId}`);l.assetPath&&(o=n.profilePath.replace("profile.json",l.assetPath))}return{profile:a,assetPath:o}}const Mb={xAxis:0,yAxis:0,button:0,state:ot.ComponentState.DEFAULT};function Eb(s=0,e=0){let t=s,i=e;if(Math.sqrt(s*s+e*e)>1){const r=Math.atan2(e,s);t=Math.cos(r),i=Math.sin(r)}return{normalizedXAxis:t*.5+.5,normalizedYAxis:i*.5+.5}}class Tb{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===ot.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(Mb)}updateFromComponent({xAxis:e,yAxis:t,button:i,state:r}){const{normalizedXAxis:n,normalizedYAxis:a}=Eb(e,t);switch(this.componentProperty){case ot.ComponentProperty.X_AXIS:this.value=this.states.includes(r)?n:.5;break;case ot.ComponentProperty.Y_AXIS:this.value=this.states.includes(r)?a:.5;break;case ot.ComponentProperty.BUTTON:this.value=this.states.includes(r)?i:0;break;case ot.ComponentProperty.STATE:this.valueNodeProperty===ot.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(r):this.value=this.states.includes(r)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Ab{constructor(e,t){if(!e||!t||!t.visualResponses||!t.gamepadIndices||Object.keys(t.gamepadIndices).length===0)throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(i=>{const r=new Tb(t.visualResponses[i]);this.visualResponses[i]=r}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:ot.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=ot.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=ot.ComponentState.PRESSED:(t.touched||this.values.button>ot.ButtonTouchThreshold)&&(this.values.state=ot.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===ot.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>ot.AxisTouchThreshold&&(this.values.state=ot.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===ot.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>ot.AxisTouchThreshold&&(this.values.state=ot.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Cb{constructor(e,t,i){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=i,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(r=>{const n=this.layoutDescription.components[r];this.components[r]=new Ab(r,n)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}const Rb="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",Lb="generic-trigger";class Pb extends tt{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e?this:(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)}),this)}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(i=>{const{valueNode:r,minNode:n,maxNode:a,value:o,valueNodeProperty:l}=i;r&&(l===ot.VisualResponseProperty.VISIBILITY?r.visible=o:l===ot.VisualResponseProperty.TRANSFORM&&(r.quaternion.slerpQuaternions(n.quaternion,a.quaternion,o),r.position.lerpVectors(n.position,a.position,o)))})}))}}function Ib(s,e){Object.values(s.components).forEach(t=>{const{type:i,touchPointNodeName:r,visualResponses:n}=t;if(i===ot.ComponentType.TOUCHPAD)if(t.touchPointNode=e.getObjectByName(r),t.touchPointNode){const a=new Fs(.001),o=new Wi({color:255}),l=new It(a,o);t.touchPointNode.add(l)}else console.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);Object.values(n).forEach(a=>{const{valueNodeName:o,minNodeName:l,maxNodeName:c,valueNodeProperty:h}=a;if(h===ot.VisualResponseProperty.TRANSFORM){if(a.minNode=e.getObjectByName(l),a.maxNode=e.getObjectByName(c),!a.minNode){console.warn(`Could not find ${l} in the model`);return}if(!a.maxNode){console.warn(`Could not find ${c} in the model`);return}}a.valueNode=e.getObjectByName(o),a.valueNode||console.warn(`Could not find ${o} in the model`)})})}function ju(s,e){Ib(s.motionController,e),s.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=s.envMap,t.material.needsUpdate=!0)}),s.add(e)}class Db{constructor(e=null){this.gltfLoader=e,this.path=Rb,this._assetCache={},this.gltfLoader||(this.gltfLoader=new Xh)}createControllerModel(e){const t=new Pb;let i=null;return e.addEventListener("connected",r=>{const n=r.data;n.targetRayMode!=="tracked-pointer"||!n.gamepad||Sb(n,this.path,Lb).then(({profile:a,assetPath:o})=>{t.motionController=new Cb(n,a,o);const l=this._assetCache[t.motionController.assetUrl];if(l)i=l.scene.clone(),ju(t,i);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,c=>{this._assetCache[t.motionController.assetUrl]=c,i=c.scene.clone(),ju(t,i)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(a=>{console.warn(a)})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(i),i=null}),t}}class Nb{constructor(){this.experience=new bi,this.canvas=this.experience.canvas,this.sizes=this.experience.sizes,this.scene=this.experience.scene,this.renderer=this.experience.renderer,this.r_connection=!1,this.l_connection=!1,this.controller1=this.renderer.instance.xr.getController(0),this.controller2=this.renderer.instance.xr.getController(1),this.lastAButtonPressed=!1,this.lastBButtonPressed=!1,this.lastXButtonPressed=!1,this.lastYButtonPressed=!1,this.lastLeftTriggerPressed=!1,this.lastRightTriggerPressed=!1,this.controller2.gamepad=void 0,this.controller1.gamepad=void 0,this.controller2.addEventListener("connected",e=>{e.data.gamepad?(this.r_connection=!0,this.controller2.gamepad=e.data.gamepad):this.r_connection=!1}),this.controller1.addEventListener("connected",e=>{e.data.gamepad?(this.l_connection=!0,this.controller1.gamepad=e.data.gamepad):this.l_connection=!1}),this.scene.add(this.controller1),this.scene.add(this.controller2),this.controllerModelFactory=new Db,this.controllerGrip1=this.renderer.instance.xr.getControllerGrip(0),this.controllerGrip1.add(this.controllerModelFactory.createControllerModel(this.controllerGrip1)),this.scene.add(this.controllerGrip1),this.controllerGrip2=this.renderer.instance.xr.getControllerGrip(1),this.controllerGrip2.add(this.controllerModelFactory.createControllerModel(this.controllerGrip2)),this.scene.add(this.controllerGrip2)}setInstance(){}resize(){}update(){try{this.controller2.gamepad&&(this.controller2.gamepad.buttons[4].pressed!==this.lastAButtonPressed&&(this.controller2.gamepad.buttons[4].pressed?console.log("A pressed"):console.log("A released")),this.lastAButtonPressed=this.controller2.gamepad.buttons[4].pressed,this.controller2.gamepad.buttons[5].pressed!==this.lastBButtonPressed&&(this.controller2.gamepad.buttons[5].pressed?console.log("B pressed"):console.log("B released")),this.lastBButtonPressed=this.controller2.gamepad.buttons[5].pressed,this.controller2.gamepad.buttons[0].pressed!==this.lastRightTriggerPressed&&(this.controller2.gamepad.buttons[0].pressed?console.log("right trigger pressed"):console.log("right trigger released")),this.lastRightTriggerPressed=this.controller2.gamepad.buttons[0].pressed),this.controller1.gamepad&&(this.controller1.gamepad.buttons[4].pressed!==this.lastXButtonPressed&&(this.controller1.gamepad.buttons[4].pressed?console.log("X pressed"):console.log("X released")),this.lastXButtonPressed=this.controller1.gamepad.buttons[4].pressed,this.controller1.gamepad.buttons[5].pressed!==this.lastYButtonPressed&&(this.controller1.gamepad.buttons[5].pressed?console.log("Y pressed"):console.log("Y released")),this.lastYButtonPressed=this.controller1.gamepad.buttons[5].pressed,this.controller1.gamepad.buttons[0].pressed!==this.lastLeftTriggerPressed&&(this.controller1.gamepad.buttons[0].pressed?console.log("left trigger pressed"):console.log("left trigger released")),this.lastLeftTriggerPressed=this.controller1.gamepad.buttons[0].pressed)}catch(e){console.log(e)}}}let wl=null;class bi{constructor(e){if(wl)return wl;wl=this,window.experience=this,this.canvas=e,this.sizes=new Bv,this.scene=new lw,this.resources=new y0(yb),this.world=new bb,this.camera=new M0,this.renderer=new E0,this.debug=new Uv,this.sampleBoolean=!0,this.sampleNumber=5,this.debug.active&&(this.debugFolder=this.debug.ui.addFolder("experience"),this.sampleBoolean,this.sampleNumber),window.addEventListener("click",()=>{this.INTERSECTED}),this.mouse=new x0,this.clock=new fv,this.clock.start(),this.renderer.instance.xr.enabled=!0,document.body.appendChild(ma.createButton(this.renderer.instance)),this.renderer.instance.setAnimationLoop(()=>{this.world.update(),this.renderer.instance.render(this.scene,this.camera.instance)}),this.controllers=new Nb,this.raycaster=new Ev,this.mouse=new he,this.INTERSECTED=null,window.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/this.sizes.width*2-1,this.mouse.y=-(t.clientY/this.sizes.height)*2+1}),window.addEventListener("click",()=>{this.INTERSECTED}),this.sizes.on("resize",()=>{this.resize(),this.camera.resize(),this.renderer.resize()})}resize(){console.log("resized occured"),this.camera.resize()}update(){this.camera.update(),this.world.update(),this.raycaster.setFromCamera(this.mouse,this.camera.instance)}destroy(){this.sizes.off("resize"),this.time.off("tick"),this.scene.traverse(e=>{if(e instanceof It){e.geometry.dispose();for(const t in e.material){const i=e.material[t];i&&typeof i.dispose=="function"&&i.dispose()}}}),this.camera.controls.dispose(),this.renderer.instance.dispose(),this.debug.active&&this.debug.ui.destroy()}}new bi(document.querySelector("canvas.webgl"))}),Wb=Gb();export{Wb as default};
