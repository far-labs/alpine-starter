import{I as s,u as i,b as p,a as c,a5 as u,A as l,V as e,m as d}from"./entry.8eb68310.js";import{u as f}from"./asyncData.00a719f9.js";import y from"./Ellipsis.8d82b3a1.js";import g from"./ComponentPlaygroundData.bd5cffe3.js";/* empty css                                *//* empty css                     */import"./TabsHeader.93b319f7.js";/* empty css                       */import"./ComponentPlaygroundProps.a5d609a3.js";import"./ProseH4.e082bff1.js";/* empty css                    */import"./ProseCodeInline.1a9b8ba9.js";/* empty css                            */import"./Badge.594bfee4.js";import"./ContentSlot.6db62a9b.js";import"./utils.51abdc9a.js";import"./preview.c3777cd5.js";/* empty css                  */import"./ProseP.4a506d7d.js";/* empty css                   */import"./index.b6c869d1.js";/* empty css                                     */import"./ComponentPlaygroundSlots.vue.6e3b6e50.js";import"./ComponentPlaygroundTokens.vue.d80a9ba7.js";/* empty css                                    */async function h(o){s();const t=i(o);{const{data:n}=await f(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const _=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>u(o.component)),n=l({...o.props}),r=await h(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,m])=>{if(r.startsWith("component-")){const a=r.replace("component-","");n[a]=m}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(y,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(g,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),H=d(_,[["__scopeId","data-v-9ca9b996"]]);export{H as default};
