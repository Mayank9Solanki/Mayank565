import React from "react";
import { JSON } from "./Product";

const Iphone = () => {
  const products = JSON.products;
  return (
    <>
      {products.map((x) => {
        return (
          <div className="container" align="center">
            <div className="row">
              <div className="col-md-4">
                <div className="card" style={{ width: "18rem" }}>
                  <div className="card-body" style={{ borderRadius: "5px" }}>
                    <img src={x.thumbnail} className="card-img-top" alt="..." />
                    <p>ID:{x.id}</p><br/>
                    <p>DESCRIPITION:{x.description}</p><br/>
                    <p>PRICE:{x.price}</p><br/><hr/>
                    <p>discountPercentage:{x.discountPercentage}</p><br/>
                    <p style={{ color: "red" }}>rating:{x.rating}</p><br/><hr/>
                    <p style={{ color: "blue" }}>stock:{x.stock}</p><br/>
                    <p style={{ color: "gold" }}>brand:{x.brand}</p><br/>
                    <p style={{ color: "black" }}>category:{x.category}</p><br/><hr/>
                    <div className="card-body">
                      <h5 className="card-title">{x.title}</h5><br/>
                    </div>

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
