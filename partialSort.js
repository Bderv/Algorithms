// partial sort
function PartialSort(arr){
    for (var i = 0; i<arr.length;i++){
        pointer=arr[Math.floor(arr.length/2)]
        console.log(pointer)
        if (pointer > arr[i]){
            console.log(pointer)
        }
        else {
            arr[i] = arr[Math.floor(arr.length/2)+1] // swaps the value in the array
            console.log(pointer)
        }
    }
    return arr
}

arr = [1,32,4,3,6,5,12,4,2]
console.log(PartialSort(arr))