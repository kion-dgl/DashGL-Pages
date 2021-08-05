import React from "react"

export default function Hero() {

	const bg = [
		'https://image.freepik.com/free-vector/flat-geometric-background_23-2148957201.jpg',
		'https://img.freepik.com/free-vector/gradient-hexagonal-background_23-2148947773.jpg',
		'https://www.freevector.com/uploads/vector/preview/30347/Creative_Geometric_Background.jpg'
	]

	const myStyle = {
		backgroundImage: `url(${bg[0]})`,
		backgroundSize : "cover",
		backgroundPosition: "center",
		backgroundRepeat : "no-repeat"
	}

	return (
		<section style={ myStyle }>
		<div className="container py-1">
		    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
		      <div className="col-10 col-sm-8 col-lg-6">
		        <img src="/dashie_indexed.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="700" height="500" />
		      </div>
		      <div className="col-lg-6">
		        <h1 className="display-5 fw-bold lh-1 mb-3">DashGL</h1>
		        <p className="lead">
					DashGL is a site devoted to resources for learning
					hardware accerlated graphics using C on Linux.
					The site offers a number of project-based tutorials
					where you start from a simple Hello-World example
					and build up to a working project.
				</p>
		        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
		          <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
		          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>
	)
}
