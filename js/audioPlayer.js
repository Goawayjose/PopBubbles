

/*

var mytrack = document.getElementById('myTrack');

var duration = document.getElementById('fullDuration');
var currentTime = document.getElementById('currentTime');

var barSize = 305;
var bar = document.getElementById('defualtBar');
var progressbar = document.getElementById('progressBar');
var volumeSlider = document.getElementById('volumeSlider');

bar.addEventListener('click', clickedBar, false);
volumeSlider.addEventListener('change', function() {
  console.log('work');
  mytrack.volume = volumeSlider.value / 100;
});

mytrack.addEventListener('loadeddata', function(){
  var minutes = parseInt(mytrack.duration/60);
  var seconds = pad(parseInt(mytrack.duration%60));
  duration.innerHTML = minutes + ':' + seconds;
});

function update(){
  if(!mytrack.ended) {
      var playedMinutes = parseInt(mytrack.currentTime/60);
      var playedSeconds = pad(parseInt(mytrack.currentTime%60));
      currentTime.innerHTML = playedMinutes + ':' + playedSeconds;

      var size = parseInt(mytrack.currentTime*barSize/mytrack.duration);
      progressBar.style.width = size + "px";
  }
  else{
    currentTime.innerHTML = "0:00";
    $('.play').removeClass('pause');
    progressBar.style.width = "0px";
    window.clearInterval(updateTime);
  }
}

function clickedBar(e) {
  if (!mytrack.ended) {
    var mouseX = e.pageX - bar.offsetLeft;
    var newtime = mouseX * mytrack.duration/barSize;

    mytrack.currentTime = newtime;
    progressBar.style.width = mouseX + "px";
  }
}

function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
} */
