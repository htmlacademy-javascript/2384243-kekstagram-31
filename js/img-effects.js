import {CONFIGS} from './slider-configs.js';

const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelInput = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');

effectLevelInput.value = 100;

let prevEffect = null;
let isConfigUpdate = false;

sliderElement.noUiSlider.on('update', () => {
  effectLevelInput.value = sliderElement.noUiSlider.get();

  const currentEffect = document.querySelector('input[name="effect"]:checked').value;
  if (isConfigUpdate) {
    return;
  }

  function setFilterConfig () {
    if (currentEffect !== prevEffect) {
      prevEffect = currentEffect;
      isConfigUpdate = true;
      sliderElement.noUiSlider.updateOptions(CONFIGS[currentEffect]);
    }
  }

  switch (currentEffect) {
    case 'chrome':
      setFilterConfig(currentEffect);
      imgPreview.style.filter = `grayscale(${effectLevelInput.value})`;
      break;
    case 'sepia':
      setFilterConfig(currentEffect);
      imgPreview.style.filter = `sepia(${effectLevelInput.value})`;
      break;
    case 'marvin':
      setFilterConfig(currentEffect);
      imgPreview.style.filter = `invert(${effectLevelInput.value}%)`;
      break;
    case 'phobos':
      setFilterConfig(currentEffect);
      imgPreview.style.filter = `blur(${effectLevelInput.value}px)`;
      break;
    case 'heat':
      setFilterConfig(currentEffect);
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

function onEffectChange (evt) {
  if (evt.target.value === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
  }
  sliderElement.noUiSlider.set(100);
}

effectsList.addEventListener('change', onEffectChange);
