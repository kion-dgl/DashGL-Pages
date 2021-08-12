import React from "react"
import { Link, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import * as tocStyles from "../css/toc.module.css"
import * as postStyles from "../css/post.module.css"

function Sidebar( { contents, node } ) {

	console.log( contents );

	const TableOfContents = [
		"Introduction",
		"Open a Window",
		"Draw a Triangle",
		"Separate Shaders",
		"Shader Program",
		"Orthagonal Coordinates",
		"Draw a Ball",
		"Set Ball Position",
		"Move a Ball",
		"Bounce a Ball",
		"Define Ball Struct",
		"Draw a Paddle",
		"Paddle Uniform Color",
		"Keydown Callbacks",
		"Paddle Hit Detection",
		"Draw Row of Bricks",
		"Draw Grid of Bricks",
		"Break Some Bricks"
	]

	const slug = 'gtk-brickout';
	const lesson = 1;

	return (
		<section className="col-md-3 mb-4">
		
			<h4 style={{ paddingLeft : '2rem' }}>{ node.frontmatter.slug }</h4>
			
			<ul className={tocStyles.toc}>
		  	{contents.lessons.map( (lesson, index) => {
		  		const num = index.toString().padStart(2, '0');
		  		const url = `/${node.frontmatter.slug}/${num}/`;
		  		
		  		return (
		  			<Link to={ url } key={ url }>
		  				<li>{ lesson.title }</li>
		  			</Link>
		  		)
			})}
			</ul>
		</section>
	)

}


function Post( { node } ) {

	console.log( node );

	return (
		<div className="col-md-8 mb-4">

			<section className="py-4">
				<h1 className="border-bottom py-2 mb-3"> { node.frontmatter.index }. { node.frontmatter.title } </h1>
	
				<div className="row align-items-center mb-4">
				    <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
				        <img src="https://avatars.githubusercontent.com/u/25621780?v=4" className="rounded-circle shadow-1-strong me-2" height="35" alt="" loading="lazy" />
				        <span> Created on Sept. 24, 2017 by Kion</span>
				    </div>

				    <div className="col-lg-6 text-center text-lg-end">
				        <a href={ node.frontmatter.source } target="_blank">View Source on Github</a>
				    </div>
				</div>
			</section>

			<div className={postStyles.post} dangerouslySetInnerHTML={{ __html : node.html }} />
			
			<div className="row pt-5 flex-row-reverse justify-content-between">
			
				<div class="col-sm-7 col-md-4">
					<button className='w-100 mb-2 py-2 btn btn-outline-primary rounded-pill'>
						Next Chapter <FaAngleRight/>
					</button>
				</div>
				<div class="col-sm-7 col-md-4">
					<button className='w-100 mb-2 py-2 btn btn-outline-primary rounded-pill'>
						<FaAngleLeft/> Previous Chapter
					</button>
				</div>
			</div>
			
		</div>
	)

}

export default function Lesson( { data } ) {
	
	const node = data.allMarkdownRemark.nodes[ 0 ];
	const contents = data.allTutorialsJson.nodes[ 0 ];
	console.log( contents );
	
	return (
		<>
			<Navbar/>
			<main className="mt-4 mb-5">
				<div className="container">
					<div className="row flex-row-reverse">
						<Post node={ node }/>
						<Sidebar node={ node } contents={ contents }/>
					</div>
				</div>
			</main>
			<Footer/>
		</>
	)

}

export const query = graphql`
query GetLesson {

  allMarkdownRemark(
    filter: {frontmatter: {slug: {eq: "gtk-brickout"}, index: {eq: 1}}}
  ) {
    nodes {
      frontmatter {
        length
        author
        slug
        source
        title
        index
      }
      html
    }
  }

  allTutorialsJson(
    filter: {slug: {eq: "gtk-brickout"}}
    sort: {order: ASC, fields: lessons___index}
  ) {
    nodes {
      lessons {
        index
        title
      }
    }
  }
}
`
