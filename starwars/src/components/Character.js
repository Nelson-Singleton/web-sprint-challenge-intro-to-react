import React, { useState, useEffect} from "react";
import Charactercard from './Charactercard'

const Character = (props) => {
   
    const { starWarsData, setData } = props;

    return(

        <div>
            {
                 starWarsData.map(ch => {
                    return <h2> {`${ch.name} ------------ Born: ${ch.birth_year}`}</h2>  
                 
                })
                     
                                
               
            }
        </div>

    );

};

export default Character;