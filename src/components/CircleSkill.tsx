import "./CompStyles/CircularProgressBar.css";
import { Skill } from "../data/skills";
import SkillProgress from "./skillProgress";

const CircularProgressBar = (props: {
  skills: Array<Skill>;
  openTag: string;
  closeTag: string;
}) => {
  return (
    <div className="text-[color:var(--white-color)] flex flex-col px-[5vw]">
      <p className="text-[color:var(--orange-color)]">{props.openTag}</p>
      <div className="flex flex-wrap mx-auto items-center justify-around">
        {props.skills.map((skill, index) => (
          <SkillProgress
            key={index}
            skill={skill}
            radius={70}
            strokeWidth={10}
          />
        ))}
      </div>
      <p className="text-[color:var(--orange-color)] flex justify-end">
        {props.closeTag}
      </p>
    </div>
  );
};

export default CircularProgressBar;
