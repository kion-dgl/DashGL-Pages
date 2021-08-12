"use strict";

const fs = require('fs')
const https = require('https')


const TUTORIAL_SOURCE = [
	'/kion-dgl/DashGL-GTK-Brickout-Tutorial/master/manifest.json',
	'/kion-dgl/DashGL-GTK-Invaders-Tutorial/master/manifest.json',
	'/kion-dgl/DashGL-GTK-Astroids-Tutorial/master/manifest.json',
	'/kion-dgl/DashGL-EGL-Model-Tutorial/master/manifest.json'
]

TUTORIAL_SOURCE.forEach ( async function( url ) {
	
	const manifest = await getJson( url );
	console.log( manifest );

	const slug = manifest.title.toLowerCase().replace(/\s/g, '-');
	const exists = fs.existsSync( `tutorials/${slug}` );
	if( !exists ) {
		fs.mkdirSync( `tutorials/${slug}` );
	}

	manifest.slug = slug;
	fs.writeFileSync( `tutorials/${slug}.json`, JSON.stringify( manifest ) );

	for( let i = 0; i < manifest.lessons.length; i++ ) {
		
		const lesson = manifest.lessons[ i ];
		lesson.index = i;
		lesson.author = manifest.nickname || manifest.author;
		lesson.support = manifest.support;
		lesson.social = manifest.social;
		lesson.slug = slug;
		lesson.length = manifest.lessons.length;

		const markdown = await getMarkdown( lesson );
		const num = i.toString().padStart( 2, '0' );
		fs.writeFileSync( `tutorials/${slug}/${num}.md`, markdown );

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
				let manifest;

				try {
					manifest = JSON.parse( str )
				} catch( err ) {
					console.log( str );
					throw new Error( "Could not parse " + path);
					process.exit();
				}

				resolve( manifest ); 
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
			'length : ' + lesson.length,
			'---'
		]

		const req = https.request(options, res => {
			
			let str = '';

			res.on('data', d => {
				str += d;
			})

			res.on('end', d => {
				const lines = str.split('\n');
				if( lines[0].indexOf('# ') !== -1) {
					lines.shift();
				}

				resolve( meta.join('\n') +  lines.join('\n') ); 
			})

		})

		req.on('error', e => {
			reject( e );
		})

		req.end()

	});

}
