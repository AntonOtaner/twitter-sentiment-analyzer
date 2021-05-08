import styled from "styled-components";

import Rating from "./Rating";

const Container = styled.div`
  display: flex;
`;

function CombinedRating({ positiveVal, neutralVal, negativeVal }) {
  return (
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
