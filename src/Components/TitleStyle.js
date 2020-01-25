import styled from 'styled-components'
import {moveInLeft, moveInRight} from './KeyFrameAnimation'
import '../App.css'
export const Conteiner = styled.div `
    width: 100vh;
    height: 100vh;
`;
export const SubConteiner = styled.div `
    width:100%;
    height:100%;

`
export const BoxText = styled.div `
    
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
    backface-visibility: hidden; 
    

`;




export const Name = styled.h1 `
    /* text-transform: uppercase; */
     display: block;
    font-size: 105px;
    font-weight: 800;
    letter-spacing: .2rem;
    font-family: 'Catamaran', sans-serif;
    font-weight: 5;
    animation: ${moveInRight} 3s ease-in;

`;

export const Text = styled.p `
    font-family: 'Yantramanav', sans-serif;
    font-size: 32px;
    font-weight: 400;
    display: block;
    font-weight: 600;
    letter-spacing: .2rem;
    text-align: justify;
    opacity: 0.85;
    margin-top: -60px;
    color:white;
    animation: ${moveInLeft} 3s ease-in;

`
export const Social = styled.div `
    width: 200px;
    font-size: 40px;
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-right: 1rem; */
    text-decoration: none;
    animation: ${moveInRight} 3s ease-in;
`;