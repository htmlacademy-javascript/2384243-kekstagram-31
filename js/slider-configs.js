const CONFIGS = {
  chrome:{
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterValue: (value) => `grayscale(${value})`,
  },

  sepia:{
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    getFilterValue: (value) => `sepia(${value})`,
  },
  marvin:{
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
    },
    getFilterValue: (value) => `invert(${value}%)`,
  },
  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    getFilterValue: (value) => `blur(${value}px)`,
  },
  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    getFilterValue: (value) => `brightness(${value})`,
  },
  none: {
    options: '',
    getFilterValue: () => '',
  },
};

const sliderElement = document.querySelector('.effect-level__slider');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 10,
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

export {CONFIGS};
