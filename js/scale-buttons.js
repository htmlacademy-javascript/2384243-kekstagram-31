const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const scaleControlInput = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview');

let scaleValue = parseInt(scaleControlInput.value, 10);

buttonSmaller.addEventListener ('click', () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    scaleControlInput.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
});

buttonBigger.addEventListener ('click', () => {
  if (scaleValue < 100) {
    scaleValue += 25;
    scaleControlInput.value = `${scaleValue}%`;
    imgPreview.style.transform = `scale(${scaleValue / 100})`;
  }
});
