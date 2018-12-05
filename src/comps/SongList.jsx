import React from 'react';
import { connect } from 'react-redux';
class SongList extends React.Component {
  render() {
    return (
    <div>Songs</div>
    )
  }
}
const mapStatetoProps = state => {
  return {songs: state.songs};
}
export default connect(mapStatetoProps)(SongList);
