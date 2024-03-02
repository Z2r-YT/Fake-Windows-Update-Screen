// Function to add percentage to h2 element
function addPercentage() {
    // Select the h2 element with class 'percent'
    const h2 = document.querySelector('h2.percent');

    // Initialize percentage value
    let percentage = 6;

    // Add initial percentage when the page loads
    h2.textContent = h2.textContent.trim() + ' ' + percentage + '%';

    // Update the percentage text every minute
    setInterval(function() {
        // Increment percentage by 1
        percentage++;

        // Update the h2 element with the new percentage
        h2.textContent = h2.textContent.replace(/\d+/, percentage);
    }, 60000); // 60000 milliseconds = 1 minute
}

// Call the function to start adding percentage
addPercentage();
