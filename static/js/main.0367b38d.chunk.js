(this.webpackJsonpedfa3ly=this.webpackJsonpedfa3ly||[]).push([[0],{103:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(33),r=c.n(n),l=(c(41),c(42),c(2)),i=(c(43),c(34)),j=c.n(i),o=c(0),d=Object(a.createContext)();function b(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(s),i=Object(l.a)(r,2),b=i[0],u=i[1],m=Object(a.useState)([]),O=Object(l.a)(m,2),h=O[0],x=O[1];return Object(a.useEffect)((function(){j.a.get("https://test-api.edfa3ly.io/product").then((function(e){var t=e.data;n(t),u(t)}))}),[n]),Object(a.useEffect)((function(){u(0==b.length?s:b)}),[u]),Object(a.useEffect)((function(){fetch("https://test-api.edfa3ly.io/category").then((function(e){return e.json()})).then((function(e){return x(e)}))}),[x]),Object(o.jsx)(d.Provider,{value:{products:s,setProducts:n,filterdProducts:b,setFilterdProducts:u,categs:h,setCategs:x},children:e.children})}c(63);function u(e){return Object(o.jsx)("div",{className:"header mb-4 p-3 text-center ",children:Object(o.jsx)("h2",{className:"p-3",children:e.title})})}c(64);var m=c(9);function O(){var e=Object(a.useContext)(d),t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){n(e.categs)}),[e.categs]),Object(o.jsxs)("div",{className:"categs mb-4 p-3 text-center",children:[Object(o.jsx)("h2",{className:"p-3 fw-bold",children:"Categories"}),Object(o.jsx)("div",{className:"row",children:s.map((function(t){return Object(o.jsx)("div",{className:"col-6 col-md-4 col-lg mb-2",children:Object(o.jsx)(m.b,{to:"/edfa3ly-master/products/",onClick:function(){return e.setFilterdProducts(e.products.filter((function(e){return e.categoryId==t.id})))},children:Object(o.jsxs)("div",{className:"categ shadow position-relative",children:[Object(o.jsx)("div",{className:"img-box",children:Object(o.jsx)("img",{src:t.image,className:"w-100",alt:t.name})}),Object(o.jsx)("p",{children:t.name})]})})},t.id)}))})]})}c(72);function h(e){var t=e.props,c=Object(a.useState)(Array(5).fill("icon")),s=Object(l.a)(c,2),n=s[0];s[1];return Object(o.jsxs)("div",{className:"pro-comp text-center mb-3 p-3 bg-white shadow",children:[Object(o.jsx)("div",{className:"img-box",children:Object(o.jsxs)(m.b,{to:{pathname:"".concat("/edfa3ly-master","/products/").concat(t.id),history:"".concat("/edfa3ly-master","/products/").concat(t.id)},className:"",children:[Object(o.jsx)("img",{src:t.image,className:"w-100",alt:t.name})," "]})}),Object(o.jsx)("div",{className:"pro-name my-2",children:Object(o.jsx)("h4",{className:" m-0",children:t.name})}),Object(o.jsx)("div",{className:"rating my-2",children:n.map((function(e,c){return c<5?Object(o.jsx)("i",{className:"fa".concat(c<Number(t.rating)?"s":"r"," fa-star")},c):""}))}),Object(o.jsx)("div",{className:"price my-2",children:Object(o.jsx)("p",{className:"lead fw-bold m-0",children:"".concat(t.price," ").concat(t.currency)})}),Object(o.jsx)("div",{className:"add-btn my-2",children:Object(o.jsx)("button",{className:"btn btn-primary",children:Object(o.jsx)("i",{className:"fas fa-cart-plus"})})})]})}var x=c(10);c(73);function f(e){var t=Object(a.useContext)(d),c=Object(a.useState)([]),s=Object(l.a)(c,2),n=s[0],r=s[1];Object(a.useEffect)((function(){r([]),t.filterdProducts.map((function(e){return r(n.push(e.price))})),r(n)}),[t.setFilterdProducts]);var i=Object(a.useState)(0),j=Object(l.a)(i,2),b=j[0],u=j[1],m=Object(a.useState)(0),O=Object(l.a)(m,2),h=O[0],f=O[1];function p(){e.setS(b),e.setE(h)}return Object(a.useEffect)((function(){u(Math.min.apply(Math,Object(x.a)(n))),f(Math.max.apply(Math,Object(x.a)(n)))}),[]),Object(o.jsxs)("div",{className:"price-filter my-4 p-3",children:[Object(o.jsx)("h4",{children:"Rating"}),Object(o.jsxs)("form",{children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"start",className:"form-label d-block",children:["Start From ",b]}),Object(o.jsx)("input",{className:"w-100",id:"start",type:"number",value:b,min:Math.min.apply(Math,Object(x.a)(n)),max:Math.max.apply(Math,Object(x.a)(n)),onChange:function(e){return u(e.target.value)},onBlur:function(){return p()}})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{htmlFor:"end",className:"form-label d-block",children:["End To ",h]}),Object(o.jsx)("input",{className:"w-100",id:"end",type:"number",value:h,min:Math.min.apply(Math,Object(x.a)(n)),max:Math.max.apply(Math,Object(x.a)(n)),onChange:function(e){return f(e.target.value)},onBlur:function(){return p()}})]})]})]})}c(74);function p(e){Object(a.useContext)(d);var t=Object(a.useState)(Array(5).fill("icon")),c=Object(l.a)(t,2),s=c[0],n=(c[1],Object(a.useState)(e.rate)),r=Object(l.a)(n,2),i=r[0],j=r[1];function b(t){console.log(t),j(t),e.setR(t)}function u(e){return Object(o.jsx)("p",{className:"border p-2",onClick:function(){return b(e)},children:s.map((function(t,c){return c<5?Object(o.jsx)("i",{className:"fa".concat(c<e?"s":"r"," fa-star")},c):""}))})}return Object(o.jsxs)("div",{className:"rate-filter my-4 p-3",children:[Object(o.jsxs)("h4",{children:["Rating : ",0==i?"all":i+" Stars"]}),u(5),u(4),u(3),u(2),u(1),Object(o.jsx)("p",{className:"border p-2 fw-bold",onClick:function(){return b(0)},children:"All Ratings"})]})}function v(){var e=Object(a.useContext)(d),t=Object(a.useState)(0),c=Object(l.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(0),i=Object(l.a)(r,2),j=i[0],b=i[1],u=Object(a.useState)(0),m=Object(l.a)(u,2),O=m[0],h=m[1];return Object(o.jsxs)("div",{className:"filters",children:[Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col col-md-12",children:Object(o.jsx)(f,{setS:n,setE:b})}),Object(o.jsx)("div",{className:"col col-md-12",children:Object(o.jsx)(p,{rate:O,setR:h})})]}),Object(o.jsx)("button",{className:"btn btn-success w-100",onClick:function(t){return function(t){t.preventDefault(),s&&O?(console.log("1"),e.setFilterdProducts(e.products.filter((function(e){return e.rating==O&&e.price>=s&&e.price<=j})))):0==s&&0==O?console.log("2"):O?(console.log("3"),e.setFilterdProducts(e.products.filter((function(e){return e.rating==O})))):(console.log("4"),e.setFilterdProducts(e.products.filter((function(e){return e.price>=s&&e.price<=j}))))}(t)},children:"filter"})]})}function g(){var e=Object(a.useContext)(d),t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],n=c[1];return Object(a.useEffect)((function(){n(e.filterdProducts)}),[e.filterdProducts]),Object(o.jsx)("div",{className:"products",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(u,{title:"products"}),e.categs.length?Object(o.jsx)(O,{}):Object(o.jsx)("p",{children:"loading..."}),Object(o.jsx)("div",{className:"productsAndFilters mb-4 p-3",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-12 col-md-4",children:Object(o.jsx)(v,{})}),e.filterdProducts.length!=s.length?Object(o.jsx)("p",{children:"loading..."}):Object(o.jsx)("div",{className:"col-12 col-md-8 bg-light p-3",children:Object(o.jsx)("div",{className:"row",children:s.map((function(e){return Object(o.jsx)("div",{className:"col-12 col-md-6 col-lg-4",children:Object(o.jsx)(h,{props:e})},e.id)}))})})]})})]})})}var N=c(3);function y(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(u,{title:"edf3ly"}),Object(o.jsx)(O,{})]})}function C(){var e=Object(a.useContext)(d);return Object(o.jsx)("div",{className:"navbar p-0 mb-4",children:Object(o.jsx)("nav",{className:"navbar w-100 navbar-expand-lg navbar-dark bg-dark",children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)(m.c,{className:"navbar-brand",to:"/edfa3ly-master/",exact:!0,children:Object(o.jsx)("img",{src:"/edfa3ly-master/images/edfa3ly-logo.e1c5bdc9.png"})}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(o.jsxs)("ul",{className:"navbar-nav m-auto mb-2 mb-lg-0",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(m.c,{className:"nav-link","aria-current":"page",to:"/edfa3ly-master/",exact:!0,children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(m.c,{className:"nav-link",to:"/edfa3ly-master/products/",onClick:function(){return e.setFilterdProducts(e.products)},children:"Products"})})]})})]})})})}c(75);function S(e){console.log(e);var t=Object(a.useContext)(d),c=Object(a.useState)({}),s=Object(l.a)(c,2),n=s[0],r=s[1],i=Object(a.useState)(1),j=Object(l.a)(i,2),b=j[0],u=j[1];return Object(a.useEffect)((function(){r.apply(void 0,Object(x.a)(t.products.filter((function(t){return t.id==e.match.params.id}))))}),[]),Object(o.jsx)("div",{className:"product-info",children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-12 col-md-4 col-lg-3 mb-2",children:Object(o.jsx)("div",{className:"img-box p-2 border",children:Object(o.jsx)("img",{src:n.image,className:"w-100",alt:n.name})})}),Object(o.jsx)("div",{className:"col-12 col-md-8 col-lg-6 mb-2",children:Object(o.jsxs)("div",{style:{borderColor:n.color},className:"details p-2",children:[Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Name: "}),n.name]}),Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Available colors: "}),n.color]}),Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Release Date: "}),n.releaseDate]}),Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Price: "}),"".concat(n.price," ").concat(n.currency)]})]})}),Object(o.jsx)("div",{className:"col-12 offset-md-4 col-md-4 offset-lg-0 col-lg-3 mb-2",children:Object(o.jsxs)("div",{className:"add-to-cart p-2 border text-center",children:[Object(o.jsx)("h4",{className:"",children:"Add to cart"}),Object(o.jsxs)("p",{className:"lead",children:[Object(o.jsx)("strong",{children:"Mount: "}),Object(o.jsx)("input",{type:"number",min:"1",max:"15",value:b,onChange:function(e){return u(e.target.value)}})]}),Object(o.jsx)("p",{className:"lead total",children:"".concat(b>=15?15*n.price:b<1?1*n.price:b*n.price," ").concat(n.currency)}),Object(o.jsx)("button",{className:"btn btn-primary",onClick:function(){return b>15?u(15):b<1?u(1):console.log(b)},children:"Add to Cart"})]})})]})})})}var w=function(){return Object(o.jsx)(N.d,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(C,{}),Object(o.jsx)(N.b,{path:"/edfa3ly-master/",exact:!0,children:Object(o.jsx)(y,{})}),Object(o.jsx)(N.b,{path:"/edfa3ly-master/products",exact:!0,children:Object(o.jsx)(g,{})}),Object(o.jsx)(N.b,{component:S,path:"/edfa3ly-master/products/:id"}),Object(o.jsx)(N.a,{from:"/*",to:"/edfa3ly-master/"})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};c(76),c(77),c(98),c(99);r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(b,{children:Object(o.jsx)(m.a,{children:Object(o.jsx)(w,{})})})}),document.getElementById("root")),P()},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){}},[[103,1,2]]]);
//# sourceMappingURL=main.0367b38d.chunk.js.map