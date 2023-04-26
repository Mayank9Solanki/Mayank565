import logo from "./logo.svg";
import CountUp from "react-countup";
import "./App.css";
import City from "./City";

function App() {
  return (
    <>
      
      {/* corser */}
      <div className="course">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="banner1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h1>
                  You don't need to go far to<br></br> find what matters.
                </h1>
                <p>Discover your next adventure</p>

                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Destinaion
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Asia
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Africa
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              America
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <input type="date" class="Date"></input>
                    </div>
                    <div class="col-4">
                      <button class="btn btn-danger" type="search" id="btn1">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="banner2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h1>
                  You don't need to go far to<br></br> find what matters.
                </h1>
                <p>Discover your next adventure</p>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Destinaion
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Asia
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Africa
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              America
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <input type="date" class="Date"></input>
                    </div>
                    <div class="col-4">
                      <button class="btn btn-danger" type="search" id="btn1">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="banner3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h1>
                  You don't need to go far to<br></br> find what matters.
                </h1>
                <p>Discover your next adventure</p>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Destinaion
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Asia
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Africa
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              America
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <input type="date" class="Date"></input>
                    </div>
                    <div class="col-4">
                      <button class="btn btn-danger" type="search" id="btn1">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img src="banner4.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block" id="text">
                <h1>
                  You don't need to go far to<br></br> find what matters.
                </h1>
                <p>Discover your next adventure</p>
                <div class="container">
                  <div class="row">
                    <div class="col-4">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Destinaion
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Asia
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Africa
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              America
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-4">
                      <input type="date" class="Date"></input>
                    </div>
                    <div class="col-4">
                      <button class="btn btn-danger" type="search">
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="container my-5">
        <h3 className="visit">VISIT</h3>
        <br />
        <h1>Popular Destinations</h1>
      </div>
      {/* card */}
      <div class="container">
        <div class="row">
          <City img="g1.jpg" day="3day 4night" city="paris" price="$1650"/>
          <City img="g2.jpg" day="3day 4night" city="Maldivis" price="$1750"/> 
          <City img="g3.jpg" day="3day 4night" city="Bankok" price="$1350"/> 
          <City img="g4.jpg" day="3day 4night" city="Greece" price="$1850"/> 
          <City img="g5.jpg" day="3day 4night" city="LonDon" price="$1950"/> 
          <City img="g6.jpg" day="3day 4night" city="Julian Alps" price="$2050"/> 
          <City img="g7.jpg" day="3day 4night" city="Thailend" price="$1750"/> 
          <City img="g8.jpg" day="3day 4night" city="Singapore" price="$1550"/> 
        </div>
      </div>

      {/* countup */}

      <div
        className="container-fuild my-5"
        style={{ backgroundColor: "white" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <CountUp end={730} style={{ color: "red", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>Branches</b>
                </small>
              </p>
            </div>
            <div className="col-md-3">
              <CountUp end={1680} style={{ color: "red", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>Travel Guides</b>
                </small>
              </p>
            </div>
            <div className="col-md-3">
              <CountUp end={812} style={{ color: "red", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>THappy Customers</b>
                </small>
              </p>
            </div>
            <div className="col-md-3">
              <CountUp end={990} style={{ color: "red", fontSize: "80px" }} />
              <br />
              <p class="card-title">
                <small class="text-muted ">
                  <b style={{ fontSize: "20px" }}>Awards</b>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <img src="g10.jpg" class="img-fluid rounded-start rounded-3" />
          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
                <img src="g9.jpg" class="img-fluid rounded-start rounded-3" />
              </div>
              <div className="col-md-6">
                <img src="g8.jpg" class="img-fluid rounded-start rounded-3" />
              </div>
              <div className="col-md-6 mt-3">
                <img src="g7.jpg" class="img-fluid rounded-start rounded-3" />
              </div>
              <div className="col-md-6 mt-3">
                <img src="g6.jpg" class="img-fluid rounded-start rounded-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="banner2.jpg" class="d-block w-100" alt="..." />
            <div
              class="carousel-caption d-none d-md-block"
              style={{ marginLeft: "500px", marginBottom: "150px" }}
            >
              <h1>
                Traveling Makes A Man Wiser,
                <br /> But Less Happy.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                beatae laudantium <br /> voluptate rem ullam dolore nisi
                voluptatibus esse quasi. Integer sit amet .Lorem <br />
                ipsum dolor sit amet adipisicing elit.
              </p>
              <div class="col">
                <button
                  class="btn btn-danger"
                  id="btn1"
                  type="search"
                  style={{ width: "200px", height: "50px" }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <p class="visit text-center">
              <small class="text">
                <b style={{ color: "red" }}>HERE’S WHAT THEY HAVE TO SAY</b>
              </small>
            </p>
            <p class="visit text-center">
              <small class="text">
                <h1>Our Clients Do The Talking</h1>
              </small>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p class="visit text-center">
              <i
                class="fa-solid fa-quote-left"
                style={{ fontSize: "70px", color: "red" }}
              ></i>
            </p>
            <p class="visit text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              beatae laudantium voluptate rem
              <br /> ullam dolore nisi voluptatibus esse quasi. Integer sit amet
              .Lorem ipsum dolor sit amet adipisicing
              <br /> elit.
            </p>
            <div id="carouselExampleIndicators" class="carousel slide ">
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active bg-dark"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  class="active bg-dark"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  class="active bg-dark"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner ">
                <div class="carousel-item active">
                  <img
                    src="c1.jpg"
                    class="rounded-circle mx-auto d-block"
                    alt="..." style={{width:"100px"}}
                  ></img>
                  <h4 className="text-center">Rohit Paul</h4>
                </div>
                <div class="carousel-item">
                  <img
                    src="c2.jpg"
                    class="rounded-circle mx-auto d-block"
                    alt="..." style={{width:"100px"}}
                  ></img>
                  <h4 className="text-center">Shveta</h4>
                </div>
                <div class="carousel-item">
                  <img
                    src="c3.jpg"
                    class="rounded-circle mx-auto d-block"
                    alt="..." style={{width:"100px"}}
                  ></img>
                  <br />
                  <h4 className="text-center">Roy Lendersion</h4>
                </div>
              </div>
              <br />
              <br />
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default App;
