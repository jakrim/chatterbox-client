// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: [],

  filterData: function (data) {
    storage = data.results;
    Rooms._data = [];
    for (let i = 0; i < storage.length; i++) {
      let temp = {};
      temp["roomname"] = storage[i]["roomname"];
      Rooms._data.push(temp);
    }
    RoomsView.render();
  }

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};