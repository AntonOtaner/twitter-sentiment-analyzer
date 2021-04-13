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
      --text-light: ${(props) => props.theme.colors.lightGrey};
      //Button
      --primary: ${(props) => props.theme.colors.blue};
      //Shades
      --white: ${(props) => props.theme.colors.white};
    }

    img{
      user-drag: none; 
      user-select: none;
    }

    html{
      @media (max-width: 768px) {
        font-size: 85%;
      }
    }
`;
