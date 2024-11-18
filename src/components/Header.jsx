import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SlHandbag } from "react-icons/sl";

const Header = () => {
  const navigate = useNavigate();

  const navigateDonate = () => {
    navigate("/donate");
  };
  return (
    <header className="flex justify-between px-[10%] py-8 border border-b">
      <div className="left flex items-center gap-20">
        <Link to={`/`}>
          <img
            src="https://cdn.prod.website-files.com/6203d9f91bd3214ea54a1eba/621cd917ecee95d2d86aab66_philanthropy-x-webflow-template-logo.svg"
            alt="logo"
            loading="lazy"
            className="h-8"
          />
        </Link>

        <nav className="space-x-5 text-gray-600">
          <Link to={`/`}>Home</Link>
          <Link to={`/about`}>About</Link>
          <Link to={`/`}>Pages</Link>
          <Link to={`/blog`}>Blog</Link>
          <Link to={`/blog-post`}>Blog Post</Link>
          <Link to={`/donate`}>Donate</Link>
          <Link to={`/donate-single`}>Donate Single</Link>
          <Link to={`/contact`}>Contact</Link>
        </nav>
      </div>
      <div className="right flex items-center gap-10">
        <SlHandbag size={35} />
        <button
          className="font-semibold bg-orange-400 rounded-xl px-6 py-3"
          onClick={navigateDonate}
        >
          Donate now
        </button>
      </div>
    </header>
  );
};

export default Header;
