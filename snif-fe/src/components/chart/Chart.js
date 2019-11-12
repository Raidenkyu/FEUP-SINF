import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const lineChart = this.chartRef.current.getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Roboto, sans serif";

    let datasets = [];
    let counter = 0;

    const backgroundColor = ["rgba(62,231,173, 0.3)", "rgba(40,147,111,0.3)", "rgba(29,105,79,0.3)"];
    const borderColor = ["rgba(62,231,173, 255)", "rgba(40,147,111,255)", "rgba(29,105,79,255)"];

    Object.keys(this.props.datas).map(key => {
        var dataset = {
            label: key,
            data: this.props.datas[key],
            backgroundColor: backgroundColor[counter],
            borderColor: borderColor[counter],
            }
        counter++;
        datasets.unshift(dataset);
    });

    new Chart(lineChart, {
      type: this.props.type,
      data: {
        labels: this.props.labels,
        datasets: datasets,
      },
      options: {
        legend: {
          labels: {
            fontColor: "white",
            fontSize: 18
          }
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 18,
                autoSkip: false,
                maxRotation: 45,
                minRotation: 45
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "white",
                fontSize: 18
              },
              gridLines: {
                color: "white"
              }
            }
          ]
        }
      }
    });
  }

  render() {

    return (
      <div>
        <canvas id="lineChart" ref={this.chartRef} />
      </div>
    );
  }
}
