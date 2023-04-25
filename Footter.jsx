import React from "react";

const Footter = () => {
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-3">
            <p>
              <b>Company</b>
            </p>
            <br />
            <p class="text-muted">Home</p>
            <p class="text-muted">About us</p>
            <p class="text-muted">Services</p>
            <p class="text-muted">Blog</p>
            <p class="text-muted">Contact Us</p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Useful Links</b>
            </p>
            <br />
            <p class="text-muted">Destinations</p>
            <p class="text-muted">Our Branches</p>
            <p class="text-muted">Latest Media</p>
            <p class="text-muted">About Company</p>
            <p class="text-muted">Our Packages</p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Our Services</b>
            </p>
            <br />
            <p class="text-muted">Privacy Policy</p>
            <p class="text-muted">Our Terms</p>
            <p class="text-muted">Services</p>
            <p class="text-muted">Landing Page</p>
            <p class="text-muted">Our Guides</p>
          </div>
          <div className="col-md-3">
            <p>
              <b>Newsletter</b>
            </p>
            <br />
            <div class="col-md-0" style={{ backgroundColor: "lightwhite" }}>
              <h4>Get latest updates and offers.</h4>
              <form
                class="d-flex"
                role="search"
                style={{ backgroundColor: "white"}}
              >
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  class="btn btn-danger fubtn"
                  style={{ color: "white" }}
                  type="submit"
                 
                >
                  Search
                </button>
              </form>
              <br />
              <p className="text-muted">
                Sign up for our latest news & articles. We won’t give you spam
                mails.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>
              © 2020 Traversal. All rights reserved.Design by<b>W3Layouts</b>
            </p>
          </div>
          <div className="col-md-6 text-end">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-skype"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-square-google-plus"></i>
            <i class="fa-brands fa-watchman-monitoring"></i>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Footter;
