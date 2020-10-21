// Generate Coin Change
// Change is inevitable (especially when breaking a
// twenty). Make generateCoinChange(cents).
// Accept a number of American cents, compute
// and print how to represent that amount with
// smallest number of coins. Common American
// coins are pennies (1 cent), nickels (5 cents),
// dimes (10 cents), and quarters (25 cents).

// Example output, given (94):
// 94 cents can be represented by:
// quarters: 3
// dimes: 1
// nickels: 1
// pennies: 4


// Second: can you simplify/shorten your code?

// Third: add half-dollar (50 cents) and dollar (100
// cents) coins with 40 additional characters or less. 

function generateCoinChange(n){
    var quarter=0,
        dime=0,
        nickel=0,
        penny=0;
    

    while (n >= 25){ // 3
        n - 25;
        quarter++;
    }
    while (n >= 10){ // 1
        n - 10;
        dime++;
    }
    while (n >= 5){ // 1
        n - 5;
        nickel++;
    }
    while (n >= 1){ // 4
        n - 1;
        penny++;
    }
    return `Quarters: ${quarter}, Dimes: ${dime}, Nickels: ${nickels}, Pennies $(penny)`;
}
generateCoinChange(94);
