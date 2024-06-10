import TextSwap from "./HomeTextSwap";

function HomeLeft() {
  return (
    <div className="flex flex-col items-start gap-6 justify-center h-[70vh] w-[50%]">
      <div className="inline-block ">
        <TextSwap />
      </div>
      <h1 className="text-4xl text-[color:var(--orange-color)]">
        Web Developer
      </h1>
      <p className="text-white w-[600px] ">
        Welcome to my portfolio! Explore projects where clean design meets
        powerful code, showcasing my ability to create responsive, user-friendly
        web experiences.
      </p>
      <button className="border border-[color:var(--orange-color)] px-6 py-4 rounded-2xl text-[color:var(--orange-color)]">
        Download CV
      </button>
    </div>
  );
}

export default HomeLeft;