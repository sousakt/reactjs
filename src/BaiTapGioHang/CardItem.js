import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    return (
      <tr className="card-item">
        <td>{this.props.cart.maSanPham}</td>
        <td>{this.props.cart.tenSanPham}</td>
        <td>
          <img src={this.props.cart.hinhAnh} width={50} />
        </td>
        <td>
          <button
            onClick={() => {
              this.props.handleTangGiam(this.props.cart, false);
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              this.props.handleTangGiam(this.props.cart, true);
            }}
          >
            +
          </button>
        </td>
        <td>${this.props.cart.giaBan}</td>
        <td>${this.props.cart.giaBan * this.props.cart.soLuong}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => {
              this.props.handleDelete(this.props.cart);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
