import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = ({name}) => {
  const data = {
    labels: ["Customer", "Business"],
    datasets: [
      {
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
        position: "right",
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
      title: {
        display: true,
        text: name,
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
  };

  return (
    <div>
      <Pie data={data} options={options} className="h-full w-full"/>
    </div>
  );
};

export default PieChart;
