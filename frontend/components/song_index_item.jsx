const React = require('react');
const History = require('../history');
const Link = require('react-router').Link;
const SongStore = require('../stores/song_store');
const SongActions = require('../actions/song_actions');

const SongIndexItem = React.createClass({

  render() {
    const song = this.props.song;
    //CHECK!! this will need to become a link to start playing the song
    // it can always be in that state; no need to trn it off when it starts playing
    return (
      <div>
        {song.title}
          <br/>
        {song.artist}
      </div>
    );
  }
});

module.exports = SongIndexItem;
