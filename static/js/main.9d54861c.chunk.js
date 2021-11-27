(this.webpackJsonpnano=this.webpackJsonpnano||[]).push([[0],{16:function(e,a){a.applications={OPTICAL:"Optical",Electrical:"Electrical",MAGNETIC:"Magnetic",STRENGTH:"Strength",CUSTOM:"Custom"},a.getMinParticles=function(e){switch(e){case"Optical":return 40;case"Electrical":return 10;case"Magnetic":case"Strength":default:return 1}},a.getMaxParticles=function(e){switch(e){case"Optical":return 100;case"Electrical":return 20;case"Magnetic":return 10;case"Strength":return 50;default:return 100}}},20:function(e,a){a.shapes={Cuboctahedral:"Cuboctahedral",Spherical:"Spherical"},a.get_spherical_surface=function(e){var a=(10*Math.pow(e,2)-20*e+12)/((10*Math.pow(e,3)-15*Math.pow(e,2)+11*e-3)/3);return(a*=100)>100&&(a=100),a},a.get_cubo_octahedral_surface=function(e){var a=(10*Math.pow(e,2)+2)/((10*Math.pow(e,3)+15*Math.pow(e,2)+11*e+3)/3);return a*=100}},73:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},89:function(e,a,t){},90:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(26),r=t.n(s),i=(t(73),t(74),t(75),t(2)),l=function(){return Object(i.jsx)("div",{className:"banner",children:"Nano Assignment"})},o=t(11),u=t(125),j=t(127),h=t(129),b=t(20),p=t(16),d=t(46),O=t.n(d),x=t(55),v=t(56),f=(t(82),function(e,a){return[{label:"Series 1",data:e},{label:"Series 2",data:a}]}),m=function(e,a,t){for(var c=[],n=e;n<=a;n++)t===b.shapes.Cuboctahedral?c.push([n,Object(b.get_cubo_octahedral_surface)(n)]):c.push([n,Object(b.get_spherical_surface)(n)]);return c},g=function(e,a,t){for(var c=[],n=e;n<=a;n++)t===b.shapes.Cuboctahedral?c.push([n,100-Object(b.get_cubo_octahedral_surface)(n)]):c.push([n,100-Object(b.get_spherical_surface)(n)]);return c},N=function(e){var a=e.minParticles,t=e.maxParticles,n=e.shape,s=Object(c.useState)(m(a,t,n)),r=Object(o.a)(s,2),l=r[0],u=r[1],j=Object(c.useState)(g(a,t,n)),h=Object(o.a)(j,2),b=h[0],p=h[1],d=Object(c.useState)([]),N=Object(o.a)(d,2),C=N[0],E=N[1];Object(c.useEffect)(Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(m(a,t,n)),p(g(a,t,n)),console.log(l),E(f(l,b));case 4:case"end":return e.stop()}}),e)}))),[t,a,n]);var S=Object(c.useMemo)((function(){return[{primary:!0,type:"linear",position:"bottom"},{type:"linear",position:"left"}]}),[]);return Object(i.jsx)("div",{className:"graphContainer",children:Object(i.jsx)("div",{className:"graphSize",children:Object(i.jsx)(v.Chart,{data:C,axes:S})})})},C=(t(83),function(){var e=Object(c.useState)(b.shapes.Cuboctahedral),a=Object(o.a)(e,2),t=a[0],n=a[1],s=Object(c.useState)(p.applications.Electrical),r=Object(o.a)(s,2),l=r[0],d=r[1],O=Object(c.useState)(Object(p.getMinParticles)(p.applications.Electrical)),x=Object(o.a)(O,2),v=x[0],f=x[1],m=Object(c.useState)(Object(p.getMaxParticles)(p.applications.Electrical)),g=Object(o.a)(m,2),C=g[0],E=g[1],S=Object(c.useState)(!1),M=Object(o.a)(S,2),T=M[0],_=M[1];return Object(c.useEffect)((function(){_(!1)}),[t,l,v,C]),Object(i.jsxs)("div",{className:"bodyContainer",children:[Object(i.jsxs)("div",{className:"userInput",children:[Object(i.jsxs)(u.a,{className:"userInputBar",label:"shape",value:t,select:!0,margin:"dense",onChange:function(e){return n(e.target.value)},children:[Object(i.jsx)(j.a,{value:b.shapes.Cuboctahedral,children:b.shapes.Cuboctahedral}),Object(i.jsx)(j.a,{value:b.shapes.Spherical,children:b.shapes.Spherical})]}),Object(i.jsx)("div",{className:"marginDiv"}),Object(i.jsxs)(u.a,{className:"userInputBar",label:"application",value:l,select:!0,margin:"dense",onChange:function(e){d(e.target.value),E(Object(p.getMaxParticles)(l)),f(Object(p.getMinParticles)(l))},children:[Object(i.jsx)(j.a,{value:p.applications.Electrical,children:p.applications.Electrical}),Object(i.jsx)(j.a,{value:p.applications.MAGNETIC,children:p.applications.MAGNETIC}),Object(i.jsx)(j.a,{value:p.applications.STRENGTH,children:p.applications.STRENGTH}),Object(i.jsx)(j.a,{value:p.applications.OPTICAL,children:p.applications.OPTICAL})]}),Object(i.jsx)("div",{className:"marginDiv"}),Object(i.jsx)(u.a,{variant:"outlined",className:"loginInputBar",margin:"dense",value:v,onChange:function(e){return f(e.target.value)}}),Object(i.jsx)("div",{className:"marginDiv"}),Object(i.jsx)(u.a,{variant:"outlined",className:"loginInputBar",margin:"dense",value:C,onChange:function(e){return E(e.target.value)}})]}),T?Object(i.jsx)(N,{maxParticles:C,minParticles:v,shape:t}):Object(i.jsx)(h.a,{variant:"contained",onClick:function(){return _(!0)},children:"Draw Graph"})]})}),E=(t(89),function(){return Object(i.jsxs)("div",{className:"footerContainer",children:[Object(i.jsxs)("div",{className:"footerConatact",children:[Object(i.jsx)("div",{className:"nameText",children:"Anmol Chaddha"}),Object(i.jsx)("div",{className:"rollText",children:"1801EE07"})]}),Object(i.jsxs)("div",{className:"footerConatact",children:[Object(i.jsx)("div",{className:"nameText",children:"Aparsh Gupta"}),Object(i.jsx)("div",{className:"rollText",children:"1801EE08"})]}),Object(i.jsxs)("div",{className:"footerConatact",children:[Object(i.jsx)("div",{className:"nameText",children:"Apoorv Verma"}),Object(i.jsx)("div",{className:"rollText",children:"1801EE09"})]}),Object(i.jsxs)("div",{className:"footerConatact",children:[Object(i.jsx)("div",{className:"nameText",children:"Ashwin Goyal"}),Object(i.jsx)("div",{className:"rollText",children:"1801EE14"})]})]})});var S=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(C,{}),Object(i.jsx)(E,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.9d54861c.chunk.js.map