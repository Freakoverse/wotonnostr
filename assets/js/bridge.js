document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.querySelector('.boxInsideRange');
    const rangeInputStep = document.querySelector('.boxInsideRangeStep');
    const cardsContainer = document.querySelector('.boxInsideCardsAlt');
    const cards = cardsContainer.querySelectorAll('.boxInsideCardsBox');

    function updateCards() {
        const value = parseInt(rangeInput.value);

        // Remove the active class from all cards inside the cardsContainer
        cards.forEach(card => {
            card.classList.remove('boxInsideCardsBoxActive');
        });

        // If boxInsideRange is 0 or below, activate all cards
        if (value <= 0) {
            cards.forEach(card => {
                card.classList.add('boxInsideCardsBoxActive');
            });
            // Disable the rangeInputStep functionality
            rangeInputStep.disabled = true; // Optionally disable the input
        } else {
            // If boxInsideRange is greater than 0, enable rangeInputStep functionality
            rangeInputStep.disabled = false; // Re-enable the input
            // Update the active cards based on the rangeInputStep value
            const stepValue = parseInt(rangeInputStep.value);
            for (let i = 0; i < stepValue; i++) {
                if (cards[i]) {
                    cards[i].classList.add('boxInsideCardsBoxActive');
                }
            }
        }
    }

    // Initial update
    updateCards();

    // Update cards on input change for boxInsideRange
    rangeInput.addEventListener('input', updateCards);

    // Update cards on input change for boxInsideRangeStep
    rangeInputStep.addEventListener('input', function() {
        if (parseInt(rangeInput.value) > 0) {
            updateCards(); // Only update if boxInsideRange is greater than 0
        }
    });
});
