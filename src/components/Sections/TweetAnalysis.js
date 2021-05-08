// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";
import { useContext } from "react";

//Components
import Text from "../UI/Text";
import Tweet from "../UI/Tweet";
import Rating from "../UI/Rating";

// Data context
import { Context } from "../Layout/Context/Context";

//Styling for container
const Container = styled.div`
  height: ${({ isMobile, height }) =>
    !isMobile && height && `calc(${height}px - 70px - 170px - 70px)`};
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

//Styling for tweet container
const TweetContainer = styled.div`
  height: ${({ isMobile, height }) =>
    !isMobile &&
    height &&
    `calc(${height}px - 70px - 170px - 70px - 29px - 20px - 35px)`};
  padding-left: ${({ isMobile }) => (!isMobile ? "30px" : "10px")};
  overflow-y: ${({ isMobile }) => (!isMobile ? "scroll" : "hidden")};
`;

//Styling for a tweet block containing a tweet and the analysis of that tweet
const TweetBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

//Section of the app where specific tweets are displayed with their analysis
function TweetAnalysis({ isMobile, height }) {
  //get data from context
  const data = useContext(Context);

  return (
    //isMobile and height and needed to properly styling component
    <Container isMobile={isMobile} height={height}>
      <Text type="header" margin="20px 30px 35px">
        Tweet Analysis
      </Text>

      {/* isMobile and height and needed to properly styling component */}
      <TweetContainer isMobile={isMobile} height={height}>
        {/* loop through all tweets and render the tweet and the analysis */}
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
