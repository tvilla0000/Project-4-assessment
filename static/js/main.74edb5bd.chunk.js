(this["webpackJsonpproject-4-assessment"]=this["webpackJsonpproject-4-assessment"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(7),l=n.n(r),i=(n(13),n(1)),s=n(2),o=n(4),u=n(3),h=n(5),d=(n(14),function(e){function t(){var e,n;Object(i.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.selCircleIdx),a.a.createElement("div",{className:"CircleSelector"},this.props.circles.map((function(t,n){return a.a.createElement("button",{key:t,onClick:function(){return e.props.handleCircleSelection(n)},className:e.props.selCircleIdx===n?"selected":""},"Select Circle ",t)})))}}]),t}(c.Component)),p=function(e){function t(){var e,n;Object(i.a)(this,t);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(n=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={},n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"Circles"},this.props.circles.map((function(t,n){return a.a.createElement("div",{key:t,className:e.props.selCircleIdx===n?"selected":""},t)})))}}]),t}(c.Component),m=["1","2","3","4"],C=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(u.a)(t).call(this))).handleCircleSelection=function(t){e.setState({selCircleIdx:t})},e.state={selCircleIdx:0},e}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"UNIT 4 FINAL ASSESSMENT"),a.a.createElement("main",null,a.a.createElement(d,{selCircleIdx:this.state.selCircleIdx,handleCircleSelection:this.handleCircleSelection,handleClick:this.handleClick,circles:m}),a.a.createElement(p,{selCircleIdx:this.state.selCircleIdx,circles:m})))}}]),t}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.74edb5bd.chunk.js.map