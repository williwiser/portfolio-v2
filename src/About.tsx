import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import me from "./assets/william.png";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
function About() {
  return (
    <section id="about" className="w-full overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-8 pt-10 h-full">
        <h1 className="font-semibold text-6xl text-pretty text-center">
          About
        </h1>
        <hr className="border-2 my-5 max-w-10 mx-auto border-teal-500" />

        <article className="flex flex-col lg:flex-row items-center gap-10 text-balance">
          <img
            src={me}
            alt="William Wani"
            className="size-72 object-cover border-b-8 border-teal-600 border-opacity-55 rounded-full"
          />
          <div>
            <p className="text-center lg:text-left">
              Hi, I'm William, a full-stack developer fueled by a passion for
              building intuitive and efficient web applications. When I'm not
              coding, you'll often find me strumming my guitar, gazing at the
              stars, or savoring a perfectly brewed cup of coffee. I specialize
              in creating scalable, modern and user-focused applications. With a
              knack for problem-solving and a commitment to clean, responsive
              design, I strive to deliver user experiences that shine. Let's
              connect and create something extraordinary together!
            </p>
            <div className="flex h-min mt-5">
              <a
                href="#contact"
                className="bg-lime-400 text-center py-2 px-4 font-semibold rounded-md mr-2 hover:bg-lime-500 transition-colors duration-300 inline-block flex-1 lg:flex-none"
              >
                <FontAwesomeIcon icon={faEnvelope} /> Contact Me
              </a>
              <a
                href="https://drive.google.com/file/d/1MGhv_nTQZ2MaOIpo9yFiBk-wyFDL8DRn/view?usp=sharing"
                className="border border-lime-400 text-center py-2 px-4 font-semibold rounded-md inline-block text-lime-400 flex-1 lg:flex-none"
              >
                <FontAwesomeIcon icon={faFile} /> Download CV
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
