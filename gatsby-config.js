/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: 'https://nemetic.com',
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Nemetic`,
				short_name: `Nemetic`,
				start_url: `/`,
				background_color: `#0f1419`,
				theme_color: `#22d3ee`,
				display: `minimal-ui`,
				icon: `static/logo.svg`,
			},
		},
		{
			resolve: `gatsby-plugin-postcss`,
		},
		{
			resolve: 'gatsby-plugin-svgr-svgo',
			options: {
				inlineSvgOptions: [
					{
						test: /\.svg$/,
						svgoConfig: {
							plugins: [
								{
									name: 'preset-default',
									params: {
										overrides: [{ name: 'removeViewBox', active: false }],
									},
								},
								{
									name: 'prefixIds',
								},
							],
						},
					},
				],
			},
		},
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-robots-txt`,
	],
}
