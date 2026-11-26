import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s;function c(){return(c=e((()=>{t={title:`Skin/Progress Bar`},n=()=>`<progress class="progress-bar" value="0" max="100">0%</progress>`,n.storyName=`Empty`,r=()=>`<progress class="progress-bar" value="50" max="100">50%</progress>`,r.storyName=`Half`,i=()=>`<progress class="progress-bar" value="100" max="100">100%</progress>`,i.storyName=`Full`,a=()=>`<progress class="progress-bar progress-bar--fluid" value="50" max="100">50%</progress>`,a.storyName=`Fluid`,o=()=>`
<progress class="progress-bar progress-bar--fluid" value="0" max="100" id="progress-bar-dynamic">0%</progress>
<div>
    <button class="button button--secondary progress-bar-toggle" type="button" data-progress-play-button-for="progress-bar-dynamic">Play/Pause</button>
    <button class="button button--secondary progress-bar-reset" type="button" data-progress-reset-button-for="progress-bar-dynamic">Reset</button>
</div>
`,o.storyName=`Animated`,s=[`empty`,`half`,`full`,`fluid`,`animated`]})))()}c();export{s as __namedExportsOrder,o as animated,t as default,n as empty,a as fluid,i as full,r as half};