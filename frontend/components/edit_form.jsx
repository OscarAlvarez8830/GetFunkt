const React = require('react');
const SongActions = require('../actions/song_actions');
const History = require('../history');

const EditForm = React.createClass({

  getInitialState() {
    const song = this.props.song;
    return ({ title: song.title, artist: song.artist });
  },

  updateTitle(e) {
    this.setState({title: e.target.value});
  },

  updateArtist(e) {
    this.setState({artist: e.target.value});
  },

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("song[title]", this.state.title);
    formData.append("song[artist]", this.state.artist);
    SongActions.updateSong(this.props.song.id, formData);
    this.props.submitCB();
  },

  goBack() {
    History.push("/stream");
  },

  render() {
    return (
      <div className="edit-form-container">
        <h3 className="form-header">Edit Song</h3>
        <form onSubmit={this.handleSubmit} className="song-form">
          <input
            type="text"
            className="input"
            onChange={this.updateTitle}
            placeholder={this.state.title}
          />

          <input
            type="text"
            className="input"
            onChange={this.updateArtist}
            placeholder={this.state.artist}
          />

          <input
            type="submit"
            className="submit"
            value="Update"
          />

        </form>
      </div>
    );
  }
});

module.exports = EditForm;
