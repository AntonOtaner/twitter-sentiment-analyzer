//Packages
import styled from "styled-components";

//Components
import DataInputs from "../components/Sections/DataInputs";
import GeneralAnalysis from "../components/Sections/GeneralAnalysis";
import TweetAnalysis from "../components/Sections/TweetAnalysis";

//Image
import bgImage from "../assets/images/gradient-background.jpeg";

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
  justify-content: space-between;
  gap: 100px;
`;

const Background = styled.img`
  position: absolute;
  z-index: -1;
  height: 100%;
  filter: blur(20px);
  transform: scale(1.1);
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;

const Right = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  gap: 70px;
  padding-top: 70px;
`;

function Main() {
  return (
    <Container>
      <Background src={bgImage} />
      <Left>
        <DataInputs></DataInputs>
      </Left>
      <Right>
        <GeneralAnalysis></GeneralAnalysis>
        <TweetAnalysis></TweetAnalysis>
      </Right>
    </Container>
  );
}

export default Main;
