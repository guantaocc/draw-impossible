/**
 * 画笔类
 */

import { Base } from './Base.js'

// 线画笔

export class LinePoint extends Base  {
  constructor(options = {}) {
    super()
    // 默认线条
    this.lineWidth = 5
    this.color = '#f45678'

    this.startPoint = {
      x: 0,
      y: 0
    }

    this.endPoint = {
      x: 0,
      y: 0
    }
    // 线条位置

    this.initOptions(options)
  }
  initOptions(options){
    for (let prop in options) {
      this[prop] = options[prop];
    }
  }
  setStartPoint(point){
    this.startPoint = point
  }
  render(ctx, endPoint){
     // 画线
    this.endPoint = endPoint
    let { x, y } = this.endPoint
    let { x: startX, y: startY } = this.startPoint
    ctx.save()
    ctx.beginPath()
    ctx.lineWidth = this.lineWidth
    ctx.strokeStyle = this.color
    ctx.fillStyle = this.color
    ctx.moveTo(startX, startY)
    ctx.lineTo(x, y)
    ctx.stroke()
    ctx.restore()
  }
}