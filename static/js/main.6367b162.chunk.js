(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{28:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a,i,o,c=n(1),r=n.n(c),s=n(20),l=n.n(s),d=(n(28),n(21)),h=n(16),m=n(18),p=n(51),x=n(4),j={up:function(){},down:function(e){return"@media (max-width:".concat({xs:"715.98px",sm:"877.98px",md:"991.98px",lg:"1350.98px",xl:"1500px"}[e],")")}},f={root:{overflow:"auto",fontFamily:"Roboto",color:"#363732",backgroundColor:"#DCE1E9",height:"100vh"},title:Object(x.a)({overflow:"hidden",height:"94px",width:"100%",backgroundColor:"#8D9DB9","& h1":{fontSize:"40px",color:"#363732",display:"inline-block",position:"relative",left:"230px"}},j.down("xs"),{"& h1":{color:"#363732",display:"inline-block",position:"relative",left:"80px"}}),scores:Object(x.a)({display:"flex",flexDirection:"column",alignItems:"flex-end",height:"64px",margin:"1rem","& h2":{display:"inline-block",margin:"0.5rem"}},j.down("lg"),{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}),cardContainer:(a={display:"grid",height:"calc(100vh - 265px)",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1rem",margin:"1.5rem",marginBottom:"5rem"},Object(x.a)(a,j.down("xl"),{height:"calc(100vh - 235px)"}),Object(x.a)(a,j.down("sm"),{gridTemplateColumns:"repeat(3, 1fr)",height:"calc(100vh + 120px )"}),Object(x.a)(a,j.down("xs"),{marginBottom:"8rem",gridTemplateColumns:"repeat(3, 1fr)",height:"calc(100vh + 25px)"}),a),footer:{display:"flex",alignItems:"center",fontSize:"20px",justifyContent:"center",height:"44px",width:"100%",backgroundColor:"#8D9DB9","& p":{margin:"1rem"},"& a":{color:"inherit"},"&:hover a":{transform:"scale(1.3)",color:"gold"}}},b=n(52),g=n(50),u={card:Object(x.a)({backgroundColor:"#C0C9D8",width:"70%",height:"260px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset","&:hover":{transform:" scale(1.1)",cursor:"pointer",transition:"all 0.4s ease-in-out"},"& img":{width:"200px"}},j.down("lg"),(i={width:"75%",height:"200px","& img":{width:"150px",height:"150px"}},Object(x.a)(i,j.down("md"),{width:"85%"}),Object(x.a)(i,j.down("xs"),{width:"100%",height:"190px","& img":{width:"120px",height:"125px"},"&:hover":{transform:" scale(1)",cursor:"pointer"}}),i)),names:(o={},Object(x.a)(o,j.down("lg"),{fontSize:"20px"}),Object(x.a)(o,j.down("md"),{fontSize:"17px"}),Object(x.a)(o,j.down("xs"),{fontSize:"15px"}),o)},O=n(53),v=n(2);var w=Object(p.a)(u)((function(e){var t=e.id,n=e.name,a=e.normalScore,i=e.classes;return Object(v.jsxs)(b.a,{className:i.card,onClick:function(){a(n)},children:[Object(v.jsx)("img",{src:"".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat(t,".png"),alt:n}),Object(v.jsx)(g.a,{children:Object(v.jsx)(O.a,{className:i.names,gutterBottom:!0,variant:"h5",component:"h2",children:n})})]})}));function y(e){var t=e.pokemons,n=e.classes,a=Object(c.useState)([]),i=Object(m.a)(a,2),o=i[0],r=i[1],s=Object(c.useState)([]),l=Object(m.a)(s,2),p=l[0],x=l[1],j=function(e){r([].concat(Object(h.a)(o),[e]))};return Object(c.useEffect)((function(){var e,n=Object(d.a)(o);try{for(n.s();!(e=n.n()).done;){var a=e.value;o.indexOf(a)!==o.lastIndexOf(a)&&r([])}}catch(c){n.e(c)}finally{n.f()}var i=o.filter((function(e){return o.indexOf(e)===o.lastIndexOf(e)}));x((function(e){return[].concat(Object(h.a)(e),[i.length])})),function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}}(t)}),[o]),Object(v.jsxs)("div",{className:n.root,children:[Object(v.jsx)("div",{className:n.title,children:Object(v.jsx)("h1",{children:"Memory Game"})}),Object(v.jsxs)("div",{className:n.scores,children:[Object(v.jsxs)("h2",{children:["Score is: ",o.length]}),Object(v.jsxs)("h2",{children:["Best Score is: ",Math.max.apply(Math,Object(h.a)(p))]})]}),Object(v.jsx)("div",{className:n.cardContainer,children:t.map((function(e){return Object(v.jsx)(w,{normalScore:j,id:e.id,name:e.name},e.id)}))}),Object(v.jsxs)("footer",{className:n.footer,children:[Object(v.jsx)("p",{children:"Created by Nadim Radjab\xa9 "}),Object(v.jsx)("a",{href:"https://github.com/NadimRadjab",children:Object(v.jsx)("i",{className:"fab fa-github"})})]})]})}y.defaultProps={pokemons:[{id:"001",name:"Speed"},{id:"004",name:"Charmander"},{id:"007",name:"Squirtle"},{id:"011",name:"Metapod"},{id:"012",name:"Butterfree"},{id:"025",name:"Pikachu"},{id:"039",name:"Jigglypuff"},{id:"094",name:"Gengar"},{id:"133",name:"Eevee"},{id:"132",name:"Ditto"}]};var C=Object(p.a)(f)(y);var S=function(){return Object(v.jsx)("div",{className:"App",children:Object(v.jsx)(C,{})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),o(e),c(e)}))};l.a.render(Object(v.jsx)(r.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),k()}},[[34,1,2]]]);
//# sourceMappingURL=main.6367b162.chunk.js.map