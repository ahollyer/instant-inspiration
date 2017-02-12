var randomQuote = [
  {quote: "When life hands you shit, turn it into fertilizer.",
   author: "Unknown"},
  {quote: "Chin up, princess, or the crown slips.",
   author: "Unknown"},
  {quote: "In the midst of winter, I found there was, within me, an invincible summer.",
   author: "Albert Camus"},
  {quote: "Don't let your struggle become your identity.",
   author: "Unknown"},
  {quote: "The choices you make today can improve all your tomorrows.",
   author: "Unknown"},
  {quote: "You don't have to become a monster to face one.",
   author: "Unknown"},
  {quote: "You can't have a million-dollar dream with a minimum-wage work ethic.",
   author: "Unknown"},
  {quote: "Stop wishing for it, and start working for it.",
   author: "Unknown"},
  {quote: "The question isn't who is going to let me. It's who is going to stop me.",
   author: "Ayn Rand"},
  {quote: "If you can't explain it simply, you don't understand it well enough.",
   author: "Albert Einstein"},
  {quote: "Some people develop a wishbone where their backbone should be.",
   author: "Unknown"},
  {quote: "What would you do if you weren't afraid?",
   author: "Spencer Johnson"},
  {quote: "I don't fear the man who has practiced 10,000 different kicks. I fear the man who has practiced one kick 10,000 times.",
   author: "Bruce Lee"},
];

$(document).ready(function () {
  var quotePicker = 0;
  var currentQuote = "Doubt kills more dreams than failure ever will. - Unknown";

  $("#getQuote").on("click", function() {
    quotePicker = Math.floor(Math.random() * randomQuote.length);
    currentQuote = randomQuote[quotePicker].quote + " -" + randomQuote[quotePicker].author;
    $(".quote").html(randomQuote[quotePicker].quote);
    $(".author").html(randomQuote[quotePicker].author);

  })

  $("#twitter-share").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text="+currentQuote)

  $("#fb-publish").on("click", function() {
    FB.ui({
      method: 'feed',
      link: 'http://ahollyer.github.io/instant-inspiration',
      caption: currentQuote,
      }, function(response){});
    });
  })
});
