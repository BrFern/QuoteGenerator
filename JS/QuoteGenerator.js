let quotes = [
    "Potatoes! Boil 'em, mash 'em, stick 'em in a stew.",
    "It’s the job that’s never started as takes longest to finish.",
    "Not all those who wander are lost.",
    "It is useless to meet revenge with revenge: it will heal nothing.",
    "Great! Where are we going?",
    "In this hour, I do not believe that any darkness will endure.",
    "It is a strange fate that we should suffer so much fear and doubt over so small a thing … such a little thing.",
    "The world is full enough of hurts and mischances without wars to multiply them.",
    "This day does not belong to one but to all. Let us together rebuild this world that we may share in the days of peace.",
    "War will make corpses of us all.",
    "May it be a light to you in dark places, when all other lights go out.",
    "I would rather share one lifetime with you than face all the ages of this world alone.",
    "The wide world is all about you: you can fence yourselves in, but you cannot forever fence it out.",
    "All shall love me and despair!",
    "You may learn something, and whether what you see be fair or evil, that may be profitable, and yet it may not. Seeing is both good and perilous.",
    "All we have to decide is what to do with the time that is given us.",
    "When in doubt, follow your nose.",
    "The old world will burn in the fires of industry. The forests will fall. A new order will rise",
    "Do not be so quick to deal out death and judgment. Even the very wise do not see all ends."
];
document.addEventListener("DOMContentLoaded", function(event) {
    const randomQuote = function() {
      document.querySelector('#QuoteGenerator').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
        
      document.querySelector('body').style.backgroundColor = 'light-blue'
      document.querySelector('#QuoteGenerator').addEventListener('click', (evt) => {
        randomQuote()
      })
      });

      //The stuff here was stuff I amended from the original website to fit mine

      