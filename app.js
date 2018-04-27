
var seachTerm = "";
var startDate = "" + "0101";
var endDate = "" + "0101";
var numberOfRecords = 0;

function searchNYTimes(seachTerm) {

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "117bb279ebae41db9ebdf0268997281b",
  'q': searchTerm,
  'begin_date': startDate,
  'end_date': endDate
});
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
$("#submit").on("click", function(){
    searchTerm = $("#searchParam").val().trim();
    startDate = $("#inputStart"+"0101").val().trim();
    endDate = $("#inputEnd"+"0101").val().trim();
    $("#SelectEntityPrimaryName option:selected").val()

});


//create a for loop and limit the number of indexes
//number of articles = set value $(""). 
//response.docs for loop
for (i = 0; i <= 10; i++) {


};
};