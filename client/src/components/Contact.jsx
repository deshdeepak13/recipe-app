import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex lg:flex-row flex-col justify-between gap-12 items-start px-10 bg-[rgba(255,255,255,0.1)] pb-10 pt-5">
      <div className="flex md:flex-row flex-col justify-center w-full lg:w-2/3 items-center md:items-start gap-12">
        <div className="logo text-white flex justify-center w-full md:w-1/2 items-center self-center">
          <img className="w-28 invert" src="ddRecipe.png" alt="logo" />
          <span className="text-3xl text-white tracking-widest  font-bold">
            dd<span className="text-orange-500 ">Recipe</span>{" "}
          </span>
        </div>
        <p className="pt-5 w-full md:w-1/2 text-white">
        &copy; 2024 ddRecipe. All rights reserved. This website and its content, including text, graphics, logos, and images, are the property of #ddDev and are protected by copyright and other intellectual property laws. Unauthorized use, reproduction, or distribution of any content from ddRecipe is strictly prohibited. For permissions and inquiries, please contact us directly. Thank you for supporting ddRecipe and respecting our work.
        </p>
      </div>

      <div className="quick-links w-full lg:w-1/3 flex flex-col sm:flex-row lg:flex-col lg:gap-4 gap-10 text-white lg:items-start items-center justify-center lg:justify-start">
        <h3 className="font-bold pt-0 lg:pt-3 text-orange-500">Quick Links:</h3>
        <ul className="flex flex-col md:flex-row lg:flex-col items-start text-sm list-none gap-2">
          <li className="underline">
            <Link to="/">Home</Link>
          </li>
          <li className="underline">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="underline">
            <Link to="/new-recipe">Add Recipe</Link>
          </li>
          <li className="underline">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <p className="font-bold text-orange-500">Social:</p>
        <div className="social flex gap-5  invert">
          <span>
            <a href="">
              <img className="w-6" src="instagram.svg" alt="" />
            </a>
          </span>
          <span>
            <a href="">
              <img className="w-6" src="linkedin.svg" alt="" />
            </a>
          </span>
          <span>
            <a href="">
              <img className="w-6" src="github.svg" alt="" />
            </a>
          </span>
          {/* <span><img src="" alt="" /></span>
          <span><img src="" alt="" /></span> */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
