import NavBar from "../component/navbr";
import Sidebar from "../component/sidebar";
import { Heading, Input, InputGroup, InputLeftElement, Table, TableContainer, Text, Th, Thead, Tr,Td, Tbody, Image, Flex, CircularProgress, useDisclosure, Button } from "@chakra-ui/react";
import { SearchIcon,EditIcon,DeleteIcon,ChevronLeftIcon,ChevronRightIcon } from "@chakra-ui/icons";
import "../styles/stocks.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Product_Delete_Request, Product_Get_Request } from "../redux/stock/stock.action";
import Table_thread from "../component/table_content";
import BasicUsage from "../component/edit_madal";


export default function Stock() {
  const [hide_modal,sethide]=useState(true)
  const edit_values=useRef(null)
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

function hendleDelete(el){
dispatch(Product_Delete_Request(el,page))
}

function hendleEdit(el){
  sethide(false)
  edit_values.current=el
  
}

  return (
    <div className="stoc_main">


      <div className="modal_content"  Style={`display:${hide_modal?"none":"block"}`} >
        <BasicUsage data={ edit_values.current} hendle_modal_close={()=>sethide(true)} />
      </div>


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
      <Tr className="stock_table_Tr" >
        <Td fontSize="16px" fontStyle="bold">Image</Td>
        <Td fontSize="16px" fontStyle="bold">Product Name</Td>
        <Td fontSize="16px" fontStyle="bold">Category</Td>
        <Td fontSize="16px" fontStyle="bold">Price</Td>
        <Td fontSize="16px" fontStyle="bold">Piece</Td>
        <Td fontSize="16px" fontStyle="bold">Availabel Color</Td>
        <Td fontSize="16px" fontStyle="bold">Action</Td>
      </Tr>
    </Thead>
    <Tbody>
     {true && stock_store.data.map(el=>(<Table_thread image={el.image} name={el.title} category={el.category} price={el.price} piece={el.count} color={el.color} hendleDelete={()=>hendleDelete(el)} hendleEdit={()=>hendleEdit(el)} />))}
    </Tbody>
  </Table>
</TableContainer>
      </div>
      <div className="stock_section_3">
        <Text fontSize="14px" color="#D5D5D5"  >Showing 1-06 of 78</Text>
        {stock_store.stock_load?(<CircularProgress isIndeterminate color='green.300' />):(<div><Flex><span className="editIcon" onClick={()=>hendlePage(-1)}> <ChevronLeftIcon /></span> <span className="DeleitIcon" onClick={()=>hendlePage(1)} ><ChevronRightIcon /> </span></Flex></div>)}
      </div>
    </div>
  );
}
