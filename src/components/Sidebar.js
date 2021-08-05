import React from "react"

export default function Sidebar() {

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
			  <h5>Brickout GTK</h5>

			  <p>
				A Brickout Clone using GTK and OpenGL 3.0 in C for Linux.
			  </p>
			  <a role="button" className="btn btn-primary" href="https://mdbootstrap.com/docs/standard/"
				target="_blank">View On Github<i className="fas fa-download ms-2"></i></a>
			</section>

			<section className="text-center">
			  <h5 className="mb-4">Support the Creator</h5>

			  <div className="embed-responsive embed-responsive-16by9 shadow-4-strong">
				<img src='https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbec633ae2b882fff068659_ko-fi_horizontal-p-800.png' className='mw-100'/>
			  </div>

			</section>
		  </section>
		</div>
	)

}
