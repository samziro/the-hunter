import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [result, setResult] = React.useState("");

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
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="m-4 md:px-28 md:py-8">
        <div
          className="grid grid-cols-1 justify-items-center align-items-center"
          data-Aos="zoom-in-up"
        >
          <p className="pb-2 text-stone-600">
            Do you have anything in your mind to tell us? Please don't hesitate
            to get in touch to us via our contact form.
          </p>
          <form className="md:w-1/2">
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
                className="py-2 px-4 w-full md:w-1/2 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 "
              >
                Send Message
              </button>
            </div>
          </form>
          
        </div>
      </div>
    </>
  );
};

export default Contact;
