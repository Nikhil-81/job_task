import {DEAL_GET_REQUEST,DEAL_GET_SUCESS,DEAL_GET_ERROR} from "./deal.action_type" 
import axios from "axios"

export const Deal_Get_Request=(month)=>(dispatch)=>{
    dispatch({type:DEAL_GET_REQUEST})
    try{
        axios.get(`https://fackstore.onrender.com/deals?month=${month}`)
        .then(res=>dispatch({type:DEAL_GET_SUCESS,payload:res.data}))
        .catch(err=>dispatch({type:DEAL_GET_ERROR}))
    }
    catch(err){
    dispatch({type:DEAL_GET_ERROR})

    }
}

