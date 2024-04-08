import {showTypeFileError} from './notifications.js';

const FILE_TYPES = ['.jpg', '.jpeg', '.png'];

const fileChooser = document.getElementById('upload-file');
const preview = document.querySelector('.img-upload__preview img');
const previewItem = document.querySelectorAll('.effects__preview');
const uploadOverlay = document.querySelector('.img-upload__overlay');

fileChooser.addEventListener('change', () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

  if (!matches) {
    showTypeFileError('Неверный тип файла');
    uploadOverlay.classList.add('hidden');
  }
  preview.src = URL.createObjectURL(file);
  previewItem.forEach((item) => {
    item.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
  });
});
