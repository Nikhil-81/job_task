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
import india_flag from "../images/india.png";
import "../styles/nav.css"
export default function NavBar() {
  return (
   
    <div className="nav_main" >
      <Flex>
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
          <BellIcon color="#3D42DF" boxSize={8} />
            </div>
          <div className="notification_num"><Text fontSize='sm'>6</Text></div>
        </span>
        <Flex  >
          <span>
            <Image src={india_flag} boxSize="30px" />
          </span>
          <Select placeholder="Select option" className="con_select" >
            <option value="us">English</option>
            <option value="in">Hindi</option>
            <option variant="unstyled" value="uk">
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
