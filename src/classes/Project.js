import { Element } from './Element.js';
import { Modal } from './Modal.js';


const projects = []

export class Project extends Element {
  constructor(options) {
    super()

    this.name = options.name
    this.description = options.description
    this.$parent = this.getDomElement(options.parent)
    this.nameWithoutType = this.#getNameWithoutType(this.name)

    this.#createProject()
  }

  
  #getNameWithoutType(name) {
    return name.split('_')[0]
  }


  #createProject() {
    const projectBody = `
      <div class="projects__item" id="${this.nameWithoutType}">
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

    this.#renderProject(projectBody)
  }


  #renderProject(projectBody) {
    this.$parent.insertAdjacentHTML('afterbegin', projectBody)
    this.#addHandlerProejct()
  }


  #addHandlerProejct() {
    const $project = this.getDomElement('.projects__item')
    $project.addEventListener('click', this.focusedProject)  
    projects.push($project)

    const $buttonShowModal = this.getDomElement('.projects__btn_show-modal', false, $project)
    $buttonShowModal.addEventListener('click', this.showModal)
  }


  focusedProject(event) {
    event.currentTarget.classList.add('_focuses')

    projects
      .filter(project => project !== event.currentTarget)
      .forEach(project => project.classList.remove('_focuses'))
  }


  showModal(event) {
    new Modal({
      project: event.target.closest('.projects__item'),
      parent: document.body,
      projectName: this.name,
      description: this.description
    })
  }
}