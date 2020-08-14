import React, { useState, useEffect} from "react";
import Charactercard from './Charactercard'
import styled from 'styled-components';

const Character = (props) => {
   
    const { starWarsData, setData } = props;

    const StyledSection = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    `;
    
    

    return(
        
        <div>
            <h1>Heroes/Enemies of the Rebellion</h1>
            <StyledSection>


        
            {
                 starWarsData.map(ch => {
                    
                    return <Charactercard card = {ch} key = {ch.name} />
                 
                })
                     
                                
                    
            }
            </StyledSection>
        </div>

        

    );

};

export default Character;