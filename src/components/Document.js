import React from "react"
import { FaTwitter, FaFacebook, FaComments } from "react-icons/fa";

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

function TutorialCard() {

	return (
	  <div className="col">
    <div className="card h-100">
      <svg className="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>

	)

}

function ExampleDoc() {

	return (
		< div >

		<section className="border-bottom mb-4 pt-4	">
		  <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(144).jpg"
			className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

		  <div className="row align-items-center mb-4">
			<div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
			  <img src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg" className="rounded-5 shadow-1-strong me-2"
				height="35" alt="" loading="lazy" />
			  <span> Published <u>15.07.2020</u> by</span>
			  <a href="" className="text-dark">Anna</a>
			</div>

			<div className="col-lg-6 text-center text-lg-end">
			  <button type="button" className="btn btn-primary px-3 me-1" style={{ backgroundColor: "#3b5998"}}>
				<FaFacebook/>
			  </button>
			  <button type="button" className="btn btn-primary px-3 me-1" style={{ backgroundColor: "#3b5998"}}>
				<FaTwitter/>
			  </button>
			  <button type="button" className="btn btn-primary px-3 me-1">
				<FaComments/>
			  </button>
			</div>
		  </div>
		</section>

		<section>
		  <p>
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sapiente molestias
			consectetur. Fuga nulla officia error placeat veniam, officiis rerum laboriosam
			ullam molestiae magni velit laborum itaque minima doloribus eligendi! Lorem ipsum,
			dolor sit amet consectetur adipisicing elit. Optio sapiente molestias consectetur.
			Fuga nulla officia error placeat veniam, officiis rerum laboriosam ullam molestiae
			magni velit laborum itaque minima doloribus eligendi!
		  </p>

		  <p><strong>Optio sapiente molestias consectetur?</strong></p>

		  <p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto ex ab aut
			tempora officia libero praesentium, sint id magnam eius natus unde blanditiis. Autem
			adipisci totam sit consequuntur eligendi.
		  </p>

		  <p className="note note-light">
			<strong>Note:</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
			Optio odit consequatur porro sequi ab distinctio modi. Rerum cum dolores sint,
			adipisci ad veritatis laborum eaque illum saepe mollitia ut voluptatum.
		  </p>

		  <p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, libero repellat
			molestiae aperiam laborum aliquid atque magni nostrum, inventore perspiciatis
			possimus quia incidunt maiores molestias eaque nam commodi! Magnam, labore.
		  </p>

		  <img src="https://mdbootstrap.com/img/new/slides/041.jpg" className="img-fluid shadow-1-strong rounded-5 mb-4"
			alt="" />

		  <ul>
			<li>Lorem</li>
			<li>Ipsum</li>
			<li>Dolor</li>
			<li>Sit</li>
			<li>Amet</li>
		  </ul>

		  <p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, temporibus nulla
			voluptatibus accusantium sapiente doloremque. Doloribus ratione laboriosam culpa. Ab
			officiis quidem, debitis nostrum in accusantium dolore veritatis eius est?
		  </p>
		</section>

		</div>
	)

}

export default function Document() {

	return (
		<>

			<section>

				<div className='container'>
					<div className='row flex-row-reverse g-5'>

						<div className='col-sm-12 col-md-12 col-lg-10'>

								<ExampleDoc/>

						</div>

						<div className='col-sm-12 col-md-12 col-lg-2'>

							<h5 className='py-3 mb-3 border-bottom'>Document</h5>

							<ul className="nav nav-pills flex-column mb-auto">
								<li className="nav-item">
									<a href="#" className="nav-link link-dark active" aria-current="page">Overview</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Meta</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Texture</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Materials</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Vertices</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Faces</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Bones</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Animations</a>
								</li>
							</ul>

							<h5 className='py-3 mb-3 border-bottom'>Plugins</h5>

							<ul className="nav nav-pills flex-column mb-auto">
								<li className="nav-item">
									<a href="#" className="nav-link link-dark">Blender</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">Noesis</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">ThreeJS</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">CLI</a>
								</li>
								<li>
									<a href="#" className="nav-link link-dark">FBX</a>
								</li>
							</ul>


						</div>

					</div>
				</div>
			</section>
		</>
	)

}
