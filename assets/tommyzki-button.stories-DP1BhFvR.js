import{x as Q}from"./lit-element-ZsroTrTN.js";const V={title:"Components/Button",tags:["autodocs"],args:{variant:"primary",size:"md",label:"Primary Button",disabled:!1,loading:!1,fullwidth:!1,rounded:!1},argTypes:{variant:{control:"select",options:["primary","secondary","danger","outline","ghost","link"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},loading:{control:"boolean"},fullwidth:{control:"boolean"},rounded:{control:"boolean"},label:{control:"text"}}},e=({variant:A,size:H,label:I,disabled:J,loading:K,fullwidth:M,rounded:N})=>Q`
  <tommyzki-button
    variant=${A}
    size=${H}
    ?disabled=${J}
    ?loading=${K}
    ?fullwidth=${M}
    ?rounded=${N}
  >
    ${I}
  </tommyzki-button>
`,r={render:e,args:{variant:"primary",label:"Primary Button"}},a={render:e,args:{variant:"secondary",label:"Secondary Button"}},n={render:e,args:{variant:"danger",label:"Danger Button"}},o={render:e,args:{variant:"outline",label:"Outline Button"}},t={render:e,args:{variant:"ghost",label:"Ghost Button"}},s={render:e,args:{variant:"link",label:"Link Button"}},l={render:e,args:{disabled:!0,label:"Disabled"}},d={render:e,args:{loading:!0,label:"Loading..."}},i={render:e,args:{fullwidth:!0,label:"Full Width"}},c={render:e,args:{rounded:!0,label:"Rounded"}};var u,m,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'primary',
    label: 'Primary Button'
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'secondary',
    label: 'Secondary Button'
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var h,v,B;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'danger',
    label: 'Danger Button'
  }
}`,...(B=(v=n.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var S,T,f;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'outline',
    label: 'Outline Button'
  }
}`,...(f=(T=o.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var k,D,L;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'ghost',
    label: 'Ghost Button'
  }
}`,...(L=(D=t.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var w,$,z;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: Template,
  args: {
    variant: 'link',
    label: 'Link Button'
  }
}`,...(z=($=s.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var O,P,x;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: Template,
  args: {
    disabled: true,
    label: 'Disabled'
  }
}`,...(x=(P=l.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var F,G,R;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: Template,
  args: {
    loading: true,
    label: 'Loading...'
  }
}`,...(R=(G=d.parameters)==null?void 0:G.docs)==null?void 0:R.source}}};var W,_,C;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: Template,
  args: {
    fullwidth: true,
    label: 'Full Width'
  }
}`,...(C=(_=i.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var E,j,q;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: Template,
  args: {
    rounded: true,
    label: 'Rounded'
  }
}`,...(q=(j=c.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};const X=["Primary","Secondary","Danger","Outline","Ghost","Link","Disabled","Loading","Fullwidth","Rounded"];export{n as Danger,l as Disabled,i as Fullwidth,t as Ghost,s as Link,d as Loading,o as Outline,r as Primary,c as Rounded,a as Secondary,X as __namedExportsOrder,V as default};
