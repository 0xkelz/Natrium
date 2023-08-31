import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ chartData }) => {
  return (
    <div className=" w-72 lg:w-[30rem]">
      <h1 className="text-snow-white font-medium text-xl mt-2 text-center lg:text-3xl lg:mt-4">
        Supply/Borrow{" "}
      </h1>
      <Doughnut
        data={chartData}
        options={{
          cutout: "80%",
          radius: "70%",
          layout: {
            padding: 0,
          },
          plugins: {
            title: {
              text: "Supply/Borrow",
            },
            legend: {
              position: "top",
              labels: {
                boxWidth: 15,
              },
            },
          },
        }}
      />
    </div>
  );
};
export default DoughnutChart;
