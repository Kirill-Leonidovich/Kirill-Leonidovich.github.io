import { Element } from './Element.js'


export class Messenger extends Element {
  constructor(options) {
    super()

    this.messengerName = options.messengerName
    this.messengerLink = options.messengerLink
    this.iconClassName = options.iconClassName
    this.parentSelector = options.parentSelector
    this.messangerBody = `
      <span class="messenger-autor__item ${this.messengerName}">
        <a class="messenger-autor__link" href="${this.messengerLink}">
          <i class="${this.iconClassName}"></i>
        </a>
      </span>
      `

    this.renderElement(this.messangerBody, this.parentSelector)
  }


  addHandlerEvent() {
    const $messenger = this.getDomElement(`.${this.messengerName}`, false , this.getDomElement(this.parentSelector))

    $messenger.addEventListener('click', this.goOverMessenger.bind(this))
  }


  goOverMessenger(event) {
    const currentMessengerLink = this.getDomElement('.messenger-autor__link', false, event.currentTarget).href

    window.open(currentMessengerLink)
    
    event.preventDefault()
  }
}