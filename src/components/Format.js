import React from "react"
import { FaCheck } from "react-icons/fa";

const HCard = function() {

	return (
	<div className='col-md-6'>
<div className="card">
  <div className="row g-0">
    <div className="col-md-5">
      <img src="https://kenney.nl/thumbs/assets/blaster-kit/preview-kenney-350x196.png" className="img-fluid rounded-start" className='h-100 w-100'/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
	)
	
}

const MyCard = function( props ) {
	
	return (
	  <div className="col">
    <div className="card h-100">
      <img
        src="https://mdbootstrap.com/img/new/standard/city/042.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title"> { props.name } </h5>
        <p className="card-text">This is a short card.</p>
      </div>
      <div className="card-footer">
        <small className="text-muted">Download / Source</small>
      </div>
    </div>
  </div>
	)

}

const CardList = function() {

	return (
		<section>
			<div className='container'>
				<h4 className='mb-4'>Format Support</h4>
				
				<div className="row row-cols-1 row-cols-md-4 g-4">
					
					<MyCard name="Blender"/>
					<MyCard name="FBX"/>
					<MyCard name="Noesis"/>
					<MyCard name="Godot"/>
					<MyCard name="Unity"/>
					<MyCard name="Threejs"/>
					<MyCard name="CLI"/>
					<MyCard name="Document"/>
					
				</div>
				
			</div>
		</section>
	)
	
}

export default function Formats() {

	return (
	<section>
		<div className='container'>
			<h4 className='mt-4 mb-2'>Format Support</h4>
			<div className="table-responsive">
				<table className="table text-center">
				<thead>
				  <tr>
				    <th></th>
				    <th>Blender</th>
				    <th>Noesis</th>
				    <th>ThreeJs</th>
				    <th>FBX</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
				    <th scope="row" className="text-start">Import</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
					<tr>
				    <th scope="row" className="text-start">Import Mesh</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
					<tr>
				    <th scope="row" className="text-start">Import Textures</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
					<tr>
				    <th scope="row" className="text-start">Import Material</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
					<tr>
				    <th scope="row" className="text-start">Import Bones</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
					<tr>
				    <th scope="row" className="text-start">Import Animations</th>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				    <td><FaCheck/></td>
				  </tr>
				  
				</tbody>
				</table>
			</div>
		</div>
		<div className='container'>
			<h4 className='mt-4 mb-2'>Free Assets</h4>
			<div className='row g-5'>
				<HCard/>
				<HCard/>
			</div>
		</div>
	</section>
	)
	
	
}


