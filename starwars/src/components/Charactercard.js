import React, { useState, useEffect} from "react";
import App from '../App'
import Character from './Character'


const Charactercard = (props) => {
   
    const { card, setData } = props;

    return (

        <div>
            <h2>
                {card.name}
            </h2>
            <h2>
                {card.gender}
            </h2>
            <h3>
                {card.height}
            </h3>
            <h3>
                {card.mass}
            </h3>
        </div>

    );

};

export default Charactercard;



