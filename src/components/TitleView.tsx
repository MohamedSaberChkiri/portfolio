function TitleView(props: { title: string }) {
  return (
    <div className=" h-[10vh] relative flex z-2 items-center justify-center">
      <p className="text-8xl font-anton opacity-50 text-[color:var(--white-color)]">
        {" "}
        {props.title}
      </p>
      <p className="absolute opacity-100 text-4xl font-extrabold z-10 text-[color:var(--orange-color)] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {props.title}
      </p>
    </div>
  );
}

export default TitleView;
