document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.querySelector('.boxInsideRangeStep');
    const cardsContainer = document.querySelector('.boxInsideCardsAlt');
    const cards = cardsContainer.querySelectorAll('.boxInsideCardsBox');

    rangeInput.addEventListener('input', function() {
        const value = parseInt(rangeInput.value);

        // Remove the active class from all cards inside the cardsContainer
        cards.forEach(card => {
            card.classList.remove('boxInsideCardsBoxActive');
        });

        // Add the active class to the number of cards corresponding to the range value
        for (let i = 0; i < value; i++) {
            if (cards[i]) {
                cards[i].classList.add('boxInsideCardsBoxActive');
            }
        }
    });
});
