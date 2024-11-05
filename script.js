//your JS code here. If required.
// Select the element with id 'level'
const targetElement = document.getElementById("level");

function findDOMLevel(element) {
    let level = 0;
    let currentElement = element;

    // Traverse up the DOM tree until we reach the root
    while (currentElement) {
        level++;
        currentElement = currentElement.parentElement; // Move to the parent element
    }

    return level;
}

// Find the DOM level of the target element
const domLevel = findDOMLevel(targetElement);

// Display the result in the specified format
alert("The level of the element is: " + domLevel);
