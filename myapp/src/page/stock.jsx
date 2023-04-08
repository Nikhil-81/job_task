
import {
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Table,
  useToast,
  TableContainer,
  Text,
  Th,
  Thead,
  Tr,
  Td,
  Tbody,
  Image,
  Flex,
  CircularProgress,

  Button,
  Box,
} from "@chakra-ui/react";
import {
  SearchIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import "../styles/stocks.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Product_Delete_Request,
  Product_Get_Request,
} from "../redux/stock/stock.action";
import Table_thread from "../component/table_content";

import axios from "axios";

function hendle_put(el) {
  return axios.put(`https://fackstore.onrender.com/product/${el.id}`, el);
}

export default function Stock() {
  const [hide_modal, sethide] = useState(true);
  let [edit_values, seteditValue] = useState({});
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const stock_store = useSelector((store) => store.stock);
  const toast = useToast();

  useEffect(() => {
    dispatch(Product_Get_Request(page));
  }, [page]);
  console.log(stock_store);
  function hendlePage(val) {
    if (val == -1 && page != 1) {
      setpage((prev) => prev + val);
    } else if (val == 1) {
      setpage((prev) => prev + val);
    }
  }

  function hendleDelete(el) {
    dispatch(Product_Delete_Request(el, page));
  }

  function hendleEdit(el) {
    sethide(false);
    seteditValue(el);
  }
  function HendleSubmit() {
    sethide(true);
    if (
      edit_values.title &&
      edit_values.category &&
      edit_values.count &&
      edit_values.price
    ) {
      hendle_put(edit_values)
        .then((res) => dispatch(Product_Get_Request(page)))
        .catch((err) => console.log(err));
    } else {
      toast({
        position: "top",
        render: () => (
          <Box color="white" p={3} bg="blue.500">
            Values incomplet
          </Box>
        ),
      });
    }
  }
  console.log(edit_values);

  function hendleChange(e) {
    const { value, name } = e.target;
    if (name != "color") {
      seteditValue({ ...edit_values, [name]: value });
    } else {
      seteditValue({ ...edit_values, [name]: value });
    }
  }

  return (
    <div className="stoc_main">
      <div
        className="modal_content"
        Style={`display:${hide_modal ? "none" : "block"}`}
      >
        <Flex className="modal">
          <div>
            <Image src={edit_values.image} />
            <Text>{edit_values.title}</Text>
            <Text>{edit_values.price}</Text>
            <Text>{edit_values.count}</Text>
            <Text>{edit_values.category}</Text>
            <Text>{edit_values.color}</Text>
          </div>
          <div>
            <Input value={edit_values.image} />

            <Input placeholder={edit_values?.title} />

            <Input placeholder={edit_values?.category} />

            <Input
              placeholder={edit_values?.price}
              name="price"
              onChange={(e) => hendleChange(e)}
            />

            <Input
              placeholder={edit_values?.count}
              name="count"
              onChange={(e) => hendleChange(e)}
            />

            <Input
              placeholder={edit_values?.color}
              name="color"
              onChange={(e) => hendleChange(e)}
            />

            <Button onClick={() => sethide(true)}>close</Button>
            <Button onClick={HendleSubmit}>Edit</Button>
          </div>
        </Flex>
        {/* <BasicUsage data={ edit_values} hendle_modal_close={()=>sethide(true)} /> */}
      </div>

      <div className="dash_section_one">
        <Text fontSize="32px">Product Stock</Text>
        <div>
          <InputGroup  >
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input type="text" placeholder="Search" Style={"border-radius:50px"} />
          </InputGroup>
        </div>
      </div>
      <div className="stock_section_two">
        <TableContainer colorScheme="whiteAlpha" className="stocks_table">
          <Table variant="simple">
            <Thead>
              <Tr className="stock_table_Tr">
                <Td fontSize="16px" fontStyle="bold">
                  Image
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Product Name
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Category
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Price
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Piece
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Availabel Color
                </Td>
                <Td fontSize="16px" fontStyle="bold">
                  Action
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              {true &&
                stock_store.data.map((el) => (
                  <Table_thread
                    image={el.image}
                    name={el.title}
                    category={el.category}
                    price={el.price}
                    piece={el.count}
                    color={el.color ? el.color.split(",") : []}
                    hendleDelete={() => hendleDelete(el)}
                    hendleEdit={() => hendleEdit(el)}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
      <div className="stock_section_3">
        <Text fontSize="14px" color="#D5D5D5">
          `Showing 1-06 of 78`
        </Text>
        {stock_store.stock_load ? (
          <CircularProgress isIndeterminate color="green.300" />
        ) : (
          <div>
            <Flex>
              <span className="editIcon" onClick={() => hendlePage(-1)}>
                {" "}
                <ChevronLeftIcon />
              </span>{" "}
              <span className="DeleitIcon" onClick={() => hendlePage(1)}>
                <ChevronRightIcon />{" "}
              </span>
            </Flex>
          </div>
        )}
      </div>
    </div>
  );
}
