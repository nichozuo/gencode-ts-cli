"use strict";var L=Object.create;var b=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var D=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty;var R=(e,r,t,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of _(r))!z.call(e,s)&&s!==t&&b(e,s,{get:()=>r[s],enumerable:!(n=M(r,s))||n.enumerable});return e};var x=(e,r,t)=>(t=e!=null?L(D(e)):{},R(r||!e||!e.__esModule?b(t,"default",{value:e,enumerable:!0}):t,e));var i=x(require("fs")),h=x(require("path"));var Z=Array.isArray,P=e=>!!e&&e.constructor===Object;var l=(e,r)=>!e||!r?e??r??{}:Object.entries({...e,...r}).reduce((t,[n,s])=>({...t,[n]:P(e[n])?l(e[n],s):s}),{});var d=e=>{let r=e?.split(/[\.\-\s_]/).map(t=>t.toLowerCase())??[];return r.length===0?"":r.map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join("")};var m="./gencode.json",y={url:"http://0.0.0.0:8000/api/docs/openapi",module:"Admin",outPath:"./src/gen/",apis:{firstLine:`import { MyResponseType } from '@/common';
import { request } from '@umijs/max';`}};function C(){let e;if(i.existsSync(m)){let r=i.readFileSync(m,"utf8");e=l(y,JSON.parse(r))}else console.log("gencode.json \u6587\u4EF6\u4E0D\u5B58\u5728\uFF0C\u81EA\u52A8\u751F\u6210\u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6"),i.writeFileSync(m,JSON.stringify(y,null,2),"utf8"),e=y;return console.log("\u52A0\u8F7D\u548C\u89E3\u6790\u914D\u7F6E\u6587\u4EF6\uFF1A",e),e}function $(e){i.existsSync(e.outPath)?(i.readdirSync(e.outPath).forEach(r=>{let t=h.join(e.outPath,r);i.lstatSync(t).isDirectory()?$(e):i.unlinkSync(t)}),i.rmdirSync(e.outPath),console.log(`\u5220\u9664\u8001\u7684\u6587\u4EF6\uFF1A ${e.outPath} \u5DF2\u6210\u529F\u5220\u9664\u3002`)):console.log(`\u5220\u9664\u8001\u7684\u6587\u4EF6\uFF1A ${e.outPath} \u4E0D\u5B58\u5728\u3002`)}async function N(e){let r=await fetch(e.url);if(!r.ok)throw new Error("Network response was not ok "+r.statusText);let t=await r.json();return console.log(`\u83B7\u53D6 OpenAPI \u6587\u6863\uFF1A ${e.url} \u6210\u529F\u3002`),t}function F(e){let r={};return e.tags?.forEach(t=>{let n=t.name.replace(/Controller$/,"").split("/"),s=r;n.forEach(o=>{s[o]||(s[o]={}),s=s[o]})}),r}function E(e,r){for(let[t,n]of Object.entries(e.paths??{}))for(let[,s]of Object.entries(n)){let o=s.tags[0].replace(/Controller$/,"").split("/"),c=s["x-is-download"]??!1,u=r;o.forEach((f,g)=>{if(u=u[f],g===o.length-1){let O=d(s.summary),A=[],w=[];if(s.requestBody){let a=s.requestBody.content["application/x-www-form-urlencoded"].schema.properties??null;a&&Object.keys(a).forEach(p=>{p.includes("*")||(A.push({name:p,type:K(a[p].type),description:a[p].description,required:a[p].required}),a[p].required&&w.push(p))})}u[O]={path:t,tags:[...o,O],params:A,required:w,isDownload:c}}})}return r}function S(e,r){let t=`${r.apis.firstLine}

export const Apis = {
`;t+=q(e[r.module],1),t+="}",T(r.outPath,"Apis.ts",t)}function j(e,r){let t=`declare namespace ApiTypes {
`;t+=I(e[r.module],1),t+=`}
`,T(r.outPath,"ApiTypes.d.ts",t)}function k(e,r){let t=e["x-enum"];if(t==null)return;let n="";for(let[s,o]of Object.entries(t))n+=`// ${o.title}
`,n+=`export const ${s}= {
`,o.properties.map(c=>{n+=`  '${c.value}': ${JSON.stringify({text:c.label,color:c.color,value:c.value})}, 
`}),n+=`};

`;T(r.outPath,"Enums.ts",n)}function q(e,r){let t="",n="  ".repeat(r);for(let[s,o]of Object.entries(e))if(o.path){o.tags.shift();let c=["ApiTypes",...o.tags].join("."),u=o.params.length>0,f=o.isDownload?"responseType: 'blob',":"";if(u){let g=o.required.length>0?"":"?";t+=`${n}${s}(data${g}: ${c}): Promise<MyResponseType> {
`,t+=`${n}  return request('${o.path}', { ${f}data });
`,t+=`${n}},
`}else t+=`${n}${s}(): Promise<MyResponseType> {
`,t+=`${n}  return request('${o.path}', {${f}});
`,t+=`${n}},
`}else t+=`${n}${s}: {
`,t+=q(o,r+1),t+=`${n}},
`;return t}function I(e,r){let t="  ".repeat(r),n="";for(let[s,o]of Object.entries(e))if(o.path){if(o.params.length==0)continue;n+=`${t}type ${s} = {
`,o.params.forEach(c=>{let u=c.required?"":"?";n+=`${t}  "${c.name}"${u}: ${c.type}; // ${c.description} 
`}),n+=`${t}};
`}else n+=`${t}namespace ${s} {
`,n+=I(o,r+1),n+=`${t}}
`;return n}function T(e,r,t,n=!0){i.existsSync(e)||i.mkdirSync(e,{recursive:!0}),i.writeFile(h.join(e,r),t,function(s){s?console.error("Error: "+s.message):n&&console.log(`${r} has been created successfully.`)})}function K(e){switch(e){case"array":return"string[]";case"integer":case"numeric":return"number";case"file":case"image":return"File";case"date":return"Date";default:return e}}(async()=>{let e=C();$(e);let r=await N(e),t=F(r),n=E(r,t);S(n,e),j(n,e),k(r,e)})();
