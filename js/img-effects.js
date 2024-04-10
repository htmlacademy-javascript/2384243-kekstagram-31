import {CONFIGS} from './slider-configs.js';

const SCALE_VALUE = 100;

const slider = document.querySelector('.effect-level__slider');
const effectsList = document.querySelector('.effects__list');
const effectLevelInput = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview img');
const sliderContainer = document.querySelector('.img-upload__effect-level');

let prevEffect = null;
let isConfigUpdate = false;

slider.noUiSlider.on('update', () => {
  effectLevelInput.value = slider.noUiSlider.get();

  const currentEffect = document.querySelector('input[name="effect"]:checked').value;
  if (isConfigUpdate) {
    return;
  }

  const setFilterConfig = () => {
    if (currentEffect !== prevEffect) {
      prevEffect = currentEffect;
      isConfigUpdate = true;
      slider.noUiSlider.updateOptions(CONFIGS[currentEffect]);
    }
  };

  switch (currentEffect) {
    case 'chrome':
      setFilterConfig();
      imgPreview.style.filter = `grayscale(${effectLevelInput.value})`;
      break;
    case 'sepia':
      setFilterConfig();
      imgPreview.style.filter = `sepia(${effectLevelInput.value})`;
      break;
    case 'marvin':
      setFilterConfig();
      imgPreview.style.filter = `invert(${effectLevelInput.value}%)`;
      break;
    case 'phobos':
      setFilterConfig();
      imgPreview.style.filter = `blur(${effectLevelInput.value}px)`;
      break;
    case 'heat':
      setFilterConfig();
      imgPreview.style.filter = `brightness(${effectLevelInput.value})`;
      break;
    case 'none':
      imgPreview.style.filter = 'none';
      sliderContainer.classList.add('hidden');
      break;
    default:
      imgPreview.style.filter = 'none';
      break;
  }
  isConfigUpdate = false;
});

const onEffectChange = (evt) => {
  if (evt.target.value === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
  slider.noUiSlider.set(SCALE_VALUE);
};

effectsList.addEventListener('change', onEffectChange);
