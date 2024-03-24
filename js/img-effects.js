const sliderElement = document.querySelector('.effect-level__slider');
const effectLevelInput = document.querySelector('.effect-level__value');
const imgPreview = document.querySelector('.img-upload__preview');
const effectsList = document.querySelector('.effects__list');
const sliderContainer = document.querySelector('.img-upload__effect-level');

effectLevelInput.value = 100;//

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
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

const configs = {
  chrome:{
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  sepia:{
    range: {
      min: 0,
      max: 1
    },
    start: 1,
    step: 0.1
  },
  marvin:{
    range: {
      min: 0,
      max: 100
    },
    start: 100,
    step: 1
  },
  phobos: {
    range: {
      min: 0,
      max: 3
    },
    start: 3,
    step: 0.1
  },
  heat: {
    range: {
      min: 1,
      max: 3
    },
    start: 3,
    step: 0.1
  }
};

let prev = null;

function getEffectValue (currentEffect) {
  if (currentEffect !== prev) {
    prev = currentEffect;
    sliderElement.noUiSlider.updateOptions(configs[currentEffect]);
  }
}

sliderElement.noUiSlider.on('update', () => {
  // const value = values[handle];
  // effectLevelInput.value = value;
  effectLevelInput.value = sliderElement.noUiSlider.get();

  const currentEffect = document.querySelector('input[name="effect"]:checked').value;

  switch (currentEffect) {
    case 'chrome':
      getEffectValue(currentEffect);
      imgPreview.style.filter = `grayscale(${effectLevelInput.value})`;
      console.log(imgPreview.style.filter);
      break;
    case 'sepia':
      getEffectValue(currentEffect);
      imgPreview.style.filter = `sepia(${effectLevelInput.value})`;
      console.log(imgPreview.style.filter);
      break;
    case 'marvin':
      getEffectValue(currentEffect);
      imgPreview.style.filter = `invert(${effectLevelInput.value}%)`;
      console.log(imgPreview.style.filter);
      break;
    case 'phobos':
      getEffectValue(currentEffect);
      imgPreview.style.filter = `blur(${effectLevelInput}px)`;
      console.log(imgPreview.style.filter);
      break;
    case 'heat':
      getEffectValue(currentEffect);
      imgPreview.style.filter = `brightness(${effectLevelInput})`;
      console.log(imgPreview.style.filter);
      break;
    default:
      imgPreview.style.filter = 'none';
      break;
  }
});

function onEffectChange (evt) {
  if (evt.target.value === 'none') {
    sliderContainer.classList.add('hidden');
  } else {
    sliderContainer.classList.remove('hidden');
    sliderElement.noUiSlider.set(100);
  }
}

effectsList.addEventListener('change', onEffectChange);
