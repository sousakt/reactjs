/**
 * các bước thực hiện :
 * 1. dàn layout
 * 2. xác định data thay đổi và lưu vào state
 * 3. lấy data trong state đi biding ra jsx
 * 4. render mãng dữ liệu
 * 5. xây dựng chức năng xem chi tiết
 * 6. xây dựng chức năng thêm giỏ hàng
 * 7. xây dựng chức năng xóa sp khỏi giỏ hàng
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9. xây dựng chức năng hiển thị tổng số sp
 */

import React, { Component } from "react";
import Modal from "./Modal";
import SanPham from "./SanPham";
import { connect } from "react-redux";

class BaiTapGioHang extends Component {
  // danhSachSanPham = [
  //   {
  //     giaBan: "1000",
  //     maSanPham: "1",
  //     tenSanPham: "VS Phone",
  //     hinhAnh: "./img/vsphone.jpg",
  //     manHinh: `AMOLED, 6.2", Full HD+`,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "20 MP",
  //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "4 GB",
  //     rom: "6 GB",
  //   },
  //   {
  //     giaBan: "2000",
  //     maSanPham: "2",
  //     tenSanPham: "Meizu Phone",
  //     hinhAnh: "./img/meizuphone.jpg",
  //     manHinh: `	AMOLED, FHD+ 2232 x 1080 pixels`,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "25 MP",
  //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "8 GB",
  //     rom: "16 GB",
  //   },
  //   {
  //     giaBan: "3000",
  //     maSanPham: "3",
  //     tenSanPham: "Apple Phone",
  //     hinhAnh: "./img/applephone.jpg",
  //     manHinh: `	OLED, 6.5", 1242 x 2688 Pixels`,
  //     heDieuHanh: "Android 9.0 (Pie)",
  //     cameraTruoc: "30 MP",
  //     cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
  //     ram: "16 GB",
  //     rom: "32 GB",
  //   },
  // ];

  state = {
    // sanPhamChiTiet: {
    //   maSanPham: "1",
    //   hinhAnh: "./img/vsphone.jpg",
    //   manHinh: `AMOLED, 6.2", Full HD+`,
    //   heDieuHanh: "Android 9.0 (Pie)",
    //   cameraTruoc: "20 MP",
    //   cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    //   ram: "4 GB",
    //   rom: "6 GB",
    // },
    danhSachGioHang: [],
  };

  handleDetail = (sanPham) => {
    //console.log("run handleDetail");
    //set State
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };

  handleAddSP = (sanPham) => {
    //console.log("sanPham : ", sanPham);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    /**
     * tim xem co ton tai trong mang hay khong
     * neu co ton tai thi tra ve Index
     * neu khong ton tai thi tra ve -1
     */
    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      //tim thay
      //cap nhat so luong
      danhSachGioHang[index].soLuong += 1;
    } else {
      //khong tim thay
      //set so luong = 1 , push vao mang
      sanPham.soLuong = 1;
      // danhSachGioHang.push(sanPham);
      danhSachGioHang = [...danhSachGioHang, sanPham];
    }
    //setState
    this.setState({
      danhSachGioHang: danhSachGioHang,
    });
  };

  handleDelete = (cart) => {
    console.log("delete", cart);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return cart.maSanPham !== item.maSanPham;
    });
    this.setState({
      danhSachGioHang,
    });
  };

  handleTangGiam = (sanPham, status) => {
    // console.log(cart, status);
    let danhSachGioHang = [...this.state.danhSachGioHang];
    //cách viết khác
    // let {danhSachGioHang} = this.state;
    const index = danhSachGioHang.findIndex((cart) => {
      return cart.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      //tim thay
      //cap nhat so luong
      if (status) {
        danhSachGioHang[index].soLuong += 1;
      } else {
        if (danhSachGioHang[index].soLuong > 0) {
          danhSachGioHang[index].soLuong -= 1;
        }
      }
    }
    if (danhSachGioHang[index].soLuong == 0) {
      this.handleDelete(sanPham);
    } else {
      this.setState({
        danhSachGioHang,
      });
    }
  };

  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham
            // handleDetail={this.handleDetail}

            handleAddSP={this.handleAddSP}
            sanPham={sanPham}
          />
        </div>
      );
    });
  };

  renderTotal = () => {
    let { danhSachGioHang } = this.state;
    let total = danhSachGioHang.reduce((tong, cartHienTai) => {
      return tong + cartHienTai.soLuong;
    }, 0);
    return total;
  };

  render() {
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                data-toggle="modal"
                data-target="#modelId"
              >
                Giỏ hàng ({this.renderTotal()})
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()};</div>
            </div>
            <Modal
              danhSachGioHang={this.state.danhSachGioHang}
              handleDelete={this.handleDelete}
              handleTangGiam={this.handleTangGiam}
            />
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.props.sanPhamChiTiet.hinhAnh}
                  alt
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key:value
    // key là props của component : value là state được lưu trữ trên store
    danhSachSanPham: state.gioHangReducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangReducer.sanPhamChiTiet,
  };
};
export default connect(mapStateToProps)(BaiTapGioHang);
