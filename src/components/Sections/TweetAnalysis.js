//Packages
import styled from "styled-components";

//Components
import Text from "../UI/Text";
import Tweet from "../UI/Tweet";
import Rating from "../UI/Rating";

const Container = styled.div`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const TweetContainer = styled.div`
  padding-left: 30px;
`;

const TweetBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

function TweetAnalysis() {
  return (
    <Container>
      <Text type="header" margin="20px 30px 35px">
        Tweet Analysis
      </Text>

      <TweetContainer>
        <TweetBlock>
          <Tweet width="67%" link="https://google.com">
            Tweet text ...
          </Tweet>
          <Rating type={1} width="20%" text="Positive" />
        </TweetBlock>
        <TweetBlock>
          <Tweet width="67%" link="https://google.com">
            Tweet text ...
          </Tweet>
          <Rating type={1} width="20%" text="Positive" />
        </TweetBlock>
        <TweetBlock>
          <Tweet width="67%" link="https://google.com">
            Tweet text ...
          </Tweet>
          <Rating type={1} width="20%" text="Positive" />
        </TweetBlock>
      </TweetContainer>
    </Container>
  );
}

export default TweetAnalysis;
