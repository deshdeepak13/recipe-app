import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <><Link to={props.id}>
      <div className="relative w-64 h-[20rem] flex justify-center">
        <div className="w-52 h-40 bg-red-700 self-center overflow-hidden absolute top-2 z-20 rounded-md">
          <img className="w-52 h-40 object-cover" src={props.image} alt="" />
        </div>
        <div className="w-64 h-full flex flex-col gap-3 absolute top-12 px-6 bg-[rgb(20,20,20)] rounded-md pt-32">
          <div className="animated-border-box-glow"></div>
          <div className=""></div>
          <h4 className="text-white font-bold text-lg">{props.title}</h4>
          <div className="gap-4">
            <span className="text-white text-md font-bold pr-1">
              {props.author}
            </span>
            <span className="text-slate-100 text-xs font-semibold over truncate">
              in {props.category}
            </span>
          </div>


          <div className=" text-white absolute bottom-6 w-52 ">
          <div className="emptyline w-52 h-px bg-white absolute bottom-10"></div>
            <div className="flex justify-around">
            <span className="flex items-center gap-1 w-1/3 ">
            <lord-icon
    src="https://cdn.lordicon.com/xyboiuok.json"
    trigger="hover"
    colors="primary:#ffffff"
    className="w-6 h-6 text-white">
</lord-icon>
              <span>23</span>
            </span>

            <div className="emptyline w-px h-full bg-white"></div>

            <span className="flex items-center gap-1 w-1/3 justify-center">
            <lord-icon
    src="https://cdn.lordicon.com/fdxqrdfe.json"
    trigger="hover"
    colors="primary:#ffffff"
     className="w-6 h-6">
</lord-icon>
              <span>15</span>
            </span>

            <div className="emptyline w-px h-full bg-white"></div>

            <span className="w-1/3 flex justify-center">
            <lord-icon
    src="https://cdn.lordicon.com/prjooket.json"
    trigger="hover"
    colors="primary:#ffffff" className="h-6 w-6">
</lord-icon>
            </span>
            </div>
          </div>
        </div>
      </div></Link>
    </>
  );
};

export default RecipeCard;
