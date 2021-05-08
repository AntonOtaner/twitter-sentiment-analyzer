import styled from "styled-components";
import Text from "./Text";

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

const CheckboxContainer = styled.div`
  position: relative;
  width: 20px;
  height: 20px;

  & ${StyledCheckbox}:checked + ${Checkmark} {
    opacity: 1;
    transform: scale(1);
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 15px;
`;

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
