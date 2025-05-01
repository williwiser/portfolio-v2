import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Update active section based on intersection
          }
        });
      },
      { threshold: 0.5 } // Adjust to trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <nav
      className={`w-full fixed min-h-20 ${
        isScrolled ? "bg-[#020617] bg-opacity-95 shadow-lg" : "bg-transparent"
      } transition-colors duration-300 z-10`}
    >
      <div className="container mx-auto px-6 max-w-screen-xl flex justify-between items-center py-5">
        <a
          href="#"
          className="lg:hidden text-white lg:pr-5 lg:border-r-2 border-teal-600 font-bold hover:text-teal-500 transition-colors duration-300"
          onClick={() => setShowMenu(false)}
        >
          William
        </a>
        <ul
          className={` ${
            showMenu ? "" : "hidden"
          } lg:flex flex-col lg:flex-row w-full lg:w-min text-center top-20 lg:gap-5 absolute lg:static left-0 bg-black lg:bg-transparent h-screen lg:h-min`}
        >
          <li className="hidden lg:inline-block">
            <a
              href="#"
              className="text-white lg:pr-5 lg:border-r-2 border-teal-600 font-bold hover:text-teal-500 transition-colors duration-300"
              onClick={() => setShowMenu(false)}
            >
              William
            </a>
          </li>
          <li className="w-full">
            <a
              href="#about"
              className={`hover:text-teal-500 border-b-2 lg:border-none border-gray-700 p-5 lg:p-0 transition-colors duration-300 w-full inline-block ${
                activeSection === "about" ? "text-teal-400" : "text-white"
              }`}
              onClick={() => setShowMenu(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={`hover:text-teal-500 border-b-2 lg:border-none border-gray-700 p-5 lg:p-0 transition-colors duration-300 w-full inline-block ${
                activeSection === "skills" ? "text-teal-400" : "text-white"
              }`}
              onClick={() => setShowMenu(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`hover:text-teal-500 border-b-2 lg:border-none border-gray-700 p-5 lg:p-0 transition-colors duration-300 w-full inline-block ${
                activeSection === "projects" ? "text-teal-400" : "text-white"
              }`}
              onClick={() => setShowMenu(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-lime-400 p-5 lg:p-0 font-semibold hover:bg-lime-500 text-center transition-colors duration-300 w-full inline-block lg:hidden"
              onClick={() => setShowMenu(false)}
            >
              Get in Touch
            </a>
          </li>
        </ul>
        <a
          href="#contact"
          className="bg-lime-400 py-2 px-4 font-semibold rounded-md box-content hover:bg-lime-500 transition-colors duration-300 hidden lg:inline-block"
          onClick={() => setShowMenu(false)}
        >
          Get in Touch
        </a>
        <a className="lg:hidden" onClick={handleMenu}>
          <FontAwesomeIcon
            className="size-9 text-white transition-color duration-300"
            icon={showMenu ? faClose : faBars}
          />
        </a>
      </div>
    </nav>
  );
}

export default Navigation;
