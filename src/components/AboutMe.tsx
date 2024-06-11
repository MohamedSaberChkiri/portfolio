function AboutMe() {
  return (
    <div className="flex-col gap-[3vh] text-[color:var(--white-color)] my-[50px] w-[700px] mx-auto">
      <h1 className="text-3xl">About Me</h1>
      <span className="text-[color:var(--orange-color)] ml-[3vw] flex my-5">
        {"<About>"}
      </span>
      <p className="ml-[5vw]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore unde
        mollitia laudantium a sed hic quis minima voluptatibus error quia
        quaerat cupiditate incidunt, ratione, expedita exercitationem magni
        dicta veritatis voluptatem.
      </p>
      <span className="text-[color:var(--orange-color)] float-end">
        {"</About>"}
      </span>
    </div>
  );
}

export default AboutMe;
