$(document).ready(function() {
  $("#blanks-form").submit(function(event) {
    var blanks = ["#item1", "#item2", "#item3", "#item4", "#item5"];
    var newBlanks = blanks.map(function(blank) {
      return ($(blank).val()).toUpperCase();
      });
    newBlanks.sort();
      // $("#story").show();
      alert(newBlanks);
    newBlanks.forEach(function(newBlank) {
      $("#output").append("<li>" + newBlank + "</li>");
    });
    event.preventDefault();
  });
});
