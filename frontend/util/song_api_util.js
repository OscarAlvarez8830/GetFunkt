const SongApiUtil = {
  // fetchStream(cb) {
  //   $.ajax({
  //     url: 'api/stream',
  //     method: 'GET',
  //     dataType: 'JSON',
  //     success: (songs) => {
  //       cb(songs);
  //     },
  //     error: (error) => {
  //       console.log(error.responseText);
  //     }
  //     // CHECK!! make sure to handle errors
  //   });
  // },
  //
  // fetchDiscover(cb) {
  //   $.ajax({
  //     url: 'api/discover',
  //     method: 'GET',
  //     dataType: 'JSON',
  //     success: (songs) => {
  //       cb(songs);
  //     },
  //     error: (error) => {
  //       console.log(error.responseText);
  //     }
  //
  //     // CHECK!! make sure to handle errors
  //   });
  // }

  fetchIndex(feedType, successCB) {
    $.ajax({
      url: `api/${feedType}`,
      method: 'GET',
      dataType: 'JSON',
      success: (songs) => {
        successCB(songs);
      },
      error: (error) => {
        console.log(error.responseText);
        // CHECK!! properly handle errors
      }
    });
  }

  // CHECK!! WILL NEED MORE AJAX CALLS FOR INDIVIDUAL SONGS
};

module.exports = SongApiUtil;
