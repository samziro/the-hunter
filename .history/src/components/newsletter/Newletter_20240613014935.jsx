import React from 'react'

const Newletter = () => {
  return (
    <div>
      <p>Join our program to get news and updates on thefithunter.</p>
      <input type="text" placeholder="Enter your email ..." required />
      <button py-2 px-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900 >Subscribe</button>
    </div>
  );
}

export default Newletter
