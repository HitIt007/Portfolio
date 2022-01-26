import React from "react";
import styled from "styled-components";
import MainSection from "./MainSection";


const BodyWrapper=styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`

function Body(){

    return(<BodyWrapper>
        <MainSection />
    </BodyWrapper>)
}

export default Body;