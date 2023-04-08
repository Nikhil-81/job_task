import {CHART_GET_REQUEST,CHART_GET_SUCESS,CHART_GET_ERROR} from "./chart_action_type"
import axios from "axios"

export const Chart_Get_Request=(month)=>(dispatch)=>{
    dispatch({type:CHART_GET_REQUEST})
      localStorage.setItem("chart_month",JSON.stringify(month))
    try{
        return axios.get(`https://fackstore.onrender.com/sales?month=${month}`)
        .then(res=>dispatch({type:CHART_GET_SUCESS,payload:res.data}))
        .catch(err=>dispatch({type:CHART_GET_ERROR}))
    }
    catch(err){
    dispatch({type:CHART_GET_ERROR})

    }
}

