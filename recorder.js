SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {

});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}

