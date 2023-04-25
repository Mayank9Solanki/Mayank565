import React from "react";
import { JSON } from "./Product";

const Iphone = () => {
  const products = JSON.products;
  return (
    <>
      {products.map((x) => {
        return (
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <img
                      src={x.thumbnail}
                      className="card-img-top"
                      style={{ width: "250px", height: "auto" }}
                    />
                    <p>ID:{x.id}</p>
                    <br />
                    <hr />
                    <p>title:{x.title}</p>
                    <br />
                    <hr />
                    <p>DESCRIPITION:{x.description}</p>
                    <br />
                    <hr />
                    <p>PRICE:{x.price}</p>
                    <br />
                    <hr />
                    <p>discountPercentage:{x.discountPercentage}</p>
                    <br />
                    <p style={{ color: "red" }}>rating:{x.rating}</p>
                    <br />
                    <hr />
                    <p style={{ color: "blue" }}>stock:{x.stock}</p>
                    <br />
                    <hr />
                    <p style={{ color: "black" }}>
                      <b>brand:{x.brand}</b>
                    </p>
                    <br />
                    <hr />
                    <p style={{ color: "black" }}>category:{x.category}</p>
                    <br />
                    <hr />

                    {/* <img src={x.images} className="card-img-top" alt="..." /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Iphone;
