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

// Function to perform Selection Sort and visualize the process
async function selectionSort() {
    const barsContainer = document.getElementById('barsContainer');
    const bars = barsContainer.children;
    const n = bars.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            // Highlight bars during the comparison
            bars[minIndex].style.background = "yellow";
            bars[j].style.background = "yellow";
            await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay

            const barHeightMin = parseInt(bars[minIndex].style.height);
            const barHeightJ = parseInt(bars[j].style.height);

            // Compare heights and update minIndex
            if (barHeightJ < barHeightMin) {
                minIndex = j;
            }

            // Reset background color after the comparison
            bars[minIndex].style.background = "#007bff"; // Default color
            bars[j].style.background = "#007bff"; // Default color
        }

        // Swap the minimum element with the first unsorted element
        await swap(bars[minIndex], bars[i]);
    }
}

// Add event listener to the "Selection Sort" button
const selectionSortBtn = document.querySelector('.selection-sort');
selectionSortBtn.addEventListener('click', selectionSort);
