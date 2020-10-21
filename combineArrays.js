// Making a merge sort

function combinearrays(arr,arr2){
    temp=[]
    for (i=0,y=0; y<arr2.length, i<arr.length; y++, i++){
        j = i - 1; 
        while (arr[j]>arr[i]){
            temp.pop(arr[j])
        }
        if (arr[i] < arr2[y]){
            temp.push(arr[i])
            temp.push(arr2[y])
        }
        else {
            temp.push(arr2[y])
            temp.push(arr[i])
        }
        console.log(temp)
    }
    return temp
}

function mergeSort(amount){
    for (i=0; i<arr.length; i++){
        (arr.length / 2)
    }
}



bub = [1,2,5,4,3,12,8,17]
aus = [3,2,1,5,4,23,4,18]

//console.log(bub)

// console.log(combinearrays(bub,aus))


