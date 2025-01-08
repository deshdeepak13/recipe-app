import { useState, useEffect,useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Recipes from './components/Recipes'
import NewRecipe from './components/NewRecipe'
import Contact from './components/Contact'
import About from './components/About'
import RecipePage from './components/RecipePage'
import Images from './Images'
import ScrollToTop from './components/ScrollToTop'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'




const App = () => {


  // const serve = async() => {
  //   let req = await fetch("http://localhost:3000/Images")
  //   // let first = await req.json(
  //   // setpasswordArray(passwords);
  //   console.log(req)
    
  // }
  
  // useEffect(() => {
  //   serve()
    
  // }, []);




  const router = createBrowserRouter([
    {path: "/",
      element: <><ScrollToTop/><Navbar/><Home/><Contact/></>
    },
    {path: "/recipes",
      element: <><ScrollToTop/><Navbar/><Recipes/><Contact/></>
    },
    {path: "/:id",
      element: <><ScrollToTop/><Navbar/><RecipePage /><Contact/></>
    },
    {path: "/new-recipe",
      element: <><ScrollToTop/><Navbar/><NewRecipe/><Contact/></>
    },
    {path: "/about",
      element: <><ScrollToTop/><Navbar/><About/><Contact/></>
    },
    {path: "/images",
      element: <><ScrollToTop/><Navbar/><Images/><Contact/></>
    }
  ])





  return (
     <>
     {/* <div className='absolute opacity-70 -z-10 w-full bg-black' >
     <img className='opacity-55' src="background.png" alt="" />
     </div> */}
    <RouterProvider router={router}/>
     
    
      
    </>
  )
}

export default App