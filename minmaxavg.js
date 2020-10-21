// 1. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function minmaxavg(arr) {  // declares function name
    var max = arr[0];  // declaring max a variable and setting it to 8
    var min = arr[0];
    var sum = 0;
    var newarr = [];
    for (var i = 0; i < arr.length; i++) // starting the loop, making sure it ends by the end of the array length.
    {   if (arr[i] > max) // this if statement singles out variables that are higher than the previous max
        { max =  arr[i];} // max is now set to the new highest variable  
        if (arr[i] < min)
        { min = arr[i];}
        sum = arr[i] + sum ;   
    }
    var avg = sum / arr.length;
    newarr = [min, max, avg]
    return newarr; // returns the highest variable 
}
var something = minmaxavg([8,6,7,5,3,0,9])
console.log(something)