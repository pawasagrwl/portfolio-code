import { motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import Button from "./reusable/Button";
import { useRef, useState, useEffect } from "react";
import emailjs from "emailjs-com";

const selectOptions = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend Development",
  "Others",
];

const HireMeModal = ({ onClose, onRequest }) => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    const formValues = {
      name: form.current.name.value,
      email: form.current.email.value,
      message: form.current.message.value,
    };
    const errors = validateForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }
    setFormErrors({});
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageStatus("Message sent. This modal will close in 10 seconds.");
          setErrorMessage("");
          setTimeout(() => {
            setIsOpen(false);
            onClose();
          }, 10000);
        },
        (error) => {
          console.log(error.text);
          setIsSubmitting(false);
          setErrorMessage("Message failed, please try again later.");
          setMessageStatus(""); // Clear the success message
        }
      );
  };

  const validateForm = (values) => {
    let errors = {};

    // Check if name is not empty or just whitespace
    if (!values.name || !values.name.trim()) errors.name = "Name is required";

    // Check if email is not empty and is in proper format
    if (!values.email || !values.email.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(values.email)
    ) {
      errors.email = "Email is not valid";
    }

    // Check if message is not empty and is at least 25 characters long
    if (!values.message || !values.message.trim()) {
      errors.message = "Message is required";
    } else if (values.message.length < 25) {
      errors.message = "Message should be at least 25 characters long";
    }

    return errors;
  };

  useEffect(() => {
    let timer;
    if (messageStatus.startsWith("Message sent")) {
      timer = setTimeout(() => {
        setIsOpen(false);
        onClose();
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [messageStatus, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="font-general-medium fixed inset-0 z-30 transition-all duration-500"
    >
      <div className="bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"></div>

      <main className="flex flex-col items-center justify-center h-full w-full">
        <div className="modal-wrapper flex items-center z-30">
          <div className="modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative">
            <div className="modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark">
              <h5 className=" text-primary-dark dark:text-primary-light text-xl">
                How can we work together?
              </h5>
              <button
                onClick={onClose}
                className="px-4 font-bold text-primary-dark dark:text-primary-light"
              >
                <FiX className="text-3xl" />
              </button>
            </div>
            <div className="modal-body p-5 w-full h-full">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="max-w-xl m-4 text-left"
              >
                <div className="">
                  <input
                    className={`w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ${
                      formErrors.name ? "input-error" : ""
                    }`}
                    id="name"
                    name="name"
                    type="text"
                    required=""
                    placeholder="Name"
                    aria-label="Name"
                    disabled={isSubmitting}
                  />
                  {formErrors.name && (
                    <p className="form-error">{formErrors.name}</p>
                  )}
                </div>
                <div className="mt-6">
                  <input
                    className={`w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ${
                      formErrors.email ? "input-error" : ""
                    }`}
                    id="email"
                    name="email"
                    type="text"
                    required=""
                    placeholder="Email"
                    aria-label="Email"
                    disabled={isSubmitting}
                  />
                  {formErrors.email && (
                    <p className="form-error">{formErrors.email}</p>
                  )}
                </div>
                <div className="mt-6">
                  <select
                    className="w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                    id="subject"
                    name="subject"
                    type="text"
                    required=""
                    aria-label="Project Category"
                    disabled={isSubmitting}
                  >
                    {selectOptions.map((option, index) => (
                      <option
                        className="text-normal sm:text-md"
                        key={index}
                        value={option}
                      >
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mt-6">
                  <textarea
                    className={`w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ${
                      formErrors.message ? "input-error" : ""
                    }`}
                    id="message"
                    name="message"
                    cols="14"
                    rows="6"
                    required=""
                    placeholder="Describe your project or idea"
                    aria-label="Describe your project or idea"
                    disabled={isSubmitting}
                  ></textarea>
                  {formErrors.message && (
                    <p className="form-error">{formErrors.message}</p>
                  )}
                </div>
                <div className="modal-footer flex justify-between mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
                  <span
                    type="submit"
                    className="px-4
											sm:px-6
											py-2
											sm:py-2.5
											text-white
											bg-indigo-500
											hover:bg-indigo-600
											rounded-md
											focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Submit Request"
                    disabled={isSubmitting}
                  >
                    <Button
                      title={isSubmitting ? "Sending..." : "Send Message"}
                    />
                  </span>
                  <span
                    onClick={onClose}
                    type="button"
                    className="px-4
									sm:px-6
									py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light
									rounded-md
									focus:ring-1 focus:ring-indigo-900 duration-500"
                    aria-label="Close Modal"
                  >
                    <Button title="Close" />
                  </span>
                </div>
                {messageStatus && (
                  <p className="text-center text-green-500">{messageStatus}</p>
                )}
                {errorMessage && (
                  <p className="text-center text-red-500">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default HireMeModal;
