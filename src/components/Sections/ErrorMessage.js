//Packages
import styled from "styled-components";
import React, { useContext } from "react";

//Components
import Text from "../UI/Text";

import { Context } from "../Layout/Context/Context";

const Container = styled.div`
  height: 170px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
`;

const ErrorMessage = () => {
  const data = useContext(Context);

  const renderTitleText = () => {
    if (data.tweets.status === 400 || data.tweets.status === 500) {
      return "Error";
    } else if (data.tweets.tweets.length === 0) {
      return "No tweets found";
    }
  };

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
