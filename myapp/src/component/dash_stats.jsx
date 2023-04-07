import { Flex, Image, Text,Icon,Heading } from "@chakra-ui/react";
import {BsPeopleFill} from "react-icons/bs"
import {GrLineChart} from "react-icons/gr"
import{FiBox} from "react-icons/fi"
import {RiLineChartFill} from "react-icons/ri"
import {RxCounterClockwiseClock} from "react-icons/rx"
export default function States({lable1,lable2,lable3,lable4,status1,status2,status3,status4,num1,num2,num3,num4,groth1,groth2,groth3,groth4}) {
 
  return (
    <Flex Style={"margin:1rem 30px 0 30px"} justify="space-between" >
<div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Users</Text>
        <Text fontStyle="bold" className="stats_num" fontSize="25px" Style={"padding-top:10px"} >{num1}</Text>
            </div>
            <div className="stats_icon" Style={"background:#E5E4FF"} >
            <Icon as={BsPeopleFill} boxSize="14" color="#8280FF" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={`color:${status1=="profit"?"green":"red"}`}  >{groth1}</span> <Icon as={status1=="profit"?GrLineChart:GrLineChart} color={status1=="profit"?"greeen":"red"} />{status1=="profit"?" Up ":" Down " }{lable1}</Text>
    </div>

    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Orders</Text>
        <Text fontStyle="bold" className="stats_num" fontSize="25px" Style={"padding-top:10px"} >{num2}</Text>
            </div>
            <div className="stats_icon" Style={"background:#FFF3D6"} >
            <Icon as={FiBox} boxSize="14" color="#FFDC8A" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={`color:${status2=="profit"?"green":"red"}`}>{groth2}</span> <Icon as={status2=="profit"?GrLineChart:GrLineChart} color={status2=="profit"?"greeen":"red"} />{status2=="profit"?" Up ":" Down " }{lable2}</Text>
    </div>
    
    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Sales</Text>
        <Text fontStyle="bold" className="stats_num" fontSize="25px" Style={"padding-top:10px"} >{num3}</Text>
            </div>
            <div className="stats_icon" Style={"background:#92E8BD"} >
            <Icon as={RiLineChartFill} boxSize="14" color="#4AD991" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={`color:${status3=="profit"?"green":"red"}`}>{groth3}</span> <Icon as={status3=="profit"?GrLineChart:GrLineChart} color={status3=="profit"?"greeen":"red"} />{status3=="profit"?" Up ":" Down " }{lable3}</Text>
    </div>

    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Panding</Text>
        <Text fontStyle="bold" className="stats_num" fontSize="25px" Style={"padding-top:10px"} >{num4}</Text>
            </div>
            <div className="stats_icon" Style={"background:#FFDED1"}>
            <Icon as={RxCounterClockwiseClock} boxSize="14" color="#FFA989" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={`color:${status4=="profit"?"green":"red"}`}>{groth4}</span> <Icon as={status4=="profit"?GrLineChart:GrLineChart} color={status4=="profit"?"greeen":"red"} />{status4=="profit"?" Up ":" Down " }{lable4}</Text>
    </div>
  
    </Flex>
  );
}
