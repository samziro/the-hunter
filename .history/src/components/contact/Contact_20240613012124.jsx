const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "cfe61210-826e-4018-b1e2-d6c65ebb39c6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <>
      <div className="md:px-28 md:py-8">
        <div className="md:grid md:grid-cols-1 md:justify-items-center md:align-items-center">
          <p className="pb-2">
            Do you have anything in your mind to tell us? Please don't hesitate
            to get in touch with us via our contact form.
          </p>
          <form onSubmit={onSubmit} className="w-1/2">
            <input
              type="hidden"
              name="access_key"
              value="cfe61210-826e-4018-b1e2-d6c65ebb39c6"
            />
            <div className="part_one py-2 md:grid md:grid-cols-2 md:gap-4">
              <div className="grid grid-cols-1">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name..."
                  required
                  className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
                />
              </div>
              <div className="grid grid-cols-1">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email..."
                  required
                  className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
                />
              </div>
            </div>
            <div className="part_two py-2">
              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject..."
                required
                className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
              />
            </div>
            <div className="part_three py-2">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                id="message"
                cols="50"
                rows="3"
                placeholder="Type your message here ..."
                required
                className="w-full bg-slate-50 rounded-lg p-2 focus:outline-none focus:shadow-lg"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="mb-2" />
    </>
  );
}

export default Contact;
