    const rangeInput = document.querySelector('.boxInsideRange');
    const boxes = document.querySelectorAll('.boxInsideCardsBox');

    function updateBoxes(value) {
        // Remove the active class from all boxes
        boxes.forEach(box => box.classList.remove('boxInsideCardsBoxActive'));

        // Calculate the number of active boxes
        const activeCount = Math.min(Math.max(value + 11, 0), 22); // Ensure it's between 0 and 21

        // Add the active class to the appropriate number of boxes
        for (let i = 0; i < activeCount; i++) {
            boxes[i].classList.add('boxInsideCardsBoxActive');
        }
    }

    // Initial update
    updateBoxes(parseInt(rangeInput.value));

    // Update boxes on input change
    rangeInput.addEventListener('input', (event) => {
        updateBoxes(parseInt(event.target.value));
    });