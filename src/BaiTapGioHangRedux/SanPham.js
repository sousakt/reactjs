import React, { Component } from "react";
import { connect } from "react-redux";
import { actAddProduct, actDetailProduct } from "../redux/actions";
class SanPham extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.handleDetail(this.props.sanPham);
            }}
          >
            Chi tiết
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleAddCart(this.props.sanPham);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //key:value
    // key là props của component : value là phương thức gửi action lên store
    handleDetail: (product) => {
      // const action = {
      //   type: "DETAIL_PRODUCT",
      //   payload: sp,
      // };
      dispatch(actDetailProduct(product));
    },
    handleAddCart: (product) => {
      // const action = {
      //   type: "ADD_PRODUCT",
      //   payload: product,
      // };
      dispatch(actAddProduct(product));
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPham);
