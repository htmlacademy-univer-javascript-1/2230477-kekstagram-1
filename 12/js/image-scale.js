const DEFAULT_VALUE = 50;
const MIN_VALUE = 25;
const MAX_VALUE = 100;
const STEP_VALUE = 25;

const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview');

export const resetScale = () => {
  imagePreview.style.transform = `scale(${DEFAULT_VALUE / 100})`;
  scaleControlValue.value = `${DEFAULT_VALUE}%`;
};

export const renderScale = () => {
  scaleControlSmaller.addEventListener('click', () => {
    let value;
    if (scaleControlValue.value.length > 3) {
      value = Number(scaleControlValue.value.substring(0, 3));
    } else {
      value = Number(scaleControlValue.value.substring(0, 2));
    }
    if (value !== MIN_VALUE) {
      value -= STEP_VALUE;
      if (value < MIN_VALUE) {
        value = MIN_VALUE;
      }
    }
    imagePreview.style.transform = `scale(${value / 100})`;
    scaleControlValue.value = `${value}%`;
  });

  scaleControlBigger.addEventListener('click', () => {
    let value;
    if (scaleControlValue.value.length > 3) {
      value = Number(scaleControlValue.value.substring(0, 3));
    } else {
      value = Number(scaleControlValue.value.substring(0, 2));
    }
    if (value !== MAX_VALUE) {
      value += STEP_VALUE;
      if (value > MAX_VALUE) {
        value = MAX_VALUE;
      }
    }
    imagePreview.style.transform = `scale(${value / 100})`;
    scaleControlValue.value = `${value}%`;
  });
};

