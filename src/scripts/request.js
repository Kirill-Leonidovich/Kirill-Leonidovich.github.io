import { Messenger } from '../classes/Messenger.js'
import { Autor } from '../classes/Autor.js'
import { Skill } from '../classes/Skill.js'
import { Project } from '../classes/Project.js'

export const getMessengersData = async () => {
	const messengerParentSelectors = ['.header__messenger_autor', '.contact__messenger_autor']

	// const response = await fetch('./src/JSON/messengers.json')
	// const messengersData = await response.json()
	const messengersData = [
		{
			messengerName: 'telegram',
			iconClassName: 'fab fa-telegram-plane',
			messengerLink: 'https://t.me/alkhimenok',
		},
		{
			messengerName: 'facebook',
			iconClassName: 'fab fa-facebook-f',
			messengerLink: 'https://www.facebook.com/alkhimenok',
		},
		{
			messengerName: 'instagram',
			iconClassName: 'fab fa-instagram',
			messengerLink: 'https://www.instagram.com/alkhimenokk',
		},
		{
			messengerName: 'twitter',
			iconClassName: 'fab fa-twitter',
			messengerLink: 'https://twitter.com/alkhimenokk',
		},
		{
			messengerName: 'linkedin',
			iconClassName: 'fab fa-linkedin-in',
			messengerLink: 'https://www.linkedin.com/in/kirill-alkhimenok-a58524220',
		},
		{
			messengerName: 'github',
			iconClassName: 'fab fa-github-alt',
			messengerLink: 'https://github.com/alkhimenok',
		},
	]

	messengerParentSelectors.forEach(parent => {
		messengersData.forEach(messenger => {
			messenger.parentSelector = parent
			new Messenger(messenger)
		})
	})
}

export const getAutorInfo = async () => {
	const request = await fetch('https://api.github.com/users/alkhimenok')
	const response = await request.json()

	const info = {
		name: response.name,
		bio: response.bio,
		location: response.location,
		photo: response.avatar_url,
	}

	new Autor(info)
}

export const getSkillsData = async () => {
	// const response = await fetch('./src/JSON/skills.json')
	// const skillsData = await response.json()
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
}

export const getAllRepository = async () => {
	const request = await fetch('https://api.github.com/users/alkhimenok/repos') // насзания всех repository
	const response = await request.json()

	response
		.filter(i => !(i.name.startsWith('alkhimenok') || i.name.startsWith('extended-select')))
		.forEach(
			i =>
				new Project({
					name: i.name,
					description: i.description,
				})
		)
}
