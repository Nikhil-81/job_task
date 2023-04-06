import { Flex, Image, Td, Tr } from "@chakra-ui/react"
import {EditIcon,DeleteIcon } from "@chakra-ui/icons";

export default function Table_thread({image,name,category,price,piece,color}){
    return (
        <Tr>
        <Td><Image className="stock_table_image"  boxSize={30} src={image}  /></Td>
        <Td Style={"white-space: break-spaces;"} >{name}</Td>
        <Td>{category}</Td>
        <Td>${price}</Td>
        <Td>{piece}</Td>
        <Td><Flex wrap="wrap" >{color.map(el=>(<div className="color_circle" Style={`background:${el}`} ></div>))}</Flex></Td>
        <Td><Flex  ><span className="editIcon"> <EditIcon color="gray.400" /></span> <span className="DeleitIcon" ><DeleteIcon color="red.500" /> </span></Flex></Td>
      </Tr>
    )
}