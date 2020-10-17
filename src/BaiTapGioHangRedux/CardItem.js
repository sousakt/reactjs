import React, { Component } from "react";
import { actDelete, actTangGiamSL } from "../redux/actions";
import { connect } from "react-redux";
class CardItem extends Component {
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
              const data = {
                product: this.props.cart,
                status: false,
              };
              this.props.tangGiamSL(data);
              //this.props.handleTangGiam(this.props.cart, false);
            }}
          >
            -
          </button>
          {this.props.cart.soLuong}
          <button
            onClick={() => {
              const data = {
                product: this.props.cart,
                status: true,
              };
              this.props.tangGiamSL(data);
              //this.props.handleTangGiam(this.props.cart, true);
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
              this.props.deleteProduct(this.props.cart);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    //key:value
    // key là props của component : value là phương thức gửi action lên store
    deleteProduct: (product) => {
      dispatch(actDelete(product));
    },
    tangGiamSL: (data) => {
      dispatch(actTangGiamSL(data));
    },
  };
};
export default connect(null, mapDispatchToProps)(CardItem);
