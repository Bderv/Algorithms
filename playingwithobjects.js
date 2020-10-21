//  Playing with Objects
//  Objectives

//  Practice iterating through an array of objects/dictionaries.
//  Imagine that you are given an array of objects.  For example,

//  var users = [{name: "Michael", age:37}, {name: "John", age:30}, {name: "David", age:27}];
//  How would you print/log John's age?
//  How would you print/log the name of the first object?
//  How would you print/log the name and age of each user using a for loop?  Your output should look something like this
//  Michael - 37
//  John - 30
//  David - 27
var users = [{ "name" : "Michael" , "age" : 37 },
             { "name" : "Jon" , "age" : 30 },
             { "name" : "David" , "age" : 27 }
]
console.log (users)
  console.log(users[1]) // how we get the name Jon and his age.
  console.log(users[1].age) // how we pull up just his age.
  console.log(users[0].name) // pulling the first name which is Michael.
  

  for (var i = 0 ; i < users.length ; i++) {
    console.log(users[i]);                      // brings up the list of users and there age.
}
// console.log(users[0].name)