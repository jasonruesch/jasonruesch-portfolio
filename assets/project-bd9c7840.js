import{u as a,j as e,L as o,r as c,A as l}from"./index-14e469df.js";import{g as i}from"./project.api-542d5957.js";function p({params:r}){const{id:t}=r;return{project:i().then(s=>s.find(n=>n.id===t))}}function d(){const{project:r}=a();return e.jsxs("div",{className:"h-full grid place-content-center text-center",children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{to:"/projects",children:"Back to projects"})}),e.jsx(c.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx(l,{resolve:r,errorElement:e.jsx("div",{children:"Could not load project"}),children:t=>e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:t.name}),e.jsx("p",{className:"text-neutral-500 dark:text-neutral-400",children:t.description})]})})})]})}d.displayName="Project";export{d as Component,d as default,p as loader};
