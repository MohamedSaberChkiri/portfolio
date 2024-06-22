import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./CompStyles/CircularProgressBar.css";
import { Skill } from "../data/skills";

const SkillProgress = (props: {
  skill: Skill;
  radius: number;
  strokeWidth: number;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgress(props.skill.level);
    }
  }, [inView, props.skill.level]);

  const normalizedRadius = props.radius - props.strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div
      ref={ref}
      className="relative flex flex-wrap items-center justify-around"
    >
      <svg height={props.radius * 2} width={props.radius * 2}>
        <circle
          stroke="transparent"
          fill="transparent"
          strokeWidth={props.strokeWidth}
          r={normalizedRadius}
          cx={props.radius}
          cy={props.radius}
        />
        <circle
          className="progress"
          stroke="var(--orange-color)"
          fill="transparent"
          strokeWidth={props.strokeWidth}
          strokeDasharray={circumference + " " + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={props.radius}
          cy={props.radius}
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-around gap-2">
        <props.skill.icon size={30} />
        <p className="text-[11px]">{props.skill.name}</p>
      </div>
    </div>
  );
};

export default SkillProgress;
