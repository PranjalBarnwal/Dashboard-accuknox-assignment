import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(LineElement, PointElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const LineChart = ({name}) => {
    const data = {
        labels: ["Customer", "Business"],
        datasets: [
            {
                label: "2023",  
                data: [12,29],
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgb(54, 162, 235)",
                borderWidth: 1,
                pointBackgroundColor: "rgb(54, 162, 235)",
                fill: true,  
            },
            {
                label: "2024",
                data: [22, 19],
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                borderColor: "rgb(255, 99, 132)",
                borderWidth: 1,
                pointBackgroundColor: "rgb(255, 99, 132)",
                fill: true,
            },
            {
                label: "2025",
                data: [30, 15],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgb(75, 192, 192)",
                borderWidth: 1,
                pointBackgroundColor: "rgb(75, 192, 192)",
                fill: true,
            }
        ],
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false 
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
            title: {
                display: true,
                text:name,
                position: "top",
                padding: {
                    top: 15,
                    bottom: 20,
                },
                color: "#333",
                font: {
                    size: 16,
                    weight: "bold",
                },
                align: "start",
            },
        },
        scales: {
            x: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Account Type',
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Accounts',
                },
            },
        },
    };

    return (
        <div className="w-[20rem] h-[15rem] p-4 bg-white rounded-lg shadow-md">
            <Line data={data} options={options} className='h-full w-full' />
        </div>
    );
};

export default LineChart;
