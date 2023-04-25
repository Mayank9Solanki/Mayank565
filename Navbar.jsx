import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg " id="navbar">
        <div class="container">
          {/* <div class="container-fluid"> */}
          <a class="navbar-brand" href="#" style={{color:"red"}}>
            <h3>Traversal</h3>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                < Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Destinations">
                  Destinations
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Package">
                  Packages
                </Link>
              </li>
              <li class="nav-item  dropdown">
                <a
                  class="nav-link active dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Blog
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/Blogpost">
                      Blog post
                    </Link>
                  </li>
                  
                  <li>
                    <Link class="dropdown-item" to="/Blogsingnel">
                      Blog Signel
                    </Link>
                  </li>
                  <li class="nav-item">
                    <a class="dropdown-item" href="#">
                      Landing Page
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/Contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button class="btn btn-outline-danger" type="submit">
              Get in Touch
            </button>
            <div class="icon m-3">
              <i class="fa-regular fa-moon"></i>
            </div>
            <div class="icon1 m-3">
              <i class="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
