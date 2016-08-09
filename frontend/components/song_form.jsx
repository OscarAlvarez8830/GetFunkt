const React = require('react');

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

    SongActions.createSong();
  },

  render() {
    return (
      <div>
        <form className="upload-form">
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

        </form>
      </div>
    );
  }
});

module.exports = SongForm;
