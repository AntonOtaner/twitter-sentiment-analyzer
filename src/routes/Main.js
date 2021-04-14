//Packages
import { useState, useEffect, useRef } from "react";
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
  overflow: ${({ isMobile }) => (isMobile ? "visible" : "hidden")};
  position: relative;
  justify-content: space-between;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
  gap: ${({ isMobile }) => (isMobile ? "0px" : "100px")};
`;

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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const containerRef = useRef(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
    setHeight(containerRef.current.clientHeight);
  }

  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  let isMobile = width <= 1024;

  return (
    <Container isMobile={isMobile} ref={containerRef}>
      <Background isMobile={isMobile} height={height} />
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
