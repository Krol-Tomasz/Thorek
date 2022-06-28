const navContainer = document.querySelector('.container-nav')
const btnNav = document.querySelector('.btn-nav')
const button = document.querySelector('.btn-burger')
const main = document.querySelector('main')
const navLinks = document.querySelectorAll('.desktop-nav__link')

const handleNav = () => {
	navContainer.classList.toggle('show-nav')
	btnNav.classList.toggle('btn-rotate')
	main.classList.toggle('slide-main')
	document.body.classList.toggle('body-hidden')
}

button.onclick = () => {
	button.classList.toggle('toggled')
	navContainer.classList.toggle('show-nav')
}

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		navContainer.classList.remove('show-nav')
		btnNav.classList.remove('btn-rotate')
		main.classList.remove('slide-main')
		document.body.classList.remove('body-hidden')
	})
})

btnNav.addEventListener('click', handleNav)

btnNav.addEventListener('click', function () {
	dataLayer.push({ event: 'openNav', EventCategory: 'Navigation', EventAction: 'Menu', EventLabel: 'QuickCheck' })
})
