document.addEventListener("DOMContentLoaded", () => {
    const message = "Welcome to Mental Health Support!";
    const welcomeMessageElement = document.getElementById("welcome-message");
    
    let index = 0;
    let isDeleting = false;

    function typeLetter() {
        if (isDeleting) {
            if (index > 0) {
                welcomeMessageElement.textContent = message.slice(0, index - 1);
                index--;
                setTimeout(typeLetter, 50); // Adjust speed for deleting
            } else {
                isDeleting = false; // Switch to typing mode
                setTimeout(typeLetter, 1000); // Wait before starting to type again
            }
        } else {
            if (index < message.length) {
                welcomeMessageElement.textContent += message[index];
                index++;
                setTimeout(typeLetter, 150); // Adjust speed for typing
            } else {
                isDeleting = true; // Switch to deleting mode
                setTimeout(typeLetter, 1000); // Wait before starting to delete
            }
        }
    }

    typeLetter();
});
const quotes = [
    '"The greatest glory in living lies not in never falling, but in rising every time we fall." – Nelson Mandela',
    '"Happiness is not something ready made. It comes from your own actions." – Dalai Lama',
    '"Life is what happens when you’re busy making other plans." – John Lennon',
    '"Your time is limited, don’t waste it living someone else’s life." – Steve Jobs',
    '"In the end, we will remember not the words of our enemies, but the silence of our friends." – Martin Luther King Jr.',
    '"The only impossible journey is the one you never begin." – Tony Robbins',
    '"Believe you can and you’re halfway there." – Theodore Roosevelt',
    '"Success is not the key to happiness. Happiness is the key to success." – Albert Schweitzer',
    '"It is during our darkest moments that we must focus to see the light." – Aristotle',
    '"Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment." – Buddha'
];

let quoteIndex = 0;
const quoteElement = document.getElementById('quote-text');

function changeQuote() {
    quoteIndex = (quoteIndex + 1) % quotes.length;
    quoteElement.textContent = quotes[quoteIndex];
}

// Change the quote every 10 seconds (10000 milliseconds)
setInterval(changeQuote, 10000);
