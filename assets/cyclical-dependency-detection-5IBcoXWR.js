import{I as c,J as e}from"./index-YbdJMoBB.js";function i(s){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...c(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.h1,{children:"Cyclical Dependency Detection"}),`
`,e.jsx(n.p,{children:"There aren't many 'real-world' examples that we as software developers encounter on a daily basis, but I'd found this an interesting application of DFS."}),`
`,e.jsxs(n.p,{children:[e.jsx(n.img,{src:"cyclical-dependencies.png",alt:"Graph representation of a cyclical dependency among three courses"}),`
`,e.jsx(n.em,{children:"Graph representation of a cyclical dependency among three courses."})]}),`
`,e.jsx(n.h2,{children:"Problem"}),`
`,e.jsxs(n.p,{children:["A while ago, I was working on a course dependency feature, where a content author should be able to specify that ",e.jsx(n.code,{children:"Course 1"})," needs to be completed before ",e.jsx(n.code,{children:"Course 2"}),", and so on."]}),`
`,e.jsx(n.p,{children:"Consider the following:"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Course 1"})," is a dependency of ",e.jsx(n.code,{children:"Course 2"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Course 2"})," is a dependency of ",e.jsx(n.code,{children:"Course 3"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"Course 3"})," is a dependency of ",e.jsx(n.code,{children:"Course 1"})," (!)"]}),`
`]}),`
`,e.jsxs(n.p,{children:["This creates a ",e.jsx(n.strong,{children:"cyclical dependency"}),"."]}),`
`,e.jsx(n.p,{children:"In a real-world system, there could be hundreds of courses with multiple dependencies, making it difficult for users to identify cycles manually. We need an automated way to detect these cycles when a course is created or updated, adding validation to prevent this configuration."}),`
`,e.jsx(n.p,{children:"Cyclical dependencies can impact the student experience in a variety of ways:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Prevent users from completing courses"}),`
`,e.jsx(n.li,{children:"Lock the system in an invalid state"}),`
`,e.jsx(n.li,{children:"Cause confusion for content authors"}),`
`]}),`
`,e.jsx(n.h2,{children:"Solution"}),`
`,e.jsxs(n.p,{children:["What we need is a ",e.jsx(n.strong,{children:"cycle detection algorithm"})," to determine if adding a dependency creates a cycle."]}),`
`,e.jsxs(n.p,{children:["We can use a modified ",e.jsx(n.strong,{children:"Depth-First Search (DFS)"})," algorithm to detect cycles efficiently. Since this validation is run when the course is saved, we can use a 'fixed' point & fail early if the current depth >= # of Courses (Noting that when equal, the set must include our starting node):"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"When a course is saved, perform a DFS for all its dependencies."}),`
`,e.jsx(n.li,{children:"Maintain a counter for the depth level."}),`
`,e.jsx(n.li,{children:"If the depth level exceeds the total number of courses, a cycle exists."}),`
`]}),`
`,e.jsx(n.h3,{children:"Complexity"}),`
`,e.jsxs(n.p,{children:["This approach has a time complexity of ",e.jsx(n.strong,{children:"O(|V|)"}),", where ",e.jsx(n.code,{children:"V"})," is the number of vertices (courses). By focusing only on the modified course, we avoid unnecessary checks, saving time and resources."]})]})}function o(s={}){const{wrapper:n}={...c(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{o as default};
