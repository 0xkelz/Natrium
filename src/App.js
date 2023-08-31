import "./styles/Home.css";
import NavBar from "./components/navBar";

import { useState } from "react";
import { UserData } from "./Data";
import DoughnutChart from "./components/DoughnutChart";
import { id } from "ethers/lib/utils";
import Header from "./components/header";
import Tvl from "./components/tvl";
import SupplyMarkets from "./components/supplyMarkets";
import BorrowMarkets from "./components/borrowMarkets";

const Home = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: "Supply",
        data: UserData.map((data) => data["total-supply"]),
        backgroundColor: ["#fff", "#90e0ef", "#03045e"],
        borderColor: "#000",
      },
    ],
  });
  return (
    <div className="bg-rich-black h-[2100px] p-4">
      <NavBar />
      <Header />
      <div className="flex justify-center align-middle flex-wrap gap-8 lg:gap-10 mt-12 lg:mt-20">
        <div className="bg-bg-gray border-2 border-border-gray rounded-lg">
          <DoughnutChart chartData={userData} />
        </div>
        <div className="h-72 my-auto bg-bg-gray border-2 border-border-gray rounded-lg lg:h-[25rem]">
          <Tvl />
        </div>
      </div>
      <h1 className="text-center text-snow-white font-bold text-5xl mt-8">
        Markets
      </h1>
      <div className="mx-6 flex justify-center w-auto gap-6 flex-wrap lg:flex-nowrap lg:mx-26 2xl:mx-96">
        <SupplyMarkets />
        <BorrowMarkets />
      </div>
    </div>
  );
};

export default Home;
