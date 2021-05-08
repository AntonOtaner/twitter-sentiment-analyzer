// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Components
import Rating from "./Rating";

//Styling of container
const Container = styled.div`
  display: flex;
`;

//Components for combined ratings. The positive, neutral, and negative values are needed.
function CombinedRating({ positiveVal, neutralVal, negativeVal }) {
  return (
    // Only show rating if percentage is bigger than 0
    <Container>
      {positiveVal > 0 && (
        <Rating type={1} width={`${positiveVal}%`} text={`${positiveVal}%`} />
      )}
      {neutralVal > 0 && (
        <Rating type={2} width={`${neutralVal}%`} text={`${neutralVal}%`} />
      )}
      {negativeVal > 0 && (
        <Rating type={3} width={`${negativeVal}%`} text={`${negativeVal}%`} />
      )}
    </Container>
  );
}

export default CombinedRating;
