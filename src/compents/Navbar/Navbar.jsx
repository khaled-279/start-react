import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar">
      <div className="container">

       
        <NavLink className="navbar-brand text-white fw-bold fs-3" to="/">
          START FRAMEWORK
        </NavLink>

     
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/about">
                ABOUT
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/portfolio">
                PORTFOLIO
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link custom-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

