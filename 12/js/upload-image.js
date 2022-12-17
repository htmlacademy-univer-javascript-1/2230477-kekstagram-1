import {isKeyEsc} from './util.js';
import {pristine} from './validator.js';
import {renderScale, resetScale} from './image-scale.js';
import {resetEffect, renderSlider} from './image-effects.js';

const uploadImageButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');

const imageUploadForm = document.querySelector('.img-upload__form');
const textHashtags = imageUploadForm.querySelector('.text__hashtags');
const textDescription = imageUploadForm.querySelector('.text__description');
const cancelButton = imageUploadForm.querySelector('.img-upload__cancel');

const onEscKeydown = (evt) => {
  if (isKeyEsc(evt.key) && evt.target !== textHashtags && evt.target !== textDescription){
    evt.preventDefault();
    closeOverlay();
  }
};

function closeOverlay() {
  resetScale();
  resetEffect();
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
  cancelButton.removeEventListener('click', closeOverlay);
}

const uploadFile = () => {
  renderScale();
  renderSlider();
  uploadImageButton.addEventListener('change', (evt) => {
    evt.preventDefault();
    imageOverlay.classList.remove('hidden');
    document.body.classList.remove('modal-open');
    cancelButton.addEventListener('click', closeOverlay);
    document.addEventListener('keydown', onEscKeydown);
  });
};

export const renderFileUpload = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    if (!pristine.validate()){
      evt.preventDefault();
    }
  });
  resetScale();
  resetEffect();
  uploadFile();
};
