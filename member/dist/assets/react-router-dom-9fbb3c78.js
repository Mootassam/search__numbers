import{_ as T,w as q,x as c,R as j,y as F,z as E,A as d,B as z,C as B,D as G,E as I}from"./index-6f6b614c.js";c.Component;c.Component;var A=function(e,t){return typeof e=="function"?e(t):e},D=function(e,t){return typeof e=="string"?I(e,null,null,t):e},N=function(e){return e},v=c.forwardRef;typeof v>"u"&&(v=N);function J(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}var O=v(function(r,e){var t=r.innerRef,a=r.navigate,i=r.onClick,o=E(r,["innerRef","navigate","onClick"]),n=o.target,l=d({},o,{onClick:function(s){try{i&&i(s)}catch(f){throw s.preventDefault(),f}!s.defaultPrevented&&s.button===0&&(!n||n==="_self")&&!J(s)&&(s.preventDefault(),a())}});return N!==v?l.ref=e||t:l.ref=t,c.createElement("a",l)}),Q=v(function(r,e){var t=r.component,a=t===void 0?O:t,i=r.replace,o=r.to,n=r.innerRef,l=E(r,["component","replace","to","innerRef"]);return c.createElement(z.Consumer,null,function(u){u||B(!1);var s=u.history,f=D(A(o,u.location),u.location),R=f?s.createHref(f):"",p=d({},l,{href:R,navigate:function(){var w=A(o,u.location),h=i?s.replace:s.push;h(w)}});return N!==v?p.ref=e||n:p.innerRef=n,c.createElement(a,p)})}),$=function(e){return e},y=c.forwardRef;typeof y>"u"&&(y=$);function U(){for(var r=arguments.length,e=new Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.filter(function(a){return a}).join(" ")}y(function(r,e){var t=r["aria-current"],a=t===void 0?"page":t,i=r.activeClassName,o=i===void 0?"active":i,n=r.activeStyle,l=r.className,u=r.exact,s=r.isActive,f=r.location,R=r.sensitive,p=r.strict,g=r.style,w=r.to,h=r.innerRef,b=E(r,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return c.createElement(z.Consumer,null,function(P){P||B(!1);var m=f||P.location,S=D(A(w,m),m),H=S.pathname,x=H&&H.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),K=x?G(m.pathname,{path:x,exact:u,sensitive:R,strict:p}):null,C=!!(s?s(K,m):K),M=C?U(l,o):l,W=C?d({},g,{},n):g,L=d({"aria-current":C&&a||null,className:M,style:W,to:S},b);return $!==y?L.ref=e||h:L.innerRef=h,c.createElement(Q,L)})});export{Q as L};
