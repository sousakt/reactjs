import React, { Component } from "react";
import ClassProps from "./ClassProps";
import FunctionProps from "./FunctionProps";

export default class DemoProps extends Component {
  type = "Husky";
  image = "https://chobaove.com/wp-content/uploads/2018/07/husky-1.jpg";
  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* Props dùng để truyền dữ liệu giữa các component */}
        {/* cách truyền dữ liệu */}
        <FunctionProps loaiCho={this.type} hinhCho={this.image} />
        <ClassProps typeDog={this.type} imgHusky={this.image} />
      </div>
    );
  }
}
