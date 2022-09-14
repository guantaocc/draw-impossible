import EventEmitter from '../events/index.js'
import { Util } from '../util/index.js'
class Canvas extends EventEmitter {
  constructor(el, options = {}){
    super();
    this.width = 0
    this.height = 0
    this.wrapperEl = null
    this.lowerCanvasEl = null
    this.upperCanvasEl = null

    this.contextTop = null
    this.contextContainer = null
    this.containerClass = 'canvas-container'

    this._offset = {}
    // 所有 画笔对象 数组
    this._objects = []
    // 初始化下层画布 lower-canvas
    this._initStatic(el, options);
    // 初始化上层画布 upper-canvas
    this._initInteractive();
  }
  _initStatic(el, options){
    this._objects = [];
    this._createLowerCanvas(el);
    this._initOptions(options);
  }

  _createLowerCanvas(el) {
    this.lowerCanvasEl = el;
    this.lowerCanvasEl.className = 'lower-canvas'
    this._applyCanvasStyle(this.lowerCanvasEl);
    this.contextContainer = this.lowerCanvasEl.getContext('2d');
  }

  _initOptions(options) {
    for (let prop in options) {
        this[prop] = options[prop];
    }

    this.width = +this.lowerCanvasEl.width || 0;
    this.height = +this.lowerCanvasEl.height || 0;

    this.lowerCanvasEl.style.width = this.width + 'px';
    this.lowerCanvasEl.style.height = this.height + 'px';
  }

  _initInteractive(){
    this._initWrapperElement();
    this._createUpperCanvas();
    this._initEvents();
  }

  _initWrapperElement(){
    this.wrapperEl = Util.wrapElement(this.lowerCanvasEl, 'div', {
      class: this.containerClass
    })
    Util.setStyle(this.wrapperEl, {
      width: this.width + 'px',
      height: this.height + 'px',
      position: 'relative',
    });
  }

  _createUpperCanvas() {
    this.upperCanvasEl = Util.createCanvasElement();
    this.upperCanvasEl.className = 'upper-canvas';
    this.wrapperEl.appendChild(this.upperCanvasEl);
    this._applyCanvasStyle(this.upperCanvasEl);
    this.contextTop = this.upperCanvasEl.getContext('2d');
  }

  _applyCanvasStyle(el) {
    let width = this.width || el.width;
    let height = this.height || el.height;
    Util.setStyle(el, {
        position: 'absolute',
        width: width + 'px',
        height: height + 'px',
        left: 0,
        top: 0,
    });
    el.width = width;
    el.height = height;
  }

  _initEvents(){
    let _this = this
    this.wrapperEl.addEventListener('mousemove', function(e){
      const { clientX, clientY } = e
      _this.emit('mouse:move', {
        left: clientX,
        top: clientY
      })
    })
  }
}

export default Canvas