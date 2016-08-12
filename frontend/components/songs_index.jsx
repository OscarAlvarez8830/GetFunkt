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
    if (['stream', 'discover'].includes(this.feedType())) {
      SongActions.fetchIndex(this.feedType());
    } else {
      SongActions.fetchUserSongs(this.props.userId);
    }
  },

  feedType() {
    return this.props.location.pathname.slice(1);
  },

  handleChange() {
    this.setState({songs: SongStore.all()});
  },

  componentWillUnmount() {
    this.listener.remove();
    SongActions.clearAllSongs();
  },

  welcomeMessage() {
    if (this.feedType() === 'stream') {
      return <h4 id="welcome-message">Listen to your favorite songs:</h4>;
    } else if (this.feedType() === 'discover'){
      return <h4 id="welcome-message">Check out music from other users:</h4>;
    } else {
      return <h4 id="user-welcome-message">Check out music from this user:</h4>;
    }
  },

  render() {
    return (
      <div className="song-index">
        {this.welcomeMessage()}
        <ul>
          {
            this.state.songs.map((song, idx) => {
              return (
                <li key={song.id} >
                  <SongIndexItem feedType={this.feedType()} song={song} />
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
});

module.exports = SongsIndex;
