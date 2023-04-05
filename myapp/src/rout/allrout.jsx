import {Routes,Route} from "react-router-dom"
import Dashbord from "../page/dashbord"
import Error_page from "../page/Error_page"
import Stock from "../page/stock"
export default function AllRouter(){
    return (
        <Routes>
            <Route path="/" element={<Dashbord/>}/>
            <Route path="/stock" element={<Stock/>}/>
            <Route path="*" element={<Error_page/>}/>
        </Routes>
    )
}