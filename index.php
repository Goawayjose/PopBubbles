<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Pop Bubbles</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>



<div id="vue">



  <nav>
    <div class="blur"></div>
    <div class="container">
      <div class="logo"></div>
      <h3>Pop Bubbles</h3>
      <li id="genres">
         <div class="genreDropDown"><span id="GenreOnView">All Genres</span> <span class="glyphicon glyphicon-chevron-down" ></span></div>
          <ul class="drop-menu menu-2">
            <li v-for="genre in genres"><button v-on:click="changeGenre(genre)">{{ genre }}</button></li>
          </ul>
      </li>
    </div>
  </nav>



<div  class="bubbleSpace grid" >
  <div  class="bubble grid-item"
    v-for="track in tracks"
    v-on:click="setTrack(track)"
    v-bind:class="{ playing: isActiveTrack(track) }"
    v-bind:style="{
      height: (track.popularity * 4) + 'px',
      width: (track.popularity * 4) + 'px',
      backgroundImage: 'url(' + track.album.images[0].url+ ')'
     }">
    <div class="innerBubble">
      <div class="backgroundImg">
        <h4>{{ track.name }} <br> {{ track.artists[0].name }}  </h4>
      </div>
    </div>
  </div>
</div>





<footer v-if="playing">
  <div class="blur"></div>
    <audio ref="player" id="myTrack" >
      <source v-if="playing" v-bind:src="playing.preview_url" >
      Your browser does not support the audio element.
    </audio>


    <div class="container" v-if="playing">

      <div class="col-md-4">
          <div class="col-xs-5" v-if="playing.album">
            <img v-bind:src="playing.album.images[0].url"  class="lilAlbum" alt="">
          </div>
          <div class="col-xs-7" v-if="playing">
            {{playing.name}}
            <p v-if="playing.artists.length > 0 " v-for="artist in playing.artists">
              {{artist.name}}
            </p>
            <p v-else>
              {{playing.artist.name}}
            </p>
          </div>
      </div>
      <div class="col-md-8">
        <div class="col-md-6 daCenter">
          <div class="row">
            <i class="fa fa-step-backward mainNav" aria-hidden="prevTrack()" aria-hidden="true"></i>
            <div class="fa" v-if="!playStatus">
              <i class="fa fa-play mainNav play"  v-on:click="play()" aria-hidden="true"></i>
            </div>
            <div class="fa" v-else >
              <i class="fa fa-pause mainNav pause" v-on:click="pause()" aria-hidden="true"></i>
            </div>



            <i class="fa fa-step-forward mainNav" v-on:click="nextTrack()" aria-hidden="true"></i>
          </div>
          <div class="row">

            <div class="musicBar" id="defualtBar" v-on:click="clickedBar()">
              <div id="progressBar"></div>
              <span id="currentTime">0:00</span>
              <span id="fullDuration">0:30</span>
            </div>

          </div>
        </div>
        <div class="col-md-6">
          <div class="row volume">
            <div class="col-xs-1">
              <i class="fa fa-volume-up" aria-hidden="true"></i>
            </div>
            <div class="col-xs-10">
              <input v-on:change="volumeSlider()" id="vSlider" type="range" min="0" max="100" value="100" step="1">
            </div>
          </div>
        </div>
      </div>



    </div>


</footer>
</div>


<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/masonry-layout@4.1.1/dist/masonry.pkgd.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.4/lodash.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.6/vue.js"></script>
<!-- <script src="vue-masonry.js"></script> -->


<script>
/*var VueMasonry = require('vue-masonry.js')

Vue.use(VueMasonry)*/


</script>

<script src="js/animate.js"></script>
<script src="app.js"></script>


</body>
</html>
