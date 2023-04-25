import React from "react";
import CountUp from "react-countup";
import City from "./City";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="banner6.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1
                style={{
                  marginBottom: "80px",
                  marginRight: "80%",
                  color: "white",
                }}
              >About
              </h1>
            </div>
          </div>
        </div>
      </div>
     
      <br />
      <br />
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p class="visit text-center">
              <small class="text">
                <b style={{ color: "red" }}>ABOUT US</b>
              </small>
            </p>
            <p class="visit text-center">
              <small class="text">
                <h1>
                  Travel To Make Memories All Around The <br /> World.
                </h1>
              </small>
            </p>
            <br />
            <p className="visit text-center">
              <small className="text-mute">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Harum labore sed, veniam nisi sunt laboriosam <br />
                  ducimus, odio aspernatur fugiat minima blanditiis dignissimos.
                </p>
              </small>
            </p>
            <button
              className="button"
              id="btn1"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <img
              src="banner3.jpg"
              style={{ width: "50%", marginLeft: "25%", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className="container-fulid" style={{ backgroundColor: "gray" }}>
        <div className="row">
          <div className="col-md-6">
            <small class="text" />
            <p class="visit text-center">
              <small class="text">
                <b style={{ color: "red" }}>WHY CHOOSE US</b>
              </small>
            </p>
            <p class="visit text-center">
              <small class="text">
                <h1>
                  Life Begins At The End Of
                  <br /> Your Comfort Zone.
                </h1>
              </small>
            </p>
          </div>
          <div className="col-md-6">
            <p className="text-dark">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore sed,
              <br /> veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat
              minima blanditiis
              <br /> dignissimos.
            </p>
            <br />
            <p className="text-dark">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
              labore sed, <br />
              veniam nisi sunt laboriosam ducimus, odio aspernatur fugiat minima
              blanditiis
              <br /> dignissimos.
            </p>
            <br />
            <br />
            <button
              className="button text-center"
              id="btn2"
              // style={{
              //   backgroundColor: "black",
              //   borderRadius: "10px",
              //   width: "150px",
              //   height: "60px",
              //   color: "white",
              // }}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div class="col-md-4">
            <img
              src="g1.jpg"
              class="card-img-top"
              style={{ borderRadius: "10px" }}
            />
            <div class="body">
              <h5 class="card-title" style={{ color: "red" }}>
                Lorem
              </h5>
              <h4>Invester Relations</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="g2.jpg"
              class="card-img-top"
              style={{ borderRadius: "10px" }}
            />
            <div class="body">
              <h5 class="card-title" style={{ color: "red" }}>
                Lorem
              </h5>
              <h4>Partner With Car</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <img
              src="g3.jpg"
              class="card-img-top"
              style={{ borderRadius: "10px" }}
            />
            <div class="body">
              <h5 class="card-title" style={{ color: "red" }}>
                Lorem
              </h5>
              <h4>Customer Care</h4>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      {/* countup */}
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="banner3a.jpg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
            <div
        className="container-fuild"
        style={{ height: "300px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
            <i class="fa-solid fa-face-smile"style={{fontSize:"100px"}}></i><br/>
              <CountUp
                end={1730}
                style={{ color: "white", fontSize: "80px" }}
              />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>Happy Customers</b>
                </small>
              </p>
            </div>
            <div className="col-md-4">
            <i class="fa-solid fa-users" style={{fontSize:"100px"}}></i><br/>
              <CountUp end={730} style={{ color: "white", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>custom Products</b>
                </small>
              </p>
            </div>
            <div className="col-md-4">
            <i class="fa-solid fa-database"style={{fontSize:"100px"}}></i><br/>
              <CountUp end={30} style={{ color: "white", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>Branches</b>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    
            </div>
          </div>
        </div>
      </div>
        <br />
      <br />
      <br />
      <br />
      <div className="container-fuild">
        <div className="row">
          <p class="visit text-center">
            <small class="text">
              <b style={{ color: "red" }}>OUR TEAM</b>
            </small>
          </p>
          <p class="visit text-center">
            <small class="text">
              <h1>Meet Our Guides</h1>
            </small>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img
              src="c1.jpg"
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <h5
              class="text-center"
              style={{ marginTop: "-80px", color: "white" }}
            >
              Alexander
            </h5>
            <p
              class="text-center"
              style={{ marginTop: "-5px", color: "white" }}
            >
              Description
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="c2.jpg"
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <h5
              class="text-center"
              style={{ marginTop: "-80px", color: "white" }}
            >
              Victoria
            </h5>
            <p
              class="text-center"
              style={{ marginTop: "-5px", color: "white" }}
            >
              Description
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="c3.jpg"
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <h5
              class="text-center"
              style={{ marginTop: "-80px", color: "white" }}
            >
              Smith Roy
            </h5>
            <p
              class="text-center"
              style={{ marginTop: "-5px", color: "white" }}
            >
              Description
            </p>
          </div>
          <div className="col-md-3">
            <img
              src="c4.jpg"
              style={{ height: "300px", borderRadius: "10px" }}
            />
            <h5
              class="text-center"
              style={{ marginTop: "-80px", color: "white" }}
            >
              Johnson
            </h5>
            <p
              class="text-center"
              style={{ marginTop: "-5px", color: "white" }}
            >
              Description
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
