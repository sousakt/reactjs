import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin là thuộc tính của Class
   * True : đã đăng nhập => hiện tên người dùng
   * flase: chưa đăng nhập => hiện nút login
   */
  state = {
    isLogin: false,
  };
  //   isLogin = false;
  handleClick = () => {
    // this.isLogin = true;
    // this.state.isLogin = true ;
    this.setState({
      isLogin: true,
    });
  };
  //phương thức của class
  renderLogin = () => {
    // if (this.isLogin) {
    //   return <p>Nguyễn văn A</p>;
    // } else {
    //   return <button>Login</button>;
    // }
    //cách 2
    // return this.isLogin ? (
    //   <p>Nguyễn văn A</p>
    // ) : (
    //   <button onClick={this.handleClick}>Login</button>
    // );
    if (this.state.isLogin) {
      return <p>Nguyễn văn A</p>;
    } else {
      return <button onClick={this.handleClick}>Login</button>;
    }
  };

  render() {
    return (
      <div>
        <h2>Conditional and State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}
