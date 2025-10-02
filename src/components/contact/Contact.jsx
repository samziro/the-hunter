/* eslint-disable react/no-unescaped-entities */
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cfe61210-826e-4018-b1e2-d6c65ebb39c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.error("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="Contact m-4 md:px-28 md:py-8">
      <div
        className="grid grid-cols-1 justify-items-center align-items-center"
        data-aos="zoom-in-up"
      >
        <p className="pb-2 text-lightFontHeading dark:dark:text-darkFontText">
          Do you have anything in your mind to tell us? Please don't hesitate to
          get in touch with us via our contact form.
        </p>
        <form onSubmit={onSubmit} className="md:w-1/2">
          <div className="part_one py-2 md:grid md:grid-cols-2 md:gap-4">
            <div className="grid grid-cols-1">
              <label
                className="text-lightFontHeading dark:text-darkFontText"
                htmlFor="name"
              >
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name..."
                required
                className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg "
              />
            </div>
            <div className="grid grid-cols-1">
              <label
                className="text-lightFontHeading dark:text-darkFontText"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email..."
                required
                className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg "
              />
            </div>
          </div>
          <div className="part_two py-2">
            <label
              className="text-lightFontHeading dark:text-darkFontText"
              htmlFor="subject"
            >
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter your subject..."
              required
              className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg "
            />
          </div>
          <div className="part_three py-2">
            <label
              className="text-lightFontHeading dark:text-darkFontText"
              htmlFor="message"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="3"
              placeholder="Type your text here..."
              required
              className="w-full bg-slate-50 rounded-lg p-2 focus:outline-none focus:shadow-lg "
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="py-1 px-4 w-full md:w-1/2 rounded-lg bg-btnDarkTheme text-lightFontHeading hover:ring-2 hover:ring-gold font-semibold"
            >
              Send Message
            </button>
          </div>
        </form>
        <span className="mt-8 font-semibold text-lightFontText dark:dark:text-darkFontText text-left">
          {result}
        </span>
      </div>
    </div>
  );
};

export default Contact;
