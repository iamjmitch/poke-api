import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
html {
  
} 
body {
    padding: 0;
    margin: 0;
     min-width: 350px;
     background:white;
     overflow-x:hidden;
  }
  *{
    -webkit-tap-highlight-color: transparent;
    padding: 0;
    margin: 0;
    box-sizing:border-box;
    font-family:"poppins";
  }
`

export default GlobalStyle
