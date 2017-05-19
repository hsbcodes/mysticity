audioPlayer();

function audioPlayer(){
  var currentSong = 0;
  $('#audioTracks')[0].src = $('#playlist li a')[0];
  $('#audioTracks')[0].play();
  if($('#playlist li').hasClass('current-song')){
    $('#audioTracks').play();
  }
  else {
    $('#playlist li').first().addClass('current-song');
  }

  $('#playlist li a').click(function(e){
    e.preventDefault();
    $('#audioTracks')[0].src = this;
    $('#audioTracks')[0].play();
    $('#playlist li').removeClass('current-song');
      currentSong = $(this).parent().index();
    $(this).parent().addClass('current-song');
    });

  $('#audioTracks')[0].addEventListener('ended', function(){
    currentSong++;
      if(currentSong == $('#playlist li a').length)
          currentSong = 0;
      $('#playlist li').removeClass('current-song');
      $('#playlist li:eq(' + currentSong + ')').addClass('current-song');
      $('#audioTracks')[0].src = $('#playlist li a')[currentSong].href;
      $('#audioTracks')[0].play();
  });
}
