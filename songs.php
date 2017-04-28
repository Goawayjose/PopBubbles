<?php
ini_set('display_errors', 'On');

require 'vendor/autoload.php';
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;

// get the data that got sent over
$genre = $_GET['genre'];



if($genre == 'all'){
    $url = 'http://www.billboard.com/charts/hot-100';
}
elseif ($genre == 'country') {
   $url = 'http://www.billboard.com/charts/country-songs';
}
elseif($genre == 'dance' ){
    $url = 'http://www.billboard.com/charts/dance-electronic-songs';
}
elseif ($genre ==  'hiphop') {
   $url = 'http://www.billboard.com/charts/rap-songs';
}
elseif ($genre ==  'kpop') {
    $url = 'http://www.billboard.com/charts/k-pop-hot-100';
}
elseif ($genre ==  'latin') {
    $url = 'http://www.billboard.com/charts/latin-songs';
}
elseif ($genre ==  'pop') {
    $url = 'http://www.billboard.com/charts/pop-songs';
}
elseif ($genre ==  'rock') {
   $url = 'http://www.billboard.com/charts/rock-songs';
}
elseif ($genre ==  'rb') {
   $url = 'http://www.billboard.com/charts/r-and-b-songs';
}



$client = new GuzzleHttp\Client();
$data = $client->get($url);
$data = $data->getbody(true);
$data = "$data";


$names = [];
$crawler = new Crawler($data);

$my_data = $crawler->filter('.chart-row__song')->each(function (Crawler $node, $i) use($names) {
    $value = $node->text();
    $names[] = $value;
    return $names;
});

function flatten(array $array) {
    $return = array();
    array_walk_recursive($array, function($a) use (&$return) { $return[] = $a; });
    return $return;
}

$new = flatten($my_data);

echo json_encode($new);

?>
