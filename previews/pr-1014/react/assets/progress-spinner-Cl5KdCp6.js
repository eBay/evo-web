import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{t as r}from"./classnames-D09xBJOL.js";import{a as i,i as a,n as o,o as s,r as c,t as l}from"./spinner-30-aIaTEQi4.js";function u(){return(u=t((()=>{})))()}function d({a11yText:e=`Loading`,size:t,className:n,...r}){let a=t===`large`?l:t===`small`?i:c;return(0,p.jsx)(`span`,{...r,"aria-label":e??void 0,className:(0,f.default)(`progress-spinner`,t===`large`&&`progress-spinner--large`,n),role:`img`,children:(0,p.jsx)(a,{})})}var f,p;function m(){return(m=t((()=>{f=e(r(),1),s(),a(),o(),u(),p=n();try{d.displayName=`EvoProgressSpinner`,d.__docgenInfo={description:`A progress spinner indicates that an operation is still in progress.

The spinner is indeterminate and does not communicate a percentage. \`a11yText\`
must describe what is loading.

## Usage

\`\`\`tsx
import { EvoProgressSpinner } from "@evo-web/react/progress-spinner";

<EvoProgressSpinner a11yText="Loading results" />
\`\`\``,displayName:`EvoProgressSpinner`,filePath:`/home/runner/work/evo-web/evo-web/packages/evo-react/src/progress-spinner/progress-spinner.tsx`,methods:[],props:{a11yText:{defaultValue:{value:`Loading`},declarations:[{fileName:`evo-react/src/progress-spinner/types.ts`,name:`TypeLiteral`}],description:'Localized accessible label that describes the progress spinner.\nEnglish default to be overridden is `"Loading"`.\nPass `null` explicitly _only_ if alternative accessibility information is present.',name:`a11yText`,required:!1,tags:{},type:{name:`string | null`}},size:{defaultValue:null,declarations:[{fileName:`evo-react/src/progress-spinner/types.ts`,name:`TypeLiteral`}],description:`Spinner size. Omit for the default 24px spinner.`,name:`size`,required:!1,tags:{},type:{name:`enum`,raw:`SpinnerSize`,value:[{value:`"small"`},{value:`"large"`}]}}},tags:{summary:`Indeterminate loading indicator.`}}}catch{}})))()}export{m as n,d as t};