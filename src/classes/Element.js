export class Element {
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


// export const getDomElement = (selector, all, parent = document) => {
//   return typeof selector === 'string'
//     ? all ?  parent.querySelectorAll(selector) :  parent.querySelector(selector) 
//     : selector
// }


// export const doClassList = (selector, classNames, type) => {
//   const $el = getDomElement(selector)
//   const arrNames = classNames.split(' ')

//   for (const name of arrNames) {
//     if (type === 'remove') {
//       $el.classList.remove(name)
//     } else if (type === 'toggle') {
//       $el.classList.toggle(name)
//     } else if (type === 'add') {
//       $el.classList.add(name)
//     } else if (type === 'contains') {
//       return $el.classList.contains(name)
//     } else {
//       throw new Error(`element.classList.${type} is not a function`)
//     }
//   }
// }


// export const joinMessage = (message) => message.split(' ').join('').toLowerCase()




// export const getDomElement = (selector, all) => {
//   if (typeof selector !== 'string') return selector

//   if (all) return document.querySelectorAll(selector)

//   return document.querySelector(selector)
// }


// export const createElement = (selector, value, position = 'beforeend') => {
//   const $element = getDomElement(selector)

//   return $element.insertAdjacentHTML(position, value)
// }


// export const removeModalElement = (selector, deleteClass, delay = 300) => {
//   const $element = getDomElement(selector)

//   if (!$element) return

//   doClassList($element, 'remove', deleteClass)

//   setTimeout(() => getDomElement(selector).remove(), delay)
// }



// export const isClassNameContains = (selector, className) => {
//   const $element = getDomElement(selector)

//   return $element?.classList?.contains(className)
// }



// export const getCorrectTextContent = (selector) => {
//   const $element = getDomElement(selector)

//   return $element?.textContent.trim()
// }


// export const changeValue = (selector, massage, className = '_hide') => {
//   const $element = getDomElement(selector)

//   doClassList($element, 'add', className)
//   setTimeout(() => $element.textContent = massage, 300)
//   setTimeout(() => doClassList($element, 'remove', className), 300)
// }


// export const getRoundToHundredths = (num) => Math.round(parseFloat(num) * 100) / 100