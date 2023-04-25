import React from "react";

const Contact = () => {
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="banner6.jpg" class="d-block img-fluid" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                style={{
                  marginBottom: "80px",
                  marginRight: "80%",
                  color: "white",
                }}
              >
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Get in touch</h1>
            <br />
            <p class="text-muted">
              <small>
                <b>
                  Hi there, We are available 24/7 by fax, e-mail or by phone.
                  <br />
                  Drop us line so we can talk futher about that.
                </b>
              </small>
            </p>
            <br />
            <br />
            <h3>Email:</h3>
            <p class="text-muted">Mayank.scmt@gmail.com</p>
            <br />
            <br />

            <h3>Visit Us:</h3>
            <p class="text-muted">
              78-80 Upper St Giles St. Norwich NR2 1LT United Kingdom.
            </p>
            <br />
            <br />
            <h3>Contact:</h3>
            <p class="text-muted">+91 8153999543</p>
          </div>
          <div className="col-md-6 mt-5">
            <form action="#" method="post">
              <div class="input-grids row">
                <input
                  type="text"
                  name="Name"
                  class="form-control frm mb-5"
                  placeholder="Your Name*"
                  required
                  fdprocessedid="myle4c"
                />
                <input
                  type="text"
                  name="Email"
                  class="form-control frm mb-5"
                  placeholder="Your Email*"
                  required
                  fdprocessedid="kfgrje"
                />

                <input
                  type="text"
                  name="Subject"
                  class="form-control frm mb-5"
                  placeholder="Subject*"
                  required
                  fdprocessedid="kfgrje"
                />

                <div class="form-group">
                  <textarea
                    name="comment"
                    class="form-control frm mb-5"
                    placeholder="Your comment*"
                    required
                    spellCheck="false"
                    style={{ height: "100px" }}
                  ></textarea>
                </div>
                <div class="submit text-end">
                  <button
                    class="btn btn-style btn-dark"
                    fdprocessedid="jgjdjv8" id="btn1"
                  >
                    Post Commmet
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div><br/><br/>
      <div className="container">
        <h1>Map</h1>
      <div className="col-md-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d23073.471825092245!2d71.83601901461415!3d22.57767158657925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676454814492!5m2!1sen!2sin"
           
            allowfullscreen=""
            loading="lazy"
            className="img-fluid"
            style={{
                width:"1550px",
                height:"450px"
            }}
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
    </>
  );
};

export default Contact;
