// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import { createGlobalStyle } from "styled-components";

//styles to be applied through the whole app
export default createGlobalStyle`
    body {
      font-family: 'Poppins', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
      margin: 0;
      // Important colors
      --border: ${(props) => props.theme.colors.grey};
      --positive: ${(props) => props.theme.colors.green};
      --neutral: ${(props) => props.theme.colors.yellow};
      --negative: ${(props) => props.theme.colors.red};
      //Text
      --text: ${(props) => props.theme.colors.black};
      --text-light: ${(props) => props.theme.colors.darkGrey};
      --text-lightest: ${(props) => props.theme.colors.grey};
      //Button
      --primary: ${(props) => props.theme.colors.blue};
      --primary-light: ${(props) => props.theme.colors.lightBlue};
      //Shades
      --white: ${(props) => props.theme.colors.white};
    }

    /* to not drag images */
    img{
      user-drag: none; 
      user-select: none;
    }

    /* to make fonts smaller on mobile */
    html{
      @media (max-width: 768px) {
        font-size: 85%;
      }
    }

    /* Scrollbar styles */
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--white);
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--border);
    }
`;
