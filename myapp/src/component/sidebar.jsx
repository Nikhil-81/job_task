import { color, Flex, Text,Icon } from "@chakra-ui/react"
import "../styles/sidebar.css"
import {TimeIcon} from "@chakra-ui/icons"
import { memo, useState } from "react"
import {Link, useParams} from "react-router-dom"
import {BiMessage} from "react-icons/bi"
import {RiDropboxLine} from "react-icons/ri"
import {AiOutlineHeart} from "react-icons/ai"
import {BsListCheck} from "react-icons/bs"
import {GrStackOverflow} from "react-icons/gr"
import {AiOutlineGift} from "react-icons/ai"
import {SlCalculator} from "react-icons/sl"
import {TbCheckupList} from "react-icons/tb"
import {RiGroupLine} from "react-icons/ri"
import {FaRegMoneyBillAlt} from "react-icons/fa"
import {BsBarChartFill} from "react-icons/bs"
import {BsFillPersonFill} from "react-icons/bs"
import {AiOutlineTable} from "react-icons/ai"
import {AiOutlineSetting} from "react-icons/ai"
import {AiOutlinePoweroff} from "react-icons/ai"





let sidebar_handles=[
    {icon:TimeIcon,text:"Dashboard",rout:"/"},
    {icon:RiDropboxLine,text:"Products",rout:""},
    {icon:AiOutlineHeart,text:"Favorites",rout:""},
    {icon:BiMessage,text:"Inbox",rout:""},
    {icon:BsListCheck,text:"Order List",rout:""},
    {icon:GrStackOverflow,text:"Product Stock",rout:"stock"},
]
let sidebar_pages=[
    {icon:AiOutlineGift,text:"Pricing"},
    {icon:SlCalculator,text:"Calender"},
    {icon:RiGroupLine,text:"To-Do"},
    {icon:TbCheckupList,text:"Contact"},
    {icon:FaRegMoneyBillAlt,text:"Invoice"},
    {icon:BsBarChartFill,text:"UI Elements"},
    {icon:BsFillPersonFill,text:"Team"},
    {icon:AiOutlineTable,text:"Table"},

]
let setting_pages=[
    {icon:AiOutlineSetting,text:"Setting"},
    {icon:AiOutlinePoweroff,text:"Logout"},


]
export default  memo( function Sidebar(){
    const [tab,settab]=useState()

    return (
        <div className="sidebar">
            <div className="sidebar_main_cont">
            <Text fontSize="20px" fontWeight="600" ><span style={{color:"#4880FF"}} >Bright</span> Web</Text>
            </div>
            <div>
                {true && sidebar_handles.map(el=>(<Link to={el.rout} key={el.text} ><Flex bg={tab==el.text?"#4880FF":""} onClick={(e)=>settab(e.target.id)} id={el.text}    className="sidebar_groups"  ><Icon as={el.icon} color={tab==el.text?"white":"black"} /> <Text id={el.text} fontSize="14px" onClick={(e)=>settab(e.target.id)} color={tab==el.text?"white":"black"}  >{el.text}</Text></Flex></Link>))}
            </div>
            <hr/>
            <div>
                <Text color="gray.400" className="sidebar_heading_text" >Pages</Text>
                {true && sidebar_pages.map(el=>(<Link to={el.rout} key={el.text}><Flex bg={tab==el.text?"#4880FF":""} onClick={(e)=>settab(e.target.id)} id={el.text}    className="sidebar_groups"  ><Icon as={el.icon} color={tab==el.text?"white":"black"} /> <Text id={el.text} fontSize="14px" onClick={(e)=>settab(e.target.id)} color={tab==el.text?"white":"black"}  >{el.text}</Text></Flex></Link>))}
            </div>
            <hr/>
            <div>
                {true && setting_pages.map(el=>(<Link to={el.rout} key={el.text} ><Flex bg={tab==el.text?"#4880FF":""} onClick={(e)=>settab(e.target.id)} id={el.text}    className="sidebar_groups"  ><Icon as={el.icon} color={tab==el.text?"white":"black"} /> <Text id={el.text} fontSize="14px" onClick={(e)=>settab(e.target.id)} color={tab==el.text?"white":"black"}  >{el.text}</Text></Flex></Link>))}
            </div>
        </div>
    )
})