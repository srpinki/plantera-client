import React, { use, useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import logoImage from "/Plantera-logo.png";
import { AuthContext } from "../AuthProvider/Context";

const Header = () => {
  const { user, logOut } = use(AuthContext);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const handleLogout = () => {
    logOut(() => {
      console.log("Signout successfully");
    }).catch((error) => {
      console.log(error);
    });
  };

  const link = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/all-plants"}>All Plants</NavLink>
      <NavLink to={"/about"}>About Us</NavLink>
      <NavLink to={"/contact"}>Contact Us</NavLink>

      <div className="relative group flex items-center">
        {user ? (
          <div>
            <div className="flex items-center gap-4">
            <img
              src={user.photoURL}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-secondary cursor-pointer"
            />
            <NavLink to={"/auth/dashboard/overview"}>Dashboard</NavLink>
            </div>
            <div className="absolute hidden group-hover:flex flex-col right-0 mt-2 bg-white shadow-lg p-4 rounded z-50 text-sm min-w-[200px]">
              <p className="font-semibold">{user.displayName}</p>
              <p className="text-gray-500 text-xs">{user.email}</p>
              <button
                onClick={handleLogout}
                className="mt-2 bg-secondary text-white px-3 py-1 rounded "
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <a href="/auth/login" className="">
            Login
          </a>
        )}
      </div>

      {/* darkmode toggle */}

      <label className="swap swap-rotate ">
        {/* this hidden checkbox controls the state */}
        <input
          type="checkbox"
          checked={theme === "light" ? false : true}
          onChange={handleToggle}
        />

        {/* sun icon */}
        <svg
          className="swap-on h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
          className="swap-off h-8 w-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
    </>
  );
  return (
    <div className="fixed top-0 left-0 z-50 navbar bg-base-100 px-4 lg:px-8 shadow-md header">
      {/* Left: Logo */}
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold text-primary">
          <img src={logoImage} alt="Logo" />
        </Link>
      </div>

      <div className="hidden lg:flex">
        <ul className="menu menu-horizontal px-4 gap-6 items-center">{link}</ul>
      </div>

      {/* Mobile menu: Hamburger */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <FiMenu />
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 my-4"
        >
          {link}
        </ul>
      </div>
    </div>
  );
};

export default Header;
