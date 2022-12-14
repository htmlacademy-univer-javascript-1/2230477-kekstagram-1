import {openImageModal} from './renderBigImage.js';

const imageTemplate = document.querySelector('#picture').content.querySelector('.picture');
const imageList = document.createDocumentFragment();
let myImages;

const onImageModalClick = (evt) => {
  const imageElement = evt.target.closest('.picture');
  if (imageElement) {
    const clickedImage = myImages.find(({id}) => Number(imageElement.dataset.id) === id);
    openImageModal(clickedImage);
  }
};

export const generateImage = (images) => {
  myImages = images;
  for (let i = 0; i < images.length - 1; i++) {
    const imageElement = imageTemplate.cloneNode(true);
    imageElement.querySelector('.picture__img').src = images[i].url;
    imageElement.querySelector('.picture__likes').textContent = images[i].likes;
    imageElement.querySelector('.picture__comments').textContent = images[i].comments.length;
    imageElement.dataset.id = images[i].id;
    imageList.appendChild(imageElement);
  }
  document.querySelector('.pictures').appendChild(imageList);
  document.querySelector('.pictures').addEventListener('click',onImageModalClick);
};

