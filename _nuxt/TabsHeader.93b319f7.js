import{a as _,A as l,M as b,o as s,e as a,F as v,r as g,f as u,q as x,D as k,s as y,t as I,p as T,k as S,$,m as C}from"./entry.8eb68310.js";/* empty css                       */const q=t=>(T("data-v-9b59cc28"),t=t(),S(),t),w={class:"tabs-header"},B=["onClick"],N=q(()=>u("span",{class:"tab"},null,-1)),U=[N],A=_({__name:"TabsHeader",props:{tabs:{type:Array,required:!0},activeTabIndex:{type:Number,required:!0}},emits:["update:activeTabIndex"],setup(t,{emit:p}){const h=t,n=l(),r=l(),i=e=>{e&&(r.value.style.insetInlineStart=`${e.offsetLeft}px`,r.value.style.width=`${e.clientWidth}px`)},f=(e,c)=>{p("update:activeTabIndex",c),$(()=>i(e.target))};return b(n,e=>{e&&setTimeout(()=>{i(n.value.children[h.activeTabIndex])},50)},{immediate:!0}),(e,c)=>(s(),a("div",w,[t.tabs?(s(),a("div",{key:0,ref_key:"tabsRef",ref:n,class:"tabs"},[(s(!0),a(v,null,g(t.tabs,({label:d},o)=>(s(),a("button",{key:`${o}${d}`,class:y([t.activeTabIndex===o?"active":"not-active"]),onClick:m=>f(m,o)},I(d),11,B))),128)),u("span",{ref_key:"highlightUnderline",ref:r,class:"highlight-underline"},U,512)],512)):x("",!0),k(e.$slots,"footer",{},void 0,!0)]))}}),H=C(A,[["__scopeId","data-v-9b59cc28"]]);export{H as default};
