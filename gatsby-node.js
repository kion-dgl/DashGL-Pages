const path = require('path');

exports.createPages = async function( { graphql, actions } ) {

	const { data } = await graphql(`
		query GetSlugs {
			allTutorialsJson {
				nodes {
					slug
				}
			}
		}
	`)

	data.allTutorialsJson.nodes.forEach( node => {
		
		actions.createPage({
			path : `/${node.slug}`,
			component : path.resolve('./src/templates/tutorial.js'),
			context : { slug : node.slug }
		});
		
	});

}
