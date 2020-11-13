(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},201:function(e,t,c){},202:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(23)),l=c.n(i),u=c(38),d=c(11),j=(c(100),c(239)),f=c(240),h=c(241),b=c(231),v=c(235),O=c(21),p=c(236);c(101);var x=function(e){var t=e.title,c=e.cases,a=e.total,s=e.active,r=e.isRed,o=Object(O.a)(e,["title","cases","total","active","isRed"]);return console.log(t,s),Object(n.jsx)(b.a,{onClick:o.onClick,className:"infoBox ".concat(s&&"infoBox--selected"," ").concat(r&&"infoBox--red"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(p.a,{color:"textSecondary",gutterBottom:!0,children:t}),Object(n.jsx)("h2",{className:"infoBox__cases ".concat(!r&&"infoBox__cases--green"),children:c}),Object(n.jsxs)(p.a,{className:"infoBox__total",color:"textSecondary",children:[a," Total"]})]})})},m=c(85),y=c(12),g=c.n(y),C={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return g()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,c){return g()(e).format("0a")}}}]}},k=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var w=function(e){var t=e.casesType,c=Object(a.useState)({}),s=Object(d.a)(c,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var c=k(e,t);o(c),console.log(c)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(n.jsx)(m.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:C})})};c(201);var N=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:e.country}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:g()(e.cases).format("0,0")})})]})}))})},_=c(86),S=c(242),I=c(237),B={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},R=function(e){var t=Object(_.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},T=function(e){return e?"+".concat(g()(e).format("0.0a")):"+0"},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return Object(n.jsx)(S.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:B[t].hex,fillColor:B[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*B[t].multiplier,children:Object(n.jsx)(I.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",g()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",g()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",g()(e.deaths).format("0,0")]})]})})})}))},F=c(238),L=c(243);c(202);var M=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(F.a,{center:a,zoom:s,children:[Object(n.jsx)(L.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),D(t,c)]})})};c(203);var z=function(){var e=Object(a.useState)("worldwide"),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)({}),o=Object(d.a)(r,2),i=o[0],O=o[1],p=Object(a.useState)([]),m=Object(d.a)(p,2),y=m[0],C=m[1],k=Object(a.useState)([]),_=Object(d.a)(k,2),S=_[0],I=_[1],B=Object(a.useState)([]),D=Object(d.a)(B,2),F=D[0],L=D[1],z=Object(a.useState)("cases"),E=Object(d.a)(z,2),A=E[0],J=E[1],P=Object(a.useState)({lat:.0236,lng:37.9062}),W=Object(d.a)(P,2),Y=W[0],q=W[1],V=Object(a.useState)(3),G=Object(d.a)(V,2),H=G[0],K=G[1];Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){O(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=R(e);C(t),I(e),L(c)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),console.log(A);var Q=function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.target.value,n="worldwide"===c?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(c),e.next=4,fetch(n).then((function(e){return e.json()})).then((function(e){s(c),O(e),q([e.countryInfo.lat,e.countryInfo.long]),K(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:"COVID-19 Tracker"}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",value:c,onChange:Q,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),y.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{isRed:!0,active:"cases"===A,onClick:function(e){return J("cases")},title:"Coronavirus Cases",cases:T(i.todayCases),total:g()(i.cases).format("0.0a")}),Object(n.jsx)(x,{active:"recovered"===A,onClick:function(e){return J("recovered")},title:"Recovered",cases:T(i.todayRecovered),total:g()(i.recovered).format("0.0a")}),Object(n.jsx)(x,{isRed:!0,active:"deaths"===A,onClick:function(e){return J("deaths")},title:"Deaths",cases:T(i.todayDeaths),total:g()(i.deaths).format("0.0a")})]}),Object(n.jsx)(M,{countries:S,casesType:A,center:Y,zoom:H})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsx)(v.a,{children:Object(n.jsxs)("div",{className:"app__information",children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(N,{countries:F}),Object(n.jsxs)("h3",{children:["Worldwide new ",A]}),Object(n.jsx)(w,{casesType:A})]})})})]})},E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),E()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.585f11fe.chunk.js.map