import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
};

const loadMore = document.querySelector('.load-more');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});

function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class='gallery-container'>
        <li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class='gallery-min-div'> 
      <div class='div-text'>
          <p class="gallery-text">Likes<span class='text-span'>${likes}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Views<span class='text-span'>${views}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Comments<span class='text-span'>${comments}</span></p>
      </div>
      <div class='div-text'>
         <p class="gallery-text">Downloads<span class='text-span'>${downloads}</span></p>
      </div>
    </div>
  </li>
</div>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);

  simpleLightbox.refresh();
}

function clearGallery() {
  gallery.innerHTML = '';
}

function showLoader() {
  loader.classList.add('is-visible');
}

function hideLoader() {
  loader.classList.remove('is-visible');
}

function showLoadMoreButton() {
  loadMore.classList.replace('load-hidden', 'load-more');
}

function hideLoadMoreButton() {
  loadMore.classList.replace('load-more', 'load-hidden');
}
