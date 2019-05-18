// commonJS module syntax
// only available in NODEJS

const path = require('path')
const fs = require('fs')

const all = require('./object')
const { myFunction, GiGi } = require('./object')
const { default: GiGi } = require('./object')


exports.abc = '123'
exports.def = 'def'
exports.default = 'gino'

module.exports = {
  abc: '123',
  def: 'def',
  default: 'gino'
}