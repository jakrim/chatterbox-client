// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {
  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function () {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.startSpinner();
    App.fetch(App.stopSpinner);


    // Fetch batch of messages on interval
    setInterval(function () {
      App.fetch(App.stopSpinner);
    }, 4000);

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    //setinterval
  },

  fetch: function (callback = () => { }) {
    Parse.readAll(data => {
      // examine the response from the server request:
      Messages._data = [];
      Messages.cleanData(data);
      Rooms.filterData(data);
      callback();
    });
  },


  fetchThenFilterRoom: function (clicked) {
    Parse.readAll(data => {
      Messages._data = [];
      let filtered = {};
      filtered.results = data.results.filter(e => e['roomname'] === clicked);
      Messages.cleanData(filtered);

    });
  },

  startSpinner: function () {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function () {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
