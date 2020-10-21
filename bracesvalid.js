function baracesvalid(x){
    y=x.length-1
    console.log(x,y)
    for(i=0; i<x.length-1; i++){
        if ((x[i] == "(" && x[y] != ")") || (x[i] == "{" && x[y] != "}") || (x[i] == "[" && x[y] != "]")){
            return false
    }
    else{
        console.log(i,y)
        y--
    }
    }
    return true 
}
str="{{({[})}}"
console.log(str[0],str["length"])
console.log(str[1],str[2])
console.log(baracesvalid(str))