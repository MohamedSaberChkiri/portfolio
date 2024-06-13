import { useState } from "react";

function DarkLightSwitch() {
  const [position, setPosition] = useState("justify-start");
  const handleThemeChange = () => {
    setPosition((prevPosition) =>
      prevPosition === "justify-start" ? "justify-end" : "justify-start"
    );
  };

  return (
    <div
      className={`w-[50px] h-[20px] bg-transparent border border-white transition-transform duration-300 ease-in-out rounded-3xl flex items-center ${position}`}
      onClick={handleThemeChange}
    >
      <div className="h-[25px] w-[25px] rounded-[50%] bg-white"></div>
    </div>
  );
}

export default DarkLightSwitch;
