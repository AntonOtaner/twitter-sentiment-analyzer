//Packages
import styled from "styled-components";

//Styles
const StyledButton = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  padding: ${({ padding }) => padding && padding};
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

//Button Component (currently for zoom and center buttons)
function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
