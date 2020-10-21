function stringShortener(str){ //make a new function string shortener that counts the number of times each letter was used int he string gives the output showing so
    var newstr = "" //make an empty string so we can push our single letters into after they have been counted
    for (let i = 0, x = 1; i < str.length; i++){
        if(str[i] == str[i+1]){
            x += 1
        }
        else {
            newstr += str[i] //the same as essentially pushing it
            newstr += x
            x = 1
        }
    }
    return newstr
    }
console.log(stringShortener("aaaabbbbccccccc"))

//encode
//'aaaaaaaaabbbbbbcccccccccceeeefff' => 'a9b6c10e4f3'
//decode 'a9b6c10e4f3' => 'aaaaaaaaabbbbbbcccccccccceeeefff'
//
//parseInt(text, 10);


function decode(str){

    newstr = ''
    numstr = ''

    for (let i = 0; i <str.length; i++){
        if (str[i] < 'a'){
            numstr = numstr + str[i]
            if( str[i+1] < 'a' ){
                numstr = numstr + str[i+1]
            }
            var num = parseInt(numstr, 10)
            console.log('Here is numstring', numstr)
            console.log(num)
            numstr = ''
            for (let j = 0; j < num-1; j++){
                newstr = newstr + str[i-1]
            }
        }
        else {
            newstr = newstr + str[i]
        }    
    }
    return newstr
}

console.log(decode('a9b6a5c10e4f3'))

function decode(str){
    var new_str = ''
    var num = 0
    var temp = ''
    for(let i=0; i<str.length;i++){
        if(str[i] < 'A'){
            num_string = str[i]
            while(str[i+1] < 'A'){
                num_string += str[i+1]
                i++
            }
            num = parseInt(num_string)
            for(let j=0; j<num; j++){
                new_str += temp
            }
        }
        else{
            temp = str[i]
        }
    }
    return new_str
}


console.log(decode('a9b6c10e4f3'))
