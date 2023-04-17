const quotes = [
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    author: "Albert Einstein",
  },
  {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "Without music, life would be a mistake.",
    author: "Friedrich Nietzsche",
  },

  {
    quote: "Go to heaven for the climate and hell for the company.",
    author: "Benjamin Franklin Wade",
  },
  {
    quote: "A day without laughter is a day wasted.",
    author: "Nicolas Chamfort",
  },

  {
    quote:
      "Have you ever noticed how 'What the hell' is always the right decision to make?",
    author: "Terry Johnson",
  },

  {
    quote:
      "We have to dare to be ourselves, however frightening or strange that self may prove to be.",
    author: "May Sarton",
  },
  { quote: "May you live every day of your life.", author: "Jonathan Swift" },

  {
    quote: "Man is the only creature who refuses to be what he is.",
    author: "Albert Camus",
  },
  {
    quote:
      "If a cluttered desk is a sign of a cluttered mind, of what, then, is an empty desk a sign?",
    author: "Laurence J. Peter",
  },
  {
    quote: "There is nothing either good or bad, but thinking makes it so.",
    author: "William Shakespeare",
  },
  {
    quote:
      "Never let your sense of morals prevent you from doing what is right.",
    author: "Isaac Asimov",
  },
  {
    quote: "Without deviation from the norm, progress is not possible.",
    author: "Frank Zappa",
  },
  {
    quote: "Trust yourself. You know more than you think you do.",
    author: "Benjamin Spock",
  },
];

function randomgen() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById(
    "dataFile"
  ).innerHTML = `${randomQuote.quote} - ${randomQuote.author}`;
}

randomgen();
