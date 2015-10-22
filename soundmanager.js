SC.initialize({
  client_id: 'YOUR_CLIENT_ID'
});

$(document).ready(function() {
  SC.stream('/tracks/293', function(sound) {

  });
});
