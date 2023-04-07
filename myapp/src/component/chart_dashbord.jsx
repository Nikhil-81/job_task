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
  // const [MONTH,setmonth]=useState("January")
  const Month = useRef("January");

  function hendleChartChange(month) {
    axios
      .get(`https://fackstore.onrender.com/sales?month=${month}`)
      .then((res) => changePer(res.data))
      .catch((err) => console.log(err));
  }

  function hendleChange(month) {
    Month.current = month;
    console.log(Month);
    hendleChartChange(Month.current);
  }

  function changePer(chart_data) {
    let num = chart_data[0].data;
    let main_data = [];
    num.map((el) => main_data.push((Number(el) / chart_data[0].max) * 100));
    console.log(main_data);
    setdata(main_data);
  }

  useEffect(() => {
    axios
      .get(`https://fackstore.onrender.com/sales?month=${Month.current}`)
      .then((res) => changePer(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="chart_cont" Style={"margin:28px 30px;"}>
      <Flex justifyContent="space-between">
        <Text fontSize="24px">Sales Details</Text>
        <Select
          placeholder="Month"
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
              data: data_set,
              borderColor: "#4880FF",
              backgroundColor: "white",
            },
          ],
        }}
      />
      ;
    </div>
  );
}
