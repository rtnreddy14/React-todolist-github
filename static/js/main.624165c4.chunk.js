(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{19:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var i=n(2),a=n.n(i),s=n(4),c=n.n(s),r=(n(19),n(12)),o=n(7),u=n(8),d=n(14),l=n(13),j=(n(20),n(21),n(9)),m=n(10),h=n(1);var b=function(t){var e=t.items.map((function(e){return Object(h.jsx)("div",{className:"list",children:Object(h.jsxs)("p",{children:[Object(h.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(h.jsx)("span",{children:Object(h.jsx)(j.a,{className:"faicons",icon:"trash",onClick:function(){t.deleteItem(e.key)}})})]})},e.key)}));return Object(h.jsx)("div",{children:Object(h.jsx)(m.a,{duration:350,easing:"ease-in-out",children:e})})},f=n(3),p=n(11);f.b.add(p.a);var x=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(t){var i;return Object(o.a)(this,n),(i=e.call(this,t)).handleInput=function(t){i.setState({currItem:{text:t.target.value,key:Date.now()}})},i.addItem=function(t){t.preventDefault();var e=i.state.currItem;if(console.log(e),""!==e.text){var n=[].concat(Object(r.a)(i.state.items),[e]);i.setState({items:n,currItem:{text:"",key:""}})}},i.deleteItem=function(t){var e=i.state.items.filter((function(e){return e.key!==t}));i.setState({items:e})},i.itemUpdate=function(t,e){var n=i.state.items;n.map((function(n){n.key===e&&(n.text=t)})),i.setState({items:n})},i.state={items:[],currItem:{text:"",key:""}},i}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"todoApp",children:[Object(h.jsx)("header",{children:Object(h.jsxs)("form",{id:"form_id",onSubmit:this.addItem,children:[Object(h.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currItem.text,onChange:this.handleInput}),Object(h.jsx)("button",{type:"submit",children:"Add"})]})}),Object(h.jsx)(b,{items:this.state.items,deleteItem:this.deleteItem,setUpdate:this.itemUpdate})]})}}]),n}(a.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),a(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.624165c4.chunk.js.map