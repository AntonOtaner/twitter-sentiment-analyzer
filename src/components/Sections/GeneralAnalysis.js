//Packages
import styled from "styled-components";

//Components
import Text from "../UI/Text";
import CombinedRating from "../UI/CombinedRating";

const Container = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

function GeneralAnalysis() {
  return (
    <Container>
      <Text type="header" margin="20px 30px 35px">
        General Analysis
      </Text>
      <CombinedRating positiveVal={33} neutralVal={10} negativeVal={57} />
    </Container>
  );
}

export default GeneralAnalysis;
