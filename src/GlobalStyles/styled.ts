import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
    *{
        font-family: 'Open Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export default GlobalStyle;