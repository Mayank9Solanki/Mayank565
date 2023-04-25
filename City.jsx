import React from "react";

const City = (props) => {
  return (
    <>
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="row">
            <div class="col-md-6">
              <img
                src={props.img}
                class="img-fluid rounded-start ms-5 mt-5 mb-5 imgp"
                style={{ width: "200px", borderRadius: "10px" }}
              />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title mt-5">{props.city}</h5>
                <br />
                <p class="card-text">
                  <small class="text-muted">{props.day}</small>
                  <hr />
                </p>
                <div class="row">
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
                <hr />
                <h5 class="text-muted">Per person on twin shring</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default City;
