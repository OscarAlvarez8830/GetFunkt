const React = require('react');
const SongActions = require('../actions/song_actions');
const SongStore = require('../stores/song_store');
const SongIndexItem = require('./song_index_item');

const SongsIndex = React.createClass({

  getInitialState() {
    return({songs: SongStore.all()});
  },

  componentDidMount() {
    this.listener = SongStore.addListener(this.handleChange);
    SongActions.fetchIndex(this.feedType());
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

  welcomeMessage() {
    if (this.feedType() === 'stream') {
      return <h4 id="welcome-message">Listen to your favorite songs:</h4>;
    } else {
      return <h4 id="welcome-message">Check out music from other users:</h4>;
    }
  },

  render() {

    // Highlight the current feedType

    return (
      <div className="song-index">
        {this.welcomeMessage()}
        <ul>
          {
            this.state.songs.map((song, idx) => {
              return (<li key={idx} className="song-item">
                <SongIndexItem feedType={this.feedType()} song={song} />
              </li>);
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = SongsIndex;
