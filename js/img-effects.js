import {CONFIGS} from './slider-configs.js';

const SCALE_VALUE = 100;

const slider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevelInput = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

let prevEffect = null;
let isConfigUpdate = false;

window.addEventListener('load', () => {
  const currentEffect = document.querySelector('input[name="effect"]:checked').value;
  if (currentEffect === 'none') {
    sliderContainer.classList.add('hidden');
  }
});

slider.noUiSlider.on('update', () => {
  if (isConfigUpdate) {
    return;
  }
  const currentEffect = document.querySelector('input[name="effect"]:checked').value;
  const setFilterConfig = () => {
    if (currentEffect !== prevEffect) {
      prevEffect = currentEffect;
      isConfigUpdate = true;
      slider.noUiSlider.updateOptions(CONFIGS[currentEffect].options);
    }
  };
  setFilterConfig();

  effectLevelInput.value = slider.noUiSlider.get();
  imgPreview.style.filter = CONFIGS[currentEffect].getFilterValue(effectLevelInput.value);

  isConfigUpdate = false;
});

const addEffectsListener = () => {
  effectsList.addEventListener('change', (evt) => {
    if (evt.target.value === 'none') {
      sliderContainer.classList.add('hidden');
    } else {
      sliderContainer.classList.remove('hidden');
    }
    slider.noUiSlider.set(SCALE_VALUE);
  });
};

export {addEffectsListener};
