/**
 * các bước thực hiện :
 * 1/ dàn layout html css
 * 2/ xác định data thay đổi và lưu vào State
 * 3/ lấy data trong state  đi binding ra jsx
 * 4/ bắt sự kiện cho các nút chọn màu
 * 5/ cập nhật lại giá trị trong state
 */

import React, { Component } from "react";

export default class BaiTapChonMauXe extends Component {
  state = {
    imgCar: "./img/car/products/black-car.jpg",
  };

  handleChangeColor = (imgCar) => {
    // console.log(imgCar);
    //cập nhật giá trị trong state
    this.setState({
      //imgCar: imgCar,
      imgCar, //object literal
    });
  };

  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/black-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/red-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/silver-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={() =>
                  this.handleChangeColor("./img/car/products/steel-car.jpg")
                }
              >
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                // src="./img/car/products/steel-car.jpg"
                src={this.state.imgCar}
                alt="hinh"
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
