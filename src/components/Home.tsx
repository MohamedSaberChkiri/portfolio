import HomeLeft from "./HomeLeft";
import HomeRight from "./HomeRight";
import HomeRightSocials from "./HomeRightSocials";

function Home() {
  return (
    <div className="flex items-center justify-around h-[90vh] w-full">
      <HomeLeft />

      <HomeRight />
      <div className="absolute right-[10%] bottom-[10%]">
        <HomeRightSocials />
      </div>
    </div>
  );
}

export default Home;
