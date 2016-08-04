const SongApiUtil = {
  fetchStream(success) {
    $.ajax({
      url: 'api/stream',
      method: 'GET',
      dataType: 'JSON',
      success
      // CHECK!! make sure to handle errors
    });
  },

  fetchDiscover(success) {
    $.ajax({
      url: 'api/discover',
      method: 'GET',
      dataType: 'JSON',
      success
      // CHECK!! make sure to handle errors
    });
  }

  // CHECK!! WILL NEED MORE AJAX CALLS FOR INDIVIDUAL SONGS
};

module.exports = SongApiUtil;
