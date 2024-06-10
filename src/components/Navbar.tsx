function Navbar() {
  return (
    <div className="flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)]">
      <div className="cursor-pointer text-4xl text-[color:var(--orange-color)]">
        {"<Mohamed/>"}
      </div>

      <ul className="flex items-center justify-around gap-10">
        <li className=" cursor-pointer">{"<About>"}</li>
        <li className=" cursor-pointer">{"<Stack>"}</li>
        <li className=" cursor-pointer">{"<Projects>"}</li>
      </ul>

      <button className="border-2 px-4 py-2 text-[color:var(--orange-color)] rounded-xl border-[color:var(--orange-color)]">
        {"<Get in Touch/>"}
      </button>
    </div>
  );
}

export default Navbar;
