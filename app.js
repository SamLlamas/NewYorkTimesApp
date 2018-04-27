var seachTerm = "";
var startDate = "" + "0101";
var endDate = "" + "0101";
var limit = 0;

$("input[name=numbers]").focusout(function(){
  limit = $(this).val();
});




$("#searchButton").on("click", function (event) {
  
  event.preventDefault();
  console.log("clicked");
  searchTerm = $("#inputTerm").val().trim();
  startDate = $("#inputStart").val().trim() + "0101";
  endDate = $("#inputEnd").val().trim() + "0101";
  


  //datalistObject.options

  console.log("searchTerm: " + searchTerm);
  console.log("startDate: " + startDate);
  console.log("endDate: " + endDate);
  console.log("limit: " + limit);


  

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
   // $("#articlesContainer").append("<p>" + result.response.docs[0].headline.main + "</p>");
    // $("#articlesContainer").append("<p>" + result.response.docs[0].byline.original + "</p>");

    for (var i = 0; i < limit; i++) {
      $("#articlesContainer").append(
        "<div class='resultBox'>" + "<h3>" + "<p>" + result.response.docs[i].headline.main + "</p>" + "</h3>" + "<p>" + "<h4>" + result.response.docs[i].byline.original + "</h4>" + "</p>" + "</div>");
      
    
      console.log(result.response.docs[i].byline.original);

    }
});
});