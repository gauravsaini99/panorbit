(this.webpackJsonppanorbit=this.webpackJsonppanorbit||[]).push([[0],{120:function(e,t,n){},121:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var c=n(3),r=n(0),a=n.n(r),i=n(55),o=n.n(i),s=(n(120),n(121),n(205)),j=function(e){return e.children},l=function(){return Object(c.jsx)(j,{children:Object(c.jsx)("div",{})})},d=n(71),u=n.n(d),h=n(100),b=n(111),p=n(89),f=n(209),O=n(101),x=n(39),m=n(208),g=n(7),w=n(206),v=n(102),y=n.n(v),S=n(70),T=n.n(S),D=n(210),E=n(207),C=n(194),R=n(103),k=n(61),A="FETCH_DATA_SUCCEEDED",W="FETCH_DATA_ERRORED",z=function(e){return{type:A,payload:e}},H=function(e){return{type:W,payload:e}},I=n(14),N=Object(p.a)((function(){return{text:{fontFamily:"Noto Sans JP, sans-serif",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden"},name:{paddingLeft:10,fontWeight:600,fontSize:"1.1rem",color:"#122740"},caption:{fontSize:"0.875rem",color:"#758392",marginTop:-4}}})),_=function(e){var t=e.src,n=e.name,r=e.id,a=Object(O.useDynamicAvatarStyles)({size:38}),i=N(),o=Object(s.d)();return Object(c.jsxs)(x.Row,{gap:.2,p:2.5,onClick:1===r?function(){o.push("/profile")}:null,style:1===r?{cursor:"pointer"}:{cursor:""},children:[Object(c.jsx)(x.Item,{children:Object(c.jsx)(f.a,{classes:a,src:t})}),Object(c.jsx)(x.Row,{wrap:!0,grow:!0,gap:0,minWidth:0,children:Object(c.jsx)(x.Item,{grow:!0,minWidth:0,children:Object(c.jsx)("div",{className:Object(g.default)(i.name,i.text),children:n})})})]})},F=Object(p.a)((function(e){return{root:{marginTop:window.screen.height/8,display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(70),height:e.spacing(70)}}}})),J=Object(I.compose)(s.e,Object(k.b)((function(e){e.data}),(function(e){return{fetchData:function(){return e((function(e){T.a.get("https://panorbit.in/api/users.json").then((function(t){e(z(t.data.users))})).catch((function(t){e(H(t.message))}))}))}}})))((function(e){var t=F(),n=a.a.useState([]),r=Object(b.a)(n,2),i=r[0],o=r[1],s=function(){var t=Object(h.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.fetchData();case 2:n=t.sent,o(n),console.log("%cProfileSelection.js line:101 userdata","color: #007acc;",n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return a.a.useEffect((function(){s()}),[]),Object(c.jsxs)(j,{children:[Object(c.jsx)(w.a,{children:Object(c.jsx)(y.a,{fonts:[{font:"Barlow",weights:[400,600]}]})}),Object(c.jsx)("div",{className:t.root,children:Object(c.jsxs)(C.a,{elevation:10,style:{maxHeight:window.screen.height/2,borderRadius:35,backgroundColor:"#f5f5dc"},children:[Object(c.jsx)("p",{style:{textAlign:"center",marginTop:10,fontWeight:600,fontSize:"1.4rem",color:"#122740"},children:"Select an account"}),Object(c.jsx)(E.a,{style:{maxHeight:window.screen.height/2,marginTop:"30px",overflow:"auto"},children:Object(c.jsx)(D.a,{children:Object(c.jsx)(R.Scrollbars,{style:{height:300},children:i&&i.map((function(e,n){return Object(c.jsxs)("div",{children:[Object(c.jsx)(_,{name:e.name,src:e.profilepicture,id:e.id}),Object(c.jsx)(m.a,{variant:"middle",className:t.divider})]},e.id)}))})})})]})})]})})),B=function(){return Object(c.jsx)(j,{children:Object(c.jsx)("div",{})})},M=n(19),P=n(62),L=n(105),U=n.n(L),q=n(106),G=n.n(q),K=n(40),Q={loading:!1,data:[],error:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.Type){case A:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,data:t.payload,error:""});case W:return Object(K.a)(Object(K.a)({},e),{},{loading:!1,data:[],error:t.payload});default:return e}},X={key:"root",storage:U.a,stateReconciler:G.a,whitelist:["data"]},Y=V,Z=Object(P.a)(X,(function(e,t){return Y(e,t)})),$=n(107),ee=n(108),te=n.n(ee),ne=n(109),ce=Object(I.createStore)(Z,{},Object($.composeWithDevTools)(Object(I.applyMiddleware)(te.a,ne.a))),re=Object(P.b)(ce),ae=n(110);var ie=function(){var e=Object(M.a)();return Object(c.jsx)(s.b,{history:e,children:Object(c.jsx)(k.a,{store:ce,children:Object(c.jsx)(ae.a,{persistor:re,children:Object(c.jsxs)(s.c,{children:[Object(c.jsx)(s.a,{path:"/",exact:!0,component:J}),Object(c.jsx)(s.a,{path:"/home",exact:!0,component:l}),Object(c.jsx)(s.a,{path:"/profile",exact:!0,component:B})]})})})})};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(ie,{})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.eeb70361.chunk.js.map