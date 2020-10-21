//  Predict 1:
function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

"Hello" // upon consol.logging(word) you are taken to the greeting function, it is there that you return the string "Hello"

//  Predict 2: 
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1); 
console.log(result2);

8 // result of console.log(result1), where we added (3,5) and then used the return function to add both together
11 // result of console.log(result2), where we added (4,7) and then used the return function to add both together


//  Predict 3: 
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
Undefined // result of the function highFive never being called.