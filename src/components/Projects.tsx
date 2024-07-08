import Project from "./Project";
import TitleView from "./TitleView";
import firstImage from "../assets/images/firstImage.png";
import secondImage from "../assets/images/oneschool.png";

function Projects() {
  return (
    <div className="w-full flex px-4 flex-col gap-6 mx-auto my-[12vw]">
      <TitleView title="Projects" />
      <div className="flex w-full flex-col mx-auto gap-4">
        <div className="flex flex-col items-center justify-center w-full  gap-5 ">
          <span className="text-[color:var(--orange-color)] flex justify-start w-[50%] mt-[10vh]">
            {"<Projects>"}
          </span>
          <Project
            title="FootWear"
            imageLink={firstImage}
            liveLink="https://foot-wear-one.vercel.app/"
            githubLink="https://github.com/MohamedSaberChkiri/FootWear"
            date="February 2024 - july 2024"
            description="Developed a dynamic e-commerce platform for footwear, featuring seamless user authentication, secure payment processing, and a responsive design for an optimal shopping experience."
          />
          <Project />
          <Project
            title="OneSchool"
            imageLink={secondImage}
            liveLink="https://landing-page-gilt-three-17.vercel.app/"
            githubLink="https://github.com/MohamedSaberChkiri/OneSchool"
            date="January 2024 - july 2024"
            description="Created a visually appealing and user-friendly landing page for an online school, highlighting key features, course offerings, and student testimonials to attract prospective learners"
          />
          <span className="text-[color:var(--orange-color)] flex justify-end w-[50%]">
            {"</Projects>"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Projects;
