/**
 * clock.js
 * Continuously updates the HTML element with id="clock" with the current time.
 */

function updateClock() {
    // 1. Get the current date and time
    const now = new Date();
    
    // 2. Format the time (e.g., HH:MM:SS)
    // toLocaleTimeString() is a simple way to get localized time.
    // You can customize the options for different formats.
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false // Use 24-hour format
    });

    // 3. Find the clock element
    const clockElement = document.getElementById('clock');
    
    // 4. Update the content if the element exists
    if (clockElement) {
        clockElement.textContent = timeString;
    }
}

// 5. Run the function once immediately to show the time right away
updateClock();

// 6. Set an interval to run the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);
