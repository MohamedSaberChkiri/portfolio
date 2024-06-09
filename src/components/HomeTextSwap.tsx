import { useState, useEffect } from "react";

const TextSwap = () => {
  const [currentText, setCurrentText] = useState("Hello, i'm Mohamed!");
  const texts = ["Hello, i'm Mohamed!", "Moin, ich bin Mohamed!"];
  let currentIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % texts.length;
      setCurrentText(texts[currentIndex]);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-block text-white font-anonymousPro text-4xl animate-customBorderColor border-r-2 border-white overflow-hidden whitespace-nowrap ">
      {currentText}
    </div>
  );
};

export default TextSwap;
