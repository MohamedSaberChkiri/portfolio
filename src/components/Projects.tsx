import Project from "./Project"

function Projects() {
  return (
    <div className="w-[900px] flex flex-col gap-6 mx-auto my-[12vw]">
        <h1 className="text-3xl text-white">Projects</h1>

        <span className="text-[color:var(--orange-color)] ml-4">{'<Projects>'}</span>
        <div className="flex items-center justify-around ml-8 gap-5 flex-wrap">
            <Project/>
            <Project/>
            <Project/>
        </div>
        <span className="text-[color:var(--orange-color)] flex justify-end w-full">{'</Projects>'}</span>



    </div>
  )
}

export default Projects