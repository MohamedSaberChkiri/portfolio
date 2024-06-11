import { Skill } from "../data/skills";

function Skilles(props: {
  stack: Array<Skill>;

  openTag: string;
  closeTag: string;
}) {
  return (
    <>
      <div className="flex-col items-start justify-center w-fit">
        <span className="text-[color:var(--orange-color)] mb-[3vh] flex">
          {props.openTag}
        </span>
        <div className="flex items-center justify-center gap-5">
          {props.stack.map((skill) => (
            <div
              key={skill.name}
              className="text-[color:var(--white-color)] w-[100px] h-[100px] rounded border border-white flex items-center justify-center flex-col relative"
            >
              <skill.icon size={50} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <span className="text-[color:var(--orange-color)] flex mt-[3vh] float-end">
          {props.closeTag}
        </span>
      </div>
    </>
  );
}

export default Skilles;
