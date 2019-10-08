import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//Take the state from the redux store and
//run some calculations on it that will cause that data to show up
//as props inside the component (getMyState)
const mapStateToProps = state => {
  return { songs: state.songs };
};

//connect() is being invoked with SongList as a parameter
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
