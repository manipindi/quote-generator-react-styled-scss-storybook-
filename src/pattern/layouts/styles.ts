import styled from "styled-components";

export const LayoutContainer = styled.div`
    /* max-width: 100%; */
    width: 1200px;
    min-height: 100vh;
    background-color: #E8ECF8;
    padding: 20px 0 80px 0;
    margin: 0 auto;


    @media screen and (min-width: 0px){
        width: 340px;
        overflow-x: hidden;
    }
    @media screen and (min-width: 768px){
        width: 700px;
    }

    @media screen and (min-width: 1280px){
        width: 1200px;
    }

    @media screen and (min-width: 1600px){
        width: 1500px;
    }
`