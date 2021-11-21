(this["webpackJsonpcrazy-panda-task"]=this["webpackJsonpcrazy-panda-task"]||[]).push([[0],{43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(16),l=a.n(r),s=a(7),o=a.n(s),i=a(17),u=a(3),b=a(18),j=a.n(b),m=a(0),d=function(e){var t=e.countries,a=e.handleCategoryClick,n=e.sortCategory,c=e.sortOrder;return Object(m.jsx)("div",{className:"table__wrapper",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{className:"table__header",children:Object(m.jsx)("tr",{className:"table__row",children:["Country","Capital","Area","Population"].map((function(e,t){return Object(m.jsx)("th",{className:"table__cell table__cell--head",children:Object(m.jsxs)("button",{className:"btn btn--cell-head",type:"button",onClick:function(){return a(e)},children:[e," \xa0",e===n?c?Object(m.jsx)("svg",{width:"8",height:"10",children:Object(m.jsx)("path",{d:"M0 6 L4 0 L8 6 L0 6"})}):Object(m.jsx)("svg",{width:"8",height:"10",children:Object(m.jsx)("path",{d:"M0 0 L8 0 L4 6 L0 0"})}):Object(m.jsx)("svg",{width:"8",height:"14",children:Object(m.jsx)("path",{d:"M0 6 L4 0 L8 6 L0 6 M0 8 L8 8 L4 14 L0 8"})})]})},e+t)}))})}),Object(m.jsx)("tbody",{className:"table__body",children:t&&t.map((function(e,t){return Object(m.jsxs)("tr",{className:"table__row",children:[Object(m.jsx)("td",{className:"table__cell table__cell--body",children:e.name.common}),Object(m.jsx)("td",{className:(null===e||void 0===e?void 0:e.capital)?"table__cell table__cell--body":"table__cell table__cell--body table__cell--unknown",children:e.capital?e.capital[0]:"unknown"}),Object(m.jsx)("td",{className:"table__cell table__cell--body",children:e.area}),Object(m.jsx)("td",{className:"table__cell table__cell--body",children:e.population})]},e.name.common+t)}))})]})})},h=function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.currentPageNumber,c=e.handlePagButtonClick,r=[],l=1;l<=Math.ceil(a/t);l++)r.push(l);return Object(m.jsx)("ul",{className:"pagination",children:r.map((function(e){return Object(m.jsx)("li",{className:"pagination__item",children:Object(m.jsx)("button",{className:n===e?"btn btn--pagination active":"btn btn--pagination",onClick:function(){return c(e)},children:Object(m.jsx)("span",{className:"btn__number",children:e})})},e)}))})},p=function(e){var t=e.handleInputChange;return Object(m.jsx)("form",{action:"",className:"form",children:Object(m.jsxs)("label",{className:"form__label",htmlFor:"form__input",children:["Filtration: \xa0",Object(m.jsx)("input",{id:"form__input",className:"form__input",type:"text",placeholder:"type your request here",onChange:t})]})})};a(43);var O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(50),l=Object(u.a)(r,2),s=l[0],b=(l[1],Object(n.useState)(1)),O=Object(u.a)(b,2),_=O[0],f=O[1],x=Object(n.useState)([]),g=Object(u.a)(x,2),v=g[0],C=g[1],N=Object(n.useState)("Country"),y=Object(u.a)(N,2),w=y[0],k=y[1],L=Object(n.useState)(!0),S=Object(u.a)(L,2),P=S[0],I=S[1],M=Object(n.useState)([]),E=Object(u.a)(M,2),z=E[0],B=E[1],A=Object(n.useState)(""),F=Object(u.a)(A,2),J=F[0],q=F[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(i.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://restcountries.com/v3.1/all");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(n.useEffect)((function(){f(1),B(a.filter((function(e){return!(!e.name.common||!String(e.name.common).toLowerCase().includes(J))||(!(!e.capital||!String(e.capital).toLowerCase().includes(J))||(!(!e.area||!String(e.area).toLowerCase().includes(J))||!(!e.population||!String(e.population).toLowerCase().includes(J))))})))}),[a,J]),Object(n.useEffect)((function(){!function(){switch(w){case"Country":B(z.sort((function(e,t){return e.name.common===t.name.common?0:P?(new Intl.Collator).compare(e.name.common,t.name.common):-1*(new Intl.Collator).compare(e.name.common,t.name.common)})));break;case"Capital":B(z.sort((function(e,t){var a=e&&e.capital,n=t&&t.capital;return a===n?0:void 0===a?1:void 0===n?-1:P?a>n?1:-1:a>n?-1:1})));break;case"Area":B(z.sort((function(e,t){return P?e.area>t.area:e.area<t.area})));break;case"Population":B(z.sort((function(e,t){return P?e.population>t.population:e.population<t.population})))}}()}),[z,w,P]),Object(n.useEffect)((function(){!function(){var e=_*s,t=e-s;C(z.slice(t,e))}()}),[z,_,s,w,P]),Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("section",{className:"section",children:[Object(m.jsx)("h1",{className:"section__title",children:"Crazy Panda test task"}),Object(m.jsxs)("div",{className:"section__content",children:[Object(m.jsx)(p,{handleInputChange:function(e){var t=e.target.value.trim().toLowerCase();q(t)}}),Object(m.jsx)(d,{countries:v,handleCategoryClick:function(e){e===w?I(!P):(k(e),I(!0))},sortCategory:w,sortOrder:P}),Object(m.jsx)(h,{itemsPerPage:s,totalItems:z.length,currentPageNumber:_,handlePagButtonClick:function(e){f(e)}})]})]})})};l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.36795847.chunk.js.map