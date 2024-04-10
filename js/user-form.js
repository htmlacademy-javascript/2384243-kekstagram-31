import {isEscapeKey} from './util.js';
import {pristine} from './validate-form.js';

const SCALE_VALUE = 100;

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const closeButtonElement = form.querySelector('.img-upload__cancel');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgPreview = form.querySelector('.img-upload__preview img');
const effectLevelSlider = form.querySelector('.effect-level__slider');
const imgUploadEffectLevel = form.querySelector('.img-upload__effect-level');
const body = document.body;

const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)
  && !evt.target.closest('.text__hashtags')
  && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    onCloseButtonClick();
  }
};

const onOpenButtonChange = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onFileEscKeydown);
};

uploadFile.addEventListener('change', onOpenButtonChange);

function onCloseButtonClick () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFileEscKeydown);
  document.removeEventListener('click', onCloseButtonClick);

  uploadFile.value = '';
  form.reset();
  pristine.reset();
  scaleControlValue.value = `${SCALE_VALUE}%`;
  imgPreview.style.transform = '';
  imgPreview.style.filter = 'none';
  effectLevelSlider.noUiSlider.set(SCALE_VALUE);
  imgUploadEffectLevel.classList.add('hidden');
}

closeButtonElement.addEventListener('click', onCloseButtonClick);

export {onCloseButtonClick};
