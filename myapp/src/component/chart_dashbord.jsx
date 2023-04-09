import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Flex, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import States from "./dash_stats";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Chart_Get_Request } from "../redux/chart_redux/chart_action";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,

  scales: {
    y: {
      ticks: {
        callback: function (value, index, ticks) {
          return "%" + value;
          // console.log(ticks)
        },
      },
    },
  },
};

let labels = [
  "5k",
  "10k",
  "15k",
  "20k",
  "25k",
  "30k",
  "35k",
  "40k",
  "45k",
  "50k",
  "55k",
  "60k",
];

let month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function Chart_line() {
  const [data_set, setdata] = useState();
  const toast = useToast();
  const dispatch = useDispatch();
  const chart_store = useSelector((store) => store.chart);

  // const [MONTH,setmonth]=useState("January")
  const Month = useRef("January");

  function hendleChange(month) {
    Month.current = month;
    hendleGet_chart_request(Month.current);
  }

  function changePer(chart_data) {
    let num = chart_data[0].data;
    let main_data = [];
    num.map((el) => main_data.push((Number(el) / chart_data[0].max) * 100));
    console.log(chart_data[0]);

    setdata({ ...chart_data[0], data: main_data });
  }


  function hendleGet_chart_request(m) {
    dispatch(Chart_Get_Request(m))
      .then((res) => changePer(res.payload))
      .catch((err) =>
        toast({
          title: "ERROR",
          description: "Failed to load data",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        })
      );
  }

  useEffect(() => {
let val=JSON.parse(localStorage.getItem("chart_month"))
if(val != undefined && val != null){
Month.current=val
}
  hendleGet_chart_request(Month.current);
  }, []);

  return (
    <div>
      <Text className="dash_bord_heading">Dashboard</Text>
      <States
        lable1={data_set?.lable1}
        lable2={data_set?.lable2}
        lable3={data_set?.lable3}
        lable4={data_set?.lable4}
        status1={data_set?.status1}
        status2={data_set?.status2}
        status3={data_set?.status3}
        status4={data_set?.status4}
        num1={data_set?.num1}
        num2={data_set?.num2}
        num3={data_set?.num3}
        num4={data_set?.num4}
        groth1={data_set?.groth1}
        groth2={data_set?.groth2}
        groth3={data_set?.groth3}
        groth4={data_set?.groth4}
      />

      <div className="chart_cont" Style={"margin:28px 30px;"}>
        <Flex justifyContent="space-between">
          <Text fontSize="24px" fontWeight="700">
            Sales Details
          </Text>
          <Select
            placeholder={Month.current}
            w="20%"
            className="Month_select"
            onChange={(e) => hendleChange(e.target.value)}
          >
            {month.map((el) => (
              <option value={el}>{el}</option>
            ))}
          </Select>
        </Flex>
        <Line
          options={options}
          data={{
            labels,
            datasets: [
              {
                label: Month.current,
                data: data_set?.data,
                borderColor: "#4880FF",
                backgroundColor: "white",
              },
            ],
          }}
        />
        ;
      </div>
    </div>
  );
}
