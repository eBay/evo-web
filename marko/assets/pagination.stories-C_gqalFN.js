import{b as L}from"./utils-DyU2_5R1.js";import{a as f,m as bt,_ as e,q as m,x as j,b as a,c as Tt,f as N,p as Ct,E as U,d as J,i as kt,r as Z,A as wt,w as S,y as q,$ as pt,e as d,v as h,L as It,g as G,a7 as K,B as $t,l as c,k as o,G as F,a5 as X}from"./dom-BHuf_wjI.js";import{c as Q,b as V,$ as Y,a as tt}from"./index-Cf7gXux2.js";import{b as Mt,c as Rt,d as Dt,e as Ht,h as Pt,i as Et,j as Lt,k as St,a as Ot,$ as zt,f as Bt,g as At}from"./evo-icon-overflow-horizontal-24-CZ62gXD3.js";import"./controllable.feat-D9Vh_Z1q.js";import"./iframe-D1vEsa04.js";import"./index-3OPMgxGk.js";/* empty css                    */import"./index-Ctnw2zLv.js";import"./index-edzibN_L.js";import"./evo-icon-chevron-down-16-Zh7qSkbb.js";import"./index-Ce3AU_ni.js";import"./controllable-input.feat-DsMrAAy9.js";import"./controllable-open.feat-DzmLOvf4.js";import"./controllable-select.feat-B-1_7x6U.js";import"./preload-helper-PPVm8Dsz.js";const Wt=`<h1 style='display: flex; justify-content: space-between; align-items: center;'>
    <span>
        evo-pagination
    </span>
    <span style='font-weight: normal; font-size: medium; margin-bottom: -15px;'>
        DS v1.1.0
    </span>
</h1>

The \`<evo-pagination>\` is a tag used to create a pagination navigation. It will display up to 9 page links.

**Note:** If you want to have client side or ajax based navigation then you should omit the \`href\` attribute on each item. This will cause each item to be \`<button>\` instead of an \`<a>\`.

## Examples and Documentation

- [Storybook](https://ebay.github.io/evo-web/ebayui-core/?path=/story/navigation-disclosure-evo-pagination)
- [Storybook Docs](https://ebay.github.io/evo-web/ebayui-core/?path=/docs/navigation-disclosure-evo-pagination)
- [Code Examples](https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/src/components/evo-pagination/examples)
`;function jt(t){const n=t.style.width;t.style.width="100vw";const i=t.offsetWidth;return t.style.width=n,i}typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;const x="<nav role=navigation><span aria-live=polite role=status><!></span><!><ol class=pagination__items></ol><!></nav>",v=" E%l%b b%l",Nt=9,nt=5;bt();const Ut=t=>{Pt(t.a),Et(t.a,{})},Zt=e("r1Jgu71",Rt,(t=>`/${t}&`)(Mt),Ut),et=m(10,t=>N(t.a,["pagination__item",t._._.f]),t=>t._._),Jt=t=>{et(t),Bt(t.b),At(t.b,{})},at=m(10,t=>N(t.a,["pagination__item",t._._.f]),t=>t._._),qt=at,Gt=t=>{Lt(t.a),St(t.a,{})},Kt=e("svjlGg$",Ht,(t=>`/${t}&`)(Dt),Gt),Ft=S(0,"<span role=separator></span>"," ",qt,(t=>`<span role=separator>${t}</span>`)(Ot),(t=>` D/${t}&l`)(zt),Jt),ot=m(41,t=>Ft(t,t._._.y?0:1),t=>t._._),Xt=t=>{ot(t),st(t),rt(t)},it=d(1,t=>Z(t.a,"hidden",t._._.a8||t._._.a3===t._.M)),st=m(43,t=>{t._._.a3,t._.M,it(t)},t=>t._._),rt=m(44,it,t=>t._._),Qt=S(0,"<li></li>"," ",Xt),lt=d(9,t=>Qt(t,t._.a2===t.M||t._.a3===t.M?0:1)),ct=K(3,28,"M",lt),Vt=t=>{ct._(t),_t._(t),ut._(t)},_t=K(3,29,"M",lt),ut=$t(3,t=>Z(t.b,"hidden",t._.a9(t.M))),Yt=G(2),tn=(t,n)=>{an(t,n?.class),Yt(t,n?.href?"a":"button",()=>({...n,class:["pagination__item",n?.class],"aria-current":n?.current&&"page"}))},nn=(t,n)=>tn(t,n[0]),en=h(at,et),an=a(5,en),dt=m(40,t=>j(t.a,t._.r)),on=dt,sn=e("XUw__nZ"," "," ",on),mt=q(4,0,t=>Y(t.a,{...t._.n,class:["pagination__next",t._.n?.href?"icon-link":"icon-btn",t._.n?.class],a11yText:t._.n?.a11yText||"Next Page",style:[t._.n?.style,{"min-width":"40"}],content:Zt(t)})),rn=t=>{mt._(t),tt(t.a)},gt=q(2,0,t=>Y(t.a,{...t._.m,class:["pagination__previous",t._.m?.href?"icon-link":"icon-btn",t._.m?.class],a11yText:t._.m?.a11yText||"Previous Page",style:[t._.m?.style,{"min-width":"40"}],content:Kt(t)})),ln=t=>{gt._(t),tt(t.a)},cn=G(1,sn),ft=d(37,t=>cn(t,t.q,()=>({id:t.aa,class:"clipped"}))),_n=a(16,ft),y=(t,n)=>_n(t,n!==void 0?n:"h2"),un=h(dt),dn=a(17,un),b=(t,n)=>dn(t,n!==void 0?n:"Results Pagination - Page 1"),mn=J("Ki_ocHj",t=>{t.w(),window.addEventListener("resize",t.w,{signal:It(t,0)})}),gn=a(22,t=>{pt(t,0),mn(t)}),ht=U(18,t=>gn(t,On(t))),fn=(t,n)=>{$n(t,n.start),Mn(t,n.end),Dn(t,n.hideDots)},T=d(27,t=>fn(t,(()=>{let n=!1,i=!1;const s=t.u.findIndex(g=>g.current),_=Math.floor(t.t/2);let r=s-_,l=s+_;return r<=0?(l=t.t-1,r=0):l>=t.z?(l=t.z,r=t.z-(t.t-1)):t.t%2===0&&r++,t.x&&(s+_>=t.z||l>=t.z?n=!0:s<=l-2?l-=2:(r+=1,l-=1)),t.y&&(s-_<=0?i=!0:s>=r-1?r+=2:(l-=1,r-=1)),{start:r,end:l,hideDots:n,hideLeadingDots:i}})()),4),xt=U(19,T);function C(t){ht(t,0),xt(t,nt)}const hn=a(20,t=>{bn(t,t.u.length),T(t)}),xn=a(35,ut),O=d(33,t=>xn(t,zn(t)),3),vn=a(28,t=>{O(t),ct(t)}),vt=d(26,t=>vn(t,t.x?t.z:-1)),yn=a(25,t=>{vt(t),T(t)}),bn=(t,n)=>yn(t,n-1),Tn=wt(3,"<!><!><li><!></li>","b%b D%",Vt,nn),k=(t,n)=>{hn(t,[...n||[]]),Tn(t,[n])},Cn=a(23,t=>{vt(t),T(t)}),kn=h(st),wn=a(29,t=>{O(t),_t(t),kn(t)}),pn=h(ot),In=a(24,t=>{wn(t,t.y?1:-1),T(t),pn(t)}),w=(t,n)=>{Cn(t,n==="show-last"||n==="overflow"),In(t,n==="overflow")},$n=a(31,O),Mn=a(32,O),Rn=h(rt),Dn=a(34,Rn),Hn=a(36,t=>{Z(t.a,"aria-labelledby",t.aa),ft(t)}),p=(t,n)=>Hn(t,n||Ct(t,"Jaa")),I=(t,n)=>N(t.a,["pagination",n]),Pn=J("pSoJy1_",t=>kt(t,"a")),$=a(15,t=>{Tt(t,"a",t.p,{role:1,class:1,"aria-labelledby":1}),Pn(t)}),En=S(2,(t=>`<!>${t}<!>`)(Q),(t=>`b/${t}&b`)(V),ln),M=a(12,t=>{En(t,t.m?0:1),gt(t)}),Ln=S(4,(t=>`<!>${t}<!>`)(Q),(t=>`b/${t}&b`)(V),rn),R=a(13,t=>{Ln(t,t.n?0:1),mt(t)}),Sn=(t,n)=>{(({a11yCurrentText:i,a11yHeadingTag:s,class:_,id:r,item:l,next:g,prev:B,variant:A,...u})=>$(t,u))(n),I(t,n.class),p(t,n.id),y(t,n.a11yHeadingTag),w(t,n.variant),k(t,n.item),M(t,n.prev),R(t,n.next),b(t,n.a11yCurrentText)},On=t=>function(){if(!t.s){const n=t.d.querySelectorAll("li");for(let i=0;i<n.length;i++){const s=n[i];if(s.offsetWidth){ht(t,s.offsetWidth);break}}}xt(t,Math.max(nt,Math.min(Nt,Math.floor(jt(t.a)/t.s)-2)))},zn=t=>function(n){return(n<t.a5||n>t.a6)&&t.a2!==n&&t.a3-1!==n},Bn=f("Whgt0yh",x,v,C,Sn),An=x,Wn=(t=>`/${t}&`)(v),jn=e("eJNHDhv","9"),Nn=e("m7DpF8F","8"),Un=e("kiJt1kP","7"),Zn=e("sFUOBj6","6"),Jn=e("U5nOh0s","5"),qn=e("tUU$Eaq","4"),Gn=e("khbqx8p","3"),Kn=e("HzW8L_w","2"),Fn=e("to0KR5z","1");function Xn(t){C(t.a),M(t.a,c({a11yText:"Previous",href:"#",disabled:!0})),k(t.a,o(o(o(o(o(o(o(o(c({href:"#",current:!0,content:Fn(t)}),{href:"#",content:Kn(t)}),{href:"#",content:Gn(t)}),{href:"#",content:qn(t)}),{href:"#",content:Jn(t)}),{href:"#",content:Zn(t)}),{href:"#",content:Un(t)}),{href:"#",content:Nn(t)}),{href:"#",content:jn(t)})),R(t.a,c({a11yText:"Next",href:"#"})),b(t.a,"Results — Page 1"),y(t.a),I(t.a),p(t.a),w(t.a),$(t.a,{})}const Qn=f("bLUGQRp",An,Wn,Xn),Vn=`<evo-pagination a11yCurrentText="Results — Page 1">
  <@prev a11yText="Previous" href="#" disabled/>
  <@item href="#" current>
    1
  </@item>
  <@item href="#">
    2
  </@item>
  <@item href="#">
    3
  </@item>
  <@item href="#">
    4
  </@item>
  <@item href="#">
    5
  </@item>
  <@item href="#">
    6
  </@item>
  <@item href="#">
    7
  </@item>
  <@item href="#">
    8
  </@item>
  <@item href="#">
    9
  </@item>
  <@next a11yText="Next" href="#"/>
</evo-pagination>
`,Yn=x,te=(t=>`/${t}&`)(v),ne=e("h0cRKid","9"),ee=e("Q6ZX4Dj","8"),ae=e("B$SuJ1c","7"),oe=e("wDsGpaz","6"),ie=e("VfK9wsH","5"),se=e("FI0j_d6","4"),re=e("D7RFMZL","3"),le=e("JYVgjDD","2"),ce=e("j9xrrd9","1");function _e(t){C(t.a),M(t.a,c({a11yText:"Previous",disabled:!0})),k(t.a,o(o(o(o(o(o(o(o(c({current:!0,onClick:Te,content:ce(t)}),{onClick:be,content:le(t)}),{onClick:ye,content:re(t)}),{onClick:ve,content:se(t)}),{onClick:xe,content:ie(t)}),{onClick:he,content:oe(t)}),{onClick:fe,content:ae(t)}),{onClick:ge,content:ee(t)}),{onClick:me,content:ne(t)})),R(t.a,c({a11yText:"Next",onClick:de})),I(t.a,"example-05")}const ue=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};b(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),p(t.a,n.id),w(t.a,n.variant),$(t.a,(({a11yCurrentText:i,a11yHeadingTag:s,class:_,id:r,item:l,next:g,prev:B,variant:A,...u})=>u)(n))});function de(){console.log("next")}function me(){console.log(9)}function ge(){console.log(8)}function fe(){console.log(7)}function he(){console.log(6)}function xe(){console.log(5)}function ve(){console.log(4)}function ye(){console.log(3)}function be(){console.log(2)}function Te(){console.log(1)}const Ce=f("KpXQncR",Yn,te,_e,ue),ke=`<evo-pagination a11yCurrentText="Results — Page 1" ...input class="example-05">
  <@prev a11yText="Previous" disabled/>
  <@item
    current
    onClick() {
      console.log(1);
    }>
    1
  </@item>
  <@item onClick() {
    console.log(2);
  }>
    2
  </@item>
  <@item onClick() {
    console.log(3);
  }>
    3
  </@item>
  <@item onClick() {
    console.log(4);
  }>
    4
  </@item>
  <@item onClick() {
    console.log(5);
  }>
    5
  </@item>
  <@item onClick() {
    console.log(6);
  }>
    6
  </@item>
  <@item onClick() {
    console.log(7);
  }>
    7
  </@item>
  <@item onClick() {
    console.log(8);
  }>
    8
  </@item>
  <@item onClick() {
    console.log(9);
  }>
    9
  </@item>
  <@next
    a11yText="Next"
    onClick() {
      console.log("next");
    }/>
</evo-pagination>
`,we=x,pe=(t=>`/${t}&`)(v),W=15,Ie=F(e("DbQaymw"," "," "),{6(t){j(t.a,t.g)}}),yt=d(4,t=>{const n={a11yCurrentText:`Results Pagination - Page ${t.d}`,...t.c};b(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),I(t.a,n.class),p(t.a,n.id),w(t.a,n.variant),$(t.a,(({a11yCurrentText:i,a11yHeadingTag:s,class:_,id:r,item:l,next:g,prev:B,variant:A,...u})=>u)(n))}),z=U(3,t=>{M(t.a,c({a11yText:"previous",disabled:t.d===0,onClick:He(t)})),R(t.a,c({a11yText:"next",disabled:t.d===W,onClick:De(t)}));let n;X(W,1,1,i=>{n=o(n,{current:i===t.d,onClick:Re({_:t,g:i}),content:Ie(t,{6:i})})}),k(t.a,n),yt(t)});function $e(t){C(t.a),z(t,0)}const Me=a(2,yt),Re=t=>function(){const n=t._;z(n,t.g)},De=t=>function(){z(t,Math.min(t.d+1,W))},He=t=>function(){z(t,Math.max(t.d-1,0))},Pe=f("I3LKEnr",we,pe,$e,Me),Ee=`static const SIZE = 15;

<let/current=0>

<evo-pagination a11yCurrentText=\`Results Pagination - Page \${current}\` ...input>
  <@prev
    a11yText="previous"
    disabled=current === 0
    onClick() {
      current = Math.max(current - 1, 0);
    }/>
  <for|i| from=1 to=SIZE>
    <@item
      current=i === current
      onClick() {
        current = i;
      }>
      \${i}
    </@item>
  </for>
  <@next
    a11yText="next"
    disabled=current === SIZE
    onClick() {
      current = Math.min(current + 1, SIZE);
    }/>
</evo-pagination>
`,Le=x,Se=(t=>`/${t}&`)(v),Oe=F(e("mc0cwei"," "," "),{4(t){j(t.a,t.e)}}),ze=e("fp4dHXd","1");function Be(t){C(t.a),M(t.a,c({a11yText:"Previous",disabled:!0})),R(t.a,c({a11yText:"Next"}));let n;n=o(n,{current:!0,content:ze(t)}),X(50,2,1,i=>{n=o(n,{content:Oe(t,{4:i})})}),k(t.a,n)}const Ae=a(2,t=>{const n={a11yCurrentText:"Results — Page 1",...t.c};b(t.a,n.a11yCurrentText),y(t.a,n.a11yHeadingTag),I(t.a,n.class),p(t.a,n.id),w(t.a,n.variant),$(t.a,(({a11yCurrentText:i,a11yHeadingTag:s,class:_,id:r,item:l,next:g,prev:B,variant:A,...u})=>u)(n))}),We=f("vzlDAxw",Le,Se,Be,Ae),je=`<evo-pagination a11yCurrentText="Results — Page 1" ...input>
  <@prev a11yText="Previous" disabled/>
  <@item current>
    1
  </@item>
  <for|i| from=2 to=50>
    <@item>\${i}</@item>
  </for>
  <@next a11yText="Next"/>
</evo-pagination>
`,oa={title:"navigation & disclosure/evo-pagination",component:Bn,parameters:{docs:{description:{component:Wt}}},argTypes:{a11yCurrentText:{type:{name:"string",required:!0},control:"text",description:"Localized description for the current page (e.g. Results of Page 1)"},a11yHeadingTag:{type:"string",control:"text",description:"HTML tag to use for the a11y heading",table:{defaultValue:{summary:"h2"}}},item:{description:"Attribute tag representing a pagination item","@":{current:{type:"boolean",control:"boolean",description:"Indicates that this item is the current page"},href:{type:"string",control:"string",description:"When present, switch to `<a>` instead of `<button>`"},"<button> attributes":{description:"All attributes and event handlers from [the native HTML `<button>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button) will be passed through (or to [the `<a>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a) when `href` is present)"}}},prev:{description:"Attribute tag for the previous button","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@prev>`"}}},next:{description:"Attribute tag for the next button","@":{"<evo-icon-button> attributes":{description:"All attributes and event handlers from [the `<evo-icon-button>` tag](?path=/docs/buttons-evo-icon-button--docs) will be passed through to `<@next>`"}}},variant:{type:"string",options:["show-last","show-range","overflow"],control:"inline-radio",description:"If `show-last` then will show the last page always and will put `…` between the last visible range and the last page. `…` and the last page will take up two items in the range. `…` will be hidden when the range to the last item is fully visible.",table:{defaultValue:{summary:"show-range"}}},"<nav> attributes":{description:"All attributes and event handlers from [the native HTML `<nav>` tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/nav) will be passed through"}}},D=L(Qn,Vn),H=L(Ce,ke),P=L(Pe,Ee),E=L(We,je);D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:"buildExtensionTemplate(BasicLinksTemplate, BasicLinksCode)",...D.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ButtonsTemplate, ButtonsCode)",...H.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:"buildExtensionTemplate(InteractiveTemplate, InteractiveCode)",...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:"buildExtensionTemplate(ManyItemsTemplate, ManyItemsCode)",...E.parameters?.docs?.source}}};const ia=["Links","Buttons","Interactive","ManyItems"];export{H as Buttons,P as Interactive,D as Links,E as ManyItems,ia as __namedExportsOrder,oa as default};
