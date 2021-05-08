// Anton Otaner , 1930028
// Friday , May 7
// R. Vincent , instructor
// Final Project

//Packages
import styled from "styled-components";
import React, { useContext } from "react";

//Components
import Text from "../UI/Text";

// Data context
import { Context } from "../Layout/Context/Context";

//Styling for container
const Container = styled.div`
  height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

//Section that will display an error message
const ErrorMessage = () => {
  //get data from context
  const data = useContext(Context);

  //render a title based on certain conditions
  const renderTitleText = () => {
    //Show "Error" if server responses with an error code
    if (data.tweets.status === 400 || data.tweets.status === 500) {
      return "Error";
    } else if (data.tweets.tweets.length === 0) {
      //Show "No tweets found" if there were no tweets in the response from the server
      return "No tweets found";
    }
  };

  //Render body text based on certain conditions (same as title)
  const renderBodyText = () => {
    if (data.tweets.status === 400) {
      return "When connecting to the server, there was an error getting the reponse.";
    } else if (data.tweets.status === 500) {
      return "When connecting to the server, there was an error processing the request.";
    } else if (data.tweets.tweets.length === 0) {
      return "No tweets were found with your search query. Please change your keyword.";
    }
  };

  return (
    <Container>
      <Text type="header" margin="20px 30px 35px">
        {renderTitleText()}
      </Text>
      <Text type="body" margin="0 0 0 30px">
        {renderBodyText()}
      </Text>
    </Container>
  );
};

export default ErrorMessage;
