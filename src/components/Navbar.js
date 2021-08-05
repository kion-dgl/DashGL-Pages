import React from "react"
import { Link } from "gatsby"

export default function Navbar() {

	return (

<nav className="navbar navbar-expand-lg py-2 navbar-dark" style={{ backgroundColor : "#1f5756" }}>

  <div className="container">
    <a className="navbar-brand me-2 d-flex align-items-center" href="https://mdbgo.com/">
      <img src="/dash_icon.png" height="25" style={{ marginRight : "0.5rem" }} alt="" />
      DashGL
    </a>

	<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarButtonsExample" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span>
	</button>

    <div className="collapse navbar-collapse" id="navbarButtonsExample">

	  <ul className="me-auto"></ul>

      <div className="navbar-nav d-flex align-items-center">
      	<Link to="/" className="nav-link active">Home</Link>
      	<Link to="/tutorials" className="nav-link active">Tutorials</Link>
      	<Link to="/tutorial" className="nav-link active">Tutorial</Link>
      	<Link to="/lesson" className="nav-link active">Lesson</Link>
      	<Link to="/blog" className="nav-link active">Blog</Link>
      	<Link to="/post" className="nav-link active">Post</Link>
      	<Link to="/format" className="nav-link active">Format</Link>
      </div>

    </div>
  </div>
</nav>
	)

}
