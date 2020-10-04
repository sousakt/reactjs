import React, { Component } from "react";

export default class DemoDataBiding extends Component {
  //thuộc tính class
  ten = "Nguyen van A";
  lop = 52;
  //phương thức class

  renderName = () => {
    return <p>tên : {this.ten}</p>;
  };

  render() {
    //biến của phương thức render
    const hinhAnh =
      "https://media.laodong.vn/Storage/NewsPortal/2020/3/13/790651/Nhung-Giong-Cho-Lai--11.jpg";
    return (
      <div>
        <h2>DataBiding</h2>
        {/* <p>tên : {this.ten}</p> */}
        {this.renderName()}
        <p>lớp : {this.lop}</p>

        <img src={hinhAnh} alt="hình ảnh" />
      </div>
    );
  }
}
