import React, { useState, useEffect} from "react";
import App from '../App'
import Character from './Character'
import styled from 'styled-components';


const Charactercard = (props) => {
   
    const { card, setData } = props;

    const StyledDiv = styled.div`
    margin-top: 5%;
    width: 45%;
    text-align: center;
    border: 5px solid white;
    background-color: black;
    color: white;
    `;

    const StyledH2 = styled.h2`
    background-color: white;
    color: black;
    `;

    const StyledH3 = styled.h3`
    background-color: blue;
    
    `;

    return (        
        <StyledDiv>        
            <StyledH2>
                {`Name: ${card.name}`}
            </StyledH2>
            <StyledH3>
                {`Gender: ${card.gender}`}
            </StyledH3>
            <StyledH3>
                {`Height: ${card.height}`}
            </StyledH3>
            <StyledH3>
                {`Weight: ${card.mass}`}
            </StyledH3>
        </StyledDiv>
    );
};

export default Charactercard;



