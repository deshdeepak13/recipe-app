import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000); // Multiply by 1000 to convert seconds to milliseconds

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year}, ${hours}:${minutes}`;
}

// const timestamp = Date.now() / 1000;
// console.log(formatTimestamp(timestamp));

const RecipePage = () => {
  const { id } = useParams();
  const [recipeFile, setrecipeFile] = useState("");
  const [ingreArray, setingreArray] = useState([]);
  const [instrucArray, setinstrucArray] = useState([]);
  const [tagsArray, settagsArray] = useState([]);
  const [date, setdate] = useState("");

  const [checkedItems, setCheckedItems] = useState({});
  const [image, setimage] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`http://localhost:3000/api/images`);
      const imageFile = await response.json();
      setimage(imageFile);
    };

    fetchImages();
  }, []);

  const handleCheckboxChange = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`http://localhost:3000/${id}`);
      const recFile = await response.json();
      setrecipeFile(recFile);
      setingreArray(JSON.parse(recFile.ringre));
      setinstrucArray(JSON.parse(recFile.rinstruc));
      settagsArray(JSON.parse(recFile.rtags));
      //   setrecipeFile(recFile);
      console.log(recFile);
      console.log(formatTimestamp(recFile.rimage.split(".")[0]));
      // console.log(`${Date(recFile.rimage.split('.')[0]).split('GMT')[0].split(" ").slice(0,4).join(" ")}, ${Date(recFile.rimage.split('.')[0]).split('GMT')[0].split(" ")[4]}`);
      setdate(formatTimestamp(recFile.rimage.split(".")[0]));
      //   console.log(JSON.parse(recFile.ringre))
    };

    fetchRecipe();
  }, []);

  return (
    <>
      <div className="text-white p-20">
        <div className="upper">
          <div className="pb-7 text-4xl font-semibold tracking-tighter">
            {recipeFile.rtitle}
          </div>
          <div className="flex items-center justify-between pb-3">
            <div className="flex gap-5 pl-10 text-slate-100">
              <span className="flex items-center gap-2 font-extralight text-sm italic">
              <lord-icon
    src="https://cdn.lordicon.com/kthelypq.json"
    trigger="hover"
    colors="primary:#ffffff"
    className="h-4 w-4">
</lord-icon>
                {recipeFile.rauthor}
              </span>
              <span className="flex items-center gap-2 font-extralight text-sm italic">
              <lord-icon
    src="https://cdn.lordicon.com/abfverha.json"
    trigger="hover"
    colors="primary:#ffffff"
    className="h-4 w-4">
</lord-icon>
                {date}
              </span>
              <span className="flex items-center gap-2 font-extralight text-sm italic">
                {" "}
                <lord-icon
                  src="https://cdn.lordicon.com/fdxqrdfe.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  className="w-4 h-4"></lord-icon>
                24
              </span>
              <span className="flex items-center gap-2 font-extralight text-sm italic">
              <lord-icon
    src="https://cdn.lordicon.com/pmhwxbpm.json"
    trigger="hover"
    colors="primary:#ffffff"
    className="h-4 w-4">
</lord-icon>
                {recipeFile.rcategory}
              </span>
            </div>

            <div className="flex gap-7 pr-10">
              <span>
                <lord-icon
                  src="https://cdn.lordicon.com/xyboiuok.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  className="w-7 h-7 text-white"
                ></lord-icon>
              </span>
              <span>
                <lord-icon
                  src="https://cdn.lordicon.com/prjooket.json"
                  trigger="hover"
                  colors="primary:#ffffff"
                  className="h-7 w-7"
                ></lord-icon>
              </span>
              <span>
              <lord-icon
    src="https://cdn.lordicon.com/ercyvufy.json"
    trigger="hover"
    colors="primary:#ffffff"
    className="h-7 w-7">
</lord-icon>
              </span>
            </div>
          </div>
        </div>
        <hr className="border-orange-500" />

        <div className="lower">
          <div className="leftside w-[80%] ">
            <div className="pt-10">
              <img
                className="w-[65rem] h-[40rem]"
                src={`http://localhost:3000/images/${recipeFile.rimage}`}
                alt=""
              />
              {console.log(recipeFile.rimage)}
            </div>
            <div className="pt-20">
              <p className="italic text-slate-200">{recipeFile.rdesc}</p>
            </div>
            <div className="pt-10">
              <h4 className="text-3xl pb-4">Ingredients:</h4>

              {ingreArray.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-center text-xl text-white pt-2"
                >
                  <input
                    type="checkbox"
                    name={`ingrecheck${index}`}
                    id={`ingrecheck${index}`}
                    className="accent-orange-500 w-4 h-4"
                    checked={!!checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <label
                    htmlFor={`ingrecheck${index}`}
                    className={
                      checkedItems[index] ? "line-through italic " : ""
                    }
                  >
                    {item.name}
                  </label>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <h4 className="text-3xl pb-4">Instructions:</h4>
              <ul className="text-white">
                {instrucArray.map((item, index) => (
                  <li
                    key={index}
                    className="text-xl pb-4 flex gap-4 items-center my-5"
                  >
                    <span className="bg-orange-500 w-5 h-5 mr-2 flex justify-center items-center text-sm rounded p-2 font-semibold self-start mt-1">
                      {index + 1}
                    </span>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10">
              <h4 className="text-3xl pb-4">Tags:</h4>
              <div className="flex gap-4 h-full">
                {tagsArray.map((item, index) => (
                  <div
                    key={index}
                    className="p-2 px-4 border border-white rounded-lg"
                  >
                    #{item.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rightside w-[20%]"></div>
        </div>
      </div>
    </>
  );
};

export default RecipePage;
