import {EFFECTS, EFFECT_OPTIONS} from './data.js';

const DEFAULT_EFFECT = EFFECTS[0];

const imagePreview = document.querySelector('.img-upload__preview');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectsInputs = document.querySelectorAll('.effects__radio');
const effectLevel = document.querySelector('.img-upload__effect-level');

let chosenEffect = DEFAULT_EFFECT;

const updateSlider = () => {
  imagePreview.classList.value = 'img-upload__preview';
  imagePreview.classList.add(`effects_preview--${chosenEffect}`);
  imagePreview.style.filter = DEFAULT_EFFECT;
  if (chosenEffect === DEFAULT_EFFECT) {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions(EFFECT_OPTIONS[chosenEffect].noui);
    imagePreview.style.filter = EFFECT_OPTIONS[chosenEffect]['filter'](sliderElement.noUiSlider.get());
  }
};

export const resetEffect = () => {
  chosenEffect = DEFAULT_EFFECT;
  updateSlider();
};

const onFormChange = (evt) => {
  chosenEffect = evt.target.value;
  updateSlider();
};

export const renderSlider = () => {
  effectLevel.classList.add('hidden');
  noUiSlider.create(
    sliderElement, {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
      connect: 'lower',
    }
  );
  updateSlider();
  effectsInputs.forEach((input) =>{
    input.addEventListener('change', onFormChange);
  });
  sliderElement.noUiSlider.on('update', () => {
    effectLevelValue.value = sliderElement.noUiSlider.get();
    if (chosenEffect !== DEFAULT_EFFECT) {
      imagePreview.style.filter = EFFECT_OPTIONS[chosenEffect]['filter'](sliderElement.noUiSlider.get());
    }
  });
};
