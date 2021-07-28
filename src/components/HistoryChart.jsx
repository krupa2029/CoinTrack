import React, { useEffect, useRef } from 'react';
import Chart from "chart.js";
import { historyOptions } from '../chartConfigs/chartConfigs';

const HistoryChart = ({ data }) => {
    const chartRef = useRef();
    const { day, week, month, year, detail } = data;

    useEffect(() => {
        if (chartRef && chartRef.current && detail) {
            const chartInstance = new Chart(chartRef.current, {
                type: 'line',
                data: {

                    datasets: [{
                        label: `${detail.name} price`,
                        data: day,
                        backgroundColor: "rgba(174,305,194,0.5)",
                        borderColor: "rgba(174,305,194,0.4)",
                        pointRadius: 0,

                    }]
                },
                options: {
                    ...historyOptions,
                },
            });
        }
    });
    return (
        <div className="bg-white border mt-2 rounded p-3">
            <div></div>
            <div>
                <canvas ref={chartRef} id="myChart" width={250} height={250}></canvas>
            </div>
        </div>

    )
}

export default HistoryChart;
