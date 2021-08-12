import React from "react"
import { Link, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaTwitter, FaPhone, FaGithub, FaYoutube } from "react-icons/fa";


export default function Tutorials( { data } ) {

	console.log( data );

	const tutorial = data.allTutorialsJson.nodes[ 0 ];
	console.log( tutorial );

	return (
		<>
			<Navbar/>
			<main className="my-5">
				<div className="container">
					<div className="row">
						<MainContent tutorial={ tutorial }/>	
						<Sidebar tutorial={ tutorial }/>
					</div>	
				</div>
			</main>
			<Footer/>
		</>
	)

}

function MainContent( { tutorial } ) {

	return (
		<section className="col-md-9 mb-4">
			<h1 className='my-3 border-bottom'> { tutorial.title }</h1>
			{ tutorial.lessons.map( lesson => {
				lesson.slug = tutorial.slug;
				return <MyLesson lesson={ lesson } key={ lesson.readme }/>
			})}
		</section>
	)
	
}

function MyLesson ( { lesson } ) {
	
	
	let url = `/${lesson.slug}/${lesson.index.toString().padStart(2, '0')}/`
	let label = lesson.index ? `${lesson.index}. ${lesson.title}` : lesson.title;
	
	return (
		<div className="row">
		
			<div className="col-md-4 mb-4">
				<div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
					<img src={ lesson.featured_image } className='img-fluid'/>
					<Link to={ url }>
						<div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
					</Link>
				</div>
			</div>

			<div className="col-md-8 mb-4">
				<h5> { label } </h5>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
					necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
					minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
					magni.
				</p>
				<Link to={ url }>
					<button type="button" className="btn btn-primary">Read</button>
				</Link>
			</div>
		</div>
	)

}

function Sidebar( { tutorial } ) {

	return (
		<div className="col-md-3 mb-4">
			<section>
			<section className="text-center pb-4 mb-4">
<div className="bg-image hover-overlay ripple mb-4">
<img
				  src={ tutorial.avatar }
				  className="img-fluid rounded-circle border" />
			  </div>
			  
			  <h5> 
			  	{ tutorial.nickname } 
			  	<small className="text-muted"> {tutorial.author } </small>
			  </h5>

			  <p>
				Small Introduction for the Author goes here
			  </p>
			  <a role="button" className="btn btn-primary" href="https://mdbootstrap.com/docs/standard/"
				target="_blank">Follow on Github</a>
				<p>
					Support Links go here
				</p>
			</section>
			
		  </section>
		</div>
	)

}



export const query = graphql`
query GetTutorial( $slug : String ) {
  allTutorialsJson(filter: {slug: {eq: $slug}}) {
    nodes {
      id
      title
      window_library
      language
      card_image
      nickname
      repository
      slug
      avatar
      author
      email
      graphics_library
      social {
        mastodon
        twitter
        reddit
      }
      support {
        liberapay
        ko_fi
        patron
      }
      lessons {
        title
        source
        readme
        index
        featured_image
      }
    }
  }
}`
