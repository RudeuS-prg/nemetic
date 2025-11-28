import '@fontsource-variable/montserrat'
import './src/assets/css/global.css'

// Handle smooth scrolling to anchor links
const scrollToHash = (hash) => {
	if (!hash) return
	const element = document.getElementById(hash.substring(1))
	if (element) {
		element.scrollIntoView({ behavior: 'smooth', block: 'start' })
	}
}

export const onRouteUpdate = ({ location }) => {
	if (location.hash) setTimeout(() => scrollToHash(location.hash), 0)
}

export const shouldUpdateScroll = ({ routerProps: { location } }) => {
	if (location.hash) {
		requestAnimationFrame(() => requestAnimationFrame(() => scrollToHash(location.hash)))
		return false
	}
	return true
}
