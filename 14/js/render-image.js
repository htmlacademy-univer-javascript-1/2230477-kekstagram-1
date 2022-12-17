import {openImageModal} from './render-big-image.js';
import {debounce} from './util.js';

const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageList = document.createDocumentFragment();
const filterButtons = document.querySelectorAll('.img-filters__button');
const imgFilters = document.querySelector('.img-filters');
let myImages;

const onImageModalClick = (evt) => {
  const imageElement = evt.target.closest('.picture');
  if (imageElement) {
    const clickedImage = myImages.find(({id}) => Number(imageElement.dataset.id) === id);
    openImageModal(clickedImage);
  }
};

export const generateImage = (image) => {
  const { id, url, likes, comments } = image;
  const imageElement = imageTemplate.cloneNode(true);
  imageElement.querySelector('.picture__img').src = url;
  imageElement.querySelector('.picture__likes').textContent = likes;
  imageElement.querySelector('.picture__comments').textContent = comments.length;
  imageElement.dataset.id = id;
  imageList.appendChild(imageElement);
};

const getRandomUniquePhotos = (image, n) => {
  const result = new Array(n);
  let len = image.length;
  const taken = new Array(len);
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = image[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

export const renderImages = (images, option) =>{
  document.querySelectorAll('.picture').forEach((image) => image.remove() );
  if (option === 'filter-default') {
    images.forEach(generateImage);
  } else if (option === 'filter-random') {
    getRandomUniquePhotos(images, 10).forEach(generateImage);
  } else {
    const photosSorted =  Array.from(images);
    photosSorted.sort((a, b) =>  b.comments.length - a.comments.length);
    photosSorted.forEach(generateImage);
  }
  myImages = images;
  document.querySelector('.pictures').appendChild(imageList);
  document.querySelector('.pictures').addEventListener('click', onImageModalClick);
};

const debounceRenderedPhotos = debounce(renderImages, 500);

export const createEventListenersFilter = () => {
  imgFilters.classList.remove('img-filters--inactive');
  filterButtons.forEach((filterButton) => {
    filterButton.addEventListener('click', () => {
      filterButtons.forEach((button) =>
        button.classList.remove('img-filters__button--active'));
      filterButton.classList.add('img-filters__button--active');
      debounceRenderedPhotos(myImages, filterButton.id);
    });
  });
};
