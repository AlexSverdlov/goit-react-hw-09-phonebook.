(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[6],{110:function(t,e,n){"use strict";n.r(e);var r=n(43),a=n(44),c=n(47),o=n(46),u=n(0),i=n.n(u),s=n(14),l=n(7),b=n(111),j=n(25),h=n.n(j),f=n(28),m=n(31),p=function(t){return t.contacts.items},O=function(t){return t.contacts.filter},d={getItems:p,getFilter:O,visibleContacts:Object(m.a)([O,p],(function(t,e){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}))},x=n(45),v=n(105),g=n(1),C=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,r=n.name,a=n.value;t.setState(Object(l.a)({},r,a))},t.handleSubmit=function(e){e.preventDefault();var n={id:Object(b.a)(),name:t.state.name,number:t.state.number};t.props.items.find((function(e){return e.name.toUpperCase()===t.state.name.toUpperCase()}))?alert(t.state.name+" is already in contacts"):(t.props.onSubmit(n),t.setState({name:"",number:""}))},t}return Object(a.a)(n,[{key:"render",value:function(){return Object(g.jsxs)(v.a,{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(g.jsxs)(v.a.Group,{children:[Object(g.jsx)(v.a.Label,{children:"\u0418\u043c\u044f"}),Object(g.jsx)(v.a.Control,{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(g.jsxs)(v.a.Group,{children:[Object(g.jsx)(v.a.Label,{children:"\u041d\u043e\u043c\u0435\u0440"}),Object(g.jsx)(v.a.Control,{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(g.jsx)(x.a,{variant:"outline-primary",type:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})}}]),n}(i.a.Component),y=Object(s.b)((function(t){return{items:d.getItems(t)}}),(function(t){return{onSubmit:function(e){return t(function(t){return function(e){e(f.b()),h.a.post("/contacts",t).then((function(t){var n=t.data;return e(f.c(n))})).catch((function(t){return e(f.a(t.message))}))}}(e))}}}))(C),k=Object(s.b)((function(t){return{textFilter:d.getFilter(t)}}),(function(t){return{onChange:function(e){return t(f.j(e.currentTarget.value))}}}))((function(t){var e=t.textFilter,n=t.onChange;return Object(g.jsxs)(v.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(g.jsx)(v.a.Label,{children:"\u041d\u0430\u0439\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"}),Object(g.jsx)(v.a.Control,{type:"text",name:"filter",value:e,onChange:n})]})})),w=n(106),S=function(t){var e=t.contacts,n=t.onDelete;return Object(g.jsx)(w.a,{children:e.map((function(t){var e=t.id,r=t.name,a=t.number;return Object(g.jsxs)(w.a.Item,{children:[r,": ",a,Object(g.jsx)(x.a,{variant:"outline-primary",type:"button",size:"sm",onClick:function(){return n(e)},style:{marginLeft:"20px"},children:"Delete"})]},e)}))})},L=Object(s.b)((function(t){return{contacts:d.visibleContacts(t)}}),(function(t){return{onDelete:function(e){return t(function(t){return function(e){e(f.e()),h.a.delete("/contacts/".concat(t)).then((function(){return e(f.f(t))})).catch((function(t){return e(f.d(t.message))}))}}(e))}}}))(S),D=function(t){Object(c.a)(n,t);var e=Object(o.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContact()}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043e\u0432"}),Object(g.jsx)(y,{}),Object(g.jsx)("hr",{}),Object(g.jsx)("h3",{style:{marginTop:"20px"},children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object(g.jsx)(k,{}),Object(g.jsx)(L,{})]})}}]),n}(i.a.Component);e.default=Object(s.b)(null,(function(t){return{fetchContact:function(){return t((function(t){t(f.h()),h.a.get("/contacts").then((function(e){var n=e.data;return t(f.i(n))})).catch((function(e){return t(f.g(e.message))}))}))}}}))(D)}}]);
//# sourceMappingURL=6.47eb647e.chunk.js.map