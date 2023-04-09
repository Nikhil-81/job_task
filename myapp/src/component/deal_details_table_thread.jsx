import { background, Flex, Image, Td, Text, Tr } from "@chakra-ui/react"


export default function Deal_details_Table_thread({image,name,location,date_time,price,piece,status}){
    return (
        <Tr>
        <Td fontSize="14px" fontWeight="600"><Flex align="center"> <Image className="stock_table_image"  boxSize={30} src={image}  /><Text Style={"white-space: break-spaces;margin-left:12px"}>{name}</Text></Flex></Td>
        <Td fontSize="14px" fontWeight="600" className="stock_table_thread_TD"  Style={"white-space: break-spaces;"} >{location}</Td>
        <Td fontSize="14px" fontWeight="600" className="stock_table_thread_TD" >{date_time}</Td>
        <Td fontSize="14px" fontWeight="600" className="stock_table_thread_TD" >{piece}</Td>
        <Td fontSize="14px" fontWeight="600" className="stock_table_thread_TD" > ${price} </Td>
        <Td fontSize="14px" fontWeight="600"><span className={status?"green_status_lable":"red_status_lable"}   Style={`background:${status ? "#00B69B" : "red"}`}  >{status}</span> </Td>
      </Tr>
    )
}