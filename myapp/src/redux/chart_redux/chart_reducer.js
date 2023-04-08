import {CHART_GET_REQUEST,CHART_GET_SUCESS,CHART_GET_ERROR} from "./chart_action_type"

  let init_state = {
    chart_sucess: false,
    chart_error: false,
    chart_load: false,
    data: [],
  };
  export default function Chart_reducer(state=init_state, { type, payload }) {
    switch (type) {
      case CHART_GET_REQUEST: {
        return {
          ...state,
          chart_load: true,
          chart_sucess: false,
          chart_error: false,
        };
      }
      case CHART_GET_SUCESS: {
      
        

        return {
          ...state,
          chart_load: false,
          chart_sucess: true,
          chart_error: false,
          data: payload,
        };
      }
      case CHART_GET_ERROR: {
        return {
          ...state,
          chart_load: false,
          chart_sucess: false,
          chart_error: true,
        };
      }
      default: {
        return state;
      }
    }
  }
  