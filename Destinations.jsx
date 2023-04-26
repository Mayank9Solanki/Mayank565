import React from "react";
import Desticard from "./Desticard";

const Destinations = () => {
  return (
    <>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src="banner6.jpg" class="img-fluid" />
            <div class="carousel-caption d-none d-md-block">
              <h1
                style={{
                  marginBottom: "80px",
                  marginRight: "80%",
                  color: "white",
                }}
              >
                Destinations
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 class="text">Destinations</h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Desticard img="g1.jpg" name="Paris" price="1750"/>
          <Desticard img="g2.jpg" name="Bankok" price="1850"/>
          <Desticard img="g3.jpg" name="Maldivis" price="1950"/>
          <Desticard img="g4.jpg" name="Greece" price="2050" />
          <Desticard img="g5.jpg" name="London" price="2000"/>
          <Desticard img="g6.jpg" name="Julin Alps" price="1950"/>
          <Desticard img="g7.jpg" name="Thailend" price="1650"/>
          <Desticard img="g8.jpg" name="Singapur" price="1550" />
          <Desticard img="g9.jpg" name="Egypt" price="1450"/>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Destinations;
