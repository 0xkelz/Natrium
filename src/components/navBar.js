import { ConnectWallet } from "@thirdweb-dev/react";

const NavBar = () => {
  return (
    <div>
      <ul className="flex align-middle justify-start gap-8 pb-3 mx-2 2xl:mx-24">
        <li className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-400 font-semibold text-3xl my-auto">
          Natrium
        </li>
        <li className="bg-border-gray w-[0.10rem] h-auto rounded-lg hidden lg:flex"></li>
        <li className="text-snow-white font-light text-lg my-auto hover:bg-blue-900 hover:rounded-lg ease-in-out duration-300 hover:py-1 hover:px-3 hover:font-normal hidden lg:flex">
          <a href="#">Stake</a>
        </li>
        <li className="text-snow-white font-light text-lg my-auto hover:bg-blue-900 hover:rounded-lg ease-in-out duration-300 hover:py-1 hover:px-3 hover:font-normal hidden lg:flex">
          <a href="#"> Farm</a>
        </li>
        <li className="text-snow-white font-light text-lg my-auto hover:bg-blue-900 hover:rounded-lg ease-in-out duration-300 hover:py-1 hover:px-3 hover:font-normal hidden lg:flex">
          <a href="#"> Docs</a>
        </li>
        <li className="ml-auto hover:opacity-80">
          <ConnectWallet btnTitle="Connect" className="connectBtn" />
        </li>
      </ul>
      <div className="h-[0.08rem] bg-border-gray w-auto rounded-lg mx-2 2xl:mx-28"></div>
    </div>
  );
};

export default NavBar;
