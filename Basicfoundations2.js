// Basic Foundation II

// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
// my step 1:make a function
// my step 2:have an array linked to the function, make the function move
// my step 3: change all positive numbers in the array to the string "big".
function biggie(arr){
for (i=0; i<arr.length; i++){
    if (arr[i]>0) {
        arr[i]="big"
    }
}
console.log(arr);
return arr;
}
var something = biggie([1,2,3,4,4,-8,3])
console.log(something)


// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
// my step 1: Create a function
// my step 2: have an array linked to the function
// my step 3: find the lowest value in the array and print it
// my step 4: find the highest value in the array and return it.
function PrintlowReturnhigh(arr){
    for (i=0; i<arr.length; i++){
        var min = arr[0];
        var max = arr[0];
        if (arr[i] < min) 
        { min =  arr[i] } 
        
        console.log(min) 
        if (arr[i] > max)
        { max = arr[i]}
        }
        return max;
    }

var something = PrintlowReturnhigh([1,4,2,8,-9,5,4,12])
console.log(something)

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
// my step 1: make a function
// my step 2: link an array of numbers
// my step 3: print the second-to-last value in the array
// my step 4: return the first odd value in the array.
function PrintoneReturnanother(arr){
    for (i=0; i<arr.length; i++){
        if ( i == arr.length-2) {
            console.log(arr[i])
        }
        if (i % 2 != 0){
            var firstodd = arr[i]
        }
    }
    return firstodd;
}
var something = PrintoneReturnanother([10,12,1,4,5,6])
console.log(something)

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.


// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.


// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensandodds(arr){
    for (i = 0; i < arr.length; i++){
        if (i>1){
            if (arr[i] % 2 != 0){
                if (arr[i-1] % 2 != 0){
                console.log("That'odd!");
            }
        }
    }
    else if (arr[i] % 2 == 0){
        if (arr[i-1] % 2 == 0){
            if (arr[i-2] % 2 == 0){
            console.log("EVEN STEVENS")
            }
        }
    }
}
var something = evensandodds([6,5,4,7,2])
console.log(something)





// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.


// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?


// 9. Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.


// 10. Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).


// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].


// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.


// 13.Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
function swap(arr) {
    for(var i=0;i<arr.length/2;i+2){
        var temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
}
console.log(arr)
}
swap([2,4,6,8,10,12]);
 //   0 1 2 3  4  5
console.log(swap);


// 14. Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9}
