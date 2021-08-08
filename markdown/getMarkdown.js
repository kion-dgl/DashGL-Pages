"use strict";

const fs = require('fs')
const https = require('https')


const TUTORIAL_SOURCE = [
	'/kion-dgl/DashGL-GTK-Brickout-Tutorial/master/manifest.json'
]

TUTORIAL_SOURCE.forEach ( async function( url ) {
	
	const manifest = await getJson( url );
	console.log( manifest );

	const slug = manifest.title.toLowerCase().replace(/\s/g, '-');
	const exists = fs.existsSync( `tutorials/${slug}` );
	if( !exists ) {
		fs.mkdirSync( dir );
	}

	for( let i = 0; i < manifest.lessons.length; i++ ) {
		
		let lesson = manifest.lessons[ i ];
		lesson.index = i.toString().padStart( 2, '0' );
		lesson.author = manifest.nickname || manifest.author;
		lesson.support = manifest.support;
		lesson.social = manifest.social;
		lesson.slug = slug;

		const markdown = await getMarkdown( lesson );
		fs.writeFileSync( `tutorials/${slug}/${lesson.index}.md`, markdown );

	}

});


function getJson( path ) {

	return new Promise ( function ( resolve, reject ) {

		const options = {
			hostname: 'raw.githubusercontent.com',
			port: 443,
			path: path,
			method: 'GET'
		}

		const req = https.request(options, res => {
			
			let str = '';
			res.on('data', d => {
				str += d;
			})

			res.on('end', d => {
				resolve( JSON.parse( str )); 
			})

		})

		req.on('error', e => {
			reject( e );
		})

		req.end()

	});

}

function getMarkdown( lesson ) {

	return new Promise ( function ( resolve, reject ) {

		const options = {
			hostname: 'raw.githubusercontent.com',
			port: 443,
			path: lesson.readme,
			method: 'GET'
		}
	
		const meta = [
			'---',
			'index : ' + lesson.index,
			'author : ' + lesson.author,
			'title : ' + lesson.title,
			'slug : ' + lesson.slug,
			'source : ' + lesson.source,
			'---'
		].join('\n');

		const req = https.request(options, res => {
			
			let str = '';

			res.on('data', d => {
				str += d;
			})

			res.on('end', d => {
				resolve( meta + '\n' + str ); 
			})

		})

		req.on('error', e => {
			reject( e );
		})

		req.end()

	});

}
