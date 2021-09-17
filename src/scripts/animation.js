export const navigation = document.querySelector('.navigation')


export const goAnimationTo = (event) => {
  if (event.target.tagName !== 'A') return

  const { target: navigationLink } = event
  const { href: goToSectionId } = navigationLink.dataset
  const goToSection = document.querySelector(goToSectionId)
  const sectionIndentTop = goToSection.getBoundingClientRect().top + pageYOffset

  
  window.scrollTo({
    top: sectionIndentTop,
    behavior: 'smooth'
  })

  event.preventDefault()
}

