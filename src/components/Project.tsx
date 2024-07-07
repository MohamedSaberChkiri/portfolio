function Project() {
  return (
    <div className="w-[90%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] bg-[#f6ecff] py-10 relative rounded-3xl shadow-2xl mt-12">
      <div className="hidden md:flex md:absolute md:top-[10%] md:left-[-50px] md:h-[250px] md:w-[250px] shadow-2xl rounded-3xl"></div>

      <div className="flex flex-col gap-4 items-start justify-around ml-0 md:ml-[30%] px-4 h-full py-4">
        <p className="text-[color:var(--white-color)] opacity-50">
          Febrary 2024 - Juni 2024
        </p>
        <p className="text-4xl font-bold text-[color:var(--orange-color)]">
          FootWear
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          provident sit recusandae neque, voluptas quam quisquam perspiciatis
        </p>
        <div className="w-[60%] flex items-center justify-start gap-4">
          <button className="btn border px-10 py-2 flex items-center justify-center rounded-[50px] cursor-none">
            <span className="flex lg:hidden">Live</span>
            <span className="hidden lg:flex">Live View</span>
          </button>
          <button className="bg-[color:var(--orange-color)] text-white border px-10 py-2 rounded-[50px] cursor-none">
            Github
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
