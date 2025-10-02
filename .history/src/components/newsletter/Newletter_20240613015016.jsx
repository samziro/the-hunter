import React from 'react'

const Newletter = () => {
  return (
    <div className=''>
      <p>Join our program to get news and updates on thefithunter.</p>
      <input
        type="text"
        placeholder="Enter your email ..."
        required
        className="w-full p-2 bg-slate-50 rounded-lg focus:outline-none focus:shadow-lg"
      />
      <button className="py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 ">
        Subscribe
      </button>
    </div>
  );
}

export default Newletter
