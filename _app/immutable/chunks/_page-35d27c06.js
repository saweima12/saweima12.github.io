import{d as s}from"./route-58ec6f73.js";const n=async({fetch:o})=>{let t=s.getPostList(1),r=await o(t);const{pageList:i,maxPage:e,pageNum:l}=await r.json();if(e>1)for(let a=2;a<=e;a++)t=s.getPostList(a),await o(t);return{pageList:i,maxPage:e,pageNum:l}},g=Object.freeze(Object.defineProperty({__proto__:null,load:n},Symbol.toStringTag,{value:"Module"}));export{g as _,n as l};
