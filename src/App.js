import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StateLessComponent from "./components/StateLessComponent";
import StateFull, { StateFullComponent } from "./components/StateFullComponent";
import Home from "./baiTapChiaComponent/Home";
import DemoDataBiding from "./DataBiding/DemoDataBiding";
import FunctionEvent from "./HandleEvents/FunctionEvent";
import ClassEvents from "./HandleEvents/ClassEvents";
import DemoConditionalAndState from "./DemoLogin/DemoConditionalAndState";
import BaiTapChonMauXe from "./BaiTapChonMauXe";
import DemoCourse from "./ListAndKeys/DemoCourse";
import DemoProps from "./Props/DemoProps";
import BaiTapGioHangRedux from "./BaiTapGioHangRedux/BaiTapGioHang";
function App() {
  return (
    <div>
      {/* <StateLessComponent />
      <StateFull /> */}
      {/* <Home /> */}
      {/* <DemoDataBiding /> */}
      {/* <FunctionEvent /> */}
      {/* <ClassEvents /> */}
      {/* <DemoConditionalAndState /> */}
      {/* <BaiTapChonMauXe /> */}
      {/* <DemoCourse /> */}
      {/* <DemoProps /> */}
      <BaiTapGioHangRedux />
    </div>
  );
}

export default App;
