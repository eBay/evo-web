var i=Object.defineProperty;var r=(e,t)=>i(e,"name",{value:t,configurable:!0});function c(e,t){let o;return(...u)=>{clearTimeout(o),o=setTimeout(()=>e(...u),t)}}r(c,"debounce");export{c as d};
