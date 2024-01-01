"use strict";var t=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=t(function(z,v){
var j=require('@stdlib/strided-base-dmap/dist'),x=require('@stdlib/math-base-special-inv/dist');function l(e,r,i,a,n){return j(e,r,i,a,n,x)}v.exports=l
});var d=t(function(A,q){
var R=require('@stdlib/strided-base-dmap/dist').ndarray,_=require('@stdlib/math-base-special-inv/dist');function E(e,r,i,a,n,y,f){return R(e,r,i,a,n,y,f,_)}q.exports=E
});var p=t(function(B,c){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),o=s(),b=d();O(o,"ndarray",b);c.exports=o
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=p(),u,m=h(g(__dirname,"./native.js"));m instanceof Error?u=k:u=m;module.exports=u;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
