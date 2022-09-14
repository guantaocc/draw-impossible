/**
 * 所有图形的基类
 */

import EventEmitter from '../events/index.js'

export class Base extends EventEmitter {
  constructor(options){
    super()
    this.visible = true
    this.top = 0
    this.left = 0
    this.width = 0
    this.heigth = 0
    this.initOptions(options)
  }
  initOptions(options){
    for (let prop in options) {
      this[prop] = options[prop];
    }
  }
}