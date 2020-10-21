//Using the given array:

var testArr = [6,3,5,1,2,4]
for (var i = 0; i<arr.length; i++){
    console.log(i);             // prints the index       
    console.log(testArr[i]);   // showing the array starting at 0 and ending on the 6th number.
}


// Print Values and Sum


var arr = [6,3,5,1,2,4]
sum=0
for(var i=0; i<=arr.length; i++){
    console.log(arr[i])        // inputing 6,3,5,1,2,4
    sum=arr[i]+sum             // adds the former sum of numbers with the current number i.
    console.log(sum)      // inputs the final sum of numbers for each variable of i until the loop is finished.
}
// Print each array value and the sum so far
// The expected output will be: 
// Num 6, Sum 6
// Num 3, Sum 9
// Num 5, Sum 14
// Num 1, Sum 15
// Num 2, Sum 17
// Num 4, Sum 21
// Value * Position

// Multiply each value in the array by its array position

var arr = [6,3,5,1,2,4]
sum=0
for(var i=0; i<=arr.length; i++){
    sum=arr[i]*i             // multiplies the input by its position in the array.
    console.log(sum)      // inputs the final sum of numbers for each variable of i until the loop is finished.
}

// The expected output will be:
// [0,3,10,3,8,20]