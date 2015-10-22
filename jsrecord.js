SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
    $('#startRecording a').click(function(e) {
  $('#startRecording').hide();
  $('#stopRecording').show();
  e.preventDefault();
  SC.record({
    progress: function(ms, avgPeak) {
      updateTimer(ms);
    }
  });
});

$('#stopRecording a').click(function(e) {
  e.preventDefault();
  $('#stopRecording').hide();
  $('#playBack').show();
  $('#upload').show();
  SC.recordStop();
});


});

// Helper methods for our UI.

function updateTimer(ms) {
  // update the timer text. Used when we're recording
  $('.status').text(SC.Helper.millisecondsToHMS(ms));
}
