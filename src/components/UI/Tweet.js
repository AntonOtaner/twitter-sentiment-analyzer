// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Components
import Text from "./Text";

//Tweet styling
const StyledTweet = styled.div`
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: ${({ width }) => width && width};
  padding: 0px 20px 30px;
  position: relative;
`;

//Link styling
const StyledLink = styled(Text)`
  position: absolute;
  right: 20px;
`;

//Component for a tweet presented in the general analysis sections. Needs width of tweet, link of tweet, and tweet content
function Tweet({ width, link, children }) {
  return (
    <StyledTweet width={width}>
      <Text type="body">{children}</Text>
      <StyledLink type="link" href={link} target="_blank">
        View Tweet
      </StyledLink>
    </StyledTweet>
  );
}

export default Tweet;
