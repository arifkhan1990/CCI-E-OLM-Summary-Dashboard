import React, { Component } from "react";
import Chart from "react-apexcharts";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import highcharts3d from "highcharts/highcharts-3d";
import seriesLabel from 'highcharts/modules/series-label';
import Accessibility from 'highcharts/modules/accessibility';

seriesLabel(Highcharts);
// Accessibility(Highcharts);
class HichartLineChart extends Component {
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
        <HighchartsReact
        containerProps={{ style: { borderRadius: "25px" } }}
        highcharts={Highcharts}
        options={this.state.chartOptions}
        type="pie"
        width="100%"
        height="100%"
      />
    );
  }
}

export default HichartLineChart;
