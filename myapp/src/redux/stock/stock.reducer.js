import {
  STOCK_GET_REQUEST,
  STOCK_GET_SUCESS,
  STOCK_GET_ERROR,
} from "./stock.action_type";
let init_state = {
  stock_sucess: false,
  stock_error: false,
  stock_load: false,
  data: [],
};
export default function Stock_reducer(state=init_state, { type, payload }) {
  switch (type) {
    case STOCK_GET_REQUEST: {
      return {
        ...state,
        stock_load: true,
        stock_sucess: false,
        stock_error: false,
      };
    }
    case STOCK_GET_SUCESS: {
      return {
        ...state,
        stock_load: false,
        stock_sucess: true,
        stock_error: false,
        data: payload,
      };
    }
    case STOCK_GET_ERROR: {
      return {
        ...state,
        stock_load: false,
        stock_sucess: false,
        stock_error: true,
      };
    }
    default: {
      return state;
    }
  }
}
