import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html {
        
        @media (max-width: 1080px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }

    body {
        background: ${theme.colors.white};
        -webkit-font-smoothing: antialiased; 
        scroll-behavior: smooth;
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: ${theme.fonts.weight.normal};
    }

    p {
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: ${theme.fonts.weight.bold};

    }

    ul {
        list-style: none;
    }

    button  {
        cursor: pointer; 
        border: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }

    [disabled] {
        cursor: not-allowed;
        opacity: 0.6;
    }
`;

export default GlobalStyle;
