import NavBar from "../component/navbr";
import Sidebar from "../component/sidebar";
import { Heading, Input, InputGroup, InputLeftElement, Table, TableContainer, Text, Th, Thead, Tr,Td, Tbody, Image, Flex } from "@chakra-ui/react";
import { SearchIcon,EditIcon,DeleteIcon } from "@chakra-ui/icons";
import "../styles/stocks.css";
let color=["red","yellow","green","pink" ]
export default function Stock() {
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
      <Tr>
        <Td><Image className="stock_table_image"  boxSize={30} src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}  /></Td>
        <Td Style={"white-space: break-spaces;"} >Fjallraven Backpack </Td>
        <Td>men's clothing</Td>
        <Td>109.95</Td>
        <Td>500</Td>
        <Td><Flex wrap="wrap" >{color.map(el=>(<div className="color_circle" Style={`background:${el}`} ></div>))}</Flex></Td>
        <Td><Flex  ><span className="editIcon"> <EditIcon color="gray.400" /></span> <span className="DeleitIcon" ><DeleteIcon color="red.500" /> </span></Flex></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
      </div>
    </div>
  );
}
