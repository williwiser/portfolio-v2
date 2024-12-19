import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Prop {
  thumbnail: string;
  title: string;
  technologies: string[];
  description: string;
  github: string;
  url: string;
}

function Project(props: Prop) {
  let lastItem = props.technologies[props.technologies.length - 1];
  console.log(lastItem);
  return (
    <div className="flex flex-col md:flex-row bg-slate-800 bg-opacity-70 border-2 border-slate-500 rounded-md overflow-hidden">
      <img
        src={props.thumbnail}
        alt="Thumbnail"
        className="size-full md:size-80 object-cover"
      />
      <div className="flex flex-col p-3 justify-between items-stretch">
        <article className="flex flex-col gap-2">
          <h1 className="font-semibold">{props.title}</h1>
          <ul className="flex text-xs items-center text-slate-400">
            {props.technologies.map((technology) => {
              return technology === lastItem ? (
                <li className="pr-2 mr-2">{lastItem?.toUpperCase()}</li>
              ) : (
                <li className="border-r border-slate-400 pr-2 mr-2">
                  {technology.toUpperCase()}
                </li>
              );
            })}
          </ul>
          <p>{props.description}</p>
        </article>
        <div>
          <a
            href={props.url}
            className="bg-lime-400 py-2 px-4 font-semibold rounded-md text-center mr-2 hover:bg-lime-500 transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faExternalLink} /> Live Demo
          </a>
          <a
            href={props.github}
            className="border border-lime-400 py-2 px-4 font-semibold rounded-md mt-3 inline-block text-lime-400"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
