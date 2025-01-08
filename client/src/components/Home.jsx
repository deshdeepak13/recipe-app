import React from "react";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [recipeArray, setrecipeArray] = useState([]);
  const [imageArray, setimageArray] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch("http://localhost:3000/api/images");
      const imageFiles = await response.json();
      setimageArray(imageFiles);
      // console.log(imageFiles[0])
    };

    fetchImages();
  }, []);

  useEffect(() => {
    const getRecipes = async () => {
      let req = await fetch("http://localhost:3000/");
      let recipes = await req.json();
      setrecipeArray(recipes);
      console.log(recipes);
    };

    getRecipes();
  }, []);

  return (
    <>
      <h2 className="text-5xl sm:text-7xl font-semibold tracking-tighter p-20 pb-0 text-white">
        <span className="text-orange-500">Hello</span> Deshdeepak!!!
      </h2>
      <div className="container1 flex flex-col xl:flex-row justify-center xl:items-center p-20 pt-0">
        <div className="box1 xl:w-1/2 w-full mt-5 text-start">
          <h5 className="text-4xl tracking-wider pt-2 text-white">
            Your daily <span className="text-orange-500">taste</span> needs are
            here...
          </h5>
          <br />
          <p className=" text-slate-300 text-md leading-7 italic w-full">Your ultimate destination for mouth-watering recipes from around the globe. Whether you're a seasoned chef or a kitchen newbie, our easy-to-follow recipes and vibrant community of food lovers are here to inspire your next delicious creation. Dive into a diverse collection of recipes that cater to every taste and occasion. Join our community by uploading your favorite recipes and showcasing your culinary skills. Get daily recipe recommendations, cooking tips, and more to keep your kitchen adventures exciting.
          </p>
        </div>
        <div className="box2 xl:w-1/2 mt-5 top-0 relative flex justify-center items-center lg:flex-row flex-col ">
          <div className="dropshadoww xl:absolute h-[50vw] w-[50vw] xl:w-[25rem] xl:h-[25rem] sm:h-[30rem] sm:w-[30rem] xl:right-20 xl:-top-10 -z-9 rounded-full">
            <img className="w-full h-full" src="biryani.png" alt="" />
          </div>
          <div className="dropshadoww xl:absolute h-[50vw] w-[50vw] sm:w-[30rem] xl:h-[30rem] sm:h-[30rem] -z-10 xl:-left-28 xl:-top-40  rounded-full">
            <img className="w-full h-full" src="samosa.png" alt="" />
          </div>
          {/* <img src="meals.png" className="w-full" alt="" /> */}
          {/* <img src="biryani.png" className='' alt="" />
    <img src="samosa.png" className='' alt="" />
    <img src="dosa.png" className='' alt="" /> */}
          {/* <img src="paneer.png" alt="" /> */}
        </div>
      </div>

      <div className="container2 flex text-center md:flex-row flex-col-reverse items-center lg:m-40 md:m-14 m-5 mb-32">
        <div className="box1 md:w-1/2 w-2/3 flex dropshadoww">
          <img src="foodinphone.jpg" className="md:h-[25rem]   rounded-xl justify-center" alt="" />
        </div>
        <div className="box2 md:w-1/2 w-full mb-10">
          <h3 className="text-5xl  font-semibold tracking-tighter text-white mb-10">
            Share your <span className="text-orange-500">Recipes</span>
          </h3>
          <p className="text-slate-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            maxime id aut laborum doloremque omnis quasi minima aspernatur sunt
            amet. Ut beatae sint quibusdam, tenetur iste similique fugit in
            necessitatibus earum ipsum debitis eligendi natus vel iusto illum
            labore reiciendis dicta, inventore totam exercitationem. Nisi ea
            atque sapiente sed pariatur.
          </p>
          <Link to="/new-recipe"><button className="bg-orange-500 text-white font-semibold p-2 px-4 rounded-md mt-4">
            Create New Recipe
          </button></Link>
        </div>
      </div>

      <div className="container3 px-20 pb-56 ">
        <h3 className="text-5xl font-semibold tracking-tighter text-white">
          Trending <span className="text-orange-500">Recipes</span>
        </h3>
        <div className="slider overflow-hidden w-full h-[26rem] flex justify-center relative">
          <div
            className={`trending-slider w-[${
              recipeArray.length * 19 * 2
            }] mt-10 flex gap-12 h-[26rem]`}
          >
            {recipeArray.map((item, index) => {
              return (
                <RecipeCard
                  key={index + "_1"}
                  id={item._id}
                  title={item.rtitle}
                  author={item.rauthor}
                  category={item.category}
                  image={`http://localhost:3000/images/${item.rimage}`}
                />
              );
            })}
            {recipeArray.map((item, index) => {
              return (
                <RecipeCard
                  key={index + "_2"}
                  id={item._id}
                  title={item.rtitle}
                  author={item.rauthor}
                  category={item.category}
                  image={`http://localhost:3000/images/${item.rimage}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className="container4 px-20 pb-56 h-full">
        <h3 className="text-5xl font-semibold tracking-tighter text-white">
          Your <span className="text-orange-500">Recipes</span>
        </h3>

        <div className="flex justify-center mt-10">
          <div className="your-recipes flex gap-12 h-full flex-wrap">
            {recipeArray.map((item, index) => {
              return (
                <div className="my-4">
                <RecipeCard
                  key={index + "_2"}
                  id={item._id}
                  title={item.rtitle}
                  author={item.rauthor}
                  category={item.category}
                  image={`http://localhost:3000/images/${item.rimage}`}
                /></div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="container5 px-20 pb-56 flex flex-col h-full">
        <h3 className="text-5xl font-semibold tracking-tighter text-white">
          Categori<span className="text-orange-500">es</span>
        </h3>
        <div className="text-md text-orange-500 font-semibold self-end px-20">
          View More &gt;
        </div>
        <div className="categories your-recipes mt-10 flex gap-12 h-full flex-wrap">
          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium text-white">Breakfast</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium text-white">Lunch</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium text-white">Dinner</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Desserts</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Smoothies</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Chinese</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Italian</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">South-Indian</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Gujarati</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Sweets</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Fast Food</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Chicken</p>
          </div>

          <div className="category flex flex-col items-center gap-2">
            <img className="h-32 w-32 bg-red-400 rounded-full" src="" alt="" />
            <p className="font-medium">Paneer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
