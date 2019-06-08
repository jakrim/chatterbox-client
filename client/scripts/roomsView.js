// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {
  $button: $("#rooms button"),
  $select: $("#rooms select"),

  initialize: function () {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  createTemplate: _.template(
    `<option value="<%- roomname %>"> <%- roomname %></option>"`
  ),


  render: function () {
    let html = "";
    for (let i = 0; i < Rooms._data.length; i++) {
      if (Rooms._data[i]["roomname"] !== undefined) {
        html += RoomsView.createTemplate(Rooms._data[i]);
      }

    }
    this.$select.append(html);
  },

  handleChange: function (event) {
    // TODO: Handle a user selecting a different room .
  },

  handleClick: function (event) {
    // TODO: Handle the user clicking the "Add Room" button.
  }
};
