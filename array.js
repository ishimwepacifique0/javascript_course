const arr =  [23,34,23,12,76,678,89]
// console.log(arr[4]) //output 12

// push () insert new element into array
arr.push(567,768,456,234)
// console.log(arr)

//pop () remove element from array
arr.pop()
// console.log(arr)

// update element in array
arr[3] = 100
console.log(arr)


// index of any element in array indexOf or at
const foundindexofelement = arr.indexOf(768)
// console.log(foundindexofelement)


// shift and unshift elements 
//unshift its like push
arr.unshift(123)
console.log(arr)



// remove element from array beginning of array
arr.shift()
console.log(arr)


// splice and slice elements
// splice add element to array

arr.splice(2,0,2000,2002)
console.log(arr)


// arr.splice(6,1)
// console.log(arr)


// remove element from array with slice

console.log(arr.length)


//convert array to string
const convertintostring = arr.toString()
console.log(convertintostring)

//join 
const convertWithJoin = arr.join(' ')
console.log('====================================');
console.log(convertWithJoin);
console.log('====================================');

