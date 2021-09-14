export class Element {
  renderElement(body, parent) {
    this.getDomElement(parent).insertAdjacentHTML('afterbegin', body)
    this.addHandlerEvent()
  }


  addHandlerEvent() {
    return
  }


  getDomElement(selector, all, parent = document) {
    return typeof selector === 'string'
      ? all ?  parent.querySelectorAll(selector) :  parent.querySelector(selector) 
      : selector
  }


  doClassList (selector, classNames, type) {
    const $el = this.getDomElement(selector)
    const arrNames = classNames.split(' ')
  
    for (const name of arrNames) {
      if (type === 'remove') {
        $el.classList.remove(name)
      } else if (type === 'toggle') {
        $el.classList.toggle(name)
      } else if (type === 'add') {
        $el.classList.add(name)
      } else if (type === 'contains') {
        return $el.classList.contains(name)
      } else {
        throw new Error(`element.classList.${type} is not a function`)
      }
    }
  }
}