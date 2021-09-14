import { Element } from './Element.js';
import { Modal } from './Modal.js';


const projects = []

export class Project extends Element {
  constructor(options) {
    super()

    this.name = options.name
    this.nameWithoutType = this.#getNameWithoutType(this.name)
    this.description = options.description
    this.parentSelector = options.parentSelector ? options.parentSelector : '.projects__list'
    this.projectBody = `
      <div class="projects__item" id="${this.name}">
        <div class="projects__background">
          <picture>
            <source srcset="src/img/projects/${this.nameWithoutType}/320.png" type="image/png"
              media="(max-width:320px)">
            <source srcset="src/img/projects/${this.nameWithoutType}/480.png" type="image/png"
              media="(max-width:480px)">
            <source srcset="src/img/projects/${this.nameWithoutType}/768.png" type="image/png"
              media="(max-width:767px)">
            <source srcset="src/img/projects/${this.nameWithoutType}/1024.png" type="image/png"
              media="(max-width:1024px)">
            <source srcset="src/img/projects/${this.nameWithoutType}/1280.png" type="image/png"
              media="(max-width:1280px)">
            <img class="projects__img _img _cover" src="src/img/projects/${this.nameWithoutType}/1280.png"
              alt="${this.nameWithoutType}">
          </picture>
        </div>
        <div class="projects__baner">
          <h5 class="projects__name">
            ${this.nameWithoutType}
          </h5>
          <div class="projects__qrcode">
            <img class="projects__img_qrcode _img _cover" src="src/img/projects/${this.nameWithoutType}/QR.png"
              alt="qrcode">
          </div>
          <button class="projects__btn_show-modal">
            show
          </button>
        </div>
      </div>
      `

    this.renderElement(this.projectBody, this.parentSelector)
  }

  
  #getNameWithoutType(name) {
    return name.split('_')[0]
  }


  addHandlerEvent() {
    const $project = this.getDomElement('.projects__item')
    $project.addEventListener('click', this.focusedProject) 
    projects.push($project)

    const $buttonShowModal = this.getDomElement('.projects__btn_show-modal', false, $project)
    $buttonShowModal.addEventListener('click', this.showModal.bind(this))
  }


  focusedProject(event) {
    event.currentTarget.classList.add('_focuses')

    projects
      .filter(project => project !== event.currentTarget)
      .forEach(project => project.classList.remove('_focuses'))
  }


  showModal() {
    new Modal({
      projectName: this.name,
      projectNameWithoutType: this.nameWithoutType,
      projectDescription: this.description,
      parentSelector: 'body'
    })
  }
}