import{a as g,S as u,i as c}from"./assets/vendor-jqdos1hf.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49632917-f700970c30bc9937fd82e83ee",h="https://pixabay.com/api/";function L(i){const r=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return g.get(h,{params:r}).then(o=>o.data)}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),S=new u(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:n,comments:d,downloads:p})=>`
      <li class="gallery-item">
        <a href="${s}">
          <img src="${o}" alt="${e}" />
        </a>
        <div class="info">
          <p>Likes: ${t}</p>
          <p>Views: ${n}</p>
          <p>Comments: ${d}</p>
          <p>Downloads: ${p}</p>
        </div>
      </li>
    `).join("");f.insertAdjacentHTML("beforeend",r),S.refresh()}function v(){f.innerHTML=""}function w(){m.classList.add("visible")}function l(){m.classList.remove("visible")}const a=document.querySelector(".form");document.querySelector(".gallery");document.querySelector(".loader");new u(".gallery a",{captionsData:"alt",captionDelay:250});a.addEventListener("submit",i=>{i.preventDefault();const r=a.elements.text.value.trim();if(!r){c.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,backgroundColor:"tomato",messageSize:20,titleColor:"#fff",messageColor:"#fff",icon:"icon-warning"}),a.reset();return}v(),w(),L(r).then(o=>{if(l(),o.hits.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,backgroundColor:"tomato",messageSize:20,titleColor:"#fff",messageColor:"#fff",icon:"icon-warning"}),a.reset();return}b(o.hits),a.reset()}).catch(o=>{l(),console.error(o),a.reset()})});
//# sourceMappingURL=index.js.map
