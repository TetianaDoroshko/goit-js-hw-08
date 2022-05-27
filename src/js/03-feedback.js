const throttle = require('lodash.throttle');

refs = {
  form: document.querySelector('.feedback-form'),
  inpEmail: document.querySelector('[name="email"]'),
  inpMessage: document.querySelector('[name="message"]'),
  btnSubmit: document.querySelector('[type="submit"]'),
};

const KEY = 'feedback-form-state';

const storage = {
  setItem(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  },
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      console.log('Error of parsing data from Local Storage');
    }
  },
  removeItem(key) {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  },
};

const dataObj = storage.getItem(KEY) ?? {};

refs.inpEmail.value = dataObj.email ?? '';
refs.inpMessage.value = dataObj.message ?? '';

refs.form.addEventListener('input', throttle(saveUserData, 500));

function saveUserData(event) {
  dataObj[event.target.name] = event.target.value;
  storage.setItem(dataObj);
}

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  console.log(dataObj);
  event.currentTarget.reset();
  storage.removeItem(KEY);
}
