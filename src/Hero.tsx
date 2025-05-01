import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const [headingVisible, setHeadingVisible] = useState(false);
  const [nameColored, setNameColored] = useState(false);
  const [taglineVisible, setTaglineVisible] = useState(false);

  useEffect(() => {
    // Set initial animation timeouts
    setTimeout(() => setHeadingVisible(true), 300);
    setTimeout(() => setNameColored(true), 1200); // Color changes after the text slides in
    setTimeout(() => setTaglineVisible(true), 2000);
  }, []);
  return (
    <section className="w-full h-screen overflow-hidden">
      <div className="container mx-auto max-w-screen-xl px-8 flex flex-col lg:flex-row gap-5 lg:gap-0 justify-center lg:justify-between items-center pt-5 h-full">
        <div className="text-left p-8">
          <h1
            className={`font-semibold text-6xl max-w-5xl transition-all duration-700 transform ${
              headingVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            I'm
            <span
              className={`font-bold transition-colors duration-700 ${
                nameColored ? "text-lime-400" : "text-white"
              }`}
            >
              {" "}
              William
            </span>
            , a full stack developer.
          </h1>
          <p
            className={`text-3xl mt-10 transition-all duration-700 transform ${
              taglineVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-16"
            }`}
          >
            I build clean, user-friendly applications for clients.
          </p>
        </div>

        <ul className="flex lg:flex-col justify-center gap-10 border-t lg:border-l lg:border-t-0 lg:pl-8 py-8 border-teal-500">
          <li>
            <a
              href="https://www.linkedin.com/in/william-wani-a47316168"
              className="social-media-icon text-gray-300 hover:text-teal-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="size-14" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/williwiser/"
              className="social-media-icon text-gray-300 hover:text-teal-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGithub} className="size-14" />
            </a>
          </li>
          <li>
            <a
              href="mailto:waniwilliam@live.com"
              className="social-media-icon text-gray-300 hover:text-teal-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faEnvelope} className="size-14" />
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=27763408507"
              className="social-media-icon text-gray-300 hover:text-teal-500 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="size-14" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;
