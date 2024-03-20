// arrays 
const mtarray= [1,2,3,4,5,6,7,8]
console.log(mtarray[3])
const heroes=["shaktiman " , "hero","shaka laka boom boom"]
heroes.push("mahesh")
heroes.pop() // you dont need to give values it removes the last values in array
heroes.unshift("sumit") // add sumit at the first index of your array 
heroes.shift() // shift the array by 1 and we dont need to pass any para over there

console.log(mtarray.includes(44)) // returns a boolean values if the passing values is present gives true otherwise false
console.log(mtarray.indexOf(3)) // returns the index if not present then rerturn -1
console.log(heroes)

 // const arr= new arr(1,2,3,4,5,6,7,8,9,10)

 const myarr=[1,2,4,5]
 const newarr=myarr.join()
 console.log(myarr)

 console.log(newarr) //change the type of that array 

 const orgarr=[1,2,3,6,6,7,8]
 console.log(orgarr.slice(1,3)) // give a portion of an array 23
 
 console.log(orgarr.splice(1,3)) // 236
 console.log(orgarr) // change the original array [1,6,7,8]


// string arrays 
const hero=["thor","ironman","spidermen"]
const dc_heroes=["supermen","flash","batman"]
//console.log(hero.push(dc_heroes))


 const allheroes =hero.concat(dc_heroes)
console.log(allheroes) //combine
// spread orator

const newarray=[1,23,4,3,[4,54,[43,54,65,77],34,[33,3,[33,43,65,8,9],4,]]]
console.log(newarray.flat(Infinity)) //spread out the array
console.log(Array.isArray("sumit"))
console.log(Array.from("sumit")) //make a array of chars

console.log(Array.from( {name :" sumit"})) //returns a empty array

