import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');
const loadMore = document.querySelector('.load-more');

loadMore.addEventListener('click', onLoadMore);
form.addEventListener('submit', handleSubmit);

let page = 1;
const limit = 15;

function handleSubmit(event) {
  event.preventDefault();

  hideLoadMoreButton();
  clearGallery();
  showLoader();

  const inputEl = input.value.toLowerCase().trim();
  page = 1;

  getImagesByQuery(inputEl, page)
    .then(response => {
      const totalPages = Math.ceil(response.totalHits / limit);

      createGallery(response.hits);

      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
        });

        hideLoader();
        hideLoadMoreButton();

        return;
      }

      if (page < totalPages) {
        showLoadMoreButton();
      } else {
        hideLoadMoreButton();

        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    })
    .catch(error => {
      iziToast.error({
        message: 'Sorry, something went wrong.',
        position: 'center',
      });
    })
    .finally(() => hideLoader());
}

async function onLoadMore() {
  loadMore.disabled = true;
  page += 1;

  try {
    hideLoadMoreButton();
    showLoader();

    const data = await getImagesByQuery(input.value.trim(), page);

    const totalPages1 = Math.ceil(data.totalHits / limit);

    createGallery(data.hits);

    loadMore.disabled = false;

    const item = document.querySelector('.gallery-item');
    const itemHeight = item.getBoundingClientRect().height;

    window.scrollBy({
      left: 0,
      top: itemHeight * 2,
      behavior: 'smooth',
    });

    if (page >= totalPages1) {
      hideLoadMoreButton();

      iziToast.info({
        position: 'topRight',
        message: "We're sorry, but you've reached the end of search results.",
      });
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Sorry, something went wrong.',
      position: 'center',
    });
  } finally {
    hideLoader();
  }
}
