// Dsa Map in js

// A map is an unorderd collection of key-value pairs. both keys and values can be of any data type

// to retrive a value, you can use the th ecorresponding key

// Maps are iterables. They can be used with a for of loop



// implement

// map Data Structure
const map = new Map([['a', 1], ['b', 2],['c', 10]])

for(const [key,value] of map){
  console.log(`${key}: ${value}`)
}

// set new key and value in map Dsa
map.set('c', 3)

// check a key has in map dsa
console.log(map.has('a'))

// delate key value in map
map.delete('b')
console.log(map)


// get size of map 
console.log(map.size)


// clear all data in map
map.clear()
console.log(map)