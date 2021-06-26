import React, { useState } from 'react'

import './App.css';
import Header from './component/Header';
import Sidebar from "./component/Sidebar";
import Game from "./component/Game";
import hulk from "./Images/hulk.png"
import for1 from "./Images/fortnite1.png"
import for2 from "./Images/fortnite2.png"
import for3 from "./Images/fortnite3.png"
import dark from "./Images/dark.png"
import dota from "./Images/Dota.png"
import cb from "./Images/cbpunc.png"
import gta from "./Images/gta.png"
import witch from "./Images/witcher.png"
import for4 from "./Images/fort4.png"
import for5 from "./Images/fort5.png"
import pubg from "./Images/pubg.png"
function App() {
   
  const [isopen, setisopen] = useState(false);

   const toggle =()=>{
     setisopen(!isopen);
   }
  return (
    <div className="background-img  App flex flex-1  flex-col h-full w-full relative">
     
      <Header  toggle={toggle} />
      <p className="text-white text-3xl font-bold flex ml-5 my-2 z-10">our Picks</p>
            <div className="overflow_x ml-4">
                <Game image={cb} name="hulk" info="by marvels studio" color="bg-yellow-300" big={true}/>
                <Game image={hulk} name="hulk" info="by marvels studio" color="bg-green-400" big={true}/>
                
                <Game image={for2} name="hulk" info="by marvels studio" color="bg-purple-500" big={true}/>
                <Game image={dota} name="dark" info="by marvels studio" color="bg-blue-700" big={true}/>
                <Game image={gta} name="" info="by marvels studio" color="bg-green-700" big={true}/>
                <Game image={for3} name="hulk" info="by marvels studio" color="bg-yellow-500" big={true}/>
                <Game image={pubg} name="hulk" info="by marvels studio" color="bg-gray-500" big={true}/>
                <Game image={for4} name="hulk" info="by marvels studio" color="bg-red-500" big={true}/>
                <Game image={for5} name="hulk" info="by marvels studio" color="bg-blue-500 "big={true}/>
            </div>
            <p className="text-white flex ml-5 text-3xl font-bold items-start my-2 self-start z-10">RPG Games</p>
            <div className="overflow_x ml-4" >
                <Game image={witch} name="hulk" info="by marvels studio" color="bg-gray-400" />
                <Game image={for1} name="hulk" info="by marvels studio" color="bg-gray-300" />
                <Game image={for2} name="hulk" info="by marvels studio" color="bg-purple-500" />
                <Game image={dark} name="dark" info="by marvels studio" color="bg-yellow-900" />
                <Game image={gta} name="" info="by marvels studio" color="bg-green-700"/>
                <Game image={for3} name="hulk" info="by marvels studio" color="bg-yellow-500"/>
                <Game image={for4} name="hulk" info="by marvels studio" color="bg-red-500"/>
                <Game image={for5} name="hulk" info="by marvels studio" color="bg-blue-500"/>
                <Game image={for3} name="hulk" info="by marvels studio" color="bg-yellow-500"/>
            </div>
            <p className="text-white flex ml-5 text-3xl font-bold items-start my-2 self-start z-10">RPG Games</p>
            <div className="overflow_x " >
                <Game image={witch} name="hulk" info="by marvels studio" color="bg-gray-400" />
                <Game image={cb} name="hulk" info="by marvels studio" color="bg-yellow-300" />
                <Game image={for2} name="hulk" info="by marvels studio" color="bg-purple-500" />
                <Game image={dota} name="dark" info="by marvels studio" color="bg-blue-700" />
                <Game image={gta} name="Gta 5" info="by marvels studio" color="bg-green-700"/>
                <Game image={for3} name="hulk" info="by marvels studio" color="bg-yellow-500"/>
                <Game image={for4} name="hulk" info="by marvels studio" color="bg-red-500"/>
                <Game image={for5} name="hulk" info="by marvels studio" color="bg-blue-500"/>
                <Game image={pubg} name="hulk" info="by marvels studio" color="bg-gray-500"/>
            </div>
      

      <Sidebar isopen={isopen} toggle={toggle} />
      
      <div className="bg-black h-full w-full absolute bg-opacity-90"></div>
    </div>
  );
}

export default App;
