import React from "react"
import { Link, graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function SearchBar() {

	return (
<nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
	
	<div className='container'>
	<a className="navbar-brand me-2 d-none d-md-block d-lg-block">
      All
    </a>
    <ul className="me-auto"></ul>
    
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      

	</div>
</nav>
	)

}

function TutorialCard( { tutorial } ) {

	return (
		<Link to={ `/${tutorial.slug}` }>
			<div className="col">
<div className="card h-100">
<img src={ tutorial.card_image } />
<div className="card-body">
<h5 className="card-title"> { tutorial.title }</h5>
<p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
</div>
<div className="card-footer">
<small className="text-muted">Last updated 3 mins ago</small>
</div>
</div>
</div>
</Link>

	)

}

function Search( props ) {

	return (
		<>
			
			<section>
				<SearchBar/>
				
				<div className='container'>
					<div className='row flex-row-reverse'>
						
						<div className='col-sm-12 col-md-12 col-lg-10'>
						
							<div className='row pt-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-2 g-sm-1'>
								
								{ props.nodes.map( tut => {
									return <TutorialCard key={ tut.id } tutorial={ tut }/>
								})}	
								
							</div>
		
						</div>
						
						<div className='col-sm-12 col-md-12 col-lg-2'>
						
							<h5 className='py-3 mb-3 border-bottom'>Language</h5>
							
							<ul className="nav nav-pills flex-column mb-auto">
								<li className="nav-item">
									<a href="#" className="nav-link link-dark active" aria-current="page">Any</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">C</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Python</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Golang</a>
								</li>
							</ul>
							
							<h5 className='py-3 mb-3 border-bottom'>Window Library</h5>
							
							<ul className="nav nav-pills flex-column mb-auto">
								<li className="nav-item">
									<a href="#" className="nav-link link-dark active" aria-current="page">Any</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">GTK</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">FreeGlut</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">SDL</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">EGL</a>
								</li>
							</ul>
					
							
							<h5 className='py-3 mb-3 border-bottom'>Graphics Library</h5>
							
							<ul className="nav nav-pills flex-column mb-auto">
								<li className="nav-item">
									<a href="#" className="nav-link link-dark active" aria-current="page">Any</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">OpenGL 1.0</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">OpenGL 2.0</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">OpenGL 3.0</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">OpenGL 4.0</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Vulkan</a>
								</li>
							</ul>
							
						</div>
						
					</div>
				</div>
			</section>
		</>
	)

}


export default function Tutorials( { data } ) {
	
	console.log( data );
	const nodes = data.allTutorialsJson.nodes;
	console.log(nodes);
	
	return (
		<>
			<Navbar/>
			<Search nodes={ nodes }/>
			<Footer/>
		</>
	)

}

export const query = graphql`
query GetTutorials {
  allTutorialsJson {
    nodes {
      graphics_library
      window_library
      title
      slug
      id
      card_image
    }
  }
}
`
