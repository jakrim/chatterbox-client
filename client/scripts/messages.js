// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {
  // TODO: Define how you want to store your messages.
  _data: [],

  cleanData: function(data) {
    var storage = data.results;
    for (let i = 0; i < storage.length; i++) {
      let temp = {};
      temp.username = storage[i]["username"];
      temp.text = storage[i]["text"];
      temp.roomname = storage[i]["roomname"];
      Messages._data.push(temp);
    }
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
};
