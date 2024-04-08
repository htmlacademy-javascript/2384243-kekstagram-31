import {isEscapeKey} from './util.js';
import {pristine} from './validate-form.js';

const form = document.querySelector('.img-upload__form');
const uploadFile = form.querySelector('.img-upload__input');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const closeButtonElement = form.querySelector('.img-upload__cancel');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgUploadPreview = form.querySelector('.img-upload__preview');
const effectLevelSlider = form.querySelector('.effect-level__slider');
const imgUploadEffectLevel = form.querySelector('.img-upload__effect-level');
const body = document.body;

const onFileEscKeydown = (evt) => {
  if (isEscapeKey(evt)
  && !evt.target.closest('.text__hashtags')
  && !evt.target.closest('.text__description')) {
    evt.preventDefault();
    closeButton();
  }
};

function openButton () {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onFileEscKeydown);
}

uploadFile.addEventListener('change', openButton);

function closeButton () {
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFileEscKeydown);
  document.removeEventListener('click', closeButton);

  form.reset();
  pristine.reset();
  uploadFile.value = '';
  scaleControlValue.value = `${100}%`;
  imgUploadPreview.style.transform = '';
  imgUploadPreview.style.filter = 'none';
  effectLevelSlider.noUiSlider.set(100);
  imgUploadEffectLevel.classList.add('hidden');
}

closeButtonElement.addEventListener('click', closeButton);

export {closeButton};
