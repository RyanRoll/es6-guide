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
  myFunction() {

  },
  arrFn: () => 123
}

obj.data
obj['data']
obj[key]

obj.abc = 123

const json = JSON.stringify(obj)
const obj2 = JSON.parse(json)

console.log(json, obj2)

export default GiGi