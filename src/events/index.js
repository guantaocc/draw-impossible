class EventEmitter {
  constructor(){
    this._eventListeners = {}
  }
  on(eventName, handler){
    if(!this._eventListeners){
      this._eventListeners = {}
    }
    if(!this._eventListeners[eventName]){
      this._eventListeners[eventName] = []
    }
    this._eventListeners[eventName].push(handler)
  }
  emit(eventName, options = {}){
    if(!this._eventListeners){
      return this
    }
    let listenersForEvent = this._eventListeners[eventName]
    if(!listenersForEvent){
      return this
    }
    for(let i = 0, len = listenersForEvent.length; i < len; i ++){
      listenersForEvent[i] && listenersForEvent[i].call(this, options)
    }
  }
  off(eventName, handler){
    if(!this._eventListeners){
      return this
    }
    if(arguments.length === 0){
      for(eventName in this._eventListeners){
        // 删除所有
        this._removeEventListener.call(this, eventName)
      }
    }else {
      this._removeEventListener.call(this, eventName, handler);
    }
    return this
  }
  _removeEventListener(eventName, handler){
    if (!this.__eventListeners[eventName]) {
      return;
    }
    let eventListener = this.__eventListeners[eventName];
    if (handler) {
      eventListener[eventListener.indexOf(handler)] = false;
    } else {
      eventListener.fill(false);
    }
  }
}

export default EventEmitter