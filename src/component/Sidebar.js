import React from 'react'
import fort1 from "../Images/fortnite1.png"
import fort2 from "../Images/fortnite2.png"
import fort4 from "../Images/fort4.png"
import hulk from "../Images/hulk.png"
import cb from "../Images/cbpunc.png"

function Sidebar({isopen,toggle}) {
    return (
        <div className={isopen ?"flex flex-1 flex-col items-center h-screen bg-gray-800 fixed rounded-r-3xl z-20 ":"hidden"}>
            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white mt-2 self-end mr-4"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            <div className="flex justify-between items-center mt-10">
                    <div className="p-1 bg-gray-100 rounded-3xl">
                        <img src={fort1} alt="" className="w-20" />
                    </div>
                    <div className="flex flex-col ml-5">
                        <p className="text-md font-bold text-white self-start">
                            Mark coringan
                        </p>
                        <p className="text-xs font-extralight self-start text-white">
                            lvl.102
                        </p>
                    </div>
             </div>
             <div className="flex mt-5">
            <div className="flex flex-col pr-24">
                <p className="text-xs font-light self-start text-white ml-5">hours played</p>
                <p className="text-3xl font-extrabold text-white self-start ml-5">1,533</p>
            </div>
            <div className="bg-gray-400 rounded-2xl flex text-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10  text-white " viewBox="0 0 20 20 " fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </div>
                 
             </div>

             <div className="flex mt-5">
            <div className="flex flex-col pr-24">
                <p className="text-xs font-light self-start text-white ml-5">games played</p>
                <p className="text-3xl font-extrabold text-white self-start ml-5">1,53</p>
            </div>
            <div className=" rounded-2xl flex text-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            </div>
                 
             </div>

             <div className="flex mt-5">
                 <hr/>
                 <svg xmlns="http://www.w3.org/2000/svg" className="ml-48 h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
             </div>

             <div className="flex pr-32">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
            <p className="text-sm text-white font-bold self-start">
                Online
            </p>
            </div>
            <div className="overflow_y">
                <div className="flex justify-start items-center ml-7 p-2">
                    <div className="p-1 bg-purple-700 self-start rounded-xl">
                        <img src={fort2} alt="" className="h-10 w-10"/>
                    </div>
                    <div className="flex flex-col justify-center items center">
                        <p className="text-xs font-bold text-white self-start ml-5">
                            mark carling
                        </p>
                        <p className="text-xs font-extra-light self-start text-white ml-5">
                            lvl.102
                        </p>
                    </div>
                </div>

                <div className="flex justify-start items-center ml-7 p-2">
                    <div className="p-1 bg-green-400 self-start rounded-xl">
                        <img src={hulk} alt="" className="h-10 w-10"/>
                    </div>
                    <div className="flex flex-col justify-center items center">
                        <p className="text-xs font-bold text-white self-start ml-5">
                            mark carling
                        </p>
                        <p className="text-xs font-extra-light self-start text-white ml-5">
                            lvl.102
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-center ml-7 p-2">
                    <div className="p-1 bg-yellow-400 self-start rounded-xl">
                        <img src={cb} alt="" className="h-10 w-10"/>
                    </div>
                    <div className="flex flex-col justify-center items center">
                        <p className="text-xs font-bold text-white self-start ml-5">
                            mark carling
                        </p>
                        <p className="text-xs font-extra-light self-start text-white ml-5">
                            lvl.102
                        </p>
                    </div>
                </div>
                <div className="flex justify-start items-center ml-7 p-2">
                    <div className="p-1 bg-red-500 self-start rounded-xl">
                        <img src={fort4} alt="" className="h-10 w-10"/>
                    </div>
                    <div className="flex flex-col justify-center items center">
                        <p className="text-xs font-bold text-white self-start ml-5">
                            mark carling
                        </p>
                        <p className="text-xs font-extra-light self-start text-white ml-5">
                            lvl.102
                        </p>
                    </div>
                </div>
                </div>

                <div className="flex justify-center items-center h-20 rounded-xl w-full">
                    <div className="flex justify-between items-center rounded-xl w-48 h-10 bg-purple-500">
                        <div className="ml-3 flex flex-col items-center justify-center">
                            <p className="text-xs font-light text-white">
                                Speaking with 
                            </p>
                            <p className="text-sm font-bold text-white">
                                Arturito somio
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                        </svg>  
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                        </div>
                    </div>
                </div>
             
        </div>
    )
}

export default Sidebar
