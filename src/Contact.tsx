import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import { motion } from "motion/react";

const customStyles = {};

Modal.setAppElement("#root");
if (Modal.defaultStyles.overlay) {
  Modal.defaultStyles.overlay.backgroundColor = "rgba(0, 0, 0, 0.75)";
}

function Contact() {
  let subtitle: HTMLHeadingElement | null = null;
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [gotError, setGotError] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    if (subtitle) {
      subtitle.style.color = "#000";
    }
  }

  function closeModal() {
    setIsOpen(false);
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_jndzm3c", "template_v6oddn7", form.current!, {
        publicKey: "Ll8H5_isYgdFODuAM",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          openModal();
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setGotError(true);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        className={"flex justify-center items-center h-screen"}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col text-center gap-3 bg-white rounded-md p-5 shadow-md max-w-sm">
            <hgroup className="text-black">
              <h1 className="text-black text-3xl">
                Thank you for reaching out!
              </h1>
              <hr className="my-5 border border-gray-300"></hr>
              <p className="text-gray-600">I will get back to you soon.</p>
            </hgroup>
            <button
              type="submit"
              className="bg-lime-400 py-2 px-4 w-full font-semibold rounded-md hover:bg-lime-500 transition-colors duration-300"
              onClick={closeModal}
            >
              OK
            </button>
          </div>
        </motion.div>
      </Modal>
      <section id="contact" className="w-full overflow-hidden">
        <div className="container mx-auto max-w-screen-xl px-8 pt-10 h-full">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
            <div className="text-white max-w-lg text-center lg:text-left">
              <h1 className="text-6xl">Let's Chat</h1>
              <hr className="border-2 my-5 border-teal-500" />
              <p>
                Let's build something awesome together! Feel free to reach
                out—whether it's about a project, a question, or just to say hi.
                I'd love to connect!
              </p>
              <ul className="flex gap-5 text-4xl mt-5 justify-center lg:justify-normal">
                <li>
                  <a
                    href="https://www.linkedin.com/in/william-wani-a47316168"
                    className="text-gray-300 hover:text-teal-500 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/williwiser/"
                    className="text-gray-300 hover:text-teal-500 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:waniwilliam@live.com"
                    className="text-gray-300 hover:text-teal-500 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://api.whatsapp.com/send?phone=27763408507"
                    className="text-gray-300 hover:text-teal-500 transition-colors duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                </li>
              </ul>
            </div>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center gap-5 max-w-md rounded-md shadow-md w-full"
            >
              <label className=" w-full">
                <span className="text-gray-300 text-sm mb-1 inline-block">
                  Full Name
                </span>
                <input
                  name="fullName"
                  type="text"
                  className="py-2 px-4 rounded-md border border-gray-300 w-full"
                  required
                />
              </label>
              <label className=" w-full">
                <span className="text-gray-300 text-sm mb-1 inline-block">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  className="py-2 px-4 rounded-md border border-gray-300 w-full"
                  required
                />
              </label>
              <label className=" w-full">
                <span className="text-gray-300 text-sm mb-1 inline-block">
                  Message
                </span>
                <textarea
                  name="message"
                  className="w-full h-40 py-2 px-4 rounded-md border border-gray-300 resize-none"
                  required
                />
              </label>
              <button
                type="submit"
                className="bg-lime-400 py-2 px-4 w-full font-semibold rounded-md hover:bg-lime-500 transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? (
                  <FontAwesomeIcon icon={faSpinner} spin />
                ) : (
                  "Submit"
                )}
              </button>
              {gotError ? (
                <p className="font-semibold text-red-400">
                  There's seems to be problem. Try reaching out via email.
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
