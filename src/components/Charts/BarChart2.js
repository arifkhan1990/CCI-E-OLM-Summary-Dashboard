import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: [],
      chartOptions: {},
    };
  }

  componentDidMount() {
    this.setState({
      chartData: this.props.chartData,
      chartOptions: this.props.chartOptions,
    });
  }

  render() {
    return (
        <Chart
          options={this.state.chartOptions}
          series={this.state.chartData}
          type="bar"
          width="100%"
          height="340px"
        />
    );
  }
}

export default BarChart2;