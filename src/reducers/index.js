
const songReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' }
    { title: 'No rubs', duration: '4:05' }
    { title: 'Science', duration: '4:05' }
    { title: 'Hello', duration: '4:05' }
  ];
};


const selectedSongReducer = (selectedSong=null, action) {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};
