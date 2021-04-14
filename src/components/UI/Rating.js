import styled from "styled-components";

import Text from "./Text";

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color && color};
  width: ${({ width }) => width && width};
  height: 40px;
  margin: ${({ margin }) => margin && margin};
`;

function Rating({ type, width, margin, text }) {
  let color = "";
  if (type === 1) {
    color = "var(--positive)";
  } else if (type === 2) {
    color = "var(--neutral)";
  } else if (type === 3) {
    color = "var(--negative)";
  }

  return (
    <RatingContainer color={color} width={width} margin={margin}>
      <Text type="bold">{text}</Text>
    </RatingContainer>
  );
}

export default Rating;
