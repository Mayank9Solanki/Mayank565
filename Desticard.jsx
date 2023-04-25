import React from 'react'

const Desticard = (props) => {
  return (
    <>
      <div className="col-md-4">
            <img
              src={props.img}
              class="img-fluid"
              style={{ borderRadius: "15px" }}
            />
            <p>
              <b>
                <h4>{props.name}</h4>
              </b>
            </p>
            <p className="text">3Days, 4 Nights</p>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <p class="card-title">
                  <small class="text">
                    <b>Start From</b>
                  </small>
                </p>
              </div>
              <div class="col-md-6">
                <p class="visit text-end">
                  <small class="text">
                    <b style={{ color: "red" }}>{props.price}</b>
                  </small>
                </p>
              </div>
            </div>
          </div>
    </>
  );
};

export default Desticard;
