
import { CircularProgress } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Chart_line from "../component/chart_dashbord";
import States from "../component/dash_stats";
import Deal_details from "../component/deledetails";

import "../styles/dashbord.css"
export default function Dashbord(){
  const dashbord_store=useSelector((store)=>store.chart)
  const deal_store=useSelector((store)=>store.deal)

    return (
      <>
      <div className="dash_loder"  Style={`display:${dashbord_store.chart_load || deal_store.deal_load?"block":"none"}`} ><div className="loder_icon_dash"> <CircularProgress   isIndeterminate color="green.300" /></div></div>
      <div style={{background:"#F5F5F5"}} >
    <Chart_line/>
    <Deal_details  />
      </div>
      </>
    )
}