const Markets = () => {
  return (
    <div class="w-2/3 relative overflow-x-auto shadow-md sm:rounded-lg mt-10 bg-bg-gray border-2 border-border-gray rounded-lg">
      <table class="w-full text-sm text-center  text-gray-300">
        <thead class="text-sm tracking-wide  uppercase bg-gray-700 text-snow-white">
          <tr>
            <th scope="col" class="px-6 py-3">
              ASSETS
            </th>
            <th scope="col" class="px-6 py-3">
              SUPPLY APR
            </th>
            <th scope="col" class="px-6 py-3">
              WALLET BALANCE
            </th>
            <th scope="col" class="px-6 py-3">
              COLLATERAL
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class=" border-b bg-bg-gray border-border-gray">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              ETH
            </th>
            <td class="px-6 py-4 text-green-500 font-bold">
              1.49% <br />
              <span className="text-slate-400 font-normal">&#8477; 0.59%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              0.000 <br />
              <span className="text-slate-500 font-semibold">$0.00</span>
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-500 hover:underline">
                Add collateral
              </a>
            </td>
          </tr>
          <tr class=" border-b bg-bg-gray border-border-gray">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              USDC
            </th>
            <td class="px-6 py-4 text-green-500 font-bold">
              2.14% <br />
              <span className="text-slate-400 font-normal">&#8477; 0.47%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              0.000 <br />
              <span className="text-slate-500 font-semibold">$0.00</span>
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-500 hover:underline">
                Add collateral
              </a>
            </td>
          </tr>
          <tr class=" border-b bg-bg-gray border-border-gray">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              WBTC
            </th>
            <td class="px-6 py-4 text-green-500 font-bold">
              4.79% <br />
              <span className="text-slate-400 font-normal">&#8477; 1.98%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              0.000 <br />
              <span className="text-slate-500 font-semibold">$0.00</span>
            </td>
            <td class="px-6 py-4">
              <a href="#" class="font-medium text-blue-500 hover:underline">
                Add collateral
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Markets;
