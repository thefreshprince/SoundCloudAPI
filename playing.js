SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.stream('/tracks/293', function(sound) {
  $('#start').click(function(e) {
    e.preventDefault();
    sound.start();
  });
  $('#stop').click(function(e) {
    e.preventDefault();
    sound.stop();
  });
});
