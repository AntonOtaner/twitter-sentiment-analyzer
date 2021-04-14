import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

import Text from "../UI/Text";

const Container = styled.div`
  position: relative;
  height: 60px;
`;

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
  left: ${({ leftValue }) => leftValue && leftValue}%;
`;

function Slider({ min, max, value, updateValue }) {
  const [leftValue, setLeftValue] = useState(0);

  const calculateLeftValue = useCallback(
    (e) => {
      let val = 0;
      if (e) {
        e = val;
      } else {
        val = value;
      }
      let newVal = ((val - min) * 100) / (max - min);
      setLeftValue(newVal - 0.05 * newVal - 6);
    },
    [max, min, value]
  );

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
          updateValue(e.target.value);
          calculateLeftValue(e);
        }}
      />
    </Container>
  );
}

export default Slider;
