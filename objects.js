// var arr = [2,3,4,5]
// //         0 1 2 3
// console.log(arr[1]);


// OBJECTS

// var user1 = { "name" : "Anne" , "age" : 31 }
// console.log( user1["name"])
// console.log (user1.name)

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

// for (var i = 0; i < users.length ; i++){
//     console.log(array_name[i])
// }
