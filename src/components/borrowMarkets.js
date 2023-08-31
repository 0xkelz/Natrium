const BorrowMarkets = () => {
  return (
    <div class="w-auto relative overflow-x-auto shadow-md sm:rounded-lg mt-10 bg-bg-gray border-2 border-border-gray rounded-lg lg:w-2/3">
      <table class="w-full text-sm text-center text-gray-300">
        <thead class="text-xs tracking-wide uppercase bg-gray-700 text-snow-white lg:text-sm">
          <tr>
            <th scope="col" class="px-6 py-3">
              ASSETS
            </th>
            <th scope="col" class="px-6 py-3 whitespace-nowrap">
              BORROW APR
            </th>
            <th scope="col" class="px-6 py-3">
              LIQUIDITY
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="ease-in-out duration-500 border-b bg-bg-gray border-border-gray hover:bg-slate-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              ETH
            </th>
            <td class="px-6 py-4 text-purple-500 font-bold">
              4.42% <br />
              <span className="text-slate-400 font-normal">&#8477; 8.54%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              778.8265 <br />
              <span className="text-slate-500 font-semibold">
                $1,279,204.59
              </span>
            </td>
          </tr>
          <tr class="ease-in-out duration-500 border-b bg-bg-gray border-border-gray hover:bg-slate-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              USDC
            </th>
            <td class="px-6 py-4 text-purple-500 font-bold">
              5.03% <br />
              <span className="text-slate-400 font-normal">&#8477; 5.42%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              1,224,183.711 <br />
              <span className="text-slate-500 font-semibold">
                $1,224,183.711
              </span>
            </td>
          </tr>
          <tr class="ease-in-out duration-500 border-b bg-bg-gray border-border-gray hover:bg-slate-800">
            <th
              scope="row"
              class="px-6 py-4 font-medium whitespace-nowrap text-snow-white"
            >
              WBTC
            </th>
            <td class="px-6 py-4 text-purple-500 font-bold">
              8.50% <br />
              <span className="text-slate-400 font-normal">&#8477; 17.22%</span>
            </td>
            <td class="px-6 py-4 font-bold">
              1.39081 <br />
              <span className="text-slate-500 font-semibold">$36,183.26</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default BorrowMarkets;
