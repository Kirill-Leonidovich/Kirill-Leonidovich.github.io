import { Messenger } from './classes/Messenger.js'
import { Skill } from './classes/Skill.js'
import { Project } from './classes/Project.js'


const messengerParentSelectors = ['.header__messenger_autor', '.contact__messenger_autor']
const messengersData = [
  {
    messengerName: 'twitter',
    iconClassName: 'fab fa-twitter',
    messengerLink: 'https://twitter.com/AlkhimenokKL',
  },
  {
    messengerName: 'instagram',
    iconClassName: 'fab fa-instagram',
    messengerLink: 'https://www.instagram.com/alkhimenok.kirill.leonidovich/',
  },
  {
    messengerName: 'facebook',
    iconClassName: 'fab fa-facebook-f',
    messengerLink: 'https://www.facebook.com/profile.php?id=100072407994592',
  },
  {
    messengerName: 'telegram',
    iconClassName: 'fab fa-telegram-plane',
    messengerLink: 'https://t.me/alkhimenok',
  },
  {
    messengerName: 'linkedin',
    iconClassName: 'fab fa-linkedin-in',
    messengerLink: 'https://www.linkedin.com/in/kirill-alkhimenok-a58524220/',
  },
  {
    messengerName: 'github',
    iconClassName: 'fab fa-github-alt',
    messengerLink: 'https://github.com/Kirill-Leonidovich',
  },
]
messengerParentSelectors.forEach(parent => {
  messengersData.forEach(messenger => {
    messenger.parentSelector = parent
    new Messenger(messenger)
  })
})


const skillsData = [
  {
    skillName: 'git',
    documentationLink: 'https://git-scm.com/docs/git',
  },
  {
    skillName: 'typescript',
    documentationLink: 'https://www.typescriptlang.org/docs/',
  },
  {
    skillName: 'javascript',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    skillName: 'scss',
    documentationLink: 'https://sass-lang.com/documentation',
  },
  {
    skillName: 'css',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference',
  },
  {
    skillName: 'html',
    documentationLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
]
skillsData.forEach(skill => new Skill(skill))


const api = async () => {
  const response = await fetch('https://api.github.com/users/Kirill-Leonidovich/repos') // насзания всех repository
  const data = await response.json()

  data
    .filter(i => !(i.name.startsWith('kirill-leonidovich') || i.name.startsWith('javaScript-cheat-sheet_app')))
    .forEach(i => new Project({
      name: i.name,
      description: i.description
    }))
}

api()