// app file


var app = new Vue({
    el: '#vue',

    data: {
     songs : ["mask off", "heartless"],
     tracks : []
    },
    mounted() {

      // var params = {};
      // for (i = 0; i < this.songs.length; i++) {
      // // set the key/property (input element) for your object
      // var ele = this.songs[i];
      // // add the property to the object and set the value
      // return params[ele]
      // }


        //getting those top-100 and searching spotify

          $.ajax({
              url: 'https://api.spotify.com/v1/search',
              data: {
                  q: 'mask off',
                  type: 'track'
              },
              success: function (response) {

                app.tracks = response.tracks.items;
                  console.log(items);

              }
          });

    }

  /*  mounted() {
      //getting top-100
      axios.get('songs.php')
        .then(response => this.songs = response.data)
        .catch(function (error) {
          console.log(error);
        });
        console.log(this.songs);

      //getting those top-100 and searching spotify
     for (i = 0; i < this.songs.length; i++) {
        $.ajax({
            url: 'https://api.spotify.com/v1/search',
            data: {
                q: songs[i],
                type: 'track'
            },
            success: function (response) {
                console.log(response.tracks);
            }
        });
      }


    } */


});
