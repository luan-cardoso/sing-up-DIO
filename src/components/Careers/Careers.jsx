import React from "react";
import { 
    MenuStyled, 
    ContentStyled,  
    CareerStyled,
    BtnStyled
    } from "./CareersStyled";

const CarrersMenu = () => {
    
    return (
        <MenuStyled>
            <BtnStyled>Carreiras</BtnStyled>

            <ContentStyled>
                <CareerStyled>
                    <p href="/">Back-End Developer</p>
                    <p href="/">Front-End Developer</p>
                    <p href="/">Mobile Developer</p>
                    <p href="/">DevOps Enginner</p>
                    <p href="/">Data Enginner</p>
                    <p href="/">Games Developer</p>
                    <p href="/">Blockchain Developer</p>
                </CareerStyled>
            </ContentStyled>
            
        </MenuStyled>
    )
};

export default CarrersMenu;