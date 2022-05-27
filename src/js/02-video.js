const throttle = require('lodash.throttle');

const video = document.querySelector('#vimeo-player');
const player = new Vimeo.Player(video);

const KEY = 'videoplayer-current-time';

const storage = {
  setItem(time) {
    localStorage.setItem(KEY, JSON.stringify(time));
  },
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      console.log('Error of parsing data from Local Storage');
    }
  },
};

player.on('timeupdate', throttle(saveCurrentTime, 1000));

function saveCurrentTime(event) {
  storage.setItem(event.seconds);
}

if (localStorage.getItem(KEY)) {
  player.setCurrentTime(storage.getItem(KEY));
}
