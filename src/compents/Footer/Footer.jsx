import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white pt-5 pb-5 mb-0">
        <div className="container">
          <div className="row text-center">

           
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="mb-1">2215 John Daniel Drive</p>
              <p>Clark, MO 65243</p>
            </div>

            
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-4">Around the Web</h4>

              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="footer-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="footer-icon">
                  <FaTwitter />
                </a>
                <a href="#" className="footer-icon">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="footer-icon">
                  <FaGlobe />
                </a>
              </div>
            </div>

       
            <div className="col-md-4 mb-4">
              <h4 className="text-uppercase mb-4">About Freelancer</h4>
              <p>
                Freelance is a free to use, licensed Bootstrap theme
                created by Route
              </p>
            </div>

          </div>
        </div>
      </footer>

      
      <div className="bg-black text-white text-center py-3">
        Copyright © Your Website 2021
      </div>
    </>
  );
}
