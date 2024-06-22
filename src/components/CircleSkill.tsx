import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import "./CompStyles/CircularProgressBar.css";
import { Skill } from "../data/skills";

const CircularProgressBar = (props: {
  percentage: number;
  skills: Array<Skill>;
  openTag: string;
  closeTag: string;
}) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (inView) {
      setProgress(props.percentage);
    }
  }, [inView, props.percentage]);

  const radius = 70;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="text-[color:var(--white-color)] flex flex-col px-[5vw]">
      <p className="text-[color:var(--orange-color)]">{props.openTag}</p>
      <div className="flex flex-wrap mx-auto  items-center justify-around">
        {props.skills.map((skill) => (
          <div
            ref={ref}
            className="relative flex flex-wrap items-center justify-around"
          >
            <svg height={radius * 2} width={radius * 2}>
              <circle
                stroke="gray"
                fill="transparent"
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              <circle
                className="progress"
                stroke="var(--orange-color)"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
            </svg>
            <div className="absolute flex flex-col items-center justify-around gap-2">
              <skill.icon size={30} />
              <p className="text-[11px]">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-[color:var(--orange-color)] flex justify-end">
        {props.closeTag}
      </p>
    </div>
  );
};

export default CircularProgressBar;
