import React from 'react';
import { connect } from 'react-redux';
class SongList extends React.Component {
  renderList = () => {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return (
    <div>{this.renderList()}</div>
    )
  }
}
const mapStatetoProps = state => {
  return {songs: state.songs};
}
export default connect(mapStatetoProps)(SongList);
