import{d as _,u as d,a as p,c as m,b as u,r as h,o as a,e as n,f as t,t as s,g as l,F as f,h as g,n as v,i as x,j as y,k as b,l as k,m as N,_ as w}from"./index-797saBMN.js";import{N as P}from"./NoteDisplay-BwkdHZsA.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},B={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},j=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var r;return(r=o.meta)==null?void 0:r.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,r)=>(a(),n("div",{id:"page-root",style:v(l(x))},[t("div",V,[t("div",L,[t("h1",S,s(l(m).title),1),t("div",T,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,g(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",D,[t("div",H,s(e==null?void 0:e.no)+"/"+s(l(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),j])]),k(P,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",z)):N("v-if",!0)]))),128))])],4))}}),E=w(C,[["__file","/home/runner/work/intro-rag/intro-rag/presentation/node_modules/.pnpm/@slidev+client@0.47.5_postcss@8.4.35_typescript@5.3.3_vite@5.1.1/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
