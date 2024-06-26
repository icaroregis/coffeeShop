import { createGlobalStyle } from "styled-components";
import { convertPixelsToRem } from "../utils";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }  

  body {
    background-color: ${({ theme }) => theme["gray-600"]};      
    -webkit-font-smoothing: antialiased;  
    overflow: hidden; 
  } 

  body, input, button { 
    font-family: "Roboto", sans-serif; 
    font-weight: 400;
    font-size: ${convertPixelsToRem(16)};   
  }
`;
