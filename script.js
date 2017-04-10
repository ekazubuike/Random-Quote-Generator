$(document).ready(function() {
  var quote = ""
  $("#getQuote").on("click", function(){    
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json", function(json) {
      quote = "\"" + json.quote + "\" --" + json.author;
      $(".quote").html(quote);
      $("#tweet").attr("href", "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote));
      });     
    });
         });

