<?php
ini_set('display_errors', 'On');

require 'vendor/autoload.php';
use Symfony\Component\DomCrawler\Crawler;
use Symfony\Component\CssSelector\CssSelectorConverter;

$client = new GuzzleHttp\Client();
$url = 'http://www.billboard.com/charts/latin-songs';
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



   // print_r($my_data);

function flatten(array $array) {
    $return = array();
    array_walk_recursive($array, function($a) use (&$return) { $return[] = $a; });
    return $return;
}

$new = flatten($my_data);

echo json_encode($new);


?>
