var randomQuote = [
  "Not all those who wander are lost.",
  "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
  "From the ashes a fire shall be woken, A light from the shadows shall spring.",
  "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.",
  "A man that flies from fear may find that he has only taken a short cut to meet it.",
  "Never laugh at live dragons, Bilbo you fool!",
  "Faithless is he that says farewell when the road darkens",
  "I don't know half of you half as well as I should like, and I like less than half of you half as well as you deserve.",
  "Seldom give unguarded advice, for advice is a dangerous gift, even from the wise to the wise, and all courses may run ill.",
  "It's the job that's never started as takes longest to finish.",
  "Such is oft the course of deeds that move the wheels of the world: small hands do them because they must, while the eyes of the great are elsewhere.",
  "And though in all lands love is now mingled with grief, it grows perhaps the greater.",
  "I do not love the bright sword for its sharpness, nor the arrow for its swiftness, nor the warrior for his glory. I love only that which they defend.",
  "It is not our part to master all the tides of the world, but to do what is in us for the succor of those years wherein we are set, uprooting the evil the fields that we know, so that those who live after may have clean earth to till. What weather they shall have is not ours to rule.",
  "Deeds will not be less valiant because they are unpraised.",
];

$(document).ready(function () {
  var quotePicker = 0;
  var currentQuote = "Not all those who wander are lost. - J.R.R. Tolkien";

  $("#getQuote").on("click", function() {
    quotePicker = Math.floor(Math.random() * randomQuote.length);
    currentQuote = randomQuote[quotePicker] + " - J.R.R. Tolkien";
    $(".quote").html(randomQuote[quotePicker]);

  })

  $("#twitter-share").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text="+currentQuote)
  })
});
