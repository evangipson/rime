const mainNavLinks = document.querySelectorAll('.sidebar a');
const allContentLinks = document.querySelectorAll('.content a[href^="#"]');

const watchSections = (mainNavLinks) => {
	mainNavLinks?.forEach(link => {
		const section = document.querySelector(link.hash);
		if (window.scrollY > section.offsetTop - section.offsetHeight) {
			mainNavLinks?.forEach(link => link.classList.remove('current'));
			link.classList.add('current');
		}
	});
};

const makeLinkActive = (mainNavLinks, link) => {
	mainNavLinks?.forEach(mainNavLink => mainNavLink.classList.remove('current'));
	link.classList.add('current');
};

const slowScrollToLinkedElement = (clickEvent) => {
	const linkedElement = document.querySelector(clickEvent.currentTarget.getAttribute('href'));
	clickEvent.preventDefault();
	linkedElement?.scrollIntoView({ behavior: 'smooth' });
};

watchSections(mainNavLinks);

allContentLinks?.forEach(anchor => anchor.addEventListener('click', clickEvent => slowScrollToLinkedElement(clickEvent)));
mainNavLinks?.forEach(mainNavLink => mainNavLink.addEventListener('click', clickEvent => {
	makeLinkActive(mainNavLinks, mainNavLink);
	slowScrollToLinkedElement(clickEvent);
}));
window.addEventListener('scroll', event => watchSections(mainNavLinks));
window.addEventListener('resize', event => watchSections(mainNavLinks));