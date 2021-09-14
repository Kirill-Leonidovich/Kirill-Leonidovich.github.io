import { Element } from './Element.js';


const skills = []


export class Skill extends Element {
  constructor(options) {
    super()

    this.skillName = options.skillName
    this.documentationLink = options.documentationLink
    this.parentSelector = options.parentSelector ? options.parentSelector : '.skills__list'
    this.skillBody = `
      <spna class="skills__item _${options.skillName}">
        <p class="skills__name">
          ${this.skillName}
        </p>
        <div class="skills__icon">
          <img class="skills__img _img _contain" src="./src/img/skills/${this.skillName}.png" alt="${this.skillName}">
          <a class="skills__link_go-over" href="${this.documentationLink}">
            documentation
            <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </spna>
      `

    this.renderElement(this.skillBody, this.parentSelector)
  }


  addHandlerEvent() {
    const $skill = this.getDomElement('.skills__item')
    $skill.addEventListener('click', this.focusedSkill)
    skills.push($skill)

    const $documentationLink = this.getDomElement('.skills__link_go-over', false, $skill)
    $documentationLink.addEventListener('click', this.goToDocumentation)
  }


  focusedSkill(event) {
    event.currentTarget.classList.add('_focuses')

    skills
      .filter(skill => skill !== event.currentTarget)
      .forEach(skill => skill.classList.remove('_focuses'))
  }


  goToDocumentation(event) {
    window.open(event.currentTarget.href)

    event.preventDefault()
  }
}