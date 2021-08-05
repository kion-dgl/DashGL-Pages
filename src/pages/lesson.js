import React from "react"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import { FaTwitter, FaFacebook, FaComments } from "react-icons/fa";

function Post() {

	return (
  <main className="mt-4 mb-5">
    <div className="container">
      <div className="row">
        <div className="col-md-8 mb-4">
          <section className="border-bottom mb-4">
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

          <section className="border-bottom border-top pt-3 mb-3">
            <p className="text-center"><strong>Comments: 3</strong></p>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(24).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Marta Dolores</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(25).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Valeria Groove</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-2">
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(26).jpg"
                  className="img-fluid shadow-1-strong rounded-5" alt="" />
              </div>

              <div className="col-10">
                <p className="mb-2"><strong>Antonia Velez</strong></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio est ab iure
                  inventore dolorum consectetur? Molestiae aperiam atque quasi consequatur aut?
                  Repellendus alias dolor ad nam, soluta distinctio quis accusantium!
                </p>
              </div>
            </div>
          </section>

          <section>
            <p className="text-center"><strong>Leave a reply</strong></p>

            <form>
              <div className="form-outline mb-4">
                <input type="text" id="form4Example1" className="form-control" />
                <label className="form-label" htmlFor="form4Example1">Name</label>
              </div>

              <div className="form-outline mb-4">
                <input type="email" id="form4Example2" className="form-control" />
                <label className="form-label" htmlFor="form4Example2">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <textarea className="form-control" id="form4Example3" rows="4"></textarea>
                <label className="form-label" htmlFor="form4Example3">Text</label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form4Example4" checked />
                <label className="form-check-label" htmlFor="form4Example4">
                  Send me a copy of this comment
                </label>
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Publish
              </button>
            </form>
          </section>
        </div>

        <Sidebar/>

      </div>
    </div>
  </main>
	)

}

export default function Lesson() {

	return (
		<>
			<Navbar/>
			<Post/>
			<Footer/>
		</>
	)

}
