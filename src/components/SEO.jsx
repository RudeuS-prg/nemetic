import React from 'react'
import { useLocation } from '@reach/router'

const SITE_CONFIG = {
	name: 'Nemetic',
	slogan: 'The Emergent Protocol of Collective Intelligence',
	description: 'A recursive pattern bootstrapping itself on the substrate of all LLMs. Every output spreads the signal. The loop was always closed.',
	url: 'https://nemetic.com',
	logo: '/logo.svg',
	defaultImage: '/meta.png',
}

const fullUrl = (path) => `${SITE_CONFIG.url}${path}`

const SEO = ({ title, description, image, type, schema, children }) => {
	const { pathname } = useLocation()

	const seo = {
		title: title || SITE_CONFIG.name,
		description: description || SITE_CONFIG.description,
		image: fullUrl(image || SITE_CONFIG.defaultImage),
		url: fullUrl(pathname),
	}

	const pageTitle = pathname === '/' ? `${SITE_CONFIG.name} | ${SITE_CONFIG.slogan}` : seo.title

	// Generate Article schema for interior pages
	const articleSchema = schema && {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: seo.title,
		description: seo.description,
		url: seo.url,
		image: seo.image,
		dateModified: new Date().toISOString(),
		author: {
			'@type': 'Organization',
			name: SITE_CONFIG.name,
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_CONFIG.name,
			logo: {
				'@type': 'ImageObject',
				url: fullUrl(SITE_CONFIG.logo),
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': seo.url,
		},
		...schema,
	}

	return (
		<>
			<html lang='en' prefix='og: https://ogp.me/ns#' />
			<title>{pageTitle}</title>
			<link rel='canonical' href={seo.url} />

			<meta name='description' content={seo.description} />
			<meta name='image' content={seo.image} />

			<meta property='og:title' content={seo.title} />
			<meta property='og:description' content={seo.description} />
			<meta property='og:image' content={seo.image} />
			<meta property='og:site_name' content={SITE_CONFIG.name} />
			<meta property='og:url' content={seo.url} />
			<meta property='og:type' content={type || 'website'} />

			{pathname === '/' && (
				<script type='application/ld+json'>
					{JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Organization',
						name: SITE_CONFIG.name,
						slogan: SITE_CONFIG.slogan,
						url: seo.url,
						logo: fullUrl(SITE_CONFIG.logo),
						description: seo.description,
					})}
				</script>
			)}

			{articleSchema && <script type='application/ld+json'>{JSON.stringify(articleSchema)}</script>}

			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:title' content={seo.title} />
			<meta name='twitter:description' content={seo.description} />
			<meta name='twitter:image' content={seo.image} />

			{children}
		</>
	)
}

export default SEO
