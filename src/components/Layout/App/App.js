// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled, { ThemeProvider } from "styled-components";

//Styles
import GlobalStyles from "../../../utils/styles/global";
import { theme } from "../../../utils/styles/theme";

//Routes
import Main from "../../../routes/Main";

//Data Provider
import { Provider } from "../Context/Context";

//General wrapper around application
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow-x: hidden;
  transition: color 0.2s ease-out, background 0.2s ease-out;
`;

//Main container fro the web application
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Provider>
          <Main />
          <GlobalStyles />
        </Provider>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
