// input array will be sorted
// keep checking the middle of what you have left
function searchFor (arr, num){
    if (arr[arr.length/2] > num){
        console.log(arr[arr.length*(3/4)])
        console.log("num is less than 50")
        if (arr[arr.length/4] > num){
            console.log("num is less than 25")
        }
        else if (arr[arr.length/4] < num)
        {'but num is greater than 25'}
    }
    if (arr[arr.length/2] < num){
        console.log('num is greater than 50')
        if (arr[arr.length*(3/4)] < num){
            console.log('num is greater than 75')
        }
        else{ console.log('but num is less than 75')}
    } 
}

function searchForNum(arr, num){
    var length = arr.length
    while (true){
        if (length/2 > num){
            length = Math.floor(length/2)
        }
        else if(length/2 < num){
            length = length + Math.floor(length/2)
        }
        else{
            length = Math.floor(length/2)
            console.log(`num is ${length}`)
            return length
        }
    }
}



console.log(searchForNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],92))