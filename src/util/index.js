export class Util {
  static createCanvasElement() {
    const canvas = document.createElement('canvas');
    return canvas;
  }
  static wrapElement(el, tag = 'div', attrs = {}){
    let wrapper = document.createElement(tag)
    for(let prop in attrs){
      wrapper.setAttribute(prop, attrs[prop])
    }
    wrapper.appendChild(el)
    document.body.appendChild(wrapper)
    return wrapper
  }
  static setStyle(el, options = {}){
    for(let prop in options){
      el.style[prop] = options[prop]
    }
  }
  // element 的 offset距离
  static offset(el){
    let left = 0
    let top = 0
    while(el){
      left += el.offsetLeft
      top += el.offsetTop
      el = el.offsetParent
    }
    return {
      left,
      top
    }
  }
}
