// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

//Components
import Text from "../UI/Text";

// Styles for container
const Container = styled.div`
  position: relative;
  height: 60px;
`;

// Styles for slider
const StyledSlider = styled.input`
  position: absolute;
  bottom: 10px;
  appearance: none;
  width: 100%;
  height: 1px;
  background: var(--border);
  outline: none;
  &::-webkit-slider-thumb {
    appearance: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background: var(--primary-light);
    cursor: pointer;
  }
`;

// Styles for value above slider with help of https://css-tricks.com/value-bubbles-for-range-inputs/
const StyledValue = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);
  width: 60px;
  height: 30px;
  border: 1px solid var(--border);
  border-radius: 8px;
  top: 0px;
  left: ${({ leftValue }) => leftValue && leftValue};
  transform: translateX(-50%);
`;

// Slider component requiring minimum and maximum valye, value of slider, and update value function
function Slider({ min, max, value, updateValue }) {
  const [leftValue, setLeftValue] = useState("0%"); // left property for value above slider

  // Callback to calculate left value. useCallback is being used so tha the function is not regenerated on every update
  const calculateLeftValue = useCallback(
    (e) => {
      let val = 0;
      if (e) {
        e = val;
      } else {
        val = value;
      }
      let newVal = ((val - min) * 100) / (max - min);
      setLeftValue(`calc(${newVal}% + (${8 - newVal * 0.15}px))`);
    },
    [max, min, value]
  );

  //Update left value on start
  useEffect(() => {
    calculateLeftValue();
  }, [calculateLeftValue]);

  return (
    <Container>
      <StyledValue leftValue={leftValue}>
        <Text type="body">{value}</Text>
      </StyledValue>
      <StyledSlider
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          updateValue(e.target.value); //update slider value
          calculateLeftValue(e); // recompute left property of value above slider
        }}
      />
    </Container>
  );
}

export default Slider;
