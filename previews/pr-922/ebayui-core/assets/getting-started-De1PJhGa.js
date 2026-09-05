import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-CkXiLnOg.js";import{a as r}from"./chunk-W22LQPXL-xjpAY3hq.js";import{o as i,s as a}from"./blocks-BnIb2ITy.js";function o(e){let n={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,h4:`h4`,p:`p`,pre:`pre`,...t(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i,{title:`Getting Started`}),`
`,(0,c.jsx)(n.h1,{id:`getting-started`,children:`Getting Started`}),`
`,(0,c.jsxs)(n.p,{children:[`The eBayUI core components are available as the `,(0,c.jsx)(n.code,{children:`@ebay/ebayui-core`}),` package on `,(0,c.jsx)(n.a,{href:`https://www.npmjs.com/package/@ebay/ebayui-core`,rel:`nofollow`,children:`NPM`}),`.`]}),`
`,(0,c.jsx)(n.p,{children:`Use npm or yarn to add the package dependency to your project:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-sh`,children:`npm add @ebay/ebayui-core
`})}),`
`,(0,c.jsx)(n.h2,{id:`upgrading-to-the-latest-versions`,children:`Upgrading to the latest versions`}),`
`,(0,c.jsxs)(n.p,{children:[`See the `,(0,c.jsx)(n.a,{href:`https://github.com/eBay/evo-web/tree/main/packages/ebayui-core/UPGRADE.md`,rel:`nofollow`,children:`upgrade guide`}),` for more information`]}),`
`,(0,c.jsx)(n.h3,{id:`custom-tags`,children:`Custom Tags`}),`
`,(0,c.jsxs)(n.p,{children:[`Once the package dependency is added, the eBay `,(0,c.jsx)(n.a,{href:`https://markojs.com/docs/custom-tags/`,rel:`nofollow`,children:`customs tags`}),` are now available for use in your Marko templates. For example, to use an `,(0,c.jsx)(n.code,{children:`ebay-menu`}),` component:`]}),`
`,(0,c.jsx)(n.h4,{id:`templatemarko`,children:(0,c.jsx)(n.em,{children:`template.marko`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,(0,c.jsx)(n.h3,{id:`attributes`,children:`Attributes`}),`
`,(0,c.jsxs)(n.p,{children:[`Attributes provide initial state for a component. We can see that the menu has `,(0,c.jsx)(n.code,{children:`text`}),` and `,(0,c.jsx)(n.code,{children:`type`}),` attributes:`]}),`
`,(0,c.jsx)(n.h4,{id:`templatemarko-1`,children:(0,c.jsx)(n.em,{children:`template.marko`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`<ebay-menu text="Sort" type="radio">
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})}),`
`,(0,c.jsx)(n.p,{children:`Passing new attributes to an ebayui component will always reset it's internal state. If you want to persist this state yourself, events are exposed which allow you to synchronize the state into your own components, for example:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`class {
    onCreate() {
        this.state = {
            dialogIsOpen: false,
        };
    }

    handleDialogClose() {
        this.state.dialogIsOpen = false;
    }

    handleDialogOpen() {
        this.state.dialogIsOpen = true;
    }
}

<ebay-lightbox-dialog
    open=state.dialogIsOpen
    on-open("handleDialogOpen")
    on-close("handleDialogClose")
>
    ...
</ebay-lightbox-dialog>
`})}),`
`,(0,c.jsx)(n.h4,{id:`pass-through-attributes`,children:`Pass-Through Attributes`}),`
`,(0,c.jsx)(n.p,{children:`HTML attributes can be used on any component, and they will be passed through to the most prominent tag of the component. The most prominent tag is usually the root or form control, but individual components will note if it varies for specific cases.`}),`
`,(0,c.jsx)(n.p,{children:`Example of static usage:`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`<ebay-button id="my-button"/>
`})}),`
`,(0,c.jsxs)(n.p,{children:[`For using pass-through attributes dynamically, they should be sent through the `,(0,c.jsx)(n.code,{children:`html-attributes`}),` attribute:`]}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`$ const myAttributes = { id: "my-button" };
<ebay-button html-attributes=myAttributes/>
`})}),`
`,(0,c.jsx)(n.p,{children:`Static and dynamic pass-through attributes can be used simultaneously (html-attributes takes precedence in conflicts):`}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`$ const myAttributes = { id: "my-button" };
<ebay-button html-attributes=myAttributes type="submit"/>
`})}),`
`,(0,c.jsx)(n.h3,{id:`events`,children:`Events`}),`
`,(0,c.jsxs)(n.p,{children:[`Events can also be handled using `,(0,c.jsx)(n.a,{href:`https://markojs.com/docs/events/`,rel:`nofollow`,children:`Marko syntax`}),`:`]}),`
`,(0,c.jsx)(n.h4,{id:`templatemarko-2`,children:(0,c.jsx)(n.em,{children:`template.marko`})}),`
`,(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:`language-marko`,children:`<ebay-menu text="Sort" type="radio" on-change("onMenuChange")>
    <@item>Price</@item>
    <@item>Time</@item>
    <@item>Distance</@item>
</ebay-menu>
`})})]})}function s(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;function l(){return(l=e((()=>{c=r(),n(),a()})))()}l();export{s as default};