import { createGlobalStyle } from 'styled-components';

const GlobalReset = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        outline: none;
    }
    html {
        /* colors */
       --lighter-blue: #F4F8FB;
       --primary-blue: #0A84FF;
       --light-blue: #5AC8FA;
       --dark-gray: #464646;
       --light-gray: rgba(0, 0, 0, 0.5);

        /* space */
       --safe-area-padding: 0 25px 0 25px;
    }

    body {
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
        font-weight: 400;
        font-style: normal;    
        color: ${({theme}) => theme.colors.color4};
        background-color: ${({theme}) => theme.colors.color1};
        }

    body, input, button, textarea {
        font-family: "muli" ,sans-serif;
    }    

    button {
        cursor: pointer;
    }
`;

export default GlobalReset;
