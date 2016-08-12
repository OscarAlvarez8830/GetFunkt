const React = require('react');
const SongStore = require('../stores/song_store');
const SongActions = require('../actions/song_actions');
const SessionStore = require('../stores/session_store');
const Modal = require('react-modal');
const ModalStyle = require('../modal_style');
const EditForm = require('./edit_form');
const CommentIndex = require('./comment_index');
const CommentForm = require('./comment_form');
const LikeApiUtil = require('../util/like_api_util');
const Link = require('react-router').Link;

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

    return ({
      like: like,
      owned: owned,
      editModalOpen: false,
      commentModalOpen: false,
      title: this.song.title,
      artist: this.song.artist
     });
  },

  componentDidMount() {
    this.listener = SongStore.addListener(this.handleSongChange);
  },

  handleSongChange() {
    // debugger
    this.song = SongStore.getSong(this.song.id);
    this.setState({title: this.song.title, artist: this.song.artist});
  },

  componentWillUnmount() {
    // debugger
    this.listener.remove();
  },

  playSong(e) {
    e.preventDefault();

    SongActions.getSong(this.props.song.id);
  },

  componentWillReceiveProps() {
    // debugger
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
          <button className="song-button" onClick={this.editSong}>Edit</button>
          <button className="song-button" onClick={this.deleteSong}>Delete</button>

          <Modal
            isOpen={this.state.editModalOpen}
            onRequestClose={this.onEditModalClose}
            style={ModalStyle}
            >

            <EditForm song={this.song} submitCB={this.onEditModalClose}/>
          </Modal>
        </div>
      );
    }
  },

  editSong(e) {
    e.preventDefault();

    this.setState({ editModalOpen: true });
  },

  onEditModalClose() {
    this.setState({ editModalOpen: false });
    this.forceUpdate.call(this);
  },

  deleteSong(e) {
    e.preventDefault();

    SongActions.deleteSong(this.song.id);
  },

  likeButton() {
    const likeFn = this.addLike;
    const unlikeFn = this.unlike;
    if (this.state.like && this.state.owned === false) {
      return <button onClick={unlikeFn} className="like song-button">Unlike</button>;
    } else if (this.state.owned === false) {
      return <button onClick={likeFn} className="like song-button">Like</button>;
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

  commentModal() {
    return (
      <Modal
        isOpen={this.state.commentModalOpen}
        onRequestClose={this.onCommentModalClose}
        style={ModalStyle}
        >

        <CommentIndex songId={this.song.id} />
        <CommentForm songId={this.song.id} />
      </Modal>
    );
  },

  getComments(e) {
    e.preventDefault();
    this.setState({ commentModalOpen: true });
  },

  onCommentModalClose() {
    this.setState({ commentModalOpen: false });
  },

  render() {
    const song = this.props.song;
    const userId = song.user.id;

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
          <h6 onClick={this.playSong} className="song-artist">{song.artist}</h6>
          <div className="song-user">
            <h6>user: </h6>
            <h6><Link to={`usersongs/${userId}`}>{song.user.username}</Link></h6>
            </div>
        </div>

        <div className="song-buttons">
          {this.likeButton()}
          {this.crudButtons()}
        </div>
        <button className="comment-button" onClick={this.getComments}>
          Comments
        </button>
        {this.commentModal()}
      </div>
    );
  }
});

module.exports = SongIndexItem;
