import React from "react"
import { FaTwitter, FaPhone, FaGithub, FaYoutube } from "react-icons/fa";

function SocialMedia() {

	return (
		<section className="p-4 border-bottom">
		  <div className="container d-flex justify-content-center justify-content-lg-between">
		  <div className="me-5 d-none d-lg-block">
			<span>Get connected with us on social networks:</span>
		  </div>

		  <div>
			<a href="" className="me-4 text-reset">
			  <FaTwitter/>
			</a>
			<a href="" className="me-4 text-reset">
			  <FaYoutube/>
			</a>
			<a href="" className="me-4 text-reset">
			  <FaGithub />
			</a>
		  </div>

		  </div>
		</section>
	)

}

export default function Footer() {

	return (

		<footer className="text-center text-lg-start bg-dark text-light border-top mt-5">

		  <section className="pt-2" style={{ backgroundColor : "rgba(255, 255, 255, 0.05)" }}>
		    <div className="container text-center text-md-start mt-5">

		      <div className="row mt-3">

		        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

		          <h6 className="text-uppercase fw-bold mb-4">
		            License - BSD0
		          </h6>
		          <p>

					Permission to use, copy, modify, and/or distribute these examples for any
					purpose with or without fee is hereby granted.
		          </p>
		        </div>

		        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

		          <h6 className="text-uppercase fw-bold mb-4">
		          Resources
		          </h6>
		          <p>
		            <a href="#!" className="text-reset">Blog</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Tutorials</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Tools</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Format</a>
		          </p>
		        </div>

		        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
		          <h6 className="text-uppercase fw-bold mb-4">
		           Support
		          </h6>
		          <p>
		            <a href="#!" className="text-reset">Patreon</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Kofi</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Crypto</a>
		          </p>
		          <p>
		            <a href="#!" className="text-reset">Paypal</a>
		          </p>
		        </div>

		        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
		          <h6 className="text-uppercase fw-bold mb-4">
		            Contact
		          </h6>
		          <p> Reddit : u/kion_dgl</p>
		          <p>
		            Email : kion@dashgl.com
		          </p>
		          <p>
		          	Twitter : @kion_dgl
		          </p>
		          <p>Discord : @kion</p>
		        </div>

		      </div>

		    </div>
		  </section>

		  <div className="text-center p-4" style={{ backgroundColor : "rgba(0, 0, 0, 0.05)" }}>
		     Copyright © 2016 - 2021 DashGL Project
		  </div>

		</footer>
	)
}
