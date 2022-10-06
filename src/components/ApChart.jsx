import React, { useEffect, useState, useLayoutEffect } from "react";
import ApexCharts from "react-apexcharts";
import axios from "axios";
export default function ApChart() {
  const [rank, setRank] = useState([]);
  useLayoutEffect(() => {
    console.log("loading..")
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
  rank.length = 10;
  console.log(rank)
  const graph = rank.map((data) => ({
    x: data["name"],
    y: data["fluctuation"],
  }));
  console.log(graph);
  return (
    <div className="apchart">
      <ApexCharts
      width={900}
      height={500}
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
    </div>
  );
}
