import styled from "styled-components";

import Text from "./Text";

const StyledTweet = styled.div`
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 8px;
  width: ${({ width }) => width && width};
  padding: 0px 20px 30px;
  position: relative;
`;

const StyledLink = styled(Text)`
  position: absolute;
  right: 20px;
`;

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
