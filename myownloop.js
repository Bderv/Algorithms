// practice 1: Print Odds 1-20 //
// expected output : 1,3,5,7,9,11,13,15,17,19 //
for(var i=0; i<=20; i++){
if (i % 2 != 0)
console.log(i)
}
// or you can also //
for(var i=0; i<=20; i+2){
    console.log(i)
}


// practice 2: Sum numbers from 1-5, printing out the current number and sum so far each step of the way //
// expected output : Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15 //
sum=0
for(var i=1; i<=5; i++){
    console.log(i)        // inputing 1,2,3,4,5
    sum=i+sum             // adds the former sum of numbers with the current number i.
    console.log(sum)      // inputs the final sum of numbers for each variable of i until the loop is finished.
}

