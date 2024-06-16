import TextSwap from "./HomeTextSwap";

function HomeLeft() {
  return (
    <div className="flex flex-col items-start gap-6 justify-center h-[70vh]">
      <div className="text-[color:var(--white-color)] text-4xl sm:text-5xl cursor-none">
        MOHAMED SABER CHKIRI
      </div>
      <h1 className="text-2xl sm:text-3xl text-[color:var(--white-color)] gap-4 flex">
        I'm a <TextSwap />
      </h1>
      <p className="text-[color:var(--white-color)] max-w-[600px] ">
        {
          "I'm a web developer who loves making the web a more awesome place. I write code that works, most of the time, and designs that always impress. Explore my portfolio and let's create something incredible together!"
        }
      </p>
      <button className="cursor-none border border-[color:var(--orange-color)] px-6 py-4 rounded-2xl text-[color:var(--orange-color)]">
        Download CV
      </button>
    </div>
  );
}

export default HomeLeft;
