//Packages
import styled from "styled-components";

//Components
import DataInputs from "../components/Sections/DataInputs";
import GeneralAnalysis from "../components/Sections/GeneralAnalysis";
import TweetAnalysis from "../components/Sections/TweetAnalysis";

const Container = styled.div`
  flex: 1;
`;

function Main() {
  return (
    <Container>
      <DataInputs></DataInputs>
      <GeneralAnalysis></GeneralAnalysis>
      <TweetAnalysis></TweetAnalysis>
    </Container>
  );
}

export default Main;
