function runBinarySearchIteratively(sortedArray, key, low, high) {
    index = Integer.MAX_VALUE;
    while (low <= high) {
        mid = (low + high) / 2;
        if (sortedArray[mid] < key) {
            low = mid + 1;
        } else if (sortedArray[mid] > key) {
            high = mid - 1;
        } else if (sortedArray[mid] == key) {
            index = mid;
            break;
        }
    }
    return index;
}

function runBinarySearchRecursively(sortedArray, key, low, high) {
    middle = (low + high) / 2;
    if (high < low) {
        return -1;
    }
    if (key == sortedArray[middle]) {
        return middle;
    } else if (key < sortedArray[middle]) {
        return runBinarySearchRecursively(
            sortedArray, key, low, middle - 1);
    } else {
        return runBinarySearchRecursively(
            sortedArray, key, middle + 1, high);
    }
}