export class Util {
  static createCanvasElement() {
    const canvas = document.createElement('canvas');
    return canvas;
  }
  static wrapElement(element, tag = 'div', attrs = {}){
    let wrapper = document.createElement(tag)
    for(let prop in attrs){
      wrapper.setAttribute(prop, attrs[prop])
    }
    wrapper.appendChild(element)
    document.body.appendChild(wrapper)
    return wrapper
  }
  static setStyle(element, options = {}){
    for(let prop in options){
      element.style[prop] = options[prop]
    }
  }
}
