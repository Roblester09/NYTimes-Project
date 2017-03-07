$(document).ready(function(){

var searchInput = $('#searchInput').val();
var startYear = $('#startYear').val();
var endYear = $('#endYear').val();

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "apikey=6389bcb7860f4fc8800665bce1a81bd0"
var q = 'q' + searchInput; 
var  startYear = '&' + 'begin_date=' + startYear + '0000';
var endYear = '&' + 'end_date=' + endYear + '0000';

url + q + startYear + endYear + apiKey;


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

});








})