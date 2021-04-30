(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[4],{105:function(e,a,t){"use strict";var l=t(4),s=t(6),r=t(9),i=t.n(r),o=t(0),c=t.n(o),n=(t(63),t(27)),d=t.n(n),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},b=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"div":t,o=e.className,n=e.type,d=void 0===n?"valid":n,m=e.tooltip,b=void 0!==m&&m,f=Object(s.a)(e,["as","className","type","tooltip"]);return c.a.createElement(r,Object(l.a)({},f,{ref:a,className:i()(o,d+"-"+(b?"tooltip":"feedback"))}))}));b.displayName="Feedback",b.propTypes=m;var f=b,u=c.a.createContext({controlId:void 0}),v=t(11),p=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.type,b=void 0===m?"checkbox":m,f=e.isValid,p=void 0!==f&&f,j=e.isInvalid,h=void 0!==j&&j,O=e.isStatic,x=e.as,y=void 0===x?"input":x,N=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(o.useContext)(u),w=P.controlId,C=P.custom?[n,"custom-control-input"]:[r,"form-check-input"],I=C[0],E=C[1];return r=Object(v.a)(I,E),c.a.createElement(y,Object(l.a)({},N,{ref:a,type:b,id:t||w,className:i()(d,r,p&&"is-valid",h&&"is-invalid",O&&"position-static")}))}));p.displayName="FormCheckInput";var j=p,h=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[r,"custom-control-label"]:[t,"form-check-label"],j=p[0],h=p[1];return t=Object(v.a)(j,h),c.a.createElement("label",Object(l.a)({},m,{ref:a,htmlFor:d||f,className:i()(n,t)}))}));h.displayName="FormCheckLabel";var O=h,x=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,b=e.disabled,p=void 0!==b&&b,h=e.isValid,x=void 0!==h&&h,y=e.isInvalid,N=void 0!==y&&y,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,I=e.className,E=e.style,F=e.title,g=void 0===F?"":F,k=e.type,R=void 0===k?"checkbox":k,L=e.label,S=e.children,V=e.custom,T=e.as,z=void 0===T?"input":T,G=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),A="switch"===R||V,M=A?[n,"custom-control"]:[r,"form-check"],B=M[0],J=M[1];r=Object(v.a)(B,J);var D=Object(o.useContext)(u).controlId,W=Object(o.useMemo)((function(){return{controlId:t||D,custom:A}}),[D,A,t]),q=A||null!=L&&!1!==L&&!S,H=c.a.createElement(j,Object(l.a)({},G,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:N,isStatic:!q,disabled:p,as:z}));return c.a.createElement(u.Provider,{value:W},c.a.createElement("div",{style:E,className:i()(I,r,A&&"custom-"+R,m&&r+"-inline")},S||c.a.createElement(c.a.Fragment,null,H,q&&c.a.createElement(O,{title:g},L),(x||N)&&c.a.createElement(f,{type:x?"valid":"invalid",tooltip:w},C))))}));x.displayName="FormCheck",x.Input=j,x.Label=O;var y=x,N=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.className,m=e.isValid,b=e.isInvalid,f=e.lang,p=e.as,j=void 0===p?"input":p,h=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),O=Object(o.useContext)(u),x=O.controlId,y=O.custom?[n,"custom-file-input"]:[r,"form-control-file"],N=y[0],P=y[1];return r=Object(v.a)(N,P),c.a.createElement(j,Object(l.a)({},h,{ref:a,id:t||x,type:"file",lang:f,className:i()(d,r,m&&"is-valid",b&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bsCustomPrefix,n=e.className,d=e.htmlFor,m=Object(s.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),b=Object(o.useContext)(u),f=b.controlId,p=b.custom?[r,"custom-file-label"]:[t,"form-file-label"],j=p[0],h=p[1];return t=Object(v.a)(j,h),c.a.createElement("label",Object(l.a)({},m,{ref:a,htmlFor:d||f,className:i()(n,t),"data-browse":m["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,I=c.a.forwardRef((function(e,a){var t=e.id,r=e.bsPrefix,n=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,b=e.isValid,p=void 0!==b&&b,j=e.isInvalid,h=void 0!==j&&j,O=e.feedbackTooltip,x=void 0!==O&&O,y=e.feedback,N=e.className,w=e.style,I=e.label,E=e.children,F=e.custom,g=e.lang,k=e["data-browse"],R=e.as,L=void 0===R?"div":R,S=e.inputAs,V=void 0===S?"input":S,T=Object(s.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),z=F?[n,"custom"]:[r,"form-file"],G=z[0],A=z[1];r=Object(v.a)(G,A);var M=Object(o.useContext)(u).controlId,B=Object(o.useMemo)((function(){return{controlId:t||M,custom:F}}),[M,F,t]),J=null!=I&&!1!==I&&!E,D=c.a.createElement(P,Object(l.a)({},T,{ref:a,isValid:p,isInvalid:h,disabled:m,as:V,lang:g}));return c.a.createElement(u.Provider,{value:B},c.a.createElement(L,{style:w,className:i()(N,r,F&&"custom-file")},E||c.a.createElement(c.a.Fragment,null,F?c.a.createElement(c.a.Fragment,null,D,J&&c.a.createElement(C,{"data-browse":k},I)):c.a.createElement(c.a.Fragment,null,J&&c.a.createElement(C,null,I),D),(p||h)&&c.a.createElement(f,{type:p?"valid":"invalid",tooltip:x},y))))}));I.displayName="FormFile",I.Input=P,I.Label=C;var E=I,F=(t(64),c.a.forwardRef((function(e,a){var t,r,n=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,b=e.size,f=e.htmlSize,p=e.id,j=e.className,h=e.isValid,O=void 0!==h&&h,x=e.isInvalid,y=void 0!==x&&x,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,I=void 0===C?"input":C,E=Object(s.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),F=Object(o.useContext)(u).controlId,g=w?[d,"custom"]:[n,"form-control"],k=g[0],R=g[1];if(n=Object(v.a)(k,R),N)(r={})[n+"-plaintext"]=!0,t=r;else if("file"===m){var L;(L={})[n+"-file"]=!0,t=L}else if("range"===m){var S;(S={})[n+"-range"]=!0,t=S}else if("select"===I&&w){var V;(V={})[n+"-select"]=!0,V[n+"-select-"+b]=b,t=V}else{var T;(T={})[n]=!0,T[n+"-"+b]=b,t=T}return c.a.createElement(I,Object(l.a)({},E,{type:m,size:f,ref:a,readOnly:P,id:p||F,className:i()(j,t,O&&"is-valid",y&&"is-invalid")}))})));F.displayName="FormControl";var g=Object.assign(F,{Feedback:f}),k=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.children,d=e.controlId,m=e.as,b=void 0===m?"div":m,f=Object(s.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(o.useMemo)((function(){return{controlId:d}}),[d]);return c.a.createElement(u.Provider,{value:p},c.a.createElement(b,Object(l.a)({},f,{ref:a,className:i()(r,t)}),n))}));k.displayName="FormGroup";var R=k,L=["xl","lg","md","sm","xs"],S=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"div":o,d=Object(s.a)(e,["bsPrefix","className","as"]),m=Object(v.a)(t,"col"),b=[],f=[];return L.forEach((function(e){var a,t,l,s=d[e];if(delete d[e],"object"===typeof s&&null!=s){var r=s.span;a=void 0===r||r,t=s.offset,l=s.order}else a=s;var i="xs"!==e?"-"+e:"";a&&b.push(!0===a?""+m+i:""+m+i+"-"+a),null!=l&&f.push("order"+i+"-"+l),null!=t&&f.push("offset"+i+"-"+t)})),b.length||b.push(m),c.a.createElement(n,Object(l.a)({},d,{ref:a,className:i.a.apply(void 0,[r].concat(b,f))}))}));S.displayName="Col";var V=S,T=c.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"label":t,n=e.bsPrefix,d=e.column,m=e.srOnly,b=e.className,f=e.htmlFor,p=Object(s.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),j=Object(o.useContext)(u).controlId;n=Object(v.a)(n,"form-label");var h="col-form-label";"string"===typeof d&&(h=h+" "+h+"-"+d);var O=i()(b,n,m&&"sr-only",d&&h);return f=f||j,d?c.a.createElement(V,Object(l.a)({as:"label",className:O,htmlFor:f},p)):c.a.createElement(r,Object(l.a)({ref:a,className:O,htmlFor:f},p))}));T.displayName="FormLabel",T.defaultProps={column:!1,srOnly:!1};var z=T,G=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,o=e.as,n=void 0===o?"small":o,d=e.muted,m=Object(s.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),c.a.createElement(n,Object(l.a)({},m,{ref:a,className:i()(r,t,d&&"text-muted")}))}));G.displayName="FormText";var A=G,M=c.a.forwardRef((function(e,a){return c.a.createElement(y,Object(l.a)({},e,{ref:a,type:"switch"}))}));M.displayName="Switch",M.Input=y.Input,M.Label=y.Label;var B=M,J=t(48),D=Object(J.a)("form-row"),W=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.inline,o=e.className,n=e.validated,d=e.as,m=void 0===d?"form":d,b=Object(s.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),c.a.createElement(m,Object(l.a)({},b,{ref:a,className:i()(o,n&&"was-validated",r&&t+"-inline")}))}));W.displayName="Form",W.defaultProps={inline:!1},W.Row=D,W.Group=R,W.Control=g,W.Check=y,W.File=E,W.Switch=B,W.Label=z,W.Text=A;a.a=W},108:function(e,a,t){"use strict";t.r(a);var l=t(7),s=t(43),r=t(44),i=t(47),o=t(46),c=t(0),n=t(14),d=t(45),m=t(105),b=t(30),f=t(1),u=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){var e;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={email:"",password:""},e.handleChange=function(a){var t=a.target,s=t.name,r=t.value;e.setState(Object(l.a)({},s,r))},e.handleSubmit=function(a){a.preventDefault(),e.props.onLogin(e.state),e.setState({name:"",email:"",password:""})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(f.jsxs)(m.a,{onSubmit:this.handleSubmit,autoComplete:"off",children:[Object(f.jsx)("h3",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043b\u043e\u0433\u0438\u043d\u0430"}),Object(f.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(f.jsx)(m.a.Label,{children:"\u041f\u043e\u0447\u0442\u0430"}),Object(f.jsx)(m.a.Control,{type:"email",placeholder:"Enter email",name:"email",value:a,onChange:this.handleChange}),Object(f.jsx)(m.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(f.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(f.jsx)(m.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(f.jsx)(m.a.Control,{type:"password",placeholder:"Password",name:"password",value:t,onChange:this.handleChange})]}),Object(f.jsx)(d.a,{variant:"outline-primary",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})}}]),t}(c.Component),v={onLogin:b.a.login};a.default=Object(n.b)(null,v)(u)}}]);
//# sourceMappingURL=4.0c103b59.chunk.js.map