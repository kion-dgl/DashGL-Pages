import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

function MyLesson ( props ) {

	return (
		<div className="row">
             <div className="col-md-4 mb-4">
                <div className="bg-image hover-overlay shadow-1-strong rounded ripple" data-mdb-ripple-color="light">
                  <img src={ props.img } class='img-fluid'/>
                  <a href="#!">
                    <div className="mask" style={{backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a>
                </div>
              </div>

              <div className="col-md-8 mb-4">
                <h5> { props.name } </h5>
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
		<>
			<Navbar/>

  <main className="my-5">
    <div className="container">
      <div className="row">
        <div className="col-md-9 mb-4">
          <section>
          	<MyLesson name='Introduction' img='https://gtk.dashgl.com/img/bricks_017.png'/>
          	<MyLesson name='Open a Window' img='https://gtk.dashgl.com/img/bricks_001.png'/>
          	<MyLesson name='Draw a Triangle' img='https://gtk.dashgl.com/img/bricks_002.png'/>
          	<MyLesson name='Separate Shaders' img='https://gtk.dashgl.com/img/bricks_003.png'/>
          	<MyLesson name='Shader Program' img='https://gtk.dashgl.com/img/bricks_004.png'/>
          	<MyLesson name='Orthagonal Coordinates' img='https://gtk.dashgl.com/img/bricks_005.png'/>
          	<MyLesson name='Draw a Ball' img='https://gtk.dashgl.com/img/bricks_006.png'/>
          	<MyLesson name='Set Ball Position' img='https://gtk.dashgl.com/img/bricks_007.png'/>
          	<MyLesson name='Move a Ball' img='https://gtk.dashgl.com/img/bricks_008.png'/>
          	<MyLesson name='Bounce a Ball' img='https://gtk.dashgl.com/img/bricks_009.png'/>
          	<MyLesson name='Define Ball Struct' img='https://gtk.dashgl.com/img/bricks_010.png'/>
          	<MyLesson name='Draw a Paddle' img='https://gtk.dashgl.com/img/bricks_011.png'/>
          	<MyLesson name='Paddle Uniform Color' img='https://gtk.dashgl.com/img/bricks_012.png'/>
          	<MyLesson name='Keydown Callbacks' img='https://gtk.dashgl.com/img/bricks_013.png'/>
          	<MyLesson name='Paddle Hit Detection' img='https://gtk.dashgl.com/img/bricks_014.png'/>
          	<MyLesson name='Draw Row of Bricks' img='https://gtk.dashgl.com/img/bricks_015.png'/>
          	<MyLesson name='Draw Grid of Bricks' img='https://gtk.dashgl.com/img/bricks_016.png'/>
          	<MyLesson name='Break Some Bricks' img='https://gtk.dashgl.com/img/bricks_017.png'/>
          </section>
        </div>

       	<Sidebar/>
      </div>



      </div>
  </main>

			<Footer/>
		</>
	)

}
