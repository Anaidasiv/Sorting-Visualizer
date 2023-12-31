// JS file

// Function to generate random integers between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create bars
async function createBars() {
    const barsContainer = document.getElementById('barsContainer');
    barsContainer.innerHTML = '';

    try {
        const barsArray = [];

        for (let i = 0; i < 100; i++) {
            const randomHeight = getRandomInt(10, 100);
            barsArray.push(randomHeight);

            const bar = document.createElement('div');
            bar.className = 'bar';
            bar.style.height = `${randomHeight}px`;
            barsContainer.appendChild(bar);
        }

        // Simulate an asynchronous operation (you can replace this with actual async code)
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Continue with synchronous code after the asynchronous operation
        console.log('Bars created successfully!');
    } catch (error) {
        console.error('Error creating bars:', error);
    }
}


// Call the function to create bars when the page loads
document.addEventListener('DOMContentLoaded', createBars);

// Add event listener to the "Generate New Array" button
const newArrayBtn = document.getElementById('newArrayBtn');
newArrayBtn.addEventListener('click', createBars);
