// 'Snaps! Crackles! pops!
// keep only the last instance of each character
// it is much easier to loop backwards over the string
// build a new string by checking the string characters if it already exhists in newString

//--uniqueletters(str)
// asdfsdf => a
// newstr only contains letters that occured once in str


function dedupe(str){
    var newstr = ""
    //newstr = newstr + str[str.length-1]
    for (let i = str.length-1; i >= 0; i--){
        let exists = false
        for (let j = 0; j <newstr.length; j++){
            if (str[i] = newstr[j]){
                exists = true
            }
        }
        if (!exists){
        newstr += str[i] //the same as essentially pushing it
        }
    }
    return newstr
}

x = dedupe("Snaps! cracles! pops!")
console.log(x)

function unique(str){

    for (let i =o; i < str.length; i++){
        exists = false
        for (let j = i+1; j < str.length; j++){
            if (str[i] == str[j]){
                exists = true
            }
            
        }
    }

}

y = unique(asdfsdf)
console.log(y)