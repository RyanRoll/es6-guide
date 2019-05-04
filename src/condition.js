console.log('================= condition ==========================')


let var1 = '123'
var1 = '456'


const var2 = 123
// var2 = 456

// value2 is null, emtpy string '', undefined, 0 => falsely
const fn = (value1, value2) => value1 + (value2 || 10)
const fn2 = (value1, value2 = 10) => value1 + value2
console.log(fn(1))
console.log(fn2(1, 0))

const obj = {
  data: 123,
  foo: {
    bar: {
      abc: 1
    }
  }
}
const { foo: { bar: { abc, def = 'def', abc: myABC } } } = obj
console.log('abc', abc, def, myABC)


const data2 = obj.data

const { data } = obj

console.log('data', data)

const abc2 = obj.foo.bar['abc']





