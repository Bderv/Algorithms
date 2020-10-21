// combine 2 sorted arrays in an array containing the SORTED MULTISET INTERSECTION of the 2.
// [1,2,2,2,7]
// [2,2,6,6,7]
// answer: [2,2,7]

// MULTISET
    //a collection with more than one of each value
// MULTI
    // more than one of each
// SET 
    // complete COLLECTION that doesnt contain duplicates
    // COLLECTION is an object thats iterable
        // iterable means we can access values in some order

//INTERSECTION
    //road 1 and road 2
    //....%%....//
    //----%%----//
    //make a function that takes in 2 arrays
    //make a for loop to go through the array
    //check both arrays to see if they have matching values
    //if both arrays contain same value, move that value from the array and put it into a new array
    // continue down the array and check for other matching values
    // once done, exit the for loop and our new array should have all the matching values.


    function Multiset(arr, arr2){ 
        temp = []
        index = 0
        for (i=0;i<arr.length;i++){ 
            for (j=index;j<arr.length;j++){

            if (arr[i] == arr2[j]){
                console.log(arr[i])
                temp += arr[i]
                index =  j+1
            }
        }
            
        }
        return temp
    }

    arrayA = [1,1,2,4]
    arrayB = [0,1,4,6]
    // answer = [1,4]

    console.log(Multiset(arrayA,arrayB))