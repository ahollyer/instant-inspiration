var randomQuote = [
  {quote: "Violence is the last refuge of the incompetent.",
   author: "Isaac Asimov"},
  {quote: "You don't have to burn books to destroy a culture. Just get people to stop reading.",
   author: "Ray Bradbury"},
  {quote: "If you think this universe is bad, you should see some of the others.",
   author: "Philip K. Dick"},
  {quote: "Women and cats will do as they please, and men and dogs should relax and get used to the idea.",
   author: "Robert A. Heinlein"},
  {quote: "You have attributed conditions to villainy that simply result from stupidity.",
   author: "Robert A. Heinlein"},
  {quote: "Absolute power does not corrupt absolutely, absolute power attracts the corruptible.",
   author: "Frank Herbert"},
  {quote: "If you want me to treat your ideas with more respect, get some better ideas.",
   author: "John Scalzi"},
  {quote: "Science, my lad, is made up of mistakes, but they are mistakes which it is useful to make, because they lead little by little to the truth.",
   author: "Jules Verne"},
  {quote: "We are what we pretend to be, so we must be careful about what we pretend to be.",
   author: "Kurt Vonnegut"},
  {quote: "Looking at these stars suddenly dwarfed my own troubles and all the gravities of terrestrial life.",
   author: "H.G. Wells"},
  {quote: "The needs of the many outweigh the needs of the few.",
   author: "Spock (Star Trek)"},
  {quote: "If we're going to be damned, let's be damned for what we really are.",
   author: "Jean Luc Picard (Star Trek)"},
  {quote: "Under capitalism, man exploits man. Under communism, it is the reverse.",
   author: "Gregory Benford"},
  {quote: "There are times when the world is rearranging itself, and at times like that, the right words can change the world.",
    author: "Orson Scott Card"}
];

$(document).ready(function () {
  var quotePicker = 0;
  var currentQuote = "Seek freedom and become captive of your desires. Seek discipline and find your liberty. - Frank Herbert";

  $("#getQuote").on("click", function() {
    quotePicker = Math.floor(Math.random() * randomQuote.length);
    currentQuote = randomQuote[quotePicker].quote + " -" + randomQuote[quotePicker].author;
    $(".quote").html(randomQuote[quotePicker].quote);
    $(".author").html(randomQuote[quotePicker].author);

  })

  $("#twitter-share").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text="+currentQuote)
  })
});
