import { Flex, Select, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux"
import { Deal_Get_Request } from "../redux/deal_details/deal.action";
import {useRef,useEffect} from "react"
import Deal_details_Table_thread from "./deal_details_table_thread";
let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
export default function Deal_details(){
    const Month=useRef("January")
    const dispatch=useDispatch()
    const deal_store=useSelector((store)=>store.deal)

function deal_Request(m){
    dispatch(Deal_Get_Request(m))
}

function hendleChange(month){
    Month.current=month
    deal_Request(Month.current)
}

useEffect(()=>{
    deal_Request(Month.current)
},[])
    return (
        <div Style={"margin:28px 30px;"}>
        <Flex justifyContent="space-between">
        <Text fontSize="24px" >Sales Details</Text>
        <Select
          placeholder="Month"
          w="20%"
          className="Month_select"
          onChange={(e) => hendleChange(e.target.value)}
        >
          {month.map((el) => (
            <option value={el}>{el}</option>
          ))}
        </Select>
      </Flex>
        <div className="stock_section_two">
      <TableContainer colorScheme="whiteAlpha"  className="stocks_table" >
  <Table variant='simple'>
    <Thead>
      <Tr className="stock_table_Tr" >
        <Td>Product Name</Td>
        <Th>Location</Th>
        <Th>Date-Time</Th>
        <Th>Piece</Th>
        <Th>Amount</Th>
        <Th>Status</Th>
      </Tr>
    </Thead>
    <Tbody>
     {true && deal_store.data.map(el=>(<Deal_details_Table_thread image={el.image} name={el.title} location={el.location} price={el.price} piece={el.count} status={el.status?"Delivered":"Panding"} />))}
    </Tbody>
  </Table>
</TableContainer>
      </div>
        </div>
    )
}