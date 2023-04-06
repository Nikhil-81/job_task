import { Flex, Image, Td, Tr } from "@chakra-ui/react"
import {EditIcon,DeleteIcon } from "@chakra-ui/icons";

export default function Table_thread({image,name,category,price,piece,color,hendleDelete,hendleEdit}){
    return (
        <Tr>
        <Td><Image className="stock_table_image"  boxSize={30} src={image}  /></Td>
        <Td className="stock_table_thread_TD"  Style={"white-space: break-spaces;"} >{name}</Td>
        <Td className="stock_table_thread_TD" >{category}</Td>
        <Td className="stock_table_thread_TD" >${price}</Td>
        <Td className="stock_table_thread_TD" >{piece}</Td>
        <Td><Flex wrap="wrap" >{color.map(el=>(<div className="color_circle" Style={`background:${el}`} ></div>))}</Flex></Td>
        <Td><Flex  ><span onClick={hendleEdit}  className="editIcon"> <EditIcon color="gray.400" /></span> <span  onClick={hendleDelete} className="DeleitIcon" ><DeleteIcon color="red.500" /> </span></Flex></Td>
      </Tr>
    )
}