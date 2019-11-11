import React, { Component } from 'react';
import Chart from "chart.js";

export default class LineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount() {
        const lineChart = this.chartRef.current.getContext("2d");
        
        Chart.defaults.global.defaultFontFamily = "Roboto";

        new Chart(lineChart, {
            type: this.props.type,
            data: {
                labels: this.props.labels,
                datasets: [
                    {
                        label: "Sales",
                        data: this.props.data,
                        backgroundColor: 'rgba(62,231,173, 0.3)',
                        borderColor: 'rgba(62,231,173, 100)',
                    }
                ]
            },
            options: {
                elements: {
                    line: {
                        tension: 0
                    }
                },
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 18
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
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
                    }],
                    yAxes: [{
                        ticks: {
                            fontColor: "white",
                            fontSize: 18,
                        },
                        gridLines: {
                            color: "white",
                        },
                    }],
                }
            },

        });
    }
    render() {
        return (
            <div >
                <canvas
                    id="lineChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}