import{I as v,A as y,J as D,K as x,L as _,M as w,u as b,N as C}from"./entry.8eb68310.js";const O=()=>null;function A(...s){var m;const l=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(l);let[t,u,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof u!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");a.server=a.server??!0,a.default=a.default??O,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0;const e=v(),f=()=>e.isHydrating?e.payload.data[t]:e.static.data[t],d=()=>f()!==void 0;e._asyncData[t]||(e._asyncData[t]={data:y(f()??((m=a.default)==null?void 0:m.call(a))??null),pending:y(!d()),error:y(e.payload._errors[t]?D(e.payload._errors[t]):null)});const r={...e._asyncData[t]};r.refresh=r.execute=(o={})=>{if(e._asyncDataPromises[t]){if(o.dedupe===!1)return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if(o._initial&&d())return f();r.pending.value=!0;const c=new Promise((n,i)=>{try{n(u(e))}catch(P){i(P)}}).then(n=>{if(c.cancelled)return e._asyncDataPromises[t];let i=n;a.transform&&(i=a.transform(n)),a.pick&&(i=k(i,a.pick)),r.data.value=i,r.error.value=null}).catch(n=>{var i;if(c.cancelled)return e._asyncDataPromises[t];r.error.value=n,r.data.value=b(((i=a.default)==null?void 0:i.call(a))??null)}).finally(()=>{c.cancelled||(r.pending.value=!1,e.payload.data[t]=r.data.value,r.error.value&&(e.payload._errors[t]=D(r.error.value)),delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=c,e._asyncDataPromises[t]};const h=()=>r.refresh({_initial:!0}),g=a.server!==!1&&e.payload.serverRendered;{const o=C();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const n=o._nuxtOnBeforeMountCbs;o&&(x(()=>{n.forEach(i=>{i()}),n.splice(0,n.length)}),_(()=>n.splice(0,n.length)))}g&&e.isHydrating&&d()?r.pending.value=!1:o&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?o._nuxtOnBeforeMountCbs.push(h):a.immediate&&h(),a.watch&&w(a.watch,()=>r.refresh());const c=e.hook("app:data:refresh",n=>{if(!n||n.includes(t))return r.refresh()});o&&_(c)}const p=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(p,r),p}async function B(s){const l=s?Array.isArray(s)?s:[s]:void 0;await v().hooks.callHookParallel("app:data:refresh",l)}function k(s,l){const t={};for(const u of l)t[u]=s[u];return t}export{B as r,A as u};
