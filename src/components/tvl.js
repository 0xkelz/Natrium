import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useEffect, useState } from "react";

const Tvl = () => {
  const [utcObjectsArray, setUtcObjectsArray] = useState([]);
  const [tvl, setTvl] = useState(0);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://api.llama.fi/protocol/ghast-protocol"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchData()
      .then((data) => {
        const dateTvl = data.chainTvls.Arbitrum.tvl;
        const toUTC = (arr) => {
          const maxLength = arr.length - 14;
          const utcObjectsArray = [];
          for (let i = maxLength; i <= arr.length - 1; i++) {
            const date = new Date(arr[i].date * 1000);
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hour = date.getHours();
            const utcDate = `${String(day).padStart(2, "0")}-${String(
              month
            ).padStart(2, "0")}`;
            utcObjectsArray.push({
              hour,
              utcDate,
              tvl: Number(arr[i].totalLiquidityUSD),
            });
          }
          // Sort the objects based on the UTC dates and hours
          utcObjectsArray.sort((a, b) => {
            const dateA = new Date(
              `2023-${a.utcDate}T${String(a.hour).padStart(2, "0")}:00:00`
            );
            const dateB = new Date(
              `2023-${b.utcDate}T${String(b.hour).padStart(2, "0")}:00:00`
            );
            return dateA.getTime() - dateB.getTime();
          });

          setUtcObjectsArray(utcObjectsArray);
        };
        toUTC(dateTvl);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle the error appropriately
      });
  }, []);

  async function fetchTvl() {
    try {
      const response = await fetch("https://api.llama.fi/tvl/ghast-protocol");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  }
  useEffect(() => {
    fetchTvl().then((tvl) => {
      setTvl(
        tvl.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      );
    });
  });

  return (
    <div>
      <h1 className="text-snow-white font-medium text-xl mt-2 mb-2 text-center lg:text-3xl lg:mt-4">
        Total Value Locked{" "}
      </h1>
      <div className="w-72 h-72 flex justify-center lg:w-[40rem] lg:h-[30rem] xl:w-[45rem] 2xl:w-[55rem]">
        <ResponsiveContainer width="80%" height="80%">
          <AreaChart data={utcObjectsArray}>
            <defs>
              <linearGradient id="color" x1={0} y1={0} x2={0} y2={1}>
                <stop offset="0%" stopColor="#0077b6" stopOpacity={0.4}></stop>
                <stop
                  offset="95%"
                  stopColor="#0077b6"
                  stopOpacity={0.05}
                ></stop>
              </linearGradient>
            </defs>
            <CartesianGrid opacity={0.1} vertical={false} />
            <XAxis dataKey="utcDate" hide={true} />
            <YAxis hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="tvl"
              stroke="#0077b6"
              fill="url(#color)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="rounded-lg bg-[#26313c] text-white p-2 shadow-lg text-center">
        <h4>{label}</h4>
        <h2 className="">
          Tvl: {""}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-300">
            {payload[0].value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }) + "$"}
          </span>
        </h2>
      </div>
    );
  } else {
    return "";
  }
};

export default Tvl;
