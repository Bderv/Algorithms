function bubbleSort(arr)
{
    for (var i = 0; i < arr.length-1; i++){ //setting a for loop to get us to view all numbers in the array
        for (var j = 0; j < arr.length-i-1; j++){
            if (arr[j] > arr[j+1])  // checking to see if the number in the array on the left if bigger than the one ajdacent
            {
                var temp = arr[j];
                arr[j] = arr[j+1];  //Swapping positions inside the array
                arr[j+1] = temp;
            }
        }
    }
    return arr
}
console.log(bubbleSort([2,4,1,6,5]))






