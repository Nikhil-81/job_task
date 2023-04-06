import { color, Flex, Text } from "@chakra-ui/react"
import "../styles/sidebar.css"
import {TimeIcon} from "@chakra-ui/icons"
import { memo, useState } from "react"
import {Link, useParams} from "react-router-dom"

let sidebar_handles=[
    {icon:TimeIcon,text:"Dashbord",rout:"/"},
    {icon:TimeIcon,text:"Products",rout:""},
    {icon:TimeIcon,text:"Favorites",rout:""},
    {icon:TimeIcon,text:"Inbox",rout:""},
    {icon:TimeIcon,text:"Orderlist",rout:""},
    {icon:TimeIcon,text:"Product Stock",rout:"stock"},
]
let sidebar_pages=[
    {icon:TimeIcon,text:"Pricing"},
    {icon:TimeIcon,text:"Calender"},
    {icon:TimeIcon,text:"To-Do"},
    {icon:TimeIcon,text:"In voice"},
    {icon:TimeIcon,text:"UI Elements"},
    {icon:TimeIcon,text:"Team"},
    {icon:TimeIcon,text:"Table"},

]
export default  memo( function Sidebar(){
    const [tab,settab]=useState("")
    const param=useParams()
    console.log(window.location.href)
function hendleClick(e){
    console.log(e.target.id)
}
    return (
        <div className="sidebar">
            <div className="sidebar_main_cont">
            <Text fontSize="20px" ><span style={{color:"#4880FF"}} >Bright</span> Web</Text>
            </div>
            <div>
                {true && sidebar_handles.map(el=>(<Link to={el.rout} ><Flex bg={tab==el.text?"#4880FF":""} onClick={(e)=>settab(e.target.id)} id={el.text}    className="sidebar_groups"  ><el.icon color={tab==el.text?"white":"black"} /> <Text id={el.text} fontSize="14px" onClick={(e)=>settab(e.target.id)} color={tab==el.text?"white":"black"}  >{el.text}</Text></Flex></Link>))}
            </div>
            <hr/>
            <div>
                <Text color="gray.400" >Pages</Text>
                {true && sidebar_pages.map(el=>(<Link to={el.rout} ><Flex bg={tab==el.text?"#4880FF":""} onClick={(e)=>settab(e.target.id)} id={el.text}    className="sidebar_groups"  ><el.icon color={tab==el.text?"white":"black"} /> <Text id={el.text} fontSize="14px" onClick={(e)=>settab(e.target.id)} color={tab==el.text?"white":"black"}  >{el.text}</Text></Flex></Link>))}
            </div>
        </div>
    )
})