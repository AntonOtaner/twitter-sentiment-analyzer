// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";
import React, { useContext } from "react";

//Components
import Text from "../UI/Text";
import CombinedRating from "../UI/CombinedRating";

// Data context
import { Context } from "../Layout/Context/Context";

//Styling for container
const Container = styled.div`
  height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

//General Analysis section where proportion of positive, neutral and negative tweets are displayed
//forwardRef is required so that we can access the reference from the parent component (to check if it being is show)
const GeneralAnalysis = React.forwardRef((props, ref) => {
  //get data from context
  const data = useContext(Context);

  return (
    <Container ref={ref}>
      <Text type="header" margin="20px 30px 35px">
        General Analysis
      </Text>
      {/* Pass data to CombinedRating component and round to one decimal place */}
      <CombinedRating
        positiveVal={data.tweets.analysis.positive.toFixed(1)}
        neutralVal={data.tweets.analysis.neutral.toFixed(1)}
        negativeVal={data.tweets.analysis.negative.toFixed(1)}
      />
    </Container>
  );
});

export default GeneralAnalysis;
