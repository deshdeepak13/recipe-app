import React from "react";
import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import "./NewRecipe.css";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const NewRecipe = () => {
  const imageRef = useRef(null);
  const [image, setimage] = useState();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      rtitle: "",
      rimage: null,
      rdesc: "",
      ringre: [{ name: "" }],
      rinstruc: [{ name: "" }],
      rtags: [{ name: "" }],
      rcuisine: "",
      rcategory: "",
      rauthor: "",
    },
  });

  const {
    fields: fieldsIngre,
    append: appendIngre,
    remove: removeIngre,
  } = useFieldArray({
    control,
    name: "ringre",
  });

  const {
    fields: fieldsInstruc,
    append: appendInstruc,
    remove: removeInstruc,
  } = useFieldArray({
    control,
    name: "rinstruc",
  });

  const {
    fields: fieldsTag,
    append: appendTag,
    remove: removeTag,
  } = useFieldArray({
    control,
    name: "rtags",
  });

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const handleImageClick = () => {
    imageRef.current.click();
  };

  const handleImageChange = (e) => {
    let a = e.target.files[0];
    setimage(e.target.files[0]);
    // console.log(e.target.files[0]);
    let newimgname = `${Date.now()}.${
      a.name.split(".")[a.name.split(".").length - 1]
    }`;
    console.log(newimgname);
    // console.log(newimgname)
    setValue("rimage", newimgname); // Manually set the file input value in the form state
    // console.log(image)
  };

  const onSubmit = async (fdata) => {
    fdata.rimage = image;
    let imageName = `${Math.trunc(Date.now()/1000)}.${
      image.name.split(".")[image.name.split(".").length - 1]
    }`;

    //   const data = new FormData();
    // data.append('rtitle', fdata.rtitle);
    // data.append('rimage', imageName); // Assuming rimage is a FileList
    // data.append('rdesc', fdata.rdesc);
    // data.append('ringre', JSON.stringify(fdata.ringre));
    // data.append('rinstruc', JSON.stringify(fdata.rinstruc));
    // data.append('rtags', JSON.stringify(fdata.rtags));
    // data.append('rcuisine', fdata.rcuisine);
    // data.append('rcategory', fdata.rcategory);

    // console.log(data)

    // const response = await fetch('http://localhost:3000/upload', {
    //   method: 'POST',
    //   body: data
    // });

    // let arrr = [...fdata]

    // await delay(2); // simulating network delay
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...fdata,
        rimage: imageName,
        ringre: JSON.stringify(fdata.ringre),
        rinstruc: JSON.stringify(fdata.rinstruc),
        rtags: JSON.stringify(fdata.rtags),
      }),
    });
    // let res = await r.text()
 
    // let a = data.target.files[0];
    // let ing = [...fdata.ringre]
  
   
    console.log({
      ...fdata,
      rimage: imageName,
      ringre: JSON.stringify(fdata.ringre),
      rinstruc: JSON.stringify(fdata.rinstruc),
      rtags: JSON.stringify(fdata.rtags),
    });

    // if(data.username !== "shubham"){
    //   setError("myform", {message: "Your form is not in good order because credentials are invalid"})
    // }
    // if(data.username === "rohan"){
    //   setError("blocked", {message: "Sorry this user is blocked"})
    // }
  };

  // const [file, setfile] = useState()
  const uploadimg = () => {
    const formData = new FormData();
    formData.append("file", image);
    axios
      .post("http://localhost:3000/upload", formData)
      .then((res) => {})
      .catch((er) => console.log(er));
  };

  return (
    <>
      {isSubmitting && <div className="text-white">Loading...</div>}
      <div className="container pb-24">
        <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
          <hr className="w-[100vw]" />
          <div className="flex justify-between p-5 px-20">
            <h3 className="text-2xl font-semibold tracking-tighter text-white">
              Add New <span className="text-orange-500">Recipe</span>
            </h3>
            <button
              className="bg-orange-500 p-2 px-4 rounded-lg text-white font-semibold hover:scale-[1.05] hover:rotate-3  "
              disabled={isSubmitting}
              type="submit"
              onClick={errors.rtitle ? null : uploadimg}
            >
              Save
            </button>
          </div>
          <hr className="w-[100vw]"/>

          <div className="flex justify-center items-center">
            <div className="form-tree flex flex-col pt-4">
              <label htmlFor="rtitle">Recipe Title: </label>
              <input
                placeholder="Your Title here"
                {...register("rtitle", {
                  required: { value: true, message: "This field is required" },
                  minLength: { value: 3, message: "Min length is 3" },
                })}
                type="text"
              />
              {errors.rtitle && (
                <div className="text-red-500">{errors.rtitle.message}</div>
              )}
              <label htmlFor="rimage">Recipe Image: <span className="text-xs text-red-600">(please upload only jpeg/jpg/png file)</span> </label>
              <div onClick={handleImageClick}>
                {image ? (
                  <>
                    <img
                      className="sm:w-[25rem] sm:h-[25rem] h-[70vw] w-[70vw] p-9 px-20 border border-black rounded-sm m-auto"
                      src={URL.createObjectURL(image)}
                      alt=""
                    />
                  </>
                ) : (
                  <img
                    className="cursor-pointer bg-slate-100 sm:w-[25rem] sm:h-[25rem] h-[70vw] w-[70vw] p-9 px-20 rounded-lg m-auto"
                    src="image.svg"
                    alt=""
                  />
                )}

                <input
                  className="hidden"
                  {...register("rimage")}
                  type="file"
                  ref={imageRef}
                  onChange={handleImageChange}
                  accept="image/*"
                />
              </div>
              <button type="button" onClick={uploadimg}>
                Upload
              </button>

              <label htmlFor="rdesc">Description: </label>
              <input
                placeholder="Your Description here..."
                {...register("rdesc")}
                type="text"
              />

              <label htmlFor="ringre">Ingredients: </label>
              {fieldsIngre.map((field, i) => {
                return (
                  <div key={field.id} className="flex pb-4">
                    <input
                      {...register(`ringre.${i}.name`)}
                      defaultValue={field.name}
                      placeholder="Add Ingredients..."
                      type="text"
                    />
                    <span
                      className="p-1 text-center cursor-pointer"
                      onClick={() => removeIngre(i)}
                    >
                      <img className="w-4 h-4 invert" src="close.svg" alt="" />
                    </span>
                  </div>
                );
              })}
              <div
                className="text-orange-500 text-sm cursor-pointer"
                onClick={() => appendIngre({})}
              >
                + Add more
              </div>

              <label htmlFor="rinstruc">Instructions: </label>
              {fieldsInstruc.map((field, i) => {
                return (
                  <div key={field.id} className="pb-4">
                    <div className="text-white text-wrap">Step: {i + 1}</div>
                    <div className="flex">
                      <textarea
                      className="px-2 py-1"
                        placeholder=""
                        {...register(`rinstruc.${i}.name`)}
                        defaultValue={field.name}
                        rows={"4"}
                        cols={"50"}
                      ></textarea>
                      <span
                        className=" p-1 text-center cursor-pointer"
                        onClick={() => removeInstruc(i)}
                      >
                        <img
                          className="w-4 h-4 invert"
                          src="close.svg"
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                );
              })}
              <div
                className="text-orange-500 text-sm cursor-pointer"
                onClick={() => {
                  appendInstruc({});
                }}
              >
                + Add more
              </div>

              <label htmlFor="rcuisine">Cuisine</label>
              <select
                id="rcuisine"
                {...register("rcuisine", { required: true })}
              >
                <option value="">Please Select</option>
                <option value="indian">Indian</option>
                <option value="southindian">South-Indian</option>
                <option value="italian">Italian</option>
                <option value="chinese">Chinese</option>
              </select>

              <label htmlFor="rcategory">Category</label>
              <select
                id="rcategory"
                {...register("rcategory", { required: true })}
              >
                <option value="">Please Select</option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="smoothies">Smoothies</option>
              </select>

              <label htmlFor="rtags">Add Tags: </label>
              {fieldsTag.map((field, i) => {
                return (
                  <div key={field.id} className="flex pb-4">
                    {/* <div className="">Step {stepNum}</div> */}
                    <input
                      placeholder=""
                      {...register(`rtags.${i}.name`)}
                      defaultValue={field.name}
                      type="text"
                    />
                    <span
                      className="p-1 text-center cursor-pointer"
                      onClick={() => removeTag(i)}
                    >
                      <img className="w-4 h-4 invert" src="close.svg" alt="" />
                    </span>
                  </div>
                );
              })}
              <div
                className="text-orange-500 text-sm cursor-pointer"
                onClick={() => appendTag({})}
              >
                + Add Tag
              </div>

              <label htmlFor="rauthor">Posted by: </label>
            <input
              placeholder="Your Name here"
              {...register("rauthor")}
              type="text"
            />
            </div>
          </div>

          {/* {errors.myform && <div className="red">{errors.myform.message}</div>}
          {errors.blocked && (
            <div className="red">{errors.blocked.message}</div>
          )} */}
        </form>
      </div>
    </>
  );
};

export default NewRecipe;
