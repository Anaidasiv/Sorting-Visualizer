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

// Function to perform Merge Sort and visualize the process
async function mergeSort() {
    const barsContainer = document.getElementById('barsContainer');
    const bars = barsContainer.children;

    await mergeSortHelper(bars, 0, bars.length - 1);
}

// Helper function for Merge Sort
async function mergeSortHelper(bars, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);

        // Recursively sort the first and second halves
        await mergeSortHelper(bars, low, mid);
        await mergeSortHelper(bars, mid + 1, high);

        // Merge the sorted halves
        await merge(bars, low, mid, high);
    }
}

// Helper function to merge two subarrays
async function merge(bars, low, mid, high) {
    const leftSize = mid - low + 1;
    const rightSize = high - mid;

    const leftArray = new Array(leftSize);
    const rightArray = new Array(rightSize);

    // Copy data to temporary arrays leftArray[] and rightArray[]
    for (let i = 0; i < leftSize; i++) {
        leftArray[i] = parseInt(bars[low + i].style.height);
        bars[low + i].style.background = "yellow"; // Highlight the elements being compared
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay
    }

    for (let j = 0; j < rightSize; j++) {
        rightArray[j] = parseInt(bars[mid + 1 + j].style.height);
        bars[mid + 1 + j].style.background = "yellow"; // Highlight the elements being compared
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay
    }

    let i = 0, j = 0, k = low;

    while (i < leftSize && j < rightSize) {
        if (leftArray[i] <= rightArray[j]) {
            bars[k].style.height = `${leftArray[i]}px`;
            i++;
        } else {
            bars[k].style.height = `${rightArray[j]}px`;
            j++;
        }

        // Highlight the bars being swapped
        bars[k].style.background = "green";
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay
        k++;
    }

    // Copy the remaining elements of leftArray[], if there are any
    while (i < leftSize) {
        bars[k].style.height = `${leftArray[i]}px`;
        bars[k].style.background = "green"; // Highlight the bars being swapped
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay
        i++;
        k++;
    }

    // Copy the remaining elements of rightArray[], if there are any
    while (j < rightSize) {
        bars[k].style.height = `${rightArray[j]}px`;
        bars[k].style.background = "green"; // Highlight the bars being swapped
        await new Promise(resolve => setTimeout(resolve, 100)); // Introduce a delay
        j++;
        k++;
    }
}

// Add event listener to the "Merge Sort" button
const mergeSortBtn = document.querySelector('.merge-sort');
mergeSortBtn.addEventListener('click', mergeSort);
