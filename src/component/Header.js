import React from 'react'

function Header({toggle}) {
    return (
        <div className="z-10">
            
            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mt-5 ml-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        
        <div className="flex justify-between z-10 items-start ">
           
            <div className="flex flex-col justify-center m-5">
                <p className="text-4xl font-bold text-white self-start">
                    Play Now
                </p>
                <p className="text-md font-normal text-white self-start pr-32">
                    Games for the gamers 
                </p>
                <p className="border-b border-gray-100 border-opacity-30 mt-5" >

                </p>
               
            </div>
            <div className="flex justify-center items-center m-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white m-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                </div>
        </div>
        </div>
    )
}

export default Header
