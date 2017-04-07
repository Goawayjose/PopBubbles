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
          // console.log(app.songs.length);

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

          app.onPlay.push(name);
      }

    }



});


var bubble = $('.bubble');


bubble.click(function() {
  alert('me');
});
