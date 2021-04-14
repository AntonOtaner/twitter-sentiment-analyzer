import styled from "styled-components";

import Rating from "./Rating";

const Container = styled.div`
  display: flex;
`;

function CombinedRating({ positiveVal, neutralVal, negativeVal }) {
  return (
    <Container>
      <Rating type={1} width={`${positiveVal}%`} text={`${positiveVal}%`} />
      <Rating type={2} width={`${neutralVal}%`} text={`${neutralVal}%`} />
      <Rating type={3} width={`${negativeVal}%`} text={`${negativeVal}%`} />
    </Container>
  );
}

export default CombinedRating;
