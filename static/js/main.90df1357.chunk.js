(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,c){},104:function(e,t,c){},105:function(e,t,c){},106:function(e,t,c){},204:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),s=c.n(a),r=c(7),o=c.n(r),i=(c(98),c(30)),l=c.n(i),u=c(48),d=c(11),j=c(239),f=c(240),h=c(241),b=c(231),v=c(235),O=c(21),p=(c(100),c(236));var x=function(e){var t=e.title,c=e.cases,a=e.active,s=e.total,r=Object(O.a)(e,["title","cases","active","total"]);return Object(n.jsx)(b.a,{onClick:r.onClick,className:"infoBox ".concat(a&&"infoBox--selected"),children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)(p.a,{className:"infoBox__title",color:"textSecondary",children:t}),Object(n.jsx)("h2",{className:"infoBox__cases",children:c}),Object(n.jsxs)(p.a,{className:"infoBox__total",children:[s," Total"]})]})})},m=(c(104),c(238)),g=c(243),y=c(86),C=c(13),N=c.n(C),_=c(242),w=c(237),k={cases:{hex:"#CC1034",rgb:"rgb(204, 16, 52)",half_op:"rgba(204, 16, 52, 0.5)",multiplier:600},recovered:{hex:"#7dd71d",rgb:"rgb(125, 215, 29)",half_op:"rgba(125, 215, 29, 0.5)",multiplier:600},deaths:{hex:"#fb4443",rgb:"rgb(251, 68, 67)",half_op:"rgba(251, 68, 67, 0.5)",multiplier:2e3}},S=function(e){var t=Object(y.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t},I=function(e){return e?"+".concat(N()(e).format("0.0a")):"+0"},T=function(e,t){return e.map((function(e){return Object(n.jsx)(_.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:k[t].hex,fillColor:k[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*k[t].multiplier,children:Object(n.jsx)(w.a,{children:Object(n.jsxs)("div",{className:"info-container",children:[Object(n.jsx)("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),Object(n.jsx)("div",{className:"info-name",children:e.country}),Object(n.jsxs)("div",{className:"info-confirmed",children:["Cases: ",N()(e.cases).format("0,0")]}),Object(n.jsxs)("div",{className:"info-recovered",children:["Recovered: ",N()(e.recovered).format("0,0")]}),Object(n.jsxs)("div",{className:"info-deaths",children:["Deaths: ",N()(e.deaths).format("0,0")]})]})})})}))};var B=function(e){var t=e.countries,c=e.casesType,a=e.center,s=e.zoom;return Object(n.jsx)("div",{className:"map",children:Object(n.jsxs)(m.a,{center:a,zoom:s,children:[Object(n.jsx)(g.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),T(t,c)]})})};c(105),c(106);var D=function(e){var t=e.countries;return Object(n.jsx)("div",{className:"table",children:t.map((function(e){var t=e.country,c=e.cases;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:t}),Object(n.jsx)("td",{children:Object(n.jsx)("strong",{children:N()(c).format("0,0")})})]})}))})},F=c(85),L={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return N()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callack:function(e,t,c){return N()(e).format("0a")}}}]}},M=function(e,t){var c,n=[];for(var a in e.cases){if(c){var s={x:a,y:e[t][a]-c};n.push(s)}c=e[t][a]}return n};var z=function(e){var t=e.casesType,c=Object(a.useState)({}),s=Object(d.a)(c,2),r=s[0],o=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(e){var t=M(e,"cases");o(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(n.jsx)("div",{children:(null===r||void 0===r?void 0:r.length)>0&&Object(n.jsx)(F.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:r}]},options:L})})};c(203);var E=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)("worldwide"),o=Object(d.a)(r,2),i=o[0],O=o[1],p=Object(a.useState)({}),m=Object(d.a)(p,2),g=m[0],y=m[1],C=Object(a.useState)([]),N=Object(d.a)(C,2),_=N[0],w=N[1],k=Object(a.useState)({lat:34,lng:-40}),T=Object(d.a)(k,2),F=T[0],L=T[1],M=Object(a.useState)(3),E=Object(d.a)(M,2),R=E[0],A=E[1],J=Object(a.useState)([]),P=Object(d.a)(J,2),W=P[0],Y=P[1],q=Object(a.useState)("cases"),V=Object(d.a)(q,2),G=V[0],H=V[1];return Object(a.useEffect)((function(){fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(e){y(e)}))}),[]),Object(a.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),c=S(e);w(c),Y(e),s(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(n.jsxs)("div",{className:"app",children:[Object(n.jsxs)("div",{className:"app__left",children:[Object(n.jsxs)("div",{className:"app__header",children:[Object(n.jsx)("h1",{children:" COVID-19 Tracker "}),Object(n.jsx)(j.a,{className:"app__dropdown",children:Object(n.jsxs)(f.a,{variant:"outlined",onChange:function(e){var t=e.target.value,c="worldwide"===t?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(t);fetch(c).then((function(e){return e.json()})).then((function(e){O(t),y(e),"worldwide"!=t&&(console.log(e.countryInfo.lat+" "+e.countryInfo.long),L([e.countryInfo.lat,e.countryInfo.long])),A(4)}))},value:i,children:[Object(n.jsx)(h.a,{value:"worldwide",children:"Worldwide"}),c.map((function(e){return Object(n.jsx)(h.a,{value:e.value,children:e.name})}))]})})]}),Object(n.jsxs)("div",{className:"app__stats",children:[Object(n.jsx)(x,{active:"cases"===G,onClick:function(e){return H("cases")},title:"Coronavirus Cases",cases:I(g.todayCases),total:I(g.cases)}),Object(n.jsx)(x,{active:"recovered"===G,onClick:function(e){return H("recovered")},title:"Recovered",cases:I(g.todayRecovered),total:I(g.recovered)}),Object(n.jsx)(x,{active:"deaths"===G,onClick:function(e){return H("deaths")},title:"Deaths",cases:I(g.todayDeaths),total:I(g.deaths)})]}),Object(n.jsx)(B,{casesType:G,countries:W,center:F,zoom:R})]}),Object(n.jsx)(b.a,{className:"app__right",children:Object(n.jsxs)(v.a,{children:[Object(n.jsx)("h3",{children:"Live Cases by Country"}),Object(n.jsx)(D,{countries:_}),Object(n.jsxs)("h3",{children:["Worldwide New ",G]}),Object(n.jsx)(z,{casesType:G})]})})]})},R=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,245)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};o.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(E,{})}),document.getElementById("root")),R()},98:function(e,t,c){}},[[204,1,2]]]);
//# sourceMappingURL=main.90df1357.chunk.js.map