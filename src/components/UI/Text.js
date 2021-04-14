import styled from "styled-components";

const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

const StyledHeader = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 1rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

const StyledBoldText = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

const StyledBodyText = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

const StyledLink = styled.a`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

function Text(props) {
  if (props.type === "title") {
    return <StyledTitle {...props}>{props.children}</StyledTitle>;
  } else if (props.type === "header") {
    return <StyledHeader {...props}>{props.children}</StyledHeader>;
  } else if (props.type === "label") {
    return <StyledLabel {...props}>{props.children}</StyledLabel>;
  } else if (props.type === "bold") {
    return <StyledBoldText {...props}>{props.children}</StyledBoldText>;
  } else if (props.type === "body") {
    return <StyledBodyText {...props}>{props.children}</StyledBodyText>;
  } else if (props.type === "link") {
    return <StyledLink {...props}>{props.children}</StyledLink>;
  }
}

export default Text;
