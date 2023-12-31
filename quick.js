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

// Function to perform Quick Sort and visualize the process
async function quickSort() {
    const barsContainer = document.getElementById('barsContainer');
    const bars = barsContainer.children;

    await quickSortHelper(bars, 0, bars.length - 1);
}

// Helper function for Quick Sort
async function quickSortHelper(bars, low, high) {
    if (low < high) {
        const pivotIndex = await partition(bars, low, high);

        // Recursively sort the elements before and after the pivot
        await quickSortHelper(bars, low, pivotIndex - 1);
        await quickSortHelper(bars, pivotIndex + 1, high);
    }
}

// Helper function to choose a pivot and partition the array
async function partition(bars, low, high) {
    const pivot = parseInt(bars[high].style.height);
    let i = low - 1;

    for (let j = low; j < high; j++) {
        // Highlight the pivot and elements being compared
        bars[high].style.background = "yellow";
        bars[j].style.background = "yellow";
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay

        const currentBar = parseInt(bars[j].style.height);
        if (currentBar < pivot) {
            i++;
            await swap(bars[i], bars[j]);
        }

        // Reset the background color after the comparison
        bars[high].style.background = "#007bff"; // Default color
        bars[j].style.background = "#007bff"; // Default color
    }

    // Swap the pivot element with the element at (i + 1)
    await swap(bars[i + 1], bars[high]);

    // Reset the background color after the swap
    bars[high].style.background = "#007bff"; // Default color
    bars[i + 1].style.background = "green"; // Highlight the pivot after placement

    return i + 1;
}

// Add event listener to the "Quick Sort" button
const quickSortBtn = document.querySelector('.quick-sort');
quickSortBtn.addEventListener('click', quickSort);
