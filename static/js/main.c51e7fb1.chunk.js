(this["webpackJsonpdrawing-is-hard"]=this["webpackJsonpdrawing-is-hard"]||[]).push([[0],{155:function(e,t,n){e.exports=n(295)},160:function(e,t,n){},287:function(e,t){},288:function(e,t){},289:function(e,t){},290:function(e,t){},291:function(e,t){},292:function(e,t){},293:function(e){e.exports=JSON.parse('["bird","book","car","cat","chair","flower","plane","sheep","ship","strawberry"]')},294:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(35),o=n.n(c),l=(n(160),n(161),n(47)),u=n(10),s=n(300),i=n(304),m=n(302),f=n(305),d=n(303),E=function(){var e=Object(u.f)().push;return r.a.createElement(s.a,{style:{paddingTop:"10%"},text:!0},r.a.createElement(i.a,null,r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,color:"blue"},r.a.createElement(m.a.Content,null,r.a.createElement(f.a,{as:"h1"},"Drawing Is Hard"))))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,raised:!0},r.a.createElement(m.a.Content,{style:{fontSize:"20px"}},r.a.createElement("p",null,"This game has been modeled off Google's"," ",r.a.createElement("a",{href:"https://quickdraw.withgoogle.com/"},"Quick, Draw!")," ","game and uses a sampling from the Quick, Draw! dataset."),r.a.createElement("p",null,"It was developed in the context of my capstone project at"," ",r.a.createElement("a",{href:"https://www.extensionschool.ch/"},"EPFL Extension School"),"."),r.a.createElement("p",null,"Check out the source code in my"," ",r.a.createElement("a",{href:"https://github.com/sophialittlejohn/drawing-is-hard"},"GitHub repo"),"."))))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(d.a,{onClick:function(){return e("/play")},size:"massive",primary:!0,fluid:!0},"Play")))))},p=n(23),h=n(42),b=n(32),v=n.n(b),w=n(99),O=n(50),g=n(20),j=n(51),y=function(){var e=Object(a.useState)(null),t=Object(g.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){var e=n>0&&setInterval((function(){return r(n-1)}),1e3);return function(){return clearInterval(e)}})),{counter:n,startCounter:function(e){r(e||z)},stopCounter:function(){r(null)}}},C={task:null,round:null,score:null,inProgress:null},x=function(e,t){switch(t.type){case"START_GAME":return{round:1,score:0,task:t.payload,inProgress:!0};case"NEW_ROUND":return Object(p.a)(Object(p.a)({},e),{},{task:t.payload,round:e.round+1});case"WIN_ROUND":return Object(p.a)(Object(p.a)({},e),{},{score:e.score+1,round:e.round+1,task:t.payload});case"GAME_OVER":return Object(p.a)(Object(p.a)({},e),{},{inProgress:!1,task:null});case"WIN_GAME":return Object(p.a)(Object(p.a)({},e),{},{inProgress:!1});default:throw new Error}};function R(e,t){var n,a=(n=e,j.b.fromPixels(n.current).resizeNearestNeighbor([28,28]).mean(2).expandDims(2).expandDims().toFloat().div(255));return t.predict(a).data().then(function(){var e=Object(O.a)(v.a.mark((function e(t){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a(t).data();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}var k=r.a.createContext(),N=function(){var e=Object(a.useContext)(k);if(!e)throw new Error("This component must be used within a <Game /> component.");return e},P=r.a.memo((function(e){var t=e.guess,n=N(),c=n.counter,o=n.inProgress,l=Object(a.useRef)(null),u=Object(a.useState)(!1),s=Object(g.a)(u,2),i=s[0],m=s[1],f=Object(a.useState)({x:void 0,y:void 0}),d=Object(g.a)(f,2),E=d[0],p=d[1];Object(a.useEffect)((function(){i&&o&&c&&c<20&&t()}),[i,o,c,t]);return Object(a.useEffect)((function(){var e=l.current,t=e.getContext("2d");t.fillStyle="#ffffff",t.fillRect(0,0,e.height,e.width)}),[]),r.a.createElement("canvas",{height:300,width:300,ref:l,onMouseDown:function(){return m(!0)},onMouseUp:function(){m(!1),p({x:void 0,y:void 0})},onMouseMove:function(e){return function(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left,a=e.clientY-t.top;if(i){var r=function(e,t,n,a,r){var c=e.getContext("2d");return c.strokeStyle="#000000",c.lineWidth=12,c.lineJoin="round",c.beginPath(),c.moveTo(a,r),c.lineTo(t,n),c.closePath(),c.stroke(),[t,n]}(e.target,n,a,E.x,E.y),c=Object(g.a)(r,2),o=c[0],l=c[1];p({x:o,y:l})}}(e)},id:"myCanvas",style:{border:"3px dotted gray",cursor:"pointer"}})}));function S(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}var M=function(){var e=N();return r.a.createElement("div",null,"Round ",e.round," of ",A)},G=n(144),T=n.n(G),D=(n(294),function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){t.current=e})),t.current}),I={delay:30,cursor:" ",wrapperClassName:"wrapper"},_=function(e){var t=e.startCounter,n=Object(a.useState)(null),c=Object(g.a)(n,2),o=c[0],l=c[1],u=Object(a.useState)(null),s=Object(g.a)(u,2),i=s[0],m=s[1],f=Object(a.useState)(null),d=Object(g.a)(f,2),E=d[0],p=d[1],h=N(),b=h.counter,v=h.task,w=h.score,O=h.inProgress,j=h.round,y=D(v),C=D(w),x=function(){l(null),m(null),p(null)};Object(a.useEffect)((function(){0===b&&x()}),[b]),Object(a.useEffect)((function(){if(w&&C!==w)x(),window.setTimeout((function(){return l("Nice sketch! You have")}));else if(O&&v&&y!==v&&j<A+1){var e="Close... you have ";1===j&&(e="Let's get started, you have "),window.setTimeout((function(){return l(e)}))}}),[O,y,v,w,C,j]);var R=function(e,t,n){return r.a.createElement(r.a.Fragment,null,t,r.a.createElement(T.a,{key:e,options:I,onInit:function(t){return function(e,t,n){e.typeString(t).callFunction(n).start()}(t,e,n)}}))},k=o&&R(o,null,(function(){return m("seconds to draw a")})),P=i&&R(i,r.a.createElement("span",{className:"whitespace"},b||z),(function(){return p("in the box to the left.")})),S=E&&R(E,r.a.createElement("span",{className:"whitespace"},v),(function(){return t()}));return r.a.createElement("div",{className:"wrapper"},k,P,S)},A=10,z=20,W=function(){var e=Object(u.f)().push,t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=Object(a.useRef)(null),r=Object(a.useRef)(null),c=Object(a.useRef)(null),o=Object(a.useRef)(null),l=y(),u=l.startCounter,s=l.counter,i=l.stopCounter,m=Object(a.useReducer)(x,C),f=Object(g.a)(m,2),d=f[0],E=d.round,p=d.task,h=d.inProgress,b=d.score,k=f[1];Object(a.useEffect)((function(){(function(){var e=Object(O.a)(v.a.mark((function e(){var a,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.c("./model/model.json");case 2:a=e.sent,l=n(293),t.current=Object(w.a)(l),r.current=S(Object(w.a)(l)),c.current=a,o.current=document.getElementById("myCanvas"),N();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var N=function(){k({type:"START_GAME",payload:r.current[0]})},P=function(){i(),k({type:"GAME_OVER"})},M=function(){b===e?(i(),k({type:"WIN_GAME"})):E===e+1?(i(),k({type:"GAME_OVER"})):0===s&&(G(o),i(),k({type:"NEW_ROUND",payload:r.current[E]}))},G=function(){var e=o.current;e.getContext("2d").fillRect(0,0,e.height,e.width)},T=function(){var e=Object(O.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c&&c.current&&o&&o.current)){e.next=5;break}return e.next=3,R(o,c.current);case 3:(n=e.sent)&&t.current[n[0]]===p&&(G(o),i(),k({type:"WIN_ROUND",payload:r.current[E]}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h&&M()})),{controls:{startGame:N,stopGame:P,clearCanvas:G,guess:T,startCounter:u},state:{inProgress:h,task:p,counter:s,round:E,score:b}}}(),c=t.state,o=t.controls;Object(a.useEffect)((function(){!1===c.inProgress&&e("game-over",{score:c.score})}));var l=Object(a.useMemo)((function(){return c}),[c]);return r.a.createElement(k.Provider,{value:Object(p.a)({},l)},r.a.createElement(s.a,{style:{paddingTop:"10%"},text:!0},r.a.createElement(i.a,{columns:"equal"},r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,color:"olive"},r.a.createElement(m.a.Content,null,r.a.createElement(f.a,{as:"h2"},r.a.createElement(M,null)))))),r.a.createElement(i.a.Row,{stretched:!0},r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,raised:!0},r.a.createElement(m.a.Content,{style:{fontSize:"20px"}},r.a.createElement(i.a,{columns:"equal"},r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(P,{guess:o.guess})),r.a.createElement(i.a.Column,null,r.a.createElement(_,{startCounter:o.startCounter})))))))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,{width:"14"},r.a.createElement(d.a,{onClick:o.clearCanvas,size:"massive",color:"olive",fluid:!0},"Clear Canvas")),r.a.createElement(i.a.Column,{width:"two"},r.a.createElement(d.a,{onClick:function(){return e("/")},size:"massive",fluid:!0,icon:!0,basic:!0,color:"olive"},r.a.createElement(h.a,{name:"home"})))))))},F="Hmmm, you can probably do better than that!",U="Not so shabby. Bet you can beat that in the next round!",B="Wow, impressive! You deserve a margarita at the beach \ud83c\udf78\ud83c\udf34",J=function(){var e=Object(u.f)().replace,t=Object(u.g)().state,n=t?t.score:0,a=n>=9?B:n>=5?U:F;return r.a.createElement(s.a,{style:{paddingTop:"10%"},text:!0},r.a.createElement(i.a,null,r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,color:"blue"},r.a.createElement(m.a.Content,null,r.a.createElement(f.a,{as:"h1"},"Drawing is hard - Final score ",n))))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,null,r.a.createElement(m.a,{fluid:!0,raised:!0},r.a.createElement(m.a.Content,{style:{fontSize:"20px"}},r.a.createElement("p",null,"GAME OVER!"),r.a.createElement("p",null,"You scored ",r.a.createElement("strong",null,n)," points."),r.a.createElement("p",null,a))))),r.a.createElement(i.a.Row,null,r.a.createElement(i.a.Column,{width:"14"},r.a.createElement(d.a,{onClick:function(){return e("/play")},size:"massive",color:"blue",fluid:!0},"Play again")),r.a.createElement(i.a.Column,{width:"two"},r.a.createElement(d.a,{onClick:function(){return e("/")},size:"massive",fluid:!0,icon:!0,basic:!0,color:"blue","aria-label":"home"},r.a.createElement(h.a,{name:"home"}))))))},V=function(){return r.a.createElement(l.a,{basename:"/drawing-is-hard"},r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(E,null)),r.a.createElement(u.a,{path:"/play"},r.a.createElement(W,null)),r.a.createElement(u.a,{path:"/game-over"},r.a.createElement(J,null))))};o.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[155,1,2]]]);
//# sourceMappingURL=main.c51e7fb1.chunk.js.map