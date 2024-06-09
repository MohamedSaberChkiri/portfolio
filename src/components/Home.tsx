import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

function Home() {
  return (
    <div className="flex items-center justify-around w-full">
      <HomeLeft />

      <HomeRight />
    </div>
  );
}

export default Home;
