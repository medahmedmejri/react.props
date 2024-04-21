import React from "react";
import Player from "./Player.js";
import Bigdata from "./Bigdata.js";

function PlayerList(){
    
   return(
        <>
    {Bigdata.map((player,index)=>(
        
            <div key={index}>
            <Player 
            Image={player.Image} 
            Name={player.Name} 
            Team={player.Team}
            Nationality={player.Nationality}
            JersyNamber={player.JersyNamber}
             Age={player.Age}/>
            </div>
        
    ))}
        </>
    )
}
export  default PlayerList;