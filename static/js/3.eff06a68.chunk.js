(this["webpackJsonpgoit-react-hw-09-phonebook"]=this["webpackJsonpgoit-react-hw-09-phonebook"]||[]).push([[3],{103:function(e,a,t){"use strict";var r=t(4),i=t(6),s=t(9),o=t.n(s),l=t(0),n=t.n(l),c=(t(61),t(27)),d=t.n(c),m={type:d.a.string,tooltip:d.a.bool,as:d.a.elementType},f=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"div":t,l=e.className,c=e.type,d=void 0===c?"valid":c,m=e.tooltip,f=void 0!==m&&m,u=Object(i.a)(e,["as","className","type","tooltip"]);return n.a.createElement(s,Object(r.a)({},u,{ref:a,className:o()(l,d+"-"+(f?"tooltip":"feedback"))}))}));f.displayName="Feedback",f.propTypes=m;var u=f,b=n.a.createContext({controlId:void 0}),v=t(11),p=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.type,f=void 0===m?"checkbox":m,u=e.isValid,p=void 0!==u&&u,y=e.isInvalid,O=void 0!==y&&y,j=e.isStatic,x=e.as,h=void 0===x?"input":x,N=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"]),P=Object(l.useContext)(b),w=P.controlId,C=P.custom?[c,"custom-control-input"]:[s,"form-check-input"],I=C[0],g=C[1];return s=Object(v.a)(I,g),n.a.createElement(h,Object(r.a)({},N,{ref:a,type:f,id:t||w,className:o()(d,s,p&&"is-valid",O&&"is-invalid",j&&"position-static")}))}));p.displayName="FormCheckInput";var y=p,O=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(b),u=f.controlId,p=f.custom?[s,"custom-control-label"]:[t,"form-check-label"],y=p[0],O=p[1];return t=Object(v.a)(y,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:o()(c,t)}))}));O.displayName="FormCheckLabel";var j=O,x=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.inline,m=void 0!==d&&d,f=e.disabled,p=void 0!==f&&f,O=e.isValid,x=void 0!==O&&O,h=e.isInvalid,N=void 0!==h&&h,P=e.feedbackTooltip,w=void 0!==P&&P,C=e.feedback,I=e.className,g=e.style,E=e.title,F=void 0===E?"":E,k=e.type,R=void 0===k?"checkbox":k,V=e.label,S=e.children,L=e.custom,z=e.as,T=void 0===z?"input":z,A=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"]),G="switch"===R||L,K=G?[c,"custom-control"]:[s,"form-check"],M=K[0],U=K[1];s=Object(v.a)(M,U);var D=Object(l.useContext)(b).controlId,J=Object(l.useMemo)((function(){return{controlId:t||D,custom:G}}),[D,G,t]),$=G||null!=V&&!1!==V&&!S,q=n.a.createElement(y,Object(r.a)({},A,{type:"switch"===R?"checkbox":R,ref:a,isValid:x,isInvalid:N,isStatic:!$,disabled:p,as:T}));return n.a.createElement(b.Provider,{value:J},n.a.createElement("div",{style:g,className:o()(I,s,G&&"custom-"+R,m&&s+"-inline")},S||n.a.createElement(n.a.Fragment,null,q,$&&n.a.createElement(j,{title:F},V),(x||N)&&n.a.createElement(u,{type:x?"valid":"invalid",tooltip:w},C))))}));x.displayName="FormCheck",x.Input=y,x.Label=j;var h=x,N=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.className,m=e.isValid,f=e.isInvalid,u=e.lang,p=e.as,y=void 0===p?"input":p,O=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"]),j=Object(l.useContext)(b),x=j.controlId,h=j.custom?[c,"custom-file-input"]:[s,"form-control-file"],N=h[0],P=h[1];return s=Object(v.a)(N,P),n.a.createElement(y,Object(r.a)({},O,{ref:a,id:t||x,type:"file",lang:u,className:o()(d,s,m&&"is-valid",f&&"is-invalid")}))}));N.displayName="FormFileInput";var P=N,w=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.bsCustomPrefix,c=e.className,d=e.htmlFor,m=Object(i.a)(e,["bsPrefix","bsCustomPrefix","className","htmlFor"]),f=Object(l.useContext)(b),u=f.controlId,p=f.custom?[s,"custom-file-label"]:[t,"form-file-label"],y=p[0],O=p[1];return t=Object(v.a)(y,O),n.a.createElement("label",Object(r.a)({},m,{ref:a,htmlFor:d||u,className:o()(c,t),"data-browse":m["data-browse"]}))}));w.displayName="FormFileLabel";var C=w,I=n.a.forwardRef((function(e,a){var t=e.id,s=e.bsPrefix,c=e.bsCustomPrefix,d=e.disabled,m=void 0!==d&&d,f=e.isValid,p=void 0!==f&&f,y=e.isInvalid,O=void 0!==y&&y,j=e.feedbackTooltip,x=void 0!==j&&j,h=e.feedback,N=e.className,w=e.style,I=e.label,g=e.children,E=e.custom,F=e.lang,k=e["data-browse"],R=e.as,V=void 0===R?"div":R,S=e.inputAs,L=void 0===S?"input":S,z=Object(i.a)(e,["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"]),T=E?[c,"custom"]:[s,"form-file"],A=T[0],G=T[1];s=Object(v.a)(A,G);var K=Object(l.useContext)(b).controlId,M=Object(l.useMemo)((function(){return{controlId:t||K,custom:E}}),[K,E,t]),U=null!=I&&!1!==I&&!g,D=n.a.createElement(P,Object(r.a)({},z,{ref:a,isValid:p,isInvalid:O,disabled:m,as:L,lang:F}));return n.a.createElement(b.Provider,{value:M},n.a.createElement(V,{style:w,className:o()(N,s,E&&"custom-file")},g||n.a.createElement(n.a.Fragment,null,E?n.a.createElement(n.a.Fragment,null,D,U&&n.a.createElement(C,{"data-browse":k},I)):n.a.createElement(n.a.Fragment,null,U&&n.a.createElement(C,null,I),D),(p||O)&&n.a.createElement(u,{type:p?"valid":"invalid",tooltip:x},h))))}));I.displayName="FormFile",I.Input=P,I.Label=C;var g=I,E=(t(62),n.a.forwardRef((function(e,a){var t,s,c=e.bsPrefix,d=e.bsCustomPrefix,m=e.type,f=e.size,u=e.htmlSize,p=e.id,y=e.className,O=e.isValid,j=void 0!==O&&O,x=e.isInvalid,h=void 0!==x&&x,N=e.plaintext,P=e.readOnly,w=e.custom,C=e.as,I=void 0===C?"input":C,g=Object(i.a)(e,["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),E=Object(l.useContext)(b).controlId,F=w?[d,"custom"]:[c,"form-control"],k=F[0],R=F[1];if(c=Object(v.a)(k,R),N)(s={})[c+"-plaintext"]=!0,t=s;else if("file"===m){var V;(V={})[c+"-file"]=!0,t=V}else if("range"===m){var S;(S={})[c+"-range"]=!0,t=S}else if("select"===I&&w){var L;(L={})[c+"-select"]=!0,L[c+"-select-"+f]=f,t=L}else{var z;(z={})[c]=!0,z[c+"-"+f]=f,t=z}return n.a.createElement(I,Object(r.a)({},g,{type:m,size:u,ref:a,readOnly:P,id:p||E,className:o()(y,t,j&&"is-valid",h&&"is-invalid")}))})));E.displayName="FormControl";var F=Object.assign(E,{Feedback:u}),k=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.children,d=e.controlId,m=e.as,f=void 0===m?"div":m,u=Object(i.a)(e,["bsPrefix","className","children","controlId","as"]);t=Object(v.a)(t,"form-group");var p=Object(l.useMemo)((function(){return{controlId:d}}),[d]);return n.a.createElement(b.Provider,{value:p},n.a.createElement(f,Object(r.a)({},u,{ref:a,className:o()(s,t)}),c))}));k.displayName="FormGroup";var R=k,V=["xl","lg","md","sm","xs"],S=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,c=void 0===l?"div":l,d=Object(i.a)(e,["bsPrefix","className","as"]),m=Object(v.a)(t,"col"),f=[],u=[];return V.forEach((function(e){var a,t,r,i=d[e];if(delete d[e],"object"===typeof i&&null!=i){var s=i.span;a=void 0===s||s,t=i.offset,r=i.order}else a=i;var o="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+m+o:""+m+o+"-"+a),null!=r&&u.push("order"+o+"-"+r),null!=t&&u.push("offset"+o+"-"+t)})),f.length||f.push(m),n.a.createElement(c,Object(r.a)({},d,{ref:a,className:o.a.apply(void 0,[s].concat(f,u))}))}));S.displayName="Col";var L=S,z=n.a.forwardRef((function(e,a){var t=e.as,s=void 0===t?"label":t,c=e.bsPrefix,d=e.column,m=e.srOnly,f=e.className,u=e.htmlFor,p=Object(i.a)(e,["as","bsPrefix","column","srOnly","className","htmlFor"]),y=Object(l.useContext)(b).controlId;c=Object(v.a)(c,"form-label");var O="col-form-label";"string"===typeof d&&(O=O+" "+O+"-"+d);var j=o()(f,c,m&&"sr-only",d&&O);return u=u||y,d?n.a.createElement(L,Object(r.a)({as:"label",className:j,htmlFor:u},p)):n.a.createElement(s,Object(r.a)({ref:a,className:j,htmlFor:u},p))}));z.displayName="FormLabel",z.defaultProps={column:!1,srOnly:!1};var T=z,A=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,l=e.as,c=void 0===l?"small":l,d=e.muted,m=Object(i.a)(e,["bsPrefix","className","as","muted"]);return t=Object(v.a)(t,"form-text"),n.a.createElement(c,Object(r.a)({},m,{ref:a,className:o()(s,t,d&&"text-muted")}))}));A.displayName="FormText";var G=A,K=n.a.forwardRef((function(e,a){return n.a.createElement(h,Object(r.a)({},e,{ref:a,type:"switch"}))}));K.displayName="Switch",K.Input=h.Input,K.Label=h.Label;var M=K,U=t(46),D=Object(U.a)("form-row"),J=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.inline,l=e.className,c=e.validated,d=e.as,m=void 0===d?"form":d,f=Object(i.a)(e,["bsPrefix","inline","className","validated","as"]);return t=Object(v.a)(t,"form"),n.a.createElement(m,Object(r.a)({},f,{ref:a,className:o()(l,c&&"was-validated",s&&t+"-inline")}))}));J.displayName="Form",J.defaultProps={inline:!1},J.Row=D,J.Group=R,J.Control=F,J.Check=h,J.File=g,J.Switch=M,J.Label=T,J.Text=G;a.a=J},104:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var r=t(45);function i(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,i=!1,s=void 0;try{for(var o,l=e[Symbol.iterator]();!(r=(o=l.next()).done)&&(t.push(o.value),!a||t.length!==a);r=!0);}catch(n){i=!0,s=n}finally{try{r||null==l.return||l.return()}finally{if(i)throw s}}return t}}(e,a)||Object(r.a)(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},105:function(e,a,t){"use strict";var r=t(4),i=t(6),s=t(9),o=t.n(s),l=t(0),n=t.n(l),c=(t(62),t(33)),d=t(11),m=t(56),f=t(47),u=t(20),b={variant:void 0,active:!1,disabled:!1},v=n.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.active,c=e.disabled,m=e.className,b=e.variant,v=e.action,p=e.as,y=e.eventKey,O=e.onClick,j=Object(i.a)(e,["bsPrefix","active","disabled","className","variant","action","as","eventKey","onClick"]);t=Object(d.a)(t,"list-group-item");var x=Object(l.useCallback)((function(e){if(c)return e.preventDefault(),void e.stopPropagation();O&&O(e)}),[c,O]);return c&&void 0===j.tabIndex&&(j.tabIndex=-1,j["aria-disabled"]=!0),n.a.createElement(f.a,Object(r.a)({ref:a},j,{eventKey:Object(u.b)(y,j.href),as:p||(v?j.href?"a":"button":"div"),onClick:x,className:o()(m,t,s&&"active",c&&"disabled",b&&t+"-"+b,v&&t+"-action")}))}));v.defaultProps=b,v.displayName="ListGroupItem";var p=v,y={variant:void 0,horizontal:void 0},O=n.a.forwardRef((function(e,a){var t,s=Object(c.a)(e,{activeKey:"onSelect"}),l=s.className,f=s.bsPrefix,u=s.variant,b=s.horizontal,v=s.as,p=void 0===v?"div":v,y=Object(i.a)(s,["className","bsPrefix","variant","horizontal","as"]),O=Object(d.a)(f,"list-group");return t=b?!0===b?"horizontal":"horizontal-"+b:null,n.a.createElement(m.a,Object(r.a)({ref:a},y,{as:p,className:o()(l,O,u&&O+"-"+u,t&&O+"-"+t)}))}));O.defaultProps=y,O.displayName="ListGroup",O.Item=p;a.a=O},110:function(e,a,t){"use strict";var r,i=new Uint8Array(16);function s(){if(!r&&!(r="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(i)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var l=function(e){return"string"===typeof e&&o.test(e)},n=[],c=0;c<256;++c)n.push((c+256).toString(16).substr(1));var d=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(n[e[a+0]]+n[e[a+1]]+n[e[a+2]]+n[e[a+3]]+"-"+n[e[a+4]]+n[e[a+5]]+"-"+n[e[a+6]]+n[e[a+7]]+"-"+n[e[a+8]]+n[e[a+9]]+"-"+n[e[a+10]]+n[e[a+11]]+n[e[a+12]]+n[e[a+13]]+n[e[a+14]]+n[e[a+15]]).toLowerCase();if(!l(t))throw TypeError("Stringified UUID is invalid");return t};a.a=function(e,a,t){var r=(e=e||{}).random||(e.rng||s)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,a){t=t||0;for(var i=0;i<16;++i)a[t+i]=r[i];return a}return d(r)}}}]);
//# sourceMappingURL=3.eff06a68.chunk.js.map