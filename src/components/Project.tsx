import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { Link } from "react-scroll";

function Project(props: {
  title: string;
  date: string;
  description: string;
  liveLink?: string;
  githubLink: string;
  imageLink: string;
  portofolio?: boolean;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.22 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <motion.div
      style={{ scale: scale }}
      ref={ref}
      className="w-[90%] xl:w-[50%] lg:w-[70%] md:w-[80%] sm:w-[90%] bg-[#f6ecff] py-10 relative rounded-3xl shadow-2xl mt-12 duration-500"
    >
      <div className="hidden md:flex md:absolute  md:top-[10%] md:left-[-150px] md:h-[250px] md:w-[350px] shadow-2xl rounded-3xl">
        <img
          src={props.imageLink}
          alt="project Image"
          className="rounded-2xl object-center"
        />
      </div>

      <div className="flex flex-col gap-4 items-start justify-around ml-0 md:ml-[30%] px-4 h-full py-4">
        <p className="text-black opacity-50">{props.date || "february 2021"}</p>
        <p className="text-4xl font-bold text-[color:var(--orange-color)]">
          {props.title}
        </p>
        <p>{props.description}</p>
        <div className="w-[60%] flex items-center justify-start gap-4">
          <button className="border-[color:var(--orange-color)] hover:bg-[color:var(--orange-color)] hover:text-white border px-10 py-2 flex items-center justify-center rounded-[50px] cursor-none">
            {props.portofolio ? (
              <Link
                to="home"
                smooth={true}
                duration={500}
                href={props.liveLink}
                target="_blank"
                className="flex lg:hidden "
              >
                Live
              </Link>
            ) : (
              <a
                href={props.liveLink}
                target="_blank"
                className="flex lg:hidden "
              >
                Live
              </a>
            )}
            {props.portofolio ? (
              <Link
                to="home"
                smooth={true}
                duration={500}
                href={props.liveLink}
                target="_blank"
                className="hidden lg:flex "
              >
                Live
              </Link>
            ) : (
              <a
                href={props.liveLink}
                target="_blank"
                className="hidden lg:flex "
              >
                Live
              </a>
            )}
          </button>
          <button className="bg-[color:var(--orange-color)] text-white border px-10 py-2 rounded-[50px] cursor-none">
            <a href={props.githubLink} target="_blank">
              {" "}
              Github{" "}
            </a>
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Project;
