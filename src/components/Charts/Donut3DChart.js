import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from 'react-fusioncharts';
import React, { Component } from "react";
// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "",
    subcaption: "",
    enablesmartlabels: "1",
    showlabels: "1",
    numbersuffix: " %",
    usedataplotcolorforlabels: "0",
    plottooltext: "$label, <b>$value</b> %",
    theme: "Candy"
  },
  data: [
    {
      label: "Dhaka",
      value: "69.29"
    },
    {
      label: "CTG",
      value: "13.84"
    },
    {
      label: "Khulna",
      value: "5.22"
    },
    {
      label: "Rajshahi",
      value: "1.14"
    },
    {
      label: "Others",
      value: "7.7"
    }
  ]
};

class Donut3DChart extends Component {
  render() {
    return (
      <ReactFusioncharts
        type="doughnut3d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}
export default Donut3DChart;