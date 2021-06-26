import React from 'react'
import hulk from "../Images/hulk.png"

function Game({image,name,info,color,big}) {
    return (
        <div className={ "flex z-10 flex-col ml-4 transition duration-500 ease-in-out transform hover:transform-y-1 hover:scale-110 py-5"}>
            <div className={big ? `${color}  flex flex-shrink rounded-2xl w-64 items-center justify-center`:`${color}  flex flex-shrink rounded-2xl  w-40 h-40  items-center justify-center`}>
                <img className="h-40" src={image} alt="" />

                </div>   
            <div className="flex flex-col justify-start align-center m-3">
                <p className="text-sm font-bold text-white self-start">
                    {name}
                </p>
                <p className="text xs font-normal text-white self-start">
                    {info}
                </p>
            </div>
        </div>
    )
}

export default Game
