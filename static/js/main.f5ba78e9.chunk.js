(this["webpackJsonpproduct-cart"]=this["webpackJsonpproduct-cart"]||[]).push([[0],[,,,,,,,,,function(e,t,c){},,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(10),s=c.n(a),i=c(11),l=c(4),u=c.n(l),o=c(7),j=c(2),d=(c(18),"https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e");function b(){return m.apply(this,arguments)}function m(){return(m=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(d);case 3:return t=e.sent,e.next=6,t.json();case 6:return c=e.sent,e.abrupt("return",c.slice(0,6));case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var O=c(3),h=c(12),p=c(0),x=["children"],f=function(e){var t=e.children,c=Object(h.a)(e,x);return Object(p.jsx)("button",Object(O.a)(Object(O.a)({},c),{},{children:t}))},v=(c(20),function(e){return Object(p.jsx)("input",Object(O.a)({className:"myInpt"},e))}),N=(c(21),c(9),function(e){var t=e.onCancel,c=e.cardName,r=Object(n.useState)(""),a=Object(j.a)(r,2),s=a[0],i=a[1],l=Object(n.useState)(""),u=Object(j.a)(l,2),o=u[0],d=u[1],b=Object(n.useState)(!1),m=Object(j.a)(b,2),O=m[0],h=m[1],x=Object(n.useState)(!1),N=Object(j.a)(x,2),g=N[0],y=N[1],C=Object(n.useState)("This field in required"),S=Object(j.a)(C,2),k=S[0],w=S[1],_=Object(n.useState)("This field in required"),B=Object(j.a)(_,2),F=B[0],q=B[1],I=Object(n.useState)(!1),T=Object(j.a)(I,2),E=T[0],A=T[1];Object(n.useEffect)((function(){A(!k&&!F)}),[k,F]);var J=function(e){i(e.target.value);/[a-zA-Z]+/g.test(String(e.target.value).toLowerCase())?w(""):w("Only letters allowed")},$=function(e){d(e.target.value);/[0-9]+/g.test(Number(e.target.value))?e.target.value.length>12||e.target.value.length<10?q("Should contain 12 characters"):q(""):q("Only numbers allowed")},z=function(e){switch(e.target.name){case"name":h(!0);break;case"number":y(!0)}};return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("form",{className:"form-container",onSubmit:function(e){return e.preventDefault()},children:[O&&k?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{onChange:function(e){return J(e)},value:s,onBlur:function(e){return z(e)},name:"name",placeholder:"Name",type:"text",className:"input-error"}),Object(p.jsx)("i",{className:"far fa-times-circle circle-error"}),Object(p.jsx)("div",{className:"container-error",children:k})]}):Object(p.jsx)(v,{onChange:function(e){return J(e)},value:s,onBlur:function(e){return z(e)},name:"name",placeholder:"Name",type:"text",className:"myInpt"}),F&&g?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(v,{onChange:function(e){return $(e)},value:o,onBlur:function(e){return z(e)},name:"number",placeholder:"Number",type:"text",className:"input-error"}),Object(p.jsx)("i",{className:"far fa-times-circle circle-error"}),Object(p.jsx)("div",{className:"container-error",children:F})]}):Object(p.jsx)(v,{onChange:function(e){return $(e)},value:o,onBlur:function(e){return z(e)},name:"number",placeholder:"Number",type:"text",className:"myInpt"}),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(f,{className:"button button-order",disabled:!E,onClick:function(){i("")||d("")?(w("This field in required"),q("This field in required")):(console.log(s),console.log(o),console.log(c),i(""),d(""),t(!1))},children:Object(p.jsx)("span",{children:"order"})})})]})})}),g=(c(22),function(e){var t=e.name,c=e.category,n=e.price,r=e.onCancel;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("button",{onClick:function(){r(!1)},className:"button-close",children:"X"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"text-card text-card__modal",children:c}),Object(p.jsx)("h1",{className:"title-card title-card__modal",children:t})]}),Object(p.jsx)("div",{className:"container-price container-price__modal",children:Object(p.jsxs)("p",{className:"text-price text-price__modal",children:[Object(p.jsx)("span",{className:"span-price",children:"$"}),n]})}),Object(p.jsx)(N,{onCancel:r,cardName:t})]})})}),y=(c(23),function(e){var t=e.name,c=e.category,r=e.price,a=Object(n.useState)(!1),s=Object(j.a)(a,2),i=s[0],l=s[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{className:"text-card",children:c}),Object(p.jsx)("h1",{className:"title-card",children:t})]}),Object(p.jsxs)("div",{className:"container-price",children:[Object(p.jsxs)("p",{className:"text-price",children:[Object(p.jsx)("span",{className:"span-price",children:"$"}),r]}),Object(p.jsx)(f,{className:"button-add",onClick:function(){l(!0)},children:"buy"})]})]}),i&&Object(p.jsx)("div",{className:"container-modal",children:Object(p.jsx)("div",{className:"card-modal",children:Object(p.jsx)(g,{onCancel:l,name:t,category:c,price:r})})})]})}),C=(c(24),function(e){var t=e.cards,c=void 0===t?[]:t;return Object(p.jsx)("div",{className:"cards",children:c.map((function(e){return Object(p.jsx)(y,Object(O.a)({},e),e.price)}))})});var S=function(){var e,t=Object(n.useState)([]),c=Object(j.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!1),l=Object(j.a)(s,2),d=l[0],m=l[1];return Object(n.useEffect)((function(){Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,b();case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})))()}),[]),0===r.length?r:(e=Object(i.a)(r).reduce((function(e,t){return t.price>e.price?e:t})),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(C,{cards:r}),Object(p.jsx)(f,{className:"button",onClick:function(){m(!0)},children:"Buy cheapest"}),d&&Object(p.jsx)("div",{className:"container-modal",children:Object(p.jsx)("div",{className:"card-modal",children:Object(p.jsx)(g,{onCancel:m,name:e.name,category:e.category,price:e.price})})})]}))};c(25);s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.f5ba78e9.chunk.js.map