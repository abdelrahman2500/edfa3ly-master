(this.webpackJsonpedfa3ly=this.webpackJsonpedfa3ly||[]).push([[0],{104:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(33),r=c.n(n),l=(c(41),c(42),c(2)),i=(c(43),c(34)),o=c.n(i),j=c(0),d=Object(a.createContext)();function b(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(s),i=Object(l.a)(r,2),b=i[0],u=i[1],m=Object(a.useState)([]),O=Object(l.a)(m,2),h=O[0],x=O[1];return Object(a.useEffect)((function(){o.a.get("https://test-api.edfa3ly.io/product").then((function(e){var t=e.data;n(t),u(t)}))}),[n]),Object(a.useEffect)((function(){u(0==b.length?s:b)}),[u]),Object(a.useEffect)((function(){fetch("https://test-api.edfa3ly.io/category").then((function(e){return e.json()})).then((function(e){return x(e)}))}),[x]),Object(j.jsx)(d.Provider,{value:{products:s,setProducts:n,filterdProducts:b,setFilterdProducts:u,categs:h,setCategs:x},children:e.children})}c(63);function u(e){return Object(j.jsx)("div",{className:"header mb-4 p-3 text-center ",children:Object(j.jsx)("h2",{className:"p-3",children:e.title})})}c(64);var m=c(10);function O(){var e=Object(a.useContext)(d),t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){n(e.categs)}),[e.categs]),Object(j.jsxs)("div",{className:"categs mb-4 p-3 text-center",children:[Object(j.jsx)("h2",{className:"p-3 fw-bold",children:"Categories"}),Object(j.jsx)("div",{className:"row",children:s.map((function(t){return Object(j.jsx)("div",{className:"col-6 col-md-4 col-lg mb-2",children:Object(j.jsx)(m.b,{to:"/edfa3ly-master/products/",onClick:function(){return e.setFilterdProducts(e.products.filter((function(e){return e.categoryId==t.id})))},children:Object(j.jsxs)("div",{className:"categ shadow position-relative",children:[Object(j.jsx)("div",{className:"img-box",children:Object(j.jsx)("img",{src:t.image,className:"w-100",alt:t.name})}),Object(j.jsx)("p",{children:t.name})]})})},t.id)}))})]})}c(72);function h(e){var t=e.props,c=Object(a.useState)(Array(5).fill("icon")),s=Object(l.a)(c,2),n=s[0];s[1];return Object(j.jsxs)("div",{style:{borderRightColor:t.color},className:"pro-comp text-center mb-3 p-3 bg-white shadow",children:[Object(j.jsx)("div",{className:"img-box",children:Object(j.jsxs)(m.b,{to:{pathname:"/edfa3ly-master/products/".concat(t.id)},className:"",children:[Object(j.jsx)("img",{src:t.image,className:"w-100",alt:t.name})," "]})}),Object(j.jsx)("div",{className:"pro-name my-2",children:Object(j.jsx)("h4",{className:" m-0",children:t.name})}),Object(j.jsx)("div",{className:"rating my-2",children:n.map((function(e,c){return c<5?Object(j.jsx)("i",{className:"fa".concat(c<Number(t.rating)?"s":"r"," fa-star")},c):""}))}),Object(j.jsx)("div",{className:"price my-2",children:Object(j.jsx)("p",{className:"lead fw-bold m-0",children:"".concat(t.price," ").concat(t.currency)})}),Object(j.jsx)("div",{className:"add-btn my-2",children:Object(j.jsx)("button",{className:"btn btn-primary",children:Object(j.jsx)("i",{className:"fas fa-cart-plus"})})})]})}var x=c(5);c(73);function f(e){var t=Object(a.useContext)(d),c=Object(a.useState)([]),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(Math.min.apply(Math,Object(x.a)(n))),o=Object(l.a)(i,2),b=o[0],u=o[1],m=Object(a.useState)(Math.max.apply(Math,Object(x.a)(n))),O=Object(l.a)(m,2),h=O[0],f=O[1];function p(){e.setS(b),e.setE(h)}return Object(a.useEffect)((function(){t.products.map((function(e){return r(n.push(e.price))})),r(n)}),[t.setFilterdProducts]),Object(a.useEffect)((function(){u(Math.min.apply(Math,Object(x.a)(n))),f(Math.max.apply(Math,Object(x.a)(n)))}),[]),p(),Object(j.jsxs)("div",{className:"price-filter my-4",children:[Object(j.jsx)("h4",{children:"Rating"}),Object(j.jsxs)("form",{children:[Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"start",className:"form-label d-block",children:["Start From ",b]}),Object(j.jsx)("input",{className:"w-100",id:"start",type:"number",value:b,min:Math.min.apply(Math,Object(x.a)(n)),max:Math.max.apply(Math,Object(x.a)(n)),onChange:function(e){return u(e.target.value)},onBlur:function(){return p()}})]}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("label",{htmlFor:"end",className:"form-label d-block",children:["End To ",h]}),Object(j.jsx)("input",{className:"w-100",id:"end",type:"number",value:h,min:Math.min.apply(Math,Object(x.a)(n)),max:Math.max.apply(Math,Object(x.a)(n)),onChange:function(e){return f(e.target.value)},onBlur:function(){return p()}})]})]})]})}c(74);function p(e){Object(a.useContext)(d);var t=Object(a.useState)(Array(5).fill("icon")),c=Object(l.a)(t,2),s=c[0],n=(c[1],Object(a.useState)(e.rate)),r=Object(l.a)(n,2),i=r[0],o=r[1];function b(t){console.log(t),o(t),e.setR(t)}function u(e){return Object(j.jsx)("p",{className:"border p-2",onClick:function(){return b(e)},children:s.map((function(t,c){return c<5?Object(j.jsx)("i",{className:"fa".concat(c<e?"s":"r"," fa-star")},c):""}))})}return Object(j.jsxs)("div",{className:"rate-filter my-4",children:[Object(j.jsxs)("h4",{children:["Rating : ",0==i?"all":i+" Stars"]}),u(5),u(4),u(3),u(2),u(1),Object(j.jsx)("p",{className:"border p-2 fw-bold",onClick:function(){return b(0)},children:"All Ratings"})]})}c(75);function g(e){var t=Object(a.useContext)(d),c=Object(a.useState)(new Set),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)([]),o=Object(l.a)(i,2),b=o[0],u=o[1],m=Object(a.useState)([]),O=Object(l.a)(m,2),h=O[0],f=O[1];return Object(a.useEffect)((function(){t.products.map((function(e){return r(n.add(e.color))})),u(Object(x.a)(n))}),[t.products]),Object(a.useEffect)((function(){f(h)}),[f]),e.setC(h),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{className:h.length<1?"":"d-none",children:Object(j.jsx)("span",{className:"badge border p-2 m-1 invisible",children:" "})}),Object(j.jsx)("div",{className:h.length>=1?"bg-dark":"d-none",children:h.map((function(e,t){return Object(j.jsx)("span",{className:"badge border p-2 m-1",style:{backgroundColor:e},children:" "},t)}))}),Object(j.jsx)("div",{className:"colors-filter border border-2 my-3 p-3",children:b.map((function(e,t){return Object(j.jsxs)("div",{className:"form-check",children:[Object(j.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:function(e){return e.target.checked?f([].concat(Object(x.a)(h),[e.target.value])):f(1==h.length?[]:h.filter((function(t){return t!=e.target.value})))},value:e,id:"flexCheckDefault".concat(t)}),Object(j.jsx)("label",{className:"form-check-label",htmlFor:"flexCheckDefault".concat(t),children:e})]},t)}))})]})}function v(){var e=Object(a.useContext)(d),t=Object(a.useState)(0),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(0),i=Object(l.a)(r,2),o=i[0],b=i[1],u=Object(a.useState)(0),m=Object(l.a)(u,2),O=m[0],h=m[1],x=Object(a.useState)([]),v=Object(l.a)(x,2),N=v[0],y=v[1],C=Object(a.useState)([]),S=Object(l.a)(C,2),k=S[0],w=S[1];return Object(a.useEffect)((function(){w(e.products)}),[e.products]),Object(j.jsxs)("div",{className:"filters",children:[Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col col-md-12",children:e.products.length==k.length?Object(j.jsx)(f,{setS:n,setE:b}):"loading..."}),Object(j.jsx)("div",{className:"col-6 col-md-12",children:Object(j.jsx)(g,{setC:y})}),Object(j.jsx)("div",{className:"col col-md-12",children:Object(j.jsx)(p,{rate:O,setR:h})})]}),Object(j.jsx)("button",{className:"btn btn-success w-100",onClick:function(t){return function(t){t.preventDefault(),e.setFilterdProducts(e.products.filter((function(e){return(0==O||e.rating==O)&&(!s||!o||e.price>=s&&e.price<=o)&&(0==N.length||-1!=N.indexOf(e.color))})))}(t)},children:"filter"})]})}function N(){var e=Object(a.useContext)(d),t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(30),i=Object(l.a)(r,2),o=i[0],b=(i[1],Object(a.useState)(1)),m=Object(l.a)(b,2),x=m[0],f=m[1];return Object(a.useEffect)((function(){n(e.filterdProducts)}),[e.filterdProducts]),Object(j.jsx)("div",{className:"products",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(u,{title:"products"}),e.categs.length?Object(j.jsx)(O,{}):Object(j.jsx)("p",{children:"loading..."}),Object(j.jsx)("div",{className:"productsAndFilters mb-4 p-3",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-4",children:Object(j.jsx)(v,{})}),e.filterdProducts.length!=s.length?Object(j.jsx)("p",{children:"loading..."}):Object(j.jsxs)("div",{className:"col-12 col-md-8 bg-light p-3",children:[Object(j.jsxs)("div",{className:"page-num d-flex justify-content-between mb-2",children:[Object(j.jsxs)("span",{className:"badge bg-info",children:[s.length," products"]}),Object(j.jsxs)("span",{className:"badge bg-dark",children:["# ",x]})]}),Object(j.jsx)("div",{className:"row",children:0==s.length?Object(j.jsx)("div",{className:"text-center",children:Object(j.jsx)("h4",{children:"There are no products"})}):s.map((function(e,t){return t<x*o&&t>=(x-1)*o?Object(j.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(j.jsx)(h,{props:e})},e.id):""}))}),Object(j.jsx)("nav",{"aria-label":"Page navigation example",children:Object(j.jsx)("ul",{className:"pagination justify-content-center py-0",children:e.filterdProducts.map((function(t,c){return c<Math.ceil(e.filterdProducts.length/o)?Object(j.jsx)("span",{className:c+1==x?"active":"",onClick:function(){return f(c+1)},children:Object(j.jsx)("li",{className:"page-item",onClick:function(){window.scrollTo(0,0)},children:Object(j.jsx)("span",{className:"page-link",children:c+1})})},t.id):""}))})})]})]})})]})})}var y=c(3);function C(){return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)(u,{title:"edf3ly"}),Object(j.jsx)(O,{})]})}function S(){var e=Object(a.useContext)(d),t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(y.f)().location.pathname;return Object(j.jsx)("div",{className:"navbar p-0 mb-4",children:Object(j.jsx)("nav",{className:"navbar w-100 navbar-expand-lg navbar-dark bg-dark",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(m.c,{className:"navbar-brand",to:"/edfa3ly-master/",exact:!0,children:Object(j.jsx)("img",{src:"/edfa3ly-master/images/edfa3ly-logo.e1c5bdc9.png"})}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav m-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(m.c,{className:"nav-link","aria-current":"page",to:"/edfa3ly-master/",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(m.c,{className:"nav-link",to:"/edfa3ly-master/products/",onClick:function(){return e.setFilterdProducts(e.products)},children:"Products"})})]}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:s,onChange:function(e){return n(e.target.value)}}),Object(j.jsx)(m.b,{to:""==s.trim()?r:"/edfa3ly-master/products/",onClick:function(){return""==s.trim()?"":e.setFilterdProducts(e.products.filter((function(e){return-1!=e.name.toLowerCase().indexOf(s.trim().toLowerCase())||-1!=e.color.toLowerCase().indexOf(s.trim().toLowerCase())})))},children:Object(j.jsx)("button",{className:"btn btn-outline-success",type:"button",children:"Search"})})]})]})]})})})}c(76);function k(e){var t=Object(a.useContext)(d),c=a.useState.apply(void 0,Object(x.a)(t.products.filter((function(t){return t.id==e.match.params.id})))),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(1),o=Object(l.a)(i,2),b=o[0],u=o[1],m=Object(a.useState)(),O=Object(l.a)(m,2),h=O[0],f=O[1];return Object(a.useEffect)((function(){r.apply(void 0,Object(x.a)(t.products.filter((function(t){return t.id==e.match.params.id})))),f.apply(void 0,Object(x.a)(t.categs.filter((function(e){return e.id==n.categoryId}))))}),[t.products,t.categs]),Object(j.jsx)("div",{className:"product-info bg-light h-100",children:n&&h?Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-12 col-md-4 col-lg-3 mb-2",children:Object(j.jsx)("div",{style:{backgroundColor:n.color},className:"img-box p-2 border",children:Object(j.jsx)("img",{src:n.image,className:"w-100",alt:n.name})})}),Object(j.jsx)("div",{className:"col-12 col-md-8 col-lg-6 mb-2",children:Object(j.jsxs)("div",{style:{borderRightColor:n.color},className:"details p-2",children:[Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Name: "}),n.name]}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Available colors: "}),n.color," ",Object(j.jsx)("i",{className:"fas fa-arrow-right"})]}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Category: "}),h.name]}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Release Date: "}),n.releaseDate.slice(0,10)]}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Price: "}),"".concat(n.price," ").concat(n.currency)]})]})}),Object(j.jsx)("div",{className:"col-12 offset-md-4 col-md-4 offset-lg-0 col-lg-3 mb-2",children:Object(j.jsxs)("div",{className:"add-to-cart p-2 border text-center",children:[Object(j.jsx)("h4",{className:"",children:"Add to cart"}),Object(j.jsxs)("p",{className:"lead",children:[Object(j.jsx)("strong",{children:"Amount: "}),Object(j.jsx)("input",{type:"number",min:"1",max:"15",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsx)("p",{className:"lead total",children:"".concat(b>=15?15*n.price:b<1?1*n.price:b*n.price," ").concat(n.currency)}),Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return b>15?u(15):b<1?u(1):console.log(b)},children:"Add to Cart"})]})})]})}):"loading..."})}var w=function(){return Object(j.jsx)(m.a,{children:Object(j.jsx)(y.c,{children:Object(j.jsx)(b,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(S,{}),Object(j.jsx)(y.a,{component:C,path:"/edfa3ly-master",exact:!0}),Object(j.jsx)(y.a,{component:N,path:"/edfa3ly-master/products",exact:!0}),Object(j.jsx)(y.a,{component:k,path:"/edfa3ly-master/products/:id",exact:!0})]})})})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,107)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(77),c(78),c(99),c(100);r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),P()},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.cb3bb61f.chunk.js.map