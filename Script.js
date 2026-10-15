// Get display element and initialize current input 
let display = document.getElementById('display'); 
 
// this variable will update the display 
let current = ''; 
 
// Handles button presses 
function press(value) { 
 
    // Reset if display is zero, error, or empty 
    if (display.innerText === '0' || display.innerText === 'Error' 
|| display.innerText === '') { 
        current = ''; 
    } 
    // If 'x' is pressed, remove last character 
    if (value == 'x') { 
        current = current.slice(0, current.length - 1) 
    } 
    // Otherwise, append value 
    else { 
        current += value; 
    } 
    // Update display 
    display.innerText = current == '' ? '0' : current; 
} 
 
// Calculates the result 
// eval function takes a mathematical expression and returns the 
answer 
function calculate() { 
    try { 
        current = eval(current).toString(); 
        display.innerText = current; 
    } catch { 
        display.innerText = 'Error'; 
        current = ''; 
    } 
}
// Clears the display 
function clearDisplay() { 
    current = ''; 
    display.innerText = '0'; 
}
