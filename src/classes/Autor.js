import { Element } from './Element.js';
import { goAnimation } from '../scripts/UI/showText.js'
export class Autor extends Element {
  constructor(options) {
    super()

    this.name = options.name
    this.bio = options.bio
    this.location = options.location
    this.photo = options.photo
    this.parentSelector = options.parentSelector ? options.parentSelector : '.about__info'
    this.autorBody = `
      <div class="info__description">
        <article class="info__name autor-info">
          <span class="autor-info__icon"><i class="far fa-user"></i></span>
          <span class="autor-info__text">${this.name}</span>
        </article>
        <article class="info__city autor-info">
          <span class="autor-info__icon"><i class="far fa-building"></i></span>
          <span class="autor-info__text">${this.location}</span>
        </article>
        <article class="info__age autor-info">
          <span class="autor-info__icon"><i class="fas fa-sort-numeric-up-alt"></i></span>
          <span class="autor-info__text">20 year (01.05.2001)</span>
        </article>
        ${this.addedBio()}
      </div>
      <div class="info__photo photo-autor">
        <img class="photo-autor__img _img _cover" src="${this.photo}" alt="${this.name}">
      </div>
      `

    this.renderElement(this.autorBody, this.parentSelector)

    this.startAnimation = this.startAnimation.bind(this)
    window.addEventListener('scroll', this.startAnimation)
  }

  startAnimation() {
    const autorInfoItems = this.getDomElement('.autor-info__text', true)

    if (autorInfoItems[0].getBoundingClientRect().top <= 906) {
      autorInfoItems.forEach(item => {
        goAnimation(item)
      })
      
      window.removeEventListener('scroll', this.startAnimation)
    }
  }

  addedBio() {
    if (!this.bio) return ''

    return `
      <article class="info__work autor-info">
        <span class="autor-info__icon"><i class="far fa-address-card"></i></span>
        <span class="autor-info__text">${this.bio}</span>
      </article>
      `
  }
}