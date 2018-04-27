
var seachTerm = "";
var startDate = "" + "0101";
var endDate = "" + "0101";
var numberOfRecords = 0;
var limit = 10;



$("#searchButton").on("click", function (event) {
  event.preventDefault();
  console.log("clicked");
  searchTerm = $("#inputTerm").val().trim();
  startDate = $("#inputStart").val().trim() + "0101";
  endDate = $("#inputEnd").val().trim() + "0101";
  console.log("limit: " + limit);
  limit = $("#numbers").val().trim();


  console.log("searchTerm: " + searchTerm);
  console.log("startDate: " + startDate);
  console.log("endDate: " + endDate);
  console.log("limit: " + limit);


  $("#SelectEntityPrimaryName option:selected").val()

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
  }).done(function (result) {
    console.log(result);
    //$("#articlesContainer").append("<p>" + result.response.docs[0].byline.original + "</p>");

    for (var i = 0; i < limit; i++) {
      $("#articlesContainer").append("<p>" + result.response.docs[i].byline.original + "</p>");
      console.log(result.response.docs[i].byline.original);

    }







  }).fail(function (err) {
    throw err;
  });
});

var numberOfRecords = $("#inputNum").val();

  //create a for loop and limit the number of indexes
  //number of articles = set value $(""). 
  //response.docs for loop
  // for (i = 0; i <= numberOfRecords; i++) {


  // };
