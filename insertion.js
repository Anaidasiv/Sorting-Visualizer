// Function to swap two bars and visualize the swap
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

// Function to perform Insertion Sort and visualize the process
async function insertionSort() {
    const barsContainer = document.getElementById('barsContainer');
    const bars = barsContainer.children;

    const n = bars.length;

    for (let i = 1; i < n; i++) {
        const key = parseInt(bars[i].style.height);
        let j = i - 1;

        // Highlight the key bar during the comparison
        bars[i].style.background = "green";

        while (j >= 0 && parseInt(bars[j].style.height) > key) {
            // Compare and swap if needed
            await swap(bars[j], bars[j + 1]);
            j--;

            // Reset the background color of the key bar
            bars[i].style.background = "#007bff"; // Default color
        }

        // Place the key bar in its correct position
        bars[j + 1].style.height = `${key}px`;

        // Reset the background color of the key bar after placement
        bars[i].style.background = "#007bff"; // Default color
    }
}

// Add event listener to the "Insertion Sort" button
const insertionSortBtn = document.querySelector('.insertion-sort');
insertionSortBtn.addEventListener('click', insertionSort);
