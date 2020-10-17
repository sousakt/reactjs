import React, { Component } from "react";
import CardItem from "./CardItem";
import { connect } from "react-redux";

class Modal extends Component {
  renderCardList = () => {
    return this.props.danhSachGioHang.map((cart, index) => {
      return (
        <CardItem
          // handleDelete={this.props.handleDelete}
          // handleTangGiam={this.props.handleTangGiam}
          cart={cart}
          key={index}
        />
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        aria-labelledby="modelTitleId"
        aria-hidden="true"
        style={{ display: "none" }}
      >
        <div
          className="modal-dialog"
          role="document"
          style={{ maxWidth: 1000 }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{this.renderCardList()}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //key:value
    // key là props của component : value là state được lưu trữ trên store
    danhSachGioHang: state.gioHangReducer.danhSachGioHang,
  };
};
export default connect(mapStateToProps, null)(Modal);
