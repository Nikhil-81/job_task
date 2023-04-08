import { HamburgerIcon, SearchIcon, BellIcon,ChevronDownIcon } from "@chakra-ui/icons";
import {
    Avatar,
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import india_flag from "../images/india.png";
import uk_flag from "../images/united-kingdom.png";
import usa_flag from "../images/united-states.png";

import "../styles/nav.css"

let flags={
    in:india_flag,
    us:usa_flag,
    uk:uk_flag
}
export default function NavBar() {

const [countryImg,setcountry_img]=useState()
function hendleChange(data){
setcountry_img(flags[data])

}

  return (
   
    <div className="nav_main" >
      <Flex alignItems="baseline" >
        <div>
          <HamburgerIcon  className="hamburgar" />
        </div>
        <div className="Nav_inputbar">
        <InputGroup  >
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon className="search_icon"  color="gray.300" />}
            />
          <Input  className="Nav_inputbar" type="text" placeholder="Search" />
        </InputGroup>
            </div>
      </Flex>
      <Flex className="contacts_nav" >
        <span>
            <div className="bell_icon" >
          <BellIcon color="rgb(72, 128, 255)" boxSize={7} />
            </div>
          <div className="notification_num"><Text fontSize='sm'>6</Text></div>
        </span>
        <Flex  >
          <span>
            {countryImg?(
                <Image src={countryImg} boxSize="30px" />
                ):<></>}
          </span>
          <Select variant="unstyled" placeholder="Language" className="con_select" onChange={(e)=>hendleChange(e.target.value)}  >
            <option value="us">English</option>
            <option value="in">Hindi</option>
            <option  value="uk">
              English
            </option>
          </Select>
        </Flex>
        <div>
          <Flex>
            <Avatar size='sm'/>
            <Box ml="3">
              <Text fontWeight="bold">
                Jone Aly
              </Text>
              <Text fontSize="sm">Admin</Text>
            </Box>
          </Flex>
        </div>
        <span>
            <ChevronDownIcon className="drop_doun_arrow" />
        </span>
      </Flex>
    </div>
  );
}
