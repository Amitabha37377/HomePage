// get the current local time
  var now = new Date();
  
  // get the hours, minutes, and seconds
  var hours = now.getHours();
  var minutes = now.getMinutes();
  
  // convert to 12-hour format
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // handle midnight
  
  // format the time string and wrap it in the <b> tag for bold text
  var timeString = "<b>" + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm + "</b>";

  // update the content of the element with the formatted time string
  document.getElementById("current-time").innerHTML = timeString;
  
  // update the time every second
  setInterval(function() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // handle midnight
    var timeString = "<b>" + hours + ":" + (minutes < 10 ? "0" + minutes : minutes) + " " + ampm + "</b>";
    document.getElementById("current-time").innerHTML = timeString;
  }, 1000);