// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";

//Components
import DataInputs from "../components/Sections/DataInputs";
import GeneralAnalysis from "../components/Sections/GeneralAnalysis";
import TweetAnalysis from "../components/Sections/TweetAnalysis";
import ErrorMessage from "../components/Sections/ErrorMessage";

//Data Context
import { Context } from "../components/Layout/Context/Context";

//Image
import bgImage from "../assets/images/gradient-background.jpeg";

// Container styles
const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: ${({ isMobile }) => (isMobile ? "visible" : "hidden")};
  position: relative;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: ${({ isMobile }) => (isMobile ? "0px" : "100px")};
`;

// Background image styles
const Background = styled.div`
  background: url(${bgImage}) no-repeat center center fixed;
  background-size: cover;
  position: absolute;
  z-index: -1;
  width: 100%;
  height: ${({ height }) => height && height}px;
  filter: blur(20px);
  transform: ${({ isMobile }) => !isMobile && "scale(1.1)"};
`;

// Left container styles
const Left = styled.div`
  display: flex;
  flex: 1;
`;

// Right container styles
const Right = styled.div`
  display: flex;
  flex: 1.5;
  flex-direction: column;
  gap: 70px;
  padding-top: 70px;
`;

// Main route of the application
function Main() {
  // Get data from context
  const data = useContext(Context);

  const [width, setWidth] = useState(window.innerWidth); // width of the page
  const [height, setHeight] = useState(window.innerHeight); // height of the page
  const containerRef = useRef(null); // reference to container
  const generalAnalysisRef = useRef(null); //refernce to general analysis

  let isMobile = width <= 1024; // boolean that is true when width is smaller or equal to 1024

  //Update the width and height variables
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(containerRef.current.clientHeight);
  }

  //Check when the device is resized to update variables
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []); //runs at start

  //When data / generalAnalysisRef / is mobile is updated, see which panel should be displayed
  useEffect(() => {
    handleWindowSizeChange();
    if (data.tweets && generalAnalysisRef.current && isMobile) {
      generalAnalysisRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [data.tweets, generalAnalysisRef, isMobile]);

  return (
    <Container isMobile={isMobile} ref={containerRef}>
      <Background isMobile={isMobile} height={height} />
      <Left>
        <DataInputs></DataInputs>
      </Left>
      <Right>
        {/* Don't show anything if there is no data. If there is data and there are tweets, show an analysis. If there are no tweets, show an error message */}
        {data.tweets &&
          (data.tweets.tweets && data.tweets.tweets.length > 0 ? (
            <>
              <GeneralAnalysis ref={generalAnalysisRef}></GeneralAnalysis>
              <TweetAnalysis
                isMobile={isMobile}
                height={height}
              ></TweetAnalysis>
            </>
          ) : (
            <ErrorMessage />
          ))}
      </Right>
    </Container>
  );
}

export default Main;
