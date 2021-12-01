
export const setNavLinks = () => {
  const navList = document.querySelector('.navigation__list')
	const sections = ['about', 'skills', 'projects', 'contact']

	sections.forEach(link => {
		navList.insertAdjacentHTML(
			'beforeend',
			`<li>
        <a class="navigation__link _link-about" href="#${link}" data-href="#${link}">${link}</a>
      </li>`
		)
	})
}
