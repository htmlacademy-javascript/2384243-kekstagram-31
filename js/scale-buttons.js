const SCALE_VALUE = {
  min: 25,
  max: 100,
};
const SCALE_STEP = 25;

const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleControlInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let scaleValue = null;

const addScaleListeners = () => {
  buttonSmaller.addEventListener ('click', () => {
    scaleValue = parseInt(scaleControlInput.value, 10);

    if (scaleValue > SCALE_VALUE.min) {
      scaleValue -= SCALE_STEP;
      scaleControlInput.value = `${scaleValue}%`;
      imgPreview.style.transform = `scale(${scaleValue / SCALE_VALUE.max})`;
    }
  });

  buttonBigger.addEventListener ('click', () => {
    scaleValue = parseInt(scaleControlInput.value, 10);

    if (scaleValue < SCALE_VALUE.max) {
      scaleValue += SCALE_STEP;
      scaleControlInput.value = `${scaleValue}%`;
      imgPreview.style.transform = `scale(${scaleValue / SCALE_VALUE.max})`;
    }
  });
};

export {addScaleListeners};
