import styled, { keyframes } from "styled-components";

export const HomeContainer = styled.div`
    margin-top: 2rem;
    height: 90vh;
`

export const HomeHeader = styled.div`
    position: absolute;
    top: 25%;
    left: 30%;
    backface-visibility: hidden;
`

const FromLeft = keyframes`
    0%{
        opacity: 0;
        transform: translateX(-10rem);
    }

    /* 50%{
        transform: translateX(-5rem);
    } */

    100%{
        opacity: 1;
        transform: translate(0);
    }
`

export const HomeMainHeader = styled.h1`
    color: #EEEEEE;
    font-size: 5rem;
    font-weight: 400;
    animation: ${FromLeft} 2s;
`

const FromRight = keyframes`
    0%{
        opacity: 0;
        transform: translateX(10rem);
    }
    100%{
        opacity: 1;
        transform: translate(0);
    }
`

export const HomeSubHeader = styled.h2`
    color: #EEEEEE;
    font-size: 4rem;
    font-weight: 400;
    animation: ${FromRight} 2s;
`
