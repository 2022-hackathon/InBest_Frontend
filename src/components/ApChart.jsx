import React, { useEffect, useState, useLayoutEffect } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";
export default function ApChart() {
  const [rank, setRank] = useState([]);
  useLayoutEffect(() => {
    console.log("loading..");
    axios
      .get("http://192.168.72.124:8080/stockrank")
      .then((res) => {
        setRank(res.data["data"]);
        console.log(res.data["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  rank.length = 25;
  const chartColor = rank.map((data) =>
    data["fluctuation"].charAt(0) === "-" ? "#048de3" : "#ff0000"
  );
  const graph = rank.map((data) => ({
    x: data["name"],
    y: data["fluctuation"],
  }));
  console.log(graph);
  console.log(chartColor);
  return (
    <ChartCon>
      <ApexCharts
        className="chart"
        width={1200}
        height={400}
        type="bar"
        series={[
          {
            data: graph,
          },
        ]}
        options={{
          chart: { type: "bar" },
        }}
        fill={{ colors: chartColor }}
      ></ApexCharts>
    </ChartCon>
  );
}
const ChartCon = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .chart {
    font-size: 10px;
  }
`;
