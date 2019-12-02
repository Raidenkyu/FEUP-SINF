import React, { Component } from "react";
import Chart from "chart.js";

export default class Graph extends Component {

  /* HOW TO USE

  - 3 arguments:
      * type - "line", "bar" or "line balance"

      * datas - Must be an array, even if it is already an array, must be placed in an array
                Example: datas = {{data1, data2, data3}} or datas = {{data1}}
                Name of the array will be the name of the collumn
                
      * labels - array of labels
                Example: labels = {label1}

      * Example - <Graph type={"line balance"} datas={{Revenue, Expenses, Revenue_Expenses}} labels={labels1}/>

  */

  chartRef = React.createRef();

  componentDidMount() {
    const lineChart = this.chartRef.current.getContext("2d");

    Chart.defaults.global.defaultFontFamily = "Roboto, sans serif";

    let datasets = [];
    let counter = 0;
    let bgColor;
    let bdColor;
    let cType;
    let cBalance;

    const chartTypes = this.props.type.split(" ");

    if (chartTypes.length === 2) {

      cType = chartTypes[0];
      cBalance = chartTypes[1];
    } else cType = chartTypes[0];

    const chartType = cType;
    const chartBalance = cBalance;

    if (chartType === "line") {
      if (chartBalance === "balance") {
        bgColor = ["rgba(62,231,173,0.3)", "rgba(217,89,76,0.3)", "rgba(206,206,206,0.3)"];
        bdColor = ["rgba(62,231,173,255)", "rgba(217,89,76,255)", "rgba(206,206,206,255)"];
      } else {
        bgColor = ["rgba(62,231,173,0.3)", "rgba(40,147,111,0.3)", "rgba(29,105,79,0.3)"];
        bdColor = ["rgba(62,231,173,255)", "rgba(40,147,111,255)", "rgba(29,105,79,255)"];
      }
    } else if (chartType === "bar") {
      bgColor = ["rgba(217,89,76,255)", "rgba(62,231,173,255)"];
      bdColor = ["rgba(217,89,76,255)", "rgba(62,231,173,255)"];
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

    console.log(datasets); 

    new Chart(lineChart, {
      type: chartType,
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
              stacked: chartType === "bar" ? true : false,
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
              stacked: chartType === "bar" ? true : false,
            }
          ]
        }
      }
    });
  }

  render() {

    return (
      <div>
        <canvas id="chart" ref={this.chartRef} />
      </div>
    );
  }
}
