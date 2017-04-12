// app file


var app = new Vue({
    el: '#vue',

    data: {
     songs : [],
     onPlay : [],
     tracks : [],

    },
    mounted() {

      //getting top-100
      axios.get('songs.php')
        .then(function (response){


          app.songs = response.data;


          for (i = 0; i < app.songs.length; i++) {

            var song = app.songs[i];

              $.ajax({
                  url: 'https://api.spotify.com/v1/search',
                  data: {
                      q: song,
                      type: 'track'
                  },
                  success: function (response) {

                    app.tracks.push(response.tracks.items[1]);
                      // console.log(items);


                  }
              });
          }

        }).catch(function (error) {
          console.log(error);
        });
    },
    methods: {

      playEt: function (name) {
        
          app.onPlay.splice(0,app.onPlay.length);
          app.onPlay.push(name);
          var daId = app.onPlay[0].id
          $('#' + daId + '').addClass('playing');
          if(  $('#' + daId + '').siblings().hasClass('playing')){
             $('#' + daId + '').siblings().removeClass('playing');
          }

        then(function(){
          app.playOrPause();
        });
      },

      nextTrack: function () {

        // for (var track in app.tracks) {
        //
        //     console.log(track);
        //
        // }
        var curent_track = app.onPlay[0];
        // console.log(curent_track);

        Object.entries(app.tracks).forEach(([key, val]) => {
          // console.log(key);          // the name of the current key.

          var i = 1;

          if(i == 2){
            console.log(val)
            app.playEt(val);
            console.log('good');
            i = 3;
          }

          if(val.id == curent_track.id){
            console.log('true');
            i = 2;
          }

          console.log('false');

        });



          // var daId = app.onPlay[0].id;
          // app.onPlay.splice(0,app.onPlay.length);
          // $('#' + daId + '').removeClass('playing');
          // $('#' + daId + '').next().addClass('playing');
          //
          // daNext = $('#' + daId + '').next();

      },

      playOrPause: function (){
      var mytrack = document.getElementById('myTrack');
      var duration = document.getElementById('fullDuration');
      var currentTime = document.getElementById('currentTime');

      var barSize = 250;
      var bar = document.getElementById('defualtBar');
      var progressbar = document.getElementById('progressBar');


      var minutes = parseInt(mytrack.duration/60);
      var seconds = parseInt(mytrack.duration%60);

      bar.addEventListener('click', clickedBar, false);

      duration.innerHTML = minutes + ':' + seconds;



      if(!mytrack.paused && !mytrack.ended){
        mytrack.pause();
        $('.play').css('display', 'inline-block');
        $('.pause').css('display', 'none');
        window.clearInterval(updateTime);
      }
      else {
        mytrack.load();
        mytrack.play();
        $('.play').css('display', 'none');
        $('.pause').css('display', 'inline-block');
        updateTime = setInterval(update, 500);
      }

      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
      }

      function update(){
        if(!mytrack.ended) {
            var playedMinutes = parseInt(mytrack.currentTime/60);
            var playedSeconds =pad(parseInt(mytrack.currentTime%60));
            currentTime.innerHTML = playedMinutes + ':' + playedSeconds;

            var size = parseInt(mytrack.currentTime*barSize/mytrack.duration);
            progressBar.style.width = size + "px";
        }
        else{
          currentTime.innerHTML = "0:00";
          $('.play').css('display', 'inline-block');
          $('.pause').css('display', 'none');
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

      var volumeSlider = document.getElementById('volumeSlider');

      volumeSlider.addEventListener('change', function() {
        console.log('work');
        mytrack.volume = volumeSlider.value / 100;
      });
    },

    shareDis: function (){
      alert('me');
    },

    disLike: function (){
      var daId = app.onPlay[0].id
      $('#' + daId + '').addClass('removing');
      app.onPlay.splice(0,app.onPlay.length);
    }


  }




});


var mytrack = document.getElementById('myTrack');




/* Questions:

- getting jquery to work after bubbles are loaded?
- why is the audio skipper not working?
- going about getting top-100 for different genres?

*/
