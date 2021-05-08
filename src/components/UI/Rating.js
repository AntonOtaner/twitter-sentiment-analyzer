// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Components
import Text from "./Text";

//Styling of rating container
const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color && color};
  width: ${({ width }) => width && width};
  height: 40px;
  margin: ${({ margin }) => margin && margin};
`;

//Rating component needing type of rating (1,2,3), width of component, margin of component, and text inside component
function Rating({ type, width, margin, text }) {
  let color = ""; //color based on rating

  // set color based on the input "type"
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
