import HomeRightSocials from "./HomeRightSocials";

function HomeRight() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <div>right place home</div>
      <div className="absolute right-0 bottom-0">
        <HomeRightSocials />
      </div>
    </div>
  );
}

export default HomeRight;
