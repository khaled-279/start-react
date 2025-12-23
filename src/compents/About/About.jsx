import StarDivider from "../StarDivider/StarDivider";

export default function About() {
  return (
    <div className="home">
      <section className="container p-5 home">
      <h2 className="text-center text-uppercase mt-5 text-white">about component</h2>
      <StarDivider/>
              <div className="row justify-content-center text-white mt-5">
          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including
              HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
          </div>

          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including
              HTML, CSS, and JavaScript as well as optional SASS
              stylesheets for easy customization.
            </p>
          </div>
        </div>

    </section>
    </div>
    
  )
}
