import React from "react"

export default function FeaturedPost() {

	return (
		<section>
		<div class='container'>
			<h4 className="mb-5"><strong>Featured post</strong></h4>
          <div className="row">
            <div className="col-md-6 gx-5 mb-4">
              <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
                <img src="https://mdbootstrap.com/img/new/slides/031.jpg" className="img-fluid" />
                <a href="#!">
                  <div className="mask" style={{ backgroundColor : "rgba(251, 251, 251, 0.15);" }}></div>
                </a>
              </div>
            </div>

            <div className="col-md-6 gx-5 mb-4">
              <h4><strong>Facilis consequatur eligendi</strong></h4>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
              </p>
              <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                alias, unde optio accusantium soluta, iusto molestiae adipisci et?
              </p>
            </div>
			</div>
          </div>
        </section>
	)
}
