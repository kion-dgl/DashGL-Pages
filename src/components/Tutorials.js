import React from "react"
import { FaCode } from "react-icons/fa";

const MyTutorial = function() {

	return (
		<div className="row">
			<div className="col-md-4 mb-4">
				<div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
					<img src="https://mdbootstrap.com/img/new/standard/nature/002.jpg" className="img-fluid" />
					<a href="#!">
						<div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} ></div>
					</a>
				</div>
			</div>

			<div className="col-md-8 mb-4">
				<h5>Very long post title</h5>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus ratione
					necessitatibus itaque error alias repellendus nemo reiciendis aperiam quisquam
					minus ipsam reprehenderit commodi ducimus, in dicta aliquam eveniet dignissimos
					magni.
				</p>
				<button type="button" className="btn btn-primary">Read</button>
			</div>
		</div>
	)

}

export default function Tutorials() {

	return (
		<section>
			<div className='container'>
				<h4 className='mb-2 mt-4'>Latest Tutorials</h4>
				
				<MyTutorial/>
				<MyTutorial/>
				<MyTutorial/>
				
			</div>
		</section>
	)
}
