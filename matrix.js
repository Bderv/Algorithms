// [
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
//     [1,4,77,8,4,4]
// ]

// [   
//     [4,77]
//     [4,77]
// ]

// Matrix Search
bub=[   [12,42,32,56],
    [98,87,76,65],
    [56,67,78,89],
    [54,67,78,21],
]
//checking for 
giang=[
    
    [67,78],
    [43,32]
]

function matrix (arr,arr1){
    counter = 0
    for (i=0; i < arr.length; i++){
        for(j=0; j < arr[i].length; j++){
            for (k=0; k < arr1.length; k++){
                for (l=0; l < arr1[k].length; l++){
                    if (arr[i][j] == arr1[k][l] && arr[i][j+1] == arr1[k][l+1]){
                        counter++
                    }
                    else {
                        counter = 0
                    }
                }
            }
        }
    }
    if (counter == arr1.length){
        return true
    }
    else {
        return false
    }
}
console.log(matrix(bub,giang))

