const Store = require('flux/utils').Store;
const AppDispatcher = require('../dispatcher/dispatcher');

const SongStore = new Store(AppDispatcher);

module.exports = SongStore;
