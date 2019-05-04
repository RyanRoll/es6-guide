import _ from 'lodash'

console.clear()

export const myFunction = text => {
  console.log(text)
}

myFunction('Hello World!')


export class GiGi {
  name = 'GiGi'
  sayMyName() {
    console.log(this.name)
  }
}

const gigiMan = new GiGi()

gigiMan.sayMyName()



function fn() {
  const arg1 = arguments[0]
  const arg2 = arguments[1]
  console.log('fn', arg1 + arg2)
}

fn(1, 2)

const fn2 = (...args) => {
  const [, arg2 = 123] = args
  console.log('fn2', args[0] + arg2)
}

fn2(1, 2)


const fn3 = (arg1, arg2) => arg1 + arg2

console.log(fn3(1, 2))

const wtf = (data) => data1 => data2 => { console.log(data, data1, data2) }

wtf(1)(1)(1)


const fn4 = (value) => ({ data: value })
fn4.foo = 'bar'

const arr = [1, 2, 3]
arr.foo = 'bar'

console.log(fn4(123), fn4.foo, arr.foo)


// object

const key = 'myKey'

const obj = {
  data: 'value',
  'attr': 123,
  "prop": 123,
  0: 123,
  1: '123',
  'my-key': 123,
  my_key: 123,
  '1key': 123,
  $key: 123,
  fn: fn,
  theFn: function () {

  },
  // ===== es6
  [key]: 123,
  fn2,
  myFunction: function myFunction() {

  },
  myFunction() {

  },
  arrFn: () => 123
}

obj.data
obj['data']
obj[key]

obj.abc = 123

const json = JSON.stringify(obj)
try {
  const obj2 = JSON.parse(json)
  console.log(json, obj2)
} catch (e) {
  console.error(e)
}


typeof {} === 'object'
typeof [] === 'object'
typeof function () { } === 'function'
typeof (() => { }) === 'function'

Object.prototype.toString.call({}) === '[object Object]'
Object.prototype.toString.call([]) === '[object Array]'
Object.prototype.toString.call(function () { }) === '[object Function]'
Object.prototype.toString.call(() => { }) === '[object Function]'

_.isPlainObject({}) === true
_.isArray([]) === true
_.isFunction([]) === true

export default GiGi



// functional class a.k.a classic class (ES5 Class)

// function myClass(name, age) {
//   this.name = name
//   this.age = age || 30 // if age is undefined, null, '', 0 than age sets to 30
// }

// myClass.prototype = Object.create({
//   value: '123',
//   toString: () => {
//     console.log(this)
//   }
// })

let s1, s2, s3
s1 = s2 = s3 = ''
s2 = '123'
s1 = 'abc'


let o1, o2, o3
o1 = o2 = o3 = { a: 1 }
o2 = { c: 3 }


o1.b = 2 // o1 === o3 




function Base() { }
const baseProto = {
  foo: 'bar',
  abc: 'def',
  number: 0,
  data: {
    name: 'base'
  },
  toString: function () {
    return 'Hello ' + this.data.name
  },
  count: function () {
    ++this.number
  }
}
Base.prototype = baseProto

// ES5 ====================================

const proto = Object.create(baseProto) // ES6 = { ...baseProto }

// console.log(proto.toString())
// console.log(baseProto === proto, baseProto.data === proto.data)

function myClass(name) {
  this.age = 18
  this.data.name = name || this.data.name
  // this.toString = function() {
  //   return 'HiHi ' + this.data.name
  // }
}
myClass.prototype = proto

const myObj1 = new myClass('dog')
myObj1.age === 18
myObj1.color = 'red'
myObj1.data.name === 'dog'

// JSON.stringify only transforms its own properties
console.log('myObj1', myObj1, JSON.stringify(myObj1), myObj1.toString())

// get all properties
for (let key in myObj1) {
  console.log('for-loop', key, myObj1[key])
}

// get own properties only
for (let key in myObj1) {
  if (myObj1.hasOwnProperty(key)) {
    console.log('for-loop', key, myObj1[key])
  }
}

// get own properties as an array
const keys = Object.keys(myObj1)
keys.forEach((key) => {
  console.log('[for-loop by keys]', key, myObj1[key])
})
const values = Object.values(myObj1)
console.log('values', values)


const objAbc = {
  a: 1,
  b: 2,
  c: 3,
}

const objDef = {
  d: 1,
  e: 2,
  f: 3,
  data: {
    name: 'gigi'
  }
}

// clone way 1
let objAbcDef = Object.assign({}, objAbc, objDef)
console.log('objAbcDef', objAbcDef)

// clone way 2
objAbcDef = {}
objAbcDef = {
  ...objAbc,
  ...objDef,
}
console.log('objAbcDef', objAbcDef)
console.log(objAbcDef.data === objDef.data)
// clone deep
objAbcDef = {}
objAbcDef = _.cloneDeep({
  ...objAbc,
  ...objDef,
})
console.log('objAbcDef', objAbcDef)
console.log(objAbcDef.data === objDef.data)