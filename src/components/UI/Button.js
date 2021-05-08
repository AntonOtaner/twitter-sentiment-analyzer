// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Styling of button
const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: ${({ padding }) => padding && padding}; // Allows for custom input
  margin: ${({ margin }) => margin && margin};
  border: none;
  border-radius: 8px;
  background-color: var(--primary);
  color: var(--white);
  cursor: pointer;
  display: block;
  &:disabled {
    cursor: default;
    filter: brightness(65%) !important;
  }
  &:focus:enabled {
    outline: none;
  }
  &:hover {
    filter: brightness(85%);
  }
  &:active {
    filter: brightness(65%);
  }
`;

//Component for button requiring children (usually text or an icon). ...rest allows for extra properties to be passed in
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
