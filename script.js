function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

// JavaScript code to toggle active class on quotes
const quotes = document.querySelectorAll('.quote-slider .quote');
let index = 0;

function showQuote(n) {
  quotes.forEach((quote, i) => {
    quote.classList.remove('active');
    if (i === n) {
      quote.classList.add('active');
    }
  });
}

function nextQuote() {
  index = (index + 1) % quotes.length;
  showQuote(index);
}

function prevQuote() {
  index = (index - 1 + quotes.length) % quotes.length;
  showQuote(index);
}

// Automatically toggle quotes every 5 seconds
setInterval(nextQuote, 5000);

