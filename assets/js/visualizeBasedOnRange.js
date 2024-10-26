const rangeInput = document.querySelector('.boxInsideRange');
const boxes = document.querySelectorAll('.boxInsideCards .boxInsideCardsBox'); // Adjusted selector

function updateBoxes(value) {
    // Remove the active class from all boxes
    boxes.forEach(box => box.classList.remove('boxInsideCardsBoxActive'));

    // Calculate the starting index for highlighting
    let startIndex = 5 + value; // 10 is the index of the 11th box

    // Ensure the start index is within bounds
    startIndex = Math.max(0, Math.min(startIndex, boxes.length - 1)); // Clamp between 0 and boxes.length - 1

    // Highlight boxes from startIndex to the end
    for (let i = startIndex; i < boxes.length; i++) {
        boxes[i].classList.add('boxInsideCardsBoxActive');
    }
}

// Initial update
updateBoxes(parseInt(rangeInput.value));

// Update boxes on input change
rangeInput.addEventListener('input', (event) => {
    updateBoxes(parseInt(event.target.value));
});
