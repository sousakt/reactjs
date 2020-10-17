//import { bindActionCreators } from "redux";
import {
  DELETE_PRODUCT,
  TANG_GIAM_SL,
  DETAIL_PRODUCT,
  ADD_PRODUCT,
} from "../constants";
const initialState = {
  sanPhamChiTiet: {
    maSanPham: "1",
    hinhAnh: "./img/vsphone.jpg",
    manHinh: `AMOLED, 6.2", Full HD+`,
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "6 GB",
  },
  danhSachGioHang: [],
  danhSachSanPham: [
    {
      giaBan: "1000",
      maSanPham: "1",
      tenSanPham: "VS Phone",
      hinhAnh: "./img/vsphone.jpg",
      manHinh: `AMOLED, 6.2", Full HD+`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "6 GB",
    },
    {
      giaBan: "2000",
      maSanPham: "2",
      tenSanPham: "Meizu Phone",
      hinhAnh: "./img/meizuphone.jpg",
      manHinh: `	AMOLED, FHD+ 2232 x 1080 pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "25 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "8 GB",
      rom: "16 GB",
    },
    {
      giaBan: "3000",
      maSanPham: "3",
      tenSanPham: "Apple Phone",
      hinhAnh: "./img/applephone.jpg",
      manHinh: `	OLED, 6.5", 1242 x 2688 Pixels`,
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "30 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "16 GB",
      rom: "32 GB",
    },
  ],
};

const gioHangReducer = (state = initialState, action) => {
  switch (action.type) {
    case DETAIL_PRODUCT: {
      state.sanPhamChiTiet = action.payload;
      return { ...state };
    }
    case ADD_PRODUCT: {
      let danhSachGioHang = [...state.danhSachGioHang];
      const index = state.danhSachGioHang.findIndex((item) => {
        return item.maSanPham === action.payload.maSanPham;
      });
      if (index !== -1) {
        //tim thay
        //cap nhat so luong
        const product = { ...danhSachGioHang[index] };
        product.soLuong += 1;
        danhSachGioHang[index] = product;
      } else {
        //khong tim thay
        //set so luong = 1 , push vao mang
        action.payload.soLuong = 1;
        // danhSachGioHang.push(sanPham);
        danhSachGioHang = [...danhSachGioHang, action.payload];
      }
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    case DELETE_PRODUCT: {
      let danhSachGioHang = [...state.danhSachGioHang];
      danhSachGioHang = danhSachGioHang.filter((item) => {
        return action.payload.maSanPham !== item.maSanPham;
      });
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    case TANG_GIAM_SL: {
      let danhSachGioHang = [...state.danhSachGioHang];

      //cách viết khác
      // let {danhSachGioHang} = this.state;
      const index = danhSachGioHang.findIndex((cart) => {
        return cart.maSanPham === action.payload.product.maSanPham;
      });
      if (index !== -1) {
        //tim thay
        //cap nhat so luong
        const product = { ...danhSachGioHang[index] };
        if (action.payload.status) {
          product.soLuong += 1;
          danhSachGioHang[index] = product;
          // danhSachGioHang[index].soLuong += 1;
        } else {
          if (product.soLuong > 0) {
            product.soLuong -= 1;
            danhSachGioHang[index] = product;
            // danhSachGioHang[index].soLuong -= 1;
          }
        }
      }
      if (danhSachGioHang[index].soLuong == 0) {
        danhSachGioHang = danhSachGioHang.filter((item) => {
          return action.payload.product.maSanPham !== item.maSanPham;
        });
      }
      state.danhSachGioHang = danhSachGioHang;
      return { ...state };
    }
    default:
      break;
  }
  return state;
};
export default gioHangReducer;
