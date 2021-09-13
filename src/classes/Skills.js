import { Element } from './Element.js';


const skills = []


export class Skills extends Element {
  constructor(options) {
    super()

    this.$parent = this.getDomElement(options.parent)
    this.skillName = options.skillName
    this.documentationLink = options.documentationLink

    this.#createSkill()
  }


  #createSkill() {
    const skillBody = `
      <spna class="skills__item _${this.skillName}">
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

    this.#renderSkill(skillBody)
  }


  #renderSkill(skillBody) {
    this.$parent.insertAdjacentHTML('afterbegin', skillBody)
    this.#addHandlerSkills()
  }


  #addHandlerSkills() {
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