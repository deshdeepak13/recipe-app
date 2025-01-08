import React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import MenuCard from "./MenuCard";

const Recipes = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const [recipeArray, setrecipeArray] = useState([])

  const [imageArray, setimageArray] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
        const response = await fetch('http://localhost:3000/api/images');
        const imageFiles = await response.json();
        setimageArray(imageFiles);
        // console.log(imageFiles[0])
      
    };

    fetchImages();
  }, []);


  const getRecipes = async() => {
    let req = await fetch("http://localhost:3000/")
    let recipes = await req.json()
    setrecipeArray(recipes);
    console.log(recipes)
    
  }

  useEffect(() => {
    getRecipes()
    
  }, []);




  return (
    <>
      <div className="px-20 p-5">
        <div className="flex gap-3 justify-between">
          <input
            placeholder="Search Recipes"
            {...register("r-search")}
            type="text"
            className="p-2 rounded-md w-full border-slate-300 border"
          />
          <span className="bg-orange-500 p-1 px-4 rounded-md text-white flex items-center gap-3 cursor-pointer">
            <p>Filters</p>
            <img className="w-4 h-4 invert" src="filter.svg" alt="" />
          </span>
        </div>
      </div>
      <hr className="mt-8 bg-black text-black fill-black border-black border" />

      <div className="flex flex-wrap justify-center bg-[url('food-bg.png')] pt-8 pb-24">
        {recipeArray.map((item,index)=>{
          {console.log(imageArray[0])}
          return(
            <MenuCard key={index} id={item._id} title={item.rtitle} desc={item.rdesc} author={item.rauthor} category={item.rcategory} image={`http://localhost:3000/images/${imageArray[index]}`}/>
          )
        })}
                      
      </div>
    </>
  );
};

export default Recipes;
