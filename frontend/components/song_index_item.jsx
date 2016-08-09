const React = require('react');
const History = require('../history');
const Link = require('react-router').Link;
const SongStore = require('../stores/song_store');
const SongActions = require('../actions/song_actions');
const SessionStore = require('../stores/session_store');

const SongIndexItem = React.createClass({

  getInitialState() {
    let like;
    if (this.props.location.pathname === '/discover') {
      like = false;
    } else if (this.props.song.user_id === SessionStore.currentUser().id) {
      like = true;
    }

    return ({ like: like });
  },

  playSong(e) {
    e.preventDefault();

    SongActions.getSong(this.props.song.id);
  },

  toggleLike(e) {
    e.preventDefault();
    let formerLikeStatus = this.state.like;
    this.setState({like: !formerLikeStatus});

  },

  editSong(e) {

  },

  deleteSong(e) {

  },

  render() {
    const song = this.props.song;
    //CHECK!! this will need to become a link to start playing the song
    // it can always be in that state; no need to turn it off when it starts playing
    return (
      <div>
        <h5 onClick={this.playSong}>{song.title}</h5>
        <h6>{song.artist}</h6>
      </div>
    );
  }
});

module.exports = SongIndexItem;
