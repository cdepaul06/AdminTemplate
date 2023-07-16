import React from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const Navigation = ({}) => {
  return (
    <nav className='fixed top-0 left-0 h-screen w-64 bg-[#066693] border-r 2 overflow-auto'>
      <ul className='list-none p-0 m-0'>
        {navLinks.map((link) => {
          const IconComponent = link.icon;
          return (
            <li key={link.path} className='py-1 w-[91%] ml-3'>
              <button
                className='bg-[#024362] border hover:bg-green-300 text-white font-bold py-2 px-4 rounded w-full transition duration-1000 hover:text-black'
                style={{ display: "flex", alignItems: "center" }}
              >
                <Link
                  to={link.path}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <IconComponent className='mr-2 w-7 h-7' />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <span>{link.title}</span>
                  </div>
                </Link>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
