import {
  DELETE_PRODUCT,
  TANG_GIAM_SL,
  DETAIL_PRODUCT,
  ADD_PRODUCT,
} from "../constants";
export const actDelete = (product) => {
  const action = {
    type: DELETE_PRODUCT,
    payload: product,
  };
  return action;
};
export const actTangGiamSL = (data) => {
  return {
    type: TANG_GIAM_SL,
    payload: data,
  };
};
export const actAddProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
export const actDetailProduct = (product) => {
  return {
    type: DETAIL_PRODUCT,
    payload: product,
  };
};
