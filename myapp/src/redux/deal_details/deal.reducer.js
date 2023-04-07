import {DEAL_GET_REQUEST,DEAL_GET_SUCESS,DEAL_GET_ERROR} from "./deal.action_type" 

  let init_state = {
    deal_sucess: false,
    deal_error: false,
    deal_load: false,
    data: [],
  };
  export default function Deeal_reducer(state=init_state, { type, payload }) {
    switch (type) {
      case DEAL_GET_REQUEST: {
        return {
          ...state,
          deal_load: true,
          deal_sucess: false,
          deal_error: false,
        };
      }
      case DEAL_GET_SUCESS: {
        return {
          ...state,
          deal_load: false,
          deal_sucess: true,
          deal_error: false,
          data: payload,
        };
      }
      case DEAL_GET_ERROR: {
        return {
          ...state,
          deal_load: false,
          deal_sucess: false,
          deal_error: true,
        };
      }
      default: {
        return state;
      }
    }
  }
  
