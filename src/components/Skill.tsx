import { Skill } from "../data/skills";

function Skilles(props: {
  stack: Array<Skill>;

  openTag: string;
  closeTag: string;
}) {
  return (
    <>
      <div className="flex-col items-start justify-center w-fit">
        <span className="text-[color:var(--orange-color)] mb-[3vh] text-sm flex">
          {props.openTag}
        </span>
        <div className="flex items-center justify-center gap-5">
          {props.stack.map((skill) => (
            <div
              key={skill.name}
              className="text-[color:var(--white-color)] w-[90px] h-[90px] gap-2 rounded border border-white flex items-center justify-center flex-col relative"
            >
              <div className="absolute text-white w-[90px] h-[90px] bg-[color:var(--orange-color)] opacity-0 hover:opacity-85 duration-200 rounded flex items-center justify-center">
                {skill.level}
              </div>
              <skill.icon size={30} />
              <p className=" text-[11px]">{skill.name}</p>
            </div>
          ))}
        </div>
        <span className="text-[color:var(--orange-color)] flex mt-[3vh] text-sm float-end">
          {props.closeTag}
        </span>
        
      </div>
    </>
  );
}

export default Skilles;
