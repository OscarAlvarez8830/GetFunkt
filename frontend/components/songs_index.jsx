const React = require('react');
const SongActions = require('../actions/song_actions');
const SongStore = require('../stores/song_store');
const SongIndexItem = require('./song_index_item');

function titleize(string) {
  let words = string.split(' ');

  words = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  return words.join(' ');
}

const SongsIndex = React.createClass({

  getInitialState() {
    return({songs: SongStore.all()});
  },

  componentDidMount() {
    this.listener = SongStore.addListener(this.handleChange);
  },

  feedType() {
    return this.props.location.pathname.slice(1);
  },

  handleChange() {
    this.setState({songs: SongStore.all()});
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  render() {

    // I'd like some logic here to render links for each feedType
    // Always render both buttons in the index
    // Highlight the current feedType

    return (
      <div className={this.feedType()}>
        <h3>{titleize(this.feedType())}</h3>
        <ul>
          {
            this.state.songs.map((song, idx) => {
              return <li key={idx} className="song-item">
                <SongIndexItem feedType={this.feedType()} song={song} />
              </li>;
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = SongsIndex;
