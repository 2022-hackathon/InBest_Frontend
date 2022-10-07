import React, { useEffect, useState, useLayoutEffect } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";
export default function Big() {
  const [rank, setRank] = useState([]);
  useLayoutEffect(() => {
    console.log("loading..");
    axios
      .get(`${localStorage.getItem("url")}`)
      .then((res) => {
        setRank(res.data["data"]);
        console.log(res.data["data"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  rank.length = 25;
  const graph = rank.map((data) => ({
    x: data["name"],
    y: data["tranding"],
  }));
  console.log(graph);
  return (
    <ChartCont>
      <ApexCharts
        className="charts"
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
      ></ApexCharts>
    </ChartCont>
  );
}
const ChartCont = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .chart {
    font-size: 10px;
  }
`;
