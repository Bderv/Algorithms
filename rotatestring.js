//using regex
// 'Welcome to the Jungle' rotate('Welcome to the Jungle', 5)
// => 'me to the JungleWelco'

function rotate(str, int){ //function that rotates the first (int) amount of letters to the back of the string
    tempStr = " " //temp string that we create our new string inside of
    for(let i=int; i<str.length; i++){ //
        tempStr+=str[i]
    }
    for(let j=0; j<int; j++){
        tempStr+=str[j]
    }
    return tempStr
}

console.log(rotate('Welcome to the Jungle', 5))

//isRotation('I am Sam', 'Sam I am')=> True isRotation('rotation', 'nope')=>False
//write a function with 2 strings
//check beginning of string 1, and end of str 2 and see if they are the same characters
function rotation_check(str1, str2){
    if(str1.length != str2.length){
        return false
    }
    if(str1 == str2){
        return true
    }
    lenStr1 = str1.length
    for (let i = lenStr1-1; i>0;i--){
        let rotated = rotate(str1, i)
        if(rotated == str2){
            return true
        }
    }
    return false
}

console.log(rotation_check('Your in our world now','our world nowYour in '))