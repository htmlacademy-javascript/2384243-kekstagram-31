const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleControlInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

let scaleValue = null;

buttonSmaller.addEventListener ('click', () => {
  scaleValue = parseInt(scaleControlInput.value, 10);

  if (scaleValue > 25) {
    scaleValue -= 25;
    scaleControlInput.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
});

buttonBigger.addEventListener ('click', () => {
  scaleValue = parseInt(scaleControlInput.value, 10);

  if (scaleValue < 100) {
    scaleValue += 25;
    scaleControlInput.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
});
