// JS file

// Function to generate random integers between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the speed value
function getSpeed() {
    const speedInput = document.getElementById('speed');
    return speedInput.value;
}

// Function to add a delay
async function delay() {
    const speed = getSpeed();
    return new Promise(resolve => setTimeout(resolve, 100 - speed));
}

// Function to create bars
async function createBars() {
    const barsContainer = document.getElementById('barsContainer');
    barsContainer.innerHTML = ''; // Clear previous bars

    const arrSize = document.querySelector("#arr_sz").value;
    const barsArray = [];

    // Generate an array of random integers based on the number of bars
    for (let i = 0; i < arrSize; i++) {
        const randomHeight = getRandomInt(10, 100); // Adjust the range as needed
        barsArray.push(randomHeight);

        const bar = document.createElement('div');
        bar.className = 'bar';
        bar.style.height = `${randomHeight}px`;
        barsContainer.appendChild(bar);

        // Add a delay after each bar creation
        await delay();
    }

    return barsArray;
}

// Call the function to create bars when the page loads
document.addEventListener('DOMContentLoaded', createBars);

// Add event listener to the "Generate New Array" button
const newArrayBtn = document.getElementById('newArrayBtn');
newArrayBtn.addEventListener('click', createBars);

// Add event listener to the number of bars input
const arrSizeInput = document.getElementById('arr_sz');
arrSizeInput.addEventListener('input', createBars);

// Add event listener to the speed input
const speedInput = document.getElementById('speed');
speedInput.addEventListener('input', () => {
    // Log the speed value to verify it's changing
    console.log('Speed:', getSpeed());
});
