import "./styles/Home.css";
import NavBar from "./components/navBar";

import { useState } from "react";
import { UserData } from "./Data";
import DoughnutChart from "./components/DoughnutChart";
import { id } from "ethers/lib/utils";
import Header from "./components/header";
import Tvl from "./components/tvl";
import Markets from "./components/markets";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Supply",
        data: UserData.map((data) => data["total-supply"]),
        backgroundColor: ["#fff", "blue", "orange"],
        borderColor: "#000",
      },
    ],
  });
  return (
    <div className="bg-rich-black h-[2000px] p-4">
      <NavBar />
      <Header />
      <div className="flex justify-center align-middle flex-wrap gap-8 lg:gap-10 mt-16 lg:mt-28">
        <div className="bg-bg-gray border-2 border-border-gray rounded-lg">
          <DoughnutChart chartData={userData} />
        </div>
        <div className="bg-bg-gray border-2 border-border-gray rounded-lg">
          <Tvl />
        </div>
      </div>
      <div className=" flex justify-center">
        <Markets />
      </div>
    </div>
  );
};

export default Home;
