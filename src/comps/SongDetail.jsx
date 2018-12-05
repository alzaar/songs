import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  if (!song) {
    return <h3>Select Song</h3>
  }
  return (
    <div>
      <h3>Song Details: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  )
}

const mapStatetoProps = state => {
  return { song: state.selectedSong }
};

export default connect(mapStatetoProps)(SongDetail);
