const React = require('react');
const History = require('../history');
const Link = require('react-router').Link;
const SongStore = require('../stores/song_store');
const SongActions = require('../actions/song_actions');
const SessionStore = require('../stores/session_store');

const SongIndexItem = React.createClass({

  getInitialState() {
    this.song = this.props.song;
    let like;
    let owned = false;
    if (this.props.feedType === 'discover') {
      like = false;
    } else if (this.song.user_id !== SessionStore.currentUser().id) {
      like = true;
    } else {
      owned = true;
    }

    // debugger
    return ({ like: like, owned: owned });
  },

  playSong(e) {
    e.preventDefault();

    SongActions.getSong(this.props.song.id);
  },

  componentWillReceiveProps() {
    this.song = this.props.song;
    let like;
    let owned = false;

    if (this.props.feedType === 'discover') {
      like = false;
    } else if (this.song.user_id !== SessionStore.currentUser().id) {
      like = true;
    } else {
      owned = true;
    }

    // debugger
    this.setState({ like: like, owned: owned });
  },

  crudButtons() {
    if (this.state.owned) {
      return (
        <div>
          <button className="crud-button" onClick={this.editSong}>Edit</button>
          <button className="crud-button" onClick={this.deleteSong}>Delete</button>
        </div>
      );
    }
  },

  editSong(e) {

  },

  deleteSong(e) {
    e.preventDefault();

    SongActions.deleteSong(this.song.id);
  },

  likeButton() {
    const likeFn = this.addLike;
    const unlikeFn = this.unlike;
    if (this.state.like && this.state.owned === false) {
      return <button onClick={unlikeFn} className="unlike-button">Unlike</button>;
    } else if (this.state.owned === false) {
      return <button onClick={likeFn} className="like-button">Like</button>;
    }
  },

  addLike(e) {
    e.preventDefault();

    LikeApiUtil.createLike(this.song.id);
    this.setState({like: true});
  },

  unlike(e) {
    e.preventDefault();

    LikeApiUtil.deleteLike(this.song.id);
    this.setState({like: false});
  },

  render() {
    const song = this.props.song;
    //CHECK!! this will need to become a link to start playing the song
    // it can always be in that state; no need to turn it off when it starts playing
    return (
      <div className="song-item group" >

        <img
          className="song-image group"
          src={song.image_url}
          height="100px" width="100px"
          onClick={this.playSong}
          />

        <div className="song-info group">
          <h4 onClick={this.playSong} className="song-title">{song.title}</h4>
          <h6>{song.artist}</h6>
        </div>

        <div className="song-buttons">
          {this.likeButton()}
          {this.crudButtons()}
        </div>
      </div>
    );
  }
});

module.exports = SongIndexItem;
