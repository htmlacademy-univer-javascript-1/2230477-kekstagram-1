import {isKeyEsc} from './util.js';
import {pristine} from './validator.js';

const uploadImageButton = document.querySelector('#upload-file');
const imageOverlay = document.querySelector('.img-upload__overlay');

const imageUploadForm = document.querySelector('.img-upload__form');
const textHashtags = imageUploadForm.querySelector('.text__hashtags');
const textDescription = imageUploadForm.querySelector('.text__description');
const cancelButton = imageUploadForm.querySelectorAll('.img-upload__cancel');

const closeOverlay = () => {
  imageOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onEscKeydown = (evt) => {
  if (isKeyEsc(evt.key) && evt.target !== textHashtags && evt.target !== textDescription){
    evt.preventDefault();
    closeOverlay();
  }
};

const uploadFile = () => {
  uploadImageButton.addEventListener('change', (evt) => {
    evt.preventDefault();
    imageOverlay.classList.remove('hidden');
    document.body.classList.remove('modal-open');
    document.addEventListener('keydown',onEscKeydown,{once:true});
    cancelButton.addEventListener('click',closeOverlay, {once:true});
  });
};

export const renderFileUpload = () => {
  imageUploadForm.addEventListener('submit', (evt) => {
    if (!pristine.validate()){
      evt.preventDefault();
    }
  });
  uploadFile();
};
