/* eslint-disable react/no-unescaped-entities */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
     const ref = useRef(null);
     const { scrollYProgress } = useScroll({
       target: ref,
       offset: ["0 1", "1.33 1"],
     });

     const scaleProgress = useTransform(scrollYProgress, [0.5, 1], [0.6, 1]);
     const opacityProgress = useTransform(scrollYProgress, [0.5, 1], [0.6, 1]);
  return (
    <>
      <div className="m-4 md:px-28 md:py-8">
        <motion.div
          className="grid grid-cols-1 justify-items-center align-items-center"
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
          transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
        >
          <p className="pb-2 text-stone-600">
            Do you have anything in your mind to tell us? Please don't hesitate
            to get in touch to us via our contact form.
          </p>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="md:w-1/2"
          >
            <input
              type="hidden"
              name="access_key"
              value="cfe61210-826e-4018-b1e2-d6c65ebb39c6"
            ></input>
            <div className="part_one py-2 md:grid md:grid-cols-2 md:gap-4">
              <div className="grid grid-cols-1">
                <label className="text-stone-600" htmlFor="name">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name..."
                  required
                  className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1">
                <label className="text-stone-600" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  required
                  className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
                />
              </div>
            </div>
            <div className="part_two py-2">
              <label className="text-stone-600" htmlFor="subject">
                Subject:
              </label>
              <input
                type="text"
                placeholder="Enter your subject..."
                required
                className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
              />
            </div>
            <div className="part_three py-2 outline-0">
              <textarea
                name="Message"
                id=""
                cols="50"
                rows="3"
                placeholder="Type your text here ..."
                className="w-full bg-slate-50 rounded-lg p-2 focus:outline-none focus:shadow-lg "
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-4 w-full md:w- rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 "
              >
                Send Message
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
