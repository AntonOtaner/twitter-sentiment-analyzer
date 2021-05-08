// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Components
import Text from "./Text";

//Styling of checkbox
const StyledCheckbox = styled.input`
  position: absolute;
  appearance: none;
  height: 20px;
  width: 20px;
  border: 1px solid var(--border);
  border-radius: 5px;
  background-color: var(--white);
  transition: 0.1s all ease;
  opacity: 0.8;
  cursor: pointer;
  margin: auto;
`;

//Styling of checkmark
const Checkmark = styled.span`
  position: absolute;
  height: 12px;
  width: 12px;
  border-radius: 3px;
  background-color: var(--primary);
  opacity: 0;
  transform: scale(0);
  transition: 0.1s all ease;
  pointer-events: none;
  left: 4px;
  top: 4px;
`;

//Styling of checkbox container
const CheckboxContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  // Styled of checkmark based on if checkbox is checked
  & ${StyledCheckbox}:checked + ${Checkmark} {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled of general container
const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px;
`;

// Checkbox component requiring the type of checkbox (radio or checkbox), the onClick function, and the label of the checkbox
function Checkbox({ type, onClick, label, ...rest }) {
  return (
    <Container>
      <CheckboxContainer>
        <StyledCheckbox type={type} onClick={onClick} {...rest} />
        <Checkmark></Checkmark>
      </CheckboxContainer>
      <Text
        type="body"
        as="label"
        style={{ lineHeight: "20px" }}
        margin="0 0 0 10px"
      >
        {label}
      </Text>
    </Container>
  );
}

export default Checkbox;
