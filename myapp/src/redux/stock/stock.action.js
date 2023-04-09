import {STOCK_GET_REQUEST,STOCK_GET_SUCESS,STOCK_GET_ERROR} from "./stock.action_type"
import axios from "axios"

export const Product_Get_Request=(page)=>(dispatch)=>{
    dispatch({type:STOCK_GET_REQUEST})
    try{
      return  axios.get(`https://fackstore.onrender.com/product?_page=${page}&_limit=6`)
        .then(res=>dispatch({type:STOCK_GET_SUCESS,payload:res.data}))
        .catch(err=>dispatch({type:STOCK_GET_ERROR}))
    }
    catch(err){
    dispatch({type:STOCK_GET_ERROR})

    }
}




export const Search_product_Get_Request=(q)=>(dispatch)=>{
    dispatch({type:STOCK_GET_REQUEST})
    try{
      return  axios.get(`https://fackstore.onrender.com/product?title_like=${q}`)
        .then(res=>dispatch({type:STOCK_GET_SUCESS,payload:res.data}))
        .catch(err=>dispatch({type:STOCK_GET_ERROR}))
    }
    catch(err){
    dispatch({type:STOCK_GET_ERROR})

    }
}

export const Edit_product_Get_Request=(data,page)=>(dispatch)=>{
    
    dispatch({type:STOCK_GET_REQUEST})
    try{
      return  axios.put(`https://fackstore.onrender.com/product/${data.id}`,data)
        .then(res=>dispatch(Product_Get_Request(page)))
        .catch(err=>dispatch({type:STOCK_GET_ERROR}))
    }
    catch(err){
    dispatch({type:STOCK_GET_ERROR})

    }
}


export const Product_Delete_Request=(data,page)=>(dispatch)=>{
    dispatch({type:STOCK_GET_REQUEST})
    try{
      return  axios.delete(`https://fackstore.onrender.com/product/${data.id}`)
        .then(res=>dispatch(Product_Get_Request(page)))
        .catch(err=>dispatch({type:STOCK_GET_ERROR}))
    }
    catch(err){
    dispatch({type:STOCK_GET_ERROR})

    }
}