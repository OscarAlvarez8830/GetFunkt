const SongApiUtil = {
  fetchSongs(playlist, success) {
    $.ajax({
      url: 'api/songs',
      method: 'GET',
      dataType: 'JSON',
      // this indicates that if I use the index controller action,
      // I need to specify a playlist argument
      // otherwise I need a different url here, another controller action,
      // and another route
      data: { playlist },
      success
    });
  }
};

module.exports = SongApiUtil;
