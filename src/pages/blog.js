import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Sidebar() {

	return (
		<div className="col-md-3 mb-4">
		  <section>
			<section className="text-center border-bottom pb-4 mb-4">
			  <div className="bg-image hover-overlay ripple mb-4">
				<img
				  src="https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_mdb5/standard/about/assets/mdb5-about.webp"
				  className="img-fluid" />
				<a href="https://mdbootstrap.com/docs/standard/" target="_blank">
				  <div className="mask" style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}></div>
				</a>
			  </div>
			  <h5>DashGL Blog</h5>

			  <p>
				Here is the blog for DashGL that includes news updates, new features
				and other thoughts and notes.
			  </p>
			  <a role="button" className="btn btn-primary" href="https://mdbootstrap.com/docs/standard/"
				target="_blank">View On Hackmd.io<i className="fas fa-download ms-2"></i></a>
			</section>

			<section className="text-center" >
			  <h5 className="mb-4">Search, Notes, Tags</h5>
			</section>

		  </section>
		</div>
	)

}


function BlogCard() {

	return (
		<div className="col-lg-4 col-md-12 mb-4">
		  <div className="card">
			<div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
			  <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" className="img-fluid" />
			  <a href="#!">
				<div className="mask" style={{ backgroundColor : "rgba(251, 251, 251, 0.15)" }}></div>
			  </a>
			</div>
			<div className="card-body">
			  <h5 className="card-title">Post title</h5>
			  <p className="card-text">
				Some quick example text to build on the card title and make up the bulk of the
				card's content.
			  </p>
			  <a href="#!" className="btn btn-primary">Read</a>
			</div>
		  </div>
		</div>
	)

}

function BlogRow() {

	return (
		<div className="row">
			<BlogCard/>
			<BlogCard/>
			<BlogCard/>
		</div>

	)
}

function BlogNav() {

	return (
		<nav className="navbar navbar-light bg-light border-bottom">
			<div className="container container-fluid">
				<form className="d-flex align-items-center">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-success" type="submit">Search</button>
    			</form>
				<ul className="nav nav-pills">
					<li className="nav-item"><a href="#" className="nav-link active" aria-current="page">All</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Updates</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Tool</a></li>
					<li className="nav-item"><a href="#" className="nav-link">Resource</a></li>
					<li className="nav-item"><a href="#" className="nav-link">About</a></li>
				</ul>
			</div>
		</nav>
	)

}

function Pagination() {

	return (
		<div className='row'>
			<nav className="mt-4 container" aria-label="...">
			  <ul className="pagination pagination-circle pagination-lg justify-content-center">
				<li className="page-item">
				  <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
				</li>
				<li className="page-item"><a className="page-link" href="#">1</a></li>
				<li className="page-item active" aria-current="page">
				  <a className="page-link" href="#">2 <span className="sr-only">(current)</span></a>
				</li>
				<li className="page-item"><a className="page-link" href="#">3</a></li>
				<li className="page-item">
				  <a className="page-link" href="#">Next</a>
				</li>
			  </ul>
			</nav>
		</div>
	)
}

export default function Blog() {

	return (
		<>
			<Navbar/>
			<BlogNav/>
			<main className="my-5">
				<div className="container">

					<BlogRow/>
					<BlogRow/>
					<BlogRow/>

					<Pagination/>
      			</div>
			</main>
			<Footer/>
		</>
	)

}
