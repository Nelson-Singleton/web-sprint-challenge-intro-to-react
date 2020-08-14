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
            <h3>
                {card.birth_year}
            </h3>
            <h3>
                {card.homeworld}
            </h3>
        </div>

    );

};

export default Charactercard;



