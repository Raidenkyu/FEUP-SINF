import React, { Component } from "react";
import Chart from "chart.js";

export default class LineGraph extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    const lineChart = this.chartRef.current.getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Roboto, sans serif";

    let datasets = [];
    let counter = 0;
    let bgColor;
    let bdColor;

    if(this.props.type == "line") {
    bgColor = ["rgba(62,231,173,0.3)", "rgba(40,147,111,0.3)", "rgba(29,105,79,0.3)"];
    bdColor = ["rgba(62,231,173,255)", "rgba(40,147,111,255)", "rgba(29,105,79,255)"];
    } else if(this.props.type == "bar") {
      bgColor = ["rgba(217,89,76,255)", "rgba(62,231,173,255)"];
      bdColor = ["rgba(217,89,76,255", "rgba(62,231,173,255)"];
    }

    const backgroundColor = bgColor;
    const borderColor = bdColor;

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
              },
              stacked: this.props.type == "bar" ? true : false,
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
              },
              stacked: this.props.type == "bar" ? true : false,
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
