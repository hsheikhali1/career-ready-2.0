import React, { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav className="relative bg-[#0C1827] w-full flex flex-row justify-between items-center px-3 py-6">
        <img src="../../../public/logo.svg" alt="logo" />

        <button className="text-white" onClick={() => setOpen(!open)}>
          {open ? (
            <img src="../../../public/icons/close.svg" alt="close" />
          ) : (
            <img src="../../../public/icons/hamburger.svg" alt="hamburger" />
          )}
        </button>
      </nav>
        <nav className={`bg-[#0C1827] absolute w-full px-4 pb-10 transition-opacity ease-in ${open ? "opacity-100" : "opacity-0"}`}>
          <ul className="flex flex-col space-y-8 top-0">
            <li className="text-white font-satoshi font-medium text-base">Courses</li>
            <li className="text-white font-satoshi font-medium text-base">Prices</li>
            <li className="text-white font-satoshi font-medium text-base">Resources</li>
          </ul>
          <button className="text-white font-satoshi font-medium border-2 border-white border-solid p-2 rounded-md mt-9 hover:border-[#5FE668] hover:text-[#0C1827] hover:bg-[#5FE668] hover:transition-all"> 
            Login
          </button>
        </nav>
    </div>
  );
};
