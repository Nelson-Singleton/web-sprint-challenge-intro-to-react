import React, { useState, useEffect} from "react";
import Charactercard from './Charactercard'

const Character = (props) => {
   
    const { starWarsData, setData } = props;

    return(

        <div>
            {
                 starWarsData.map(ch => {
                    
                    return <Charactercard card = {ch} key = {ch.name} />
                 
                })
                     
                                
               
            }
        </div>

    );

};

export default Character;