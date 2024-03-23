const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelInput = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview');
const effectsInput = document.querySelector('.effects__radio');

// const effectOriginal = document.querySelector('.effects__preview--none');
// const effectChrome = document.querySelector('.effects__preview--chrome');
// const effectSepia = document.querySelector('.effects__preview--sepia');
// const effectMarvin = document.querySelector('.effects__preview--marvin');
// const effectPhobos = document.querySelector('.effects__preview--phobos');
// const effectHeat = document.querySelector('.effects__preview--heat');

// effectLevelInput.value = 100;//

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderElement.noUiSlider.on('update', () => {
  // const value = values[handle];
  // effectLevelInput.value = value;
  effectLevelInput.value = sliderElement.noUiSlider.get();

  const currentEffect = document.querySelector('input[name="effect"]:checked').value;

  switch (currentEffect) {
    case 'chrome':
      imgPreview.style.filter = `grayscale(${effectLevelInput.value})`;
      // console.log(imgPreview.style.filter);
      break;
    case 'sepia':
      imgPreview.style.filter = `sepia(${effectLevelInput.value})`;
      // console.log(imgPreview.style.filter);
      break;
    case 'invert':
      imgPreview.style.filter = `invert(${effectLevelInput.value * 1000}%)`;
      // console.log(imgPreview.style.filter);
      break;
    case 'blur':
      imgPreview.style.filter = `blur(${effectLevelInput.value * 3}px)`;
      // console.log(imgPreview.style.filter);
      break;
    case 'brightness':
      imgPreview.style.filter = `brightness(${1 + (effectLevelInput.value * 3)})`;
      // console.log(imgPreview.style.filter);
      break;
    default:
      imgPreview.style.filter = 'none';
      break;
  }
});

function onEffectChange (evt) {
  if (evt.target.checked) {
    // sliderElement.noUiSlider.updateOptions({
    //   range: {
    //     min: 0,
    //     max: 1
    //   },
    //   step: 0.1,
    //   start: 1,
    // });
  }
}

effectsInput.addEventListener('change', onEffectChange);

//     sliderElement.noUiSlider.set(100);
