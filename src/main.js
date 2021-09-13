import { Skills } from './classes/Skill.js'
import { Project } from './classes/Project.js'


const skills = [
  {
    parent: '.skills__list',
    skillName: 'html',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    parent: '.skills__list',
    skillName: 'css',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
  },
  {
    parent: '.skills__list',
    skillName: 'scss',
    documentationLink: 'https://sass-lang.com/documentation',
  },
  {
    parent: '.skills__list',
    skillName: 'javascript',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    parent: '.skills__list',
    skillName: 'typescript',
    documentationLink: 'https://www.typescriptlang.org/docs/',
  },
  {
    parent: '.skills__list',
    skillName: 'git',
    documentationLink: 'https://git-scm.com/docs/git',
  }
]

skills.forEach(skill => new Skills(skill))



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