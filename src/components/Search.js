import React from "react"

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
      <svg class="bd-placeholder-img card-img-top" width="100%" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Image cap" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
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

export default function Search() {

	return (
		<>
			
			<section>
				<SearchBar/>
				
				<div className='container'>
					<div className='row flex-row-reverse'>
						
						<div className='col-sm-12 col-md-12 col-lg-10'>
						
							<div class='row pt-3 row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 g-md-2 g-sm-1'>
							
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								<TutorialCard/>
								
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
