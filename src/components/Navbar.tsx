function Navbar() {
  return (
    <div className="flex items-center justify-around h-[10vh] w-full text-[color:var(--white-color)]">
      <div className="cursor-pointer text-2xl">{"<Mohamed/>"}</div>

      <ul className="flex items-center justify-around gap-10">
        <li className=" cursor-pointer">{"<About>"}</li>
        <li className=" cursor-pointer">{"<Stack>"}</li>
        <li className=" cursor-pointer">{"<Projects>"}</li>
      </ul>

      <button>{"<Contact Me/>"}</button>
    </div>
  );
}

export default Navbar;
