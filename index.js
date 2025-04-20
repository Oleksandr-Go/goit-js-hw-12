import{a as S,S as q,i as l}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const M="49723808-114337464bd6e566bb6cace9e";async function p(r,o=1){const{data:s}=await S("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return s}const m=document.querySelector(".load-more"),y=document.querySelector(".gallery"),f=document.querySelector(".loader"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function g(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:n,comments:x,downloads:w})=>`<div class='gallery-container'>
        <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${s}"
      alt="${e}"
    />
  </a>
  <div class='gallery-min-div'> 
      <div class='div-text'>
          <p class="gallery-text">Likes<span class='text-span'>${t}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Views<span class='text-span'>${n}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Comments<span class='text-span'>${x}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Downloads<span class='text-span'>${w}</span></p>
      </div>
    </div>
  </li>
</div>
`).join("");y.insertAdjacentHTML("beforeend",o),P.refresh()}function $(){y.innerHTML=""}function h(){f.classList.add("is-visible")}function d(){f.classList.remove("is-visible")}function v(){m.classList.replace("load-hidden","load-more")}function c(){m.classList.replace("load-more","load-hidden")}const O=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]'),u=document.querySelector(".load-more");u.addEventListener("click",E);O.addEventListener("submit",B);let i=1;const b=15;function B(r){r.preventDefault(),c(),$(),h();const o=L.value.toLowerCase().trim();i=1,p(o,i).then(s=>{const a=Math.ceil(s.totalHits/b);if(g(s.hits),s.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),d(),c();return}i<a?v():(c(),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}).catch(s=>{l.error({message:"Sorry, something went wrong.",position:"center"})}).finally(()=>d())}async function E(){u.disabled=!0,i+=1;try{c(),h();const r=await p(L.value.trim(),i),o=Math.ceil(r.totalHits/b);g(r.hits),u.disabled=!1;const a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),i>=o?(c(),l.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):v()}catch{l.error({message:"Sorry, something went wrong.",position:"center"})}finally{d()}}
//# sourceMappingURL=index.js.map
