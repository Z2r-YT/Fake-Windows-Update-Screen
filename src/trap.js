// Function to disable keys
function disableKeys(e) {
    // Check for Ctrl+Shift+I, Ctrl+Shift+C, F11, and F12
    if ((e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'C' || e.key === 'c')) ||
        e.key === 'F12') {
        e.preventDefault();
        return false;
    }
}

// Event listener for keydown event
document.addEventListener('keydown', disableKeys);