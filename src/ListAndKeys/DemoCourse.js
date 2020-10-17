import React, { Component } from "react";

export default class DemoCourse extends Component {
  danhSachKhoaHoc = ["ReactJS", "NodeJS", "VueJS"];

  renderDanhSachKhoaHoc = () => {
    const danhSachKhoaHocJSX = this.danhSachKhoaHoc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
    return danhSachKhoaHocJSX;
  };
  render() {
    return (
      <div>
        <h2>List And Keys</h2>
        <h3>Danh sách khóa học</h3>
        <ul>
          {/* <li>ReactJS</li>
          <li>NodeJS</li>
          <li>VueJS</li> */}
          {this.renderDanhSachKhoaHoc()}
        </ul>
      </div>
    );
  }
}
