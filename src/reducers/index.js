import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: "21 Guns", duration: "5:21" },
    { title: "American Idiot", duration: "2:54" },
    { title: "Basket Case", duration: "3:01" },
    { title: "Brain Stew / Jaded", duration: "4:43" },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({ //store
  songs : songsReducer,
  selectedSong: selectedSongReducer
});

