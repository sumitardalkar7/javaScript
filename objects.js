//singleton
// obj literals 
const mysym=Symbol("key1")
 const user1 ={
    name :"sumit",
    clg:"dyp",
    number:3232,
    [mysym] :"keys1",
    age:21,
    isLoggedIn:false,
    email:"sumit@gmail.com"
 }
 console.log(user1.email)
 console.log(user1["age"])
 console.log(user1[mysym])