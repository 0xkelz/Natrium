const Header = () => {
  return (
    <div className="flex flex-col justify-center mt-14 ">
      <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-sky-200 text-6xl  text-center font-bold inline-block tracking-widest lg:text-[8rem]">
        NATRIUM
      </h1>
      <br />
      <p className="text-center text-snow-white text-xl font-normal tracking-wider lg:text-[2rem]">
        The first next-gen AMM on{" "}
        <span className="underline text-accent hover:text-sky-600 ease-in-out duration-700">
          <a href="https://tenet.org/">Tenet</a>
        </span>
        .
      </p>
    </div>
  );
};
export default Header;
