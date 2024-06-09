import TextSwap from "./HomeTextSwap";

function HomeLeft() {
  return (
    <div className="flex flex-col items-start justify-center  h-[70vh] w-[50%]">
      <div className="inline-block ">
        <TextSwap />
      </div>
      <p></p>
      <button className="border border-white px-6 py-4 rounded-2xl text-white">
        Download CV
      </button>
    </div>
  );
}

export default HomeLeft;
