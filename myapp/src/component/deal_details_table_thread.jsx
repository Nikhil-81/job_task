import { Flex, Image, Td, Text, Tr } from "@chakra-ui/react"


export default function Deal_details_Table_thread({image,name,location,date_time,price,piece,status}){
    return (
        <Tr>
        <Td><Flex> <Image className="stock_table_image"  boxSize={30} src={image}  /><Text>{name}</Text></Flex></Td>
        <Td className="stock_table_thread_TD"  Style={"white-space: break-spaces;"} >{location}</Td>
        <Td className="stock_table_thread_TD" >{date_time}</Td>
        <Td className="stock_table_thread_TD" >{piece}</Td>
        <Td className="stock_table_thread_TD" > ${price} </Td>
        <Td>{status}</Td>
      </Tr>
    )
}