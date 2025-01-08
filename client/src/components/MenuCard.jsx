import React from 'react'
import { Link } from 'react-router-dom'

const MenuCard = (props) => {
  return (
    <>
    <Link className='flex xl:w-[45%]' to={`/${props.id}`}><div className="card flex items-center h-64 p-4 gap-5 my-3 rounded-md w-full bg-transparent hover:bg-[rgba(255,255,255,0.15)]">
          <div className="img h-full">
            <img
              className="h-full w-64 object-cover border-3 border-black bg-red-400"
              src={props.image}
              alt={props.title}
            />
          </div>
          <div className="details-card w-[60%] self-start flex flex-col justify-between gap-4">
            <h3 className="text-4xl font-bold text-white">
              {props.title}
            </h3>
            <h4 className="text-sm text-slate-100 italic">
              {props.desc}
            </h4>
            <h4 className="text-sm text-white font-semibold">
              Posted By: {props.author}
            </h4>
            <h4 className="text-white font-semibold">Category: {props.category}</h4>
          </div>
          {/* <div className="w-[10%] flex justify-end invert">
            <img className="w-10 h-10" src="next.svg" alt="Next" />
          </div> */}
        </div>
        </Link>
    
    
    </>
  )
}

export default MenuCard