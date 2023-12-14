import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        -webkit-font-smoothing: antialiased;        

        /* font-family: 'DM Sans', sans-serif;
        font-family: 'Poppins', sans-serif;
        font-family: 'Roboto', sans-serif; */
    }

    body, input, button, textarea{
        font-size: 1.6rem;
        outline: none;

        background-color: ${({ theme }) => theme.DARK_400};
        color: ${({ theme }) => theme.LIGHT_100};

    }

    body, input, button, textarea, p{
        font-family: 'Poppins', sans-serif;
    }

    label, input, textarea{
        font-family: "Roboto", sans-serif;
    }

    a{
        text-decoration: none;
        color: ${({ theme }) => theme.LIGHT_100};
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }

    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    button, a{
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, 
    a:hover{
        filter: brightness(0.9)
    }

    ::-webkit-scrollbar{
        width: 0;
    }

    ::-webkit-scrollbar-track{
        background-color: transparent;

    }

    ::-webkit-scrollbar-thumb{
        background-color: transparent;
    }
`;
