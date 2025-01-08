import React from "react";
import { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const [ham, setham] = useState({src:"bars-solid.svg",isHam:true})
  const hamRef = useRef()
  const [animState, setanimState] = useState('')

  const hamAccess = ()=>{
    if(hamRef.current.src.includes("xmark-solid.svg")){
      setham({src:"bars-solid.svg",isHam:true})
    }
    else{
      setham({src:"xmark-solid.svg",isHam:false})
    }

  }
  const delay =(time)=>{
    for (let i = 0; i < time*1000; i++) {
      for(let j=0;j<560;j++){

      }
      
    }
  }

  const anim = ()=>{
    if(isHam){
      setanimState("pl-10")
    }
    else{setanimState("pl-0")}
  }



  return (
    <>
      <nav className="navbar flex justify-between items-start md:items-center md:px-16 pl-16 bg-black">
        <div className="logo text-white font-bold flex items-center py-3">
          <img className="w-16  invert" src="ddRecipe.png" alt="logo" />
          <span className="text-xl text-white tracking-widest">
            dd<span className="text-orange-500">Recipe</span>{" "}
          </span>
        </div>
        <ul className={`flex list-none gap-3 md:flex-row flex-col px-2 text-left text-white font-semibold md:w-fit w-1/3 p-2 md:h-auto h-[100vh] md:relative fixed right-0 z-30 ${
            ham.isHam ? "hidden md:flex" : ""
          }`}>
          <div className="pl-0 py-3 md:hidden relative flex justify-end pr-5 hambutton"><img src={ham.src} ref={hamRef} onClick={hamAccess} alt="" /></div>
          {/* {ham.isHam ? <div></div>: <div><img src="" alt="" /></div> } */}
          {[
            <NavLink
            to="/"
            className={(e) => {return e.isActive ? `navhover text-orange-500 pl-10 `  : `pl-10 animatedd`;
            }}
          >
            <li className={`md:border-none md:p-0 p-2 md:rounded-none rounded-xl md:bg-none bg-black md:drop-shadow-none border dropshadoww`}>Home</li>
          </NavLink>,
          <NavLink
          to="/recipes"
          className={(e) => {
            return e.isActive ? "navhover text-orange-500 pl-10" : " pl-10 animatedd";
          }}
        >
          <li className="md:border-none md:p-0 p-2 md:rounded-none rounded-xl md:bg-none bg-black md:drop-shadow-none border dropshadoww">Recipes</li>
        </NavLink>,
        <NavLink
        to="/new-recipe"
        className={(e) => {
          return e.isActive ? "navhover text-orange-500 pl-10" : " pl-10 animatedd";
        }}
      >
        <li className="md:border-none md:p-0 p-2 md:rounded-none rounded-xl md:bg-none bg-black md:drop-shadow-none border dropshadoww">New Recipe</li>
      </NavLink>,
      <NavLink
      
      to="/about"
      className={(e) => {
        return e.isActive ? "navhover text-orange-500 pl-10" : "pl-10 animatedd";
      }}
    >
      <li className="md:border-none md:p-0 p-2 md:rounded-none rounded-xl md:bg-none bg-black md:drop-shadow-none border dropshadoww">About</li>
    </NavLink>
          ].map((item,index)=>(
            <div
              key={index}
              className={`animatedd md:inline ${ham.isHam?'hidden':"inline"}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </div>
          ))}
          
          
          
          
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
