//Packages
import { useState, useEffect, useContext, useRef } from "react";
import styled from "styled-components";

//Components
import DataInputs from "../components/Sections/DataInputs";
import GeneralAnalysis from "../components/Sections/GeneralAnalysis";
import TweetAnalysis from "../components/Sections/TweetAnalysis";
import ErrorMessage from "../components/Sections/ErrorMessage";

import { Context } from "../components/Layout/Context/Context";

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

//TODOS:
//FIX 0 tweets on server DONE
//FIX 0 tweets on frontend DONE
//Show better loading time status text DONE
//Make form so enter works DONE
//Change minimum and maximum values and change keywords text DONE
//Better error handling DONE
//Fix confidence accuracy DONE

//Add comments to server
//Add comments to front end
//Deploy front end
//Deploy backend

//Target (8 AM)

// Documentation

function Main() {
  const data = useContext(Context);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const containerRef = useRef(null);
  const generalAnalysisRef = useRef(null);

  let isMobile = width <= 1024;

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
