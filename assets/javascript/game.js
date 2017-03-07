$(document).ready(function(){



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var apiKey = "apikey=6389bcb7860f4fc8800665bce1a81bd0"
var q = 'q' + user form input; 
var  startYear = '&' + 'begin_date=' + userinput + '0000';
var endYear = '&' + 'end_date=' + userinput + '0000';

url + q + startYear + endYear + apiKey;


$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);

});








})