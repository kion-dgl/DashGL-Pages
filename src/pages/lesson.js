import React from "react"
import { graphql } from 'gatsby'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaTwitter, FaFacebook, FaComments } from "react-icons/fa";

function Sidebar() {

	const TableOfContents = [
		"Introduction",
		"Open a Window",
		"Draw a Triangle",
		"Separate Shaders",
		"Shader Program",
		"Orthagonal Coordinates",
		"Draw a Ball",
		"Set Ball Position",
		"Move a Ball",
		"Bounce a Ball",
		"Define Ball Struct",
		"Draw a Paddle",
		"Paddle Uniform Color",
		"Keydown Callbacks",
		"Paddle Hit Detection",
		"Draw Row of Bricks",
		"Draw Grid of Bricks",
		"Break Some Bricks"
	]

	return (
		<div className="col-md-3 mb-4">
			<section>
				<ol className="list-group list-group-numbered">
		  		{TableOfContents.map( (lesson, index) => {
					if(index !== 3) {
						return <li key={lesson} className="list-group-item">{ lesson }</li>
					} else {
						return <li key={lesson} className="list-group-item active">{ lesson }</li>
					}
				})}
				</ol>
			</section>
		</div>
	)

}


function Post( { data } ) {

	console.log( data.html );

	return (
  <main className="mt-4 mb-5">
    <div className="container">
      <div className="row flex-row-reverse">
        <div className="col-md-8 mb-4">
          <section className="border-bottom mb-4">
            <img src="https://gtk.dashgl.com/img/bricks_003.png"
              className="img-fluid shadow-2-strong rounded-5 mb-4" alt="" />

            <div className="row align-items-center mb-4">
              <div className="col-lg-6 text-center text-lg-start mb-3 m-lg-0">
                <img src="https://avatars.githubusercontent.com/u/25621780?v=4" className="rounded-circle shadow-1-strong me-2"
                  height="35" alt="" loading="lazy" />
                <span> Published <u>Sept.  24, 2017</u> by</span>
                <a href="https://github.com/kion-dgl" className="text-dark">Kion</a>
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
			
			<section>Before Post Content</section>
			<div dangerouslySetInnerHTML={{ __html : data.html }} />
			<section>After Post Content</section>

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

export default function Lesson( { data } ) {

	console.log( data );
	const { node } = data.allMarkdownRemark.edges[ 0 ];
	console.log( node );


	return (
		<>
			<Navbar/>
			<Post data={ node }/>
			<Footer/>
		</>
	)

}

export const query = graphql`
query GetPost {
  allMarkdownRemark(
    filter: {frontmatter: {index: {eq: 0}, slug: {eq: "gtk-brickout"}}}
  ) {
    edges {
      node {
        id
        html
        parent {
          id
        }
        frontmatter {
          author
          index
          slug
          title
          source
        }
      }
    }
  }
}
`
