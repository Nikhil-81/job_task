
import Chart_line from "../component/chart_dashbord";
import States from "../component/dash_stats";
import Deal_details from "../component/deledetails";

import "../styles/dashbord.css"
export default function Dashbord(){
    return (
        
      <div style={{background:"#F5F5F5"}} >
        <States/>
    <Chart_line/>
    <Deal_details  />
      </div>
    )
}