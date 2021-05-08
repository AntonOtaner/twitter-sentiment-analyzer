//Packages
import styled from "styled-components";
import { useContext } from "react";

//Components
import Text from "../UI/Text";
import Tweet from "../UI/Tweet";
import Rating from "../UI/Rating";

import { Context } from "../Layout/Context/Context";

const Container = styled.div`
  height: ${({ isMobile, height }) =>
    !isMobile && height && `calc(${height}px - 70px - 170px - 70px)`};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const TweetContainer = styled.div`
  height: ${({ isMobile, height }) =>
    !isMobile &&
    height &&
    `calc(${height}px - 70px - 170px - 70px - 29px - 20px - 35px)`};
  padding-left: ${({ isMobile }) => (!isMobile ? "30px" : "10px")};
  overflow-y: ${({ isMobile }) => (!isMobile ? "scroll" : "hidden")};
`;

const TweetBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

function TweetAnalysis({ isMobile, height }) {
  const data = useContext(Context);

  return (
    <Container isMobile={isMobile} height={height}>
      <Text type="header" margin="20px 30px 35px">
        Tweet Analysis
      </Text>

      <TweetContainer isMobile={isMobile} height={height}>
        {data.tweets.tweets.map((tweet, key) => (
          <TweetBlock key={key}>
            <Tweet width={!isMobile ? "67%" : "60%"} link={tweet.link}>
              {tweet.text}
            </Tweet>
            <Rating
              type={
                tweet.analysis.classification === "positive"
                  ? 1
                  : tweet.analysis.classification === "negative"
                  ? 3
                  : 2
              }
              width={!isMobile ? "20%" : "25%"}
              text={
                tweet.analysis.classification +
                "(" +
                Math.round(tweet.analysis.confidence) +
                ")"
              }
            />
          </TweetBlock>
        ))}
      </TweetContainer>
    </Container>
  );
}

export default TweetAnalysis;
