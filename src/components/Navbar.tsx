function Navbar() {
  return (
    <div className="flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)]">
      <div className="cursor-pointer text-4xl text-[color:var(--orange-color)] ">
        {"<Mohamed/>"}
      </div>

      <ul className="flex items-center justify-around gap-10 text-sm w-[400px]">
        <li className=" cursor-pointer flex items-center justify-center"><span>{'<'}</span> <span className="hover:text-lg duration-200  hover:px-2">About</span>  <span>{'/>'}</span></li>
        <li className=" cursor-pointer flex items-center justify-center"><span>{'<'}</span> <span className="hover:text-lg duration-200  hover:px-2">Skills</span>  <span>{'/>'}</span></li>
        <li className=" cursor-pointer flex items-center justify-center"><span>{'<'}</span> <span className="hover:text-lg duration-200  hover:px-2">Projects</span>  <span>{'/>'}</span></li>
      </ul>

      <button className="border-2 px-4 py-2 text-[12px] text-[color:var(--orange-color)] rounded-xl border-[color:var(--orange-color)]">
        {"<Get in Touch/>"}
      </button>
    </div>
  );
}

export default Navbar;
