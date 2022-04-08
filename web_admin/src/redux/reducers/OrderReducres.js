import {
  ORDER_DELIVERED_FAIL,
  ORDER_DELIVERED_REQUEST,
  ORDER_DELIVERED_RESET,
  ORDER_DELIVERED_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
} from "../constants/OrderConstants";

export const orderListReducer = (state = { orders: [] }, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { ...state, loading: true };
    case ORDER_LIST_SUCCESS:
      return { loading: false, orders: action.payload.data };
    case ORDER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload.data };
    default:
      return state;
  }
};

// Order Details
export const orderDetailsReducer = (
  state = { loading: true, order: {} },
  action
) => {
  switch (action.type) {
    case ORDER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case ORDER_DETAILS_SUCCESS:
      return { loading: false, order: action.payload.data };
    case ORDER_DETAILS_FAIL:
      return { ...state, loading: false };
    default:
      return state;
  }
};

// ORDER DELIVERED
export const orderDeliveredReducer = (state = {loading: true}, action) => {
  switch (action.type) {
    case ORDER_DELIVERED_REQUEST:
      return { ...state, loading: true };
    case ORDER_DELIVERED_SUCCESS:
      return { ...state, loading: false };
    case ORDER_DELIVERED_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ORDER_DELIVERED_RESET:
      return {};
    default:
      return state;
  }
};
