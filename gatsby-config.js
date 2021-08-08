/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	siteMetadata : {
		title : 'DashGL Project',
		description : 'Resources for Hardware Accelerated Graphics on Linux'
	},
	pathPrefix: "/DashGL-Pages",
	plugins: [
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
