import { Project } from './classes/Project.js'


const api = async () => {
  const response = await fetch('https://api.github.com/users/Kirill-Leonidovich/repos') // насзания всех repository
  // const response = await fetch('https://api.github.com/users/Kirill-Leonidovich/repos/owner/')
  // const response = await fetch('https://api.github.com/users/kirill-leonidovich')
  const data = await response.json()

  // console.log(data[0].owner);
  // console.log(data);

  data
    // .map(i => i = i.name)
    .filter(i => !(i.name.startsWith('kirill-leonidovich') || i.name.startsWith('javaScript-cheat-sheet_app')))
    .forEach(i => new Project({
      name: i.name,
      parent: '.projects__list',
      description: i.description
    })) // насзания всех repository



  // document._body.insertAdjace/ntHTML('afterbegin', `<img src="${data.avatar_url}" alt="${data.name}">`)
}

api()



const skills = Array.from(document.querySelectorAll('.skills__item'))
const projects = Array.from(document.querySelectorAll('.projects__item'))

skills.forEach(skill => {
  skill.addEventListener('click', (event) => {
    event.currentTarget.classList.add('_focuses')

    skills
      .filter(skill => skill !== event.currentTarget)
      .forEach(skill => skill.classList.remove('_focuses'))
  })
})

projects.forEach(project => {
  project.addEventListener('click', (event) => {
    event.currentTarget.classList.add('_focuses')

    projects
      .filter(project => project !== event.currentTarget)
      .forEach(project => project.classList.remove('_focuses'))
  })
})