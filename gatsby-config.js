/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata : {
		title : 'DashGL Project',
		description : 'Resources for Hardware Accelerated Graphics on Debian Linux',
		siteUrl : 'https://kion-dgl.github.io/DashGL-Pages/'
	},
	pathPrefix: "/DashGL-Pages",
	plugins: [
		'gatsby-transformer-json',
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sitemap',
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-source-filesystem`,
			options : {
				name : 'tutorials',
				path: `${__dirname}/markdown/tutorials/`,
			}
		}
  	]
}
