// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";

//Styling for a title
const StyledTitle = styled.h1`
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for a title
const StyledHeader = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for a label
const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 1rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for bold text
const StyledBoldText = styled.p`
  font-weight: 500;
  font-size: 0.9rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for body text
const StyledBodyText = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for informative text
const StyledInfoText = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--text-light);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for a link
const StyledLink = styled.a`
  font-weight: 300;
  font-size: 0.8rem;
  color: var(--text);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Styling for an error message
const StyledError = styled.p`
  font-weight: 300;
  font-size: 0.9rem;
  color: var(--negative);
  margin: ${({ margin }) => margin && margin};
  text-align: ${({ align }) => align && align};
`;

//Component for different text styles
function Text(props) {
  //Load proper text style based on "type" input
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
  } else if (props.type === "info") {
    return <StyledInfoText {...props}>{props.children}</StyledInfoText>;
  } else if (props.type === "link") {
    return <StyledLink {...props}>{props.children}</StyledLink>;
  } else if (props.type === "error") {
    return <StyledError {...props}>{props.children}</StyledError>;
  }
}

export default Text;
