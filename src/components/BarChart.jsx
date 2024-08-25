import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(BarElement, Tooltip, Legend, Title, CategoryScale, LinearScale);

const BarChart = ({name}) => {
    const data = {
        labels: ["Customer", "Business"],
        datasets: [
            {
                label: "",
                data: [12, 29],
                backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            
                display:"false"
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
                },
            },
            title: {
                display: true,
                text: name,
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
        <div>
            <Bar data={data} options={options} className='h-full w-full'/>
        </div>
    );
};

export default BarChart;
