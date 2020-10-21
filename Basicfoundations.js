
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function createArray(num) {        
    var newArray = [];        
    for (var i = 0; i <= num; i++) {                
        newArray.push(i);        
    }        
    return newArray;        // added the return statement
}
var y = createArray(255);        // now y is the variable that is calling on createArray
console.log(y) // calls upon the function y and starts our array.


// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
sum=0
for(var i=0; i<=1000; i++){
    if (i % 2 == 0)   // if variable i is modulus 2 then you can..
    sum=i+sum             // adds the former sum of numbers with the current number i.
    console.log(sum)      // inputs the final sum of numbers for each variable of i until the loop is finished.
}
 250500 // is the sum of all odd numbers 


 // 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
sum=0
for(var i=0; i<=5000; i++){
    if (i % 2 != 0)   // if variable i is NOT modulus 2 then you can..
    sum=i+sum             // adds the former sum of numbers with the current number i.
    console.log(sum)      // inputs the final sum of numbers for each variable of i until the loop is finished.
}
  6250000 //  is the sum of all odd numbers 


  // 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function total(arr){  // defines our function
    sum = 0;  // defines variable sum before for statement
    for(var i = 0; i < arr.length; i++){    // defining variable i, causing the loop to last only as long as the array length, add in increments of 1.
    sum = arr[i] + sum   }          // adds the former sum of numbers with the current number i.
    return sum;     // spits out the final sum of numbers added together.
}
var something = total([8,6,7,5,3,0,9]); // inputs our array
console.log(something) // gets the function to activate.
 38 // is the last variable 


// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function LargestNumber(arr) {  // declares function name
    var max = arr[0];  // declaring max a variable and setting it to 8
    for (var i = 0; i < arr.length; i++) // starting the loop, making sure it ends by the end of the array length.
    {   if (arr[i] > max) // this if statement singles out variables that are higher than the previous max
    { max =  arr[i] } // max is now set to the new highest variable  
    }
    console.log(max) // allows us to see the variables
    return max; // returns the highest variable 
}
var something = LargestNumber([8,6,7,5,3,0,9]) // declares variable something as the filler for the array
console.log(something)   // gets the function to activate
 9 // is the highest variable
// you can also solve this array with the following...
var array = [390,-5,-15,-370,5,145]

var forLoopMinMax = () => {
    let min = array[0], max = array[0]
    for (let i = 1; i < array.length; i++) {
    let value = array[i]
    min = (value < min) ? value : min
    max = (value > max) ? value : max
}
return [min, max]
}

var [forLoopMin, forLoopMax] = forLoopMinMax()
console.log(`Minimum: ${forLoopMin}, Maximum: ${forLoopMax}`) // Minimum: -370, Maximum: 390

var minUsingReduce = () => array.reduce((min, currentValue) => Math.min(min, currentValue), array[0])
var maxUsingReduce = () => array.reduce((max, currentValue) => Math.max(max, currentValue), array[0])
console.log(`Minimum: ${minUsingReduce()}, Maximum: ${maxUsingReduce()}`) //


// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findavg(arr) {
    var sum = 0;

    for(var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    var avg = sum / arr.length;

    console.log(avg);
    return avg
    }
    var something = findavg([1,4,5,-8])
    console.log(something);



// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function pusharray(arr, arr2)
for(var i=0; i<=50; i++){
    if (i % 2 != 0){
    console.log(i);
    arr.push.apply(arr, arr2); 
    }
} 
console.log(pusharray)



// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function biggerthan(value) { // defines the function
    return function(element, index, array) { // defines the values in the return function
      return (element >= value); // shows elements greater than or equal to the value input.
    }
}
  var filtered = [18, 3, 7, 120, 93].filter(biggerthan(10)); // gives us the array and value of our biggerthan statement
  console.log(filtered) // starts the function





// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
   function sortSquares(arr)     // Function to sort an square array 
{ 
        var n = arr.length; 
        for (var i = 0 ; i < n ; i++){  // First convert each array elements  
          if (arr[i] != 0) {
            arr[i] = arr[i] * arr[i]; 
          }
        } // into its square
     //  Arrays.sort(arr); // Sort an array using "inbuild sort function" 
           console.log(arr)              // in Arrays class. 
} 
var squared = [1,27,3,46,15]
console.log(squared)




// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function Negative(arr) {
    for(var i=0; i<=arr.length; i++){
        if (arr[i]<0){
        arr[i] = 0;
        }
    }
    console.log(arr); //0
}
var something = Negative([8,-4,-9,3,5])
console.log(something)






// 11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
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





// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapValue(arr) {
    //              5 - 1 = 4
    //              so, arr[4]
    var temp = arr[arr.length-1];
    arr[arr.length -1] = arr[0];
    arr[0] = temp;
    return arr;
}

swapValue([1, 2, 3, 4, 5])
//         0  1  2  3  4



// 14. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function Negative(arr) {
    for(var i=0; i<=arr.length; i++){
        if (arr[i]<0){
        arr[i] = 'Dojo';
        }
    }
    console.log(arr); //0
    return arr
}
var something = Negative([8,-4,-9,3,5])
console.log(something)