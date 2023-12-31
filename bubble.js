async function swap(el1, el2) {
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);
    const height1 = style1.getPropertyValue("height");
    const height2 = style2.getPropertyValue("height");

    // Highlight bars during the comparison
    el1.style.background = "red";
    el2.style.background = "red";

    // Introduce a delay to visualize the changes
    await new Promise(resolve => setTimeout(resolve, 200)); // Adjust the delay as needed

    // Swap the heights of the bars
    el1.style.height = height2;
    el2.style.height = height1;

    // Reset background color after the comparison and swap
    el1.style.background = "#007bff"; // Default color
    el2.style.background = "#007bff"; // Default color
}

// Function to perform Bubble Sort and visualize the process
async function bubbleSort() {
    const barsContainer = document.getElementById('barsContainer');
    const bars = barsContainer.children;

    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // Compare and swap if needed
            if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
                await swap(bars[j], bars[j + 1]);
            }
        }
        // Set the background color to green for the bar in its correct position
        bars[n - i - 1].style.background = "green";
    }

    // Set the background color to green for the first bar (smallest) as well
    bars[0].style.background = "green";
}



// Add event listener to the "Bubble Sort" button
const bubbleSortBtn = document.querySelector('.bubble-sort');
bubbleSortBtn.addEventListener('click', bubbleSort);