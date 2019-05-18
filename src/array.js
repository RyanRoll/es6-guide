
let array1 = new Array()
array1 = []
array1 = [1, 2, 3]
array1 = [
  [1, 2, 3],
  [4, 5, 6]
]
array1 = [
  { foo: 'bar' },
  { who: 'gino' },
]
array1.length // 30 cm

// tranditional 1
for (let i = 0; i < array1.length; i++) {
  // console.log('each array1', array1[i], i)
}
// tranditional 2 (ES6)
for (let element of array1) {
  // console.log('array1 element', element, i)
  if (element === 0) {
    break
  }
}
// declarative 3 (ES5)
array1.forEach((value, index) => {
  // console.log(value, index)
})

array1 = [1, 2, 3]
let array2 = []

for (let value of array1) {
  array2.push(value + 1)
}
console.log(array2)

array2 = []
array2 = array1.map((value, index) => value + 1) //  => [2, 3, 4]

// falsely => false, undefined, null, 0, ''
// truely => true, 1, {}, [], "1", "0", .... non-falsely value
let array3 = array2.filter(value => value !== 3) // [2, 4]

let total = array3.reduce((result, value) => {
  result += value
  return result
}, 0) // 6

let newTotal = array1.map((value, index) => value + 1)
  .filter(value => value !== 3)
  .reduce((result, value) => {
    result += value
    return result
  }, 0)


array1 = [1, 2, 3]

let found = array1.find(value => value === 2)  // 2

array1.indexOf(2) // 1
array1.indexOf(4) // - 1
array1.includes(2) // true or false

// turely, falsely
let isFound = array1.some(value => value === 2) // isFound = true
let hasNoFalselyValue = array1.every(value => value) // hasNoFalselyValue = true
let shouldAll1 = array1.every(value => value === 1) // shouldAll1 = false

let arrA = [1, 2, 3]
let arrB = [4, 5, 6]
let arrC = arrA.concat(arrB) // [1, 2, 3, 4, 5, 6]
arrC = [
  ...arrA,
  ...arrB,
]
let arrAA = arrA.slice() // [1, 2, 3]
let arrAAA = arrA.slice(0, 2)//  [1, 2]

// delete an element from an array
arrAA.splice(arrA.indexOf(2), 1) // [1, 3]

Array.isArray([]) // true
Array.isArray({}) // false

let setObj = new Set([1, 2, 3])
setObj.add(1) // still {1, 2, 3}
setObj.add(4) // still {1, 2, 3, 4}

let setArray = Array.from(setObj) // [1, 2, 3, 4]

let newArr = new Array(87) // an empty array
newArr.length // = 87
newArr = Array.from(new Array(10)).map((value, index) => index) // get an array [0~9]

let arrayX = ['who', 'gino', 'has', 'only', '3cm']
const prettyString = arrayX.join(' ') // who gino has only 3cm



let arrY = [1, 2, 3]
arrY.pop() // 3, arrY = [1, 2]

let arrYY = [1, 2, 3]
arrY.shift() // 1, arrY = [2, 3]


let str1 = '123'
let str2 = "123"
const name1 = 'who'
const name2 = 'gino'
let str3 = `${name1}-${name2}` // who-gino

str3.includes('gino')
str3.split('') // => ['w', ..., g', 'i', 'n', ....]
str3.split(/\-/) // => ['who', 'gino']
str3.split('-') // => ['who', 'gino']
str3.startsWith('who') // true
str3.endsWith('gino') // true

function fn1() {
  console.log(arguments)
  console.log(Array.from(arguments))
}

let fn2 = (...gigi) => {
  console.log(gigi)
}

fn1.call({ a: 'a' }, 1, 2, 3)
fn1.apply({ a: 'a' }, [1, 2, 3])

fn2 = (number1, number2, ...args) => {
  console.log(args) // [3, 4, 5]
}
fn2(1, 2, 3, 4, 5)


let onChange = (name, value) => {
  console.log(name, value)
}

let onChangeA = onChange.bind(this, 'A')
let onChangeB = onChange.bind(this, 'B')

onChangeA(123)
onChangeB(456)


let fnC = function () {
  console.log(this) // Window
}

let arrowFn = () => {
  console.log(this) // Window
}

class ABC {
  fn = () => {
    console.log(this) // ABC
  }
  fn2() { // fn2 = function() {}
    console.log(this) // ABC
  }
}

const instance = new ABC()
instance.fn()
instance.fn2() // ABC
instance.fn2.apply({}) // this = {}

const theFunction = instance.fn
console.log('theFunction', theFunction())

const theFunction2 = instance.fn2
console.log('theFunction2', theFunction2())

// arguments
// ...args
// length
// name
// call
// apply
// bind
// async + Promise  [6]
// this [6]


// commonjs
// module