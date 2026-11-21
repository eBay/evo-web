import{t as e}from"./rolldown-runtime-Dh6celcD.js";var t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{t=new Map,n=(e=`en-US`)=>{if(t.has(e))return t.get(e);let n=t=>new Intl.DateTimeFormat(e,t).format,r=n({month:`long`}),i=n({month:`short`}),a=n({weekday:`short`}),o=new Intl.Locale(e),s=((o.getWeekInfo?.()??o.weekInfo)?.firstDay??7)%7,c={weekStart:s,months:Array.from({length:12},(e,t)=>r(new Date(2026,t,1))),shortMonths:Array.from({length:12},(e,t)=>i(new Date(2026,t,1))),weekdays:Array.from({length:7},(e,t)=>a(new Date(2026,1,1+(s+t)%7))),monthYear:n({month:`long`,year:`numeric`}),spoken:n({dateStyle:`long`}),readable:n({dateStyle:`medium`})};return t.set(e,c),c},r=e=>`
    <svg class="icon icon--16" aria-hidden="true" width="16" height="16">
        <use href="#icon-${e}-16"></use>
    </svg>`,i=(e,t=2)=>String(e).padStart(t,`0`),a=(e,t,n)=>`${i(e,4)}-${i(t+1)}-${i(n)}`,o=e=>{let[t,n,r]=e.split(`-`).map(Number);return{year:t,month:n-1,day:r}},s=e=>{let{year:t,month:n,day:r}=o(e);return new Date(t,n,r)},c=(e,t)=>n(t).readable(s(e)),l=(e,{start:t,end:r,preview:i,today:a,focus:c,disabled:l,locale:u})=>{let d=[],f=r||i,p=n(u).spoken(s(e));if(t&&f){let[n,r]=t<f?[t,f]:[f,t];e>=n&&e<=r&&(d.push(`calendar__range`),e===n&&d.push(`calendar__range--start`),e===r&&d.push(`calendar__range--end`))}let m=e===t||e===r;m&&(d.push(`calendar__cell--selected`),r&&(p+=e===t?` - start of range`:` - end of range`));let h=[`type="button"`,`data-date="${e}"`,`tabindex="${e===c?0:-1}"`,`aria-label="${p}"`];return e===a&&h.push(`aria-current="date"`),m&&h.push(`aria-pressed="true"`),l?.(e)&&h.push(`disabled`),`<td${d.length?` class="${d.join(` `)}"`:``}><button ${h.join(` `)}>${o(e).day}</button></td>`},u=({year:e,month:t},r)=>{let i=n(r.locale),o=(new Date(e,t,1).getDay()-i.weekStart+7)%7,s=new Date(e,t+1,0).getDate(),c=Array.from({length:o},()=>`<td></td>`);for(let n=1;n<=s;n++)c.push(l(a(e,t,n),r));let u=[];for(let e=0;e<c.length;e+=7)u.push(`<tr>${c.slice(e,e+7).join(``)}</tr>`);return`
            <table>
                <caption class="clipped">${i.monthYear(new Date(e,t,1))}</caption>
                <thead>
                    <tr>${i.weekdays.map(e=>`<th scope="col">${e}</th>`).join(``)}</tr>
                </thead>
                <tbody>
                    ${u.join(`
                    `)}
                </tbody>
            </table>`},d=({year:e,month:t},r,i)=>{let a=n(i).months[t];return`
                <span class="calendar__pickers">
                    <button class="button button--tertiary button--small calendar__picker" type="button" data-action="month-view" data-panel="${r}" aria-label="Choose month, ${a}">${a}</button>
                    <button class="button button--tertiary button--small calendar__picker" type="button" data-action="year-view" data-panel="${r}" aria-label="Choose year, ${e}">${e}</button>
                </span>`},f=`
                    <button class="icon-button icon-button--small" type="button" data-action="prev" aria-label="Previous month">${r(`chevron-left`)}</button>`,p=`
                    <button class="icon-button icon-button--small" type="button" data-action="next" aria-label="Next month">${r(`chevron-right`)}</button>`,m=`
    <div class="calendar__footer">
        <button class="button button--borderless button--small" type="button" data-action="today">
            <span class="button__cell">${r(`calendar`)}<span class="button__text">Today</span></span>
        </button>
        <span class="calendar__actions">
            <button class="button button--tertiary button--small" type="button" data-action="cancel">Cancel</button>
            <button class="button button--primary button--small" type="button" data-action="apply">Apply</button>
        </span>
    </div>`,h=({panels:e,...t})=>`
<div class="calendar calendar--v2">
    <div class="calendar__content">
        <div class="calendar__body">
            ${e.map((n,r)=>`
            <div class="calendar__month">
                <div class="calendar__header">${r===0?f:``}${d(n,r,t.locale)}${r===e.length-1?p:``}
                </div>${u(n,t)}
            </div>`).join(``)}
        </div>
    </div>${m}
</div>`,g=e=>`
        <div class="calendar__header">
            <button class="icon-button icon-button--small" type="button" data-action="back" aria-label="Back to day view">${r(`arrow-left`)}</button>
            <h3 class="calendar__title" id="calendar-v2-${e.toLowerCase()}">${e}</h3>
        </div>`,_=(e,t,{selected:n,current:r,focus:i})=>`<li><button class="calendar__option" type="button" role="option" data-value="${t}" tabindex="${i?0:-1}" aria-selected="${n}"${r?` aria-current="date"`:``}>${e}</button></li>`,v=({selected:e,current:t,focus:r=e,locale:i})=>`
<div class="calendar calendar--v2">
    <div class="calendar__content">${g(`Month`)}
        <ul class="calendar__options" role="listbox" aria-labelledby="calendar-v2-month">
            ${n(i).shortMonths.map((n,i)=>_(n,i,{selected:i===e,current:i===t&&i!==e,focus:i===r})).join(`
            `)}
        </ul>
    </div>
</div>`,y=({years:e,selected:t,current:n,focus:r=t})=>`
<div class="calendar calendar--v2">
    <div class="calendar__content">${g(`Year`)}
        <ul class="calendar__options calendar__options--scroll" role="listbox" aria-labelledby="calendar-v2-year">
            ${e.map(e=>_(e,e,{selected:e===t,current:e===n&&e!==t,focus:e===r})).join(`
            `)}
        </ul>
    </div>
</div>`})))()}function x({mode:e=`single`,layout:t=`single`,initialView:r=`day`,locale:i=`en-US`,value:s={},onApply:l,onCancel:u}){let d=document.createElement(`div`),f=document.createElement(`div`),p=document.createElement(`div`);p.className=`clipped`,p.setAttribute(`aria-live`,`polite`),d.append(f,p);let m=w(),g=o(m),_=Array.from({length:151},(e,t)=>g.year-100+t),b=t===`double`?2:1,x={view:r,start:s.start||null,end:e===`range`&&s.end||null,hover:null,focus:s.start||m,panel:0,optionFocus:null};x.anchor=D(o(x.focus),0);let S=()=>Array.from({length:b},(e,t)=>D(x.anchor,t)),C=()=>e===`range`&&x.start&&!x.end,T=()=>getComputedStyle(d).direction===`rtl`,j=e=>{p.textContent=e},M=()=>{let e=o(x.focus),t=O(x.anchor),n=O(e);n<t&&(x.anchor=D(e,0)),n>t+b-1&&(x.anchor=D(e,-(b-1)))},N=()=>{let e=document.activeElement;if(!f.contains(e))return null;if(e.dataset.date)return`[data-date][tabindex="0"]`;if(e.dataset.value!==void 0)return`.calendar__option[tabindex="0"]`;if(e.dataset.action){let t=e.dataset.panel;return`[data-action="${e.dataset.action}"]${t?`[data-panel="${t}"]`:``}`}return null};function P({focusCell:e=!1}={}){let t=e?`[data-date][tabindex="0"], .calendar__option[tabindex="0"]`:N(),n=D(x.anchor,x.panel);x.view===`month`?f.innerHTML=v({selected:n.month,current:n.year===g.year?g.month:null,focus:x.optionFocus,locale:i}):x.view===`year`?f.innerHTML=y({years:_,selected:n.year,current:g.year,focus:x.optionFocus}):f.innerHTML=h({panels:S(),start:x.start,end:x.end,preview:C()?x.hover:null,today:m,focus:x.focus,locale:i}),t&&f.querySelector(t)?.focus()}let F=()=>{let e=f.querySelector(`.calendar__options--scroll`),t=e?.querySelector(`[aria-selected="true"]`);t&&(e.scrollTop+=t.parentElement.getBoundingClientRect().top-e.getBoundingClientRect().top)};function I(t){x.focus=t,x.hover=null,e===`single`?(x.start=t,j(`Selected ${c(t,i)}`)):!x.start||x.end?(x.start=t,x.end=null,j(`Start date ${c(t,i)}. Choose an end date.`)):([x.start,x.end]=t<x.start?[t,x.start]:[x.start,t],j(`Selected ${c(x.start,i)} to ${c(x.end,i)}`)),P()}function L(e){let t=D(x.anchor,x.panel),n=x.view===`month`?{year:t.year,month:e}:{year:e,month:t.month},r=new Date(n.year,n.month+1,0).getDate();x.anchor=D(n,-x.panel),x.focus=a(n.year,n.month,Math.min(o(x.focus).day,r)),x.view=`day`,P({focusCell:!0})}let R={prev(){x.anchor=D(x.anchor,-1),x.focus=E(x.focus,-1),M(),P()},next(){x.anchor=D(x.anchor,1),x.focus=E(x.focus,1),M(),P()},"month-view"(e){x.panel=Number(e.dataset.panel),x.view=`month`,x.optionFocus=D(x.anchor,x.panel).month,P({focusCell:!0})},"year-view"(e){x.panel=Number(e.dataset.panel),x.view=`year`,x.optionFocus=D(x.anchor,x.panel).year,P({focusCell:!0}),F()},back(){x.view=`day`,P({focusCell:!0})},today(){x.anchor=D(g,0),x.focus=m,P()},cancel(){u?.()},apply(){e===`single`?l?.(x.start?{start:x.start}:null):l?.(x.start&&x.end?{start:x.start,end:x.end}:null)}};return f.addEventListener(`click`,e=>{let t=e.target.closest(`[data-date], [data-action], .calendar__option`);t&&!t.disabled&&(t.dataset.date?I(t.dataset.date):t.dataset.value===void 0?R[t.dataset.action]?.(t):L(Number(t.dataset.value)))}),f.addEventListener(`mouseover`,e=>{let t=e.target.closest(`[data-date]`)?.dataset.date;C()&&t&&t!==x.hover&&(x.hover=t,P())}),f.addEventListener(`mouseleave`,()=>{x.hover&&(x.hover=null,P())}),f.addEventListener(`keydown`,e=>{if(e.key===`Escape`){e.preventDefault(),u?.();return}let t=e.target.dataset.date;if(t&&k[e.key]){e.preventDefault(),x.focus=k[e.key](t,T(),e.shiftKey,n(i).weekStart),C()&&(x.hover=x.focus),M(),P({focusCell:!0});return}if(e.target.dataset.value!==void 0&&A[e.key]){e.preventDefault();let t=A[e.key](T()),n=x.view===`month`?Array.from({length:12},(e,t)=>t):_,r=n.indexOf(Number(e.target.dataset.value));x.optionFocus=n[Math.max(0,Math.min(n.length-1,r+t))],P({focusCell:!0})}}),P(),r===`year`&&requestAnimationFrame(F),{el:d,focus:()=>f.querySelector(`[data-date][tabindex="0"]`)?.focus(),setSelection({start:t=null,end:n=null}){x.start=t,x.end=e===`range`?n:null,x.hover=null,x.start&&(x.focus=x.start,x.anchor=D(o(x.start),0),x.view=`day`),P()}}}var S,C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{b(),S=e=>{let{year:t,month:n,day:r}=o(e);return new Date(t,n,r)},C=e=>a(e.getFullYear(),e.getMonth(),e.getDate()),w=()=>C(new Date),T=(e,t)=>{let n=S(e);return n.setDate(n.getDate()+t),C(n)},E=(e,t)=>{let{year:n,month:r,day:i}=o(e),a=new Date(n,r+t+1,0).getDate();return C(new Date(n,r+t,Math.min(i,a)))},D=({year:e,month:t},n)=>{let r=new Date(e,t+n,1);return{year:r.getFullYear(),month:r.getMonth()}},O=({year:e,month:t})=>e*12+t,k={ArrowLeft:(e,t)=>T(e,t?1:-1),ArrowRight:(e,t)=>T(e,t?-1:1),ArrowUp:e=>T(e,-7),ArrowDown:e=>T(e,7),Home:(e,t,n,r)=>T(e,-((S(e).getDay()-r+7)%7)),End:(e,t,n,r)=>T(e,6-(S(e).getDay()-r+7)%7),PageUp:(e,t,n)=>E(e,n?-12:-1),PageDown:(e,t,n)=>E(e,n?12:1)},A={ArrowLeft:e=>e?1:-1,ArrowRight:e=>e?-1:1,ArrowUp:()=>-3,ArrowDown:()=>3}})))()}export{y as a,b as c,v as i,a as l,j as n,o,h as r,r as s,x as t};