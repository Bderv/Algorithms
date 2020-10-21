for (let i=0; i<5; i++){

    console.log(i)
console.log(i)

}
let condition = true
while(condition){
    console.log(i)
    i+2
}

let arr = ['asdf',234,{}]
let dict = {'name' : 'bob', 'age' : 78, favs : ['red','reddest']}
console.log(dict['favs'][0])
arr[2].age = 9
console.log(arr[2])
//console.log(dict.name)
//console.log(dict['age'])


let fun = function(stuff){
    console.log(stuff)
    return(stuff + 'changed')
}


// function fun(stuff){
//     console.log(stuff)
// }

fun('welcome to my first param','extra')