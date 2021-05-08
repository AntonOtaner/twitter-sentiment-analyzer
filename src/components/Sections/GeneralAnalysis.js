//Packages
import styled from "styled-components";
import React, { useContext } from "react";

//Components
import Text from "../UI/Text";
import CombinedRating from "../UI/CombinedRating";

import { Context } from "../Layout/Context/Context";

const Container = styled.div`
  height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const GeneralAnalysis = React.forwardRef((props, ref) => {
  const data = useContext(Context);

  return (
    <Container ref={ref}>
      <Text type="header" margin="20px 30px 35px">
        General Analysis
      </Text>
      <CombinedRating
        positiveVal={data.tweets.analysis.positive.toFixed(1)}
        neutralVal={data.tweets.analysis.neutral.toFixed(1)}
        negativeVal={data.tweets.analysis.negative.toFixed(1)}
      />
    </Container>
  );
});

export default GeneralAnalysis;
