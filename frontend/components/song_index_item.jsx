const React = require('react');
const History = require('../history');
const Link = require('react-router').Link;
const SongStore = require('../stores/song_store');
const SongActions = require('../actions/song_actions');

const SongIndexItem = React.createClass({

  handleClick(e) {
    e.preventDefault();

    SongActions.getSong(this.props.song.id);
  },

  render() {
    const song = this.props.song;
    //CHECK!! this will need to become a link to start playing the song
    // it can always be in that state; no need to turn it off when it starts playing
    return (
      <div onClick={this.handleClick}>
        {song.title}
        {song.artist}
      </div>
    );
  }
});

module.exports = SongIndexItem;
