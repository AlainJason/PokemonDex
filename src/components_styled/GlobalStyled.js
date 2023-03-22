import { createGlobalStyle } from 'styled-components';
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
export const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Poppins', sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
    }
    body {
        font-family: 'Poppins', sans-serif;  
        margin: 0;
        padding: 0;
        //background-color: #727272;
    }   
    html {
        scroll-behavior: smooth;
    }
`;

export default GlobalStyles;
