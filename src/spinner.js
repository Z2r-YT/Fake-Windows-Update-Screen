const spinner = document.querySelector('.spinner');

// Load animation characters from file
fetch('src/animation.txt')
  .then(response => response.text())
  .then(text => {
    const characters = text.trim().split('\n');
    let index = 0;

    // Function to update spinner text
    const updateSpinner = () => {
      spinner.textContent = characters[index];
      index = (index + 1) % characters.length; // Loop back to the start if reached the end
    };

    // Initial update
    updateSpinner();

    // Set interval to update text every 200 milliseconds
    setInterval(updateSpinner, 30);
  })
  .catch(error => console.error('Error loading animation:', error));