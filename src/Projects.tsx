import Project from "./Project";
import thumbnail from "./assets/react-1-logo-png-transparent.png";
function Projects() {
  return (
    <section id="projects" className="w-full overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-8 pt-10 h-full">
        <h1 className="font-semibold text-6xl text-pretty text-center">
          Projects
        </h1>
        <hr className="border-2 my-5 max-w-10 mx-auto border-teal-500" />

        <ul className="flex flex-col gap-2">
          <li>
            <Project
              thumbnail={thumbnail}
              title="Book Nook"
              technologies={["React", "TypeScript", "Tailwind"]}
              description="A hotel booking website. Coming soon."
              github="https://github.com/williwiser"
              url="https://github.com/williwiser"
            />
          </li>
          <li>
            <Project
              thumbnail={thumbnail}
              title="Zimllery"
              technologies={["HTML", "CSS", "JavaScript"]}
              description="Landing page for a plant business. Coming soon."
              github="https://github.com/williwiser"
              url="https://github.com/williwiser"
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
