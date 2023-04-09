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
  Edit_product_Get_Request,
  Product_Delete_Request,
  Product_Get_Request,
  Search_product_Get_Request,
} from "../redux/stock/stock.action";
import Table_thread from "../component/table_content";

export default function Stock() {
  const [hide_modal, sethide] = useState(true);
  let [edit_values, seteditValue] = useState({});
  const [page, setpage] = useState(1);
  const dispatch = useDispatch();
  const stock_store = useSelector((store) => store.stock);
  const toast = useToast();
  let id;
  useEffect(() => {
    dispatch(Product_Get_Request(page))
      .then((res) => {
        res.type == "STOCK_GET_ERROR"
          ? toast({
              title: "ERROR",
              description: "Failed to load data",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          : console.log(res);
      })
      .catch((err) =>
        toast({
          title: "ERROR",
          description: "Failed to load data",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        })
      );
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
    dispatch(Product_Delete_Request(el, page))
      .then((res) => {
        res.type == "STOCK_GET_ERROR"
          ? toast({
              title: "ERROR",
              description: "Failed to load data",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          : console.log(res);
      })
      .catch((err) =>
        toast({
          title: "ERROR",
          description: "Failed to load data",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        })
      );
  }

  function hendleEdit(el) {
    sethide(false);
    seteditValue(el);
  }
  function HendleSubmit() {
    sethide(true);
    console.log("componrnt---", edit_values, page);
    dispatch(Edit_product_Get_Request(edit_values, page))
      .then((res) => {
        res.type == "STOCK_GET_ERROR"
          ? toast({
              title: "ERROR",
              description: "Failed to load data",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          : console.log(res);
      })
      .catch((err) =>
        toast({
          title: "ERROR",
          description: "Failed to load data",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        })
      );
  }

  function hendleChange(e) {
    const { value, name } = e.target;
    if (name != "color") {
      seteditValue({ ...edit_values, [name]: value });
    } else {
      seteditValue({ ...edit_values, [name]: value });
    }
  }

  function fetchSearch(q) {
    console.log(q);
    dispatch(Search_product_Get_Request(q))
      .then((res) => {
        res.type == "STOCK_GET_ERROR"
          ? toast({
              title: "ERROR",
              description: "Failed to load data",
              status: "error",
              duration: 3000,
              isClosable: true,
              position: "top",
            })
          : console.log(res);
      })
      .catch((err) =>
        toast({
          title: "ERROR",
          description: "Failed to load data",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        })
      );
  }

  function debounce(func, delay, e) {
    if (id) {
      clearTimeout(id);
    }
    id = setTimeout(function () {
      fetchSearch(e.target.value);
    }, delay);
  }

  return (
    <div className="stoc_main">
      <div
        className="stock_loder"
        Style={`display:${stock_store.stock_load ? "block" : "none"}`}
      >
        <div className="loder_icon_stock">
          {" "}
          <CircularProgress isIndeterminate color="green.300" />
        </div>
      </div>

      <div
        className="modal_content"
        Style={`display:${hide_modal ? "none" : "block"}`}
      >
        <Flex className="modal">
          <div>
            <Image src={edit_values.image} />
            <Text>- {edit_values.title}</Text>
            <Text>- {edit_values.category}</Text>
            <Text>- $ {edit_values.price}</Text>
            <Text>- {edit_values.count} Pieces</Text>
            <Text>- {edit_values.color}</Text>
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
        <Text fontSize="32px" fontWeight="700">
          Product Stock
        </Text>
        <div>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<SearchIcon color="gray.300" />}
            />
            <Input
              type="text"
              placeholder="Search"
              Style={"border-radius:50px"}
              onChange={(e) => debounce(fetchSearch, 1500, e)}
            />
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
        <Text fontSize="14px" Style={"opacity:60%"} fontWeight="600">
          Showing 1-06 of 78
        </Text>

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
      </div>
    </div>
  );
}
