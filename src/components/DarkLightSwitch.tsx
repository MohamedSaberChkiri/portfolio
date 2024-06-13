import {  useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";


function DarkLightSwitch() {
  const [isLight, setIsLight] = useState(false);

  const handleThemeChange = () => {
    setIsLight(!isLight);

    document.documentElement.style.setProperty(
      '--black-color',
      isLight ? '#0e0e0e' : '#f6ecff'
    );
    document.documentElement.style.setProperty(
      '--white-color',
      isLight ? '#f6ecff' : '#0e0e0e'
    );




  };

  return (
    <div
      className={`relative w-[50px] h-[20px] bg-transparent flex items-center justify-center border rounded-3xl cursor-pointer ${isLight ? 'border-[color:var(--orange-color)]' : 'border-[color:var(--white-color)]'}`}
      onClick={handleThemeChange}
    >
      <div
        className={`absolute w-[25px] h-[25px] rounded-full text-black flex items-center justify-center transition-all duration-300 ease-in-out ${isLight ? 'left-0 bg-[color:var(--orange-color)] ' : 'left-[25px] bg-[color:var(--white-color)]'}`}
      >
        {isLight ? <MdOutlineWbSunny color="white"/> : <FaMoon />}
      </div>
    </div>
  );
}

export default DarkLightSwitch;
