var ourstring = "Welcome to python!"

"!nohtyp ot emocleW"
// need a place to store the new reversed string
// start from end of OG
//insert character into new string, then decrement, and repeat until we get to the first character(inclusive)

function reverseString(stringInput){
    var newstr = "";
    for (var i =stringInput.length -1 ; i>=0; i--){
        newtr += stringInput[i]
    }
    retrun newstr
}
console.log(reverseString(ourstring))