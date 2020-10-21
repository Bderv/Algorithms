function reverseString(str){ //making a function to reverse the string
    strArray = [str]
    tempStr = " "
for (var i=0; i < str.length; i++){
    if(str[i] != " "){
        tempStr = str[i]
        console.log(tempStr)
        // strArray.push(str[i])
        // console.log(strArray)
    }
}
}
var mystring = "Your in our World now!"
reverseString(mystring)

//1. get passed a string
//2. loop through each character in the string
//3. check for " "
//4. if not " ", push
//5. keep checking in the loop
