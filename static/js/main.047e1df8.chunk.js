(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n,i,o,c,r=a(1),s=a.n(r),l=a(20),d=a.n(l),h=(a(28),a(21)),m=a(16),p=a(18),x=a(51),j=a(4),b={up:function(){},down:function(e){return"@media (max-width:".concat({xs:"715.98px",sm:"877.98px",md:"991.98px",lg:"1350.98px",xl:"1500px"}[e],")")}},f={root:{overflow:"auto",fontFamily:"Roboto",color:"#363732",backgroundColor:"#DCE1E9",height:"100vh"},title:Object(j.a)({overflow:"hidden",height:"94px",width:"100%",backgroundColor:"#8D9DB9","& h1":{fontSize:"40px",color:"#363732",display:"inline-block",position:"relative",left:"230px"}},b.down("xs"),{"& h1":{color:"#363732",display:"inline-block",position:"relative",left:"80px"}}),scores:Object(j.a)({display:"flex",flexDirection:"column",alignItems:"flex-end",height:"64px",margin:"1rem","& h2":{display:"inline-block",margin:"0.5rem"}},b.down("lg"),{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}),cardContainer:(n={display:"grid",height:"calc(100vh - 265px)",gridTemplateColumns:"repeat(5, 1fr)",gridGap:"1rem",margin:"1.5rem",marginBottom:"5rem"},Object(j.a)(n,b.down("xl"),{height:"calc(100vh - 235px)"}),Object(j.a)(n,b.down("sm"),{gridTemplateColumns:"repeat(4, 1fr)",height:"calc(100vh - 120px)"}),Object(j.a)(n,b.down("xs"),{gridTemplateColumns:"repeat(3, 1fr)",height:"calc(100vh + 25px)"}),n),footer:(i={display:"flex",alignItems:"center",position:"absolute",bottom:"0",fontSize:"20px",justifyContent:"center",height:"44px",width:"100%",backgroundColor:"#8D9DB9"},Object(j.a)(i,"bottom",0),Object(j.a)(i,"& p",{margin:"1rem"}),Object(j.a)(i,"& a",{color:"inherit"}),Object(j.a)(i,"&:hover a",{transform:"scale(1.3)",color:"gold"}),i)},g=a(52),u=a(50),O={card:Object(j.a)({backgroundColor:"#C0C9D8",width:"70%",height:"260px",boxShadow:"rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset","&:hover":{transform:" scale(1.1)",cursor:"pointer",transition:"all 0.4s ease-in-out"},"& img":{width:"200px"}},b.down("lg"),(o={width:"75%",height:"200px","& img":{width:"150px",height:"150px"}},Object(j.a)(o,b.down("md"),{width:"85%"}),Object(j.a)(o,b.down("xs"),{width:"100%",height:"190px","& img":{width:"120px",height:"125px"},"&:hover":{transform:" scale(1)",cursor:"pointer"}}),o)),names:(c={},Object(j.a)(c,b.down("lg"),{fontSize:"20px"}),Object(j.a)(c,b.down("md"),{fontSize:"17px"}),c)},v=a(53),w=a(2);var y=Object(x.a)(O)((function(e){var t=e.id,a=e.name,n=e.normalScore,i=e.classes;return Object(w.jsxs)(g.a,{className:i.card,onClick:function(){n(a)},children:[Object(w.jsx)("img",{src:"".concat("https://assets.pokemon.com/assets/cms2/img/pokedex/detail/").concat(t,".png"),alt:a}),Object(w.jsx)(u.a,{children:Object(w.jsx)(v.a,{className:i.names,gutterBottom:!0,variant:"h5",component:"h2",children:a})})]})}));function C(e){var t=e.pokemons,a=e.classes,n=Object(r.useState)([]),i=Object(p.a)(n,2),o=i[0],c=i[1],s=Object(r.useState)([]),l=Object(p.a)(s,2),d=l[0],x=l[1],j=function(e){c([].concat(Object(m.a)(o),[e]))};return Object(r.useEffect)((function(){var e,a=Object(h.a)(o);try{for(a.s();!(e=a.n()).done;){var n=e.value;o.indexOf(n)!==o.lastIndexOf(n)&&c([])}}catch(r){a.e(r)}finally{a.f()}var i=o.filter((function(e){return o.indexOf(e)===o.lastIndexOf(e)}));x((function(e){return[].concat(Object(m.a)(e),[i.length])})),function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(t)}),[o]),Object(w.jsxs)("div",{className:a.root,children:[Object(w.jsx)("div",{className:a.title,children:Object(w.jsx)("h1",{children:"Memory Game"})}),Object(w.jsxs)("div",{className:a.scores,children:[Object(w.jsxs)("h2",{children:["Score is: ",o.length]}),Object(w.jsxs)("h2",{children:["Best Score is: ",Math.max.apply(Math,Object(m.a)(d))]})]}),Object(w.jsx)("div",{className:a.cardContainer,children:t.map((function(e){return Object(w.jsx)(y,{normalScore:j,id:e.id,name:e.name},e.id)}))}),Object(w.jsxs)("footer",{className:a.footer,children:[Object(w.jsx)("p",{children:"Created by Nadim Radjab\xa9 "}),Object(w.jsx)("a",{href:"https://github.com/NadimRadjab",children:Object(w.jsx)("i",{className:"fab fa-github"})})]})]})}C.defaultProps={pokemons:[{id:"001",name:"Speed"},{id:"004",name:"Charmander"},{id:"007",name:"Squirtle"},{id:"011",name:"Metapod"},{id:"012",name:"Butterfree"},{id:"025",name:"Pikachu"},{id:"039",name:"Jigglypuff"},{id:"094",name:"Gengar"},{id:"133",name:"Eevee"},{id:"132",name:"Ditto"}]};var k=Object(x.a)(f)(C);var S=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(k,{})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),o(e),c(e)}))};d.a.render(Object(w.jsx)(s.a.StrictMode,{children:Object(w.jsx)(S,{})}),document.getElementById("root")),N()}},[[34,1,2]]]);
//# sourceMappingURL=main.047e1df8.chunk.js.map