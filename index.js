import{a as S,S as q,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const M="49723808-114337464bd6e566bb6cace9e";async function m(r,o=1){const{data:s}=await S("https://pixabay.com/api/",{params:{key:M,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return s}const y=document.querySelector(".load-more"),f=document.querySelector(".gallery"),g=document.querySelector(".loader"),P=new q(".gallery a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function h(r){const o=r.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:x,downloads:w})=>`<div class='gallery-container'>
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
         <p class="gallery-text">Views<span class='text-span'>${i}</span></p>
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
`).join("");f.insertAdjacentHTML("beforeend",o),P.refresh()}function $(){f.innerHTML=""}function v(){g.classList.add("is-visible")}function d(){g.classList.remove("is-visible")}function u(){y.classList.replace("load-hidden","load-more")}function l(){y.classList.replace("load-more","load-hidden")}const O=document.querySelector(".form"),L=document.querySelector('input[name="search-text"]'),p=document.querySelector(".load-more");p.addEventListener("click",E);O.addEventListener("submit",B);let c=1;const b=15;function B(r){r.preventDefault(),l(),$(),v();const o=L.value.toLowerCase().trim();m(o,c).then(s=>{u(),h(s.hits);const a=Math.ceil(s.totalHits/b);if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),d(),l();return}c<a?u():(l(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}).catch(s=>{n.error({message:"Sorry, something went wrong.",position:"center"})}).finally(()=>d())}async function E(){p.disabled=!0,c+=1;try{l(),v();const r=await m(L.value.trim(),c);h(r.hits),p.disabled=!1;const o=Math.ceil(r.totalHits/b),a=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),c>=o?(l(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):u()}catch{n.error({message:"Sorry, something went wrong.",position:"center"})}finally{d()}}
//# sourceMappingURL=index.js.map
