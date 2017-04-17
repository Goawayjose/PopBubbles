// app file


var app = new Vue({
    el: '#vue',

    data: {
     songs : [],
     playing : [],
     playStatus : false,
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

                    app.tracks.push(response.tracks.items[0]);
                      // console.log(items);


                  }
              });
          }

        }).catch(function (error) {
          console.log(error);
        });
    },

    methods: {


      all: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'All Genres';
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      hiphop: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Hip Hop';
        axios.get('songsHiphop.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      pop: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Pop';

        axios.get('songsPop.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      dance: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Electronic Dance Music';

        axios.get('songsDance.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      rock: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Rock';

        axios.get('songsRock.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      rb: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Rock';

        axios.get('songsRb.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      country: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'Rock';

        axios.get('songsCountry.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      kpop: function () {
        app.tracks.splice(0);
        app.songs.splice(0);
        var Genre = document.getElementById('GenreOnView');

        Genre.innerHTML = 'K-Pop';

        axios.get('songsKpop.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },
      latin: function () {
        app.tracks.splice(0);
        app.songs.splice(0);

        axios.get('songslatin.php')
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

                      app.tracks.push(response.tracks.items[0]);
                        // console.log(items);


                    }
                });
            }

          }).catch(function (error) {
            console.log(error);
          });
      },

      // Set tracks
      setTrack: function (track) {
        app.playing = track;
        app.playOrPause();
      },

      isActiveTrack: function(track) {
        if( app.playing == track ) {
          return true;
        }
      },

      pause: function (){
        var mytrack = document.getElementById('myTrack');
        mytrack.pause();
        app.playStatus = false;
      },

      play: function (){
        var mytrack = document.getElementById('myTrack');
        mytrack.play();
        app.playStatus = true;
      },

      playOrPause: function (){

      var mytrack = document.getElementById('myTrack');
      var currentTime = document.getElementById('currentTime');

      var barSize = 250;
      var bar = document.getElementById('defualtBar');
      var progressbar = document.getElementById('progressBar');


      updateTime = setInterval(update, 500);

      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
      }

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
          app.playStatus = false;

          progressBar.style.width = "0px";
        }
      }


      mytrack.load();
      mytrack.play();
      app.playStatus = true;
    },


      volumeSlider: function (){
        var mytrack = document.getElementById('myTrack');
        var vSlider = document.getElementById('vSlider');

        mytrack.volume = vSlider.value / 100;

      },


       clickedBar: function(e) {
              if (!mytrack.ended) {
                var mouseX = e.pageX - bar.offsetLeft;
                console.lof(mouseX);
              /*  var newtime = mouseX * mytrack.duration/barSize;

                mytrack.currentTime = newtime;
                progressBar.style.width = mouseX + "px"; */
              }
            },



      /* var barSize = 250;
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
        updateTime = setInteirval(update, 500);
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

      */


    nextTrack: function() {
      var current_key;

      Object.entries(app.tracks).forEach(([key, track]) => {
        if(track.id == app.playing.id){
          current_key = key;
        }
      });
      var new_track = app.tracks[Math.floor(current_key)+1];
      app.playing = new_track;
      app.playOrPause();
    },

    prevTrack: function() {
      var current_key;

      Object.entries(app.tracks).forEach(([key, track]) => {
        if(track.id == app.playing.id){
          current_key = key;
        }
      });
      var new_track = app.tracks[Math.floor(current_key)-1];
      app.playing = new_track;
      app.playOrPause();
    },

    disLike: function (){
      console.log('yeas');
    }


  }




});


var mytrack = document.getElementById('myTrack');
