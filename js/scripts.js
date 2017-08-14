$(document).ready(function() {
  $("#blanks-form").submit(function(event) {
    var blanks = ["#item1", "#item2", "#item3", "#item4", "#item5"];
    var newBlanks = blanks.map(function(blank) {
      return ($(blank).val()).toUpperCase();
      });
    $("#input").hide();
    newBlanks.sort();
    newBlanks.forEach(function(newBlank) {
      $("#output").append("<li>" + newBlank + "</li>");
    });
    $("#output").show();
    event.preventDefault();
  });
});
