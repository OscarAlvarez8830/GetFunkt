const React = require('react');
const SongApiUtil = require('../util/song_api_util');
const History = require('../history');
const SessionStore = require('../stores/session_store');

const SongForm = React.createClass({

  getInitialState() {
    return ({title: "", artist: "", songFile: null, imageFile: null});
  },

  updateTitle(e) {
    this.setState({title: e.target.value});
  },

  updateArtist(e) {
    this.setState({artist: e.target.value});
  },

  updateSongFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({songFile: file});
  },

  updateImageFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({imageFile: file});
  },

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[artist]", this.state.artist);
    formData.append("song[audio]", this.state.songFile);
    formData.append("song[image]", this.state.imageFile);
    formData.append("song[user_id]", SessionStore.currentUser().id);
    SongApiUtil.createSong(formData, this.goBack);
  },

  goBack() {
    History.push("/stream");
  },

  render() {
    return (
      <div className="form-container">
        <h3 className="form-header">Upload a New Song</h3>
        <form onSubmit={this.handleSubmit} className="song-form">
          <input
            type="text"
            className="input"
            onChange={this.updateTitle}
            placeholder="title"
          />

          <input
            type="text"
            className="input"
            onChange={this.updateArtist}
            placeholder="artist"
          />

        <label className="input-label">Song File</label>
            <input
              type="file"
              className="input input-file"
              onChange={this.updateSongFile}
            />

          <label className="input-label">Song Art</label>
            <input
              type="file"
              className="input input-file"
              onChange={this.updateImageFile}
            />

          <input
            type="submit"
            className="submit"
            value="Upload"
          />

        </form>
      </div>
    );
  }
});

module.exports = SongForm;
