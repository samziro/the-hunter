const Newsletter = () => {
  return (
    <>
      <div className="mx-4 md:px-28 md:1/2 md:grid md:grid-cols-1 md:place-items-center md:m-0">
        <p className="my-4 text-stone-600">
          Join our program to get news and updates on thefithunter.
        </p>
        <div className="grid grid-cols-1">
          <input
            type="text"
            placeholder="Enter your email ..."
            required
            className=" my-4 p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
          />
          <button className="py-2 px-4 mt-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 ">
            Subscribe
          </button>
        </div>
        <div className="icons">
          
        </div>
      </div>
      <hr className="my-2" />
    </>
  );
};

export default Newsletter;
