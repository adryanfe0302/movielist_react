(this.webpackJsonplinkaja=this.webpackJsonplinkaja||[]).push([[0],{124:function(e,t,n){},160:function(e,t,n){},161:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(37),s=n.n(i),r=(n(124),n(88)),j=n(22),o=n(53),l=n(165),b=n(65),h=n(39),u=n(168),O=n(169),d=n(163),f=n(66),m=n(170),p=(n(93),n(71)),x=n.n(p),g=n(70),v=n(29),w=n.n(v),S=n(10),k=l.a.RangePicker;var T=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),i=t[0],s=t[1],r=Object(a.useState)([]),j=Object(o.a)(r,2),l=j[0],p=j[1],v=Object(a.useState)(!1),T=Object(o.a)(v,2),y=T[0],Y=T[1],C=Object(a.useState)([]),M=Object(o.a)(C,2),F=M[0],N=M[1],B=Object(S.jsx)(g.a,{style:{fontSize:24},spin:!0}),D=c.a.lazy((function(){return n.e(3).then(n.bind(null,172))})),E=function(e){var t=[];e.forEach((function(e){var n={value:e.title,label:e.title};t.push(n)})),N(t)};return Object(a.useEffect)((function(){!function(){try{Y(!0),x.a.get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies").then((function(e){s(e.data),p(e.data),E(e.data),Y(!1)}))}catch(e){}}()}),[]),Object(S.jsxs)("div",{className:"pd-5",children:[Object(S.jsxs)(b.a,{children:[Object(S.jsx)(h.a,{span:8,children:Object(S.jsx)(u.a,{dropdownMatchSelectWidth:1,style:{width:"90%"},options:F,onSelect:function(e){p(i.filter((function(t){return t.title===e})))},onSearch:function(e){if(0===e.length)p(i);else{var t=i.filter((function(t){return t.title.toLowerCase().includes(e.toLowerCase())}));E(t)}},children:Object(S.jsx)(O.a.Search,{allowClear:!0,placeholder:"search movies",enterButton:!0})})}),Object(S.jsx)(h.a,{span:8,children:Object(S.jsx)(k,{showTime:{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",onChange:function(e,t){""===t[0]&&""===t[1]?p(i):function(e,t){var n=[];i.forEach((function(a){w()(a.showTime)>=e&&w()(a.showTime)<=t&&n.push(a)})),p(n)}(w()(t[0]),w()(t[1]))}})})]}),Object(S.jsx)("br",{}),Object(S.jsx)(b.a,{gutter:[16,24],children:y?Object(S.jsx)(d.a,{className:"spinner",indicator:B}):Object(S.jsx)(a.Suspense,{fallback:"loading...",children:0===l.length?Object(S.jsx)(f.a,{description:!1,className:"spinner"}):l.map((function(e){return Object(S.jsx)(D,{movie:e},e.id)}))})}),Object(S.jsx)(m.a,{})]})},y=n(166),Y=n(167),C=n(164),M=n(171);var F=function(){var e=Object(j.e)(),t=Object(a.useState)(!1),n=Object(o.a)(t,2),c=n[0],i=n[1],s=Object(a.useState)({title:"",image:"",like:0,showTime:"",id:""}),r=Object(o.a)(s,2),l=r[0],u=r[1],O=Object(S.jsx)(g.a,{style:{fontSize:24},spin:!0});return Object(a.useEffect)((function(){!function(){try{i(!0);var t=e.location.pathname.substr(8);x.a.get("https://5f50ca542b5a260016e8bfb0.mockapi.io/api/v1/movies/".concat(t)).then((function(e){var t=e.data,n=t.id,a=t.image,c=t.title,s=t.like,r=t.showTime;i(!1),u({title:c,image:a,like:s,showTime:r,id:n})}))}catch(n){}}()}),[]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(b.a,{children:Object(S.jsx)(y.a,{className:"site-page-header",onBack:function(){return e.push("/")},title:"Back",subTitle:l.title})}),c?Object(S.jsx)(d.a,{className:"spinner",indicator:O}):Object(S.jsxs)(Y.a,{style:{width:"50%",margin:"auto"},cover:Object(S.jsx)("img",{alt:"example",src:l.image}),children:[Object(S.jsxs)("h1",{children:[" ",l.title," "]}),Object(S.jsx)(C.a,{}),Object(S.jsxs)(h.a,{span:24,children:[w()(l.showTime).format("DD MMM YYYY h:mm A"),Object(S.jsxs)("span",{className:"fright",children:[" ",Object(S.jsx)(M.a,{})," ",Object(S.jsxs)("b",{children:[l.like," "]})]})]})]})]})};n(160);var N=function(){return Object(S.jsx)(S.Fragment,{children:Object(S.jsxs)(r.a,{children:[Object(S.jsx)(j.a,{exact:!0,path:"/",component:T}),Object(S.jsx)(j.a,{exact:!0,path:"/detail/:id",component:F})]})})},B=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,173)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(N,{})}),document.getElementById("root")),B()}},[[161,1,2]]]);
//# sourceMappingURL=main.97a2ce0e.chunk.js.map