import{a as f,S as d,i as c}from"./assets/vendor-CsQrAiRy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g="49632917-f700970c30bc9937fd82e83ee";function y(i){const s=new URLSearchParams({key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return f(`https://pixabay.com/api/?${s}`)}const u=document.querySelector(".gallery");function h(i){u.innerHTML=i.map(({webformatURL:s,largeImageURL:r,tags:o,likes:e,views:t,comments:a,downloads:p})=>`<li class="gallery-item">
  <a class="item-link" href="${r}">
    <img class="img" src="${s}" alt="${o}" />
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-text">Likes</p>
        <p class="statistic-value">${e}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Views</p>
        <p class="statistic-value">${t}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Comments</p>
        <p class="statistic-value">${a}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-text">Downloads</p>
        <p class="statistic-value">${p}</p>
      </li>
    </ul></a
  >
</li>`).join(""),new d(".gallery li a",{captionsData:"alt",captionDelay:250}).refresh()}function n(){u.innerHTML=""}const m=document.querySelector(".form");document.querySelector(".form-input");document.querySelector("#images-list");document.querySelector(".btn-submit");let l;m.addEventListener("submit",S);function S(i){i.preventDefault();const s=i.target.elements.text.value.trim();if(!s){c.error({icon:"null",messageSize:20,message:"Please enter your query!",messageColor:"red",position:"topRight"}),n();return}y(s).then(r=>{if(l=r.data.hits,!l.length){c.error({icon:"null",messageSize:20,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"red",position:"topRight"}),n();return}h(l)}).catch(r=>console.log(r.message)),m.reset()}
//# sourceMappingURL=index.js.map
