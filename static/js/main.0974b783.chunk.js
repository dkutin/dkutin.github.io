(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},26:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(18),c=t.n(l),o=(t(26),t(3)),i=t(4),s=t(6),m=t(5),u=t(19),p=t.n(u),d=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,a=this.props.data.description,t=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("header",{id:"home"},r.a.createElement("div",{className:"row banner"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h1",{className:"responsive-headline"},"I'm ",e,"."),r.a.createElement("h3",null,"an Ottawa based ",r.a.createElement("span",null,"Full-Stack Developer"),".",r.a.createElement("br",null),r.a.createElement("br",null),a,"."),r.a.createElement("hr",null),r.a.createElement("ul",{className:"social"},t))),r.a.createElement("p",{className:"scrolldown"},r.a.createElement("a",{className:"smoothscroll",href:"#about"},r.a.createElement("i",{className:"icon-down-circle"}))))}}]),t}(n.Component),h=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url},r.a.createElement("i",{className:e.className})))}));return r.a.createElement("footer",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns"},r.a.createElement("ul",{className:"social-links"},e)),r.a.createElement("div",{id:"go-top"},r.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},r.a.createElement("i",{className:"icon-up-open"})))))}}]),t}(n.Component),E=t(12),f=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.bio,a=this.props.data.phone,t=this.props.data.email;return r.a.createElement("section",{id:"about"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"centered nine columns main-col"},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"columns contact-details"},r.a.createElement("h2",null,"Contact Details"),r.a.createElement("p",null,r.a.createElement("a",{href:"tel:".concat(a)},a),r.a.createElement("br",null),r.a.createElement("a",{href:"mailto:".concat(t)},t))),r.a.createElement("div",{className:"columns download"},r.a.createElement("p",null,r.a.createElement(E.b,{className:"button",to:"/resume"},r.a.createElement("i",{className:"fa fa-download"}),"Download/View Resume")))))))}}]),t}(n.Component),v=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"resume"},r.a.createElement("div",{className:"row education"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Education"))),r.a.createElement("div",{className:"nine columns main-col"},r.a.createElement("div",{className:"row item"},r.a.createElement("div",{className:"twelve columns"},this.props.data&&this.props.data.education.map((function(e){return r.a.createElement("div",{key:e.school},r.a.createElement("h3",null,e.school),r.a.createElement("p",{className:"info"},e.degree),r.a.createElement("p",null,e.description))})))))),r.a.createElement("div",{className:"row work"},r.a.createElement("div",{className:"three columns header-col"},r.a.createElement("h1",null,r.a.createElement("span",null,"Work"))),r.a.createElement("div",{className:"nine columns main-col"},this.props.data&&this.props.data.work.map((function(e,a){return r.a.createElement("div",{key:"".concat(e.company,"-").concat(a)},r.a.createElement("h3",null,e.company),r.a.createElement("p",{className:"info"},e.title,r.a.createElement("span",null,"\u2022")," ",r.a.createElement("em",{className:"date"},e.years)),r.a.createElement("strong",null,e.description),r.a.createElement("p",null,e.contribution))})))))}}]),t}(n.Component),b=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var a="images/portfolio/"+e.image,t="fa fa-link";return e.url||(t+=" disabled"),r.a.createElement("div",{key:e.title,className:"columns portfolio-item"},r.a.createElement("div",{className:"portfolio-item-image"},r.a.createElement("div",{className:"item-wrap"},r.a.createElement("img",{alt:e.title,src:a}),r.a.createElement("div",{className:"overlay"},r.a.createElement("ul",{className:"project-links"},r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:t}))),r.a.createElement("li",{key:e.name},r.a.createElement("a",{href:e.repo,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("i",{className:"fa fa-github"}))))))),r.a.createElement("div",{className:"portfolio-item-meta"},r.a.createElement("h5",null,e.title),r.a.createElement("h6",null,"Description"),r.a.createElement("p",null,e.description),r.a.createElement("h6",null,"Contribution"),r.a.createElement("p",null,e.contribution)))}));return r.a.createElement("section",{id:"portfolio"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"twelve columns collapsed"},r.a.createElement("h1",null,"Projects"),r.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-halves s-bgrid-halves cf"},e))))}}]),t}(n.Component),N=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(o.a)(this,t),(n=a.call(this,e)).state={resumeData:{}},n}return Object(i.a)(t,[{key:"getResumeData",value:function(){p.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t),alert(t)}})}},{key:"componentDidMount",value:function(){this.getResumeData()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{data:this.state.resumeData.main}),r.a.createElement(f,{data:this.state.resumeData.main}),r.a.createElement(b,{data:this.state.resumeData.portfolio}),r.a.createElement(v,{data:this.state.resumeData.resume}),r.a.createElement(h,{data:this.state.resumeData.main}))}}]),t}(n.Component),w=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{position:"relative",height:"100vh",width:"100vw"}},r.a.createElement("object",{data:"pdf/dmitrykutin-resume.pdf",type:"application/pdf",width:"100%",height:"100%"},r.a.createElement("p",null,"Seems the image isn't loading, try following the ",r.a.createElement("a",{href:"pdf/dmitrykutin-resume.pdf"},"link to my resume.")," ")))}}]),t}(n.Component),j=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(o.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found"},r.a.createElement("h1",null,"Uh oh! 404 Page Not Found"),r.a.createElement("h2",null,"Back to"),r.a.createElement("a",{href:"/"}," Homepage "))}}]),t}(n.Component),g=t(1),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(r.a.createElement(E.a,null,r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/",exact:!0,component:N}),r.a.createElement(g.a,{path:"/resume",exact:!0,component:w}),r.a.createElement(g.a,{path:"*",component:j}))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");k?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):y(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):y(e)}))}}()}},[[21,1,2]]]);
//# sourceMappingURL=main.0974b783.chunk.js.map