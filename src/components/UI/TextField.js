// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

// Styling for textfield
const StyledTextField = styled.input`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 10px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background-color: var(--white);
  color: var(--text);
  transition: 0.1s all ease;
  opacity: 0.8;
  ::placeholder {
    color: var(--text-lightest);
  }
  &:focus {
    outline: none;
    opacity: 1;
    ::placeholder {
      color: var(--text-lightest);
    }
  }
`;

//Component for textfield
function TextField({ children, ...rest }) {
  return <StyledTextField {...rest}>{children}</StyledTextField>;
}

export default TextField;
