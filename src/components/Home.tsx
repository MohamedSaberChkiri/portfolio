import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";

function Home() {
  return (
    <div className="flex items-center justify-around">
      <div>
        <HomeLeft />
      </div>
      <div>
        <HomeRight />
      </div>
    </div>
  );
}

export default Home;
