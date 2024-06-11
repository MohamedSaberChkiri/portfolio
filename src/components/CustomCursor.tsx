import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-point") as HTMLElement;
    const cursorOutline = document.querySelector(
      ".cursor-outline"
    ) as HTMLElement;

    const moveCursor = (e: MouseEvent) => {
      const posX = e.clientX;
      const posY = e.clientY;

      if (!cursor || !cursorOutline) return;
      cursor.style.left = `${posX}px`;
      cursor.style.top = `${posY}px`;

      cursorOutline.animate(
        {
          left: `${posX}px`,
          top: `${posY}px`,
        },
        { duration: 200, fill: "forwards", easing: "ease-in-out" }
      );
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div className="cursor-point w-[5px] h-[5px] bg-[color:var(--white-color)] rounded-full pointer-events-none fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"></div>
      <div className="cursor-outline w-[30px] h-[30px] border border-[color:var(--white-color)] rounded-full pointer-events-none fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"></div>
    </>
  );
};

export default CustomCursor;
