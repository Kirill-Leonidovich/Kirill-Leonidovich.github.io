import { Element } from './Element.js'


export class Modal extends Element {
  constructor(options) {
    super()

    this.projectName = options.projectName
    this.projectNameWithoutType = options.projectNameWithoutType
    this.projectDescription = options.projectDescription
    this.parentSelector = options.parentSelector
    this.modalBody = `
      <div class="projects__modal modal _hide">
        <span class="modal__close"></span>
        <div class="modal__body">
          <div class="modal__header">
            <h5 class="modal__name">
              ${this.projectNameWithoutType}
            </h5>
            <h4 class="modal__description">
              ${this.projectDescription}
            </h4>
          </div>
            <div class="modal__qrcode">
              <img class="modal__img_qrcode _img _cover" src="src/img/projects/${this.projectNameWithoutType}/QR.png" alt="qrcode">
            </div>
            <div class="modal__buttons">
              <a class="modal__link _link-go-to-github" href="https://github.com/kirill-leonidovich/${this.projectName}">
                github
              </a>
              <a class="modal__link _link-see-this-project" href="https://kirill-leonidovich.github.io/${this.projectName}/">
                see this project
              </a>
              <a class="modal__link _link-look-in-png" href="#">  
                look in png
              </a>
            </div>
          <div class="modal__project-photo">
            <picture>
              <source srcset="src/img/projects/${this.projectNameWithoutType}/320.png" type="image/png"
                media="(max-width:320px)">
              <source srcset="src/img/projects/${this.projectNameWithoutType}/480.png" type="image/png"
                media="(max-width:480px)">
              <source srcset="src/img/projects/${this.projectNameWithoutType}/768.png" type="image/png"
                media="(max-width:767px)">
              <source srcset="src/img/projects/${this.projectNameWithoutType}/1024.png" type="image/png"
                media="(max-width:1024px)">
              <source srcset="src/img/projects/${this.projectNameWithoutType}/1280.png" type="image/png"
                media="(max-width:1280px)">
              <img class="modal__img _img _cover" src="src/img/projects/${this.projectNameWithoutType}/1280.png"
                alt="clothing-store-website">
            </picture>
          </div>
        </div>
      </div>
      `

    this.renderElement(this.modalBody, this.parentSelector)
  }


  renderElement(body, parent) {
    super.renderElement(body, parent)

    this.doClassList(parent, '_overflow-hidden', 'add')

    this.showModal()
  }


  showModal() {
    this.$modal = this.getDomElement('.modal')
    setTimeout(() => this.doClassList(this.$modal, '_hide', 'remove'), 0)
  }


  addHandlerEvent() {
    this.$buttonModalClose = this.getDomElement('.modal__close', false, this.$modal)
    this.destroyModal = this.destroyModal.bind(this)
    this.$buttonModalClose.addEventListener('click', this.destroyModal)

    this.$modalButtonList = this.getDomElement('.modal__buttons')
    this.checkButtonEvent = this.checkButtonEvent.bind(this)
    this.$modalButtonList.addEventListener('click', this.checkButtonEvent)
  }


  checkButtonEvent(event) {
    if (event.target.tagName !== 'A') return

    if (this.doClassList(event.target, '_link-look-in-png', 'contains')) {
      this.toggleShowProjectInPng(event.target)
    } else {
      window.open(event.target.href)
    }

    event.preventDefault()
  }


  toggleShowProjectInPng(btn) {
    if (btn.textContent === 'hide photo') {
      this.doClassList(this.$modal, '_show-project', 'remove')
      btn.textContent = 'look in png'
    } else {
      btn.textContent = 'hide photo'
      this.doClassList(this.$modal, '_show-project', 'add')
    }
  }


  destroyModal() {
    this.hideModal()

    setTimeout(() => this.$modal.remove(), 300)

    this.$buttonModalClose.removeEventListener('click', this.hideModal)
    this.$modalButtonList.removeEventListener('click', this.checkButtonEvent)
  }

  
  hideModal() {
    this.doClassList(this.$parent, '_overflow-hidden', 'remove')
    this.doClassList(this.$modal, '_hide', 'add')
  }
}