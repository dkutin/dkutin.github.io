import{I as i,J as e}from"./index-YbdJMoBB.js";function a(t){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"JSON database for a CMS"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"cms-json-database.png",alt:"Admin config app"}),`
`,e.jsx(n.em,{children:"Admin configuration app for managing content in the mobile app for this variant."})]}),`
`,e.jsx(n.h2,{children:"Preface"}),`
`,e.jsxs(n.p,{children:["While finishing my undergrad, I worked to architect a ",e.jsx(n.em,{children:"Content Management System"})," for a mobile app that supported white-labelling and multi-tenancy for my ",e.jsx(n.a,{href:"https://en.wikipedia.org/wiki/Capstone_course",children:"capstone project"}),"."]}),`
`,e.jsx(n.p,{children:"The goal was to maintain two separate applications:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Mobile app (App store / Pay store): target audience to view and interact with the published content as a mobile app, and"}),`
`,e.jsx(n.li,{children:"Content Management System (Web UI): publisher to create and edit the content of the mobile app from a browser, specific to their 'variant'."}),`
`]}),`
`,e.jsx(n.p,{children:"Both apps would be request an unified API, which would be secured by two separate authentication flows, providing scoped access tokens to restrict access. For heavily requested content (e.g. homepage, contact, etc..), we'd use a request cache to avoid the expensive compute for simple requests."}),`
`,e.jsx(n.p,{children:"The content and tenant information would be stored in separate databases on some redundant, highly available instances."}),`
`,e.jsx(n.p,{children:"But with only one customer, a mobile app in the MVP phase, and a simple headless JSON editor; We've got a long ways to go."}),`
`,e.jsx(n.h2,{children:"Solution"}),`
`,e.jsx(n.p,{children:"Until this product has some potential to be profitable and buy-in from a customer base, there’s no use in paying for hosting costs of this entire stack. Even if it’s a pay-per-use basis, an API server with reliable uptime would need to be active 24/7, and wasted on use solely for demo purposes."}),`
`,e.jsx(n.p,{children:"To bridge the gap between what we had, versus what we wanted, we had to start small. That was creating a web client that would take and return these JSON files for manual upload, but why not take it one step further?"}),`
`,e.jsx(n.p,{children:"This document based approach is what led us down the path of development until we faced our first gating issue. Treating JSON as a relational database."}),`
`,e.jsx(n.p,{children:"One of our requirements for the MVP was that content had to be translatable; which meant we’d separate schema files from the content contained within them. The link between the two had been a JSON reference identifier, which leads to some confusion when trying to re-order, replace, add, and remove new entries. The references aren’t stable, they don’t have a unique identifier like an ‘id’ field in a relational database."}),`
`,e.jsx(n.p,{children:"Using UUIDs, we can mimic a primary key by assigning a unique identifier to each entity, and although not backed by a sequential identifier like a relational database would, we don’t need one!"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`[{ id: '37765533-90e5-4e95-91c6-108e2baf598e', type: 'BLOCK_HEADER' }];
`})}),`
`,e.jsx(n.p,{children:"And sourced from translation files:"}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"lang/en.json"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`{ "37765533-90e5-4e95-91c6-108e2baf598e": { content: "Hello, world" }},
`})}),`
`,e.jsx(n.p,{children:e.jsx(n.em,{children:"lang/fr.json"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-jsx",children:`{ "37765533-90e5-4e95-91c6-108e2baf598e": { content: "Bonjour monde" }},
`})}),`
`,e.jsx(n.p,{children:"Through this implementation, we load the language bundle for the current locale selected (Within the application bundle, eventually via API), and insert the language identifier based on the UUID. Entries need to be manually translated anyways given the client's domain being highly sensitive to accuracy, so there's no savings from automating a translation pipeline."}),`
`,e.jsx(n.h2,{children:"Reflections"}),`
`,e.jsx(n.p,{children:"The solution closely resembles that of a headless CMS (Contentful, Santiy), which woudld've been a better approach. The effort spent on building a CMS greatly outweighed that of the cost in purchasing a headless CMS solution, however, served as a great learning experience."})]})}function o(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(a,{...t})}):a(t)}export{o as default};
