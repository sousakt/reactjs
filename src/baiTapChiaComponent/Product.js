import React from "react";

export default function Product(props) {
  console.log(props);
  return (
    <div className="container">
      <div className="card bg-light" style={{ width: 300 }}>
        <img
          className="card-img-top"
          src={props.product.hinhAnh}
          alt="Card image"
          style={{ maxWidth: "100%", height: 250 }}
        />
        <div className="card-body text-center">
          <h4 className="card-title text-center">{props.product.tenSP}</h4>
          <p className="card-text">
            {/* iPhone X features a new all-screen design. Face ID, which makes your
            face your password */}
            {props.product.moTa}
          </p>
          <a href="#" className="btn btn-primary">
            Detail
          </a>
          <a href="#" className="btn btn-danger">
            Cart
          </a>
        </div>
      </div>
    </div>
  );
}
