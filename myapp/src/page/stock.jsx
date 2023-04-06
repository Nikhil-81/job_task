import NavBar from "../component/navbr";
import Sidebar from "../component/sidebar";
import { Heading, Input, InputGroup, InputLeftElement, Table, TableContainer, Text, Th, Thead, Tr,Td, Tbody, Image, Flex, CircularProgress } from "@chakra-ui/react";
import { SearchIcon,EditIcon,DeleteIcon,ChevronLeftIcon,ChevronRightIcon } from "@chakra-ui/icons";
import "../styles/stocks.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product_Get_Request } from "../redux/stock/stock.action";
import Table_thread from "../component/table_content";

export default function Stock() {
    const [page,setpage]=useState(1)
    const dispatch=useDispatch()
    const stock_store=useSelector((store)=>store.stock)
useEffect(()=>{
dispatch(Product_Get_Request(page))
},[page])
console.log(stock_store)
function hendlePage(val){
    if(val==-1 && page!=1){
        setpage(prev=>prev+val)
    }
    else if(val==1){
        setpage(prev=>prev+val)
    }
}
  return (
    <div className="stoc_main">
       
      <div className="dash_section_one">
        <Text fontSize="32px" >Product Stock</Text>
        <div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="tel" placeholder="Phone number" />
          </InputGroup>
        </div>
      </div>
      <div className="stock_section_two">
      <TableContainer colorScheme="whiteAlpha"  className="stocks_table" >
  <Table variant='simple'>
    <Thead>
      <Tr>
        <Th>Image</Th>
        <Th>Product Name</Th>
        <Th>Category</Th>
        <Th>Price</Th>
        <Th>Piece</Th>
        <Th>Availabel Color</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
     {true && stock_store.data.map(el=>(<Table_thread image={el.image} name={el.title} category={el.category} price={el.price} piece={el.count} color={el.color} />))}
    </Tbody>
  </Table>
</TableContainer>
      </div>
      <div className="stock_section_3">
        <Text fontSize="14px" color="#D5D5D5"  >Showing 1-09 of 78</Text>
        {stock_store.stock_load?(<CircularProgress isIndeterminate color='green.300' />):(<div><Flex><span className="editIcon" onClick={()=>hendlePage(-1)}> <ChevronLeftIcon /></span> <span className="DeleitIcon" onClick={()=>hendlePage(1)} ><ChevronRightIcon /> </span></Flex></div>)}
      </div>
    </div>
  );
}
