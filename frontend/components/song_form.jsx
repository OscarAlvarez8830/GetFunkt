const React = require('react');
const SongApiUtil = require('../util/song_api_util');
const History = require('../history');
const SessionStore = require('../stores/session_store');

const SongForm = React.createClass({

  getInitialState() {
    return ({title: "", artist: "", songFile: null});
  },

  updateTitle(e) {
    this.setState({title: e.target.value});
  },

  updateArtist(e) {
    this.setState({artist: e.target.value});
  },

  updateFile(e) {
    const file = e.currentTarget.files[0];
    this.setState({songFile: file});
  },

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[artist]", this.state.artist);
    formData.append("song[audio]", this.state.songFile);
    formData.append("song[user_id]", SessionStore.currentUser().id);
    SongApiUtil.createSong(formData, this.goBack);
  },

  goBack() {
    debugger
    History.push("/");
  },

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="upload-form">
          <input
            type="text"
            onChange={this.updateTitle}
            placeholder="title"
          />

          <input
            type="text"
            onChange={this.updateArtist}
            placeholder="artist"
          />

          <input
            type="file"
            onChange={this.updateFile}
          />

          <input
            type="submit"
            value="Upload"
          />

        </form>
      </div>
    );
  }
});

module.exports = SongForm;
