// Balance Point - True or False
// Balance Index - An index where they are equal

// Iterate the array from left to right and right to left at the same time

// function balancePoints(arr){
//     var i = 1
//     var j = arr.length - 2
//     let sum1 = arr[0]
//     let sum2 = arr[arr.length -1]
//     while(true){
//         if (sum1 < sum2){
//             sum1 += arr[i]
//             i++
//             console.log(sum1)
//         }
//         if (sum2 < sum1){
//             sum2 += arr[j]
//             j--
//             console.log(sum2)
//         }
//         if (i == j && sum1 != sum2){
//             return false
//         }
//         else {
//             return true
//         }
        
//     }
// }

// console.log(balancePoints([8,3,4,4,15]))

function bp(arr){
    //iterate from front and back
        //i, j stop iterating when i = j-1
        //iterate and add value
    // sum up values from front and back
    // compare the sums

    let i = 0
    let j = arr.length-1
    if (j == -1){
        return true
    }
    let sumi = arr[i]
    let sumj = arr[j]
    while(i != j-1){
        if(sumi < sumj){
            i++
            sumi += arr[i]
        }
        else{
            j--
            sumj += arr[j]
        }
    }
    console.log(sumi, i,j)
    return (sumi == sumj)
}

console.log(bp([1,8,1,10]))