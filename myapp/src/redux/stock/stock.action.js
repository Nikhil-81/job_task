import {STOCK_GET_REQUEST,STOCK_GET_SUCESS,STOCK_GET_ERROR} from "./stock.action_type"
import axios from "axios"

export const Product_Get_Request=()=>(dispatch)=>{
    dispatch({type:STOCK_GET_REQUEST})
    try{
        axios.get("https://fackstore.onrender.com/product")
        .then(res=>dispatch({type:STOCK_GET_SUCESS,payload:res.data}))
        .catch(err=>dispatch({type:STOCK_GET_ERROR}))
    }
    catch(err){
    dispatch({type:STOCK_GET_ERROR})

    }
}