import React from "react";

export default function FunctionProps(props) {
  console.log(props);
  return (
    <div>
      <h3>Function Props</h3>
      <p>type : {props.loaiCho}</p>
      <img src={props.hinhCho} alt="hình đẹp" />
    </div>
  );
}
