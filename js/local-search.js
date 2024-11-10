document.addEventListener("DOMContentLoaded",(()=>{let e,t=!1,n=!0,r=CONFIG.path;0===r.length?r="search.xml":r.endsWith("json")&&(n=!1);const o=document.querySelector(".search-input"),l=document.getElementById("search-result"),s=(e,t,n)=>{if(CONFIG.localsearch.unescape){let t=document.createElement("div");t.innerText=e,e=t.innerHTML}let r=e.length;if(0===r)return[];let o=0,l=[],s=[];for(n||(t=t.toLowerCase(),e=e.toLowerCase());(l=t.indexOf(e,o))>-1;)s.push({position:l,word:e}),o=l+r;return s},i=(e,t,n,r)=>{let o=n[n.length-1],{position:l,word:s}=o,i=[],a=0;for(;l+s.length<=t&&0!==n.length;){s===r&&a++,i.push({position:l,length:s.length});let e=l+s.length;for(n.pop();0!==n.length&&(o=n[n.length-1],l=o.position,s=o.word,e>l);)n.pop()}return{hits:i,start:e,end:t,searchTextCount:a}},a=(e,t)=>{let n="",r=t.start;return t.hits.forEach((t=>{n+=e.substring(r,t.position);let o=t.position+t.length;n+=`<b class="search-keyword">${e.substring(t.position,o)}</b>`,r=o})),n+=e.substring(r,t.end),n},c=()=>{if(!t)return;let n=o.value.trim().toLowerCase(),r=n.split(/[-\s]+/);r.length>1&&r.push(n);let c=[];n.length>0&&e.forEach((({title:e,content:t,url:o})=>{let l=e.toLowerCase(),h=t.toLowerCase(),u=[],d=[],p=0;if(r.forEach((e=>{u=u.concat(s(e,l,!1)),d=d.concat(s(e,h,!1))})),u.length>0||d.length>0){let r=u.length+d.length;[u,d].forEach((e=>{e.sort(((e,t)=>t.position!==e.position?t.position-e.position:e.word.length-t.word.length))}));let l=[];if(0!==u.length){let t=i(0,e.length,u,n);p+=t.searchTextCountInSlice,l.push(t)}let s=[];for(;0!==d.length;){let e=d[d.length-1],{position:r,word:o}=e,l=r-20,a=r+80;l<0&&(l=0),a<r+o.length&&(a=r+o.length),a>t.length&&(a=t.length);let c=i(l,a,d,n);p+=c.searchTextCountInSlice,s.push(c)}s.sort(((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hits.length!==t.hits.length?t.hits.length-e.hits.length:e.start-t.start));let h=parseInt(CONFIG.localsearch.top_n_per_article,10);h>=0&&(s=s.slice(0,h));let g="";0!==l.length?g+=`<li><a href="${o}" class="search-result-title">${a(e,l[0])}</a>`:g+=`<li><a href="${o}" class="search-result-title">${e}</a>`,s.forEach((e=>{g+=`<a href="${o}"><p class="search-result">${a(t,e)}...</p></a>`})),g+="</li>",c.push({item:g,id:c.length,hitCount:r,searchTextCount:p})}})),1===r.length&&""===r[0]?l.innerHTML='<div id="no-result"><i class="fa fa-search fa-5x"></i></div>':0===c.length?l.innerHTML='<div id="no-result"><i class="far fa-frown fa-5x"></i></div>':(c.sort(((e,t)=>e.searchTextCount!==t.searchTextCount?t.searchTextCount-e.searchTextCount:e.hitCount!==t.hitCount?t.hitCount-e.hitCount:t.id-e.id)),l.innerHTML=`<ul class="search-result-list">${c.map((e=>e.item)).join("")}</ul>`,window.pjax&&window.pjax.refresh(l))},h=()=>{fetch(CONFIG.root+r).then((e=>e.text())).then((r=>{t=!0,e=n?[...(new DOMParser).parseFromString(r,"text/xml").querySelectorAll("entry")].map((e=>({title:e.querySelector("title").textContent,content:e.querySelector("content").textContent,url:e.querySelector("url").textContent}))):JSON.parse(r),e=e.filter((e=>e.title)).map((e=>(e.title=e.title.trim(),e.content=e.content?e.content.trim().replace(/<[^>]+>/g,""):"",e.url=decodeURIComponent(e.url).replace(/\/{2,}/g,"/"),e))),document.getElementById("no-result").innerHTML='<i class="fa fa-search fa-5x"></i>',c()}))};CONFIG.localsearch.preload&&h(),"auto"===CONFIG.localsearch.trigger?o.addEventListener("input",c):(document.querySelector(".search-icon").addEventListener("click",c),o.addEventListener("keypress",(e=>{"Enter"===e.key&&c()}))),document.querySelectorAll(".popup-trigger").forEach((e=>{e.addEventListener("click",(()=>{document.body.style.overflow="hidden",document.querySelector(".search-pop-overlay").classList.add("search-active"),o.focus(),t||h()}))}));const u=()=>{document.body.style.overflow="",document.querySelector(".search-pop-overlay").classList.remove("search-active")};document.querySelector(".search-pop-overlay").addEventListener("click",(e=>{e.target===document.querySelector(".search-pop-overlay")&&u()})),document.querySelector(".popup-btn-close").addEventListener("click",u),window.addEventListener("pjax:success",u),window.addEventListener("keyup",(e=>{"Escape"===e.key&&u()}))}));
//rebuild by neat 、terser