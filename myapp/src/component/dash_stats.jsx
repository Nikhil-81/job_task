import { Flex, Image, Text,Icon,Heading } from "@chakra-ui/react";
import {BsPeopleFill} from "react-icons/bs"
import {GrLineChart} from "react-icons/gr"

export default function States() {
    let states_data = [
        { titel: "Total Users", num: "40689", groth: "8.5%", lable: "Up from yesteday", main_icon: "", groth_icon: "" ,status:"profit"},
        { titel: "Total Order", num: "10293", groth: "1.3%", lable: "Up from past week", main_icon: "", groth_icon: "",status:"profit" },
        { titel: "Total Sales", num: "89000", groth: "4.3%", lable: "", main_icon: "Down from yesteday", groth_icon: "",status:"loss" },
        { titel: "Total Panding", num: "2040", groth: "1.8%", lable: "", main_icon: "Up from yesterday", groth_icon: "",status:"profit" },
      ];
  return (
    <Flex Style={"margin:1rem 30px 0 30px"} justify="space-between" >
    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Users</Text>
        <Text fontStyle="bold"  fontSize="25px" Style={"padding-top:10px"} >40689</Text>
            </div>
            <div className="stats_icon" >
            <Icon as={BsPeopleFill} boxSize="14" color="#8280FF" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={"color:red"}>8.5% </span> <Icon as={GrLineChart} color="red" />Up from yesteday</Text>
    </div>
    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Users</Text>
        <Text fontStyle="bold"  fontSize="25px" Style={"padding-top:10px"} >40689</Text>
            </div>
            <div className="stats_icon" >
            <Icon as={BsPeopleFill} boxSize="14" color="#8280FF" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={"color:red"}>8.5% </span> <Icon as={GrLineChart} color="red" />Up from yesteday</Text>
    </div>
    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Users</Text>
        <Text fontStyle="bold"  fontSize="25px" Style={"padding-top:10px"} >40689</Text>
            </div>
            <div className="stats_icon" >
            <Icon as={BsPeopleFill} boxSize="14" color="#8280FF" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={"color:red"}>8.5% </span> <Icon as={GrLineChart} color="red" />Up from yesteday</Text>
    </div>
    <div  className="dash_stats" >
        <Flex justify="space-between"  >
            <div>
                <Text>Total Users</Text>
        <Text fontStyle="bold"  fontSize="25px" Style={"padding-top:10px"} >40689</Text>
            </div>
            <div className="stats_icon" >
            <Icon as={BsPeopleFill} boxSize="14" color="#8280FF" />
            </div>
        </Flex>
        <Text Style={"margin-top:39px;text-align:start"} ><span Style={"color:red"}>8.5% </span> <Icon as={GrLineChart} color="red" />Up from yesteday</Text>
    </div>
    </Flex>
  );
}
