const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const descriptionInput = form.querySelector('.text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent:'img-upload__field-wrapper',
  errorTextTag: 'div',
  errorTextClass:'img-upload__field-wrapper--error',
});

let hashtagErrorMessage = null;

const validateHashtag = (value) => {
  if (!value){
    return true;
  }

  const hashtags = value.toLowerCase().split(' ').filter((tag) => tag !== '');
  if (hashtags.length > 5) {
    hashtagErrorMessage = 'превышено количество хэштегов';
    return false;
  }

  if (new Set(hashtags).size !== hashtags.length) {
    hashtagErrorMessage = 'хэштеги повторяются';
    return false;
  }

  return hashtags.every((hashtag) => {

    if(!hashtag.startsWith('#')) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    if(hashtag.length < 2 || hashtag.length > 20) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    const regExp = /^#[a-zа-яё0-9]{1,19}$/i;
    if (!regExp.test(hashtag)) {
      hashtagErrorMessage = 'введён невалидный хэштег';
      return false;
    }

    return true;
  });
};

pristine.addValidator(hashtagInput, validateHashtag, () => hashtagErrorMessage);

function validateDescription (value) {
  return value.length >= 0 && value.length <= 139;
}

pristine.addValidator(descriptionInput, validateDescription, 'длина комментария больше 140 символов');

export {pristine};
