import React, { Component } from "react";
import Chart from "chart.js";
import PropTypes from "prop-types";

class Graph extends Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        const lineChart = this.chartRef.current.getContext("2d");

        Chart.defaults.global.defaultFontFamily = "Open Sans, sans serif";

        const datasets = [];
        const chartData = this.props.data;
        const chartType = chartData.type;

        Object.keys(chartData.datasets).map((key) => {
            const dataset = {
                label: key,
                data: chartData.datasets[key].values,
                backgroundColor: chartData.datasets[key].backgroundColor,
                borderColor: chartData.datasets[key].borderColor,
            };
            datasets.unshift(dataset);
            return key;
        });

        new Chart(lineChart, {
            type: chartType,
            data: {
                labels: chartData.labels,
                datasets: datasets,
            },
            options: {
                legend: {
                    labels: {
                        fontColor: "white",
                        fontSize: 12,
                    },
                },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: "white",
                                fontSize: 12,
                                autoSkip: false,
                                maxRotation: 45,
                                minRotation: 45,
                            },
                            gridLines: {
                                display: false,
                                drawBorder: false,
                            },
                            stacked: chartType === "bar" ? true : false,
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: "white",
                                fontSize: 12,
                                beginAtZero: true,
                            },
                            gridLines: {
                                color: "white",
                            },
                            stacked: chartType === "bar" ? true : false,
                        },
                    ],
                },
            },
        });
    }

    render() {
        return (
            <div style={{ width: "100%" }}>
                <canvas id="chart" ref={this.chartRef} />
            </div>
        );
    }
}

Graph.propTypes = {
    data: PropTypes.object.isRequired,
};

const colors = {
    lightGreen: {
        background: "rgba(62,231,173,0.3)",
        border: "rgba(62,231,173,255)"
    },
    middleGreen: {
        background: "rgba(62,231,173,0.3)",
        border: "rgba(62,231,173,255)"
    },
    darkGreen: {},
    red: {
        background: "rgba(217,89,76,0.3)",
        border: "rgba(217,89,76,255)"
    },
    grey: {
        background: "rgba(206,206,206,0.3)",
        border: "rgba(206,206,206,255)"
    }


}
export {
    Graph,
    colors
}
